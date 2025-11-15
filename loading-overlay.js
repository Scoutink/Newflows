/**
 * Loading Overlay System
 * Provides visual feedback during async operations
 */

const LoadingOverlay = (() => {
    let overlay = null;
    let activeOperations = 0;

    // Initialize overlay element
    const init = () => {
        if (overlay) return;

        overlay = document.createElement('div');
        overlay.className = 'loading-overlay';
        overlay.innerHTML = `
            <div class="loading-overlay-content">
                <div class="spinner spinner-lg"></div>
                <div class="loading-text">Loading...</div>
            </div>
        `;
        document.body.appendChild(overlay);
    };

    // Show loading overlay
    const show = (text = 'Loading...') => {
        if (!overlay) init();

        activeOperations++;
        const textEl = overlay.querySelector('.loading-text');
        if (textEl) textEl.textContent = text;

        overlay.classList.add('active');
    };

    // Hide loading overlay
    const hide = () => {
        if (!overlay) return;

        activeOperations = Math.max(0, activeOperations - 1);

        if (activeOperations === 0) {
            overlay.classList.remove('active');
        }
    };

    // Force hide (clear all operations)
    const forceHide = () => {
        if (!overlay) return;
        activeOperations = 0;
        overlay.classList.remove('active');
    };

    // Wrap an async function with loading state
    const wrap = async (fn, loadingText = 'Loading...') => {
        show(loadingText);
        try {
            const result = await fn();
            return result;
        } finally {
            hide();
        }
    };

    return {
        show,
        hide,
        forceHide,
        wrap
    };
})();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LoadingOverlay;
}
