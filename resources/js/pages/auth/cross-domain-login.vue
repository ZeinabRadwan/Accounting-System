<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <!-- The image half -->
      <div class="col-md-6 d-none d-md-flex bg-image"></div>
      <!-- The content half -->
      <div class="col-md-6 bg-light">
        <div class="auth-wrapper d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-lg-10 col-xl-8 mx-auto">
                <div class="text-center mb-4">
                  <router-link to="/">
                    <img v-if="appInfo" :src="appInfo.blackLogo" :alt="appInfo.companyName"
                      class="lg-logo img-fluid logo-width" />
                  </router-link>
                </div>

                <div class="text-center">
                  <div v-if="loading" class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div v-else-if="error" class="alert alert-danger">
                    {{ error }}
                  </div>
                  <div v-else class="alert alert-success">
                    Login successful! Redirecting to dashboard...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'basic',
  middleware: 'guest',
  metaInfo() {
    return { title: 'Cross Domain Login' }
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

        // Call the cross-domain login API
        const response = await this.$axios.post('/api/cross-domain-login', {
          email: encryptedEmail,
          password: encryptedPassword
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
