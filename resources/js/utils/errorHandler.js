import i18n from '~/plugins/i18n'

/**
 * Centralized error handling utility
 * Provides consistent error display across the application
 */
export class ErrorHandler {
  /**
   * Handle API errors with proper error messages
   * @param {Object} error - The error object from axios
   * @param {Object} options - Additional options for error handling
   * @returns {void}
   */
  static handleApiError(error, options = {}) {
    const {
      showValidationErrors = true,
      customMessage = null,
      title = null,
      timer = 6000,
      showTimerProgressBar = true
    } = options

    // Log detailed error information for debugging
    this.logErrorDetails(error, options.context || 'API Error')

    // If custom message is provided, show it
    if (customMessage) {
      this.showError(title || i18n.t('Error'), customMessage, timer, showTimerProgressBar)
      return
    }

    // Handle different error types
    if (error.response) {
      const { status, data } = error.response
      
      switch (status) {
        case 400:
          this.handleBadRequest(data, showValidationErrors)
          break
        case 401:
          this.handleUnauthorized()
          break
        case 403:
          this.handleForbidden(data)
          break
        case 404:
          this.handleNotFound(data)
          break
        case 409:
          this.handleConflict(data)
          break
        case 422:
          this.handleValidationErrors(data, showValidationErrors)
          break
        case 499:
          // Demo version message - handled by interceptors
          break
        default:
          if (status >= 500) {
            this.handleServerError(data)
          } else {
            this.handleGenericError(data, error.message)
          }
      }
    } else if (error.request) {
      // Network error
      this.showError(
        i18n.t('Network Error'),
        i18n.t('Unable to connect to server. Please check your internet connection.'),
        8000,
        true
      )
    } else {
      // Other errors
      this.handleGenericError(null, error.message)
    }
  }

  /**
   * Handle 400 Bad Request errors
   */
  static handleBadRequest(data, showValidationErrors = true) {
    const errorMessage = data?.message || i18n.t('Bad Request Error')
    
    if (showValidationErrors && data?.validation_errors && Array.isArray(data.validation_errors)) {
      this.showBackendValidationErrors(data.validation_errors, errorMessage)
    } else {
      this.showError(i18n.t('Bad Request'), errorMessage)
    }
  }

  /**
   * Handle 401 Unauthorized errors
   */
  static handleUnauthorized() {
    this.showError(
      i18n.t('Authentication Error'),
      i18n.t('You are not authorized to perform this action. Please log in again.'),
      5000
    )
  }

  /**
   * Handle 403 Forbidden errors
   */
  static handleForbidden(data) {
    const errorMessage = data?.message || i18n.t("You don't have permission to perform this action.")
    this.showError(i18n.t('Permission Error'), errorMessage)
  }

  /**
   * Handle 404 Not Found errors
   */
  static handleNotFound(data) {
    const errorMessage = data?.message || i18n.t('The requested resource was not found. Please check your data and try again.')
    this.showError(i18n.t('Resource Not Found'), errorMessage)
  }

  /**
   * Handle 409 Conflict errors
   */
  static handleConflict(data) {
    const errorMessage = data?.message || i18n.t('Data Conflict Error')
    this.showError(i18n.t('Data Conflict'), errorMessage)
  }

  /**
   * Handle 422 Validation errors
   */
  static handleValidationErrors(data, showValidationErrors = true) {
    if (!showValidationErrors) return

    if (data?.errors) {
      // Laravel validation errors
      const validationErrors = data.errors
      const errorMessages = Object.values(validationErrors).flat()
      
      if (errorMessages.length > 0) {
        const errorList = errorMessages.map(error => `• ${error}`).join('\n')
        this.showError(
          i18n.t('Validation Error'),
          errorList,
          8000,
          true
        )
      }
    } else if (data?.validation_errors && Array.isArray(data.validation_errors)) {
      // Backend validation errors
      this.showBackendValidationErrors(data.validation_errors, data.message)
    } else {
      const errorMessage = data?.message || i18n.t('Data Processing Error')
      this.showError(i18n.t('Data Error'), errorMessage)
    }
  }

  /**
   * Handle server errors (5xx)
   */
  static handleServerError(data) {
    const errorMessage = data?.message || i18n.t('Server Error')
    this.showError(
      i18n.t('Server Error'),
      `${errorMessage} (${i18n.t('Please try again later or contact support')})`,
      8000,
      true
    )
  }

  /**
   * Handle generic errors
   */
  static handleGenericError(data, fallbackMessage) {
    const errorMessage = data?.message || fallbackMessage || i18n.t('An unexpected error occurred')
    this.showError(i18n.t('Error'), errorMessage)
  }

  /**
   * Show backend validation errors
   */
  static showBackendValidationErrors(validationErrors, mainMessage) {
    if (!Array.isArray(validationErrors) || validationErrors.length === 0) {
      this.showError(i18n.t('Validation Error'), mainMessage)
      return
    }

    const errorList = validationErrors.map(error => `• ${error}`).join('\n')
    this.showError(
      i18n.t('Validation Error'),
      `${mainMessage}\n\n${errorList}`,
      10000,
      true
    )
  }

  /**
   * Show error using SweetAlert2
   */
  static showError(title, message, timer = 6000, showTimerProgressBar = true) {
    if (typeof window !== 'undefined' && window.toast && typeof window.toast.fire === 'function') {
      window.toast.fire({
        type: 'error',
        title: `${title ?? i18n.t('Error')}${message ? ': ' + message : ''}`,
        timer: timer,
        timerProgressBar: showTimerProgressBar,
      })
      return
    }
    // Fallback to console if toast not available
    // eslint-disable-next-line no-console
    console.error(title, message)
  }

  /**
   * Show success message
   */
  static showSuccess(title, message, timer = 3000) {
    if (typeof window !== 'undefined' && window.toast && typeof window.toast.fire === 'function') {
      window.toast.fire({
        type: 'success',
        title: `${title ?? i18n.t('Success')}${message ? ': ' + message : ''}`,
        timer: timer,
        timerProgressBar: true,
      })
      return
    }
    // eslint-disable-next-line no-console
    console.log(title, message)
  }

  /**
   * Show warning message
   */
  static showWarning(title, message, timer = 5000) {
    if (typeof window !== 'undefined' && window.toast && typeof window.toast.fire === 'function') {
      window.toast.fire({
        type: 'warning',
        title: `${title ?? i18n.t('Warning')}${message ? ': ' + message : ''}`,
        timer: timer,
        timerProgressBar: true,
      })
      return
    }
    // eslint-disable-next-line no-console
    console.warn(title, message)
  }

  /**
   * Log detailed error information for debugging
   * @param {Object} error - The error object
   * @param {String} context - Context where the error occurred
   */
  static logErrorDetails(error, context = 'Unknown') {
    const errorInfo = {
      context: context,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      error: {
        message: error.message,
        stack: error.stack,
        name: error.name
      }
    }

    // Add response details if available
    if (error.response) {
      errorInfo.response = {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
        headers: error.response.headers,
        config: {
          url: error.response.config?.url,
          method: error.response.config?.method,
          params: error.response.config?.params,
          data: error.response.config?.data
        }
      }
    }

    // Add request details if available
    if (error.request) {
      errorInfo.request = {
        readyState: error.request.readyState,
        status: error.request.status,
        responseText: error.request.responseText
      }
    }

    // Log to console with detailed information
    console.group(`🚨 Error in ${context}`)
    console.error('Full Error Object:', error)
    console.error('Error Details:', errorInfo)
    
    if (error.response?.data?.message) {
      console.error('Backend Error Message:', error.response.data.message)
    }
    
    if (error.response?.data?.errors) {
      console.error('Backend Validation Errors:', error.response.data.errors)
    }
    
    console.groupEnd()

    // Send to backend logging endpoint if available
    this.sendErrorToBackend(errorInfo)
  }

  /**
   * Send error details to backend for logging
   * @param {Object} errorInfo - Error information to log
   */
  static async sendErrorToBackend(errorInfo) {
    try {
      // Only send if we have a backend endpoint for error logging
      if (window.axios && process.env.NODE_ENV === 'production') {
        await window.axios.post('/api/log-frontend-error', {
          ...errorInfo,
          user_id: window.auth?.user?.id || null,
          tenant_id: window.auth?.tenant?.id || null
        })
      }
    } catch (loggingError) {
      console.warn('Failed to send error to backend:', loggingError)
    }
  }
}

export default ErrorHandler
