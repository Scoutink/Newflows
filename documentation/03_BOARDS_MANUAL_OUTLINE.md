# Boards Manual
## Your Project Execution Workspace

---

## OUTLINE STRUCTURE

## CHAPTER 1: INTRODUCTION TO BOARDS

Transform strategic workflows into tactical execution spaces.

### 1.1 What is a Board?

**Definition:**

A **board** is your Kanban-style project execution workspace where high-level compliance workflows transform into actionable, trackable tasks. While workflows define *what* needs to be done, boards are *where* you actually do it.

**Kanban-Style Project Management:**

```
Kanban Principles Applied:
- Visualize work (columns show task states)
- Limit work in progress (WIP limits)
- Manage flow (cards move left to right)
- Make process explicit (clear stages)
- Continuous improvement (metrics and tracking)
```

**Visual Example:**

```
┌──────────────────────────────────────────────────────────────┐
│  Board: ISO 27001 Implementation                             │
├───────────┬───────────┬───────────┬───────────┬──────────────┤
│  To Do    │ In Progress│ Review   │ Done      │ References  │
├───────────┼───────────┼───────────┼───────────┼──────────────┤
│ ┌───────┐│ ┌───────┐ │ ┌───────┐│ ┌───────┐ │  ▼ ISO 27001│
│ │Draft  ││ │Write  │ │ │Publish││ │Create │ │    ├─ A.5.1 │
│ │MFA    ││ │Access │ │ │InfoSec││ │badges │ │    ├─ A.5.2 │
│ │Policy ││ │Review │ │ │Policy ││ │       │ │    └─ A.5.3 │
│ └───────┘│ │Process│ │ └───────┘│ └───────┘ │             │
│          ││ └───────┘ │          │           │             │
└───────────┴───────────┴───────────┴───────────┴──────────────┘

Tasks flow left to right as work progresses
References stay in locked column (consultant-managed)
```

**Micro-Level Execution Space:**

```
Templates → Workflows → Boards

Templates: Define structure
  \"ISO 27001 has 93 controls across 4 domains\"

Workflows: Map requirements
  \"Each control needs a policy, implementation, and evidence\"

Boards: Execute tasks
  \"Create MFA policy (Due: Friday, Assigned: John)\"
```

**Where Workflows Become Action:**

```
Workflow Unit (Macro):
▼ A.9.4.3 Multi-Factor Authentication
  Description: Implement MFA for all admin accounts...
  Tags: [Critical] [IT] [Q1-2024]

Transforms Into Board Tasks (Micro):
├─ Task 1: Research MFA solutions (Due: Jan 5, Assigned: Sarah)
├─ Task 2: Get budget approval (Due: Jan 10, Assigned: CFO)
├─ Task 3: Purchase Duo licenses (Due: Jan 15, Assigned: IT Manager)
├─ Task 4: Configure Duo for admins (Due: Jan 20, Assigned: John)
└─ Task 5: Train admin users (Due: Jan 25, Assigned: Sarah)

One workflow item = Multiple executable tasks
```

**Task Tracking and Collaboration:**

```
Board Features:
✓ Assign tasks to team members
✓ Set due dates and reminders
✓ Track task progress through columns
✓ Add checklists within tasks
✓ Attach files and links
✓ Comment and collaborate
✓ Organize with milestones and categories
✓ Group related tasks
✓ View team workload
```

---

### 1.2 Boards in Compliance Execution

**The Three-Tier Execution Model:**

```
Tier 1: Templates (Structure)
  \"What fields and levels exist?\"
  
Tier 2: Workflows (Strategy)
  \"What compliance requirements must we meet?\"
  
Tier 3: Boards (Tactics) ← WE ARE HERE
  \"How do we actually implement these requirements?\"
```

**Workflow Blueprints → Execution Tasks:**

```
Consultant Creates Workflow:
\"GDPR Article 32: Security of Processing\"
├─ Implement encryption
├─ Implement access controls
├─ Implement logging
└─ Conduct regular audits

Exports to Board ↓

Client Creates Execution Tasks:
│
├─ Encryption:
│  ├─ Task: Evaluate encryption solutions
│  ├─ Task: Purchase encryption tool
│  ├─ Task: Deploy encryption on database
│  └─ Task: Test encryption verification
│
├─ Access Controls:
│  ├─ Task: Document access control policy
│  ├─ Task: Implement MFA
│  └─ Task: Conduct access review
│
└─ ... (more tasks)

Blueprint shows WHAT
Board shows WHO, WHEN, HOW
```

**Consultant References → Client Workspace:**

```
Two-Panel Interface:

┌──────────────┬────────────────────────────────────────┐
│ Left Panel   │  Right Panel                           │
│ (References) │  (Client Workspace)                    │
├──────────────┼────────────────────────────────────────┤
│ Consultant   │  Client creates tasks:                 │
│ maintains:   │                                        │
│              │  To Do    In Progress      Done       │
│ ▼ GDPR       │  ┌────┐   ┌────┐         ┌────┐     │
│   ├─ Art.32  │  │Task│   │Task│         │Task│     │
│   ├─ Art.33  │  │  1 │   │  2 │         │  3 │     │
│   └─ Art.34  │  └────┘   └────┘         └────┘     │
│              │                                        │
│ (Read-only)  │  (Editable)                           │
└──────────────┴────────────────────────────────────────┘

Consultant: Controls compliance framework
Client: Controls execution plan
```

**Strategic Map → Tactical Operations:**

```
Workflow (Strategic):
\"Implement ISO 27001 across organization\"
- 93 controls
- 12-month timeline
- Multiple departments

Board (Tactical):
Sprint 1 (Jan-Feb):
- 15 tasks
- IT department focus
- Critical controls first

Sprint 2 (Mar-Apr):
- 20 tasks
- HR and Finance
- Medium priority controls

Etc...

Strategy: What we need to achieve (big picture)
Tactics: How we achieve it (day-to-day actions)
```

**Compliance Requirements → Implementation Tasks:**

```
Requirement (from workflow):
\"GDPR Article 5(1)(f): Integrity and Confidentiality\"
\"Personal data shall be processed in a manner that ensures 
appropriate security... including protection against 
unauthorized or unlawful processing.\"

Implementation Tasks (on board):
├─ Task: Conduct data inventory
│  Assigned: Data Protection Officer
│  Due: Week 1
│  Milestone: Phase 1 - Assessment
│
├─ Task: Classify data sensitivity
│  Assigned: IT Security Team
│  Due: Week 2
│  Milestone: Phase 1 - Assessment
│
├─ Task: Implement encryption at rest
│  Assigned: Database Admin
│  Due: Week 4
│  Milestone: Phase 2 - Implementation
│
└─ ... (more tasks)

Abstract requirement → Concrete, assignable, due-dated tasks
```

**Use Case Example:**

```
Scenario: Acme Corp needs GDPR compliance

Step 1: Consultant creates GDPR workflow
- Maps all GDPR requirements
- Adds descriptions and guidance
- Tags by priority and department

Step 2: Export workflow to board
- Creates \"Acme Corp GDPR Compliance\" board
- Workflow appears in References panel (locked)
- Main board area is empty (ready for tasks)

Step 3: Client creates implementation plan
- Reviews requirement in References
- Creates specific tasks in To Do column
- Assigns to team members
- Sets due dates and milestones
- Tracks progress through columns

Step 4: Execution
- Team works on tasks
- Moves tasks through columns
- Consultant monitors references
- Client manages execution
- Progress visible to both parties

Result:
- Clear separation of concerns
- Consultant expertise preserved
- Client autonomy maintained
- Compliance achieved through structured execution
```

---

### 1.3 Board Components Overview

**The Seven Core Components:**

Boards are built from 7 interconnected components that work together to create a complete project management experience.

---

**1. Columns (Workflow States):**

```
Purpose: Represent stages of work

Default Columns:
To Do → In Progress → Review → Done

Customizable:
You can add, rename, reorder, or delete columns to match your workflow

Example Custom Columns:
Backlog → To Do → In Progress → Code Review → QA Testing → Deployed

Each column = A state your task can be in
```

**2. Cards (Tasks):**

```
Purpose: Individual work items

Card Properties:
- Title and description
- Assigned team members
- Due dates and start dates
- Checklists (sub-tasks)
- Attachments (files, links)
- Comments and activity log
- Tags and labels
- Progress indicators

One card = One task/deliverable
```

**3. Dynamic Lists (Reference Trees):**

```
Purpose: Collapsible reference structures (from exported workflows)

Features:
- Tree/hierarchy display
- Expand/collapse sections
- Search and filter
- Read-only (consultant controlled)
- Link cards to reference items

Use Case: Compliance frameworks, requirement libraries, documentation trees
```

**4. Milestones (Time Phases):**

```
Purpose: Group tasks by time-based phases

Examples:
- Sprint 1 (Jan 1-15)
- Q1 Objectives
- Phase 1: Planning
- MVP Release

Features:
- Link multiple cards to milestone
- Auto-track completion %
- Visual progress indicators
- Filter board by milestone
```

**5. Categories (Organizational Buckets):**

```
Purpose: Classify cards by type/theme

Examples:
- Documentation
- Development
- Testing
- Deployment

Features:
- Color-coded
- Icon-based
- Filter board by category
- Count cards per category
```

**6. Groups (Task Collections):**

```
Purpose: Create logical groupings of related cards

Examples:
- \"MFA Implementation\" group (5 related tasks)
- \"Q1 Security Controls\" group (12 controls)
- \"Vendor Assessments\" group (8 vendors)

Features:
- Multi-card collections
- Group-level progress tracking
- Visual grouping on board
- Bulk operations
```

**7. Members (Team Collaboration):**

```
Purpose: Team member management

Features:
- Add/remove team members
- Assign roles (admin, member, viewer)
- Avatar display
- @mentions in comments
- Assignment tracking
- Workload visibility
```

**How Components Work Together:**

```
Example Board:

Milestone: \"Sprint 1 - Critical Controls\"
├─ Category: Technical Controls
│  ├─ Group: MFA Implementation
│  │  ├─ Card: Research MFA solutions (To Do, Assigned: Sarah)
│  │  ├─ Card: Purchase licenses (To Do, Assigned: IT Manager)
│  │  └─ Card: Deploy MFA (In Progress, Assigned: John)
│  │
│  └─ Group: Encryption
│     ├─ Card: Evaluate encryption tools (Review, Assigned: DBA)
│     └─ Card: Deploy encryption (Done, Assigned: DBA)
│
└─ Category: Administrative Controls
   └─ Card: Draft InfoSec Policy (Done, Assigned: Legal)

All cards in columns (To Do, In Progress, Review, Done)
Cards have categories (Technical, Administrative)
Cards grouped logically (MFA, Encryption)
All linked to Milestone (Sprint 1)
All assigned to team Members
```

**Component Interactions:**

```
Dynamic List (Reference) ←→ Cards (Tasks)
  \"Link card to requirement\"
  Track which requirement a task addresses

Milestone (Phase) ←→ Cards (Tasks)
  \"Add card to milestone\"
  Track phase completion

Category (Type) ←→ Cards (Tasks)
  \"Categorize card\"
  Filter board by category

Group (Collection) ←→ Cards (Tasks)
  \"Group related cards\"
  Manage related work together

Members (People) ←→ Cards (Tasks)
  \"Assign card to member\"
  Track individual workload
```

---

### 1.4 Consultant vs Client Roles

**Clear Separation of Responsibilities:**

The platform is designed with a clear division of labor between consultants (framework experts) and clients (implementation teams).

---

**Consultant Manages:**

**1. Dynamic Lists and Reference Structure:**

```
What Consultant Does:
✓ Creates compliance frameworks in workflows
✓ Exports frameworks to board references
✓ Updates reference structure when regulations change
✓ Maintains single source of truth
✓ Documents requirements and guidance

What Consultant Does NOT Do:
✗ Create implementation tasks
✗ Assign work to client team
✗ Set project deadlines
✗ Manage day-to-day execution

Example:
Consultant creates GDPR workflow with all articles
Exports to board → Appears in References panel
Updates workflow when GDPR guidance changes
Client sees updated references automatically
```

**2. Reference Column Content:**

```
The References Column:
- First column on board (if enabled)
- Locked (cards cannot be moved)
- Contains compliance requirements
- Maintained by consultant
- Read-only for client

Consultant populates with:
- Regulatory requirements
- Control descriptions
- Evidence guidelines
- Policy templates
- Best practice documentation
```

**3. Compliance Requirement Trees:**

```
Consultant's Expertise:
├─ Maps regulation structure
├─ Breaks down requirements
├─ Provides implementation guidance
├─ Links related requirements
└─ Updates when regulations change

Client's Benefit:
- Always have current requirements
- Understand what's needed
- Reference during implementation
- Confidence in compliance coverage
```

**Consultant Value Proposition:**

```
Consultant brings:
✓ Regulatory expertise
✓ Framework knowledge
✓ Best practices
✓ Consistency across clients
✓ Updates when regulations change

Consultant provides:
- The WHAT (requirements)
- The WHY (compliance rationale)
- The STRUCTURE (organization)
- The GUIDANCE (how-to recommendations)
```

---

**Client Manages:**

**1. Task Creation and Assignment:**

```
Client Responsibilities:
✓ Break requirements into specific tasks
✓ Assign tasks to team members
✓ Set task priorities
✓ Create task descriptions
✓ Add checklists and subtasks
✓ Update task status

Example:
Requirement (from reference): \"Implement MFA\"

Client creates tasks:
├─ Task: Research MFA solutions (Assigned: IT Analyst)
├─ Task: Get budget approval (Assigned: IT Manager)
├─ Task: Purchase licenses (Assigned: Procurement)
├─ Task: Deploy MFA (Assigned: System Admin)
└─ Task: Train users (Assigned: Training Coordinator)
```

**2. Milestone Planning:**

```
Client Creates:
- Sprint schedules
- Phase timelines
- Release dates
- Audit deadlines

Client Tracks:
- Milestone progress
- On-time delivery
- Completion percentages
- Blocker identification

Example Milestones:
├─ Phase 1: Assessment (Weeks 1-4)
├─ Phase 2: Implementation (Weeks 5-12)
├─ Phase 3: Testing (Weeks 13-16)
└─ Phase 4: Audit (Week 17)
```

**3. Category Organization:**

```
Client Defines:
- How to classify tasks
- What categories to create
- Category colors and icons
- Category-based workflows

Example Categories:
├─ 🔴 Urgent
├─ 🟡 Important
├─ 🟢 Routine
├─ 📄 Documentation
├─ 💻 Technical
└─ 👥 Training
```

**4. Group Management:**

```
Client Creates Groups:
- Logically related task sets
- Project phases
- Work streams
- Vendor engagements

Example:
Group: \"MFA Implementation\"
├─ Contains 8 related tasks
├─ Shows 62% complete
├─ All tasks in this group visible together
└─ Move group through board stages together
```

**5. Progress Tracking:**

```
Client Monitors:
✓ Task completion rates
✓ Team velocity
✓ Milestone progress
✓ Blocker identification
✓ Resource allocation
✓ Timeline adherence

Client Reports:
- Weekly progress updates
- Sprint retrospectives
- Risk identification
- Resource needs
- Completion forecasts
```

**Client Value Proposition:**

```
Client controls:
✓ Execution plan
✓ Resource allocation
✓ Timeline and priorities
✓ Internal processes
✓ Team structure

Client autonomy:
- The WHO (assignments)
- The WHEN (deadlines)
- The HOW (implementation approach)
- The ORGANIZATION (task structure)
```

---

**Collaborative Model:**

```
Consultant + Client = Successful Compliance

Consultant:                    Client:
┌──────────────────┐          ┌──────────────────┐
│ Expertise        │────────▶ │ Execution        │
│ Requirements     │          │ Tasks            │
│ Structure        │          │ Assignments      │
│ Guidance         │          │ Timelines        │
│ Updates          │          │ Progress         │
└──────────────────┘          └──────────────────┘
         │                             │
         │                             │
         └──────────┬──────────────────┘
                    │
                    ▼
           ┌─────────────────┐
           │  Board Platform  │
           │  ├─ References   │ (Consultant)
           │  └─ Workspace    │ (Client)
           └─────────────────┘

References: Consultant's domain (compliance framework)
Workspace: Client's domain (implementation execution)

Both visible to both parties
Clear boundaries
Mutual visibility
Collaborative success
```

**Real-World Example:**

```
Scenario: ISO 27001 Implementation

Consultant:
1. Creates ISO 27001 workflow (93 controls)
2. Exports to board
3. Controls appear in References panel
4. Adds implementation guidance notes
5. Updates when ISO updates

Client:
1. Reviews controls in References
2. Creates tasks for each control:
   - \"Draft access control policy\"
   - \"Configure MFA for admins\"
   - \"Implement encryption at rest\"
3. Assigns tasks to IT, HR, Legal teams
4. Sets up Sprint 1-6 milestones
5. Creates categories: Critical, High, Medium, Low
6. Groups tasks by domain
7. Tracks progress weekly
8. Moves tasks through columns as work completes

Result:
- Consultant ensures all 93 controls covered
- Client implements at their own pace
- Mutual visibility into progress
- Audit-ready documentation
- Successful certification
```

---

---

### CHAPTER 2: ACCESSING BOARDS

**2.1 Boards Navigation**
- "Boards" link from workflow page
- Board library view
- Empty state if no boards
- Create first board prompt

**2.2 Board Library**
- Grid of board cards
- Board name and description
- Progress bars
- Task count
- Member count
- Percentage complete
- Click to open

**2.3 Creating Boards**
**Method 1: From Scratch**
- "Create Board" button
- Board name (required)
- Description (optional)
- Include references column (checkbox)

**Method 2: From Workflow Export**
- Export button in workflow
- Auto-creates board
- Auto-populates dynamic list
- Opens immediately

---

### CHAPTER 3: THE BOARD INTERFACE

**3.1 Board Header**
- Board name (display)
- Member avatars
- Action buttons (Activity, Archive, Delete)
- Theme toggle
- Help link

**3.2 Management Tools Panel**
**Milestones Carousel:**
- Horizontal scroll
- Milestone cards
- Add milestone button
- Progress indicators

**Categories Carousel:**
- Horizontal scroll
- Category tags
- Add category button
- Card counters

**Groups Carousel:**
- Horizontal scroll
- Group cards
- Add group button
- Card counters

**3.3 Board Columns Area**
- Horizontal scrolling columns
- Default: To Do, In Progress, Review, Done
- Add column button
- Column menus
- Card counts
- WIP limits (if set)

**3.4 Dynamic List Panel**
- Slide-out panel (toggle)
- Tree structure display
- Mode toggle (Creation/Reference)
- Search bar
- Collapse/expand controls
- Task/connection nodes

**3.5 Add Task Button**
- Floating action button
- Quick task creation
- Appears in default column

---

### CHAPTER 4: WORKING WITH COLUMNS

**4.1 Understanding Columns**
- Workflow states
- Left to right progression
- Unlimited columns
- Customizable names
- Reorderable

**4.2 Default Columns**
**To Do:**
- Backlog items
- Not yet started
- Entry point for tasks

**In Progress:**
- Active work
- Current focus
- WIP limits useful here

**Review:**
- Quality check
- Approval needed
- Pre-completion stage

**Done:**
- Completed work
- Achievement tracking
- Progress calculation basis

**4.3 Adding Custom Columns**
- "+" button at end
- Prompt for name
- Auto-positioned at end
- Immediately available

**4.4 Renaming Columns**
- Column menu → Rename
- Enter new name
- Updates immediately
- Historical data preserved

**4.5 Setting WIP Limits**
- Column menu → Set WIP Limit
- Enter numeric limit
- Visual warning when exceeded
- Orange badge on column header
- Soft limit (not enforced)

**4.6 Deleting Columns**
- Column menu → Delete
- Cannot delete if only column
- Cards move to first column
- Confirmation required
- Permanent action

**4.7 The References Column**
**Special Properties:**
- First column if enabled
- Locked (cards cannot leave)
- Reference materials only
- Filter activation point
- Cannot be deleted
- Consultant controlled

**Purpose:**
- Store compliance requirements
- Hold regulation references
- Maintain source documentation
- Link to active work

---

### CHAPTER 5: MANAGING CARDS (TASKS)

**5.1 Creating Cards**
**Quick Create:**
- "Add Card" button on column
- Title only
- Instant creation
- Appears at bottom of column

**Full Create:**
- Floating "+" button
- Title and description
- Full modal form
- More initial details

**5.2 Card Display**
**On Card Face:**
- Labels (up to 3 shown)
- Card title
- Done indicator (if complete)
- Assignment avatars
- Due date (if set, color-coded)
- Milestone badge
- Category badge
- Effort hours
- Comment count
- Attachment count (links, images, notes)

**5.3 Moving Cards**
**Drag and Drop:**
- Click and hold card
- Drag to target column
- Drop to release
- Visual feedback during drag
- Locked columns reject drops

**5.4 Opening Card Details**
- Click anywhere on card
- Full-screen modal opens
- All card properties
- Edit any field
- Add attachments
- View activity

**5.5 Card Properties**

**Title (Required):**
- Main task identifier
- Edit inline in modal
- Auto-saves on blur

**Description:**
- Detailed task information
- Rich text support
- What needs to be done
- How to do it
- Success criteria

**Column:**
- Current workflow state
- Dropdown to change
- Alternative to drag-drop

**Done Status:**
- Checkbox
- Independent of column
- Used for milestone progress
- Visual indicator on card face

**Category:**
- Single category assignment
- Dropdown selection
- Organizational grouping
- Visual badge

**Milestone:**
- Link to milestone
- Dropdown selection
- Progress tracking
- Visual badge

**Due Date:**
- Calendar date picker
- Optional field
- Color coding:
  - Red: Overdue
  - Orange: Due soon (< 3 days)
  - Normal: Future dates

**Effort:**
- Estimated hours
- Actual hours
- Numeric input
- Planning tool

**Assignments:**
- Multiple people
- Four roles: Executor, Approver, Follower, Supervisor
- Avatar display
- Team collaboration

**Groups:**
- Multiple group membership
- Checkbox selection
- Cross-cutting organization
- Bulk operation targets

**Linked References:**
- Links to reference column cards
- Multiple links possible
- Traceability to requirements
- Filter activation

**5.6 Deleting Cards**
- Delete button in modal
- Confirmation required
- Permanent removal
- All data deleted

---

### CHAPTER 6: ATTACHMENTS AND ACTIVITY

**6.1 Comments**
- Add via card modal
- Plain text
- Discussion threads
- Newest first
- Edit and delete own
- Count shown on card face

**6.2 Notes**
- Rich text editor (Quill)
- Formatted content
- Bold, italic, lists, links
- Standalone documentation
- Count shown on card face

**6.3 Links**
- External URLs
- Reference materials
- Policy documents
- Evidence locations
- Count shown on card face
- Click to open in new tab

**6.4 Images**
- External image URLs
- Screenshots
- Diagrams
- Visual documentation
- Thumbnail preview
- Click to enlarge

**6.5 Checklists**
- Subtask items
- Checkbox completion
- Add new items
- Delete items
- Progress indicator
- Completion percentage

**6.6 Activity Log**
- Board-level activity
- 100 most recent events
- User actions
- Timestamps
- Filterable by type
- View from board menu

---

### CHAPTER 7: MILESTONES

**7.1 Understanding Milestones**
- Time-based or goal-based phases
- Link multiple cards
- Auto-track progress
- Visual organization
- Examples: Sprints, quarters, deliverables

**7.2 Creating Milestones**
- "+" button in carousel
- Name (required)
- Description (optional)
- Color picker
- Creates immediately

**7.3 Milestone Properties**
- Name (editable)
- Description (editable)
- Color (editable)
- Linked cards (auto-count)
- Progress (auto-calculated)
- Status: In Progress or Completed

**7.4 Status Calculation**
**Completed:**
- ALL linked cards marked done
- Green indicator
- 100% progress

**In Progress:**
- ANY linked card not done
- Blue indicator
- Percentage shown (e.g., "3/5")

**7.5 Linking Cards to Milestones**
- Card details modal
- Milestone dropdown
- Select from list
- Can change later
- Can unlink (select "None")

**7.6 Viewing Milestone Details**
- Click milestone card
- Modal shows all linked cards
- Organized by column
- Card titles and status
- Quick access to cards

**7.7 Editing and Deleting**
- Edit button: Modify properties
- Delete button: Remove milestone
- Deletes milestone only
- Cards remain (unlinked)

**7.8 Use Cases**
**Sprint Planning:**
- Milestone per sprint
- Link sprint tasks
- Track sprint progress
- Sprint review basis

**Quarterly Goals:**
- Milestone per quarter
- Link quarter initiatives
- Track quarterly completion
- Executive reporting

**Project Phases:**
- Milestone per phase
- Link phase deliverables
- Track phase progress
- Phase gate criteria

---

### CHAPTER 8: CATEGORIES

**8.1 Understanding Categories**
- Organizational buckets
- Single category per card
- Department alignment
- Work type classification
- Examples: Frontend, Backend, Design, Testing, Security

**8.2 Creating Categories**
- "+" button in carousel
- Name (required)
- Color picker
- Creates immediately

**8.3 Category Properties**
- Name (editable)
- Color (editable)
- Linked cards (auto-count)
- Visual badge on cards

**8.4 Assigning Cards to Categories**
- Card details modal
- Category dropdown
- Select one category
- Can change later
- Can unassign (select "None")

**8.5 Filtering by Category**
- Click category in carousel
- Board shows only category cards
- Visual filter banner
- Clear filter button
- Maintains column layout

**8.6 Viewing Category Details**
- Click category card
- Modal shows all cards
- Organized by column
- Card titles and status
- Quick navigation

**8.7 Use Cases**
**Department Organization:**
- Category per department
- Filter by department
- Department progress tracking
- Resource allocation

**Work Type Classification:**
- Frontend, Backend, Database, etc.
- Filter by technology
- Skill allocation
- Technical planning

**Priority Levels:**
- Critical, High, Medium, Low
- Filter by priority
- Focus high-priority first
- Risk management

---

### CHAPTER 9: GROUPS

**9.1 Understanding Groups**
- Cross-cutting collections
- Multiple groups per card
- Bulk operation targets
- Temporary or permanent
- Examples: Design Sprint, Critical Tasks, Q4 Initiative

**9.2 Creating Groups**
- "+" button in carousel
- Name (required)
- Color picker
- Creates immediately

**9.3 Group Properties**
- Name (editable)
- Color (editable)
- Linked cards (auto-count)
- Multi-card membership

**9.4 Adding Cards to Groups**
- Card details modal
- Groups section with checkboxes
- Select multiple groups
- Add/remove any time
- Cards can be in many groups

**9.5 Viewing Group Details**
- Click group card
- Modal shows all group cards
- Organized by column
- Card titles and status
- Bulk action buttons

**9.6 Bulk Operations on Groups**
**Add Milestone:**
- Select milestone
- Applies to all group cards
- Existing milestones replaced

**Remove Milestone:**
- Unlinks from all group cards
- Cards remain in group

**Apply Category:**
- Select category
- Applies to all group cards
- Existing categories replaced

**Remove Category:**
- Unassigns from all group cards
- Cards remain in group

**Mark All Done:**
- Sets done=true on all
- Independent of column
- Milestone progress updates

**Mark All Undone:**
- Sets done=false on all
- Reverses completion
- Milestone progress updates

**Set Due Date:**
- Calendar picker
- Same date for all group cards
- Overrides existing dates

**Clear Due Dates:**
- Removes dates from all
- Cards without dates after

**9.7 Use Cases**
**Sprint Planning:**
- Group for each sprint
- Add sprint tasks to group
- Bulk set due date (sprint end)
- Bulk mark done at sprint completion

**Initiative Tracking:**
- Group for each initiative
- Cross-departmental tasks
- Bulk apply milestone
- Track initiative progress

**Batch Processing:**
- Group related tasks
- Bulk operations
- Efficient management
- Temporary grouping

---

### CHAPTER 10: DYNAMIC LISTS (REFERENCE TREES)

**10.1 Understanding Dynamic Lists**
- Tree-structured references
- Two node types: Tasks and Connections
- Exported from workflows
- Consultant-controlled structure
- Client reference and filtering

**10.2 Panel Interface**
- Toggle button opens/closes
- Side panel overlay
- Mode toggle (Creation/Reference)
- Search bar
- Tree display
- Collapse/expand all

**10.3 Node Types**

**Task Nodes (Standalone):**
- Independent tasks
- Not linked to board cards
- Has description
- Has checklists
- Has comments, notes, links, images
- Yellow indicator

**Connection Nodes (Filters):**
- Link to board cards
- Filter activation
- Compliance requirements
- Reference materials
- Blue indicator

**10.4 Creation Mode**
**For Consultants:**
- Add root nodes
- Add child nodes
- Edit node names
- Delete nodes
- Build reference tree
- Structure compliance requirements

**10.5 Reference Mode**
**For Clients:**
- View tree structure
- Expand/collapse nodes
- Click connection nodes to filter
- View linked card counts
- Open task node details
- Read-only structure

**10.6 Filtering with Connection Nodes**
- Click connection node
- Board filters to linked cards
- Filter banner appears
- Shows requirement context
- Clear filter to reset

**10.7 Task Node Details**
- Click task node
- Modal with full details
- Description
- Checklist items (add/complete/delete)
- Comments thread
- Notes (rich text)
- Links
- Images

**10.8 Workflow Export to Dynamic List**
**Full Export:**
- Entire workflow structure
- All levels become nodes
- All units become nodes
- Hierarchy preserved
- Descriptions copied
- Tags become connections

**Partial Export:**
- Unit-level export
- Unit and children only
- Subtree preserved

**10.9 Smart Card Linking**
- Connection nodes auto-link to cards
- Based on workflow completion status
- Completed units → Done column cards
- Incomplete units → Backlog cards
- Preserves requirement traceability

**10.10 Use Cases**
**Compliance Requirements:**
- Full regulation tree
- Each requirement as node
- Link to implementation cards
- Filter by requirement
- Audit trail

**Project Documentation:**
- Project structure tree
- Deliverables as nodes
- Link to work cards
- Navigate by structure

**Knowledge Base:**
- Process documentation
- Reference materials
- Training content
- Quick access

---

### CHAPTER 11: ASSIGNMENTS AND SCHEDULING

**11.1 Assignment Roles**
**Executor:**
- Primary doer
- Responsible for completion
- Main assignee

**Approver:**
- Reviews and approves
- Quality gate
- Sign-off authority

**Follower:**
- Stays informed
- Receives updates
- Observer

**Supervisor:**
- Oversight role
- Management awareness
- Escalation point

**11.2 Adding Assignments**
- Card details modal
- Assignments section
- Add Assignment button
- Select person
- Select role
- Multiple assignments possible

**11.3 Managing Team Members**
- Board members list
- Add members to board
- Avatar display
- Assignment dropdown populated

**11.4 Due Date Management**
- Calendar date picker
- Due date field in card
- Visual indicators:
  - Red: Overdue
  - Orange: Due soon (<3 days)
  - Normal: Future
- Sort/filter by due date

**11.5 Bulk Due Dates**
- Via groups
- Set same date for all
- Useful for sprints
- Clear dates option

**11.6 Effort Tracking**
**Estimated Effort:**
- Hours to complete
- Planning input
- Capacity planning

**Actual Effort:**
- Hours spent
- Reality check
- Improvement data

---

### CHAPTER 12: FILTERING AND SEARCH

**12.1 Category Filtering**
- Click category badge
- Shows only category cards
- Maintains columns
- Filter banner
- Clear filter button

**12.2 Reference/Backlog Filtering**
- Click backlog/reference card
- Shows linked active cards
- Filter by requirement
- Traceability view
- Clear filter button

**12.3 Dynamic List Filtering**
- Click connection node
- Shows linked cards
- Requirement-based view
- Compliance focus
- Clear filter button

**12.4 Combined Filters**
- Category + Backlog works together
- Narrow focus
- Specific views
- Clear all filters

**12.5 Search (if implemented)**
- Search bar
- Card title search
- Description search
- Real-time results

---

### CHAPTER 13: BOARD MANAGEMENT

**13.1 Board Settings**
- Access via board menu
- Rename board
- Edit description
- Change members
- Board preferences

**13.2 Archiving Boards**
- Archive button
- Removes from active list
- Preserves all data
- Recoverable
- Clean up completed projects

**13.3 Deleting Boards**
- Delete button
- Permanent action
- Confirmation required
- All data lost
- Use with caution

**13.4 Activity Log**
- View from board menu
- Last 100 actions
- User and timestamp
- Action description
- Audit trail

**13.5 Progress Tracking**
- Board card shows progress bar
- Percentage complete
- Based on Done column
- Visual on board library
- Quick status check

---

### CHAPTER 14: COLLABORATION FEATURES

**14.1 Team Communication**
- Card comments
- @mentions (future)
- Discussion threads
- Activity notifications

**14.2 Visibility**
- Shared boards
- Team awareness
- Transparent progress
- Accountability

**14.3 Workload Management**
- Assignment tracking
- Capacity awareness
- WIP limits
- Resource balancing

**14.4 Handoffs**
- Column transitions
- Assignment changes
- Status updates
- Process flow

---

### CHAPTER 15: BEST PRACTICES

**15.1 Board Setup**
**Consultant Actions:**
- Configure dynamic lists
- Structure reference column
- Set up initial milestones
- Define suggested categories
- Provide documentation

**Client Actions:**
- Review references
- Create initial tasks
- Set up team structure
- Define working agreements
- Establish cadence

**15.2 Card Management**
**Card Titles:**
- Action-oriented (verbs)
- Clear and concise
- Self-explanatory
- Examples: "Review security policy", "Complete risk assessment"

**Card Descriptions:**
- Acceptance criteria
- Context and background
- Links to references
- Success definition

**Card Sizing:**
- Break down large tasks
- Aim for completable in 1 sprint
- Use checklists for subtasks
- Manageable chunks

**15.3 Workflow Optimization**
**Column Strategy:**
- Limit columns (5-7 ideal)
- Clear definitions
- Enforce WIP limits
- Regular review

**Milestone Planning:**
- Time-boxed (1-4 weeks)
- Clear goals
- Achievable scope
- Regular cadence

**Category Usage:**
- Meaningful groupings
- Consistent application
- Limited number (5-10)
- Clear definitions

**Group Usage:**
- Temporary for sprints
- Permanent for initiatives
- Bulk operations
- Clean up completed

**15.4 Maintenance**
**Regular Activities:**
- Archive completed boards
- Clean up old groups
- Update categories
- Refresh milestones
- Review filters

**Periodic Review:**
- Board structure
- Column effectiveness
- WIP limits
- Team feedback
- Process improvements

---

### CHAPTER 16: COMPLIANCE BOARD WORKFLOWS

**16.1 Regulation Implementation Board**
**Setup:**
- Export workflow to board
- Full regulation tree in dynamic list
- Reference column with requirements
- Milestones for regulation sections

**Categories:**
- IT Department
- HR Department
- Finance Department
- Legal Department

**Execution:**
- Create implementation cards
- Link to requirement nodes
- Filter by department (category)
- Track by section (milestone)
- Mark controls done
- Audit trail complete

**16.2 Audit Preparation Board**
**Setup:**
- Export audit scope workflow
- Reference column with evidence requirements
- Milestones for audit areas

**Groups:**
- Pre-audit tasks
- Evidence collection
- Remediation items
- Follow-up actions

**Execution:**
- Create evidence cards
- Link to requirements
- Bulk operations on groups
- Track completion by area
- Ready for audit

**16.3 Continuous Monitoring Board**
**Setup:**
- Export monitoring framework
- Monthly milestones
- Categories for control types

**Recurring Tasks:**
- Monthly reviews
- Quarterly assessments
- Annual audits
- Ongoing monitoring

**Execution:**
- Create monitoring cards
- Schedule with due dates
- Track by month (milestone)
- Filter by control type (category)
- Trend analysis

---

### CHAPTER 17: TROUBLESHOOTING

**17.1 Common Issues**
**Cards not moving:**
- Check locked columns
- Verify drag permissions
- Refresh browser

**Filter not clearing:**
- Click "Clear Filter" button
- Check multiple filters active
- Refresh if stuck

**Milestone progress wrong:**
- Check card done status
- Not based on column
- Verify card links
- Recalculates on changes

**Dynamic list not loading:**
- Check export completed
- Verify board created from workflow
- Refresh panel

**17.2 Data Issues**
**Changes not saving:**
- Check network connection
- Verify auto-save active
- Manual save if needed
- Check console errors

**Missing cards:**
- Check active filters
- Verify not in References column
- Check all columns (scroll)
- Review activity log

**17.3 Performance**
**Slow board loading:**
- Too many cards (>500)
- Consider archiving old
- Split into multiple boards
- Clean up completed

**17.4 Getting Help**
- Documentation
- Support contact
- Error messages
- Console logs
- Screenshots

---

### APPENDICES

**Appendix A: Board Keyboard Shortcuts**
**Appendix B: Card Properties Quick Reference**
**Appendix C: Bulk Operations Checklist**
**Appendix D: Board Setup Template**
**Appendix E: Sample Boards by Use Case**
**Appendix F: Integration Guide (Future)**
**Appendix G: Reporting Guide (Future)**

---

*This outline will be filled with detailed content, screenshots, and step-by-step tutorials in the final documentation.*
