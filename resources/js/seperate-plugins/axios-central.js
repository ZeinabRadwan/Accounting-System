import axios from 'axios'
import store from '~/store'
import router from '~/router/central'
import Swal from 'sweetalert2'
import i18n from '~/plugins/i18n'

// Request interceptor
axios.interceptors.request.use(request => {
  const token = store.getters['auth/token']
  if (token) {
    request.headers.common.Authorization = `Bearer ${token}`
  }

  const locale = store.getters['lang/locale']
  if (locale) {
    request.headers.common['Accept-Language'] = locale
  }

  // request.headers['X-Socket-Id'] = Echo.socketId()

  return request
})

// Response interceptor
axios.interceptors.response.use(response => response, error => {
  const { status } = error.response

  // to show demo version message
  if (status === 499) {
    store.dispatch('operations/setDemoMessage', 'You are not allowed to do this in demo version.')
  }

  // Handle different error status codes with proper error messages
  if (status >= 500) {
    const errorMessage = error.response?.data?.message || i18n.t('error_alert_text')
    Swal.fire({
      type: 'error',
      title: i18n.t('error_alert_title'),
      text: errorMessage,
      reverseButtons: true,
      confirmButtonText: i18n.t('ok'),
      cancelButtonText: i18n.t('cancel')
    })
  } else if (status === 401 && store.getters['auth/check']) {
    Swal.fire({
      type: 'warning',
      title: i18n.t('token_expired_alert_title'),
      text: i18n.t('token_expired_alert_text'),
      reverseButtons: true,
      confirmButtonText: i18n.t('ok'),
      cancelButtonText: i18n.t('cancel')
    }).then(() => {
      store.commit('auth/LOGOUT')

      router.push({ name: 'login' })
    })
  } else if (status === 422) {
    // Handle validation errors - let individual components handle these
    // Don't show generic error for validation errors
  } else if (status === 400 || status === 403 || status === 404 || status === 409) {
    // Handle other client errors with specific messages
    const errorMessage = error.response?.data?.message || 
      (status === 400 ? 'Bad Request' :
       status === 403 ? 'Access Forbidden' :
       status === 404 ? 'Resource Not Found' :
       status === 409 ? 'Conflict' : 'Request Error')
    
    Swal.fire({
      type: 'error',
      title: 'Error',
      text: errorMessage,
      reverseButtons: true,
      confirmButtonText: i18n.t('ok'),
      cancelButtonText: i18n.t('cancel')
    })
  }

  return Promise.reject(error)
})
