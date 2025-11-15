# Workflows Module - Deep Analysis

**Module:** Workflows (Main Application)
**Files:** `index.html`, `script.js`, `style.css`
**Purpose:** Create, manage, and track compliance workflows based on templates

---

## Overview

The Workflows module is the **core application**. It allows users to:
- Create workflows from templates (4 methods)
- Build workflow structures in Creation mode
- Track progress and completion in Execution mode
- Link workflows for synchronized structure updates
- Export workflows to project boards

---

## File: index.html

**Lines:** 149
**Key Dependencies:**
- Font Awesome 6.4.0
- Quill 1.3.6 (rich text editor)
- style.css
- script.js
- export-to-board-module.js

### Structure
```html
<div id="app-container">
  <!-- Top Bar -->
  <div class="top-bar">
    <div class="header-title">Compliance Manager v7.0</div>
    <div class="flows-bar">
      - Flow selector dropdown
      - Templates link
      - Boards link
      - Linked indicator
      - New/Rename/Unlink/Delete buttons
      - Export to Board button
    </div>
    <div class="mode-toggle">Creation ⟷ Execution</div>
  </div>

  <!-- Tag Filter Banner (execution only) -->
  <div id="tag-filter-banner" class="execution-only hidden"></div>

  <!-- Global Settings -->
  <div class="global-settings">
    - Enforce Sequential Order checkbox
    - Save Structure / Save Execution buttons
  </div>

  <!-- Workflow Content -->
  <div id="workflow-root"></div>

  <!-- Add Category Button -->
  <div id="add-category-btn-container" class="creation-only"></div>
</div>

<div id="modal-backdrop" class="hidden"></div>
```

### Key UI Elements
- **Creation-only** elements (.creation-only) - Hidden in execution mode
- **Execution-only** elements (.execution-only) - Hidden in creation mode
- Mode toggle switch (checkbox)
- Dual save buttons (structure vs execution)
- Linked indicator badge (shows if workflow is linked)
- Unlink button (only visible when linked)

---

## File: script.js

**Estimated Lines:** ~5000+
**Pattern:** DOMContentLoaded → Initialize → Render

### State Structure
```javascript
let appState = {
    theme: 'light',                    // 'light' | 'dark'
    currentMode: 'execution',          // 'creation' | 'execution'
    workflow: {                        // From workflows.json
        settings: { enforceSequence: true },
        flows: []                      // Array of workflow objects
    },
    executions: {                      // From executions.json
        flows: {}                      // { flowId: { completed: { unitId: boolean } } }
    },
    workflowLinks: {                   // From workflow-links.json
        links: []                      // Array of link groups
    },
    templates: [],                     // From templates.json
    currentFlowId: null,               // Currently selected workflow
    selectedActionPaths: {},           // For UI state
    expandedTextAreas: new Set(),      // For UI state
    activeTag: null                    // For tag filtering
};
```

### Workflow Data Structure
```javascript
{
  id: "flow-{timestamp}-{random}",
  name: "Workflow Name",
  templateId: "template-id",
  templateSnapshot: { /* full template object */ },
  data: [                            // Tree of units
    {
      id: "cat-{timestamp}-{random}",
      levelId: "level-rules",
      name: "Rule Name",
      icon: "icon-filename.png",     // Optional
      unitId: "R-01",                // Optional
      description: "Description",    // Optional
      tags: ["tag1", "tag2"],        // Optional
      grade: 0,                      // Optional
      subcategories: [               // Child units
        {
          id: "act-{timestamp}-{random}",
          levelId: "level-actions",
          name: "Action Name",
          description: "",
          tags: [],
          subcategories: [            // Evidences...
            {
              id: "evi-{timestamp}-{random}",
              levelId: "level-evidences",
              name: "Evidence Name",
              unitId: "E-01-01",
              description: "",
              tags: [],
              grade: 0,
              footer: {               // Attachments
                links: [{ text: "", url: "" }],
                images: ["url1", "url2"],
                notes: [{ title: "", content: "" }],
                comments: ["comment1", "comment2"]
              },
              subcategories: []
            }
          ]
        }
      ]
    }
  ],
  icon: null,
  description: "",
  enforceSequence: false,
  createdAt: "2025-11-15T00:00:00.000Z",
  updatedAt: "2025-11-15T00:00:00.000Z"
}
```

### Execution State Structure
```javascript
{
  flows: {
    "flow-id-1": {
      completed: {
        "unit-id-1": true,
        "unit-id-2": false,
        "unit-id-3": true
      }
    }
  }
}
```

### Workflow Links Structure
```javascript
{
  links: [
    {
      groupId: "link-{timestamp}-{random}",
      workflows: ["flow-id-1", "flow-id-2", "flow-id-3"]
    }
  ]
}
```

---

## Key Features

### 1. Workflow Creation (4 Methods)

#### Method 1: From Template (script.js:396)
```javascript
createFlowFromTemplate(name, templateId, providedTemplate)
- Creates workflow from existing template
- Deep copies template as snapshot
- Initializes empty data array
- Sets mode to creation
```

#### Method 2: Empty Workflow (script.js:631)
```javascript
createEmptyWorkflow(name)
- Finds or creates "Empty" template (1 level, all properties enabled)
- Calls createFlowFromTemplate with auto-generated template
- Quick start method for simple checklists
```

#### Method 3: Copy Workflow (script.js:584)
```javascript
copyWorkflow(newName, sourceFlowId)
- Deep clones source workflow (structure + data + attachments)
- Regenerates all unit IDs (to avoid conflicts)
- Copies execution state to new workflow
- Creates independent copy (no linking)
```

#### Method 4: Linked Workflow (script.js:677)
```javascript
createLinkedWorkflow(name, sourceFlowId)
- Deep clones source workflow
- Regenerates unit IDs
- Adds to link group with source workflow
- Saves link relationship to workflow-links.json
- Future structural changes sync across linked workflows
```

### 2. Dual Mode Operation

#### Creation Mode (script.js:76-84)
```javascript
applyModeStyles()
- Shows: Add buttons, delete buttons, rename, unlink, management controls
- Hides: Done checkboxes, tag filter banner, export buttons
- Enables: Name/description editing, structure modification
- Save button: "Save Structure"
```

#### Execution Mode
```javascript
- Shows: Done checkboxes, progress bars, tag filter, export buttons
- Hides: Add/delete buttons, structure controls
- Enables: Checking items as done, viewing progress
- Save button: "Save Execution"
```

### 3. Linked Workflows System

#### Link Management (script.js:192-237)
```javascript
getLinkedWorkflows(flowId)
- Returns array of workflow IDs in same link group

isWorkflowLinked(flowId)
- Returns boolean if workflow is in any link group

createLinkGroup(flowId1, flowId2)
- Creates new link group with 2 workflows

addToLinkGroup(flowId, existingFlowId)
- Adds workflow to existing link group

unlinkWorkflow(flowId)
- Removes workflow from its link group
- Cleans up empty groups
```

#### Propagation Logic (script.js:239-297)
```javascript
propagateToLinkedWorkflows(sourceFlowId)
- Called during saveWorkflow() if in creation mode
- Finds all linked workflows
- Deep clones source structure
- Regenerates IDs while mapping old→new
- Preserves execution state using ID map
- Only propagates if templates match
```

**What Gets Synchronized:**
✅ Unit structure (add/delete/rename units)
✅ Unit names and descriptions
✅ Unit icons and IDs
✅ Hierarchy changes

**What Stays Independent:**
❌ Done checkboxes (execution state)
❌ Grades
❌ Tags
❌ Attachments (links, images, notes, comments)
❌ Workflow-level properties

### 4. Dynamic Rendering

#### Main Render Flow (script.js:734)
```javascript
render()
  ↓
updateAllCumulativeGrades()  // Recalculate cumulative grades
  ↓
renderWorkflowInfo()         // Workflow-level UI (icon, description, settings)
  ↓
renderUnits()                // Recursive rendering of unit tree
  ↓
applyModeStyles()            // Show/hide mode-specific elements
```

#### Unit Rendering (script.js:845)
```javascript
renderUnit(unit, template, depth, path)
  ↓
renderUnitHeader()
  - Icon
  - Unit ID
  - Name (editable in creation, read-only in execution)
  - Tags
  - Done checkbox (execution only)
  - Grade input
  - Progress bar
  - Delete button (creation only)
  - Export button (execution only)
  ↓
renderUnitBody()
  - Description
  - Attachments
  ↓
renderUnitChildren()
  - Recursive call to renderUnits() for subcategories
  - Add child button (creation only)
```

### 5. Grade System

#### Cumulative Grades (script.js:339)
```javascript
calculateCumulativeGrade(unit, template, depth)
- If gradeCumulative = true: sum of all children
- If not cumulative or no children: own grade
- Recursive calculation down the tree

updateAllCumulativeGrades(units, template, depth)
- Called before every render
- Recalculates all cumulative grades
- Updates unit.grade property
```

**Example:**
```
Control Family (Grade: 75 - Cumulative)
  ├── Control 1 (Grade: 80)
  ├── Control 2 (Grade: 90)
  └── Control 3 (Grade: 55)
Parent grade = (80 + 90 + 55) / 3 = 75
```

### 6. Progress Bars (script.js:374)
```javascript
calculateProgress(unit, template, depth)
- Only for parent units with children
- Checks if child level has Done checkbox enabled
- Counts completed children
- Returns percentage: (completed / total) * 100
```

### 7. Tag Filtering

#### Tag Operations (script.js:1392-1462)
```javascript
filterByTag(tag)
- Sets appState.activeTag
- Re-renders with filter applied
- Shows tag filter banner

clearTagFilter()
- Clears appState.activeTag
- Re-renders full workflow

filterUnitsByTag(units, tag, template, depth)
- Returns units that have tag
- OR units with tagged descendants
- Recursive filtering preserves hierarchy
```

### 8. Attachments System

#### Four Types (script.js:1465-1133)
```javascript
1. Links
   - Text + URL
   - Opens in new tab
   - showAddLinkDialog()

2. Images
   - Image URLs only (no upload)
   - Thumbnail view with click to enlarge
   - showAddImageDialog()

3. Notes
   - Title + Rich text content (Quill editor)
   - HTML formatting support
   - showAddNoteDialog()

4. Comments
   - Plain text
   - Timestamped discussion
   - showAddCommentDialog()
```

---

## Data Flow

### Workflow Creation Flow
```
User clicks "New" → showCreateFlowDialog()
  ↓
User selects creation mode (Template/Empty/Copy/Linked)
  ↓
User fills form and submits
  ↓
Calls appropriate creation function
  ↓
Creates workflow object
  ↓
Adds to appState.workflow.flows
  ↓
Sets currentFlowId
  ↓
Sets mode = 'creation'
  ↓
render()
  ↓
saveWorkflow() → POST to save_workflow.php
```

### Structure Save Flow
```
User modifies workflow in creation mode
  ↓
Clicks "Save Structure"
  ↓
saveWorkflow()
  ↓
propagateToLinkedWorkflows() (if linked)
  ↓
fetch POST to save_workflow.php
  ↓
PHP writes workflows.json
  ↓
Success: alert("Structure saved!")
```

### Execution Save Flow
```
User checks items as done in execution mode
  ↓
toggleUnitCompletion()
  ↓
Updates appState.executions.flows[flowId].completed
  ↓
render() (update progress bars)
  ↓
User clicks "Save Execution"
  ↓
saveExecutions()
  ↓
fetch POST to save_executions.php
  ↓
PHP writes executions.json
  ↓
Success: alert("Execution state saved!")
```

### Linked Workflow Propagation
```
User modifies linked workflow structure
  ↓
Clicks "Save Structure"
  ↓
saveWorkflow()
  ↓
propagateToLinkedWorkflows(currentFlowId)
  ↓
For each linked workflow:
  - Deep clone source structure
  - Map old IDs to new IDs
  - Preserve execution state using ID map
  - Update workflow.data
  ↓
saveWorkflow() writes all workflows
```

---

## Critical Issues & Bugs

### 🔴 Critical

1. **Path Calculation Bug in deleteUnit** (script.js:1247)
   ```javascript
   const depth = (path.match(/subcategories/g) || []).length;
   ```
   - Calculates depth by counting "subcategories" in path
   - Fragile and error-prone
   - Should use template depth tracking

2. **No Concurrent Edit Protection**
   - Multiple users can edit same workflow
   - Last save wins (overwrites previous changes)
   - Lost work in collaborative scenarios

3. **Execution State Orphan Risk**
   - If unit is deleted, execution state remains in executions.json
   - Orphaned data accumulates
   - No cleanup mechanism

4. **Link Propagation Race Condition**
   - If two users edit linked workflows simultaneously
   - Conflicting structural changes may occur
   - No merge conflict resolution

### ⚠️ High

5. **Template Change After Workflow Creation**
   - Workflows store template snapshots (GOOD)
   - But template ID still references original
   - Deleting template doesn't break workflow (GOOD)
   - But unclear to user what template was used if deleted

6. **Hardcoded Icon List**
   - Same as Template Builder
   - Requires code update for new icons

7. **No Undo/Redo**
   - Deleting unit is irreversible
   - No way to recover from mistakes
   - Must rely on external backups

8. **JSON Parse/Stringify for Deep Copy**
   - Loses functions, undefined, symbols, circular refs
   - Generally OK for data, but fragile

### 🔶 Medium

9. **Mode Switch Without Save Warning**
   - User can switch modes without saving
   - Changes may be lost
   - Should prompt "Save changes first?"

10. **Tag Filter State Not Persisted**
    - Reloading page clears active tag filter
    - Poor UX for long sessions

11. **Progress Bar Doesn't Update Live**
    - Must click checkbox then re-render
    - Should update instantly

12. **Quill Editor Instance Management**
    - Only one global quillEditor variable
    - Multiple notes with editors may conflict
    - Should use per-note instances

---

## Missing Features

### ❌ Not Implemented

- [ ] Drag-drop reordering of units
- [ ] Keyboard shortcuts (Ctrl+S to save, etc.)
- [ ] Bulk operations (select multiple units)
- [ ] Workflow templates (save workflow as template)
- [ ] Workflow versioning (history of changes)
- [ ] Workflow duplication with name prompt
- [ ] Search within workflow
- [ ] Print/PDF export
- [ ] Audit log (who changed what when)
- [ ] Notifications for linked workflow changes
- [ ] Workflow archiving (soft delete)
- [ ] Workflow starring/favoriting
- [ ] Custom workflow properties (beyond template)
- [ ] Workflow sharing/permissions
- [ ] Real-time collaboration
- [ ] Conflict resolution for linked workflows
- [ ] Workflow comparison (diff view)
- [ ] Template version upgrade path

---

## Performance Considerations

### Current Performance
✅ Fast for <100 units per workflow
⚠️ May slow with >1000 units (full re-render on every change)
❌ No virtualization for large workflows

### Optimization Opportunities
- Virtual scrolling for large unit lists
- Incremental rendering (only update changed units)
- Debounce render() calls
- Memoize cumulative grade calculations
- Lazy load attachments
- Paginate execution state

---

## Security Issues

### Current Vulnerabilities
❌ **XSS in unit names/descriptions** - No HTML escaping
❌ **XSS in attachments** - User-provided HTML rendered directly
❌ **No CSRF protection** on save endpoints
❌ **No authentication** - Anyone can access/modify
❌ **No input validation** on backend
❌ **Path traversal** in icon selection (theoretical)

---

## Backend: PHP Endpoints

All follow same pattern:
```php
<?php
header('Content-Type: application/json');
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Save to file
file_put_contents('data/{filename}.json', json_encode($data, JSON_PRETTY_PRINT));

echo json_encode(['status' => 'success']);
?>
```

**Issues:**
❌ No validation
❌ No authentication
❌ No file locking
❌ No backup before overwrite
❌ No error handling

---

## Testing Recommendations

### Critical Tests Needed
- [ ] Linked workflow propagation with ID mapping
- [ ] Execution state preservation during propagation
- [ ] Cumulative grade calculation accuracy
- [ ] Progress bar percentage calculation
- [ ] Tag filtering with nested hierarchy
- [ ] Copy workflow with all data
- [ ] Delete unit with children (cascade)
- [ ] Mode switch with unsaved changes

---

## Conclusion

The Workflows module is the **most complex and feature-rich** part of the codebase. It successfully implements:
- ✅ Dynamic template-based structure
- ✅ Dual-mode operation
- ✅ Linked workflows with synchronization
- ✅ Rich attachments system
- ✅ Tag filtering
- ✅ Grade and progress tracking

However, it suffers from:
- ❌ **Critical:** No concurrent edit protection
- ❌ **Critical:** Security vulnerabilities (XSS, no auth)
- ⚠️ **High:** No undo/redo
- ⚠️ **High:** Performance issues with large workflows
- ⚠️ **Medium:** Complex path calculation logic prone to bugs

**Readiness:** Advanced prototype, NOT production-ready
**Confidence in Understanding:** 85%
