import Vue from 'vue'

console.log('Custom Toast plugin loading...')

// Custom CSS for toast notifications
const addCustomCSS = () => {
  const style = document.createElement('style')
  style.textContent = `
    .custom-toast-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 999999;
      pointer-events: none;
      display: none;
    }

    .custom-toast-container.rtl {
      right: auto;
      left: 20px;
    }

    .custom-toast {
      background: white;
      color: #333;
      padding: 16px 20px;
      margin: 8px 0;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      border-left: 4px solid #ddd;
      min-width: 300px;
      max-width: 400px;
      pointer-events: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      line-height: 1.4;
      position: relative;
      overflow: hidden;
      animation: slideInRight 0.3s ease-out;
    }

    .custom-toast.rtl {
      animation: slideInLeft 0.3s ease-out;
    }

    .custom-toast.success {
      border-left-color: #10B981;
      background: linear-gradient(135deg, #10B981, #059669);
      color: white;
    }

    .custom-toast.error {
      border-left-color: #EF4444;
      background: linear-gradient(135deg, #EF4444, #DC2626);
      color: white;
    }

    .custom-toast.warning {
      border-left-color: #F59E0B;
      background: linear-gradient(135deg, #F59E0B, #D97706);
      color: white;
    }

    .custom-toast.info {
      border-left-color: #3B82F6;
      background: linear-gradient(135deg, #3B82F6, #2563EB);
      color: white;
    }

    .custom-toast.question {
      border-left-color: #8B5CF6;
      background: linear-gradient(135deg, #8B5CF6, #7C3AED);
      color: white;
    }

    .custom-toast-title {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 4px;
      display: block;
    }

    .custom-toast-message {
      opacity: 0.9;
      font-size: 14px;
    }

    .custom-toast-close {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 20px;
      height: 20px;
      background: rgba(255, 255, 255, 0.2);
      border: none;
      border-radius: 50%;
      color: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      line-height: 1;
      transition: all 0.2s ease;
    }

    .custom-toast-close:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
    }

    .custom-toast.rtl .custom-toast-close {
      right: auto;
      left: 8px;
    }

    .custom-toast-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background: rgba(255, 255, 255, 0.3);
      transition: width linear;
    }

    .custom-toast-progress-bar {
      height: 100%;
      background: rgba(255, 255, 255, 0.6);
      width: 100%;
      transition: width linear;
    }

    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideInLeft {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }

    @keyframes slideOutLeft {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(-100%);
        opacity: 0;
      }
    }

    .custom-toast.removing {
      animation: slideOutRight 0.3s ease-in forwards;
    }

    .custom-toast.rtl.removing {
      animation: slideOutLeft 0.3s ease-in forwards;
    }
  `
  document.head.appendChild(style)
}

// Get or create toast container
const getToastContainer = () => {
  let container = document.querySelector('.custom-toast-container')
  if (!container) {
    container = document.createElement('div')
    container.className = 'custom-toast-container'
    document.body.appendChild(container)
  }
  
  // Check RTL and update container class
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
  if (isRTL) {
    container.classList.add('rtl')
  } else {
    container.classList.remove('rtl')
  }
  
  return container
}

// Create toast element
const createToastElement = (type, title, message, duration = 5000) => {
  const toast = document.createElement('div')
  toast.className = `custom-toast ${type}`
  
  // Check RTL and add class
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
  if (isRTL) {
    toast.classList.add('rtl')
  }
  
  // Close button
  const closeBtn = document.createElement('button')
  closeBtn.className = 'custom-toast-close'
  closeBtn.innerHTML = '×'
  closeBtn.onclick = () => removeToast(toast)
  
  // Title
  const titleEl = document.createElement('div')
  titleEl.className = 'custom-toast-title'
  titleEl.textContent = title
  
  // Message
  const messageEl = document.createElement('div')
  messageEl.className = 'custom-toast-message'
  messageEl.textContent = message
  
  // Progress bar
  const progressContainer = document.createElement('div')
  progressContainer.className = 'custom-toast-progress'
  const progressBar = document.createElement('div')
  progressBar.className = 'custom-toast-progress-bar'
  progressContainer.appendChild(progressBar)
  
  // Assemble toast
  toast.appendChild(closeBtn)
  toast.appendChild(titleEl)
  toast.appendChild(messageEl)
  toast.appendChild(progressContainer)
  
  return { toast, progressBar }
}

// Remove toast with animation
const removeToast = (toast) => {
  toast.classList.add('removing')
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast)
      // Hide container if no more toasts
      const container = toast.parentNode
      if (container && container.children.length === 0) {
        container.style.display = 'none'
      }
    }
  }, 300)
}

// Show toast function
const showToast = (type, title, message, options = {}) => {
  const { duration = 5000, ...otherOptions } = options
  
  const container = getToastContainer()
  const { toast, progressBar } = createToastElement(type, title, message, duration)
  
  // Show the container when adding toasts
  container.style.display = 'block'
  
  // Add to container
  container.appendChild(toast)
  
  // Animate progress bar if duration is set
  if (duration > 0) {
    let progress = 100
    const interval = setInterval(() => {
      progress -= 100 / (duration / 50)
      progressBar.style.width = `${Math.max(progress, 0)}%`
      if (progress <= 0) {
        clearInterval(interval)
      }
    }, 50)
    
    // Auto-remove after duration
    setTimeout(() => {
      removeToast(toast)
    }, duration)
  }
  
  return toast
}

// Toast methods
const success = (title, message, options = {}) => {
  return showToast('success', title, message, options)
}

const error = (title, message, options = {}) => {
  return showToast('error', title, message, options)
}

const warning = (title, message, options = {}) => {
  return showToast('warning', title, message, options)
}

const info = (title, message, options = {}) => {
  return showToast('info', title, message, options)
}

const question = (title, message, options = {}) => {
  return showToast('question', title, message, options)
}

const custom = (options) => {
  const { type = 'info', title, message, ...otherOptions } = options
  return showToast(type, title, message, otherOptions)
}

const fire = (options) => {
  if (typeof options === 'string') {
    return info('', options)
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
        return custom(options)
    }
  } else {
    return custom(options)
  }
}

const show = (options) => {
  if (typeof options === 'string') {
    return info('', options)
  }
  return custom(options)
}

// Test function
// const test = () => {
//   console.log('Testing custom toast...')
//   success('Test', 'This is a test toast from custom system!')
//   return true
// }

// RTL refresh function
const refreshRTL = () => {
  console.log('Refreshing RTL for custom toast...')
  const container = getToastContainer()
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
  
  if (isRTL) {
    container.classList.add('rtl')
    container.classList.remove('ltr')
  } else {
    container.classList.remove('rtl')
    container.classList.add('ltr')
  }
  
  // Update existing toasts
  const existingToasts = container.querySelectorAll('.custom-toast')
  existingToasts.forEach(toast => {
    if (isRTL) {
      toast.classList.add('rtl')
      toast.classList.remove('ltr')
    } else {
      toast.classList.remove('rtl')
      toast.classList.add('ltr')
    }
  })
  
  console.log('RTL refreshed for custom toast, isRTL:', isRTL)
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
  show,
  // test,
  refreshRTL
}

// Make toast available globally
window.toast = toast

// Add debugging
console.log('Custom Toast plugin loaded, window.toast available:', !!window.toast)
console.log('Toast methods:', Object.keys(window.toast))

// Ensure toast is available immediately
if (typeof window !== 'undefined') {
  window.toast = toast
  console.log('Toast assigned to window.toast')
}

// Test toast immediately
// setTimeout(() => {
//   console.log('Testing toast after 1 second...')
//   test()
// }, 1000)

// Create Vue plugin
const customToastPlugin = {
  install(Vue, options) {
    console.log('Installing Custom Toast Vue plugin...')
    Vue.prototype.$toast = toast
    Vue.toast = toast
    console.log('Custom Toast Vue plugin installed')
  }
}

// Use the plugin
Vue.use(customToastPlugin)

// Listen for RTL changes
window.addEventListener('rtl-changed', () => {
  console.log('RTL changed, updating toast container...')
  const container = getToastContainer()
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
  if (isRTL) {
    container.classList.add('rtl')
  } else {
    container.classList.remove('rtl')
  }
})

// Vue Fire custom event to reload data (keeping existing functionality)
window.Fire = new Vue()

// Add CSS
addCustomCSS()

export default toast
