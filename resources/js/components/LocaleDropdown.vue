<template>
  <li v-if="Object.keys(locales).length > 1" class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
      aria-expanded="false">
      <lang-flag :iso="locales[locale][0]" class="d-none d-md-inline-flex" />
      {{ locales[locale][0] }}
      <span v-if="isLoading" class="ml-1">
        <i class="fas fa-spinner fa-spin"></i>
      </span>
    </a>
    <div class="dropdown-menu dropdown-menu-sm">
      <a v-for="(value, key) in locales" :key="key" class="dropdown-item" :title="value[1]" href="#"
        @click.prevent="setLocale(key)" :class="{ 'disabled': isLoading }">
        <lang-flag :iso="value[0]" />
        {{ value[0] }}
      </a>
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'
import LangFlag from 'vue-lang-code-flags'
import axios from 'axios'
import rtlService from '~/services/RTLService'

export default {
  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales',
  }),

  components: {
    LangFlag,
  },

  data() {
    return {
      isLoading: false
    }
  },

  methods: {
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

      this.isLoading = true

      try {
        // Debug: Log the request details
        console.log('Setting locale to:', locale)
        console.log('Current URL:', window.location.href)
        console.log('CSRF token:', document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'))
        
        // Make an API call to Laravel
        const response = await axios.post('/api/set-locale', { locale })

        // Check if response exists and has data
        if (response && response.data && response.data.success) {
          // Update client-side i18n and Vuex store
          await loadMessages(locale)
          this.$store.dispatch('lang/setLocale', { locale })
          
          // Set RTL mode based on the selected locale
          rtlService.setRTLMode(locale)
          
          // Show success message
          if (this.$toast) {
            this.$toast.success(this.$t('Locale changed successfully'))
          }
          
          // Refresh the page to ensure all components update properly
          setTimeout(() => {
            window.location.reload()
          }, 500)
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
            this.$toast.error(`Server error: ${error.response.status}`)
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
</style>