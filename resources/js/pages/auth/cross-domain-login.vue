<template>
  <div class="minimal-login-page">
    <div v-if="loading" class="loading-container">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-else-if="error" class="error-container">
      <div class="alert alert-danger">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'blank',
  middleware: 'guest',
  metaInfo() {
    return { title: 'Logging in...' }
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
          // Save the token to the store
          await this.$store.dispatch('auth/saveToken', {
            token: response.data.token,
            remember: false,
          })

          // Fetch the user
          await this.$store.dispatch('auth/fetchUser')

          // Quick redirect to dashboard without showing success message
          setTimeout(() => {
            this.$router.push({ name: 'home' })
          }, 100)
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
.minimal-login-page {
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
}

.loading-container {
  text-align: center;
}

.loading-container .spinner-border {
  width: 3rem;
  height: 3rem;
}

.error-container {
  text-align: center;
  padding: 2rem;
}

.error-container .alert {
  max-width: 400px;
  margin: 0 auto;
}
</style>
