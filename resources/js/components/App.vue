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

    if (!store.getters['auth/check'] && store.getters['auth/token']) {
      try {
        this.getTenant()
      } catch (e) {
        console.log('unauthenticated')
      }
    }
  },

  methods: {
    // Initialize RTL mode
    initializeRTLMode() {
      // Get current locale from store
      const currentLocale = store.getters['lang/locale']
      
      // Initialize RTL service with current locale
      rtlService.setRTLMode(currentLocale)
      
      // Listen for locale changes from store
      this.$store.watch(
        (state) => state.lang.locale,
        (newLocale) => {
          if (newLocale) {
            rtlService.setRTLMode(newLocale)
          }
        }
      )
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
