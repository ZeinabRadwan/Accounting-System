import rtlService from '~/services/RTLService'

/**
 * RTL DateRangePicker Directive
 * Automatically applies RTL classes and attributes to daterangepicker components
 */
export default {
  bind(el, binding, vnode) {
    // Function to apply RTL to daterangepicker
    const applyRTLToDaterangepicker = () => {
      const isRTL = rtlService.getRTLStatus()
      
      if (isRTL) {
        // Add RTL class to the daterangepicker container
        el.classList.add('rtl-daterangepicker')
        
                 // Find and update the actual daterangepicker element
         const updateDaterangepicker = () => {
           const daterangepicker = document.querySelector('.daterangepicker')
           if (daterangepicker) {
             daterangepicker.classList.add('rtl')
             daterangepicker.classList.remove('ltr')
             daterangepicker.setAttribute('dir', 'rtl')
             
             // Force RTL direction
             daterangepicker.style.direction = 'rtl'
             daterangepicker.style.textAlign = 'right'
             
             // Override Vue scoped positioning styles
             if (daterangepicker.classList.contains('opensleft')) {
               daterangepicker.style.right = 'auto'
               daterangepicker.style.left = '10px'
             } else if (daterangepicker.classList.contains('opensright')) {
               daterangepicker.style.left = 'auto'
               daterangepicker.style.right = '10px'
             } else if (daterangepicker.classList.contains('openscenter')) {
               daterangepicker.style.right = 'auto'
               daterangepicker.style.left = '50%'
               daterangepicker.style.transform = 'translate(-50%)'
             }
             
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
        
        // Apply immediately if daterangepicker is already open
        updateDaterangepicker()
        
        // Listen for daterangepicker opening
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
              mutation.addedNodes.forEach((node) => {
                if (node.classList && node.classList.contains('daterangepicker')) {
                  setTimeout(updateDaterangepicker, 10)
                }
              })
            }
          })
        })
        
        observer.observe(document.body, {
          childList: true,
          subtree: true
        })
        
        // Store observer for cleanup
        el._rtlObserver = observer
      }
    }
    
    // Apply RTL immediately
    applyRTLToDaterangepicker()
    
    // Listen for RTL changes
    const handleRTLChange = () => {
      applyRTLToDaterangepicker()
    }
    
    window.addEventListener('rtl-changed', handleRTLChange)
    
    // Store event listener for cleanup
    el._rtlChangeListener = handleRTLChange
  },
  
  unbind(el) {
    // Clean up observers and listeners
    if (el._rtlObserver) {
      el._rtlObserver.disconnect()
    }
    
    if (el._rtlChangeListener) {
      window.removeEventListener('rtl-changed', el._rtlChangeListener)
    }
    
    // Remove RTL classes
    el.classList.remove('rtl-daterangepicker')
  }
}
