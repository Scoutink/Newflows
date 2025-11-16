// Markdown Processing
import { marked } from 'https://cdn.jsdelivr.net/npm/marked@11.1.1/lib/marked.esm.js';

// Configure marked
marked.setOptions({
    breaks: true,
    gfm: true,
    headerIds: true,
    mangle: false,
});

// Custom renderer for enhanced markdown
const renderer = new marked.Renderer();

// Enhanced code blocks with syntax highlighting
renderer.code = function(code, language) {
    const lang = language || 'text';
    const escapedCode = escapeHtml(code);
    return `
        <div class="code-block">
            <div class="code-header">
                <span class="code-language">${lang}</span>
                <button class="btn-copy-code" data-code="${escapeHtml(code)}" title="Copy code">
                    <i class="fas fa-copy"></i> Copy
                </button>
            </div>
            <pre><code class="language-${lang}">${escapedCode}</code></pre>
        </div>
    `;
};

// Enhanced blockquotes
renderer.blockquote = function(quote) {
    return `<blockquote class="markdown-quote">${quote}</blockquote>`;
};

// Enhanced links
renderer.link = function(href, title, text) {
    const isExternal = href.startsWith('http');
    const target = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
    return `<a href="${href}" ${target} class="markdown-link">${text}</a>`;
};

// Enhanced tables
renderer.table = function(header, body) {
    return `
        <div class="table-wrapper">
            <table class="markdown-table">
                <thead>${header}</thead>
                <tbody>${body}</tbody>
            </table>
        </div>
    `;
};

marked.setOptions({ renderer });

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Process markdown content
export async function processMarkdown(markdownText) {
    try {
        const html = marked.parse(markdownText);
        return html;
    } catch (error) {
        console.error('Error processing markdown:', error);
        return `<p class="error">Error processing markdown content.</p>`;
    }
}

// Load markdown file
export async function loadMarkdownFile(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load markdown file: ${response.statusText}`);
        }
        const markdownText = await response.text();
        return await processMarkdown(markdownText);
    } catch (error) {
        console.error('Error loading markdown file:', error);
        return `<p class="error">Error loading content: ${error.message}</p>`;
    }
}

// Initialize code copy buttons
export function initCodeCopyButtons() {
    document.querySelectorAll('.btn-copy-code').forEach(button => {
        button.addEventListener('click', async () => {
            const code = button.getAttribute('data-code');
            try {
                await navigator.clipboard.writeText(code);
                button.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-copy"></i> Copy';
                }, 2000);
            } catch (error) {
                console.error('Failed to copy code:', error);
            }
        });
    });
}

// Process markdown content when DOM is ready
export function processMarkdownContent() {
    // Process all elements with data-markdown attribute
    document.querySelectorAll('[data-markdown]').forEach(async (element) => {
        const filePath = element.getAttribute('data-markdown');
        if (filePath) {
            const html = await loadMarkdownFile(filePath);
            element.innerHTML = html;
            initCodeCopyButtons();
            
            // Initialize Prism.js syntax highlighting if available
            if (typeof Prism !== 'undefined') {
                Prism.highlightAllUnder(element);
            }
        }
    });
}
