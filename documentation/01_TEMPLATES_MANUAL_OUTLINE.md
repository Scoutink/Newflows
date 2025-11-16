# Templates Manual
## Creating the Foundation for Your Workflows

---

## OUTLINE STRUCTURE

### CHAPTER 1: INTRODUCTION TO TEMPLATES

**1.1 What is a Template?**
- Definition and purpose
- Templates as workflow blueprints
- Reusability and consistency

**1.2 Why Templates Matter in Compliance**
- Standardization across regulations
- Consistency for clients
- Time savings on repetitive structures
- Quality assurance

**1.3 Template vs Workflow**
- Templates define structure
- Workflows contain actual data
- One template, many workflows

**1.4 Real-World Examples**
- ISO 27001 compliance template
- GDPR compliance template
- SOC 2 audit template
- NIST CSF template

---

### CHAPTER 2: ACCESSING THE TEMPLATE BUILDER

**2.1 Navigation**
- From main workflow page
- Templates link in navigation
- Template builder interface overview

**2.2 Template Library**
- Viewing existing templates
- Template cards display
- Default template indicator
- Creation date information

**2.3 Empty State**
- What you see with no templates
- Getting started message
- Create first template button

---

### CHAPTER 3: CREATING YOUR FIRST TEMPLATE

**3.1 Starting a New Template**
- Click "Create New Template" button
- Template builder form appears
- Understanding the interface

**3.2 Basic Template Information**
- Template name (required)
  - Best practices for naming
  - Examples: "GDPR Compliance Framework", "ISO 27001 Controls"
- Description (optional but recommended)
  - What to include
  - Who will use this template
  - Special considerations
- Mark as default checkbox
  - What it means
  - When to use it

**3.3 Workflow-Level Configuration**
- Enable workflow icon
  - Visual branding for workflows
  - When to enable
- Enable workflow description
  - Detailed workflow narratives
  - Context and background
- Enable sequential order option
  - Force ordered completion
  - Compliance audit trails

---

### CHAPTER 4: DESIGNING YOUR LEVEL STRUCTURE

**4.1 Understanding Levels**
- What is a level?
- Hierarchical thinking
- Maximum 10 levels
- Minimum 1 level

**4.2 Planning Your Hierarchy**
**Example: NIST CSF Structure**
- Level 1: Functions (5 items)
- Level 2: Categories (23 items)
- Level 3: Subcategories (108 items)
- Level 4: Implementation actions (custom)

**Example: Project Management**
- Level 1: Projects
- Level 2: Phases
- Level 3: Tasks
- Level 4: Subtasks

**Example: Manufacturing Pipeline**
- Level 1: Product lines
- Level 2: Production stages
- Level 3: Quality checkpoints
- Level 4: Inspection items

**4.3 Adding Levels**
- "Add Level" button
- New level appears in list
- Level numbering (automatic)

**4.4 Level Properties**
**Level Name (Required)**
- Overall level designation
- Examples: "Controls", "Requirements", "Tasks"

**Singular Name (Required)**
- Individual item name
- Examples: "Control", "Requirement", "Task"
- Used in UI: "Add Control", "Delete Task"

**Plural Name (Required)**
- Multiple items name
- Examples: "Controls", "Requirements", "Tasks"
- Used in UI: "No Requirements Yet", "5 Tasks"

**Level Description (Optional)**
- Purpose of this level
- Guidance for users
- Examples and context

**Level Color**
- Visual coding (not shown in current builder)
- Future feature for visual hierarchy

**Level Icon**
- Icon assignment (not shown in current builder)
- Future enhancement

**4.5 Reordering Levels**
- Move Up button
- Move Down button
- Sequential repositioning
- Hierarchy impact

**4.6 Deleting Levels**
- Delete Level button
- Confirmation required
- Cannot delete only level
- Impact on existing workflows

---

### CHAPTER 5: CONFIGURING UNIT PROPERTIES

**5.1 Understanding Unit Properties**
- What users can track
- Data collection points
- Compliance evidence
- Flexibility vs simplicity

**5.2 The 13 Property Types**

**Icon (enableIcon)**
- Visual identifiers for items
- 60+ icon library
- When to enable: Client-facing materials, visual navigation
- Example use: Identify control families

**Display ID (enableUnitId)**
- Custom identifiers
- Examples: "AC-1", "PR.AC-4", "REQ-2024-001"
- When to enable: Regulatory mapping, cross-referencing
- Compliance tracking

**Name (enableName)**
- Always required
- Primary identifier
- Cannot be disabled
- Clear, descriptive names

**Description (enableDescription)**
- Detailed information
- Implementation guidance
- Context and examples
- When to enable: Documentation-heavy processes

**Tags (enableTags)**
- Categorization and filtering
- Examples: "critical", "audit", "Q1-2025"
- When to enable: Multi-dimensional organization
- Cross-cutting concerns

**Done Checkbox (enableDone)**
- Completion tracking
- Required for progress bars
- Execution mode feature
- When to enable: Task completion tracking

**Grade (enableGrade)**
- Numeric scoring
- Maturity levels
- Risk ratings
- Examples: 1-5 scale, 0-100 percentage
- When to enable: Assessment frameworks

**Cumulative Grade (gradeCumulative)**
- Auto-enabled with Grade
- Rolls up child scores
- Parent shows total
- When to use: Aggregate scoring

**Progress Bar (enableProgressBar)**
- Visual completion percentage
- Requires child level Done checkbox
- Parent-level feature
- When to enable: Multi-step processes

**Links (enableLinks)**
- External resources
- Policy documents
- Reference materials
- When to enable: Documentation references

**Images (enableImages)**
- Visual evidence
- Screenshots
- Diagrams
- When to enable: Visual documentation

**Notes (enableNotes)**
- Rich text content
- Implementation notes
- Detailed guidance
- When to enable: Complex requirements

**Comments (enableComments)**
- Discussion threads
- Clarifications
- Q&A
- When to enable: Collaborative workflows

**5.3 Smart Property Dependencies**
- Grade enables Cumulative Grade
- Progress Bar requires child Done checkbox
- Logical enablement rules
- System validation

**5.4 Property Configuration Strategy**
**Minimalist Approach:**
- Enable only Name, Description, Done
- Simple checklists
- Quick deployment

**Standard Approach:**
- Name, Description, Tags, Done, Links
- Most common use cases
- Balanced functionality

**Comprehensive Approach:**
- All properties enabled
- Maximum flexibility
- Complex compliance frameworks

**Custom Approach:**
- Select based on specific needs
- Regulatory requirements
- Client expectations

---

### CHAPTER 6: VALIDATION AND SAVING

**6.1 Template Validation**
- Name required
- At least one level
- Level names required
- Unique level names
- Singular/plural names required
- Validation error display

**6.2 Saving Your Template**
- "Save Template" button
- Loading indicator
- Success notification
- Error handling

**6.3 Template Creation Confirmation**
- Template appears in library
- Card view with details
- Ready for workflow creation

---

### CHAPTER 7: MANAGING TEMPLATES

**7.1 Viewing Templates**
- Template cards in grid
- Name and description
- Level count display
- Creation date

**7.2 Viewing Template Details**
- "View" button on card
- Modal with full details
- All levels listed
- All properties shown
- Close modal

**7.3 Editing Templates**
- "Edit" button on card
- Opens template builder with data
- Make changes
- "Update Template" to save
- Affects future workflows only

**7.4 Deleting Templates**
- "Delete" button on card
- Confirmation dialog
- Cannot delete if default
- Permanent action
- Workflows remain unaffected

**7.5 Setting Default Template**
- Checkbox during creation/edit
- Only one default at a time
- Used for quick workflow creation
- Visual indicator on card

---

### CHAPTER 8: TEMPLATE DESIGN BEST PRACTICES

**8.1 Naming Conventions**
- Clear, descriptive template names
- Include regulation/framework name
- Version numbers if applicable
- Examples: "NIST CSF v1.1", "ISO 27001:2022"

**8.2 Level Design Principles**
- Match regulatory structure
- 3-4 levels typically sufficient
- More levels = more complexity
- Balance detail vs usability

**8.3 Property Selection Guidelines**
- Start minimal, add later
- Consider end-user capability
- Match client sophistication
- Think about reporting needs

**8.4 Documentation**
- Write clear descriptions
- Provide examples
- Include guidance
- Think about training

**8.5 Testing Your Template**
- Create test workflow
- Try all property types
- Verify hierarchy makes sense
- Get feedback before deployment

---

### CHAPTER 9: COMMON TEMPLATE PATTERNS

**9.1 Compliance Framework Template**
**Structure:**
- Level 1: Control families
- Level 2: Controls
- Level 3: Control objectives
- Level 4: Implementation tasks

**Properties:**
- Display ID (control numbers)
- Description (requirements)
- Links (policy references)
- Done (completion tracking)
- Notes (implementation evidence)

**9.2 Project Management Template**
**Structure:**
- Level 1: Projects
- Level 2: Phases
- Level 3: Deliverables
- Level 4: Tasks

**Properties:**
- Description (scope)
- Tags (priority, type)
- Done (completion)
- Progress bars (phase tracking)
- Comments (team discussion)

**9.3 Audit Preparation Template**
**Structure:**
- Level 1: Audit areas
- Level 2: Requirements
- Level 3: Evidence items

**Properties:**
- Display ID (requirement codes)
- Description (what's needed)
- Links (evidence locations)
- Images (screenshots)
- Notes (audit responses)
- Done (readiness status)

**9.4 Manufacturing Quality Template**
**Structure:**
- Level 1: Product lines
- Level 2: Quality stages
- Level 3: Inspection points
- Level 4: Test criteria

**Properties:**
- Grade (quality scores)
- Cumulative grade (overall quality)
- Images (defect photos)
- Comments (inspector notes)
- Done (inspection complete)

---

### CHAPTER 10: TROUBLESHOOTING

**10.1 Common Issues**
- Validation errors
- Cannot delete level
- Cannot delete template
- Changes not saving

**10.2 Solutions**
- Check required fields
- Minimum one level rule
- Default template restriction
- Network connection

**10.3 Getting Help**
- Documentation resources
- Support contacts
- Community forums

---

### APPENDICES

**Appendix A: Template Property Quick Reference**
[Table of all 13 properties with use cases]

**Appendix B: Regulation-Specific Templates**
- GDPR template guide
- HIPAA template guide
- SOC 2 template guide
- ISO 27001 template guide

**Appendix C: Template Worksheet**
[Blank planning worksheet for template design]

**Appendix D: Keyboard Shortcuts**
[Template builder shortcuts]

---

*This outline will be filled with comprehensive content, examples, and screenshots in the final documentation.*
