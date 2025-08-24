import rtlService from '~/services/RTLService'

/**
 * RTL DateRangePicker Mixin
 * Provides RTL functionality for daterangepicker components
 */
export default {
  data() {
    return {
      rtlService: null,
      isRTL: false
    }
  },
  
  mounted() {
    this.rtlService = rtlService
    this.isRTL = this.rtlService.getRTLStatus()
    
    // Listen for RTL changes
    window.addEventListener('rtl-changed', this.handleRTLChange)
    
    // Apply RTL to daterangepicker if needed
    this.$nextTick(() => {
      this.applyRTLToDaterangepicker()
    })
  },
  
  beforeDestroy() {
    window.removeEventListener('rtl-changed', this.handleRTLChange)
  },
  
  methods: {
    /**
     * Handle RTL mode changes
     */
    handleRTLChange(event) {
      this.isRTL = event.detail.isRTL
      this.$nextTick(() => {
        this.applyRTLToDaterangepicker()
      })
    },
    
    /**
     * Apply RTL styling to daterangepicker
     */
    applyRTLToDaterangepicker() {
      if (!this.isRTL) return
      
      // Wait for daterangepicker to be available
      this.$nextTick(() => {
        const daterangepicker = document.querySelector('.daterangepicker')
        if (daterangepicker) {
          this.updateDaterangepickerRTL(daterangepicker)
        }
      })
    },
    
    /**
     * Update daterangepicker with RTL styling
     */
    updateDaterangepickerRTL(daterangepicker) {
      // Add RTL classes
      daterangepicker.classList.add('rtl')
      daterangepicker.classList.remove('ltr')
      daterangepicker.setAttribute('dir', 'rtl')
      
      // Force RTL direction
      daterangepicker.style.direction = 'rtl'
      daterangepicker.style.textAlign = 'right'
      
      // Update calendar positioning
      const leftCalendar = daterangepicker.querySelector('.drp-calendar.left')
      const rightCalendar = daterangepicker.querySelector('.drp-calendar.right')
      
      if (leftCalendar) {
        leftCalendar.style.float = 'right'
        leftCalendar.style.clear = 'right'
        leftCalendar.style.marginLeft = '0'
        leftCalendar.style.marginRight = '0'
      }
      
      if (rightCalendar) {
        rightCalendar.style.float = 'left'
        rightCalendar.style.marginLeft = '0'
        rightCalendar.style.marginRight = '0'
      }
      
      // Update ranges positioning
      const ranges = daterangepicker.querySelector('.ranges')
      if (ranges) {
        ranges.style.textAlign = 'right'
        ranges.style.borderRight = 'none'
        ranges.style.borderLeft = '1px solid #ddd'
      }
      
      // Update buttons positioning
      const buttons = daterangepicker.querySelector('.drp-buttons')
      if (buttons) {
        buttons.style.textAlign = 'left'
      }
      
      // Update calendar table
      const calendarTable = daterangepicker.querySelector('.calendar-table')
      if (calendarTable) {
        calendarTable.style.direction = 'rtl'
      }
      
      // Update month/year selects
      const monthSelect = daterangepicker.querySelector('.monthselect')
      const yearSelect = daterangepicker.querySelector('.yearselect')
      
      if (monthSelect) {
        monthSelect.style.textAlign = 'center'
      }
      
      if (yearSelect) {
        yearSelect.style.textAlign = 'center'
      }
    },
    
    /**
     * Enhanced method to handle daterangepicker updates with RTL support
     */
    handleDaterangepickerUpdate() {
      // Apply RTL after daterangepicker is updated
      this.$nextTick(() => {
        this.applyRTLToDaterangepicker()
      })
    }
  },
  
  watch: {
    /**
     * Watch for RTL changes
     */
    isRTL(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.applyRTLToDaterangepicker()
        })
      }
    }
  }
}
