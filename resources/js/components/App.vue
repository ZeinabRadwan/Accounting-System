<template>
  <div id="app">
    <loading ref="loading" />
    <transition name="page" mode="out-in">
      <component :is="layout" v-if="layout" />
    </transition>
  </div>
</template>

<script>
import Loading from './Loading'
import store from '../store'
import rtlService from '~/services/RTLService'

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
      titleTemplate: `%s · ${appName}`,
    }
  },

  mounted() {
    this.$loading = this.$refs.loading
    this.getSettings()
    
    // Initialize RTL mode
    this.initializeRTLMode()

    // Listen for locale changes from LocaleDropdown
    window.addEventListener('locale-changed', this.handleLocaleChange)

    if (!store.getters['auth/check'] && store.getters['auth/token']) {
      try {
        this.getTenant()
      } catch (e) {
        console.log('unauthenticated')
      }
    }
  },

  beforeDestroy() {
    // Clean up event listener
    window.removeEventListener('locale-changed', this.handleLocaleChange)
  },

  methods: {
    // Initialize RTL mode
    initializeRTLMode() {
      // Get current locale from store
      const currentLocale = store.getters['lang/locale']
      
      // Initialize RTL service with current locale
      rtlService.setRTLModeByLocale(currentLocale)
      
      // Listen for locale changes from store
      this.$store.watch(
        (state) => state.lang.locale,
        (newLocale) => {
          if (newLocale) {
            rtlService.setRTLModeByLocale(newLocale)
          }
        }
      )
    },

    // Handle locale change events from LocaleDropdown
    handleLocaleChange(event) {
      console.log('App: Received locale change event:', event.detail)
      const { locale, isRTL } = event.detail
      
      // Force re-render of all components
      this.$forceUpdate()
      
      // Update RTL service
      rtlService.setRTLModeByLocale(locale)
      
      // Update any components that need to know about locale changes
      this.$nextTick(() => {
        // Trigger a custom event for currency components to update
        window.dispatchEvent(new CustomEvent('currency-update', {
          detail: { locale: locale, isRTL: isRTL }
        }))
      })
    },

    // get settings
    async getSettings() {
      await this.$store.dispatch('operations/fetchSettingData')
    },

    // get settings
    async getTenant() {
      await this.$store.dispatch('operations/fetchTenant')
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
