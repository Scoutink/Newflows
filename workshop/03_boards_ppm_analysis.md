# Boards (PPM) Module - Analysis

**Module:** PPM (Project Portfolio Management) / Boards
**Files:** `boards.html`, `board.html`, `ppm-script.js`, `ppm-style.css`
**Purpose:** Kanban-style project management boards with workflow integration

---

## Overview

The Boards module provides **Trello-like** project management functionality:
- Create and manage multiple boards
- Kanban columns with drag-drop
- Rich card properties (dates, assignments, checklists, attachments)
- **Milestones** - Group cards with auto-completion tracking
- **Categories** - Tag cards with icons and colors
- **Groups** - Multi-card relationships
- **Dynamic Lists** - Backlog items with task dependencies
- **References Column** - Locked column for reference materials
- **Export from Workflows** - Create boards from workflow units

---

## File: boards.html

**Purpose:** Board listing page (shows all boards)

### Key Elements
- Navigation bar with back link, documentation, theme toggle, user menu
- "Your Boards" header with subtitle
- "Create Board" button
- Boards grid (dynamically rendered)
- Empty state message
- Modals: General modal, Create Board modal

### JavaScript Initialization
```javascript
<script>
    PPM.init('boards');  // Initialize in boards view mode
</script>
```

---

## File: ppm-script.js

**Estimated Lines:** 3000+
**Pattern:** IIFE Module Pattern

### Module Structure
```javascript
const PPM = (() => {
    // Private state, functions

    return {
        // Public API
        init: (view) => {},
        ui: {
            closeCreateBoardDialog: () => {},
            // ... other UI functions
        }
    };
})();
```

### State Structure
```javascript
let state = {
    view: 'boards',              // 'boards' | 'board'
    currentBoardId: null,        // Currently open board
    currentUser: null,           // From ppm-users.json
    boards: [],                  // Array of board objects
    users: [],                   // Array of user objects
    theme: 'light',
    draggedCard: null,           // For drag-drop
    draggedOverColumn: null,
    backlogFilter: null,         // Filter by backlog item ID
    categoryFilter: null         // Filter by category ID
};
```

### Board Data Structure
```javascript
{
  id: "board-{timestamp}-{random}",
  name: "Board Name",
  description: "Board description",
  sourceControlId: null,         // From workflow export
  sourceFlowId: null,            // From workflow export
  createdAt: "2025-11-15T00:00:00.000Z",
  createdBy: "user-id",
  archived: false,

  members: [                     // Board members
    {
      userId: "user-id",
      name: "User Name",
      email: "user@example.com",
      role: "admin",             // 'admin' | 'member' | 'viewer'
      avatar: "url",
      joinedAt: "2025-11-15T00:00:00.000Z"
    }
  ],

  columns: [                     // Kanban columns
    {
      id: "col-{timestamp}-{random}",
      name: "To Do",
      order: 0,
      limit: null,               // WIP limit (null = no limit)
      color: "#0d6efd",
      locked: false              // If true, cards can't be moved from this column
    }
  ],

  cards: [                       // All cards on board
    {
      id: "card-{timestamp}-{random}",
      boardId: "board-id",
      columnId: "col-id",
      order: 0,
      title: "Card Title",
      description: "Card description",
      sourceType: "control" | "action" | "evidence",  // From workflow export
      sourceId: "unit-id",       // Original workflow unit ID
      sourceGrade: 0,            // Grade from workflow
      assignments: [],           // Assigned users
      schedule: {                // Scheduling system
        startDate: null,
        startMode: "date",       // 'date' | 'days_after' | 'dependency'
        startDays: null,
        startDependency: null,   // Card ID to depend on
        dueDate: null,
        dueMode: "date",
        dueDays: null,
        recurrence: {
          enabled: false,
          pattern: "monthly",    // 'daily' | 'weekly' | 'monthly'
          interval: 1,
          startOf: "month",
          endOf: null,
          customDays: [],
          endMode: "never",
          endOccurrences: null,
          endDate: null
        },
        reminders: []
      },
      checklist: [],             // Array of checklist items
      labels: [],                // Array of label objects
      attachments: [],           // Links, files, etc.
      linkedBacklogItems: [],    // For dynamic lists
      milestoneId: null,         // Link to milestone
      categoryId: null,          // Link to category
      groupIds: [],              // Array of group IDs
      status: {
        current: "pending",
        blocked: false,
        blockedReason: null,
        approvalStatus: null,
        approvedBy: null,
        approvedAt: null
      },
      isDone: false,             // For milestone completion tracking
      effort: {
        estimated: null,
        actual: null,
        unit: "hours"
      },
      activity: [],              // Activity log
      createdAt: "2025-11-15T00:00:00.000Z",
      createdBy: "user-id",
      updatedAt: "2025-11-15T00:00:00.000Z",
      updatedBy: "user-id"
    }
  ],

  labels: [],                    // Board-wide labels

  milestones: [                  // NEW FEATURE
    {
      id: "milestone-{timestamp}-{random}",
      name: "Milestone Name",
      description: "Description",
      linkedCards: ["card-id-1", "card-id-2"],  // Cards in this milestone
      status: "in_progress",     // 'in_progress' | 'completed'
      color: "#4a6cf7",
      createdAt: "2025-11-15T00:00:00.000Z"
    }
  ],

  categories: [                  // NEW FEATURE
    {
      id: "category-{timestamp}-{random}",
      name: "Category Name",
      color: "#28a745",
      icon: "fa-tag",            // Font Awesome class
      createdAt: "2025-11-15T00:00:00.000Z"
    }
  ],

  groups: [                      // NEW FEATURE
    {
      id: "group-{timestamp}-{random}",
      name: "Group Name",
      linkedCards: ["card-id-1", "card-id-2"],
      color: "#ffc107",
      createdAt: "2025-11-15T00:00:00.000Z"
    }
  ],

  settings: {
    notificationsEnabled: true,
    allowGuestView: false,
    enforceWIPLimit: false
  },

  activity: []                   // Board-level activity log
}
```

---

## Key Features

### 1. Default Columns (ppm-script.js:179)
```javascript
createDefaultColumns(includeReferences = true)
- References (order: 0, locked: true) - OPTIONAL
- To Do (order: 0 or 1)
- In Progress (order: 1 or 2, limit: 5)
- Review (order: 2 or 3)
- Done (order: 3 or 4)
```

**References Column:**
- Special locked column
- Cards in this column cannot be moved
- Used for reference materials, documentation, templates
- Optional when creating board

### 2. Milestones (ppm-script.js:246-313)
```javascript
createMilestone(board, data)
- Group related cards
- Auto-tracks completion: status = 'completed' when all cards are done

updateMilestoneStatus(board, milestoneId)
- Checks if all linkedCards have isDone = true
- Auto-updates milestone.status
- Logs activity when completed
```

**Use Case:** Sprint goals, project phases, release milestones

### 3. Categories (ppm-script.js:319-366)
```javascript
createCategory(board, data)
- Tag cards with icon and color
- Visual organization

updateCategory(board, categoryId, data)
- Change name, color, icon
```

**Use Case:** Feature types, departments, priorities

### 4. Groups (ppm-script.js:368-415)
```javascript
createGroup(board, data)
- Link multiple cards together
- Different from milestones (no completion tracking)
- Cards can belong to multiple groups
```

**Use Case:** Related tasks, dependencies, feature sets

### 5. Card Operations (ppm-script.js:417-500)
```javascript
createCard(board, columnId, cardData)
- Creates card in specified column
- Auto-assigns order (max + 1)
- Initializes all properties

updateCard(board, cardId, updates)
- Updates card properties
- Sets updatedAt, updatedBy

moveCard(board, cardId, toColumnId, toOrder)
- Moves card between columns
- Reorders cards in destination column
- Respects locked columns (References)
```

### 6. Drag-Drop System
```javascript
State tracking:
  - draggedCard: Card being dragged
  - draggedOverColumn: Column being hovered

Event handlers:
  - onDragStart: Set draggedCard
  - onDragOver: Set draggedOverColumn, prevent default
  - onDrop: Move card, update state, save
```

### 7. Dynamic Lists (Backlog System)
**Purpose:** Create hierarchical task dependencies

**Concept:**
- **Backlog Item**: Top-level card (connection node)
- **Tasks**: Child cards linked to backlog item
- Filtering: Show only tasks for specific backlog item

**Implementation:**
```javascript
card.linkedBacklogItems = ["backlog-card-id"]

getCardsByColumn(board, columnId)
- Filters by state.backlogFilter if set
- Shows card if it IS the backlog item
- Shows card if it's LINKED to backlog item
```

**Use Case:** Sprint planning, feature breakdown

### 8. Activity Logging (throughout)
```javascript
logActivity(board, cardId, action, metadata)
- Logs board-level or card-level activity
- Tracks: who, what, when
- Actions: board.created, card.created, card.moved, milestone.completed, etc.
```

---

## Workflow Integration

### Export Module (export-to-board-module.js)

**Purpose:** Export workflow units to project boards

**Features Implemented:**
1. **Export Scope Options**
   - Full Workflow - Export entire tree
   - Partial Workflow - Select specific sections
   - Tag-Filtered - Export only tagged units

2. **Board Configuration**
   - Custom board name
   - Optional description

3. **Reference Column (Advanced)**
   - Export specific level to References column
   - Bulk dynamic list setup:
     - Descendants → Task nodes
     - Ancestors → Connection nodes

4. **Dynamic List Export**
   - Export workflow tree to dynamic list
   - Select node type for each unit:
     - Task
     - Connection
     - Skip

5. **Preview**
   - Shows node count
   - Reference count
   - Board column count
   - Dynamic list breakdown (tasks vs connections)

**Modal Function:**
```javascript
window.openExportToBoardModal()
- Opens comprehensive export dialog
- Collects all workflow tags
- Builds partial tree with checkboxes
- Builds dynamic list tree with type selectors
- Updates preview counts
- Creates board on submit
```

**Export Logic Flow:**
```
User clicks "Export to Board"
  ↓
openExportToBoardModal()
  ↓
User configures export options
  ↓
User clicks "Create Board"
  ↓
Collect selected units based on scope
  ↓
Create board with columns
  ↓
Create cards from units:
  - sourceType: 'control' | 'action' | 'evidence'
  - sourceId: original unit ID
  - sourceGrade: unit grade
  ↓
If Reference column: Add specific level to References
  ↓
If Dynamic list: Create backlog structure
  ↓
Save board to ppm-boards.json
  ↓
Navigate to boards page
```

---

## Data Flow

### Board Creation
```
User clicks "Create Board"
  ↓
createBoard(name, description, sourceData, options)
  ↓
Generate board object with default columns
  ↓
Add to state.boards
  ↓
saveBoards() → POST to save_board.php
  ↓
PHP writes ppm-boards.json
```

### Card Move (Drag-Drop)
```
User drags card
  ↓
onDragStart: Set state.draggedCard
  ↓
User hovers over column
  ↓
onDragOver: Set state.draggedOverColumn
  ↓
User drops
  ↓
onDrop:
  - moveCard(board, cardId, toColumnId, toOrder)
  - Re-render board
  - saveBoards()
```

---

## Missing Features

### ❌ Not Implemented in Code

Despite extensive data structures, **many features are defined but not fully implemented**:

1. **Scheduling System**
   - Data structure exists (schedule.recurrence, reminders)
   - **UI missing:** No date pickers, recurrence config, reminder UI
   - **Logic missing:** No recurrence calculation, reminder triggers

2. **Assignments**
   - Data structure exists (card.assignments array)
   - **UI missing:** No assignment dialog, user picker
   - **Logic missing:** No assignment notifications

3. **Checklist**
   - Data structure exists (card.checklist array)
   - **UI missing:** No checklist rendering, add/edit/delete
   - **Logic missing:** No progress tracking

4. **Labels**
   - Data structure exists (card.labels, board.labels)
   - **UI missing:** No label management, label picker
   - **Logic missing:** No label filtering

5. **Attachments**
   - Data structure exists (card.attachments array)
   - **UI missing:** No attachment upload, display
   - **Logic missing:** No file handling

6. **Approval Workflow**
   - Data structure exists (card.status.approvalStatus, approvedBy)
   - **UI missing:** No approval buttons, workflow
   - **Logic missing:** No approval state machine

7. **Effort Tracking**
   - Data structure exists (card.effort)
   - **UI missing:** No time entry, burndown charts
   - **Logic missing:** No effort summation

8. **Activity Feed**
   - Data structure exists (board.activity, card.activity)
   - Logging functions implemented
   - **UI missing:** No activity timeline rendering
   - **Logic missing:** No activity filtering, search

9. **Member Management**
   - Data structure exists (board.members with roles)
   - **UI missing:** No invite dialog, member list, role management
   - **Logic missing:** No permission enforcement

10. **Board Settings**
    - Data structure exists (board.settings)
    - **UI missing:** No settings panel
    - **Logic missing:** No setting enforcement

---

## Actual Implementation Status

### ✅ Fully Implemented
- Board CRUD operations
- Column management
- Card CRUD operations
- Milestone management
- Category management
- Group management
- Drag-drop card movement
- Activity logging (backend)
- References column (locked)
- Workflow export (comprehensive modal)

### ⚠️ Partially Implemented
- Dynamic lists (data structure, filtering logic)
- User system (mockup data, no real auth)

### ❌ Not Implemented
- All features listed above in "Missing Features"
- **Critical gap:** Most UI for rich card features

---

## Discrepancy: Documentation vs Code

The documentation (boards-documentation.html) likely describes:
- ✅ Scheduling, recurrence, reminders
- ✅ Checklists
- ✅ Labels
- ✅ Attachments
- ✅ Approvals
- ✅ Time tracking

**Reality:** Only data structures exist. No UI. No full logic.

This is a **classic prototype pattern**: Define ambitious data structures, implement core CRUD, defer UI for complex features.

---

## Critical Issues

### 🔴 Critical

1. **No Backend for File Uploads**
   - Attachments require file upload
   - No PHP endpoint for file handling
   - No storage configured

2. **User System is Mockup**
   - ppm-users.json is hardcoded
   - No real authentication
   - No user creation/management
   - Card assignments reference non-existent users

3. **Activity Not Displayed**
   - Logging works, but no UI to view activity
   - Lost visibility into changes

### ⚠️ High

4. **Feature-Data Mismatch**
   - Data structures for unimplemented features
   - Confusing for developers
   - May mislead users expecting full functionality

5. **Drag-Drop Performance**
   - Full re-render on every drop
   - May be slow with many cards

6. **No Card Search**
   - Hard to find specific cards in large boards

---

## Conclusion

The Boards module is an **ambitious but incomplete** implementation:

### Strengths
✅ Solid foundation with rich data structures
✅ Core Kanban functionality works
✅ Innovative features: Milestones, Categories, Groups, Dynamic Lists
✅ Excellent workflow integration (export modal)
✅ Clean code organization (IIFE module)

### Weaknesses
❌ **Major:** Many documented features not implemented
❌ **Critical:** No file uploads for attachments
❌ **Critical:** No user authentication system
❌ **High:** No UI for scheduling, checklists, labels
❌ **Medium:** Activity logging not visible

**Readiness:** Early prototype with MVP Kanban, NOT production-ready
**Confidence in Understanding:** 80% (data structures clear, missing UI implementations noted)
