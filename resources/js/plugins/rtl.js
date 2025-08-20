import rtlService from '~/services/RTLService'

export default {
  install(Vue, options) {
    // Add RTL service to Vue prototype
    Vue.prototype.$rtl = rtlService
    
    // Add RTL directive
    Vue.directive('rtl', {
      bind(el, binding, vnode) {
        const isRTL = rtlService.getRTLStatus()
        if (isRTL) {
          el.setAttribute('dir', 'rtl')
          el.classList.add('rtl')
        }
      },
      update(el, binding, vnode) {
        const isRTL = rtlService.getRTLStatus()
        if (isRTL) {
          el.setAttribute('dir', 'rtl')
          el.classList.add('rtl')
        } else {
          el.setAttribute('dir', 'ltr')
          el.classList.remove('rtl')
        }
      }
    })
    
    // Add RTL filter
    Vue.filter('rtl', function(value, locale) {
      if (rtlService.isRTLLocale(locale)) {
        return value + ' (RTL)'
      }
      return value
    })
    
    // Add RTL mixin to all components
    Vue.mixin({
      created() {
        // Initialize RTL status for each component
        this.$rtl = rtlService
      },
      mounted() {
        // Listen for RTL changes
        window.addEventListener('rtl-changed', this.handleRTLChange)
      },
      beforeDestroy() {
        // Clean up event listener
        window.removeEventListener('rtl-changed', this.handleRTLChange)
      },
      methods: {
        handleRTLChange(event) {
          // Emit RTL change event to component
          this.$emit('rtl-changed', event.detail)
        }
      }
    })
  }
}
