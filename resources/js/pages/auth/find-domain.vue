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
                  <form @submit.prevent="handleSubmit" @keydown="handleKeydown" class="register-form">
                    <!-- Form Title -->
                    <h2 class="register-form-title">{{ $t('find_domain') }}</h2>

                    <!-- Domain -->
                    <div class="form-group mb-3">
                      <div class="d-flex url">
                        <input v-model="form.domain" id="domain" name="domain"
                          :class="{ 'is-invalid': form.errors.has('domain') }"
                          class="form-control input-radius-10 border-0 px-4 text-primary" type="text"
                          :placeholder="$t('domain')" />
                        <span class="domain-host-span">{{ host }}</span>
                      </div>
                      <has-error :form="form" field="domain" class="ml-4" />
                    </div>

                    <!-- Email -->
                    <div class="form-group mb-3">
                      <input v-model="form.email" id="email" name="email"
                        :class="{ 'is-invalid': form.errors.has('email') }"
                        class="form-control input-radius-10 border-0 px-4 text-primary" type="email"
                        :placeholder="$t('email_placeholder')" />
                      <has-error :form="form" field="email" class="ml-4" />
                    </div>

                    <!-- Password -->
                    <div class="form-group mb-3">
                      <div class="password-input-wrapper">
                        <input v-model="form.password" id="password" name="password"
                          :class="{ 'is-invalid': form.errors.has('password') }"
                          class="form-control input-radius-10 border-0 px-4 text-primary"
                          :type="showPassword ? 'text' : 'password'" :placeholder="$t('password_placeholder')" />
                        <button type="button" class="password-toggle-btn" @click="togglePasswordVisibility">
                          <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                        </button>
                      </div>
                      <has-error :form="form" field="password" class="ml-4" />
                    </div>

                    <!-- Submit Button -->
                    <div class="register-submit-btn-wrapper">
                      <v-button :loading="form.busy" class="btn btn-block mb-2 register-submit-btn"
                        @click="handleSubmit">
                        <strong>{{ $t('login') }}</strong>
                        <i class="fas fa-sign-in-alt" style="transform: scaleX(-1);" />
                      </v-button>
                    </div>

                    <!-- Don't have account / Register link -->
                    <div class="row justify-content-center mt-3">
                      <div class="mx-2 already-registered-text">
                        <span class="already-registered-question">{{ $t('dont_have_account') }}</span>
                        <router-link :to="{ name: 'register' }" class="login-link-text">
                          {{ $t('register') }}
                        </router-link>
                      </div>
                    </div>
                  </form>
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
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
  layout: 'basic',
  middleware: 'guest',
  metaInfo() {
    return { title: this.$t('find_domain') }
  },
  data: () => ({
    form: new Form({
      domain: '',
      email: '',
      password: '',
    }),
    showPassword: false,
    appName: window.config.appName,
    host: location.host
  }),
  // Map Getters
  computed: {
    ...mapGetters('operations', ['appInfo']),
  },

  created() {
    console.log('Component created, form object:', this.form);

    // Auto-populate email and domain from query parameters
    if (this.$route.query.email) {
      this.form.email = this.$route.query.email;
    }
    if (this.$route.query.domain) {
      this.form.domain = this.$route.query.domain;
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault()
      event.stopPropagation()
      console.log('Button clicked, calling findDomain')
      this.findDomain()
    },

    handleKeydown(event) {
      if (event.key === 'Enter') {
        event.preventDefault()
        this.findDomain()
      }
    },

    async findDomain() {
      // Prevent multiple submissions
      if (this.form.busy) {
        console.log('Already processing, ignoring duplicate submission')
        return
      }

      console.log('findDomain method called')
      console.log('Form data:', this.form.data())

      // Validate form before submission
      if (!this.form.domain || !this.form.email || !this.form.password) {
        this.$toast.error(this.$t('Please fill in all fields'))
        return
      }

      try {
        // Find the domain and get tenant info
        console.log('Calling /api/find-domain...')

        // Use axios directly instead of form.post to avoid form validation issues
        const domainResponse = await this.$axios.post('/api/find-domain', {
          domain: this.form.domain,
          email: this.form.email,
          password: this.form.password
        })

        console.log('Domain response:', domainResponse)

        if (domainResponse && domainResponse.data.success) {
          // Redirect directly to the tenant domain using the special login URL
          // This will complete the login process on the tenant domain
          window.location.href = domainResponse.data.data.login_url
        } else {
          // Handle case where response is successful but no login URL provided
          this.$toast.error(this.$t('Domain found but login failed. Please check your credentials'))
        }
      } catch (error) {
        console.error('Error in findDomain:', error)

        // Handle validation errors
        if (error.response && error.response.status === 422) {
          // Validation errors are handled by the form component
          console.log('Validation errors:', error.response.data)
          if (error.response.data && error.response.data.errors) {
            // Show first error
            const firstError = Object.values(error.response.data.errors)[0]
            if (firstError && firstError.length > 0) {
              this.$toast.error(firstError[0])
            }
          }
          return
        }

        // Handle domain not found error (404)
        if (error.response && error.response.status === 404) {
          this.$toast.error(this.$t('Domain not found. Please check your domain name and try again'))
          return
        }

        // Handle authentication errors (401)
        if (error.response && error.response.status === 401) {
          this.$toast.error(this.$t('Invalid email or password. Please check your credentials'))
          return
        }

        // Show error message for other errors
        if (error.response && error.response.data && error.response.data.message) {
          this.$toast.error(error.response.data.message)
        } else {
          this.$toast.error(this.$t('Login failed. Please check your credentials and domain'))
        }
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
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

.input-radius-10 {
  border-radius: 10px !important;
}

.input-radius-10:focus {
  border: 1px solid #0775AF !important;
  outline: none;
}

.domain-host-span {
  height: 80%;
  margin-left: 8px !important;
  margin-right: 8px !important;
  margin-top: 3px !important;
  background: #F7F7FC;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  line-height: 2;
}

.password-input-wrapper {
  position: relative;
}

.password-toggle-btn {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
}

.password-toggle-btn:hover {
  color: #0775AF;
}

.password-toggle-btn:focus {
  outline: none;
}

.password-toggle-btn i {
  font-size: 16px;
}

/* RTL support for password toggle button */
[dir="rtl"] .password-toggle-btn {
  right: auto;
  left: 15px;
}

.register-submit-btn-wrapper {
  padding: 1px;
  margin: 1rem 0 0.5rem 0;
}

.register-submit-btn {
  background: #0775AF !important;
  border: 1px solid #0775AF !important;
  padding: 12px;
  border-radius: 9px;
  color: #ffffff;
  font-weight: 500;
  transition: all 0.3s ease;
  width: 100%;
  margin: 0;
}

.register-submit-btn:hover {
  background: #06608a !important;
  color: #ffffff;
}

.register-submit-btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(7, 117, 175, 0.25);
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

/* Already registered text styling */
.already-registered-text {
  color: #000000;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.already-registered-question {
  color: #000000;
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
