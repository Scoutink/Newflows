// ===== DYNAMIC WORKFLOW MANAGER =====
// Version 7.0 - Template-Based Dynamic Workflows

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const workflowRoot = document.getElementById('workflow-root');
    const modeSwitch = document.getElementById('mode-switch-checkbox');
    const saveStructureBtn = document.getElementById('save-structure-btn');
    const saveExecutionBtn = document.getElementById('save-execution-btn');
    const enforceSequenceCheckbox = document.getElementById('enforce-sequence-checkbox');
    const flowSelect = document.getElementById('flow-select');
    const flowNewBtn = document.getElementById('flow-new');
    const flowRenameBtn = document.getElementById('flow-rename');
    const flowUnlinkBtn = document.getElementById('flow-unlink');
    const flowDeleteBtn = document.getElementById('flow-delete');
    const linkedIndicator = document.getElementById('linked-indicator');
    const modal = {
        backdrop: document.getElementById('modal-backdrop'),
        title: document.getElementById('modal-title'),
        body: document.getElementById('modal-body'),
        closeBtn: document.getElementById('modal-close-btn')
    };

    // ===== STATE =====
    let appState = {
        theme: 'light',
        currentMode: 'creation',  // Default to creation mode (matches unchecked checkbox)
        workflow: {
            settings: { enforceSequence: true },
            flows: []
        },
        executions: {
            flows: {}
        },
        workflowLinks: {
            links: []
        },
        templates: [],
        currentFlowId: null,
        selectedActionPaths: {},
        expandedTextAreas: new Set(),
        activeTag: null,
        collapsedUnits: new Set(),  // Track collapsed unit IDs
        collapseState: {}  // Track collapse state per workflow: { flowId: { unitId: boolean } }
    };

    let quillEditor = null;

    // ===== UTILITIES =====
    const generateId = (prefix) => `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

    const getAbsoluteUrl = (url) => {
        if (typeof url !== 'string' || url.trim() === '') return 'about:blank';
        if (url.startsWith('assets/')) return url;
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `https://${url}`;
    };

    const ensureTagsArray = (node) => { 
        if (!node.tags) node.tags = []; 
        return node.tags; 
    };

    const nodeHasTag = (node, tag) => (node.tags || []).includes(tag);

    const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

    // ===== THEME / MODE =====
    const applyTheme = (theme) => {
        document.body.classList.toggle('dark-theme', theme === 'dark');
        appState.theme = theme;
        localStorage.setItem('workflowTheme', theme);
    };

    const toggleTheme = () => applyTheme(appState.theme === 'light' ? 'dark' : 'light');

    const applyModeStyles = () => {
        const isCreation = appState.currentMode === 'creation';
        document.querySelectorAll('.creation-only').forEach(el => {
            el.style.display = isCreation ? '' : 'none';
        });
        document.querySelectorAll('.execution-only').forEach(el => {
            el.style.display = isCreation ? 'none' : '';
        });
    };

    // Toast notification system
    // Legacy showToast wrapper - delegates to new Toast API for consistency
    const showToast = (message, type = 'info', duration = 3000) => {
        if (window.Toast) {
            Toast.show(message, type, duration);
        } else {
            // Fallback if Toast not loaded
            console.warn('Toast system not loaded, using console:', message);
        }
    };

    // ===== DATA LAYER =====
    const loadTemplates = async () => {
        try {
            const res = await fetch(`data/templates.json?t=${Date.now()}`);
            if (!res.ok) throw new Error('Failed to load templates');
            const data = await res.json();
            return data.templates || [];
        } catch (e) {
            console.error('Load templates error:', e);
            return [];
        }
    };

    const loadWorkflow = async () => {
        try {
            const res = await fetch(`data/workflows.json?t=${Date.now()}`);
            if (!res.ok) throw new Error('Failed to load workflows');
            const data = await res.json();
            appState.workflow = data;
        } catch (e) {
            console.error('Load workflow error:', e);
            appState.workflow = { settings: { enforceSequence: true }, flows: [] };
        }
    };

    const saveWorkflow = async () => {
        const saveBtn = document.getElementById('save-structure-btn');
        if (saveBtn) {
            saveBtn.classList.add('loading');
            saveBtn.disabled = true;
        }

        try {
            // Propagate changes to linked workflows
            if (appState.currentMode === 'creation') {
                propagateToLinkedWorkflows(appState.currentFlowId);
            }

            const res = await fetch('save_workflow.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(appState.workflow)
            });
            const json = await res.json();
            if (json.status !== 'success') throw new Error(json.message);
            Toast.success('Structure saved successfully!');
            return true;
        } catch (e) {
            console.error('Save workflow error:', e);
            Toast.error('Failed to save: ' + e.message);
            return false;
        } finally {
            if (saveBtn) {
                saveBtn.classList.remove('loading');
                saveBtn.disabled = false;
            }
        }
    };

    const loadExecutions = async () => {
        try {
            const res = await fetch(`data/executions.json?t=${Date.now()}`);
            if (!res.ok) throw new Error('Failed to load executions');
            const data = await res.json();
            appState.executions = data;
        } catch (e) {
            console.error('Load executions error:', e);
            appState.executions = { flows: {} };
        }
    };

    const saveExecutions = async () => {
        const saveBtn = document.getElementById('save-execution-btn');
        if (saveBtn) {
            saveBtn.classList.add('loading');
            saveBtn.disabled = true;
        }

        try {
            const res = await fetch('save_executions.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(appState.executions)
            });
            const json = await res.json();
            if (json.status !== 'success') throw new Error(json.message);
            Toast.success('Execution state saved!');
            return true;
        } catch (e) {
            console.error('Save executions error:', e);
            Toast.error('Failed to save executions: ' + e.message);
            return false;
        } finally {
            if (saveBtn) {
                saveBtn.classList.remove('loading');
                saveBtn.disabled = false;
            }
        }
    };

    const loadWorkflowLinks = async () => {
        try {
            const res = await fetch(`data/workflow-links.json?t=${Date.now()}`);
            if (!res.ok) throw new Error('Failed to load workflow links');
            const data = await res.json();
            appState.workflowLinks = data;
        } catch (e) {
            console.error('Load workflow links error:', e);
            appState.workflowLinks = { links: [] };
        }
    };

    const saveWorkflowLinks = async () => {
        try {
            const res = await fetch('save_workflow_links.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(appState.workflowLinks)
            });
            const json = await res.json();
            if (json.status !== 'success') throw new Error(json.message);
            return true;
        } catch (e) {
            console.error('Save workflow links error:', e);
            return false;
        }
    };

    // ===== LINKED WORKFLOWS MANAGEMENT =====
    const getLinkedWorkflows = (flowId) => {
        for (const linkGroup of appState.workflowLinks.links) {
            if (linkGroup.workflows.includes(flowId)) {
                return linkGroup.workflows.filter(id => id !== flowId);
            }
        }
        return [];
    };

    const isWorkflowLinked = (flowId) => {
        return appState.workflowLinks.links.some(group => group.workflows.includes(flowId));
    };

    const createLinkGroup = (flowId1, flowId2) => {
        const linkGroup = {
            groupId: generateId('link'),
            workflows: [flowId1, flowId2]
        };
        appState.workflowLinks.links.push(linkGroup);
        return linkGroup.groupId;
    };

    const addToLinkGroup = (flowId, existingFlowId) => {
        for (const linkGroup of appState.workflowLinks.links) {
            if (linkGroup.workflows.includes(existingFlowId)) {
                if (!linkGroup.workflows.includes(flowId)) {
                    linkGroup.workflows.push(flowId);
                }
                return linkGroup.groupId;
            }
        }
        return null;
    };

    const unlinkWorkflow = (flowId) => {
        appState.workflowLinks.links = appState.workflowLinks.links.map(group => {
            return {
                ...group,
                workflows: group.workflows.filter(id => id !== flowId)
            };
        }).filter(group => group.workflows.length > 1);
        saveWorkflowLinks();
        populateFlowSelect();
        render();
    };

    const propagateToLinkedWorkflows = (sourceFlowId) => {
        const linkedFlowIds = getLinkedWorkflows(sourceFlowId);
        if (linkedFlowIds.length === 0) return;

        const sourceFlow = appState.workflow.flows.find(f => f.id === sourceFlowId);
        if (!sourceFlow) return;

        linkedFlowIds.forEach(targetFlowId => {
            const targetFlow = appState.workflow.flows.find(f => f.id === targetFlowId);
            if (!targetFlow) return;

            // Only propagate if templates match
            if (targetFlow.templateId !== sourceFlow.templateId) {
                console.warn(`Cannot propagate to ${targetFlow.name}: different template`);
                return;
            }

            // Deep clone the structure from source
            const clonedData = deepCopy(sourceFlow.data);
            
            // Map old IDs to new IDs for execution state preservation
            const idMap = new Map();
            
            const regenerateIds = (node, targetNode) => {
                if (targetNode) {
                    idMap.set(node.id, targetNode.id);
                    node.id = targetNode.id;
                } else {
                    const oldId = node.id;
                    node.id = generateId(node.id.split('-')[0]);
                    idMap.set(oldId, node.id);
                }
                
                (node.subcategories || []).forEach((child, idx) => {
                    const targetChild = targetNode?.subcategories?.[idx];
                    regenerateIds(child, targetChild);
                });
            };
            
            // Match up nodes and regenerate IDs
            clonedData.forEach((node, idx) => {
                const targetNode = targetFlow.data[idx];
                regenerateIds(node, targetNode);
            });
            
            // Preserve execution state with ID mapping
            const targetExec = appState.executions.flows[targetFlowId];
            if (targetExec) {
                const newCompleted = {};
                Object.entries(targetExec.completed).forEach(([oldId, value]) => {
                    const newId = idMap.get(oldId) || oldId;
                    newCompleted[newId] = value;
                });
                targetExec.completed = newCompleted;
            }
            
            targetFlow.data = clonedData;
        });
    };

    // ===== FLOW HELPERS =====
    const getCurrentFlow = () => {
        return appState.workflow.flows.find(f => f.id === appState.currentFlowId) || null;
    };

    const getTemplate = (flow) => {
        if (!flow || !flow.templateSnapshot) return null;
        return flow.templateSnapshot;
    };

    const getObjectByPath = (path, flow) => {
        const root = { data: flow.data };
        return path.split('.').reduce((acc, key) => acc && acc[key], root);
    };

    const getParentAndKey = (path, flow) => {
        const parts = path.split('.');
        const key = parseInt(parts.pop(), 10);
        return { parent: getObjectByPath(parts.join('.'), flow), key };
    };

    // ===== EXECUTION STATE =====
    const ensureExecFlow = (flowId) => {
        if (!appState.executions.flows[flowId]) {
            appState.executions.flows[flowId] = { completed: {} };
        }
        return appState.executions.flows[flowId];
    };

    const setCompleted = (flowId, unitId, value) => {
        const exec = ensureExecFlow(flowId);
        exec.completed[unitId] = !!value;
    };

    const isCompleted = (flowId, unitId) => {
        const exec = ensureExecFlow(flowId);
        return exec.completed[unitId] === true;
    };

    // ===== CUMULATIVE GRADE CALCULATOR =====
    const calculateCumulativeGrade = (unit, template, depth) => {
        const level = template.levels[depth];
        if (!level) return unit.grade || 0;

        // If not cumulative or no children, return own grade
        if (!level.unitConfig.gradeCumulative || depth >= template.levels.length - 1) {
            return unit.grade || 0;
        }

        // Cumulative: sum of children
        if (!unit.subcategories || unit.subcategories.length === 0) {
            return 0;
        }

        return unit.subcategories.reduce((sum, child) => {
            return sum + calculateCumulativeGrade(child, template, depth + 1);
        }, 0);
    };

    const updateAllCumulativeGrades = (units, template, depth = 0) => {
        if (!units || !template) return;

        units.forEach(unit => {
            const level = template.levels[depth];
            if (level && level.unitConfig.gradeCumulative) {
                unit.grade = calculateCumulativeGrade(unit, template, depth);
            }

            if (unit.subcategories && depth < template.levels.length - 1) {
                updateAllCumulativeGrades(unit.subcategories, template, depth + 1);
            }
        });
    };

    // ===== PROGRESS BAR CALCULATOR =====
    const calculateProgress = (unit, template, depth) => {
        if (!unit.subcategories || unit.subcategories.length === 0) {
            return 0;
        }

        const childLevel = template.levels[depth + 1];
        if (!childLevel || !childLevel.unitConfig.enableDone) {
            return 0;
        }

        const flow = getCurrentFlow();
        if (!flow) return 0;

        const total = unit.subcategories.length;
        const completed = unit.subcategories.filter(child => 
            childLevel.unitConfig.enableDone && isCompleted(flow.id, child.id)
        ).length;

        return Math.round((completed / total) * 100);
    };

    // ===== TEMPLATE-BASED WORKFLOW CREATION =====
    const createFlowFromTemplate = async (name, templateId, providedTemplate = null) => {
        const template = providedTemplate || appState.templates.find(t => t.id === templateId);
        if (!template) {
            showToast('Template not found', 'error', 4000);
            return;
        }

        const flow = {
            id: generateId('flow'),
            name: name,
            templateId: template.id,
            templateSnapshot: deepCopy(template),
            data: [],
            icon: null,
            description: '',
            enforceSequence: template.workflowConfig.enableSequentialOrder ? false : null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        appState.workflow.flows.push(flow);
        appState.currentFlowId = flow.id;
        
        // CRITICAL FIX: Set mode to creation for new workflows
        appState.currentMode = 'creation';
        if (modeSwitch) {
            modeSwitch.checked = false; // Unchecked = creation mode
        }
        
        populateFlowSelect();
        render();
        await saveWorkflow();
    };

    const showCreateFlowDialog = async () => {
        if (appState.templates.length === 0) {
            showToast('No templates available. Please create a template first in Template Builder.', 'warning', 5000);
            return;
        }

        const existingFlows = appState.workflow.flows.map(f => 
            `<option value="${f.id}">${f.name}</option>`
        ).join('');

        const html = `
            <form id="create-flow-form" class="modal-form">
                <label for="creation-mode">Creation Mode</label>
                <select id="creation-mode" required onchange="toggleCreationMode(this.value)">
                    <option value="template">From Template</option>
                    <option value="empty">Empty Workflow (Quick Start)</option>
                    <option value="copy">Copy Existing Workflow</option>
                    <option value="linked">Linked Workflow (Synchronized)</option>
                </select>
                
                <div id="template-section">
                    <label for="flow-name">Workflow Name <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="flow-name" required autofocus placeholder="e.g., NIST CSF Compliance 2025">
                    
                    <label for="flow-template">Based on Template <span style="color: #ef4444;">*</span></label>
                    <select id="flow-template" required>
                        ${appState.templates.map(t => `
                            <option value="${t.id}" ${t.isDefault ? 'selected' : ''}>
                                ${t.name} (${t.levels.length} level${t.levels.length !== 1 ? 's' : ''})
                            </option>
                        `).join('')}
                    </select>
                    <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
                        <i class="fa-solid fa-info-circle"></i> The template defines the structure and available properties for your workflow
                    </p>
                </div>
                
                
                
                <div id="empty-section" style="display: none;">
                    <label for="empty-name">Workflow Name <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="empty-name" placeholder="e.g., Quick Checklist">
                    <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
                        <i class="fa-solid fa-info-circle"></i> Creates a simple 1-level workflow with all properties enabled
                    </p>
                </div>
                
                <div id="copy-section" style="display: none;">
                    <label for="copy-name">New Workflow Name <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="copy-name" placeholder="e.g., Copy of Workflow">
                    
                    <label for="copy-source">Copy From <span style="color: #ef4444;">*</span></label>
                    <select id="copy-source">
                        ${existingFlows || '<option value="">No workflows available</option>'}
                    </select>
                    <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
                        <i class="fa-solid fa-info-circle"></i> Creates a complete copy with all units and settings
                    </p>
                </div>
                

                
                <div id="linked-section" style="display: none;">
                    <label for="linked-name">New Workflow Name <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="linked-name" placeholder="e.g., Team B Workflow">
                    
                    <label for="linked-source">Link To <span style="color: #ef4444;">*</span></label>
                    <select id="linked-source">
                        ${existingFlows || '<option value="">No workflows available</option>'}
                    </select>
                    <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
                        <i class="fa-solid fa-link"></i> <strong>Linked workflows stay synchronized:</strong> structural changes in one automatically update all linked workflows
                    </p>
                    <p style="margin-top: 0.25rem; font-size: 0.875rem; color: var(--text-secondary);">
                        <i class="fa-solid fa-info-circle"></i> Perfect for managing same requirements across multiple teams or regions
                    </p>
                </div>
                
                                <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem; justify-content: flex-end;">
                    <button type="button" class="btn-secondary" onclick="closeModal()">Cancel</button>
                    <button type="submit" class="btn-primary">
                        <i class="fa-solid fa-plus"></i> Create Workflow
                    </button>
                </div>
            </form>
        `;

        openModal('Create New Workflow', html, () => {
            window.toggleCreationMode = (mode) => {
                document.getElementById('template-section').style.display = mode === 'template' ? 'block' : 'none';
                document.getElementById('empty-section').style.display = mode === 'empty' ? 'block' : 'none';
                document.getElementById('copy-section').style.display = mode === 'copy' ? 'block' : 'none';
                document.getElementById('linked-section').style.display = mode === 'linked' ? 'block' : 'none';
            };

            const form = document.getElementById('create-flow-form');

            // Add form validation
            if (window.FormValidator) {
                FormValidator.attachTo(form, {
                    'flow-name': { required: true, minLength: 3, maxLength: 100 },
                    'empty-name': { required: true, minLength: 3, maxLength: 100 },
                    'copy-name': { required: true, minLength: 3, maxLength: 100 },
                    'linked-name': { required: true, minLength: 3, maxLength: 100 }
                });
            }

            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const mode = document.getElementById('creation-mode').value;
                
                try {
                    if (mode === 'template') {
                        const name = document.getElementById('flow-name').value.trim();
                        const templateId = document.getElementById('flow-template').value;
                        if (!name) {
                            showToast('Please enter a workflow name', 'warning', 3000);
                            return;
                        }
                        if (!templateId) {
                            showToast('Please select a template', 'warning', 3000);
                            return;
                        }
                        await createFlowFromTemplate(name, templateId);
                    } else if (mode === 'empty') {
                        const name = document.getElementById('empty-name').value.trim();
                        if (!name) {
                            showToast('Please enter a workflow name', 'warning', 3000);
                            return;
                        }
                        await createEmptyWorkflow(name);
                    } else if (mode === 'copy') {
                        const name = document.getElementById('copy-name').value.trim();
                        if (!name) {
                            showToast('Please enter a workflow name', 'warning', 3000);
                            return;
                        }
                        const sourceId = document.getElementById('copy-source').value;
                        if (!sourceId) {
                            showToast('Please select a source workflow', 'warning', 3000);
                            return;
                        }
                        await copyWorkflow(name, sourceId);
                    } else if (mode === 'linked') {
                        const name = document.getElementById('linked-name').value.trim();
                        if (!name) {
                            showToast('Please enter a workflow name', 'warning', 3000);
                            return;
                        }
                        const sourceId = document.getElementById('linked-source').value;
                        if (!sourceId) {
                            showToast('Please select a source workflow', 'warning', 3000);
                            return;
                        }
                        await createLinkedWorkflow(name, sourceId);
                    }
                    closeModal();
                } catch (error) {
                    console.error('Workflow creation error:', error);
                    showToast('Failed to create workflow: ' + error.message, 'error', 5000);
                }
            });
        });
    };

    const copyWorkflow = async (newName, sourceFlowId) => {
        const sourceFlow = appState.workflow.flows.find(f => f.id === sourceFlowId);
        if (!sourceFlow) {
            showToast('Source workflow not found', 'error', 4000);
            return;
        }

        // Deep clone the source flow
        const newFlow = deepCopy(sourceFlow);
        newFlow.id = generateId('flow');
        newFlow.name = newName;
        newFlow.createdAt = new Date().toISOString();
        newFlow.updatedAt = new Date().toISOString();

        // Regenerate all unit IDs to avoid conflicts
        const regenerateUnitIds = (unit) => {
            const oldId = unit.id;
            unit.id = generateId('unit');
            
            // Update execution state mapping
            const exec = ensureExecFlow(sourceFlowId);
            if (exec.completed[oldId]) {
                ensureExecFlow(newFlow.id).completed[unit.id] = exec.completed[oldId];
            }
            
            if (unit.subcategories) {
                unit.subcategories.forEach(regenerateUnitIds);
            }
        };

        newFlow.data.forEach(regenerateUnitIds);

        appState.workflow.flows.push(newFlow);
        appState.currentFlowId = newFlow.id;
        
        // Set mode to creation for copied workflows
        appState.currentMode = 'creation';
        if (modeSwitch) {
            modeSwitch.checked = false;
        }
        
        populateFlowSelect();
        render();
        await saveWorkflow();
        await saveExecutions();
    };

    const createEmptyWorkflow = async (name) => {
        // Find or create "Empty" template (simple 1-level with all properties)
        let emptyTemplate = appState.templates.find(t => t.name === 'Empty' || t.name === 'Simple Workflow');
        
        if (!emptyTemplate) {
            // Create a basic empty template
            emptyTemplate = {
                id: 'template-empty-default',
                name: 'Empty',
                description: 'Simple 1-level workflow with all properties enabled',
                isDefault: false,
                version: '1.0.0',
                workflowConfig: {
                    enableIcon: true,
                    enableDescription: true,
                    enableSequentialOrder: true
                },
                levels: [{
                    id: 'level-empty-1',
                    order: 0,
                    name: 'Item',
                    singularName: 'Item',
                    pluralName: 'Items',
                    description: 'Workflow items',
                    unitConfig: {
                        enableIcon: true,
                        enableUnitId: true,
                        enableName: true,
                        enableDescription: true,
                        enableTags: true,
                        enableDone: true,
                        enableGrade: true,
                        gradeCumulative: false,
                        enableProgressBar: false,
                        enableLinks: true,
                        enableImages: true,
                        enableNotes: true,
                        enableComments: true
                    }
                }]
            };
        }
        
        await createFlowFromTemplate(name, emptyTemplate.id, emptyTemplate);
    };

    const createLinkedWorkflow = async (name, sourceFlowId) => {
        const sourceFlow = appState.workflow.flows.find(f => f.id === sourceFlowId);
        if (!sourceFlow) {
            showToast('Source workflow not found', 'error', 4000);
            return;
        }

        // Deep clone the source flow
        const newFlow = deepCopy(sourceFlow);
        newFlow.id = generateId('flow');
        newFlow.name = name;
        newFlow.createdAt = new Date().toISOString();
        newFlow.updatedAt = new Date().toISOString();

        // Regenerate all unit IDs to avoid conflicts
        const regenerateUnitIds = (unit) => {
            const oldId = unit.id;
            unit.id = generateId('unit');
            
            // Update execution state mapping
            const exec = ensureExecFlow(sourceFlowId);
            if (exec.completed[oldId]) {
                ensureExecFlow(newFlow.id).completed[unit.id] = exec.completed[oldId];
            }
            
            if (unit.subcategories) {
                unit.subcategories.forEach(regenerateUnitIds);
            }
        };

        newFlow.data.forEach(regenerateUnitIds);

        // Add to link group
        if (isWorkflowLinked(sourceFlowId)) {
            addToLinkGroup(newFlow.id, sourceFlowId);
        } else {
            createLinkGroup(sourceFlowId, newFlow.id);
        }
        await saveWorkflowLinks();

        appState.workflow.flows.push(newFlow);
        appState.currentFlowId = newFlow.id;
        
        // Set mode to creation for linked workflows
        appState.currentMode = 'creation';
        if (modeSwitch) {
            modeSwitch.checked = false;
        }
        
        populateFlowSelect();
        render();
        await saveWorkflow();
        await saveExecutions();
    };


    // ===== EXPAND/COLLAPSE MANAGEMENT =====
    /**
     * Premium collapse/expand logic with parent-child relationship management
     */
    const CollapseManager = {
        /**
         * Check if a unit is collapsed
         */
        isCollapsed(flowId, unitId) {
            if (!appState.collapseState[flowId]) {
                return false;
            }
            return appState.collapseState[flowId][unitId] === true;
        },

        /**
         * Toggle collapse state for a unit with premium parent-child logic
         */
        toggle(flowId, unitId, unit) {
            if (!appState.collapseState[flowId]) {
                appState.collapseState[flowId] = {};
            }

            const isCurrentlyCollapsed = this.isCollapsed(flowId, unitId);
            const newState = !isCurrentlyCollapsed;

            // Set the state
            appState.collapseState[flowId][unitId] = newState;

            // Premium Logic: If collapsing, remember children's current state
            // If expanding, restore children to their previous state
            if (newState && unit.subcategories && unit.subcategories.length > 0) {
                // Collapsing: Store children states before hiding them
                this.rememberChildrenStates(flowId, unit.subcategories);
            }

            // Save state to localStorage
            this.saveToStorage();

            return newState;
        },

        /**
         * Remember children's collapse states (premium logic)
         */
        rememberChildrenStates(flowId, subcategories) {
            if (!subcategories || subcategories.length === 0) return;

            subcategories.forEach(child => {
                // State is already tracked, no need to change it
                // This preserves the user's previous expand/collapse choices

                // Recursively remember grandchildren
                if (child.subcategories && child.subcategories.length > 0) {
                    this.rememberChildrenStates(flowId, child.subcategories);
                }
            });
        },

        /**
         * Expand a unit and all its parents (bubble up)
         */
        expandWithParents(flowId, path) {
            if (!appState.collapseState[flowId]) {
                appState.collapseState[flowId] = {};
            }

            // Parse path to get all parent paths
            const pathParts = path.split('.');
            let currentPath = '';

            for (let i = 0; i < pathParts.length; i++) {
                if (i > 0) currentPath += '.';
                currentPath += pathParts[i];

                // Get unit ID from path
                const flow = getCurrentFlow();
                const unit = getObjectByPath(currentPath, flow);
                if (unit && unit.id) {
                    appState.collapseState[flowId][unit.id] = false;
                }
            }

            this.saveToStorage();
        },

        /**
         * Collapse all units in the workflow
         */
        collapseAll(flowId, units) {
            if (!appState.collapseState[flowId]) {
                appState.collapseState[flowId] = {};
            }

            const collapseRecursive = (items) => {
                items.forEach(unit => {
                    if (unit.subcategories && unit.subcategories.length > 0) {
                        appState.collapseState[flowId][unit.id] = true;
                        collapseRecursive(unit.subcategories);
                    }
                });
            };

            collapseRecursive(units);
            this.saveToStorage();
        },

        /**
         * Expand all units in the workflow
         */
        expandAll(flowId, units) {
            if (!appState.collapseState[flowId]) {
                appState.collapseState[flowId] = {};
            }

            const expandRecursive = (items) => {
                items.forEach(unit => {
                    appState.collapseState[flowId][unit.id] = false;
                    if (unit.subcategories && unit.subcategories.length > 0) {
                        expandRecursive(unit.subcategories);
                    }
                });
            };

            expandRecursive(units);
            this.saveToStorage();
        },

        /**
         * Check if unit should be visible based on parent collapse states
         */
        isVisible(flowId, path) {
            // Root level is always visible
            if (!path || path === 'data') return true;

            // Check all parents - if any parent is collapsed, this is not visible
            const pathParts = path.split('.');
            let currentPath = '';

            for (let i = 0; i < pathParts.length - 1; i += 2) { // Step by 2 to skip indices
                if (i > 0) currentPath += '.';
                currentPath += pathParts[i];

                if (i + 1 < pathParts.length) {
                    currentPath += '.' + pathParts[i + 1];
                }

                // Get parent unit
                const flow = getCurrentFlow();
                const parentPath = currentPath.substring(0, currentPath.lastIndexOf('.subcategories'));
                if (parentPath && parentPath !== 'data') {
                    const parent = getObjectByPath(parentPath, flow);
                    if (parent && parent.id && this.isCollapsed(flowId, parent.id)) {
                        return false;
                    }
                }
            }

            return true;
        },

        /**
         * Save collapse state to localStorage
         */
        saveToStorage() {
            try {
                localStorage.setItem('workflowCollapseState', JSON.stringify(appState.collapseState));
            } catch (e) {
                console.error('Failed to save collapse state:', e);
            }
        },

        /**
         * Load collapse state from localStorage
         */
        loadFromStorage() {
            try {
                const saved = localStorage.getItem('workflowCollapseState');
                if (saved) {
                    appState.collapseState = JSON.parse(saved);
                }
            } catch (e) {
                console.error('Failed to load collapse state:', e);
                appState.collapseState = {};
            }
        }
    };

    // Global functions for UI
    window.toggleUnitCollapse = (unitId) => {
        const flow = getCurrentFlow();
        if (!flow) return;

        // Find the unit
        const findUnit = (units) => {
            for (const unit of units) {
                if (unit.id === unitId) return unit;
                if (unit.subcategories && unit.subcategories.length > 0) {
                    const found = findUnit(unit.subcategories);
                    if (found) return found;
                }
            }
            return null;
        };

        const unit = findUnit(flow.data);
        if (unit) {
            CollapseManager.toggle(flow.id, unitId, unit);
            render();
        }
    };

    window.expandAllUnits = () => {
        const flow = getCurrentFlow();
        if (!flow) return;

        CollapseManager.expandAll(flow.id, flow.data);
        Toast.success('All sections expanded');
        render();
    };

    window.collapseAllUnits = () => {
        const flow = getCurrentFlow();
        if (!flow) return;

        CollapseManager.collapseAll(flow.id, flow.data);
        Toast.success('All sections collapsed');
        render();
    };


    // ===== DYNAMIC RENDERING =====
    const render = () => {
        const flow = getCurrentFlow();
        if (!flow) {
            workflowRoot.innerHTML = `
                <div class="empty-state-container">
                    <div class="empty-state-icon">
                        <i class="fa-solid fa-diagram-project"></i>
                    </div>
                    <h2 class="empty-state-title">No Workflow Selected</h2>
                    <p class="empty-state-description">
                        Get started by creating your first workflow to organize and track your work.
                    </p>
                    <div class="empty-state-actions">
                        <button class="btn-primary" onclick="document.getElementById('flow-new-btn').click()">
                            <i class="fa-solid fa-plus"></i> Create Your First Workflow
                        </button>
                    </div>
                    <div class="empty-state-hint">
                        <i class="fa-solid fa-lightbulb"></i>
                        <span>Tip: Press <kbd>Ctrl+N</kbd> to quickly create a new workflow</span>
                    </div>
                </div>
            `;
            return;
        }

        const template = getTemplate(flow);
        if (!template) {
            workflowRoot.innerHTML = '<div class="loading-state">Error: Template not found</div>';
            return;
        }

        // Update cumulative grades before rendering
        updateAllCumulativeGrades(flow.data, template, 0);

        const workflowInfoHtml = renderWorkflowInfo(flow, template);
        const unitsHtml = renderUnits(flow.data, template, 0);
        
        const contentHtml = unitsHtml || `
            <div class="empty-state-container" style="margin-top: 3rem;">
                <div class="empty-state-icon">
                    <i class="fa-solid fa-folder-open"></i>
                </div>
                <h2 class="empty-state-title">No ${template.levels[0].pluralName} Yet</h2>
                <p class="empty-state-description">
                    Start building your workflow by adding your first ${template.levels[0].singularName.toLowerCase()}.
                    ${appState.currentMode === 'creation' ? 'You can add items, organize them hierarchically, and customize properties.' : 'Switch to creation mode to add items.'}
                </p>
                ${appState.currentMode === 'creation' ? `
                    <div class="empty-state-actions">
                        <button class="btn-primary" onclick="document.getElementById('add-category-btn').click()">
                            <i class="fa-solid fa-plus"></i> Add First ${template.levels[0].singularName}
                        </button>
                    </div>
                    <div class="empty-state-hint">
                        <i class="fa-solid fa-lightbulb"></i>
                        <span>Tip: Press <kbd>Ctrl+A</kbd> to quickly add a new item</span>
                    </div>
                ` : `
                    <div class="empty-state-hint">
                        <i class="fa-solid fa-info-circle"></i>
                        <span>Switch to creation mode to start adding items</span>
                    </div>
                `}
            </div>
        `;
        
        workflowRoot.innerHTML = workflowInfoHtml + contentHtml;

        // Use setTimeout to ensure DOM is ready before applying styles
        setTimeout(() => {
            applyModeStyles();
            updateAddButton();
        }, 0);
    };

    const renderWorkflowInfo = (flow, template) => {
        const isCreation = appState.currentMode === 'creation';
        const config = template.workflowConfig;
        
        // Check if any workflow-level features are enabled
        const hasAnyFeature = config.enableIcon || config.enableDescription || config.enableSequentialOrder;
        
        if (!hasAnyFeature) {
            return '';
        }

        return `
            <div class="workflow-info-section ${isCreation ? '' : 'execution-mode'}">
                <div class="workflow-info-header">
                    <h2 class="workflow-title">
                        ${config.enableIcon && flow.icon ? `
                            <img src="icons/${flow.icon}" alt="workflow icon" class="workflow-icon" style="width: 32px; height: 32px; margin-right: 0.5rem;">
                        ` : ''}
                        ${flow.name}
                    </h2>
                    ${isCreation && config.enableIcon ? `
                        <button class="btn-secondary" onclick="showWorkflowIconPicker()" title="Change workflow icon">
                            <i class="fa-solid fa-icons"></i> ${flow.icon ? 'Change Icon' : 'Add Icon'}
                        </button>
                    ` : ''}
                </div>
                
                ${config.enableDescription ? `
                    <div class="workflow-description-section">
                        ${isCreation ? `
                            <textarea 
                                class="workflow-description-textarea"
                                placeholder="Workflow description..."
                                onblur="updateWorkflowProperty('description', this.value)"
                            >${flow.description || ''}</textarea>
                        ` : flow.description ? `
                            <p class="workflow-description-text">${flow.description}</p>
                        ` : ''}
                    </div>
                ` : ''}
                
                ${config.enableSequentialOrder && isCreation ? `
                    <div class="workflow-sequential-section">
                        <label class="checkbox-label">
                            <input type="checkbox" 
                                   ${flow.enforceSequence ? 'checked' : ''}
                                   onchange="updateWorkflowProperty('enforceSequence', this.checked)">
                            <span>Enforce Sequential Order</span>
                            <i class="fa-solid fa-circle-info" title="Require items to be completed in order"></i>
                        </label>
                    </div>
                ` : ''}
            </div>
        `;
    };

    const renderUnits = (units, template, depth, parentPath = 'data') => {
        if (!units || units.length === 0) return '';
        if (depth >= template.levels.length) return '';

        // Filter by active tag if set
        let filtered = units;
        if (appState.activeTag) {
            filtered = filterUnitsByTag(units, appState.activeTag, template, depth);
        }

        return filtered.map((unit, index) => {
            // Generate correct path for this depth
            const path = depth === 0 
                ? `data.${index}` 
                : `${parentPath}.subcategories.${index}`;
            return renderUnit(unit, template, depth, path);
        }).join('');
    };

    const renderUnit = (unit, template, depth, path) => {
        const level = template.levels[depth];
        const config = level.unitConfig;
        const isCreation = appState.currentMode === 'creation';
        const flow = getCurrentFlow();

        return `
            <div class="unit level-${depth}" data-path="${path}" data-level="${depth}" data-unit-id="${unit.id}">
                ${renderUnitHeader(unit, level, config, depth, path, isCreation, template, flow)}
                ${renderUnitBody(unit, level, config, path, isCreation)}
                ${depth < template.levels.length - 1 ? renderUnitChildren(unit, template, depth, path) : ''}
            </div>
        `;
    };

    const renderUnitHeader = (unit, level, config, depth, path, isCreation, template, flow) => {
        const unitIsCompleted = flow ? isCompleted(flow.id, unit.id) : false;
        const progress = config.enableProgressBar ? calculateProgress(unit, template, depth) : 0;
        const hasChildren = unit.subcategories && unit.subcategories.length > 0;
        const isCollapsed = flow ? CollapseManager.isCollapsed(flow.id, unit.id) : false;

        return `
            <div class="unit-header">
                ${hasChildren ? `
                    <button class="btn-collapse"
                            onclick="toggleUnitCollapse('${unit.id}')"
                            title="${isCollapsed ? 'Expand' : 'Collapse'}">
                        <i class="fa-solid fa-chevron-${isCollapsed ? 'right' : 'down'}"></i>
                    </button>
                ` : '<span class="collapse-spacer"></span>'}
                ${config.enableIcon ? `
                    <span class="unit-icon-container">
                        ${unit.icon ? `
                            <img src="icons/${unit.icon}" alt="icon" style="width: 24px; height: 24px;" class="unit-icon-img">
                        ` : isCreation ? `
                            <i class="fa-solid fa-image unit-icon-placeholder"></i>
                        ` : ''}
                        ${isCreation ? `
                            <button class="btn-icon-tiny" onclick="showUnitIconPicker('${path}')" title="Change icon">
                                <i class="fa-solid fa-icons"></i>
                            </button>
                        ` : ''}
                    </span>
                ` : ''}
                
                ${config.enableUnitId && isCreation ? `
                    <input type="text" 
                           class="unit-id-input" 
                           value="${unit.unitId || ''}" 
                           placeholder="ID" 
                           onblur="updateUnitProperty('${path}', 'unitId', this.value)">
                ` : config.enableUnitId && unit.unitId ? `
                    <span class="unit-id-display">${unit.unitId}</span>
                ` : ''}
                
                ${isCreation ? `
                    <input type="text" 
                           class="unit-name-input" 
                           value="${unit.name || ''}" 
                           placeholder="${level.singularName} name" 
                           onblur="updateUnitProperty('${path}', 'name', this.value)">
                ` : `
                    <span class="unit-name-display">${unit.name || level.singularName}</span>
                `}
                
                ${config.enableTags ? renderUnitTags(unit, path, isCreation) : ''}
                
                ${config.enableDone && !isCreation ? `
                    <label class="checkbox-label">
                        <input type="checkbox" 
                               ${unitIsCompleted ? 'checked' : ''} 
                               onchange="toggleUnitCompletion('${path}', '${unit.id}')">
                        <span>Done</span>
                    </label>
                ` : ''}
                
                ${config.enableGrade ? renderGradeInput(unit, config, path, isCreation) : ''}
                
                ${config.enableProgressBar && unit.subcategories && unit.subcategories.length > 0 ? `
                    <div class="progress-bar-container" title="${progress}% complete">
                        <div class="progress-bar" style="width: ${progress}%;"></div>
                        <span class="progress-text">${progress}%</span>
                    </div>
                ` : ''}
                
                ${isCreation ? `
                    <button class="btn-icon btn-delete" onclick="deleteUnit('${path}')" title="Delete ${level.singularName}">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                ` : ''}
                
                ${!isCreation && unit.subcategories && unit.subcategories.length > 0 ? `
                    <button class="btn-export-board" onclick="exportUnitToBoard('${path}')" title="Export to Project Board">
                        <i class="fa-solid fa-diagram-project"></i> Board
                    </button>
                ` : ''}
            </div>
        `;
    };

    const renderUnitBody = (unit, level, config, path, isCreation) => {
        if (!config.enableDescription && !hasAttachments(unit, config)) {
            return '';
        }

        return `
            <div class="unit-body">
                ${config.enableDescription ? `
                    <div class="unit-description">
                        ${isCreation ? `
                            <textarea 
                                class="unit-desc-textarea"
                                placeholder="${level.singularName} description"
                                onblur="updateUnitProperty('${path}', 'description', this.value)"
                            >${unit.description || ''}</textarea>
                        ` : unit.description ? `
                            <p>${unit.description}</p>
                        ` : ''}
                    </div>
                ` : ''}
                
                ${renderAttachments(unit, config, path, isCreation)}
            </div>
        `;
    };

    const renderUnitChildren = (unit, template, depth, path) => {
        const nextLevel = template.levels[depth + 1];
        if (!nextLevel) return '';

        const isCreation = appState.currentMode === 'creation';
        const flow = getCurrentFlow();
        const isCollapsed = flow ? CollapseManager.isCollapsed(flow.id, unit.id) : false;

        // CRITICAL FIX: Pass parent path to renderUnits
        const childrenHtml = renderUnits(unit.subcategories || [], template, depth + 1, path);

        return `
            <div class="unit-children ${isCollapsed ? 'collapsed' : 'expanded'}">
                ${childrenHtml}
                ${isCreation ? `
                    <button class="btn-add-child" onclick="addChildUnit('${path}', ${depth + 1})">
                        <i class="fa-solid fa-plus"></i> Add ${nextLevel.singularName}
                    </button>
                ` : ''}
            </div>
        `;
    };

    const renderGradeInput = (unit, config, path, isCreation) => {
        const isCumulative = config.gradeCumulative;
        const grade = unit.grade || 0;

        return `
            <div class="grade-input-group">
                ${isCumulative ? '<span title="Cumulative grade (sum of children)">Σ</span>' : ''}
                <input type="number" 
                       class="grade-input" 
                       value="${grade}" 
                       step="0.01"
                       ${isCumulative || !isCreation ? 'readonly' : ''}
                       ${!isCreation ? 'disabled' : ''}
                       ${!isCumulative && isCreation ? `onblur="updateUnitProperty('${path}', 'grade', parseFloat(this.value) || 0)"` : ''}
                       title="${isCumulative ? 'Cumulative grade (read-only)' : 'Grade'}">
            </div>
        `;
    };

    const renderUnitTags = (unit, path, isCreation) => {
        const tags = unit.tags || [];
        return `
            <div class="unit-tags">
                ${tags.map(tag => `
                    <span class="tag-badge" onclick="${isCreation ? '' : `filterByTag('${tag}')`}">
                        ${tag}
                        ${isCreation ? `<i class="fa-solid fa-xmark" onclick="removeTag('${path}', '${tag}'); event.stopPropagation();"></i>` : ''}
                    </span>
                `).join('')}
                ${isCreation ? `
                    <button class="btn-add-tag" onclick="showAddTagDialog('${path}')" title="Add tag">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                ` : ''}
            </div>
        `;
    };

    const hasAttachments = (unit, config) => {
        if (!unit.footer) return false;
        return (config.enableLinks && unit.footer.links && unit.footer.links.length > 0) ||
               (config.enableImages && unit.footer.images && unit.footer.images.length > 0) ||
               (config.enableNotes && unit.footer.notes && unit.footer.notes.length > 0) ||
               (config.enableComments && unit.footer.comments && unit.footer.comments.length > 0);
    };

    const renderAttachments = (unit, config, path, isCreation) => {
        if (!config.enableLinks && !config.enableImages && !config.enableNotes && !config.enableComments) {
            return '';
        }

        const footer = unit.footer || { links: [], images: [], notes: [], comments: [] };
        
        return `
            <div class="unit-attachments">
                ${config.enableLinks ? renderLinks(footer.links, path, isCreation) : ''}
                ${config.enableImages ? renderImages(footer.images, path, isCreation) : ''}
                ${config.enableNotes ? renderNotes(footer.notes, path, isCreation) : ''}
                ${config.enableComments ? renderComments(footer.comments, path, isCreation) : ''}
            </div>
        `;
    };

    const renderLinks = (links, path, isCreation) => {
        return `
            <div class="attachment-section">
                ${links && links.length > 0 ? `
                    <div class="attachment-list">
                        ${links.map((link, idx) => `
                            <div class="attachment-item">
                                <a href="${getAbsoluteUrl(link.url)}" target="_blank" rel="noopener">
                                    <i class="fa-solid fa-link"></i> ${link.text}
                                </a>
                                ${isCreation ? `<i class="fa-solid fa-trash" onclick="removeLink('${path}', ${idx})"></i>` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                ${isCreation ? `
                    <button class="btn-add-attachment" onclick="showAddLinkDialog('${path}')">
                        <i class="fa-solid fa-link"></i> Add Link
                    </button>
                ` : ''}
            </div>
        `;
    };

    const renderImages = (images, path, isCreation) => {
        return `
            <div class="attachment-section">
                ${images && images.length > 0 ? `
                    <div class="attachment-list images">
                        ${images.map((img, idx) => `
                            <div class="attachment-item image">
                                <img src="${img}" alt="attachment" onclick="openImageModal('${img}')">
                                ${isCreation ? `<i class="fa-solid fa-trash" onclick="removeImage('${path}', ${idx})"></i>` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                ${isCreation ? `
                    <button class="btn-add-attachment" onclick="showAddImageDialog('${path}')">
                        <i class="fa-solid fa-image"></i> Add Image
                    </button>
                ` : ''}
            </div>
        `;
    };

    const renderNotes = (notes, path, isCreation) => {
        return `
            <div class="attachment-section">
                ${notes && notes.length > 0 ? `
                    <div class="attachment-list">
                        ${notes.map((note, idx) => `
                            <div class="attachment-item note">
                                <div class="note-title">${note.title}</div>
                                <div class="note-content">${note.content}</div>
                                ${isCreation ? `<i class="fa-solid fa-trash" onclick="removeNote('${path}', ${idx})"></i>` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                ${isCreation ? `
                    <button class="btn-add-attachment" onclick="showAddNoteDialog('${path}')">
                        <i class="fa-solid fa-book-open"></i> Add Note
                    </button>
                ` : ''}
            </div>
        `;
    };

    const renderComments = (comments, path, isCreation) => {
        return `
            <div class="attachment-section">
                ${comments && comments.length > 0 ? `
                    <div class="attachment-list">
                        ${comments.map((comment, idx) => `
                            <div class="attachment-item comment">
                                <p>${comment}</p>
                                ${isCreation ? `<i class="fa-solid fa-trash" onclick="removeComment('${path}', ${idx})"></i>` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                ${isCreation ? `
                    <button class="btn-add-attachment" onclick="showAddCommentDialog('${path}')">
                        <i class="fa-solid fa-comment"></i> Add Comment
                    </button>
                ` : ''}
            </div>
        `;
    };

    const filterUnitsByTag = (units, tag, template, depth) => {
        return units.filter(unit => {
            if (nodeHasTag(unit, tag)) return true;
            
            if (unit.subcategories && depth < template.levels.length - 1) {
                const hasTaggedChild = unit.subcategories.some(child => 
                    hasDescendantWithTag(child, tag, template, depth + 1)
                );
                if (hasTaggedChild) return true;
            }
            
            return false;
        });
    };

    const hasDescendantWithTag = (unit, tag, template, depth) => {
        if (nodeHasTag(unit, tag)) return true;
        if (!unit.subcategories || depth >= template.levels.length) return false;
        return unit.subcategories.some(child => hasDescendantWithTag(child, tag, template, depth + 1));
    };

    const updateAddButton = () => {
        const flow = getCurrentFlow();
        const template = getTemplate(flow);
        const container = document.getElementById('add-category-btn-container');
        
        if (!container || !template || appState.currentMode !== 'creation') return;

        const level = template.levels[0];
        const button = container.querySelector('#add-category-btn');
        if (button) {
            button.innerHTML = `<i class="fa-solid fa-plus"></i> Add New ${level.singularName}`;
        }
    };

    // ===== UNIT OPERATIONS =====
    window.addChildUnit = (parentPath, childDepth) => {
        console.log('🔹 addChildUnit called:', { parentPath, childDepth });
        const flow = getCurrentFlow();
        const template = getTemplate(flow);
        const level = template.levels[childDepth];
        
        if (!level) {
            console.error('❌ Invalid level depth:', childDepth);
            return;
        }

        const newUnit = {
            id: generateId('unit'),
            levelId: level.id,
            name: '',
            subcategories: []
        };
        
        console.log('✅ Created new unit:', newUnit.id, 'for level:', level.name);

        // Initialize properties based on level config
        if (level.unitConfig.enableIcon) newUnit.icon = null;
        if (level.unitConfig.enableUnitId) newUnit.unitId = '';
        if (level.unitConfig.enableDescription) newUnit.description = '';
        if (level.unitConfig.enableTags) newUnit.tags = [];
        if (level.unitConfig.enableGrade) newUnit.grade = 0;
        
        // Initialize footer if any attachments enabled
        if (level.unitConfig.enableLinks || level.unitConfig.enableImages || 
            level.unitConfig.enableNotes || level.unitConfig.enableComments) {
            newUnit.footer = {
                links: [],
                images: [],
                notes: [],
                comments: []
            };
        }

        // Special handling for root level (depth 0)
        if (childDepth === 0) {
            console.log('📍 Adding to root level (flow.data)');
            flow.data.push(newUnit);
        } else {
            // For non-root levels, add to parent's subcategories
            console.log('📍 Finding parent at path:', parentPath);
            const parent = getObjectByPath(parentPath, flow);
            if (!parent) {
                console.error('❌ Parent not found at path:', parentPath);
                return;
            }
            
            console.log('✅ Parent found:', parent.id || parent);
            if (!parent.subcategories) {
                parent.subcategories = [];
            }
            parent.subcategories.push(newUnit);
            console.log('✅ Added to parent. Parent now has', parent.subcategories.length, 'children');
        }

        // Mark as dirty for auto-save
        if (window.AutoSave) AutoSave.markDirty();

        console.log('🔄 Triggering re-render...');
        render();
    };

    window.deleteUnit = (path) => {
        console.log('🗑️ deleteUnit called for path:', path);
        const flow = getCurrentFlow();
        const template = getTemplate(flow);
        const { parent, key } = getParentAndKey(path, flow);
        
        if (!parent || !parent[key]) {
            console.error('❌ Parent or unit not found at path:', path);
            return;
        }
        
        const unit = parent[key];
        // CRITICAL FIX: Calculate depth by counting "subcategories" in path
        const depth = (path.match(/subcategories/g) || []).length;
        const level = template.levels[depth];
        
        if (!level) {
            console.error('❌ Invalid depth for path:', path, 'depth:', depth);
            return;
        }
        
        console.log('✅ Deleting unit:', unit.id, 'from', level.name);
        if (!confirm(`Delete this ${level.singularName.toLowerCase()}?`)) return;
        
        parent.splice(key, 1);
        console.log('✅ Deleted. Parent now has', parent.length, 'children');

        // Mark as dirty for auto-save
        if (window.AutoSave) AutoSave.markDirty();

        render();
    };

    window.updateUnitProperty = (path, property, value) => {
        console.log('📝 updateUnitProperty:', { path, property, value });
        const flow = getCurrentFlow();
        const unit = getObjectByPath(path, flow);
        if (!unit) {
            console.error('❌ Unit not found at path:', path);
            return;
        }
        
        console.log('✅ Unit found:', unit.id, '- updating', property);
        unit[property] = value;

        // Mark as dirty for auto-save
        if (window.AutoSave) AutoSave.markDirty();

        // If grade is updated and not cumulative, recalculate parent if parent is cumulative
        if (property === 'grade') {
            const template = getTemplate(flow);
            updateAllCumulativeGrades(flow.data, template, 0);
            render();
        }
    };

    window.toggleUnitCompletion = (path, unitId) => {
        const flow = getCurrentFlow();
        if (!flow) return;

        const unit = getObjectByPath(path, flow);
        if (!unit) return;

        const currentState = isCompleted(flow.id, unitId);
        setCompleted(flow.id, unitId, !currentState);

        // Mark as dirty for auto-save (execution state)
        if (window.AutoSave) AutoSave.markDirty();

        render();
    };

    // ===== WORKFLOW PROPERTY UPDATES =====
    window.updateWorkflowProperty = (property, value) => {
        const flow = getCurrentFlow();
        if (!flow) return;

        flow[property] = value;

        // Mark as dirty for auto-save
        if (window.AutoSave) AutoSave.markDirty();

        // Don't re-render for these properties to avoid losing focus
        if (property === 'description') {
            return;
        }
        render();
    };

    // ===== ICON PICKER =====
    const getAvailableIcons = async () => {
        // List of icons from the icons folder
        // In a real app, this would fetch from server
        return [
            '3d-glasses.png', 'application-01.png', 'binocular.png', 'business-man-find.png',
            'city.png', 'cloud-public-01.png', 'computer-desktop.png', 'data-copy.png',
            'data-find.png', 'document-find.png', 'document-zoom-in-02.png', 'document-zoom-in-03.png',
            'document-zoom-out-02.png', 'full-screen-expand.png', 'globe.png', 'id-view.png',
            'instrument-binoculars.png', 'internet.png', 'lan.png', 'magnifying-glass.png',
            'mail-server.png', 'message-mail.png', 'messages-information-01.png', 'node.png',
            'nodes.png', 'polling-finger.png', 'preview.png', 'publish.png', 'row.png',
            'search-find.png', 'search.png', 'server-01.png', 'server-up.png', 'shop.png',
            'student-read-02.png', 'view-details-01.png', 'view-details.png', 'view-earth.png',
            'view-incident.png', 'view-list.png', 'view-medium-icons-01.png', 'view-news.png',
            'view-reset.png', 'view-settings.png', 'view-small-icons-01.png', 'view-small-icons.png',
            'view.png', 'virtual-apps.png', 'web-01.png', 'web.png', 'window-01.png',
            'window-delete.png', 'window-earth.png', 'window-horizontal-split.png', 'window-information.png',
            'window-new-01.png', 'window-new-02.png', 'window-new-open.png', 'window-new.png',
            'window-screen.png', 'window.png', 'zoom-in.png', 'zoom-out.png', 'zoom-scroll.png',
            'zoom.png', 'zooming.png'
        ];
    };

    window.showWorkflowIconPicker = async () => {
        const icons = await getAvailableIcons();
        const iconsGrid = icons.map(icon => `
            <div class="icon-picker-item" onclick="selectWorkflowIcon('${icon}')">
                <img src="icons/${icon}" alt="${icon}" title="${icon}">
            </div>
        `).join('');

        const html = `
            <div class="icon-picker-grid">${iconsGrid}</div>
            <div style="margin-top: 1rem; text-align: right;">
                <button class="btn-secondary" onclick="closeModal()">Cancel</button>
            </div>
        `;

        openModal('Select Workflow Icon', html);
    };

    window.selectWorkflowIcon = (iconFilename) => {
        const flow = getCurrentFlow();
        if (!flow) return;

        flow.icon = iconFilename;

        // Mark as dirty for auto-save
        if (window.AutoSave) AutoSave.markDirty();

        closeModal();
        render();
    };

    window.showUnitIconPicker = async (path) => {
        const icons = await getAvailableIcons();
        const iconsGrid = icons.map(icon => `
            <div class="icon-picker-item" onclick="selectUnitIcon('${path}', '${icon}')">
                <img src="icons/${icon}" alt="${icon}" title="${icon}">
            </div>
        `).join('');

        const html = `
            <div class="icon-picker-grid">${iconsGrid}</div>
            <div style="margin-top: 1rem; text-align: right;">
                <button class="btn-secondary" onclick="closeModal()">Cancel</button>
            </div>
        `;

        openModal('Select Unit Icon', html);
    };

    window.selectUnitIcon = (path, iconFilename) => {
        const flow = getCurrentFlow();
        if (!flow) return;

        const unit = getObjectByPath(path, flow);
        if (!unit) return;

        unit.icon = iconFilename;

        // Mark as dirty for auto-save
        if (window.AutoSave) AutoSave.markDirty();

        closeModal();
        render();
    };

    // ===== TAG OPERATIONS =====
    window.filterByTag = (tag) => {
        appState.activeTag = tag;
        render();
        updateTagFilterBanner();
    };

    const updateTagFilterBanner = () => {
        const banner = document.getElementById('tag-filter-banner');
        if (!banner) return;
        
        if (appState.activeTag) {
            banner.classList.remove('hidden');
            const label = document.getElementById('active-tag-label');
            if (label) label.textContent = appState.activeTag;
            
            const exportBtn = document.getElementById('export-tag-to-board');
            if (exportBtn) exportBtn.classList.remove('hidden');
        } else {
            banner.classList.add('hidden');
            const exportBtn = document.getElementById('export-tag-to-board');
            if (exportBtn) exportBtn.classList.add('hidden');
        }
    };

    window.clearTagFilter = () => {
        appState.activeTag = null;
        render();
        updateTagFilterBanner();
    };

    window.showAddTagDialog = (path) => {
        const html = `
            <form id="add-tag-form" class="modal-form">
                <label for="tag-input">Tag Name</label>
                <input type="text" id="tag-input" required autofocus placeholder="e.g., critical, audit, Q1-2025">
                <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem; justify-content: flex-end;">
                    <button type="button" class="btn-secondary" onclick="closeModal()">Cancel</button>
                    <button type="submit" class="btn-primary">Add Tag</button>
                </div>
            </form>
        `;
        
        openModal('Add Tag', html, () => {
            const form = document.getElementById('add-tag-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const tag = document.getElementById('tag-input').value.trim();
                if (tag) {
                    const flow = getCurrentFlow();
                    const unit = getObjectByPath(path, flow);
                    if (unit) {
                        ensureTagsArray(unit);
                        if (!unit.tags.includes(tag)) {
                            unit.tags.push(tag);

                            // Mark as dirty for auto-save
                            if (window.AutoSave) AutoSave.markDirty();

                            render();
                        }
                    }
                }
                closeModal();
            });
        });
    };

    window.removeTag = (path, tag) => {
        const flow = getCurrentFlow();
        const unit = getObjectByPath(path, flow);
        if (unit && unit.tags) {
            unit.tags = unit.tags.filter(t => t !== tag);

            // Mark as dirty for auto-save
            if (window.AutoSave) AutoSave.markDirty();

            render();
        }
    };

    // ===== ATTACHMENT OPERATIONS =====
    window.showAddLinkDialog = (path) => {
        const html = `
            <form id="add-link-form" class="modal-form">
                <label for="link-text">Link Text</label>
                <input type="text" id="link-text" required autofocus placeholder="e.g., Policy Document">

                <label for="link-url">URL</label>
                <input type="text" id="link-url" required placeholder="example.com/document.pdf or https://example.com">

                <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem; justify-content: flex-end;">
                    <button type="button" class="btn-secondary" onclick="closeModal()">Cancel</button>
                    <button type="submit" class="btn-primary">Add Link</button>
                </div>
            </form>
        `;

        openModal('Add Link', html, () => {
            const form = document.getElementById('add-link-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const text = document.getElementById('link-text').value.trim();
                const url = getAbsoluteUrl(document.getElementById('link-url').value.trim());

                const flow = getCurrentFlow();
                const unit = getObjectByPath(path, flow);
                if (unit) {
                    if (!unit.footer) unit.footer = { links: [], images: [], notes: [], comments: [] };
                    if (!unit.footer.links) unit.footer.links = [];
                    unit.footer.links.push({ text, url });

                    // Mark as dirty for auto-save
                    if (window.AutoSave) AutoSave.markDirty();

                    render();
                }
                closeModal();
            });
        });
    };

    window.removeLink = (path, index) => {
        const flow = getCurrentFlow();
        const unit = getObjectByPath(path, flow);
        if (unit && unit.footer && unit.footer.links) {
            unit.footer.links.splice(index, 1);

            // Mark as dirty for auto-save
            if (window.AutoSave) AutoSave.markDirty();

            render();
        }
    };

    window.showAddImageDialog = (path) => {
        const html = `
            <form id="add-image-form" class="modal-form">
                <label for="image-url">Image URL</label>
                <input type="text" id="image-url" required autofocus placeholder="example.com/image.png or https://example.com">

                <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem; justify-content: flex-end;">
                    <button type="button" class="btn-secondary" onclick="closeModal()">Cancel</button>
                    <button type="submit" class="btn-primary">Add Image</button>
                </div>
            </form>
        `;

        openModal('Add Image', html, () => {
            const form = document.getElementById('add-image-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const url = getAbsoluteUrl(document.getElementById('image-url').value.trim());

                const flow = getCurrentFlow();
                const unit = getObjectByPath(path, flow);
                if (unit) {
                    if (!unit.footer) unit.footer = { links: [], images: [], notes: [], comments: [] };
                    if (!unit.footer.images) unit.footer.images = [];
                    unit.footer.images.push(url);

                    // Mark as dirty for auto-save
                    if (window.AutoSave) AutoSave.markDirty();

                    render();
                }
                closeModal();
            });
        });
    };

    window.removeImage = (path, index) => {
        const flow = getCurrentFlow();
        const unit = getObjectByPath(path, flow);
        if (unit && unit.footer && unit.footer.images) {
            unit.footer.images.splice(index, 1);

            // Mark as dirty for auto-save
            if (window.AutoSave) AutoSave.markDirty();

            render();
        }
    };

    window.showAddCommentDialog = (path) => {
        const html = `
            <form id="add-comment-form" class="modal-form">
                <label for="comment-text">Comment</label>
                <textarea id="comment-text" required autofocus rows="4" placeholder="Enter your comment"></textarea>
                
                <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem; justify-content: flex-end;">
                    <button type="button" class="btn-secondary" onclick="closeModal()">Cancel</button>
                    <button type="submit" class="btn-primary">Add Comment</button>
                </div>
            </form>
        `;
        
        openModal('Add Comment', html, () => {
            const form = document.getElementById('add-comment-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const text = document.getElementById('comment-text').value.trim();
                
                const flow = getCurrentFlow();
                const unit = getObjectByPath(path, flow);
                if (unit) {
                    if (!unit.footer) unit.footer = { links: [], images: [], notes: [], comments: [] };
                    if (!unit.footer.comments) unit.footer.comments = [];
                    unit.footer.comments.push(text);

                    // Mark as dirty for auto-save
                    if (window.AutoSave) AutoSave.markDirty();

                    render();
                }
                closeModal();
            });
        });
    };

    window.removeComment = (path, index) => {
        const flow = getCurrentFlow();
        const unit = getObjectByPath(path, flow);
        if (unit && unit.footer && unit.footer.comments) {
            unit.footer.comments.splice(index, 1);

            // Mark as dirty for auto-save
            if (window.AutoSave) AutoSave.markDirty();

            render();
        }
    };

    window.showAddNoteDialog = (path) => {
        const html = `
            <form id="add-note-form" class="modal-form">
                <label for="note-title">Note Title</label>
                <input type="text" id="note-title" required autofocus placeholder="e.g., Implementation Guidelines">
                
                <label for="note-content">Content (Rich Text)</label>
                <div id="note-editor-container" style="height: 200px;"></div>
                
                <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem; justify-content: flex-end;">
                    <button type="button" class="btn-secondary" onclick="closeModal()">Cancel</button>
                    <button type="submit" class="btn-primary">Add Note</button>
                </div>
            </form>
        `;
        
        openModal('Add Note', html, () => {
            // Initialize Quill editor
            quillEditor = new Quill('#note-editor-container', {
                theme: 'snow',
                placeholder: 'Write your note content...'
            });
            
            const form = document.getElementById('add-note-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const title = document.getElementById('note-title').value.trim();
                const content = quillEditor.root.innerHTML;
                
                const flow = getCurrentFlow();
                const unit = getObjectByPath(path, flow);
                if (unit) {
                    if (!unit.footer) unit.footer = { links: [], images: [], notes: [], comments: [] };
                    if (!unit.footer.notes) unit.footer.notes = [];
                    unit.footer.notes.push({ title, content });

                    // Mark as dirty for auto-save
                    if (window.AutoSave) AutoSave.markDirty();

                    render();
                }
                quillEditor = null;
                closeModal();
            });
        });
    };

    window.removeNote = (path, index) => {
        const flow = getCurrentFlow();
        const unit = getObjectByPath(path, flow);
        if (unit && unit.footer && unit.footer.notes) {
            unit.footer.notes.splice(index, 1);

            // Mark as dirty for auto-save
            if (window.AutoSave) AutoSave.markDirty();

            render();
        }
    };

    window.openImageModal = (imgUrl) => {
        openModal('Image', `<img src="${imgUrl}" style="max-width: 100%; max-height: 70vh;">`);
    };

    // ===== MODAL SYSTEM =====
    const openModal = (title, bodyHTML, onOpen = null) => {
        modal.title.textContent = title;
        modal.body.innerHTML = bodyHTML;
        modal.backdrop.classList.remove('hidden');
        if (onOpen) onOpen();
    };

    const closeModal = () => {
        modal.backdrop.classList.add('hidden');
        if (quillEditor) quillEditor = null;
    };

    // Expose functions for export module
    window.closeModal = closeModal;
    window.openModal = openModal;
    window.generateId = generateId;
    window.getCurrentFlow = getCurrentFlow;
    window.getTemplate = getTemplate;
    window.nodeHasTag = nodeHasTag;

    // ===== FLOW OPERATIONS =====
    const populateFlowSelect = () => {
        if (!flowSelect) return;
        
        flowSelect.innerHTML = appState.workflow.flows.map(flow => 
            `<option value="${flow.id}" ${flow.id === appState.currentFlowId ? 'selected' : ''}>${flow.name}</option>`
        ).join('');
        
        if (appState.workflow.flows.length === 0) {
            flowSelect.innerHTML = '<option value="">No workflows yet</option>';
        }
        
        // Update linked indicator
        const currentFlow = getCurrentFlow();
        if (linkedIndicator && currentFlow) {
            const isLinked = isWorkflowLinked(currentFlow.id);
            linkedIndicator.style.display = isLinked ? 'inline-flex' : 'none';
            if (flowUnlinkBtn) {
                flowUnlinkBtn.style.display = isLinked ? '' : 'none';
            }
        }
    };

    const renameFlow = () => {
        const flow = getCurrentFlow();
        if (!flow) return;
        
        const newName = prompt('Rename workflow:', flow.name);
        if (newName && newName.trim()) {
            flow.name = newName.trim();
            populateFlowSelect();
        }
    };

    const deleteFlow = async () => {
        const flow = getCurrentFlow();
        if (!flow) return;
        
        if (!confirm(`Delete workflow "${flow.name}"? This cannot be undone.`)) return;
        
        // Unlink if linked
        unlinkWorkflow(flow.id);
        
        appState.workflow.flows = appState.workflow.flows.filter(f => f.id !== flow.id);
        
        // Delete execution data
        delete appState.executions.flows[flow.id];
        
        // Set new current flow
        if (appState.workflow.flows.length > 0) {
            appState.currentFlowId = appState.workflow.flows[0].id;
        } else {
            appState.currentFlowId = null;
        }
        
        populateFlowSelect();
        render();
        await saveWorkflow();
        await saveExecutions();
    };

    // ===== INITIALIZATION =====
    const init = async () => {
        // Load theme
        const savedTheme = localStorage.getItem('workflowTheme');
        if (savedTheme) {
            applyTheme(savedTheme);
        }

        // Load mode
        const savedMode = localStorage.getItem('workflowMode');
        if (savedMode && (savedMode === 'creation' || savedMode === 'execution')) {
            appState.currentMode = savedMode;
        }

        // Load collapse state
        CollapseManager.loadFromStorage();

        // Load data
        await Promise.all([
            loadTemplates().then(templates => appState.templates = templates),
            loadWorkflow(),
            loadExecutions(),
            loadWorkflowLinks()
        ]);
        
        // Set current flow
        if (appState.workflow.flows.length > 0 && !appState.currentFlowId) {
            appState.currentFlowId = appState.workflow.flows[0].id;
        }

        // Initialize auto-save for both workflow structure and execution state
        if (window.AutoSave) {
            AutoSave.init(async () => {
                // Auto-save based on current mode
                if (appState.currentMode === 'creation') {
                    await saveWorkflow();
                } else if (appState.currentMode === 'execution') {
                    await saveExecutions();
                }
            }, 5000); // 5 second debounce
        }

        // Populate UI
        populateFlowSelect();
        render();
        
        // Event listeners
        if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
        
        if (modeSwitch) {
            // Initialize checkbox state to match current mode
            modeSwitch.checked = (appState.currentMode === 'execution');

            // Listen for mode changes and persist
            modeSwitch.addEventListener('change', (e) => {
                const newMode = e.target.checked ? 'execution' : 'creation';
                appState.currentMode = newMode;
                localStorage.setItem('workflowMode', newMode);
                render();
            });
        }
        
        if (saveStructureBtn) {
            saveStructureBtn.addEventListener('click', saveWorkflow);
        }
        
        if (saveExecutionBtn) {
            saveExecutionBtn.addEventListener('click', saveExecutions);
        }
        
        if (flowSelect) {
            flowSelect.addEventListener('change', (e) => {
                appState.currentFlowId = e.target.value;
                render();
            });
        }
        
        if (flowNewBtn) {
            flowNewBtn.addEventListener('click', showCreateFlowDialog);
        }
        
        if (flowRenameBtn) {
            flowRenameBtn.addEventListener('click', renameFlow);
        }
        
        if (flowDeleteBtn) {
        if (flowUnlinkBtn) {
            flowUnlinkBtn.addEventListener('click', () => {
                if (appState.currentMode !== 'creation') return;
                if (!confirm('Unlink this workflow? It will become independent and stop syncing with linked workflows.')) return;
                unlinkWorkflow(appState.currentFlowId);
                render();
            });
        }
        
            flowDeleteBtn.addEventListener('click', deleteFlow);
        }
        
        if (modal.closeBtn) {
            modal.closeBtn.addEventListener('click', closeModal);
        }
        
        if (modal.backdrop) {
            modal.backdrop.addEventListener('click', (e) => {
                if (e.target === modal.backdrop) closeModal();
            });
        }
        
        // Add category button
        const addCategoryBtn = document.getElementById('add-category-btn');
        if (addCategoryBtn) {
            addCategoryBtn.addEventListener('click', () => {
                const flow = getCurrentFlow();
                if (!flow) {
                    showToast('No workflow selected. Please create a workflow first.', 'warning', 4000);
                    return;
                }
                // For root level (depth 0), parentPath is not used
                addChildUnit(null, 0);
            });
        }
        
        // Clear tag filter button
        const clearTagBtn = document.getElementById('clear-tag-filter');
        if (clearTagBtn) {
            clearTagBtn.addEventListener('click', clearTagFilter);
        }
        
        // Export tag to board button
        const exportTagBtn = document.getElementById('export-tag-to-board');
        if (exportTagBtn) {
            exportTagBtn.addEventListener('click', () => {
                if (appState.activeTag) {
                    exportTagToBoard(appState.activeTag);
                }
            });
        }

        // Register additional keyboard shortcuts
        if (window.KeyboardNav) {
            // New workflow
            KeyboardNav.register('Ctrl+n', (e) => {
                if (flowNewBtn) {
                    flowNewBtn.click();
                }
            }, 'Create new workflow');

            // Toggle mode
            KeyboardNav.register('Ctrl+e', (e) => {
                if (modeSwitch) {
                    modeSwitch.checked = !modeSwitch.checked;
                    modeSwitch.dispatchEvent(new Event('change'));
                    const mode = modeSwitch.checked ? 'execution' : 'creation';
                    Toast.info(`Switched to ${mode} mode`);
                }
            }, 'Toggle creation/execution mode');

            // Focus on workflow selector
            KeyboardNav.register('Ctrl+f', (e) => {
                if (flowSelect) {
                    flowSelect.focus();
                    Toast.info('Focus on workflow selector');
                }
            }, 'Focus workflow selector');

            // Add root item
            KeyboardNav.register('Ctrl+a', (e) => {
                if (appState.currentMode === 'creation') {
                    const addBtn = document.getElementById('add-category-btn');
                    if (addBtn) {
                        addBtn.click();
                    }
                }
            }, 'Add new root item (creation mode)');
        }
    };

    // ===== PPM INTEGRATION - EXPORT TO BOARD =====
    window.exportUnitToBoard = async (unitPath) => {
        const flow = getCurrentFlow();
        const unit = getObjectByPath(unitPath, flow);
        const template = getTemplate(flow);
        
        if (!unit || !template) return;
        
        const depth = (unitPath.match(/\./g) || []).length / 2;
        const level = template.levels[depth];
        
        if (!confirm(`Export "${unit.name}" to a new Project Board?\n\nThis will create a Kanban board with tasks from all child units.`)) {
            return;
        }
        
        try {
            // Load PPM data
            const boardsRes = await fetch(`data/ppm-boards.json?t=${Date.now()}`);
            const boardsData = await boardsRes.json();
            const usersRes = await fetch(`data/ppm-users.json?t=${Date.now()}`);
            const usersData = await usersRes.json();
            
            const board = {
                id: generateId('board'),
                name: `${flow.name}: ${unit.name}`,
                description: unit.description || `Exported from ${level.singularName}`,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                columns: [
                    { id: 'col-backlog', name: 'Backlog', order: 0, color: '#94a3b8' },
                    { id: 'col-todo', name: 'To Do', order: 1, color: '#60a5fa' },
                    { id: 'col-progress', name: 'In Progress', order: 2, color: '#f59e0b' },
                    { id: 'col-done', name: 'Done', order: 3, color: '#10b981' }
                ],
                cards: [],
                labels: [
                    { id: 'label-high', name: 'High Priority', color: '#ef4444' },
                    { id: 'label-medium', name: 'Medium Priority', color: '#f59e0b' },
                    { id: 'label-low', name: 'Low Priority', color: '#10b981' }
                ],
                settings: {
                    theme: 'light',
                    showArchived: false
                }
            };
            
            // Add tags as labels
            const allTags = new Set();
            const collectTags = (u) => {
                (u.tags || []).forEach(tag => allTags.add(tag));
                (u.subcategories || []).forEach(collectTags);
            };
            collectTags(unit);
            
            allTags.forEach(tag => {
                board.labels.push({
                    id: generateId('label'),
                    name: tag,
                    color: '#6366f1'
                });
            });
            
            // Convert units to cards
            let cardOrder = 0;
            const convertToCard = (u, parentName, depth) => {
                const lvl = template.levels[depth];
                if (!lvl) return;
                
                const card = {
                    id: generateId('card'),
                    title: u.name || `Untitled ${lvl.singularName}`,
                    description: u.description || '',
                    columnId: isCompleted(flow.id, u.id) ? 'col-done' : 'col-backlog',
                    order: cardOrder++,
                    labels: (u.tags || []).map(tag => {
                        const label = board.labels.find(l => l.name === tag);
                        return label ? label.id : null;
                    }).filter(Boolean),
                    assignees: [],
                    dueDate: null,
                    attachments: [],
                    checklist: [],
                    comments: [],
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                };
                
                // Add metadata
                if (parentName) {
                    card.description = `**Parent:** ${parentName}\n\n${card.description}`;
                }
                
                // Add attachments
                if (u.footer) {
                    if (u.footer.links && u.footer.links.length > 0) {
                        u.footer.links.forEach(link => {
                            card.attachments.push({
                                id: generateId('attachment'),
                                type: 'link',
                                url: link.url,
                                name: link.text,
                                addedAt: new Date().toISOString()
                            });
                        });
                    }
                    
                    if (u.footer.notes && u.footer.notes.length > 0) {
                        u.footer.notes.forEach(note => {
                            card.comments.push({
                                id: generateId('comment'),
                                text: `**${note.title}**\n\n${note.content}`,
                                userId: 'system',
                                createdAt: new Date().toISOString()
                            });
                        });
                    }
                    
                    if (u.footer.comments && u.footer.comments.length > 0) {
                        u.footer.comments.forEach(comment => {
                            card.comments.push({
                                id: generateId('comment'),
                                text: comment,
                                userId: 'system',
                                createdAt: new Date().toISOString()
                            });
                        });
                    }
                }
                
                board.cards.push(card);
                
                // Recurse to children
                if (u.subcategories && depth < template.levels.length - 1) {
                    u.subcategories.forEach(child => convertToCard(child, u.name, depth + 1));
                }
            };
            
            // Start conversion
            if (unit.subcategories) {
                unit.subcategories.forEach(child => convertToCard(child, unit.name, depth + 1));
            }
            
            // Save board
            boardsData.boards.push(board);
            const saveRes = await fetch('save_board.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(boardsData)
            });
            
            const result = await saveRes.json();
            if (result.status !== 'success') throw new Error(result.message);

            showToast(`Board "${board.name}" created successfully with ${board.cards.length} tasks!`, 'success', 4000);
            window.open(`board.html?id=${board.id}`, '_blank');

        } catch (e) {
            console.error('Export to board error:', e);
            showToast('Failed to export to board: ' + e.message, 'error', 5000);
        }
    };

    window.exportTagToBoard = async (tag) => {
        const flow = getCurrentFlow();
        const template = getTemplate(flow);
        
        if (!flow || !template) return;
        
        if (!confirm(`Create Project Board for all items tagged with "#${tag}"?\n\nThis will create a board with tasks from all units that have this tag.`)) {
            return;
        }
        
        try {
            // Load PPM data
            const boardsRes = await fetch(`data/ppm-boards.json?t=${Date.now()}`);
            const boardsData = await boardsRes.json();
            
            const board = {
                id: generateId('board'),
                name: `#${tag}`,
                description: `Tag-filtered board from ${flow.name}`,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                columns: [
                    { id: 'col-backlog', name: 'Backlog', order: 0, color: '#94a3b8' },
                    { id: 'col-todo', name: 'To Do', order: 1, color: '#60a5fa' },
                    { id: 'col-progress', name: 'In Progress', order: 2, color: '#f59e0b' },
                    { id: 'col-done', name: 'Done', order: 3, color: '#10b981' }
                ],
                cards: [],
                labels: [{ id: 'label-tag', name: tag, color: '#6366f1' }],
                settings: { theme: 'light', showArchived: false }
            };
            
            // Collect all units with tag
            let cardOrder = 0;
            const collectTaggedUnits = (units, depth, parentChain = []) => {
                if (!units || depth >= template.levels.length) return;
                
                units.forEach(unit => {
                    if (nodeHasTag(unit, tag)) {
                        const level = template.levels[depth];
                        const card = {
                            id: generateId('card'),
                            title: unit.name || `Untitled ${level.singularName}`,
                            description: unit.description || '',
                            columnId: isCompleted(flow.id, unit.id) ? 'col-done' : 'col-backlog',
                            order: cardOrder++,
                            labels: ['label-tag'],
                            assignees: [],
                            dueDate: null,
                            attachments: [],
                            checklist: [],
                            comments: [],
                            createdAt: new Date().toISOString(),
                            updatedAt: new Date().toISOString()
                        };
                        
                        if (parentChain.length > 0) {
                            card.description = `**Path:** ${parentChain.join(' → ')}\n\n${card.description}`;
                        }
                        
                        board.cards.push(card);
                    }
                    
                    if (unit.subcategories) {
                        collectTaggedUnits(unit.subcategories, depth + 1, [...parentChain, unit.name]);
                    }
                });
            };
            
            collectTaggedUnits(flow.data, 0);

            if (board.cards.length === 0) {
                showToast(`No units found with tag "#${tag}"`, 'warning', 4000);
                return;
            }
            
            // Save board
            boardsData.boards.push(board);
            const saveRes = await fetch('save_board.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(boardsData)
            });
            
            const result = await saveRes.json();
            if (result.status !== 'success') throw new Error(result.message);

            showToast(`Board "#${tag}" created successfully with ${board.cards.length} tasks!`, 'success', 4000);
            window.open(`board.html?id=${board.id}`, '_blank');

        } catch (e) {
            console.error('Export tag to board error:', e);
            showToast('Failed to create board from tag: ' + e.message, 'error', 5000);
        }
    };

    // ===== EXPORT TO BOARD BUTTON HANDLER =====
    // Attach export handler to button (handler defined in export-to-board-module.js)
    const attachExportHandler = () => {
        const exportBtn = document.getElementById('flow-export-to-board');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                if (typeof window.openExportToBoardModal === 'function') {
                    window.openExportToBoardModal();
                } else {
                    showToast('Export module not loaded', 'error', 4000);
                }
            });
        }
    };

    // Start the app
    init();
    
    // Attach export handler after init
    attachExportHandler();
});
