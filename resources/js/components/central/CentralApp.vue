<template>
  <div id="app">
    <loading ref="loading" />
    <transition name="page" mode="out-in">
      <component :is="layout" v-if="layout" />
    </transition>
  </div>
</template>

<script>
import Loading from './../Loading'

// Load layout components dynamically.
const requireContext = require.context('~/layouts', false, /.*\.vue$/)

const layouts = requireContext
  .keys()
  .map((file) => [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)])
  .reduce((components, [name, component]) => {
    components[name] = component.default || component
    return components
  }, {})

export default {
  el: '#app',

  components: {
    Loading,
  },

  data: () => ({
    layout: null,
    defaultLayout: 'default',
  }),

  metaInfo() {
    const { appName } = window.config

    return {
      title: appName,
      titleTemplate: `%s | ${appName}`,
    }
  },

  mounted() {
    this.$loading = this.$refs.loading
    this.getSettings()
    
    // Simple RTL initialization
    this.initializeRTLMode()
  },

  methods: {
    // Simple RTL initialization
    initializeRTLMode() {
      console.log('CentralApp: Initializing RTL mode...')
      
      // Get current locale from store if available
      let currentLocale = 'en'
      
      // Try to get locale from store, fallback to config
      if (this.$store && this.$store.getters['lang/locale']) {
        currentLocale = this.$store.getters['lang/locale']
      } else if (window.config && window.config.locale) {
        currentLocale = window.config.locale
      }
      
      console.log('CentralApp: Current locale from store/config:', currentLocale)
      
      // Apply RTL mode directly
      this.applyRTLMode(currentLocale)
      
      // Listen for locale changes from store if available
      if (this.$store) {
        this.$store.watch(
          (state) => state.lang.locale,
          (newLocale) => {
            console.log('CentralApp: Locale changed in store:', newLocale)
            if (newLocale) {
              this.applyRTLMode(newLocale)
            }
          }
        )
      }
    },

    // Use global RTL manager if available, otherwise fallback
    applyRTLMode(locale) {
      if (window.RTLManager) {
        window.RTLManager.applyRTLMode(locale)
      } else {
        // Fallback implementation
        const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'ku', 'yi']
        const isRTL = rtlLanguages.includes(locale.toLowerCase())
        
        // Update document attributes
        document.documentElement.setAttribute('lang', locale)
        document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
        document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
        
        // Update CSS classes
        if (isRTL) {
          document.body.classList.add('rtl')
          document.body.classList.remove('ltr')
        } else {
          document.body.classList.add('ltr')
          document.body.classList.remove('rtl')
        }
        
        // Store in localStorage
        localStorage.setItem('current_locale', locale)
        localStorage.setItem('rtl_mode', isRTL.toString())
        
        console.log('CentralApp: Applied RTL mode (fallback) - Locale:', locale, 'RTL:', isRTL)
      }
    },

    // get settings
    async getSettings() {
      await this.$store.dispatch('operations/fetchSettingData')
    },

    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    setLayout(layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout
      }

      this.layout = layouts[layout]
    },
  },
}
</script>
