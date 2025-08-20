import rtlService from '~/services/RTLService'

export default {
  data() {
    return {
      isRTL: false,
      currentLocale: 'en'
    }
  },

  computed: {
    /**
     * Get RTL-aware CSS classes
     */
    rtlClasses() {
      return {
        'rtl': this.isRTL,
        'ltr': !this.isRTL,
        'text-right': this.isRTL,
        'text-left': !this.isRTL,
        'float-right': this.isRTL,
        'float-left': !this.isRTL
      }
    },

    /**
     * Get RTL-aware text alignment
     */
    textAlign() {
      return this.isRTL ? 'right' : 'left'
    },

    /**
     * Get RTL-aware float direction
     */
    floatDirection() {
      return this.isRTL ? 'right' : 'left'
    }
  },

  mounted() {
    // Initialize RTL status
    this.updateRTLStatus()
    
    // Listen for RTL changes
    window.addEventListener('rtl-changed', this.handleRTLChange)
  },

  beforeDestroy() {
    // Clean up event listener
    window.removeEventListener('rtl-changed', this.handleRTLChange)
  },

  methods: {
    /**
     * Update RTL status from service
     */
    updateRTLStatus() {
      this.isRTL = rtlService.getRTLStatus()
      this.currentLocale = rtlService.getCurrentLocale()
    },

    /**
     * Handle RTL change events
     */
    handleRTLChange(event) {
      this.isRTL = event.detail.isRTL
      this.currentLocale = event.detail.locale
      this.$forceUpdate() // Force component re-render
    },

    /**
     * Set RTL mode for a specific locale
     */
    setRTLMode(locale) {
      rtlService.setRTLMode(locale)
    },

    /**
     * Check if current locale is RTL
     */
    isCurrentLocaleRTL() {
      return rtlService.isRTLLocale(this.currentLocale)
    },

    /**
     * Get RTL-aware margin/padding classes
     */
    getRTLSpacingClasses(baseClass, size) {
      if (this.isRTL) {
        return {
          [`${baseClass}-right-${size}`]: true,
          [`${baseClass}-left-${size}`]: false
        }
      } else {
        return {
          [`${baseClass}-left-${size}`]: true,
          [`${baseClass}-right-${size}`]: false
        }
      }
    },

    /**
     * Get RTL-aware border classes
     */
    getRTLBorderClasses(baseClass, side) {
      if (this.isRTL) {
        const rtlSideMap = {
          'left': 'right',
          'right': 'left',
          'start': 'end',
          'end': 'start'
        }
        return {
          [`${baseClass}-${rtlSideMap[side] || side}`]: true
        }
      } else {
        return {
          [`${baseClass}-${side}`]: true
        }
      }
    }
  }
}
