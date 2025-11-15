// ===== WORKFLOW TO BOARD EXPORT SYSTEM =====
// This module handles comprehensive workflow export to boards with multiple options

/**
 * Opens the comprehensive export modal with all options
 */
window.openExportToBoardModal = () => {
    const flow = getCurrentFlow();
    if (!flow) {
        alert('No workflow selected');
        return;
    }
    
    const template = getTemplate(flow);
    if (!template) {
        alert('Template not found for this workflow');
        return;
    }
    
    // Collect all tags from workflow
    const allTags = new Set();
    const collectTags = (nodes) => {
        nodes.forEach(node => {
            if (node.tags && Array.isArray(node.tags)) {
                node.tags.forEach(tag => allTags.add(tag));
            }
            if (node.subcategories) {
                collectTags(node.subcategories);
            }
        });
    };
    collectTags(flow.data || []);
    
    // Build modal HTML
    const modalHTML = `
        <div class="export-modal-container" style="max-height: 70vh; overflow-y: auto;">
            
            <!-- SECTION 1: Export Scope -->
            <div class="export-section" style="margin-bottom: 1.5rem; padding: 1rem; background: var(--bg-secondary); border-radius: 8px;">
                <h3 style="margin: 0 0 0.75rem 0;"><i class="fa-solid fa-chart-simple"></i> Export Scope</h3>
                <label style="display: block; margin-bottom: 0.5rem; cursor: pointer;">
                    <input type="radio" name="export-scope" value="full" checked style="margin-right: 0.5rem;">
                    <strong>Full Workflow</strong> - Export entire workflow tree
                </label>
                <label style="display: block; margin-bottom: 0.5rem; cursor: pointer;">
                    <input type="radio" name="export-scope" value="partial" style="margin-right: 0.5rem;">
                    <strong>Partial Workflow</strong> - Select specific sections
                </label>
                <label style="display: block; margin-bottom: 0.5rem; cursor: pointer;">
                    <input type="radio" name="export-scope" value="tag" style="margin-right: 0.5rem;">
                    <strong>Tag-Filtered</strong> - Export only nodes with specific tag
                </label>
                
                <!-- Partial tree (hidden by default) -->
                <div id="partial-tree-container" style="display: none; margin-top: 1rem; padding: 1rem; background: white; border-radius: 4px; max-height: 300px; overflow-y: auto;">
                    <p style="margin: 0 0 0.5rem 0; color: var(--text-muted); font-size: 0.9rem;">Select sections to export:</p>
                    <div id="partial-tree"></div>
                </div>
                
                <!-- Tag dropdown (hidden by default) -->
                <div id="tag-filter-container" style="display: none; margin-top: 1rem;">
                    <label style="display: block; margin-bottom: 0.25rem;">Select Tag:</label>
                    <select id="tag-select" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid var(--border-color);">
                        <option value="">Choose a tag...</option>
                        ${Array.from(allTags).sort().map(tag => `<option value="${tag}">${tag}</option>`).join('')}
                    </select>
                </div>
            </div>
            
            <!-- SECTION 2: Board Configuration -->
            <div class="export-section" style="margin-bottom: 1.5rem; padding: 1rem; background: var(--bg-secondary); border-radius: 8px;">
                <h3 style="margin: 0 0 0.75rem 0;"><i class="fa-solid fa-gear"></i> Board Configuration</h3>
                <label style="display: block; margin-bottom: 0.75rem;">
                    <strong>Board Name:</strong>
                    <input type="text" id="board-name" value="${flow.name} Full" style="width: 100%; padding: 0.5rem; margin-top: 0.25rem; border-radius: 4px; border: 1px solid var(--border-color);">
                </label>
                <label style="display: block;">
                    <strong>Description (optional):</strong>
                    <textarea id="board-description" rows="2" placeholder="Enter board description..." style="width: 100%; padding: 0.5rem; margin-top: 0.25rem; border-radius: 4px; border: 1px solid var(--border-color);"></textarea>
                </label>
            </div>
            
            <!-- SECTION 3: Reference Column -->
            <div class="export-section" style="margin-bottom: 1.5rem; padding: 1rem; background: var(--bg-secondary); border-radius: 8px;">
                <h3 style="margin: 0 0 0.75rem 0;"><i class="fa-solid fa-thumbtack"></i> Reference Column (Optional)</h3>
                <label style="display: block; margin-bottom: 0.75rem; cursor: pointer;">
                    <input type="checkbox" id="export-reference" style="margin-right: 0.5rem; transform: scale(1.2);">
                    Export specific level to References column
                </label>
                
                <div id="reference-options" style="display: none; padding-left: 2rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">
                        <strong>Level to export:</strong>
                        <select id="reference-level" style="width: 100%; padding: 0.5rem; margin-top: 0.25rem; border-radius: 4px; border: 1px solid var(--border-color);">
                            ${template.levels.map((level, idx) => `<option value="${idx}">${level.pluralName} (Level ${idx})</option>`).join('')}
                        </select>
                    </label>
                    <p style="margin: 0.5rem 0 0 0; font-size: 0.85rem; color: var(--text-muted); padding: 0.5rem; background: #e3f2fd; border-radius: 4px;">
                        <i class="fa-solid fa-circle-info"></i> 
                        <strong>Bulk Dynamic List Setup:</strong><br>
                        • Descendants → Task nodes in dynamic list<br>
                        • Ancestors → Connection nodes in dynamic list
                    </p>
                </div>
            </div>
            
            <!-- SECTION 4: Dynamic List -->
            <div class="export-section" style="margin-bottom: 1.5rem; padding: 1rem; background: var(--bg-secondary); border-radius: 8px;">
                <h3 style="margin: 0 0 0.75rem 0;"><i class="fa-solid fa-network-wired"></i> Dynamic List (Optional)</h3>
                <label style="display: block; margin-bottom: 0.75rem; cursor: pointer;">
                    <input type="checkbox" id="export-dynamic-list" style="margin-right: 0.5rem; transform: scale(1.2);">
                    Export workflow tree to Dynamic List
                </label>
                
                <div id="dynamic-list-tree-container" style="display: none; padding-left: 2rem;">
                    <p style="margin: 0 0 0.75rem 0; font-size: 0.9rem; color: var(--text-muted);">
                        Select node type for each item:
                    </p>
                    <div id="dynamic-list-tree" style="padding: 1rem; background: white; border-radius: 4px; max-height: 300px; overflow-y: auto;">
                        <!-- Tree with type selectors will be populated here -->
                    </div>
                </div>
            </div>
            
            <!-- SECTION 5: Preview -->
            <div class="export-section export-preview" style="margin-bottom: 1rem; padding: 1rem; background: #e8f5e9; border-radius: 8px; border-left: 4px solid #4caf50;">
                <h3 style="margin: 0 0 0.75rem 0;"><i class="fa-solid fa-eye"></i> Export Preview</h3>
                <ul id="preview-list" style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 0.25rem;">• Will export <strong id="preview-node-count">0</strong> nodes</li>
                    <li id="preview-reference-row" style="display: none; margin-bottom: 0.25rem;">
                        • <strong id="preview-reference-count">0</strong> to References column
                    </li>
                    <li style="margin-bottom: 0.25rem;">• <strong id="preview-board-count">0</strong> to board columns</li>
                    <li id="preview-dynamic-list-row" style="display: none; margin-bottom: 0.25rem;">
                        • <strong id="preview-dynamic-count">0</strong> dynamic list nodes 
                        (<strong id="preview-task-count">0</strong> tasks, <strong id="preview-connection-count">0</strong> connections)
                    </li>
                </ul>
            </div>
            
            <!-- Action Buttons -->
            <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                <button type="button" onclick="closeModal()" class="btn-secondary" style="padding: 0.75rem 1.5rem;">
                    <i class="fa-solid fa-xmark"></i> Cancel
                </button>
                <button type="button" id="create-board-btn" class="btn-primary" style="padding: 0.75rem 1.5rem; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">
                    <i class="fa-solid fa-diagram-project"></i> Create Board
                </button>
            </div>
        </div>
    `;
    
    openModal('Export Workflow to Board', modalHTML, () => {
        // Initialize export modal after it opens
        initializeExportModal(flow, template);
    });
};

/**
 * Initialize export modal interactions
 */
const initializeExportModal = (flow, template) => {
    // Update board name based on scope
    const updateBoardName = () => {
        const scope = document.querySelector('input[name="export-scope"]:checked')?.value;
        const flowName = flow.name;
        let name = flowName;
        
        if (scope === 'full') {
            name += ' Full';
        } else if (scope === 'partial') {
            name += ' Partial';
        } else if (scope === 'tag') {
            const tag = document.getElementById('tag-select')?.value;
            name += tag ? ` #${tag}` : ' Tag-Filtered';
        }
        
        const boardNameInput = document.getElementById('board-name');
        if (boardNameInput) boardNameInput.value = name;
    };
    
    // Build partial tree with checkboxes
    const buildPartialTree = () => {
        const container = document.getElementById('partial-tree');
        if (!container) return;
        
        const buildNodeHTML = (node, level, depth = 0) => {
            const indent = depth * 20;
            const levelInfo = template.levels[depth];
            const hasChildren = node.subcategories && node.subcategories.length > 0;
            
            let html = `
                <div class="partial-node" style="margin-left: ${indent}px; margin-bottom: 0.5rem;">
                    <label style="cursor: pointer; display: flex; align-items: center; padding: 0.25rem;">
                        <input type="checkbox" class="partial-checkbox" data-node-id="${node.id}" style="margin-right: 0.5rem;">
                        <span style="font-weight: ${depth === 0 ? '600' : '400'};">${node.name || 'Untitled'}</span>
                        <span style="margin-left: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">(${levelInfo?.singularName || 'Item'})</span>
                    </label>
                </div>
            `;
            
            if (hasChildren && depth < template.levels.length - 1) {
                node.subcategories.forEach(child => {
                    html += buildNodeHTML(child, level, depth + 1);
                });
            }
            
            return html;
        };
        
        container.innerHTML = (flow.data || []).map(node => buildNodeHTML(node, template.levels[0], 0)).join('');

        // Helper to get all child checkboxes of a node
        const getChildCheckboxes = (nodeId) => {
            const childIds = [];
            const findChildren = (nodes, parentId, depth = 0) => {
                nodes.forEach(node => {
                    if (node.id === parentId) {
                        // Found the parent, now collect all descendants
                        const collectDescendants = (n) => {
                            if (n.subcategories) {
                                n.subcategories.forEach(child => {
                                    childIds.push(child.id);
                                    collectDescendants(child);
                                });
                            }
                        };
                        collectDescendants(node);
                    } else if (node.subcategories) {
                        findChildren(node.subcategories, parentId, depth + 1);
                    }
                });
            };
            findChildren(flow.data || [], nodeId);
            return childIds.map(id => document.querySelector(`.partial-checkbox[data-node-id="${id}"]`)).filter(Boolean);
        };

        // Add change listeners to partial checkboxes
        container.querySelectorAll('.partial-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const nodeId = e.target.dataset.nodeId;
                const isChecked = e.target.checked;

                // Auto-select/deselect all children
                if (isChecked) {
                    const childCheckboxes = getChildCheckboxes(nodeId);
                    childCheckboxes.forEach(child => {
                        child.checked = true;
                    });
                }

                // Rebuild dynamic list tree to update skip defaults
                const dynamicListEnabled = document.getElementById('export-dynamic-list')?.checked;
                if (dynamicListEnabled) {
                    buildDynamicListTree();
                }

                updatePreview();
            });
        });
    };
    
    // Helper to check if node should be exported based on current scope
    const shouldNodeBeExported = (node) => {
        const scope = document.querySelector('input[name="export-scope"]:checked')?.value || 'full';

        if (scope === 'full') {
            return true;
        } else if (scope === 'partial') {
            // Check if this node is selected in partial tree
            const checkbox = document.querySelector(`.partial-checkbox[data-node-id="${node.id}"]`);
            return checkbox?.checked || false;
        } else if (scope === 'tag') {
            // Check if node has the selected tag
            const selectedTag = document.getElementById('tag-select')?.value;
            if (!selectedTag) return false;
            return nodeHasTag(node, selectedTag);
        }

        return false;
    };

    // Build dynamic list tree with type selectors
    const buildDynamicListTree = () => {
        const container = document.getElementById('dynamic-list-tree');
        if (!container) return;

        const buildNodeHTML = (node, depth = 0) => {
            const indent = depth * 20;
            const levelInfo = template.levels[depth];
            const hasChildren = node.subcategories && node.subcategories.length > 0;

            // Determine if this node will be exported
            const willBeExported = shouldNodeBeExported(node);

            // Default type: skip if not exported, otherwise use depth-based default
            const defaultType = !willBeExported ? 'skip' : (depth <= 1 ? 'connection' : 'task');

            // Smart column default based on workflow state (only if node will be exported)
            const getSmartColumnDefault = () => {
                if (!willBeExported) return '';
                if (node.completed) return 'done';
                if (node.grade && node.grade > 0) return 'in-progress';
                return ''; // None - user must explicitly choose
            };
            const defaultColumn = getSmartColumnDefault();

            let html = `
                <div class="dynamic-node" style="margin-left: ${indent}px; margin-bottom: 0.75rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <span style="flex: 1; font-weight: ${depth === 0 ? '600' : '400'}; ${!willBeExported ? 'color: var(--text-muted); font-style: italic;' : ''}">
                            ${node.name || 'Untitled'} ${!willBeExported ? '(not in export)' : ''}
                        </span>
                        <select class="dynamic-type-selector" data-node-id="${node.id}" style="padding: 0.25rem 0.5rem; border-radius: 4px; border: 1px solid var(--border-color); font-size: 0.9rem; min-width: 100px;">
                            <option value="task" ${defaultType === 'task' ? 'selected' : ''}>Task</option>
                            <option value="connection" ${defaultType === 'connection' ? 'selected' : ''}>Connection</option>
                            <option value="skip" ${defaultType === 'skip' ? 'selected' : ''}>Skip</option>
                        </select>
                        <select class="board-column-selector" data-node-id="${node.id}" style="padding: 0.25rem 0.5rem; border-radius: 4px; border: 1px solid var(--border-color); font-size: 0.9rem; min-width: 120px; display: ${defaultType === 'skip' ? 'none' : 'inline-block'};">
                            <option value="" ${defaultColumn === '' ? 'selected' : ''}>None</option>
                            <option value="todo" ${defaultColumn === 'todo' ? 'selected' : ''}>→ To Do</option>
                            <option value="in-progress" ${defaultColumn === 'in-progress' ? 'selected' : ''}>→ In Progress</option>
                            <option value="review" ${defaultColumn === 'review' ? 'selected' : ''}>→ Review</option>
                            <option value="done" ${defaultColumn === 'done' ? 'selected' : ''}>→ Done</option>
                        </select>
                    </div>
                </div>
            `;

            if (hasChildren && depth < template.levels.length - 1) {
                node.subcategories.forEach(child => {
                    html += buildNodeHTML(child, depth + 1);
                });
            }

            return html;
        };

        container.innerHTML = (flow.data || []).map(node => buildNodeHTML(node, 0)).join('');

        // Add change listeners for type selector
        container.querySelectorAll('.dynamic-type-selector').forEach(select => {
            select.addEventListener('change', (e) => {
                const nodeType = e.target.value;
                const columnSelector = e.target.parentElement.querySelector('.board-column-selector');

                if (nodeType === 'skip') {
                    columnSelector.style.display = 'none';
                    columnSelector.value = ''; // Reset to None
                } else {
                    columnSelector.style.display = 'inline-block';
                }

                updatePreview();
            });
        });

        // Add change listeners for column selector
        container.querySelectorAll('.board-column-selector').forEach(select => {
            select.addEventListener('change', updatePreview);
        });
    };

    // Helper function to find node depth in workflow tree
    const getNodeDepth = (nodes, targetId, currentDepth = 0) => {
        for (const node of nodes) {
            if (node.id === targetId) {
                return currentDepth;
            }
            if (node.subcategories) {
                const found = getNodeDepth(node.subcategories, targetId, currentDepth + 1);
                if (found !== null) return found;
            }
        }
        return null;
    };

    // Apply bulk dynamic list setup based on reference level
    const applyBulkDynamicSetup = () => {
        const exportReferenceCheckbox = document.getElementById('export-reference');
        const exportDynamicListCheckbox = document.getElementById('export-dynamic-list');
        const referenceLevelSelect = document.getElementById('reference-level');

        // Only apply if both reference and dynamic list are enabled
        if (!exportReferenceCheckbox?.checked || !exportDynamicListCheckbox?.checked) {
            return;
        }

        const referenceLevel = parseInt(referenceLevelSelect?.value || '0');

        // Get all dynamic list type selectors
        const selectors = document.querySelectorAll('.dynamic-type-selector');

        selectors.forEach(select => {
            const nodeId = select.dataset.nodeId;

            // Find node depth in workflow tree
            const nodeDepth = getNodeDepth(flow.data, nodeId);

            if (nodeDepth === null) return;

            // Apply bulk logic:
            // - Ancestors (above reference level) → connection
            // - Reference level → connection (going to References column)
            // - Descendants (below reference level) → task
            if (nodeDepth < referenceLevel) {
                select.value = 'connection';
            } else if (nodeDepth === referenceLevel) {
                select.value = 'connection';
            } else {
                select.value = 'task';
            }
        });

        // Update preview after bulk changes
        updatePreview();
    };

    // Update preview counts
    const updatePreview = () => {
        const scope = document.querySelector('input[name="export-scope"]:checked')?.value;
        const exportReference = document.getElementById('export-reference')?.checked;
        const exportDynamicList = document.getElementById('export-dynamic-list')?.checked;
        
        // Count nodes based on scope
        let totalNodes = 0;
        const countNodes = (nodes) => {
            nodes.forEach(node => {
                totalNodes++;
                if (node.subcategories) countNodes(node.subcategories);
            });
        };
        
        if (scope === 'full') {
            countNodes(flow.data || []);
        } else if (scope === 'partial') {
            // Count checked nodes
            document.querySelectorAll('.partial-checkbox:checked').forEach(() => totalNodes++);
        } else if (scope === 'tag') {
            const tag = document.getElementById('tag-select')?.value;
            if (tag) {
                const countTaggedNodes = (nodes) => {
                    nodes.forEach(node => {
                        if (nodeHasTag(node, tag)) totalNodes++;
                        if (node.subcategories) countTaggedNodes(node.subcategories);
                    });
                };
                countTaggedNodes(flow.data || []);
            }
        }
        
        document.getElementById('preview-node-count').textContent = totalNodes;
        
        // Reference column preview
        const refRow = document.getElementById('preview-reference-row');
        const refCount = document.getElementById('preview-reference-count');
        if (exportReference) {
            refRow.style.display = '';
            const levelIdx = parseInt(document.getElementById('reference-level')?.value || '0');
            // Count nodes at that level
            let levelCount = 0;
            const countAtLevel = (nodes, currentDepth) => {
                nodes.forEach(node => {
                    if (currentDepth === levelIdx) levelCount++;
                    if (node.subcategories && currentDepth < levelIdx) {
                        countAtLevel(node.subcategories, currentDepth + 1);
                    }
                });
            };
            countAtLevel(flow.data || [], 0);
            refCount.textContent = levelCount;
            document.getElementById('preview-board-count').textContent = totalNodes - levelCount;
        } else {
            refRow.style.display = 'none';
            document.getElementById('preview-board-count').textContent = totalNodes;
        }
        
        // Dynamic list preview
        const dynRow = document.getElementById('preview-dynamic-list-row');
        if (exportDynamicList) {
            dynRow.style.display = '';
            let taskCount = 0;
            let connectionCount = 0;
            document.querySelectorAll('.dynamic-type-selector').forEach(select => {
                const type = select.value;
                if (type === 'task') taskCount++;
                else if (type === 'connection') connectionCount++;
            });
            document.getElementById('preview-dynamic-count').textContent = taskCount + connectionCount;
            document.getElementById('preview-task-count').textContent = taskCount;
            document.getElementById('preview-connection-count').textContent = connectionCount;
        } else {
            dynRow.style.display = 'none';
        }
    };
    
    // Scope change handlers
    document.querySelectorAll('input[name="export-scope"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const scope = e.target.value;
            
            // Show/hide conditional UI
            document.getElementById('partial-tree-container').style.display = scope === 'partial' ? 'block' : 'none';
            document.getElementById('tag-filter-container').style.display = scope === 'tag' ? 'block' : 'none';
            
            // Build trees if needed
            if (scope === 'partial') buildPartialTree();
            
            updateBoardName();
            updatePreview();
        });
    });
    
    // Tag select handler
    const tagSelect = document.getElementById('tag-select');
    if (tagSelect) {
        tagSelect.addEventListener('change', () => {
            updateBoardName();

            // Rebuild dynamic list tree to update skip defaults for tag-filtered export
            const dynamicListEnabled = document.getElementById('export-dynamic-list')?.checked;
            if (dynamicListEnabled) {
                buildDynamicListTree();
            }

            updatePreview();
        });
    }
    
    // Reference toggle handler
    const exportReferenceCheckbox = document.getElementById('export-reference');
    if (exportReferenceCheckbox) {
        exportReferenceCheckbox.addEventListener('change', (e) => {
            document.getElementById('reference-options').style.display = e.target.checked ? 'block' : 'none';
            updatePreview();
            // Apply bulk setup if both reference and dynamic list are enabled
            if (e.target.checked) {
                applyBulkDynamicSetup();
            }
        });
    }
    
    // Reference level change
    const referenceLevelSelect = document.getElementById('reference-level');
    if (referenceLevelSelect) {
        referenceLevelSelect.addEventListener('change', () => {
            updatePreview();
            // Apply bulk setup when reference level changes
            applyBulkDynamicSetup();
        });
    }
    
    // Dynamic list toggle handler
    const exportDynamicListCheckbox = document.getElementById('export-dynamic-list');
    if (exportDynamicListCheckbox) {
        exportDynamicListCheckbox.addEventListener('change', (e) => {
            const container = document.getElementById('dynamic-list-tree-container');
            container.style.display = e.target.checked ? 'block' : 'none';
            if (e.target.checked) {
                buildDynamicListTree();
                // Apply bulk setup if reference is also enabled
                applyBulkDynamicSetup();
            }
            updatePreview();
        });
    }
    
    // Create board button handler
    const createBoardBtn = document.getElementById('create-board-btn');
    if (createBoardBtn) {
        createBoardBtn.addEventListener('click', () => handleExportSubmit(flow, template));
    }
    
    // Initial preview
    updatePreview();
};

/**
 * Handle export submission
 */
const handleExportSubmit = async (flow, template) => {
    try {
        // Gather export configuration
        const config = {
            scope: document.querySelector('input[name="export-scope"]:checked')?.value || 'full',
            boardName: document.getElementById('board-name')?.value || flow.name,
            boardDescription: document.getElementById('board-description')?.value || '',
            exportReference: document.getElementById('export-reference')?.checked || false,
            referenceLevel: parseInt(document.getElementById('reference-level')?.value || '0'),
            exportDynamicList: document.getElementById('export-dynamic-list')?.checked || false,
            selectedNodes: new Set(),
            tagFilter: null,
            dynamicListTypes: {}
        };
        
        // Validate
        if (!config.boardName.trim()) {
            alert('Please enter a board name');
            return;
        }
        
        // Collect selected nodes for partial export
        if (config.scope === 'partial') {
            document.querySelectorAll('.partial-checkbox:checked').forEach(checkbox => {
                config.selectedNodes.add(checkbox.dataset.nodeId);
            });
            
            if (config.selectedNodes.size === 0) {
                alert('Please select at least one section to export');
                return;
            }
        }
        
        // Tag filter
        if (config.scope === 'tag') {
            config.tagFilter = document.getElementById('tag-select')?.value;
            if (!config.tagFilter) {
                alert('Please select a tag to filter by');
                return;
            }
        }
        
        // Dynamic list types and board column assignments
        if (config.exportDynamicList) {
            config.boardColumnAssignments = {}; // Track which nodes get board cards and where

            document.querySelectorAll('.dynamic-type-selector').forEach(select => {
                const nodeId = select.dataset.nodeId;
                const nodeType = select.value;
                config.dynamicListTypes[nodeId] = nodeType;

                // Check if user wants a board card for this node
                if (nodeType !== 'skip') {
                    const columnSelector = select.parentElement.querySelector('.board-column-selector');
                    const targetColumn = columnSelector?.value;
                    if (targetColumn && targetColumn !== '') {
                        config.boardColumnAssignments[nodeId] = targetColumn;
                    }
                }
            });
        }
        
        // Close modal and show progress
        closeModal();
        
        // Execute export
        await executeWorkflowExport(flow, template, config);
        
    } catch (e) {
        console.error('Export submit error:', e);
        alert('Export configuration error: ' + e.message);
    }
};

/**
 * Helper function to get column ID by name
 */
const getColumnIdByName = (board, columnKey) => {
    const columnMap = {
        'todo': 'To Do',
        'in-progress': 'In Progress',
        'review': 'Review',
        'done': 'Done'
    };
    const actualName = columnMap[columnKey] || columnKey;
    const column = board.columns.find(c => c.name === actualName);
    return column ? column.id : board.columns[0]?.id; // Fallback to first column
};

/**
 * Execute the workflow export to board
 */
const executeWorkflowExport = async (flow, template, config) => {
    try {
        // Load boards data
        const boardsRes = await fetch(`data/ppm-boards.json?t=${Date.now()}`);
        if (!boardsRes.ok) throw new Error('Failed to load boards data');
        const boardsData = await boardsRes.json();
        
        // Collect nodes to export based on scope
        const nodesToExport = [];
        const nodeIdMap = new Map(); // For hierarchy tracking
        
        const collectNodes = (nodes, parentId = null, depth = 0) => {
            if (!nodes || depth >= template.levels.length) return;
            
            nodes.forEach(node => {
                let shouldInclude = false;
                
                if (config.scope === 'full') {
                    shouldInclude = true;
                } else if (config.scope === 'partial') {
                    shouldInclude = config.selectedNodes.has(node.id);
                } else if (config.scope === 'tag') {
                    shouldInclude = nodeHasTag(node, config.tagFilter);
                }
                
                if (shouldInclude) {
                    nodesToExport.push({
                        node,
                        depth,
                        level: template.levels[depth],
                        parentId
                    });
                    nodeIdMap.set(node.id, { node, depth, parentId });
                }
                
                if (node.subcategories) {
                    collectNodes(node.subcategories, node.id, depth + 1);
                }
            });
        };
        
        collectNodes(flow.data || [], null, 0);
        
        if (nodesToExport.length === 0) {
            alert('No nodes to export with current configuration');
            return;
        }
        
        // Create board structure
        const board = {
            id: generateId('board'),
            name: config.boardName,
            description: config.boardDescription + `\n\nExported from workflow: ${flow.name}`,
            sourceControlId: null,
            sourceFlowId: flow.id,
            createdAt: new Date().toISOString(),
            createdBy: 'user-default-001',
            archived: false,
            members: [{
                userId: 'user-default-001',
                name: 'Default User',
                email: 'user@company.com',
                role: 'admin',
                avatar: '',
                joinedAt: new Date().toISOString()
            }],
            columns: [],
            cards: [],
            labels: [],
            milestones: [],
            categories: [],
            groups: [],
            dynamicList: {
                isActive: config.exportDynamicList,
                nodes: []
            },
            settings: {
                notificationsEnabled: true,
                allowGuestView: false,
                enforceWIPLimit: false
            },
            activity: []
        };
        
        // Create columns
        const includeReferences = config.exportReference;
        if (includeReferences) {
            board.columns.push({
                id: generateId('col'),
                name: 'References',
                order: 0,
                limit: null,
                color: '#6c757d',
                locked: true
            });
        }
        
        const startOrder = includeReferences ? 1 : 0;
        board.columns.push(
            { id: generateId('col'), name: 'To Do', order: startOrder, limit: null, color: '#0d6efd' },
            { id: generateId('col'), name: 'In Progress', order: startOrder + 1, limit: 5, color: '#0dcaf0' },
            { id: generateId('col'), name: 'Review', order: startOrder + 2, limit: null, color: '#ffc107' },
            { id: generateId('col'), name: 'Done', order: startOrder + 3, limit: null, color: '#198754' }
        );
        
        const referenceColumnId = includeReferences ? board.columns[0].id : null;
        const defaultColumnId = board.columns.find(c => c.name === 'To Do')?.id;
        
        // Convert nodes to cards
        let cardOrder = 0;
        const cardIdMap = new Map(); // workflow node id -> array of board card IDs

        // Helper function to create a card for a node
        const createCardForNode = (node, depth, level, columnId) => {
            const card = {
                id: generateId('card'),
                boardId: board.id,
                columnId,
                order: cardOrder++,
                title: node.name || `Untitled ${level.singularName}`,
                description: node.text || node.description || '',
                sourceType: 'workflow',
                sourceId: node.id,
                sourceGrade: node.grade || null,
                assignments: [],
                schedule: {
                    startDate: null,
                    startMode: 'date',
                    startDays: null,
                    startDependency: null,
                    dueDate: null,
                    dueMode: 'date',
                    dueDays: null,
                    recurrence: {
                        enabled: false,
                        pattern: 'monthly',
                        interval: 1,
                        startOf: 'month',
                        endOf: null,
                        customDays: [],
                        endMode: 'never',
                        endOccurrences: null,
                        endDate: null
                    },
                    reminders: []
                },
                checklist: [],
                labels: [],
                attachments: [],
                linkedBacklogItems: [],
                milestoneId: null,
                categoryId: null,
                groupIds: [],
                status: {
                    current: 'pending',
                    blocked: false,
                    blockedReason: null,
                    approvalStatus: null,
                    approvedBy: null,
                    approvedAt: null
                },
                isDone: node.completed || false,
                effort: {
                    estimated: null,
                    actual: null,
                    unit: 'hours'
                },
                activity: [],
                priority: 'medium',
                createdAt: new Date().toISOString(),
                createdBy: 'user-default-001',
                updatedAt: new Date().toISOString(),
                updatedBy: 'user-default-001'
            };
            
            // Map footer content to attachments
            if (node.footer) {
                // Comments
                if (node.footer.comments && Array.isArray(node.footer.comments)) {
                    node.footer.comments.forEach(comment => {
                        card.attachments.push({
                            type: 'comment',
                            content: comment,
                            title: '',
                            author: 'System Import',
                            timestamp: new Date().toISOString()
                        });
                    });
                }
                
                // Notes
                if (node.footer.notes && Array.isArray(node.footer.notes)) {
                    node.footer.notes.forEach(note => {
                        card.attachments.push({
                            type: 'note',
                            title: note.title || 'Imported Note',
                            content: note.content || '',
                            author: 'System Import',
                            timestamp: new Date().toISOString()
                        });
                    });
                }
                
                // Links
                if (node.footer.links && Array.isArray(node.footer.links)) {
                    node.footer.links.forEach(link => {
                        card.attachments.push({
                            type: 'link',
                            url: link.url || link,
                            title: link.text || link.title || 'Link',
                            author: 'System Import',
                            timestamp: new Date().toISOString()
                        });
                    });
                }
                
                // Images
                if (node.footer.images && Array.isArray(node.footer.images)) {
                    node.footer.images.forEach(image => {
                        card.attachments.push({
                            type: 'image',
                            url: image.url || image,
                            title: image.title || 'Image',
                            author: 'System Import',
                            timestamp: new Date().toISOString()
                        });
                    });
                }
            }
            
            // Map tags to labels
            if (node.tags && Array.isArray(node.tags)) {
                node.tags.forEach(tag => {
                    // Find or create label in board's label palette
                    let label = board.labels.find(l => l.name === tag);
                    if (!label) {
                        label = {
                            id: generateId('label'),
                            name: tag,
                            color: '#' + Math.floor(Math.random()*16777215).toString(16)
                        };
                        board.labels.push(label);
                    }
                    // Store tag string in card (not label ID)
                    card.labels.push(tag);
                });
            }

            return card;
        };

        // Create cards for nodes - may create multiple cards per node
        nodesToExport.forEach(({ node, depth, level }) => {
            const cardsToCreate = [];

            // 1. Check if node should have a REFERENCE card (independent of other choices)
            if (config.exportReference && depth === config.referenceLevel) {
                cardsToCreate.push({
                    columnId: referenceColumnId,
                    reason: 'reference'
                });
            }

            // 2. Check if node should have a DYNAMIC LIST board card (independent of reference)
            if (config.exportDynamicList) {
                const targetColumn = config.boardColumnAssignments?.[node.id];
                if (targetColumn) {
                    // User explicitly selected a board column for this node
                    cardsToCreate.push({
                        columnId: getColumnIdByName(board, targetColumn),
                        reason: 'dynamic-list-selection'
                    });
                }
            }
            // 3. If NOT using dynamic list, create default cards for all non-reference nodes
            else {
                // Only create default card if we haven't already created a reference card
                const alreadyHasReferenceCard = cardsToCreate.some(c => c.reason === 'reference');
                if (!alreadyHasReferenceCard) {
                    cardsToCreate.push({
                        columnId: defaultColumnId,
                        reason: 'default'
                    });
                }
            }

            // Create all cards for this node
            if (cardsToCreate.length > 0) {
                const cardIds = [];
                cardsToCreate.forEach(({ columnId }) => {
                    const card = createCardForNode(node, depth, level, columnId);
                    board.cards.push(card);
                    cardIds.push(card.id);
                });

                // Store all card IDs for this node
                cardIdMap.set(node.id, cardIds);
            }
        });

        // Build dynamic list if enabled
        if (config.exportDynamicList) {
            let nodeOrder = 0;
            
            const buildDynamicNodes = (nodes, parentDynamicId = null, depth = 0) => {
                if (!nodes || depth >= template.levels.length) return;
                
                nodes.forEach(node => {
                    // Check if node should be included in dynamic list
                    const nodeType = config.dynamicListTypes[node.id];
                    if (!nodeType || nodeType === 'skip') {
                        // Skip nodes completely excluded
                        if (node.subcategories) {
                            buildDynamicNodes(node.subcategories, parentDynamicId, depth + 1);
                        }
                        return;
                    }

                    // Check if node has board cards (may have 0, 1, or 2 cards)
                    const cardIds = cardIdMap.get(node.id) || [];

                    // Determine which card to link in dynamic list:
                    // - If 2 cards exist (reference + dynamic list), use the 2nd one (dynamic list card)
                    // - If 1 card exists, use it
                    // - If 0 cards, no linking
                    const cardIdToLink = cardIds.length > 1 ? cardIds[1] : (cardIds.length === 1 ? cardIds[0] : null);

                    const dynamicNode = {
                        id: generateId('dyn-node'),
                        title: node.name || `Untitled ${template.levels[depth].singularName}`,
                        type: nodeType, // 'task' or 'connection'
                        parentId: parentDynamicId,
                        level: depth,
                        order: nodeOrder++,
                        isExpanded: true
                    };

                    if (nodeType === 'connection') {
                        // Connection node: may or may not have board card
                        if (cardIdToLink) {
                            dynamicNode.linkedTaskIds = [cardIdToLink];
                        } else {
                            // Connection exists only in dynamic list (no board card)
                            dynamicNode.linkedTaskIds = [];
                        }
                    } else if (nodeType === 'task') {
                        // Task node: has own data in dynamic list
                        dynamicNode.taskData = {
                            description: node.text || node.description || '',
                            isDone: node.completed || false,
                            attachments: [],
                            checklist: []
                        };

                        // Optional: link to board card if user created one
                        if (cardIdToLink) {
                            dynamicNode.linkedTaskIds = [cardIdToLink];
                        } else {
                            // Task exists only in dynamic list (no board card)
                            dynamicNode.linkedTaskIds = [];
                        }
                    }

                    board.dynamicList.nodes.push(dynamicNode);

                    // Recurse to children
                    if (node.subcategories) {
                        buildDynamicNodes(node.subcategories, dynamicNode.id, depth + 1);
                    }
                });
            };
            
            buildDynamicNodes(flow.data || [], null, 0);
        }
        
        // Save board
        boardsData.boards.push(board);
        const saveRes = await fetch('save_board.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(boardsData)
        });
        
        const result = await saveRes.json();
        if (result.status !== 'success') throw new Error(result.message || 'Save failed');
        
        // Success
        alert(`Board "${board.name}" created successfully!\n\n• ${board.cards.length} tasks created\n• ${board.dynamicList.nodes.length} dynamic list nodes`);
        
        // Open board in new tab
        window.open(`board.html?id=${board.id}`, '_blank');
        
    } catch (e) {
        console.error('Execute workflow export error:', e);
        alert('Failed to export workflow to board: ' + e.message);
    }
};
