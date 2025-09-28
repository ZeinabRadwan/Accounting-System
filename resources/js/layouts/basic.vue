<template>
  <div>
    <!-- Language Switcher for Auth Pages -->
    <div v-if="isAuthPage" class="language-switcher-container">
      <LocaleDropdown />
    </div>
    <GlobalSaveButton v-if="!$route.path.includes('/sales/pos')" />
    <child />
  </div>
</template>

<script>
import GlobalSaveButton from '~/components/GlobalSaveButton'
import LocaleDropdown from '../components/LocaleDropdown.vue'

export default {
  name: 'BasicLayout',
  components: { 
    GlobalSaveButton,
    LocaleDropdown
  },
  computed: {
    isAuthPage() {
      // Check if current route is an auth page
      const authRoutes = ['login', 'register', 'find-domain', 'password.request', 'password.reset', 'verification.verify', 'verification.resend', 'resend']
      return authRoutes.includes(this.$route.name)
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
</style>
