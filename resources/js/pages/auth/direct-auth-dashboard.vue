<template>
  <div class="auth-container">
    <div v-if="loading" class="text-center">
      <div class="spinner"></div>
      <h3>{{ $t('authenticating') || 'Authenticating...' }}</h3>
      <p>{{ $t('redirecting_dashboard') || 'You will be redirected to the dashboard shortly.' }}</p>
    </div>
    <div v-else-if="error" class="text-center">
      <h3 class="text-danger">{{ $t('authentication_failed') || 'Authentication Failed' }}</h3>
      <p>{{ error }}</p>
      <router-link :to="{ name: 'login' }" class="btn btn-primary">
        {{ $t('back_to_login') || 'Back to Login' }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'basic',
  middleware: 'guest',
  metaInfo() {
    return { title: 'Direct Authentication' }
  },
  data: () => ({
    loading: true,
    error: null,
    appName: window.config.appName,
  }),
  // Map Getters
  computed: {
    ...mapGetters('operations', ['appInfo']),
  },
  async created() {
    await this.handleDirectAuth()
  },
  methods: {
    async handleDirectAuth() {
      try {
        // Get the encrypted token and user ID from URL parameters
        const urlParams = new URLSearchParams(window.location.search)
        const encryptedToken = urlParams.get('token')
        const encryptedUserId = urlParams.get('user_id')

        if (!encryptedToken || !encryptedUserId) {
          this.error = 'Invalid authentication parameters.'
          this.loading = false
          return
        }

        // Call the direct auth API endpoint to decrypt and validate
        const response = await this.$axios.get('/api/direct-auth-dashboard', {
          params: {
            token: encryptedToken,
            user_id: encryptedUserId
          }
        })

        if (response.data && response.data.token) {
          // Save the token to the store
          await this.$store.dispatch('auth/saveToken', {
            token: response.data.token,
            remember: false,
          })

          // Fetch the user
          await this.$store.dispatch('auth/fetchUser')

          // Redirect to dashboard
          this.$router.push({ name: 'home' })
        } else {
          this.error = 'Authentication failed. Please try again.'
        }
      } catch (error) {
        console.error('Direct auth error:', error)
        this.error = 'Authentication failed. Please try again.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
}

.spinner {
  border: 3px solid #f3f3f3;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
