class RTLService {
  constructor() {
    this.rtlLocales = ['ar', 'fa', 'he', 'ur', 'ku', 'ps', 'sd', 'yi'];
    this.isRTL = false;
    this.currentLocale = 'en';
  }

  /**
   * Check if a locale is RTL
   * @param {string} locale - The locale to check
   * @returns {boolean} - True if RTL, false otherwise
   */
  isRTLLocale(locale) {
    return this.rtlLocales.includes(locale);
  }

  /**
   * Set RTL mode for the application
   * @param {string} locale - The locale to set
   */
  setRTLMode(locale) {
    this.currentLocale = locale;
    this.isRTL = this.isRTLLocale(locale);
    
    // Set direction attribute on html and body elements
    const direction = this.isRTL ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
    document.body.setAttribute('dir', direction);
    
    // Add/remove RTL classes
    if (this.isRTL) {
      document.documentElement.classList.add('rtl');
      document.body.classList.add('rtl');
      document.documentElement.classList.remove('ltr');
      document.body.classList.remove('ltr');
    } else {
      document.documentElement.classList.add('ltr');
      document.body.classList.add('ltr');
      document.documentElement.classList.remove('rtl');
      document.body.classList.remove('rtl');
    }

    // Update CSS custom properties for RTL support
    this.updateCSSVariables();
    
    // Emit custom event for components to react to RTL changes
    window.dispatchEvent(new CustomEvent('rtl-changed', {
      detail: { isRTL: this.isRTL, locale: locale }
    }));
    
    // Refresh iziToast configuration if available
    if (window.toast && window.toast.refreshRTL) {
      window.toast.refreshRTL()
    }

    // Store RTL preference in localStorage
    localStorage.setItem('rtl-mode', this.isRTL);
    localStorage.setItem('current-locale', locale);
  }

  /**
   * Initialize RTL mode from stored preferences
   */
  initializeRTLMode() {
    const storedLocale = localStorage.getItem('current-locale');
    const storedRTL = localStorage.getItem('rtl-mode');
    
    if (storedLocale && storedRTL !== null) {
      this.setRTLMode(storedLocale);
    }
  }

  /**
   * Update CSS custom properties for RTL support
   */
  updateCSSVariables() {
    const root = document.documentElement;
    
    if (this.isRTL) {
      root.style.setProperty('--text-align', 'right');
      root.style.setProperty('--float-start', 'right');
      root.style.setProperty('--float-end', 'left');
      root.style.setProperty('--margin-start', 'margin-right');
      root.style.setProperty('--margin-end', 'margin-left');
      root.style.setProperty('--padding-start', 'padding-right');
      root.style.setProperty('--padding-end', 'padding-left');
      root.style.setProperty('--border-start', 'border-right');
      root.style.setProperty('--border-end', 'border-left');
    } else {
      root.style.setProperty('--text-align', 'left');
      root.style.setProperty('--float-start', 'left');
      root.style.setProperty('--float-end', 'right');
      root.style.setProperty('--margin-start', 'margin-left');
      root.style.setProperty('--margin-end', 'margin-right');
      root.style.setProperty('--padding-start', 'padding-left');
      root.style.setProperty('--padding-end', 'padding-right');
      root.style.setProperty('--border-start', 'border-left');
      root.style.setProperty('--border-end', 'border-right');
    }
  }

  /**
   * Get current RTL status
   * @returns {boolean} - True if RTL mode is active
   */
  getRTLStatus() {
    return this.isRTL;
  }

  /**
   * Get current locale
   * @returns {string} - Current locale
   */
  getCurrentLocale() {
    return this.currentLocale;
  }

  /**
   * Reset to default LTR mode
   */
  resetToLTR() {
    this.setRTLMode('en');
  }
}

// Create singleton instance
const rtlService = new RTLService();

export default rtlService;
