// Main Application Entry Point
// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Initializing Interactive Documentation...');
    
    // Always hide loading overlay, even if there are errors
    const hideLoading = () => {
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
        }
    };
    
    try {
        // Initialize all modules with error handling
        try {
            const { initTheme } = await import('./theme.js');
            initTheme();
        } catch (e) {
            console.warn('Theme module failed:', e);
        }
        
        try {
            const { initNavigation } = await import('./navigation.js');
            initNavigation();
        } catch (e) {
            console.warn('Navigation module failed:', e);
        }
        
        try {
            const { initSearch } = await import('./search.js');
            initSearch();
        } catch (e) {
            console.warn('Search module failed:', e);
        }
        
        try {
            const { initScene } = await import('./scene.js');
            initScene();
        } catch (e) {
            console.warn('Scene module failed:', e);
        }
        
        try {
            const { initScrollAnimations } = await import('./animations.js');
            initScrollAnimations();
        } catch (e) {
            console.warn('Animations module failed:', e);
        }
        
        try {
            const { processMarkdownContent, initCodeCopyButtons } = await import('./markdown.js');
            processMarkdownContent();
            initCodeCopyButtons();
        } catch (e) {
            console.warn('Markdown module failed:', e);
        }
        
        console.log('Interactive Documentation initialized!');
    } catch (error) {
        console.error('Error initializing documentation:', error);
    } finally {
        // Always hide loading overlay
        setTimeout(hideLoading, 100);
    }
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is hidden
        window.dispatchEvent(new CustomEvent('pause-animations'));
    } else {
        // Resume animations when tab is visible
        window.dispatchEvent(new CustomEvent('resume-animations'));
    }
});

// Export for use in other modules
export {};
