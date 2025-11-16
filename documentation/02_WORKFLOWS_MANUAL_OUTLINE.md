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
