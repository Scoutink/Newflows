// Search Functionality
import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.esm.js';

let searchIndex = null;
let fuse = null;

// Initialize search
export function initSearch() {
    const searchToggle = document.getElementById('search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    // Build search index
    buildSearchIndex();
    
    // Toggle search overlay
    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            if (searchInput) {
                setTimeout(() => searchInput.focus(), 100);
            }
        });
    }
    
    // Close search overlay
    if (searchClose && searchOverlay) {
        searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
            if (searchInput) {
                searchInput.value = '';
            }
            if (searchResults) {
                searchResults.classList.remove('active');
                searchResults.innerHTML = '';
            }
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay?.classList.contains('active')) {
            searchOverlay.classList.remove('active');
            if (searchInput) searchInput.value = '';
            if (searchResults) {
                searchResults.classList.remove('active');
                searchResults.innerHTML = '';
            }
        }
    });
    
    // Search input handler
    if (searchInput && searchResults) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim();
            
            if (query.length < 2) {
                searchResults.classList.remove('active');
                searchResults.innerHTML = '';
                return;
            }
            
            searchTimeout = setTimeout(() => {
                performSearch(query, searchResults);
            }, 300);
        });
    }
}

// Build search index from content
async function buildSearchIndex() {
    // This would typically fetch content from markdown files or API
    // For now, we'll use a simple content structure
    const content = [
        { title: 'Platform Overview', content: 'Learn about the three-tier system', url: 'index.html#overview' },
        { title: 'Templates', content: 'Create reusable workflow structures', url: 'templates.html' },
        { title: 'Workflows', content: 'Build strategic maps and processes', url: 'workflows.html' },
        { title: 'Boards', content: 'Execute tasks with Kanban boards', url: 'boards.html' },
        { title: 'Use Cases', content: 'Real-world compliance scenarios', url: 'use-cases.html' },
        { title: 'Quick Start', content: 'Get started in minutes', url: 'quick-start.html' },
    ];
    
    searchIndex = content;
    
    // Initialize Fuse.js
    fuse = new Fuse(content, {
        keys: ['title', 'content'],
        threshold: 0.3,
        includeScore: true,
    });
}

// Perform search
function performSearch(query, resultsContainer) {
    if (!fuse) return;
    
    const results = fuse.search(query);
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="search-result-empty">
                <i class="fas fa-search"></i>
                <p>No results found for "${query}"</p>
            </div>
        `;
        resultsContainer.classList.add('active');
        return;
    }
    
    const resultsHTML = results.map(result => {
        const item = result.item;
        return `
            <a href="${item.url}" class="search-result-item">
                <h4>${highlightMatch(item.title, query)}</h4>
                <p>${highlightMatch(item.content, query)}</p>
            </a>
        `;
    }).join('');
    
    resultsContainer.innerHTML = resultsHTML;
    resultsContainer.classList.add('active');
}

// Highlight search matches
function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}
