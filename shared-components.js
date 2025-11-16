/**
 * Newflows Shared Components - JavaScript Utilities
 * Version: 8.0
 * Last Updated: 2025-11-16
 *
 * This file provides reusable JavaScript components and utilities:
 * - Toast Notification System
 * - Auto-save Manager
 * - Form Validator
 * - Keyboard Navigation
 * - Focus Trap
 * - Modal Manager
 */

'use strict';

/* =============================================================================
   TOAST NOTIFICATION SYSTEM
   ========================================================================== */

const Toast = {
    container: null,
    activeToasts: [],

    /**
     * Initialize the toast container
     */
    init() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.className = 'toast-container';
            this.container.style.cssText = `
                position: fixed;
                top: 1rem;
                right: 1rem;
                z-index: var(--z-toast, 9999);
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                pointer-events: none;
                max-width: 420px;
            `;
            document.body.appendChild(this.container);
        }
    },

    /**
     * Show a toast notification
     * @param {string} message - The message to display
     * @param {string} type - Type: 'success', 'error', 'warning', 'info'
     * @param {number} duration - Duration in ms (0 = no auto-dismiss)
     * @returns {HTMLElement} The toast element
     */
    show(message, type = 'info', duration = 4000) {
        this.init();

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.style.cssText = `
            pointer-events: all;
            min-width: 300px;
            background: var(--bg-primary, #ffffff);
            border-radius: var(--radius-lg, 12px);
            box-shadow: var(--shadow-xl);
            padding: 1rem;
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            transform: translateX(400px);
            opacity: 0;
            transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        `;

        const icons = {
            success: 'fa-circle-check',
            error: 'fa-circle-exclamation',
            warning: 'fa-triangle-exclamation',
            info: 'fa-circle-info'
        };

        const colors = {
            success: 'var(--color-success, #10b981)',
            error: 'var(--color-danger, #ef4444)',
            warning: 'var(--color-warning, #f59e0b)',
            info: 'var(--color-info, #3b82f6)'
        };

        toast.innerHTML = `
            <div class="toast-icon" style="flex-shrink: 0; color: ${colors[type] || colors.info};">
                <i class="fa-solid ${icons[type] || icons.info}"></i>
            </div>
            <div class="toast-content" style="flex: 1; font-size: 0.875rem; color: var(--text-primary);">
                ${message}
            </div>
            <button class="toast-close" aria-label="Close notification" style="
                flex-shrink: 0;
                background: transparent;
                border: none;
                color: var(--text-secondary);
                cursor: pointer;
                padding: 0.25rem;
                border-radius: 0.25rem;
                transition: all 150ms;
                font-size: 1.25rem;
                line-height: 1;
            ">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;

        // Border accent
        const borderColors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };
        toast.style.borderLeft = `4px solid ${borderColors[type] || borderColors.info}`;

        // Close button handler
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => this.hide(toast));
        closeBtn.addEventListener('mouseover', function() {
            this.style.background = 'var(--bg-hover, #f1f5f9)';
        });
        closeBtn.addEventListener('mouseout', function() {
            this.style.background = 'transparent';
        });

        // Add to container
        this.container.appendChild(toast);
        this.activeToasts.push(toast);

        // Trigger animation
        requestAnimationFrame(() => {
            toast.style.transform = 'translateX(0)';
            toast.style.opacity = '1';
        });

        // Auto-hide
        if (duration > 0) {
            setTimeout(() => this.hide(toast), duration);
        }

        return toast;
    },

    /**
     * Hide a toast
     * @param {HTMLElement} toast - The toast element to hide
     */
    hide(toast) {
        toast.style.transform = 'translateX(400px)';
        toast.style.opacity = '0';

        setTimeout(() => {
            toast.remove();
            const index = this.activeToasts.indexOf(toast);
            if (index > -1) {
                this.activeToasts.splice(index, 1);
            }

            // Remove container if empty
            if (this.activeToasts.length === 0 && this.container) {
                this.container.remove();
                this.container = null;
            }
        }, 300);
    },

    /**
     * Convenience methods
     */
    success(message, duration = 4000) {
        return this.show(message, 'success', duration);
    },

    error(message, duration = 5000) {
        return this.show(message, 'error', duration);
    },

    warning(message, duration = 4500) {
        return this.show(message, 'warning', duration);
    },

    info(message, duration = 4000) {
        return this.show(message, 'info', duration);
    },

    /**
     * Clear all toasts
     */
    clearAll() {
        this.activeToasts.forEach(toast => this.hide(toast));
    }
};

// Make Toast globally available
window.Toast = Toast;


/* =============================================================================
   AUTO-SAVE MANAGER
   ========================================================================== */

const AutoSave = {
    isDirty: false,
    saveTimeout: null,
    indicator: null,
    saveFunction: null,
    delay: 3000,

    /**
     * Initialize auto-save
     * @param {Function} saveFunction - Function to call when saving
     * @param {number} delay - Debounce delay in ms (default: 3000)
     */
    init(saveFunction, delay = 3000) {
        this.saveFunction = saveFunction;
        this.delay = delay;

        // Create indicator if it doesn't exist
        if (!this.indicator) {
            this.indicator = document.createElement('div');
            this.indicator.className = 'autosave-indicator hidden';
            this.indicator.style.cssText = `
                display: none;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem 0.75rem;
                background: var(--color-warning-light, #fef3c7);
                color: var(--color-warning, #f59e0b);
                border-radius: var(--radius-md, 8px);
                font-size: var(--font-size-sm, 0.875rem);
                font-weight: var(--font-weight-medium, 500);
                transition: all 200ms;
            `;
            this.indicator.innerHTML = `
                <i class="fa-solid fa-circle"></i>
                <span class="autosave-text">Unsaved changes</span>
            `;

            // Try to add to header
            const header = document.querySelector('header');
            if (header) {
                header.appendChild(this.indicator);
            } else {
                document.body.appendChild(this.indicator);
            }
        }

        // Warn before leaving with unsaved changes
        window.addEventListener('beforeunload', (e) => {
            if (this.isDirty) {
                e.preventDefault();
                e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
                return e.returnValue;
            }
        });
    },

    /**
     * Mark data as dirty (changed)
     */
    markDirty() {
        if (!this.isDirty) {
            this.isDirty = true;
            this.showIndicator();
        }

        // Debounce save
        clearTimeout(this.saveTimeout);
        this.saveTimeout = setTimeout(() => this.save(), this.delay);
    },

    /**
     * Save data
     */
    async save() {
        if (!this.isDirty || !this.saveFunction) return;

        try {
            this.indicator.style.background = 'var(--color-info-light, #dbeafe)';
            this.indicator.style.color = 'var(--color-info, #3b82f6)';
            this.indicator.querySelector('.autosave-text').textContent = 'Saving...';
            this.indicator.querySelector('i').className = 'fa-solid fa-spinner fa-spin';

            await this.saveFunction();

            this.isDirty = false;
            this.indicator.style.background = 'var(--color-success-light, #d1fae5)';
            this.indicator.style.color = 'var(--color-success, #10b981)';
            this.indicator.querySelector('.autosave-text').textContent = 'Saved';
            this.indicator.querySelector('i').className = 'fa-solid fa-circle-check';

            setTimeout(() => this.hideIndicator(), 2000);
        } catch (error) {
            console.error('Auto-save failed:', error);
            this.indicator.style.background = 'var(--color-danger-light, #fee2e2)';
            this.indicator.style.color = 'var(--color-danger, #ef4444)';
            this.indicator.querySelector('.autosave-text').textContent = 'Save failed';
            this.indicator.querySelector('i').className = 'fa-solid fa-circle-exclamation';
            Toast.error('Auto-save failed. Please save manually.');
        }
    },

    /**
     * Show the save indicator
     */
    showIndicator() {
        if (this.indicator) {
            this.indicator.style.display = 'flex';
            this.indicator.classList.remove('hidden');
        }
    },

    /**
     * Hide the save indicator
     */
    hideIndicator() {
        if (this.indicator) {
            this.indicator.style.display = 'none';
            this.indicator.classList.add('hidden');
        }
    },

    /**
     * Force save immediately
     */
    forceSave() {
        clearTimeout(this.saveTimeout);
        return this.save();
    }
};

// Make AutoSave globally available
window.AutoSave = AutoSave;


/* =============================================================================
   FORM VALIDATOR
   ========================================================================== */

const FormValidator = {
    rules: {
        required: (value) => value.trim() !== '',
        minLength: (value, min) => value.length >= min,
        maxLength: (value, max) => value.length <= max,
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        url: (value) => {
            try {
                new URL(value.startsWith('http') ? value : 'https://' + value);
                return true;
            } catch {
                return false;
            }
        },
        number: (value) => !isNaN(parseFloat(value)) && isFinite(value),
        pattern: (value, pattern) => new RegExp(pattern).test(value)
    },

    messages: {
        required: 'This field is required',
        minLength: 'Must be at least {min} characters',
        maxLength: 'Must be no more than {max} characters',
        email: 'Please enter a valid email address',
        url: 'Please enter a valid URL',
        number: 'Please enter a valid number',
        pattern: 'Invalid format'
    },

    /**
     * Validate a single field
     * @param {HTMLInputElement} input - The input element
     * @param {Object} rules - Validation rules
     * @returns {boolean} Whether the field is valid
     */
    validateField(input, rules) {
        const value = input.value;

        for (const [rule, param] of Object.entries(rules)) {
            if (!this.rules[rule](value, param)) {
                const message = this.messages[rule].replace(`{${rule}}`, param);
                this.showError(input, message);
                input.classList.add('error');
                input.classList.remove('success');
                return false;
            }
        }

        this.clearError(input);
        input.classList.remove('error');
        input.classList.add('success');
        return true;
    },

    /**
     * Show error message for a field
     * @param {HTMLInputElement} input - The input element
     * @param {string} message - Error message
     */
    showError(input, message) {
        let errorEl = input.parentElement.querySelector('.form-error');

        if (!errorEl) {
            errorEl = document.createElement('div');
            errorEl.className = 'form-error';
            input.parentElement.appendChild(errorEl);
        }

        errorEl.textContent = message;
        errorEl.style.display = 'block';
    },

    /**
     * Clear error message for a field
     * @param {HTMLInputElement} input - The input element
     */
    clearError(input) {
        const errorEl = input.parentElement.querySelector('.form-error');
        if (errorEl) {
            errorEl.style.display = 'none';
        }
    },

    /**
     * Attach validator to a form
     * @param {HTMLFormElement} form - The form element
     * @param {Object} validationRules - Rules for each field
     */
    attachTo(form, validationRules) {
        const inputs = form.querySelectorAll('input, textarea, select');

        inputs.forEach(input => {
            const rules = validationRules[input.name];
            if (!rules) return;

            // Validate on blur
            input.addEventListener('blur', () => {
                this.validateField(input, rules);
            });

            // Clear error on input
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.validateField(input, rules);
                }
            });
        });

        // Validate on submit
        form.addEventListener('submit', (e) => {
            let isValid = true;

            inputs.forEach(input => {
                const rules = validationRules[input.name];
                if (rules && !this.validateField(input, rules)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                e.preventDefault();
                Toast.error('Please fix the errors before submitting');
            }
        });
    }
};

// Make FormValidator globally available
window.FormValidator = FormValidator;


/* =============================================================================
   KEYBOARD NAVIGATION
   ========================================================================== */

const KeyboardNav = {
    shortcuts: new Map(),

    /**
     * Initialize keyboard navigation
     */
    init() {
        document.addEventListener('keydown', (e) => {
            // Skip if user is typing in input
            if (e.target.matches('input, textarea, select, [contenteditable]')) {
                return;
            }

            const key = this.getKeyCombo(e);
            const handler = this.shortcuts.get(key);

            if (handler) {
                e.preventDefault();
                handler(e);
            }
        });

        // ESC always closes modals/overlays
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeTopModal();
            }
        });

        console.log('Keyboard navigation initialized');
    },

    /**
     * Get key combination string
     * @param {KeyboardEvent} e - Keyboard event
     * @returns {string} Key combination (e.g., 'Ctrl+S')
     */
    getKeyCombo(e) {
        const parts = [];
        if (e.ctrlKey || e.metaKey) parts.push('Ctrl');
        if (e.shiftKey) parts.push('Shift');
        if (e.altKey) parts.push('Alt');
        parts.push(e.key);
        return parts.join('+');
    },

    /**
     * Register a keyboard shortcut
     * @param {string} keyCombo - Key combination (e.g., 'Ctrl+s')
     * @param {Function} handler - Handler function
     * @param {string} description - Description of the shortcut
     */
    register(keyCombo, handler, description = '') {
        handler.description = description;
        this.shortcuts.set(keyCombo, handler);
    },

    /**
     * Close the top-most modal or overlay
     */
    closeTopModal() {
        // Close workflow modal
        const workflowModal = document.querySelector('.workflow-modal-backdrop.active');
        if (workflowModal) {
            workflowModal.classList.remove('active');
            return;
        }

        // Close board modal
        const boardModal = document.querySelector('.modal-backdrop.active');
        if (boardModal) {
            boardModal.classList.remove('active');
            return;
        }

        // Close dynamic list overlay
        const dynamicList = document.getElementById('dynamic-list-overlay');
        if (dynamicList?.classList.contains('active')) {
            if (typeof PPM !== 'undefined' && PPM.toggleDynamicList) {
                PPM.toggleDynamicList();
            } else {
                dynamicList.classList.remove('active');
            }
            return;
        }
    },

    /**
     * Show all registered shortcuts
     */
    showHelp() {
        const shortcuts = Array.from(this.shortcuts.entries())
            .map(([key, handler]) => ({
                key,
                description: handler.description || 'No description'
            }));

        console.table(shortcuts);
        Toast.info('Keyboard shortcuts logged to console. Press F12 to view.');
    }
};

// Make KeyboardNav globally available
window.KeyboardNav = KeyboardNav;


/* =============================================================================
   FOCUS TRAP (for modals and dialogs)
   ========================================================================== */

class FocusTrap {
    constructor(element) {
        this.element = element;
        this.focusableElements = null;
        this.firstFocusable = null;
        this.lastFocusable = null;
        this.previousFocus = null;
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    activate() {
        // Store currently focused element
        this.previousFocus = document.activeElement;

        // Get all focusable elements
        this.focusableElements = this.element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        this.firstFocusable = this.focusableElements[0];
        this.lastFocusable = this.focusableElements[this.focusableElements.length - 1];

        // Focus first element
        this.firstFocusable?.focus();

        // Add trap
        this.element.addEventListener('keydown', this.handleKeyDown);
    }

    deactivate() {
        this.element.removeEventListener('keydown', this.handleKeyDown);

        // Return focus to previously focused element
        this.previousFocus?.focus();
    }

    handleKeyDown(e) {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
            // Shift + Tab (backwards)
            if (document.activeElement === this.firstFocusable) {
                e.preventDefault();
                this.lastFocusable.focus();
            }
        } else {
            // Tab (forwards)
            if (document.activeElement === this.lastFocusable) {
                e.preventDefault();
                this.firstFocusable.focus();
            }
        }
    }
}

// Make FocusTrap globally available
window.FocusTrap = FocusTrap;


/* =============================================================================
   UTILITY FUNCTIONS
   ========================================================================== */

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in ms
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Make utilities globally available
window.debounce = debounce;
window.throttle = throttle;


/* =============================================================================
   INITIALIZATION
   ========================================================================== */

// Initialize keyboard navigation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        KeyboardNav.init();

        // Register common shortcuts
        KeyboardNav.register('Ctrl+s', (e) => {
            const saveBtn = document.querySelector('[data-action="save"], #save-structure-btn, #save-execution-btn');
            if (saveBtn) {
                saveBtn.click();
                Toast.success('Saved (Ctrl+S)');
            }
        }, 'Save current work');

        KeyboardNav.register('?', () => {
            KeyboardNav.showHelp();
        }, 'Show keyboard shortcuts');
    });
} else {
    KeyboardNav.init();

    // Register common shortcuts
    KeyboardNav.register('Ctrl+s', (e) => {
        const saveBtn = document.querySelector('[data-action="save"], #save-structure-btn, #save-execution-btn');
        if (saveBtn) {
            saveBtn.click();
            Toast.success('Saved (Ctrl+S)');
        }
    }, 'Save current work');

    KeyboardNav.register('?', () => {
        KeyboardNav.showHelp();
    }, 'Show keyboard shortcuts');
}

console.log('Newflows Shared Components v8.0 loaded successfully');
