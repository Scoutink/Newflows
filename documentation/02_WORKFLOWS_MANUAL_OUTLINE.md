# Workflows Manual
## Building Your Strategic Compliance Maps

---

## OUTLINE STRUCTURE

### CHAPTER 1: INTRODUCTION TO WORKFLOWS

**1.1 What is a Workflow?**
- Definition and purpose
- Macro-level strategic mapping
- From template to implementation
- Living documents vs static plans

**1.2 Workflows in Compliance Consultancy**
- Mapping regulatory requirements
- Client reference guidelines
- Audit preparation roadmaps
- Evidence collection frameworks

**1.3 Workflow Lifecycle**
- Creation from templates
- Population with data
- Sharing with clients
- Export to boards
- Ongoing maintenance

**1.4 Workflows vs Boards**
- Strategic vs tactical
- Structure vs execution
- Planning vs doing
- Consultant vs client ownership

---

### CHAPTER 2: THE WORKFLOW INTERFACE

**2.1 Main Navigation**
- Application header
- Workflow selector dropdown
- Mode toggle switch
- Action buttons
- Theme toggle

**2.2 Workflow Controls**
- New workflow button
- Rename button
- Unlink button (if applicable)
- Delete button
- Export to board button
- Expand/collapse all buttons

**2.3 Two Modes: Creation and Execution**
**Creation Mode:**
- Build and modify structure
- Add/delete units
- Edit properties
- Configure workflow
- Green UI indicators

**Execution Mode:**
- Mark items complete
- Track progress
- View-only structure
- Export capabilities
- Blue UI indicators

**2.4 Workflow Display Area**
- Hierarchical unit display
- Empty states
- Collapse/expand controls
- Add buttons

---

### CHAPTER 3: CREATING WORKFLOWS

**3.1 Four Creation Methods**

**Method 1: From Template**
- Select template from dropdown
- Name your workflow
- Template structure applied
- All properties initialized
- Most common method

**Method 2: Empty Workflow (Quick Start)**
- Single-level workflow
- All properties enabled
- Fast prototyping
- Simple checklists

**Method 3: Copy Existing Workflow**
- Duplicate complete workflow
- All units copied
- All data preserved
- Customization starting point

**Method 4: Linked Workflow (Synchronized)**
- Create synchronized copy
- Structural changes sync
- Multiple client deployments
- Maintain consistency

**3.2 Naming Your Workflow**
- Clear, descriptive names
- Include client/project name
- Version if applicable
- Examples: "Acme Corp - GDPR Compliance 2024"

**3.3 Selecting the Right Template**
- Match regulation/framework
- Consider complexity needs
- Property requirements
- Client sophistication level

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
