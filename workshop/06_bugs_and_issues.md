# Known Bugs and Issues

**Analysis Date:** 2025-11-15
**Purpose:** Comprehensive list of identified bugs, potential issues, and risks

---

## Severity Classification

- 🔴 **CRITICAL** - Data loss, security breach, app crash
- 🟠 **HIGH** - Major functionality broken, poor UX
- 🟡 **MEDIUM** - Minor functionality issues, workarounds exist
- 🔵 **LOW** - Cosmetic, edge cases, minor inconvenience

---

## Security Issues

### 🔴 CRITICAL-SEC-001: XSS Injection Vulnerability
**Module:** All (Workflows, Template Builder, Boards)
**Location:** Rendering functions throughout

**Description:**
User-provided content is rendered without HTML escaping, allowing script injection.

**Example:**
```javascript
// script.js:898
`<span class="unit-name-display">${unit.name || level.singularName}</span>`

// If unit.name = '<img src=x onerror=alert("XSS")>'
// Malicious code executes
```

**Impact:**
- Steal user data
- Hijack sessions
- Deface application
- Install malware

**Exploitation:**
1. User creates workflow with malicious name
2. Other users view workflow
3. Malicious code executes in their browsers

**Fix:**
```javascript
// Use DOMPurify or manual escaping:
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Then:
`<span class="unit-name-display">${escapeHtml(unit.name)}</span>`
```

**Priority:** IMMEDIATE FIX REQUIRED

---

### 🔴 CRITICAL-SEC-002: No Authentication System
**Module:** All
**Location:** Backend (PHP files)

**Description:**
No user authentication. Anyone with URL can access/modify data.

**Impact:**
- Unauthorized access to sensitive workflows
- Data tampering
- Data deletion
- Compliance violations

**Current State:**
```php
// save_workflow.php
<?php
// NO authentication check
$data = json_decode(file_get_contents('php://input'), true);
file_put_contents('data/workflows.json', json_encode($data, JSON_PRETTY_PRINT));
?>
```

**Fix:**
Implement authentication system:
- Session-based: PHP sessions with login
- Token-based: JWT tokens
- OAuth: Google/Microsoft SSO

**Priority:** REQUIRED FOR PRODUCTION

---

### 🔴 CRITICAL-SEC-003: CSRF Vulnerability
**Module:** All
**Location:** All forms and AJAX requests

**Description:**
No CSRF tokens on forms or AJAX requests. Attackers can forge requests.

**Attack Scenario:**
```html
<!-- Attacker's website -->
<form action="https://yourapp.com/save_workflow.php" method="POST">
    <input name="workflows" value='{"flows":[]}'>  <!-- Delete all workflows -->
</form>
<script>document.forms[0].submit();</script>
```

**Fix:**
Add CSRF tokens:
```php
// In PHP:
session_start();
$_SESSION['csrf_token'] = bin2hex(random_bytes(32));
```

```javascript
// In JavaScript:
fetch('save_workflow.php', {
    method: 'POST',
    headers: {
        'X-CSRF-Token': getCsrfToken()
    },
    body: JSON.stringify(data)
})
```

**Priority:** REQUIRED FOR PRODUCTION

---

### 🔴 CRITICAL-SEC-004: Direct File Access
**Module:** Backend
**Location:** data/*.json files

**Description:**
JSON files are directly accessible via URL without authentication.

**Example:**
```
https://yourapp.com/data/workflows.json
→ Returns all workflow data (no auth required!)
```

**Fix:**
Move data/ outside web root or add .htaccess:
```apache
# .htaccess in /data/
Order Deny,Allow
Deny from all
```

**Priority:** IMMEDIATE FIX REQUIRED

---

## Data Loss Risks

### 🔴 CRITICAL-DATA-001: Concurrent Edit Conflicts
**Module:** All
**Location:** Save operations

**Description:**
Last write wins. Multiple users editing simultaneously causes data loss.

**Scenario:**
```
10:00:00 - User A loads workflows.json (version 1)
10:00:05 - User B loads workflows.json (version 1)
10:01:00 - User A saves changes (version 2)
10:01:30 - User B saves changes (version 2, overwrites User A's changes)
Result: User A's work is lost
```

**Current Code:**
```php
// save_workflow.php - NO conflict detection
file_put_contents('data/workflows.json', json_encode($data, JSON_PRETTY_PRINT));
```

**Fix:**
Implement optimistic locking:
```javascript
// Add version to workflow:
{
    id: "flow-1",
    version: 5,  // Increment on each save
    data: [...]
}

// Backend checks version:
if ($incoming_version !== $current_version) {
    return error("Conflict detected. Refresh and retry.");
}
```

**Priority:** HIGH (for multi-user environments)

---

### 🔴 CRITICAL-DATA-002: No Backup System
**Module:** Backend
**Location:** All save operations

**Description:**
File overwrites with no backup. Corruption or accidental delete = permanent data loss.

**Current Code:**
```php
// Overwrites file directly, no backup
file_put_contents('data/workflows.json', json_encode($data, JSON_PRETTY_PRINT));
```

**Fix:**
Backup before overwrite:
```php
// Create backup
copy('data/workflows.json', 'data/backups/workflows_' . time() . '.json');

// Then overwrite
file_put_contents('data/workflows.json', json_encode($data, JSON_PRETTY_PRINT));

// Clean old backups (keep last 50)
```

**Priority:** HIGH

---

### 🟠 HIGH-DATA-003: Execution State Orphans
**Module:** Workflows
**Location:** executions.json

**Description:**
Deleting units doesn't clean up execution state. Orphaned data accumulates.

**Example:**
```javascript
// Workflow has unit: unit-123
// Execution state: { "unit-123": true }

// User deletes unit-123 from workflow
// Execution state still has: { "unit-123": true }  ← Orphan!
```

**Impact:**
- Growing file size
- Confusion
- Memory leaks (if loaded into memory)

**Fix:**
```javascript
window.deleteUnit = (path) => {
    const unit = getObjectByPath(path, flow);

    // Clean execution state
    const exec = ensureExecFlow(flow.id);
    function cleanupExecution(u) {
        delete exec.completed[u.id];
        if (u.subcategories) {
            u.subcategories.forEach(cleanupExecution);
        }
    }
    cleanupExecution(unit);

    // Then delete unit
    parent.splice(key, 1);
    render();
};
```

**Priority:** MEDIUM

---

## Workflow Bugs

### 🟠 HIGH-WF-001: Path Calculation Fragility
**Module:** Workflows
**Location:** script.js:1247 (deleteUnit function)

**Description:**
Depth calculated by counting "subcategories" in path string. Fragile and error-prone.

**Code:**
```javascript
const depth = (path.match(/subcategories/g) || []).length;
```

**Problem:**
- If path format changes, this breaks
- If "subcategories" appears in property name, miscounts
- No validation

**Fix:**
Track depth explicitly during rendering:
```javascript
renderUnit(unit, template, depth, path)
// Store depth as data attribute
<div class="unit" data-depth="${depth}" data-path="${path}">
```

```javascript
window.deleteUnit = (path) => {
    const unitEl = document.querySelector(`[data-path="${path}"]`);
    const depth = parseInt(unitEl.dataset.depth);
    // Use depth directly
}
```

**Priority:** HIGH (refactoring recommended)

---

### 🟠 HIGH-WF-002: Linked Workflow Conflict Race Condition
**Module:** Workflows
**Location:** propagateToLinkedWorkflows()

**Description:**
If two users edit different linked workflows simultaneously, conflicting propagations may occur.

**Scenario:**
```
User A edits Workflow 1 (linked to 2, 3)
User B edits Workflow 2 (linked to 1, 3)

Both save at same time:
- A propagates to 2, 3
- B propagates to 1, 3

Workflow 3 receives conflicting structures
Last one wins (data loss)
```

**Fix:**
- Implement locking on link groups
- Detect conflicts on save
- Merge conflicts (complex)
- OR: Designate one workflow as "master" (simpler)

**Priority:** HIGH (for collaborative use)

---

### 🟡 MEDIUM-WF-003: Grade Calculation Performance
**Module:** Workflows
**Location:** updateAllCumulativeGrades()

**Description:**
Recursive grade calculation runs on every render. Slow for large workflows.

**Code:**
```javascript
// Called before EVERY render:
render() {
    updateAllCumulativeGrades(flow.data, template, 0);
    // ... rendering
}
```

**Impact:**
- 100 units: Fast
- 1000 units: Noticeable lag
- 10000 units: Slow

**Fix:**
Memoize or only recalculate when grades change:
```javascript
let gradeCacheDirty = false;

window.updateUnitProperty = (path, property, value) => {
    unit[property] = value;
    if (property === 'grade') {
        gradeCacheDirty = true;
    }
};

render() {
    if (gradeCacheDirty) {
        updateAllCumulativeGrades(...);
        gradeCacheDirty = false;
    }
    // ...
}
```

**Priority:** MEDIUM (optimization)

---

### 🟡 MEDIUM-WF-004: Mode Switch Without Save Warning
**Module:** Workflows
**Location:** Mode toggle checkbox

**Description:**
Switching creation ↔ execution without saving doesn't warn user.

**Scenario:**
```
User modifies workflow structure
User accidentally toggles to execution mode
Changes not saved
User continues working, thinking changes are saved
Later: saves execution state, but structure changes lost
```

**Fix:**
```javascript
modeSwitch.addEventListener('change', (e) => {
    if (hasUnsavedChanges()) {
        if (!confirm('You have unsaved changes. Switch mode anyway?')) {
            e.preventDefault();
            modeSwitch.checked = !modeSwitch.checked;
            return;
        }
    }
    toggleMode();
});
```

**Priority:** MEDIUM (UX improvement)

---

### 🟡 MEDIUM-WF-005: Quill Editor Instance Conflict
**Module:** Workflows
**Location:** showAddNoteDialog()

**Description:**
Only one global `quillEditor` variable. Multiple notes cause conflicts.

**Code:**
```javascript
// Global:
let quillEditor = null;

window.showAddNoteDialog = (path) => {
    quillEditor = new Quill('#note-editor', { ... });
    // If called again before closing, old instance leaks
};
```

**Fix:**
Create instance per modal:
```javascript
window.showAddNoteDialog = (path) => {
    openModal('Add Note', html, () => {
        const editor = new Quill('#note-editor', { ... });
        // Destroy on modal close
    });
};
```

**Priority:** MEDIUM

---

## Template Builder Bugs

### 🟡 MEDIUM-TB-001: No Validation Display
**Module:** Template Builder
**Location:** renderTemplateBuilder()

**Description:**
Validation container exists in UI but never populated with errors.

**Code:**
```javascript
<div id="validation-messages" class="validation-messages"></div>
<!-- Never used! -->
```

**Fix:**
```javascript
window.saveTemplate = () => {
    const errors = validateTemplate();
    if (errors.length > 0) {
        const container = document.getElementById('validation-messages');
        container.innerHTML = errors.map(err =>
            `<div class="error">${err}</div>`
        ).join('');
        return;
    }
    // ...
};
```

**Priority:** LOW (validation works, just not displayed)

---

### 🟡 MEDIUM-TB-002: Hardcoded Icon List
**Module:** Template Builder, Workflows
**Location:** getAvailableIcons()

**Description:**
Icon list is hardcoded. Adding new icons requires code update.

**Code:**
```javascript
const getAvailableIcons = async () => {
    return [
        '3d-glasses.png', 'application-01.png', // ... 80+ icons
    ];
};
```

**Fix:**
PHP endpoint to scan directory:
```php
// get_icons.php
<?php
$icons = array_diff(scandir('icons/'), ['.', '..']);
echo json_encode(['icons' => array_values($icons)]);
?>
```

```javascript
const getAvailableIcons = async () => {
    const res = await fetch('get_icons.php');
    const data = await res.json();
    return data.icons;
};
```

**Priority:** LOW (nice-to-have)

---

## Boards (PPM) Bugs

### 🟠 HIGH-PPM-001: Activity Log Not Rendered
**Module:** Boards
**Location:** logActivity() exists, but no UI

**Description:**
Activity logging works but there's no UI to view activity.

**Code:**
```javascript
logActivity(board, cardId, 'card.moved', { ... });
// Logs to board.activity array
// But no function to render activity timeline
```

**Impact:**
- No audit trail visibility
- No change history
- Poor collaboration experience

**Fix:**
Create activity timeline component:
```javascript
const renderActivityTimeline = (board) => {
    return board.activity.map(log => `
        <div class="activity-item">
            <span class="timestamp">${formatDate(log.timestamp)}</span>
            <span class="user">${log.userId}</span>
            <span class="action">${log.action}</span>
        </div>
    `).join('');
};
```

**Priority:** MEDIUM (feature gap)

---

### 🟡 MEDIUM-PPM-002: Drag-Drop Performance
**Module:** Boards
**Location:** Card movement

**Description:**
Full board re-render on every card drop. Slow with many cards.

**Impact:**
- 50 cards: Acceptable
- 200 cards: Noticeable lag
- 500+ cards: Poor UX

**Fix:**
Only update moved card DOM:
```javascript
onDrop = (e) => {
    // Instead of: render();

    // Just update the two cards affected:
    updateCardDOM(movedCardId);
    updateColumnCardCount(fromColumnId);
    updateColumnCardCount(toColumnId);
};
```

**Priority:** MEDIUM (optimization)

---

## General Issues

### 🟡 MEDIUM-GEN-001: No Error Boundaries
**Module:** All
**Location:** Global

**Description:**
JavaScript errors crash entire app. No graceful error handling.

**Fix:**
```javascript
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);

    // Show user-friendly message
    showErrorNotification('An error occurred. Please refresh the page.');

    // Log to server for debugging
    logErrorToServer(event.error);

    // Prevent default crash
    event.preventDefault();
});
```

**Priority:** MEDIUM

---

### 🟡 MEDIUM-GEN-002: Deep Copy Limitations
**Module:** All
**Location:** deepCopy() function

**Description:**
Uses JSON.parse(JSON.stringify()). Loses functions, undefined, symbols, circular refs.

**Code:**
```javascript
const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));
```

**Limitations:**
- Functions: Lost
- undefined values: Converted to null
- Dates: Converted to strings
- RegExp: Converted to {}
- Circular references: Throws error

**Impact:**
- Generally OK for data objects
- Risk if workflow data contains functions (unlikely)

**Fix:**
Use structuredClone() (modern browsers):
```javascript
const deepCopy = (obj) => structuredClone(obj);
```

**Priority:** LOW (works for current use case)

---

### 🟡 MEDIUM-GEN-003: ID Generation Collisions
**Module:** All
**Location:** generateId()

**Description:**
IDs use timestamp + random. Theoretical collision risk.

**Code:**
```javascript
const generateId = (prefix) =>
    `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
```

**Collision Probability:**
- Same millisecond + same random (36^5 = 60M combinations)
- Very low but non-zero

**Fix:**
Use UUID v4:
```javascript
const generateId = (prefix) => {
    return `${prefix}-${crypto.randomUUID()}`;
    // Or use uuid library: `${prefix}-${uuidv4()}`
};
```

**Priority:** LOW (collision extremely unlikely in practice)

---

## Summary Statistics

**Total Issues Identified:** 17

**By Severity:**
- 🔴 CRITICAL: 6
- 🟠 HIGH: 4
- 🟡 MEDIUM: 7
- 🔵 LOW: 0

**By Category:**
- Security: 4 critical
- Data Loss: 3 critical/high
- Workflows: 5
- Template Builder: 2
- Boards: 2
- General: 3

**Priority Classification:**
1. **IMMEDIATE FIX REQUIRED:** Security issues (4 items)
2. **REQUIRED FOR PRODUCTION:** Backend improvements (2 items)
3. **HIGH PRIORITY:** Data loss prevention (3 items)
4. **MEDIUM PRIORITY:** Bug fixes and optimizations (7 items)
5. **LOW PRIORITY:** Nice-to-haves (1 item)

---

## Testing Plan (When Tests Implemented)

### Security Tests
- [ ] Test XSS injection in all input fields
- [ ] Test CSRF attack scenarios
- [ ] Test direct file access (should be blocked)
- [ ] Test SQL injection (when database added)

### Data Integrity Tests
- [ ] Concurrent edit detection
- [ ] Backup creation verification
- [ ] Orphan cleanup validation
- [ ] ID uniqueness verification

### Functional Tests
- [ ] Linked workflow propagation
- [ ] Cumulative grade calculation
- [ ] Tag filtering hierarchy
- [ ] Export to board data mapping

### Performance Tests
- [ ] Render 1000+ unit workflow
- [ ] Drag-drop 500+ cards
- [ ] Grade calculation benchmark
- [ ] Large file save times

---

## Conclusion

The codebase has **significant security vulnerabilities** that must be addressed before production deployment. The core functionality is solid, but **lacks production-ready error handling, concurrency control, and data protection**.

**Recommended Fix Order:**
1. **Security** (CRITICAL - blocks production)
2. **Data integrity** (HIGH - prevents data loss)
3. **Bug fixes** (MEDIUM - improves stability)
4. **Optimizations** (LOW - enhances UX)

**Estimated Fix Time:**
- Security: 2-3 weeks
- Backend refactor: 3-4 weeks
- Bug fixes: 1-2 weeks
- **Total:** 6-9 weeks for production readiness

**Confidence in Assessment:** 90%
