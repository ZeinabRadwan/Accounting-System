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

    // Stop tracking when user logs out - make it synchronous to ensure it completes
    const stopTracking = async () => {
      // Wait for stop to complete before allowing logout to proceed
      await tenantActivityService.stop()
    }

    // Watch for auth state changes
    store.watch(
      (state) => state.auth.check,
      async (isAuthenticated) => {
        if (isAuthenticated) {
          startTracking()
        } else {
          // Ensure session is ended before logout completes
          await stopTracking()
        }
      }
    )

    // Start tracking if already authenticated
    if (store.getters['auth/check']) {
      startTracking()
    }

    // Handle page unload (browser close, tab close, navigation away)
    window.addEventListener('beforeunload', () => {
      // End session when page is being closed
      if (store.getters['auth/check']) {
        // Use sendBeacon for reliability during page unload
        tenantActivityService.endSessionOnUnload()
      }
    })

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

