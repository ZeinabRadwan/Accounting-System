import Vue from 'vue'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

// Add custom CSS for smaller toasts with proper positioning
const addCustomCSS = () => {
  const style = document.createElement('style')
  style.textContent = `
    /* Target ALL possible iziToast elements with maximum specificity */
    .iziToast-container,
    .iziToast-container.iziToast-topRight,
    .iziToast-container.iziToast-topLeft,
    .iziToast-container.iziToast-topCenter,
    .iziToast-container.iziToast-bottomRight,
    .iziToast-container.iziToast-bottomLeft,
    .iziToast-container.iziToast-bottomCenter,
    .iziToast-capsule,
    .iziToast-capsule *,
    .iziToast,
    .iziToast *,
    .iziToast-body,
    .iziToast-texts,
    .iziToast-title,
    .iziToast-message,
    .iziToast-icon,
    .iziToast-close {
      position: static !important;
      z-index: 2147483647 !important;
    }
    
    /* Force the main container to be fixed at the top */
    .iziToast-container,
    .iziToast-container.iziToast-topRight,
    .iziToast-container.iziToast-topLeft,
    .iziToast-container.iziToast-topCenter,
    .iziToast-container.iziToast-bottomRight,
    .iziToast-container.iziToast-bottomLeft,
    .iziToast-container.iziToast-bottomCenter {
      position: fixed !important;
      z-index: 2147483647 !important;
      pointer-events: none !important;
      top: 20px !important;
      left: auto !important;
      right: auto !important;
      bottom: auto !important;
      width: auto !important;
      height: auto !important;
      transform: none !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    
    /* Force top-right positioning */
    .iziToast-container.iziToast-topRight {
      right: 20px !important;
      left: auto !important;
    }
    
    /* Force top-left positioning */
    .iziToast-container.iziToast-topLeft {
      left: 20px !important;
      right: auto !important;
    }
    
    /* Individual toast styling */
    .iziToast,
    .iziToast-capsule {
      font-size: 12px !important;
      padding: 8px 12px !important;
      margin: 5px !important;
      border-radius: 4px !important;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15) !important;
      pointer-events: auto !important;
      max-width: 300px !important;
      min-width: 250px !important;
      z-index: 2147483647 !important;
      position: relative !important;
    }
    
    .iziToast .iziToast-body,
    .iziToast-capsule .iziToast-body {
      padding: 0 !important;
    }
    
    .iziToast .iziToast-texts,
    .iziToast-capsule .iziToast-texts {
      margin: 0 !important;
    }
    
    .iziToast .iziToast-title,
    .iziToast-capsule .iziToast-title {
      font-size: 13px !important;
      font-weight: 600 !important;
      margin-bottom: 2px !important;
    }
    
    .iziToast .iziToast-message,
    .iziToast-capsule .iziToast-message {
      font-size: 11px !important;
      line-height: 1.3 !important;
    }
    
    .iziToast .iziToast-icon,
    .iziToast-capsule .iziToast-icon {
      width: 20px !important;
      height: 20px !important;
      margin-right: 8px !important;
    }
    
    .iziToast .iziToast-close,
    .iziToast-capsule .iziToast-close {
      width: 16px !important;
      height: 16px !important;
      top: 8px !important;
      right: 8px !important;
    }
    
    /* RTL adjustments */
    [dir="rtl"] .iziToast .iziToast-icon,
    [dir="rtl"] .iziToast-capsule .iziToast-icon {
      margin-right: 0 !important;
      margin-left: 8px !important;
    }
    
    [dir="rtl"] .iziToast .iziToast-close,
    [dir="rtl"] .iziToast-capsule .iziToast-close {
      right: auto !important;
      left: 8px !important;
    }
    
    /* Nuclear z-index override for ALL elements */
    .iziToast-container,
    .iziToast-container *,
    .iziToast,
    .iziToast *,
    .iziToast-capsule,
    .iziToast-capsule *,
    .iziToast-container.iziToast-topRight,
    .iziToast-container.iziToast-topLeft,
    .iziToast-container.iziToast-topCenter,
    .iziToast-container.iziToast-bottomRight,
    .iziToast-container.iziToast-bottomLeft,
    .iziToast-container.iziToast-bottomCenter {
      z-index: 2147483647 !important;
    }
    
    /* Override any parent container positioning with maximum specificity */
    body .iziToast-container,
    html .iziToast-container,
    #app .iziToast-container,
    .wrapper .iziToast-container,
    .content-wrapper .iziToast-container,
    .sidebar .iziToast-container,
    body .iziToast-capsule,
    html .iziToast-capsule,
    #app .iziToast-capsule,
    .wrapper .iziToast-capsule,
    .content-wrapper .iziToast-capsule,
    .sidebar .iziToast-capsule {
      position: fixed !important;
      z-index: 2147483647 !important;
      top: 20px !important;
      left: auto !important;
      right: auto !important;
      bottom: auto !important;
      transform: none !important;
    }
    
    /* Force viewport positioning for ALL containers */
    .iziToast-container,
    .iziToast-capsule {
      position: fixed !important;
      top: 20px !important;
      z-index: 2147483647 !important;
      transform: none !important;
      left: auto !important;
      right: auto !important;
      bottom: auto !important;
    }
  `
  document.head.appendChild(style)
}

// Simple configuration with RTL support and bottom positioning
const configureIziToast = () => {
  // Try to get RTL status from existing service or default to false
  let isRTL = false
  try {
    if (window.rtlService && typeof window.rtlService.getRTLStatus === 'function') {
      isRTL = window.rtlService.getRTLStatus()
    }
  } catch (error) {
    // RTL service not available, use default
  }
  
  iziToast.settings({
    position: isRTL ? 'top-left' : 'top-right',
    rtl: isRTL,
    timeout: 50000,
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
    transitionIn: isRTL ? 'bounceInLeft' : 'bounceInRight',
    transitionOut: isRTL ? 'fadeOutLeft' : 'fadeOutRight',
    transitionInMobile: 'fadeInUp',
    transitionOutMobile: 'fadeOutDown',
    // Make toasts smaller
    maxWidth: '300px',
    width: 'auto',
    minWidth: '250px',
    // Ensure highest z-index
    zindex: 2147483647
  })
}

// Initialize configuration and add custom CSS
configureIziToast()
addCustomCSS()

// Nuclear option: Force reapply positioning after a short delay to ensure it takes effect
setTimeout(() => {
  // Target both container types
  const containers = document.querySelectorAll('.iziToast-container, .iziToast-capsule')
  containers.forEach(container => {
    container.style.cssText = `
      position: fixed !important;
      z-index: 2147483647 !important;
      top: 20px !important;
      left: auto !important;
      right: auto !important;
      bottom: auto !important;
      transform: none !important;
      margin: 0 !important;
      padding: 0 !important;
      width: auto !important;
      height: auto !important;
    `
    
    // Set default positioning (top-right for LTR)
    container.style.right = '20px'
    container.style.left = 'auto'
  })
}, 100)

// Continuous monitoring to ensure positioning stays correct
setInterval(() => {
  // Target both container types
  const containers = document.querySelectorAll('.iziToast-container, .iziToast-capsule')
  containers.forEach(container => {
    if (container.style.position !== 'fixed' || container.style.top !== '20px') {
      container.style.position = 'fixed'
      container.style.zIndex = '2147483647'
      container.style.top = '20px'
      container.style.left = 'auto'
      container.style.right = '20px'
      container.style.bottom = 'auto'
      container.style.transform = 'none'
    }
  })
}, 1000)

// Create toast methods with RTL positioning
const createToastWithRTL = (options) => {
  // Try to get RTL status
  let isRTL = false
  try {
    if (window.rtlService && typeof window.rtlService.getRTLStatus === 'function') {
      isRTL = window.rtlService.getRTLStatus()
    }
  } catch (error) {
    // RTL service not available, use default
  }
  
  const toast = iziToast.show({
    ...options,
    position: isRTL ? 'top-left' : 'top-right',
    rtl: isRTL,
    maxWidth: '300px',
    width: 'auto',
    minWidth: '250px'
  })
  
  // Nuclear option: Force correct positioning after toast is created
  setTimeout(() => {
    // Target both container types
    const containers = document.querySelectorAll('.iziToast-container, .iziToast-capsule')
    containers.forEach(container => {
      // Force all positioning properties
      container.style.cssText = `
        position: fixed !important;
        z-index: 2147483647 !important;
        top: 20px !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        transform: none !important;
        margin: 0 !important;
        padding: 0 !important;
        width: auto !important;
        height: auto !important;
      `
      
      // Set specific positioning based on RTL
      if (isRTL) {
        container.style.left = '20px'
        container.style.right = 'auto'
      } else {
        container.style.right = '20px'
        container.style.left = 'auto'
      }
      
      // Force the container to be visible above everything
      container.style.display = 'block'
      container.style.visibility = 'visible'
      container.style.opacity = '1'
    })
  }, 50)
  
  // Additional force after a longer delay
  setTimeout(() => {
    // Target both container types
    const containers = document.querySelectorAll('.iziToast-container, .iziToast-capsule')
    containers.forEach(container => {
      container.style.position = 'fixed'
      container.style.zIndex = '2147483647'
      container.style.top = '20px'
      container.style.left = 'auto'
      container.style.right = 'auto'
      container.style.bottom = 'auto'
      container.style.transform = 'none'
      
      if (isRTL) {
        container.style.left = '20px'
        container.style.right = 'auto'
      } else {
        container.style.right = '20px'
        container.style.left = 'auto'
      }
    })
  }, 200)
  
  return toast
}

const success = (title, message = '', options = {}) => {
  return createToastWithRTL({
    icon: 'success',
    title: title,
    message: message,
    color: '#51A351',
    ...options
  })
}

const error = (title, message = '', options = {}) => {
  return createToastWithRTL({
    icon: 'error',
    title: title,
    message: message,
    color: '#BD362F',
    ...options
  })
}

const warning = (title, message = '', options = {}) => {
  return createToastWithRTL({
    icon: 'warning',
    title: title,
    message: message,
    color: '#F89406',
    ...options
  })
}

const info = (title, message = '', options = {}) => {
  return createToastWithRTL({
    icon: 'info',
    title: title,
    message: message,
    color: '#2F96B4',
    ...options
  })
}

const question = (title, message = '', options = {}) => {
  return createToastWithRTL({
    icon: 'question',
    title: title,
    message: message,
    color: '#87CEEB',
    ...options
  })
}

const custom = (options) => {
  return createToastWithRTL(options)
}

// Create fire method for compatibility
const fire = (options) => {
  if (typeof options === 'string') {
    return createToastWithRTL({ title: options })
  }
  
  if (options.type) {
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
        return createToastWithRTL(options)
    }
  }
  
  if (options.icon) {
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
        return createToastWithRTL(options)
    }
  }
  
  return createToastWithRTL(options)
}

// Create toast object
const toast = {
  success,
  error,
  warning,
  info,
  question,
  custom,
  fire,
  show: createToastWithRTL,
  // Add method to refresh RTL configuration
  refreshRTL: configureIziToast
}

// Make toast available globally
if (typeof window !== 'undefined') {
  window.toast = toast
}

// Create Vue plugin
const iziToastPlugin = {
  install(Vue, options) {
    Vue.prototype.$toast = toast
    Vue.toast = toast
  }
}

// Use the plugin
Vue.use(iziToastPlugin)

// Listen for RTL changes and reconfigure
window.addEventListener('rtl-changed', () => {
  configureIziToast()
})

// Vue Fire custom event to reload data
window.Fire = new Vue()

export default toast
