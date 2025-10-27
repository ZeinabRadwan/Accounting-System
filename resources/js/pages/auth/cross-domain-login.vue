<template>
  <div>
    <!-- White screen loader -->
    <WhiteScreenLoader 
      v-if="loading" 
      :loading-text="loadingText"
      :sub-text="subText"
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
import WhiteScreenLoader from '../../components/WhiteScreenLoader.vue'

export default {
  layout: 'blank',
  middleware: 'guest',
  components: {
    WhiteScreenLoader
  },
  metaInfo() {
    return { title: 'Logging in...' }
  },
  data: () => ({
    loading: true,
    error: null,
    appName: window.config.appName,
    loadingText: 'Authenticating...',
    subText: 'Please wait while we verify your credentials'
  }),
  // Map Getters
  computed: {
    ...mapGetters('operations', ['appInfo']),
  },
  async created() {
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
          this.error = 'Invalid login parameters.'
          this.loading = false
          return
        }

        // Call the cross-domain login API with GET request
        const response = await this.$axios.get('/api/cross-domain-login', {
          params: {
            email: encryptedEmail,
            password: encryptedPassword
          }
        })

        if (response.data && response.data.token) {
          // Update loading text
          this.loadingText = 'Setting up your session...'
          this.subText = 'Almost there! Preparing your dashboard'
          
          // Save the token to the store
          await this.$store.dispatch('auth/saveToken', {
            token: response.data.token,
            remember: false,
          })

          // Update loading text again
          this.loadingText = 'Loading your dashboard...'
          this.subText = 'Finalizing your login process'

          // Fetch the user
          await this.$store.dispatch('auth/fetchUser')

          // Check if tenant is initialized before redirecting
          try {
            const initResponse = await this.$axios.get('/api/tenant-initialization/check')
            const isInitialized = initResponse.data && initResponse.data.data && initResponse.data.data.is_initialized

            // Redirect to initialization page if tenant is not initialized
            if (!isInitialized) {
              setTimeout(() => {
                this.$router.push({ name: 'tenant.initialization' })
              }, 500)
            } else {
              // Redirect to dashboard if initialized
              setTimeout(() => {
                this.$router.push({ name: 'home' })
              }, 500)
            }
          } catch (error) {
            // On error checking initialization, assume not initialized
            console.error('Error checking tenant initialization:', error)
            setTimeout(() => {
              this.$router.push({ name: 'tenant.initialization' })
            }, 500)
          }
        } else {
          this.error = 'Login failed. Please try again.'
        }
      } catch (error) {
        console.error('Cross-domain login error:', error)
        this.error = 'Login failed. Please try again.'
      } finally {
        this.loading = false
      }
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
