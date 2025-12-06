import tenantActivityService from '~/services/TenantActivityService'
import store from '~/store'

/**
 * Initialize tenant activity tracking
 * This plugin starts tracking user activity when user is authenticated
 */
export default {
  install(Vue) {
    // Start tracking when user is authenticated
    const startTracking = () => {
      if (store.getters['auth/check']) {
        tenantActivityService.start()
      }
    }

    // Stop tracking when user logs out
    const stopTracking = () => {
      tenantActivityService.stop()
    }

    // Watch for auth state changes
    store.watch(
      (state) => state.auth.check,
      (isAuthenticated) => {
        if (isAuthenticated) {
          startTracking()
        } else {
          stopTracking()
        }
      }
    )

    // Start tracking if already authenticated
    if (store.getters['auth/check']) {
      startTracking()
    }

    // Also listen to router navigation to ensure tracking is active
    Vue.mixin({
      mounted() {
        if (this.$store.getters['auth/check']) {
          tenantActivityService.start()
        }
      }
    })
  }
}

