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

## CHAPTER 2: ACCESSING BOARDS

Navigate to boards and understand the board library.

### 2.1 Boards Navigation

**From the Platform:**

**Primary Entry Point:**

```
Main Navigation Bar:
[Templates] [Workflows] [Boards] [Documentation]
                          ↑
                    Click here
```

**From Any Page:**

```
Top Navigation:
- Always accessible
- "Boards" link visible globally
- Click to go to Board Library
- Current location highlights in nav bar
```

**From Workflow (After Export):**

```
Workflow → Export to Board → Board Created
                                    ↓
                        "Open Board" button appears
                                    ↓
                            Takes you directly to board
```

**Direct URL:**

```
https://yourplatform.com/boards.html
(Bookmark this for quick access)
```

**Board Library View:**

```
When you click "Boards," you arrive at the Board Library:

┌─────────────────────────────────────────────────────┐
│  Your Boards                                        │
│  Manage all your project boards                    │
│                                          [+ Create] │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ Board 1  │  │ Board 2  │  │ Board 3  │        │
│  │          │  │          │  │          │        │
│  │ ███░░ 60%│  │ ██████ 95%│  │ ░░░░░ 10%│        │
│  └──────────┘  └──────────┘  └──────────┘        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Empty State (No Boards Yet):**

```
First time accessing Boards:

┌─────────────────────────────────────────────────────┐
│                                                     │
│              📋 No Boards Yet                       │
│                                                     │
│  Create your first board to start managing tasks   │
│                                                     │
│            [+ Create Your First Board]              │
│                                                     │
│  Or export a workflow to automatically create      │
│  a board with reference structure                  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Create First Board Prompt:**

```
Helpful guidance for new users:

"Get Started with Boards:

Option 1: Create Empty Board
- Start from scratch
- Build your own structure
- Ideal for general projects

Option 2: Export from Workflow
- Auto-populate with compliance framework
- Reference structure included
- Ideal for compliance projects"

[Create Empty Board]  [Go to Workflows]
```

---

### 2.2 Board Library

**Board Card Display:**

Each board displays as a card in a grid layout with key information at a glance.

**Board Card Structure:**

```
┌─────────────────────────────────────────┐
│  ISO 27001 Implementation               │ ← Board Name
│  Acme Corp certification project        │ ← Description
├─────────────────────────────────────────┤
│  Progress: ████████░░ 75%               │ ← Progress Bar
│                                         │
│  📝 45 tasks  │  👥 8 members           │ ← Stats
│  ✓ 34 done   │  🎯 3 milestones        │
│                                         │
│  Last updated: 2 hours ago              │ ← Timestamp
└─────────────────────────────────────────┘
```

**Board Name and Description:**

```
Board Name:
- Large, bold text
- Clearly identifies project
- Clickable (opens board)

Description:
- 1-2 line summary
- Project context
- Helps distinguish between boards
- Optional but recommended

Example:
Name: "Q1 2024 Security Initiatives"
Description: "Quarterly security projects and compliance updates"
```

**Progress Bars:**

```
Visual Progress Indicator:

████████░░ 75%

Calculation:
Progress = (Done tasks / Total tasks) × 100%

Example:
34 tasks done / 45 total tasks = 75.6% → displayed as 76%

Color Coding:
0-33%:  🔴 Red (not much progress)
34-66%: 🟡 Yellow (making progress)
67-99%: 🟢 Green (almost done)
100%:   🔵 Blue (complete)
```

**Task Count:**

```
📝 45 tasks

Shows total number of cards on board
Includes tasks in all columns
Updated in real-time
Quick gauge of board size
```

**Member Count:**

```
👥 8 members

Shows number of people with board access
Includes all roles (admin, member, viewer)
Click to see member list
Useful for team coordination
```

**Percentage Complete:**

```
✓ 34 done (75%)

Combines:
- Number of completed tasks
- Percentage calculation
- Visual progress bar

Quick status check without opening board
```

**Click to Open:**

```
Interaction:
- Click anywhere on card → Opens board
- Hover: Slight elevation/shadow effect
- Cursor changes to pointer
- Smooth transition to board view

Opens board in same tab
(Use Ctrl+Click to open in new tab)
```

**Board Card Example:**

```
┌─────────────────────────────────────────┐
│  GDPR Compliance - Beta Industries      │
│  Privacy implementation for EU ops      │
├─────────────────────────────────────────┤
│  Progress: ██████░░░░ 55%               │
│                                         │
│  📝 87 tasks  │  👥 12 members          │
│  ✓ 48 done   │  🎯 6 milestones        │
│                                         │
│  Last updated: 15 minutes ago           │
│                                         │
│  Categories: 📄 Docs, 💻 Tech, 👥 HR   │
└─────────────────────────────────────────┘

Hover to see additional details
Click to open board
```

**Sorting and Filtering (if available):**

```
Sort By:
- Last Updated (default)
- Name (A-Z)
- Progress (high to low)
- Created Date

Filter By:
- My Boards
- Shared with Me
- Archived
- By Member
```

---

### 2.3 Creating Boards

**Two Creation Methods:**

1. **From Scratch** - Empty board, build your own structure
2. **From Workflow Export** - Pre-populated with compliance framework

---

**Method 1: From Scratch (Manual Creation)**

**Step-by-Step:**

1. **Click "Create Board" Button**

```
Location: Top-right of Board Library
Button: [+ Create Board]
Action: Opens creation modal
```

2. **Fill in Board Details**

```
Create Board Modal:
┌─────────────────────────────────────────┐
│  Create New Board                    [×]│
├─────────────────────────────────────────┤
│                                         │
│  Board Name: (required)                 │
│  [_________________________________]    │
│                                         │
│  Description: (optional)                │
│  [_________________________________]    │
│  [_________________________________]    │
│                                         │
│  ☑ Include References Column           │
│     (For compliance frameworks)         │
│                                         │
│            [Cancel]  [Create Board]     │
└─────────────────────────────────────────┘
```

3. **Board Name (Required)**

```
Best Practices:
✓ Clear and descriptive
✓ Include project/client name
✓ Include timeframe if relevant

Examples:
✓ "Acme Corp - ISO 27001 Implementation"
✓ "Q1 2024 Security Projects"
✓ "Website Redesign - Sprint 1"

Avoid:
✗ "Board 1" (too vague)
✗ "ISO" (incomplete context)
✗ "New Board" (default, not descriptive)
```

4. **Description (Optional but Recommended)**

```
What to Include:
- Project purpose
- Timeline
- Key stakeholders
- Scope

Example:
"12-month ISO 27001 certification project for Acme Corp's 
EU operations. Includes 93 controls across 4 domains. 
Target completion: Q4 2024."

Benefits:
- Helps team understand context
- Useful when managing many boards
- Good for reporting
```

5. **Include References Column (Checkbox)**

```
☑ Include References Column

What This Does:
- Adds a locked "References" column (first column)
- Column cannot be deleted
- Cards in this column cannot be moved
- Ideal for compliance frameworks

When to Enable:
✓ Compliance projects (ISO, GDPR, SOC 2, etc.)
✓ Need to maintain reference materials
✓ Want locked documentation column

When to Skip:
✗ General project management
✗ Agile software development
✗ Simple task tracking
```

6. **Create Board**

```
Click [Create Board] button:
- Board is created immediately
- Redirects to new board
- Board appears with default columns:
  - References (if enabled)
  - To Do
  - In Progress
  - Review
  - Done
- Empty (no cards yet)
- Ready for task creation
```

**After Creation:**

```
New Empty Board:

┌─────────────────────────────────────────────────────┐
│  Acme Corp - ISO 27001 Implementation               │
├────────┬────────┬────────┬────────┬─────────────────┤
│ Ref    │ To Do  │ In Prog│ Review │ Done            │
├────────┼────────┼────────┼────────┼─────────────────┤
│        │        │        │        │                 │
│ (empty)│ (empty)│ (empty)│ (empty)│ (empty)         │
│        │        │        │        │                 │
│        │  Click │        │        │                 │
│        │  [+]   │        │        │                 │
│        │  to add│        │        │                 │
│        │  task  │        │        │                 │
│        │        │        │        │                 │
└────────┴────────┴────────┴────────┴─────────────────┘

Start adding tasks with [+ Add Task] button
```

---

**Method 2: From Workflow Export (Automated)**

**The Power of Workflow Integration:**

This is the recommended method for compliance projects as it auto-populates your board with the entire compliance framework.

**Step-by-Step:**

1. **Start from Workflow**

```
Open a workflow:
- Navigate to Workflows
- Select workflow (e.g., "ISO 27001:2022 Framework")
- Ensure workflow is complete and saved
```

2. **Click Export Button**

```
Location: Top navigation in workflow
Button: [Export to Board]

Export Modal Opens:
┌─────────────────────────────────────────┐
│  Export Workflow to Board            [×]│
├─────────────────────────────────────────┤
│                                         │
│  Export Method:                         │
│  ● Full Workflow                        │
│  ○ Selected Unit                        │
│  ○ By Tag                               │
│                                         │
│  Destination:                           │
│  ● Create New Board                     │
│  ○ Add to Existing Board                │
│                                         │
│  Board Name:                            │
│  [Acme Corp - ISO 27001 Implementation] │
│                                         │
│  Export Options:                        │
│  ☑ Include Descriptions                 │
│  ☑ Include Links                        │
│  ☑ Include Images                       │
│  ☑ Include Notes                        │
│  ☑ Sync future workflow updates         │
│                                         │
│         [Cancel]  [Export to Board]     │
└─────────────────────────────────────────┘
```

3. **Configure Export**

```
Choose Export Method:
- Full Workflow: All 93 controls (most common)
- Selected Unit: Just one section (e.g., "Access Controls")
- By Tag: Filtered subset (e.g., [Critical] tagged items)

Choose Destination:
- Create New Board: Fresh board (recommended)
- Add to Existing: Append to existing board

Name Your Board:
- Auto-suggests: "[Workflow Name]"
- Edit as needed
- Example: "Acme Corp - ISO 27001 Implementation"

Export Options:
- Include all content (recommended)
- Enable sync (updates when workflow changes)
```

4. **Execute Export**

```
Click [Export to Board]:
- Progress indicator appears
- Exports all units from workflow
- Creates board structure
- Populates references column

Progress:
▓▓▓▓▓▓▓▓░░ 80% (75/93 units exported)

Takes 5-30 seconds depending on workflow size
```

5. **Board Created Automatically**

```
Success Message:
┌─────────────────────────────────────────┐
│  ✓ Board Created Successfully           │
│                                         │
│  93 units exported to:                  │
│  "Acme Corp - ISO 27001 Implementation" │
│                                         │
│     [Open Board]  [Stay in Workflow]    │
└─────────────────────────────────────────┘

Click [Open Board] to go to new board
```

6. **Board Opens with Content**

```
Exported Board Structure:

┌─────────────────────────────────────────────────────┐
│  Acme Corp - ISO 27001 Implementation               │
├─────────────┬────────┬────────┬────────┬───────────┤
│ References  │ To Do  │ In Prog│ Review │ Done      │
│ (Read-Only) │        │        │        │           │
├─────────────┼────────┼────────┼────────┼───────────┤
│ ▼ ISO 27001 │        │        │        │           │
│   ├─ A.5    │ (empty)│ (empty)│ (empty)│ (empty)   │
│   │  └─5.1  │        │        │        │           │
│   │  └─5.2  │  Ready │        │        │           │
│   │  └─5.3  │  for   │        │        │           │
│   ├─ A.6    │  task  │        │        │           │
│   │  └─6.1  │  creat-│        │        │           │
│   │  └─6.2  │  ion   │        │        │           │
│   └─ ...    │        │        │        │           │
│             │        │        │        │           │
└─────────────┴────────┴────────┴────────┴───────────┘

References column: Full ISO 27001 structure
Other columns: Empty, ready for tasks
```

**What Gets Exported:**

```
From Workflow → To Board References:

✓ All unit names
✓ Full hierarchy structure
✓ Descriptions
✓ Display IDs (A.5.1, A.5.2, etc.)
✓ Icons
✓ Tags (become board labels)
✓ Links (policy references)
✓ Images (diagrams, screenshots)
✓ Notes (implementation guidance)

References Column = Complete compliance framework
Ready to reference while creating implementation tasks
```

---

**Comparison: From Scratch vs From Export**

```
From Scratch:
✓ Full control over structure
✓ Simple setup
✓ Good for general projects
✗ No pre-populated content
✗ Manual entry required
Use Case: General project management

From Export:
✓ Auto-populated references
✓ Complete framework included
✓ Linked to source workflow
✓ Syncs with workflow updates
✗ Requires existing workflow
Use Case: Compliance projects
```

**Best Practice:**

```
Compliance Projects:
1. Create template (one-time)
2. Create workflow from template
3. Populate workflow with requirements
4. Export workflow to board
5. Client creates tasks on board

General Projects:
1. Create board from scratch
2. Add columns for your workflow
3. Create tasks directly
4. Manage with milestones and categories
```

---

---

## CHAPTER 3: THE BOARD INTERFACE

Master the board layout and navigation.

### 3.1 Board Header

**Complete Header Layout:**

```
┌────────────────────────────────────────────────────────┐
│ ← ISO 27001 Implementation    👤👤👤  📊 🗄️ 🗑️ 🌓 ❓ │
│   Acme Corp certification                              │
└────────────────────────────────────────────────────────┘
  ↑                              ↑     ↑  ↑  ↑  ↑  ↑
Board Name                    Members  │  │  │  │  │
                                    Activity│  │  │  │
                                        Archive│  │  │
                                            Delete │  │
                                                Theme│
                                                   Help
```

---

**Board Name (Display):**

```
Display:
- Large, prominent text
- Top-left of header
- Shows board title

Example: "ISO 27001 Implementation"
Subtitle: "Acme Corp certification" (if provided)

Clickable:
- Click to edit board name
- Modal opens for editing
- Update name and description
```

**Edit Board Name:**

```
Click on board name → Edit Modal:

┌─────────────────────────────────────┐
│  Edit Board Details              [×]│
├─────────────────────────────────────┤
│                                     │
│  Board Name:                        │
│  [ISO 27001 Implementation_____]   │
│                                     │
│  Description:                       │
│  [Acme Corp certification project_] │
│  [_________________________________]│
│                                     │
│       [Cancel]  [Save Changes]      │
└─────────────────────────────────────┘

Changes save immediately
Board name updates in library view too
```

---

**Member Avatars:**

```
Display:
👤 👤 👤 +5

Shows:
- First 3-4 member avatars
- "+N" if more members
- Hover shows member name

Click to View Members:
┌─────────────────────────────────────┐
│  Board Members (8)               [×]│
├─────────────────────────────────────┤
│                                     │
│  👤 John Smith (Admin)              │
│     john@acme.com                   │
│                                     │
│  👤 Sarah Johnson (Member)          │
│     sarah@acme.com                  │
│                                     │
│  👤 Mike Chen (Member)              │
│     mike@acme.com                   │
│                                     │
│  ... (5 more members)               │
│                                     │
│  [+ Add Member]                     │
└─────────────────────────────────────┘

Roles:
- Admin: Full control
- Member: Can edit
- Viewer: Read-only
```

**Adding Members:**

```
Click [+ Add Member]:

1. Enter email address
2. Select role (Admin/Member/Viewer)
3. Click [Invite]
4. Member receives invitation
5. Joins board after accepting

Or:

Select from existing users:
- List of platform users
- Check to add
- Immediate access
```

---

**Action Buttons:**

**Activity Button (📊):**

```
Purpose: View board activity log

Click to open activity panel:
┌─────────────────────────────────────┐
│  Activity Log                    [×]│
├─────────────────────────────────────┤
│                                     │
│  Today, 2:30 PM                     │
│  👤 John moved "Draft Policy" to    │
│     Done                            │
│                                     │
│  Today, 11:15 AM                    │
│  👤 Sarah added comment to          │
│     "Configure MFA"                 │
│                                     │
│  Yesterday, 4:45 PM                 │
│  👤 Mike created task               │
│     "Review Access Logs"            │
│                                     │
│  ... (more activity)                │
│                                     │
└─────────────────────────────────────┘

Shows:
- All board changes
- Who made the change
- When it happened
- What changed

Useful for:
- Team coordination
- Audit trails
- Progress monitoring
- Understanding history
```

**Archive Button (🗄️):**

```
Purpose: Archive completed board

Click to archive:
┌─────────────────────────────────────┐
│  Archive Board?                  [×]│
├─────────────────────────────────────┤
│                                     │
│  Archive "ISO 27001 Implementation"?│
│                                     │
│  Archived boards:                   │
│  ✓ Hidden from active board list   │
│  ✓ Preserved for future reference  │
│  ✓ Can be restored later           │
│  ✓ Activity log maintained         │
│                                     │
│  ✗ No new tasks can be added       │
│  ✗ Existing tasks become read-only │
│                                     │
│       [Cancel]  [Archive Board]     │
└─────────────────────────────────────┘

When to Archive:
✓ Project completed
✓ Audit finished
✓ Certification achieved
✓ Need to declutter active boards

Restore Later:
- Go to Board Library
- Filter: Archived
- Click board
- Click [Restore]
```

**Delete Button (🗑️):**

```
Purpose: Permanently delete board

Click to delete:
┌─────────────────────────────────────┐
│  Delete Board?                   [×]│
├─────────────────────────────────────┤
│                                     │
│  ⚠️ Warning: This Cannot Be Undone  │
│                                     │
│  Delete "ISO 27001 Implementation"? │
│                                     │
│  This will permanently delete:      │
│  • All 45 tasks                     │
│  • All activity logs                │
│  • All attachments                  │
│  • All comments                     │
│                                     │
│  Type board name to confirm:        │
│  [_________________________________]│
│                                     │
│       [Cancel]  [Delete Forever]    │
└─────────────────────────────────────┘

Safety Features:
- Requires typing board name
- Admin permission required
- Confirmation dialog
- No undo

When to Delete:
✓ Test board no longer needed
✓ Duplicate created by mistake
✓ Client project cancelled
✗ DON'T delete for completed projects (archive instead)
```

---

**Theme Toggle (🌓):**

```
Purpose: Switch between light and dark themes

Click to toggle:
Light Mode ⇄ Dark Mode

Light Mode:
- White background
- Dark text
- High contrast
- Good for bright environments

Dark Mode:
- Dark background
- Light text
- Reduces eye strain
- Good for low-light environments

Preference saved:
- Per-user setting
- Persists across sessions
- Works on all boards
- Platform-wide setting
```

**Help Link (❓):**

```
Purpose: Access documentation and help

Click for help menu:
┌─────────────────────────────────────┐
│  Help & Documentation            [×]│
├─────────────────────────────────────┤
│                                     │
│  📖 Boards Manual                   │
│  📖 Workflows Manual                │
│  📖 Templates Manual                │
│  📖 Platform Overview               │
│                                     │
│  ❓ FAQ                             │
│  💬 Support Chat                    │
│  📧 Contact Support                 │
│  🎥 Video Tutorials                 │
│                                     │
│  ⌨️  Keyboard Shortcuts             │
│                                     │
└─────────────────────────────────────┘

Quick access to:
- Documentation manuals
- Help resources
- Support contact
- Tutorials
```

---

### 3.2 Management Tools Panel

**Location:** Below board header, above columns

**Three Horizontal Carousels:**

```
┌────────────────────────────────────────────────────────┐
│ Milestones                            [←] [→] [+ Add]  │
│ ┌────────┐ ┌────────┐ ┌────────┐                      │
│ │Sprint 1│ │Sprint 2│ │Sprint 3│                      │
│ │██░░ 50%│ │░░░░  0%│ │░░░░  0%│                      │
│ └────────┘ └────────┘ └────────┘                      │
├────────────────────────────────────────────────────────┤
│ Categories                            [←] [→] [+ Add]  │
│ 🔴 Urgent (5)  🟡 Important (12)  🟢 Routine (8)      │
├────────────────────────────────────────────────────────┤
│ Groups                                [←] [→] [+ Add]  │
│ ┌────────┐ ┌────────┐ ┌────────┐                      │
│ │  MFA   │ │Encrypt │ │Training│                      │
│ │██░░ 40%│ │████ 75%│ │██████100%                     │
│ └────────┘ └────────┘ └────────┘                      │
└────────────────────────────────────────────────────────┘
```

---

**Milestones Carousel:**

**Purpose:** Time-based project phases

**Display:**

```
Milestone Card:
┌────────────────┐
│  Sprint 1      │ ← Milestone Name
│  ██████░░░░ 60%│ ← Progress Bar
│  12 / 20 tasks │ ← Task Count
│  Due: Jan 15   │ ← Due Date
└────────────────┘

Hover: Shows more details
Click: Filters board to show only milestone tasks
```

**Horizontal Scroll:**

```
[←] [→] Navigation buttons

If more milestones than fit:
- Use arrows to scroll
- Or drag horizontally
- Smooth scrolling

Example with many milestones:
[←] Sprint 1 | Sprint 2 | Sprint 3 | Sprint 4... [→]
```

**Add Milestone Button:**

```
Click [+ Add] → Create Milestone Modal:

┌─────────────────────────────────────┐
│  Create Milestone                [×]│
├─────────────────────────────────────┤
│                                     │
│  Milestone Name:                    │
│  [Sprint 1________________________] │
│                                     │
│  Description: (optional)            │
│  [Two-week sprint for critical____] │
│  [controls_________________________]│
│                                     │
│  Due Date: (optional)               │
│  [2024-01-15] 📅                    │
│                                     │
│  Color:                             │
│  🔵 🟢 🟡 🔴 🟣 🟤                  │
│                                     │
│       [Cancel]  [Create Milestone]  │
└─────────────────────────────────────┘

After creation:
- Milestone appears in carousel
- Ready to link tasks to milestone
- Progress starts at 0%
```

**Progress Indicators:**

```
Progress Calculation:
Progress = (Linked tasks marked done / Total linked tasks) × 100%

Example:
Milestone "Sprint 1":
- 20 tasks linked to milestone
- 12 tasks marked done
- Progress: 12/20 = 60%

Display: ██████░░░░ 60%

Real-time Update:
- Mark task done → Progress increases
- Uncheck done → Progress decreases
```

**Filtering by Milestone:**

```
Click on milestone card:
- Board filters to show only tasks in that milestone
- Other tasks hidden
- Filter banner appears at top
- Click [X] to clear filter

Example:
Filter: Sprint 1 [×]
Showing 20 of 45 tasks
```

---

**Categories Carousel:**

**Purpose:** Classify tasks by type/theme

**Display:**

```
Category Tag:
🔴 Urgent (5)
↑   ↑      ↑
Icon Name  Count

Click: Filters board to show only tasks in this category
```

**Horizontal Scroll:**

```
Categories scroll horizontally if many:

🔴 Urgent (5) | 🟡 Important (12) | 🟢 Routine (8) | ...

[←] [→] to navigate
Or drag to scroll
```

**Add Category Button:**

```
Click [+ Add] → Create Category Modal:

┌─────────────────────────────────────┐
│  Create Category                 [×]│
├─────────────────────────────────────┤
│                                     │
│  Category Name:                     │
│  [Documentation________________]    │
│                                     │
│  Color:                             │
│  🔴 🟡 🟢 🔵 🟣 🟤 ⚫ ⚪           │
│                                     │
│  Icon: (optional)                   │
│  📄 📊 💻 👥 🔧 🏢 ...            │
│                                     │
│       [Cancel]  [Create Category]   │
└─────────────────────────────────────┘

After creation:
- Category appears in carousel
- Available when creating/editing tasks
- Can be applied to multiple tasks
```

**Card Counters:**

```
Category Tag: 🔴 Urgent (5)
                         ↑
              Number of tasks with this category

Updates in real-time:
- Add category to task → Count increases
- Remove category → Count decreases
- Delete task → Count decreases
```

**Filtering by Category:**

```
Click on category tag:
- Board filters to show only tasks with that category
- Other tasks hidden
- Filter banner appears

Example:
Filter: 🔴 Urgent [×]
Showing 5 of 45 tasks

Helpful for:
- Focus on specific task types
- Department-specific views
- Priority filtering
```

---

**Groups Carousel:**

**Purpose:** Logical collections of related tasks

**Display:**

```
Group Card:
┌────────────────┐
│  MFA           │ ← Group Name
│  Implementation│
│  ████░░░░░░ 40%│ ← Progress
│  2 / 5 tasks   │ ← Completion
└────────────────┘

Click: Filters board to show only tasks in group
```

**Horizontal Scroll:**

```
[←] MFA | Encryption | Training | Access Control... [→]

Navigate with arrows or drag
Smooth horizontal scrolling
```

**Add Group Button:**

```
Click [+ Add] → Create Group Modal:

┌─────────────────────────────────────┐
│  Create Group                    [×]│
├─────────────────────────────────────┤
│                                     │
│  Group Name:                        │
│  [MFA Implementation______________] │
│                                     │
│  Description: (optional)            │
│  [All tasks related to multi-______]│
│  [factor authentication deployment_]│
│                                     │
│  Color:                             │
│  🔵 🟢 🟡 🔴 🟣 🟤                  │
│                                     │
│       [Cancel]  [Create Group]      │
└─────────────────────────────────────┘

After creation:
- Group appears in carousel
- Progress starts at 0%
- Ready to add tasks to group
```

**Card Counters:**

```
Group Card: 2 / 5 tasks
           ↑   ↑
        Done  Total

Shows completion ratio:
- Numerator: Tasks marked done
- Denominator: Total tasks in group
- Updates in real-time
```

**Group-Level Progress:**

```
Progress Calculation:
Progress = (Done tasks in group / Total tasks in group) × 100%

Example:
Group "MFA Implementation":
- 5 tasks in group
- 2 tasks done
- Progress: 2/5 = 40%

Display: ████░░░░░░ 40%

Visual Grouping:
- Tasks in same group can be visually connected
- Helps see related work
- Track sub-project progress
```

---

### 3.3 Board Columns Area

**Main Workspace:**

```
┌────────┬────────┬────────┬────────┬────────┐
│ To Do  │ In Prog│ Review │ Done   │ [+]    │
│   (12) │   (8)  │   (5)  │  (20)  │        │
├────────┼────────┼────────┼────────┼────────┤
│ ┌────┐ │ ┌────┐ │ ┌────┐ │ ┌────┐ │        │
│ │Task│ │ │Task│ │ │Task│ │ │Task│ │        │
│ └────┘ │ └────┘ │ └────┘ │ └────┘ │        │
│        │        │        │        │        │
│ ┌────┐ │ ┌────┐ │ ┌────┐ │ ┌────┐ │        │
│ │Task│ │ │Task│ │ │Task│ │ │Task│ │        │
│ └────┘ │ └────┘ │ └────┘ │ └────┘ │        │
│        │        │        │        │        │
│  ...   │  ...   │  ...   │  ...   │        │
└────────┴────────┴────────┴────────┴────────┘
  ↑                                    ↑
Columns                            Add Column
```

**Horizontal Scrolling:**

```
If many columns:
- Scroll horizontally to see all
- Mouse wheel scroll
- Drag scrollbar
- Touch swipe on mobile

No limit to number of columns
Create as many as needed for your workflow
```

**Default Columns:**

```
New boards start with 4 columns:

1. To Do
   - Backlog
   - Not started
   - Planning

2. In Progress
   - Active work
   - Current focus
   - WIP limit useful here

3. Review
   - Needs checking
   - Awaiting approval
   - Quality control

4. Done
   - Completed work
   - Achieved
   - Success

Fully customizable - rename, reorder, add, delete
```

**Column Structure:**

```
Column Header:
┌────────────────┐
│ In Progress    │ ← Column Name
│ (8 tasks)      │ ← Task Count
│ WIP: 8/10 ⚠️   │ ← WIP Limit (if set)
│      ⋮         │ ← Column Menu
└────────────────┘

Column Body:
│ ┌────────────┐ │
│ │   Task 1   │ │ ← Cards
│ └────────────┘ │
│                │
│ ┌────────────┐ │
│ │   Task 2   │ │
│ └────────────┘ │
```

**Add Column Button ([+]):**

```
Location: Far right of columns
Click [+] → Add Column Modal:

┌─────────────────────────────────────┐
│  Add Column                      [×]│
├─────────────────────────────────────┤
│                                     │
│  Column Name:                       │
│  [QA Testing___________________]    │
│                                     │
│  Position:                          │
│  ○ At end (default)                 │
│  ○ After "In Progress"              │
│  ○ Before "Done"                    │
│                                     │
│  WIP Limit: (optional)              │
│  [5_____] tasks                     │
│  (Leave blank for no limit)         │
│                                     │
│       [Cancel]  [Add Column]        │
└─────────────────────────────────────┘

Column appears immediately
Ready to add tasks
```

**Column Menus:**

```
Click ⋮ (three dots) → Column Menu:

┌─────────────────────┐
│ Rename Column       │
│ Set WIP Limit       │
│ Change Color        │
│ Move Left           │
│ Move Right          │
│ ──────────────      │
│ Delete Column       │
└─────────────────────┘

Actions:
- Rename: Change column name
- WIP Limit: Set max tasks allowed
- Color: Visual distinction
- Move: Reorder columns
- Delete: Remove column (moves tasks to first column)
```

**Card Counts:**

```
Display: (8 tasks)

Shows number of cards in column
Updates in real-time:
- Add task → Count increases
- Move task out → Count decreases
- Delete task → Count decreases

Helpful for:
- Visualizing workload
- Balancing work across columns
- Identifying bottlenecks
```

**WIP Limits (Work In Progress):**

```
Purpose: Prevent overload, maintain flow

Set WIP Limit:
Column Menu → Set WIP Limit → Enter number

Example:
In Progress: WIP Limit = 10

Display:
In Progress
(12 tasks)
WIP: 12/10 ⚠️

Warning (⚠️) when exceeded:
- Orange/red badge
- Visual indicator
- Soft limit (not enforced)
- Encourages moving tasks forward

Benefits:
- Prevents too much parallel work
- Encourages finishing before starting
- Improves flow and focus
- Identifies bottlenecks
```

**Drag and Drop:**

```
Move cards between columns:

1. Click and hold card
2. Drag to target column
3. Drop in column
4. Card moves

Visual Feedback:
- Card lifts (shadow effect)
- Target column highlights
- Drop zones show
- Smooth animation

Keyboard Alternative:
- Select card
- Press Ctrl+→ (move right)
- Press Ctrl+← (move left)
```

---

### 3.4 Dynamic List Panel

**Purpose:** Reference tree from exported workflows

**Panel Location:**

```
┌─────────────────────────────────────────────┐
│  Board Header                               │
├──────────┬──────────────────────────────────┤
│ Dynamic  │  Board Columns                   │
│ List     │  (Main Workspace)                │
│ (Panel)  │                                  │
│          │  To Do│In Prog│Review│Done      │
│ ▼ ISO    │                                  │
│   ├─A.5  │  Task  Task    Task   Task      │
│   ├─A.6  │                                  │
│   └─A.7  │                                  │
│          │                                  │
│ [Toggle] │                                  │
└──────────┴──────────────────────────────────┘
   ↑                    ↑
References          Execution
(Read-Only)         (Editable)
```

**Slide-Out Panel (Toggle):**

```
Toggle Button: [◀] or [▶]

Click to toggle:
[◀] Close panel (more space for columns)
[▶] Open panel (see references)

Panel States:
- Open: Takes ~25% of screen width
- Closed: Hidden, full width for columns

Preference saved per user
```

**Tree Structure Display:**

```
Hierarchy Display:

▼ ISO 27001:2022
  ├─ ▼ Organizational Controls
  │  ├─ A.5.1 Information Security Policy
  │  ├─ A.5.2 Information Security Roles
  │  └─ A.5.3 Separation of Duties
  │
  ├─ ▶ People Controls (collapsed)
  │
  ├─ ▶ Physical Controls (collapsed)
  │
  └─ ▶ Technological Controls (collapsed)

▼ = Expanded
▶ = Collapsed
Click to toggle
```

**Mode Toggle (Creation/Reference):**

```
Two Modes:

[Creation Mode] [Reference Mode]
      ↑              ↑
  (Selected)    (Not selected)

Creation Mode:
- Can add connections to tasks
- Link tasks to reference items
- Show which tasks address which requirements

Reference Mode:
- View-only
- Browse compliance framework
- Read descriptions and guidance

Most users stay in Reference Mode
```

**Search Bar:**

```
Search within dynamic list:

┌─────────────────────────────────┐
│ 🔍 Search references... [×]     │
└─────────────────────────────────┘

Type to search:
- Unit names
- Display IDs
- Descriptions

Results highlight:
- Matching items expand automatically
- Search term highlighted in yellow
- Clear search with [×]

Example:
Search: "MFA"
Results: Highlights "Multi-Factor Authentication" items
```

**Collapse/Expand Controls:**

```
Control Buttons:

[▼ Expand All] [▲ Collapse All]

Expand All:
- Opens all tree nodes
- See full structure
- Useful for overview

Collapse All:
- Closes all tree nodes
- Clean view
- See only top-level items

Keyboard:
- Space: Expand/collapse selected item
- → : Expand
- ← : Collapse
```

**Task/Connection Nodes:**

```
Show Task Connections:

▼ A.5.1 Information Security Policy
  │
  ├─ 📋 Draft InfoSec Policy (To Do)
  ├─ 📋 Get legal review (In Progress)
  └─ 📋 Publish to intranet (Done)
     ↑
  Tasks linked to this requirement

Benefits:
- See which tasks address which requirements
- Ensure requirement coverage
- Track requirement completion
- Audit trail
```

**Dynamic List Features:**

```
Features:
✓ Full workflow structure (read-only)
✓ Expand/collapse navigation
✓ Search functionality
✓ Link tasks to reference items
✓ See task connections
✓ Compliance coverage tracking
✓ Syncs with source workflow
✓ Always current

Use Cases:
- Reference compliance requirements
- Ensure coverage
- Link tasks to requirements
- Audit preparation
- Team guidance
```

---

### 3.5 Add Task Button

**Floating Action Button (FAB):**

```
Location: Bottom-right corner of board

┌──────────────────────────────────────┐
│  Board Columns                       │
│                                      │
│  To Do│In Progress│Review│Done      │
│                                      │
│  Task  Task        Task   Task      │
│                                      │
│                                      │
│                                  ┌───┐
│                                  │ + │ ← FAB
│                                  └───┘
└──────────────────────────────────────┘

Always visible
Floats above content
Click to create task
```

**Quick Task Creation:**

```
Click [+] → Quick Add Task Dialog:

┌─────────────────────────────────────┐
│  Quick Add Task                  [×]│
├─────────────────────────────────────┤
│                                     │
│  Task Title:                        │
│  [Draft MFA Policy______________]   │
│                                     │
│  Column:                            │
│  [To Do ▼]                          │
│                                     │
│  Assign to: (optional)              │
│  [Select member... ▼]               │
│                                     │
│  Due Date: (optional)               │
│  [2024-01-15] 📅                    │
│                                     │
│     [Cancel]  [Create Task]         │
│                                     │
│  Or [Create & Add Another]          │
└─────────────────────────────────────┘

Fast task creation without leaving board view
```

**Appears in Default Column:**

```
New task appears in selected column:
- Choose column in dialog
- Defaults to "To Do"
- Task appears at bottom of column
- Can be moved immediately

Or:

Click [+] within a specific column:
- Task automatically goes in that column
- Even faster creation
```

**Keyboard Shortcut:**

```
Press: N (for "New task")

Opens quick add dialog
Start typing immediately
Fast task entry

Ideal for:
- Rapid brainstorming
- Sprint planning
- Quick capture
```

---

---

## CHAPTER 4: WORKING WITH COLUMNS

Customize your workflow states with flexible column management.

### 4.1 Understanding Columns

**What are Columns:**

Columns represent the stages or states that tasks move through during their lifecycle.

**Kanban Column Concept:**

```
Traditional Workflow:
Task created → Task in progress → Task reviewed → Task completed

Kanban Board Columns:
[To Do] → [In Progress] → [Review] → [Done]

Each column = One state
Cards (tasks) move left to right as they progress
```

**Workflow States:**

```
Column = State of Work

Examples by Project Type:

Software Development:
Backlog → To Do → Development → Code Review → QA → Staging → Production

Compliance Implementation:
Not Started → Planning → Implementation → Documentation → Review → Complete

Manufacturing:
Design → Prototype → Testing → Quality Check → Production → Shipped

Content Creation:
Ideas → Outline → Draft → Editing → Review → Published
```

**Left to Right Progression:**

```
Standard Flow:

←────────────────────────────────────────────→
Start                                       End

[Backlog] → [To Do] → [Doing] → [Done]

Conventions:
- Left: Early stages
- Middle: Active work
- Right: Completion

Visual Flow:
- Cards enter from left
- Move rightward as progress
- End at rightmost column (typically "Done")
```

**Unlimited Columns:**

```
Create as many as needed:

Simple: 3 columns
[To Do] [Doing] [Done]

Standard: 4 columns
[To Do] [In Progress] [Review] [Done]

Complex: 8+ columns
[Backlog] [To Do] [In Progress] [Code Review] [QA Testing] [UAT] [Staging] [Done]

No artificial limits
Adapt to your process
```

**Customizable Names:**

```
Not limited to default names
Rename to match your terminology:

✓ "Backlog" or "Ideas" or "Queue"
✓ "In Progress" or "Doing" or "Active Work"
✓ "Review" or "QA" or "Approval"
✓ "Done" or "Complete" or "Deployed"

Use terms your team understands
```

**Reorderable:**

```
Change column sequence:
- Drag column headers to reorder
- Or use column menu (Move Left/Right)

Example:
Before: [To Do] [Done] [In Progress]
(Wrong order!)

After: [To Do] [In Progress] [Done]
(Correct flow!)

Order matters for intuitive workflow
```

---

### 4.2 Default Columns

New boards start with 4 standard columns optimized for most projects.

**To Do:**

**Purpose:** Task backlog and entry point

```
Characteristics:
- Leftmost column (after References if present)
- Where new tasks start
- Not yet assigned or scheduled
- Planning stage

Typical Contents:
- Newly created tasks
- Unassigned work
- Future tasks
- Ideas and possibilities

Example Tasks:
├─ "Draft MFA policy"
├─ "Research encryption solutions"
├─ "Schedule security training"
└─ "Review firewall rules"

State: Not started, planning phase
```

**When to Move FROM To Do:**

```
Move to next column when:
✓ Task is assigned to someone
✓ Work is about to begin
✓ Resources are available
✓ Dependencies are resolved

Keep IN To Do when:
- Not ready to start
- Waiting for something
- Lower priority
- Still planning
```

---

**In Progress:**

**Purpose:** Active work happening now

```
Characteristics:
- Middle column (active work zone)
- WIP limits most useful here
- Indicates current team focus
- High-attention area

Typical Contents:
- Tasks being worked on right now
- Assigned and active
- Team's current focus
- Today's work

Example Tasks:
├─ "Writing access control policy" (Sarah, 60% done)
├─ "Configuring MFA in Azure AD" (John, in progress)
└─ "Installing encryption software" (Mike, started today)

State: Active, in progress, being worked on
```

**WIP Limit Recommendation:**

```
Set WIP limit = Number of team members × 1.5

Examples:
- 4 team members → WIP limit: 6 tasks
- 8 team members → WIP limit: 12 tasks

Prevents:
- Too many concurrent tasks
- Context switching
- Unfinished work piling up

Encourages:
- Finishing before starting
- Focus on completion
- Better flow
```

---

**Review:**

**Purpose:** Quality check and approval

```
Characteristics:
- Pre-completion stage
- Awaiting verification
- Quality gate
- Approval checkpoint

Typical Contents:
- Completed work awaiting review
- Documents pending approval
- Code in code review
- Deliverables before acceptance

Example Tasks:
├─ "InfoSec Policy v1.0" (Awaiting legal review)
├─ "MFA Configuration" (Awaiting security approval)
└─ "Training Materials" (Awaiting manager approval)

State: Done with work, pending verification
```

**Who Reviews:**

```
Reviewers depend on task type:

Technical Tasks → Technical Lead
Documentation → Legal/Compliance
Policies → Management
Code → Senior Developer
Designs → Design Lead

Assign reviewers:
- In task assignments
- In task comments
- Via @ mentions
```

**Review Process:**

```
1. Worker moves task to Review column
2. Reviewer notified (if notifications enabled)
3. Reviewer checks task
4. Options:
   ✓ Approve → Move to Done
   ✗ Request changes → Move back to In Progress
   ? Need info → Add comment, keep in Review

Fast track compliance:
Ensures quality before marking complete
```

---

**Done:**

**Purpose:** Completed and approved work

```
Characteristics:
- Rightmost column
- Finished tasks
- Approved and accepted
- Achievement tracking

Typical Contents:
- Completed and approved tasks
- Delivered work
- Achieved milestones
- Success stories

Example Tasks:
├─ "✓ InfoSec Policy Published" (Completed Jan 15)
├─ "✓ MFA Deployed Company-Wide" (Completed Jan 20)
└─ "✓ Security Training Complete" (Completed Jan 25)

State: Finished, approved, delivered
```

**Done Means Done:**

```
Tasks in Done column should be:
✓ Work completed
✓ Quality verified
✓ Approved by reviewer
✓ Delivered to stakeholder
✓ No further action needed

Not Done:
✗ "90% complete" → Keep in In Progress or Review
✗ "Waiting for approval" → Keep in Review
✗ "Almost done" → Not done yet
```

**Progress Calculation:**

```
Board Progress = Tasks in Done / Total Tasks

Example:
- To Do: 10 tasks
- In Progress: 5 tasks
- Review: 3 tasks
- Done: 27 tasks

Total: 45 tasks
Done: 27 tasks
Progress: 27/45 = 60%

Done column drives board completion percentage
```

---

### 4.3 Adding Custom Columns

**When to Add Columns:**

```
Add columns when:
✓ Need more granular workflow states
✓ Have specific approval stages
✓ Separate different types of work
✓ Compliance requires specific stages
✓ Team needs more clarity

Examples:
- Add "QA Testing" between Review and Done
- Add "Backlog" before To Do
- Add "Deployed" after Done
- Add "Blocked" for stuck tasks
```

**How to Add:**

**Method 1: Plus Button**

```
1. Scroll to far right of columns
2. Click [+] button
3. Add Column modal opens
4. Enter column name
5. Choose position
6. Click [Add Column]

Column appears immediately
```

**Method 2: Column Menu**

```
Some implementations:
- Any column menu → Add Column After
- Creates column immediately after current
- Skip position selection
```

**Add Column Modal:**

```
┌─────────────────────────────────────┐
│  Add Column                      [×]│
├─────────────────────────────────────┤
│                                     │
│  Column Name: (required)            │
│  [QA Testing___________________]    │
│                                     │
│  Position:                          │
│  ● At end (default)                 │
│  ○ After "In Progress"              │
│  ○ Before "Done"                    │
│  ○ At beginning                     │
│                                     │
│  Color: (optional)                  │
│  🔵 🟢 🟡 🔴 🟣 🟤 ⚫              │
│                                     │
│  WIP Limit: (optional)              │
│  [____] tasks (blank = no limit)    │
│                                     │
│       [Cancel]  [Add Column]        │
└─────────────────────────────────────┘
```

**Positioning Options:**

```
At End (Default):
Before: [To Do] [In Progress] [Review] [Done]
After:  [To Do] [In Progress] [Review] [Done] [QA Testing]

After "In Progress":
Before: [To Do] [In Progress] [Review] [Done]
After:  [To Do] [In Progress] [QA Testing] [Review] [Done]

Before "Done":
Same as "After Review" in most cases

At Beginning:
Before: [To Do] [In Progress] [Review] [Done]
After:  [Backlog] [To Do] [In Progress] [Review] [Done]
```

**Immediate Availability:**

```
After creation:
✓ Column appears on board
✓ Can add tasks immediately
✓ Can drag tasks to it
✓ Included in column count
✓ Appears in column selection dropdowns

Auto-saves:
- No manual save needed
- Column persists immediately
- Visible to all board members
```

---

### 4.4 Renaming Columns

**When to Rename:**

```
Reasons to rename:
- Initial name unclear
- Team prefers different terminology
- Process changes
- Better clarity needed

Example:
"In Progress" → "Active Development" (more specific)
"Review" → "Code Review" (clarifies type of review)
"Done" → "Deployed to Production" (explicit outcome)
```

**How to Rename:**

```
1. Click column menu (⋮)
2. Select "Rename Column"
3. Enter new name
4. Press Enter or click Save
5. Column renames immediately

Or:

Double-click column name (if enabled)
- Inline editing
- Type new name
- Press Enter
- Updates immediately
```

**Rename Column Dialog:**

```
┌─────────────────────────────────────┐
│  Rename Column                   [×]│
├─────────────────────────────────────┤
│                                     │
│  Current Name: "In Progress"        │
│                                     │
│  New Name:                          │
│  [Active Development___________]    │
│                                     │
│       [Cancel]  [Rename]            │
└─────────────────────────────────────┘

Changes apply immediately
No data loss
Historical activity logs preserve old name
```

**Updates Immediately:**

```
Before:
[To Do] [In Progress] [Done]
         ↑
    Rename this

After:
[To Do] [Active Development] [Done]
         ↑
    New name shows immediately
```

**Historical Data Preserved:**

```
Activity Log Maintains Context:

Before Rename:
"John moved task to In Progress" (Jan 10, 10:00 AM)

After Rename to "Active Development":
"John moved task to Active Development" (Jan 10, 10:00 AM)
(Some implementations update retroactively)

Or:
"John moved task to In Progress (now 'Active Development')"
(Shows both names for clarity)

Cards in column:
- Remain in column
- Not affected by rename
- Continue working normally
```

---

### 4.5 Setting WIP Limits

**What are WIP Limits:**

```
WIP = Work In Progress

WIP Limit = Maximum number of tasks allowed in a column

Purpose:
- Prevent overload
- Maintain focus
- Encourage completion before starting new work
- Identify bottlenecks
```

**How to Set:**

```
1. Click column menu (⋮)
2. Select "Set WIP Limit"
3. Enter numeric limit
4. Click [Save]
5. Limit applies immediately

Dialog:
┌─────────────────────────────────────┐
│  Set WIP Limit                   [×]│
├─────────────────────────────────────┤
│                                     │
│  Column: "In Progress"              │
│                                     │
│  Maximum tasks allowed:             │
│  [10____]                           │
│                                     │
│  Current tasks in column: 8         │
│                                     │
│  ☐ Block new tasks when limit hit  │
│     (Soft limit - warning only)     │
│                                     │
│       [Cancel]  [Set Limit]         │
└─────────────────────────────────────┘
```

**Visual Warning When Exceeded:**

```
Column with WIP Limit:

Normal (Under Limit):
┌────────────────┐
│ In Progress    │
│ (8 tasks)      │
│ WIP: 8/10 ✓    │ ← Green indicator
└────────────────┘

Exceeded (Over Limit):
┌────────────────┐
│ In Progress    │
│ (12 tasks)     │
│ WIP: 12/10 ⚠️  │ ← Orange/red warning
└────────────────┘
```

**Orange Badge on Column Header:**

```
Visual Indicators:

[In Progress (12) ⚠️]
                   ↑
            Warning badge

Color changes:
- Green: Under limit
- Orange: At limit
- Red: Significantly over limit

Purpose: Visual reminder to finish work before starting more
```

**Soft Limit (Not Enforced):**

```
Soft Limit = Warning, not blocking

You CAN still:
✓ Add more tasks to column
✓ Drag tasks to column
✓ Move tasks beyond limit

System just warns you:
"WIP limit exceeded. Consider finishing existing tasks first."

Hard Limit (if enabled):
✗ Blocks new tasks when limit reached
✗ Cannot drag tasks to full column
(Rarely used - too restrictive)
```

**Recommended WIP Limits:**

```
Formula:
WIP Limit = Team Size × 1.5 to 2

Examples:
- 4 developers → WIP: 6-8 tasks
- 2 developers → WIP: 3-4 tasks
- 10 team members → WIP: 15-20 tasks

Adjust based on:
- Task complexity (complex tasks → lower WIP)
- Task duration (short tasks → higher WIP)
- Team experience (new teams → lower WIP)
```

**Benefits:**

```
Prevents:
✗ Context switching
✗ Unfinished work accumulation
✗ Bottlenecks going unnoticed
✗ Team overload

Encourages:
✓ Finishing before starting
✓ Focus and completion
✓ Identifying blockers
✓ Better flow

Result:
- More tasks actually completed
- Less stress
- Better quality
```

---

### 4.6 Deleting Columns

**When to Delete:**

```
Reasons to delete:
- Column no longer needed
- Process simplified
- Wrong column created
- Workflow changed

Example:
Had "Staging" column for testing
Moved to continuous deployment
"Staging" column obsolete → Delete
```

**How to Delete:**

```
1. Click column menu (⋮)
2. Select "Delete Column"
3. Confirmation dialog appears
4. Confirm deletion
5. Column removed immediately

Cannot Delete If:
- Only 1 column remains (board must have at least one)
- Column is "References" (locked column)
```

**Delete Column Dialog:**

```
┌─────────────────────────────────────┐
│  Delete Column?                  [×]│
├─────────────────────────────────────┤
│                                     │
│  Delete column "QA Testing"?        │
│                                     │
│  ⚠️ This column has 5 tasks         │
│                                     │
│  Tasks will be moved to:            │
│  [To Do ▼] (select destination)     │
│                                     │
│  This action cannot be undone.      │
│                                     │
│       [Cancel]  [Delete Column]     │
└─────────────────────────────────────┘
```

**Cards Move to First Column:**

```
Before Delete:
[To Do] [In Progress] [QA Testing] [Done]
                       ↑
                   5 tasks here

Delete "QA Testing" →

After Delete:
[To Do] [In Progress] [Done]
   ↑
5 tasks moved here (default)

Or:
Choose destination column in delete dialog
Tasks move there instead
```

**Confirmation Required:**

```
Safety measures:
- Must click through confirmation
- Shows task count in column
- Option to choose task destination
- Admin permission may be required

Prevents accidental deletion
```

**Permanent Action:**

```
Cannot undo column deletion

After deletion:
✗ Column structure removed
✗ Column configuration lost
✗ Historical activity logs keep old column name references

✓ Tasks preserved (moved to another column)
✓ Task data intact
✓ Can recreate column if needed (but configuration is lost)

Think carefully before deleting
```

---

### 4.7 The References Column

**Special Column for Compliance Frameworks:**

The References column is a unique, locked column designed specifically for compliance and regulatory frameworks.

**Special Properties:**

**1. First Column (If Enabled):**

```
Board Layout with References:

[References] [To Do] [In Progress] [Review] [Done]
     ↑
 Always first
```

**2. Locked (Cards Cannot Leave):**

```
References Column Behavior:

✓ Can add cards to References
✓ Can view cards in References
✗ CANNOT drag cards out of References
✗ CANNOT move References cards to other columns

Purpose:
- Keep reference materials separate
- Prevent accidental mixing with execution tasks
- Maintain clean reference library
```

**3. Reference Materials Only:**

```
Typical Reference Column Contents:

Compliance Requirements:
├─ "GDPR Article 32: Security of Processing"
├─ "ISO 27001 A.9.4.3: MFA Requirement"
├─ "NIST CSF PR.AC-7: Access Control"
└─ ... (more requirements)

NOT for execution tasks:
✗ "Draft MFA policy" (this goes in To Do)
✗ "Configure encryption" (this goes in To Do/In Progress)

References = WHAT to do
Other columns = WHO, WHEN, HOW
```

**4. Filter Activation Point:**

```
Click reference item:
- Filters board to show only linked tasks
- See which tasks address this requirement
- Track requirement coverage

Example:
Click "A.9.4.3: MFA Requirement" in References
↓
Board filters to show:
- "Research MFA solutions" (To Do)
- "Purchase MFA licenses" (In Progress)
- "Deploy MFA" (Done)

All tasks linked to this requirement visible
Others hidden
```

**5. Cannot Be Deleted:**

```
References column is permanent (if enabled at board creation)

Attempting to delete:
┌─────────────────────────────────────┐
│  Cannot Delete References Column    │
├─────────────────────────────────────┤
│                                     │
│  The References column is locked    │
│  and cannot be deleted.             │
│                                     │
│  It maintains compliance framework  │
│  structure and requirement links.   │
│                                     │
│            [OK]                      │
└─────────────────────────────────────┘

Protection for compliance integrity
```

**6. Consultant Controlled:**

```
Typical Access:
- Consultant: Can add/edit References
- Client: Read-only access to References
- Client: Full control of other columns

Permission Model:
References Column: Consultant domain
Other Columns: Client domain

Prevents:
- Client accidentally deleting requirements
- Framework structure corruption
- Compliance gaps
```

---

**Purpose of References Column:**

**Store Compliance Requirements:**

```
Populate with:
- Regulatory requirements (GDPR articles, ISO controls)
- Compliance obligations
- Legal requirements
- Standards and frameworks
- Policy requirements

Example:
├─ "GDPR Art. 5(1)(a): Lawfulness"
├─ "GDPR Art. 5(1)(b): Purpose Limitation"
├─ "GDPR Art. 5(1)(c): Data Minimization"
└─ ... (all GDPR principles)

Complete compliance reference library
```

**Hold Regulation References:**

```
Reference card contains:
- Requirement title
- Regulatory source (article, clause)
- Description (what is required)
- Implementation guidance
- Links to official regulation text
- Evidence requirements

Team references while creating implementation tasks
```

**Maintain Source Documentation:**

```
References = Single Source of Truth

Workflow (Source):
- Consultant updates when regulations change
- Syncs to board references
- Always current

Board References:
- Reflects current regulation
- Team always has latest requirements
- No outdated frameworks

Synchronization:
Workflow changes → References update automatically
```

**Link to Active Work:**

```
Task-to-Requirement Linkage:

Reference: "A.9.4.3: Multi-Factor Authentication"
     ↓ (linked to)
Tasks:
├─ "Research MFA solutions"
├─ "Purchase MFA licenses"
└─ "Deploy MFA"

Benefits:
- Track which requirements are covered
- Identify gaps (requirements with no tasks)
- Audit trail (show how requirement was met)
- Coverage reporting (% of requirements addressed)
```

**Use Case Example:**

```
Compliance Board Setup:

Step 1: Export ISO 27001 workflow to board
Result: 93 controls appear in References column

Step 2: Client creates implementation tasks in To Do
Result: Execution tasks in main columns

Step 3: Link tasks to requirements
Task "Implement MFA" linked to Control "A.9.4.3"

Step 4: Auditor visits
Shows:
- Control A.9.4.3 in References (requirement)
- Linked tasks showing implementation (evidence)
- Clear traceability
- Audit success

References column = Compliance backbone of board
```

---

---

## CHAPTER 5: MANAGING CARDS (TASKS)

Cards are the fundamental unit of work on a board, representing individual tasks, deliverables, or action items.

### 5.1 Creating Cards

**Two Creation Methods:**

**Quick Create - Fast Entry:**

```
Purpose: Rapid task capture

Location: Each column has [+ Add Card] button

Click [+ Add Card]:
┌─────────────────────────────┐
│ [Task title_______________] │ ← Type title
│ [Add Card]                  │ ← Press Enter or click
└─────────────────────────────┘

Workflow:
1. Click [+ Add Card] in desired column
2. Type task title
3. Press Enter (or click Add Card)
4. Card appears at bottom of column
5. Ready for next task

Ideal for:
- Brainstorming sessions
- Sprint planning
- Rapid task entry
- Initial task capture
```

**Quick Create Example:**

```
In "To Do" column, click [+ Add Card]:

Type: "Draft MFA policy"
Press Enter →

Card appears:
┌─────────────────────────────┐
│ Draft MFA policy            │
└─────────────────────────────┘

Type next task: "Configure Azure AD"
Press Enter →

Another card appears:
┌─────────────────────────────┐
│ Configure Azure AD          │
└─────────────────────────────┘

Fast, efficient, continuous entry
```

---

**Full Create - Detailed Entry:**

```
Purpose: Create task with full details upfront

Location: Floating [+] button (bottom-right corner)

Click [+] → Full Create Modal Opens:

┌─────────────────────────────────────┐
│  Create Task                     [×]│
├─────────────────────────────────────┤
│                                     │
│  Title: (required)                  │
│  [Draft Multi-Factor Auth Policy__] │
│                                     │
│  Description:                       │
│  [Create comprehensive MFA policy_] │
│  [covering all access scenarios___]│
│                                     │
│  Column:                            │
│  [To Do ▼]                          │
│                                     │
│  Assign to:                         │
│  [Sarah Johnson ▼] (Executor)       │
│                                     │
│  Due Date:                          │
│  [2024-02-15] 📅                    │
│                                     │
│  Milestone:                         │
│  [Sprint 1 ▼]                       │
│                                     │
│  Category:                          │
│  [Documentation ▼]                  │
│                                     │
│  Estimated Effort:                  │
│  [8____] hours                      │
│                                     │
│     [Cancel]  [Create Task]         │
└─────────────────────────────────────┘

More fields, less follow-up editing needed
```

**Full Create Benefits:**

```
Advantages:
✓ Set all properties at creation
✓ Assign immediately
✓ Set deadlines upfront
✓ Link to milestone/category
✓ Estimate effort

Ideal for:
- Planned tasks with known details
- Formal project management
- Tasks needing immediate assignment
- Compliance tasks with requirements
```

**Appears at Bottom of Column:**

```
New cards always append to bottom:

Column Before:
┌──────────────┐
│ Task 1       │
│ Task 2       │
│ Task 3       │
└──────────────┘

Add "Task 4" →

Column After:
┌──────────────┐
│ Task 1       │
│ Task 2       │
│ Task 3       │
│ Task 4       │ ← New card here
└──────────────┘

Drag to reorder if needed
```

---

### 5.2 Card Display

**Card Face Layout:**

The card face shows key information at a glance without opening the full details.

**Complete Card Anatomy:**

```
┌───────────────────────────────────────┐
│ 🔴 📄 🟢                               │ ← Labels (max 3)
│                                       │
│ Draft Multi-Factor Authentication     │ ← Title
│ Policy                                │
│                                       │
│ ✓ Done                                │ ← Done indicator
│                                       │
│ 👤 👤                                 │ ← Assignments (avatars)
│                                       │
│ 📅 Feb 15 🔴                          │ ← Due date (color-coded)
│ 🎯 Sprint 1                           │ ← Milestone badge
│ 📂 Documentation                      │ ← Category badge
│                                       │
│ ⏱️ 8h est  💬 3  📎 5                │ ← Effort, Comments, Attachments
└───────────────────────────────────────┘
```

**Labels (Up to 3 Shown):**

```
Display:
🔴 🟡 🟢 (colored circles/badges)

Purpose:
- Quick visual coding
- At-a-glance categorization
- Priority indication
- Status markers

If more than 3 labels:
🔴 🟡 🟢 +2 
          ↑
    (shows count of additional labels)

Click card to see all labels
```

**Card Title:**

```
Display:
- Large, prominent text
- 1-3 lines (truncated if longer)
- Main task identifier

Examples:
✓ "Draft MFA Policy"
✓ "Configure Azure AD for SSO"
✓ "Complete Security Training"

✗ "Do stuff" (too vague)
✗ "Task" (not descriptive)
```

**Done Indicator (If Complete):**

```
When card marked done:

┌───────────────────────────────────────┐
│ ✓ Done                                │ ← Green checkmark + text
│                                       │
│ Draft MFA Policy                      │ ← May have strikethrough
└───────────────────────────────────────┘

Visual Indicators:
- Green ✓ checkmark
- "Done" text
- Optional strikethrough title
- Muted/grayed appearance

Purpose:
- Quickly identify completed work
- Visual sense of progress
- Celebration of achievement
```

**Assignment Avatars:**

```
Display:
👤 👤 👤 +2

Shows:
- First 3 assigned members
- "+N" if more assignees
- Avatars with initials or photos
- Hover shows full name

Example:
Sarah Johnson (Executor)
Mike Chen (Approver)
Lisa Park (Follower)
... +2 more
```

**Due Date (Color-Coded):**

```
Display: 📅 Feb 15

Color Coding:

Overdue (Past Due):
📅 Feb 10 🔴 (red badge)

Due Soon (< 3 days):
📅 Feb 13 🟠 (orange badge)

Future (> 3 days):
📅 Feb 20 (normal color)

No Due Date:
(Field not shown if not set)

Purpose: Visual urgency indicator
```

**Milestone Badge:**

```
Display: 🎯 Sprint 1

Shows:
- Milestone icon
- Milestone name
- Linked milestone

Indicates:
- Task is part of milestone
- Contributes to milestone progress
- Phase/sprint membership

Click to filter board by milestone
```

**Category Badge:**

```
Display: 📂 Documentation

Shows:
- Category icon (if set)
- Category name
- Category color (background)

Example Categories:
📄 Documentation
💻 Technical
👥 HR
🔧 Configuration

Purpose: Task type/theme indicator
```

**Effort Hours:**

```
Display: ⏱️ 8h est

Shows estimated effort (if set)

Variants:
⏱️ 8h est (estimated only)
⏱️ 8h / 6h act (estimated / actual)

Purpose:
- Workload planning
- Capacity management
- Time tracking
```

**Comment Count:**

```
Display: 💬 3

Shows number of comments

Updates in real-time:
- Add comment → count increases
- Delete comment → count decreases

Indicates:
- Discussion activity
- Team engagement
- Communication level
```

**Attachment Count:**

```
Display: 📎 5

Shows total attachments:
- Links
- Images
- Notes
- (Checklists not included)

Example:
📎 5 = 2 links + 1 image + 2 notes

Purpose: Indicates task has supporting documentation
```

---

### 5.3 Moving Cards

**Drag and Drop - Primary Method:**

**How to Drag:**

```
1. Click and Hold Card
   - Mouse down on card
   - Hold for ~200ms
   - Card "lifts" (shadow appears)

2. Drag to Target Column
   - Move mouse while holding
   - Card follows cursor
   - Target column highlights

3. Drop to Release
   - Release mouse button
   - Card settles into column
   - Animation completes

4. Visual Feedback During Drag
   - Card has elevation/shadow
   - Target column glows or changes color
   - Drop zones indicated
   - Invalid drop zones marked (locked columns)
```

**Drag Example:**

```
Before:
[To Do]        [In Progress]    [Done]
┌──────────┐   ┌──────────┐    ┌──────────┐
│ Task A   │   │ Task C   │    │ Task E   │
│ Task B   │   │ Task D   │    │ Task F   │
└──────────┘   └──────────┘    └──────────┘

Drag "Task A" to "In Progress":

During Drag:
[To Do]        [In Progress]    [Done]
┌──────────┐   ┌──────────┐    ┌──────────┐
│ Task B   │   │▓▓▓▓▓▓▓▓▓▓│    │ Task E   │
│          │   │ Task C   │    │ Task F   │
└──────────┘   │ Task D   │    └──────────┘
  Task A ──────>│ Drop Here│
                └──────────┘
                     ↑
              (Column highlighted)

After Drop:
[To Do]        [In Progress]    [Done]
┌──────────┐   ┌──────────┐    ┌──────────┐
│ Task B   │   │ Task A   │    │ Task E   │
│          │   │ Task C   │    │ Task F   │
└──────────┘   │ Task D   │    └──────────┘
                └──────────┘
```

**Locked Columns Reject Drops:**

```
Attempting to drag OUT of References column:

[References]   [To Do]
┌──────────┐   ┌──────────┐
│ Req A    │   │          │
│ Req B    │   │          │
└──────────┘   └──────────┘

Try to drag "Req A" to "To Do":
  Req A ────✗────> [To Do]
                      ↑
              (Rejects drop)

Visual Feedback:
- Cursor shows "not allowed" icon (🚫)
- Column doesn't highlight
- Card snaps back to original position

Error Toast:
"Cannot move cards out of locked References column"
```

**Reordering Within Column:**

```
Drag within same column to reorder:

Before:
[To Do]
┌──────────┐
│ Task A   │
│ Task B   │
│ Task C   │
└──────────┘

Drag "Task C" to top:

After:
[To Do]
┌──────────┐
│ Task C   │
│ Task A   │
│ Task B   │
└──────────┘

Use for prioritization
```

---

### 5.4 Opening Card Details

**Click Anywhere on Card:**

```
Card on board:
┌───────────────────────────────────────┐
│ Draft MFA Policy                      │
│ 📅 Feb 15  💬 3  📎 5                │
└───────────────────────────────────────┘
      ↑
   Click anywhere

→ Card details modal opens
```

**Full-Screen Modal Opens:**

```
┌─────────────────────────────────────────────────────┐
│  Task Details                                    [×]│
├─────────────────────────────────────────────────────┤
│                                                     │
│  Title: Draft Multi-Factor Authentication Policy   │
│         [________________________________]          │
│                                                     │
│  Description:                                       │
│  ┌─────────────────────────────────────┐          │
│  │ Create comprehensive MFA policy     │          │
│  │ covering all access scenarios...    │          │
│  └─────────────────────────────────────┘          │
│                                                     │
│  Column: [In Progress ▼]                           │
│  Done: ☐                                           │
│                                                     │
│  ├─ Assignments                                    │
│  ├─ Schedule (Due Date, Effort)                    │
│  ├─ Organization (Milestone, Category, Groups)     │
│  ├─ Linked References                              │
│  ├─ Attachments (Links, Images, Notes)             │
│  ├─ Checklist                                      │
│  └─ Comments                                       │
│                                                     │
│  Activity Log (recent changes)                     │
│                                                     │
│                   [Delete Task]  [Close]           │
└─────────────────────────────────────────────────────┘

Comprehensive task management interface
```

**All Card Properties Accessible:**

```
In modal, can view and edit:
✓ Title
✓ Description
✓ Column
✓ Done status
✓ Assignments
✓ Due date
✓ Effort (estimated/actual)
✓ Milestone
✓ Category
✓ Groups
✓ Linked references
✓ Links
✓ Images
✓ Notes
✓ Comments
✓ Checklist
✓ Activity log

Everything in one place
```

**Edit Any Field:**

```
Most fields editable inline:
- Click to edit
- Type changes
- Auto-saves on blur or Enter
- Immediate persistence

Some fields have pickers:
- Date picker for due date
- Dropdown for milestone/category
- Member selector for assignments
- Color picker for labels
```

**Add Attachments:**

```
Attachment sections in modal:

[+ Add Link]
┌─────────────────────────────────────┐
│ 🔗 Policy Guidelines                │
│ 🔗 MFA Best Practices               │
└─────────────────────────────────────┘

[+ Add Image]
┌─────────────────────────────────────┐
│ 🖼️ MFA Diagram                      │
└─────────────────────────────────────┘

[+ Add Note]
┌─────────────────────────────────────┐
│ 📝 Implementation Notes             │
│ 📝 Vendor Requirements              │
└─────────────────────────────────────┘

All attachment types accessible
```

**View Activity:**

```
Activity Log (bottom of modal):

Recent Activity:
─────────────────────────────────
Sarah moved to "In Progress"
2 hours ago

Mike added comment
4 hours ago

John assigned Sarah (Executor)
Yesterday, 3:00 PM

Lisa created task
2 days ago
─────────────────────────────────

Full task history
```

---

### 5.5 Card Properties

Detailed explanation of each card property.

**Title (Required):**

```
Purpose: Main task identifier

Field: [Draft Multi-Factor Authentication Policy__]

Requirements:
- Required (cannot be empty)
- 1-200 characters
- Plain text only

Edit:
- Click to edit inline in modal
- Type new title
- Press Enter or click away
- Auto-saves on blur

Best Practices:
✓ Start with verb ("Draft", "Configure", "Review")
✓ Be specific and clear
✓ Include what and optionally who/when
✓ Keep concise but meaningful

Examples:
✓ "Draft MFA Policy"
✓ "Configure Azure AD SSO"
✓ "Review Q1 Security Metrics"
✓ "Complete GDPR Training (All Staff)"

Avoid:
✗ "Do this"
✗ "Task"
✗ "Follow up"
```

---

**Description:**

```
Purpose: Detailed task information

Field: Rich text editor
┌─────────────────────────────────────┐
│ **What:** Create comprehensive MFA  │
│ policy                              │
│                                     │
│ **Why:** Required for ISO 27001     │
│ control A.9.4.3                     │
│                                     │
│ **How:**                            │
│ 1. Review existing policies         │
│ 2. Draft new sections               │
│ 3. Get legal review                 │
│ 4. Publish to intranet              │
│                                     │
│ **Success Criteria:**               │
│ - All scenarios covered             │
│ - Legal approved                    │
│ - Published and communicated        │
└─────────────────────────────────────┘

Rich Text Support:
- Bold, italic, underline
- Bullet lists, numbered lists
- Links
- Headings
- Formatted content

What to Include:
- What needs to be done
- Why it's important
- How to do it (steps)
- Success criteria
- Constraints or dependencies
```

---

**Column:**

```
Purpose: Current workflow state

Field: [In Progress ▼] (dropdown)

Options: All board columns
- To Do
- In Progress
- Review
- Done
- (Custom columns)

Alternative to Drag-Drop:
- Open card modal
- Change column dropdown
- Card moves immediately
- Same result as dragging

Use When:
- Card modal already open
- Prefer keyboard navigation
- Drag-drop not available (mobile)
```

---

**Done Status:**

```
Purpose: Mark task completion

Field: ☐ Done (checkbox)

States:
☐ Not done (unchecked)
☑ Done (checked)

Independent of Column:
- Can mark done in any column
- Done status ≠ column location

Example:
Task in "Review" column can be:
- Not done (awaiting review)
- Done (review complete, just not moved to Done column yet)

Used For:
- Milestone progress calculation
- Progress tracking
- Filtering done tasks
- Visual indicator on card face

Best Practice:
Mark done when work is truly complete and accepted
```

---

**Category:**

```
Purpose: Organizational grouping by type/theme

Field: [Documentation ▼] (dropdown)

Single Category Assignment:
- One category per card
- Choose from board categories
- Or select "None"

Visual Badge:
- Shows on card face
- Category color and icon
- Quick identification

Example Categories:
📄 Documentation
💻 Technical
👥 HR
🔧 Configuration
📊 Reporting
🔒 Security

Use Cases:
- Department-specific views (filter by HR)
- Task type (Documentation vs Technical)
- Priority (Urgent vs Routine)
- Workflow stage (Planning vs Execution)
```

---

**Milestone:**

```
Purpose: Link to time-based or goal-based phase

Field: [Sprint 1 ▼] (dropdown)

Options:
- All board milestones
- None (unlink)

Progress Tracking:
- Milestone calculates progress from linked cards
- Mark card done → Milestone progress increases

Visual Badge:
- Shows on card face
- Milestone name
- 🎯 icon

Example:
Card: "Draft MFA Policy"
Milestone: "Sprint 1"

Sprint 1 progress:
- 20 cards linked
- 12 cards done
- 60% complete

This card contributes to that 60%

Filter by Milestone:
Click milestone badge → Board filters to show only Sprint 1 cards
```

---

**Due Date:**

```
Purpose: Deadline tracking

Field: [2024-02-15] 📅 (date picker)

Calendar Picker:
┌─────────────────────────┐
│   February 2024         │
├─────────────────────────┤
│ Su Mo Tu We Th Fr Sa    │
│        1  2  3          │
│  4  5  6  7  8  9 10    │
│ 11 12 13 14[15]16 17    │
│ 18 19 20 21 22 23 24    │
│ 25 26 27 28 29          │
└─────────────────────────┘

Click date to set
Click [×] to clear due date

Color Coding:

Overdue:
📅 Feb 10 🔴
(Task due Feb 10, today is Feb 12)

Due Soon (< 3 days):
📅 Feb 13 🟠
(Today is Feb 11, due in 2 days)

Future:
📅 Feb 20
(Due in 9 days, normal color)

Purpose:
- Deadline awareness
- Task prioritization
- Schedule management
- Overdue identification
```

---

**Effort:**

```
Purpose: Time tracking and capacity planning

Fields:
- Estimated: [8____] hours
- Actual: [6____] hours (optional)

Numeric Input:
- Enter hours as number
- Decimal allowed (e.g., 2.5 hours)
- Optional field

Displays on Card Face:
⏱️ 8h est
Or:
⏱️ 8h / 6h act

Use Cases:
- Sprint planning (total estimated hours vs team capacity)
- Time tracking (actual vs estimated)
- Workload distribution
- Project estimation

Example:
Sprint 1 capacity: 120 hours
Total estimated effort: 95 hours
Remaining capacity: 25 hours

Can add 3 more small tasks (8h each)
```

---

**Assignments:**

```
Purpose: Team collaboration and role clarity

Multiple People:
- Can assign multiple members
- Each with specific role
- All see task in "My Tasks" view

Four Roles:

1. Executor 🛠️
   - Does the work
   - Primary responsible party
   - "Owner" of task

2. Approver ✅
   - Reviews and approves
   - Quality gate
   - Final say on completion

3. Follower 👁️
   - Stays informed
   - Receives notifications
   - Not actively involved
   - Interested party

4. Supervisor 👔
   - Oversees work
   - Provides guidance
   - Escalation point
   - Management oversight

Assignment Example:
┌─────────────────────────────────────┐
│ Assignments:                        │
│                                     │
│ 👤 Sarah Johnson (Executor) 🛠️     │
│ 👤 Mike Chen (Approver) ✅          │
│ 👤 Lisa Park (Follower) 👁️         │
│ 👤 John Smith (Supervisor) 👔       │
│                                     │
│ [+ Add Assignment]                  │
└─────────────────────────────────────┘

Avatar Display:
Card face shows assignee avatars
Hover to see name and role

Team Collaboration:
- Clear responsibilities
- No confusion on who does what
- Proper oversight
- Informed stakeholders
```

---

**Groups:**

```
Purpose: Cross-cutting organization, bulk operations

Multiple Group Membership:
- Card can belong to multiple groups
- Checkbox selection
- Not exclusive (unlike category)

Selection:
┌─────────────────────────────────────┐
│ Groups:                             │
│                                     │
│ ☑ MFA Implementation               │
│ ☐ Encryption Project               │
│ ☑ Q1 Initiatives                   │
│ ☐ Technical Debt                   │
└─────────────────────────────────────┘

Check boxes for groups this card belongs to

Cross-Cutting Organization:
- One card in multiple groups
- Flexible categorization
- Multi-dimensional organization

Example:
Card: "Configure MFA in Azure AD"
Groups:
- MFA Implementation (project group)
- Q1 Initiatives (timeline group)
- Azure Changes (technical group)

Belongs to all three

Bulk Operation Targets:
Select group → Perform action on all cards in group:
- Change milestone
- Change category
- Add label
- Bulk update

Group Progress:
Group card shows progress across all member cards
Useful for sub-project tracking
```

---

**Linked References:**

```
Purpose: Traceability to compliance requirements

Links to Reference Column Cards:
- Multiple links possible
- Shows which requirements this task addresses

Linkage:
┌─────────────────────────────────────┐
│ Linked References:                  │
│                                     │
│ 🔗 ISO 27001 A.9.4.3: MFA Req      │
│ 🔗 NIST CSF PR.AC-7: Access Control│
│                                     │
│ [+ Link Reference]                  │
└─────────────────────────────────────┘

Traceability:
- Requirement → Task linkage
- Audit trail
- Coverage tracking
- Compliance demonstration

Filter Activation:
Click linked reference:
- Board filters to show this requirement
- And all tasks addressing it
- See full requirement implementation

Example:
Reference: "A.9.4.3: Multi-Factor Authentication"
Linked Tasks:
├─ "Research MFA solutions"
├─ "Purchase MFA licenses"
├─ "Configure Azure AD MFA"
├─ "Test MFA for all scenarios"
└─ "Train users on MFA"

Complete requirement coverage visible
```

---

### 5.6 Deleting Cards

**When to Delete:**

```
Delete cards when:
✓ Task no longer needed
✓ Duplicate created by mistake
✓ Requirements changed
✓ Task obsolete

Don't delete:
✗ Completed tasks (keep for history)
✗ Tasks just "on hold" (mark as such instead)
```

**Delete Button in Modal:**

```
Location: Bottom of card details modal

[Delete Task] button (red)

Click to delete:
┌─────────────────────────────────────┐
│  Delete Task?                    [×]│
├─────────────────────────────────────┤
│                                     │
│  Delete "Draft MFA Policy"?         │
│                                     │
│  ⚠️ This action cannot be undone    │
│                                     │
│  This will permanently delete:      │
│  • Task details                     │
│  • All comments (3)                 │
│  • All attachments (5)              │
│  • Activity history                 │
│                                     │
│  Linked references will be unlinked│
│  Milestone/group membership removed │
│                                     │
│       [Cancel]  [Delete Forever]    │
└─────────────────────────────────────┘
```

**Confirmation Required:**

```
Safety Measures:
- Must click through confirmation
- Shows what will be deleted
- Counts comments/attachments
- Warns about permanence
- Admin permission may be required

Prevents accidental deletion
```

**Permanent Removal:**

```
After deletion:
✗ Card removed from board
✗ All comments deleted
✗ All attachments deleted
✗ Activity history deleted
✗ Cannot be undone or recovered

✓ Milestone/group/category unaffected (other cards remain)
✓ Linked references remain (just unlinked from this card)

Alternative to Deletion:
- Archive card (if feature available)
- Move to "Cancelled" or "Archived" column
- Mark with "Obsolete" label
- Keep history while removing from active view
```

---

---

## CHAPTER 6: ATTACHMENTS AND ACTIVITY

Enhance cards with additional context, documentation, and collaboration features.

### 6.1 Comments

**Purpose:** Team communication and discussion

**Add Via Card Modal:**

```
In card details modal, scroll to Comments section:

┌─────────────────────────────────────┐
│ Comments (3)                        │
├─────────────────────────────────────┤
│                                     │
│ [Add a comment________________]     │
│                                     │
│ Sarah Johnson - 2 hours ago         │
│ MFA policy draft is ready for       │
│ legal review. @Mike can you         │
│ take a look?                        │
│   [Edit] [Delete]                   │
│                                     │
│ Mike Chen - 5 hours ago             │
│ Working on Azure AD configuration.  │
│ Should be done by EOD.              │
│   [Edit] [Delete]                   │
│                                     │
│ Lisa Park - Yesterday, 3:00 PM      │
│ Created task for Q1 compliance      │
│ initiative                          │
│   [Edit] [Delete]                   │
└─────────────────────────────────────┘

Type comment and press Enter to post
```

**Plain Text:**

```
Format:
- Plain text only
- No rich formatting
- No bold, italic, etc.
- URLs auto-linked

Example:
See policy at https://company.com/policies/mfa
         ↑
    (Automatically becomes clickable link)

Keep simple and fast
```

**Discussion Threads:**

```
Use comments for:
✓ Questions and answers
✓ Status updates
✓ Blockers and issues
✓ Coordination
✓ @ mentions for notifications

Example Thread:
┌─────────────────────────────────────┐
│ Sarah: "Need legal approval"        │
│   ↓                                 │
│ Mike: "@John can you review?"       │
│   ↓                                 │
│ John: "Approved! Looks good"        │
│   ↓                                 │
│ Sarah: "Thanks! Publishing now"     │
└─────────────────────────────────────┘

Conversation history preserved
```

**Newest First:**

```
Comment order:
- Most recent at top
- Oldest at bottom
- Scroll down for history
- Easy to see latest updates

Rationale:
Users care most about recent activity
Don't need to scroll to see latest
```

**Edit and Delete Own:**

```
Your own comments:
[Edit] [Delete] buttons visible

Others' comments:
No edit/delete buttons (read-only)

Edit:
- Click [Edit]
- Modify text
- Press Enter to save
- Or Cancel to discard

Delete:
- Click [Delete]
- Confirmation prompt
- Permanent removal
- Others still see "Comment deleted"
```

**Count Shown on Card Face:**

```
Card Display:
💬 3

Indicates 3 comments on this task

Updates in real-time:
- Add comment → count increases
- Delete comment → count decreases

Visual indicator of discussion activity
```

---

### 6.2 Notes

**Purpose:** Detailed documentation and implementation guidance

**Rich Text Editor (Quill):**

```
Notes section in card modal:

┌─────────────────────────────────────┐
│ Notes (2)                    [+ Add]│
├─────────────────────────────────────┤
│                                     │
│ 📝 Implementation Steps             │
│ ┌─────────────────────────────────┐│
│ │ [B] [I] [U] [•] [1] [🔗]      ││
│ ├─────────────────────────────────┤│
│ │ **Configuration Requirements:** ││
│ │                                 ││
│ │ 1. Enable MFA in Azure AD       ││
│ │ 2. Configure authentication app ││
│ │ 3. Set grace period to 7 days   ││
│ │                                 ││
│ │ *Important:* Test with pilot    ││
│ │ group first                     ││
│ └─────────────────────────────────┘│
│   [Edit] [Delete]                   │
│                                     │
│ 📝 Vendor Requirements              │
│   ...                               │
└─────────────────────────────────────┘

Toolbar: Bold, Italic, Underline, Bullets, Numbers, Links
```

**Formatted Content:**

```
Supported Formatting:
✓ **Bold** text
✓ *Italic* text
✓ __Underline__
✓ Bullet lists (•)
✓ Numbered lists (1. 2. 3.)
✓ Hyperlinks
✓ Headings (H1, H2, H3)

Example:
**Prerequisites:**
1. Azure AD admin access
2. License for MFA feature
3. Test user accounts

See [Azure MFA docs](https://link.com)
```

**Standalone Documentation:**

```
Use notes for:
✓ Implementation steps
✓ Configuration details
✓ Technical specifications
✓ Policy excerpts
✓ Reference documentation
✓ How-to guides

Unlike comments (conversation):
Notes are formal documentation
Structured information
Permanent reference

Example Notes:
├─ "Configuration Steps"
├─ "Testing Procedures"
├─ "Rollback Plan"
└─ "Vendor Contact Info"
```

**Count Shown on Card Face:**

```
Included in attachment count:
📎 5 (2 links + 1 image + 2 notes)
        ↑
    2 notes contribute to total

Click card to see all notes
```

---

### 6.3 Links

**Purpose:** Reference external resources

**External URLs:**

```
Links section in card modal:

┌─────────────────────────────────────┐
│ Links (2)                    [+ Add]│
├─────────────────────────────────────┤
│                                     │
│ 🔗 MFA Policy Guidelines            │
│    https://company.com/policies/mfa │
│    [Edit] [Delete] [Open ↗]         │
│                                     │
│ 🔗 Azure MFA Documentation          │
│    https://docs.microsoft.com/...   │
│    [Edit] [Delete] [Open ↗]         │
└─────────────────────────────────────┘

Each link has title and URL
```

**Add Link Dialog:**

```
Click [+ Add] in Links section:

┌─────────────────────────────────────┐
│  Add Link                        [×]│
├─────────────────────────────────────┤
│                                     │
│  Title:                             │
│  [MFA Policy Guidelines_________]   │
│                                     │
│  URL:                               │
│  [https://company.com/policies/mfa_]│
│                                     │
│       [Cancel]  [Add Link]          │
└─────────────────────────────────────┘

Title: Descriptive name
URL: Full web address
```

**Reference Materials:**

```
Link to:
✓ Company policies
✓ Official documentation
✓ Vendor resources
✓ Regulatory text
✓ Internal wikis
✓ SharePoint documents
✓ Confluence pages
✓ External websites

Centralized access to all relevant resources
```

**Policy Documents:**

```
Compliance Use Case:
Task: "Implement GDPR Article 32"

Links:
🔗 GDPR Article 32 Official Text
🔗 Company Data Security Policy
🔗 Implementation Checklist
🔗 DPA Guidance on Security Measures

All reference materials in one place
Quick access during implementation
```

**Evidence Locations:**

```
Link to evidence repositories:
🔗 SharePoint Evidence Folder
🔗 Google Drive - Audit Evidence
🔗 Confluence - Technical Docs
🔗 JIRA - Related Tickets

Auditor can trace:
Requirement → Task → Evidence
All from board
```

**Count Shown on Card Face:**

```
Included in attachment count:
📎 5 (2 links + 1 image + 2 notes)
    ↑
2 links contribute to total
```

**Click to Open in New Tab:**

```
Click [Open ↗] or click link title:
- Opens URL in new browser tab
- Original board stays open
- Easy reference while working
```

---

### 6.4 Images

**Purpose:** Visual documentation

**External Image URLs:**

```
Images section in card modal:

┌─────────────────────────────────────┐
│ Images (2)                   [+ Add]│
├─────────────────────────────────────┤
│                                     │
│ 🖼️ MFA Configuration Diagram        │
│    ┌─────────────────────┐          │
│    │  [Preview Image]    │          │
│    │                     │          │
│    └─────────────────────┘          │
│    https://company.com/.../mfa.png  │
│    [Edit] [Delete] [View Full]      │
│                                     │
│ 🖼️ Azure AD Settings Screenshot     │
│    ┌─────────────────────┐          │
│    │  [Preview Image]    │          │
│    └─────────────────────┘          │
│    [Edit] [Delete] [View Full]      │
└─────────────────────────────────────┘

Thumbnail previews in modal
```

**Add Image Dialog:**

```
Click [+ Add] in Images section:

┌─────────────────────────────────────┐
│  Add Image                       [×]│
├─────────────────────────────────────┤
│                                     │
│  Title:                             │
│  [MFA Configuration Diagram_____]   │
│                                     │
│  Image URL:                         │
│  [https://company.com/.../mfa.png_] │
│                                     │
│  ┌─────────────────────┐            │
│  │  [Image Preview]    │            │
│  │  (loads after URL)  │            │
│  └─────────────────────┘            │
│                                     │
│       [Cancel]  [Add Image]         │
└─────────────────────────────────────┘

Enter external image URL
Preview loads automatically
```

**Screenshots:**

```
Use for:
✓ Configuration screens
✓ Settings documentation
✓ Before/after comparisons
✓ Error messages
✓ UI mockups
✓ Test results

Example:
Task: "Configure MFA in Azure AD"
Image: Screenshot of Azure AD MFA settings page
Value: Visual guide for implementation
```

**Diagrams:**

```
Use for:
✓ Architecture diagrams
✓ Workflow illustrations
✓ Network topologies
✓ Data flow diagrams
✓ Process maps
✓ Mind maps

Example:
Task: "Design authentication flow"
Image: MFA authentication sequence diagram
Value: Visual understanding of process
```

**Visual Documentation:**

```
"A picture is worth a thousand words"

Instead of writing:
"Navigate to Azure AD > Security > MFA > Settings > 
Enable for all users > Set grace period to 7 days"

Show:
🖼️ Screenshot with settings highlighted

Faster to understand
Reduces ambiguity
```

**Thumbnail Preview:**

```
In card modal:
- Small preview (200x150px approx)
- Maintains aspect ratio
- Loads from URL

Hover: Slight zoom
Click: Full-size view
```

**Click to Enlarge:**

```
Click image or [View Full]:
┌─────────────────────────────────────┐
│  MFA Configuration Diagram       [×]│
├─────────────────────────────────────┤
│                                     │
│   ┌─────────────────────────────┐  │
│   │                             │  │
│   │   [Full-Size Image]         │  │
│   │                             │  │
│   │                             │  │
│   │                             │  │
│   └─────────────────────────────┘  │
│                                     │
│   https://company.com/.../mfa.png   │
│                                     │
│           [Close]  [Download]       │
└─────────────────────────────────────┘

Full-size modal overlay
Download option
```

---

### 6.5 Checklists

**Purpose:** Break tasks into subtasks

**Subtask Items:**

```
Checklist section in card modal:

┌─────────────────────────────────────┐
│ Checklist (4/7 completed)           │
├─────────────────────────────────────┤
│                                     │
│ ☑ Review existing MFA policies      │
│ ☑ Draft policy document             │
│ ☑ Submit for legal review           │
│ ☑ Incorporate legal feedback        │
│ ☐ Get management approval           │
│ ☐ Publish to company intranet       │
│ ☐ Communicate to all staff          │
│                                     │
│ [+ Add Item]                        │
└─────────────────────────────────────┘

☑ = Done
☐ = Not done
```

**Checkbox Completion:**

```
Click checkbox to toggle:
☐ → ☑ (mark done)
☑ → ☐ (unmark)

Immediate visual feedback
Progress updates automatically
```

**Add New Items:**

```
Click [+ Add Item]:
┌─────────────────────────────┐
│ [New checklist item_______] │
│ [Add]                       │
└─────────────────────────────┘

Type item text
Press Enter to add
Appears at bottom of checklist

Or:

Type and press Enter repeatedly for batch entry
```

**Delete Items:**

```
Hover over checklist item:
☑ Review existing policies [×]
                            ↑
                      Delete button

Click [×] to remove item
Confirmation prompt
Permanent removal
```

**Progress Indicator:**

```
Header shows progress:
Checklist (4/7 completed)
          ↑   ↑
        Done Total

Updates in real-time:
- Check item → Done count increases
- Uncheck item → Done count decreases
- Add item → Total increases
- Delete item → Total decreases
```

**Completion Percentage:**

```
Some implementations show percentage:

Checklist 57% (4/7)
          ↑
    4÷7 = 57.14% → 57%

Visual progress bar (optional):
████████░░░░░░ 57%

Motivates completion
```

**Use Cases:**

```
Break large tasks into steps:

Task: "Implement MFA"
Checklist:
☑ 1. Research MFA solutions
☑ 2. Select vendor
☑ 3. Purchase licenses
☐ 4. Configure Azure AD
☐ 5. Test with pilot group
☐ 6. Roll out company-wide
☐ 7. Provide user training

Granular progress tracking
Clear next steps
```

---

### 6.6 Activity Log

**Purpose:** Audit trail and history

**Board-Level Activity:**

```
Access from board header:
Click [Activity 📊] button

Activity Log Modal:
┌─────────────────────────────────────┐
│  Board Activity Log              [×]│
├─────────────────────────────────────┤
│                                     │
│  Filter: [All ▼] [Today ▼]         │
│                                     │
│  Today, 2:30 PM                     │
│  👤 Sarah moved "Draft Policy" from │
│     "In Progress" to "Done"         │
│                                     │
│  Today, 11:15 AM                    │
│  👤 Mike added comment to           │
│     "Configure MFA"                 │
│                                     │
│  Today, 9:00 AM                     │
│  👤 Lisa created milestone          │
│     "Sprint 1"                      │
│                                     │
│  Yesterday, 4:45 PM                 │
│  👤 John created task               │
│     "Review Access Logs"            │
│                                     │
│  ... (scroll for more)              │
└─────────────────────────────────────┘

All board changes logged
```

**100 Most Recent Events:**

```
Performance optimization:
- Keeps last 100 events
- Older events archived
- Sufficient for most use cases
- Fast loading

For full history:
- Export to file (if available)
- Database query (admin)
- Compliance audit logs (separate system)
```

**User Actions:**

```
Tracked Events:
✓ Card created
✓ Card moved
✓ Card deleted
✓ Card updated (title, description, etc.)
✓ Comment added
✓ Attachment added/removed
✓ Milestone created/updated/deleted
✓ Category created/updated/deleted
✓ Group created/updated/deleted
✓ Column added/renamed/deleted
✓ Member added/removed
✓ Board settings changed

Comprehensive audit trail
```

**Timestamps:**

```
Format:
Recent: "2 hours ago", "15 minutes ago"
Today: "Today, 2:30 PM"
This Week: "Yesterday, 4:45 PM", "Monday, 10:00 AM"
Older: "Jan 15, 2024, 3:00 PM"

Relative for recent, absolute for older
Easy to understand recency
```

**Filterable by Type:**

```
Filter Options:

All Events (default)
Card Changes
Comments
Attachments
Milestones
Categories
Groups
Columns
Members
Settings

Example Filter:
"Show only: Comments"
→ See all comment activity
→ Track team discussions
```

**View from Board Menu:**

```
Access Points:
1. Header: [Activity 📊] button
2. Board menu: Activity Log option
3. Keyboard: ? (help) → Activity shortcut

Always accessible
Quick reference
```

**Use Cases:**

```
Audit Trail:
"Who moved this task to Done?"
→ Check activity log
→ See: Sarah at 2:30 PM

Troubleshooting:
"Why did progress drop?"
→ Check activity log
→ See: Mike deleted 3 completed tasks

Team Coordination:
"What happened while I was away?"
→ Check activity log
→ See: 15 events in last 2 days

Compliance:
"Demonstrate change control"
→ Export activity log
→ Show all changes with timestamps and users
```

---

---

## CHAPTER 7: MILESTONES

Organize tasks into time-based or goal-based phases for better tracking and reporting.

### 7.1 Understanding Milestones

**What are Milestones:**

Milestones are containers that group related cards together and automatically track their collective progress.

**Time-Based or Goal-Based Phases:**

```
Time-Based Examples:
├─ Sprint 1 (2 weeks, Jan 1-14)
├─ Sprint 2 (2 weeks, Jan 15-28)
├─ Q1 2024 (3 months, Jan-Mar)
└─ Phase 1: Discovery (1 month)

Goal-Based Examples:
├─ ISO 27001 Certification
├─ Product Launch v2.0
├─ Security Improvements
└─ Technical Debt Cleanup

Flexible:
- Define by timeframe
- Define by objective
- Hybrid (timeframe AND objective)
```

**Link Multiple Cards:**

```
One milestone → Many cards

Example:
Milestone: "Sprint 1"
Linked Cards:
├─ "Draft MFA policy" (To Do)
├─ "Configure Azure AD" (In Progress)
├─ "Test MFA" (In Progress)
├─ "Deploy MFA" (Review)
└─ "Train users" (Done)

5 cards linked to one milestone
```

**Auto-Track Progress:**

```
No manual updates needed!

Progress calculates automatically:
- 1 of 5 cards done = 20%
- 2 of 5 cards done = 40%
- 5 of 5 cards done = 100% (Completed)

Real-time:
- Mark card done → Progress increases
- Unmark card → Progress decreases

Always accurate
```

**Visual Organization:**

```
Milestone Carousel (top of board):

[Sprint 1 | Sprint 2 | Sprint 3 | Q1 Goals]
   60%        20%        0%         45%
    ↑
Click to filter board

Filter Active:
Board shows only Sprint 1 cards
Other cards hidden
Clear filter to see all

Visual focus on current milestone
```

**Examples:**

```
Software Development:
├─ Sprint 1, Sprint 2, Sprint 3...
├─ Alpha Release, Beta Release, GA
└─ Q1 Goals, Q2 Goals, Q3 Goals

Compliance:
├─ ISO 27001 Certification
├─ GDPR Implementation
├─ SOC 2 Type 2 Audit
└─ Annual Compliance Review

Project Management:
├─ Discovery Phase
├─ Design Phase
├─ Implementation Phase
├─ Testing Phase
└─ Launch Phase

Manufacturing:
├─ Prototype Build
├─ Production Setup
├─ Quality Testing
└─ Market Launch
```

---

### 7.2 Creating Milestones

**"+" Button in Carousel:**

```
Location: Milestones carousel (below board header)

Milestones
[Sprint 1] [Sprint 2] [+ Add]
                       ↑
                 Click here

Create Milestone modal opens
```

**Create Milestone Form:**

```
┌─────────────────────────────────────┐
│  Create Milestone                [×]│
├─────────────────────────────────────┤
│                                     │
│  Name: (required)                   │
│  [Sprint 1____________________]     │
│                                     │
│  Description: (optional)            │
│  [Two-week sprint for MFA______]   │
│  [implementation and testing___]    │
│                                     │
│  Due Date: (optional)               │
│  [2024-01-15] 📅                    │
│                                     │
│  Color:                             │
│  🔵 🟢 🟡 🔴 🟣 🟤              │
│                                     │
│       [Cancel]  [Create Milestone]  │
└─────────────────────────────────────┘
```

**Name (Required):**

```
Best Practices:
✓ Clear and concise
✓ Include timeframe or goal
✓ Meaningful to team

Examples:
✓ "Sprint 1 (Jan 1-14)"
✓ "Q1 2024 Compliance"
✓ "ISO 27001 Certification"
✓ "Product Launch v2.0"

Avoid:
✗ "Milestone 1" (too vague)
✗ "Tasks" (not descriptive)
✗ "M1" (unclear abbreviation)
```

**Description (Optional):**

```
What to include:
- Milestone objective
- Timeframe (if not in name)
- Key deliverables
- Success criteria

Example:
"Two-week sprint focused on implementing MFA 
across all user authentication points. Includes 
Azure AD configuration, testing with pilot group, 
and initial rollout to IT department."

Provides context for team members
```

**Color Picker:**

```
Choose color for visual distinction:
🔵 Blue (default)
🟢 Green
🟡 Yellow
🔴 Red
🟣 Purple
🟤 Brown

Use color strategically:
- Blue: Regular sprints
- Green: Completed milestones
- Yellow: In progress, attention needed
- Red: Urgent/critical milestones
- Purple: Special projects

Helps quick visual identification
```

**Creates Immediately:**

```
Click [Create Milestone]:
- Milestone created
- Appears in carousel
- Progress: 0% (no cards linked yet)
- Status: In Progress
- Ready to link cards

No separate save step
Instant availability
```

---

### 7.3 Milestone Properties

**Editable Properties:**

**Name (Editable):**

```
Change milestone name:
1. Click milestone card in carousel
2. Milestone details modal opens
3. Click [Edit] button
4. Update name
5. Click [Save]

Or:

Right-click milestone → Rename
```

**Description (Editable):**

```
Update description:
- Same process as name edit
- Modify in milestone details modal
- Saves immediately
```

**Color (Editable):**

```
Change color:
- Milestone details modal
- Click color picker
- Select new color
- Milestone badge updates

Use case:
Change from Blue to Green when milestone 100% complete
Visual celebration of achievement
```

**Linked Cards (Auto-Count):**

```
Displays automatically:

Milestone Card:
┌────────────────┐
│  Sprint 1      │
│  ██████░░░░ 60%│
│  12 / 20 cards │ ← Auto-count
│  Due: Jan 15   │
└────────────────┘

12 cards done / 20 total cards linked

Real-time updates:
- Link card → Total increases
- Unlink card → Total decreases
- No manual counting needed
```

**Progress (Auto-Calculated):**

```
Formula:
Progress = (Done cards / Total linked cards) × 100%

Example:
Sprint 1:
- 20 cards linked
- 12 cards marked done
- Progress: 12/20 = 60%

Display: ██████░░░░ 60%

Automatic calculation
Always accurate
```

**Status: In Progress or Completed:**

```
Two status states:

In Progress (Blue):
- Some cards not done
- Progress < 100%
- Ongoing work

Completed (Green):
- ALL cards done
- Progress = 100%
- Milestone achieved

Status auto-updates:
- Last card marked done → Status: Completed
- Any card unmarked → Status: In Progress

No manual status management needed
```

---

### 7.4 Status Calculation

**Completed Status:**

**ALL Linked Cards Marked Done:**

```
Requirement:
Every single linked card must be checked ☑ Done

Example:
Milestone: "Sprint 1"
Linked cards:
☑ Task 1 (Done)
☑ Task 2 (Done)
☑ Task 3 (Done)
☑ Task 4 (Done)
☑ Task 5 (Done)

All 5 done → Status: Completed
```

**Green Indicator:**

```
Completed Milestone Display:

┌────────────────┐
│ ✓ Sprint 1     │ ← Green checkmark
│ ██████████ 100%│ ← Full green progress bar
│ 5 / 5 cards    │
│ Completed!     │ ← Status text
└────────────────┘

Visual celebration
Clear achievement signal
```

**100% Progress:**

```
Progress bar filled:
██████████ 100%

All tasks accomplished
Milestone objective achieved
```

---

**In Progress Status:**

**ANY Linked Card Not Done:**

```
Requirement:
At least one card is unchecked ☐ Not done

Example:
Milestone: "Sprint 1"
Linked cards:
☑ Task 1 (Done)
☑ Task 2 (Done)
☑ Task 3 (Done)
☐ Task 4 (Not done)
☐ Task 5 (Not done)

2 not done → Status: In Progress
```

**Blue Indicator:**

```
In Progress Milestone Display:

┌────────────────┐
│  Sprint 1      │ ← Blue (default)
│  ██████░░░░ 60%│ ← Partial progress bar
│  3 / 5 cards   │
│  In Progress   │ ← Status text
└────────────────┘

Work ongoing
Partial completion visible
```

**Percentage Shown (e.g., "3/5"):**

```
Format: Done / Total

Examples:
3 / 5 cards (60%)
12 / 20 cards (60%)
1 / 10 cards (10%)
9 / 10 cards (90%)

Numerator: Done count
Denominator: Total count
Percentage: Calculated and displayed
```

---

### 7.5 Linking Cards to Milestones

**Card Details Modal:**

```
Open any card → Card details modal

Scroll to Organization section:

┌─────────────────────────────────────┐
│ Organization                        │
├─────────────────────────────────────┤
│                                     │
│ Milestone: [Sprint 1 ▼]             │
│            ↑                        │
│        Dropdown                     │
│                                     │
│ Category: [Documentation ▼]         │
│                                     │
│ Groups:                             │
│ ☑ MFA Implementation               │
│ ☐ Q1 Initiatives                   │
└─────────────────────────────────────┘
```

**Milestone Dropdown:**

```
Click dropdown → List of milestones:

┌─────────────────────────┐
│ None                    │ ← Unlink option
│ ─────────────────       │
│ Sprint 1                │
│ Sprint 2                │
│ Sprint 3                │
│ Q1 Goals                │
│ ISO 27001 Certification │
└─────────────────────────┘

Select milestone to link
```

**Select from List:**

```
Click desired milestone:
- Card immediately linked
- Milestone progress updates
- Card shows milestone badge
- Auto-saves

No additional steps needed
```

**Can Change Later:**

```
To change milestone:
1. Open card details modal
2. Click milestone dropdown
3. Select different milestone
4. Card unlinks from old, links to new
5. Both milestones' progress updates

Flexible reassignment
```

**Can Unlink (Select "None"):**

```
To unlink from milestone:
1. Open card details modal
2. Click milestone dropdown
3. Select "None"
4. Card unlinks
5. Milestone progress updates (card removed from count)

Card no longer associated with any milestone
```

---

### 7.6 Viewing Milestone Details

**Click Milestone Card:**

```
In milestone carousel, click any milestone:

[Sprint 1] ← Click here
   60%

Milestone details modal opens
```

**Modal Shows All Linked Cards:**

```
┌─────────────────────────────────────────────┐
│  Sprint 1                                [×]│
│  Progress: 12 / 20 cards (60%)              │
├─────────────────────────────────────────────┤
│                                             │
│ To Do (3 cards)                             │
│ ├─ ☐ Draft MFA policy                      │
│ ├─ ☐ Research encryption options           │
│ └─ ☐ Schedule security training            │
│                                             │
│ In Progress (5 cards)                       │
│ ├─ ☐ Configure Azure AD MFA                │
│ ├─ ☐ Set up authenticator app              │
│ ├─ ☐ Test with pilot group                 │
│ ├─ ☐ Document configuration                │
│ └─ ☐ Create user guide                     │
│                                             │
│ Review (0 cards)                            │
│                                             │
│ Done (12 cards)                             │
│ ├─ ☑ Review existing policies              │
│ ├─ ☑ Get management approval               │
│ ├─ ☑ Purchase licenses                     │
│ └─ ... (9 more)                             │
│                                             │
│          [Edit Milestone]  [Delete]         │
└─────────────────────────────────────────────┘
```

**Organized by Column:**

```
Cards grouped by their column:
- To Do: 3 cards
- In Progress: 5 cards
- Review: 0 cards
- Done: 12 cards

Quickly see distribution
Identify bottlenecks
```

**Card Titles and Status:**

```
Each card shows:
☐ or ☑ (done status)
Card title
Column location

Click card title:
→ Opens card details
→ Quick access to edit
```

**Quick Access to Cards:**

```
From milestone modal:
1. See all linked cards
2. Click any card title
3. Card details open
4. Make changes
5. Return to milestone view

Efficient navigation
```

---

### 7.7 Editing and Deleting

**Edit Button: Modify Properties:**

```
In milestone details modal:
Click [Edit Milestone]

Edit form opens:
┌─────────────────────────────────────┐
│  Edit Milestone                  [×]│
├─────────────────────────────────────┤
│                                     │
│  Name:                              │
│  [Sprint 1 (Extended)__________]    │
│                                     │
│  Description:                       │
│  [Two-week sprint extended by___]   │
│  [3 days due to holidays_______]    │
│                                     │
│  Due Date:                          │
│  [2024-01-18] 📅 (changed)          │
│                                     │
│  Color:                             │
│  🔵 🟢 🟡 🔴 🟣 🟤              │
│                                     │
│       [Cancel]  [Save Changes]      │
└─────────────────────────────────────┘

Modify any field
Save updates
```

**Delete Button: Remove Milestone:**

```
In milestone details modal:
Click [Delete] button (red)

Confirmation:
┌─────────────────────────────────────┐
│  Delete Milestone?               [×]│
├─────────────────────────────────────┤
│                                     │
│  Delete "Sprint 1"?                 │
│                                     │
│  This milestone has 20 linked cards.│
│                                     │
│  ⚠️ Milestone will be deleted       │
│  ✓ Cards will be preserved          │
│  ✓ Cards will be unlinked           │
│                                     │
│       [Cancel]  [Delete Milestone]  │
└─────────────────────────────────────┘
```

**Deletes Milestone Only:**

```
After deletion:
✗ Milestone removed from carousel
✗ Milestone name removed from cards
✗ Milestone data deleted

What's preserved:
✓ All cards remain on board
✓ Cards keep all other properties
✓ Cards simply unlinked from milestone
```

**Cards Remain (Unlinked):**

```
Before Delete:
20 cards linked to Sprint 1
Cards show: 🎯 Sprint 1

After Delete:
20 cards remain on board
Cards show: (no milestone badge)
Cards available to link to new milestone

No card data lost
```

---

### 7.8 Use Cases

**Sprint Planning:**

**Milestone Per Sprint:**

```
Create milestones:
├─ Sprint 1 (Jan 1-14)
├─ Sprint 2 (Jan 15-28)
├─ Sprint 3 (Jan 29-Feb 11)
└─ ...

Agile methodology alignment
```

**Link Sprint Tasks:**

```
Sprint planning meeting:
1. Create Sprint 1 milestone
2. Select 20 tasks for sprint
3. Link each task to Sprint 1
4. Total: 20 tasks for 2-week sprint

Sprint scope defined
```

**Track Sprint Progress:**

```
Daily updates:
- Team marks tasks done
- Sprint progress auto-updates
- 5 done / 20 total = 25%
- Track toward sprint goal

Visual burndown
```

**Sprint Review Basis:**

```
End of sprint:
- Open Sprint 1 milestone
- Review all 20 tasks
- See which are done (16/20 = 80%)
- Discuss incomplete tasks
- Move to Sprint 2

Structured retrospective
```

---

**Quarterly Goals:**

**Milestone Per Quarter:**

```
Create milestones:
├─ Q1 2024 (Jan-Mar)
├─ Q2 2024 (Apr-Jun)
├─ Q3 2024 (Jul-Sep)
└─ Q4 2024 (Oct-Dec)

Annual planning structure
```

**Link Quarter Initiatives:**

```
Q1 Goals:
├─ ISO 27001 certification
├─ GDPR implementation
├─ SOC 2 audit
└─ Security training program

Strategic objectives grouped
```

**Track Quarterly Completion:**

```
Throughout quarter:
- Monitor Q1 2024 progress
- 45 cards linked
- 23 done = 51% complete
- On track for quarter-end

Strategic visibility
```

**Executive Reporting:**

```
Board meeting:
- Show Q1 2024 milestone
- Progress: 51%
- Highlight key achievements
- Identify risks

High-level status communication
```

---

**Project Phases:**

**Milestone Per Phase:**

```
Project lifecycle:
├─ Phase 1: Discovery
├─ Phase 2: Design
├─ Phase 3: Implementation
├─ Phase 4: Testing
└─ Phase 5: Launch

Sequential project structure
```

**Link Phase Deliverables:**

```
Phase 1: Discovery
├─ Stakeholder interviews
├─ Requirements gathering
├─ Feasibility study
└─ Project charter

All discovery tasks grouped
```

**Track Phase Progress:**

```
Current phase monitoring:
- Phase 1: Discovery (100% ✓ Complete)
- Phase 2: Design (75% In Progress)
- Phase 3: Implementation (0% Not Started)

Phase-by-phase visibility
```

**Phase Gate Criteria:**

```
Before moving to next phase:
- Phase 1 must be 100% complete
- All deliverables approved
- Sign-off from stakeholders
- Phase gate meeting

Milestone = gate checkpoint
```

---

---

## CHAPTER 8: CATEGORIES

Classify tasks by type, department, or priority for better organization and filtering.

### 8.1 Understanding Categories

**What are Categories:**

Categories are organizational buckets that classify cards by type, department, or other single-dimension grouping.

**Organizational Buckets:**

```
Think of categories as colored labels or tags:
- One category per card
- Mutually exclusive (can't be in both "Frontend" AND "Backend")
- Color-coded for visual distinction
- Filterable

Example Categories:
├─ Frontend 🔵
├─ Backend 🟢
├─ Database 🟡
└─ DevOps 🔴

Each card belongs to zero or one category
```

**Single Category Per Card:**

```
Unlike Groups (multiple):
- Card can be in Group A AND Group B (flexible)

Categories (single):
- Card in Frontend OR Backend (exclusive)
- Choose one or none

Constraint:
Encourages clear classification
Forces decision on primary type
```

**Department Alignment:**

```
Organize by department:

Categories:
├─ 📄 Documentation (Legal/Compliance team)
├─ 💻 Technical (IT team)
├─ 👥 HR (Human Resources team)
├─ 📊 Finance (Accounting team)
└─ 🔧 Operations (Ops team)

Use Case:
Filter board by "Technical" → See only IT team's tasks
Department-specific views
Resource tracking
```

**Work Type Classification:**

```
Organize by work type:

Software Development:
├─ Frontend (React, Vue)
├─ Backend (Node.js, Python)
├─ Database (SQL, migrations)
├─ Infrastructure (AWS, Docker)
└─ QA/Testing

Manufacturing:
├─ Design
├─ Prototyping
├─ Production
├─ Quality Control
└─ Packaging

Each task clearly typed
```

**Examples:**

```
By Technology:
├─ Frontend
├─ Backend
├─ Mobile
├─ Database
└─ DevOps

By Priority:
├─ Critical (red)
├─ High (orange)
├─ Medium (yellow)
└─ Low (green)

By Document Type:
├─ Policy
├─ Procedure
├─ Guideline
├─ Template
└─ Checklist

By Compliance Domain:
├─ Security
├─ Privacy
├─ Financial
├─ Operational
└─ Legal

Flexible to your needs
```

---

### 8.2 Creating Categories

**"+" Button in Carousel:**

```
Location: Categories carousel (below milestones)

Categories
[Documentation] [Technical] [HR] [+ Add]
                                   ↑
                              Click here

Create Category modal opens
```

**Create Category Form:**

```
┌─────────────────────────────────────┐
│  Create Category                 [×]│
├─────────────────────────────────────┤
│                                     │
│  Name: (required)                   │
│  [Documentation_______________]     │
│                                     │
│  Color:                             │
│  🔴 🟡 🟢 🔵 🟣 🟤 ⚫ ⚪         │
│                                     │
│  Icon: (optional)                   │
│  📄 📊 💻 👥 🔧 🏢 ...            │
│                                     │
│       [Cancel]  [Create Category]   │
└─────────────────────────────────────┘
```

**Name (Required):**

```
Best Practices:
✓ Clear and descriptive
✓ Singular or plural (be consistent)
✓ Meaningful to team

Examples:
✓ "Documentation"
✓ "Technical Implementation"
✓ "High Priority"
✓ "Backend Development"

Avoid:
✗ "Cat1" (unclear abbreviation)
✗ "Stuff" (too vague)
✗ "Other" (catch-all, not useful)
```

**Color Picker:**

```
Choose color for visual distinction:
🔴 Red (urgent, critical)
🟡 Yellow (medium priority)
🟢 Green (routine, approved)
🔵 Blue (informational)
🟣 Purple (special projects)
🟤 Brown (maintenance)
⚫ Black (blocked)
⚪ White/Light (not started)

Color Strategy:
- Use color meaningfully
- Consistent color meanings across categories
- High contrast for accessibility

Example:
Critical → 🔴 Red
High → 🟠 Orange
Medium → 🟡 Yellow
Low → 🟢 Green

Visual priority at a glance
```

**Icon (Optional):**

```
Add visual icon:
📄 Document-related
💻 Technical work
👥 People/HR
🔧 Configuration/Ops
📊 Reporting/Analytics
🏢 Business/Executive
🔒 Security/Privacy
💰 Financial

Icon + Color = Strong visual identity

Example:
Category: "Documentation"
Color: 🔵 Blue
Icon: 📄

Display: 📄 Documentation (blue background)
```

**Creates Immediately:**

```
Click [Create Category]:
- Category created
- Appears in carousel
- Count: 0 cards
- Available in card category dropdown

No separate save step
Instant availability
```

---

### 8.3 Category Properties

**Name (Editable):**

```
Change category name:
1. Click category tag in carousel
2. Category details modal opens
3. Click [Edit] button
4. Update name
5. Click [Save]

Or:

Right-click category → Rename
```

**Color (Editable):**

```
Change color:
- Category details modal
- Click color picker
- Select new color
- All card badges update immediately

Use case:
Change "In Progress" category from Blue to Green when work stabilizes
Visual indication of status change
```

**Linked Cards (Auto-Count):**

```
Displays automatically:

Category Tag:
🔴 Urgent (5)
          ↑
    5 cards with this category

Real-time updates:
- Assign category to card → Count increases
- Unassign category → Count decreases
- Delete card → Count decreases

No manual counting needed
```

**Visual Badge on Cards:**

```
Card Display:

┌───────────────────────────────────────┐
│ 🔴 📄 🟢                               │ ← Labels
│                                       │
│ Draft Multi-Factor Authentication     │
│ Policy                                │
│                                       │
│ 📂 Documentation                      │ ← Category badge
│   ↑                                   │
│ Icon + name + color background        │
└───────────────────────────────────────┘

Prominent display
Quick visual identification
```

---

### 8.4 Assigning Cards to Categories

**Card Details Modal:**

```
Open any card → Card details modal

Scroll to Organization section:

┌─────────────────────────────────────┐
│ Organization                        │
├─────────────────────────────────────┤
│                                     │
│ Milestone: [Sprint 1 ▼]             │
│                                     │
│ Category: [Documentation ▼]         │
│           ↑                         │
│       Dropdown                      │
│                                     │
│ Groups:                             │
│ ☑ MFA Implementation               │
└─────────────────────────────────────┘
```

**Category Dropdown:**

```
Click dropdown → List of categories:

┌─────────────────────────┐
│ None                    │ ← No category
│ ─────────────────       │
│ 📄 Documentation        │
│ 💻 Technical            │
│ 👥 HR                   │
│ 🔧 Configuration        │
│ 📊 Reporting            │
└─────────────────────────┘

Select one category
```

**Select One Category:**

```
Single selection (radio behavior):
- Click category → Assigned
- Click different category → Switches
- Click "None" → Unassigned

Only one active at a time

Example:
Card starts: (No category)
Select: Documentation
Card now: 📂 Documentation
Select: Technical
Card now: 💻 Technical (Documentation removed)

Mutually exclusive
```

**Can Change Later:**

```
To change category:
1. Open card details modal
2. Click category dropdown
3. Select different category
4. Card switches immediately
5. Both categories' counts update

Flexible reassignment
No restrictions on changing
```

**Can Unassign (Select "None"):**

```
To remove category:
1. Open card details modal
2. Click category dropdown
3. Select "None"
4. Category badge disappears
5. Category count decreases

Card has no category
```

---

### 8.5 Filtering by Category

**Click Category in Carousel:**

```
Categories carousel:
[📄 Documentation (12)] [💻 Technical (8)] [👥 HR (5)]
        ↑
    Click here

Board filters to show only Documentation cards
```

**Board Shows Only Category Cards:**

```
Filter Active:

┌─────────────────────────────────────────────────────┐
│  Board: ISO 27001 Implementation                    │
│  Filter: 📄 Documentation [×]                       │ ← Banner
│  Showing 12 of 45 tasks                             │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [To Do]      [In Progress]    [Review]    [Done]   │
│                                                     │
│ Only cards with "Documentation" category shown     │
│ Other 33 cards hidden                              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Visual Filter Banner:**

```
Top of board:
┌─────────────────────────────────────┐
│ Filter: 📄 Documentation [×]        │
│ Showing 12 of 45 tasks              │
└─────────────────────────────────────┘
      ↑                        ↑
   Active filter          Clear button

Clear indication filter is active
Shows how many cards visible vs total
```

**Clear Filter Button:**

```
Click [×] in filter banner:
- Filter removed
- All 45 cards visible again
- Board returns to normal view

Or:

Click same category again in carousel:
- Toggles filter off
- All cards visible
```

**Maintains Column Layout:**

```
Filter doesn't change columns:

[To Do]  [In Progress]  [Review]  [Done]
   ↑            ↑           ↑         ↑
All columns remain, just showing filtered cards

Example:
To Do: 3 Documentation cards (out of 10 total)
In Progress: 5 Documentation cards (out of 15 total)
Review: 2 Documentation cards (out of 5 total)
Done: 2 Documentation cards (out of 15 total)

Column structure preserved
```

---

### 8.6 Viewing Category Details

**Click Category Card:**

```
In category carousel, click any category:

[📄 Documentation (12)] ← Click here

Category details modal opens
```

**Modal Shows All Cards:**

```
┌─────────────────────────────────────────────┐
│  📄 Documentation                        [×]│
│  12 cards                                   │
├─────────────────────────────────────────────┤
│                                             │
│ To Do (3 cards)                             │
│ ├─ ☐ Draft MFA policy                      │
│ ├─ ☐ Write user guide                      │
│ └─ ☐ Create checklist                      │
│                                             │
│ In Progress (5 cards)                       │
│ ├─ ☐ Update security policy                │
│ ├─ ☐ Document configuration                │
│ ├─ ☐ Write testing procedures              │
│ ├─ ☐ Create training materials             │
│ └─ ☐ Draft FAQ document                    │
│                                             │
│ Review (2 cards)                            │
│ ├─ ☐ InfoSec Policy v2.0                   │
│ └─ ☐ MFA Implementation Guide              │
│                                             │
│ Done (2 cards)                              │
│ ├─ ☑ Company security policy               │
│ └─ ☑ Employee handbook update              │
│                                             │
│          [Edit Category]  [Delete]          │
└─────────────────────────────────────────────┘
```

**Organized by Column:**

```
Cards grouped by column:
- To Do: 3 cards
- In Progress: 5 cards
- Review: 2 cards
- Done: 2 cards

See distribution across workflow
Identify where work is concentrated
```

**Card Titles and Status:**

```
Each card shows:
☐ or ☑ (done status)
Card title
Implicit column (by grouping)

Click card title:
→ Opens card details
→ Quick access
```

**Quick Navigation:**

```
From category modal:
1. See all cards with this category
2. Click any card title
3. Card details open
4. Make changes
5. Return to category view

Efficient workflow
```

---

### 8.7 Use Cases

**Department Organization:**

**Category Per Department:**

```
Create categories:
├─ 📄 Documentation (Legal/Compliance)
├─ 💻 Technical (IT)
├─ 👥 HR (Human Resources)
├─ 📊 Finance (Accounting)
└─ 🔧 Operations

Each team has their category
```

**Filter by Department:**

```
Department meeting:
- IT team: Click "💻 Technical"
- Board shows only IT's 23 tasks
- Review IT's workload
- Plan IT's priorities

Focused team view
```

**Department Progress Tracking:**

```
Progress by department:

📄 Documentation: 12 cards, 8 done (67%)
💻 Technical: 23 cards, 15 done (65%)
👥 HR: 8 cards, 6 done (75%)
📊 Finance: 2 cards, 1 done (50%)

Track departmental completion
Identify lagging departments
Allocate resources
```

**Resource Allocation:**

```
Workload visibility:

📄 Documentation: 12 tasks (needs 2 people)
💻 Technical: 23 tasks (needs 4 people)
👥 HR: 8 tasks (needs 1 person)

Balance workload
Hire or reallocate resources
```

---

**Work Type Classification:**

**Frontend, Backend, Database, etc.:**

```
Technology categories:

├─ 🎨 Frontend (React, Vue, CSS)
├─ ⚙️ Backend (Node.js, Python, APIs)
├─ 🗄️ Database (SQL, migrations, indexes)
├─ 🔧 Infrastructure (AWS, Docker, CI/CD)
└─ 🧪 Testing (Unit, Integration, E2E)

Clear technical domain separation
```

**Filter by Technology:**

```
Tech lead review:
- Frontend lead: Filter by "🎨 Frontend"
- Review 15 frontend tasks
- Assign to frontend developers
- Track frontend progress

Domain-specific management
```

**Skill Allocation:**

```
Match skills to tasks:

Frontend tasks (15) → Frontend developers (3)
Backend tasks (20) → Backend developers (4)
Database tasks (5) → Database admin (1)

Assign based on expertise
```

**Technical Planning:**

```
Technology roadmap:

Q1: Focus on Frontend (15 tasks)
Q2: Focus on Backend (20 tasks)
Q3: Focus on Infrastructure (10 tasks)

Category-based planning
Phased execution
```

---

**Priority Levels:**

**Critical, High, Medium, Low:**

```
Priority categories:

├─ 🔴 Critical (blockers, security issues)
├─ 🟠 High (important, time-sensitive)
├─ 🟡 Medium (standard work)
└─ 🟢 Low (nice-to-have, future)

Visual priority system
```

**Filter by Priority:**

```
Daily standup:
- Filter by "🔴 Critical"
- Review 5 critical tasks
- Ensure all addressed
- No blockers ignored

Priority-driven workflow
```

**Focus High-Priority First:**

```
Work prioritization:

1. Complete all 🔴 Critical tasks (5)
2. Then work on 🟠 High tasks (12)
3. Then tackle 🟡 Medium tasks (20)
4. Finally 🟢 Low tasks (8)

Clear execution order
No ambiguity
```

**Risk Management:**

```
Risk visibility:

🔴 Critical: 5 tasks (URGENT attention)
🟠 High: 12 tasks (Important)
🟡 Medium: 20 tasks (Normal)
🟢 Low: 8 tasks (Defer if needed)

Dashboard view:
If Critical > 0 → Alert management
If High > 20 → Consider resource increase

Proactive risk management
```

---

---

## CHAPTER 9: GROUPS

Groups enable flexible, multi-dimensional organization and powerful bulk operations on related cards.

### 9.1 Understanding Groups

**What are Groups:**

Groups are flexible collections of cards that can overlap, enabling multi-dimensional organization and bulk operations.

**Cross-Cutting Collections:**

```
Unlike Categories (single):
- Card in ONE category (Frontend OR Backend)

Groups (multiple):
- Card in MANY groups simultaneously
- Card can be in "MFA Project" AND "Q1 Goals" AND "Critical"

Flexible Classification:
Card: "Configure Azure AD MFA"
├─ Category: Technical (single, exclusive)
└─ Groups: MFA Project, Q1 Goals, Azure Changes, Security (multiple, overlapping)

Multi-dimensional organization
```

**Multiple Groups Per Card:**

```
Example Card: "Implement Encryption"

Groups:
☑ Security Initiative
☑ Q1 2024 Goals
☑ Compliance Required
☑ High Priority
☐ Backend Tasks
☐ Documentation Needed

Card belongs to 4 groups simultaneously

Benefits:
- View from multiple perspectives
- Organize by project, timeline, priority, etc.
- Bulk operations on any dimension
```

**Bulk Operation Targets:**

```
The Power of Groups:

Select group: "Q1 2024 Goals" (25 cards)
↓
Bulk Operations:
- Set all due dates to March 31
- Assign all to milestone "Q1 Completion"
- Mark all as high priority category
- Assign all to project manager

One action → 25 cards updated

Massive time savings
```

**Temporary or Permanent:**

```
Permanent Groups:
├─ "Security Initiative" (long-term project)
├─ "Compliance Required" (ongoing classification)
└─ "High Priority" (standing designation)

Temporary Groups:
├─ "Week of Jan 15" (this week's focus)
├─ "Pre-Audit Cleanup" (one-time effort)
└─ "Bug Bash Sprint" (temporary campaign)

Create/Delete as needed
Flexible grouping strategies
```

**Examples:**

```
By Project:
├─ MFA Implementation
├─ Encryption Upgrade
├─ Security Training
└─ Compliance Audit

By Timeline:
├─ Q1 2024 Goals
├─ January Sprint
├─ This Week
└─ Overdue Tasks

By Characteristic:
├─ High Priority
├─ Blocked
├─ Quick Wins
└─ Technical Debt

By Domain:
├─ Azure Changes
├─ Policy Updates
├─ Infrastructure
└─ User-Facing

Unlimited flexibility
```

---

### 9.2 Creating Groups

**"+" Button in Carousel:**

```
Location: Groups carousel (below categories)

Groups
[MFA Project] [Q1 Goals] [Critical] [+ Add]
                                     ↑
                                Click here

Create Group modal opens
```

**Create Group Form:**

```
┌─────────────────────────────────────┐
│  Create Group                    [×]│
├─────────────────────────────────────┤
│                                     │
│  Name: (required)                   │
│  [MFA Implementation__________]     │
│                                     │
│  Description: (optional)            │
│  [All tasks related to multi-__]   │
│  [factor authentication________]    │
│                                     │
│  Color:                             │
│  🔵 🟢 🟡 🔴 🟣 🟤              │
│                                     │
│       [Cancel]  [Create Group]      │
└─────────────────────────────────────┘
```

**Name (Required):**

```
Best Practices:
✓ Descriptive and clear
✓ Indicates grouping purpose
✓ Meaningful to team

Examples:
✓ "MFA Implementation"
✓ "Q1 2024 Compliance Goals"
✓ "Critical Security Tasks"
✓ "Azure Infrastructure Changes"

Avoid:
✗ "Group 1" (too vague)
✗ "Misc" (unclear purpose)
✗ "G1" (unclear abbreviation)
```

**Description (Optional):**

```
What to include:
- Group purpose
- Scope
- Timeline (if applicable)
- Success criteria

Example:
"All tasks related to implementing multi-factor 
authentication across the organization. Includes 
Azure AD configuration, user training, and policy 
updates. Target completion: Q1 2024."

Provides context for team
Useful for large groups
```

**Color Picker:**

```
Choose color for visual distinction:
🔵 Blue (default)
🟢 Green (approved, proceeding)
🟡 Yellow (caution, attention needed)
🔴 Red (urgent, critical)
🟣 Purple (special initiative)
🟤 Brown (maintenance/operational)

Use color strategically:
- Projects: Blue/Purple
- Urgent: Red
- Routine: Green
- On hold: Yellow

Visual cues in carousel
```

**Creates Immediately:**

```
Click [Create Group]:
- Group created
- Appears in carousel
- Progress: 0% (no cards yet)
- Ready to add cards

No separate save step
Instant availability
```

---

### 9.3 Group Properties

**Name (Editable):**

```
Change group name:
1. Click group card in carousel
2. Group details modal opens
3. Click [Edit] button
4. Update name
5. Click [Save]

Name updates everywhere:
- Carousel
- Card group checkboxes
- Group details modal
```

**Color (Editable):**

```
Change color:
- Group details modal
- Click color picker
- Select new color
- Group card updates immediately

Use case:
Change from Yellow (in progress) to Green (complete)
Visual status indication
```

**Linked Cards (Auto-Count):**

```
Displays automatically:

Group Card:
┌────────────────┐
│ MFA Project    │
│ ████░░░░░░ 40% │
│ 2 / 5 cards    │ ← Auto-count
└────────────────┘

2 cards done / 5 total cards in group

Real-time updates:
- Add card to group → Total increases
- Remove card from group → Total decreases
- Mark card done → Done count increases

No manual tracking
```

**Multi-Card Membership:**

```
Key Difference from Categories:

Categories:
- Card in ONE category
- Mutually exclusive

Groups:
- Card in MANY groups
- Overlapping membership

Example:
Card: "Configure MFA"
├─ Category: Technical (exclusive)
└─ Groups: MFA Project, Q1 Goals, Azure Changes, Security (all at once)

Flexible multi-dimensional organization
```

---

### 9.4 Adding Cards to Groups

**Card Details Modal:**

```
Open any card → Card details modal

Scroll to Organization section:

┌─────────────────────────────────────┐
│ Organization                        │
├─────────────────────────────────────┤
│                                     │
│ Milestone: [Sprint 1 ▼]             │
│                                     │
│ Category: [Technical ▼]             │
│                                     │
│ Groups:                             │
│ ☑ MFA Implementation               │
│ ☑ Q1 Goals                         │
│ ☐ Security Initiative              │
│ ☐ Azure Changes                    │
│ ☐ High Priority                    │
│                                     │
└─────────────────────────────────────┘
```

**Groups Section with Checkboxes:**

```
Checkbox Interface:
☑ = Card in this group
☐ = Card NOT in this group

Click checkbox to toggle:
☐ → ☑ (add to group)
☑ → ☐ (remove from group)

Independent checkboxes:
- Check multiple groups
- Uncheck any group
- No mutual exclusion
```

**Select Multiple Groups:**

```
Example:

Current state:
☐ MFA Implementation
☐ Q1 Goals
☐ Security Initiative

Check all three:
☑ MFA Implementation
☑ Q1 Goals
☑ Security Initiative

Card now in 3 groups simultaneously

Progress updates for all 3 groups:
- MFA Implementation: +1 card
- Q1 Goals: +1 card
- Security Initiative: +1 card
```

**Add/Remove Any Time:**

```
Dynamic Group Membership:

Add to group:
1. Open card details
2. Check group checkbox
3. Card added to group
4. Group count increases

Remove from group:
1. Open card details
2. Uncheck group checkbox
3. Card removed from group
4. Group count decreases

No restrictions
Change membership freely
```

**Cards Can Be in Many Groups:**

```
Extreme Example:

Card: "Update Security Policy"

Groups (all checked):
☑ Security Initiative
☑ Q1 Goals
☑ Compliance Required
☑ Policy Updates
☑ Documentation
☑ Legal Review Required
☑ High Priority
☑ This Week

Card in 8 groups!

While possible, recommend:
- 2-4 groups per card (typical)
- More than 5 groups (excessive, consider simplifying)

Balance flexibility with clarity
```

---

### 9.5 Viewing Group Details

**Click Group Card:**

```
In groups carousel, click any group:

[MFA Project] ← Click here
   40%

Group details modal opens
```

**Modal Shows All Group Cards:**

```
┌─────────────────────────────────────────────┐
│  MFA Implementation                      [×]│
│  Progress: 2 / 5 cards (40%)                │
├─────────────────────────────────────────────┤
│                                             │
│ To Do (2 cards)                             │
│ ├─ ☐ Purchase MFA licenses                 │
│ └─ ☐ Schedule user training                │
│                                             │
│ In Progress (1 card)                        │
│ └─ ☐ Configure Azure AD MFA                │
│                                             │
│ Review (0 cards)                            │
│                                             │
│ Done (2 cards)                              │
│ ├─ ☑ Draft MFA policy                      │
│ └─ ☑ Get management approval               │
│                                             │
│ ┌─────────────────────────────────────────┐ │
│ │ Bulk Operations                         │ │
│ │ [Set Milestone ▼] [Set Category ▼]     │ │
│ │ [Set Due Date] [Mark All Done]          │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│          [Edit Group]  [Delete]             │
└─────────────────────────────────────────────┘
```

**Organized by Column:**

```
Cards grouped by column:
- To Do: 2 cards
- In Progress: 1 card
- Review: 0 cards
- Done: 2 cards

See distribution
Identify workflow stages
```

**Card Titles and Status:**

```
Each card shows:
☐ or ☑ (done status)
Card title
Column (by grouping)

Click card title:
→ Opens card details
→ Edit card
→ Quick access
```

**Bulk Action Buttons:**

```
At bottom of modal:
┌─────────────────────────────────────────┐
│ Bulk Operations                         │
│ [Set Milestone ▼] [Set Category ▼]     │
│ [Set Due Date] [Mark All Done]          │
│ [Clear Dates] [Mark All Undone]         │
└─────────────────────────────────────────┘

One click → All 5 cards updated

Power of bulk operations
```

---

### 9.6 Bulk Operations on Groups

**The Power of Groups:**

Groups enable bulk operations on collections of cards, saving massive time.

---

**Add Milestone:**

```
Button: [Set Milestone ▼]

Click → Milestone selector:
┌─────────────────────────┐
│ None                    │
│ Sprint 1                │
│ Sprint 2                │
│ Q1 2024                 │
└─────────────────────────┘

Select "Q1 2024":
→ All 5 cards in group assigned to Q1 2024 milestone
→ Q1 2024 progress recalculates
→ Card milestone badges update

One action → 5 cards updated
```

**Existing Milestones Replaced:**

```
Before bulk operation:
Card 1: Sprint 1
Card 2: Sprint 2
Card 3: (no milestone)
Card 4: Sprint 1
Card 5: (no milestone)

Bulk set milestone: Q1 2024

After bulk operation:
Card 1: Q1 2024 (replaced Sprint 1)
Card 2: Q1 2024 (replaced Sprint 2)
Card 3: Q1 2024 (added)
Card 4: Q1 2024 (replaced Sprint 1)
Card 5: Q1 2024 (added)

All cards now in Q1 2024 milestone
```

---

**Remove Milestone:**

```
Button: [Remove Milestone]

Click → Confirmation:
"Remove milestone from all 5 cards in group?"

Confirm:
→ All 5 cards unlinked from milestones
→ Cards remain in group
→ Milestone progress updates

Cards Remain in Group:
- Group membership unchanged
- Only milestone link removed
```

---

**Apply Category:**

```
Button: [Set Category ▼]

Click → Category selector:
┌─────────────────────────┐
│ None                    │
│ Documentation           │
│ Technical               │
│ HR                      │
└─────────────────────────┘

Select "Technical":
→ All 5 cards assigned "Technical" category
→ Category count updates
→ Card category badges update

Unified classification
```

**Existing Categories Replaced:**

```
Before bulk operation:
Card 1: Documentation
Card 2: HR
Card 3: (no category)
Card 4: Technical
Card 5: (no category)

Bulk set category: Technical

After bulk operation:
Card 1: Technical (replaced Documentation)
Card 2: Technical (replaced HR)
Card 3: Technical (added)
Card 4: Technical (kept)
Card 5: Technical (added)

All cards now "Technical" category
```

---

**Remove Category:**

```
Button: [Remove Category]

Click → Confirmation:
"Remove category from all 5 cards in group?"

Confirm:
→ All 5 cards unassigned from categories
→ Cards remain in group
→ Category counts update

Cards no longer have category badge
```

---

**Mark All Done:**

```
Button: [Mark All Done]

Click → Confirmation:
"Mark all 5 cards in group as done?"

Confirm:
→ All 5 cards: done = true
→ Cards show ✓ Done indicator
→ Milestones progress updates
→ Group progress → 100%

Independent of Column:
- Cards stay in their columns
- Just marked done
- Can be in "To Do" and done (unusual but possible)

Use case:
End of sprint: Mark all sprint group cards done
Fast completion tracking
```

---

**Mark All Undone:**

```
Button: [Mark All Undone]

Click → Confirmation:
"Mark all 5 cards in group as not done?"

Confirm:
→ All 5 cards: done = false
→ ✓ Done indicators removed
→ Milestones progress updates
→ Group progress decreases

Reverses Completion:
- Undo accidental bulk mark done
- Reopen completed group for review
```

---

**Set Due Date:**

```
Button: [Set Due Date]

Click → Calendar picker:
┌─────────────────────────┐
│   January 2024          │
├─────────────────────────┤
│ Su Mo Tu We Th Fr Sa    │
│        1  2  3  4  5  6 │
│  7  8  9 10 11 12 13    │
│ 14 15 16 17 18 19 20    │
│ 21 22 23 24 25 26 27    │
│ 28 29 30 31             │
└─────────────────────────┘

Select January 31:
→ All 5 cards due date = Jan 31
→ Cards show 📅 Jan 31

Same Date for All:
- Synchronized deadline
- Group-wide due date
- Sprint end date, project milestone, etc.
```

**Overrides Existing Dates:**

```
Before bulk operation:
Card 1: Jan 15
Card 2: Jan 20
Card 3: (no due date)
Card 4: Feb 5
Card 5: (no due date)

Bulk set due date: Jan 31

After bulk operation:
Card 1: Jan 31 (replaced Jan 15)
Card 2: Jan 31 (replaced Jan 20)
Card 3: Jan 31 (added)
Card 4: Jan 31 (replaced Feb 5)
Card 5: Jan 31 (added)

All cards now due Jan 31
```

---

**Clear Due Dates:**

```
Button: [Clear Dates]

Click → Confirmation:
"Remove due dates from all 5 cards in group?"

Confirm:
→ All 5 cards: due date = null
→ No due date badges on cards

Cards Without Dates After:
- Due date field empty
- No date-based urgency coloring
- Clean slate for re-scheduling
```

---

### 9.7 Use Cases

**Sprint Planning:**

**Group for Each Sprint:**

```
Create groups:
├─ Sprint 1 (Jan 1-14)
├─ Sprint 2 (Jan 15-28)
├─ Sprint 3 (Jan 29-Feb 11)
└─ ...

Each sprint = One group
```

**Add Sprint Tasks to Group:**

```
Sprint planning meeting:
1. Create "Sprint 1" group
2. Select 20 tasks for sprint
3. Add all 20 to "Sprint 1" group (bulk or individually)
4. Group now has 20 cards

Sprint scope defined
```

**Bulk Set Due Date (Sprint End):**

```
End of sprint = End of group due date

Sprint 1 group (20 cards)
→ Bulk Operations
→ Set Due Date: Jan 14 (sprint end)
→ All 20 cards due Jan 14

Everyone knows the deadline
```

**Bulk Mark Done at Sprint Completion:**

```
Sprint retrospective:
- Open "Sprint 1" group
- Review: 18/20 cards done (90%)
- Move remaining 2 to Sprint 2
- Bulk mark all done (if completing sprint)

Clean sprint closure
```

---

**Initiative Tracking:**

**Group for Each Initiative:**

```
Strategic initiatives:
├─ Security Improvements
├─ Customer Experience
├─ Cost Reduction
└─ Innovation Projects

Each initiative = One group
Track strategic progress
```

**Cross-Departmental Tasks:**

```
Initiative: "Security Improvements"

Tasks from multiple departments:
├─ IT: "Implement MFA" (Technical category)
├─ Legal: "Update privacy policy" (Documentation category)
├─ HR: "Security training" (HR category)
└─ Finance: "Security insurance" (Finance category)

All in ONE group: "Security Improvements"
Track cross-functional initiative
```

**Bulk Apply Milestone:**

```
Initiative group: "Security Improvements" (15 cards)

Bulk Operations:
→ Set Milestone: Q1 2024
→ All 15 cards assigned to Q1 2024

Initiative aligned with quarterly goal
```

**Track Initiative Progress:**

```
Initiative Dashboard:

Security Improvements: 12/15 cards done (80%)
Customer Experience: 8/20 cards done (40%)
Cost Reduction: 15/15 cards done (100% ✓)
Innovation Projects: 3/10 cards done (30%)

Executive visibility
Strategic progress tracking
```

---

**Batch Processing:**

**Group Related Tasks:**

```
Temporary group: "Pre-Audit Cleanup"

Add all tasks needed before audit:
├─ Update all policies (5 tasks)
├─ Complete evidence collection (8 tasks)
├─ Fix non-conformities (3 tasks)
└─ Prepare audit materials (2 tasks)

Total: 18 tasks in group
```

**Bulk Operations:**

```
Pre-Audit Cleanup group:

Bulk Operations:
1. Set Due Date: Jan 31 (audit date)
2. Set Category: Critical
3. Set Milestone: Audit Prep
4. Assign all to compliance team

4 bulk operations → 18 cards fully configured

Massive time savings:
Manual: 18 cards × 4 properties × 30 seconds = 36 minutes
Bulk: 4 operations × 10 seconds = 40 seconds

54x faster!
```

**Efficient Management:**

```
Group enables:
✓ Batch configuration
✓ Unified deadline
✓ Collective tracking
✓ Synchronized completion

From chaos to coordinated effort
```

**Temporary Grouping:**

```
After audit complete:

Option 1: Delete group
- Cards remain on board
- Just group structure removed

Option 2: Keep group
- Historical reference
- Future audit cycles

Flexibility
```

---

---

## CHAPTER 10: DYNAMIC LISTS (REFERENCE TREES)

Dynamic Lists provide a hierarchical reference structure for compliance frameworks and project documentation.

### 10.1 Understanding Dynamic Lists

**What are Dynamic Lists:**

Dynamic Lists are tree-structured reference hierarchies that live alongside your board, typically containing compliance frameworks or project structures.

**Tree-Structured References:**

```
Example: ISO 27001 Dynamic List

▼ ISO 27001:2022
  ├─ ▼ A.5 Organizational Controls
  │  ├─ A.5.1 Information Security Policy
  │  ├─ A.5.2 Information Security Roles
  │  ├─ A.5.3 Separation of Duties
  │  └─ ... (more controls)
  │
  ├─ ▶ A.6 People Controls
  ├─ ▶ A.7 Physical Controls
  └─ ▶ A.8 Technological Controls

Hierarchical structure
Expandable/collapsible
Visual tree navigation
```

**Two Node Types: Tasks and Connections:**

```
Task Nodes (Yellow 🟡):
- Standalone reference information
- Not linked to board cards
- Contains: description, checklists, comments, notes
- Example: Process documentation, guidelines

Connection Nodes (Blue 🔵):
- Linked to board cards
- Clicking filters board to show linked cards
- Compliance requirements
- Example: ISO controls, GDPR articles

Two purposes, one tree
```

**Exported from Workflows:**

```
Workflow Creation Process:
1. Consultant creates workflow (ISO 27001)
2. Workflow contains 93 controls
3. Export workflow to board
4. Workflow → Dynamic List (tree structure)
5. Board created with dynamic list reference

Source of Truth:
- Workflow = Master structure (consultant maintains)
- Dynamic List = Board reference (client uses)
- Sync: Workflow updates → Dynamic list updates
```

**Consultant-Controlled Structure:**

```
Permissions Model:

Consultant:
✓ Create/edit dynamic list structure
✓ Add/remove nodes
✓ Edit node content
✓ Maintain compliance framework
✓ Update when regulations change

Client:
✓ View dynamic list
✓ Expand/collapse nodes
✓ Click to filter board
✓ Read node content
✗ CANNOT edit structure

Separation of Concerns:
- Consultant: Framework structure
- Client: Task execution
```

**Client Reference and Filtering:**

```
Client Use Case:

1. View Dynamic List panel
2. See full ISO 27001 structure
3. Click control "A.9.4.3 MFA"
4. Board filters to show MFA implementation tasks
5. Work on tasks
6. Reference control description while working

Always-available compliance reference
Context-aware task filtering
```

---

### 10.2 Panel Interface

**Toggle Button Opens/Closes:**

```
Location: Left edge of board

[▶] Button (panel closed)
[◀] Button (panel open)

Click to toggle:
▶ → Opens panel (slides in from left)
◀ → Closes panel (slides out)

Keyboard: Ctrl+D (toggle dynamic list)
```

**Side Panel Overlay:**

```
Panel Layout:

┌──────────┬────────────────────────────────┐
│ Dynamic  │  Board Columns                 │
│ List     │                                │
│          │  [To Do] [In Progress] [Done] │
│ ▼ ISO    │                                │
│   ├─A.5  │  Tasks                         │
│   ├─A.6  │                                │
│   └─A.7  │                                │
│          │                                │
└──────────┴────────────────────────────────┘
   ↑                    ↑
Panel              Board

Panel takes ~25-30% of screen width
Board adjusts to remaining space
```

**Mode Toggle (Creation/Reference):**

```
Top of panel:

[Creation Mode] [Reference Mode]
       ↑              ↑
  (Consultant)   (Client - default)

Creation Mode:
- Add/edit/delete nodes
- Build structure
- Consultant only

Reference Mode:
- View-only structure
- Filter functionality
- Client and consultant

Most users stay in Reference Mode
```

**Search Bar:**

```
Search Box:
┌─────────────────────────┐
│ 🔍 Search... [×]        │
└─────────────────────────┘

Type to search:
- Node names
- Node IDs (A.5.1, A.5.2)
- Descriptions

Results:
- Matching nodes expand automatically
- Highlighted in yellow
- Clear with [×]

Example:
Search: "multi-factor"
Result: Expands and highlights "A.9.4.3 MFA"
```

**Tree Display:**

```
Tree Structure:

▼ Root Node
  ├─ ▼ Parent Node
  │  ├─ 🔵 Connection Node (5 cards)
  │  ├─ 🟡 Task Node
  │  └─ 🔵 Connection Node (2 cards)
  │
  └─ ▶ Parent Node (collapsed)

Symbols:
▼ = Expanded (children visible)
▶ = Collapsed (children hidden)
🔵 = Connection node (linked to cards)
🟡 = Task node (standalone reference)

Click ▼▶ to expand/collapse
Click node to interact
```

**Collapse/Expand All:**

```
Control Buttons:

[▼ Expand All] [▲ Collapse All]

Expand All:
- Opens all nodes
- Full tree visible
- See complete structure

Collapse All:
- Closes all nodes
- Only root nodes visible
- Clean, minimal view

Keyboard:
Ctrl+E: Expand all
Ctrl+Shift+E: Collapse all
```

---

### 10.3 Node Types

**Task Nodes (Standalone):**

**Purpose:** Reference information without board linkage

**Yellow Indicator:**

```
Display:
🟡 Process Documentation

Yellow = Task node
Standalone reference
Not linked to cards
```

**Independent Tasks:**

```
Task nodes exist independently:
- Not connected to board cards
- Self-contained information
- Reference material only
- Guidelines, procedures, notes

Example:
🟡 "GDPR Principles Overview"
- Contains description of GDPR principles
- Reference for team
- Not a task to complete
```

**Not Linked to Board Cards:**

```
No filtering:
- Clicking task node does NOT filter board
- Opens task node details modal
- Shows reference content
- No card linkage
```

**Has Description:**

```
Full description field:
- What this reference is about
- Background information
- Context and guidance
- Formatted text

Example:
Node: "Security Best Practices"
Description: "Industry-standard security practices 
for authentication and access control..."
```

**Has Checklists:**

```
Checklist items:
☑ Review best practice guide
☑ Assess current implementation
☐ Identify gaps
☐ Create improvement plan

Progress: 2/4 (50%)

Use for sub-items, verification steps
```

**Has Comments, Notes, Links, Images:**

```
Full attachment support:

Comments:
💬 "Updated with 2024 guidelines" - John

Notes:
📝 "Implementation Guide" (rich text)

Links:
🔗 "ISO 27002:2022 Full Text"
🔗 "NIST CSF Reference"

Images:
🖼️ "Control Framework Diagram"

Complete reference package
```

---

**Connection Nodes (Filters):**

**Purpose:** Link to board cards and enable filtering

**Blue Indicator:**

```
Display:
🔵 A.9.4.3 Multi-Factor Authentication (5)
                                       ↑
                            5 cards linked

Blue = Connection node
Linked to board cards
Clickable to filter
```

**Link to Board Cards:**

```
Connection established:
- Node represents compliance requirement
- Board cards implement the requirement
- Node → Cards linkage maintained
- Card count displayed

Example:
🔵 "A.9.4.3 MFA Requirement" (5 cards)
Linked to:
├─ "Research MFA solutions"
├─ "Purchase licenses"
├─ "Configure Azure AD"
├─ "Test MFA"
└─ "Deploy MFA"

5 implementation tasks
```

**Filter Activation:**

```
Click connection node:
→ Board filters instantly
→ Shows only linked cards (5 cards)
→ Filter banner appears
→ Other cards hidden

Work in context:
See only tasks related to this requirement
```

**Compliance Requirements:**

```
Typical use:
Each regulatory requirement = Connection node

ISO 27001:
🔵 A.5.1 InfoSec Policy
🔵 A.5.2 InfoSec Roles
🔵 A.5.3 Separation of Duties
... (93 controls total)

GDPR:
🔵 Article 5(1)(a) Lawfulness
🔵 Article 5(1)(b) Purpose Limitation
... (99 articles)

SOC 2:
🔵 CC6.1 Logical Access
🔵 CC6.2 Data Protection
... (64 criteria)

Comprehensive coverage
```

**Reference Materials:**

```
Connection nodes can link to:
- Policies
- Procedures
- Guidelines
- Standards
- Regulations
- Control frameworks

Dual purpose:
1. Reference (description, guidance)
2. Filter (show implementation tasks)
```

---

### 10.4 Creation Mode

**For Consultants:**

Creation Mode enables consultants to build and maintain the reference structure.

**Add Root Nodes:**

```
Button: [+ Add Root Node]

Creates top-level node:
▼ New Root Node
  (empty, ready for children)

Use for:
- Regulation name (ISO 27001)
- Project name
- Framework name
```

**Add Child Nodes:**

```
Right-click any node → Add Child

Creates child under selected node:

Before:
▼ A.5 Organizational Controls

After:
▼ A.5 Organizational Controls
  └─ A.5.1 Information Security Policy

Build hierarchy recursively
Unlimited depth
```

**Edit Node Names:**

```
Right-click node → Rename

Enter new name:
"A.5.1 Information Security Policy"

Node label updates
Maintains children and linkages
```

**Delete Nodes:**

```
Right-click node → Delete

Confirmation:
"Delete node and all children?"

Deletes:
✗ Node removed
✗ Children removed (recursively)
✓ Linked cards remain (just unlinked)

Permanent action
```

**Build Reference Tree:**

```
Building ISO 27001 Structure:

1. Add root: "ISO 27001:2022"
2. Add children: "A.5 Organizational Controls", "A.6 People Controls", etc.
3. Add grandchildren: "A.5.1", "A.5.2", etc.
4. Set node types (task vs connection)
5. Add descriptions
6. Link connection nodes to cards

Result: Complete ISO 27001 reference tree
```

**Structure Compliance Requirements:**

```
Consultant workflow:

1. Create template (one-time)
2. Build workflow with all requirements
3. Export workflow to board
   → Auto-creates dynamic list structure
4. Maintain: Update workflow when regulations change
   → Dynamic list syncs automatically

Efficient framework management
```

---

### 10.5 Reference Mode

**For Clients:**

Reference Mode is the default, view-only mode for clients to use the structure.

**View Tree Structure:**

```
Panel displays full hierarchy:

▼ ISO 27001:2022 (93 controls)
  ├─ ▼ A.5 Organizational Controls (15)
  │  ├─ 🔵 A.5.1 InfoSec Policy (3 cards)
  │  ├─ 🔵 A.5.2 InfoSec Roles (2 cards)
  │  └─ ... (more controls)
  │
  ├─ ▶ A.6 People Controls (20)
  └─ ▶ A.7 Physical Controls (18)

Read-only visualization
Structured navigation
```

**Expand/Collapse Nodes:**

```
Click ▼ or ▶:
- Toggle node expansion
- Show/hide children
- Navigate structure

Keyboard:
- Arrow keys to navigate
- Space to expand/collapse
- Enter to interact with node

Efficient navigation
```

**Click Connection Nodes to Filter:**

```
Click 🔵 connection node:

Example:
Click: 🔵 A.5.1 InfoSec Policy (3 cards)

Result:
→ Board filters to show 3 cards
→ Filter banner: "A.5.1 Information Security Policy [×]"
→ See only cards implementing this control
→ Work in context

Primary use case
```

**View Linked Card Counts:**

```
Connection node display:
🔵 A.5.1 InfoSec Policy (3 cards)
                        ↑
                Card count

Shows:
- How many cards address this requirement
- Implementation coverage
- Progress indicator

Quick assessment:
- 0 cards: Gap! Requirement not addressed
- 1-5 cards: Normal implementation
- 10+ cards: Complex requirement
```

**Open Task Node Details:**

```
Click 🟡 task node:

Opens modal:
┌─────────────────────────────────────┐
│  Task Node Details               [×]│
│  GDPR Principles Overview           │
├─────────────────────────────────────┤
│                                     │
│  Description:                       │
│  GDPR Article 5(1) defines six key  │
│  principles for data processing...  │
│                                     │
│  Checklist:                         │
│  ☑ Review principles                │
│  ☐ Assess compliance                │
│                                     │
│  Notes: (2)                         │
│  Links: (3)                         │
│  Images: (1)                        │
│                                     │
│           [Close]                   │
└─────────────────────────────────────┘

Full reference content
```

**Read-Only Structure:**

```
In Reference Mode:

Can do:
✓ View tree
✓ Expand/collapse
✓ Search
✓ Click to filter
✓ Read content

Cannot do:
✗ Add nodes
✗ Delete nodes
✗ Rename nodes
✗ Restructure

Client = Consumer
Consultant = Curator
```

---

### 10.6 Filtering with Connection Nodes

**Click Connection Node:**

```
Action: Click 🔵 A.9.4.3 MFA (5 cards)

Result: Instant board filtering
```

**Board Filters to Linked Cards:**

```
Before click:
Board showing all 45 cards across columns

After click:
Board showing only 5 MFA cards

[To Do]        [In Progress]     [Done]
├─ Research    ├─ Configure      └─ Test MFA
│  MFA         │  Azure AD          (done)
└─ Purchase    └─ Training
   licenses       materials

5 cards visible, 40 hidden
```

**Filter Banner Appears:**

```
Top of board:
┌─────────────────────────────────────┐
│ Filter: 🔵 A.9.4.3 MFA [×]          │
│ Showing 5 of 45 cards               │
└─────────────────────────────────────┘

Clear indication:
- Filter active
- Which requirement
- Card counts
- Clear button [×]
```

**Shows Requirement Context:**

```
While filtered:
- Dynamic list highlights active node
- Node shows (5 cards) count
- Board shows only relevant work
- Team knows context

Example workflow:
1. Audit preparation
2. Click each ISO control in list
3. Review implementation cards
4. Ensure coverage
5. Document evidence
```

**Clear Filter to Reset:**

```
Clear filter:
Method 1: Click [×] in filter banner
Method 2: Click same connection node again (toggle)
Method 3: Click different connection node (switch filter)
Method 4: Keyboard: Esc

Result:
→ All 45 cards visible again
→ Normal board view
→ Filter banner disappears
```

---

### 10.7 Task Node Details

**Click Task Node:**

```
Click 🟡 task node:

Example: 🟡 "GDPR Implementation Guide"

Opens detailed modal
```

**Modal with Full Details:**

```
┌─────────────────────────────────────────────┐
│  GDPR Implementation Guide               [×]│
├─────────────────────────────────────────────┤
│                                             │
│  Description:                               │
│  ┌─────────────────────────────────────┐  │
│  │ Comprehensive guide for implementing│  │
│  │ GDPR requirements. Covers all 99    │  │
│  │ articles with practical examples... │  │
│  └─────────────────────────────────────┘  │
│                                             │
│  Checklist: (3/5 complete)                  │
│  ☑ Read full GDPR text                     │
│  ☑ Identify applicable articles            │
│  ☑ Map to existing controls                │
│  ☐ Create implementation plan              │
│  ☐ Assign responsibilities                 │
│                                             │
│  Comments: (2)                              │
│  Notes: (1)                                 │
│  Links: (4)                                 │
│  Images: (2)                                │
│                                             │
│           [Close]                           │
└─────────────────────────────────────────────┘

Complete reference package
```

**Description:**

```
Full-length description:
- What this reference covers
- Background and context
- Key points
- Guidance for implementation

Rich text formatting:
- Headings, bold, italic
- Bullet lists
- Links

Comprehensive information
```

**Checklist Items (Add/Complete/Delete):**

```
Interactive checklist:

Add item:
- [+ Add Item] button
- Type item text
- Press Enter
- Appears in list

Complete item:
- Click ☐ checkbox
- Changes to ☑
- Progress updates

Delete item:
- Hover over item
- Click [×] button
- Confirms deletion

Progress tracking:
Header shows: (3/5 complete) 60%
```

**Comments Thread:**

```
Comments section:
┌─────────────────────────────────────┐
│ Comments (2)                        │
├─────────────────────────────────────┤
│                                     │
│ [Add comment__________________]     │
│                                     │
│ Sarah - 2 days ago                  │
│ Updated with 2024 guidelines        │
│                                     │
│ Mike - 1 week ago                   │
│ Great reference, very helpful       │
└─────────────────────────────────────┘

Team discussion
Updates and notes
```

**Notes (Rich Text):**

```
Notes section:
📝 "Implementation Steps" (rich text)
📝 "Legal Requirements"

Click to view/edit
Formatted documentation
Detailed guidance
```

**Links:**

```
Links section:
🔗 "GDPR Full Text (EUR-Lex)"
🔗 "ICO Guidance"
🔗 "Company Privacy Policy"
🔗 "DPA Contact Information"

External resources
Quick access
```

**Images:**

```
Images section:
🖼️ "GDPR Structure Diagram"
🖼️ "Data Flow Chart"

Visual aids
Diagrams and screenshots
```

---

### 10.8 Workflow Export to Dynamic List

**Full Export:**

**Entire Workflow Structure:**

```
Workflow:
ISO 27001:2022
├─ Organizational Controls (Level 1)
│  ├─ A.5 Org Controls (Level 2)
│  │  ├─ A.5.1 InfoSec Policy (Level 3)
│  │  ├─ A.5.2 InfoSec Roles (Level 3)
│  │  └─ A.5.3 Separation (Level 3)
│  └─ ...
└─ ...

Export → Dynamic List:
Same structure preserved
All levels, all units
Complete hierarchy
```

**All Levels Become Nodes:**

```
Workflow levels → Dynamic list nodes

10-level workflow:
├─ Level 1 (Domains)
│  ├─ Level 2 (Categories)
│  │  ├─ Level 3 (Subcategories)
│  │  │  ├─ Level 4 (Controls)
│  │  │  │  └─ Level 5 (Requirements)
│  │  │  │     └─ Level 6 (Tasks)
│  │  │  │        └─ Level 7-10 (Sub-tasks)

All levels → All nodes
Full depth preserved
```

**All Units Become Nodes:**

```
Workflow with 93 units:
→ Dynamic list with 93 nodes

1:1 mapping
Every unit = One node
Complete coverage
```

**Hierarchy Preserved:**

```
Parent-child relationships maintained:

Workflow:
A.5 Org Controls
  └─ A.5.1 InfoSec Policy

Dynamic List:
▼ A.5 Org Controls
  └─ 🔵 A.5.1 InfoSec Policy

Exact structure replication
```

**Descriptions Copied:**

```
Workflow unit description:
"Establish and maintain information security 
policies aligned with business objectives..."

→ Copied to dynamic list node description

Same content
Reference consistency
```

**Tags Become Connections:**

```
Workflow units with tags:
A.5.1 [Critical] [Policy] [Documentation]

→ Dynamic list behavior:
If unit has tags → Connection node (🔵)
Cards can be linked

If unit no tags → Task node (🟡)
Standalone reference

Tag presence determines node type
```

---

**Partial Export:**

**Unit-Level Export:**

```
Instead of full workflow:
Select specific unit to export

Example:
Full workflow: ISO 27001 (93 controls)
Export unit: "A.5 Organizational Controls" only

Result:
Dynamic list with just A.5 and children (15 controls)

Focused subset
```

**Unit and Children Only:**

```
Export unit: A.5 Organizational Controls

Includes:
▼ A.5 Organizational Controls
  ├─ A.5.1 InfoSec Policy
  ├─ A.5.2 InfoSec Roles
  ├─ A.5.3 Separation
  └─ ... (A.5.4 through A.5.15)

Excludes:
A.6, A.7, A.8, etc. (sibling branches)

Subtree only
```

**Subtree Preserved:**

```
Complete subtree structure maintained:

Export: A.5 (has 15 children, some with grandchildren)

Dynamic list:
▼ A.5 Organizational Controls
  ├─ ▼ A.5.1 InfoSec Policy
  │  ├─ A.5.1.1 Policy creation
  │  └─ A.5.1.2 Policy review
  ├─ A.5.2 InfoSec Roles
  └─ ... (full A.5 subtree)

All descendants included
```

---

### 10.9 Smart Card Linking

**Connection Nodes Auto-Link to Cards:**

```
During workflow export:
- Each workflow unit exported as connection node
- Cards automatically created for each unit
- Node → Card linkage established
- Traceability maintained

Result:
🔵 A.5.1 InfoSec Policy (1 card)
       ↑
   Auto-linked to card created from this unit
```

**Based on Workflow Completion Status:**

```
Export considers workflow unit status:

Unit marked done in workflow:
→ Card created in Done column
→ Card marked ☑ done

Unit not done in workflow:
→ Card created in Backlog/To Do
→ Card not marked done

Status synchronization
```

**Completed Units → Done Column Cards:**

```
Workflow state:
☑ A.5.1 InfoSec Policy (done)
☑ A.5.2 InfoSec Roles (done)
☐ A.5.3 Separation (not done)

After export:

Board Done column:
├─ ☑ A.5.1 InfoSec Policy
└─ ☑ A.5.2 InfoSec Roles

Board To Do column:
└─ ☐ A.5.3 Separation

Reflects workflow completion
```

**Incomplete Units → Backlog Cards:**

```
Units not done:
→ Cards in To Do or Backlog column
→ Ready for implementation
→ Work to be done

Example:
☐ A.5.3 Separation (not done in workflow)
→ Card in To Do column
→ Team picks up for implementation
```

**Preserves Requirement Traceability:**

```
Traceability chain:

Regulation → Workflow Unit → Dynamic List Node → Board Card

Example:
ISO 27001 A.5.1 → Workflow unit → 🔵 Node → "Draft policy" card

Audit trail:
- Which regulation requirement
- Which workflow unit
- Which board card
- Complete traceability

Compliance demonstration
```

---

### 10.10 Use Cases

**Compliance Requirements:**

**Full Regulation Tree:**

```
ISO 27001 Structure:
▼ ISO 27001:2022
  ├─ ▼ Organizational Controls (15)
  ├─ ▼ People Controls (20)
  ├─ ▼ Physical Controls (18)
  └─ ▼ Technological Controls (40)

Total: 93 controls

Complete framework reference
```

**Each Requirement as Node:**

```
Every ISO control:
🔵 A.5.1 Information Security Policy
🔵 A.5.2 Information Security Roles
🔵 A.5.3 Separation of Duties
... (93 nodes)

Full coverage
No gaps
```

**Link to Implementation Cards:**

```
Control → Implementation

🔵 A.9.4.3 MFA (5 cards):
├─ "Research MFA solutions"
├─ "Purchase licenses"
├─ "Configure Azure AD"
├─ "Test MFA"
└─ "Deploy MFA"

Requirement → Execution
```

**Filter by Requirement:**

```
Audit prep workflow:
1. Auditor asks: "Show me MFA implementation"
2. Click 🔵 A.9.4.3 MFA
3. Board filters to 5 MFA cards
4. Show evidence
5. Auditor satisfied

Instant compliance demonstration
```

**Audit Trail:**

```
Complete traceability:

Question: "How do you meet ISO A.9.4.3?"

Answer (via board):
1. Dynamic list: 🔵 A.9.4.3 MFA requirement
2. Board cards: 5 implementation tasks (all done)
3. Card attachments: Evidence, screenshots, policies
4. Activity log: Who, when, what

Comprehensive audit response
```

---

**Project Documentation:**

**Project Structure Tree:**

```
Project dynamic list:
▼ Website Redesign Project
  ├─ ▼ Discovery Phase
  │  ├─ User research
  │  ├─ Competitive analysis
  │  └─ Requirements gathering
  │
  ├─ ▼ Design Phase
  │  ├─ Wireframes
  │  ├─ Visual design
  │  └─ Design system
  │
  ├─ ▼ Development Phase
  │  ├─ Frontend
  │  ├─ Backend
  │  └─ Integration
  │
  └─ ▼ Launch Phase
     ├─ QA testing
     ├─ Deployment
     └─ Marketing

Project work breakdown structure
```

**Deliverables as Nodes:**

```
Each deliverable = Node:
🟡 "User Research Report"
🟡 "Wireframe Documentation"
🟡 "Design System"
🔵 "Frontend Development" (8 cards)

Mix of references and work items
```

**Link to Work Cards:**

```
Node → Cards:
🔵 "Frontend Development" (8 cards)
├─ "Set up React app"
├─ "Build homepage"
├─ "Build product page"
└─ ... (5 more)

Project phase → Execution tasks
```

**Navigate by Structure:**

```
Navigate project phases:
1. Expand "Development Phase"
2. Click "Frontend Development"
3. Board filters to 8 frontend cards
4. Team works on frontend
5. Click "Backend Development"
6. Switch to 6 backend cards

Structured project navigation
```

---

**Knowledge Base:**

**Process Documentation:**

```
Knowledge base tree:
▼ Company Processes
  ├─ ▼ HR Processes
  │  ├─ 🟡 Onboarding Process
  │  ├─ 🟡 Performance Review
  │  └─ 🟡 Exit Process
  │
  ├─ ▼ IT Processes
  │  ├─ 🟡 Access Request
  │  ├─ 🟡 Incident Response
  │  └─ 🟡 Change Management
  │
  └─ ▼ Finance Processes
     ├─ 🟡 Expense Approval
     ├─ 🟡 Invoice Processing
     └─ 🟡 Budget Planning

Organizational knowledge repository
Task nodes with process documentation
Checklists for each process
Team reference library
```

---
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
