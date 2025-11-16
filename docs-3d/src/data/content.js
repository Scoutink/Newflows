/**
 * Content Manager
 * Loads and manages documentation content
 */

export class ContentManager {
    constructor() {
        this.content = {
            overview: null,
            templates: null,
            workflows: null,
            boards: null
        };

        this.sections = {
            overview: [],
            templates: [],
            workflows: [],
            boards: []
        };
    }

    /**
     * Load all documentation content
     */
    async loadContent() {
        try {
            // For now, we'll use placeholder content
            // In production, this would fetch the actual markdown files
            this.content.overview = this.createPlaceholderContent('Platform Overview', 'overview');
            this.content.templates = this.createPlaceholderContent('Templates Manual', 'templates');
            this.content.workflows = this.createPlaceholderContent('Workflows Manual', 'workflows');
            this.content.boards = this.createPlaceholderContent('Boards Manual', 'boards');

            // Parse sections
            this.parseSections();

            return true;
        } catch (error) {
            console.error('Error loading content:', error);
            return false;
        }
    }

    /**
     * Create placeholder content for demo
     */
    createPlaceholderContent(title, type) {
        const descriptions = {
            overview: 'The Newflows platform uses a three-tier system: Templates create the structure, Workflows map the strategy, and Boards execute the tasks. This compliance management system is designed for consultants and their clients to work together seamlessly.',
            templates: 'Templates define the structure and hierarchy of your workflows. Configure up to 10 levels with 13 different property types. Design reusable frameworks for regulations like GDPR, ISO 27001, NIST CSF, and more.',
            workflows: 'Workflows are strategic maps built on template structures. Create hierarchical requirements, link workflows together, add tags and attachments, track progress, and export to boards for execution.',
            boards: 'Boards are Kanban-style execution spaces where work gets done. Manage cards across columns, create milestones, organize with categories and groups, leverage dynamic lists for reference, and collaborate with your team.'
        };

        return {
            title: title,
            type: type,
            description: descriptions[type],
            chapters: this.createPlaceholderChapters(type)
        };
    }

    /**
     * Create placeholder chapters
     */
    createPlaceholderChapters(type) {
        const chapterData = {
            overview: [
                { id: 1, title: 'Introduction', content: 'Welcome to Newflows Documentation' },
                { id: 2, title: 'Three-Tier System', content: 'Understanding Templates, Workflows, and Boards' },
                { id: 3, title: 'Compliance Use Case', content: 'How consultants use Newflows' },
                { id: 4, title: 'Getting Started', content: 'Your first steps with the platform' }
            ],
            templates: [
                { id: 1, title: 'Introduction to Templates', content: 'What are templates and why use them?' },
                { id: 2, title: 'Template Builder', content: 'The template creation interface' },
                { id: 3, title: 'Creating Your First Template', content: 'Step-by-step guide' },
                { id: 4, title: 'Level Hierarchies', content: 'Designing multi-level structures' },
                { id: 5, title: 'Property Configuration', content: '13 property types explained' }
            ],
            workflows: [
                { id: 1, title: 'Getting Started', content: 'Introduction to workflows' },
                { id: 2, title: 'Creating Workflows', content: 'Four ways to create workflows' },
                { id: 3, title: 'Workflow Modes', content: 'Creation vs Execution mode' },
                { id: 4, title: 'Building Structure', content: 'Adding units to your workflow' },
                { id: 5, title: 'Tags and Organization', content: 'Categorize with tags' },
                { id: 6, title: 'Exporting to Boards', content: 'Move workflows to execution' }
            ],
            boards: [
                { id: 1, title: 'Introduction to Boards', content: 'Kanban-style project management' },
                { id: 2, title: 'Board Interface', content: 'Understanding the layout' },
                { id: 3, title: 'Managing Cards', content: 'Create and organize tasks' },
                { id: 4, title: 'Milestones', content: 'Time-based tracking' },
                { id: 5, title: 'Categories and Groups', content: 'Organize and bulk edit' },
                { id: 6, title: 'Dynamic Lists', content: 'Reference workflow hierarchies' }
            ]
        };

        return chapterData[type] || [];
    }

    /**
     * Parse content into sections
     */
    parseSections() {
        Object.keys(this.content).forEach(key => {
            if (this.content[key]) {
                this.sections[key] = this.content[key].chapters;
            }
        });
    }

    /**
     * Search content
     */
    search(query) {
        const results = [];
        const lowerQuery = query.toLowerCase();

        Object.keys(this.sections).forEach(type => {
            this.sections[type].forEach(chapter => {
                if (
                    chapter.title.toLowerCase().includes(lowerQuery) ||
                    chapter.content.toLowerCase().includes(lowerQuery)
                ) {
                    results.push({
                        type: type,
                        chapter: chapter.title,
                        content: chapter.content,
                        id: chapter.id
                    });
                }
            });
        });

        return results;
    }

    /**
     * Get content by type and chapter
     */
    getContent(type, chapterId) {
        if (!this.sections[type]) return null;

        return this.sections[type].find(chapter => chapter.id === chapterId);
    }

    /**
     * Get all sections for a type
     */
    getSections(type) {
        return this.sections[type] || [];
    }
}
