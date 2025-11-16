# Workflows Manual
## Building Your Strategic Compliance Maps

---

## CHAPTER 1: INTRODUCTION TO WORKFLOWS

Welcome to the Workflows Manual. This comprehensive guide will teach you how to create, populate, manage, and leverage workflows for compliance consultancy and strategic project management.

### 1.1 What is a Workflow?

**Definition**

A workflow is a **macro-level strategic map** that transforms a template's structure into a populated, actionable implementation plan. Think of it as the bridge between abstract frameworks (templates) and concrete execution (boards).

**Key Characteristics:**

- **Hierarchical Structure:** Workflows organize information in nested levels (e.g., Functions → Categories → Controls → Tasks)
- **Rich Data Container:** Each item can have IDs, descriptions, tags, attachments, grades, and progress tracking
- **Dual-Mode Operation:** Creation mode for building structure, Execution mode for tracking completion
- **Living Documents:** Workflows evolve over time as requirements change and work progresses

**Real-World Example:**

A compliance consultant creates an "ISO 27001:2022 Implementation" workflow from an ISO 27001 template:

```
ISO 27001:2022 Implementation Workflow

Level 1: Organizational Controls (Domain)
├─ Level 2: A.5 Information Security Policies (Category)
│  ├─ Level 3: A.5.1 Policies for information security (Control)
│  │  └─ Level 4: Draft InfoSec policy document (Task)
│  │  └─ Level 4: Get executive approval (Task)
│  │  └─ Level 4: Publish to company intranet (Task)
│  └─ Level 3: A.5.2 Information security roles (Control)
│     └─ Level 4: Document CISO responsibilities (Task)
```

Each item contains:
- **Display ID:** "A.5.1"
- **Description:** The ISO requirement text and implementation guidance
- **Tags:** "Priority:High", "Department:IT", "Q1-2024"
- **Links:** Policy template, ISO 27001 standard reference
- **Notes:** Implementation decisions and evidence
- **Done Status:** Checked when complete
- **Progress:** Visual tracking of completion

**From Template to Implementation**

Templates provide the **structure** (what levels exist, what properties are available). Workflows provide the **content** (actual regulatory requirements, specific tasks, real deadlines).

| Template | Workflow |
|----------|----------|
| "Control Family" (structure) | "Access Control" (actual control family) |
| Level has Description property | "Restrict information access to authorized users..." (actual requirement) |
| Level has Tags property | "Priority:Critical", "Audit:External" (real tags) |
| Empty structure | Fully populated implementation plan |

**Living Documents vs Static Plans**

Traditional compliance spreadsheets are **static**: once created, they're difficult to update, share, or adapt. Workflows are **living documents**:

- **Easily Updated:** Change requirements, add tasks, adjust priorities in real-time
- **Collaborative:** Share with clients, collect comments, track discussions
- **Progress-Aware:** Automatically calculate completion percentages
- **Export-Ready:** Push to execution boards when ready for action
- **Version Control:** Create copies, link workflows, maintain multiple variants

---

### 1.2 Workflows in Compliance Consultancy

Compliance consultants use workflows as their primary tool for translating regulatory frameworks into client-actionable plans.

**Mapping Regulatory Requirements**

**Challenge:** Regulations like GDPR, HIPAA, or SOC 2 are complex documents with hundreds of requirements spread across articles, sections, and controls.

**Solution:** Workflows organize these requirements into navigable hierarchies:

**Example: GDPR Compliance Workflow**

```
GDPR Compliance Workflow

Principle 1: Lawfulness, Fairness, Transparency
├─ Article 5: Principles relating to processing
│  └─ Requirement: Establish lawful basis for each processing activity
│     ├─ Task: Document lawful basis for each system
│     ├─ Task: Create processing register
│     └─ Task: Update privacy notices
├─ Article 6: Lawfulness of processing
│  └─ Requirement: Identify lawful basis (consent, contract, etc.)
│     └─ Task: Map each processing activity to legal basis
└─ Article 13: Information to be provided
   └─ Requirement: Transparent privacy notices
      ├─ Task: Draft customer-facing notice
      └─ Task: Draft employee-facing notice
```

Each requirement includes:
- **Display ID:** Article number (5, 6, 13)
- **Description:** The actual GDPR requirement text
- **Tags:** "Must-Have", "Legal-Review", "Q1"
- **Links:** Link to official GDPR text, ICO guidance, templates
- **Notes:** Consultant's implementation guidance specific to client

**Client Reference Guidelines**

Consultants share workflows with clients as **reference frameworks**:

**Use Case: SOC 2 Audit Preparation**

A consultant creates a "SOC 2 Type II Readiness" workflow and shares it with a SaaS startup. The workflow serves as:

1. **Roadmap:** What controls need to be implemented
2. **Evidence Guide:** What documentation auditors will request
3. **Progress Tracker:** Where the company stands (20% complete, 80% remaining)
4. **Knowledge Base:** Descriptions explain *why* each control matters

The consultant keeps the workflow in **Execution Mode** so the client can:
- Check off completed controls
- See progress bars showing readiness percentage
- Filter by tags (e.g., show only "Q1-Priority" items)
- Export specific control areas to boards for detailed execution

**Audit Preparation Roadmaps**

**Scenario:** Annual ISO 27001 surveillance audit in 90 days

A consultant creates an "ISO 27001 Surveillance Audit 2024" workflow:

**Structure:**
```
Audit Prep Workflow

Phase 1: Evidence Collection (30 days)
├─ Organizational Controls
│  ├─ A.5.1: Update Information Security Policy → [Link to policy] [Status: Done ✓]
│  └─ A.5.2: Document InfoSec roles → [Status: In Progress]
├─ People Controls
│  └─ A.6.1: Screening procedures → [Link to HR records] [Status: Done ✓]

Phase 2: Gap Remediation (30 days)
└─ [Controls that need fixing]

Phase 3: Documentation Review (30 days)
└─ [Final evidence prep]
```

**Tags organize by:**
- **Priority:** "Critical-Gap", "Minor-Finding", "Observation"
- **Status:** "Evidence-Ready", "In-Progress", "Blocked"
- **Auditor Focus:** "External-Audit", "Spot-Check"

**Progress Tracking:**
- Phase 1: 85% complete (17/20 controls ready)
- Phase 2: 40% complete (4/10 gaps remediated)
- Phase 3: 0% complete (not started)

**Evidence Collection Frameworks**

Workflows serve as **evidence repositories** for audits:

**Example: Evidence Workflow for Financial Audit**

```
Financial Controls Audit Evidence

Control: Segregation of Duties
├─ Requirement: No single person can authorize and execute transactions
│  ├─ Evidence: Role matrix spreadsheet → [Link to SharePoint]
│  ├─ Evidence: Access control report → [Image: screenshot of permissions]
│  └─ Evidence: Audit log sample → [Note: See Q1-2024-Audit-Logs.xlsx]

Control: Management Review of Financials
├─ Requirement: Monthly review of financial statements by CFO
   └─ Evidence: Meeting minutes (Jan-Dec 2023) → [Links to 12 documents]
```

**Benefits:**
- **Centralized:** All evidence links in one place
- **Auditor-Friendly:** Show evidence organized by control
- **Progress-Aware:** Know which controls lack evidence (progress bar at 60% = 6/10 controls have evidence)
- **Exportable:** Create board for "Evidence Collection Sprint"

---

### 1.3 Workflow Lifecycle

A workflow's journey from creation to ongoing use.

**Stage 1: Creation from Templates**

**Action:** Consultant selects appropriate template and creates workflow

**Example:**
1. Navigate to Workflows page
2. Click "New Workflow"
3. Select "ISO 27001:2022 Template"
4. Name it "Acme Corp - ISO 27001 Implementation"
5. Workflow created with all 93 controls pre-structured

**Result:** Empty structure ready for population

---

**Stage 2: Population with Data**

**Action:** Fill the workflow with client-specific information

**In Creation Mode:**
- **Add Units:** Create specific controls, tasks, evidence items
- **Write Descriptions:** Explain requirements in client context
- **Assign IDs:** Map to regulation numbers (A.5.1, CC6.1, etc.)
- **Set Icons:** Visual identification for categories
- **Add Attachments:** Link policies, upload screenshots, write notes

**Example Population:**

```
Before (template structure):
Control Family: Access Control
└─ [Empty - no children]

After (populated workflow):
Control Family: Access Control
├─ Control: A.9.1.1 Access control policy
│  ├─ Description: "Document and communicate access control policy..."
│  ├─ Tag: "Priority:High", "Owner:IT"
│  ├─ Link: Access Control Policy v2.3.pdf
│  └─ Task: Review policy annually
├─ Control: A.9.2.1 User registration
│  ├─ Description: "Formal user registration process..."
│  └─ Task: Document onboarding procedure
```

---

**Stage 3: Sharing with Clients**

**Action:** Provide workflow to client as reference guideline

**Methods:**
- **Read-Only Access:** Share link, client views in Execution Mode
- **Collaborative Access:** Client can add comments, check off items
- **Export PDF/Document:** Generate static report (future feature)

**Client Use Cases:**
- **Reference:** "What do we need to do for GDPR Article 13?"
- **Progress Tracking:** "We're 65% done with Access Controls"
- **Evidence Guide:** "What documentation do we need for this control?"

---

**Stage 4: Export to Boards**

**Action:** Move from strategic planning to tactical execution

**When to Export:**
- Client ready to execute implementation
- Specific phase needs detailed project management
- Tagged items need sprint-based tracking

**What Happens:**
1. Consultant clicks "Export to Board"
2. Workflow structure becomes Board Dynamic List (read-only reference tree)
3. Client creates execution tasks in board workspace
4. Client organizes tasks in columns, milestones, categories
5. Consultant monitors progress via board

**Example:**
```
Workflow: ISO 27001 Implementation (300 controls)
                    ↓ [Export]
Board: ISO 27001 Implementation
├─ Dynamic List Panel: Full 300-control tree (read-only, consultant managed)
└─ Workspace Panel: Client's tasks, grouped in milestones, moving through Kanban columns
```

---

**Stage 5: Ongoing Maintenance**

**Action:** Keep workflow current as regulations evolve

**Maintenance Activities:**

**Regulatory Updates:**
- ISO 27001:2022 replaces 2013 version → Update workflow structure
- GDPR guidance changes → Update requirement descriptions
- New control added → Insert into workflow

**Progress Updates:**
- Client completes Phase 1 → Check off all Phase 1 items
- Annual policy review done → Update "Last Reviewed" dates in descriptions
- New evidence collected → Add links/images to controls

**Client Feedback:**
- Client finds requirement unclear → Improve description
- Client needs more granular tasks → Add Level 5 sub-tasks
- Client wants different tag taxonomy → Restructure tags

**Version Management:**
- Create "2024 Q1 Review" copy of workflow
- Maintain "Gold Master" linked workflow for multiple clients
- Archive completed project workflows

---

### 1.4 Workflows vs Boards

Understanding the fundamental difference between strategic planning (workflows) and tactical execution (boards).

**Conceptual Difference**

| Aspect | Workflows | Boards |
|--------|-----------|--------|
| **Purpose** | Strategic mapping, requirement organization | Tactical execution, task management |
| **Level** | Macro (big picture) | Micro (day-to-day) |
| **Focus** | Structure and completeness | Progress and action |
| **Owner** | Consultant (typically) | Client (typically) |
| **Change Frequency** | Occasional (monthly/quarterly) | Constant (daily/weekly) |
| **Data Type** | Requirements, controls, evidence | Tasks, sprints, assignments |

**Strategic vs Tactical**

**Workflows are Strategic:**

They answer questions like:
- *What* requirements must we meet?
- *How* is this regulation structured?
- *Which* controls apply to our organization?
- *What* evidence do we need?

**Example Workflow Question:**
"For GDPR compliance, what are all the Article 13 requirements for privacy notices?"

**Boards are Tactical:**

They answer questions like:
- *Who* is working on this task?
- *When* is this task due?
- *What* sprint is this in?
- *What* column is this task in right now?

**Example Board Question:**
"Is Sarah done drafting the customer privacy notice for the website?"

**Structure vs Execution**

**Workflows: Structure-Focused**

```
Workflow Structure Example:

Access Control Domain
├─ Policy Requirement
│  └─ Policy Documentation Task
├─ User Access Requirement
│  ├─ Registration Process Task
│  └─ Access Review Task
└─ Authentication Requirement
   ├─ MFA Implementation Task
   └─ Password Policy Task
```

This structure reflects the **logical organization** of requirements. It's about understanding the complete landscape.

**Boards: Execution-Focused**

```
Board Execution Example:

Columns: To Do → In Progress → Review → Done

Milestone: "Sprint 1 - Access Controls"
├─ Task: Draft Access Control Policy [To Do] [Assigned: John] [Due: May 15]
├─ Task: Document user registration process [In Progress] [Assigned: Sarah] [Due: May 20]
├─ Task: Deploy Duo MFA [Review] [Assigned: IT Team] [Due: May 18]
└─ Task: Update password policy [Done] [Completed: May 10]
```

This focuses on **action, ownership, and progress**. It's about getting work done.

**Planning vs Doing**

**Workflows = Planning Phase**

Activities:
- Mapping out requirements
- Understanding scope
- Identifying what needs to be done
- Organizing information logically
- Creating reference documentation

**Boards = Doing Phase**

Activities:
- Assigning tasks to people
- Setting deadlines
- Tracking daily progress
- Managing sprints
- Moving cards through workflow states

**Consultant vs Client Ownership**

**Typical Ownership Model:**

**Consultant Owns Workflow:**
- Creates workflow from template
- Populates with regulatory requirements
- Maintains structural integrity
- Updates when regulations change
- Shares as reference guideline

**Client Owns Board (After Export):**
- Creates specific implementation tasks
- Assigns work to team members
- Manages execution timeline
- Tracks day-to-day progress
- Organizes work in milestones and sprints

**Shared Responsibility on Board:**

When workflow exports to board:
- **Dynamic List Panel (Left):** Consultant manages the reference tree
- **Workspace Panel (Right):** Client manages execution tasks

**Workflow-to-Board Example:**

**Consultant's Workflow:**
```
HIPAA Security Rule Workflow (Strategic)

Administrative Safeguards
├─ 164.308(a)(1) Security Management Process
│  ├─ Risk Analysis (Required)
│  └─ Risk Management (Required)
└─ 164.308(a)(2) Assigned Security Responsibility
   └─ Security Official (Required)
```

**Client's Board (After Export):**
```
HIPAA Implementation Board (Tactical)

Dynamic List (Reference):     Workspace (Execution):
[Full workflow tree]           Columns: To Do | In Progress | Done

                               Milestone: "Security Management - Q1"
                               ├─ Conduct annual risk assessment [To Do]
                               ├─ Document risk treatment plan [To Do]
                               ├─ Appoint HIPAA Security Officer [Done]
                               └─ Update security incident procedures [In Progress]
```

**When to Use Which?**

**Use Workflows When:**
- Starting a new compliance program
- Mapping regulatory requirements
- Creating client reference guides
- Organizing complex frameworks
- Need structural overview
- Multiple clients need same structure (linked workflows)

**Use Boards When:**
- Ready to execute implementation
- Need task assignment and deadlines
- Want Kanban/sprint-based project management
- Tracking day-to-day progress
- Client needs workspace for tactical work
- Need to organize work in milestones

**The Ideal Workflow:**

1. **Consultant creates Workflow** (strategic map of ISO 27001)
2. **Consultant shares Workflow with Client** (reference guideline)
3. **Consultant exports Workflow to Board** (when client ready to execute)
4. **Client uses Board for execution** (creating tasks, assigning work, tracking progress)
5. **Consultant maintains Workflow** (updates as regulations change)
6. **Both refer to Board** (shared view of progress and reference structure)

---

---

## CHAPTER 2: THE WORKFLOW INTERFACE

Understanding the workflow page layout and navigation.

### 2.1 Main Navigation

The workflow interface is designed for efficiency and clarity. Here's what you'll see:

**Application Header (Top Bar)**

Located at the very top of the page:

**Logo/Home:**
- Platform logo or name (typically top-left)
- Click to return to homepage or workflow library

**Workflow Selector Dropdown:**
- **Location:** Center of header
- **Purpose:** Switch between your workflows without leaving the page
- **Usage:** Click dropdown, see list of all workflows, select one to load it
- **Visual:** Shows current workflow name
- **Keyboard:** Ctrl+F to focus the dropdown

**Example:**
```
Current: "Acme Corp - ISO 27001" ▼
Dropdown opens:
  → Acme Corp - ISO 27001 (current)
  → Beta Inc - GDPR Compliance
  → Gamma Ltd - SOC 2 Audit
  → Test Workflow
```

**Mode Toggle Switch:**
- **Location:** Right side of header
- **Purpose:** Switch between Creation Mode and Execution Mode
- **Visual States:**
  - **Creation Mode:** Green indicator, "Creation" label
  - **Execution Mode:** Blue indicator, "Execution" label
- **Click:** Toggle switches modes instantly
- **Keyboard:** Ctrl+E to toggle
- **Impact:** Changes available actions and UI behavior

**Action Buttons:**

**New Workflow Button:**
- **Icon:** Plus sign (+) or "New Workflow" text
- **Function:** Opens creation modal
- **Modal Options:**
  1. From Template
  2. Empty Workflow
  3. Copy Existing
  4. Linked Workflow

**Settings/Help (Optional):**
- Platform settings
- Documentation links
- Keyboard shortcuts (?)

**Theme Toggle:**
- **Icon:** Sun ☀️ / Moon 🌙
- **Function:** Switch between light and dark mode
- **Persists:** Saves preference in browser
- **Instant:** No page reload required

---

### 2.2 Workflow Controls

Below the header, a secondary action bar provides workflow-specific controls.

**Workflow Name Display:**
- Large, prominent text showing current workflow name
- Example: "Acme Corp - GDPR Compliance 2024"

**Rename Button:**
- **Icon:** Pencil/Edit icon
- **Function:** Opens rename modal
- **Validation:** Requires 3-100 characters
- **Instant Update:** Name changes immediately in selector dropdown

**Linked Workflow Indicator:**
- **Visual:** Link icon (🔗) next to workflow name
- **Meaning:** This workflow is synchronized with another
- **Hover:** Shows source workflow name
- **Action:** Click to see link details

**Unlink Button (If Applicable):**
- **Appears:** Only on linked workflows
- **Icon:** Broken chain icon
- **Function:** Breaks synchronization link
- **Confirmation:** "Are you sure? This cannot be undone."
- **Result:** Workflow becomes independent

**Delete Button:**
- **Icon:** Trash can (🗑️)
- **Function:** Deletes entire workflow
- **Confirmation:** "Delete '[Workflow Name]'? This cannot be undone."
- **Safety:** Cannot delete if workflow is linked source (other workflows depend on it)

**Export to Board Button:**
- **Text:** "Export to Board" or board icon
- **Modes:** Only visible in Execution Mode
- **Function:** Creates new project board from entire workflow
- **Navigation:** Opens new board in new tab
- **Preserved:** All structure, data, attachments

**Expand/Collapse All Buttons:**
- **Expand All:** Opens every collapsible unit (shows all children)
- **Collapse All:** Closes every collapsible unit (clean overview)
- **Icons:** ▼▼ (expand) and ▲▲ (collapse)
- **Toast:** Confirmation message on click
- **Use Case:** Navigate large workflows quickly

**Save Buttons (Mode-Specific):**

**Creation Mode:**
- **Button:** "Save Structure"
- **Auto-Save:** Changes save automatically after 5 seconds
- **Manual:** Click to save immediately
- **Loading:** Shows spinner during save

**Execution Mode:**
- **Button:** "Save Execution"
- **Purpose:** Save completion status, grades
- **Auto-Save:** Enabled by default
- **Use Case:** Save before exporting to board

---

### 2.3 Two Modes: Creation and Execution

The platform has a powerful dual-mode system. Each mode has different capabilities and visual indicators.

**Why Two Modes?**

**Problem:** You need to both *build* workflows (structure) and *use* workflows (track completion). Mixing these actions in one interface creates clutter and confusion.

**Solution:** Separate modes:
- **Creation Mode** = Building, editing, configuring
- **Execution Mode** = Tracking, completing, exporting

**Visual Mode Indicators**

| Mode | Color | Toggle Label | Purpose |
|------|-------|--------------|---------|
| Creation | Green accents | "Creation Mode" | Build and modify workflow structure |
| Execution | Blue accents | "Execution Mode" | Track progress and completion |

**Switching Modes:**
- Click toggle in header
- Press Ctrl+E keyboard shortcut
- Mode persists when you switch workflows
- No data loss when switching

---

**CREATION MODE (Green)**

**Purpose:** Build, edit, and configure your workflow structure.

**When to Use Creation Mode:**
- Setting up a new workflow from a template
- Adding new requirements or controls
- Reorganizing hierarchy
- Editing descriptions and properties
- Configuring workflow settings
- Making structural changes

**What You Can Do:**

**Add Units:**
- "Add [Level Name]" buttons visible
- Create root-level items
- Add children to any unit
- Unlimited nesting (up to template's max level)

**Edit Content:**
- Click name fields to edit
- Modify descriptions
- Set custom IDs
- Assign icons
- Add/remove tags

**Modify Structure:**
- Delete units (trash icon visible)
- Reorder items (drag-drop if implemented)
- Change hierarchy

**Manage Attachments:**
- Add links, images, notes, comments
- Delete attachments
- Edit existing notes

**Configure Properties:**
- Set which properties are visible
- Configure workflow-level settings

**Visual Indicators in Creation Mode:**
- **Green accents:** Buttons, highlights
- **Editable fields:** Input borders visible
- **Delete buttons:** Trash icons on every unit
- **Add buttons:** Prominent "+ Add" buttons
- **No Done checkboxes:** Completion tracking disabled

**Example Creation Mode View:**

```
[Creation Mode Active - Green indicator]

Workflow: ISO 27001 Implementation

[+ Add Control Family]  ← Prominent add button

▼ Organizational Controls [🗑️ Delete] [+ Add Control]
   ↑ Editable name       ↑ Delete    ↑ Add child
   
   ID: [A.5] ← Editable field
   Icon: [🔒] ← Click to change
   Tags: [High Priority] [x] [IT Department] [x] ← Can remove
   
   Description: ← Click to edit
   [Text area for editing description]
   
   [+ Add Link] [+ Add Image] [+ Add Note] [+ Add Comment]
```

**What You Cannot Do in Creation Mode:**
- Check items as "Done" (no checkboxes visible)
- Use tag filtering (creation focuses on structure)
- Export units to boards (use Execution Mode)
- View progress bars accurately (they show placeholder data)

---

**EXECUTION MODE (Blue)**

**Purpose:** Track completion, monitor progress, and export to boards.

**When to Use Execution Mode:**
- Marking requirements as complete
- Tracking implementation progress
- Monitoring compliance status
- Filtering by tags
- Exporting to boards for detailed execution
- Sharing with clients for status updates

**What You Can Do:**

**Track Completion:**
- Check "Done" boxes as items complete
- See visual progress bars update
- Monitor completion percentages

**View Progress:**
- Progress bars show real-time completion
- Grades display (individual and cumulative)
- Visual completion indicators

**Filter by Tags:**
- Click any tag to filter workflow
- See only tagged items (with parent context)
- "Clear Filter" to show all
- Useful for focus areas ("Q1 Priority")

**Export Functionality:**
- **Export Full Workflow:** Create board with entire structure
- **Export Unit:** "Board" button on individual units
- **Export Tag:** Filter by tag, then export those items

**Read/Limited Edit:**
- View all content
- Cannot add/delete units
- Cannot modify structure
- Can still edit descriptions and add comments (collaboration)

**Visual Indicators in Execution Mode:**
- **Blue accents:** Buttons, highlights
- **Done checkboxes:** Visible on applicable levels
- **Progress bars:** Live calculation display
- **Export buttons:** "Board" buttons on units with children
- **No delete buttons:** Structure is locked
- **No "Add" buttons:** Cannot create new units

**Example Execution Mode View:**

```
[Execution Mode Active - Blue indicator]

Workflow: ISO 27001 Implementation

▼ Organizational Controls [Export to Board ↗] Progress: ███████░░░ 75%
   ↑ Cannot delete       ↑ Export option      ↑ Live progress
   
   ID: A.5 (read-only)
   Icon: 🔒 (read-only)
   Tags: [High Priority] [IT Department] ← Click to filter
   
   Description: (view-only or limited edit)
   [Display of description text]
   
   ▼ A.5.1 Information Security Policy [☐ Done] [Board ↗]
      ↑ Completion checkbox   ↑ Export this unit
      
      Progress: ████████░ 80% (4/5 tasks complete)
      
      ▼ Task: Draft policy document [☑ Done] ← Checked = Complete
      ▼ Task: Get executive approval [☑ Done]
      ▼ Task: Publish to intranet [☐ Done] ← Not yet complete
```

**What You Cannot Do in Execution Mode:**
- Add new units (no "Add" buttons)
- Delete units (no trash icons)
- Modify workflow structure
- Change template-based configuration

**Why Structure is Locked:**
- **Data Integrity:** Prevent accidental structure changes during execution
- **Audit Trail:** Maintain consistent framework
- **Client Safety:** Clients in Execution Mode can't break structure
- **Clear Separation:** Building vs. using are distinct activities

---

**Mode Switching Best Practices**

**Workflow Design Phase:**
- Stay in **Creation Mode**
- Build complete structure
- Add all requirements
- Configure all properties
- Test with sample data

**Workflow Execution Phase:**
- Switch to **Execution Mode**
- Check off completed items
- Track progress
- Filter by priorities
- Export to boards

**Maintenance:**
- Switch back to **Creation Mode** when you need to:
  - Add new requirements
  - Fix typos
  - Restructure hierarchy
  - Add new levels

**Common Pattern:**
```
1. Creation Mode (1-2 weeks): Build workflow structure
2. Execution Mode (3-12 months): Track implementation
3. Creation Mode (1-2 days): Update for regulation changes
4. Execution Mode: Continue tracking
```

---

### 2.4 Workflow Display Area

The main content area where your workflow hierarchy is displayed.

**Hierarchical Unit Display**

**Visual Structure:**

Units are displayed in a nested, collapsible tree:

```
▼ Level 1 Unit: Control Family
   │
   ├─ ▼ Level 2 Unit: Control Category
   │   │
   │   ├─ ▶ Level 3 Unit: Individual Control (collapsed)
   │   │
   │   └─ ▼ Level 3 Unit: Individual Control (expanded)
   │       │
   │       ├─ Level 4 Unit: Task A
   │       └─ Level 4 Unit: Task B
   │
   └─ ▶ Level 2 Unit: Control Category (collapsed)
```

**Indentation:**
- Each nested level indented further right
- Visual hierarchy is immediately clear
- Unlimited depth (up to template maximum)

**Collapse/Expand Controls:**
- **Chevron Button:** ▶ (collapsed) or ▼ (expanded)
- **Click:** Toggles visibility of children
- **State Persistence:** Remembers which units are open/closed
- **Smart Memory:** Restores state on page reload

---

**Empty States**

When workflow has no content yet, helpful empty states guide you:

**New Workflow (From Template):**
```
┌─────────────────────────────────────────┐
│  Your workflow structure is ready!      │
│                                         │
│  Click "+ Add [Level Name]" below to    │
│  start adding your first items.         │
│                                         │
│  [+ Add Control Family]                 │
└─────────────────────────────────────────┘
```

**Empty Workflow (Quick Start):**
```
┌─────────────────────────────────────────┐
│  Start building your workflow           │
│                                         │
│  This is a simple, single-level         │
│  workflow with all properties enabled.  │
│                                         │
│  [+ Add Item]                           │
└─────────────────────────────────────────┘
```

**Unit Has No Children Yet:**
```
▼ Access Control (no children yet)
   
   [+ Add Control] ← Button to add first child
```

---

**Add Buttons**

**Root-Level Add Button:**
- **Location:** Bottom of workflow (below all units)
- **Text:** "+ Add [Level 1 Name]"
- **Example:** "+ Add Control Family"
- **Keyboard:** Ctrl+A
- **Visible:** Creation Mode only

**Child-Level Add Buttons:**
- **Location:** After unit's last child (when expanded)
- **Text:** "+ Add [Child Level Name]"
- **Example:** "+ Add Control"
- **Visible:** Creation Mode only
- **Nested:** Appears at appropriate indentation level

**Add Button Behavior:**
1. Click "+ Add Control"
2. New empty unit appears
3. Name field auto-focused
4. Type name
5. Press Tab or click outside to save
6. Unit appears in hierarchy

---

**Scrolling and Navigation**

**Long Workflows:**
- Vertical scroll for workflows with many items
- Smooth scrolling
- Scroll position persists on mode switch

**Performance:**
- Handles workflows with 500+ units
- Collapse unused sections for faster rendering
- Lazy loading for very large workflows (future enhancement)

**Tips for Large Workflows:**
- Use "Collapse All" to get overview
- Expand specific sections you're working on
- Use tag filtering (Execution Mode) to focus
- Search functionality (future enhancement)

---

---

## CHAPTER 3: CREATING WORKFLOWS

Four powerful methods to create workflows, each suited for different use cases.

### 3.1 Four Creation Methods

The platform offers four ways to create workflows. Understanding when to use each method will make you more efficient.

---

**METHOD 1: FROM TEMPLATE (Most Common)**

**Best For:**
- Starting a new compliance program
- Implementing a standard framework (ISO 27001, GDPR, SOC 2)
- Client projects with established structure
- When you have a template ready

**How It Works:**

1. **Click "New Workflow"** button in header
2. **Modal opens** with four creation options
3. **Select "From Template"**
4. **Choose template** from dropdown
   - All your templates listed alphabetically
   - Shows template name and description
   - Default template pre-selected
5. **Name your workflow**
   - Required field
   - 3-100 characters
   - Example: "Acme Corp - ISO 27001 Implementation 2024"
6. **Click "Create"**
7. **Workflow created** with complete structure from template

**What You Get:**

- **Complete level structure** from template (e.g., 4 levels: Domains → Categories → Controls → Tasks)
- **All properties configured** as defined in template
- **Empty units** ready for you to populate
- **Workflow settings** inherited (icon, description options, sequential order)
- **Immediate Creation Mode** so you can start adding content

**Example:**

```
Template: "SOC 2 Trust Services Template"
├─ 5 Levels
├─ Properties: ID, Name, Description, Tags, Done, Links, Notes, Comments
└─ Sequential Order: Disabled

Creates Workflow: "Startup Inc - SOC 2 Type II Readiness"
├─ Same 5 levels (Security, Availability, etc.)
├─ Same properties enabled
├─ Empty structure ready for population
└─ You add: Actual controls, descriptions, tags, evidence links
```

**When to Use:**
- ✅ 90% of compliance workflows
- ✅ Structured projects following known frameworks
- ✅ Client engagements with predefined requirements
- ✅ When template exists for your use case

**When NOT to Use:**
- ❌ Ad-hoc task lists (use Empty Workflow)
- ❌ One-time experimental projects (use Empty Workflow)
- ❌ Template doesn't match your needs (use Empty or copy another workflow)

---

**METHOD 2: EMPTY WORKFLOW (Quick Start)**

**Best For:**
- Quick checklists
- Simple task lists
- Prototyping new structures
- Ad-hoc projects
- When no template fits

**How It Works:**

1. **Click "New Workflow"**
2. **Select "Empty Workflow"**
3. **Name your workflow**
4. **Click "Create"**
5. **Simple workflow created** with:
   - **1 level** (called "Items")
   - **All 13 properties enabled** (maximum flexibility)
   - **No structure** (completely blank)

**What You Get:**

```
Workflow: "Q1 Marketing Tasks" (Empty)

Empty state message:
"Start building your workflow"

[+ Add Item]  ← Single-level structure
```

**All Properties Enabled:**
- Icon, Display ID, Name, Description, Tags
- Done Checkbox, Grade, Cumulative Grade, Progress Bar
- Links, Images, Notes, Comments

**Flexibility:**
- Start simple, add complexity as needed
- No pre-configured structure to conform to
- All options available

**Example Use Cases:**

**Simple Checklist:**
```
Workflow: "Website Launch Checklist"

☐ Design homepage mockup
☐ Write copy for About page
☐ Set up hosting
☐ Configure SSL certificate
☐ Test on mobile devices
☐ Launch!
```

**Brainstorming:**
```
Workflow: "Product Ideas Q2"

Item: Feature A
├─ Description: "AI-powered search"
├─ Tags: "High-Priority", "Engineering"
└─ Notes: Customer feedback summary

Item: Feature B
├─ Description: "Mobile app"
├─ Tags: "Explore", "Design"
└─ Links: Competitor analysis doc
```

**When to Use:**
- ✅ Need something quick
- ✅ Structure isn't clear yet
- ✅ Experimenting with ideas
- ✅ Simple flat lists
- ✅ Personal task management

**When NOT to Use:**
- ❌ Complex compliance frameworks (use Template)
- ❌ Client deliverables (use Template for professionalism)
- ❌ Multi-level hierarchies (use Template)

**Tip:** You can always create a template from a successful Empty Workflow later!

---

**METHOD 3: COPY EXISTING WORKFLOW**

**Best For:**
- Similar client projects
- Version control (annual reviews)
- Testing changes before applying to production
- Customizing a base workflow

**How It Works:**

1. **Click "New Workflow"**
2. **Select "Copy Existing Workflow"**
3. **Choose source workflow** from dropdown
   - All your workflows listed
   - Shows workflow name
4. **Name the copy**
   - Suggested name: "[Original Name] - Copy"
   - Edit as desired
5. **Click "Create"**
6. **Complete duplicate created**

**What Gets Copied:**

**✅ Structure:**
- All levels
- All units
- Complete hierarchy

**✅ Content:**
- Unit names
- Display IDs
- Descriptions
- Tags
- All attachments (links, images, notes, comments)

**✅ Configuration:**
- Property settings
- Workflow icon
- Workflow description
- Sequential order setting

**✅ Progress (Optional):**
- Completion status (Done checkboxes)
- Grades
- Progress states

**What Does NOT Copy:**
- Workflow ID (new unique ID assigned)
- Creation date (new date)
- Link status (copy is independent)

**Example:**

```
Original Workflow:
"Acme Corp - ISO 27001 Implementation 2023"
├─ 93 controls populated
├─ All descriptions written
├─ Tags assigned
├─ Evidence links added
└─ 75% complete

Copy Created:
"Acme Corp - ISO 27001 Annual Review 2024"
├─ Same 93 controls
├─ Same descriptions
├─ Same tags
├─ Same evidence links
└─ Can reset completion to 0% if desired
```

**Common Use Cases:**

**Annual Reviews:**
```
2023: "ISO 27001 Audit 2023" (completed)
        ↓ [Copy]
2024: "ISO 27001 Audit 2024" (new year, fresh start)
```

**Multi-Client Deployments:**
```
Base: "GDPR Compliance - Generic"
        ↓ [Copy]
Client 1: "Acme Corp - GDPR" (customize for Acme)
        ↓ [Copy]
Client 2: "Beta Inc - GDPR" (customize for Beta)
```

**Testing Changes:**
```
Production: "Live SOC 2 Workflow"
        ↓ [Copy]
Test: "SOC 2 Workflow - Test New Structure"
(Experiment safely, then apply to production if successful)
```

**When to Use:**
- ✅ Similar projects for different clients
- ✅ Annual recurring workflows
- ✅ Want a starting point with content
- ✅ Version management
- ✅ Safe experimentation

**When NOT to Use:**
- ❌ Need synchronized updates (use Linked Workflow)
- ❌ Starting fresh (use Template)
- ❌ Source workflow is outdated or wrong

**Important:** Copy creates **independent** workflow. Changes to original don't affect copy and vice versa.

---

**METHOD 4: LINKED WORKFLOW (Synchronized)**

**Best For:**
- Multiple clients using same framework
- Maintaining structural consistency
- Roll out updates to multiple projects
- Franchise/branch deployments

**How It Works:**

1. **Click "New Workflow"**
2. **Select "Linked Workflow"**
3. **Choose source workflow** to link to
   - Only workflows you've created
   - Source becomes "master"
4. **Name the linked workflow**
   - Example: "[Client Name] - [Framework]"
5. **Click "Create"**
6. **Linked workflow created** with synchronization

**Visual Indicator:**
- Link icon (🔗) next to workflow name
- Hover shows: "Linked to: [Source Workflow Name]"

**What Synchronizes (Structural Changes):**

**✅ Auto-Syncs from Source:**
- **Adding units:** New units in source appear in linked workflows
- **Deleting units:** Deleted units in source disappear from linked workflows
- **Reordering units:** Order changes sync
- **Level structure changes:** Adding/removing levels syncs

**Example Sync:**
```
Source Workflow (Master):
Add new control "A.5.3 Separation of duties"
        ↓ [Auto-sync within seconds]
Linked Workflow 1 (Client A):
New control appears automatically
        ↓ [Auto-sync]
Linked Workflow 2 (Client B):
New control appears automatically
```

**What Does NOT Sync (Content Remains Independent):**

**❌ Independent per Workflow:**
- **Unit names:** Each workflow can have different names
- **Display IDs:** Different numbering systems
- **Descriptions:** Client-specific explanations
- **Tags:** Different prioritization
- **Attachments:** Client-specific evidence
- **Completion status:** Each client's progress separate
- **Grades:** Independent assessments
- **Workflow-level settings:** Each can have different icons, descriptions

**Example Independence:**

```
Source (Master Structure):
├─ Unit ID: [empty]
├─ Name: "Access Control"
├─ Description: [empty]
└─ Tags: [none]

Linked Workflow - Client A:
├─ Unit ID: "AC-1"
├─ Name: "Access Control Policy for Acme Corp"
├─ Description: "Acme-specific implementation..."
└─ Tags: "Q1", "IT-Department"

Linked Workflow - Client B:
├─ Unit ID: "A.9"
├─ Name: "Access Control Framework"
├─ Description: "Beta-specific requirements..."
└─ Tags: "Priority:High", "Security-Team"
```

**Both workflows maintain the SAME STRUCTURE (synchronized) but DIFFERENT CONTENT (independent).**

**Unlinking:**

At any time, you can break the link:
1. Click **"Unlink"** button
2. Confirm action
3. Workflow becomes independent
4. No further synchronization
5. Cannot be re-linked

**Use Cases:**

**Multi-Client Consulting:**
```
Master: "ISO 27001:2022 Framework" (maintained by consultant)
├─ Linked: "Client A - ISO 27001"
├─ Linked: "Client B - ISO 27001"
├─ Linked: "Client C - ISO 27001"
└─ Linked: "Client D - ISO 27001"

When ISO 27001:2022 adds control → All clients get it automatically
Each client customizes names, descriptions, evidence for their organization
```

**Regional Variations:**
```
Master: "GDPR Compliance Framework"
├─ Linked: "UK Branch - GDPR"
├─ Linked: "EU HQ - GDPR"
└─ Linked: "US Operations - GDPR"

Structure stays consistent, content adapted for each region
```

**Department-Specific Views:**
```
Master: "Company Information Security Program"
├─ Linked: "IT Department - InfoSec"
├─ Linked: "HR Department - InfoSec"
├─ Linked: "Finance Department - InfoSec"
└─ Linked: "Legal Department - InfoSec"

Same controls, each department tracks their own progress and adds relevant docs
```

**When to Use:**
- ✅ Multiple clients on same framework
- ✅ Need to push structural updates to many workflows
- ✅ Maintain consistency across variations
- ✅ Franchise/multi-location deployments
- ✅ Department-specific views of single framework

**When NOT to Use:**
- ❌ Workflows will diverge significantly
- ❌ One-time projects
- ❌ Don't want changes to propagate
- ❌ Source workflow might change drastically

**Caution:**
- Deleting units from source deletes from ALL linked workflows
- Think carefully before structural changes to source
- Consider impact on all linked workflows

---

### 3.2 Naming Your Workflow

A good workflow name makes it easy to find and understand at a glance.

**Naming Best Practices:**

**1. Be Descriptive**
- ✅ "Acme Corp - ISO 27001 Implementation 2024"
- ❌ "Workflow 1"

**2. Include Client/Project**
- ✅ "Beta Inc - GDPR Compliance"
- ❌ "GDPR"

**3. Add Year or Version (if applicable)**
- ✅ "Annual SOC 2 Audit 2024"
- ✅ "Website Redesign v2"
- ❌ "SOC 2" (which year?)

**4. Use Consistent Format**

Choose a format and stick to it:

**Format 1: Client - Framework - Year**
```
Acme Corp - ISO 27001 - 2024
Beta Inc - HIPAA - 2024
Gamma Ltd - SOC 2 - 2024
```

**Format 2: Framework - Client - Purpose**
```
GDPR - Acme Corp - Initial Implementation
GDPR - Acme Corp - Annual Review
GDPR - Beta Inc - Gap Assessment
```

**Format 3: Project - Phase**
```
Product Launch - Planning Phase
Product Launch - Execution Phase
Product Launch - Post-Launch Review
```

**5. Keep It Concise**
- Maximum 100 characters
- Aim for 30-60 characters
- ✅ "TechStart - SOC 2 Type II Readiness"
- ❌ "TechStart Inc. SOC 2 Type II Audit Preparation and Readiness Assessment for Q4 2024 Including All Trust Service Criteria"

**6. Use Title Case or Sentence case**
- ✅ "Acme Corp - ISO 27001 Implementation"
- ✅ "Acme corp - ISO 27001 implementation"
- ❌ "ACME CORP - ISO 27001 IMPLEMENTATION" (all caps is hard to read)

**Real-World Examples:**

**Compliance Workflows:**
- "HealthCo - HIPAA Security Rule 2024"
- "FinServ Inc - SOC 2 Type II - Ongoing"
- "EuroTech - GDPR Article 30 Records"
- "ManuCorp - ISO 9001 Quality Management"

**Project Workflows:**
- "Mobile App v3.0 - Development Sprint"
- "Office Relocation - Tokyo Branch"
- "Q2 Marketing Campaign - Product Launch"
- "Annual Budget Planning 2025"

**Internal Workflows:**
- "IT Department - Onboarding Checklist"
- "Sales Team - Lead Qualification Process"
- "Customer Support - Escalation Workflow"
- "HR - Performance Review Cycle 2024"

**Linked Workflow Naming:**

When creating linked workflows, differentiate them:

```
Source: "ISO 27001:2022 Master Framework"

Linked workflows:
├─ "Client A - ISO 27001 Implementation"
├─ "Client B - ISO 27001 Implementation"
└─ "Client C - ISO 27001 Implementation"
```

**Renaming Workflows:**

You can rename workflows anytime:
1. Click **Rename** button
2. Edit name
3. Click **Save**
4. Name updates everywhere (dropdown, board exports, etc.)

---

### 3.3 Selecting the Right Template

Choosing the correct template sets you up for success.

**Decision Factors:**

**1. Match the Regulation/Framework**

| If You Need... | Use Template... |
|----------------|-----------------|
| ISO 27001 compliance | ISO 27001:2022 Template |
| GDPR compliance | GDPR Principles Template |
| SOC 2 audit prep | SOC 2 Trust Services Template |
| HIPAA Security Rule | HIPAA Security Template |
| NIST CSF assessment | NIST CSF Template |
| Project management | Project Management Template |

**2. Consider Complexity Needs**

**Simple Projects (2-3 Levels):**
- Flat structures
- Quick checklists
- Small teams
- Limited scope

**Example:** Marketing campaign with Phases → Tasks

**Complex Projects (4-5 Levels):**
- Deep hierarchies
- Comprehensive frameworks
- Large teams
- Enterprise-scale

**Example:** ISO 27001 with Domains → Categories → Controls → Implementation Tasks → Test Procedures

**3. Property Requirements**

Check which properties the template enables:

**Minimal Properties (Name, Description, Done):**
- ✅ Simple task tracking
- ✅ Basic checklists
- ❌ Detailed assessments
- ❌ Evidence collection

**Comprehensive Properties (All 13):**
- ✅ Compliance documentation
- ✅ Audit evidence
- ✅ Progress tracking
- ✅ Rich collaboration

**Ask Yourself:**
- Do I need Display IDs? (regulatory codes)
- Will I track grades/scores? (assessments)
- Do I need progress bars? (visual tracking)
- Will I attach evidence? (links, images, notes)
- Do I need comments? (team collaboration)

**4. Client Sophistication Level**

**Less Technical Clients:**
- Simpler templates (2-3 levels)
- Fewer properties enabled
- Clear, plain language in descriptions
- More hand-holding

**Technical/Experienced Clients:**
- Complex templates (4-5 levels)
- All properties enabled
- Detailed technical requirements
- Self-service capable

**Template Selection Checklist:**

```
□ Template matches my regulation/framework
□ Level structure makes logical sense
□ Right number of levels (not too many, not too few)
□ Properties I need are enabled
□ Properties I don't need are disabled (less clutter)
□ Template description clearly explains its purpose
□ I can explain this structure to my client
□ Similar to structures I've used successfully before
□ Template is marked as "default" (if it's my go-to)
```

**Testing Templates:**

Before committing to a template for a client project:

1. **Create test workflow** from template
2. **Add sample data** (few units at each level)
3. **Try both modes** (Creation and Execution)
4. **Check properties work** as expected
5. **Get colleague feedback**
6. **Iterate on template if needed**
7. **Use refined template for real project**

**No Perfect Template?**

If no template quite fits:

**Option 1:** Use closest template, then customize
- Create workflow from template
- Add/delete units as needed
- Content is flexible even if structure isn't

**Option 2:** Create Empty Workflow
- Build from scratch
- Full flexibility
- Can save as template later

**Option 3:** Copy and modify existing workflow
- Find similar past project
- Copy it
- Adapt structure

**Option 4:** Create new template
- Design perfect structure in Template Builder
- Use for this and future projects
- One-time investment, many-time benefit

---

---

## CHAPTER 4: WORKFLOW PROPERTIES

Workflows have settings that control their behavior and presentation.

### 4.1 Workflow-Level Settings

These settings apply to the entire workflow, not individual units.

**Workflow Name**

**Purpose:** Primary identifier for your workflow

**Characteristics:**
- **Length:** 3-100 characters required
- **Uniqueness:** Can have duplicate names (system uses IDs internally)
- **Visibility:** Shows in dropdown selector, page title, board exports
- **Editability:** Change anytime via Rename button

**Best Practices:**
- Descriptive and specific
- Include client/project name
- Add year or version if applicable
- See Chapter 3.2 for detailed naming guidance

**Editing:**
1. Click **Rename** button
2. Modal opens with current name
3. Edit name
4. Click **Save**
5. Name updates instantly everywhere

**Where It Appears:**
- Workflow selector dropdown
- Page title
- Browser tab title
- Board name (when exported)
- Workflow list/library

---

**Workflow Icon**

**Purpose:** Visual identifier for quick recognition

**Icon Library:**
- 60+ professional icons available
- Categories: Technology, business, security, general
- Examples: Lock, server, globe, document, chart

**Setting the Icon:**

**Method 1: During Creation**
- When creating workflow from template, template's icon is inherited
- Can override immediately or later

**Method 2: After Creation**
1. Click workflow icon area (if no icon set, shows placeholder)
2. Icon picker modal opens
3. Browse available icons
4. Click to select
5. Icon appears immediately

**Icon Display:**
- **In workflow interface:** Top-left near workflow name
- **In selector dropdown:** Next to workflow name
- **In boards:** When workflow exports

**When to Use Icons:**
- ✅ Multiple workflows for easy visual distinction
- ✅ Client-facing workflows for professionalism
- ✅ Category grouping (all ISO workflows use lock icon, all GDPR use scales)
- ✅ Branding and aesthetics

**When Icons Are Optional:**
- Internal/personal workflows
- Only have 1-2 workflows
- Prefer minimalist interface

**Tip:** Establish icon conventions
```
🔒 Lock = Security/InfoSec frameworks
⚖️ Scales = Legal/compliance
📊 Chart = Project management
🏥 Medical = Healthcare/HIPAA
💶 Euro = GDPR/European regulations
```

---

**Workflow Description**

**Purpose:** Narrative explanation of workflow's purpose and scope

**Format:** Plain text or rich text (depending on implementation)

**Recommended Content:**

**1. Purpose Statement**
```
Example:
"This workflow guides Acme Corp through ISO 27001:2022 
implementation in preparation for certification audit in Q4 2024."
```

**2. Scope**
```
Example:
"Covers all 93 Annex A controls across 4 domains: Organizational, 
People, Physical, and Technological controls."
```

**3. Key Stakeholders**
```
Example:
"Primary: IT Security Team
Secondary: Legal, HR, Facilities
Consultant: Jane Doe, InfoSec Partners LLC"
```

**4. Special Instructions**
```
Example:
"Controls marked 'External-Audit' tag are priority for Q3 evidence 
collection. All descriptions include implementation guidance specific 
to Acme's cloud infrastructure."
```

**5. Timeline/Milestones**
```
Example:
"Phase 1 (Q1): Gap assessment
Phase 2 (Q2-Q3): Implementation
Phase 3 (Q4): Audit preparation"
```

**Viewing the Description:**
- Displayed prominently at top of workflow (if set)
- Collapsible/expandable to save space
- Always visible to all users

**Editing:**
1. Click **Edit Description** button (or description area)
2. Text area or rich text editor opens
3. Write/edit description
4. Save (auto-save or manual save)

**When to Use:**
- ✅ Client-facing workflows (explain context)
- ✅ Complex projects (document scope)
- ✅ Collaborative workflows (clarify roles)
- ✅ Workflows others will use (provide guidance)

**When Optional:**
- Personal workflows you understand
- Self-explanatory simple checklists

---

**Sequential Order Enforcement**

**Purpose:** Force users to complete items in order (no skipping ahead)

**How It Works:**

**When Enabled:**
- Items must be completed sequentially
- Cannot check item 3 until items 1 and 2 are done
- Enforced per parent (children of same parent must be sequential)
- Visual indicators show which items are "locked"

**When Disabled (Default):**
- Any item can be checked at any time
- Complete in any order
- Maximum flexibility

**Example:**

```
Sequential Order ENABLED:

▼ Onboarding Process
   ├─ [☑] 1. Submit application (done)
   ├─ [☑] 2. Background check (done)
   ├─ [☐] 3. Sign employment contract (can do - next in sequence)
   └─ [🔒] 4. Complete orientation (locked until step 3 done)
```

```
Sequential Order DISABLED:

▼ Audit Evidence Collection
   ├─ [☐] Collect policy documents (can do anytime)
   ├─ [☑] Review access logs (done out of order - OK)
   ├─ [☐] Document procedures (can do anytime)
   └─ [☐] Schedule interviews (can do anytime)
```

**When to Enable:**

**✅ Use Sequential Order When:**
- **Process dependencies exist:** Step B truly requires Step A completion
- **Training/onboarding:** Learners should follow specific sequence
- **Regulatory compliance:** Audit trails require ordered completion
- **Risk management:** Skipping steps creates issues
- **Manufacturing/quality:** Process steps must follow order

**Examples:**
- Software deployment checklist (can't test before deploying)
- Employee onboarding (background check before system access)
- Surgical procedures (steps must be in order)
- Regulatory filings (preliminary approval before final submission)

**❌ Don't Use Sequential Order When:**
- Tasks are independent
- Parallel work is desirable
- Flexibility improves efficiency
- Team members work on different areas simultaneously

**Examples:**
- Evidence collection (can gather documents in any order)
- Bug fixes (can fix bugs in any order)
- General compliance controls (implementation order flexible)

**Setting:**

**During Workflow Creation:**
- Some templates have sequential order pre-configured
- Can override when creating workflow

**After Creation:**
1. Access workflow settings (implementation-specific)
2. Toggle "Sequential Order" checkbox
3. Save
4. Applies immediately to workflow

**Impact on Users:**

**In Execution Mode:**
- Locked items show lock icon or disabled checkbox
- Hover explains: "Complete previous items first"
- Can still view/read locked items
- Just can't mark as done

**In Creation Mode:**
- Setting doesn't affect structure editing
- Only enforced in Execution Mode

---

### 4.2 Linked Workflow Indicator

Visual and functional elements showing workflow synchronization status.

**Linked Workflow Badge**

**Visual:**
- **Link icon (🔗)** appears next to workflow name
- Usually in header near workflow title
- May be colored or styled distinctively

**Hover Information:**
- Hover over link icon
- Tooltip appears: "Linked to: [Source Workflow Name]"
- Shows which workflow this is synchronized with

**Example:**
```
Workflow: Client A - ISO 27001 🔗
          ↑                    ↑
          Workflow name        Link indicator

Hover tooltip: "Linked to: ISO 27001:2022 Master Framework"
```

---

**Link Status Information**

**Where to View:**
- Next to workflow name in header
- In workflow info panel (if available)
- Workflow settings/properties area

**Information Displayed:**
- **Source workflow name:** What workflow this links to
- **Link creation date:** When link was established
- **Last sync:** When structure last synchronized (if tracked)
- **Sync status:** "Active" or "Unlinked"

---

**Unlink Option**

**Purpose:** Break synchronization and make workflow independent

**Unlink Button:**
- **Location:** Near workflow name or in settings
- **Label:** "Unlink" or "Break Link"
- **Icon:** Broken chain (⛓️‍💥)
- **Visibility:** Only on linked workflows

**Unlinking Process:**

1. **Click Unlink Button**
2. **Confirmation Modal Appears**
   ```
   Unlink Workflow?
   
   This workflow is currently linked to:
   "ISO 27001:2022 Master Framework"
   
   If you unlink:
   ✓ This workflow becomes independent
   ✓ No more automatic structure updates
   ✓ You can freely modify structure
   ✗ Cannot re-link later
   ✗ This action cannot be undone
   
   [Cancel] [Unlink Workflow]
   ```
3. **Click "Unlink Workflow"**
4. **Link icon disappears**
5. **Workflow is now independent**

**After Unlinking:**
- Link icon removed
- No more synchronization from source
- Can add/delete units freely
- Source workflow changes don't propagate
- **Cannot re-link** (one-way operation)

**When to Unlink:**

**✅ Unlink When:**
- Workflow has diverged significantly from source
- Need to make structural changes specific to this workflow
- Source workflow is no longer maintained
- Project is complete and archived
- No longer need synchronized updates

**❌ Keep Link When:**
- Want continued structural updates
- Maintaining consistency is important
- Source workflow actively maintained
- Multiple clients need same structure

**Warning:** Unlink carefully! This is permanent. If you might need synchronization later, keep the link.

---

**Synchronization Behavior**

**Real-Time Sync (or Near Real-Time):**

When source workflow changes structure:
1. Source workflow: Add/delete/reorder unit
2. Save occurs
3. System detects linked workflows
4. Updates propagate automatically
5. Linked workflows update (usually within seconds)

**What Triggers Sync:**
- Adding new units to source
- Deleting units from source
- Moving units (reordering)
- Structural hierarchy changes

**What Doesn't Trigger Sync:**
- Editing unit names (content, not structure)
- Changing descriptions
- Adding/removing tags
- Modifying attachments
- Completion status changes
- Any content-level edits

**User Experience During Sync:**

**On Source Workflow:**
- User makes structural change
- Saves workflow
- System notifies: "Linked workflows updated" (optional)

**On Linked Workflow:**
- User working in linked workflow
- Structural change syncs in background
- Page refreshes or auto-updates (implementation-dependent)
- New units appear, deleted units removed
- User's content (names, descriptions) preserved

**Conflict Resolution:**

**Scenario:** User editing linked workflow when sync occurs

**Handling:**
- Auto-save ensures no data loss
- Structure updates merge with content edits
- User's content always preserved
- Structural positions may shift if reordering occurred

**Example:**
```
User editing unit "Access Control Policy" in linked workflow
Source workflow moves "Access Control" category to different position
Sync occurs:
✓ "Access Control Policy" name preserved
✓ Description preserved
✓ Tags preserved
✓ Position updated to match source structure
```

---

**Managing Multiple Linked Workflows**

**Viewing All Linked Workflows:**

**From Source Workflow:**
- Some implementations show "Linked Workflows" count
- Click to see list of all workflows linked to this one
- Helpful for managing multi-client deployments

**Example View:**
```
Workflow: ISO 27001:2022 Master Framework

Linked Workflows (4):
├─ Client A - ISO 27001 Implementation
├─ Client B - ISO 27001 Implementation  
├─ Client C - ISO 27001 Implementation
└─ Client D - ISO 27001 Implementation

[View] [Unlink All] buttons per workflow
```

**Mass Updates:**
- Edit source workflow structure once
- All linked workflows update automatically
- Efficient for maintaining consistency

**Caution with Source Edits:**
- Structural changes affect ALL linked workflows
- Delete carefully (removes from all)
- Test changes in copy before applying to live source

---

---

## CHAPTER 5: BUILDING YOUR WORKFLOW STRUCTURE

How to populate your workflow with hierarchical content.

### 5.1 Understanding Units

**What is a Unit?**

A **unit** is an individual item in your workflow hierarchy. Think of units as the building blocks of your workflow structure.

**Key Characteristics:**

**1. Hierarchical Nature**
- Units can contain child units
- Children can contain their own children
- Creates nested tree structure
- Reflects real-world organizational logic

**Example:**
```
Unit: ISO 27001 Domain (Level 1)
└─ Unit: Control Category (Level 2)
   └─ Unit: Individual Control (Level 3)
      └─ Unit: Implementation Task (Level 4)
```

**2. Property Inheritance**
- Each unit inherits properties from template
- Level 1 units get Level 1 properties
- Level 2 units get Level 2 properties, etc.
- Properties determine what fields are available

**3. Unique Identifiers**
- Every unit has auto-generated internal ID (system-managed)
- Optional custom Display ID (user-defined, e.g., "A.5.1")
- Name serves as primary user-facing identifier

**4. Independent Data**
- Each unit has its own name, description, tags, attachments
- Editing one unit doesn't affect others
- Parent-child relationships maintained

**Unit Levels:**

Units exist at specific levels in the hierarchy, defined by the template:

```
Template defines:
Level 1: "Control Family"
Level 2: "Control Category"
Level 3: "Control"
Level 4: "Task"

Workflow contains units at these levels:
Level 1 Unit: "Access Control" (Control Family)
├─ Level 2 Unit: "User Access Management" (Control Category)
│  ├─ Level 3 Unit: "A.9.1.1 Access control policy" (Control)
│  │  └─ Level 4 Unit: "Draft policy document" (Task)
```

---

### 5.2 Adding Root-Level Units

Root-level units are top-level items with no parent.

**Add Root Unit Button**

**Location:** Bottom of workflow, below all existing units

**Label:** "+ Add [Level 1 Name]"
- Example: "+ Add Control Family"
- Dynamic based on template's Level 1 name

**Keyboard Shortcut:** Ctrl+A (Add root unit)

**Visibility:** Creation Mode only

**How to Add Root Unit:**

1. **Scroll to bottom** of workflow
2. **Click "+ Add [Level Name]"** button
3. **New unit appears** with name field focused
4. **Type name** for the unit
5. **Press Tab or click outside** to save
6. **Unit added** to workflow

**Example:**
```
Workflow: ISO 27001 Implementation

[Existing units...]

[+ Add Control Family] ← Click here

After clicking:
▼ [Enter control family name...] ← Type here
   
After typing "Organizational Controls":
▼ Organizational Controls
   
   [+ Add Control Category] ← Can now add children
```

**Empty State:**

When workflow has no units yet, prominent call-to-action:

```
┌─────────────────────────────────────────┐
│  Your workflow is ready to populate!    │
│                                         │
│  Click the button below to add your     │
│  first control family.                  │
│                                         │
│       [+ Add Control Family]            │
└─────────────────────────────────────────┘
```

**Multiple Root Units:**

You can add as many root units as needed:

```
▼ Organizational Controls (Root Unit 1)
▼ People Controls (Root Unit 2)
▼ Physical Controls (Root Unit 3)
▼ Technological Controls (Root Unit 4)

[+ Add Control Family] ← Add more
```

---

### 5.3 Adding Child Units

Child units nest under parent units, creating hierarchy.

**Add Child Button**

**Location:** Inside parent unit, after existing children

**Label:** "+ Add [Child Level Name]"
- Example: "+ Add Control"
- Dynamic based on next level in template

**Visibility:**
- Creation Mode only
- Appears when parent is expanded
- Only if parent's level can have children

**How to Add Child Unit:**

1. **Expand parent unit** (if collapsed)
2. **Scroll to bottom** of parent's children
3. **Click "+ Add [Child Level Name]"** button
4. **New child appears** with name field focused
5. **Type name**
6. **Press Tab or click outside** to save
7. **Child added** under parent

**Example:**

```
Before:
▼ Access Control (parent, no children yet)
   
   [+ Add Control Category] ← Click here

After clicking:
▼ Access Control
   └─ [Enter control category name...] ← Type here

After typing "User Access Management":
▼ Access Control
   └─ User Access Management
      
      [+ Add Control] ← Can add children to this unit too
```

**Nested Hierarchy:**

Children can have their own children, creating deep structure:

```
▼ Level 1: Organizational Controls
   └─ Level 2: A.5 Policies for Information Security
      └─ Level 3: A.5.1 Policies for information security
         ├─ Level 4: Draft information security policy
         ├─ Level 4: Get executive approval
         └─ Level 4: Publish policy to intranet
```

**Unlimited Children:**

Each parent can have unlimited children:

```
▼ Access Control
   ├─ User Access Management (child 1)
   ├─ Authentication (child 2)
   ├─ Authorization (child 3)
   ├─ Access Reviews (child 4)
   └─ Privileged Access (child 5)
   
   [+ Add Control Category] ← Add more
```

**Level Limits:**

Maximum depth determined by template:

```
Template with 4 levels:
Level 1: Can have children (Level 2)
Level 2: Can have children (Level 3)
Level 3: Can have children (Level 4)
Level 4: Cannot have children (max depth reached)
```

When at maximum depth, no "+ Add" button appears.

---

### 5.4 Unit Header Components

Every unit has a header with various components depending on mode and configuration.

**Visual Layout:**

```
[▼] [Icon] [ID] [Name______________________] [Tags] [☐] [Grade] [Progress] [🗑️] [Board]
 ↑    ↑     ↑    ↑                          ↑     ↑    ↑       ↑          ↑      ↑
Expand Icon  ID   Name                      Tags  Done Grade   Progress   Delete Export
```

Not all components appear on every unit (depends on template properties and mode).

---

**Collapse/Expand Button**

**Visual:** Chevron icon
- **▶** Collapsed (children hidden)
- **▼** Expanded (children visible)

**Location:** Far left of unit header

**Visibility:** Only on units that have children

**Behavior:**
- **Click:** Toggles children visibility
- **State persists:** Remembers open/closed state
- **Restoration:** Restores state on page reload

**Smart Behavior:**

If unit has children:
```
▶ Access Control (collapsed, children hidden)
```

Click chevron:
```
▼ Access Control (expanded, children visible)
   ├─ User Access Management
   ├─ Authentication
   └─ Authorization
```

Click again:
```
▶ Access Control (collapsed again)
```

**Nested Collapse:**

Each level remembers its own state:

```
▼ Level 1: Organizational Controls (expanded)
   ├─ ▶ Level 2: A.5 Policies (collapsed)
   └─ ▼ Level 2: A.6 Roles (expanded)
      ├─ Level 3: A.6.1 Screening
      └─ Level 3: A.6.2 Terms and conditions
```

Collapsing Level 1 hides all descendants, but when re-expanded, Level 2 states are remembered.

---

**Icon Area**

**Purpose:** Visual identifier for units

**Display:** Small icon image (typically 24x24px)

**Visibility:** If template enables Icon property for this level

**Creation Mode:**

**No Icon Set:**
- Placeholder or empty icon area
- Click to open icon picker modal

**Icon Picker Modal:**
- Grid of 60+ available icons
- Click icon to select
- Modal closes, icon appears

**Icon Set:**
- Icon displays in header
- Click to change icon (opens picker)

**Execution Mode:**
- Icon displays (if set)
- Not clickable (view-only)

**Example:**

```
Creation Mode:
[📂] ← Click to change icon
Access Control Policy

Execution Mode:
[🔒] Access Control Policy
    ↑ View-only, shows lock icon
```

---

**Unit ID (Display ID)**

**Purpose:** Custom identifier (regulatory codes, reference numbers)

**Format:** Text field, typically short

**Common Uses:**
- ISO 27001: "A.5.1", "A.9.2.1"
- NIST CSF: "PR.AC-1", "DE.CM-3"
- SOC 2: "CC6.1", "CC7.2"
- Internal: "REQ-001", "TASK-042"

**Creation Mode:**
- **Editable field:** Click to type/edit
- **Placeholder:** "ID" or empty
- **Auto-save:** On blur (click outside)
- **Optional:** Can leave blank

**Execution Mode:**
- **Display only:** Shows ID if set
- **Not editable**

**Example:**

```
Creation Mode:
[A.5.1] Information Security Policy
  ↑ Can edit this

Execution Mode:
[A.5.1] Information Security Policy
  ↑ Display only
```

**Visual Position:** Between icon and name

---

**Unit Name**

**Purpose:** Primary identifier (required)

**Characteristics:**
- **Required:** Cannot be empty
- **Free text:** Any characters
- **Length:** Typically 1-500 characters
- **Auto-save:** On blur

**Creation Mode:**
- **Editable field:** Click to type/edit
- **Input border:** Visible border shows editability
- **Focus:** Click activates field
- **Save:** Tab, Enter, or click outside

**Execution Mode:**
- **Display text:** Plain text display
- **Not editable:** Cannot click to edit (structure locked)
- **May have limited edit:** Some implementations allow name edits in execution mode for flexibility

**Example:**

```
Creation Mode:
Access Control Policy
├───────────────────┘
Editable text field with border

Execution Mode:
Access Control Policy
Plain text, no border
```

**Naming Best Practices:**

**For Controls/Requirements:**
- Start with category: "Access Control: Multi-factor authentication"
- Include control number: "A.5.1 - Information Security Policy"
- Be specific: "Background screening for employees" not just "Screening"

**For Tasks:**
- Action-oriented: "Draft access control policy"
- Verb-first: "Review firewall rules quarterly"
- Clear outcome: "Install MFA on all admin accounts"

---

**Tags**

**Purpose:** Multi-dimensional categorization and filtering

**Visual:** Colored badges/pills

**Location:** After name, before other controls

**Behavior:**

**Creation Mode:**
- **Add tag button:** "+" or "Add Tag"
- **Click to add:** Opens tag modal
- **Remove tag:** "×" button on each tag
- **Edit tags:** Add/remove freely

**Execution Mode:**
- **Display tags:** Shows all tags
- **Clickable:** Click tag to filter workflow
- **Remove (optional):** May allow tag removal

**Tag Display:**

```
Unit Name [Priority:High] [IT-Dept] [Q1-2024] [External-Audit]
          └────────────────────────────────────────────────┘
                         Tag badges
```

**Tag Colors:**

Tags often have distinct colors for visual categorization:

```
[Priority:High]     ← Red background
[Status:Complete]   ← Green background
[Department:IT]     ← Blue background
[Q1-2024]          ← Purple background
```

**Multiple Tags:**

Units can have multiple tags:

```
Information Security Policy [Priority:Critical] [Annual-Review] [Legal] [IT] [Board-Approved]
```

**Filtering (Execution Mode):**

Click tag to filter entire workflow to items with that tag:

```
User clicks [Q1-2024] tag

Workflow filters to show only units with "Q1-2024" tag
Banner appears: "Filtered by: Q1-2024 [Clear Filter]"
```

More details in Chapter 8: Organizing with Tags.

---

**Done Checkbox**

**Purpose:** Mark unit as complete

**Visibility:**
- **Execution Mode only**
- **Only on levels** where template enables Done Checkbox property
- **Not visible** in Creation Mode

**Visual:** Standard checkbox
- **☐** Not done
- **☑** Done

**Behavior:**

**Click checkbox:**
- Toggles between done/not done
- Auto-saves immediately
- Updates progress bars on parent units
- Visual feedback (checkmark appears/disappears)

**Impact:**

```
Before (0/3 done):
▼ Access Control [Progress: ░░░░░░░░░░ 0%]
   ☐ Draft policy
   ☐ Get approval  
   ☐ Publish policy

After checking first two (2/3 done):
▼ Access Control [Progress: ██████░░░░ 67%]
   ☑ Draft policy (done)
   ☑ Get approval (done)
   ☐ Publish policy (not done)
```

**Sequential Order:**

If workflow has sequential order enabled:

```
☑ Step 1: Submit application (done)
☑ Step 2: Background check (done)
☐ Step 3: Sign contract (can check - next in sequence)
🔒 Step 4: Complete orientation (locked until Step 3 done)
```

---

**Grade**

**Purpose:** Numeric scoring/rating

**Types:**

**1. Individual Grade (Editable)**

**Visual:** Numeric input field

**Usage:**
- Maturity scores (1-5)
- Risk ratings (1-10)
- Assessment scores
- Percentage completion (0-100)
- Pass/fail (1/0)

**Example:**
```
Control: Access Control Policy [Grade: 3] ← Can edit
                               Input field shows "3"
```

**2. Cumulative Grade (Calculated)**

**Visual:** Display-only number with Σ symbol

**Calculation:** Sum of all child grades

**Example:**
```
▼ Access Control [Grade: Σ 12] ← Auto-calculated (3+4+5)
   ├─ Policy [Grade: 3]
   ├─ Authentication [Grade: 4]
   └─ Authorization [Grade: 5]
```

**Visibility:**
- Both Creation and Execution modes
- Only on levels where template enables Grade property
- Cumulative grades auto-enable on parents if children have grades

---

**Progress Bar**

**Purpose:** Visual completion percentage

**Calculation:** Based on child Done checkboxes

**Formula:** (# of children done / total # of children) × 100%

**Visual:** Horizontal bar with fill

```
Progress: ██████░░░░ 60% (3/5 complete)
          └──────┘
          Filled portion = 60%
```

**Hover:** Shows exact count: "3 of 5 complete"

**Requirements:**
- Parent must have Progress Bar property enabled
- Children must have Done Checkbox property enabled
- Must have at least one child

**Example:**

```
▼ Phase 1: Planning [Progress: ████████░░ 75%]
   ├─ ☑ Define scope
   ├─ ☑ Identify stakeholders
   ├─ ☑ Create timeline
   └─ ☐ Get budget approval
```

**Nested Progress:**

Parent progress bars reflect all descendant completion:

```
▼ Project [Progress: ██████░░░░ 50%]
   ├─ ▼ Phase 1 [Progress: ██████████ 100%]
   │  ├─ ☑ Task A (done)
   │  └─ ☑ Task B (done)
   └─ ▼ Phase 2 [Progress: ░░░░░░░░░░ 0%]
      ├─ ☐ Task C (not done)
      └─ ☐ Task D (not done)

Overall: 2 phases, 1 complete = 50%
```

---

**Delete Button**

**Purpose:** Remove unit and all its children

**Visual:** Trash can icon (🗑️)

**Visibility:** Creation Mode only

**Location:** Right side of unit header

**Behavior:**

**Click delete:**
1. Confirmation modal appears
2. "Delete '[Unit Name]'? This will also delete all child units. This cannot be undone."
3. User confirms
4. Unit and all descendants deleted
5. UI updates immediately

**Recursive Deletion:**

Deleting parent deletes entire subtree:

```
Delete this:
▼ Access Control [🗑️] ← Click delete
   ├─ User Access Management
   │  ├─ Registration
   │  └─ Deprovisioning
   └─ Authentication
      ├─ MFA
      └─ Password policy

Result: All units removed (6 units deleted total)
```

**Caution:** Cannot undo! Deleted units are gone permanently.

**Tip:** If unsure, copy workflow before deleting major sections.

---

**Export Button**

**Purpose:** Create board from unit and its children

**Visual:** "Board" button or board icon (↗)

**Visibility:**
- **Execution Mode only**
- **Only on units with children**

**Location:** Right side of unit header

**Behavior:**

**Click Export:**
1. System creates new board
2. Unit becomes board name
3. Unit and all descendants become cards/reference tree
4. Board opens in new tab
5. Original workflow unchanged

**Example:**

```
Workflow:
▼ Phase 1: Implementation [Board ↗] ← Click here
   ├─ Control 1
   ├─ Control 2
   └─ Control 3

Creates Board:
"Workflow: Phase 1: Implementation"
- Dynamic List: Full tree (read-only)
- Workspace: Client can create tasks
```

More details in Chapter 12: Exporting to Boards.

---

### 5.5 Unit Body (Collapsible)

Below the unit header is the unit body containing description and attachments.

**Expand/Collapse:**

Click anywhere on unit header (except interactive elements) to toggle body:

```
Collapsed (body hidden):
▶ [Icon] Access Control Policy [Tags...] [🗑️]

Expanded (body visible):
▼ [Icon] Access Control Policy [Tags...] [🗑️]
   │
   ├─ Description: [Text area or display]
   │
   └─ Attachments:
      ├─ Links: [...]
      ├─ Images: [...]
      ├─ Notes: [...]
      └─ Comments: [...]
```

---

**Description Field**

**Purpose:** Detailed information about the unit

**Length:** Typically unlimited (or very large limit like 10,000 characters)

**Format:** Plain text (line breaks preserved) or rich text

**Creation Mode:**

**Visual:** Textarea field

**Editing:**
1. Click in description area
2. Cursor appears
3. Type/edit content
4. Supports line breaks (Enter key)
5. Auto-saves on blur (click outside) after ~5 seconds

**Example:**
```
Description:
┌────────────────────────────────────────┐
│ Implement multi-factor authentication  │
│ for all administrative accounts.       │
│                                        │
│ Requirements:                          │
│ - Use Duo or similar MFA solution     │
│ - Enforce for VPN access              │
│ - Enforce for cloud admin consoles    │
│                                        │
│ Evidence: Screenshots of MFA config   │
└────────────────────────────────────────┘
   Editable textarea
```

**Execution Mode:**

**Visual:** Plain text display

**Editability:** Usually read-only (structure locked), but some implementations may allow description edits for collaboration

**Example:**
```
Description:

Implement multi-factor authentication
for all administrative accounts.

Requirements:
- Use Duo or similar MFA solution
- Enforce for VPN access
- Enforce for cloud admin consoles

Evidence: Screenshots of MFA config

Plain text display (no border)
```

**Best Practices:**

**For Requirements:**
```
Description format:
1. What: Explain the requirement
2. Why: Regulatory reason or business justification
3. How: Implementation guidance
4. Evidence: What to collect for audit
```

**For Tasks:**
```
Description format:
- Action to take
- Expected outcome
- Assigned to (if not using dedicated assignment features)
- Due date (if not using dedicated date fields)
- Dependencies
```

---

**Attachments Section**

Below description, attachments grouped by type.

**Visual:**
```
Attachments:

Links (2):
├─ 📎 Access Control Policy v2.3 [https://...]
└─ 📎 NIST SP 800-53 AC Controls [https://...]

Images (1):
└─ 🖼️ [Thumbnail of firewall config screenshot]

Notes (1):
└─ 📝 Implementation Decision - Aug 2023

Comments (3):
├─ 💬 "Should we use Duo or Okta?" - John, May 15
├─ 💬 "Duo selected for cost reasons" - Sarah, May 16
└─ 💬 "Deployment complete" - IT Team, June 1
```

**Add Buttons (Creation Mode):**

```
[+ Add Link] [+ Add Image] [+ Add Note] [+ Add Comment]
```

**Delete Buttons:**

Each attachment has delete/remove icon:

```
📎 Policy Document [×] ← Click X to delete
```

Detailed coverage of each attachment type in Chapter 7: Managing Attachments.

---

---

## CHAPTER 6: WORKING WITH PROPERTIES

Step-by-step guide to editing unit properties in Creation Mode.

### 6.1 Editing Unit Names

**Purpose:** Change the primary identifier of a unit

**When:** Creation Mode only (in Execution Mode, names are typically locked)

**Steps:**

1. **Click** in the name field of the unit
2. **Cursor appears** and name becomes editable
3. **Type** new name or edit existing text
4. **Save** by clicking outside the field or pressing Tab
5. **Auto-save** occurs after ~5 seconds
6. **Name updates** immediately in the interface

**Example:**

```
Before:
▼ [Control______] ← Click here

During Edit:
▼ [Access Control Policy|] ← Typing...
                         ↑ Cursor

After:
▼ Access Control Policy ← Saved
```

**Tips:**

- **Use descriptive names:** "Draft access control policy" not "Task 1"
- **Include key details:** "A.5.1 - Information Security Policy" vs. "Policy"
- **Be consistent:** Follow naming pattern across similar units
- **Keep concise:** Aim for 30-80 characters

**Common Mistakes:**

❌ **Empty name:** Cannot save without a name (required field)
❌ **Too generic:** "Control" doesn't explain which control
✅ **Specific and clear:** "A.9.1.1 - Access control policy and procedures"

---

### 6.2 Assigning Icons

**Purpose:** Add visual identifier to units for quick recognition

**When:** Creation Mode (any time after unit creation)

**Prerequisites:** Template must enable Icon property for this level

**Steps:**

1. **Click icon area** on unit header
   - If no icon set: Placeholder or empty icon box
   - If icon already set: Current icon displays
2. **Icon picker modal opens**
3. **Browse available icons** (60+ options organized by category)
4. **Click icon to select**
5. **Modal closes automatically**
6. **Icon appears immediately** in unit header

**Icon Picker Modal:**

```
┌────────────────────────────────────────┐
│  Select Icon                        [×]│
├────────────────────────────────────────┤
│                                        │
│  Technology:                           │
│  [🔒] [🖥️] [☁️] [🌐] [🖧] [⚙️] ...    │
│                                        │
│  Business:                             │
│  [💼] [📊] [📈] [📋] [📁] [🗂️] ...    │
│                                        │
│  Security:                             │
│  [🛡️] [🔐] [🔑] [⚠️] [✓] [⨯] ...    │
│                                        │
│  General:                              │
│  [📝] [📌] [🏢] [👤] [🌍] [💡] ...    │
│                                        │
└────────────────────────────────────────┘
```

**Selecting Icons:**

**Single Click:** Selects and closes modal

**No Save Button:** Selection is immediate

**Example:**

```
Before:
▼ [   ] Access Control Policy
    ↑ Empty, click here

After:
▼ [🔒] Access Control Policy
    ↑ Lock icon selected
```

**Icon Strategy:**

**Consistent Categorization:**

```
🔒 = Access Control
🖥️ = Technical Controls
🏢 = Physical Security
📋 = Policies & Procedures
👤 = People/HR Controls
⚠️ = Risk Management
✓ = Completed/Approved
```

**Visual Hierarchy:**

Use icons to distinguish categories at Level 1 or 2:

```
▼ [🔒] Access Control Family
   └─ [🔐] User Access Management
      └─ Multi-factor Authentication (no icon - task level)
```

**When to Skip Icons:**

- Lower-level tasks (visual clutter)
- All items in same category (redundant)
- Minimalist preference

---

### 6.3 Setting Unit IDs

**Purpose:** Add custom identifiers for cross-referencing

**Common Uses:**
- Regulatory control numbers (A.5.1, CC6.1)
- Internal reference codes (REQ-001, TASK-042)
- Jira ticket IDs (PROJ-123)
- Cross-system linking

**When:** Creation Mode

**Prerequisites:** Template must enable Display ID property for this level

**Steps:**

1. **Click** in the ID field (usually before or after icon)
2. **Type** the identifier
3. **Click outside** or press Tab to save
4. **Auto-save** after ~5 seconds

**Example:**

```
Before:
▼ [     ] Information Security Policy
    ↑ Empty ID field

During Edit:
▼ [A.5.1|] Information Security Policy
    ↑ Typing...

After:
▼ [A.5.1] Information Security Policy
    ↑ Saved
```

**ID Format Guidelines:**

**ISO 27001:**
```
[A.5.1] Policies for information security
[A.9.2.1] User registration and de-registration
[A.12.4.1] Event logging
```

**NIST CSF:**
```
[PR.AC-1] Identities and credentials are issued
[DE.CM-3] Personnel activity is monitored
[RS.RP-1] Response plan is executed
```

**SOC 2:**
```
[CC6.1] Logical and physical access controls
[CC7.2] System operations monitoring
[A1.2] Availability commitments
```

**Internal Codes:**
```
[REQ-001] First requirement
[CTRL-AC-01] Access Control 01
[TASK-2024-03-15-001] Date-based task ID
```

**Best Practices:**

**Consistency:** Use same format throughout workflow
```
✅ [A.5.1], [A.5.2], [A.5.3]
❌ [A.5.1], [A5.2], [A 5 3]
```

**Brevity:** Keep IDs short and scannable
```
✅ [A.5.1]
✅ [CC6.1]
❌ [ISO27001-2022-Annex-A-Section-5-Control-1]
```

**Sortability:** Use leading zeros for numeric sequences
```
✅ [CTRL-001], [CTRL-002], [CTRL-010]
❌ [CTRL-1], [CTRL-2], [CTRL-10] (sorts wrong)
```

---

### 6.4 Writing Descriptions

**Purpose:** Add detailed information, guidance, and context to units

**Length:** Typically unlimited (10,000+ characters)

**Format:** Plain text with line breaks

**When:** Creation Mode (best practice: write descriptions as you build)

**Steps:**

1. **Expand unit** if body is collapsed
2. **Click** in description area
3. **Type** or paste content
4. **Use Enter** for line breaks
5. **Click outside** or continue to next unit
6. **Auto-save** occurs after ~5 seconds of inactivity

**Example:**

```
Description field:

┌─────────────────────────────────────────────┐
│ Implement multi-factor authentication for   │
│ all administrative accounts.                │
│                                             │
│ REQUIREMENT:                                │
│ ISO 27001:2022 Control A.9.4.2             │
│                                             │
│ IMPLEMENTATION:                             │
│ 1. Deploy Duo MFA solution                 │
│ 2. Configure for VPN, AWS Console, O365    │
│ 3. Enforce for all admin accounts          │
│ 4. Configure backup codes                  │
│                                             │
│ EVIDENCE:                                   │
│ - Configuration screenshots                 │
│ - List of enrolled users                   │
│ - MFA policy document                      │
│                                             │
│ DUE DATE: June 30, 2024                    │
│ OWNER: IT Security Team                    │
└─────────────────────────────────────────────┘
```

**Description Templates:**

**For Compliance Requirements:**

```
CONTROL: [Control number and name]

REQUIREMENT:
[What the regulation requires]

WHY IT MATTERS:
[Business/security justification]

IMPLEMENTATION GUIDANCE:
[Step-by-step instructions]

EVIDENCE NEEDED:
- [Document 1]
- [Document 2]
- [Document 3]

REFERENCES:
- [Link to regulation]
- [Link to implementation guide]
```

**For Tasks:**

```
OBJECTIVE:
[What needs to be accomplished]

STEPS:
1. [First step]
2. [Second step]
3. [Third step]

ASSIGNED TO: [Person/team]
DUE DATE: [Date]
DEPENDENCIES: [Other tasks that must be complete first]

COMPLETION CRITERIA:
[How to know when this is done]
```

**For Evidence Items:**

```
EVIDENCE TYPE: [Policy, procedure, log, screenshot, etc.]

LOCATION: [Where to find it]

LAST UPDATED: [Date]

NOTES:
[Any important context for auditors]
```

**Formatting Tips:**

**Use Structure:**
```
✅ Use headers (REQUIREMENT:, STEPS:, etc.)
✅ Use numbered lists (1. 2. 3.)
✅ Use bullet points (- item)
✅ Use blank lines for spacing
```

**Be Concise but Complete:**
```
✅ Provide enough detail to be actionable
✅ Include context (why, not just what)
❌ Write novels (descriptions should be scannable)
❌ Leave descriptions empty (defeats the purpose)
```

**Client-Specific Context:**
```
Generic: "Implement access control policy"

Client-Specific: "Draft access control policy for Acme Corp's 
AWS environment, addressing requirements from ISO 27001 A.9.1.1. 
Must cover: 1) VPN access, 2) Console access, 3) API keys, 
4) Service accounts. Review with Legal by May 15."
```

---

### 6.5 Adding Tags

**Purpose:** Categorize units across multiple dimensions for filtering

**When:** Creation Mode (but tags can be added/removed anytime)

**Prerequisites:** Template must enable Tags property for this level

**Steps:**

1. **Expand unit** if needed
2. **Click "+" button** or "Add Tag" in tags area
3. **Modal opens** prompting for tag name
4. **Type tag name**
   - Example: "Priority:High"
   - Example: "Q1-2024"
   - Example: "IT-Department"
5. **Press Enter** or **Click Add**
6. **Tag appears** as colored badge
7. **Repeat** to add more tags

**Add Tag Modal:**

```
┌────────────────────────────────┐
│  Add Tag                    [×]│
├────────────────────────────────┤
│                                │
│  Tag Name:                     │
│  [Priority:High________]       │
│                                │
│  Examples:                     │
│  • Priority:Critical           │
│  • Q1-2024                     │
│  • IT-Department               │
│  • External-Audit              │
│                                │
│        [Cancel]  [Add Tag]     │
└────────────────────────────────┘
```

**Tag Naming Conventions:**

**Category:Value Format:**
```
Priority:Critical
Priority:High
Priority:Medium
Priority:Low

Department:IT
Department:Legal
Department:HR
Department:Finance

Status:In-Progress
Status:Blocked
Status:Complete
```

**Timeframe Tags:**
```
Q1-2024
Q2-2024
Q3-2024
Q4-2024

Annual-Review
Monthly-Check
Quarterly-Report
```

**Audit Tags:**
```
External-Audit
Internal-Review
Spot-Check
Requires-Evidence
Evidence-Collected
```

**Simple Tags:**
```
Critical
High-Priority
Quick-Win
Technical
Non-Technical
Client-Facing
```

**Example Application:**

```
Unit: A.5.1 - Information Security Policy

Tags: [Priority:High] [Legal] [IT] [Annual-Review] [External-Audit] [Q1-2024]
      └─────────────┘  └────┘  └──┘  └────────────┘  └──────────────┘  └───────┘
       Priority        Depts    Dept   Frequency       Audit Type        Timeline
```

**Tag Strategy:**

**Establish Taxonomy Early:**

Before adding tags, define your tag categories:

```
TAXONOMY:

1. Priority: Critical, High, Medium, Low
2. Timeline: Q1-2024, Q2-2024, etc.
3. Department: IT, Legal, HR, Finance, Operations
4. Audit: External-Audit, Internal-Review, Spot-Check
5. Status: In-Progress, Blocked, Complete, Pending-Review
```

**Document Tag Meanings:**

In workflow description, explain tag system:

```
Workflow Description:

TAG GUIDE:
- Priority:Critical = Must complete for audit (showstopper)
- Priority:High = Important but not blocker
- Q1-2024 = Due first quarter
- External-Audit = Auditor will examine
- Evidence-Required = Need documentation
```

**Consistent Application:**

```
✅ Use same tag across similar units:
   All high-priority items tagged "Priority:High"

❌ Inconsistent tags:
   "High Priority", "High", "Priority:High", "PRIORITY-HIGH"
   (These won't filter together!)
```

**Multiple Dimensions:**

Tag units across multiple axes for flexible filtering:

```
▼ Unit: Deploy MFA
   Tags: [Priority:Critical] [IT] [Q1-2024] [External-Audit] [Security]
   
   Can filter by:
   - All Q1 items
   - All IT items
   - All External-Audit items
   - All Critical items
   - Combination: Critical + Q1
```

---

### 6.6 Removing Tags

**Purpose:** Remove tags that are no longer applicable

**When:** Anytime (Creation or Execution Mode, depending on implementation)

**Steps:**

1. **Locate tag** on unit
2. **Click "×"** button on tag badge
3. **Tag removes** immediately (no confirmation)
4. **Auto-saves** change

**Visual:**

```
Before:
Unit Name [Priority:High] [×] [IT-Dept] [×] [Q1-2024] [×]
                        ↑             ↑              ↑
                     Click here to remove tag

After clicking second × (IT-Dept):
Unit Name [Priority:High] [×] [Q1-2024] [×]
```

**When to Remove Tags:**

**Status Change:**
```
Task moves from Q1 to Q2:
Remove: [Q1-2024]
Add: [Q2-2024]
```

**Completion:**
```
Evidence collected:
Remove: [Evidence-Required]
Add: [Evidence-Collected]
```

**Reprioritization:**
```
Priority downgraded:
Remove: [Priority:Critical]
Add: [Priority:Medium]
```

**Cleanup:**
```
Remove incorrect or obsolete tags:
Remove: [Old-Tag]
Remove: [Typo-Tag]
```

**Tips:**

- **No undo:** Removing tag is immediate (but you can re-add it)
- **Bulk updates:** Can't remove same tag from multiple units at once (manual per unit)
- **Filter first:** Use tag filter to find all units with a tag, then remove from each

---

### 6.7 Setting Grades

**Purpose:** Assign numeric scores for assessments, ratings, or metrics

**Types:**

1. **Individual Grades:** Manual entry
2. **Cumulative Grades:** Auto-calculated (sum of children)

**When:** Both Creation and Execution Modes

**Prerequisites:** Template must enable Grade property for this level

---

**Setting Individual Grades:**

**Steps:**

1. **Locate grade field** on unit (usually near progress bar)
2. **Click** in grade input field
3. **Type** numeric value
   - Integers: 1, 2, 3
   - Decimals: 2.5, 3.75
   - Negative: -1 (if applicable)
4. **Press Tab** or **click outside** to save
5. **Auto-saves** after entry

**Example:**

```
Before:
Control: Access Control [Grade: __]
                              ↑ Empty

During Edit:
Control: Access Control [Grade: 3|]
                              ↑ Typing

After:
Control: Access Control [Grade: 3]
                              ↑ Saved
```

**Common Grading Scales:**

**Maturity Levels (1-5):**
```
1 = Initial/Ad-hoc
2 = Repeatable
3 = Defined
4 = Managed
5 = Optimized

Example:
[Grade: 3] = Control is defined but not yet fully managed
```

**Pass/Fail (1/0):**
```
1 = Pass/Compliant
0 = Fail/Non-compliant

Example:
[Grade: 1] = Control passes requirements
[Grade: 0] = Control fails requirements
```

**Risk Ratings (1-10):**
```
1-3 = Low Risk
4-7 = Medium Risk
8-10 = High Risk

Example:
[Grade: 8] = High risk control requiring attention
```

**Percentage (0-100):**
```
0-100 = Percentage implementation/completion

Example:
[Grade: 75] = Control is 75% implemented
```

---

**Cumulative Grades (Auto-Calculated):**

**How It Works:**

When children have grades, parent automatically shows cumulative (sum) grade.

**Visual Indicator:** Sigma symbol (Σ)

**Example:**

```
▼ Access Control Domain [Grade: Σ 12] ← Auto-calculated
   ├─ User Access [Grade: 3]
   ├─ Authentication [Grade: 4]
   └─ Authorization [Grade: 5]
   
   Calculation: 3 + 4 + 5 = 12
```

**Nested Cumulative Grades:**

```
▼ Level 1 [Grade: Σ 45] ← Sum of all Level 2
   ├─ ▼ Level 2a [Grade: Σ 20] ← Sum of Level 3a units
   │  ├─ Level 3a [Grade: 8]
   │  ├─ Level 3b [Grade: 7]
   │  └─ Level 3c [Grade: 5]
   └─ ▼ Level 2b [Grade: Σ 25] ← Sum of Level 3d units
      ├─ Level 3d [Grade: 10]
      ├─ Level 3e [Grade: 9]
      └─ Level 3f [Grade: 6]

Total: (8+7+5) + (10+9+6) = 20 + 25 = 45
```

**Editing Cumulative Grades:**

**Cannot Edit Directly:** Cumulative grades are calculated, not editable

**To Change Cumulative Grade:** Edit child grades

```
Want to change:
▼ Access Control [Grade: Σ 12] ← Want this to be 15

How:
1. Edit child grades to sum to 15
2. Example: Change child grades to 5, 5, 5 = 15
```

---

**Using Grades for Reporting:**

**Compliance Maturity:**
```
▼ ISO 27001 Implementation [Grade: Σ 279] ← Overall maturity
   ├─ ▼ Organizational [Grade: Σ 68]
   ├─ ▼ People [Grade: Σ 71]
   ├─ ▼ Physical [Grade: Σ 69]
   └─ ▼ Technological [Grade: Σ 71]

With 93 controls, max possible = 465 (93×5)
Current: 279/465 = 60% maturity
```

**Risk Assessment:**
```
▼ Risk Register [Grade: Σ 185] ← Total risk score
   ├─ Cyber Risks [Grade: Σ 75]
   ├─ Operational Risks [Grade: Σ 58]
   └─ Financial Risks [Grade: Σ 52]

Higher total = Higher overall risk exposure
```

**Implementation Progress:**
```
▼ Project [Grade: Σ 750] ← Total effort/points
   └─ Completed so far [Grade: Σ 450]
   
Progress: 450/750 = 60% complete (by story points)
```

---

---

## CHAPTER 7: MANAGING ATTACHMENTS

Attachments enrich units with external resources, evidence, and collaborative discussions.

### 7.1 Adding Links

**Purpose:** Reference external resources (policies, documents, websites, evidence)

**When:** Both Creation and Execution Modes (collaboration-friendly)

**Prerequisites:** Template must enable Links property for this level

**Steps:**

1. **Expand unit** to show body section
2. **Scroll to Attachments area**
3. **Click "+ Add Link" button**
4. **Modal opens** with form
5. **Fill in fields:**
   - **Link Text:** Display name (e.g., "Access Control Policy v2.3")
   - **URL:** Web address (e.g., "https://docs.acme.com/policies/ac-policy.pdf")
6. **Click "Add"** or press Enter
7. **Link appears** in unit's Links section
8. **Auto-saves** to workflow

**Add Link Modal:**

```
┌──────────────────────────────────────┐
│  Add Link                         [×]│
├──────────────────────────────────────┤
│                                      │
│  Link Text (Display Name):          │
│  [Access Control Policy v2.3_____]  │
│                                      │
│  URL:                                │
│  [https://docs.acme.com/policy.pdf] │
│                                      │
│  Tip: Link text is what users see   │
│                                      │
│         [Cancel]  [Add Link]         │
└──────────────────────────────────────┘
```

**URL Auto-Formatting:**

Most implementations auto-add `https://` if protocol is missing:

```
You type: docs.acme.com/policy.pdf
System saves: https://docs.acme.com/policy.pdf
```

**Link Display:**

```
Unit: A.5.1 Information Security Policy

Attachments:

Links (3):
├─ 📎 Access Control Policy v2.3
│     [https://docs.acme.com/ac-policy.pdf]
├─ 📎 ISO 27001:2022 A.5 Requirements
│     [https://iso.org/27001/a5]
└─ 📎 Implementation Guidance
│     [https://sharepoint.acme.com/guides]
```

**Clicking Links:**

- Click link text or URL
- Opens in new tab/window
- Original workflow remains open

**Common Link Uses:**

**Policy Documents:**
```
Link Text: "Information Security Policy v3.1"
URL: https://policies.acme.com/infosec-v3.1.pdf
```

**Evidence Repositories:**
```
Link Text: "Q1 2024 Access Logs (SharePoint)"
URL: https://sharepoint.acme.com/audit/logs-q1
```

**Regulatory References:**
```
Link Text: "GDPR Article 32 - Security of Processing"
URL: https://gdpr-info.eu/art-32-gdpr/
```

**Implementation Guides:**
```
Link Text: "NIST 800-53 AC-2 Guidance"
URL: https://nvlpubs.nist.gov/nistpubs/...
```

**Jira/Project Management:**
```
Link Text: "JIRA Ticket: PROJ-1234"
URL: https://acme.atlassian.net/browse/PROJ-1234
```

**Google Drive/OneDrive:**
```
Link Text: "MFA Configuration Screenshots (Drive)"
URL: https://drive.google.com/drive/folders/abc123
```

**Best Practices:**

**Descriptive Link Text:**
```
✅ "Access Control Policy v2.3 (Approved March 2024)"
❌ "Click here"
❌ "Link"
❌ "https://docs.acme.com/policy.pdf"
```

**Include Versions:**
```
✅ "Risk Assessment Template v1.5"
❌ "Risk Assessment Template" (which version?)
```

**Indicate Content Type:**
```
✅ "Network Diagram (PDF)"
✅ "Training Video (YouTube)"
✅ "Evidence Folder (SharePoint)"
```

**Keep Links Current:**
```
✅ Periodically verify links still work
✅ Update if document moves
✅ Add "(Archived)" to old versions
```

---

### 7.2 Adding Images

**Purpose:** Attach visual evidence (screenshots, photos, diagrams)

**When:** Both Creation and Execution Modes

**Prerequisites:** Template must enable Images property for this level

**Steps:**

1. **Expand unit** to show body
2. **Scroll to Attachments**
3. **Click "+ Add Image" button**
4. **Modal opens** prompting for image URL
5. **Enter image URL**
   - Direct image link (e.g., https://example.com/image.png)
   - Hosted image URL (Imgur, cloud storage, etc.)
6. **Click "Add"**
7. **Image appears** as thumbnail
8. **Auto-saves**

**Add Image Modal:**

```
┌──────────────────────────────────────┐
│  Add Image                        [×]│
├──────────────────────────────────────┤
│                                      │
│  Image URL:                          │
│  [https://i.imgur.com/abc123.png__] │
│                                      │
│  Supported formats:                  │
│  • PNG, JPG, JPEG, GIF, WebP        │
│                                      │
│  Note: Image must be publicly        │
│  accessible via URL                  │
│                                      │
│         [Cancel]  [Add Image]        │
└──────────────────────────────────────┘
```

**Image Display:**

```
Unit: A.9.4.2 Multi-Factor Authentication

Attachments:

Images (3):
├─ [Thumbnail] Duo MFA Configuration
│   Click to enlarge
├─ [Thumbnail] AWS Console MFA Settings
│   Click to enlarge
└─ [Thumbnail] User Enrollment Report
   Click to enlarge
```

**Viewing Images:**

**Thumbnail View:**
- Small preview (e.g., 150x150px)
- Shows in unit's attachments section

**Full View:**
- Click thumbnail
- Modal/lightbox opens with full-size image
- Click outside or [X] to close

**Image Sources:**

**Screenshot Tools:**
```
1. Take screenshot
2. Upload to Imgur, Google Photos, or cloud storage
3. Get public shareable link
4. Paste link in Add Image modal
```

**Cloud Storage (Google Drive example):**
```
1. Upload image to Google Drive
2. Right-click → Get link → Set to "Anyone with link can view"
3. Use direct image link or Drive preview link
4. Add to workflow
```

**Hosted Solutions:**
```
- Imgur: https://i.imgur.com/abc123.png
- AWS S3: https://bucket.s3.amazonaws.com/image.png
- Azure Blob: https://storage.blob.core.windows.net/image.jpg
- Google Cloud: https://storage.googleapis.com/bucket/image.png
```

**Common Image Uses:**

**Configuration Screenshots:**
```
Evidence: MFA enabled on AWS Console
Image: Screenshot of AWS IAM MFA settings page
```

**Network Diagrams:**
```
Documentation: Network architecture
Image: Visio diagram exported as PNG
```

**Physical Security:**
```
Evidence: Badge reader installed
Image: Photo of access control system at entrance
```

**Compliance Evidence:**
```
Proof: Firewall rules configured correctly
Image: Screenshot of firewall rules with highlights
```

**Before/After Comparisons:**
```
Improvement tracking:
Image 1: Before - weak password policy
Image 2: After - strong password policy with MFA
```

**Best Practices:**

**Image Quality:**
```
✅ Clear, readable screenshots (1920x1080 or similar)
✅ Highlight important areas (red boxes, arrows)
✅ Crop unnecessary parts
❌ Blurry or tiny images
❌ Entire desktop screenshot (too much clutter)
```

**Privacy/Security:**
```
⚠️ Redact sensitive data (passwords, API keys, PII)
⚠️ Check image metadata (location, etc.)
⚠️ Ensure images don't leak confidential info
✅ Use tools like Greenshot for annotation/redaction
```

**Naming:**
```
✅ Include context: "AWS-MFA-Config-March-2024.png"
❌ Generic: "Screenshot_001.png"
```

**Storage:**
```
✅ Use reliable, long-term storage
✅ Backup images separately
❌ Temporary file-sharing links that expire
❌ Personal Dropbox that might lose access
```

---

### 7.3 Adding Notes

**Purpose:** Create rich text documentation, implementation decisions, or guidance

**When:** Both Creation and Execution Modes

**Prerequisites:** Template must enable Notes property for this level

**Steps:**

1. **Expand unit**
2. **Click "+ Add Note" button**
3. **Modal opens** with rich text editor
4. **Enter note title** (required)
5. **Write note content** using rich text editor
6. **Format text:**
   - Bold, italic, underline
   - Bullet lists, numbered lists
   - Headings
   - Hyperlinks (optional)
7. **Click "Save"**
8. **Note appears** in Attachments section

**Add Note Modal:**

```
┌─────────────────────────────────────────────┐
│  Add Note                                [×]│
├─────────────────────────────────────────────┤
│                                             │
│  Note Title:                                │
│  [Implementation Decision - March 2024___]  │
│                                             │
│  Content:                                   │
│  ┌───────────────────────────────────────┐ │
│  │ [B] [I] [U] [•] [1.] [🔗] ...        │ │
│  ├───────────────────────────────────────┤ │
│  │ We decided to use Duo for MFA after   │ │
│  │ evaluating three options:             │ │
│  │                                       │ │
│  │ 1. Duo Security (selected)            │ │
│  │ 2. Okta Verify                       │ │
│  │ 3. Microsoft Authenticator           │ │
│  │                                       │ │
│  │ Reasons:                              │ │
│  │ • Cost-effective for our size        │ │
│  │ • Easy integration with VPN          │ │
│  │ • Supports push notifications        │ │
│  │                                       │ │
│  └───────────────────────────────────────┘ │
│                                             │
│              [Cancel]  [Save Note]          │
└─────────────────────────────────────────────┘
```

**Rich Text Editor Features:**

**Text Formatting:**
- **Bold:** Ctrl+B
- *Italic:* Ctrl+I
- <u>Underline:</u> Ctrl+U

**Lists:**
- Bullet points
- Numbered lists
- Nested lists

**Headings:**
- Heading 1, 2, 3 (organize long notes)

**Hyperlinks:**
- Add links within note text
- Example: "See [NIST guidance](https://nvlpubs.nist.gov/...)"

**Note Display:**

```
Unit: A.9.4.2 Multi-Factor Authentication

Attachments:

Notes (2):
├─ 📝 Implementation Decision - March 2024
│     [Expand to read]
└─ 📝 Auditor Q&A - June 2024
      [Expand to read]
```

**Expanded Note View:**

```
📝 Implementation Decision - March 2024

We decided to use Duo for MFA after evaluating three options:

1. Duo Security (selected)
2. Okta Verify
3. Microsoft Authenticator

Reasons:
• Cost-effective for our size ($3/user/month)
• Easy integration with VPN and AWS Console
• Supports push notifications (better UX than SMS)
• Used by similar companies in our industry

Decision made: March 15, 2024
Approved by: CISO (Jane Doe), CFO (John Smith)
Implementation target: June 30, 2024

[Collapse]
```

**Common Note Uses:**

**Implementation Decisions:**
```
Title: "MFA Solution Selection Decision"

Content:
Decision Date: March 15, 2024
Decision Makers: CISO, CFO, IT Director

Options Considered:
1. Duo (selected) - $15,000/year
2. Okta - $25,000/year
3. Microsoft - $0 (included) but limited features

Selection Rationale:
• Balance of cost and features
• Better than free option for security posture
• Less expensive than enterprise solution

Implementation Plan:
• Q2: Pilot with IT team (April-May)
• Q3: Roll out to all staff (June-August)
• Q4: Enforce for all users (September)
```

**Auditor Q&A:**
```
Title: "External Audit Questions - SOC 2"

Auditor Question:
"How do you ensure MFA cannot be bypassed?"

Our Response:
We enforce MFA at multiple layers:
1. VPN requires MFA (no bypass)
2. AWS Console enforces MFA for IAM users
3. O365 conditional access policies require MFA
4. Service accounts use certificate-based auth (not MFA, but stronger)

Evidence Provided:
• VPN configuration screenshots
• AWS IAM policy exports
• O365 conditional access policy screenshots

Follow-up Items:
• None - auditor satisfied with response
```

**Compliance Guidance:**
```
Title: "How to Implement This Control"

Step-by-Step Guide:

1. Review Requirement
   Read ISO 27001 A.9.4.2 and understand the "why"

2. Choose Solution
   Evaluate MFA options based on:
   • Budget
   • Technical stack
   • User experience
   • Compliance requirements

3. Implement
   • Deploy MFA solution
   • Configure for all systems
   • Test thoroughly

4. Document Evidence
   • Configuration screenshots
   • Policy documents
   • Testing results
   • User training materials

5. Ongoing Maintenance
   • Quarterly access reviews
   • Annual policy review
   • Monitor MFA enrollment rate
```

**Risk Assessment Notes:**
```
Title: "Risk Analysis - MFA Implementation"

Inherent Risk (Before MFA):
• Threat: Password compromise
• Impact: High (data breach, compliance failure)
• Likelihood: High (phishing is common)
• Risk Score: 9/10

Residual Risk (After MFA):
• Impact: High (still possible but harder)
• Likelihood: Low (requires both password + MFA bypass)
• Risk Score: 3/10

Risk Treatment:
Implement MFA to reduce likelihood from High to Low

Acceptance:
Residual risk of 3/10 accepted by CISO (signature on file)
```

**Best Practices:**

**Note Titles:**
```
✅ Descriptive: "Implementation Decision - March 2024"
✅ Include dates: "Auditor Q&A - Q2 2024"
✅ Categorize: "[DECISION] MFA Solution Selection"
❌ Generic: "Note 1", "Notes"
```

**Note Content:**
```
✅ Structured (use headings, lists)
✅ Include dates and decision makers
✅ Link to related documents
✅ Update with follow-ups
❌ Rambling paragraphs
❌ Missing context
```

**When to Use Notes vs. Description:**

**Use Description for:**
- Permanent control/task information
- Standard requirement text
- Implementation guidance (applies to all)

**Use Notes for:**
- Client-specific decisions
- Time-sensitive information
- Discussion summaries
- Evolving guidance

---

### 7.4 Adding Comments

**Purpose:** Discussion threads, questions, and collaborative conversations

**When:** Both Creation and Execution Modes (collaboration tool)

**Prerequisites:** Template must enable Comments property for this level

**Steps:**

1. **Expand unit**
2. **Click "+ Add Comment" button**
3. **Modal opens** with textarea
4. **Type comment** (plain text, no formatting)
5. **Click "Add Comment"** or press Ctrl+Enter
6. **Comment appears** in Attachments section with timestamp
7. **Auto-saves**

**Add Comment Modal:**

```
┌──────────────────────────────────────┐
│  Add Comment                      [×]│
├──────────────────────────────────────┤
│                                      │
│  Your Comment:                       │
│  ┌────────────────────────────────┐ │
│  │ Should we use Duo or Okta for  │ │
│  │ our MFA solution? Duo is       │ │
│  │ cheaper but Okta integrates    │ │
│  │ better with our SSO.           │ │
│  │                                │ │
│  └────────────────────────────────┘ │
│                                      │
│  Plain text only (no formatting)     │
│                                      │
│         [Cancel]  [Add Comment]      │
└──────────────────────────────────────┘
```

**Comment Display:**

```
Unit: A.9.4.2 Multi-Factor Authentication

Attachments:

Comments (4):
├─ 💬 John Smith - May 10, 2024 at 2:30 PM
│     "Should we use Duo or Okta for MFA? Duo is cheaper 
│     but Okta integrates better with our SSO."
│
├─ 💬 Jane Doe (CISO) - May 10, 2024 at 3:15 PM
│     "Good question. Let's evaluate both. Can you create 
│     a comparison matrix by Friday?"
│
├─ 💬 John Smith - May 12, 2024 at 10:00 AM
│     "Comparison done. Duo wins on cost ($15k vs $25k), 
│     Okta wins on features. Recommendation: Start with Duo, 
│     migrate to Okta later if needed."
│
└─ 💬 Jane Doe (CISO) - May 13, 2024 at 9:00 AM
     "Approved. Go with Duo. Budget saved can fund other 
     security initiatives."
```

**Comment Metadata:**

Each comment shows:
- **Author name** (from user profile or system)
- **Timestamp** (date and time)
- **Comment text**

**Comment Ordering:**

**Newest First (default):**
```
Most recent comment at top
Oldest comment at bottom
```

**Or Chronological (implementation-dependent):**
```
Oldest comment at top
Most recent at bottom
```

**Common Comment Uses:**

**Questions:**
```
"Is this control required for SOC 2 or optional?"
"What's the deadline for implementing this?"
"Who is responsible for this task?"
```

**Answers:**
```
"Yes, this is required for CC6.1 (Trust Services Criteria)."
"Deadline is June 30, 2024 per audit schedule."
"IT Security Team owns this, with support from IT Ops."
```

**Status Updates:**
```
"MFA deployed to IT team for pilot testing."
"Pilot successful, rolling out to all staff next week."
"Rollout complete. 95% of users enrolled."
```

**Blockers/Issues:**
```
"Blocked: Need budget approval before purchasing Duo licenses."
"Issue: Some users can't install Duo on personal phones. 
Need to provide hardware tokens as alternative."
```

**Decisions:**
```
"Decision: Using Duo for MFA. See Implementation Decision 
note for full rationale."
```

**Follow-ups:**
```
"@John can you provide the MFA enrollment report by EOD Friday?"
"Reminder: Quarterly access review due next week."
```

**Best Practices:**

**Be Specific:**
```
✅ "Need budget approval for Duo licenses ($15,000). 
   Can we fast-track this through the CFO?"
❌ "Need approval"
```

**Tag People (if supported):**
```
✅ "@Jane can you review the MFA policy draft?"
✅ "Question for @IT-Team: ..."
```

**Include Context:**
```
✅ "Per the audit kickoff meeting on May 5, auditor 
   requested this evidence by June 1."
❌ "Auditor wants this"
```

**Date Important Items:**
```
✅ "Deadline: June 30, 2024"
✅ "Follow-up scheduled for: May 20, 2024"
```

**Separate Concerns:**
```
Use multiple comments for different topics:
Comment 1: Question about budget
Comment 2: Separate question about timeline
Comment 3: Status update

Don't: One long comment mixing 5 different topics
```

**When to Use Comments vs. Notes:**

**Use Comments for:**
- Time-sensitive discussions
- Questions and answers
- Quick status updates
- Back-and-forth conversations
- @mentions and notifications

**Use Notes for:**
- Permanent documentation
- Decisions that need structure
- Implementation guidance
- Formal documentation

**Example:**

```
Comments (conversation):
💬 "Should we use Duo or Okta?" - May 10
💬 "Let's evaluate both" - May 10
💬 "Comparison complete, recommend Duo" - May 12
💬 "Approved, go with Duo" - May 13

Note (permanent record):
📝 Implementation Decision - May 2024
   Decision: Use Duo for MFA
   Rationale: Cost-effective, meets requirements
   Approved by: CISO
   [Full structured decision document]
```

---

### 7.5 Viewing Attachments

**Attachment Organization:**

Attachments are grouped by type in the unit body:

```
Unit: A.9.4.2 Multi-Factor Authentication

Attachments:

Links (2):
📎 Access Control Policy v2.3
📎 NIST SP 800-53 AC-2 Guidance

Images (3):
🖼️ [Thumbnail] Duo Configuration
🖼️ [Thumbnail] AWS MFA Settings
🖼️ [Thumbnail] Enrollment Report

Notes (1):
📝 Implementation Decision - March 2024
   [Expand to read]

Comments (5):
💬 John Smith - May 10: "Question about..."
💬 Jane Doe - May 10: "Answer: ..."
💬 John Smith - May 12: "Follow-up..."
💬 [Show 2 more comments]
```

**Expanding/Collapsing:**

**Links:**
- Always visible (compact)
- Click to open in new tab

**Images:**
- Show as thumbnails
- Click to view full-size

**Notes:**
- Collapsed by default (title only)
- Click "Expand" to read content
- Click "Collapse" to hide

**Comments:**
- Show recent 3-5 by default
- Click "Show all comments" to expand
- Click "Hide older comments" to collapse

**Icons:**

Each attachment type has a distinct icon for quick identification:

- 📎 Links
- 🖼️ Images
- 📝 Notes
- 💬 Comments

**Empty States:**

When unit has no attachments:

```
Attachments:

No attachments yet.

[+ Add Link] [+ Add Image] [+ Add Note] [+ Add Comment]
```

---

### 7.6 Deleting Attachments

**Purpose:** Remove outdated or incorrect attachments

**When:** Anytime (Creation or Execution Mode)

**Steps:**

1. **Locate attachment** in unit body
2. **Click delete icon** (typically "×" or trash icon)
3. **Attachment removes immediately** (no confirmation)
4. **Auto-saves** change

**Visual:**

```
Links:
📎 Old Policy Document [×] ← Click to delete
📎 Current Policy Document [×]

After deletion:
Links:
📎 Current Policy Document [×]
```

**Deletion Behavior:**

**No Confirmation:**
- Deletion is immediate
- No "Are you sure?" dialog
- Intentional for quick cleanup

**No Undo:**
- Once deleted, attachment is gone
- Cannot recover (unless you re-add)

**Caution:**
- Be careful when clicking delete icons
- Consider archiving (renaming) instead of deleting important items

**When to Delete:**

**Outdated Information:**
```
Delete: Link to "MFA Policy v1.0"
Keep: Link to "MFA Policy v2.0"
```

**Incorrect Attachments:**
```
Delete: Image attached to wrong control
Re-add: To correct control
```

**Duplicate Attachments:**
```
Delete: Second copy of same link
Keep: One copy only
```

**Completed Discussions:**
```
Keep: Comments (for audit trail)
Optional: Delete very old comments if workflow becomes cluttered
```

**Best Practice - Archive Instead of Delete:**

For important items, consider "archiving" instead:

```
Instead of deleting:
📎 MFA Policy v1.0 [×]

Rename to show it's archived:
📎 [ARCHIVED] MFA Policy v1.0 - Replaced by v2.0 [×]
```

This preserves history while making clear it's not current.

---

---

## CHAPTER 8: ORGANIZING WITH TAGS

Tags provide powerful cross-cutting organization beyond the hierarchical structure.

### 8.1 Tag Strategy

**Why Tags Matter:**

Workflows have hierarchical structure (Level 1 → Level 2 → Level 3), but work doesn't always follow hierarchy. Tags let you organize across the hierarchy:

```
Hierarchical View:
▼ Access Control
   └─ MFA Implementation
▼ Network Security
   └─ Firewall Configuration
▼ Physical Security
   └─ Badge System

Tagged View (Q1-2024):
- MFA Implementation [Q1-2024]
- Firewall Configuration [Q1-2024]
- Badge System [Q1-2024]

All Q1 items, regardless of hierarchy location
```

---

**Establishing Your Tag Taxonomy:**

Before tagging, define your categories. Here are proven taxonomies:

**Priority Levels:**

```
Priority:Critical
Priority:High
Priority:Medium
Priority:Low
```

**Use cases:**
- Audit preparation: Critical items first
- Resource allocation: High priority gets most resources
- Risk management: Focus on critical gaps

**Example:**
```
Unit: A.9.4.2 MFA Implementation
Tags: [Priority:Critical]

Why: SOC 2 audit in 60 days, MFA is mandatory control
```

---

**Timeframes:**

```
Q1-2024
Q2-2024
Q3-2024
Q4-2024

January-2024
February-2024
...

Annual-Review
Quarterly-Check
Monthly-Task
Weekly-Standup
```

**Use cases:**
- Sprint planning: Show only Q1 items
- Timeline tracking: What's due this month?
- Recurring tasks: Find all annual reviews

**Example:**
```
Unit: Access Control Policy Review
Tags: [Q1-2024] [Annual-Review]

Due: March 31, 2024 (end of Q1)
Frequency: Once per year
```

---

**Audit Focus:**

```
External-Audit
Internal-Review
Spot-Check
Pre-Audit-Prep
Post-Audit-Followup
Auditor-Request
Evidence-Required
Evidence-Collected
```

**Use cases:**
- Audit preparation: Filter to external-audit items
- Evidence tracking: Find items needing evidence
- Follow-up management: Track post-audit actions

**Example:**
```
Unit: Firewall Rule Documentation
Tags: [External-Audit] [Evidence-Required]

Auditor will review: Yes
Evidence needed: Screenshot + change log
```

---

**Departments/Ownership:**

```
Department:IT
Department:Legal
Department:HR
Department:Finance
Department:Operations
Department:Security

Owner:IT-Security-Team
Owner:Compliance-Team
Owner:Network-Team
```

**Use cases:**
- Assignment: Who owns this?
- Collaboration: What does Legal need to review?
- Reporting: Show me all IT items

**Example:**
```
Unit: Employee Background Checks
Tags: [Department:HR] [Department:Legal]

HR: Conducts checks
Legal: Defines requirements
```

---

**Status/Progress:**

```
Status:Not-Started
Status:In-Progress
Status:Blocked
Status:Pending-Review
Status:Complete
Status:Deferred

Blocked-By:Budget
Blocked-By:Vendor
Blocked-By:Approval
```

**Use cases:**
- Daily standups: Show blocked items
- Management reporting: Count complete vs. in-progress
- Resource planning: What's not started?

**Example:**
```
Unit: Deploy EDR Solution
Tags: [Status:Blocked] [Blocked-By:Budget]

Status: Waiting for Q2 budget approval
Cannot proceed until: CFO approves $50k expenditure
```

---

**Compliance Types:**

```
Compliance:ISO-27001
Compliance:SOC-2
Compliance:HIPAA
Compliance:GDPR
Compliance:PCI-DSS
Compliance:NIST-CSF

Mandatory
Optional
Recommended
```

**Use cases:**
- Multi-framework compliance: Filter by regulation
- Shared controls: Find items that satisfy multiple regulations
- Scope management: Show only mandatory items

**Example:**
```
Unit: Encryption at Rest
Tags: [Compliance:ISO-27001] [Compliance:SOC-2] [Compliance:HIPAA] [Mandatory]

Satisfies:
- ISO 27001 A.10.1.1
- SOC 2 CC6.1
- HIPAA 164.312(a)(2)(iv)
```

---

**Risk Levels:**

```
Risk:High
Risk:Medium
Risk:Low

Risk-Type:Technical
Risk-Type:Operational
Risk-Type:Financial
Risk-Type:Reputational
```

**Use cases:**
- Risk prioritization: Address high risks first
- Risk reporting: Count by risk level
- Risk treatment: Track mitigation progress

**Example:**
```
Unit: Implement MFA
Tags: [Risk:High] [Risk-Type:Technical]

Current State: No MFA (high risk of compromise)
Target State: MFA enforced (risk reduced to medium)
```

---

**Combined Taxonomy Example:**

```
TAG TAXONOMY FOR COMPLIANCE WORKFLOWS:

1. Priority: Critical, High, Medium, Low
2. Timeline: Q1-2024, Q2-2024, Q3-2024, Q4-2024
3. Audit: External-Audit, Internal-Review, Evidence-Required
4. Department: IT, Legal, HR, Finance, Operations
5. Status: Not-Started, In-Progress, Blocked, Complete
6. Compliance: ISO-27001, SOC-2, HIPAA, GDPR
7. Risk: High, Medium, Low

Document this in your workflow description!
```

**Real-World Application:**

```
Unit: A.9.4.2 Multi-Factor Authentication

Tags:
[Priority:Critical]        ← Must do for audit
[Q1-2024]                  ← Due end of quarter
[External-Audit]           ← Auditor will check
[Department:IT]            ← IT team implements
[Department:Security]      ← Security team defines policy
[Status:In-Progress]       ← Currently being deployed
[Compliance:ISO-27001]     ← Satisfies ISO control
[Compliance:SOC-2]         ← Satisfies SOC 2 control
[Risk:High]                ← High risk if not implemented

Result: 9 tags providing multi-dimensional organization
```

---

### 8.2 Filtering by Tags

**Purpose:** Focus on specific subsets of your workflow

**How It Works:**

1. **Switch to Execution Mode** (filtering only works in Execution Mode)
2. **Click any tag badge** on any unit
3. **Workflow filters** to show only units with that tag
4. **Parent hierarchy preserved** for context
5. **Filter banner appears** at top
6. **Click "Clear Filter"** to show all units again

**Example:**

**Before Filtering (Full Workflow):**

```
▼ Access Control (not tagged)
   ├─ MFA Implementation [Q1-2024] [Critical]
   └─ Password Policy Review [Q2-2024] [Medium]
▼ Network Security (not tagged)
   ├─ Firewall Review [Q1-2024] [High]
   └─ IDS Configuration [Q3-2024] [Medium]
▼ Physical Security (not tagged)
   └─ Badge System Upgrade [Q1-2024] [Critical]
```

**After Clicking [Q1-2024] Tag:**

```
[Filtered by: Q1-2024] [Clear Filter]

▼ Access Control
   └─ MFA Implementation [Q1-2024] [Critical]
▼ Network Security
   └─ Firewall Review [Q1-2024] [High]
▼ Physical Security
   └─ Badge System Upgrade [Q1-2024] [Critical]

(Password Policy and IDS Configuration hidden)
```

**Parent Context Preservation:**

Notice "Access Control", "Network Security", and "Physical Security" parents are still shown (even though they don't have the Q1-2024 tag). This provides context.

**Without parent context:**
```
❌ Confusing:
   - MFA Implementation
   - Firewall Review
   - Badge System Upgrade
   (Where are these in the hierarchy?)
```

**With parent context:**
```
✅ Clear:
   Access Control → MFA Implementation
   Network Security → Firewall Review
   Physical Security → Badge System Upgrade
```

---

**Filter Banner:**

When filtering is active:

```
┌──────────────────────────────────────────┐
│ [Filtered by: Q1-2024] [Clear Filter]   │
└──────────────────────────────────────────┘

Filtered view below...
```

**Click "Clear Filter":**
- Returns to full workflow view
- All units visible again
- Filter removed

**Or Click Another Tag:**
- Switches filter to new tag
- Replaces previous filter (not additive)

---

**Use Cases:**

**Sprint Planning:**

```
Filter by: Q1-2024
Result: All Q1 tasks visible
Action: Export to board for Q1 sprint
```

**Audit Preparation:**

```
Filter by: External-Audit
Result: All items auditor will review
Action: Check completion status, gather evidence
```

**Department Meetings:**

```
Filter by: Department:IT
Result: All IT-owned items
Action: Discuss progress, identify blockers
```

**Risk Review:**

```
Filter by: Risk:High
Result: All high-risk items
Action: Ensure mitigation in progress
```

**Status Check:**

```
Filter by: Status:Blocked
Result: All blocked items
Action: Unblock issues, reallocate resources
```

**Multi-Regulation View:**

```
Filter by: Compliance:SOC-2
Result: All SOC 2 controls
Action: Prepare for SOC 2 audit
```

---

**Limitations:**

**Single Tag Filter:**

Current implementation: One tag at a time

```
Can: Filter by [Q1-2024]
Can: Filter by [Priority:Critical]
Cannot: Filter by [Q1-2024] AND [Priority:Critical] simultaneously
```

**Workaround:** Use compound tags

```
Create: [Q1-Critical]
Apply to items that are both Q1 and Critical
```

**No Tag Exclusion:**

```
Can: Show items WITH [External-Audit]
Cannot: Show items WITHOUT [External-Audit]
```

**Workaround:** Tag explicitly

```
Tag items as either:
- [External-Audit] or
- [Internal-Only]
Then filter by [Internal-Only]
```

---

**Filter Tips:**

**Before Filtering:**

1. **Use "Collapse All"** to get clean overview
2. **Apply filter**
3. **Expand units** you want to work on

**During Filtering:**

- **Progress bars** still show overall completion (not filtered)
- **Grades** still show cumulative totals (not filtered)
- **Done checkboxes** work normally

**After Filtering:**

- **Save progress** before clearing filter
- **Clear filter** to see full context again

**Filtering + Exporting:**

Powerful combination:

```
1. Filter by: [Q1-2024]
2. Export filtered view to board
3. Result: Q1-focused project board
```

See Chapter 12 for export details.

---

### 8.3 Exporting Tagged Items

**Purpose:** Create focused project boards from tagged subsets

**Workflow:**

1. **Filter workflow by tag** (see 8.2 above)
2. **"Export Tag to Board" button appears** (Execution Mode only)
3. **Click export button**
4. **Board is created** with:
   - Board name: "Workflow Name - [Tag Name]"
   - All tagged items as cards
   - Hierarchy preserved in dynamic list
   - Tag becomes label on all cards
5. **Board opens in new tab**

**Example:**

**Step 1: Filter by Tag**

```
Workflow: ISO 27001 Implementation
Click: [Q1-2024] tag

Filtered View:
▼ Organizational Controls
   └─ A.5.1 InfoSec Policy [Q1-2024]
▼ People Controls
   └─ A.6.1 Screening [Q1-2024]
▼ Physical Controls
   └─ A.7.1 Physical Perimeters [Q1-2024]

[Export Tag to Board] ← Button appears
```

**Step 2: Export**

```
Click "Export Tag to Board"

Creates Board:
Name: "ISO 27001 Implementation - Q1-2024"

Board Structure:
├─ Dynamic List Panel (Left):
│  Full filtered tree (read-only reference)
│  
└─ Workspace Panel (Right):
   Kanban Columns: To Do | In Progress | Done
   
   Cards created:
   - Card: A.5.1 InfoSec Policy [Q1-2024 label]
   - Card: A.6.1 Screening [Q1-2024 label]
   - Card: A.7.1 Physical Perimeters [Q1-2024 label]
```

**Step 3: Use Board**

```
Consultant:
- Manages Dynamic List (reference tree)
- Updates workflow when requirements change

Client:
- Creates implementation tasks in workspace
- Organizes in milestones (sprints)
- Moves cards through columns
- Assigns tasks to team members
```

---

**Export Options:**

**Full Workflow Export:**
```
No filter applied
Export entire workflow
All units → All cards
```

**Unit Export:**
```
Click "Board" button on specific unit
Export that unit + all descendants
```

**Tag Export:**
```
Filter by tag
Export only tagged items
Focused, sprint-ready board
```

**Comparison:**

| Export Type | Use Case | Result |
|-------------|----------|--------|
| Full Workflow | Initial board setup | 100+ cards (large) |
| Unit Export | Focus on one domain | 10-20 cards (focused) |
| Tag Export | Sprint planning | 5-15 cards (sprint-sized) |

---

**Tag Export Best Practices:**

**Sprint-Sized Tags:**

```
✅ Tag: [Sprint-1] on 8-12 items
Result: Manageable sprint board

❌ Tag: [Q1-2024] on 50 items
Result: Overwhelming board
```

**Specific Tags:**

```
✅ Tag: [Audit-Week-1] on evidence collection items
Result: Focused audit prep board

❌ Tag: [Important] on 30 items
Result: Too broad, defeats purpose
```

**Time-Bound Tags:**

```
✅ Tag: [Week-of-May-15]
Result: Weekly board

✅ Tag: [Q2-Sprint-3]
Result: Specific sprint board
```

**Team-Specific Tags:**

```
✅ Tag: [IT-Team] on IT-owned items
Result: IT team board

✅ Tag: [Legal-Review] on items needing legal approval
Result: Legal team task list
```

---

**Tag as Labels:**

When exported, tags become board labels:

```
Workflow Tag: [Priority:Critical]
           ↓
Board Label: [Priority:Critical]

Benefits:
- Visual consistency
- Filter in board by same tags
- Color-coding carries over
```

**Multiple Tags → Multiple Labels:**

```
Workflow Unit: A.5.1 InfoSec Policy
Tags: [Q1-2024] [Critical] [IT]
           ↓
Board Card: A.5.1 InfoSec Policy
Labels: [Q1-2024] [Critical] [IT]
```

---

**Workflow: Tag → Export → Execute:**

**Complete Process:**

```
1. PLAN (Workflow - Creation Mode):
   - Build workflow structure
   - Populate with requirements
   - Add tags for organization

2. TAG (Workflow - Creation Mode):
   - Apply tags strategically
   - Group by sprints, teams, priorities

3. FILTER (Workflow - Execution Mode):
   - Click tag to focus
   - Review filtered subset
   - Verify scope is correct

4. EXPORT (Workflow - Execution Mode):
   - Export tag to board
   - Board created automatically

5. EXECUTE (Board):
   - Client creates implementation tasks
   - Assigns to team members
   - Tracks progress through columns
   - Completes sprint

6. REPEAT:
   - Next sprint: Filter by next tag
   - Export again
   - Continue execution
```

**Example Timeline:**

```
Week 1-2: Build ISO 27001 workflow, apply sprint tags
Week 3-6: [Sprint-1] → Export → Execute (Q1 controls)
Week 7-10: [Sprint-2] → Export → Execute (Q2 controls)
Week 11-14: [Sprint-3] → Export → Execute (Q3 controls)
```

---

**Advanced Tagging Strategies:**

**Kanban Flow Tags:**

```
[Backlog]     ← Not yet started
[To-Do]       ← Ready for work
[In-Progress] ← Currently working
[Review]      ← Needs review
[Done]        ← Complete

Export [To-Do] items → Sprint backlog board
```

**Milestone Tags:**

```
[Milestone:Initial-Assessment]
[Milestone:Gap-Remediation]
[Milestone:Pre-Audit-Prep]
[Milestone:Audit-Readiness]

Export by milestone → Milestone-specific board
```

**Client Tags:**

For consultants with multiple clients:

```
[Client:Acme-Corp]
[Client:Beta-Inc]
[Client:Gamma-Ltd]

Export [Client:Acme-Corp] → Acme-specific board
```

**Evidence Tags:**

```
[Evidence:Policy]
[Evidence:Screenshot]
[Evidence:Log-Export]
[Evidence:Attestation]

Export [Evidence:Screenshot] → Screenshot collection board
```

---

---

## CHAPTER 9: TRACKING PROGRESS

Monitor completion, grades, and progress throughout workflow execution.

### 9.1 Completion Tracking

**Purpose:** Mark units as complete to track implementation progress

**How It Works:**

1. **Switch to Execution Mode**
   - Done checkboxes only visible in Execution Mode
   - Creation Mode is for building, Execution Mode is for tracking

2. **Check "Done" Boxes**
   - Click checkbox next to unit
   - Checkmark appears (☑)
   - Auto-saves immediately

3. **Visual Indicators Update**
   - Unit shows as complete (often with strikethrough or green indicator)
   - Parent progress bars update
   - Cumulative completion recalculates

**Example:**

```
Before:
▼ Access Control Domain [Progress: ░░░░░░░░░░ 0%]
   ├─ ☐ Draft access control policy
   ├─ ☐ Get executive approval
   ├─ ☐ Publish policy to intranet
   └─ ☐ Train staff on policy

After checking first two:
▼ Access Control Domain [Progress: ██████░░░░ 50%]
   ├─ ☑ Draft access control policy (complete)
   ├─ ☑ Get executive approval (complete)
   ├─ ☐ Publish policy to intranet (not done)
   └─ ☐ Train staff on policy (not done)
```

**Completion Behavior:**

**Immediate Save:**
- Checking/unchecking saves instantly
- No manual save required
- Network connection needed

**Parent Updates:**
- Parent progress bars recalculate
- Cascades up hierarchy
- All ancestors update

**Visual Feedback:**
- Checkmark appears/disappears
- Often with color change (gray → green)
- Some implementations add strikethrough text

**Use Cases:**

**Daily Standup:**
```
Team reviews workflow
Checks off completed tasks
Progress bars show status at-a-glance
```

**Weekly Progress Reports:**
```
Manager filters by department tag
Reviews completion percentage
Identifies blockers (unchecked items)
```

**Audit Preparation:**
```
60 days before audit:
- 20/93 controls complete (22%)

30 days before audit:
- 65/93 controls complete (70%)

Audit day:
- 93/93 controls complete (100%)
```

**Client Progress Tracking:**
```
Consultant checks workflow weekly:
"Client is 45% complete with ISO 27001 implementation"
"On track for Q4 certification"
```

---

### 9.2 Progress Bars

**Purpose:** Visual representation of completion percentage

**How Progress Bars Work:**

**Calculation:**
```
Progress = (# of children with Done checked / Total # of children) × 100%
```

**Requirements:**
1. Parent unit must have Progress Bar property enabled
2. Child units must have Done Checkbox property enabled
3. Parent must have at least one child

**Visual Display:**

```
Progress: ██████████ 100% (5/5 complete)
Progress: ████████░░ 80% (4/5 complete)
Progress: ██████░░░░ 60% (3/5 complete)
Progress: ░░░░░░░░░░ 0% (0/5 complete)

█ = Complete portion
░ = Incomplete portion
```

**Example:**

```
▼ ISO 27001 Implementation [Progress: ████░░░░░░ 40%]
   │
   ├─ ▼ Organizational Controls [Progress: ██████████ 100%]
   │  ├─ ☑ A.5.1 InfoSec Policy (done)
   │  ├─ ☑ A.5.2 InfoSec Roles (done)
   │  └─ ☑ A.5.3 Separation of Duties (done)
   │
   ├─ ▼ People Controls [Progress: ██████░░░░ 50%]
   │  ├─ ☑ A.6.1 Screening (done)
   │  └─ ☐ A.6.2 Terms and Conditions (not done)
   │
   ├─ ▼ Physical Controls [Progress: ░░░░░░░░░░ 0%]
   │  ├─ ☐ A.7.1 Physical Perimeter (not done)
   │  └─ ☐ A.7.2 Physical Entry (not done)
   │
   └─ ▼ Technological Controls [Progress: ░░░░░░░░░░ 0%]
      └─ ☐ A.8.1 User Devices (not done)

Overall Calculation:
- Organizational: 3/3 = 100%
- People: 1/2 = 50%
- Physical: 0/2 = 0%
- Technological: 0/1 = 0%

Total: (3+1+0+0) / (3+2+2+1) = 4/8 = 50%

But parent shows 40% because it has 5 direct children (domains), not 8 grandchildren.
Actually, progress bars calculate based on DIRECT children only.
```

**Direct Children Calculation:**

Progress bars count direct children only, not all descendants:

```
▼ Level 1 [Progress: ████░░░░░░ 40%] ← 2 of 5 Level 2 units done
   ├─ ☑ Level 2 Unit A (done)
   ├─ ☑ Level 2 Unit B (done)
   ├─ ☐ Level 2 Unit C (not done)
   ├─ ☐ Level 2 Unit D (not done)
   └─ ☐ Level 2 Unit E (not done)

2 / 5 = 40%
```

**Nested Progress:**

Each level has its own progress bar:

```
▼ Project [Progress: ██████░░░░ 50%] ← Based on 2 phases
   │
   ├─ ▼ Phase 1: Planning [Progress: ██████████ 100%] ← Based on 3 tasks
   │  ├─ ☑ Task A (done)
   │  ├─ ☑ Task B (done)
   │  └─ ☑ Task C (done)
   │
   └─ ▼ Phase 2: Execution [Progress: ░░░░░░░░░░ 0%] ← Based on 3 tasks
      ├─ ☐ Task D (not done)
      ├─ ☐ Task E (not done)
      └─ ☐ Task F (not done)

Project Progress: 1 phase done / 2 phases total = 50%
Phase 1 Progress: 3 tasks done / 3 tasks total = 100%
Phase 2 Progress: 0 tasks done / 3 tasks total = 0%
```

**Hover Information:**

Most implementations show details on hover:

```
Hover over progress bar:
Tooltip appears: "4 of 7 complete (57%)"
```

**Progress Bar Colors:**

Typical color schemes:

```
0-33%: Red or gray (far from complete)
34-66%: Yellow or orange (making progress)
67-99%: Light green (nearly complete)
100%: Dark green (complete)
```

**Real-Time Updates:**

Progress bars update immediately when you check/uncheck Done boxes:

```
Before clicking Done:
Parent [Progress: ████░░░░░░ 40%]

Click Done on child:

After (instant update):
Parent [Progress: ██████░░░░ 50%]
```

**Use Cases:**

**Executive Dashboards:**
```
CEO asks: "How's the ISO 27001 project?"
Consultant: "We're 72% complete, on track for Q3 certification"
Evidence: Workflow shows [Progress: ███████░░░ 72%]
```

**Sprint Planning:**
```
Start of Sprint: [Progress: ░░░░░░░░░░ 0%]
Mid-Sprint Check: [Progress: ████░░░░░░ 40%]
End of Sprint: [Progress: ██████████ 100%]
```

**Client Billing:**
```
Fixed-price project tied to progress:
- 50% complete → Invoice 50% of contract
- 100% complete → Final invoice
Progress bars provide objective measurement
```

**Team Motivation:**
```
Visual progress motivates teams:
"We're at 85%, let's push to 100% this week!"
Progress bars make abstract goals tangible
```

---

### 9.3 Grade Tracking

**Purpose:** Numeric scoring for assessments, maturity, or risk ratings

**Two Types of Grades:**

1. **Individual Grades** (manual entry)
2. **Cumulative Grades** (auto-calculated)

---

**Individual Grades:**

**What They Are:**
- Numeric scores you manually enter
- Represent assessments, ratings, maturity levels
- Editable in both Creation and Execution modes

**Common Uses:**

**Maturity Assessment (1-5):**
```
▼ Access Control Domain
   ├─ MFA Implementation [Grade: 4] ← Managed (Level 4)
   ├─ Password Policy [Grade: 3] ← Defined (Level 3)
   └─ Access Reviews [Grade: 2] ← Repeatable (Level 2)

Scale:
1 = Initial/Ad-hoc
2 = Repeatable
3 = Defined
4 = Managed
5 = Optimized
```

**Risk Rating (1-10):**
```
▼ Risk Register
   ├─ Ransomware Attack [Grade: 9] ← High risk
   ├─ Data Breach [Grade: 7] ← Medium-high risk
   └─ Phishing [Grade: 5] ← Medium risk

Scale:
1-3 = Low Risk
4-7 = Medium Risk
8-10 = High Risk
```

**Control Effectiveness (0-100):**
```
▼ Security Controls
   ├─ Firewall [Grade: 95] ← 95% effective
   ├─ Antivirus [Grade: 80] ← 80% effective
   └─ Training [Grade: 60] ← 60% effective
```

**Pass/Fail (1/0):**
```
▼ Audit Results
   ├─ Access Control [Grade: 1] ← Pass
   ├─ Encryption [Grade: 1] ← Pass
   └─ Logging [Grade: 0] ← Fail
```

**How to Set:**

1. Locate grade field on unit
2. Click in field
3. Type numeric value
4. Press Tab or click outside
5. Auto-saves

**Example:**

```
Before:
Control: MFA Implementation [Grade: __]

After:
Control: MFA Implementation [Grade: 4]
```

---

**Cumulative Grades:**

**What They Are:**
- Auto-calculated sums of child grades
- Read-only (cannot edit directly)
- Shown with Σ (sigma) symbol

**How They Calculate:**

```
▼ Access Control Domain [Grade: Σ 12] ← Sum of children
   ├─ MFA Implementation [Grade: 4]
   ├─ Password Policy [Grade: 5]
   └─ Access Reviews [Grade: 3]

Calculation: 4 + 5 + 3 = 12
```

**Nested Cumulative Grades:**

```
▼ ISO 27001 [Grade: Σ 45]
   ├─ ▼ Organizational [Grade: Σ 20]
   │  ├─ Control A [Grade: 7]
   │  ├─ Control B [Grade: 8]
   │  └─ Control C [Grade: 5]
   │  (7 + 8 + 5 = 20)
   │
   └─ ▼ People [Grade: Σ 25]
      ├─ Control D [Grade: 10]
      ├─ Control E [Grade: 9]
      └─ Control F [Grade: 6]
      (10 + 9 + 6 = 25)

Total: 20 + 25 = 45
```

**Real-Time Updates:**

Cumulative grades update instantly when you change child grades:

```
Before:
Parent [Grade: Σ 12]
├─ Child A [Grade: 4]
└─ Child B [Grade: 5]

Change Child A from 4 to 8:

After (instant):
Parent [Grade: Σ 13]
├─ Child A [Grade: 8]
└─ Child B [Grade: 5]

New calculation: 8 + 5 = 13
```

**Use Cases:**

**Maturity Scoring:**
```
▼ ISO 27001 Implementation [Grade: Σ 279] ← Overall maturity
   
With 93 controls, each scored 1-5:
- Maximum possible: 93 × 5 = 465
- Current: 279
- Maturity percentage: 279/465 = 60%

Interpretation: Organization is 60% mature in ISO 27001 implementation
```

**Risk Aggregation:**
```
▼ Enterprise Risk Register [Grade: Σ 185] ← Total risk exposure
   ├─ ▼ Cyber Risks [Grade: Σ 75]
   │  ├─ Ransomware [Grade: 9]
   │  ├─ Data Breach [Grade: 8]
   │  └─ ... (more risks)
   │
   ├─ ▼ Operational Risks [Grade: Σ 58]
   └─ ▼ Financial Risks [Grade: Σ 52]

Higher total = Higher overall risk exposure
Use for board reporting and trend analysis
```

**Performance Scoring:**
```
▼ Team Performance Review [Grade: Σ 87]
   ├─ Technical Skills [Grade: 9]
   ├─ Communication [Grade: 8]
   ├─ Leadership [Grade: 7]
   ├─ Problem Solving [Grade: 9]
   └─ Collaboration [Grade: 8]

Total: 41/50 possible = 82% performance score
```

**Gap Analysis:**
```
▼ SOC 2 Readiness [Grade: Σ 156]

Target: All controls at Level 4 (managed) = 200
Current: 156
Gap: 44 points
Action: Focus on controls still at Level 2-3
```

---

### 9.4 Sequential Enforcement

**Purpose:** Force users to complete items in order (no skipping ahead)

**What It Is:**

Sequential enforcement locks later items until earlier items are complete:

```
☑ Step 1: Submit application (done - unlocked next)
☑ Step 2: Background check (done - unlocked next)
☐ Step 3: Sign contract (can do now - current step)
🔒 Step 4: Complete orientation (locked - cannot do until Step 3)
```

**When to Use:**

**✅ Use Sequential Order When:**

**True Dependencies:**
```
Software Deployment:
1. ☑ Set up server (must be first)
2. ☑ Install database (requires server)
3. ☐ Deploy application (requires database)
4. 🔒 Run tests (requires application)

Cannot test before deploying!
```

**Compliance Requirements:**
```
Employee Onboarding (Legal Requirements):
1. ☑ Offer letter signed
2. ☑ Background check passed
3. ☐ I-9 form completed
4. 🔒 System access granted (cannot give access before I-9)
```

**Training Modules:**
```
Security Training:
1. ☑ Module 1: Introduction
2. ☐ Module 2: Password Security
3. 🔒 Module 3: Advanced Topics (requires Module 2)
4. 🔒 Final Exam (requires all modules)
```

**Audit Trails:**
```
Quality Process:
1. ☑ Inspect product
2. ☐ Approve or reject
3. 🔒 Ship product (cannot ship until approved)

Ensures proper audit trail
```

**❌ Don't Use Sequential Order When:**

**Independent Tasks:**
```
Evidence Collection:
- Collect policy documents (can do anytime)
- Collect logs (can do anytime)
- Collect screenshots (can do anytime)

These are independent - no need for order
```

**Parallel Work:**
```
Multi-Team Project:
- IT Team: Configure servers
- Security Team: Set up firewall
- HR Team: Create training materials

Teams work in parallel - don't enforce sequence
```

**Flexible Workflows:**
```
Bug Fixes:
- Fix Bug #123
- Fix Bug #456
- Fix Bug #789

Can fix in any order based on priority changes
```

**How to Enable:**

**During Workflow Creation:**
- Some templates have sequential order pre-configured
- Check "Sequential Order" checkbox in workflow settings

**After Creation:**
- Access workflow settings (implementation-specific)
- Toggle "Sequential Order Enforcement"
- Applies immediately to workflow

**User Experience:**

**Locked Items:**

```
🔒 Locked Item
   Hover message: "Complete previous items first"
   Checkbox disabled (grayed out)
   Can still view content (description, attachments)
   Just cannot mark as done
```

**Progression:**

```
Initial State:
☐ Step 1 (can do)
🔒 Step 2 (locked)
🔒 Step 3 (locked)

After completing Step 1:
☑ Step 1 (done)
☐ Step 2 (now unlocked)
🔒 Step 3 (still locked)

After completing Step 2:
☑ Step 1 (done)
☑ Step 2 (done)
☐ Step 3 (now unlocked)
```

**Per-Parent Enforcement:**

Sequential order applies within each parent, not globally:

```
▼ Parent A
   ├─ ☐ Task A1 (can do)
   └─ 🔒 Task A2 (locked until A1 done)

▼ Parent B
   ├─ ☐ Task B1 (can do)
   └─ 🔒 Task B2 (locked until B1 done)

Task A1 and Task B1 can both be done simultaneously
(Sequential within each parent, parallel between parents)
```

**Benefits:**

**Quality Assurance:**
```
Cannot skip required steps
Ensures proper process followed
Reduces errors from skipping prerequisites
```

**Compliance:**
```
Audit trail shows ordered completion
Proves proper procedure followed
Meets regulatory requirements
```

**Training Effectiveness:**
```
Learners must complete basics before advanced topics
Ensures knowledge progression
Prevents confusion from jumping ahead
```

**Drawbacks:**

**Reduced Flexibility:**
```
If Step 1 is blocked, entire workflow is blocked
Cannot work on Step 3 while waiting for Step 1
May slow down parallel teams
```

**Workaround:**
```
If you need sequential for most items but have a few that can be parallel:
- Don't use sequential enforcement globally
- Use status tags to track order
- Use descriptions to note dependencies
```

**Best Practice:**

Use sequential enforcement sparingly:

```
✅ Use for: Critical compliance processes with legal dependencies
✅ Use for: Training modules with knowledge prerequisites
✅ Use for: Deployment steps with technical dependencies

❌ Avoid for: General project management
❌ Avoid for: Flexible workflows
❌ Avoid for: Parallel team work
```

---

---

## CHAPTER 10: EXPAND/COLLAPSE NAVIGATION

Efficiently navigate large workflows by controlling visibility.

### 10.1 Individual Unit Collapse

**Purpose:** Show/hide children for specific units

**Chevron Button:**

Located at the far left of each unit that has children:

```
▼ Unit with children (expanded - children visible)
▶ Unit with children (collapsed - children hidden)
  Unit with no children (no chevron)
```

**Click Behavior:**

**Expanded (▼):**
- Click chevron
- Children hide
- Chevron changes to ▶
- Unit header remains visible

**Collapsed (▶):**
- Click chevron
- Children show
- Chevron changes to ▼
- All immediate children become visible

**Example:**

```
Before click (expanded):
▼ Access Control Domain
   ├─ MFA Implementation
   ├─ Password Policy
   └─ Access Reviews

Click ▼ chevron:

After click (collapsed):
▶ Access Control Domain
(Children hidden)
```

**Smart State Preservation:**

When you collapse and re-expand a unit, child states are remembered:

```
Initial State:
▼ Parent
   ├─ ▼ Child A (expanded)
   │  └─ Grandchild A1
   └─ ▶ Child B (collapsed)

Collapse Parent:
▶ Parent
(All hidden)

Re-expand Parent:
▼ Parent
   ├─ ▼ Child A (still expanded - remembers state!)
   │  └─ Grandchild A1
   └─ ▶ Child B (still collapsed - remembers state!)
```

**Benefits:**
- Navigate large workflows efficiently
- Focus on specific sections
- Reduce scrolling
- Maintain context of where you are

**Use Cases:**

**Working on One Section:**
```
Collapse all domains except the one you're working on:
▶ Organizational Controls (collapsed)
▼ People Controls (expanded - working here)
   ├─ A.6.1 Screening
   ├─ A.6.2 Terms
   └─ A.6.3 Training
▶ Physical Controls (collapsed)
▶ Technological Controls (collapsed)

Clean view, focused work
```

**Presentation Mode:**
```
Presenting to client:
1. Collapse all
2. Expand only the section you're discussing
3. Walk through that section
4. Collapse it, expand next section
```

**Progress Review:**
```
Expand completed sections to verify:
▼ Phase 1 [100% complete]
   ├─ ☑ Task A
   ├─ ☑ Task B
   └─ ☑ Task C

Collapse completed, focus on incomplete:
▶ Phase 1 [100% complete] (collapsed - done!)
▼ Phase 2 [20% complete] (expanded - needs work)
```

---

### 10.2 Expand All

**Purpose:** Open entire hierarchy at once

**Location:** Top navigation bar, near workflow controls

**Button Label:** "Expand All" or "▼▼" icon

**Behavior:**

**Click "Expand All":**
1. Every collapsible unit expands (▶ → ▼)
2. All children become visible
3. Entire hierarchy shows
4. Toast notification: "All units expanded"

**Example:**

```
Before (mixed states):
▶ Access Control
▼ Network Security
   ├─ ▶ Firewall
   └─ ▼ IDS
      └─ Configuration
▶ Physical Security

After clicking "Expand All":
▼ Access Control
   ├─ User Access
   ├─ Authentication
   └─ Authorization
▼ Network Security
   ├─ ▼ Firewall
   │  ├─ Rules
   │  └─ Logging
   └─ ▼ IDS
      ├─ Configuration
      ├─ Alerts
      └─ Monitoring
▼ Physical Security
   ├─ Perimeter
   └─ Entry Points

Everything visible
```

**Visual Feedback:**

**Toast Notification:**
```
┌────────────────────────────┐
│ ✓ All units expanded       │
└────────────────────────────┘
```

Appears briefly (3-5 seconds) then disappears.

**When to Use:**

**Initial Overview:**
```
Open new workflow for first time
Click "Expand All"
Get complete view of structure
Understand full scope
```

**Find Specific Item:**
```
Looking for a specific control
Expand All to make everything visible
Use browser Find (Ctrl+F)
Search for control name
```

**Export Preparation:**
```
Before exporting to board:
1. Expand All
2. Review complete structure
3. Verify everything is correct
4. Then export
```

**Client Demo:**
```
"Let me show you the complete framework..."
Click Expand All
Client sees full hierarchy
Impressive visual of comprehensive coverage
```

**Audit Review:**
```
Auditor wants to see everything:
Expand All
Scroll through entire workflow
Auditor can review completeness
```

**Caution:**

**Large Workflows:**
```
Workflow with 500+ units:
Expand All might be slow
Browser may struggle with rendering
Consider expanding sections individually instead
```

**Workaround for very large workflows:**
```
Instead of Expand All:
1. Collapse All first
2. Expand Level 1 only
3. Then expand specific Level 2 sections as needed
```

---

### 10.3 Collapse All

**Purpose:** Hide all children for clean overview

**Location:** Top navigation bar, next to "Expand All"

**Button Label:** "Collapse All" or "▲▲" icon

**Behavior:**

**Click "Collapse All":**
1. Every unit with children collapses (▼ → ▶)
2. All children hide
3. Only top-level units visible
4. Toast notification: "All units collapsed"

**Example:**

```
Before (fully expanded):
▼ Access Control
   ├─ User Access
   ├─ Authentication
   └─ Authorization
▼ Network Security
   ├─ ▼ Firewall
   │  ├─ Rules
   │  └─ Logging
   └─ IDS
▼ Physical Security
   ├─ Perimeter
   └─ Entry Points

After clicking "Collapse All":
▶ Access Control
▶ Network Security
▶ Physical Security

Clean, high-level view
```

**Visual Feedback:**

**Toast Notification:**
```
┌────────────────────────────┐
│ ✓ All units collapsed      │
└────────────────────────────┘
```

**Default State:**

Many implementations default to "Collapse All" on first visit:

```
First time opening workflow:
▶ Domain 1
▶ Domain 2
▶ Domain 3

Clean introduction, not overwhelming
User expands what they need
```

**When to Use:**

**Get High-Level Overview:**
```
What are the main sections?
Collapse All
See Level 1 structure
▶ Organizational Controls
▶ People Controls
▶ Physical Controls
▶ Technological Controls

Clear high-level view
```

**Start Fresh:**
```
Workflow is messy (random sections expanded)
Click Collapse All
Clean slate
Expand only what you need now
```

**Before Presenting:**
```
About to share screen with client:
Collapse All
Controlled, professional view
Expand sections deliberately as you discuss them
```

**Progress Overview:**
```
Collapse All
See progress bars on top-level units:
▶ Phase 1 [Progress: ██████████ 100%]
▶ Phase 2 [Progress: ████░░░░░░ 40%]
▶ Phase 3 [Progress: ░░░░░░░░░░ 0%]

Quick status check without details
```

**Performance:**
```
Workflow is slow (too much expanded):
Collapse All
Reduces rendering overhead
Improves performance
```

---

### 10.4 State Persistence

**Purpose:** Remember which units are expanded/collapsed across sessions

**How It Works:**

**Browser Storage:**
- Collapse/expand states saved to browser local storage
- Per-workflow basis (each workflow has its own state)
- Automatic (no manual save needed)

**When State Saves:**

```
You expand a unit:
→ State saves: "Unit ABC is expanded"

You collapse a unit:
→ State saves: "Unit XYZ is collapsed"

Saves immediately on each action
```

**When State Restores:**

```
Scenarios that restore state:
1. Reload page (F5)
2. Close tab, reopen later
3. Navigate away, come back
4. Browser crash recovery
5. Next day's work session

Your expand/collapse preferences remembered
```

**Example:**

```
Monday 9 AM - First Session:
You expand:
▼ Access Control
   ├─ MFA Implementation
   └─ Password Policy

You collapse:
▶ Network Security
▶ Physical Security

Close browser, go home.

Tuesday 9 AM - Next Session:
Reopen workflow:
▼ Access Control (still expanded!)
   ├─ MFA Implementation
   └─ Password Policy
▶ Network Security (still collapsed!)
▶ Physical Security (still collapsed!)

Exactly as you left it
```

**Per-Workflow Tracking:**

Each workflow has independent state:

```
Workflow A:
▼ Section 1 (expanded)
▶ Section 2 (collapsed)

Workflow B:
▶ Section 1 (collapsed)
▼ Section 2 (expanded)

Different states for each workflow
```

**Benefits:**

**Productivity:**
```
Don't waste time re-expanding same sections every day
Pick up exactly where you left off
Maintain your workspace organization
```

**Personalization:**
```
Your preferences are yours
Colleague opens same workflow
They see their own expand/collapse state
No interference
```

**Complex Workflows:**
```
ISO 27001 workflow with 93 controls:
You've carefully expanded only sections you're working on
State persists
Don't have to remember what you were working on
```

**Limitations:**

**Browser-Specific:**
```
State saves in your current browser
Switch to different browser:
→ No saved state (starts fresh)

Use Chrome: Has your state
Switch to Firefox: No state
```

**Device-Specific:**
```
State on your laptop
Switch to mobile:
→ No saved state (starts fresh)

Not cloud-synced across devices
```

**Browser Clears:**
```
Clear browser cache/local storage:
→ State lost

Clear cookies:
→ State lost

Use incognito mode:
→ State doesn't save
```

**Workarounds:**

**If state is lost:**
```
Use "Collapse All" then expand what you need
Or use "Expand All" to see everything
State will start saving again from that point
```

**For presentations:**
```
Before presenting:
Click "Collapse All" (overrides saved state)
Start fresh, controlled view
Your personal state not visible to audience
```

---

**Best Practices:**

**Daily Workflow:**

```
Start of Day:
1. Open workflow
2. States restore from yesterday
3. Continue where you left off

During Day:
- Expand sections as you work on them
- Collapse sections when done
- States save automatically

End of Day:
- Leave workflow in organized state
- Tomorrow you'll start exactly here
```

**Collaboration:**

```
Sharing workflow with colleague:
Your expand/collapse states ≠ Their states
Each person has their own view
Don't worry about messing up their workspace
```

**Performance Tips:**

```
Large workflows (500+ units):
- Keep most sections collapsed
- Expand only what you need now
- Reduces rendering time
- Improves responsiveness
- State persistence helps maintain this
```

**Keyboard Navigation:**

```
Combined with keyboard shortcuts:
1. Collapse All (Alt+C)
2. Use Tab to navigate between top-level units
3. Press Space to expand selected unit
4. Work on that section
5. Press Space to collapse
6. Tab to next unit

(Note: Keyboard shortcuts if implemented)
```

---

---

## CHAPTER 11: WORKFLOW LINKING

Create synchronized workflows that share structure but maintain independent content.

### 11.1 What is Workflow Linking?

**Concept:**

Workflow linking creates a special relationship between two or more workflows where **structural changes** synchronize automatically, but **content remains independent**.

**Analogy:**

Think of linked workflows like franchises:
- **Structure (synchronized):** Same menu items, same categories, same layout
- **Content (independent):** Different staff, different customers, different daily operations

**Example:**

```
Source Workflow: "ISO 27001:2022 Master Framework"
- 4 Domains
- 14 Control Categories  
- 93 Individual Controls
- Empty (just structure)

Linked Workflow 1: "Client A - ISO 27001"
├─ Same structure (4 domains, 14 categories, 93 controls)
├─ Client A's names, descriptions, evidence
├─ Client A's progress (45% complete)
└─ Client A's tags, attachments, notes

Linked Workflow 2: "Client B - ISO 27001"
├─ Same structure (4 domains, 14 categories, 93 controls)
├─ Client B's names, descriptions, evidence
├─ Client B's progress (72% complete)
└─ Client B's tags, attachments, notes

If you add a control to Master → Appears in both Client A and Client B
If you delete a control from Master → Disappears from both clients
If Client A changes a name → Only affects Client A (not Master or Client B)
```

**Why Use Linking?**

**Problem:** You have multiple clients implementing the same regulation:

```
Without Linking (Manual Management):
- Create ISO 27001 workflow for Client A
- ISO adds new control A.5.3
- Manually add A.5.3 to Client A workflow
- Manually add A.5.3 to Client B workflow  
- Manually add A.5.3 to Client C workflow
- Repeat for 10 clients = tedious!
```

**Solution:** Linked workflows automate this:

```
With Linking (Automated):
- Create Master ISO 27001 workflow
- Create linked workflows for Clients A, B, C
- ISO adds new control A.5.3
- Add A.5.3 to Master workflow once
- Automatically appears in all 10 client workflows
- Done in seconds!
```

**Benefits:**

**Structural Consistency:**
```
All clients have identical structure
No missing controls
No drift over time
Compliance uniformity
```

**Efficient Updates:**
```
Update Master once
All linked workflows update automatically
Save hours of manual work
Reduce errors
```

**Multiple Client Management:**
```
1 consultant
10 clients
1 Master workflow
10 linked workflows
Scales efficiently
```

---

### 11.2 Creating Linked Workflows

**Prerequisites:**

1. Have an existing workflow to use as source
2. That workflow should be "stable" (structure mostly finalized)

**Steps:**

1. **Click "New Workflow"** button
2. **Select "Linked Workflow"** option in creation modal
3. **Choose source workflow** from dropdown
   - Shows all your workflows
   - This becomes the "Master" that controls structure
4. **Name the new workflow**
   - Example: "Client A - ISO 27001 Implementation"
5. **Click "Create"**
6. **Linked workflow is created**
   - Same structure as source
   - Empty content (ready for population)
   - Link indicator (🔗) appears

**Creation Modal:**

```
┌──────────────────────────────────────────┐
│  Create New Workflow                  [×]│
├──────────────────────────────────────────┤
│                                          │
│  Creation Method:                        │
│  ○ From Template                         │
│  ○ Empty Workflow                        │
│  ○ Copy Existing Workflow                │
│  ● Linked Workflow (Synchronized)        │
│                                          │
│  Source Workflow:                        │
│  [ISO 27001:2022 Master     ▼]          │
│                                          │
│  New Workflow Name:                      │
│  [Client A - ISO 27001 Implementation_] │
│                                          │
│  ⓘ Structural changes to source will    │
│     automatically sync to this workflow  │
│                                          │
│         [Cancel]  [Create Workflow]      │
└──────────────────────────────────────────┘
```

**After Creation:**

```
Workflow: Client A - ISO 27001 Implementation 🔗
          ↑                                    ↑
          Your name                            Link indicator

Hover over 🔗:
"Linked to: ISO 27001:2022 Master Framework"
```

**Initial State:**

```
Linked workflow has:
✓ Same structure as source (all levels, same hierarchy)
✓ Empty units (no names, descriptions, tags, etc.)
✓ Ready for you to populate with client-specific content

You can now:
- Add names to each control
- Write descriptions
- Add tags
- Add attachments
- Track progress
```

---

### 11.3 How Linking Works

**The Rule:** Structure synchronizes, content is independent.

**What Synchronizes (Structure):**

**Adding Units:**

```
Source Workflow (Master):
You add a new control:
▼ Organizational Controls
   ├─ A.5.1 InfoSec Policy
   ├─ A.5.2 InfoSec Roles
   └─ A.5.3 Separation of Duties ← NEW

Linked Workflow (Client A):
New unit appears automatically:
▼ Organizational Controls
   ├─ A.5.1 InfoSec Policy for Acme
   ├─ A.5.2 InfoSec Roles at Acme
   └─ A.5.3 Separation of Duties ← NEW (empty, ready for content)
```

**Deleting Units:**

```
Source Workflow (Master):
You delete a control:
▼ Organizational Controls
   ├─ A.5.1 InfoSec Policy
   └─ A.5.3 Separation of Duties
   (A.5.2 deleted)

Linked Workflow (Client A):
Unit disappears automatically:
▼ Organizational Controls
   ├─ A.5.1 InfoSec Policy for Acme
   └─ A.5.3 Separation of Duties for Acme
   (A.5.2 removed - content is lost!)
```

⚠️ **Warning:** Deleting from source deletes from ALL linked workflows, including their content!

**Reordering Units:**

```
Source Workflow (Master):
You move control up:
▼ Organizational Controls
   ├─ A.5.3 Separation of Duties ← Moved up
   ├─ A.5.1 InfoSec Policy
   └─ A.5.2 InfoSec Roles

Linked Workflow (Client A):
Order updates automatically:
▼ Organizational Controls
   ├─ A.5.3 Separation of Duties for Acme ← Moved up
   ├─ A.5.1 InfoSec Policy for Acme
   └─ A.5.2 InfoSec Roles at Acme
```

**Level Structure Changes:**

```
Source Workflow (Master):
You can't change levels (defined by template)
But if template changes, structure syncs

Note: Level structure is template-defined,
not user-changeable in workflows
```

---

**What Does NOT Sync (Content):**

**Unit Names:**

```
Source Workflow:
├─ Unit name: "Access Control"

Linked Workflow A:
├─ Unit name: "Access Control Policy for Acme Corp"

Linked Workflow B:
├─ Unit name: "AC Controls - Beta Inc"

Each workflow can have different names
```

**Display IDs:**

```
Source Workflow:
├─ ID: [empty]

Linked Workflow A:
├─ ID: [A.9.1.1] (ISO numbering)

Linked Workflow B:
├─ ID: [AC-001] (Internal numbering)

Each workflow can use different ID schemes
```

**Descriptions:**

```
Source Workflow:
├─ Description: [empty or generic]

Linked Workflow A:
├─ Description: "Acme Corp uses Duo MFA for all admin accounts..."

Linked Workflow B:
├─ Description: "Beta Inc enforces Azure AD MFA for cloud services..."

Client-specific implementation details
```

**Tags:**

```
Source Workflow:
├─ Tags: [none]

Linked Workflow A:
├─ Tags: [Q1-2024] [High-Priority] [IT-Department]

Linked Workflow B:
├─ Tags: [Q2-2024] [Critical] [Security-Team]

Each client has their own tags
```

**Attachments:**

```
Source Workflow:
├─ Attachments: [none]

Linked Workflow A:
├─ Links: Acme's access control policy
├─ Images: Acme's MFA configuration screenshots
├─ Notes: Acme's implementation decisions

Linked Workflow B:
├─ Links: Beta's access control policy
├─ Images: Beta's MFA configuration screenshots
├─ Notes: Beta's implementation decisions

Each client has their own evidence
```

**Completion Status:**

```
Source Workflow:
├─ Done: [unchecked]

Linked Workflow A:
├─ Done: [☑] Acme completed this

Linked Workflow B:
├─ Done: [☐] Beta hasn't done this yet

Each client tracks their own progress
```

**Grades:**

```
Source Workflow:
├─ Grade: [empty]

Linked Workflow A:
├─ Grade: 4 (Acme's maturity level)

Linked Workflow B:
├─ Grade: 2 (Beta's maturity level)

Each client has their own scores
```

**Workflow-Level Settings:**

```
Source Workflow:
Name: "ISO 27001:2022 Master"
Icon: 🔒
Description: "Master template for clients"
Sequential Order: Disabled

Linked Workflow A:
Name: "Acme Corp - ISO 27001"
Icon: 🏢 (different icon)
Description: "Acme's implementation project"
Sequential Order: Enabled (different setting)

Workflow-level settings are independent
```

---

**Synchronization Timing:**

**Real-Time (or Near Real-Time):**

```
1. You edit source workflow (add/delete/reorder)
2. Click Save Structure
3. System detects linked workflows
4. Updates propagate (usually within seconds)
5. Linked workflows refresh automatically
```

**User Experience:**

**On Source Workflow:**
```
You make structural change
Save occurs
Toast notification (optional): "2 linked workflows updated"
```

**On Linked Workflow:**
```
User working in linked workflow
Structural change syncs in background
Page may refresh or auto-update
User's content (names, tags, etc.) preserved
New units appear ready for content
```

**Conflict Resolution:**

Rare, but if user is editing linked workflow when sync occurs:
- Auto-save ensures no content loss
- Structure updates merge with content edits
- User's content always preserved
- May need to refresh browser to see latest structure

---

### 11.4 Unlinking Workflows

**Purpose:** Break the synchronization link and make workflow independent

**Why Unlink:**

**Workflow Has Diverged:**
```
Started with standard ISO 27001
Client has unique requirements
Need to add custom controls
Need to remove non-applicable controls
Unlink to modify structure freely
```

**Source is Deprecated:**
```
ISO 27001:2013 was source
ISO 27001:2022 is new standard
Old workflows should unlink
Update manually or create new linked workflows
```

**Project Complete:**
```
Implementation finished
Workflow is archived
No longer need updates from source
Unlink for closure
```

**How to Unlink:**

1. **Open linked workflow**
2. **Look for link indicator (🔗)** next to workflow name
3. **Click "Unlink" button** (near workflow name or in settings)
4. **Confirmation modal appears:**

```
┌──────────────────────────────────────────┐
│  Unlink Workflow?                     [×]│
├──────────────────────────────────────────┤
│                                          │
│  This workflow is currently linked to:   │
│  "ISO 27001:2022 Master Framework"       │
│                                          │
│  If you unlink:                          │
│  ✓ Workflow becomes independent          │
│  ✓ You can modify structure freely       │
│  ✓ No more automatic structure updates   │
│                                          │
│  ✗ Cannot re-link later                  │
│  ✗ This action cannot be undone          │
│                                          │
│  Are you sure?                           │
│                                          │
│         [Cancel]  [Unlink Workflow]      │
└──────────────────────────────────────────┘
```

5. **Click "Unlink Workflow"**
6. **Link indicator (🔗) disappears**
7. **Workflow is now independent**

**After Unlinking:**

```
Before:
Workflow: Client A - ISO 27001 🔗
(Linked to Master)

After:
Workflow: Client A - ISO 27001
(No link indicator - independent)

Can now:
- Add units freely
- Delete units without affecting others
- Reorganize structure
- No synchronization from source
```

**Important Notes:**

**Permanent Action:**
```
Cannot re-link after unlinking
One-way operation
Think carefully before unlinking
```

**Content Preserved:**
```
All your names, descriptions, tags, attachments preserved
Only the link relationship is broken
Nothing else changes
```

**Source Unaffected:**
```
Unlinking doesn't affect source workflow
Source can still have other linked workflows
Only breaks this specific link
```

---

### 11.5 Use Cases

**Multi-Client Consulting:**

**Scenario:** You have 15 clients all implementing ISO 27001

**Without Linking:**
```
- Create 15 separate workflows
- ISO updates to 2022 version
- Manually update 15 workflows (hours of work)
- Risk of inconsistency
```

**With Linking:**
```
- Create 1 Master workflow (ISO 27001:2022)
- Create 15 linked workflows
- ISO update: Modify Master once
- All 15 clients update automatically (seconds)
- Guaranteed consistency
```

**Implementation:**

```
Master: "ISO 27001:2022 Master"
├─ Maintained by consultant
├─ Updated when regulation changes
├─ Structure only (no client content)

Linked:
├─ "Acme Corp - ISO 27001"
├─ "Beta Inc - ISO 27001"
├─ "Gamma Ltd - ISO 27001"
├─ ... (12 more)

Each client:
- Same 93 controls
- Own descriptions
- Own evidence
- Own progress
```

---

**Regional Variations:**

**Scenario:** Multi-national company needs region-specific compliance

**Structure:**

```
Master: "Global GDPR Compliance Framework"
├─ All GDPR requirements
├─ Maintained by legal team
├─ Updates when GDPR guidance changes

Linked Workflows:
├─ "EU Headquarters - GDPR"
│  └─ DPO: EU-based, EU-specific interpretations
├─ "UK Branch - GDPR"
│  └─ DPO: UK-based, Brexit considerations
├─ "US Operations - GDPR"
│  └─ Privacy Shield considerations, US context

Same requirements, regional adaptations
```

---

**Department-Specific Views:**

**Scenario:** Company-wide information security program

**Structure:**

```
Master: "Enterprise InfoSec Program"
├─ All security controls
├─ Maintained by CISO
├─ Company-wide requirements

Linked Workflows (By Department):
├─ "IT Department - InfoSec"
│  ├─ IT focuses on technical controls
│  ├─ Tags: servers, networks, endpoints
│  └─ Progress: 85% complete
│
├─ "HR Department - InfoSec"
│  ├─ HR focuses on people controls
│  ├─ Tags: onboarding, training, background checks
│  └─ Progress: 92% complete
│
├─ "Finance Department - InfoSec"
│  ├─ Finance focuses on financial data protection
│  ├─ Tags: payment systems, financial records
│  └─ Progress: 78% complete

Each department:
- Sees same overall program
- Focuses on their responsibilities
- Tracks their own progress
- CISO sees all departments' progress
```

---

**Template Testing:**

**Scenario:** Want to test template changes before deploying to clients

**Workflow:**

```
Master: "ISO 27001 Production"
├─ 15 clients linked to this
├─ Stable version

Test: "ISO 27001 Test Environment"
├─ NOT linked (independent)
├─ Test new controls here
├─ Experiment with structure changes
├─ Get feedback

Once tested:
1. Apply changes to Production Master
2. All 15 clients get updates
3. Changes are proven in test first
```

---

**Best Practices:**

**Master Workflow Maintenance:**

```
✅ Keep Master clean (structure only, minimal content)
✅ Document changes in Master workflow description
✅ Test changes before applying to Master
✅ Communicate with clients before major structural changes
✅ Regular review (quarterly) of Master structure

❌ Don't delete units from Master unless absolutely necessary
❌ Don't make impulsive structural changes
❌ Don't forget you have linked workflows
```

**Linked Workflow Management:**

```
✅ Name linked workflows clearly (include client name)
✅ Populate with client-specific content
✅ Track progress independently
✅ Use tags to organize client needs

❌ Don't try to modify structure (will be overwritten)
❌ Don't unlink unless you have good reason
```

**Communication:**

```
When making Master changes:
1. Review impact (how many linked workflows affected)
2. Notify users if major change
3. Provide guidance on what changed
4. Give time to adapt
```

**Scaling:**

```
1-5 clients: Manual management might be ok
6-15 clients: Linking becomes valuable
16+ clients: Linking is essential
50+ clients: Consider automation tools
```

---

---

## CHAPTER 12: EXPORTING TO BOARDS

Transition from strategic planning (Workflows) to tactical execution (Boards).

### 12.1 Understanding Export

**The Three-Tier System:**

```
Tier 1: Templates
↓ Define structure
Tier 2: Workflows (Macro-level strategic mapping)
↓ Export to execution
Tier 3: Boards (Micro-level task management)
```

**Workflow vs. Board:**

**Workflows (Strategic):**
```
Purpose: Map requirements, structure frameworks
Level: Macro (high-level)
Users: Consultants, managers, planners
Example: "ISO 27001 has 93 controls across 4 domains"
```

**Boards (Tactical):**
```
Purpose: Execute tasks, track progress
Level: Micro (day-to-day operations)
Users: Implementation teams, employees
Example: "Create MFA policy document (Due: Friday)"
```

**Why Export:**

**Separation of Concerns:**
```
Consultant (Workflow):
- Creates compliance framework
- Maps all requirements
- Provides reference structure
- Updates when regulations change

Client (Board):
- Creates specific tasks
- Assigns team members
- Sets deadlines
- Tracks daily progress

Each works in their appropriate tier
```

**Example:**

```
Workflow: "GDPR Compliance Framework"
├─ High-level requirement: "Implement data encryption"
├─ Description: "All personal data must be encrypted..."
├─ Links: GDPR Article 32 reference

Export to Board ↓

Board: "GDPR Implementation Project"
├─ Dynamic List (Reference): 
│  └─ Shows full workflow structure (read-only)
│
└─ Columns (Execution):
   ├─ To Do
   │  ├─ Task: Research encryption tools
   │  ├─ Task: Get budget approval for tool
   │  └─ Task: Schedule training session
   │
   ├─ In Progress
   │  └─ Task: Install encryption software
   │
   └─ Done
      └─ Task: Draft encryption policy

Reference stays synchronized with workflow
Tasks are client's execution plan
```

---

### 12.2 Export Options

**Three Export Methods:**

1. **Full Workflow Export** (most common)
2. **Unit Export** (selective)
3. **Tag-Based Export** (filtered)

---

**1. Full Workflow Export:**

**What It Is:**
- Exports entire workflow structure
- All units at all levels
- Complete hierarchy
- All content (names, descriptions, attachments)

**When to Use:**
```
✅ Starting new implementation project
✅ Client needs complete framework
✅ First-time export to board
✅ Comprehensive reference needed
```

**Example:**

```
Workflow: "ISO 27001:2022 Implementation"
├─ 4 Domains
├─ 14 Categories
└─ 93 Controls

Export Full Workflow ↓

Board: "ISO 27001 Project"
└─ Dynamic List contains all 93 controls
   Organized in 4 domains → 14 categories → 93 controls
```

**How to Export Full Workflow:**

1. Open workflow
2. Click "Export to Board" button (top navigation)
3. Choose "Full Workflow" option
4. Select destination:
   - Create new board
   - Or add to existing board
5. Confirm
6. Board created/updated with complete workflow structure

---

**2. Unit Export (Selective):**

**What It Is:**
- Exports single unit and all its children
- Targeted subset of workflow
- Focused deployment

**When to Use:**
```
✅ Working on specific domain/section
✅ Phase 1 implementation (expand later)
✅ Department-specific assignment
✅ Sprint-focused work
```

**Example:**

```
Workflow: "ISO 27001:2022 Implementation"
├─ Organizational Controls
├─ People Controls ← Export just this one
│  ├─ A.6.1 Screening
│  ├─ A.6.2 Terms and Conditions
│  ├─ A.6.3 Training and Awareness
│  └─ ... (more controls)
├─ Physical Controls
└─ Technological Controls

Export "People Controls" Unit ↓

Board: "HR - ISO 27001 People Controls"
└─ Dynamic List contains only:
   └─ People Controls
      ├─ A.6.1 Screening
      ├─ A.6.2 Terms and Conditions
      └─ A.6.3 Training and Awareness
   (Other domains not included)
```

**Use Case:**

```
Scenario: Large ISO 27001 project, want to focus HR on their controls

1. In workflow, find "People Controls" unit
2. Click "Board" button on that unit (usually in unit header)
3. Select "Export this unit"
4. Create board: "HR - People Controls Implementation"
5. HR team sees only their relevant controls
6. Reduces complexity, increases focus
```

**How to Export Unit:**

1. Open workflow
2. Navigate to specific unit you want to export
3. Click "Board" icon/button on unit header
4. Choose export options:
   - Include children: Yes/No
   - Target board
5. Confirm
6. Selected unit (and children if selected) exported to board
7. Board named: "Workflow Name: Unit Name"

---

**3. Tag-Based Export (Filtered):**

**What It Is:**
- Filter workflow by tag
- Export only tagged units
- Can be from across multiple sections
- Sprint-sized batches

**When to Use:**
```
✅ Sprint planning (export [Sprint-1] tagged items)
✅ Priority-based deployment (export [High-Priority])
✅ Time-based phases (export [Q1-2024])
✅ Team-specific work (export [IT-Department])
✅ Audit preparation (export [Audit-Ready])
```

**Example:**

```
Workflow: "ISO 27001:2022 Implementation"
├─ Organizational Controls
│  ├─ A.5.1 InfoSec Policy [Sprint-1] [High-Priority]
│  ├─ A.5.2 InfoSec Roles [Sprint-2]
│  └─ A.5.3 Separation of Duties [Sprint-1] [High-Priority]
├─ People Controls
│  ├─ A.6.1 Screening [Sprint-1] [HR-Department]
│  └─ A.6.2 Terms [Sprint-2]
└─ Physical Controls
   └─ A.7.1 Perimeter [Sprint-3]

Filter by tag: [Sprint-1]
Export ↓

Board: "ISO 27001 - Sprint 1"
└─ Dynamic List contains only Sprint-1 items:
   ├─ A.5.1 InfoSec Policy
   ├─ A.5.3 Separation of Duties
   └─ A.6.1 Screening
   (Items from multiple domains, but all Sprint-1)
   
Tag becomes board label/category
```

**Workflow:**

```
1. Open workflow
2. Click tag filter
3. Select tag (e.g., [Sprint-1])
4. Workflow shows only tagged units
5. Click "Export Tag to Board" button
6. Choose board destination
7. Confirm
8. Only tagged items export to board
```

**Best Practices:**

**Sprint Planning:**
```
1. Tag workflow units by sprint: [Sprint-1], [Sprint-2], [Sprint-3]
2. Export [Sprint-1] to board
3. Team works on Sprint 1
4. When Sprint 1 complete, export [Sprint-2]
5. Continuous delivery in manageable batches
```

**Priority-Based:**
```
1. Tag by priority: [Critical], [High], [Medium], [Low]
2. Export [Critical] first
3. Deploy critical controls
4. Then export [High], etc.
5. Risk-based implementation
```

**Time-Phased:**
```
1. Tag by quarter: [Q1-2024], [Q2-2024], [Q3-2024], [Q4-2024]
2. Export Q1 in January
3. Team has 3 months to complete
4. Export Q2 in April
5. Annual roadmap in quarterly increments
```

---

### 12.3 Export Process

**Step-by-Step Export Workflow:**

**Step 1: Prepare Workflow**

```
Before exporting:
✓ Finalize structure
✓ Verify names and IDs
✓ Add descriptions
✓ Attach reference links
✓ Apply tags if using tag-based export
✓ Review for completeness
```

**Step 2: Select Export Method**

```
Options:
○ Full Workflow (all units)
○ Unit Export (specific section)
○ Tag-Based Export (filtered view)

Choose based on use case
```

**Step 3: Choose Destination**

```
Export Target:
○ Create New Board
   └─ Name: [_____________________]
   └─ Board Type: [Standard/Custom]

○ Add to Existing Board
   └─ Board: [Select from dropdown ▼]
   └─ Target Dynamic List: [Select ▼]

Most common: Create New Board
```

**Step 4: Configure Export Settings**

```
Export Options:

[✓] Include Descriptions
[✓] Include Links
[✓] Include Images
[✓] Include Notes
[✓] Include Comments
[✓] Include Completion Status

[✓] Maintain hierarchy in Dynamic List
[✓] Preserve tags (as board labels)
[✓] Sync future workflow changes

Default: Check all (include everything)
```

**Step 5: Review and Confirm**

```
Export Summary:
─────────────────────────────
Source Workflow: ISO 27001:2022
Export Method: Full Workflow
Destination: New Board
Board Name: ISO 27001 Implementation

Units to export: 93
Levels: 4
Tags: Yes
Descriptions: Yes
Attachments: Yes
─────────────────────────────

[Cancel] [Confirm Export]
```

**Step 6: Export Executes**

```
Progress:
▓▓▓▓▓▓▓▓▓▓░░░░░░ 60% (56/93 units exported)

Takes a few seconds for small workflows
May take 1-2 minutes for large workflows (500+ units)
```

**Step 7: Export Complete**

```
Success!
Workflow exported to board.

Board: "ISO 27001 Implementation"
[Open Board] [Stay in Workflow]

Toast notification: "93 units exported successfully"
Board opens in new tab
```

**Post-Export:**

```
What happens after export:

In Workflow:
- Workflow unchanged
- Can continue editing
- Changes can sync to board (if enabled)

In Board:
- New board created (or existing board updated)
- Dynamic List contains workflow structure (reference)
- Workspace (columns) ready for task creation
- Two-panel interface
```

---

### 12.4 What Gets Exported

**Preserved (Included in Export):**

**Structural:**
```
✓ All unit names
✓ Unit hierarchy (parent-child relationships)
✓ Display IDs
✓ Unit icons
✓ Level structure
✓ Unit order
✓ Hierarchy context (which parent a unit belongs to)
```

**Content:**
```
✓ Descriptions (rich text formatting)
✓ Tags (become board labels/categories)
✓ Links (URLs with titles)
✓ Images (thumbnails + full-size)
✓ Notes (formatted notes)
✓ Comments (if implemented)
✓ Completion status (done/not done)
```

**Example Export:**

```
Workflow Unit:
─────────────────────────────────────────
Name: Multi-Factor Authentication
ID: A.9.4.3
Icon: 🔐
Description: Implement MFA for all admin accounts...
Tags: [High-Priority], [IT-Department], [Q1-2024]
Links: 
  - NIST MFA Guidance (https://...)
  - Duo Setup Guide (https://...)
Images:
  - MFA Configuration Screenshot.png
Notes:
  - "Decision: Use Duo for cloud, Okta for on-prem"
Completion: ☑ Done
─────────────────────────────────────────

All of this exports to Dynamic List ↓

Board Dynamic List Entry:
─────────────────────────────────────────
🔐 A.9.4.3 - Multi-Factor Authentication
[High-Priority] [IT-Department] [Q1-2024]

Description: Implement MFA for all admin accounts...

Links:
  📎 NIST MFA Guidance
  📎 Duo Setup Guide

Images:
  🖼️ MFA Configuration Screenshot.png

Notes:
  📝 Decision: Use Duo for cloud, Okta for on-prem

Status: ☑ Complete
─────────────────────────────────────────

Read-only reference in Dynamic List
Team creates tasks in board columns based on this
```

---

**Transformed (How Content Changes):**

**Units → Cards/List Items:**
```
Workflow: Hierarchical units
Board: Units become items in Dynamic List

Hierarchy maintained:
▼ Level 1: Domain
   ├─ Level 2: Category
   │  └─ Level 3: Control (clickable item)
```

**Hierarchy → Dynamic List:**
```
Workflow: Nested structure
Board: Tree view in Dynamic List panel

Full tree visible
Expand/collapse maintained
Reference for task creation
```

**Tags → Board Labels:**
```
Workflow Tags: [Sprint-1], [High-Priority]
Board Labels: Sprint-1, High-Priority

Tags become filterable labels
Use for board filtering
Apply to tasks
```

**Structure → Backlog/Reference:**
```
Workflow: Complete framework
Board: Reference structure (Dynamic List)

Workflow structure = What needs to be done
Board tasks = How we're doing it
```

---

### 12.5 Post-Export Workflow

**Immediately After Export:**

**Board Opens:**
```
Board opens in new tab
Shows two-panel interface:
├─ Left: Dynamic List (workflow reference)
└─ Right: Workspace (columns for tasks)
```

**Consultant Configures References:**

**Dynamic List Panel:**
```
✓ Verify all units exported correctly
✓ Check hierarchy is intact
✓ Confirm descriptions visible
✓ Test expand/collapse
✓ Review links and attachments
✓ Ensure tags converted to labels
```

**Board Structure:**
```
✓ Set up columns (To Do, In Progress, Done, etc.)
✓ Create milestones (if time-based)
✓ Define categories (if needed)
✓ Configure board settings
✓ Set up assignments (if known)
```

**Client Manages Workspace:**

**Task Creation:**
```
1. Review item in Dynamic List
2. Read requirements
3. Click "Create Task from Reference"
4. Task appears in column
5. Assign to team member
6. Set due date
7. Track progress
```

**Two-Panel Interface:**

```
┌──────────────┬─────────────────────────────────────┐
│ Dynamic List │   Workspace (Kanban Columns)        │
│ (Reference)  │                                     │
│ (Read-Only)  │   To Do  │ In Progress │ Done      │
│              │          │             │            │
│ ▼ ISO 27001  │  ┌─────┐│  ┌─────┐   │ ┌─────┐   │
│   ├─ Org     │  │Task ││  │Task │   │ │Task │   │
│   │  └─ A.5.1│  │ #1  ││  │ #2  │   │ │ #3  │   │
│   │     🔐   │  └─────┘│  └─────┘   │ └─────┘   │
│   │     MFA  │          │             │            │
│   │          │  ┌─────┐│             │ ┌─────┐   │
│   ├─ People  │  │Task ││             │ │Task │   │
│   │  └─ A.6.1│  │ #4  ││             │ │ #5  │   │
│   │     👤   │  └─────┘│             │ └─────┘   │
│   │  Training│          │             │            │
│   │          │          │             │            │
│   └─ Physical│          │             │            │
│              │          │             │            │
└──────────────┴─────────────────────────────────────┘

Left: Framework reference (what to do)
Right: Tasks (how we're doing it)
```

**Workflow Example:**

```
1. Team member opens board
2. Looks at Dynamic List
3. Sees: "A.5.1 Information Security Policy"
4. Clicks to read full description
5. Reviews requirements
6. Creates task: "Draft InfoSec Policy"
7. Assigns to policy writer
8. Sets due date: Friday
9. Moves task to "In Progress" when started
10. Moves to "Done" when complete
11. References A.5.1 remains in Dynamic List
```

**Consultant vs. Client Roles:**

**Consultant (Dynamic List):**
```
✅ Maintains workflow (source of truth)
✅ Updates Dynamic List via workflow changes
✅ Adds new requirements
✅ Updates guidance
✅ Controls framework structure
❌ Does not manage tasks
❌ Does not assign work
❌ Does not set deadlines
```

**Client (Workspace):**
```
✅ Creates tasks based on references
✅ Assigns team members
✅ Sets deadlines
✅ Tracks progress
✅ Manages milestones
✅ Organizes work in columns
❌ Cannot edit Dynamic List
❌ Cannot change framework
❌ Cannot modify requirements
```

**Best Practices:**

**After Export:**
```
✅ Review Dynamic List completeness
✅ Set up board columns appropriately
✅ Create initial milestones
✅ Train team on two-panel interface
✅ Explain difference between reference and tasks
✅ Show how to create tasks from references
```

**Ongoing:**
```
✅ Update workflow when requirements change
✅ Monitor sync between workflow and Dynamic List
✅ Communicate workflow updates to team
✅ Review alignment between reference and execution
✅ Archive completed boards
```

---

---

## CHAPTER 13: KEYBOARD SHORTCUTS

Accelerate your workflow with keyboard shortcuts (when implemented).

### 13.1 Workflow Management

**Note:** Keyboard shortcuts may not be fully implemented in current version. Check documentation or press `?` key to see available shortcuts.

**New Workflow:**
```
Ctrl+N (Windows/Linux)
Cmd+N (Mac)

Opens "Create New Workflow" modal
Quickly start new workflow without clicking button
```

**Toggle Mode:**
```
Ctrl+E (Windows/Linux)
Cmd+E (Mac)

Switches between Creation Mode (green) and Execution Mode (blue)
Fast toggle without clicking mode switch
```

**Focus Workflow Selector:**
```
Ctrl+F (Windows/Linux)
Cmd+F (Mac)

Jumps to workflow dropdown
Type to search/filter workflows
Press Enter to open selected workflow
```

**Add Root Unit:**
```
Ctrl+A (Windows/Linux)
Cmd+A (Mac)

Adds new root-level unit
Skips clicking "+ Add" button
Unit appears at bottom of workflow
```

**Save (Manual):**
```
Ctrl+S (Windows/Linux)
Cmd+S (Mac)

Manually triggers save
Useful before exports or closing
(Auto-save already runs every 5 seconds)
```

**Use Cases:**

**Rapid Unit Creation:**
```
1. Ctrl+A (add root unit)
2. Type unit name
3. Tab (move to next field)
4. Enter description
5. Ctrl+A (add another)
6. Repeat

Create multiple units quickly without mouse
```

**Mode Switching:**
```
Working in Creation Mode:
- Add units, edit structure
- Ctrl+E (switch to Execution)
- Check some Done boxes
- Ctrl+E (switch back to Creation)
- Continue editing

Seamless switching
```

---

### 13.2 Navigation and Interface

**Close Modals:**
```
ESC

Closes any open modal/dialog
Quick cancel without clicking X or Cancel button
```

**Submit Forms:**
```
Enter

Submits active form
Works in:
- Create workflow modal
- Add tag modal
- Add link modal
- Rename workflow
- Any text input
```

**Tab Navigation:**
```
Tab

Moves to next field
Standard form navigation
Skip through fields quickly
```

**Shift+Tab:**
```
Shift+Tab

Moves to previous field
Go back if you skip past a field
```

**Example: Quick Tag Addition:**
```
1. Click "Add Tag" button
2. Modal opens
3. Type tag name
4. Press Enter (submits)
5. Tag added, modal closes

No mouse clicking needed
```

---

### 13.3 Help and Shortcuts Reference

**Show Shortcuts Modal:**
```
? (Question mark key)

Displays keyboard shortcuts reference
Categorized by function
Includes descriptions
```

**Shortcuts Reference Modal:**

```
┌────────────────────────────────────────────────┐
│  Keyboard Shortcuts                        [×] │
├────────────────────────────────────────────────┤
│                                                │
│  Workflow Management                           │
│  ──────────────────────────────────────────   │
│  [Ctrl+N]  Create new workflow                 │
│  [Ctrl+E]  Toggle Creation/Execution mode      │
│  [Ctrl+F]  Focus workflow selector             │
│  [Ctrl+A]  Add root unit                       │
│  [Ctrl+S]  Save workflow                       │
│                                                │
│  Navigation                                    │
│  ──────────────────────────────────────────   │
│  [ESC]     Close modal                         │
│  [Enter]   Submit form                         │
│  [Tab]     Next field                          │
│  [?]       Show this help                      │
│                                                │
│  Unit Operations (Future)                      │
│  ──────────────────────────────────────────   │
│  [Ctrl+D]  Delete selected unit                │
│  [Ctrl+↑]  Move unit up                        │
│  [Ctrl+↓]  Move unit down                      │
│  [Space]   Expand/collapse unit                │
│                                                │
│              [Close]                           │
└────────────────────────────────────────────────┘
```

**Features:**

**Categorized Display:**
```
Shortcuts grouped by function:
- Workflow Management
- Navigation
- Unit Operations
- Content Editing
- Export & Sharing
```

**Styled Keyboard Keys:**
```
Visual keyboard key representations:
[Ctrl+N]  [ESC]  [Enter]

Easy to read and understand
```

**Descriptions Included:**
```
Each shortcut has clear description:
"Create new workflow"
"Toggle Creation/Execution mode"
```

---

### 13.4 Future Shortcuts (Planned)

**Note:** These shortcuts may be implemented in future versions:

**Unit Operations:**
```
Ctrl+D       Delete selected unit
Ctrl+↑       Move unit up in order
Ctrl+↓       Move unit down in order
Ctrl+→       Indent unit (make child)
Ctrl+←       Outdent unit (make sibling)
Space        Expand/collapse selected unit
```

**Selection:**
```
↑            Select previous unit
↓            Select next unit
Ctrl+Click   Multi-select units
Shift+Click  Range select units
```

**Editing:**
```
Ctrl+C       Copy selected unit
Ctrl+V       Paste unit
Ctrl+X       Cut unit
Ctrl+Z       Undo last action
Ctrl+Y       Redo action
```

**View:**
```
Ctrl++       Zoom in
Ctrl+-       Zoom out
Ctrl+0       Reset zoom
Alt+E        Expand all units
Alt+C        Collapse all units
```

**Search:**
```
Ctrl+F       Find in workflow (browser native)
Ctrl+G       Find next
Ctrl+Shift+G Find previous
```

---

### 13.5 Best Practices

**Learn Gradually:**
```
Don't memorize all at once
Start with most-used shortcuts:
1. Ctrl+E (toggle mode)
2. Ctrl+S (save)
3. ESC (close modals)
4. Enter (submit forms)

Add more as you get comfortable
```

**Use Shortcuts Reference:**
```
Press ? anytime you forget
Keep reference open while learning
Eventually becomes muscle memory
```

**Combine with Mouse:**
```
You don't have to use only keyboard
Use shortcuts for frequent actions
Use mouse for complex operations
Find your optimal workflow
```

**Practice Scenarios:**

**Scenario 1: Quick Workflow Creation**
```
1. Ctrl+N (new workflow)
2. Type name
3. Enter (submit)
4. Ctrl+A (add root unit)
5. Type unit name
6. Ctrl+A (add another unit)
7. Type unit name
8. Ctrl+S (save)

8 keystrokes, complete workflow created
```

**Scenario 2: Mode Switching**
```
Building workflow in Creation Mode
Ctrl+E → Execution Mode
Mark some items Done
Ctrl+E → Creation Mode
Continue building

Seamless switching
```

**Scenario 3: Tag Addition**
```
On a unit:
1. Click Add Tag
2. Type tag name
3. Enter (submit)
4. ESC if modal stays open

Quick tagging
```

---

---

## CHAPTER 14: AUTO-SAVE AND DATA PERSISTENCE

Understand how your workflow data is saved and persisted.

### 14.1 Auto-Save Behavior

**What is Auto-Save:**

Workflows automatically save changes without manual action.

**How It Works:**

**Debounced Saving (5 seconds):**
```
You make a change → Timer starts (5 seconds)
You make another change → Timer resets (5 seconds)
No changes for 5 seconds → Auto-save triggers
```

**Example:**
```
0:00 - Type "M" in unit name
0:01 - Type "F" → "MF"
0:02 - Type "A" → "MFA"
0:03 - Stop typing
0:08 - Auto-save triggers (5 seconds after last change)
0:08 - Toast notification: "Workflow saved"
```

**Why 5-Second Debounce:**

```
Without debounce:
- Every keystroke saves
- 100 saves per minute
- Server overload
- Poor performance

With 5-second debounce:
- Wait for you to finish typing
- One save per edit session
- Efficient
- Better performance
```

**What Triggers Auto-Save:**

```
✓ Add unit
✓ Delete unit
✓ Rename unit
✓ Edit description
✓ Add/remove tag
✓ Add/remove attachment (link, image, note, comment)
✓ Check/uncheck Done
✓ Change grade
✓ Reorder units
✓ Change workflow name
✓ Update workflow icon
✓ Edit workflow description

Any change to workflow content triggers auto-save
```

**Mode-Aware Saving:**

**Creation Mode (Structure Changes):**
```
Saves to: workflow.json (structure file)

Includes:
- All units and hierarchy
- Unit properties
- Attachments
- Workflow settings
```

**Execution Mode (Progress Changes):**
```
Saves to: executions.json (execution file)

Includes:
- Done checkboxes
- Grades (if changed)
- Execution-specific data

Note: Some implementations save to same file
```

**Visual Indicators:**

**Saving Indicator:**
```
Top-right corner:
"Saving..." (appears briefly)
or
💾 icon animates

Shows save in progress
```

**Saved Confirmation:**
```
Toast notification:
┌────────────────────────────┐
│ ✓ Workflow saved          │
└────────────────────────────┘

Appears for 2-3 seconds
Confirms save successful
```

**Error Indicator:**
```
If save fails:
┌────────────────────────────┐
│ ✗ Save failed             │
│   Check connection        │
└────────────────────────────┘

Red notification
Indicates problem
```

**Benefits:**

**No Manual Saving:**
```
Don't have to remember to click Save
No lost work if you forget
Peace of mind
```

**Crash Protection:**
```
Browser crashes:
- Work saved up to 5 seconds ago
- Minimal data loss

Power outage:
- Last auto-save preserved
- Resume where you left off (mostly)
```

**Collaboration:**
```
Multiple people editing:
- Changes save automatically
- Others see updates (after refresh)
- Less conflict
```

---

### 14.2 Manual Save

**Why Manual Save:**

Even with auto-save, manual save is useful:

**1. Immediate Save Before Critical Actions:**
```
Before:
- Exporting to board
- Closing browser
- Navigating away
- Sharing with client

Manual save ensures latest changes saved
```

**2. Force Save Without Waiting:**
```
Auto-save waits 5 seconds
Manual save is immediate
Use when you want certainty NOW
```

**3. Verify Changes Saved:**
```
Made important changes
Want confirmation
Click Save
See "Saved" notification
Peace of mind
```

**Manual Save Buttons:**

**"Save Structure" Button:**
```
Location: Top navigation (Creation Mode)
Label: "Save Structure" or "💾 Save"

Click to:
- Save all structural changes
- Save unit additions/deletions
- Save all properties
- Force immediate save
```

**"Save Execution" Button:**
```
Location: Top navigation (Execution Mode)
Label: "Save Execution" or "💾 Save"

Click to:
- Save Done checkboxes
- Save grades
- Save execution progress
- Force immediate save
```

**Sometimes Combined:**
```
Some implementations have single "Save" button:
- Mode-aware (saves appropriate data)
- Works in both modes
```

**Click Behavior:**

```
1. Click "Save" button
2. Button disables briefly
3. Saving indicator appears: "Saving..."
4. Server processes save
5. Confirmation appears: "✓ Workflow saved"
6. Button re-enables

Usually takes 1-2 seconds
```

**Use Cases:**

**Before Export:**
```
1. Finish editing workflow
2. Click "Save Structure" (manual)
3. Wait for "Saved" confirmation
4. Then click "Export to Board"

Ensures exported content is latest
```

**Before Closing:**
```
1. Made changes
2. Click "Save" (manual)
3. See "Saved" confirmation
4. Close browser tab

No risk of losing last 5 seconds of work
```

**After Major Edits:**
```
1. Spent 30 minutes restructuring workflow
2. Click "Save" (manual)
3. Feel confident changes are saved

Psychological benefit
```

---

### 14.3 What Gets Saved

**Structure Data (Creation Mode):**

**All Units:**
```
✓ Unit IDs (internal)
✓ Unit names
✓ Display IDs
✓ Descriptions
✓ Icons
✓ Parent-child relationships
✓ Unit order
```

**All Properties:**
```
✓ Enabled properties per level
✓ Property values per unit
✓ Individual grades
✓ Cumulative grades (calculated)
```

**All Attachments:**
```
✓ Links (URL, title)
✓ Images (URL, thumbnail, full-size)
✓ Notes (content, timestamp)
✓ Comments (content, author, timestamp)
```

**Hierarchy Relationships:**
```
✓ Which units are parents
✓ Which units are children
✓ Order of siblings
✓ Nesting depth
```

**Workflow-Level Settings:**
```
✓ Workflow name
✓ Workflow icon
✓ Workflow description
✓ Sequential order setting
✓ Template reference (if created from template)
✓ Linked workflow reference (if linked)
```

**Tags:**
```
✓ All tags assigned to units
✓ Tag names
✓ Tag-unit associations
```

**Example Structure Data:**
```json
{
  "workflowId": "wf_12345",
  "workflowName": "ISO 27001:2022",
  "workflowIcon": "🔒",
  "workflowDescription": "ISO 27001:2022 compliance framework",
  "templateId": "tmpl_iso27001",
  "units": [
    {
      "unitId": "u_001",
      "name": "Organizational Controls",
      "displayId": "A.5",
      "description": "Controls related to organizational policies...",
      "icon": "🏢",
      "parentId": null,
      "order": 0,
      "tags": ["Domain", "High-Priority"],
      "links": [
        {"url": "https://...", "title": "ISO 27001 Annex A"}
      ],
      "notes": [
        {"content": "Focus on this domain first", "timestamp": "..."}
      ]
    }
  ]
}
```

---

**Execution Data (Execution Mode):**

**Completion Status:**
```
✓ Done checkbox state (checked/unchecked)
✓ Per-unit completion
✓ Timestamp of completion (some implementations)
```

**Progress Tracking:**
```
✓ Progress percentages (calculated from Done checkboxes)
✓ Which units are complete
✓ Which units are incomplete
```

**Per-Workflow State:**
```
✓ Execution data tied to specific workflow
✓ Multiple workflows have independent execution states
```

**Example Execution Data:**
```json
{
  "workflowId": "wf_12345",
  "execution": {
    "u_001": {"done": true, "completedAt": "2024-01-15T10:30:00Z"},
    "u_002": {"done": false},
    "u_003": {"done": true, "completedAt": "2024-01-16T14:22:00Z"}
  }
}
```

---

**Preferences (Browser Local Storage):**

**Theme Choice:**
```
✓ Light or dark mode
✓ Saved per-browser
✓ Persists across sessions
```

**Mode Selection:**
```
✓ Last used mode (Creation or Execution)
✓ Restores on next visit
```

**Collapse States:**
```
✓ Which units are expanded
✓ Which units are collapsed
✓ Per-workflow basis
✓ Restores your workspace layout
```

**Other Preferences:**
```
✓ Column widths (if adjustable)
✓ Filter settings
✓ Sort preferences
```

**Example Local Storage:**
```json
{
  "theme": "dark",
  "lastMode": "execution",
  "workflows": {
    "wf_12345": {
      "collapseStates": {
        "u_001": "expanded",
        "u_002": "collapsed",
        "u_003": "expanded"
      }
    }
  }
}
```

**Saved To:**
```
Browser Local Storage (not server)
- Per-browser preferences
- Not synced across devices
- Not shared with other users
- Lost if you clear browser cache
```

---

### 14.4 What Does NOT Get Saved

**Temporary UI States:**
```
✗ Which modal is open
✗ Which input has focus
✗ Scroll position (some browsers save this natively)
✗ Hover states
✗ Active selections
```

**Unsaved Changes (Within 5-Second Window):**
```
✗ Changes made in last 5 seconds (if auto-save hasn't triggered)
✗ Solution: Click Manual Save before closing
```

**Browser Tab States:**
```
✗ Which tab you're on (if app has tabs)
✗ Window size/position
```

---

### 14.5 Data Persistence Locations

**Server (Database):**
```
Saved:
- Workflow structure
- Workflow content
- Execution data
- User accounts
- Workflow sharing settings

Persists:
- Across devices
- Across browsers
- Permanently (until deleted)
```

**Browser Local Storage:**
```
Saved:
- UI preferences (theme, mode)
- Collapse states
- View settings

Persists:
- Per-browser only
- Same device, same browser
- Until cache cleared
```

**Session Storage:**
```
Saved:
- Temporary session data
- Active workflow ID

Persists:
- Current browser session only
- Lost when tab closes
```

---

### 14.6 Save Failures and Troubleshooting

**Common Save Failures:**

**Network Connection Lost:**
```
Error: "Save failed - Check connection"

Cause: No internet connection

Solution:
1. Check network connection
2. Reconnect
3. Click Manual Save
4. Verify "Saved" confirmation
```

**Server Error:**
```
Error: "Server error - Try again"

Cause: Server-side issue

Solution:
1. Wait a moment
2. Click Manual Save again
3. If persists, contact support
4. Keep browser open (data in memory)
```

**Session Expired:**
```
Error: "Session expired - Please log in"

Cause: Long idle time, session timeout

Solution:
1. Log in again
2. Data usually preserved in browser
3. Click Manual Save after logging in
```

**Large Workflow:**
```
Error: "Workflow too large"

Cause: Workflow exceeds size limit

Solution:
1. Split into smaller workflows
2. Remove large attachments
3. Contact support to increase limit
```

**Browser Issues:**
```
Error: Various JavaScript errors

Cause: Browser compatibility, extensions

Solution:
1. Refresh page
2. Try different browser
3. Disable browser extensions
4. Clear cache
```

---

### 14.7 Best Practices

**Trust Auto-Save, But Verify:**
```
✓ Auto-save handles most scenarios
✓ Watch for "Saved" notifications
✓ If in doubt, click Manual Save
```

**Manual Save Before Critical Actions:**
```
✓ Before exporting to board
✓ Before sharing workflow
✓ Before closing browser
✓ After major restructuring
```

**Keep Browser Tab Open During Edits:**
```
✓ Don't close tab immediately after edits
✓ Wait for "Saved" confirmation
✓ Give auto-save time to trigger
```

**Check Network Connection:**
```
✓ Stable internet required
✓ Watch for save error notifications
✓ Don't edit offline (changes may not save)
```

**Monitor Save Indicators:**
```
✓ "Saving..." → Save in progress
✓ "✓ Saved" → Success
✓ "✗ Save failed" → Problem, take action
```

---

---

## CHAPTER 15: BEST PRACTICES

Proven strategies for creating effective, maintainable workflows.

### 15.1 Workflow Design

**Start with a Template:**

```
\u2713 DON'T start from scratch if a template exists
\u2713 DO use template as foundation
\u2713 DO customize template for your needs
\u2713 DON'T reinvent the wheel

Why: Templates include tested structures and property configurations
```

**Example:**

```
Need ISO 27001 workflow?
1. Find "ISO 27001:2022" template
2. Create workflow from template
3. Customize names and descriptions
4. Add client-specific content
\u2192 Save hours of structural work
```

**Name Descriptively:**

```
\u2713 DO: "Acme Corp - GDPR Compliance Implementation"
\u2717 DON'T: "Workflow 1"

\u2713 DO: "Q1 2024 - SOC 2 Type II Audit Prep"
\u2717 DON'T: "SOC2"

\u2713 DO: "Manufacturing - Quality Control Process"
\u2717 DON'T: "QC"
```

**Naming Formula:**
```
[Client/Department] - [Regulation/Project] - [Phase/Type]

Examples:
- "Beta Inc - ISO 27001 - Year 1 Implementation"
- "HR Department - Employee Onboarding - 2024"
- "IT - Infrastructure Upgrade - Phase 2"
```

**Add Comprehensive Descriptions:**

**Workflow-Level Description:**
```
Include:
- Purpose: What is this workflow for?
- Scope: What's included/excluded?
- Owner: Who maintains this?
- Timeline: When does this apply?
- Context: Why was this created?
```

**Example:**

```
Workflow: "Acme Corp - GDPR Compliance"

Description:
"Purpose: Track Acme Corp's GDPR compliance implementation for EU operations.

Scope: Covers all 7 GDPR principles and 99 requirements.  Excludes UK GDPR (separate workflow).

Owner: Jane Smith (Data Protection Officer)
Contact: jsmith@acmecorp.com

Timeline: Jan 2024 - Dec 2024 (12-month implementation)

Context: Created in response to EU expansion. Based on standard GDPR template, customized for SaaS business model.

Last Updated: 2024-01-15"
```

**Use Icons for Visual Navigation:**

```
\u2713 DO use consistent icons per category:
  - \ud83d\udd12 Security controls
  - \ud83d\udc65 People/HR processes
  - \ud83c\udfe2 Physical security
  - \ud83d\udcbb Technical controls
  - \ud83d\udcca Risk management
  - \ud83d\udcdd Documentation

\u2717 DON'T use random icons
\u2717 DON'T change icon meanings mid-workflow
```

**Benefits:**
```
Quick visual scanning
Easier to find sections
Professional appearance
Better user experience
```

**Tag Strategically:**

**Create Tag Taxonomy:**

```
Define tag categories before tagging:

Priority Tags:
- [Critical]
- [High]
- [Medium]
- [Low]

Phase Tags:
- [Phase-1]
- [Phase-2]
- [Phase-3]

Department Tags:
- [IT]
- [HR]
- [Finance]
- [Legal]

Status Tags:
- [In-Progress]
- [Blocked]
- [Complete]
- [Not-Started]

Timeline Tags:
- [Q1-2024]
- [Q2-2024]
- [Q3-2024]
- [Q4-2024]
```

**Tagging Rules:**

```
\u2713 DO be consistent with tag names
\u2717 DON'T use: [High Priority], [High-Priority], [HighPriority]
\u2713 DO use: [High-Priority] (pick one format)

\u2713 DO document what tags mean
\u2717 DON'T create tags without definition

\u2713 DO limit tags per unit (3-5 max)
\u2717 DON'T over-tag (makes filtering useless)
```

**Document Tag Meanings:**

```
Add to workflow description:

\"Tag Guide:
- [Critical]: Required for certification, no workarounds
- [High]: Important but can be deferred if needed
- [Medium]: Should be done but not blocking
- [Low]: Nice to have, optional

- [IT]: IT department responsibility
- [HR]: HR department responsibility

- [Q1-2024]: Target completion Q1 2024\"
```

---

### 15.2 Content Guidelines

**Unit Naming:**

**Clear and Concise:**

```
\u2713 DO: \"Implement Multi-Factor Authentication\"
\u2717 DON'T: \"The Process of Implementing and Configuring Multi-Factor Authentication Systems Across the Enterprise\"

\u2713 DO: \"Background Check Policy\"
\u2717 DON'T: \"PolicyBackgroundCheckFinal_v3_reviewed\"

Keep names under 60 characters if possible
```

**Action-Oriented for Tasks:**

```
\u2713 DO: \"Draft InfoSec Policy\" (verb + object)
\u2713 DO: \"Review Access Logs\" (verb + object)
\u2713 DO: \"Configure Firewall Rules\" (verb + object)

\u2717 DON'T: \"InfoSec Policy\" (for a task - not clear what to do)

Use verbs: Create, Update, Review, Implement, Configure, Document, Train
```

**Noun-Based for Categories:**

```
\u2713 DO: \"Access Control Domain\" (noun phrase)
\u2713 DO: \"Network Security\" (noun phrase)
\u2713 DO: \"Employee Training\" (noun phrase)

\u2717 DON'T: \"Managing Access Controls\" (for a category)

Categories are things, tasks are actions
```

**Consistent Formatting:**

```
Pick a style and stick to it:

\u2713 Title Case: \"Multi-Factor Authentication Policy\"
\u2713 Sentence case: \"Multi-factor authentication policy\"

\u2717 DON'T mix: \"Multi-Factor Authentication policy\"

Consistency aids readability
```

**Examples by Level:**

```
Level 1 (Domains): Noun phrases
- \"Organizational Controls\"
- \"People Controls\"
- \"Physical Controls\"

Level 2 (Categories): Noun phrases
- \"Information Security Policies\"
- \"Access Control\"
- \"Human Resource Security\"

Level 3 (Controls): Noun phrases or requirements
- \"A.5.1 Information Security Policy\"
- \"Multi-Factor Authentication\"
- \"Background Screening Process\"

Level 4 (Actions): Action-oriented
- \"Draft MFA Policy\"
- \"Configure MFA for Admin Accounts\"
- \"Train Users on MFA\"
```

---

**Descriptions:**

**What, Why, How:**

```
What: What is this unit about?
Why: Why is it important/required?
How: How should it be implemented?
```

**Example:**

```
Unit: \"A.9.4.3 Multi-Factor Authentication\"

Description:
\"**What:** Multi-factor authentication (MFA) requires users to provide two or more verification factors to access systems.

**Why:** MFA significantly reduces risk of unauthorized access. Required by ISO 27001, NIST, and most cyber insurance policies. Prevents 99% of account compromise attacks.

**How:** 
1. Implement MFA for all administrative accounts (immediate priority)
2. Implement MFA for all remote access (within 30 days)
3. Implement MFA for all users (within 90 days)
4. Approved MFA methods: Duo, Okta, Azure MFA

**Evidence Required:**
- MFA policy document
- Configuration screenshots
- User training records\"
```

**Include Examples:**

```
\u2713 DO provide concrete examples:

\"Example: For the access review process, use this template:
- Review frequency: Quarterly
- Reviewers: Department managers
- Process: Manager receives list of their team's access, marks approved/remove
- Timeline: 2-week review period\"

\u2717 DON'T leave it abstract:
\"Implement an access review process\" (too vague)
```

**Reference Policies:**

```
\u2713 DO link to relevant policies:

\"Related Policies:
- Access Control Policy (see link below)
- Acceptable Use Policy
- Remote Work Policy

Regulation References:
- ISO 27001:2022 A.9.4.3
- NIST CSF PR.AC-7\"
```

**Add Guidance:**

```
\u2713 DO provide implementation guidance:

\"Implementation Notes:
- Start with IT department (pilot)
- Use Duo (already purchased)
- Budget: $5/user/month
- Timeline: 90 days
- Training: 30-minute video + hands-on
- Support: IT helpdesk extension 5555\"

Helps executors know what to do
```

---

**Tagging:**

**Consistent Taxonomy:**

```
\u2713 DO define taxonomy upfront:

Priority: [Critical], [High], [Medium], [Low]
Ownership: [IT], [HR], [Finance], [Legal], [Operations]
Phase: [Phase-1], [Phase-2], [Phase-3]
Status: [Not-Started], [In-Progress], [Blocked], [Complete]
Timeline: [Q1-2024], [Q2-2024], [Q3-2024], [Q4-2024]

Everyone uses same tags
```

**Not Too Many Tags:**

```
\u2713 DO: 3-5 tags per unit (max)
Example: [Critical] [IT] [Phase-1] [Q1-2024]

\u2717 DON'T: 10+ tags per unit
Example: [Critical] [High] [Important] [Must-Do] [Phase-1] [Sprint-1] [IT] [Security] [Urgent] [Q1] [January] [Week-1]
(Overkill, filtering becomes useless)
```

**Meaningful Categories:**

```
\u2713 DO create tags that enable useful filtering:
- \"Export all [Q1-2024] items to board\" \u2192 Useful
- \"Export all [IT] items to board\" \u2192 Useful

\u2717 DON'T create tags that don't help filtering:
- [Important] \u2192 Too vague, everything is \"important\"
- [Item] \u2192 Meaningless
```

**Document Tag Meanings:**

```
\u2713 DO create a tag guide:

Add to workflow description:
\"
TAG GUIDE
==========

Priority:
- [Critical]: Certification blocker, must complete, no exceptions
- [High]: Important, should complete on schedule
- [Medium]: Desirable, can defer if needed
- [Low]: Optional enhancement

Departments (Ownership):
- [IT]: IT department owns implementation
- [HR]: HR department owns implementation
- [Finance]: Finance department owns implementation

Phases:
- [Phase-1]: Initial deployment (0-3 months)
- [Phase-2]: Expansion (3-6 months)
- [Phase-3]: Optimization (6-12 months)
\"

Share this guide with all users
```

---

### 15.3 Collaboration

**Share Workflows with Clients:**

**Export Options:**

```
1. Export to Board (most common)
   - Workflow becomes reference
   - Client executes on board
   
2. Share Workflow Link (if implemented)
   - Read-only access
   - Client views structure
   
3. Copy Workflow (for client to own)
   - Client gets their own copy
   - Independent editing
```

**Provide Training:**

**Initial Training:**

```
1. Platform Overview (30 min)
   - Three-tier system (Templates \u2192 Workflows \u2192 Boards)
   - Roles (consultant vs. client)
   
2. Workflow Walkthrough (45 min)
   - Navigate workflow hierarchy
   - Read descriptions
   - View attachments
   - Understand tags
   
3. Board Usage (60 min)
   - Reference panel (Dynamic List)
   - Task creation
   - Milestones and categories
   - Progress tracking
   
4. Q&A (30 min)
```

**Provide Documentation:**

```
\u2713 DO create client-specific quick start guide:

\"Getting Started with Your ISO 27001 Workflow

1. Open the workflow: [link]
2. Review the structure (4 domains, 93 controls)
3. Read domain descriptions (high-level overview)
4. Drill into controls relevant to your department
5. For detailed implementation: Open the board [link]\"

\u2717 DON'T assume clients will figure it out
```

**Document Usage:**

**Track How Clients Use Workflows:**

```
Monitor:
- Which sections do they focus on?
- Where do they get stuck?
- What questions do they ask?
- What tags do they use most?

Use insights to improve workflows
```

**Collect Feedback:**

**Regular Check-Ins:**

```
Weekly/Monthly:
\"How is the workflow working for you?\"
\"Is anything unclear?\"
\"What would make it more useful?\"
\"Are the descriptions helpful?\"

Document feedback
Iterate on workflows
```

**Feedback Mechanisms:**

```
\u2713 DO provide multiple feedback channels:
- Email: feedback@company.com
- Comments in workflow (if implemented)
- Scheduled review meetings
- Feedback form

\u2717 DON'T: \"Let me know if you have questions\" (too passive)
```

**Iterate and Improve:**

**Continuous Improvement:**

```
1. Deploy workflow
2. Collect feedback (weekly)
3. Identify issues/confusion
4. Update workflow (descriptions, tags, structure)
5. Notify clients of updates
6. Repeat

Workflows are living documents
```

**Version Management:**

```
\u2713 DO track major changes:

In workflow description:
\"Change Log:
- v1.0 (2024-01-01): Initial deployment
- v1.1 (2024-01-15): Added MFA guidance, clarified firewall requirements
- v1.2 (2024-02-01): Updated policy links, added training videos\"

\u2717 DON'T silently change workflows without notification
```

---

### 15.4 Maintenance

**Review Regularly:**

**Quarterly Reviews:**

```
Every 3 months:
1. Review workflow structure
   - Still accurate?
   - Any regulations changed?
   
2. Review content
   - Descriptions still relevant?
   - Links still working?
   - Policy references current?
   
3. Review tags
   - Tag taxonomy still useful?
   - Any tags need consolidation?
   
4. Review feedback
   - Any recurring issues?
   - Client suggestions to implement?
   
5. Update as needed
```

**Update for Regulation Changes:**

**Regulatory Changes:**

```
When regulation updates:
1. ISO 27001:2013 \u2192 ISO 27001:2022
   - Map new controls
   - Update workflow structure
   - Update descriptions
   - Notify clients
   
2. GDPR guidance update
   - Review impact
   - Update affected units
   - Update descriptions and links
   - Communicate changes
```

**Update Process:**

```
1. Regulation announces change
2. Review impact on your workflows
3. Update Master workflow (if using linked workflows)
4. Test changes in one workflow
5. Deploy to all workflows
6. Notify clients:
   \"ISO 27001 has updated to 2022 version.
    We've updated your workflow to reflect new controls.
    New controls are tagged [ISO-2022-New].
    Please review within 30 days.\"
```

**Archive Old Versions:**

**Why Archive:**

```
- Historical record
- Audit trail
- Compliance evidence
- Learning from past versions
```

**How to Archive:**

```
\u2713 DO create archive workflow:

Before major update:
1. Copy workflow
2. Rename: \"[ARCHIVE] ISO 27001:2013 - Acme Corp\"
3. Add to workflow description:
   \"ARCHIVED: This workflow is archived as of 2024-01-01.
    Active workflow: [link to new workflow]
    Reason: ISO 27001 updated to 2022 version.
    Historical reference only - do not use for new implementations.\"
4. Mark as read-only (if supported)

\u2717 DON'T delete old workflows immediately
```

**Keep Current:**

**Staying Up-to-Date:**

```
\u2713 DO subscribe to regulation updates:
- ISO updates
- NIST updates
- Industry newsletters
- Compliance forums

\u2713 DO review workflows when you hear of changes

\u2713 DO update promptly (regulations often have transition periods)

\u2717 DON'T let workflows become outdated
(Clients rely on you for current guidance)
```

**Maintenance Schedule:**

```
Daily: Monitor client feedback, questions
Weekly: Review and respond to client issues
Monthly: Check for minor updates needed
Quarterly: Full workflow review
Annually: Major review and restructure if needed
Ad-hoc: Respond to regulation changes immediately
```

---

### 15.5 Performance and Scalability

**Large Workflows:**

```
If workflow has 500+ units:

\u2713 DO keep most sections collapsed
\u2713 DO use tag-based exports (smaller batches)
\u2713 DO consider splitting into multiple workflows
\u2717 DON'T export all 500+ units to one board

Example: Split ISO 27001 (93 controls) by domain:
- Workflow 1: Organizational Controls
- Workflow 2: People Controls
- Workflow 3: Physical Controls
- Workflow 4: Technological Controls

Or keep single workflow, export by tag/phase
```

**Linked Workflows:**

```
If managing 10+ clients:

\u2713 DO use linked workflows
\u2713 DO maintain one Master workflow
\u2713 DO update Master when regulations change
\u2717 DON'T manually update 10+ workflows

Scales efficiently
```

---

---

## CHAPTER 16: COMMON WORKFLOWS

Real-world workflow examples across different compliance and business scenarios.

### 16.1 GDPR Compliance Workflow

**Overview:**

A workflow for tracking GDPR (General Data Protection Regulation) compliance across all 7 principles and 99 requirements.

**Use Case:** Compliance consultants helping clients achieve GDPR compliance for EU data processing.

**Structure:**

```
L1: Principles (7 GDPR principles)
├─ L2: Requirements per principle (14-20 requirements each)
   ├─ L3: Implementation actions (specific tasks)
      └─ L4: Evidence items (documentation, policies, records)
```

**Detailed Example:**

```
▼ Principle 1: Lawfulness, Fairness, Transparency [Progress: ██████░░░░ 60%]
   ├─ ▼ Article 5(1)(a): Lawful Basis for Processing
   │  ├─ ▼ Identify Lawful Bases [Done]
   │  │  ├─ ☑ Document Consent Processes (Evidence: Consent Form)
   │  │  ├─ ☑ Document Legitimate Interests (Evidence: LIA Document)
   │  │  └─ ☑ Document Contract Necessity (Evidence: Contract Terms)
   │  └─ ▼ Implement Technical Measures [In Progress]
   │     ├─ ☑ Update Privacy Policy (Evidence: Published Policy)
   │     └─ ☐ Configure Consent Management Platform (Evidence: CMP Config)
   │
   ├─ ▼ Article 5(1)(a): Transparency Requirements
   │  ├─ ▼ Transparency Measures [Not Started]
   │  │  ├─ ☐ Create Privacy Notices (Evidence: Privacy Notice)
   │  │  └─ ☐ User Communication Plan (Evidence: Communication Plan)
   │  └─ ...
   │
   └─ ...

▼ Principle 2: Purpose Limitation [Progress: ░░░░░░░░░░ 0%]
   └─ ...

... (5 more principles)
```

**Property Configuration:**

**Display IDs (Article References):**
```
Enable at: Level 2 (Requirements)

Examples:
- "Art. 5(1)(a)" - Lawfulness
- "Art. 6" - Lawful Basis
- "Art. 7" - Consent Conditions
- "Art. 13-14" - Information to Data Subjects
- "Art. 32" - Security of Processing

Purpose: Direct reference to GDPR articles for legal traceability
```

**Descriptions (Legal Requirements):**
```
Enable at: All levels

L1 (Principles): High-level explanation of the principle
L2 (Requirements): Specific GDPR article text and interpretation
L3 (Actions): Step-by-step implementation guidance
L4 (Evidence): What documentation is required

Example L2 Description:
"Article 5(1)(a): Lawfulness, Fairness, Transparency

Legal Text: Personal data shall be processed lawfully, fairly and in a transparent manner in relation to the data subject.

Interpretation: Organizations must have a valid legal basis for processing, treat data subjects fairly, and be transparent about how personal data is used.

Implementation: Identify lawful basis for each processing activity, document in privacy policy, communicate clearly to data subjects.

Audit Criteria: Privacy policy exists, lawful bases documented, data subjects informed."
```

**Links (Policy Documents):**
```
Enable at: Level 2, Level 3

Link Types:
- GDPR official text: https://gdpr.eu/article-5/
- Internal policy: https://company.com/privacy-policy
- ICO guidance: https://ico.org.uk/...
- Template documents: https://company.com/templates/consent-form

Purpose: Quick access to legal references and implementation resources
```

**Notes (Implementation Evidence):**
```
Enable at: Level 3, Level 4

Note Types:
- Implementation decisions: "We chose consent as lawful basis because..."
- Evidence location: "Consent forms stored in: /legal/gdpr/consent/"
- Completion records: "Implemented on 2024-01-15 by Jane Smith"
- Audit findings: "Auditor approved on 2024-02-01"

Purpose: Document implementation decisions and evidence trail
```

**Tags (Priority, Department):**
```
Tag Taxonomy:

Priority:
- [Critical] - Required for basic compliance
- [High] - Required for certification
- [Medium] - Good practice
- [Low] - Optional enhancement

Department:
- [Legal] - Legal team responsibility
- [IT] - IT team responsibility
- [HR] - HR team responsibility
- [Marketing] - Marketing team responsibility

Article Type:
- [Data-Subject-Rights] - Individual rights articles
- [Processing-Requirements] - Data processing rules
- [Security] - Technical security measures
- [DPO] - Data Protection Officer requirements

Timeline:
- [Phase-1] - Initial compliance (0-6 months)
- [Phase-2] - Enhanced compliance (6-12 months)
- [Phase-3] - Optimization (12+ months)

Example Unit:
Unit: "Implement Right to Erasure Process"
Tags: [Critical] [IT] [Legal] [Data-Subject-Rights] [Phase-1]
```

**Use Case Scenario:**

```
Consultant:
1. Creates GDPR workflow from template
2. Customizes for client (SaaS company processing EU customer data)
3. Adds client-specific notes and policies
4. Tags units by department and priority
5. Exports [Phase-1] [Critical] items to board for immediate implementation

Client:
1. Reviews Dynamic List (full GDPR requirements)
2. Creates tasks for each requirement
3. Assigns to Legal, IT, HR departments
4. Tracks progress via milestones (6-month timeline)
5. Uses workflow as evidence for GDPR certification
```

---

### 16.2 Risk Assessment Workflow

**Overview:**

A workflow for identifying, assessing, and mitigating organizational risks with quantitative risk scoring.

**Use Case:** Risk managers conducting enterprise risk assessments and tracking mitigation efforts.

**Structure:**

```
L1: Risk Categories (Strategic, Operational, Financial, Compliance)
├─ L2: Specific Risks (e.g., "Ransomware Attack", "Market Downturn")
   ├─ L3: Controls (risk mitigation measures)
      └─ L4: Control Tests (verification activities)
```

**Detailed Example:**

```
▼ Cyber Security Risks [Grade: Σ 185] [Progress: ██████░░░░ 60%]
   ├─ ▼ Ransomware Attack [Grade: 9 (High)] [Progress: ████████░░ 80%]
   │  ├─ ▼ Backup Controls [Grade: 3 (Mature)]
   │  │  ├─ ☑ Daily Backups Configured
   │  │  ├─ ☑ Offsite Storage Implemented
   │  │  └─ ☐ Quarterly Restore Tests
   │  ├─ ▼ Email Security [Grade: 4 (Managed)]
   │  │  ├─ ☑ Anti-Phishing Tool Deployed
   │  │  └─ ☑ User Training Complete
   │  └─ ▼ Network Segmentation [Grade: 2 (Defined)]
   │     ├─ ☑ VLAN Configuration
   │     └─ ☐ Zero Trust Implementation
   │
   ├─ ▼ Data Breach [Grade: 7 (Medium-High)] [Progress: ████░░░░░░ 40%]
   │  ├─ ▼ Encryption Controls [Grade: 3]
   │  └─ ▼ Access Controls [Grade: 4]
   │
   └─ ▼ Phishing Attack [Grade: 5 (Medium)] [Progress: ██████░░░░ 55%]
      └─ ...

▼ Operational Risks [Grade: Σ 142]
   └─ ...

... (more categories)
```

**Property Configuration:**

**Grades (Risk Ratings and Maturity):**
```
L2 (Risks): Individual Grade - Risk Rating (1-10)
  1-3: Low Risk
  4-7: Medium Risk
  8-10: High Risk
  
  Calculation: Likelihood × Impact
  - Likelihood: 1 (Rare) to 5 (Certain)
  - Impact: 1 (Minimal) to 5 (Catastrophic)
  - Risk Score: Likelihood × Impact (max 25, scaled to 10)
  
  Example:
  Ransomware: Likelihood 3 (Possible) × Impact 5 (Catastrophic) = 15/25 = 6 (scaled) → Grade: 9 (High)

L3 (Controls): Individual Grade - Control Maturity (0-5)
  0: Non-existent
  1: Initial/Ad-hoc
  2: Repeatable
  3: Defined
  4: Managed
  5: Optimized
  
  Example:
  Backup Controls: Daily automated backups with monitoring = Grade: 4 (Managed)

L1 (Categories): Cumulative Grade - Total Risk Exposure
  Sum of all risk scores in category
  
  Example:
  Cyber Risks: 9 + 7 + 5 + 8 + 6 = 35 total risk points
  Use for board reporting: "Cyber risk exposure: 35 points"
```

**Cumulative Grades (Overall Risk):**
```
L1: Cumulative (Σ) of all L2 risks

Enterprise Risk Profile:
- Cyber Security Risks: Σ 185
- Operational Risks: Σ 142
- Financial Risks: Σ 98
- Compliance Risks: Σ 76

Total Enterprise Risk: Σ 501

Use for:
- Board reports: "Enterprise risk score: 501 points"
- Trend analysis: "Risk decreased from 580 to 501 (14% reduction)"
- Benchmarking: "Industry average: 450 points"
```

**Progress Bars (Control Implementation):**
```
L2 (Risks): Progress = % of controls implemented
L3 (Controls): Progress = % of control tests passed

Example:
Ransomware Risk: 4/5 controls implemented = 80% complete
  → Risk mitigation 80% complete
  → Residual risk still exists
```

**Tags (Likelihood, Impact, Category):**
```
Tag Taxonomy:

Likelihood:
- [Rare] (1)
- [Unlikely] (2)
- [Possible] (3)
- [Likely] (4)
- [Certain] (5)

Impact:
- [Minimal] (1)
- [Minor] (2)
- [Moderate] (3)
- [Major] (4)
- [Catastrophic] (5)

Risk Response:
- [Accept] - Risk accepted, no mitigation
- [Mitigate] - Active risk reduction
- [Transfer] - Insurance or outsourcing
- [Avoid] - Eliminate risk source

Control Type:
- [Preventive] - Stops risk from occurring
- [Detective] - Identifies when risk occurs
- [Corrective] - Fixes issues after occurrence

Example:
Risk: "Ransomware Attack"
Tags: [Possible] [Catastrophic] [Mitigate] [Cyber]
Controls tagged: [Preventive] [Detective] [Corrective]
```

**Use Case Scenario:**

```
Risk Manager:
1. Creates annual risk assessment workflow
2. Identifies 50 enterprise risks across 4 categories
3. Scores each risk (likelihood × impact)
4. Documents existing controls
5. Tracks control maturity (0-5 scale)
6. Exports [High-Risk] [Mitigate] items to board
7. Creates risk mitigation project

Execution Team:
1. Reviews high-risk items on board
2. Creates specific mitigation tasks
3. Implements controls
4. Tests controls
5. Tracks progress
6. Risk manager updates workflow grades quarterly

Board Reporting:
- Quarterly: "Enterprise risk reduced from 580 to 501 points"
- Risk heat map: Visual of risk categories
- Control maturity: Average 3.2 (Defined)
```

---

### 16.3 Employee Onboarding Workflow

**Overview:**

A workflow for tracking new employee onboarding across HR, IT, and departmental activities.

**Use Case:** HR teams managing comprehensive onboarding programs for new hires.

**Structure:**

```
L1: Onboarding Phases (Pre-arrival, Day 1, Week 1, Month 1, Month 3)
├─ L2: Department Activities (HR, IT, Manager, Team)
   ├─ L3: Tasks (specific onboarding actions)
      └─ L4: Subtasks (detailed steps)
```

**Detailed Example:**

```
▼ Phase 1: Pre-Arrival (Week Before Start) [Progress: ██████████ 100%]
   ├─ ▼ HR Activities [Progress: ██████████ 100%]
   │  ├─ ▼ Prepare Employment Paperwork
   │  │  ├─ ☑ Send Offer Letter
   │  │  ├─ ☑ I-9 Form Sent
   │  │  └─ ☑ Benefits Enrollment Link Sent
   │  └─ ☑ Schedule Orientation Session
   │
   ├─ ▼ IT Activities [Progress: ██████████ 100%]
   │  ├─ ▼ Provision Accounts
   │  │  ├─ ☑ Create Email Account
   │  │  ├─ ☑ Create Network Login
   │  │  └─ ☑ Assign to Security Groups
   │  └─ ▼ Prepare Equipment
   │     ├─ ☑ Order Laptop
   │     ├─ ☑ Configure Laptop
   │     └─ ☑ Prepare Desk Setup
   │
   └─ ▼ Manager Activities [Progress: ██████████ 100%]
      ├─ ☑ Send Welcome Email
      ├─ ☑ Assign Onboarding Buddy
      └─ ☑ Prepare First Week Schedule

▼ Phase 2: Day 1 (First Day) [Progress: ████████░░ 80%]
   ├─ ▼ HR Activities [Progress: ██████████ 100%]
   │  ├─ ☑ Orientation Session (9 AM)
   │  ├─ ☑ Complete I-9 Verification
   │  └─ ☑ Issue Building Access Badge
   │
   ├─ ▼ IT Activities [Progress: ████████░░ 75%]
   │  ├─ ☑ Laptop Handoff
   │  ├─ ☑ IT System Training
   │  └─ ☐ Install Department Software
   │
   └─ ▼ Manager Activities [Progress: ████████░░ 67%]
      ├─ ☑ Team Introduction Meeting
      ├─ ☑ Workspace Tour
      └─ ☐ Review 30-60-90 Day Plan

▼ Phase 3: Week 1 [Progress: ████░░░░░░ 40%]
   └─ ...

▼ Phase 4: Month 1 [Progress: ░░░░░░░░░░ 0%]
   └─ ...

▼ Phase 5: Month 3 (90-Day Review) [Progress: ░░░░░░░░░░ 0%]
   └─ ...
```

**Property Configuration:**

**Progress Bars (Phase Completion):**
```
L1 (Phases): Progress = % of all phase activities complete
L2 (Departments): Progress = % of department tasks complete

Example:
Phase 1: Pre-Arrival
- HR: 5/5 tasks done = 100%
- IT: 4/4 tasks done = 100%
- Manager: 3/3 tasks done = 100%
→ Phase 1: 12/12 = 100% complete

Phase 2: Day 1
- HR: 3/3 = 100%
- IT: 2/3 = 67%
- Manager: 2/3 = 67%
→ Phase 2: 7/9 = 78% complete
```

**Done Checkboxes (Task Completion):**
```
L3 (Tasks): Done checkbox for each task
L4 (Subtasks): Done checkbox for each step

Checking parent automatically checks children (some implementations)
All children done → Parent shows as done
```

**Tags (Department, Priority, Timeline):**
```
Tag Taxonomy:

Department:
- [HR]
- [IT]
- [Manager]
- [Team]
- [Finance]

Priority:
- [Day-1-Critical] - Must be done before/on Day 1
- [Week-1] - Complete in first week
- [Month-1] - Complete in first month
- [Month-3] - Complete by 90-day review

Task Type:
- [Legal-Required] - Legally mandated (I-9, etc.)
- [Compliance] - Company policy required
- [Experience] - Enhances onboarding experience
- [Training] - Skill development

Employee Type:
- [All-Employees] - Everyone
- [Remote-Only] - Remote employees
- [Management] - Managers only
- [Technical] - Technical roles

Example:
Task: "Complete I-9 Verification"
Tags: [HR] [Day-1-Critical] [Legal-Required] [All-Employees]
```

**Comments (Team Notes):**
```
Use for:
- Manager notes: "Employee expressed interest in cloud certifications"
- HR notes: "Vegetarian - for team lunch planning"
- IT notes: "Requested dual monitors (approved)"
- Buddy notes: "Settling in well, very engaged"

Purpose: Capture onboarding observations for performance reviews and improvements
```

**Use Case Scenario:**

```
HR Team:
1. Creates onboarding workflow from template
2. Customizes for new hire (e.g., remote employee, engineering role)
3. Assigns tasks to HR, IT, Manager
4. Exports [Day-1-Critical] items to board
5. Creates board with milestones:
   - Milestone 1: Day 1
   - Milestone 2: Week 1
   - Milestone 3: Month 1
   - Milestone 4: Month 3 (90-day review)

Execution:
1. HR checks off tasks as completed
2. IT receives notifications for their tasks
3. Manager tracks employee progress
4. Team adds comments about new hire
5. 90-day review: Workflow shows 100% completion

Benefits:
- Consistent onboarding experience
- Nothing falls through cracks
- Compliance ensured (legal tasks tracked)
- Data for process improvement
```

---

### 16.4 Additional Workflow Examples

**ISO 27001:2022 Compliance:**
```
Structure:
- L1: Domains (4) - Organizational, People, Physical, Technological
- L2: Control Categories (14)
- L3: Controls (93)
- L4: Evidence Items

Key Properties: Display IDs (A.5.1, A.5.2), Progress Bars, Done Checkboxes, Links to policies
Tags: [Critical], [High], [IT], [HR], [Q1-2024]
```

**SOC 2 Type II Audit Preparation:**
```
Structure:
- L1: Trust Service Criteria (5) - Security, Availability, Confidentiality, Processing Integrity, Privacy
- L2: Control Objectives (50+)
- L3: Controls
- L4: Testing Procedures

Key Properties: Grades (control effectiveness 1-5), Cumulative grades, Links to evidence
Tags: [In-Scope], [Out-of-Scope], [Remediation-Needed]
```

**Software Development Lifecycle (SDLC):**
```
Structure:
- L1: SDLC Phases (6) - Requirements, Design, Development, Testing, Deployment, Maintenance
- L2: Activities per phase
- L3: Tasks
- L4: Deliverables

Key Properties: Progress bars, Done checkboxes, Comments for team collaboration
Tags: [Sprint-1], [Sprint-2], [Frontend], [Backend], [Database]
```

**Product Launch Checklist:**
```
Structure:
- L1: Launch Phases (4) - Pre-Launch, Launch Day, Post-Launch, Growth
- L2: Department Activities (Marketing, Sales, Product, Support)
- L3: Tasks
- L4: Subtasks

Key Properties: Progress bars, Done checkboxes, Tags for dependencies
Tags: [Launch-Critical], [Marketing], [Sales], [Week-Before], [Launch-Day]
```

---

---

## CHAPTER 17: TROUBLESHOOTING

Solutions to common issues and errors.

### 17.1 Workflow Creation and Access

**Problem: Cannot Create New Workflow**

**Symptoms:**
- "Create Workflow" button disabled or missing
- Click has no effect
- Error message appears

**Solutions:**

```
1. Check Permissions:
   ✗ Issue: User doesn't have create permissions
   ✓ Solution: Contact admin for workflow creation permissions

2. Browser Issues:
   ✗ Issue: JavaScript disabled or browser compatibility
   ✓ Solution: 
     - Enable JavaScript in browser settings
     - Try Chrome, Firefox, or Edge (recommended browsers)
     - Clear browser cache
     - Disable browser extensions

3. Network Issues:
   ✗ Issue: Not connected to server
   ✓ Solution:
     - Check internet connection
     - Refresh page
     - Check if server is accessible
```

**Problem: Workflow List Empty / Cannot See Workflows**

**Symptoms:**
- Dropdown shows no workflows
- "No workflows found" message

**Solutions:**

```
1. No Workflows Created Yet:
   ✓ Create your first workflow
   ✓ Or ask colleague to share workflow with you

2. Filter Applied:
   ✗ Issue: Active filter hiding workflows
   ✓ Solution: Clear any active filters

3. Wrong Account:
   ✗ Issue: Logged into wrong user account
   ✓ Solution: Verify correct account, log out/in if needed

4. Permissions:
   ✗ Issue: Don't have access to workflows
   ✓ Solution: Request access from workflow owner or admin
```

---

### 17.2 Saving and Data Persistence

**Problem: Cannot Save Workflow**

**Symptoms:**
- Save button disabled
- "Save failed" error
- Changes not persisting

**Solutions:**

```
1. Network Connection:
   ✗ Issue: Lost internet connection
   ✓ Solution:
     - Check network connection
     - Reconnect to internet
     - Try manual save again
     - DO NOT close browser (data in memory)

2. Required Fields Missing:
   ✗ Issue: Workflow name empty or invalid
   ✓ Solution:
     - Ensure workflow has a name
     - Check for validation errors (red highlighting)
     - Fill in all required fields

3. Server Error:
   ✗ Issue: Server-side problem
   ✓ Solution:
     - Wait 30 seconds, try again
     - Refresh page (may lose unsaved changes)
     - Contact support if persists

4. Session Expired:
   ✗ Issue: Logged out due to inactivity
   ✓ Solution:
     - Log in again
     - Try manual save
     - If data lost, check browser console for auto-saved data

5. Workflow Too Large:
   ✗ Issue: Exceeds size limits
   ✓ Solution:
     - Remove large attachments
     - Split into smaller workflows
     - Contact support to increase limit
```

**Problem: Auto-Save Not Working**

**Symptoms:**
- No "Saving..." indicator after edits
- Changes lost after refresh

**Solutions:**

```
1. Check Auto-Save Indicator:
   ✓ Make a change
   ✓ Wait 5 seconds
   ✓ Look for "Saving..." indicator
   ✓ If no indicator, auto-save may be disabled

2. Force Manual Save:
   ✓ Click "Save" button
   ✓ Wait for confirmation

3. Browser Issues:
   ✗ Issue: Browser blocking auto-save
   ✓ Solution:
     - Check browser console for errors (F12)
     - Disable browser extensions
     - Try incognito/private mode

4. Network Issues:
   ✗ Issue: Intermittent connection
   ✓ Solution:
     - Check network stability
     - Use manual save frequently
```

---

### 17.3 Unit Operations

**Problem: Cannot Add Unit**

**Symptoms:**
- "+ Add" button disabled
- Button click has no effect

**Solutions:**

```
1. Wrong Mode:
   ✗ Issue: In Execution Mode (cannot add units)
   ✓ Solution: Switch to Creation Mode (green indicator)

2. Max Depth Reached:
   ✗ Issue: Template allows max 10 levels, you're at level 10
   ✓ Solution: Cannot nest deeper, add at higher level

3. Permissions:
   ✗ Issue: Read-only access to workflow
   ✓ Solution: Request edit permissions from owner
```

**Problem: Cannot Delete Unit**

**Symptoms:**
- Delete button disabled
- "Cannot delete" error

**Solutions:**

```
1. Wrong Mode:
   ✗ Issue: In Execution Mode
   ✓ Solution: Switch to Creation Mode

2. Last Remaining Unit:
   ✗ Issue: Cannot delete last unit (workflow must have at least one)
   ✓ Solution: Add another unit first, then delete

3. Has Children:
   ✗ Issue: Unit has children (some implementations prevent deletion)
   ✓ Solution: Delete children first, then parent
   ✓ Or: Look for "Delete with children" option

4. Linked Workflow:
   ✗ Issue: Workflow is linked, structure locked
   ✓ Solution: Delete from source workflow, or unlink first
```

---

### 17.4 Properties and Content

**Problem: Property Not Showing**

**Symptoms:**
- Expected property (Progress Bar, Done checkbox, etc.) not visible
- Property grayed out

**Solutions:**

```
1. Property Not Enabled in Template:
   ✗ Issue: Template doesn't include that property for this level
   ✓ Solution: 
     - Cannot change template properties in workflow
     - Use different template
     - Or create empty workflow (all properties enabled)

2. Progress Bar Specific:
   ✗ Issue: Unit has no children
   ✓ Solution: Progress bars only show on units with children

3. Done Checkbox Specific:
   ✗ Issue: In Creation Mode
   ✓ Solution: Switch to Execution Mode to see Done checkboxes

4. Cumulative Grade Specific:
   ✗ Issue: Unit has no children with grades
   ✓ Solution: Cumulative grades only appear when children have individual grades
```

**Problem: Cannot Add Attachment (Link, Image, Note, Comment)**

**Symptoms:**
- "Add Link" button disabled
- Modal doesn't open

**Solutions:**

```
1. Property Not Enabled:
   ✗ Issue: Template doesn't enable that attachment type for this level
   ✓ Solution: Use different template or empty workflow

2. Modal Not Opening:
   ✗ Issue: JavaScript error or browser issue
   ✓ Solution:
     - Check browser console (F12) for errors
     - Refresh page
     - Try different browser

3. Image Upload Fails:
   ✗ Issue: Image too large or unsupported format
   ✓ Solution:
     - Resize image (recommended: < 5 MB)
     - Use supported formats (JPG, PNG, GIF)
     - Or use image URL instead of upload
```

---

### 17.5 Tags and Filtering

**Problem: Tag Filter Not Working**

**Symptoms:**
- Select tag, no filtering occurs
- Wrong units shown

**Solutions:**

```
1. Verify Tags Exist:
   ✓ Check that units actually have the tag assigned
   ✓ Tag names are case-sensitive: [Sprint-1] ≠ [sprint-1]

2. Clear Filter First:
   ✓ If another filter is active, clear it
   ✓ Then apply new tag filter

3. Refresh Page:
   ✗ Issue: Tag added but filter dropdown not updated
   ✓ Solution: Refresh page to reload tag list

4. Wrong Mode:
   Some implementations: Tag filtering only works in Execution Mode
   ✓ Solution: Switch to Execution Mode
```

**Problem: Cannot Add Tag**

**Symptoms:**
- "Add Tag" button disabled
- Tag doesn't save

**Solutions:**

```
1. Property Not Enabled:
   ✗ Issue: Tags not enabled for this level in template
   ✓ Solution: Use template with tags enabled

2. Duplicate Tag:
   ✗ Issue: Tag already assigned to this unit
   ✓ Solution: Cannot add same tag twice

3. Tag Name Invalid:
   ✗ Issue: Empty tag name or special characters
   ✓ Solution: 
     - Use alphanumeric characters
     - Hyphens and underscores OK: [Sprint-1], [Q1_2024]
     - Avoid special characters: [Sprint#1] (may fail)
```

---

### 17.6 Modes and Navigation

**Problem: Cannot Switch to Execution Mode**

**Symptoms:**
- Mode toggle disabled
- Stays in Creation Mode

**Solutions:**

```
1. Workflow Has No Units:
   ✗ Issue: Empty workflow cannot switch to Execution Mode
   ✓ Solution: Add at least one unit first

2. Template Not Saved:
   ✗ Issue: Unsaved changes blocking mode switch
   ✓ Solution: Save workflow first, then switch modes
```

**Problem: Expand/Collapse Not Working**

**Symptoms:**
- Click chevron, nothing happens
- All units stuck expanded or collapsed

**Solutions:**

```
1. Unit Has No Children:
   ✓ Units without children have no chevron
   ✓ This is expected behavior

2. State Corruption:
   ✗ Issue: Browser state corrupted
   ✓ Solution:
     - Click "Collapse All" button
     - Then expand individual units
     - Or refresh page

3. Large Workflow Performance:
   ✗ Issue: Workflow too large, slow to expand
   ✓ Solution: Wait a few seconds after clicking
```

---

### 17.7 Workflow Linking

**Problem: Linked Workflow Not Syncing**

**Symptoms:**
- Source workflow updated but linked workflow unchanged
- New units not appearing in linked workflow

**Solutions:**

```
1. Verify Link Still Active:
   ✓ Check for link indicator (🔗) next to workflow name
   ✓ If missing, workflow was unlinked
   ✓ Hover over indicator to see source workflow

2. Source Not Saved:
   ✗ Issue: Changes to source not saved yet
   ✓ Solution: Save source workflow, wait a few seconds

3. Content Changes Don't Sync:
   ✓ Expected behavior: Only structure syncs
   ✓ Names, descriptions, tags don't sync
   ✓ Only add/delete/reorder syncs

4. Refresh Linked Workflow:
   ✗ Issue: Sync happened but page not refreshed
   ✓ Solution: Refresh browser page to see updates

5. Network Issues:
   ✗ Issue: Sync failed due to connection
   ✓ Solution:
     - Check network connection
     - Save source workflow again
     - Refresh linked workflow
```

**Problem: Cannot Unlink Workflow**

**Symptoms:**
- Unlink button disabled
- Error when trying to unlink

**Solutions:**

```
1. Permissions:
   ✗ Issue: Don't have permission to unlink
   ✓ Solution: Contact workflow owner or admin

2. Source Workflow Deleted:
   ✗ Issue: Source workflow no longer exists
   ✓ Solution: Workflow should auto-unlink, refresh page
```

---

### 17.8 Exporting to Boards

**Problem: Export Not Working**

**Symptoms:**
- "Export to Board" button disabled
- Export fails with error

**Solutions:**

```
1. Workflow Not Saved:
   ✗ Issue: Unsaved changes
   ✓ Solution: Save workflow first, then export

2. No Units to Export:
   ✗ Issue: Empty workflow or filtered view is empty
   ✓ Solution: Ensure workflow has units to export

3. Unit Export - No Children:
   ✗ Issue: Trying to export unit without children
   ✓ Solution: Export parent unit, or use full workflow export

4. Tag Export - No Tagged Units:
   ✗ Issue: No units have the selected tag
   ✓ Solution: Verify tag exists and is assigned to units

5. Network/Server Error:
   ✗ Issue: Export process failed
   ✓ Solution:
     - Check network connection
     - Try again in a few moments
     - Try exporting smaller subset (unit or tag export)
```

**Problem: Exported Board is Empty or Incomplete**

**Symptoms:**
- Board created but Dynamic List is empty
- Some units missing from export

**Solutions:**

```
1. Export Process Interrupted:
   ✗ Issue: Export didn't complete
   ✓ Solution: Delete board, export again

2. Filtered Export:
   ✓ Expected: If you exported by tag or unit, only those items appear
   ✓ Solution: Export full workflow if you want everything

3. Permissions:
   ✗ Issue: Don't have permission to create board
   ✓ Solution: Contact admin for board creation permissions
```

---

### 17.9 Performance Issues

**Problem: Workflow Slow to Load or Navigate**

**Symptoms:**
- Long load times
- Laggy scrolling
- Slow to expand/collapse

**Solutions:**

```
1. Large Workflow:
   ✗ Issue: Workflow has 500+ units
   ✓ Solution:
     - Keep most units collapsed
     - Use "Collapse All" frequently
     - Export by tag/unit (smaller batches)
     - Consider splitting into multiple workflows

2. Browser Performance:
   ✗ Issue: Too many browser tabs open
   ✓ Solution:
     - Close unnecessary tabs
     - Restart browser
     - Clear browser cache

3. Many Attachments:
   ✗ Issue: Large images or many attachments
   ✓ Solution:
     - Compress images before uploading
     - Use image URLs instead of uploads
     - Limit attachments per unit

4. Browser Extensions:
   ✗ Issue: Extensions interfering
   ✓ Solution: Try incognito/private mode (disables extensions)
```

---

### 17.10 Getting Help

**Documentation Resources:**

```
1. This Manual:
   - Comprehensive guide to all features
   - Search for specific topics

2. Platform Overview:
   - Understanding three-tier system
   - Templates → Workflows → Boards

3. Template Builder Manual:
   - If creating custom templates

4. Boards Manual:
   - After exporting to boards
```

**Support Contacts:**

```
Email: support@platform.com
Phone: 1-800-PLATFORM
Live Chat: Available on platform (bottom-right)
Help Desk: https://support.platform.com
```

**Before Contacting Support:**

```
Gather this information:

1. Error Messages:
   - Take screenshot of any error messages
   - Copy exact text of error

2. Browser Console Logs:
   - Press F12 to open Developer Tools
   - Go to "Console" tab
   - Screenshot any red errors
   - Save console output if possible

3. Steps to Reproduce:
   - What you were trying to do
   - Steps you took
   - What you expected to happen
   - What actually happened

4. Environment:
   - Browser and version (e.g., Chrome 120)
   - Operating system (Windows, Mac, Linux)
   - Workflow name and ID (if applicable)
   - Screenshot of issue

This helps support diagnose faster
```

**Self-Help Checklist:**

```
Before contacting support, try:

☐ Refresh page (F5)
☐ Clear browser cache
☐ Try different browser
☐ Try incognito/private mode
☐ Check internet connection
☐ Log out and log back in
☐ Check system status page (https://status.platform.com)
☐ Search this manual for error message

If none of these help, contact support
```

---

---

## APPENDICES

Quick reference guides and worksheets for workflow management.

---

### APPENDIX A: KEYBOARD SHORTCUTS QUICK REFERENCE

**Workflow Management**

| Shortcut | Action | Description |
|----------|--------|-------------|
| `Ctrl+N` (Win) / `Cmd+N` (Mac) | New Workflow | Opens create workflow modal |
| `Ctrl+E` (Win) / `Cmd+E` (Mac) | Toggle Mode | Switches Creation \u2194 Execution |
| `Ctrl+F` (Win) / `Cmd+F` (Mac) | Focus Selector | Jump to workflow dropdown |
| `Ctrl+A` (Win) / `Cmd+A` (Mac) | Add Root Unit | Adds new top-level unit |
| `Ctrl+S` (Win) / `Cmd+S` (Mac) | Save | Manually saves workflow |

**Navigation**

| Shortcut | Action | Description |
|----------|--------|-------------|
| `ESC` | Close Modal | Closes any open modal/dialog |
| `Enter` | Submit Form | Submits active form |
| `Tab` | Next Field | Moves to next form field |
| `Shift+Tab` | Previous Field | Moves to previous form field |
| `?` | Show Shortcuts | Opens keyboard shortcuts reference |

**Future Shortcuts (Planned)**

| Shortcut | Action | Description |
|----------|--------|-------------|
| `Ctrl+D` | Delete Unit | Deletes selected unit |
| `Ctrl+\u2191` | Move Up | Moves unit up in order |
| `Ctrl+\u2193` | Move Down | Moves unit down in order |
| `Space` | Expand/Collapse | Toggles unit expand/collapse |
| `Alt+E` | Expand All | Expands all units |
| `Alt+C` | Collapse All | Collapses all units |

---\n\n### APPENDIX B: PROPERTY CONFIGURATION GUIDE\n\n**Property-by-Property Reference**\n\n**1. Icon**\n```\nPurpose: Visual identification and navigation\nEnable When: Want visual distinction between units\nUse Cases: \n- Category identification (🔐 Security, 👥 HR, 🏢 Physical)\n- Status indication (✅ Complete, ⚠️ Warning, ❌ Failed)\n- Type classification (📄 Policy, 📊 Report, 🔧 Configuration)\n\nBest Practices:\n- Use consistently within categories\n- Choose recognizable icons\n- Don't overuse (can be distracting)\n```\n\n**2. Display ID**\n```\nPurpose: External reference numbering\nEnable When: Need to reference external standards or internal numbering\nUse Cases:\n- Compliance: \"A.5.1\" (ISO 27001), \"AC-2\" (NIST)\n- Legal: \"Article 5(1)(a)\" (GDPR)\n- Internal: \"REQ-001\", \"TASK-123\"\n\nBest Practices:\n- Use standard numbering schemes\n- Document numbering system in workflow description\n- Keep IDs short (< 20 characters)\n```\n\n**3. Name**\n```\nPurpose: Unit title/label\nEnable When: Always (required)\nUse Cases: All workflows\n\nBest Practices:\n- Clear and concise (< 60 characters)\n- Action-oriented for tasks (\"Draft Policy\")\n- Noun-based for categories (\"Access Control\")\n- Consistent capitalization\n```\n\n**4. Description**\n```\nPurpose: Detailed explanation and guidance\nEnable When: Need to provide context, requirements, or instructions\nUse Cases:\n- Requirement details\n- Implementation guidance\n- Acceptance criteria\n- References and links\n\nBest Practices:\n- What, Why, How structure\n- Include examples\n- Link to policies/standards\n- Rich text formatting for readability\n```\n\n**5. Tags**\n```\nPurpose: Categorization and filtering\nEnable When: Need to filter, organize, or export subsets\nUse Cases:\n- Priority: [Critical], [High], [Medium], [Low]\n- Department: [IT], [HR], [Finance]\n- Phase: [Phase-1], [Phase-2], [Phase-3]\n- Timeline: [Q1-2024], [Q2-2024]\n\nBest Practices:\n- Define taxonomy upfront\n- Consistent naming\n- Limit to 3-5 tags per unit\n- Document tag meanings\n```\n\n**6. Done Checkbox**\n```\nPurpose: Completion tracking\nEnable When: Need to track task completion\nUse Cases:\n- Task lists\n- Checklists\n- Implementation tracking\n- Audit evidence\n\nBest Practices:\n- Enable on lowest granular level\n- Clear completion criteria\n- Use with Progress Bars for visual tracking\n```\n\n**7. Grade (Individual)**\n```\nPurpose: Numeric scoring/rating\nEnable When: Need quantitative assessment\nUse Cases:\n- Maturity assessment (1-5)\n- Risk rating (1-10)\n- Priority scoring (1-100)\n- Performance rating (1-5)\n\nBest Practices:\n- Define scale clearly\n- Document what each grade means\n- Consistent scale across workflow\n- Use with Cumulative Grades for rollup\n```\n\n**8. Cumulative Grade**\n```\nPurpose: Auto-calculated sum of child grades\nEnable When: Need aggregate scoring\nUse Cases:\n- Total risk score\n- Overall maturity\n- Project health score\n\nBest Practices:\n- Enable on parent units\n- Children must have Individual Grades\n- Read-only (auto-calculated)\n- Display Σ (sigma) symbol\n```\n\n**9. Progress Bar**\n```\nPurpose: Visual completion percentage\nEnable When: Parent units need visual progress tracking\nUse Cases:\n- Phase completion\n- Project status\n- Implementation progress\n\nBest Practices:\n- Enable on parents only\n- Children must have Done Checkboxes\n- Color-coded (red/yellow/green)\n- Show percentage\n```\n\n**10. Links**\n```\nPurpose: External references and URLs\nEnable When: Need to link to external resources\nUse Cases:\n- Policy documents\n- Regulation references\n- Tools and systems\n- Templates and forms\n\nBest Practices:\n- Descriptive link titles\n- Keep links current\n- Use relative links for internal resources\n- Test links periodically\n```\n\n**11. Images**\n```\nPurpose: Visual evidence and documentation\nEnable When: Need screenshots or diagrams\nUse Cases:\n- Configuration screenshots\n- Architecture diagrams\n- Process flowcharts\n- Evidence photos\n\nBest Practices:\n- Compress images (< 5 MB)\n- Descriptive filenames\n- Annotate if needed\n- Consider privacy (redact sensitive data)\n```\n\n**12. Notes**\n```\nPurpose: Formatted documentation\nEnable When: Need rich text documentation\nUse Cases:\n- Implementation details\n- Decision rationale\n- Meeting notes\n- Evidence documentation\n\nBest Practices:\n- Use rich text formatting\n- Include timestamps\n- Sign notes with author\n- Link to related documents\n```\n\n**13. Comments**\n```\nPurpose: Threaded discussions\nEnable When: Need team collaboration and discussions\nUse Cases:\n- Questions and answers\n- Review feedback\n- Team collaboration\n- Status updates\n\nBest Practices:\n- Use for discussions, not documentation\n- Timestamp and author metadata\n- Convert important comments to notes\n- Monitor and respond\n```\n\n---\n\n**Property Dependency Matrix**\n\n| Property | Requires | Works Best With |\n|----------|----------|-----------------|\n| Progress Bar | Done Checkboxes on children | N/A |\n| Cumulative Grade | Individual Grades on children | Progress Bar |\n| Done Checkbox | N/A | Progress Bar (on parent) |\n| Individual Grade | N/A | Cumulative Grade (on parent) |\n| Tags | N/A | Filter, Export functions |\n| Links | N/A | Description |\n| Images | N/A | Description, Notes |\n| Notes | N/A | Links, Images |\n| Comments | N/A | N/A |\n\n---\n\n### APPENDIX C: EXPORT CHECKLIST\n\n**Pre-Export Checklist**\n\n```\n\u2610 1. Finalize Workflow Structure\n   \u2610 All units added\n   \u2610 Hierarchy correct\n   \u2610 Unit order logical\n   \u2610 No placeholder or test units\n\n\u2610 2. Complete Unit Content\n   \u2610 All units have names\n   \u2610 Descriptions written\n   \u2610 Display IDs assigned (if needed)\n   \u2610 Icons selected\n\n\u2610 3. Add Attachments\n   \u2610 Policy links added\n   \u2610 Reference documents linked\n   \u2610 Screenshots uploaded (if needed)\n   \u2610 Implementation notes added\n\n\u2610 4. Apply Tags\n   \u2610 Tag taxonomy defined\n   \u2610 Tags applied to units\n   \u2610 Tag meanings documented in workflow description\n\n\u2610 5. Review and Verify\n   \u2610 Proofread all names and descriptions\n   \u2610 Test all links (open in new tab)\n   \u2610 Verify images display correctly\n   \u2610 Check for spelling/grammar errors\n\n\u2610 6. Save Workflow\n   \u2610 Click \"Save Structure\" button\n   \u2610 Wait for \"Saved\" confirmation\n   \u2610 Refresh page to verify changes persisted\n```\n\n**Export Process Checklist**\n\n```\n\u2610 1. Choose Export Method\n   \u2610 Full Workflow (all units)\n   \u2610 Unit Export (specific section)\n   \u2610 Tag-Based Export (filtered by tag)\n\n\u2610 2. Select Destination\n   \u2610 Create New Board (most common)\n   \u2610 Or: Add to Existing Board\n\n\u2610 3. Configure Export Options\n   \u2610 Include Descriptions: [✓]\n   \u2610 Include Links: [✓]\n   \u2610 Include Images: [✓]\n   \u2610 Include Notes: [✓]\n   \u2610 Include Comments: [✓]\n   \u2610 Sync future changes: [✓]\n\n\u2610 4. Name Board\n   \u2610 Descriptive board name\n   \u2610 Include client/project name\n   \u2610 Include phase/type if relevant\n   Example: \"Acme Corp - ISO 27001 Implementation\"\n\n\u2610 5. Review Export Summary\n   \u2610 Number of units correct\n   \u2610 Export scope correct\n   \u2610 Destination board correct\n\n\u2610 6. Execute Export\n   \u2610 Click \"Confirm Export\"\n   \u2610 Wait for completion\n   \u2610 Watch for success message\n```\n\n**Post-Export Checklist**\n\n```\n\u2610 1. Verify Board Created\n   \u2610 Open board (click \"Open Board\" button)\n   \u2610 Board loads successfully\n\n\u2610 2. Verify Dynamic List\n   \u2610 Full workflow structure visible\n   \u2610 Hierarchy intact\n   \u2610 All units present\n   \u2610 Unit names correct\n   \u2610 Expand/collapse works\n\n\u2610 3. Verify Content\n   \u2610 Descriptions visible\n   \u2610 Links clickable\n   \u2610 Images display\n   \u2610 Notes visible\n   \u2610 Tags present\n\n\u2610 4. Configure Board\n   \u2610 Set up columns (To Do, In Progress, Done)\n   \u2610 Create milestones (if time-based project)\n   \u2610 Define categories (if needed)\n   \u2610 Set up assignments\n\n\u2610 5. Train Users\n   \u2610 Show Dynamic List (reference)\n   \u2610 Explain read-only nature\n   \u2610 Demonstrate task creation from references\n   \u2610 Show how to use columns and milestones\n\n\u2610 6. Communicate\n   \u2610 Notify team board is ready\n   \u2610 Share board link\n   \u2610 Provide quick start guide\n   \u2610 Schedule Q&A session if needed\n```\n\n---\n\n### APPENDIX D: WORKFLOW PLANNING WORKSHEET\n\n**WORKFLOW PLANNING WORKSHEET**\n\n**Project Information**\n```\nProject Name: _________________________________\nProject Type: _________________________________\nRegulation/Standard: _________________________________\nClient/Department: _________________________________\nOwner: _________________________________\nContact: _________________________________\nTimeline: _____________ to _____________\n```\n\n**1. Template Selection**\n```\nWill you use an existing template? \u2610 Yes \u2610 No\n\nIf Yes:\n  Template Name: _________________________________\n  Modifications Needed: _________________________________\n  _________________________________\n\nIf No (Empty Workflow):\n  Reason: _________________________________\n```\n\n**2. Structure Design**\n```\nNumber of Levels: _____ (1-10)\n\nLevel 1 Name: ________________ (Singular) ________________ (Plural)\nExample units: _________________________________\n\nLevel 2 Name: ________________ (Singular) ________________ (Plural)\nExample units: _________________________________\n\nLevel 3 Name: ________________ (Singular) ________________ (Plural)\nExample units: _________________________________\n\nLevel 4 Name: ________________ (Singular) ________________ (Plural)\nExample units: _________________________________\n\n(Add more levels as needed)\n```\n\n**3. Property Configuration**\n```\nFor each level, check which properties to enable:\n\n                        L1   L2   L3   L4   L5\nIcon                    \u2610    \u2610    \u2610    \u2610    \u2610\nDisplay ID              \u2610    \u2610    \u2610    \u2610    \u2610\nName                    ✓    ✓    ✓    ✓    ✓ (Always)\nDescription             \u2610    \u2610    \u2610    \u2610    \u2610\nTags                    \u2610    \u2610    \u2610    \u2610    \u2610\nDone Checkbox           \u2610    \u2610    \u2610    \u2610    \u2610\nGrade                   \u2610    \u2610    \u2610    \u2610    \u2610\nCumulative Grade        \u2610    \u2610    \u2610    \u2610    \u2610\nProgress Bar            \u2610    \u2610    \u2610    \u2610    \u2610\nLinks                   \u2610    \u2610    \u2610    \u2610    \u2610\nImages                  \u2610    \u2610    \u2610    \u2610    \u2610\nNotes                   \u2610    \u2610    \u2610    \u2610    \u2610\nComments                \u2610    \u2610    \u2610    \u2610    \u2610\n```\n\n**4. Tag Taxonomy**\n```\nDefine tag categories and tags:\n\nCategory 1: Priority\nTags: [_______] [_______] [_______] [_______]\n\nCategory 2: _________________________________\nTags: [_______] [_______] [_______] [_______]\n\nCategory 3: _________________________________\nTags: [_______] [_______] [_______] [_______]\n\nCategory 4: _________________________________\nTags: [_______] [_______] [_______] [_______]\n\nTag Meanings (document in workflow description):\n[_______]: _________________________________\n[_______]: _________________________________\n[_______]: _________________________________\n```\n\n**5. Content Requirements**\n```\nWhat content will you include?\n\n\u2610 Unit names (required)\n\u2610 Descriptions (recommended)\n\u2610 Display IDs (if referencing external standards)\n\u2610 Icons (if needed for navigation)\n\u2610 Policy links\n\u2610 Regulation references\n\u2610 Implementation notes\n\u2610 Screenshots/diagrams\n\u2610 Templates and forms\n\u2610 Training materials\n```\n\n**6. Export Planning**\n```\nHow will workflow be exported?\n\n\u2610 Full workflow export\n\u2610 Phased export (by tag)\n\u2610 Department-specific export (by unit)\n\nExport Phases:\nPhase 1: Tag [_______] - Timeline: _______\nPhase 2: Tag [_______] - Timeline: _______\nPhase 3: Tag [_______] - Timeline: _______\n\nBoard Configuration:\n\u2610 Columns needed: _________________________________\n\u2610 Milestones needed: _________________________________\n\u2610 Categories needed: _________________________________\n```\n\n**7. Collaboration Plan**\n```\nWho will use this workflow?\n\nRole 1: _________________ - Responsibilities: _________________________________\nRole 2: _________________ - Responsibilities: _________________________________\nRole 3: _________________ - Responsibilities: _________________________________\n\nTraining needed?\n\u2610 Yes - Schedule: _______  Duration: _______\n\u2610 No\n\nDocumentation needed?\n\u2610 Quick start guide\n\u2610 Video tutorial\n\u2610 FAQ document\n\u2610 Tag guide\n```\n\n**8. Maintenance Plan**\n```\nHow will workflow be maintained?\n\nReview Schedule:\n\u2610 Weekly\n\u2610 Monthly\n\u2610 Quarterly\n\u2610 Annually\n\nUpdate Triggers:\n\u2610 Regulation change\n\u2610 Client feedback\n\u2610 Process improvement\n\u2610 Audit finding\n\nOwner: _________________________________\nBackup Owner: _________________________________\n```\n\n---\n\n### APPENDIX E: SAMPLE WORKFLOWS BY INDUSTRY\n\n**1. Technology / IT**\n\n**Software Development Lifecycle (SDLC)**\n```\nLevels: 4\n- L1: Phases (Requirements, Design, Development, Testing, Deployment, Maintenance)\n- L2: Activities\n- L3: Tasks\n- L4: Deliverables\n\nKey Properties: Progress Bars, Done Checkboxes, Comments\nTags: [Sprint-1], [Sprint-2], [Frontend], [Backend], [Database]\nUse Case: Track software development projects\n```\n\n**Incident Response**\n```\nLevels: 4\n- L1: Phases (Detection, Containment, Eradication, Recovery, Lessons Learned)\n- L2: Activities\n- L3: Tasks\n- L4: Evidence\n\nKey Properties: Done Checkboxes, Notes (for incident documentation), Links (to logs)\nTags: [Severity-1], [Severity-2], [Severity-3], [Cyber], [Operational]\nUse Case: Manage security incident response\n```\n\n---\n\n**2. Healthcare**\n\n**HIPAA Compliance**\n```\nLevels: 4\n- L1: Safeguard Categories (Administrative, Physical, Technical)\n- L2: Standards\n- L3: Implementation Specifications\n- L4: Evidence\n\nKey Properties: Display IDs (164.308(a)(1)), Descriptions, Links, Done Checkboxes\nTags: [Required], [Addressable], [IT], [Clinical], [Administrative]\nUse Case: Track HIPAA compliance across healthcare organization\n```\n\n**Patient Onboarding**\n```\nLevels: 3\n- L1: Phases (Registration, Assessment, Treatment Planning)\n- L2: Activities\n- L3: Forms and Checklists\n\nKey Properties: Done Checkboxes, Progress Bars, Notes\nTags: [Urgent], [Routine], [Intake], [Insurance]\nUse Case: Standardize patient intake process\n```\n\n---\n\n**3. Finance / Banking**\n\n**SOC 2 Type II Audit**\n```\nLevels: 4\n- L1: Trust Service Criteria (Security, Availability, Confidentiality, Processing Integrity, Privacy)\n- L2: Control Objectives\n- L3: Controls\n- L4: Testing Procedures\n\nKey Properties: Grades (control effectiveness 1-5), Cumulative Grades, Links to evidence\nTags: [In-Scope], [Out-of-Scope], [Design-Effective], [Operating-Effective]\nUse Case: Prepare for SOC 2 audit\n```\n\n**AML/KYC Compliance**\n```\nLevels: 3\n- L1: Requirements (Customer Identification, Due Diligence, Ongoing Monitoring, Reporting)\n- L2: Procedures\n- L3: Checklists\n\nKey Properties: Done Checkboxes, Notes (for customer documentation), Links (to regulations)\nTags: [High-Risk], [Medium-Risk], [Low-Risk], [Enhanced-DD]\nUse Case: Ensure anti-money laundering compliance\n```\n\n---\n\n**4. Manufacturing**\n\n**ISO 9001 Quality Management**\n```\nLevels: 4\n- L1: Clauses (Context, Leadership, Planning, Support, Operation, Performance, Improvement)\n- L2: Requirements\n- L3: Processes\n- L4: Records\n\nKey Properties: Display IDs (4.1, 4.2, etc.), Descriptions, Done Checkboxes, Images (process diagrams)\nTags: [Documented], [Implemented], [Production], [Quality], [Management]\nUse Case: Implement and maintain ISO 9001 QMS\n```\n\n**Production Line Setup**\n```\nLevels: 3\n- L1: Phases (Equipment Setup, Testing, Production, Quality Check)\n- L2: Stations\n- L3: Tasks\n\nKey Properties: Progress Bars, Done Checkboxes, Images (setup photos)\nTags: [Line-A], [Line-B], [Critical-Path], [Quality]\nUse Case: Standardize production line configuration\n```\n\n---\n\n**5. Legal / Compliance**\n\n**Contract Review Process**\n```\nLevels: 3\n- L1: Review Phases (Initial Review, Negotiation, Approval, Execution)\n- L2: Review Areas (Terms, Liability, IP, Data Privacy)\n- L3: Checklist Items\n\nKey Properties: Done Checkboxes, Comments (for review feedback), Links (to contract versions)\nTags: [High-Value], [Standard], [Vendor], [Customer], [Legal-Hold]\nUse Case: Standardize contract review workflow\n```\n\n**Data Privacy Impact Assessment (DPIA)**\n```\nLevels: 4\n- L1: Assessment Phases (Scoping, Risk Analysis, Mitigation, Approval)\n- L2: Assessment Areas\n- L3: Questions\n- L4: Evidence\n\nKey Properties: Descriptions, Notes, Links, Images\nTags: [High-Risk], [Medium-Risk], [Low-Risk], [GDPR], [CCPA]\nUse Case: Conduct privacy impact assessments\n```\n\n---\n\n**6. Retail / E-Commerce**\n\n**Product Launch Checklist**\n```\nLevels: 3\n- L1: Phases (Pre-Launch, Launch Day, Post-Launch, Growth)\n- L2: Departments (Marketing, Sales, Product, Support, Operations)\n- L3: Tasks\n\nKey Properties: Progress Bars, Done Checkboxes, Tags\nTags: [Launch-Critical], [Marketing], [Sales], [Week-Before], [Launch-Day], [Week-After]\nUse Case: Coordinate multi-department product launches\n```\n\n**PCI-DSS Compliance**\n```\nLevels: 4\n- L1: Requirements (12 PCI-DSS requirements)\n- L2: Sub-requirements\n- L3: Controls\n- L4: Testing Procedures\n\nKey Properties: Display IDs (1.1, 1.2, etc.), Descriptions, Done Checkboxes, Links\nTags: [Network], [Applications], [Operations], [Access-Control]\nUse Case: Achieve PCI-DSS compliance for payment processing\n```\n\n---\n\n**7. Education**\n\n**Course Curriculum Development**\n```\nLevels: 4\n- L1: Modules\n- L2: Lessons\n- L3: Learning Objectives\n- L4: Activities and Assessments\n\nKey Properties: Progress Bars, Done Checkboxes, Links (to resources), Notes\nTags: [Week-1], [Week-2], [Assignment], [Reading], [Video], [Quiz]\nUse Case: Structure and track course development\n```\n\n**Accreditation Preparation**\n```\nLevels: 4\n- L1: Standards (e.g., ABET criteria)\n- L2: Program Outcomes\n- L3: Assessment Methods\n- L4: Evidence\n\nKey Properties: Descriptions, Links, Images, Done Checkboxes\nTags: [Year-1], [Year-2], [Program-A], [Program-B], [Documentation-Complete]\nUse Case: Prepare for institutional accreditation\n```\n\n---\n\n**8. Non-Profit**\n\n**Grant Application Process**\n```\nLevels: 3\n- L1: Application Phases (Research, Preparation, Submission, Reporting)\n- L2: Activities\n- L3: Tasks and Deliverables\n\nKey Properties: Done Checkboxes, Progress Bars, Links (to forms), Notes\nTags: [Grant-A], [Grant-B], [Deadline-Approaching], [High-Priority]\nUse Case: Manage multiple grant applications\n```\n\n**Program Evaluation**\n```\nLevels: 4\n- L1: Evaluation Areas (Outputs, Outcomes, Impact)\n- L2: Metrics\n- L3: Data Collection Methods\n- L4: Analysis Tasks\n\nKey Properties: Done Checkboxes, Images (charts), Notes (findings)\nTags: [Q1], [Q2], [Q3], [Q4], [Program-A], [Program-B]\nUse Case: Track program effectiveness and impact\n```\n\n---\n\n**Workflow Selection Guide**\n\n```\nChoosing the Right Workflow for Your Industry:\n\n1. Identify Your Primary Need:\n   \u2610 Compliance/Regulatory (GDPR, ISO, HIPAA, SOC 2)\n   \u2610 Process Management (SDLC, Manufacturing, Onboarding)\n   \u2610 Project Management (Product Launch, Development)\n   \u2610 Quality/Audit (QMS, Risk Assessment, Evaluation)\n\n2. Match to Industry:\n   - Technology: SDLC, Incident Response, SOC 2\n   - Healthcare: HIPAA, Patient Onboarding\n   - Finance: SOC 2, AML/KYC\n   - Manufacturing: ISO 9001, Production Setup\n   - Legal: Contract Review, DPIA\n   - Retail: Product Launch, PCI-DSS\n   - Education: Curriculum, Accreditation\n   - Non-Profit: Grants, Program Evaluation\n\n3. Customize for Your Organization:\n   - Start with industry example\n   - Modify structure for your processes\n   - Add company-specific content\n   - Apply your tag taxonomy\n   - Configure properties for your needs\n\n4. Test and Iterate:\n   - Pilot with small team\n   - Collect feedback\n   - Refine structure and content\n   - Roll out to full organization\n```\n\n---\n\n## END OF WORKFLOWS MANUAL\n\n---\n\n**Document Information:**\n\n```\nTitle: Workflows Manual\nVersion: 1.0\nLast Updated: 2024-01-15\nTotal Chapters: 17\nTotal Appendices: 5\n\nFor questions or support:\nEmail: support@platform.com\nDocumentation: https://docs.platform.com\n```\n\n---
