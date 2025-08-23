class RTLService {
  constructor() {
    this.isRTL = false
    this.listeners = []
    this.initializeRTLMode()
  }

  /**
   * Initialize RTL mode
   */
  initializeRTLMode() {
    try {
      // Check if RTL preference is stored
      const storedRTL = localStorage.getItem('rtl_mode')
      
      if (storedRTL !== null) {
        this.isRTL = storedRTL === 'true'
      } else {
        // Check document direction if no stored preference
        this.isRTL = this.validateDocumentDirection()
      }
      
      this.applyRTLMode()
      this.updateCSSVariables()
      
      console.log('RTL Service initialized with RTL:', this.isRTL)
    } catch (error) {
      console.error('Error initializing RTL service:', error)
      this.isRTL = false
    }
  }

  /**
   * Validate and correct document direction
   */
  validateDocumentDirection() {
    const docDir = document.documentElement.getAttribute('dir')
    const htmlLang = document.documentElement.getAttribute('lang')
    
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
   * Set RTL mode
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
        document.body.classList.add('rtl')
        document.body.classList.remove('ltr')
      } else {
        document.documentElement.setAttribute('dir', 'ltr')
        document.body.classList.add('ltr')
        document.body.classList.remove('rtl')
      }
      
      // Dispatch custom event for other components
      window.dispatchEvent(new CustomEvent('rtl-changed', {
        detail: { isRTL: this.isRTL }
      }))
      
      console.log('RTL mode applied to document:', this.isRTL ? 'RTL' : 'LTR')
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
   * Reposition existing toasts when RTL changes
   */
  repositionExistingToasts() {
    setTimeout(() => {
      try {
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
   * Set RTL mode based on language
   */
  setRTLModeByLanguage(language) {
    const shouldBeRTL = this.getLanguageRTLStatus(language)
    return this.setRTLMode(shouldBeRTL)
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
    const shouldBeRTL = this.shouldBeRTL()
    if (this.isRTL !== shouldBeRTL) {
      console.log('Auto-correcting RTL mode from', this.isRTL, 'to', shouldBeRTL)
      return this.setRTLMode(shouldBeRTL)
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
    rtlService.autoCorrectRTLMode()
  })
}

export default rtlService
