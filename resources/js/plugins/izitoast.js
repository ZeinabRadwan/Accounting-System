import Vue from 'vue'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

// Get RTL service to check current RTL status
import rtlService from '~/services/RTLService'

// Enhanced CSS with better styling and positioning
const addCustomCSS = () => {
  const style = document.createElement('style')
  style.textContent = `
    /* Reset and override iziToast default styles */
    .iziToast-container {
      z-index: 999999 !important;
    }
    
    .iziToast {
      border-radius: 12px !important;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12) !important;
      border: none !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
      background: white !important;
      color: #333 !important;
      min-width: 320px !important;
      max-width: 420px !important;
      backdrop-filter: blur(20px) !important;
      -webkit-backdrop-filter: blur(20px) !important;
      border: 1px solid rgba(255, 255, 255, 0.2) !important;
    }

    /* Success toast styling */
    .iziToast.iziToast-success {
      background: linear-gradient(135deg, #10B981, #059669) !important;
      color: white !important;
      border: 1px solid rgba(16, 185, 129, 0.2) !important;
    }

    /* Error toast styling */
    .iziToast.iziToast-error {
      background: linear-gradient(135deg, #EF4444, #DC2626) !important;
      color: white !important;
      border: 1px solid rgba(239, 68, 68, 0.2) !important;
    }

    /* Warning toast styling */
    .iziToast.iziToast-warning {
      background: linear-gradient(135deg, #F59E0B, #D97706) !important;
      color: white !important;
      border: 1px solid rgba(245, 158, 11, 0.2) !important;
    }

    /* Info toast styling */
    .iziToast.iziToast-info {
      background: linear-gradient(135deg, #3B82F6, #2563EB) !important;
      color: white !important;
      border: 1px solid rgba(59, 130, 246, 0.2) !important;
    }

    /* Question toast styling */
    .iziToast.iziToast-question {
      background: linear-gradient(135deg, #8B5CF6, #7C3AED) !important;
      color: white !important;
      border: 1px solid rgba(139, 92, 246, 0.2) !important;
    }

    /* Toast body styling */
    .iziToast-body {
      padding: 20px 24px !important;
      position: relative !important;
    }

    /* Title styling */
    .iziToast-title {
      font-size: 16px !important;
      font-weight: 600 !important;
      margin-bottom: 6px !important;
      line-height: 1.4 !important;
      letter-spacing: -0.025em !important;
    }

    /* Message styling */
    .iziToast-message {
      font-size: 14px !important;
      line-height: 1.5 !important;
      opacity: 0.95 !important;
      font-weight: 400 !important;
    }

    /* Icon styling */
    .iziToast-icon {
      width: 28px !important;
      height: 28px !important;
      margin-right: 16px !important;
      margin-left: 0 !important;
      opacity: 0.9 !important;
    }

    /* Close button styling */
    .iziToast-close {
      width: 24px !important;
      height: 24px !important;
      top: 18px !important;
      right: 18px !important;
      background: rgba(255, 255, 255, 0.15) !important;
      border-radius: 50% !important;
      transition: all 0.2s ease !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      font-size: 16px !important;
      font-weight: bold !important;
    }

    .iziToast-close:hover {
      background: rgba(255, 255, 255, 0.25) !important;
      transform: scale(1.1) !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
    }

    /* Progress bar styling */
    .iziToast-progressbar {
      height: 4px !important;
      background: rgba(255, 255, 255, 0.2) !important;
      border-radius: 0 0 12px 12px !important;
      overflow: hidden !important;
    }

    .iziToast-progressbar > div {
      background: rgba(255, 255, 255, 0.8) !important;
      border-radius: 0 0 12px 12px !important;
      height: 100% !important;
    }

    /* RTL specific adjustments */
    [dir="rtl"] .iziToast .iziToast-icon {
      margin-right: 0 !important;
      margin-left: 16px !important;
    }

    [dir="rtl"] .iziToast .iziToast-close {
      right: auto !important;
      left: 18px !important;
    }

    /* Container positioning - Force proper positioning */
    .iziToast-container.iziToast-topRight {
      top: 20px !important;
      right: 20px !important;
      left: auto !important;
      bottom: auto !important;
    }

    .iziToast-container.iziToast-topLeft {
      top: 20px !important;
      left: 20px !important;
      right: auto !important;
      bottom: auto !important;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
      .iziToast {
        margin: 10px !important;
        max-width: calc(100vw - 20px) !important;
        min-width: auto !important;
      }
      
      .iziToast-body {
        padding: 16px 20px !important;
      }
      
      .iziToast-title {
        font-size: 15px !important;
      }
      
      .iziToast-message {
        font-size: 13px !important;
      }
      
      .iziToast-container.iziToast-topRight,
      .iziToast-container.iziToast-topLeft {
        top: 10px !important;
        right: 10px !important;
        left: 10px !important;
      }
    }

    /* Animation improvements */
    .iziToast.iziToast-opening {
      animation: slideInRight 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
    }

    .iziToast.iziToast-closing {
      animation: slideOutRight 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
    }

    [dir="rtl"] .iziToast.iziToast-opening {
      animation: slideInLeft 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
    }

    [dir="rtl"] .iziToast.iziToast-closing {
      animation: slideOutLeft 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
    }

    @keyframes slideInRight {
      from {
        transform: translateX(100%) scale(0.8);
        opacity: 0;
      }
      to {
        transform: translateX(0) scale(1);
        opacity: 1;
      }
    }

    @keyframes slideOutRight {
      from {
        transform: translateX(0) scale(1);
        opacity: 1;
      }
      to {
        transform: translateX(100%) scale(0.8);
        opacity: 0;
      }
    }

    @keyframes slideInLeft {
      from {
        transform: translateX(-100%) scale(0.8);
        opacity: 0;
      }
      to {
        transform: translateX(0) scale(1);
        opacity: 1;
      }
    }

    @keyframes slideOutLeft {
      from {
        transform: translateX(0) scale(1);
        opacity: 1;
      }
      to {
        transform: translateX(-100%) scale(0.8);
        opacity: 0;
      }
    }

    /* Force container positioning */
    body .iziToast-container {
      position: fixed !important;
      z-index: 999999 !important;
    }
  `
  document.head.appendChild(style)
}

// Enhanced configuration function
const configureIziToast = () => {
  try {
    // Get RTL status
    let isRTL = false
    if (rtlService && typeof rtlService.getRTLStatus === 'function') {
      isRTL = rtlService.getRTLStatus()
    } else {
      // Fallback: check document direction
      isRTL = document.documentElement.getAttribute('dir') === 'rtl'
    }
    
    console.log('Configuring iziToast with RTL:', isRTL)
    
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
      transitionIn: isRTL ? 'bounceInLeft' : 'bounceInRight',
      transitionOut: isRTL ? 'fadeOutLeft' : 'fadeOutRight',
      transitionInMobile: 'fadeInUp',
      transitionOutMobile: 'fadeOutDown',
      maxWidth: '420px',
      minWidth: '320px',
      zindex: 999999
    })
    
    return true
  } catch (error) {
    console.error('Error configuring iziToast:', error)
    return false
  }
}

// Initialize configuration and add custom CSS
configureIziToast()
addCustomCSS()

// Enhanced toast creation with proper positioning
const createToast = (options) => {
  try {
    // Get current RTL status
    let isRTL = false
    if (rtlService && typeof rtlService.getRTLStatus === 'function') {
      isRTL = rtlService.getRTLStatus()
    } else {
      isRTL = document.documentElement.getAttribute('dir') === 'rtl'
    }
    
    // Merge options with RTL-specific settings
    const toastOptions = {
      ...options,
      rtl: isRTL,
      position: isRTL ? 'top-left' : 'top-right',
      maxWidth: '420px',
      minWidth: '320px',
      zindex: 999999
    }
    
    console.log('Creating toast with options:', toastOptions)
    
    const toast = iziToast.show(toastOptions)
    
    // Force correct positioning after toast is created
    setTimeout(() => {
      const containers = document.querySelectorAll('.iziToast-container')
      containers.forEach(container => {
        if (isRTL) {
          container.style.left = '20px'
          container.style.right = 'auto'
        } else {
          container.style.right = '20px'
          container.style.left = 'auto'
        }
      })
    }, 50)
    
    return toast
  } catch (error) {
    console.error('Error creating toast:', error)
    return null
  }
}

// Create success toast
const success = (title, message = '', options = {}) => {
  return createToast({
    icon: 'success',
    title: title,
    message: message,
    color: '#10B981',
    ...options
  })
}

// Create error toast
const error = (title, message = '', options = {}) => {
  return createToast({
    icon: 'error',
    title: title,
    message: message,
    color: '#EF4444',
    ...options
  })
}

// Create warning toast
const warning = (title, message = '', options = {}) => {
  return createToast({
    icon: 'warning',
    title: title,
    message: message,
    color: '#F59E0B',
    ...options
  })
}

// Create info toast
const info = (title, message = '', options = {}) => {
  return createToast({
    icon: 'info',
    title: title,
    message: message,
    color: '#3B82F6',
    ...options
  })
}

// Create question toast
const question = (title, message = '', options = {}) => {
  return createToast({
    icon: 'question',
    title: title,
    message: message,
    color: '#8B5CF6',
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
console.log('Enhanced iziToast plugin loaded, window.toast available:', !!window.toast)
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
  console.log('RTL changed, reconfiguring iziToast')
  configureIziToast()
})

// Also listen for DOM changes to ensure positioning
const observer = new MutationObserver(() => {
  const containers = document.querySelectorAll('.iziToast-container')
  if (containers.length > 0) {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
    containers.forEach(container => {
      if (isRTL) {
        container.style.left = '20px'
        container.style.right = 'auto'
      } else {
        container.style.right = '20px'
        container.style.left = 'auto'
      }
    })
  }
})

// Start observing
if (typeof document !== 'undefined') {
  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
}

// Vue Fire custom event to reload data (keeping existing functionality)
window.Fire = new Vue()

export default toast
