<template>
  <div>
    <!-- Language Switcher for Auth Pages - Hidden on tenant initialization -->
    <div v-if="showLanguageSwitcher" class="language-switcher-container">
      <LocaleDropdown />
    </div>
    <child />
  </div>
</template>

<script>
import LocaleDropdown from '../components/LocaleDropdown.vue'

export default {
  name: 'BasicLayout',
  components: { 
    LocaleDropdown
  },
  computed: {
    isAuthPage() {
      // Check if current route is an auth page
      if (!this.$route || !this.$route.name) {
        return false
      }
      const authRoutes = ['login', 'register', 'find-domain', 'password.request', 'password.reset', 'verification.verify', 'verification.resend', 'resend', 'tenant.initialization']
      return authRoutes.includes(this.$route.name)
    },
    isTenantInitialization() {
      // Hide language switcher on tenant initialization page
      if (!this.$route || !this.$route.name) {
        return false
      }
      return this.$route.name === 'tenant.initialization' || this.$route.path === '/tenant-initialization'
    },
    showLanguageSwitcher() {
      // Show language switcher on all auth pages (including tenant initialization)
      // LocaleDropdown component will handle preventing locale changes on tenant initialization
      return this.isAuthPage
    }
  }
}
</script>

<style lang="scss">
.basic-layout {
  color: #636b6f;
  height: 100vh;
  font-weight: 100;
  position: relative;

  .links>a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
}

.language-switcher-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  
  .nav-item {
    list-style: none;
  }
  
  .dropdown-menu {
    min-width: 150px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #e3e6f0;
    border-radius: 8px;
    right: 0;
    left: auto;
  }
  
  .dropdown-item {
    padding: 8px 16px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    
    &:hover {
      background-color: #f8f9fa;
    }
  }
}

// RTL support for language switcher
[dir="rtl"] .language-switcher-container {
  right: auto;
  left: 20px;
  
  .dropdown-menu {
    right: auto;
    left: 0;
  }
}

// RTL support for domain input
[dir="rtl"] .url {
  flex-direction: row-reverse !important;
  
  span {
    order: -1 !important;
  }
}

// More specific RTL support for domain input in auth pages
[dir="rtl"] .form-group .url {
  flex-direction: row-reverse !important;
  
  span {
    order: -1 !important;
  }
}

// Debug and force RTL for domain input
[dir="rtl"] .d-flex.url {
  flex-direction: row-reverse !important;
  display: flex !important;
  
  span {
    order: -1 !important;
    margin-left: 0 !important;
    margin-right: 8px !important;
  }
  
  input {
    order: 1 !important;
  }
}

// Even more specific targeting
[dir="rtl"] .form-group .d-flex.url {
  flex-direction: row-reverse !important;
  
  span {
    order: -1 !important;
  }
  
  input {
    order: 1 !important;
  }
}
</style>
