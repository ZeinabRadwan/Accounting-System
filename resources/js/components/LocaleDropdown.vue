<template>
  <div>
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle custom-nav-btn" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
      aria-expanded="false" v-tooltip="$t('Language')">
      <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.1703 17.9144L15.9203 7.41437C15.858 7.28982 15.7623 7.18506 15.6438 7.11185C15.5253 7.03864 15.3888 6.99986 15.2495 6.99986C15.1103 6.99986 14.9737 7.03864 14.8553 7.11185C14.7368 7.18506 14.641 7.28982 14.5787 7.41437L12.5434 11.4859C10.9481 11.3962 9.41312 10.8452 8.125 9.89969C9.63633 8.28575 10.552 6.20463 10.7209 4H13C13.1989 4 13.3897 3.92098 13.5303 3.78033C13.671 3.63968 13.75 3.44891 13.75 3.25C13.75 3.05109 13.671 2.86032 13.5303 2.71967C13.3897 2.57902 13.1989 2.5 13 2.5H7.75V1C7.75 0.801088 7.67098 0.610322 7.53033 0.46967C7.38968 0.329018 7.19891 0.25 7 0.25C6.80109 0.25 6.61032 0.329018 6.46967 0.46967C6.32902 0.610322 6.25 0.801088 6.25 1V2.5H1C0.801088 2.5 0.610322 2.57902 0.46967 2.71967C0.329018 2.86032 0.25 3.05109 0.25 3.25C0.25 3.44891 0.329018 3.63968 0.46967 3.78033C0.610322 3.92098 0.801088 4 1 4H9.21531C9.04827 5.83811 8.26802 7.56667 7 8.90781C6.20984 8.07406 5.60306 7.08406 5.21875 6.00156C5.18715 5.90712 5.13705 5.81991 5.07139 5.74503C5.00572 5.67015 4.9258 5.6091 4.83629 5.56544C4.74678 5.52178 4.64946 5.49639 4.55003 5.49074C4.4506 5.48509 4.35104 5.49931 4.25715 5.53255C4.16327 5.5658 4.07695 5.61741 4.00323 5.68437C3.92951 5.75133 3.86987 5.83231 3.82778 5.92257C3.78569 6.01283 3.76199 6.11057 3.75808 6.21009C3.75417 6.3096 3.77012 6.4089 3.805 6.50219C4.25244 7.76769 4.95726 8.92674 5.875 9.90625C4.46197 10.9446 2.75353 11.5031 1 11.5C0.801088 11.5 0.610322 11.579 0.46967 11.7197C0.329018 11.8603 0.25 12.0511 0.25 12.25C0.25 12.4489 0.329018 12.6397 0.46967 12.7803C0.610322 12.921 0.801088 13 1 13C3.17555 13.0024 5.28875 12.2734 7 10.93C8.39648 12.0211 10.0635 12.7117 11.8225 12.9278L9.32875 17.9144C9.28467 18.0025 9.25838 18.0984 9.25137 18.1966C9.24436 18.2949 9.25677 18.3935 9.28789 18.487C9.35075 18.6757 9.486 18.8318 9.66391 18.9208C9.84181 19.0098 10.0478 19.0245 10.2365 18.9616C10.4253 18.8988 10.5813 18.7635 10.6703 18.5856L11.9631 16H18.5359L19.8288 18.5856C19.8911 18.7102 19.9869 18.815 20.1055 18.8882C20.2241 18.9614 20.3607 19.0001 20.5 19C20.6278 18.9999 20.7535 18.9672 20.8651 18.9049C20.9768 18.8426 21.0706 18.7528 21.1378 18.644C21.2049 18.5353 21.2432 18.4111 21.2489 18.2834C21.2546 18.1557 21.2275 18.0287 21.1703 17.9144ZM12.7131 14.5L15.25 9.42719L17.7859 14.5H12.7131Z" fill="#33A0D9"/>
      </svg>
      <span v-if="isLoading" class="ml-1">
        <i class="fas fa-spinner fa-spin"></i>
      </span>
    </a>
    <div class="dropdown-menu dropdown-menu-sm">
      <a v-for="(value, key) in locales" :key="key" class="dropdown-item" :title="Array.isArray(value) ? value[1] : value" href="#"
        @click.prevent="setLocale(key)" :class="{ 'disabled': isLoading }">
        <span v-if="key === 'ar'" class="fi fis fi-sa" :title="Array.isArray(value) ? value[1] : value"></span>
        <lang-flag v-else :iso="getFlagCode(key, Array.isArray(value) ? value[0] : null)" />
        {{ $t(`languages.${key}`) }}
      </a>
    </div>
    </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'
import LangFlag from 'vue-lang-code-flags'
import axios from 'axios'

export default {
  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales',
  }),

  mounted() {
    // Component mounted successfully
  },

  components: {
    LangFlag,
  },

  data() {
    return {
      isLoading: false
    }
  },

  methods: {
    // Get the correct flag code for a locale
    getFlagCode(locale, defaultCode) {
      // Use Saudi Arabia flag for Arabic
      if (locale === 'ar') {
        return 'SA'
      }
      // Ensure we always return a valid string
      if (defaultCode && typeof defaultCode === 'string' && defaultCode.trim()) {
        return defaultCode
      }
      // Fallback to locale code in uppercase
      return locale ? locale.toUpperCase() : 'UN'
    },
    
    // Simple RTL utility function
    applyRTLMode(locale) {
      const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'ku', 'yi']
      const isRTL = rtlLanguages.includes(locale.toLowerCase())
      
      // Update document attributes
      document.documentElement.setAttribute('lang', locale)
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
      document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
      
      // Update CSS classes
      if (isRTL) {
        document.body.classList.add('rtl')
        document.body.classList.remove('ltr')
      } else {
        document.body.classList.add('ltr')
        document.body.classList.remove('rtl')
      }
      
      // Store in localStorage
      localStorage.setItem('current_locale', locale)
      localStorage.setItem('rtl_mode', isRTL.toString())
      
      console.log('LocaleDropdown: Applied RTL mode - Locale:', locale, 'RTL:', isRTL)
    },

    // Check if a locale is RTL
    isRTLLocale(locale) {
      const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'ku', 'yi']
      return rtlLanguages.includes(locale.toLowerCase())
    },

    async setLocale(locale) {
      // Don't change if it's the same locale or if already loading
      if (this.$i18n.locale === locale || this.isLoading) {
        return
      }

      // Validate locale exists
      if (!this.locales[locale]) {
        console.error('Invalid locale:', locale)
        return
      }

      // Check if we're on tenant initialization page
      const isTenantInitialization = this.$route && (
        this.$route.name === 'tenant.initialization' || 
        this.$route.path === '/tenant-initialization'
      )

      this.isLoading = true

      try {
        // If on tenant initialization page, change locale client-side only (no API call)
        if (isTenantInitialization) {
          // Update client-side i18n and Vuex store
          await loadMessages(locale)
          this.$store.dispatch('lang/setLocale', { locale })
          
          // Apply RTL mode using multiple methods
          this.applyRTLMode(locale)
          
          // Use global RTL manager if available
          if (window.RTLManager) {
            window.RTLManager.applyRTLMode(locale)
          }
          
          // Force RTL mode multiple times to ensure it sticks
          setTimeout(() => {
            this.applyRTLMode(locale)
          }, 100)
          
          setTimeout(() => {
            this.applyRTLMode(locale)
          }, 300)
          
          // Save to localStorage for persistence
          localStorage.setItem('current_locale', locale)
          localStorage.setItem('locale_just_changed', 'true')
          setTimeout(() => {
            localStorage.removeItem('locale_just_changed')
          }, 1000)
          
          // Show success message
          if (this.$toast) {
            this.$toast.success(this.$t('Locale changed successfully'))
          }
          
          // Force Vue to re-render all components with new locale
          this.$forceUpdate()
          
          // Trigger a custom event for components to listen to
          window.dispatchEvent(new CustomEvent('locale-changed', {
            detail: { locale: locale, isRTL: this.isRTLLocale(locale) }
          }))
          
          // Force re-render all components without page refresh
          this.$nextTick(() => {
            this.$forceUpdate()
            // Force re-render of all child components
            this.$children.forEach(child => {
              if (child.$forceUpdate) {
                child.$forceUpdate()
              }
            })
          })
          
          this.isLoading = false
          return
        }

        // Make an API call to Laravel - use public endpoint for unauthenticated users
        const isAuthenticated = this.$store.getters['auth/check']
        const endpoint = isAuthenticated ? '/api/set-locale' : '/api/set-locale-public'
        const response = await axios.post(endpoint, { locale })

        // Check if response exists and has data
        if (response && response.data && response.data.success) {
          // Update client-side i18n and Vuex store
          await loadMessages(locale)
          this.$store.dispatch('lang/setLocale', { locale })
          
          // Apply RTL mode using multiple methods
          this.applyRTLMode(locale)
          
          // Use global RTL manager if available
          if (window.RTLManager) {
            window.RTLManager.applyRTLMode(locale)
          }
          
          // Force RTL mode multiple times to ensure it sticks
          setTimeout(() => {
            this.applyRTLMode(locale)
          }, 100)
          
          setTimeout(() => {
            this.applyRTLMode(locale)
          }, 300)
          
          // Set a flag to prevent middleware from overriding
          localStorage.setItem('locale_just_changed', 'true')
          setTimeout(() => {
            localStorage.removeItem('locale_just_changed')
          }, 1000)
          
          // Show success message
          if (this.$toast) {
            this.$toast.success(this.$t('Locale changed successfully'))
          }
          
          location.reload()
          // Force Vue to re-render all components with new locale
          this.$forceUpdate()
          
          // Trigger a custom event for components to listen to
          window.dispatchEvent(new CustomEvent('locale-changed', {
            detail: { locale: locale, isRTL: this.isRTLLocale(locale) }
          }))
          
          // Force re-render all components without page refresh
          this.$nextTick(() => {
            this.$forceUpdate()
            // Force re-render of all child components
            this.$children.forEach(child => {
              if (child.$forceUpdate) {
                child.$forceUpdate()
              }
            })
          })
        } else {
          console.error('Failed to set locale:', response?.data?.error || 'Unknown error')
          if (this.$toast) {
            this.$toast.error(this.$t('Failed to change locale'))
          }
        }
      } catch (error) {
        console.error('Error setting locale:', error)
        
        // Handle different types of errors
        if (error.response) {
          // Server responded with error status
          console.error('Server error:', error.response.status, error.response.data)
          if (this.$toast) {
            this.$toast.error(this.$t('Server error: {status}', { status: error.response.status }))
          }
        } else if (error.request) {
          // Request was made but no response received
          console.error('No response received:', error.request)
          if (this.$toast) {
            this.$toast.error('No response from server')
          }
        } else {
          // Something else happened
          console.error('Request setup error:', error.message)
          if (this.$toast) {
            this.$toast.error('Request failed')
          }
        }
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>

<style scoped>
.disabled {
  pointer-events: none;
  opacity: 0.6;
}

.dropdown-item:hover:not(.disabled) {
  background-color: #f8f9fa;
}

/* Custom navbar button styles for language dropdown */
.custom-nav-btn {
  background: #33A0D91A !important;
  color: #33A0D9 !important;
  width: 48px !important;
  height: 48px !important;
  border-radius: 10px !important;
  padding: 12px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  border: none !important;
  transition: all 0.3s ease !important;
  margin: 0 4px !important;
}

.custom-nav-btn:hover {
  background: #33A0D933 !important;
  color: #33A0D9 !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.2) !important;
}

.custom-nav-btn:focus {
  background: #33A0D91A !important;
  color: #33A0D9 !important;
  box-shadow: 0 0 0 2px rgba(51, 160, 217, 0.3) !important;
}

.custom-nav-btn svg {
  color: #33A0D9 !important;
  stroke: #33A0D9 !important;
}
</style>