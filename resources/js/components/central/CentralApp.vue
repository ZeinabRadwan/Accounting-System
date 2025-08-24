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
      titleTemplate: `%s | ${appName}`,
    }
  },

  mounted() {
    this.$loading = this.$refs.loading
    this.getSettings()
    
    // Initialize RTL mode
    this.initializeRTLMode()
  },

  methods: {
    // Initialize RTL mode
    initializeRTLMode() {
      // Get current locale from store if available
      let currentLocale = 'en'
      
      // Try to get locale from store, fallback to config
      if (this.$store && this.$store.getters['lang/locale']) {
        currentLocale = this.$store.getters['lang/locale']
      } else if (window.config && window.config.locale) {
        currentLocale = window.config.locale
      }
      
      // Initialize RTL service with current locale
      rtlService.setRTLModeByLocale(currentLocale)
      
      // Listen for locale changes from store if available
      if (this.$store) {
        this.$store.watch(
          (state) => state.lang.locale,
          (newLocale) => {
            if (newLocale) {
              rtlService.setRTLModeByLocale(newLocale)
            }
          }
        )
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
