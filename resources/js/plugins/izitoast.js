import Vue from 'vue'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

// Get RTL service to check current RTL status
import rtlService from '~/services/RTLService'

// Configure iziToast with RTL support
const configureIziToast = () => {
  // Check if RTL service is available
  if (!rtlService || typeof rtlService.getRTLStatus !== 'function') {
    console.warn('RTL service not available, using default LTR configuration')
    return false
  }
  
  const isRTL = rtlService.getRTLStatus()
  
  // Set global defaults
  iziToast.settings({
    position: isRTL ? 'top-left' : 'top-right',
    rtl: isRTL,
    timeout: 5000,
    close: true,
    closeOnEscape: true,
    closeOnClick: true,
    displayMode: 2,
    target: 'body',
    targetFirst: false,
    toastOnce: false,
    drag: true,
    pauseOnHover: true,
    progressBar: true,
    progressBarColor: '',
    progressBarEasing: 'linear',
    overlay: false,
    overlayClose: false,
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    transitionIn: isRTL ? 'bounceInRight' : 'bounceInLeft',
    transitionOut: isRTL ? 'fadeOutLeft' : 'fadeOutRight',
    transitionInMobile: 'fadeInUp',
    transitionOutMobile: 'fadeOutDown',
    onOpening: function () {},
    onOpened: function () {},
    onClosing: function () {},
    onClosed: function () {}
  })
}

// Initialize configuration
configureIziToast()

// Create toast methods with RTL support
const createToast = (options) => {
  // Check if RTL service is available
  let isRTL = false
  try {
    if (rtlService && typeof rtlService.getRTLStatus === 'function') {
      isRTL = rtlService.getRTLStatus()
    }
  } catch (error) {
    console.warn('Error getting RTL status:', error)
  }
  
  // Merge options with RTL-specific settings
  const toastOptions = {
    ...options,
    rtl: isRTL,
    position: isRTL ? 'top-left' : 'top-right',
    // Adjust icon position for RTL
    icon: options.icon || 'info'
  }
  
  return iziToast.show(toastOptions)
}

// Create success toast
const success = (title, message = '', options = {}) => {
  return createToast({
    icon: 'success',
    title: title,
    message: message,
    color: '#51A351',
    ...options
  })
}

// Create error toast
const error = (title, message = '', options = {}) => {
  return createToast({
    icon: 'error',
    title: title,
    message: message,
    color: '#BD362F',
    ...options
  })
}

// Create warning toast
const warning = (title, message = '', options = {}) => {
  return createToast({
    icon: 'warning',
    title: title,
    message: message,
    color: '#F89406',
    ...options
  })
}

// Create info toast
const info = (title, message = '', options = {}) => {
  return createToast({
    icon: 'info',
    title: title,
    message: message,
    color: '#2F96B4',
    ...options
  })
}

// Create question toast
const question = (title, message = '', options = {}) => {
  return createToast({
    icon: 'question',
    title: title,
    message: message,
    color: '#87CEEB',
    ...options
  })
}

// Create custom toast
const custom = (options) => {
  return createToast(options)
}

// Create fire method for compatibility with existing code
const fire = (options) => {
  // Handle different option formats
  let toastOptions = {}
  
  if (typeof options === 'string') {
    // If options is just a string, treat it as title
    toastOptions = { title: options }
  } else if (options.type) {
    // Handle type-based options (success, error, warning, info)
    const type = options.type
    delete options.type
    
    switch (type) {
      case 'success':
        return success(options.title, options.message, options)
      case 'error':
        return error(options.title, options.message, options)
      case 'warning':
        return warning(options.title, options.message, options)
      case 'info':
        return info(options.title, options.message, options)
      default:
        toastOptions = options
    }
  } else if (options.icon) {
    // Handle icon-based options
    const icon = options.icon
    delete options.icon
    
    switch (icon) {
      case 'success':
        return success(options.title, options.message, options)
      case 'error':
        return error(options.title, options.message, options)
      case 'warning':
        return warning(options.title, options.message, options)
      case 'info':
        return info(options.title, options.message, options)
      case 'question':
        return question(options.title, options.message, options)
      default:
        toastOptions = options
    }
  } else {
    toastOptions = options
  }
  
  return createToast(toastOptions)
}

// Create toast object with all methods
const toast = {
  success,
  error,
  warning,
  info,
  question,
  custom,
  fire,
  show: createToast,
  // Add method to refresh RTL configuration
  refreshRTL: configureIziToast
}

// Make toast available globally
window.toast = toast

// Add some debugging
console.log('iziToast plugin loaded, window.toast available:', !!window.toast)
console.log('Toast methods:', Object.keys(window.toast))

// Ensure toast is available immediately
if (typeof window !== 'undefined') {
  window.toast = toast
  console.log('Toast assigned to window.toast')
}

// Create Vue plugin
const iziToastPlugin = {
  install(Vue, options) {
    // Add toast to Vue prototype
    Vue.prototype.$toast = toast
    
    // Add toast to Vue global properties
    Vue.toast = toast
  }
}

// Use the plugin
Vue.use(iziToastPlugin)

// Listen for RTL changes and reconfigure
window.addEventListener('rtl-changed', () => {
  configureIziToast()
})

// Vue Fire custom event to reload data (keeping existing functionality)
window.Fire = new Vue()

export default toast
