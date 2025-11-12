<template>
  <div>
    <!-- Login Steps Modal -->
    <LoginStepsModal 
      :show="showLoginModal" 
      :current-step="currentStep"
    />
    
    <!-- Main login form -->
    <div v-if="!showLoginModal" class="container-fluid">
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

                  <form @submit.prevent="handleSubmit" @keydown="handleKeydown">
                    <!-- domain -->
                    <div class="form-group mb-3">
                      <div class="d-flex align-items-center mb-2">
                        <label for="domain" class="form-label mb-0">{{ $t('domain') }}</label>
                        <i class="fas fa-info-circle ms-2" 
                           v-tooltip="$t('domain_explanation')" 
                           style="cursor: help; font-size: 14px;"></i>
                      </div>
                      <div class="d-flex url">
                        <input v-model="form.domain" id="domain" name="domain"
                          :class="{ 'is-invalid': form.errors.has('domain') }" class="
                            form-control
                            rounded-pill
                            border-0
                            shadow-sm
                            px-4
                            text-primary
                          " type="text" :placeholder="$t('domain')" />
                        <span style="height: 100%; line-height: 2">{{ host }}</span>
                      </div>
                      <has-error :form="form" :style="[form.errors.has('domain') ? 'block' : 'none']" field="domain" />
                    </div>
                    
                    <!-- email -->
                    <div class="form-group mb-3">
                      <input v-model="form.email" id="email" name="email"
                        :class="{ 'is-invalid': form.errors.has('email') }" class="
                          form-control
                          rounded-pill
                          border-0
                          shadow-sm
                          px-4
                          text-primary
                        " type="email" :placeholder="$t('email_placeholder')" />
                      <has-error :form="form" field="email" />
                    </div>
                    
                    <!-- password -->
                    <div class="form-group mb-3">
                      <input v-model="form.password" id="password" name="password"
                        :class="{ 'is-invalid': form.errors.has('password') }" class="
                          form-control
                          rounded-pill
                          border-0
                          shadow-sm
                          px-4
                          text-primary
                        " type="password" :placeholder="$t('password_placeholder')" />
                      <has-error :form="form" field="password" />
                    </div>
                    
                    <!-- Submit Button -->
                    <button type="button" 
                      :disabled="showLoginModal || form.busy"
                      @click="handleSubmit"
                      class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                      <strong>{{ $t('login') }}</strong>
                      <i v-if="showLoginModal || form.busy" class="fas fa-spinner fa-spin"></i>
                      <i v-else class="fas fa-sign-in-alt" style="transform: scaleX(-1);"></i>
                    </button>
                  </form>
                  <div class="row text-center">
                    <router-link :to="{ name: 'register' }" class="ml-auto my-auto">
                      {{ $t('register_invite') }}
                    </router-link>
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
import LoginStepsModal from '../../components/LoginStepsModal.vue'

export default {
  layout: 'basic',
  middleware: 'guest',
  components: {
    LoginStepsModal
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
    appName: window.config.appName,
    host: location.host,
    showLoginModal: false,
    currentStep: 0
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
      if (this.showLoginModal) {
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
      
      // Show modal and start step 1
      this.showLoginModal = true
      this.currentStep = 1
      
      try {
        // Step 1: Find the domain and get tenant info
        console.log('Calling /api/find-domain...')
        
        // Use axios directly instead of form.post to avoid form validation issues
        const domainResponse = await this.$axios.post('/api/find-domain', {
          domain: this.form.domain,
          email: this.form.email,
          password: this.form.password
        })
        
        console.log('Domain response:', domainResponse)
        
        if (domainResponse && domainResponse.data.success) {
          // Step 1 completed, move to step 2 (verifying credentials happens in the API)
          // Since the API already verified credentials, we can move to step 3
          this.currentStep = 2
          
          // Small delay to show step 2
          await this.delay(800)
          
          // Step 3: Setting up session - redirect to tenant domain
          this.currentStep = 3
          
          // Small delay to show step 3
          await this.delay(800)
          
          // Step 4: Redirecting
          this.currentStep = 4
          
          // Small delay before redirect
          await this.delay(500)
          
          // Redirect to the tenant domain using the special login URL
          // This will complete the login process on the tenant domain
          window.location.href = domainResponse.data.data.login_url
        } else {
          // Handle case where response is successful but no login URL provided
          this.$toast.error(this.$t('Domain found but login failed. Please check your credentials'))
          this.showLoginModal = false
          this.currentStep = 0
        }
      } catch (error) {
        console.error('Error in findDomain:', error)
        
        // Hide modal on error
        this.showLoginModal = false
        this.currentStep = 0
        
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
    
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
  }
}
</script>

