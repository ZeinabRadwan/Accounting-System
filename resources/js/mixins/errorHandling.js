import ErrorHandler from '~/utils/errorHandler'

export default {
  methods: {
    /**
     * Enhanced error handling with detailed logging
     * @param {Object} error - The error object from axios
     * @param {Object} options - Additional options for error handling
     */
    handleError(error, options = {}) {
      const {
        context = 'Form Submission',
        showValidationErrors = true,
        customMessage = null,
        title = null,
        timer = 6000,
        showTimerProgressBar = true
      } = options

      // Log detailed error information
      ErrorHandler.logErrorDetails(error, context)

      // Handle different error types
      if (error.response) {
        const { status, data } = error.response
        
        switch (status) {
          case 400:
            this.handleBadRequestError(data, showValidationErrors, customMessage, title, timer, showTimerProgressBar)
            break
          case 401:
            this.handleUnauthorizedError()
            break
          case 403:
            this.handleForbiddenError(data)
            break
          case 404:
            this.handleNotFoundError(data)
            break
          case 422:
            this.handleValidationError(data, showValidationErrors)
            break
          case 500:
            this.handleServerError(data, customMessage, title, timer, showTimerProgressBar)
            break
          default:
            this.handleGenericError(data, error.message, customMessage, title, timer, showTimerProgressBar)
        }
      } else if (error.request) {
        // Network error
        this.$toast.fire({
          type: 'error',
          title: this.$t('Network Error'),
          text: this.$t('Unable to connect to server. Please check your internet connection.'),
          timer: 8000,
          timerProgressBar: true
        })
      } else {
        // Other errors
        this.handleGenericError(null, error.message, customMessage, title, timer, showTimerProgressBar)
      }
    },

    /**
     * Handle 400 Bad Request errors
     */
    handleBadRequestError(data, showValidationErrors, customMessage, title, timer, showTimerProgressBar) {
      const errorMessage = customMessage || data?.message || this.$t('Bad Request Error')
      
      if (showValidationErrors && data?.errors) {
        // Show validation errors
        const errors = Object.values(data.errors).flat()
        const errorList = errors.map(error => `• ${error}`).join('\n')
        this.$toast.fire({
          type: 'error',
          title: this.$t('Validation Error'),
          text: errorList,
          timer: timer,
          timerProgressBar: showTimerProgressBar
        })
      } else {
        this.$toast.fire({
          type: 'error',
          title: title || this.$t('Error'),
          text: errorMessage,
          timer: timer,
          timerProgressBar: showTimerProgressBar
        })
      }
    },

    /**
     * Handle 401 Unauthorized errors
     */
    handleUnauthorizedError() {
      this.$toast.fire({
        type: 'error',
        title: this.$t('Authentication Error'),
        text: this.$t('You are not authorized to perform this action. Please log in again.'),
        timer: 5000,
        timerProgressBar: true
      })
    },

    /**
     * Handle 403 Forbidden errors
     */
    handleForbiddenError(data) {
      this.$toast.fire({
        type: 'error',
        title: this.$t('Permission Error'),
        text: data?.message || this.$t("You don't have permission to perform this action."),
        timer: 5000,
        timerProgressBar: true
      })
    },

    /**
     * Handle 404 Not Found errors
     */
    handleNotFoundError(data) {
      this.$toast.fire({
        type: 'error',
        title: this.$t('Not Found'),
        text: data?.message || this.$t('The requested resource was not found.'),
        timer: 5000,
        timerProgressBar: true
      })
    },

    /**
     * Handle 422 Validation errors
     */
    handleValidationError(data, showValidationErrors) {
      if (showValidationErrors && data?.errors) {
        // Set form errors if form is available
        if (this.form && this.form.errors && typeof this.form.errors.set === 'function') {
          this.form.errors.set(data.errors)
        }
        
        // Show validation errors
        const errors = Object.values(data.errors).flat()
        const errorList = errors.map(error => `• ${error}`).join('\n')
        this.$toast.fire({
          type: 'error',
          title: this.$t('Validation Error'),
          text: errorList,
          timer: 8000,
          timerProgressBar: true
        })
      } else {
        // Show specific error message if available, otherwise show generic message
        const errorMessage = data?.message || this.$t('Please check your input and try again.')
        this.$toast.fire({
          type: 'error',
          title: this.$t('Validation Error'),
          text: errorMessage,
          timer: 6000,
          timerProgressBar: true
        })
      }
    },

    /**
     * Handle 500 Server errors
     */
    handleServerError(data, customMessage, title, timer, showTimerProgressBar) {
      const errorMessage = customMessage || data?.message || this.$t('Internal Server Error')
      this.$toast.fire({
        type: 'error',
        title: title || this.$t('Server Error'),
        text: errorMessage,
        timer: timer,
        timerProgressBar: showTimerProgressBar
      })
    },

    /**
     * Handle generic errors
     */
    handleGenericError(data, errorMessage, customMessage, title, timer, showTimerProgressBar) {
      const message = customMessage || data?.message || errorMessage || this.$t('Please check your input and try again.')
      this.$toast.fire({
        type: 'error',
        title: title || this.$t('Error'),
        text: message,
        timer: timer,
        timerProgressBar: showTimerProgressBar
      })
    }
  }
}
