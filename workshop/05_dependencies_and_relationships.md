# Dependencies and Relationships Map

**Purpose:** Document how modules, files, and functions interact with each other

---

## Module Dependency Graph

```
┌─────────────────────┐
│  Template Builder   │
│  (Independent)      │
└──────────┬──────────┘
           │ Creates/Updates
           │ templates.json
           ▼
┌─────────────────────┐
│     Templates       │
│  (Data Storage)     │
└──────────┬──────────┘
           │ Read by
           ▼
┌─────────────────────┐      ┌─────────────────────┐
│    Workflows        │─────▶│   Workflow Links    │
│  (Main Module)      │      │  (Link Storage)     │
└──────────┬──────────┘      └─────────────────────┘
           │
           │ Exports to
           ▼
┌─────────────────────┐      ┌─────────────────────┐
│   Export Module     │─────▶│   PPM Boards        │
│  (Bridge)           │      │  (Kanban Module)    │
└─────────────────────┘      └──────────┬──────────┘
                                        │ Stores
                                        ▼
                             ┌─────────────────────┐
                             │   ppm-boards.json   │
                             │   ppm-users.json    │
                             └─────────────────────┘
```

---

## File Dependencies

### Template Builder Files
```
template-builder.html
  ├─ Imports: style.css (shared)
  ├─ Imports: template-builder.css
  ├─ Imports: template-builder.js
  └─ Uses: Font Awesome 6.4.0 (CDN)

template-builder.js
  ├─ Reads: data/templates.json
  ├─ Writes: data/templates.json (via save_templates.php)
  └─ Dependencies: NONE (standalone module)
```

### Workflows Files
```
index.html
  ├─ Imports: style.css (shared)
  ├─ Imports: script.js
  ├─ Imports: export-to-board-module.js
  ├─ Uses: Font Awesome 6.4.0 (CDN)
  └─ Uses: Quill 1.3.6 (CDN)

script.js
  ├─ Reads: data/templates.json
  ├─ Reads: data/workflows.json
  ├─ Reads: data/executions.json
  ├─ Reads: data/workflow-links.json
  ├─ Writes: data/workflows.json (via save_workflow.php)
  ├─ Writes: data/executions.json (via save_executions.php)
  ├─ Writes: data/workflow-links.json (via save_workflow_links.php)
  └─ Calls: window.openExportToBoardModal() from export-to-board-module.js

export-to-board-module.js
  ├─ Reads: Current workflow from script.js global state
  ├─ Reads: Template from script.js global functions
  ├─ Writes: boards to ppm-boards.json (via PPM module or save_board.php)
  └─ Dependencies: script.js must be loaded first
```

### Boards Files
```
boards.html
  ├─ Imports: style.css (shared)
  ├─ Imports: ppm-style.css
  ├─ Imports: ppm-script.js
  ├─ Uses: Font Awesome 6.4.0 (CDN)
  └─ Calls: PPM.init('boards')

board.html  (Individual board view - NOT FULLY ANALYZED)
  ├─ Imports: style.css (shared)
  ├─ Imports: ppm-style.css
  ├─ Imports: ppm-script.js
  ├─ Uses: Font Awesome 6.4.0 (CDN)
  └─ Calls: PPM.init('board')

ppm-script.js
  ├─ Reads: data/ppm-boards.json
  ├─ Reads: data/ppm-users.json
  ├─ Writes: data/ppm-boards.json (via save_board.php)
  └─ Dependencies: NONE (standalone IIFE module)
```

### PHP Endpoints
```
All PHP files follow same pattern:
  ├─ Read: php://input (JSON POST data)
  ├─ Write: data/{filename}.json
  └─ Return: { "status": "success" } or { "status": "error", "message": "..." }

Files:
  - save_templates.php
  - save_workflow.php
  - save_executions.php
  - save_workflow_links.php
  - save_board.php
  - save_users.php
```

---

## Data Flow Relationships

### 1. Template → Workflow Creation
```
USER ACTION:
  1. User creates template in Template Builder
     ↓
  2. save_templates.php writes data/templates.json
     ↓
  3. User navigates to Workflows app
     ↓
  4. Workflows loads templates.json
     ↓
  5. User selects "Create from Template"
     ↓
  6. Workflow created with templateSnapshot = deep copy of template

KEY RELATIONSHIP: Template snapshot is FROZEN
  - Future template changes DON'T affect workflow
  - Workflow is independent once created
```

### 2. Workflow Linking
```
USER ACTION:
  1. User creates source workflow (Workflow A)
     ↓
  2. User creates linked workflow from Workflow A (Workflow B)
     ↓
  3. Link group created: { workflows: ["A", "B"] }
     ↓
  4. save_workflow_links.php writes workflow-links.json
     ↓
  5. User modifies structure of Workflow A (in creation mode)
     ↓
  6. On save, propagateToLinkedWorkflows() runs:
     - Deep clone A's structure
     - Map old IDs to new IDs (for B)
     - Update B's structure
     - Preserve B's execution state using ID map
     ↓
  7. Both workflows updated in workflows.json

KEY RELATIONSHIP: Structure syncs, execution doesn't
  - Add unit to A → appears in B
  - Delete unit from A → deleted from B
  - Check unit as done in A → NOT reflected in B
```

### 3. Execution State Separation
```
WORKFLOW DATA (workflows.json):
{
  id: "flow-1",
  data: [
    { id: "unit-1", name: "Task 1", subcategories: [...] },
    { id: "unit-2", name: "Task 2", subcategories: [...] }
  ]
}

EXECUTION DATA (executions.json):
{
  flows: {
    "flow-1": {
      completed: {
        "unit-1": true,
        "unit-2": false
      }
    }
  }
}

KEY RELATIONSHIP: Separate persistence
  - Creation mode saves to workflows.json only
  - Execution mode saves to executions.json only
  - Two save buttons for two data stores
```

### 4. Workflow → Board Export
```
USER ACTION:
  1. User has workflow with units
     ↓
  2. User clicks "Export to Board"
     ↓
  3. export-to-board-module.js opens modal
     ↓
  4. User configures export (scope, reference column, dynamic lists)
     ↓
  5. User clicks "Create Board"
     ↓
  6. Export logic:
     - Collect selected units
     - Create board object
     - Create columns (To Do, In Progress, Review, Done)
     - Create cards from units:
       * sourceType = unit.levelId name (control/action/evidence)
       * sourceId = unit.id
       * sourceGrade = unit.grade
       * title = unit.name
       * description = unit.description
     - If reference column: Add specific level to References
     - If dynamic lists: Set linkedBacklogItems
     ↓
  7. save_board.php writes ppm-boards.json
     ↓
  8. Navigate to boards.html

KEY RELATIONSHIP: One-way export
  - Workflow → Board (export)
  - Board changes DON'T sync back to workflow
  - sourceId preserves link for reference only
```

---

## Function Call Relationships

### Template Builder Key Functions
```
init()
  └─> loadTemplates()
  └─> setupEventListeners()

startCreateTemplate()
  └─> createEmptyTemplate()
  └─> renderTemplateBuilder()

editTemplate(id)
  └─> deepCopy(template)
  └─> renderTemplateBuilder()

saveTemplate()
  └─> Validation
  └─> Update state.templates
  └─> saveTemplates()
      └─> fetch('save_templates.php')

deleteTemplate(id)
  └─> Confirm
  └─> Filter templates
  └─> saveTemplates()
```

### Workflows Key Functions
```
init()
  └─> loadData()
      └─> loadTemplates()
      └─> loadWorkflow()
      └─> loadExecutions()
      └─> loadWorkflowLinks()
  └─> populateFlowSelect()
  └─> render()

createFlowFromTemplate(name, templateId)
  └─> Get template
  └─> deepCopy() → templateSnapshot
  └─> Create workflow object
  └─> Add to appState.workflow.flows
  └─> render()
  └─> saveWorkflow()

createLinkedWorkflow(name, sourceId)
  └─> copyWorkflow() logic
  └─> createLinkGroup() or addToLinkGroup()
  └─> saveWorkflowLinks()
  └─> saveWorkflow()

saveWorkflow()
  └─> if (currentMode === 'creation' && isLinked)
      └─> propagateToLinkedWorkflows()
  └─> fetch('save_workflow.php')

propagateToLinkedWorkflows(sourceId)
  └─> For each linked workflow:
      └─> Deep clone source structure
      └─> Map old IDs → new IDs
      └─> Preserve execution state
      └─> Update workflow.data

render()
  └─> getCurrentFlow()
  └─> getTemplate()
  └─> updateAllCumulativeGrades()
  └─> renderWorkflowInfo()
  └─> renderUnits()
      └─> filterUnitsByTag() (if activeTag)
      └─> For each unit: renderUnit()
          └─> renderUnitHeader()
          └─> renderUnitBody()
          └─> renderUnitChildren()
              └─> Recursive renderUnits()
  └─> applyModeStyles()
```

### Boards (PPM) Key Functions
```
PPM.init(view)
  └─> loadBoards()
  └─> loadUsers()
  └─> if (view === 'boards') renderBoardsList()
  └─> if (view === 'board') renderBoard()

createBoard(name, desc, sourceData, options)
  └─> createDefaultColumns(includeReferences)
  └─> Create board object
  └─> Add to state.boards
  └─> logActivity('board.created')
  └─> saveBoards()

createCard(board, columnId, cardData)
  └─> Calculate order (max + 1)
  └─> Create card object
  └─> Add to board.cards
  └─> logActivity('card.created')

moveCard(board, cardId, toColumnId, toOrder)
  └─> Get card
  └─> Update card.columnId
  └─> Reorder cards
  └─> logActivity('card.moved')
  └─> render()

createMilestone/updateMilestone/deleteMilestone
  └─> Modify board.milestones
  └─> logActivity()
  └─> updateMilestoneStatus() (auto-completion check)

saveBoards()
  └─> fetch('save_board.php')
```

---

## Shared Utilities

### Utilities Present in Multiple Modules
```
generateId(prefix)
  - Used in: template-builder.js, script.js, ppm-script.js
  - Pattern: `${prefix}-${timestamp}-${random}`
  - Purpose: Create unique IDs
  - CONCERN: IDs could theoretically collide (no coordination)

deepCopy(obj)
  - Used in: template-builder.js, script.js
  - Implementation: JSON.parse(JSON.stringify(obj))
  - Limitation: Loses functions, undefined, symbols, circular refs

formatDate(dateStr)
  - Used in: template-builder.js, ppm-script.js
  - Pattern: "Nov 15, 2025"
  - Purpose: Human-readable dates

openModal(title, html, onOpen) / closeModal()
  - Used in: All modules
  - Purpose: Reusable modal system
  - Implementation: Show/hide #modal-backdrop div

toggleTheme()
  - Used in: All modules
  - Pattern: Toggle light/dark class on body
  - Persistence: localStorage
```

---

## Cross-Module Communication

### Direct Function Calls
```
script.js (Workflows) → export-to-board-module.js
  - window.openExportToBoardModal()
  - Expects: getCurrentFlow(), getTemplate() to be available globally

export-to-board-module.js → script.js
  - window.getCurrentFlow()
  - window.getTemplate()
  - Dependency: Must load script.js first

export-to-board-module.js → ppm-script.js (potential)
  - Could call PPM.createBoard() directly
  - Currently seems to POST to save_board.php instead
  - Loose coupling via data files
```

### Indirect Communication via Data Files
```
Template Builder → Workflows
  - Template Builder writes templates.json
  - Workflows reads templates.json
  - No direct JavaScript dependency

Workflows → Boards
  - Export module writes ppm-boards.json
  - Boards reads ppm-boards.json
  - One-way data flow
```

---

## Critical Dependency Issues

### 1. No Dependency Management
- ❌ No module system (ES6 modules, CommonJS, AMD)
- ❌ No package.json
- ❌ Script load order in HTML is critical but not enforced
- ⚠️ Risk: Wrong load order breaks app

### 2. Global Namespace Pollution
```javascript
// Global functions everywhere:
window.addChildUnit = ...
window.deleteUnit = ...
window.updateUnitProperty = ...
// etc. (100+ global functions)

// Risk: Name collisions, hard to track dependencies
```

### 3. Tight Coupling via Global State
```javascript
// export-to-board-module.js depends on:
const flow = getCurrentFlow();  // From script.js
const template = getTemplate(flow);  // From script.js

// If script.js structure changes, export module breaks
```

### 4. Implicit Dependencies
```javascript
// template-builder.js expects:
- Font Awesome to be loaded (CDN)
- style.css to exist
- Modal DOM structure to exist

// No explicit checks or fallbacks
```

---

## Recommendations

### 1. Modularize Code
```javascript
// Convert to ES6 modules:
// template-builder.js
export function createTemplate() { }
export function saveTemplate() { }

// script.js
import { createTemplate, saveTemplate } from './template-builder.js';
```

### 2. Use Dependency Injection
```javascript
// Instead of:
window.openExportToBoardModal = () => {
    const flow = getCurrentFlow();  // Global dependency
    ...
}

// Use:
export function openExportToBoardModal(flowGetter, templateGetter) {
    const flow = flowGetter();
    ...
}

// Call:
openExportToBoardModal(getCurrentFlow, getTemplate);
```

### 3. Create Shared Utilities Module
```javascript
// utils.js
export const generateId = (prefix) => `${prefix}-${Date.now()}-${Math.random()}`;
export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));
export const formatDate = (dateStr) => ...;

// Import in all modules:
import { generateId, deepCopy, formatDate } from './utils.js';
```

### 4. Formalize Inter-Module Communication
```javascript
// Create EventBus for module communication:
class EventBus {
    on(event, callback) { }
    emit(event, data) { }
}

// Usage:
// In Workflows:
EventBus.emit('workflow:exported', { flowId, boardId });

// In Boards:
EventBus.on('workflow:exported', ({ flowId, boardId }) => {
    // Handle export
});
```

---

## Conclusion

**Current Architecture:**
- ✅ Simple and easy to understand
- ✅ Works for small codebase
- ❌ No formal dependency management
- ❌ Heavy use of global namespace
- ❌ Tight coupling via globals
- ❌ Implicit dependencies

**Risk Level:**
- 🔶 Medium for current prototype
- 🔴 High for production scaling
- 🔴 High for team collaboration

**Recommended Refactoring:**
1. **Phase 1:** Extract shared utilities to utils.js
2. **Phase 2:** Convert to ES6 modules
3. **Phase 3:** Implement dependency injection
4. **Phase 4:** Add formal event system for cross-module communication

**Confidence:** 90% - Comprehensive dependency mapping completed
