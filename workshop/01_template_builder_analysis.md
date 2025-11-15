# Template Builder Module - Deep Analysis

**Module:** Template Builder
**Files:** `template-builder.html`, `template-builder.js`, `template-builder.css`
**Purpose:** Design and manage workflow template structures

---

## Overview

The Template Builder allows users to create reusable workflow templates that define:
- Number of hierarchical levels (1-10)
- Names for each level (singular/plural)
- Properties available at each level
- Workflow-level configuration options

---

## File: template-builder.html

**Lines:** 52
**Dependencies:**
- Font Awesome 6.4.0 (CDN)
- style.css (shared styles)
- template-builder.css (module styles)
- template-builder.js (module logic)

### Structure
```html
<body>
  <div id="app-container">
    <div class="top-bar">
      <!-- Header with back link and theme toggle -->
    </div>
    <div id="template-content">
      <!-- Dynamic content rendered by JS -->
    </div>
  </div>

  <div id="modal-backdrop" class="hidden">
    <!-- Reusable modal container -->
  </div>
</body>
```

### Key Features
- Minimal static HTML
- Dynamic rendering via JavaScript
- Modal system for dialogs
- Theme toggle button
- Back navigation to workflows

---

## File: template-builder.js

**Estimated Lines:** ~1500+
**Pattern:** Module + Global Functions

### State Structure
```javascript
let state = {
    templates: [],           // Array of template objects
    currentTemplate: null,   // Template being edited
    editMode: null,          // null | 'create' | 'edit'
    theme: 'light',          // 'light' | 'dark'
    availableIcons: []       // Hardcoded list of icon filenames
};
```

### Template Data Structure
```javascript
{
  id: "template-{timestamp}-{random}",
  name: "Template Name",
  description: "Template description",
  isDefault: false,
  version: "1.0.0",
  createdAt: "2025-11-11T00:00:00.000Z",
  createdBy: "user",
  updatedAt: "2025-11-11T00:00:00.000Z",
  icon: null,

  workflowConfig: {
    enableIcon: false,
    enableDescription: true,
    enableSequentialOrder: true
  },

  levels: [
    {
      id: "level-{timestamp}-{random}",
      order: 0,
      name: "Rules",
      pluralName: "Rules",
      singularName: "Rule",
      description: "Control categories",
      icon: null,
      color: "#6366f1",

      unitConfig: {
        enableIcon: true,
        enableUnitId: false,
        enableName: true,
        enableDescription: false,
        enableTags: true,
        enableDone: false,
        enableGrade: false,
        gradeCumulative: false,
        enableProgressBar: true,
        enableLinks: false,
        enableImages: false,
        enableNotes: false,
        enableComments: false
      }
    },
    // ... more levels
  ]
}
```

### Key Functions

#### Data Layer
```javascript
// Line ~28
loadTemplates()
- Fetches data/templates.json
- Returns array of templates
- Error handling returns empty array

// Line ~40
saveTemplates(templates)
- POSTs to save_templates.php
- Sends { templates: [...] }
- Returns boolean success/failure
```

#### Initialization
```javascript
// Line ~82
init()
- Loads theme from localStorage
- Loads templates from JSON
- Loads available icons (hardcoded)
- Renders template list
- Sets up event listeners

// Line ~101
setupEventListeners()
- Theme toggle button
- Modal close handlers
- Backdrop click to close
```

#### Template List View
```javascript
// Line ~145
renderTemplateList()
- Shows grid of template cards
- "Create New Template" button
- Empty state if no templates
- Each card shows: name, description, level count, created date, actions

// Line ~178
renderTemplateCard(template)
- Returns HTML string for template card
- Shows "Default" badge if isDefault
- Action buttons: View, Edit, Delete (if not default)
```

#### Template Creation/Editing
```javascript
// Line ~208 (global)
window.startCreateTemplate()
- Sets editMode = 'create'
- Creates empty template
- Renders template builder form

// Line ~214 (global)
window.editTemplate(templateId)
- Finds template by ID
- Deep copies template
- Sets editMode = 'edit'
- Renders template builder form

// Line ~277
createEmptyTemplate()
- Generates new template object
- One default level
- Returns template structure

// Line ~299
createEmptyLevel(order)
- Generates new level object
- Default unitConfig
- Returns level structure
```

#### Template Builder Form
```javascript
// Line ~328
renderTemplateBuilder()
- Main template editing UI
- Sections:
  1. Template Information (name, description, default flag)
  2. Workflow-Level Configuration (3 toggles)
  3. Workflow Levels (dynamic list)
  4. Validation Messages
  5. Form Actions (Cancel, Save)

// Line ~438
renderLevelItem(level, index)
- Editable level configuration
- Fields: name, singular, plural, description
- Unit config checkboxes grid
- Move up/down buttons
- Delete button (if >1 level)

// Line ~489
renderUnitConfigCheckbox(levelIndex, property, label, checked, disabled)
- Individual property checkbox
- Data attributes for tracking
- Change handler updates state
```

#### CRUD Operations
```javascript
// Line ~263 (global)
window.deleteTemplate(templateId)
- Confirms with user
- Filters out template
- Saves updated list
- Re-renders template list

// Line ~224 (global)
window.viewTemplate(templateId)
- Opens modal with template details
- Read-only view
- Shows all configuration
```

#### Level Management
```javascript
// Line ??? (global)
window.addLevel()
- Adds new level to currentTemplate
- Increments order
- Re-renders builder

// Line ??? (global)
window.removeLevel(index)
- Removes level from currentTemplate
- Updates order of remaining levels
- Re-renders builder

// Line ??? (global)
window.moveLevelUp(index)
- Swaps level with previous
- Re-renders builder

// Line ??? (global)
window.moveLevelDown(index)
- Swaps level with next
- Re-renders builder

// Line ??? (global)
window.updateUnitConfig(levelIndex, property, checked)
- Updates unitConfig for specific level
- Handles special case: gradeCumulative depends on enableGrade
```

#### Save Logic
```javascript
// Line ??? (global)
window.saveTemplate()
- Validates template (name, level names required)
- Collects form data
- Updates currentTemplate
- If editMode = 'edit': updates existing template
- If editMode = 'create': adds new template
- Calls saveTemplates()
- Returns to list view on success

// Line ??? (global)
window.cancelTemplateBuilder()
- Discards changes
- Returns to template list
```

#### Utilities
```javascript
// Line ~17
generateId(prefix)
- Creates unique ID: "{prefix}-{timestamp}-{random}"

// Line ~19
formatDate(dateStr)
- Formats ISO date to "Nov 15, 2025" format

// Line ~25
deepCopy(obj)
- JSON.parse(JSON.stringify(obj))
- Creates independent copy

// Line ~121
toggleTheme()
- Switches light/dark theme
- Persists to localStorage
- Updates body class

// Line ~128
openModal(title, bodyHTML, onOpen)
- Shows modal with content
- Optional callback after open

// Line ~140
closeModal()
- Hides modal backdrop
```

#### Icon Management
```javascript
// Line ~57
loadAvailableIcons()
- Returns hardcoded array of ~80 icon filenames
- Icons from /icons/ directory
- No dynamic scanning (would need server endpoint)
```

---

## Data Flow

### Template Creation
```
User clicks "Create Template"
  ↓
startCreateTemplate()
  ↓
createEmptyTemplate()
  ↓
renderTemplateBuilder()
  ↓
User edits form
  ↓
User clicks "Create Template" button
  ↓
saveTemplate()
  ↓
Validates input
  ↓
Updates state.templates array
  ↓
saveTemplates() → POST to save_templates.php
  ↓
PHP writes to data/templates.json
  ↓
renderTemplateList()
```

### Template Editing
```
User clicks "Edit" on template card
  ↓
editTemplate(templateId)
  ↓
Deep copy template
  ↓
renderTemplateBuilder()
  ↓
User modifies configuration
  ↓
User clicks "Update Template"
  ↓
saveTemplate()
  ↓
Finds existing template in array
  ↓
Replaces with updated version
  ↓
saveTemplates() → POST
  ↓
renderTemplateList()
```

---

## Features Implemented

### ✅ Core Functionality
- [x] Create new templates
- [x] Edit existing templates
- [x] Delete templates (except default)
- [x] View template details (read-only modal)
- [x] Set default template
- [x] Configure workflow-level properties
- [x] Define 1-10 custom levels
- [x] Configure unit properties per level
- [x] Reorder levels (move up/down)
- [x] Remove levels (min 1)
- [x] Theme toggle (light/dark)

### ✅ UI Features
- [x] Template grid with cards
- [x] Empty state message
- [x] Modal system
- [x] Form validation
- [x] Responsive design
- [x] Loading states
- [x] Date formatting
- [x] Badge for default template

---

## Missing/Incomplete Features

### ❌ Not Implemented
- [ ] Template duplication
- [ ] Template export/import (JSON file download/upload)
- [ ] Template versioning
- [ ] Template preview (render example workflow)
- [ ] Undo/redo in builder
- [ ] Drag-drop level reordering
- [ ] Icon upload (only predefined icons)
- [ ] Icon preview in builder
- [ ] Color picker for level colors (uses default)
- [ ] Validation messages display (container exists but not used)
- [ ] Search/filter templates
- [ ] Sort templates
- [ ] Pagination for many templates
- [ ] Bulk operations
- [ ] Template usage statistics (show which workflows use it)
- [ ] Template lock/unlock (prevent editing)
- [ ] Rich text descriptions

### ⚠️ Partial Implementation
- Icon system: Hardcoded list, no dynamic loading, no upload

---

## Known Issues & Bugs

### 🐛 Confirmed Issues

1. **Multiple JS File Versions**
   - `template-builder.js`
   - `template-builder-fixed.js`
   - `template-builder-final-fix.js`
   - **Issue:** Unclear which is active version
   - **Impact:** Potential confusion, outdated code

2. **No Form Validation Display**
   - Validation container exists in renderTemplateBuilder()
   - But no code populates it with errors
   - **Impact:** Users don't see validation errors

3. **Icon List Hardcoded**
   - Icons array manually maintained
   - Doesn't dynamically read /icons/ directory
   - **Impact:** New icons require code update

4. **No Concurrent Edit Protection**
   - Multiple users can edit same template
   - Last save wins (data loss potential)
   - **Impact:** Lost changes in multi-user scenarios

5. **Template Deletion Consequences**
   - Deleting template doesn't check if workflows use it
   - Workflows with deleted templates may break
   - **Actually OK:** Workflows store template snapshots
   - **Impact:** None (but could warn user)

6. **Level Reordering UI**
   - Manual buttons instead of drag-drop
   - Cumbersome for many levels
   - **Impact:** Poor UX for complex templates

7. **Missing onChange Handlers**
   - Template name changes don't auto-update
   - Requires explicit save
   - **Impact:** Confusing UX (expected auto-save)

### ⚠️ Potential Issues

1. **Deep Copy Limitation**
   - Uses JSON.parse(JSON.stringify())
   - Loses functions, undefined, symbols, circular refs
   - **Impact:** Limited but OK for data objects

2. **Local Storage Theme**
   - Not synced across sessions/devices
   - **Impact:** Theme resets on new device

3. **No Error Boundaries**
   - JavaScript errors crash entire page
   - **Impact:** Poor error handling

---

## Dependencies on Other Modules

### Template Builder → Workflows
- **Dependency:** Workflows read templates.json
- **Usage:** Create workflow from template (createFlowFromTemplate)
- **Data Flow:** Template snapshot copied into workflow
- **Coupling:** Loose (snapshot independence)

### Template Builder → Boards
- **Dependency:** None direct
- **Impact:** Boards use workflow exports, not templates

---

## Backend: save_templates.php

**Purpose:** Persist templates to JSON file

### Expected Behavior
```php
<?php
header('Content-Type: application/json');

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (isset($data['templates'])) {
    file_put_contents('data/templates.json', json_encode($data, JSON_PRETTY_PRINT));
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid data']);
}
?>
```

### Issues with This Approach
❌ No validation
❌ No authentication
❌ No file locking (concurrent writes)
❌ No backup before overwrite
❌ No error handling for file_put_contents
❌ No input sanitization

---

## Recommendations for Improvement

### High Priority
1. **Clarify file versions** - Remove unused template-builder-*.js files
2. **Implement validation display** - Show errors in validation container
3. **Add template usage tracking** - Show which workflows use template
4. **Prevent deletion of in-use templates** - Or at least warn user
5. **Dynamic icon loading** - PHP endpoint to scan /icons/ directory

### Medium Priority
6. **Drag-drop level reordering** - Better UX than up/down buttons
7. **Template preview** - Render example workflow structure
8. **Export/import templates** - JSON file download/upload
9. **Template duplication** - Quick copy with new name
10. **Search/filter templates** - For large template libraries

### Low Priority
11. **Rich text descriptions** - Use Quill for template/level descriptions
12. **Color picker** - Custom level colors instead of defaults
13. **Icon preview in builder** - Show selected icon in level config
14. **Undo/redo** - Complex but valuable for builder
15. **Version history** - Track template changes over time

---

## Code Quality Assessment

### Strengths ✅
- Clear function names
- Consistent structure
- Good separation of rendering and logic
- Comprehensive comments
- Modular functions

### Weaknesses ❌
- Global function pollution (window.*)
- No error handling in most functions
- No input validation before save
- Large rendering functions (could be split)
- No unit tests
- No TypeScript/JSDoc types

---

## Testing Recommendations

### Unit Tests Needed
- [ ] generateId() uniqueness
- [ ] formatDate() various inputs
- [ ] deepCopy() correctness
- [ ] createEmptyTemplate() structure
- [ ] createEmptyLevel() structure
- [ ] Validation logic (when implemented)

### Integration Tests Needed
- [ ] Template CRUD operations
- [ ] Level add/remove/reorder
- [ ] Default template toggle
- [ ] Save/load persistence
- [ ] Error scenarios

### Manual Testing Checklist
- [ ] Create template with 1 level
- [ ] Create template with 10 levels
- [ ] Edit template name
- [ ] Toggle default template
- [ ] Delete template
- [ ] Move levels up/down
- [ ] Remove level (when >1)
- [ ] Try to remove last level (should prevent)
- [ ] Save without name (should validate)
- [ ] Cancel edit (should discard)

---

## Performance Considerations

### Current Performance
- ✅ Fast for <100 templates
- ⚠️ May slow with >1000 templates (no pagination)
- ✅ Minimal DOM manipulation
- ✅ No expensive computations

### Optimization Opportunities
- Virtualize template list for large datasets
- Debounce form inputs
- Lazy load template details
- Cache rendered HTML

---

## Security Considerations

### Current Issues
❌ **Critical:** No XSS protection in template names/descriptions
❌ **Critical:** No CSRF protection on save endpoint
❌ **High:** No authentication/authorization
❌ **High:** No input sanitization
❌ **Medium:** No rate limiting
❌ **Low:** Icon path traversal potential

### Mitigation Recommendations
1. Sanitize all user input before rendering
2. Add CSRF tokens to forms
3. Implement user authentication
4. Validate JSON structure on backend
5. Use Content Security Policy headers
6. Add rate limiting to save endpoint

---

## Conclusion

The Template Builder is a **well-structured but incomplete** module that successfully implements core template CRUD functionality. It suffers from typical prototype limitations:

- ✅ Core functionality works
- ⚠️ Missing production features (validation display, error handling)
- ❌ No security measures
- ❌ No testing
- ❌ No proper backend

**Readiness:** Prototype/Demo stage, NOT production-ready.

**Confidence in Understanding:** 90%
