import rtlDaterangepickerDirective from '~/directives/rtlDaterangepicker'
import rtlDaterangepickerMixin from '~/mixins/rtlDaterangepickerMixin'

/**
 * RTL DateRangePicker Plugin
 * Automatically applies RTL functionality to all daterangepicker components
 */
export default {
  install(Vue, options = {}) {
    // Register the directive globally
    Vue.directive('rtl-daterangepicker', rtlDaterangepickerDirective)
    
    // Register the mixin globally
    Vue.mixin(rtlDaterangepickerMixin)
    
    // Add a global method to manually apply RTL to daterangepicker
    Vue.prototype.$applyRTLToDaterangepicker = function() {
      const daterangepicker = document.querySelector('.daterangepicker')
      if (daterangepicker) {
        // Force RTL classes and attributes
        daterangepicker.classList.add('rtl')
        daterangepicker.classList.remove('ltr')
        daterangepicker.setAttribute('dir', 'rtl')
        daterangepicker.style.direction = 'rtl'
        daterangepicker.style.textAlign = 'right'
        
        // Update calendar positioning
        const leftCalendar = daterangepicker.querySelector('.drp-calendar.left')
        const rightCalendar = daterangepicker.querySelector('.drp-calendar.right')
        
        if (leftCalendar) {
          leftCalendar.style.float = 'right'
          leftCalendar.style.clear = 'right'
        }
        
        if (rightCalendar) {
          rightCalendar.style.float = 'left'
        }
        
        // Update ranges positioning
        const ranges = daterangepicker.querySelector('.ranges')
        if (ranges) {
          ranges.style.textAlign = 'right'
        }
        
        // Update buttons positioning
        const buttons = daterangepicker.querySelector('.drp-buttons')
        if (buttons) {
          buttons.style.textAlign = 'left'
        }
      }
    }
    
    // Add a global method to check if RTL is enabled
    Vue.prototype.$isRTL = function() {
      return document.documentElement.getAttribute('dir') === 'rtl'
    }
    
    // Add a global method to toggle RTL mode
    Vue.prototype.$toggleRTL = function() {
      const isRTL = this.$isRTL()
      const newDir = isRTL ? 'ltr' : 'rtl'
      document.documentElement.setAttribute('dir', newDir)
      
      // Dispatch RTL change event
      window.dispatchEvent(new CustomEvent('rtl-changed', {
        detail: { 
          isRTL: !isRTL,
          locale: document.documentElement.getAttribute('lang') || 'en'
        }
      }))
      
      return !isRTL
    }
    
    console.log('RTL DateRangePicker Plugin installed successfully')
  }
}
