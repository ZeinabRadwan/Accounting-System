<template>
  <div>
    <!-- Login Steps Modal - showing final steps -->
    <LoginStepsModal 
      v-if="loading && !error" 
      :show="true" 
      :current-step="currentStep"
    />
    
    <!-- Error state -->
    <div v-else-if="error" class="error-container">
      <div class="alert alert-danger">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LoginStepsModal from '../../components/LoginStepsModal.vue'

export default {
  layout: 'blank',
  middleware: 'guest',
  components: {
    LoginStepsModal
  },
  metaInfo() {
    return { title: this.$t('Logging in') }
  },
  data() {
    return {
      loading: true,
      error: null,
      appName: window.config.appName,
      currentStep: 3, // Start at step 3 since steps 1-2 were done in find-domain
      processed: false
    }
  },
  // Map Getters
  computed: {
    ...mapGetters('operations', ['appInfo']),
  },
  async created() {
    // Check if user is already authenticated
    if (this.$store.getters['auth/check']) {
      // User is already logged in, go to step 4 and redirect
      this.currentStep = 4
      await this.delay(500)
      await this.redirectAfterAuth()
      return
    }
    
    // Check if we've already processed this request (prevent refresh loop)
    const processedKey = 'cross_domain_login_processed'
    if (sessionStorage.getItem(processedKey)) {
      // Already processed, go to step 4 and redirect
      this.currentStep = 4
      await this.delay(500)
      await this.redirectAfterAuth()
      return
    }
    
    // Start at step 3 (setting up session)
    this.currentStep = 3
    await this.handleCrossDomainLogin()
  },
  methods: {
    async handleCrossDomainLogin() {
      try {
        // Get the encrypted credentials from URL parameters
        const urlParams = new URLSearchParams(window.location.search)
        const encryptedEmail = urlParams.get('email')
        const encryptedPassword = urlParams.get('password')

        if (!encryptedEmail || !encryptedPassword) {
          this.error = this.$t('Invalid login parameters')
          this.loading = false
          return
        }

        // Mark as processed to prevent refresh loops
        sessionStorage.setItem('cross_domain_login_processed', 'true')

        // Call the cross-domain login API with GET request
        const response = await this.$axios.get('/api/cross-domain-login', {
          params: {
            email: encryptedEmail,
            password: encryptedPassword
          }
        })

        if (response.data && response.data.token) {
          // Step 3: Setting up session - save token
          this.currentStep = 3
          
          // Save the token to the store
          await this.$store.dispatch('auth/saveToken', {
            token: response.data.token,
            remember: false,
          })

          // Small delay to show step 3
          await this.delay(500)

          // Fetch the user
          await this.$store.dispatch('auth/fetchUser')

          // Remove query parameters from URL to prevent re-processing
          if (window.history && window.history.replaceState) {
            window.history.replaceState({}, document.title, window.location.pathname)
          }

          // Step 4: Redirecting
          this.currentStep = 4
          await this.delay(500)

          // Redirect after authentication
          await this.redirectAfterAuth()
        } else {
          this.error = this.$t('Login failed. Please try again')
          sessionStorage.removeItem('cross_domain_login_processed')
          this.loading = false
        }
      } catch (error) {
        console.error('Cross-domain login error:', error)
        this.error = this.$t('Login failed. Please try again')
        sessionStorage.removeItem('cross_domain_login_processed')
      } finally {
        this.loading = false
      }
    },
    async redirectAfterAuth() {
      try {
        // Check if tenant is initialized before redirecting
        const initResponse = await this.$axios.get('/api/tenant-initialization/check')
        const isInitialized = initResponse.data && initResponse.data.data && initResponse.data.data.is_initialized

        // Use window.location.href for hard redirect to prevent any middleware issues
        // Only redirect once - no multiple redirects
        if (!isInitialized) {
          window.location.href = '/tenant-initialization'
        } else {
          window.location.href = '/dashboard'
        }
      } catch (error) {
        // On error checking initialization, assume not initialized
        console.error('Error checking tenant initialization:', error)
        window.location.href = '/tenant-initialization'
      }
    },
    
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  }
}
</script>

<style scoped>
.error-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.error-container .alert {
  max-width: 400px;
  margin: 0 auto;
}
</style>
