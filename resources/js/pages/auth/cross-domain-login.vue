<template>
  <div>
    <auth-wrapper :title="$t('Logging in')">
      <template #form>
        <!-- Loading state -->
        <div v-if="loading && !error" class="loading-content">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">{{ $t('Loading') }}...</span>
          </div>
          <p class="mt-3">{{ $t('Processing your login') }}...</p>
        </div>
        
        <!-- Error state -->
        <div v-else-if="error" class="error-content">
          <div class="alert alert-danger">
            {{ error }}
          </div>
          <div class="mt-3 text-center">
            <router-link :to="{ name: 'find-domain' }" class="login-link-text">
              {{ $t('Try again') }}
            </router-link>
          </div>
        </div>
      </template>
    </auth-wrapper>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AuthWrapper from '@/components/auth/AuthWrapper.vue'

export default {
  layout: 'basic',
  middleware: 'guest',
  components: {
    AuthWrapper,
  },
  metaInfo() {
    return { title: this.$t('Logging in') }
  },
  data() {
    return {
      loading: true,
      error: null,
      appName: window.config.appName,
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
      // User is already logged in, redirect immediately
      await this.redirectAfterAuth()
      return
    }
    
    // Check if we've already processed this request (prevent refresh loop)
    const processedKey = 'cross_domain_login_processed'
    if (sessionStorage.getItem(processedKey)) {
      // Already processed, redirect immediately
      await this.redirectAfterAuth()
      return
    }
    
    // Handle cross-domain login
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
          // Save the token to the store
          await this.$store.dispatch('auth/saveToken', {
            token: response.data.token,
            remember: false,
          })

          // Fetch the user
          await this.$store.dispatch('auth/fetchUser')

          // Apply locale immediately after fetching user
          if (response.data.locale) {
            await this.applyLocale(response.data.locale)
          } else {
            // Fallback to user locale from store
            const user = this.$store.getters['auth/user']
            if (user && user.locale) {
              await this.applyLocale(user.locale)
            }
          }

          // Remove query parameters from URL to prevent re-processing
          if (window.history && window.history.replaceState) {
            window.history.replaceState({}, document.title, window.location.pathname)
          }

          // Redirect after authentication (without showing modal steps)
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
    async applyLocale(locale) {
      try {
        // RTL languages list
        const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'ku', 'yi']
        const isRTL = rtlLanguages.includes(locale.toLowerCase())
        
        // Import loadMessages function
        const { loadMessages } = await import('~/plugins/i18n')
        
        // Load messages for the locale
        await loadMessages(locale)
        
        // Update the Vuex store locale
        await this.$store.dispatch('lang/setLocale', { locale })
        
        // Apply RTL mode if available
        if (window.RTLManager) {
          window.RTLManager.applyRTLMode(locale)
        } else {
          // Fallback RTL implementation
          document.documentElement.setAttribute('lang', locale)
          document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
          document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
          
          if (isRTL) {
            document.body.classList.add('rtl')
            document.body.classList.remove('ltr')
          } else {
            document.body.classList.add('ltr')
            document.body.classList.remove('rtl')
          }
        }
        
        // Store in localStorage
        localStorage.setItem('current_locale', locale)
        localStorage.setItem('rtl_mode', isRTL.toString())
        
        // Set flag to prevent middleware from overriding
        localStorage.setItem('locale_just_changed', 'true')
        setTimeout(() => {
          localStorage.removeItem('locale_just_changed')
        }, 2000)
        
        console.log('Locale applied:', locale)
      } catch (error) {
        console.error('Error applying locale:', error)
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
    }
  }
}
</script>

<style scoped>
/* Unique styles for cross-domain-login page */
.loading-content,
.error-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    text-align: center;
    padding: 1rem;
}

.spinner-border {
    width: 3rem;
    height: 3rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .loading-content,
    .error-content {
        min-height: 150px;
        padding: 0.75rem;
    }

    .loading-content p,
    .error-content p {
        font-size: 14px;
        margin-top: 1rem;
    }

    .spinner-border {
        width: 2.5rem;
        height: 2.5rem;
    }
}

@media (max-width: 480px) {
    .loading-content,
    .error-content {
        min-height: 120px;
        padding: 0.5rem;
    }

    .loading-content p,
    .error-content p {
        font-size: 13px;
        margin-top: 0.75rem;
    }

    .spinner-border {
        width: 2rem;
        height: 2rem;
    }
}
</style>
