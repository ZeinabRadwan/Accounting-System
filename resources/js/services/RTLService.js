class RTLService {
  constructor() {
    this.isRTL = false
    this.currentLocale = 'en'
    this.listeners = []
    this.initializeRTLMode()
  }

  /**
   * Initialize RTL mode
   */
  initializeRTLMode() {
    try {
      console.log('Initializing RTL service...')
      
      // Check if RTL preference is stored
      const storedRTL = localStorage.getItem('rtl_mode')
      const storedLocale = localStorage.getItem('current_locale')
      
      console.log('Stored RTL:', storedRTL, 'Stored Locale:', storedLocale)
      
      // Get document attributes
      const docLang = document.documentElement.getAttribute('lang') || 'en'
      const docDir = document.documentElement.getAttribute('dir')
      
      console.log('Document lang:', docLang, 'Document dir:', docDir)
      
      if (storedRTL !== null && storedLocale) {
        this.isRTL = storedRTL === 'true'
        this.currentLocale = storedLocale
        console.log('Using stored preferences - RTL:', this.isRTL, 'Locale:', this.currentLocale)
      } else {
        // Check document direction if no stored preference
        this.isRTL = this.validateDocumentDirection()
        this.currentLocale = docLang
        console.log('Using document attributes - RTL:', this.isRTL, 'Locale:', this.currentLocale)
      }
      
      // Sync with document if there's a mismatch
      if (this.currentLocale !== docLang) {
        console.log('Syncing with document language:', docLang)
        this.currentLocale = docLang
        this.isRTL = this.getLanguageRTLStatus(docLang)
        localStorage.setItem('current_locale', docLang)
        localStorage.setItem('rtl_mode', this.isRTL.toString())
      }
      
      this.applyRTLMode()
      this.updateCSSVariables()
      
      console.log('RTL Service initialized with RTL:', this.isRTL, 'Locale:', this.currentLocale)
    } catch (error) {
      console.error('Error initializing RTL service:', error)
      this.isRTL = false
      this.currentLocale = 'en'
    }
  }

  /**
   * Validate and correct document direction
   */
  validateDocumentDirection() {
    const docDir = document.documentElement.getAttribute('dir')
    const htmlLang = document.documentElement.getAttribute('lang')
    
    console.log('Document direction validation - dir:', docDir, 'lang:', htmlLang)
    
    // Check if document direction matches language
    if (htmlLang && htmlLang.startsWith('ar')) {
      if (docDir !== 'rtl') {
        document.documentElement.setAttribute('dir', 'rtl')
        console.log('Corrected document direction to RTL for Arabic language')
      }
      return true
    } else if (htmlLang && htmlLang.startsWith('en')) {
      if (docDir !== 'ltr') {
        document.documentElement.setAttribute('dir', 'ltr')
        console.log('Corrected document direction to LTR for English language')
      }
      return false
    }
    
    console.log('No specific language detected, using document direction:', docDir)
    // Default to document direction if language is not specified
    return docDir === 'rtl'
  }

  /**
   * Get current RTL status
   */
  getRTLStatus() {
    return this.isRTL
  }

  /**
   * Get current locale
   */
  getCurrentLocale() {
    return this.currentLocale
  }

  /**
   * Set RTL mode by boolean value
   */
  setRTLMode(isRTL) {
    try {
      this.isRTL = Boolean(isRTL)
      
      // Store preference
      localStorage.setItem('rtl_mode', this.isRTL.toString())
      
      // Apply changes
      this.applyRTLMode()
      this.updateCSSVariables()
      
      // Refresh custom toast configuration
      this.refreshCustomToast()
      
      // Notify listeners
      this.notifyListeners()
      
      console.log('RTL mode set to:', this.isRTL)
      
      return true
    } catch (error) {
      console.error('Error setting RTL mode:', error)
      return false
    }
  }

  /**
   * Set RTL mode based on locale
   */
  setRTLModeByLocale(locale) {
    try {
      console.log('Setting RTL mode for locale:', locale)
      
      if (!locale) {
        console.warn('No locale provided, using current locale')
        locale = this.currentLocale || 'en'
      }
      
      this.currentLocale = locale
      const shouldBeRTL = this.getLanguageRTLStatus(locale)
      
      console.log('Locale:', locale, 'Should be RTL:', shouldBeRTL, 'Current RTL:', this.isRTL)
      
      // Store locale preference
      localStorage.setItem('current_locale', locale)
      
      // Set RTL mode
      this.setRTLMode(shouldBeRTL)
      
      console.log('RTL mode set for locale:', locale, 'RTL:', shouldBeRTL)
      
      return true
    } catch (error) {
      console.error('Error setting RTL mode by locale:', error)
      return false
    }
  }

  /**
   * Toggle RTL mode
   */
  toggleRTLMode() {
    return this.setRTLMode(!this.isRTL)
  }

  /**
   * Apply RTL mode to document
   */
  applyRTLMode() {
    try {
      if (this.isRTL) {
        document.documentElement.setAttribute('dir', 'rtl')
        document.documentElement.setAttribute('lang', this.currentLocale)
        document.body.classList.add('rtl')
        document.body.classList.remove('ltr')
      } else {
        document.documentElement.setAttribute('dir', 'ltr')
        document.documentElement.setAttribute('lang', this.currentLocale)
        document.body.classList.add('ltr')
        document.body.classList.remove('rtl')
      }
      
      // Dispatch custom event for other components
      window.dispatchEvent(new CustomEvent('rtl-changed', {
        detail: { 
          isRTL: this.isRTL,
          locale: this.currentLocale
        }
      }))
      
      console.log('RTL mode applied to document:', this.isRTL ? 'RTL' : 'LTR', 'Locale:', this.currentLocale)
    } catch (error) {
      console.error('Error applying RTL mode:', error)
    }
  }

  /**
   * Update CSS custom properties
   */
  updateCSSVariables() {
    try {
      const root = document.documentElement
      
      if (this.isRTL) {
        root.style.setProperty('--toast-position', 'top-left')
        root.style.setProperty('--toast-margin-start', '20px')
        root.style.setProperty('--toast-margin-end', 'auto')
        root.style.setProperty('--text-align', 'right')
        root.style.setProperty('--float-direction', 'left')
      } else {
        root.style.setProperty('--toast-position', 'top-right')
        root.style.setProperty('--toast-margin-start', 'auto')
        root.style.setProperty('--toast-margin-end', '20px')
        root.style.setProperty('--text-align', 'left')
        root.style.setProperty('--float-direction', 'right')
      }
    } catch (error) {
      console.error('Error updating CSS variables:', error)
    }
  }

  /**
   * Refresh custom toast configuration
   */
  refreshCustomToast() {
    try {
      // Hide toasts with [object Object] content
      this.hideInvalidToasts()
      
      // Try to refresh through window.toast if available
      if (window.toast && typeof window.toast.refreshRTL === 'function') {
        window.toast.refreshRTL()
        console.log('Custom toast refreshed through window.toast.refreshRTL')
      }

      // Force reposition existing toasts
      this.repositionExistingToasts()
      
      // Force container positioning
      this.forceContainerPositioning()
      
    } catch (error) {
      console.warn('Error refreshing custom toast:', error)
    }
  }

  /**
   * Hide toasts with [object Object] content
   */
  hideInvalidToasts() {
    try {
      const containers = document.querySelectorAll('.custom-toast-container')
      containers.forEach(container => {
        const toasts = container.querySelectorAll('.custom-toast')
        toasts.forEach(toast => {
          const messageEl = toast.querySelector('.custom-toast-message')
          const titleEl = toast.querySelector('.custom-toast-title')
          
          if (messageEl && messageEl.textContent === '[object Object]') {
            toast.style.display = 'none'
          }
          
          if (titleEl && titleEl.textContent === '[object Object]') {
            toast.style.display = 'none'
          }
        })
      })
    } catch (error) {
      console.warn('Error hiding invalid toasts:', error)
    }
  }

  /**
   * Reposition existing toasts when RTL changes
   */
  repositionExistingToasts() {
    setTimeout(() => {
      try {
        // Hide toasts with [object Object] content
        this.hideInvalidToasts()
        
        const containers = document.querySelectorAll('.custom-toast-container')
        containers.forEach(container => {
          if (this.isRTL) {
            container.style.left = '20px'
            container.style.right = 'auto'
            container.classList.add('rtl')
            container.classList.remove('ltr')
          } else {
            container.style.right = '20px'
            container.style.left = 'auto'
            container.classList.remove('rtl')
            container.classList.add('ltr')
          }
        })
        
        console.log('Repositioned', containers.length, 'toast containers')
      } catch (error) {
        console.warn('Error repositioning toasts:', error)
      }
    }, 100)
  }

  /**
   * Force container positioning
   */
  forceContainerPositioning() {
    setTimeout(() => {
      try {
        // Hide toasts with [object Object] content
        this.hideInvalidToasts()
        
        const containers = document.querySelectorAll('.custom-toast-container')
        containers.forEach(container => {
          // Force positioning styles
          container.style.position = 'fixed'
          container.style.zIndex = '999999'
          
          if (this.isRTL) {
            container.style.top = '20px'
            container.style.left = '20px'
            container.style.right = 'auto'
            container.style.bottom = 'auto'
          } else {
            container.style.top = '20px'
            container.style.right = '20px'
            container.style.left = 'auto'
            container.style.bottom = 'auto'
          }
        })
        
        console.log('Forced positioning on', containers.length, 'containers')
      } catch (error) {
        console.warn('Error forcing container positioning:', error)
      }
    }, 150)
  }

  /**
   * Add listener for RTL changes
   */
  addListener(callback) {
    if (typeof callback === 'function') {
      this.listeners.push(callback)
    }
  }

  /**
   * Remove listener
   */
  removeListener(callback) {
    const index = this.listeners.indexOf(callback)
    if (index > -1) {
      this.listeners.splice(index, 1)
    }
  }

  /**
   * Notify all listeners
   */
  notifyListeners() {
    this.listeners.forEach(callback => {
      try {
        callback(this.isRTL)
      } catch (error) {
        console.error('Error in RTL listener:', error)
      }
    })
  }

  /**
   * Get language-specific RTL status
   */
  getLanguageRTLStatus(language) {
    const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'ku', 'yi']
    return rtlLanguages.includes(language.toLowerCase())
  }

  /**
   * Check if a locale is RTL (alias for getLanguageRTLStatus for compatibility)
   */
  isRTLLocale(language) {
    return this.getLanguageRTLStatus(language)
  }

  /**
   * Check if current language should be RTL
   */
  shouldBeRTL() {
    const currentLang = document.documentElement.getAttribute('lang') || 'en'
    return this.getLanguageRTLStatus(currentLang)
  }

  /**
   * Auto-correct RTL mode based on language
   */
  autoCorrectRTLMode() {
    const currentLang = document.documentElement.getAttribute('lang') || 'en'
    const shouldBeRTL = this.getLanguageRTLStatus(currentLang)
    
    // Only auto-correct if we don't have stored preferences or if the document lang doesn't match our stored locale
    const storedLocale = localStorage.getItem('current_locale')
    const storedRTL = localStorage.getItem('rtl_mode')
    
    // If we have stored preferences, use them instead of document attributes
    if (storedLocale && storedRTL !== null) {
      console.log('Using stored preferences instead of auto-correcting from document')
      return false
    }
    
    if (this.isRTL !== shouldBeRTL || this.currentLocale !== currentLang) {
      console.log('Auto-correcting RTL mode from', this.isRTL, 'to', shouldBeRTL, 'Locale:', currentLang)
      return this.setRTLModeByLocale(currentLang)
    }
    return false
  }

  /**
   * Force synchronization with current document state
   */
  forceSync() {
    console.log('Force syncing RTL service with current state...')
    
    // Get current document state
    const docLang = document.documentElement.getAttribute('lang') || 'en'
    const docDir = document.documentElement.getAttribute('dir')
    
    // Get stored state
    const storedLocale = localStorage.getItem('current_locale')
    const storedRTL = localStorage.getItem('rtl_mode')
    
    console.log('Document state - lang:', docLang, 'dir:', docDir)
    console.log('Stored state - locale:', storedLocale, 'rtl:', storedRTL)
    console.log('Service state - locale:', this.currentLocale, 'rtl:', this.isRTL)
    
    // Determine which state to use
    let targetLocale = docLang
    let targetRTL = this.getLanguageRTLStatus(docLang)
    
    // If we have stored preferences and they're different from document, use stored
    if (storedLocale && storedRTL !== null && storedLocale !== docLang) {
      console.log('Using stored preferences over document state')
      targetLocale = storedLocale
      targetRTL = storedRTL === 'true'
    }
    
    // Apply the target state
    if (this.currentLocale !== targetLocale || this.isRTL !== targetRTL) {
      console.log('Syncing to - locale:', targetLocale, 'rtl:', targetRTL)
      this.currentLocale = targetLocale
      this.isRTL = targetRTL
      
      // Update localStorage
      localStorage.setItem('current_locale', targetLocale)
      localStorage.setItem('rtl_mode', targetRTL.toString())
      
      // Apply changes
      this.applyRTLMode()
      this.updateCSSVariables()
      
      return true
    }
    
    return false
  }
}

// Create singleton instance
const rtlService = new RTLService()

// Make it available globally
if (typeof window !== 'undefined') {
  window.rtlService = rtlService
}

// Auto-correct on page load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded - Auto-correcting RTL mode')
    rtlService.autoCorrectRTLMode()
  })
  
  // Also listen for page visibility changes to re-sync
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      console.log('Page visible - Force syncing RTL service')
      rtlService.forceSync()
    }
  })
  
  // Listen for storage changes (in case locale is changed in another tab)
  window.addEventListener('storage', (e) => {
    if (e.key === 'current_locale' || e.key === 'rtl_mode') {
      console.log('Storage changed - Force syncing RTL service')
      rtlService.forceSync()
    }
  })
}

export default rtlService
