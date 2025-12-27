<template>
  <div>
    <auth-wrapper :title="$t('find_domain')">
      <template #form>
        <form @submit.prevent="handleSubmit" @keydown="handleKeydown">
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
      </template>
    </auth-wrapper>
  </div>
</template>
<script>
import Form from 'vform'
import { mapGetters } from 'vuex'
import AuthWrapper from '@/components/auth/AuthWrapper.vue'

export default {
  layout: 'basic',
  middleware: 'guest',
  components: {
    AuthWrapper,
  },
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
          const loginUrl = domainResponse.data.data.login_url
          
          // Validate URL before redirecting
          try {
            // Use URL constructor to validate the URL
            new URL(loginUrl)
            // Use replace instead of href to avoid back button issues
            window.location.replace(loginUrl)
          } catch (urlError) {
            console.error('Invalid login URL:', urlError, loginUrl)
            this.$toast.error(this.$t('Invalid login URL generated. Please try again.'))
          }
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
/* No unique styles needed - all styles are in AuthWrapper */
</style>
