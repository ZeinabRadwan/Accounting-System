<template>
    <div>
        <div class="container-fluid">
            <div class="row no-gutter">
                <!-- The content half -->
                <div class="col-12" style="background: #ffffff;">
                    <div class="auth-wrapper d-flex align-items-center py-5" style="width: 100%;">
                        <!-- Demo content-->
                        <div class="container">
                            <!-- Two Column Layout -->
                            <div class="row register-page-layout">
                                <div class="col-md-6 register-form-column">
                                    <div class="register-form">
                                        <!-- Form Title -->
                                        <h2 class="register-form-title">{{ $t('Logging in') }}</h2>
                                        
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
                                    </div>
                                </div>
                                <!-- Platform Features Column -->
                                <div class="col-md-6 platform-features-column">
                                    <div class="platform-features-content">
                                        <router-link to="/" class="platform-logo-link">
                                            <img v-if="appInfo" :src="appInfo.blackLogo" :alt="appInfo.companyName"
                                                class="lg-logo img-fluid logo-width" />
                                        </router-link>
                                        <h2 class="platform-title">{{ $t('platform_title') }}</h2>
                                        <p class="platform-description">{{ $t('platform_description') }}</p>
                                        <h3 class="platform-includes-title">{{ $t('platform_includes') }}</h3>
                                        <div class="platform-features-grid">
                                            <div class="feature-card">{{ $t('electronic_invoicing') }}</div>
                                            <div class="feature-card">{{ $t('sales_pos_management') }}</div>
                                            <div class="feature-card">{{ $t('inventory_management') }}</div>
                                            <div class="feature-card">{{ $t('accounting_general_ledger') }}</div>
                                            <div class="feature-card">{{ $t('branch_management') }}</div>
                                            <div class="feature-card">{{ $t('customer_relationship') }}</div>
                                            <div class="feature-card">{{ $t('hr_employee_affairs') }}</div>
                                            <div class="feature-card">{{ $t('integrated_workflow') }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End -->
                    </div>
                </div>
                <!-- End -->
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
* {
    font-family: 'Almarai', sans-serif;
}

/* Exclude Font Awesome icons from Almarai font */
.fa,
.fas,
.far,
.fab,
.fa-solid,
.fa-regular,
.fa-brands,
[class^="fa-"],
[class*=" fa-"] {
    font-family: "Font Awesome 7 Free", "Font Awesome 6 Free", "Font Awesome 5 Free", "FontAwesome", sans-serif !important;
}

.loading-content,
.error-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    text-align: center;
}

.spinner-border {
    width: 3rem;
    height: 3rem;
}

/* Register form styling */
.register-form {
    border: 1px solid #CBD0DD;
    border-radius: 10px;
    padding: 1.5rem;
}

.register-form-title {
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-align: right;
}

/* RTL support for form title */
[dir="rtl"] .register-form-title {
    text-align: right;
}

[dir="ltr"] .register-form-title {
    text-align: left;
}

.login-link-text {
    color: #0775AF !important;
    text-decoration: none;
    transition: color 0.2s ease;
}

.login-link-text:hover {
    color: #06608a !important;
    text-decoration: underline;
}

/* Register page layout */
.register-page-layout {
    align-items: flex-start;
    display: flex;
    flex-direction: row-reverse;
}

.register-form-column {
    width: 50%;
    flex: 0 0 50%;
    max-width: 50%;
}

.platform-features-column {
    width: 50%;
    flex: 0 0 50%;
    max-width: 50%;
}

.platform-features-content {
    border: 1px solid #CBD0DD;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
}

.platform-logo-link {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.platform-logo-link img {
    display: block;
}

.logo-width {
    max-width: 300px;
}

.platform-title {
    font-size: 22px;
    color: #000000;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.platform-description {
    color: #586687;
    font-size: 16px;
    line-height: 35px;
    margin-bottom: 1.5rem;
}

.platform-includes-title {
    font-size: 20px;
    color: #000000;
    font-weight: 700;
    margin-bottom: 1rem;
}

.platform-features-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.feature-card {
    background: #0775AF1A;
    border-radius: 10px;
    padding: 16px;
    color: #000000;
    font-size: 16px;
    /* line-height: 1.5; */
    font-weight: 500;
    width: fit-content;
    display: inline-block;
    margin: 0.25rem 0;
}

/* RTL support for platform features */
[dir="rtl"] .platform-title,
[dir="rtl"] .platform-description,
[dir="rtl"] .platform-includes-title {
    text-align: right;
}

[dir="ltr"] .platform-title,
[dir="ltr"] .platform-description,
[dir="ltr"] .platform-includes-title {
    text-align: left;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .register-form-column,
    .platform-features-column {
        width: 100%;
        flex: 0 0 100%;
        margin-bottom: 2rem;
    }

    .platform-features-grid {
        flex-direction: column;
    }
}
</style>
