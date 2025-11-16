/**
 * Platform Data Loader
 * Loads real platform data from JSON files
 */

export class PlatformDataLoader {
    constructor() {
        this.templates = null;
        this.workflows = null;
        this.boards = null;
    }

    /**
     * Load all platform data
     */
    async loadAll() {
        try {
            // Load all JSON files in parallel
            const [templates, workflows, boards] = await Promise.all([
                this.loadJSON('../data/templates.json'),
                this.loadJSON('../data/workflows.json'),
                this.loadJSON('../data/ppm-boards.json')
            ]);

            this.templates = templates;
            this.workflows = workflows;
            this.boards = boards;

            console.log('Platform data loaded successfully');
            return true;

        } catch (error) {
            console.warn('Could not load platform data, using demo mode:', error);
            // Create fallback demo data
            this.createDemoData();
            return false;
        }
    }

    /**
     * Load JSON file
     */
    async loadJSON(path) {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Failed to load ${path}`);
        }
        return await response.json();
    }

    /**
     * Create demo data if real data unavailable
     */
    createDemoData() {
        this.templates = {
            templates: [
                {
                    id: 'demo-template-1',
                    name: 'Compliance Template',
                    description: 'Three-level compliance structure',
                    levels: [
                        { id: 'level-1', name: 'Regulations', order: 0 },
                        { id: 'level-2', name: 'Requirements', order: 1 },
                        { id: 'level-3', name: 'Actions', order: 2 }
                    ]
                }
            ]
        };

        this.workflows = {
            flows: [
                {
                    id: 'demo-workflow-1',
                    name: 'GDPR Compliance',
                    templateId: 'demo-template-1',
                    data: [
                        {
                            id: 'reg-1',
                            name: 'Data Protection',
                            subcategories: [
                                {
                                    id: 'req-1',
                                    name: 'Privacy by Design',
                                    subcategories: [
                                        { id: 'act-1', name: 'Implement data minimization' },
                                        { id: 'act-2', name: 'Create privacy policies' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        this.boards = {
            boards: [
                {
                    id: 'demo-board-1',
                    name: 'GDPR Implementation',
                    columns: ['To Do', 'In Progress', 'Review', 'Done'],
                    cards: []
                }
            ]
        };
    }

    /**
     * Get example template
     */
    getExampleTemplate() {
        if (this.templates && this.templates.templates && this.templates.templates.length > 0) {
            return this.templates.templates[0];
        }
        return null;
    }

    /**
     * Get example workflow
     */
    getExampleWorkflow() {
        if (this.workflows && this.workflows.flows && this.workflows.flows.length > 0) {
            return this.workflows.flows[0];
        }
        return null;
    }

    /**
     * Get example board
     */
    getExampleBoard() {
        if (this.boards && this.boards.boards && this.boards.boards.length > 0) {
            return this.boards.boards[0];
        }
        return null;
    }

    /**
     * Get all templates
     */
    getAllTemplates() {
        return this.templates?.templates || [];
    }

    /**
     * Get all workflows
     */
    getAllWorkflows() {
        return this.workflows?.flows || [];
    }

    /**
     * Get all boards
     */
    getAllBoards() {
        return this.boards?.boards || [];
    }

    /**
     * Check if real data is loaded
     */
    isRealData() {
        return this.templates !== null &&
               this.workflows !== null &&
               this.boards !== null;
    }
}
