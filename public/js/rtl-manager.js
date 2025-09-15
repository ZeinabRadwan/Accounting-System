/**
 * Global RTL Manager - Works independently of Vue.js
 * This script ensures RTL mode persists across all page navigations
 */

(function() {
    'use strict';
    
    // RTL languages list
    const RTL_LANGUAGES = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'ku', 'yi'];
    
    // Check if a locale is RTL
    function isRTLLocale(locale) {
        return RTL_LANGUAGES.includes(locale.toLowerCase());
    }
    
    // Apply RTL mode to the document
    function applyRTLMode(locale) {
        if (!locale) return;
        
        const isRTL = isRTLLocale(locale);
        
        console.log('RTL Manager: Applying RTL mode - Locale:', locale, 'RTL:', isRTL);
        
        // Update document attributes
        document.documentElement.setAttribute('lang', locale);
        document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
        
        // Update body attributes
        if (document.body) {
            document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
            
            // Update CSS classes
            if (isRTL) {
                document.body.classList.add('rtl');
                document.body.classList.remove('ltr');
            } else {
                document.body.classList.add('ltr');
                document.body.classList.remove('rtl');
            }
        }
        
        // Store in localStorage
        localStorage.setItem('current_locale', locale);
        localStorage.setItem('rtl_mode', isRTL.toString());
        
        // Dispatch custom event for other scripts to listen
        window.dispatchEvent(new CustomEvent('rtl-changed', {
            detail: { locale: locale, isRTL: isRTL }
        }));
    }
    
    // Get current locale from various sources
    function getCurrentLocale() {
        // 1. Check localStorage first
        const storedLocale = localStorage.getItem('current_locale');
        if (storedLocale) {
            return storedLocale;
        }
        
        // 2. Check window.config
        if (window.config && window.config.locale) {
            return window.config.locale;
        }
        
        // 3. Check document lang attribute
        const docLang = document.documentElement.getAttribute('lang');
        if (docLang) {
            return docLang;
        }
        
        // 4. Default to English
        return 'en';
    }
    
    // Initialize RTL mode
    function initializeRTL() {
        console.log('RTL Manager: Initializing...');
        
        const locale = getCurrentLocale();
        applyRTLMode(locale);
        
        // Apply RTL mode multiple times to ensure it sticks
        setTimeout(() => {
            const currentLocale = getCurrentLocale();
            applyRTLMode(currentLocale);
        }, 50);
        
        setTimeout(() => {
            const currentLocale = getCurrentLocale();
            applyRTLMode(currentLocale);
        }, 200);
        
        setTimeout(() => {
            const currentLocale = getCurrentLocale();
            applyRTLMode(currentLocale);
        }, 500);
    }
    
    // Listen for storage changes (cross-tab sync)
    window.addEventListener('storage', function(e) {
        if (e.key === 'current_locale' || e.key === 'rtl_mode') {
            console.log('RTL Manager: Storage changed, re-applying RTL mode');
            const locale = getCurrentLocale();
            applyRTLMode(locale);
        }
    });
    
    // Listen for page visibility changes
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            console.log('RTL Manager: Page visible, re-applying RTL mode');
            const locale = getCurrentLocale();
            applyRTLMode(locale);
        }
    });
    
    // Listen for focus events
    window.addEventListener('focus', function() {
        console.log('RTL Manager: Window focused, re-applying RTL mode');
        const locale = getCurrentLocale();
        applyRTLMode(locale);
    });
    
    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', function() {
        console.log('RTL Manager: Popstate event, re-applying RTL mode');
        setTimeout(() => {
            const locale = getCurrentLocale();
            applyRTLMode(locale);
        }, 100);
    });
    
    // Override pushState and replaceState to catch programmatic navigation
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = function() {
        originalPushState.apply(history, arguments);
        setTimeout(() => {
            const locale = getCurrentLocale();
            applyRTLMode(locale);
        }, 100);
    };
    
    history.replaceState = function() {
        originalReplaceState.apply(history, arguments);
        setTimeout(() => {
            const locale = getCurrentLocale();
            applyRTLMode(locale);
        }, 100);
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeRTL);
    } else {
        initializeRTL();
    }
    
    // Expose functions globally for debugging
    window.RTLManager = {
        applyRTLMode: applyRTLMode,
        getCurrentLocale: getCurrentLocale,
        isRTLLocale: isRTLLocale
    };
    
    console.log('RTL Manager: Loaded and initialized');
})();
