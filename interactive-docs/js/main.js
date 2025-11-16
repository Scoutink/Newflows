// Main Application Entry Point
import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initSearch } from './search.js';
import { initScene } from './scene.js';
import { initScrollAnimations } from './animations.js';

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Interactive Documentation...');
    
    // Initialize all modules
    initTheme();
    initNavigation();
    initSearch();
    initScene();
    initScrollAnimations();
    
    // Hide loading overlay
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
        }, 500);
    }
    
    console.log('Interactive Documentation initialized!');
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
