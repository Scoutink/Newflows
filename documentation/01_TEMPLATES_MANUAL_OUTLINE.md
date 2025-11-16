# Templates Manual
## Creating the Foundation for Your Workflows

---

## CHAPTER 1: INTRODUCTION TO TEMPLATES

### 1.1 What is a Template?

A **template** in this platform is the architectural blueprint that defines the structure and capabilities of your workflows. Think of it as the master mold from which you can create countless workflow instances, each maintaining the same organizational structure while containing different content.

**Definition and Purpose:**

A template is a reusable configuration that specifies:
- How many hierarchical levels your workflow will have (from 1 to 10 levels)
- What each level is called (e.g., "Controls," "Requirements," "Tasks")
- Which properties are available at each level (icons, descriptions, tags, checkboxes, grades, etc.)
- What options are available at the workflow level (icons, descriptions, sequential ordering)

**Templates as Workflow Blueprints:**

Just as an architect creates blueprints that can be used to build multiple buildings, you create templates that can spawn multiple workflows. Each workflow inherits the structure from its template but contains its own unique data and content.

For example, if you create a "GDPR Compliance Template" with 4 levels (Principles → Articles → Requirements → Actions), every workflow you create from this template will have these same 4 levels with the same naming conventions and properties. However, one workflow might be for "Acme Corp GDPR 2025" and another for "Beta Industries GDPR Audit 2026" - same structure, different content.

**Reusability and Consistency:**

The power of templates lies in their reusability. Once you've carefully designed a template that matches a regulatory framework or project methodology, you can use it repeatedly across different clients, projects, or time periods. This ensures:

- **Consistency:** Every workflow follows the same organizational logic
- **Quality:** Best practices are baked into the structure
- **Efficiency:** No need to rebuild the structure each time
- **Scalability:** Easy to onboard new team members who already understand the template

### 1.2 Why Templates Matter in Compliance Management

In the compliance consultancy world, templates are not just convenient - they're essential for delivering high-quality, consistent services to your clients.

**Standardization Across Regulations:**

Different regulations (GDPR, HIPAA, SOC 2, ISO 27001, NIST CSF) have different structures. NIST CSF has 5 Functions → 23 Categories → 108 Subcategories. ISO 27001 has 14 Control Domains → 35 Control Objectives → 114 Controls. By creating templates that mirror these official structures, you ensure that your compliance workflows are:

- **Accurate:** Reflect the actual regulatory framework
- **Complete:** Don't miss any required elements
- **Recognizable:** Clients and auditors immediately understand the structure

**Consistency for Clients:**

When you serve multiple clients with the same regulation, templates ensure every client receives the same high-quality framework. This means:

- **Fair Treatment:** All clients get your best practices
- **Easier Knowledge Transfer:** Team members can move between client projects seamlessly
- **Predictable Deliverables:** Clients know what to expect

**Time Savings on Repetitive Structures:**

Without templates, you'd need to manually rebuild the same regulatory structure for every new client engagement. With templates:

- A new GDPR workflow takes seconds instead of hours
- No risk of forgetting a required section
- Focus your time on content, not structure

**Quality Assurance:**

Templates allow you to encode your expertise into a reusable format. You can:

- Define exactly which properties are needed for evidence collection
- Ensure progress tracking is configured correctly
- Build in best practices (like enabling comments for collaborative workflows)
- Update the template once and improve all future workflows

### 1.3 Template vs Workflow: Understanding the Difference

This distinction is crucial to mastering the platform:

**Templates Define Structure:**

- Templates are *empty* containers
- They specify *what can be tracked* but contain no actual tracking data
- They define *how things are organized* but don't contain the things themselves
- Think of them as the table of contents with blank pages

**Workflows Contain Actual Data:**

- Workflows are *populated* instances
- They contain *real compliance requirements*, *actual tasks*, *specific evidence*
- They track *actual progress* and *real grades*
- Think of them as the completed book with all chapters written

**One Template, Many Workflows:**

The relationship is one-to-many:
- One "ISO 27001 Controls Template" can create:
  - "Acme Corp ISO 27001 Compliance 2025"
  - "Beta Industries ISO Initial Assessment"
  - "Gamma Corp ISO 27001 Annual Review"
  - Each workflow has the same structure but different content

**Important Concept: Template Snapshots:**

When you create a workflow from a template, the platform creates a complete *snapshot* of that template and embeds it in the workflow. This means:

- **Independence:** The workflow won't break if you later delete or modify the template
- **Stability:** Clients' workflows remain consistent even as you evolve your templates
- **Flexibility:** You can have different workflows using different versions of "the same" template

### 1.4 Real-World Examples from Compliance Consultancy

Let's look at how templates map to actual regulatory frameworks:

**ISO 27001 Compliance Template:**

```
Template Structure:
├─ Level 1: Control Domains (14 domains)
├─ Level 2: Control Objectives (35 objectives)
├─ Level 3: Controls (114 controls)
└─ Level 4: Implementation Tasks (custom per client)

Properties Enabled:
- Display IDs: Yes (e.g., "A.5.1.1")
- Descriptions: Yes (control requirements)
- Tags: Yes (priority, status)
- Done Checkbox: Yes (implementation tracking)
- Links: Yes (policy references)
- Notes: Yes (implementation evidence)
```

This template would create workflows where consultants map all ISO 27001 controls, and clients track their implementation progress.

**GDPR Compliance Template:**

```
Template Structure:
├─ Level 1: Principles (7 principles like Lawfulness, Fairness, Transparency)
├─ Level 2: Articles (relevant GDPR articles)
├─ Level 3: Requirements (specific obligations)
└─ Level 4: Evidence Items (documentation needed)

Properties Enabled:
- Display IDs: Yes (e.g., "Art. 5(1)(a)")
- Descriptions: Yes (legal text and interpretation)
- Tags: Yes (department responsible: IT, Legal, HR)
- Done Checkbox: Yes (compliance status)
- Images: Yes (screenshots of implementations)
- Comments: Yes (Q&A between consultant and client)
```

This template would support GDPR readiness assessments and ongoing compliance tracking.

**SOC 2 Audit Preparation Template:**

```
Template Structure:
├─ Level 1: Trust Service Criteria (Security, Availability, Processing Integrity, Confidentiality, Privacy)
├─ Level 2: Control Categories
├─ Level 3: Specific Controls
└─ Level 4: Evidence Requirements

Properties Enabled:
- Display IDs: Yes (e.g., "CC6.1")
- Descriptions: Yes (control description and testing procedures)
- Tags: Yes (audit status: ready, in-progress, not-started)
- Done Checkbox: Yes (evidence collected)
- Grade: Yes (control effectiveness rating 1-5)
- Cumulative Grade: Yes (roll up category scores)
- Links: Yes (links to evidence repository)
- Images: Yes (control screenshots)
```

This template would help consultants guide clients through SOC 2 audit preparation with clear evidence tracking.

**NIST Cybersecurity Framework Template:**

```
Template Structure:
├─ Level 1: Functions (Identify, Protect, Detect, Respond, Recover)
├─ Level 2: Categories (Asset Management, Access Control, etc. - 23 total)
├─ Level 3: Subcategories (108 specific practices)
└─ Level 4: Implementation Actions (organization-specific)

Properties Enabled:
- Display IDs: Yes (e.g., "PR.AC-4")
- Descriptions: Yes (practice description)
- Tags: Yes (maturity level, priority)
- Done Checkbox: Yes (implementation status)
- Grade: Yes (maturity rating 0-5)
- Cumulative Grade: Yes (category and function maturity scores)
- Progress Bar: Yes (visual maturity tracking)
- Links: Yes (NIST references)
```

This template would support NIST CSF assessments and maturity tracking over time.

---

---

## CHAPTER 2: ACCESSING THE TEMPLATE BUILDER

### 2.1 Navigation to the Template Builder

The Template Builder is accessed from the main Workflows page, which is the central hub of the platform.

**From the Main Workflow Page:**

1. Open your web browser and navigate to the platform (typically `index.html` or your deployed URL)
2. You'll see the main Workflows page with the application header
3. In the top navigation bar, locate the **"Templates"** link (usually near the Boards link)
4. Click on **"Templates"** to enter the Template Builder

**Template Builder Interface Overview:**

Once you click the Templates link, you'll be taken to the Template Builder page, which has a clean, organized layout:

**Header Section:**
- **Page Title:** "Template Builder" with an icon
- **Subtitle:** "Dynamic Workflow Templates"
- **Navigation Buttons:**
  - "Back to Workflows" button (left side) - returns you to the main workflows page
  - Theme toggle button (sun/moon icon) - switches between light and dark themes

**Main Content Area:**
- This is where template cards are displayed (when templates exist)
- Or where the template builder form appears (when creating/editing)

**Modal Overlay:**
- Used for viewing template details and other dialogs
- Appears as a centered popup over the main content

### 2.2 The Template Library View

When you first enter the Template Builder, you see the Template Library - a grid display of all your existing templates.

**Template Grid Layout:**

Templates are displayed as cards in a responsive grid (typically 2-3 cards per row on desktop, 1 on mobile). Each card provides a summary of the template at a glance.

**What Each Template Card Shows:**

**Card Header:**
- **Template Name:** Large, bold text (e.g., "ISO 27001 Compliance Framework")
- **Default Badge:** If this is the default template, a blue "Default" badge appears next to the name

**Card Body:**
- **Description:** Gray text showing the template's description (or "No description provided" if blank)
- **Statistics Bar:**
  - **Level Count:** Icon with number of levels (e.g., "🏗️ 4 levels")
  - **Created Date:** Calendar icon with creation date (e.g., "📅 Nov 15, 2025")

**Card Actions (Button Row):**
- **👁️ View Button:** Opens a read-only modal showing complete template details
- **✏️ Edit Button:** Opens the template builder with this template loaded for editing
- **🗑️ Delete Button:** Removes the template (only shown if template is NOT set as default)

**Visual Styling:**
- Cards have subtle shadows and hover effects
- In dark theme, cards have darker backgrounds with lighter text
- Default templates have a special visual indicator

**Template Library Header:**

Above the grid, you'll see:
- **Section Title:** "Workflow Templates" with a layer icon
- **Create Button:** Primary blue button labeled "+ Create New Template"
  - This is your starting point for building new templates

### 2.3 Empty State - Starting from Scratch

If you've never created a template before, or if all templates have been deleted, you'll see the **Empty State** display instead of a grid.

**What the Empty State Shows:**

**Centered Message:**
- **Icon:** Large folder icon (📂) in a muted color
- **Headline:** "No Templates Yet"
- **Explanation Text:** "Create your first workflow template to define custom structures for your compliance workflows"
- **Call to Action:** Large "+ Create Template" button

**Why You See This:**

The empty state appears when:
- You're a brand new user who hasn't created any templates yet
- All templates have been deleted
- The templates.json data file is empty or missing

**What to Do:**

Click the "+ Create Template" button to begin designing your first template. You'll be taken directly to the Template Builder form (covered in Chapter 3).

**Helpful Tip:**

Don't feel intimidated by the empty state! Creating your first template is straightforward. Start with a simple structure (like 2-3 levels) and basic properties. You can always refine it later or create more specialized templates as you learn the system.

**Quick Start Example:**

For your very first template, try creating a simple 3-level project management template:
- Level 1: "Projects"
- Level 2: "Phases"
- Level 3: "Tasks"

Enable basic properties like Name, Description, Done Checkbox, and Tags. This gives you a functional template in under 5 minutes and helps you understand how templates work.

---

## CHAPTER 3: CREATING YOUR FIRST TEMPLATE

### 3.1 Starting a New Template

Creating a template is straightforward once you understand the interface. Let's walk through the process step by step.

**Click the "Create New Template" Button:**

From the Template Library view:
1. Locate the blue "+ Create New Template" button (top right of the page)
2. Click it
3. The page will transition to the Template Builder Form

**The Template Builder Form Appears:**

Instead of the template grid, you now see a comprehensive form divided into clear sections:

1. **Form Header:** "Create New Template" with a Cancel button
2. **Template Information Section:** Basic details about your template
3. **Workflow-Level Configuration:** Options that apply to entire workflows
4. **Workflow Levels Section:** Where you define your hierarchical structure
5. **Form Actions:** Cancel and Create Template buttons at the bottom

**Understanding the Interface:**

The form uses a vertical layout with collapsible sections. Each section is clearly labeled with an icon and heading. Fields marked with a red asterisk (*) are required. Optional fields have helpful hint text below them.

The interface is designed to guide you through the logical flow of template creation:
1. First, name and describe your template
2. Then, configure workflow-level options
3. Finally, design your level hierarchy

You can scroll up and down to access all sections. The form auto-saves to your browser if you accidentally navigate away (though explicit saving is still required to persist to the database).

### 3.2 Basic Template Information

This is the first section you'll fill out. It defines the meta-information about your template.

**Template Name (Required):**

The template name is the most important field - it's how you (and your team) will identify this template.

**Field Requirements:**
- **Required:** Cannot be left blank
- **Character Limit:** 3-100 characters
- **Uniqueness:** While not enforced, use unique names to avoid confusion

**Best Practices for Naming:**

1. **Be Descriptive:** Name should clearly indicate purpose
   - ❌ Bad: "Template 1", "New Template", "Compliance"
   - ✅ Good: "ISO 27001 Controls Framework", "GDPR Compliance Assessment"

2. **Include the Standard/Framework:** If applicable
   - "NIST CSF Maturity Assessment"
   - "SOC 2 Type II Audit Preparation"
   - "HIPAA Security Rule Implementation"

3. **Version Numbers:** If you maintain multiple versions
   - "ISO 27001:2022 Controls" (vs "ISO 27001:2013 Controls")
   - "GDPR Framework v2.0"

4. **Use Case Specification:** If you have specialized variants
   - "Vendor Risk Assessment - Financial Services"
   - "Internal Audit Checklist - Healthcare"

**Real-World Examples:**
- "GDPR Compliance Framework"
- "ISO 27001 Controls"
- "NIST CSF v1.1 Assessment"
- "SOC 2 Security Controls"
- "PCI-DSS 4.0 Requirements"
- "Risk Assessment Template"

**Template Description (Optional but Highly Recommended):**

The description provides context for anyone who might use this template in the future (including yourself 6 months from now).

**What to Include:**

1. **Purpose Statement:** What is this template for?
   - "This template structures GDPR compliance workflows according to the 7 principles of data protection."

2. **Intended Users:** Who should use this?
   - "Designed for compliance consultants working with mid-sized companies implementing ISO 27001."

3. **Structure Overview:** Brief explanation of the levels
   - "Uses 4 levels: Control Domains → Objectives → Controls → Evidence Items"

4. **Special Considerations:** Any unique aspects
   - "Includes custom grade scales for maturity assessment (0-5)"
   - "Optimized for annual compliance reviews"

**Example Description:**

```
This template provides a complete structure for ISO 27001:2022 compliance workflows. 
It follows the official standard with 4 levels: Control Domains (Annex A), Control 
Objectives, Individual Controls, and Implementation Tasks. Enable done checkboxes 
to track implementation progress, and use links to reference policy documents. 
Ideal for both initial certification projects and annual surveillance audits.
```

**Mark as Default Checkbox:**

This is a powerful feature that streamlines workflow creation.

**What It Means:**

When you mark a template as "Default":
- It will be pre-selected when creating new workflows
- Users don't have to search through all templates each time
- A "Default" badge appears on the template card in the library

**When to Use It:**

Set as default when:
- This is your most frequently used template
- You want new team members to default to your standard framework
- You have one primary compliance standard you work with

**Important Notes:**
- **Only one default allowed:** Setting a new default automatically removes the default flag from any previous default template
- **Not required:** It's perfectly fine to have no default template
- **Easily changeable:** You can change the default anytime by editing a different template and checking its default box

**Decision Guide:**

```
Choose Default If:
✓ You create 80%+ of workflows from this template
✓ You want consistency across your organization
✓ This represents your "standard" methodology

Don't Set Default If:
✗ You use multiple templates equally
✗ Template selection depends on client/project
✗ Users need to consciously choose different approaches
```

### 3.3 Workflow-Level Configuration

This section lets you enable or disable features that apply to entire workflows (not individual units within the workflow). These are "optional extras" that workflows can have.

**Enable Workflow Icon:**

**What It Does:**
Allows workflows created from this template to have a visual icon in the workflow selector dropdown.

**Visual Branding Benefits:**
- Quick visual identification in the workflow list
- Professional appearance for client-facing workflows
- Color-coding different types of workflows

**When to Enable:**
- ✅ Client-facing workflows that benefit from professional appearance
- ✅ When you have many workflows and need visual differentiation
- ✅ Marketing/sales compliance workflows where appearance matters

**When to Disable:**
- ❌ Internal-only workflows where aesthetics don't matter
- ❌ When you prefer simplicity
- ❌ When the workflow name is sufficient for identification

**Enable Workflow Description:**

**What It Does:**
Allows workflows to have a rich text description field at the workflow level (separate from unit descriptions).

**Use Cases for Workflow Descriptions:**
- **Project Context:** "This workflow tracks Acme Corp's Q1 2025 ISO certification project"
- **Scope Definition:** "Covers controls A.5-A.8 only, other domains handled separately"
- **Client Background:** "Client has existing security program, assessment focuses on gaps"
- **Special Instructions:** "Update this workflow after each quarterly review meeting"

**When to Enable:**
- ✅ Consulting workflows where context matters
- ✅ Long-term projects that need background documentation
- ✅ Workflows that will be shared with clients (explanation needed)
- ✅ Complex projects with special considerations

**When to Disable:**
- ❌ Simple checklists that are self-explanatory
- ❌ Templates where structure alone is sufficient
- ❌ High-volume, short-lived workflows

**Enable Sequential Order Option:**

**What It Does:**
Gives workflows the ability to enforce sequential completion of items - items must be completed in order from top to bottom.

**How It Works:**
- When enabled in template: Workflows get a checkbox setting "Enforce Sequential Order"
- When the workflow setting is checked: Users cannot mark item #3 as done until items #1 and #2 are done
- Creates an audit trail showing compliance was completed in proper sequence

**Compliance and Audit Trail Benefits:**
- **Regulatory Compliance:** Some frameworks require sequential validation
- **Quality Assurance:** Ensures prerequisites are met before proceeding
- **Training Workflows:** Forces learners to complete modules in order
- **Audit Defense:** Proves processes were followed correctly

**Real-World Example:**

For a SOC 2 audit preparation workflow:
```
1. ✓ Document control environment (must be done first)
2. ✓ Implement controls (can't start until #1 is done)
3. ⬜ Test controls (can't start until #2 is done)
4. ⬜ Collect evidence (can't start until #3 is done)
5. ⬜ Auditor review (final step)
```

**When to Enable:**
- ✅ Audit preparation workflows
- ✅ Phased implementation projects
- ✅ Training and certification workflows
- ✅ Processes with mandatory prerequisites

**When to Disable:**
- ❌ Flexible workflows where order doesn't matter
- ❌ Parallel work streams
- ❌ Agile/iterative methodologies
- ❌ Maintenance checklists that can be done in any order

**Best Practice Tip:**

It's generally better to ENABLE these three options even if not every workflow will use them. They're optional at the workflow level, so having the capability available doesn't force anyone to use it. It's easier to ignore an available feature than to recreate the template later because you need a feature that wasn't included.

---

## CHAPTER 4: DESIGNING YOUR LEVEL STRUCTURE

This is where your template comes to life. The level structure defines the hierarchical organization of your workflows and is the single most important design decision you'll make.

### 4.1 Understanding Levels

**What is a Level?**

A *level* is a tier in your workflow hierarchy. Think of levels like chapters, sections, and subsections in a book:

```
Book (Workflow)
├─ Chapters (Level 1)
│  ├─ Sections (Level 2)
│  │  └─ Subsections (Level 3)
```

In compliance terms:
```
ISO 27001 Framework
├─ Control Domains (Level 1) - e.g., "Access Control"
│  ├─ Control Objectives (Level 2) - e.g., "Business Requirements for Access Control"
│  │  └─ Controls (Level 3) - e.g., "A.9.1.1 Access Control Policy"
│  │     └─ Implementation Tasks (Level 4) - e.g., "Document access control policy"
```

**Hierarchical Thinking:**

Each level contains items (called "units"), and each unit can have children at the next level down:
- Level 1 units can contain Level 2 units
- Level 2 units can contain Level 3 units
- And so on...

This creates a tree structure that mirrors how regulations, projects, and processes are naturally organized.

**System Constraints:**

- **Minimum:** 1 level (for simple flat lists)
- **Maximum:** 10 levels (for extremely complex hierarchies)
- **Typical:** 3-4 levels (balances detail and usability)

**Practical Consideration:**

More levels = more organization but also more complexity. Most users find 3-4 levels to be the "sweet spot" - enough structure to be useful without overwhelming users.

### 4.2 Planning Your Hierarchy

Before you start adding levels, spend 10 minutes planning on paper. Draw your hierarchy and ensure it makes logical sense.

**Example: NIST Cybersecurity Framework Structure**

NIST CSF has a well-defined structure that translates perfectly to 4 levels:

```
Level 1: Functions (5 items)
├─ Identify
├─ Protect  
├─ Detect
├─ Respond
└─ Recover

Level 2: Categories (23 items total across all functions)
Example under "Protect":
├─ PR.AC - Access Control
├─ PR.AT - Awareness and Training
├─ PR.DS - Data Security
└─ [etc...]

Level 3: Subcategories (108 items total)
Example under "PR.AC":
├─ PR.AC-1: Identities and credentials are issued, managed...
├─ PR.AC-2: Physical access to assets is managed...
├─ PR.AC-3: Remote access is managed
└─ [etc...]

Level 4: Implementation Actions (custom per organization)
Example under "PR.AC-1":
├─ Document identity management process
├─ Implement SSO solution
├─ Configure MFA for all users
└─ Train staff on credential policies
```

**Why This Works:**
- Mirrors the official NIST structure (familiar to auditors)
- Clear separation of concerns at each level
- Can track progress at any granularity (Function-level down to specific tasks)

**Example: Project Management Template**

For a general project management workflow:

```
Level 1: Projects
Example: "Website Redesign Project"

Level 2: Phases
├─ Planning
├─ Design
├─ Development
├─ Testing
└─ Launch

Level 3: Deliverables
Example under "Design":
├─ Wireframes
├─ Visual mockups
├─ Style guide
└─ Prototype

Level 4: Tasks
Example under "Wireframes":
├─ Research competitor sites
├─ Sketch initial layouts
├─ Create lo-fi wireframes
├─ Stakeholder review
└─ Iterate based on feedback
```

**Why This Works:**
- Standard project methodology (familiar to teams)
- Aligns with PMI/Prince2 thinking
- Easy to track phase completion
- Granular enough for daily task management

**Example: Manufacturing Quality Pipeline**

For manufacturing quality control:

```
Level 1: Product Lines
Example: "Consumer Electronics"

Level 2: Production Stages
├─ Component Receipt
├─ Assembly
├─ Quality Inspection
├─ Packaging
└─ Shipping

Level 3: Quality Checkpoints
Example under "Assembly":
├─ Solder joint inspection
├─ Component placement verification
├─ Functionality testing
└─ Aesthetic check

Level 4: Inspection Criteria
Example under "Solder joint inspection":
├─ Visual inspection for cold joints
├─ X-ray analysis for voids
├─ Pull test for mechanical strength
└─ Electrical continuity test
```

**Why This Works:**
- Follows manufacturing flow
- Clear quality gates
- Supports ISO 9001 requirements
- Can track defect rates at any level

### 4.3 Adding Levels

Once you have your structure planned, adding levels to your template is straightforward.

**Step-by-Step Process:**

1. **Scroll to the "Workflow Levels" section** of the template builder form
2. **By default, you'll see one level** already created (Level 1)
3. **To add more levels:** Click the "+ Add Level" button below the level list
4. **A new level appears** at the bottom of the list, automatically numbered

**Automatic Level Numbering:**

The system automatically assigns level numbers (Level 1, Level 2, Level 3, etc.) based on the hierarchical order. You don't manually set these numbers - they're determined by the level's position in the list.

**Visual Feedback:**

Each level card shows:
- A large number badge (1, 2, 3, etc.) indicating its position
- The level configuration fields
- Action buttons (move up/down, delete)

**How Many Levels to Add:**

- **Start with your deepest level count from your planning**
- Example: If your planned structure has 4 levels, add levels until you have 4 total
- You can always add more or remove levels later

**Maximum Limit:**

The "+ Add Level" button disappears once you reach 10 levels. If you need to add another level, you must delete an existing one first.

### 4.4 Configuring Level Properties

Each level you add needs to be configured with names and properties. Let's go through each field:

**Level Name (Required)**

This is the overall designation for this tier in your hierarchy.

**Purpose:** Describes what this level represents conceptually.

**Examples:**
- "Control Domains" (for ISO 27001)
- "Project Phases" (for project management)
- "Product Lines" (for manufacturing)
- "Departments" (for organizational structure)

**Best Practices:**
- Use plural form (this describes multiple items at this level)
- Be specific enough to be meaningful
- Keep it concise (2-3 words maximum)
- Use terminology your industry/standard uses

**Where It Appears:**
- Template details view
- Section headers in workflows
- Level configuration display

**Singular Name (Required)**

This is the name for a single item at this level.

**Purpose:** Used in action buttons and messages throughout the UI.

**Examples:**
- If Level Name is "Controls" → Singular is "Control"
- If Level Name is "Tasks" → Singular is "Task"
- If Level Name is "Requirements" → Singular is "Requirement"

**Where It's Used:**
- **Add buttons:** "Add Control", "Add Task"
- **Delete confirmations:** "Delete this Control?"
- **Empty states:** "No Tasks yet"
- **Messages:** "Control created successfully"

**Grammar Tip:** Must be grammatically correct as it's used in sentences. Test it: "Add [singular name]" - does that make sense?

**Plural Name (Required)**

This is the name for multiple items at this level.

**Purpose:** Used when referring to collections of items at this level.

**Examples:**
- If Singular is "Control" → Plural is "Controls"
- If Singular is "Task" → Plural is "Tasks"
- If Singular is "Policy" → Plural is "Policies"

**Where It's Used:**
- **Counters:** "5 Controls", "12 Tasks"
- **Headers:** "All Requirements", "Completed Actions"
- **Empty states:** "No Evidences Yet"
- **Progress displays:** "3 of 10 Controls Complete"

**Irregular Plurals:**
- Policy → Policies (not Policys)
- Analysis → Analyses (not Analysises)
- Child → Children (not Childs)

Pay attention to proper English pluralization!

**Level Description (Optional but Recommended)**

Provide guidance on what this level is for.

**Purpose:** Helps users understand what they should create at this level.

**Examples:**

For "Control Objectives" level:
```
"High-level objectives that organize related controls. Each objective should represent 
a distinct security goal. Typically corresponds to sections in ISO 27001 Annex A."
```

For "Implementation Tasks" level:
```
"Specific actions required to implement the parent control. These should be granular 
enough to assign to individuals and track completion. Examples: Create policy document, 
Configure firewall rule, Conduct training session."
```

**When to Provide Descriptions:**
- When level purpose isn't obvious
- For collaborative workflows (other people will use this)
- When you want to enforce specific usage patterns
- For training new team members

**Level Color (Not Currently Visible)**

This field exists in the data structure but isn't shown in the current UI. It's reserved for future enhancements where levels could have color-coding for visual hierarchy.

**Future Vision:** Imagine seeing Level 1 items in blue, Level 2 in green, Level 3 in yellow - instant visual depth perception.

**Current Status:** You can ignore this field. The system assigns a default color (#6366f1, a blue-purple).

**Level Icon (Not Currently Visible)**

Similar to color, this exists for future enhancement but isn't exposed in the UI yet.

**Future Vision:** Each level could have an icon (📋 for policies, ⚙️ for controls, ✅ for tasks).

**Current Status:** Set to null, can be ignored.

### 4.5 Reordering Levels

The order of levels matters - it defines your hierarchy from top (broadest) to bottom (most detailed).

**Why Reordering Matters:**

If you add levels in the wrong order, you need to rearrange them:
- Level 1 should be your top-most, broadest category
- Level 2 should be children of Level 1
- Level 3 should be children of Level 2
- And so on...

**How to Reorder:**

Each level (except first and last) has arrow buttons:

**Move Up Button (↑):**
- Swaps this level with the one above it
- Example: If Level 3 moves up, it becomes Level 2, and old Level 2 becomes Level 3
- The button is disabled on Level 1 (can't move up further)

**Move Down Button (↓):**
- Swaps this level with the one below it
- Example: If Level 2 moves down, it becomes Level 3, and old Level 3 becomes Level 2
- The button is disabled on the last level (can't move down further)

**Sequential Repositioning:**

You can only move one position at a time. To move Level 4 to Level 2 position:
1. Click Move Up on Level 4 → it becomes Level 3
2. Click Move Up again → it becomes Level 2

**Hierarchy Impact:**

Reordering levels in a template affects future workflows but NOT existing workflows (they use template snapshots).

**Visual Feedback:**

When you click a move button:
- The page re-renders with levels in new order
- Level numbers update automatically
- No save required until you're done with all changes

### 4.6 Deleting Levels

Sometimes you add too many levels or realize you don't need a level.

**How to Delete:**

Each level has a Delete button (🗑️ trash icon) on the right side of the level card.

**Delete Process:**

1. Click the Delete button
2. A confirmation dialog appears: "Remove level [Level Name]?"
3. Click OK to confirm or Cancel to abort
4. Level is removed and remaining levels renumber

**Protection: Cannot Delete Only Level**

If your template has only 1 level, the Delete button won't work. Templates must have at least 1 level. You'll see a warning: "Template must have at least one level."

**What Gets Deleted:**

- The level definition
- All property configurations for that level

**What Happens to Workflows:**

**Existing workflows:** SAFE - They use template snapshots, so they're unaffected

**Future workflows:** Will not have this level

**Practical Example:**

You create a template with 5 levels, then realize Level 4 is redundant:

```
Before Deletion:
Level 1: Domains
Level 2: Categories
Level 3: Controls
Level 4: Sub-Controls (← you realize this is unnecessary)
Level 5: Tasks

After Deleting Level 4:
Level 1: Domains
Level 2: Categories
Level 3: Controls
Level 4: Tasks (renumbered from Level 5)
```

**Best Practice:**

Test your template with a trial workflow before using it for real projects. It's easier to adjust level structure early than to realize later you have too many or too few levels.

---

## CHAPTER 5: CONFIGURING UNIT PROPERTIES

This chapter covers the most granular and powerful aspect of template design: unit properties. These 13 configurable options determine what information users can track at each level of your workflow.

### 5.1 Understanding Unit Properties

**What Are Unit Properties?**

Unit properties are the data fields and features available for individual items (units) in your workflows. When you enable a property for a level, every unit at that level gets that capability.

**Example:**
If you enable "Tags" for Level 3 (Controls), then every control in your workflow can have tags assigned to it.

**What Users Can Track:**

Properties fall into several categories:

1. **Identification:** Icon, Display ID, Name
2. **Documentation:** Description, Notes
3. **Organization:** Tags
4. **Progress Tracking:** Done Checkbox, Grade, Progress Bar
5. **Attachments:** Links, Images, Notes, Comments

**Data Collection Points:**

Think of properties as sensors that collect different types of information:
- Done Checkbox = Binary status sensor (yes/no)
- Grade = Numeric quality sensor (0-100, 1-5, etc.)
- Tags = Classification sensor (priority, department, etc.)
- Links = Evidence location sensor (where to find documentation)

**Compliance Evidence:**

In compliance work, properties become evidence collection mechanisms:
- **Links:** Point to policy documents, evidence repositories
- **Images:** Screenshots of implemented controls
- **Notes:** Detailed implementation documentation
- **Comments:** Audit discussions and clarifications
- **Done Checkbox:** Implementation confirmation
- **Grade:** Control effectiveness scores

**Flexibility vs Simplicity:**

**The Trade-off:**

More properties = More flexibility but also more complexity

**Maximalist Approach:**
- Enable all 13 properties
- Maximum tracking capability
- Risk: Overwhelming users, data entry fatigue

**Minimalist Approach:**
- Enable only Name, Description, Done
- Simple checklist
- Risk: Missing valuable tracking data

**Balanced Approach:**
- Enable properties you'll actually use
- Start minimal, add more later if needed
- Different properties for different levels

**Best Practice:**

Ask yourself for each property: "Will we actively use this data?" If the answer is "maybe" or "it would be nice to have," consider leaving it disabled. You can always edit the template later and enable more properties.

### 5.2 The 13 Property Types - Comprehensive Guide

Below is a detailed explanation of all 13 property types. For each level in your template, you'll see a grid of checkboxes that let you enable/disable each property.

---

#### Property 1: Icon (enableIcon)

**What It Does:**
Allows units to display a small visual icon (24x24px image) next to their name.

**Available Icon Library:**
The system includes 60+ professional icons covering:
- Technology (servers, clouds, networks, databases)
- Documents (files, folders, documents, reports)
- Actions (search, view, edit, delete, publish)
- Business (shops, offices, people, mail)
- Navigation (zoom, expand, settings, reset)

**Visual Impact:**
Icons make workflows more scannable and professional. Users can quickly identify unit types at a glance.

**When to Enable:**

✅ **Enable Icon When:**
- Creating client-facing compliance workflows (professional appearance)
- Workflows with many items that benefit from visual differentiation
- You want to use icons to represent control families, risk levels, or priority
- Visual learners will use the workflow

❌ **Skip Icon When:**
- Internal-only workflows where appearance doesn't matter
- Simple text-based checklists
- You prefer minimalist, text-only interface
- Limited time to assign icons to every item

**Example Use Cases:**

**ISO 27001 Controls:**
- 🔒 Access Control family
- 🛡️ Security family
- 📋 Policy family
- 🔍 Audit family

**Risk Assessment:**
- 🔴 Critical risks
- 🟠 High risks
- 🟡 Medium risks
- 🟢 Low risks

**Practical Tip:**

If you enable icons, you don't have to assign an icon to every unit. Units without icons will simply show no icon. This lets you selectively highlight important items.

---

#### Property 2: Display ID (enableUnitId)

**What It Does:**
Adds a custom identifier field (text input) that displays prominently next to the unit name.

**Purpose:**
Provides a structured, alphanumeric code for referencing and cross-referencing items.

**Common ID Formats:**

**Regulatory Codes:**
- ISO 27001: "A.5.1.1", "A.9.2.3"
- NIST CSF: "PR.AC-1", "DE.CM-7"
- HIPAA: "164.308(a)(1)(i)", "164.312(a)(1)"

**Project Codes:**
- "REQ-2024-001", "REQ-2024-002"
- "TASK-FIN-Q1-15"
- "CTRL-SEC-001"

**Custom Numbering:**
- "1.1", "1.2", "1.3"
- "AC-001", "AC-002"

**When to Enable:**

✅ **Enable Display ID When:**
- Working with regulations that have official numbering schemes
- Need to reference items in external documents or communications
- Cross-referencing between multiple systems or documents
- Audit trail requires specific identifiers
- Creating documentation that needs stable references

❌ **Skip Display ID When:**
- No external referencing needed
- Names alone are sufficient for identification
- Simple internal workflows
- No regulatory numbering scheme exists

**Example Use:**

**GDPR Workflow:**
```
Display ID: "Art. 5(1)(a)"
Name: "Lawfulness, Fairness, and Transparency"
```

**SOC 2 Workflow:**
```
Display ID: "CC6.1"
Name: "Logical and physical access controls restrict access to..."
```

**Why This Matters:**

When discussing with auditors or in reports, you can say "Control A.9.2.3 is implemented" rather than explaining which control you mean. The Display ID creates a shared vocabulary.

---

#### Property 3: Name (enableName)

**What It Does:**
The primary text identifier for every unit. This is the "title" of the item.

**Special Status:**
**Cannot be disabled.** Name is always required because every unit must have a name. The checkbox for this property is shown but disabled to indicate it's mandatory.

**Best Practices for Names:**

**Be Descriptive:**
- ❌ Bad: "Control 1", "Requirement A", "Thing"
- ✅ Good: "Access Control Policy", "Data Encryption Requirement", "User Training Program"

**Action-Oriented for Tasks:**
- ❌ "Training" → ✅ "Conduct Security Awareness Training"
- ❌ "Policy" → ✅ "Document Access Control Policy"
- ❌ "Review" → ✅ "Review Firewall Rules Quarterly"

**Noun-Based for Categories:**
- ✅ "Access Control"
- ✅ "Incident Response"
- ✅ "Business Continuity"

**Length Guidelines:**
- Minimum: 3 characters
- Ideal: 5-50 characters  
- Maximum: ~200 characters (but avoid overly long names)
- If name is very long, use Description field for details

**Formatting Tips:**
- Use Title Case for formal workflows: "Implement Multi-Factor Authentication"
- Use sentence case for informal workflows: "Review quarterly metrics"
- Be consistent within a workflow

---

#### Property 4: Description (enableDescription)

**What It Does:**
Adds a multi-line text field below the unit name for detailed information.

**Typical Content:**
- What needs to be done (for tasks)
- What the requirement means (for controls)
- Background context
- Implementation guidance
- Success criteria

**When to Enable:**

✅ **Enable Description When:**
- Items need explanation beyond the name
- Providing implementation guidance
- Complex requirements that need clarification
- Training workflows where learning content goes in descriptions
- Client-facing workflows where clarity is essential

❌ **Skip Description When:**
- Names are self-explanatory
- Simple checklists (e.g., "Turn off lights" doesn't need description)
- Very high-level categories that don't need explanation
- You prefer keeping things minimal

**Example Use Cases:**

**Control Description:**
```
Name: "Implement Multi-Factor Authentication"

Description:
"Deploy MFA across all user accounts accessing sensitive systems. 
Acceptable MFA methods include authenticator apps, hardware tokens, 
or SMS (least preferred). Ensure fallback procedures exist for MFA 
device loss. Target: 100% coverage by Q2 2025."
```

**Evidence Description:**
```
Name: "MFA Implementation Evidence"

Description:
"Collect the following evidence:
- Screenshot of MFA configuration in identity system
- List of accounts with MFA enabled (export from user directory)
- MFA enrollment statistics report
- User training completion records for MFA usage"
```

**Practical Tip:**

If you enable descriptions at multiple levels, encourage users to put different types of information at different levels:
- Level 1 (high-level): Strategic objectives, business context
- Level 2 (mid-level): Detailed requirements, acceptance criteria
- Level 3 (low-level): Step-by-step instructions, technical details

---

#### Property 5: Tags (enableTags)

**What It Does:**
Allows users to add colored badge labels to units for categorization and filtering.

**How Tags Work:**
- Tags are free-form text (user creates them)
- Each tag appears as a colored badge
- Colors are auto-assigned by the system
- Units can have multiple tags
- In Execution mode, clicking a tag filters the workflow to show only tagged items

**Common Tag Categories:**

**Priority Levels:**
- `critical`, `high`, `medium`, `low`

**Time Frames:**
- `Q1-2025`, `Q2-2025`, `annual`, `monthly`, `one-time`

**Status:**
- `in-progress`, `blocked`, `pending-approval`, `ready`

**Departments:**
- `IT`, `HR`, `Finance`, `Legal`, `Operations`

**Audit Focus:**
- `external-audit`, `internal-review`, `high-risk`

**Project Phases:**
- `planning`, `implementation`, `testing`, `production`

**When to Enable:**

✅ **Enable Tags When:**
- Need multi-dimensional categorization (an item can be both "high-priority" AND "IT-department")
- Want quick filtering capability in Execution mode
- Cross-cutting concerns span multiple levels of hierarchy
- Team-based workflows where people need to find "their" tasks
- Tracking items across time periods (quarterly reviews, etc.)

❌ **Skip Tags When:**
- Simple linear workflows with no categorization needs
- Only one dimension of organization (hierarchy alone is sufficient)
- Tags would add confusion rather than clarity

**Power Feature: Tag-Based Export:**

In Execution mode, you can filter by a tag and then export only those tagged items to a Board. This is powerful for creating focused project boards from large compliance workflows.

**Example:**
Tag all Q1 2025 items, filter by that tag, export to create a "Q1 2025 Compliance Tasks" board.

---

#### Property 6: Done Checkbox (enableDone)

**What It Does:**
Adds a checkbox to each unit that users can check/uncheck to mark completion status.

**Visibility:**
- **Creation Mode:** Checkbox is hidden (you're building structure, not executing)
- **Execution Mode:** Checkbox is visible and clickable

**Impact:**
- Affects Progress Bar calculations (parent units)
- Used for Milestone completion tracking (in Boards)
- Provides visual feedback (checked items often shown with strikethrough or gray)

**When to Enable:**

✅ **Enable Done Checkbox When:**
- Tracking completion of tasks or requirements
- Need progress visibility (enables Progress Bars at parent levels)
- Creating executable workflows (not just reference documentation)
- Clients will mark items as they complete them
- You want to track implementation status

❌ **Skip Done Checkbox When:**
- Workflow is purely informational/reference
- No execution tracking needed
- Items don't have a "complete" state (e.g., reference documentation)
- You're using a different completion mechanism (like Grades)

**Critical for Progress Tracking:**

If you want Progress Bars at Level 2, you MUST enable Done Checkbox at Level 3 (the child level). Progress bars calculate percentage based on child completion.

**Example Hierarchy:**
```
Level 1: Control Families (Progress Bar: Yes, Done: No)
├─ Level 2: Controls (Progress Bar: Yes, Done: Yes)
   └─ Level 3: Implementation Tasks (Progress Bar: No, Done: Yes)

Result:
- Each Control shows progress based on its Tasks' done status
- Each Control Family shows progress based on its Controls' done status
- Tasks have checkboxes but no progress bars (they're the lowest level)
```

**Sequential Enforcement:**

If the workflow has "Enforce Sequential Order" enabled, done checkboxes must be checked in order from top to bottom. You cannot check item #5 until items #1-4 are done. (This is a workflow-level setting, not a template property, but it uses the Done checkbox.)

---

#### Property 7: Grade (enableGrade)

**What It Does:**
Adds a numeric input field for scoring/rating units.

**Common Uses:**

**Maturity Ratings:**
- 0 = Not implemented
- 1 = Ad-hoc
- 2 = Repeatable
- 3 = Defined
- 4 = Managed
- 5 = Optimizing

**Risk Scores:**
- 1-5 scale (1 = low risk, 5 = critical risk)
- 0-100 percentage

**Control Effectiveness:**
- 0-100% effectiveness rating
- 1-4 scale (Ineffective → Highly Effective)

**Quality Scores:**
- 0-10 rating
- Pass/Fail (use 0/1)

**When to Enable:**

✅ **Enable Grade When:**
- Conducting assessments (maturity assessments, risk assessments)
- Rating control effectiveness
- Scoring compliance levels
- Need quantitative data for reporting
- Want to track improvement over time (compare grades year-over-year)

❌ **Skip Grade When:**
- Binary done/not-done is sufficient
- No scoring methodology defined
- Users won't understand what numbers mean
- Qualitative assessment is preferred

**Auto-Enables Cumulative Grade:**

When you enable Grade, the system automatically enables "Cumulative Grade" as well (if this isn't the deepest level). See next property.

**Example Use:**

**NIST CSF Maturity Assessment:**
```
Function: Identify (Cumulative Grade: 3.2)
├─ Asset Management (Cumulative Grade: 3.5)
│  ├─ ID.AM-1: Physical devices are inventoried (Grade: 4)
│  ├─ ID.AM-2: Software platforms are inventoried (Grade: 3)
│  └─ ID.AM-3: Organizational communication flows are mapped (Grade: 3)
└─ [more categories...]
```

Each specific subcategory gets a manual grade (1-5), categories show the average of their subcategories, and functions show the average of their categories.

---

#### Property 8: Cumulative Grade (gradeCumulative)

**What It Does:**
Automatically calculates and displays the sum (or average) of all child units' grades.

**Auto-Enabled:**
You cannot manually toggle this property. It's automatically enabled when:
- You enable Grade on a level, AND
- That level has a child level with Grade enabled

**How It Works:**

**For Parent Units with gradeCumulative = true:**
- The grade field becomes read-only
- The system automatically calculates: Sum of all children's grades
- A sigma symbol (Σ) appears next to the grade to indicate it's cumulative
- Recalculates whenever child grades change

**Calculation Example:**
```
Control Family (Cumulative Grade: 225)
├─ Control 1 (Grade: 75)
├─ Control 2 (Grade: 80)
└─ Control 3 (Grade: 70)

Cumulative = 75 + 80 + 70 = 225
```

**Average vs Sum:**

Currently, the system uses SUM. If you want averages, you'd need to manually calculate or use external reporting tools.

**Why This Matters:**

Cumulative grades let you see aggregate scores at higher levels of your hierarchy:
- Function-level maturity = average of category maturities
- Risk domain total = sum of individual risks
- Overall compliance score = average of all control scores

**When to Use:**

✅ **Use Cumulative Grade When:**
- You want roll-up scores at parent levels
- Aggregate metrics are meaningful
- Reporting requires category/domain-level scores

❌ **Don't Use Cumulative Grade When:**
- Parent-level scores aren't meaningful
- You want to manually set parent scores (don't enable cumulative)
- Only leaf-level scoring matters

**Technical Note:**

The system enforces a rule: If a parent level has Cumulative Grade enabled, its child level MUST have Grade enabled. Otherwise, there are no grades to accumulate. The template builder will show a validation error if you violate this rule.

---

#### Property 9: Progress Bar (enableProgressBar)

**What It Does:**
Displays a visual progress bar showing what percentage of child units are marked as done.

**Visual Display:**
- Horizontal bar (green fill)
- Percentage text (e.g., "67%")
- Tooltip on hover showing count (e.g., "4 of 6 complete")

**Calculation:**
```
Progress = (Number of children with Done=true) / (Total number of children) × 100%
```

**Where It Appears:**
- Only on units that have children
- Only if the child level has Done Checkbox enabled
- Visible in both Creation and Execution modes

**When to Enable:**

✅ **Enable Progress Bar When:**
- Want visual progress tracking at parent levels
- Need to see completion status at a glance
- Managing projects with many sub-tasks
- Clients want to see "how far along" they are
- Reporting requires completion percentages

❌ **Skip Progress Bar When:**
- Child level doesn't have Done Checkbox (progress bar would always show 0%)
- Completion tracking not needed
- You prefer text-based status over visual bars
- Lowest level only (no children = no progress to show)

**Dependency Rule:**

The system enforces: If a level has Progress Bar enabled, its child level MUST have Done Checkbox enabled. The template builder will show a validation error if you violate this.

**Example Use:**

```
Control Family: Access Control [█████████░] 90% (9 of 10 controls complete)
├─ AC-1: Access Control Policy ✓ Done
├─ AC-2: Account Management ✓ Done
├─ AC-3: Access Enforcement ✓ Done
├─ AC-4: Information Flow Enforcement ✓ Done
├─ AC-5: Separation of Duties ✓ Done
├─ AC-6: Least Privilege ✓ Done
├─ AC-7: Unsuccessful Logon Attempts ✓ Done
├─ AC-8: System Use Notification ✓ Done
├─ AC-9: Previous Logon Notification ✓ Done
└─ AC-10: Concurrent Session Control ⬜ Not Done
```

The progress bar instantly shows the Control Family is 90% complete.

**Multi-Level Progress:**

You can have progress bars at multiple levels:

```
Level 1: Domains (Progress Bar based on Level 2)
├─ Level 2: Control Categories (Progress Bar based on Level 3)
   └─ Level 3: Controls (Done Checkbox, no Progress Bar)
```

This gives progress visibility at both Domain and Category levels.

---

#### Property 10: Links (enableLinks)

**What It Does:**
Allows users to add clickable hyperlinks to external resources.

**Link Structure:**
- **Link Text:** Display text (e.g., "Access Control Policy")
- **URL:** Web address (e.g., "https://intranet.company.com/policies/access-control.pdf")

**Common Link Types:**

**Policy Documents:**
- Internal policy library
- SharePoint documents
- Google Drive files
- Confluence pages

**Evidence Repositories:**
- Compliance evidence folders
- Audit documentation
- Screenshot collections

**External References:**
- NIST publications
- ISO standard documents
- Regulatory guidance
- Vendor documentation

**Related Systems:**
- Ticketing systems (link to specific tickets)
- Project management tools (link to projects)
- Configuration management databases

**When to Enable:**

✅ **Enable Links When:**
- Need to reference external documentation
- Linking to evidence repositories
- Connecting to related systems/tools
- Providing source material references
- Creating a "compliance hub" that points to resources

❌ **Skip Links When:**
- Everything is self-contained in the workflow
- No external references needed
- Users won't access external resources
- Security policies prohibit external links

**Security Note:**

Links open in new tabs and go directly to the URL. Be cautious about:
- Linking to untrusted sites
- Exposing internal URLs to external users
- Broken links over time (regular audits needed)

**Example Use:**

**ISO 27001 Control:**
```
Name: "A.9.1.1 Access Control Policy"
Description: "The organization must document an access control policy..."
Links:
- "Company Access Control Policy v2.3" → https://policies.company.com/security/access-control
- "ISO 27001:2022 Standard" → https://www.iso.org/standard/27001
- "Implementation Guide" → https://intranet.company.com/iso-implementation/access-control-guide
```

---

#### Property 11: Images (enableImages)

**What It Does:**
Allows users to add images via URL (displays as thumbnails, click to view full size).

**Image Sources:**
- External image hosting (Imgur, cloud storage)
- Internal image servers
- Base64 encoded images (not recommended for large images)

**Common Use Cases:**

**Screenshots:**
- Configuration screenshots (firewall rules, system settings)
- Evidence of implementation (MFA setup, policy acknowledgments)
- Error messages or issues
- Dashboard views

**Diagrams:**
- Network diagrams
- Process flowcharts
- Architecture diagrams
- Data flow diagrams

**Before/After:**
- Configuration changes
- Remediation evidence
- Improvement documentation

**Physical Evidence:**
- Photos of physical security controls
- Badge systems
- Secure areas
- Hardware deployments

**When to Enable:**

✅ **Enable Images When:**
- Visual evidence is required (audits, compliance)
- Screenshots prove implementation
- Diagrams aid understanding
- Photo documentation needed
- "Show, don't tell" approach preferred

❌ **Skip Images When:**
- No visual evidence needed
- File size concerns (images can be large)
- Users won't have images to attach
- Security prohibits screenshots

**Technical Limitations:**

**Current System:**
- URL-based only (no direct file upload)
- Users must host images elsewhere and provide URLs
- Thumbnail view in workflow (click to see full size)
- No built-in image editor or annotation

**Workaround:**

Use cloud storage (Google Drive, Dropbox, OneDrive) with public sharing links, or an internal image server.

**Example Use:**

**Firewall Configuration Evidence:**
```
Name: "Configure Firewall Rules for DMZ"
Description: "Implement firewall rules isolating DMZ from internal network"
Images:
- https://evidence.company.com/screenshots/firewall-dmz-rules-2025-01-15.png
- https://evidence.company.com/screenshots/firewall-rule-test-results.png
```

Auditors can click the links to view the actual firewall configuration screenshots.

---

#### Property 12: Notes (enableNotes)

**What It Does:**
Allows users to add rich-text formatted notes with a title and content.

**Rich Text Features:**
- Bold, italic, underline
- Bullet lists, numbered lists
- Hyperlinks
- Headings
- Text formatting

**Notes vs Description:**

**Description:**
- Single text field
- Attached directly to the unit
- Visible immediately when unit expands
- Best for primary information

**Notes:**
- Multiple notes per unit (can add many)
- Each note has a title and separate content
- Collapsible (doesn't clutter the view)
- Best for supplementary information

**Common Use Cases:**

**Implementation Notes:**
```
Title: "Implementation Plan"
Content:
"Phase 1 (Q1 2025):
- Evaluate MFA vendors
- Select solution
- Purchase licenses

Phase 2 (Q2 2025):
- Deploy to IT department (pilot)
- Gather feedback
- Refine rollout plan"
```

**Audit Notes:**
```
Title: "Auditor Findings - 2024 Annual Audit"
Content:
"Auditor reviewed MFA implementation and noted:
- 98% coverage (2 service accounts still without MFA)
- Need to document MFA bypass procedure
- Suggested adding SMS as fallback option"
```

**Technical Documentation:**
```
Title: "Technical Implementation Details"
Content:
"MFA Solution: Duo Security
Integration Method: SAML 2.0
Enrollment URL: https://enroll.company.com/duo
Support Contact: it-security@company.com"
```

**Meeting Minutes:**
```
Title: "Compliance Review Meeting - Jan 15, 2025"
Content:
"Attendees: Jane (CISO), Bob (IT Manager), Alice (Compliance Lead)
Decisions:
- Approved MFA deployment timeline
- Allocated budget: $15K
- Assigned project lead: Bob"
```

**When to Enable:**

✅ **Enable Notes When:**
- Need to document supplementary information
- Multiple types of documentation per unit (plan, results, audit notes, etc.)
- Rich formatting is valuable (lists, bold, links)
- Long-form content that would clutter Description field
- Meeting minutes, decision logs, implementation journals

❌ **Skip Notes When:**
- Description field is sufficient
- Don't need multiple document types per unit
- Users won't create structured notes
- Prefer simplicity

**Practical Tip:**

Notes are powerful for compliance documentation. You can create note templates like:
- "Implementation Evidence"
- "Audit Response"
- "Remediation Plan"
- "Change Log"

This standardizes documentation across all controls.

---

#### Property 13: Comments (enableComments)

**What It Does:**
Adds a discussion thread feature - users can post plain text comments.

**Comments vs Notes:**

**Comments:**
- Conversational, discussion-style
- Plain text only (no formatting)
- Chronological order (newest first or oldest first)
- Think: chat messages or forum posts
- Best for Q&A, clarifications, discussions

**Notes:**
- Structured documentation
- Rich text formatted
- Titled and organized
- Think: formal documentation
- Best for permanent records

**Common Use Cases:**

**Client Questions:**
```
Client: "Do we need MFA for all accounts or just privileged accounts?"
Consultant: "NIST CSF recommends MFA for all accounts accessing sensitive data. 
At minimum, all privileged accounts. We can phase in others."
Client: "Understood. We'll start with privileged accounts in Q1."
```

**Implementation Discussions:**
```
IT Team: "We're seeing issues with MFA enrollment for remote users. VPN required?"
Security Team: "No, enrollment should work outside VPN. Check firewall rules."
IT Team: "Found the issue - port 443 blocked. Fixed now."
```

**Audit Clarifications:**
```
Auditor: "Can you provide evidence of MFA configuration for admin accounts?"
Compliance Lead: "See Image 1 above - screenshot shows MFA enabled for all 15 admin accounts."
Auditor: "Confirmed. Closing this finding."
```

**Status Updates:**
```
User 1: "Control implementation started 1/15/25"
User 2: "50% complete as of 1/22/25"
User 2: "Completed and tested 1/29/25"
```

**When to Enable:**

✅ **Enable Comments When:**
- Collaboration between consultant and client
- Need discussion/clarification capability
- Audit Q&A threads
- Status updates and progress notes
- Multiple people working on same items
- Asynchronous communication needed

❌ **Skip Comments When:**
- Single-person workflows (no one to discuss with)
- No collaboration needed
- Prefer structured notes over informal comments
- Comments would add noise/clutter

**Moderation:**

Currently, there's no moderation, editing, or deletion of comments (once posted, they're permanent). Consider this when deciding whether to enable.

**Threading:**

Comments are flat (no reply threads). They display in order, most recent first.

**Example Use:**

In a consultant-client scenario, comments become the primary communication channel for each control:
- Client asks implementation questions
- Consultant provides guidance
- Auditor adds findings
- Everyone sees the complete history

This creates a comprehensive audit trail of discussions and decisions.

---

### 5.3 Smart Property Dependencies

The template builder enforces logical rules to prevent invalid configurations:

**Rule 1: Grade → Cumulative Grade**
- If you enable Grade on a level, Cumulative Grade is auto-enabled
- You cannot disable Cumulative Grade while Grade is enabled
- This ensures parent levels can show rolled-up scores

**Rule 2: Progress Bar → Child Done Checkbox**
- If you enable Progress Bar on Level 2, Level 3 MUST have Done Checkbox enabled
- Otherwise, progress bar has nothing to calculate
- Validation error if violated

**Rule 3: Cumulative Grade → Child Grade**
- If Level 2 has Cumulative Grade, Level 3 MUST have Grade enabled
- Otherwise, there are no grades to accumulate
- Validation error if violated

**Rule 4: Name is Always Enabled**
- You cannot disable Name
- It's the only truly required property
- All others are optional

**Visual Feedback:**

When you enable/disable properties, dependent properties automatically update:
- Enable Grade → Cumulative Grade checkbox automatically checks
- Disable Grade → Cumulative Grade checkbox automatically unchecks

**Validation Errors:**

If you try to save a template with invalid property combinations, you'll see an error message like:

```
❌ Validation Error:
Level "Controls" has progress bar enabled but child level "Tasks" 
doesn't have done checkbox enabled.
```

You must fix these errors before the template can be saved.

---

### 5.4 Property Configuration Strategy

Choosing which properties to enable is a design decision. Here are four proven strategies:

**Strategy 1: Minimalist Checklist**

**Enable:**
- Name (required)
- Description
- Done Checkbox

**Skip:**
- Everything else

**Best For:**
- Simple to-do lists
- Quick audits
- Training checklists
- Onboarding workflows

**Example:**
"New Employee Onboarding Checklist" - just needs task names, brief descriptions, and checkboxes.

---

**Strategy 2: Standard Compliance Workflow**

**Enable:**
- Name (required)
- Display ID (for regulatory codes)
- Description
- Tags (for priority, department)
- Done Checkbox
- Progress Bar (at parent levels)
- Links (for policy references)

**Skip:**
- Icon, Grade, Images, Notes, Comments

**Best For:**
- Most compliance frameworks
- Balanced functionality
- Consultant-delivered workflows
- ISO, SOC 2, NIST, GDPR

**Example:**
"ISO 27001 Compliance" - needs control IDs, descriptions, completion tracking, policy links, and progress visibility.

---

**Strategy 3: Comprehensive Assessment**

**Enable:**
- Name (required)
- Display ID
- Description
- Tags
- Done Checkbox
- Grade (with Cumulative Grade)
- Progress Bar
- Links
- Notes (for findings)

**Skip:**
- Icon, Images, Comments (unless needed)

**Best For:**
- Maturity assessments
- Risk assessments
- Audit preparation
- Gap analysis

**Example:**
"NIST CSF Maturity Assessment" - needs scores for each subcategory, rolled-up category scores, and findings documentation.

---

**Strategy 4: Maximum Evidence Collection**

**Enable:**
- Everything (all 13 properties)

**Best For:**
- Highly regulated industries (healthcare, finance)
- External audits with evidence requirements
- Complex implementations needing full documentation
- Long-term compliance programs

**Example:**
"HIPAA Security Rule Implementation" - needs all properties for comprehensive evidence collection and audit readiness.

---

**Decision Framework:**

Ask these questions:

1. **Do we need to reference external documents?**
   - Yes → Enable Links
   - No → Skip Links

2. **Will we track completion?**
   - Yes → Enable Done Checkbox
   - No → Skip Done

3. **Do we need scoring/ratings?**
   - Yes → Enable Grade (and Cumulative Grade)
   - No → Skip Grade

4. **Will multiple people collaborate?**
   - Yes → Enable Comments
   - No → Skip Comments

5. **Do we need visual evidence?**
   - Yes → Enable Images
   - No → Skip Images

6. **Is this client-facing?**
   - Yes → Consider Icon (professional appearance)
   - No → Skip Icon

7. **Does a regulatory numbering scheme exist?**
   - Yes → Enable Display ID
   - No → Skip Display ID

8. **Will we document findings/responses?**
   - Yes → Enable Notes
   - No → Skip Notes

9. **Do we need multi-dimensional categorization?**
   - Yes → Enable Tags
   - No → Skip Tags

10. **Do we want progress visibility?**
    - Yes → Enable Progress Bar (and ensure child Done Checkbox)
    - No → Skip Progress Bar

---

**Pro Tip: Start Minimal, Expand Later**

It's easier to add properties later than to remove them. Start with a minimal set, test the template with a trial workflow, and add more properties as you discover needs.

You can always edit the template and enable additional properties. Existing workflows will get the new capabilities (though their existing units won't automatically populate the new fields - users would need to add that data).

---

## CHAPTER 6: VALIDATION AND SAVING

You've designed your template - levels configured, properties selected. Now it's time to save it to the system.

### 6.1 Template Validation Rules

Before you can save, the system validates your template to ensure it's correctly configured. Understanding these rules helps you avoid frustrating validation errors.

**Rule 1: Template Name Required**

**What It Checks:**
- Template name field cannot be empty
- Must be at least 3 characters long

**Why It Matters:**
Without a name, you (and others) can't identify the template in the list.

**Error Message:**
"Template name is required"

**How to Fix:**
Enter a descriptive name in the Template Name field.

---

**Rule 2: At Least One Level Required**

**What It Checks:**
- Template must have minimum 1 level
- You cannot delete the last remaining level

**Why It Matters:**
A template without levels can't create any workflow structure.

**Error Message:**
"Template must have at least one level"

**How to Fix:**
Don't delete all levels. Keep at least one.

---

**Rule 3: All Level Names Required**

**What It Checks:**
- Every level must have a Level Name filled in
- Level Name cannot be blank/empty

**Why It Matters:**
Level names define your hierarchy. Empty names create confusing workflows.

**Error Message:**
"Level [number] name is required"

**How to Fix:**
Scroll through all your levels and fill in any blank Level Name fields.

---

**Rule 4: Unique Level Names**

**What It Checks:**
- No two levels can have the same name
- Case-insensitive check (e.g., "Controls" = "controls")

**Why It Matters:**
Duplicate level names create ambiguity and confusion in workflows.

**Error Message:**
"Level name '[name]' is duplicated"

**How to Fix:**
Rename one of the duplicate levels to something unique.

**Example Problem:**
```
Level 1: Controls
Level 2: Control Categories
Level 3: Controls  ← ERROR: Duplicate of Level 1
```

**Fixed:**
```
Level 1: Control Families
Level 2: Control Categories
Level 3: Controls
```

---

**Rule 5: Singular and Plural Names Required**

**What It Checks:**
- Every level must have both Singular Name and Plural Name filled in
- Neither can be blank

**Why It Matters:**
These names appear throughout the UI. Missing names break the interface.

**Error Message:**
- "Level [number] singular name is required"
- "Level [number] plural name is required"

**How to Fix:**
Fill in both fields for each level.

---

**Rule 6: Progress Bar Dependencies**

**What It Checks:**
- If Level N has Progress Bar enabled
- Then Level N+1 MUST have Done Checkbox enabled

**Why It Matters:**
Progress bars calculate percentage based on child completion. Without child Done checkboxes, there's nothing to calculate.

**Error Message:**
"Level '[name]' has progress bar enabled but child level '[child name]' doesn't have done checkbox enabled"

**How to Fix:**
Either:
- Disable Progress Bar on the parent level, OR
- Enable Done Checkbox on the child level

**Example Problem:**
```
Level 2: Controls (Progress Bar: Enabled)
└─ Level 3: Tasks (Done Checkbox: Disabled)  ← ERROR
```

**Fixed Option 1:**
```
Level 2: Controls (Progress Bar: Disabled)
└─ Level 3: Tasks (Done Checkbox: Disabled)
```

**Fixed Option 2:**
```
Level 2: Controls (Progress Bar: Enabled)
└─ Level 3: Tasks (Done Checkbox: Enabled)  ✓
```

---

**Rule 7: Cumulative Grade Dependencies**

**What It Checks:**
- If Level N has Cumulative Grade enabled
- Then Level N+1 MUST have Grade enabled

**Why It Matters:**
Cumulative grades sum child grades. Without child grades, there's nothing to sum.

**Error Message:**
"Level '[name]' has cumulative grades but child level '[child name]' doesn't have grades enabled"

**How to Fix:**
- Enable Grade on the child level (this auto-enables Cumulative Grade on parent)
- The system usually handles this automatically, but validation catches manual errors

---

### 6.2 Saving Your Template

Once validation passes, saving is straightforward.

**Save Process:**

1. **Click the Save Button**
   - Button text: "Create Template" (new template) or "Update Template" (editing existing)
   - Located at bottom of form
   - Blue primary button

2. **Loading State**
   - Button shows "Saving..." text
   - Button becomes disabled
   - Prevents double-clicking
   - Loading indicator may appear

3. **Server Processing**
   - Template data sent to server
   - Server validates again (server-side validation)
   - Data written to `data/templates.json` file

4. **Success Response**
   - Green toast notification: "Template saved successfully!"
   - Form closes automatically
   - Returns to Template Library view
   - Your template appears in the grid

5. **Error Response (if something fails)**
   - Red toast notification: "Failed to save: [error message]"
   - Form stays open
   - You can fix issues and try again
   - Common causes: Network error, server issue, file permissions

**What Gets Saved:**

```json
{
  "id": "template-123456789-abcde",
  "name": "Your Template Name",
  "description": "Your description",
  "isDefault": false,
  "version": "1.0.0",
  "createdAt": "2025-11-16T12:00:00.000Z",
  "createdBy": "user",
  "updatedAt": "2025-11-16T12:00:00.000Z",
  "workflowConfig": {
    "enableIcon": true,
    "enableDescription": true,
    "enableSequentialOrder": true
  },
  "levels": [
    {
      "id": "level-123456789-abcde",
      "order": 0,
      "name": "Controls",
      "singularName": "Control",
      "pluralName": "Controls",
      "description": "Security controls",
      "color": "#6366f1",
      "unitConfig": {
        "enableIcon": true,
        "enableUnitId": true,
        "enableName": true,
        "enableDescription": true,
        ...
      }
    }
  ]
}
```

**Auto-Generated Fields:**

The system automatically sets:
- **id:** Unique identifier (timestamp + random string)
- **version:** Defaults to "1.0.0"
- **createdAt:** Current timestamp
- **createdBy:** Current user (or "user" if no auth)
- **updatedAt:** Same as createdAt for new templates
- **level.id:** Unique ID for each level
- **level.order:** Sequential numbering (0, 1, 2...)
- **level.color:** Default blue-purple (#6366f1)

---

### 6.3 Post-Save Confirmation

After successful save, you return to the Template Library where you can verify your template was created.

**Visual Confirmation:**

Your new template appears as a card in the grid:

```
┌─────────────────────────────────────────┐
│ Your Template Name         [Default]    │
│                                         │
│ Your template description appears here  │
│                                         │
│ 🏗️ 4 levels      📅 Nov 16, 2025      │
│                                         │
│ [👁️ View]  [✏️ Edit]  [🗑️ Delete]     │
└─────────────────────────────────────────┘
```

**What to Check:**

1. **Name:** Is it correct?
2. **Description:** Does it match what you wrote?
3. **Level Count:** Does it show the right number of levels?
4. **Default Badge:** If you checked "default," does the badge appear?
5. **Date:** Should show today's date

**Immediate Actions You Can Take:**

1. **View:** Click to see read-only details (verify everything saved correctly)
2. **Edit:** Click to make changes (maybe you noticed a typo)
3. **Create Workflow:** Navigate to Workflows page and create your first workflow from this template

**Ready for Workflow Creation:**

Your template is now available in the workflow creation dialog. When users click "New Workflow" on the Workflows page, your template appears in the template dropdown selector.

If you marked it as default, it will be pre-selected automatically.

---

### 6.4 Common Validation Issues and Fixes

**Issue 1: "Cannot Save - Validation Failed"**

**Symptoms:**
- Save button clicked
- Errors appear in red
- No success message
- Form doesn't close

**Causes:**
- Missing required fields (name, level names, singular/plural)
- Duplicate level names
- Property dependency violations

**Solution:**
1. Scroll up to find red error messages
2. Read what's wrong
3. Fix each error
4. Try saving again

---

**Issue 2: "Network Error - Please Try Again"**

**Symptoms:**
- Save appears to work
- Then error toast appears
- No template in library

**Causes:**
- Internet connection lost
- Server is down
- Server permission issues

**Solution:**
1. Check internet connection
2. Try saving again
3. If persists, contact system administrator
4. Your work is stored in browser (refresh won't lose it)

---

**Issue 3: "Template Name Already Exists"**

**Note:** Current system doesn't enforce unique names, but it's good practice

**Symptoms:**
- Save succeeds
- But confusing to have two templates with same name

**Solution:**
- Use unique, descriptive names
- Include version numbers or dates if needed
- Example: "ISO 27001 v2022" vs "ISO 27001 v2013"

---

**Issue 4: Save Button Disabled**

**Symptoms:**
- Can't click Save button
- Button appears grayed out

**Causes:**
- Already saving (double-click protection)
- Page still loading
- JavaScript error

**Solution:**
1. Wait a few seconds
2. If stuck, refresh page (your changes are saved to browser)
3. Re-enter and save

---

### 6.5 Editing Saved Templates

After saving, you can edit templates at any time.

**Edit Process:**

1. From Template Library, click **Edit** button on template card
2. Template Builder opens with all data loaded
3. Page title changes to "Edit Template"
4. Save button says "Update Template" (not "Create Template")
5. Make your changes
6. Click "Update Template"

**What Changes Affect:**

**Future Workflows:**
- New workflows created from this template get the updated configuration
- Use the new level structure
- Have the new property settings

**Existing Workflows:**
- UNAFFECTED - They use template snapshots
- Keep their original structure
- Don't receive updates

**This is a feature, not a bug:** Existing workflows remain stable even if you drastically change the template.

**Use Case Example:**

You have 10 active client workflows from "ISO 27001 Controls v1" template. You realize you need to add an 11th property. You edit the template and add it.

- **Result:** New workflows get the extra property
- **Old workflows:** Keep working exactly as they were
- **Benefit:** Clients aren't disrupted by your template evolution

---

### 6.6 Cancel Button

**What It Does:**
- Discards all changes
- Returns to Template Library
- Does NOT save

**When to Use:**
- You made mistakes and want to start over
- Testing the builder but don't want to save
- Changed your mind about creating a template

**Confirmation:**
- Browser will ask: "Discard changes and return to template list?"
- Click OK to confirm discard
- Click Cancel to stay in builder

---

## CHAPTER 7: MANAGING TEMPLATES

After creating templates, you'll need to manage them: viewing, editing, deleting, and setting defaults.

### 7.1 The Template Library

This is your template management hub. Every time you open Template Builder, you start here.

**Grid Layout:**

Templates display as cards in a responsive grid:
- **Desktop:** 2-3 cards per row
- **Tablet:** 2 cards per row
- **Mobile:** 1 card per row (stacked)

**Card Contents:**

Each template card shows:

```
┌─────────────────────────────────────────────────┐
│ ISO 27001 Controls Framework    [Default Badge] │
│                                                 │
│ Complete structure for ISO 27001:2022          │
│ implementation tracking. Includes all Annex A  │
│ controls with evidence collection.             │
│                                                 │
│ 🏗️ 4 levels          📅 Nov 15, 2025         │
│                                                 │
│ [👁️ View]  [✏️ Edit]  [🗑️ Delete]            │
└─────────────────────────────────────────────────┘
```

**Information Displayed:**

1. **Template Name:** Large, bold text at top
2. **Default Badge:** Blue pill badge (if this is the default template)
3. **Description:** Gray text (first 2-3 lines shown, truncates if longer)
4. **Level Count:** Icon + number (e.g., "🏗️ 4 levels")
5. **Created Date:** Icon + formatted date (e.g., "📅 Nov 15, 2025")
6. **Action Buttons:** View, Edit, Delete (Delete hidden if default)

**Sorting:**

Currently, templates are shown in creation order (newest first). Future versions may add:
- Alphabetical sorting
- Most recently updated
- Most frequently used

---

### 7.2 Viewing Template Details

Sometimes you want to see full template configuration without editing it.

**How to View:**

1. Click the **👁️ View** button on any template card
2. A modal dialog appears over the page
3. Shows complete template configuration in read-only format

**Modal Contents:**

**Section 1: Template Information**
- Template Name
- Description (full text, not truncated)
- Version number
- Created date (full timestamp)
- Default status (Yes/No)

**Section 2: Workflow-Level Configuration**
- Workflow Icon: Enabled/Disabled
- Workflow Description: Enabled/Disabled
- Sequential Order Option: Enabled/Disabled

**Section 3: Levels**

For each level (Level 1, Level 2, etc.):

```
Level 1: Control Domains
- Singular: Control Domain
- Plural: Control Domains
- Description: [level description if provided]

Enabled Properties:
✓ Icon
✓ Display ID
✓ Name (always)
✓ Description
✓ Tags
✓ Done Checkbox
✓ Progress Bar
✓ Links

Disabled Properties:
✗ Grade
✗ Cumulative Grade
✗ Images
✗ Notes
✗ Comments
```

**Benefits of View Mode:**

- **Quick Reference:** Check template structure without editing
- **Documentation:** Take screenshots for training materials
- **Comparison:** Open multiple templates in tabs to compare
- **Verification:** Confirm template saved correctly after creation

**Closing the Modal:**

- Click the **Close** button at bottom
- Click the **X** button at top-right
- Click anywhere outside the modal (on the darkened background)
- Press **ESC** key

---

### 7.3 Editing Templates

Need to modify a template? Editing works just like creation.

**How to Edit:**

1. Click the **✏️ Edit** button on template card
2. Template Builder opens with form populated with existing data
3. All fields show current values
4. All levels are listed
5. All property checkboxes reflect current settings

**Page Differences from Creation:**

- Header says "Edit Template" (not "Create New Template")
- Save button says "Update Template" (not "Create Template")
- Template ID is preserved (not generating new ID)
- Created date stays the same (only Updated date changes)

**What You Can Edit:**

**Template-Level:**
- Name
- Description
- Default checkbox

**Workflow Config:**
- Enable/Disable Workflow Icon
- Enable/Disable Workflow Description
- Enable/Disable Sequential Order Option

**Levels:**
- Add new levels
- Delete existing levels (must keep at least 1)
- Reorder levels (move up/down)
- Change level names (Level Name, Singular, Plural)
- Change level descriptions
- Enable/disable properties for each level

**Saving Changes:**

Click **Update Template** button:
- Validation runs (same rules as creation)
- If valid: Saves and returns to library
- If invalid: Shows errors, stays in edit mode

**Success Message:**

"Template updated successfully!"

**What Happens to Existing Workflows:**

**Critical to Understand:**

Editing a template does NOT change existing workflows.

Workflows created before the edit:
- Keep their original template snapshot
- Unaffected by template changes
- Continue working exactly as before

Workflows created after the edit:
- Use the updated template
- Get the new structure and properties

**Example Scenario:**

```
Timeline:
1. Create "ISO 27001" template with 3 levels
2. Create 5 workflows from this template (Workflows A-E)
3. Edit template to add a 4th level
4. Create 3 more workflows (Workflows F-H)

Result:
- Workflows A-E: Still have 3 levels
- Workflows F-H: Have 4 levels
- Template: Shows 4 levels
```

This independence is intentional - it prevents disrupting active compliance work when you evolve your templates.

---

### 7.4 Deleting Templates

When a template is no longer needed, you can permanently delete it.

**How to Delete:**

1. Click the **🗑️ Delete** button on template card
2. Confirmation dialog appears: "Are you sure you want to delete the template '[name]'? This action cannot be undone."
3. Click **OK** to confirm deletion
4. Click **Cancel** to abort

**Immediate Effect:**

- Template disappears from library
- Toast notification: "Template deleted"
- Cannot be recovered (permanent)

**Protection: Cannot Delete Default Template**

If a template is marked as default:
- Delete button does NOT appear on the card
- Attempting deletion shows error: "Cannot delete default template"

**Why:** The system assumes your default template is important and in active use.

**Workaround:**
1. Edit another template and mark IT as default
2. This removes default flag from current default
3. Now you can delete the former default

**What Happens to Existing Workflows:**

**Critical:** Deleting a template does NOT delete or break workflows created from it.

Workflows created from deleted template:
- Continue working normally
- Keep their template snapshot embedded
- Lose the link to the source template
- Template dropdown shows "[Deleted Template]" or similar

**When to Delete Templates:**

✅ **Safe to Delete:**
- Obsolete regulation versions (ISO 27001:2013 when you've moved to 2022)
- Experimental/test templates
- Duplicate templates
- Templates never used to create workflows

❌ **Think Twice:**
- Templates with active workflows (though technically safe)
- Only template you have
- Default template (change default first)

**Best Practice:**

Instead of deleting, consider:
- Renaming to "DEPRECATED - [Old Name]"
- Removing default flag but keeping template
- Creating documentation about why it's deprecated

This preserves history and avoids confusion if someone encounters an old workflow.

---

### 7.5 Setting and Changing Default Template

The default template is pre-selected when users create new workflows.

**Setting Default During Creation:**

When creating a new template:
1. Check the "Set as default template" checkbox
2. Save the template
3. It becomes the default

**Setting Default for Existing Template:**

1. Edit the template you want as default
2. Check "Set as default template"
3. Save (Update Template)
4. Previous default loses default status automatically

**Only One Default:**

The system enforces ONE default at a time:
- Checking "default" on Template A automatically unchecks it on Template B
- You'll never have two defaults
- Having zero defaults is fine (no template pre-selected)

**Visual Indicator:**

Default template shows blue "Default" badge:

```
Template Name                    [Default]
```

**Where Default Matters:**

In the Workflow creation dialog:

**With Default Set:**
```
Create New Workflow

Template: [ISO 27001 Controls v2022 ▼]  ← Pre-selected
          NIST CSF v1.1
          GDPR Compliance
          SOC 2 Controls
```

**Without Default Set:**
```
Create New Workflow

Template: [Select a template... ▼]  ← No pre-selection
          ISO 27001 Controls v2022
          NIST CSF v1.1
          GDPR Compliance
```

**Choosing Your Default:**

Set as default the template you use most frequently:
- 80%+ of workflows from this template? → Make it default
- Even mix of multiple templates? → No default needed
- Only one template? → Make it default for convenience

**Changing Default:**

You can change default as often as you like:
- No limit on changes
- Takes effect immediately
- Previous workflows unaffected

---

### 7.6 Template Library Management Tips

**Organizing Many Templates:**

As your template library grows:

**Naming Strategy:**
```
[Regulation] [Version] [Specialty]

Examples:
- ISO 27001:2022 Full
- ISO 27001:2022 Lite
- NIST CSF v1.1 Assessment
- NIST CSF v1.1 Implementation
- GDPR EU
- GDPR UK (with GDPR variations)
```

**Archiving Old Templates:**

No built-in archive feature, so use naming:
```
ARCHIVED - ISO 27001:2013
DEPRECATED - Old NIST Template
ACTIVE - Current ISO Template
```

**Documentation:**

Use descriptions to document:
- When to use this template
- Who it's designed for
- Special considerations
- Related templates

**Cleanup Schedule:**

Every 6-12 months:
1. Review all templates
2. Delete truly unused ones
3. Archive old versions
4. Update descriptions
5. Verify default is still appropriate

---

## CHAPTER 8: TEMPLATE DESIGN BEST PRACTICES

Creating effective templates is part art, part science. These practices come from real-world use.

### 8.1 Naming Conventions

Names matter - they're how you and your team identify and choose templates.

**Template Names:**

**Format Options:**

```
Option 1: [Standard Name] [Version]
Examples:
- ISO 27001:2022
- NIST CSF v1.1
- SOC 2 Type II

Option 2: [Standard] [Purpose] [Version]
Examples:
- ISO 27001 Implementation 2022
- NIST CSF Maturity Assessment v1.1
- SOC 2 Audit Preparation Type II

Option 3: [Client Type] [Standard] [Year]
Examples:
- Healthcare HIPAA Security 2025
- Financial PCI-DSS 4.0
- Tech Startup ISO 27001 2025
```

**Name Length:**
- Target: 30-50 characters
- Avoid: Single words ("Compliance")
- Avoid: Overly long names that get truncated in UI

**Special Characters:**
- Generally avoid: &, @, #
- OK to use: Hyphens (-), colons (:), parentheses ( )
- Version indicators: Use "v1.1" or ":2022" format

**Level Names:**

**Match Industry Terminology:**

```
Compliance:
✓ Domains, Controls, Requirements, Tasks
✗ Sections, Items, Things, Steps

Project Management:
✓ Projects, Phases, Deliverables, Tasks
✗ Groups, Stuff, Actions, Things

Manufacturing:
✓ Products, Stages, Checkpoints, Criteria
✗ Items, Parts, Tests, Stuff
```

**Be Consistent Across Templates:**

If one template uses "Controls," all compliance templates should use "Controls" (not mix with "Requirements").

**Plural vs Singular:**

Test your names in a sentence:
- "Add [Singular Name]" - Does it make grammatical sense?
- "View all [Plural Name]" - Does it sound natural?
- "No [Plural Name] yet" - Is it correct English?

---

### 8.2 Level Design Principles

The structure of your levels determines usability.

**Principle 1: Match Real-World Structure**

Your template should mirror how the regulation/framework is actually organized.

**Good Example:**
```
NIST CSF Template → Matches official NIST structure
├─ Functions (official NIST term)
├─ Categories (official NIST term)
└─ Subcategories (official NIST term)
```

**Bad Example:**
```
NIST CSF Template → Made-up structure
├─ Groups (not NIST terminology)
├─ Items (not NIST terminology)
└─ Tasks (not in NIST CSF)
```

**Why:** Auditors, clients, and team members expect familiar structure.

---

**Principle 2: Balance Depth and Simplicity**

**Too Shallow (1-2 levels):**
- Hard to organize complex information
- Everything feels flat
- No hierarchical progress tracking

**Too Deep (8-10 levels):**
- Overwhelming to navigate
- Excessive clicking to reach content
- Hard to understand overall structure

**Sweet Spot (3-4 levels):**
- Enough depth for organization
- Not so deep it's confusing
- Easy to visualize mentally

**Example Structures:**

```
3 Levels (Simple):
Projects → Phases → Tasks

4 Levels (Balanced):
Domains → Categories → Controls → Evidence

5 Levels (Complex but manageable):
Functions → Categories → Subcategories → Controls → Tasks

6+ Levels (Approaching too complex):
Function → Category → Subcategory → Control → Action → Task → Subtask
```

---

**Principle 3: Each Level Should Represent a Meaningful Division**

**Good Hierarchy:**
```
Level 1: Control Families (10-15 items)
Level 2: Control Categories (50-75 items)
Level 3: Individual Controls (100-200 items)
Level 4: Implementation Tasks (500-1000 items)

Each level represents a clear conceptual division.
```

**Poor Hierarchy:**
```
Level 1: All Security Stuff
Level 2: Some More Specific Security Stuff
Level 3: Even More Detailed Security Stuff

Unclear divisions make navigation confusing.
```

---

**Principle 4: Consider How Progress Will Be Tracked**

If you want progress bars:
- Parent levels need Progress Bar enabled
- Child levels need Done Checkbox enabled
- Design your hierarchy with this in mind

**Example:**

```
Want to track:
- Overall domain progress
- Category progress within domains
- Control completion within categories

Solution:
Level 1: Domains (Progress Bar: Yes, Done: No)
├─ Level 2: Categories (Progress Bar: Yes, Done: Yes)
   └─ Level 3: Controls (Progress Bar: No, Done: Yes)

Result:
- Domains show % of categories complete
- Categories show % of controls complete
- Controls have checkboxes
```

---

### 8.3 Property Selection Guidelines

Choosing which properties to enable is crucial.

**Guideline 1: Start Minimal**

**Philosophy:** It's easier to add properties later than to remove them.

**Initial Template:**
- Enable only essential properties
- Test with a real workflow
- Observe what's missing
- Edit template to add more properties

**Example Evolution:**

```
Version 1 (Minimalist):
- Name, Description, Done
Test with 2-3 workflows...

Version 2 (After feedback):
- Added: Tags, Links
- Reason: Users needed to categorize and reference policies
Test with 5 more workflows...

Version 3 (Mature):
- Added: Display ID, Progress Bar
- Reason: Auditors needed control references, management wanted progress visibility
```

---

**Guideline 2: Match User Sophistication**

**For Basic Users (First-time compliance):**
- Keep it simple
- Enable: Name, Description, Done, maybe Links
- Skip: Grades, Cumulative scoring, complex features

**For Advanced Users (Experienced compliance teams):**
- Full feature set
- Enable: Everything they might need
- Assume they'll use advanced features appropriately

**For Mixed Teams:**
- Balanced approach
- Enable commonly used features
- Skip niche features unless requested

---

**Guideline 3: Think About Reporting**

What reports will you need to generate?

**If you need:**
- Completion percentages → Enable Done Checkbox + Progress Bar
- Maturity scores → Enable Grade + Cumulative Grade
- Department breakdown → Enable Tags
- Evidence links → Enable Links
- Visual evidence → Enable Images

Design your template with the end report in mind.

---

**Guideline 4: Consider Collaboration Needs**

**Single-person workflows:**
- Skip Comments (no one to discuss with)
- Consider skipping Tags (one person organizes their own way)

**Multi-person workflows:**
- Enable Comments (team discussions)
- Enable Tags (cross-functional organization)
- Consider enabling Notes (different people document different aspects)

---

**Guideline 5: Different Properties for Different Levels**

You don't need uniform properties across all levels.

**Strategic Property Distribution:**

```
Level 1: High-level Domains
- Enable: Icon, Name, Description, Progress Bar
- Skip: Tags, Done, Links (too high-level for these)

Level 2: Control Categories
- Enable: Icon, Display ID, Name, Description, Tags, Progress Bar
- Skip: Done (tracked at control level)

Level 3: Individual Controls
- Enable: Display ID, Name, Description, Tags, Done, Links, Notes
- Skip: Icon, Grade (if not scoring controls)

Level 4: Implementation Tasks
- Enable: Name, Description, Tags, Done, Links, Images, Comments
- Skip: Display ID, Grade, Progress Bar
```

**Rationale:** High levels need overview info, low levels need execution detail.

---

### 8.4 Documentation Best Practices

Good documentation makes templates usable by others.

**Template-Level Description:**

Write a comprehensive description:

```
Template: ISO 27001:2022 Controls Framework

Description:
"This template provides the complete structure for ISO 27001:2022 
compliance tracking. It includes all 93 controls from Annex A, 
organized into 4 domains and 14 control categories.

USE WHEN:
- Implementing ISO 27001 for certification
- Annual surveillance audits
- Gap assessments against ISO 27001

PROPERTIES CONFIGURED:
- Display IDs for all control numbers (e.g., A.5.1)
- Links enabled for policy references
- Done checkboxes for implementation tracking
- Progress bars show category completion

INTENDED USERS:
- Compliance consultants
- Internal audit teams
- ISO project managers

NOTES:
- Control descriptions should include both ISO requirement and 
  implementation guidance
- Use tags to mark controls by priority (High/Medium/Low)
- Link all controls to relevant company policies"
```

**Level-Level Descriptions:**

Provide guidance for each level:

```
Level 3: Individual Controls

Description:
"Each control represents a specific ISO 27001 requirement. 
Control naming format: '[Control ID] - [Control Name]'. 
Example: 'A.5.1 - Information Security Policy'.

Fill in Description field with:
1. Exact ISO requirement text (copy from standard)
2. How to implement at your organization
3. What evidence is needed for audit

Use Display ID field for control number (e.g., A.5.1).
Link to your organization's implementing policy."
```

---

**Document Property Usage:**

In your template description or external documentation, explain how to use enabled properties:

```
PROPERTY USAGE GUIDE:

Display ID:
- Use ISO control numbers (e.g., A.5.1, A.9.2.3)
- Don't make up your own numbers
- Match official ISO 27001 standard

Tags:
- Priority: high, medium, low
- Department: IT, HR, Finance, Legal
- Status: in-progress, completed, not-started
- Audit Focus: critical, routine, optional

Links:
- Policy Documents: Link to Google Drive policies
- Evidence: Link to evidence folder
- References: Link to ISO standard excerpts

Notes:
- Implementation Evidence: Screenshots, configs, reports
- Audit Findings: Auditor comments and responses
- Change Log: Track control changes over time
```

---

### 8.5 Testing Your Template

Before rolling out a template to clients or team, test it thoroughly.

**Test Process:**

**Step 1: Create a Test Workflow**
- Use your new template
- Name it "TEST - [Template Name]"
- This is your sandbox

**Step 2: Build Out Structure**
- Add units at each level
- Create a realistic but small example
- 2-3 units per level is sufficient

**Step 3: Test All Properties**
- Try using every enabled property
- Add icons, tags, descriptions, links, etc.
- Verify everything works as expected

**Step 4: Test Progress Tracking**
- Mark some items as done
- Verify progress bars update correctly
- Check cumulative grades calculate right

**Step 5: Test Mode Switching**
- Toggle between Creation and Execution modes
- Verify appropriate elements show/hide
- Ensure no broken functionality

**Step 6: Test Export**
- Try exporting to a Board
- Verify structure translates correctly
- Check that properties carry over

**Step 7: Get Feedback**
- Share test workflow with a colleague
- Ask them to use it
- Collect their observations

**Step 8: Refine Template**
- Based on testing, edit template
- Add missing properties
- Adjust level structure if needed
- Update descriptions for clarity

---

**Common Issues Found During Testing:**

**Issue:** "Progress bars show 0% even though children are done"
**Cause:** Child level doesn't have Done Checkbox enabled
**Fix:** Edit template, enable Done Checkbox on child level

**Issue:** "Too many properties - form feels cluttered"
**Cause:** Enabled everything "just in case"
**Fix:** Disable properties you're not actually using

**Issue:** "Hierarchy too deep - hard to navigate"
**Cause:** Created 6-7 levels when 3-4 would suffice
**Fix:** Consolidate levels, reduce depth

**Issue:** "Can't score controls individually"
**Cause:** Grade property not enabled on control level
**Fix:** Edit template, enable Grade on that level

---

**Testing Checklist:**

```
☐ Created test workflow from template
☐ Added sample units at all levels
☐ Verified all enabled properties work
☐ Tested Creation mode functionality
☐ Tested Execution mode functionality
☐ Verified progress bars calculate correctly
☐ Tested cumulative grades (if enabled)
☐ Tried adding tags (if enabled)
☐ Tried adding attachments (links/images/notes/comments)
☐ Tested mode switching
☐ Tried exporting to Board
☐ Got feedback from at least one other person
☐ Updated template based on findings
☐ Documented any quirks or gotchas
☐ Template is production-ready
```

---

**Deployment Strategy:**

After testing:

1. **Soft Launch:** Use with 1-2 friendly clients first
2. **Gather Feedback:** Ask about confusing aspects
3. **Iterate:** Make small improvements
4. **Document Learnings:** Update template description with lessons learned
5. **Full Roll-Out:** Deploy to all users

---

## CHAPTER 9: COMMON TEMPLATE PATTERNS

Real-world template examples you can adapt for your needs.

### 9.1 Compliance Framework Template

**Best For:** ISO 27001, SOC 2, NIST CSF, HIPAA, PCI-DSS

**Structure (4 Levels):**

```
Level 1: Control Families
├─ Examples: Access Control, Cryptography, Physical Security
├─ Naming: Singular "Control Family", Plural "Control Families"
└─ Properties: Icon, Name, Description, Progress Bar

Level 2: Control Categories
├─ Examples: User Access Management, Data Encryption, Facility Security
├─ Naming: Singular "Control Category", Plural "Control Categories"
└─ Properties: Display ID, Name, Description, Tags, Progress Bar, Links

Level 3: Individual Controls
├─ Examples: "MFA for Admin Accounts", "Encrypt Data at Rest", "Badge System"
├─ Naming: Singular "Control", Plural "Controls"
└─ Properties: Display ID, Name, Description, Tags, Done, Links, Notes

Level 4: Implementation Tasks
├─ Examples: "Deploy Duo MFA", "Configure BitLocker", "Install Card Readers"
├─ Naming: Singular "Implementation Task", Plural "Implementation Tasks"
└─ Properties: Name, Description, Tags, Done, Links, Images, Comments
```

**Property Rationale:**

- **Display ID (Levels 2-3):** Map to official control numbers (A.9.2.1, CC6.1, etc.)
- **Description (All levels):** Essential for explaining requirements
- **Tags (Levels 2-4):** Priority, department, audit focus
- **Done (Levels 3-4):** Track control implementation
- **Progress Bars (Levels 1-2):** Visual completion tracking
- **Links (Levels 2-4):** Reference policies, evidence
- **Notes (Level 3):** Document implementation evidence
- **Images (Level 4):** Screenshots of configurations
- **Comments (Level 4):** Implementation discussions

**When to Use:**
- ISO 27001 certification projects
- SOC 2 audit preparation
- NIST CSF assessments
- Regulatory compliance tracking

---

### 9.2 Project Management Template

**Best For:** Software development, marketing campaigns, product launches

**Structure (4 Levels):**

```
Level 1: Projects
├─ Examples: "Website Redesign", "Q1 Marketing Campaign", "Mobile App v2.0"
├─ Naming: Singular "Project", Plural "Projects"
└─ Properties: Icon, Name, Description, Progress Bar

Level 2: Project Phases
├─ Examples: Planning, Execution, Testing, Launch
├─ Naming: Singular "Phase", Plural "Phases"
└─ Properties: Name, Description, Tags, Progress Bar

Level 3: Deliverables
├─ Examples: "Requirements Document", "Beta Version", "Marketing Materials"
├─ Naming: Singular "Deliverable", Plural "Deliverables"
└─ Properties: Name, Description, Tags, Done, Links, Progress Bar

Level 4: Tasks
├─ Examples: "Draft requirements", "Build login page", "Create social graphics"
├─ Naming: Singular "Task", Plural "Tasks"
└─ Properties: Name, Description, Tags, Done, Links, Comments
```

**Property Rationale:**

- **Icon (Level 1):** Visual project identification
- **Description (All levels):** Scope and context
- **Tags (Levels 2-4):** Priority, team member, status
- **Done (Levels 3-4):** Completion tracking
- **Progress Bars (Levels 1-3):** Multi-level progress visibility
- **Links (Levels 3-4):** Design files, Jira tickets, Google Docs
- **Comments (Level 4):** Team collaboration

**When to Use:**
- Cross-functional projects
- Agile/Scrum workflows
- Marketing campaigns
- Product development

---

### 9.3 Audit Preparation Template

**Best For:** Annual audits, gap assessments, readiness reviews

**Structure (3 Levels):**

```
Level 1: Audit Areas
├─ Examples: "Information Security", "Financial Controls", "HR Compliance"
├─ Naming: Singular "Audit Area", Plural "Audit Areas"
└─ Properties: Name, Description, Progress Bar

Level 2: Audit Requirements
├─ Examples: "Multi-Factor Authentication", "Segregation of Duties", "Background Checks"
├─ Naming: Singular "Requirement", Plural "Requirements"
└─ Properties: Display ID, Name, Description, Tags, Done, Progress Bar, Links

Level 3: Evidence Items
├─ Examples: "MFA Config Screenshot", "Role Matrix Document", "HR Policy v2.3"
├─ Naming: Singular "Evidence Item", Plural "Evidence Items"
└─ Properties: Name, Description, Tags, Done, Links, Images, Notes
```

**Property Rationale:**

- **Display ID (Level 2):** Auditor reference numbers
- **Description (All levels):** What's required, what evidence proves it
- **Tags (Levels 2-3):** Status (collected, pending, approved), criticality
- **Done (Levels 2-3):** Evidence readiness
- **Progress Bars (Levels 1-2):** Audit readiness percentage
- **Links (Levels 2-3):** Evidence repository locations
- **Images (Level 3):** Visual evidence (screenshots, photos)
- **Notes (Level 3):** Auditor questions and responses

**When to Use:**
- Pre-audit preparation
- Gap analysis
- Continuous compliance monitoring
- Audit response management

---

### 9.4 Manufacturing Quality Template

**Best For:** Quality control, inspection workflows, ISO 9001

**Structure (4 Levels):**

```
Level 1: Product Lines
├─ Examples: "Consumer Electronics", "Medical Devices", "Automotive Parts"
├─ Naming: Singular "Product Line", Plural "Product Lines"
└─ Properties: Name, Description, Progress Bar

Level 2: Production Stages
├─ Examples: "Component Receipt", "Assembly", "Quality Inspection", "Packaging"
├─ Naming: Singular "Production Stage", Plural "Production Stages"
└─ Properties: Name, Description, Progress Bar

Level 3: Quality Checkpoints
├─ Examples: "Incoming Inspection", "In-Process Check", "Final QC", "Packaging QC"
├─ Naming: Singular "Quality Checkpoint", Plural "Quality Checkpoints"
└─ Properties: Name, Description, Tags, Done, Grade, Progress Bar

Level 4: Inspection Criteria
├─ Examples: "Visual Defects", "Dimension Tolerance", "Electrical Test", "Weight Check"
├─ Naming: Singular "Inspection Criterion", Plural "Inspection Criteria"
└─ Properties: Name, Description, Tags, Done, Grade, Images, Comments
```

**Property Rationale:**

- **Grade (Levels 3-4):** Quality scores, pass/fail (1/0), defect counts
- **Cumulative Grade (Levels 1-3):** Rolled-up quality metrics
- **Done (Levels 3-4):** Inspection completion
- **Progress Bars (Levels 1-3):** Inspection progress
- **Images (Level 4):** Photos of defects, good examples
- **Tags (Levels 3-4):** Defect type, severity, inspector name
- **Comments (Level 4):** Inspector notes, corrective actions

**When to Use:**
- Manufacturing quality assurance
- ISO 9001 compliance
- Product inspection workflows
- Defect tracking

---

### 9.5 Risk Assessment Template

**Best For:** Risk management, threat analysis, vulnerability assessments

**Structure (3 Levels):**

```
Level 1: Risk Categories
├─ Examples: "Cyber Security", "Operational", "Financial", "Compliance"
├─ Naming: Singular "Risk Category", Plural "Risk Categories"
└─ Properties: Name, Description, Grade (Cumulative), Progress Bar

Level 2: Specific Risks
├─ Examples: "Ransomware Attack", "Supply Chain Disruption", "Regulatory Fine"
├─ Naming: Singular "Risk", Plural "Risks"
└─ Properties: Display ID, Name, Description, Tags, Grade, Progress Bar, Links

Level 3: Risk Controls
├─ Examples: "EDR Solution", "Backup Vendor", "Compliance Training Program"
├─ Naming: Singular "Risk Control", Plural "Risk Controls"
└─ Properties: Name, Description, Tags, Done, Grade, Links, Notes
```

**Property Rationale:**

- **Grade (All levels):** Risk scores (likelihood × impact), control effectiveness
- **Cumulative Grade (Levels 1-2):** Overall risk level per category
- **Display ID (Level 2):** Risk register reference numbers
- **Tags (Levels 2-3):** Likelihood (high/med/low), impact, owner
- **Done (Level 3):** Control implementation status
- **Links (Levels 2-3):** Risk register, mitigation plans
- **Notes (Level 3):** Risk treatment decisions

---

### 9.6 Training Curriculum Template

**Best For:** Employee training, certification programs, onboarding

**Structure (3 Levels):**

```
Level 1: Training Programs
├─ Examples: "Security Awareness", "Manager Training", "Technical Certification"
├─ Naming: Singular "Training Program", Plural "Training Programs"
└─ Properties: Icon, Name, Description, Progress Bar

Level 2: Training Modules
├─ Examples: "Phishing Awareness", "Budget Management", "Cloud Architecture"
├─ Naming: Singular "Module", Plural "Modules"
└─ Properties: Name, Description, Tags, Done, Progress Bar, Links

Level 3: Learning Objectives
├─ Examples: "Identify phishing emails", "Create annual budget", "Design VPC"
├─ Naming: Singular "Learning Objective", Plural "Learning Objectives"
└─ Properties: Name, Description, Tags, Done, Links
```

**Property Rationale:**

- **Icon (Level 1):** Visual program identification
- **Done (Levels 2-3):** Completion tracking
- **Progress Bars (Levels 1-2):** Training progress
- **Links (Levels 2-3):** Training materials, videos, quizzes
- **Tags (Levels 2-3):** Role, department, certification path

---

### 9.7 Adapting Patterns to Your Needs

**How to Customize These Patterns:**

1. **Start with Closest Match**
   - Choose pattern most similar to your use case
   - Use exact structure initially
   - Test with sample data

2. **Modify Level Names**
   - Update terminology to match your industry
   - Keep hierarchy logic intact
   - Update singular/plural forms

3. **Adjust Property Selection**
   - Enable additional properties you need
   - Disable properties you won't use
   - Test to verify changes work

4. **Test and Iterate**
   - Create test workflow
   - Try real-world scenarios
   - Gather user feedback
   - Refine template

**Example Adaptation:**

```
Start with: Compliance Framework Template
Adapt for: Internal IT Policy Compliance

Changes:
- Level 1: "Policy Domains" (was "Control Families")
- Level 2: "Policy Requirements" (was "Control Categories")
- Level 3: "Compliance Checks" (was "Individual Controls")
- Level 4: "Verification Steps" (was "Implementation Tasks")
- Add: Images property at Level 4 (screenshot evidence)
- Remove: Display ID (no external numbering scheme)

Result: Custom policy compliance template
```

---

## CHAPTER 10: TROUBLESHOOTING

Common problems and their solutions.

### 10.1 Template Validation Errors

**Error: "Template name is required"**

**Problem:** Template name field is empty

**Solution:**
1. Scroll to Template Information section
2. Fill in Template Name field
3. Enter at least 3 characters
4. Try saving again

---

**Error: "Level [number] name is required"**

**Problem:** One or more levels have blank Level Name fields

**Solution:**
1. Scroll through all levels in your template
2. Find the level with empty name
3. Fill in Level Name, Singular Name, and Plural Name
4. Ensure no fields are blank
5. Try saving again

---

**Error: "Level name '[name]' is duplicated"**

**Problem:** Two levels have the same name

**Solution:**
1. Identify which levels have duplicate names
2. Rename one to be unique
3. Example: Change one "Controls" to "Control Categories"
4. Ensure all level names are distinct
5. Try saving again

---

**Error: "Level '[name]' has progress bar enabled but child level doesn't have done checkbox"**

**Problem:** Progress Bar enabled on parent but child lacks Done Checkbox

**Solution - Option 1 (Enable Child Done Checkbox):**
1. Find the child level mentioned in error
2. Scroll to that level's Unit Properties
3. Check "Done Checkbox"
4. Try saving again

**Solution - Option 2 (Disable Parent Progress Bar):**
1. Find the parent level mentioned in error
2. Scroll to that level's Unit Properties
3. Uncheck "Progress Bar"
4. Try saving again

---

**Error: "Level '[name]' has cumulative grades but child level doesn't have grades enabled"**

**Problem:** Cumulative Grade enabled but child doesn't have Grade

**Solution:**
1. Find the child level mentioned in error
2. Enable "Grade" property on that level
3. Cumulative Grade will auto-enable on parent
4. Try saving again

---

### 10.2 Cannot Delete Issues

**Problem: "Cannot delete level - template must have at least one level"**

**Cause:** Attempting to delete the only remaining level

**Solution:**
- Templates require minimum 1 level
- Cannot delete if only 1 level exists
- If you want to start over, create new template instead
- Or add a new level first, then delete the old one

---

**Problem: "Cannot delete template - template is set as default"**

**Cause:** Attempting to delete the default template

**Solution:**
1. Edit a different template
2. Check "Set as default template" on that template
3. Save
4. Return to template you want to delete
5. Delete button should now be visible
6. Confirm deletion

---

### 10.3 Saving Problems

**Problem: Changes don't seem to save**

**Possible Causes:**
- Network connection lost
- Server unavailable
- Browser JavaScript error
- Form validation failed silently

**Solutions:**

**Check Network:**
1. Verify internet connection
2. Try loading another website
3. If offline, reconnect and try again

**Check for Errors:**
1. Open browser developer console (F12)
2. Look for red error messages
3. Take screenshot and contact support if technical errors appear

**Try Again:**
1. Click Save button again
2. Wait for success message
3. Verify template appears in library

**Last Resort:**
1. Copy your level configuration to a text document
2. Refresh the page
3. Re-create the template
4. Try saving again

---

**Problem: "Network Error" message appears**

**Cause:** Server unavailable or network issue

**Solution:**
1. Wait 30 seconds
2. Try saving again
3. If persists, check:
   - Is server running?
   - Is PHP working?
   - Are file permissions correct on data/ folder?
4. Contact system administrator

---

### 10.4 Display Problems

**Problem: Template shows wrong number of levels**

**Cause:** Browser cache showing old data

**Solution:**
1. Refresh the page (F5 or Ctrl+R)
2. View template details to verify
3. If still wrong, clear browser cache
4. Reload template builder

---

**Problem: Properties I enabled don't show up in workflows**

**Cause:** Confusion about template vs workflow behavior

**Solution:**
- **For NEW workflows:** Properties will appear (create new workflow to test)
- **For EXISTING workflows:** They keep old template snapshot (create new workflow or understand this is expected behavior)
- Verify: Create brand new test workflow from template
- Check: Does new workflow have the properties?

---

### 10.5 Workflow Creation Problems

**Problem: Can't find my template in workflow creation dialog**

**Possible Causes:**
1. Template wasn't saved successfully
2. Viewing wrong template list
3. Browser cache issue

**Solutions:**

**Verify Template Exists:**
1. Open Template Builder
2. Check if template appears in library
3. If not there, it wasn't saved - recreate it

**Refresh Workflows Page:**
1. Go to Workflows page
2. Refresh browser (F5)
3. Try creating workflow again
4. Check if template appears now

**Check Template Dropdown:**
1. Click "New Workflow"
2. Look carefully through template dropdown
3. Templates are alphabetical
4. Your template should be in the list

---

### 10.6 Getting Help

**Documentation Resources:**

1. **This Manual:** You're reading it! Comprehensive template guide
2. **Platform Overview:** Understand how templates fit into the system
3. **Workflows Manual:** Learn how templates are used in workflows
4. **Boards Manual:** See how workflow exports work

**Self-Help:**

Before contacting support, try:
1. Re-reading relevant chapter of this manual
2. Creating a simple test template (1 level, 3 properties)
3. Checking browser console for errors (F12)
4. Testing in different browser (Chrome, Firefox, Edge)
5. Clearing browser cache and cookies

**Support Contacts:**

When you need help:

**Include in Your Support Request:**
- What you were trying to do
- Exact error message (take screenshot)
- Steps to reproduce the problem
- Browser and version
- Screenshot of template configuration
- Anything unusual about your setup

**Email:** support@yourplatform.com
**Documentation:** https://docs.yourplatform.com
**Community:** https://community.yourplatform.com

**Response Time:**
- Critical issues: Within 4 hours
- Normal issues: Within 24 hours
- Questions: Within 48 hours

---

## APPENDICES

### Appendix A: Template Property Quick Reference

**Complete Property Reference Table:**

| Property | Purpose | When to Enable | Example Use Case |
|----------|---------|----------------|------------------|
| **Icon** | Visual identification | Client-facing workflows, many items | Control family icons |
| **Display ID** | Custom identifiers | Regulatory codes, cross-references | "A.9.1.1", "PR.AC-4" |
| **Name** | Primary identifier | Always (required) | "Access Control Policy" |
| **Description** | Detailed information | Complex requirements | Implementation guidance |
| **Tags** | Multi-dimensional categorization | Cross-cutting concerns | Priority, department, status |
| **Done Checkbox** | Completion tracking | Executable workflows | Task completion |
| **Grade** | Numeric scoring | Assessments, ratings | Maturity level 1-5 |
| **Cumulative Grade** | Rolled-up scores | Aggregate metrics | Category totals |
| **Progress Bar** | Visual completion percentage | Parent-level tracking | Phase progress |
| **Links** | External resources | Policy references | Google Drive links |
| **Images** | Visual evidence | Screenshots, photos | Configuration screenshots |
| **Notes** | Rich text documentation | Supplementary info | Implementation notes |
| **Comments** | Discussion threads | Team collaboration | Q&A, clarifications |

---

### Appendix B: Regulation-Specific Template Guides

**B.1 GDPR Compliance Template**

```
Structure:
Level 1: GDPR Principles (7 principles)
├─ Lawfulness, Fairness, Transparency
├─ Purpose Limitation
├─ Data Minimization
├─ Accuracy
├─ Storage Limitation
├─ Integrity and Confidentiality
└─ Accountability

Level 2: GDPR Articles
├─ Relevant articles under each principle
└─ Example: Articles 5, 6, 9 under Lawfulness

Level 3: Compliance Requirements
├─ Specific obligations from each article
└─ Example: "Maintain lawful basis documentation"

Level 4: Evidence/Actions
├─ Implementation tasks or evidence items
└─ Example: "Create data processing register"

Properties to Enable:
✓ Display ID (Article numbers)
✓ Name
✓ Description (Legal requirements and guidance)
✓ Tags (Department: Legal, IT, HR, Finance)
✓ Done Checkbox
✓ Progress Bar (Levels 1-2)
✓ Links (Policy documents, DPIAs)
✓ Images (Evidence screenshots)
✓ Notes (Implementation documentation)
✓ Comments (Legal team Q&A)
```

---

**B.2 HIPAA Security Rule Template**

```
Structure:
Level 1: Safeguard Categories (3 categories)
├─ Administrative Safeguards
├─ Physical Safeguards
└─ Technical Safeguards

Level 2: Standards
├─ Security Management Process
├─ Assigned Security Responsibility
├─ Workforce Security
└─ [etc., 18 standards total]

Level 3: Implementation Specifications
├─ Required or Addressable specs
└─ Example: "Risk Analysis (Required)"

Level 4: Implementation Actions
├─ Specific steps to implement
└─ Example: "Conduct annual risk assessment"

Properties to Enable:
✓ Display ID (164.308(a)(1)(i) format)
✓ Name
✓ Description
✓ Tags (Required/Addressable, Priority, Department)
✓ Done Checkbox
✓ Progress Bar (Levels 1-2)
✓ Links (Policies, OCR guidance)
✓ Images (Evidence)
✓ Notes (Implementation decisions for addressable specs)
```

---

**B.3 SOC 2 Trust Services Criteria Template**

```
Structure:
Level 1: Trust Service Categories (5 categories)
├─ Security (Common Criteria)
├─ Availability
├─ Processing Integrity
├─ Confidentiality
└─ Privacy

Level 2: Control Categories
├─ Example: CC6 - Logical and Physical Access
└─ [20+ control categories]

Level 3: Control Points
├─ Specific control requirements
└─ Example: "CC6.1 - Access controls restrict..."

Level 4: Testing Procedures
├─ How control is tested
└─ Example: "Review access logs quarterly"

Properties to Enable:
✓ Display ID (CC6.1 format)
✓ Name
✓ Description (Control description + testing approach)
✓ Tags (Audit status, evidence status)
✓ Done Checkbox
✓ Grade (Control effectiveness: 1-4)
✓ Cumulative Grade (Category scores)
✓ Progress Bar (Levels 1-2)
✓ Links (Evidence location, vendor SOC 2 reports)
✓ Images (Control screenshots)
✓ Notes (Auditor findings and responses)
```

---

**B.4 ISO 27001:2022 Template**

```
Structure:
Level 1: Annex A Domains (4 domains)
├─ Organizational Controls
├─ People Controls
├─ Physical Controls
└─ Technological Controls

Level 2: Control Categories (14 categories)
├─ A.5 - Organizational Controls
├─ A.6 - People Controls
└─ [etc.]

Level 3: Individual Controls (93 controls)
├─ A.5.1 - Policies for information security
├─ A.5.2 - Information security roles
└─ [etc.]

Level 4: Implementation Tasks
├─ Organization-specific actions
└─ Example: "Document InfoSec policy"

Properties to Enable:
✓ Display ID (A.5.1 format)
✓ Name
✓ Description (ISO requirement + implementation guide)
✓ Tags (Implementation status, priority, domain owner)
✓ Done Checkbox
✓ Progress Bar (Levels 1-2)
✓ Links (Implementing policies, procedures)
✓ Images (Implementation evidence)
✓ Notes (Statement of Applicability justifications)
✓ Comments (Internal audit findings)
```

---

### Appendix C: Template Design Worksheet

**Use this worksheet when planning a new template:**

```
TEMPLATE DESIGN WORKSHEET

Template Name: _______________________________________________

Description: __________________________________________________
____________________________________________________________
____________________________________________________________

Primary Use Case: ☐ Compliance  ☐ Project Management  ☐ Quality
                 ☐ Risk Management  ☐ Training  ☐ Other: ________

Target Users: ☐ Consultants  ☐ Internal Team  ☐ Clients
             ☐ Auditors  ☐ Mixed Team

---

LEVEL STRUCTURE

Level 1:
  Name: ___________________  Singular: __________  Plural: __________
  Description: ________________________________________________
  Example items: _____________________________________________

Level 2:
  Name: ___________________  Singular: __________  Plural: __________
  Description: ________________________________________________
  Example items: _____________________________________________

Level 3:
  Name: ___________________  Singular: __________  Plural: __________
  Description: ________________________________________________
  Example items: _____________________________________________

Level 4:
  Name: ___________________  Singular: __________  Plural: __________
  Description: ________________________________________________
  Example items: _____________________________________________

---

PROPERTY SELECTION

Select properties for each level (checkboxes):

                    Level 1  Level 2  Level 3  Level 4
Icon                ☐        ☐        ☐        ☐
Display ID          ☐        ☐        ☐        ☐
Name (required)     ☑        ☑        ☑        ☑
Description         ☐        ☐        ☐        ☐
Tags                ☐        ☐        ☐        ☐
Done Checkbox       ☐        ☐        ☐        ☐
Grade               ☐        ☐        ☐        ☐
Cumulative Grade    ☐        ☐        ☐        ☐
Progress Bar        ☐        ☐        ☐        ☐
Links               ☐        ☐        ☐        ☐
Images              ☐        ☐        ☐        ☐
Notes               ☐        ☐        ☐        ☐
Comments            ☐        ☐        ☐        ☐

---

WORKFLOW CONFIGURATION

☐ Enable Workflow Icon
☐ Enable Workflow Description
☐ Enable Sequential Order Option
☐ Set as Default Template

---

TESTING PLAN

☐ Create test workflow
☐ Add sample units at all levels
☐ Test all enabled properties
☐ Verify progress tracking
☐ Test mode switching
☐ Get colleague feedback
☐ Refine based on testing

---

NOTES / SPECIAL CONSIDERATIONS:

____________________________________________________________
____________________________________________________________
____________________________________________________________
```

---

### Appendix D: Keyboard Shortcuts

**Template Builder Keyboard Shortcuts:**

Currently, the Template Builder does not have specific keyboard shortcuts. However, standard browser shortcuts work:

**General:**
- **Ctrl+S** (or Cmd+S): May trigger browser save (form auto-saves anyway)
- **Tab**: Navigate between form fields
- **Shift+Tab**: Navigate backwards
- **Enter**: Submit forms (in modals)
- **ESC**: Close modals

**Browser Standard:**
- **Ctrl+R** (or Cmd+R): Refresh page
- **Ctrl+W** (or Cmd+W): Close tab
- **Ctrl+T** (or Cmd+T): New tab
- **F5**: Reload page
- **F12**: Open developer console (for troubleshooting)

**Future Enhancements:**

Planned keyboard shortcuts for future versions:
- **Ctrl+N**: Create New Template
- **Ctrl+L**: Add New Level
- **Alt+↑**: Move Level Up
- **Alt+↓**: Move Level Down
- **Del**: Delete Selected Level
- **Ctrl+Enter**: Save Template
- **ESC**: Cancel/Close Builder

---

## DOCUMENTATION COMPLETE

**Templates Manual - Version 1.0**

You've reached the end of the comprehensive Templates Manual. You now understand:

✅ What templates are and why they matter
✅ How to access and navigate the Template Builder
✅ Creating templates from scratch
✅ Designing effective level structures
✅ Configuring all 13 unit properties
✅ Validation rules and saving
✅ Managing your template library
✅ Best practices for template design
✅ Common template patterns for different use cases
✅ Troubleshooting common issues
✅ Quick reference materials

**Next Steps:**

1. **Practice:** Create your first template using the patterns in Chapter 9
2. **Explore Workflows:** Learn how to create workflows from your templates (see Workflows Manual)
3. **Master Boards:** Understand how workflow exports to boards work (see Boards Manual)
4. **Stay Updated:** Check for documentation updates as the platform evolves

**Feedback Welcome:**

Help us improve this documentation:
- Found an error? Report it.
- Have suggestions? Share them.
- Need clarification? Ask questions.
- Used this manual successfully? Tell us your story.

---

*End of Templates Manual*
