/**
 * Global RTL Mixin
 * This mixin automatically handles RTL changes for all Vue components
 */

export default {
  data() {
    return {
      currentLocale: 'en',
      isRTL: false
    }
  },

  created() {
    // Initialize RTL state
    this.updateRTLState()
    
    // Listen for RTL changes
    window.addEventListener('rtl-forced', this.handleRTLChange)
    window.addEventListener('locale-changed', this.handleLocaleChange)
  },

  beforeDestroy() {
    // Clean up event listeners
    window.removeEventListener('rtl-forced', this.handleRTLChange)
    window.removeEventListener('locale-changed', this.handleLocaleChange)
  },

  methods: {
    // Update RTL state from localStorage or store
    updateRTLState() {
      const storedLocale = localStorage.getItem('current_locale')
      const storedRTL = localStorage.getItem('rtl_mode')
      
      if (storedLocale) {
        this.currentLocale = storedLocale
      } else if (this.$store && this.$store.getters['lang/locale']) {
        this.currentLocale = this.$store.getters['lang/locale']
      } else if (window.config && window.config.locale) {
        this.currentLocale = window.config.locale
      }
      
      if (storedRTL !== null) {
        this.isRTL = storedRTL === 'true'
      } else {
        this.isRTL = this.isRTLLocale(this.currentLocale)
      }
    },

    // Check if a locale is RTL
    isRTLLocale(locale) {
      const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'ku', 'yi']
      return rtlLanguages.includes(locale.toLowerCase())
    },

    // Handle RTL forced events
    handleRTLChange(event) {
      console.log('GlobalRTLMixin: RTL forced event received:', event.detail)
      const { locale, isRTL } = event.detail
      
      this.currentLocale = locale
      this.isRTL = isRTL
      
      // Force re-render this component
      this.$forceUpdate()
    },

    // Handle locale change events
    handleLocaleChange(event) {
      console.log('GlobalRTLMixin: Locale change event received:', event.detail)
      const { locale, isRTL } = event.detail
      
      this.currentLocale = locale
      this.isRTL = isRTL
      
      // Force re-render this component
      this.$forceUpdate()
    }
  }
}
