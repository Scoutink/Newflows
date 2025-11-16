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

### CHAPTER 4: WORKFLOW PROPERTIES

**4.1 Workflow-Level Settings**
**Workflow Name**
- Primary identifier
- Shown in selector
- 3-100 characters
- Edit via rename button

**Workflow Icon**
- Visual brand/identifier
- 60+ icon library
- Optional but recommended
- Change via icon picker

**Workflow Description**
- Narrative overview
- Purpose and scope
- Key stakeholders
- Special instructions
- Rich text or plain text

**Sequential Order Enforcement**
- Checkbox setting
- Forces completion order
- Audit trail compliance
- When to enable/disable

**4.2 Linked Workflow Indicator**
- Shows if workflow is linked
- Link icon in navigation
- Unlink option available
- Synchronization status

---

### CHAPTER 5: BUILDING YOUR WORKFLOW STRUCTURE

**5.1 Understanding Units**
- Individual items in hierarchy
- Can have children
- Inherit template properties
- Auto-generated IDs

**5.2 Adding Root-Level Units**
- "Add [Level Name]" button at bottom
- Keyboard shortcut: Ctrl+A
- Empty state button
- First-level items

**5.3 Adding Child Units**
- "Add [Child Level Name]" button on parent
- Appears after children
- Nested hierarchy
- Unlimited children per parent

**5.4 Unit Header Components**
**Collapse/Expand Button:**
- Chevron icon (▶ or ▼)
- Click to toggle children
- Smart state preservation
- Only on units with children

**Icon Area:**
- Image if assigned
- Icon picker button (creation mode)
- Visual identification
- 24x24px display

**Unit ID:**
- Custom identifier
- Editable field (creation mode)
- Display only (execution mode)
- Examples: "AC-1", "PR.DS-5"

**Unit Name:**
- Primary identifier
- Editable field (creation mode)
- Display text (execution mode)
- Required field

**Tags:**
- Colored badges
- Click to filter (execution mode)
- Add/remove (creation mode)
- Multiple per unit

**Done Checkbox:**
- Execution mode only
- Toggle completion
- Progress calculation
- Visual feedback

**Grade:**
- Numeric input (if not cumulative)
- Display only (if cumulative)
- Sigma (Σ) indicator for cumulative
- Configurable scale

**Progress Bar:**
- Visual percentage
- Based on child completion
- Requires child Done checkboxes
- Hover shows percentage

**Delete Button:**
- Trash icon
- Creation mode only
- Confirmation required
- Recursive deletion

**Export Button:**
- "Board" button
- Execution mode only
- On units with children
- Creates project board

**5.5 Unit Body (Collapsible)**
**Description Field:**
- Detailed information
- Textarea (creation mode)
- Display only (execution mode)
- Blur to save

**Attachments Section:**
- Links, Images, Notes, Comments
- Each has add button
- Display in lists
- Delete individually

---

### CHAPTER 6: WORKING WITH PROPERTIES

**6.1 Editing Unit Names**
- Click in name field
- Type new name
- Blur to auto-save
- Real-time update

**6.2 Assigning Icons**
- Click icon picker button
- Modal shows 60+ icons
- Select icon
- Updates immediately

**6.3 Setting Unit IDs**
- Type in ID field
- Regulatory codes
- Internal references
- Cross-reference keys

**6.4 Writing Descriptions**
- Click to expand
- Type content
- Auto-save on blur
- Supports line breaks

**6.5 Adding Tags**
- "+" button in tag area
- Modal prompts for tag name
- Examples: "critical", "annual", "Q1"
- Creates colored badge

**6.6 Removing Tags**
- Click "x" on tag badge
- Immediate removal
- Re-render updates

**6.7 Setting Grades**
- Enter numeric value
- Decimal precision
- Cumulative auto-calculates
- Progress bars update

---

### CHAPTER 7: MANAGING ATTACHMENTS

**7.1 Adding Links**
- Click "Add Link" button
- Modal form appears
- Link text (display name)
- URL (auto-formats to https://)
- Saved to unit footer

**7.2 Adding Images**
- Click "Add Image" button
- Modal prompts for URL
- Image URL required
- Displays as thumbnail
- Click to enlarge

**7.3 Adding Notes**
- Click "Add Note" button
- Modal with rich text editor
- Note title required
- Formatted content (bold, italic, lists, links)
- Saved as HTML

**7.4 Adding Comments**
- Click "Add Comment" button
- Modal with textarea
- Plain text only
- Discussion thread
- Newest first display

**7.5 Viewing Attachments**
- Expandable section
- Grouped by type
- Icons indicate type
- Click links to open
- Click images to enlarge
- Expand notes to read

**7.6 Deleting Attachments**
- Delete icon on each item
- No confirmation (immediate)
- Removed from footer
- Updates display

---

### CHAPTER 8: ORGANIZING WITH TAGS

**8.1 Tag Strategy**
**Priority Levels:**
- "critical", "high", "medium", "low"

**Timeframes:**
- "Q1-2024", "annual", "monthly"

**Audit Focus:**
- "external-audit", "internal-review"

**Departments:**
- "IT", "HR", "Finance", "Legal"

**Status:**
- "in-progress", "blocked", "pending"

**8.2 Filtering by Tags**
- Click tag badge (execution mode)
- Workflow filters to tagged items
- Includes parent hierarchy
- Filter banner displays
- "Clear Filter" button to reset

**8.3 Exporting Tagged Items**
- Filter by tag first
- "Export Tag to Board" button appears
- Creates focused project board
- All tagged items become tasks
- Tag becomes board label

---

### CHAPTER 9: TRACKING PROGRESS

**9.1 Completion Tracking**
- Switch to execution mode
- Check "Done" boxes as complete
- Visual indicators update
- Progress bars recalculate

**9.2 Progress Bars**
- Show child completion percentage
- 0% (none done) to 100% (all done)
- Hover to see exact count
- Only on units with children

**9.3 Grade Tracking**
**Individual Grades:**
- Set numeric scores
- Assessment values
- Maturity levels
- Manual entry

**Cumulative Grades:**
- Auto-calculated totals
- Sum of all children
- Read-only parent values
- Sigma (Σ) indicator

**9.4 Sequential Enforcement**
- Enable in workflow settings
- Forces order completion
- Prevents skipping
- Audit compliance

---

### CHAPTER 10: EXPAND/COLLAPSE NAVIGATION

**10.1 Individual Unit Collapse**
- Click chevron button
- Hides children
- Preserves child states
- Smart memory

**10.2 Expand All**
- Button in top navigation
- Opens entire hierarchy
- All units visible
- Toast confirmation

**10.3 Collapse All**
- Button in top navigation
- Hides all children
- Clean overview
- Default state on first visit

**10.4 State Persistence**
- Saves to browser
- Per-workflow tracking
- Restores on page reload
- User preference memory

---

### CHAPTER 11: WORKFLOW LINKING

**11.1 What is Workflow Linking?**
- Synchronized workflows
- Structural consistency
- Multiple client deployments
- Automatic updates

**11.2 Creating Linked Workflows**
- Select "Linked Workflow" option
- Choose source workflow
- Name the new workflow
- Link indicator appears

**11.3 How Linking Works**
**Synchronized:**
- Unit additions
- Unit deletions
- Unit reordering
- Structural changes

**Independent:**
- Unit names
- Descriptions
- Tags
- Attachments
- Completion status
- Grades

**11.4 Unlinking Workflows**
- Click unlink button
- Confirmation required
- Becomes independent
- No further syncing

**11.5 Use Cases**
- Multiple client regulations
- Regional variations
- Department-specific views
- Maintain consistency

---

### CHAPTER 12: EXPORTING TO BOARDS

**12.1 Full Workflow Export**
- "Export to Board" button
- Entire workflow converts
- Creates dynamic list
- Creates board structure
- References column with full tree

**12.2 Unit-Level Export**
- Click "Board" button on unit
- Exports unit and all children
- Creates flat task list
- Board named: "Workflow: Unit Name"

**12.3 Tag-Based Export**
- Filter by tag
- "Export Tag to Board" button
- Only tagged items export
- Tag becomes board label

**12.4 What Gets Exported**
**Preserved:**
- All unit names
- Descriptions
- Tags (as labels)
- Links, images, notes, comments
- Completion status
- Hierarchy context

**Transformed:**
- Units become cards
- Hierarchy becomes dynamic list
- Tags become labels
- Structure becomes backlog

**12.5 Post-Export**
- Board opens in new tab
- Consultant configures references
- Client manages workspace
- Two-panel interface

---

### CHAPTER 13: KEYBOARD SHORTCUTS

**13.1 Workflow Management**
- Ctrl+N: New workflow
- Ctrl+E: Toggle mode
- Ctrl+F: Focus workflow selector
- Ctrl+A: Add root unit
- Ctrl+S: Save (auto-saves already)

**13.2 Help and Navigation**
- ?: Show all shortcuts
- ESC: Close modals
- Enter: Submit forms

**13.3 Shortcut Reference Modal**
- Press "?" key
- Categorized display
- Styled keyboard keys
- Descriptions included

---

### CHAPTER 14: AUTO-SAVE AND DATA PERSISTENCE

**14.1 Auto-Save Behavior**
- 5-second debounce
- After any change
- Mode-aware (structure vs execution)
- Loading indicators
- Toast notifications

**14.2 Manual Save**
- "Save Structure" button
- "Save Execution" button
- Immediate save
- Useful before exports

**14.3 What Gets Saved**
**Structure Data:**
- All units
- All properties
- All attachments
- Hierarchy relationships

**Execution Data:**
- Completion status
- Progress tracking
- Per-workflow state

**Preferences:**
- Theme choice
- Mode selection
- Collapse states

---

### CHAPTER 15: BEST PRACTICES

**15.1 Workflow Design**
- Start with template
- Name descriptively
- Add comprehensive descriptions
- Use icons for visual navigation
- Tag strategically

**15.2 Content Guidelines**
**Unit Naming:**
- Clear, concise
- Action-oriented for tasks
- Noun-based for categories
- Consistent formatting

**Descriptions:**
- What, why, how
- Include examples
- Reference policies
- Add guidance

**Tagging:**
- Consistent taxonomy
- Not too many tags
- Meaningful categories
- Document tag meanings

**15.3 Collaboration**
- Share workflows with clients
- Provide training
- Document usage
- Collect feedback
- Iterate and improve

**15.4 Maintenance**
- Review regularly
- Update for regulation changes
- Archive old versions
- Keep current

---

### CHAPTER 16: COMMON WORKFLOWS

**16.1 GDPR Compliance Workflow**
**Structure:**
- L1: Principles (7)
- L2: Requirements per principle
- L3: Implementation actions
- L4: Evidence items

**Properties:**
- Display IDs (article references)
- Descriptions (legal requirements)
- Links (policy documents)
- Notes (implementation evidence)
- Tags (priority, department)

**16.2 Risk Assessment Workflow**
**Structure:**
- L1: Risk categories
- L2: Specific risks
- L3: Controls
- L4: Control tests

**Properties:**
- Grades (risk ratings)
- Cumulative (overall risk)
- Progress bars (control implementation)
- Tags (likelihood, impact)

**16.3 Project Onboarding Workflow**
**Structure:**
- L1: Onboarding phases
- L2: Department activities
- L3: Tasks
- L4: Subtasks

**Properties:**
- Progress bars (phase completion)
- Done checkboxes (task completion)
- Tags (department, priority)
- Comments (team notes)

---

### CHAPTER 17: TROUBLESHOOTING

**17.1 Common Issues**
**Cannot save workflow:**
- Check network connection
- Verify required fields
- Check console for errors

**Tag filter not working:**
- Ensure in execution mode
- Verify tags exist
- Try clearing filter first

**Export not working:**
- Check unit has children
- Verify execution mode
- Ensure workflow is saved

**Linked workflow not syncing:**
- Verify link still active
- Check unlink wasn't clicked
- Structural changes only sync

**17.2 Getting Help**
- Documentation resources
- Support contacts
- Error messages
- Console logs

---

### APPENDICES

**Appendix A: Keyboard Shortcuts Quick Reference**
**Appendix B: Property Configuration Guide**
**Appendix C: Export Checklist**
**Appendix D: Workflow Planning Worksheet**
**Appendix E: Sample Workflows by Industry**

---

*This outline will be filled with detailed content, screenshots, and examples in the final documentation.*
