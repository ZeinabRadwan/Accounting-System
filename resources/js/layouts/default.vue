<template>
  <div>
    <div class="wrapper" :class="{ 'no-sidebar': !showSidebar }">
      <navbar />
      <sidebar v-if="showSidebar" />
      <!-- Main content -->
      <section class="content-wrapper">
        <div v-if="demo_message" class="demo-message alert alert-danger rounded-0">
          {{ demo_message }}
        </div>

        <div v-if="tenant && !tenant.is_subscribed" class="trial-alert rounded-0">
          {{ $t('You are not subscribed yet please subscribe.') }}
          <router-link :to="{ name: 'settings.billing' }">
            {{ $t('Billing Page') }}
          </router-link>
        </div>
        <div v-if="tenant && tenant.on_trial" class="trial-alert rounded-0">
          <div>
            {{ $t('You are on trial version! Your trial ends') }}
            {{ tenant.trial_ends_at | moment('from', 'now') }}!
          </div>
          <div class="mt-3 mt-md-0 mb-2 mb-md-0 my-md-2">
            <router-link :to="{ name: 'settings.billing' }">
              {{ $t('Billing Page') }}
            </router-link>
          </div>
        </div>
        <div v-if="subscription_limit_message" class="alert alert-danger rounded-0">
          {{ subscription_limit_message }}
        </div>
        <div class="container-fluid page-padding">
          <GlobalSaveButton v-if="!$route.path.includes('/sales/pos')" />
          <child />
        </div>
        <!-- /.container-fluid -->
      </section>

      <!-- Main content -->
      <footer class="main-footer">
        <strong v-if="appInfo">{{ appInfo.copyright }}</strong>
        <!-- Developed by
        <a href="https://codeshaper.net/" target="__blank">Codeshaper</a> -->
        <div v-if="appInfo" class="float-right d-none d-sm-inline-block"><b>Version</b> {{ appInfo.version }}</div>
      </footer>

      <!-- Control Sidebar -->
      <sidebar-controll />
      <!-- /.control-sidebar -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'
import SidebarControll from '~/components/SidebarControll'
import GlobalSaveButton from '~/components/GlobalSaveButton'

export default {
  name: 'MainLayout',
  data: () => ({
    year: new Date().getFullYear(),
  }),
  components: {
    Navbar,
    Sidebar,
    SidebarControll,
    GlobalSaveButton,
  },
  // Map Getters
  computed: {
    ...mapGetters('operations', [
      'appInfo',
      'tenant',
      'subscription_limit_message',
      'demo_message',
    ]),
    showSidebar() {
      // Hide sidebar on select-branch page
      return this.$route.name !== 'branches.select'
    },
  },

  created() {
    this.$store.dispatch('operations/fetchTenant')
    // Add body class immediately if on select-branch page
    if (!this.showSidebar) {
      document.body.classList.add('no-sidebar-page')
    }
  },

  watch: {
    '$route'(to, from) {
      // Update body class when route changes
      if (to.name === 'branches.select') {
        document.body.classList.add('no-sidebar-page')
      } else {
        document.body.classList.remove('no-sidebar-page')
      }
    },
    showSidebar(newVal) {
      if (!newVal) {
        document.body.classList.add('no-sidebar-page')
      } else {
        document.body.classList.remove('no-sidebar-page')
      }
    }
  },

  mounted() {
    if (!this.showSidebar) {
      document.body.classList.add('no-sidebar-page')
    }
  },

  beforeDestroy() {
    document.body.classList.remove('no-sidebar-page')
  },

  methods: {
    addBodyClass(className) {
      document.body.classList.toggle(className)
    },
  },
}
</script>


<style scoped>
.trial-alert {
  background: #dc354547;
  padding: 15px 20px;
  color: #dc3545;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.trial-alert a {
  background: #dc3545;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}

@media only screen and (max-width: 767px) {
  .trial-alert {
    display: block !important;
  }

}
</style>

<style>
/* Full width navbar when sidebar is hidden - Global styles */
body.no-sidebar-page .main-header,
.wrapper.no-sidebar .main-header,
.full-width-navbar.main-header {
  margin-left: 0 !important;
  margin-right: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
}

body.no-sidebar-page .content-wrapper,
body.no-sidebar-page .main-footer,
.wrapper.no-sidebar .content-wrapper,
.wrapper.no-sidebar .main-footer {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

/* RTL support for full width navbar */
[dir="rtl"] body.no-sidebar-page .main-header,
[dir="rtl"] .wrapper.no-sidebar .main-header,
[dir="rtl"] .full-width-navbar.main-header {
  margin-left: 0 !important;
  margin-right: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
}

[dir="rtl"] body.no-sidebar-page .content-wrapper,
[dir="rtl"] body.no-sidebar-page .main-footer,
[dir="rtl"] .wrapper.no-sidebar .content-wrapper,
[dir="rtl"] .wrapper.no-sidebar .main-footer {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
</style>
