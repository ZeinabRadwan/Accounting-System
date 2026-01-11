<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light"
    :class="{ 'full-width-navbar': isSelectBranchPage }"
    :style="isSelectBranchPage ? { marginLeft: '0', marginRight: '0', left: '0', right: '0', width: '100%', maxWidth: '100%' } : {}">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li v-if="showSidebarToggle" class="nav-item">
        <a class="nav-link custom-nav-btn" data-widget="pushmenu" href="#" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </a>
      </li>
    </ul>

    <!-- Search beside sidebar toggle -->
    <div class="navbar-search d-none d-md-block" :style="showSidebarToggle ? 'margin-left: 10px;' : 'margin-left: 0;'">
      <div class="search-area position-relative">
        <input ref="searchInput" type="text" v-model="menuSearchQuery" @input="searchMenu" class="search-input"
          :placeholder="`${$t('Search...')}`">
        <span class="search-icon" :class="[this.menuSearchQuery !== '' ? 'd-none' : '']">
          <i class="fas fa-search"></i>
        </span>
        <button v-if="menuSearchQuery" class="btn btn-link p-0 clear-btn" @click="clearMenuSearch">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div v-if="menuSearchQuery" class="dropdown-menu show w-100 mt-1 shadow"
        style="display:block; max-height: 320px; overflow:auto;">
        <div v-if="menuItems.length">
          <router-link v-for="(menuItem, index) in menuItems" :key="index" :to="{ name: menuItem.route }"
            class="dropdown-item d-flex align-items-center">
            <i v-if="menuItem.icon" :class="menuItem.icon + ' mr-2'" />
            <span>{{ $t(menuItem.text) }}</span>
          </router-link>
        </div>
        <div v-else class="dropdown-item text-muted">{{ $t('No matching items found') }}</div>
      </div>
    </div>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li v-if="currentBranchName" class="nav-item d-flex align-items-center mr-2" v-tooltip="displayBranchName">
        <span class="branch-pill d-inline-flex align-items-center">
          <i class="fas fa-code-branch mr-2"></i>
          <a href="#" @click.prevent="goSelectBranch" class="text-truncate" style="max-width: 180px;">{{
            displayBranchName }}</a>
        </span>
      </li>
      <!-- <li class="nav-item" v-tooltip="$t('Change Branch')">
        <a class="nav-link custom-nav-btn" href="#" @click.prevent="goSelectBranch">
          <i class="fas fa-code-branch"></i>
        </a>
      </li> -->
      <li v-if="$can('today-profit')" v-tooltip="$t('Today Report')" class="nav-item">
        <a class="nav-link custom-nav-btn"
          :href="`#${$route.name === 'reports.todayReport' ? '' : 'reports.todayReport'}`"
          @click.prevent="$router.push({ name: 'reports.todayReport' })">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 1v22M17 5v14M7 5v14M5 10h14M5 14h14" />
          </svg>
        </a>
      </li>

      <li v-if="$can('lc-create') ||
        $can('order-create') ||
        $can('invoice-create') ||
        $can('expense-create') ||
        $can('international-purchase-create')
      " class="nav-item dropdown" v-tooltip="$t('Quick Add')">
        <a class="nav-link custom-nav-btn" data-toggle="dropdown" href="#" aria-expanded="true">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
        <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
          <router-link v-if="$can('invoice-create')" :to="{ name: 'invoices.create' }"
            class="dropdown-item dropdown-icon-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            {{ $t("New Invoice") }}
          </router-link>
          <div class="dropdown-divider"></div>
          <router-link v-if="$can('expense-create')" :to="{ name: 'expenses.create' }"
            class="dropdown-item dropdown-icon-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            {{ $t("New Expense") }}
          </router-link>
          <div class="dropdown-divider"></div>
          <router-link v-if="$can('purchase-create')" :to="{ name: 'purchases.create' }"
            class="dropdown-item dropdown-icon-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {{ $t("New Purchase") }}
          </router-link>
          <div class="dropdown-divider"></div>
          <router-link v-if="$can('quotation-create')" :to="{ name: 'quotations.create' }"
            class="dropdown-item dropdown-icon-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            {{ $t("New Quotation") }}
          </router-link>
        </div>
      </li>

      <!-- Notifications Dropdown Menu -->
      <li class="nav-item dropdown" v-tooltip="$t('Notifications')">
        <a class="nav-link custom-nav-btn" data-toggle="dropdown" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span v-if="notificationCount > 0" class="badge badge-warning navbar-badge">{{ notificationCount }}</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <div class="dropdown-divider"></div>
          <router-link v-if="notificationCount > 0" class="dropdown-item" :to="{ name: 'stockAlertProducts' }">
            <i class="fas fa-exclamation-circle mr-2 red"></i>
            {{ notificationCount }} {{ $t("Product Quantity Alert(s)") }}
          </router-link>
          <a v-else href="#" class="dropdown-item">
            <i class="fas fa-check-circle mr-2 green"></i>
            {{ $t("No notification available") }}
          </a>
        </div>
      </li>

      <!-- Language Dropdown Menu -->
      <locale-dropdown />

      <li class="nav-item" v-tooltip="$t('Toggle Full Screen Mode')">
        <a class="nav-link custom-nav-btn" data-widget="fullscreen" href="#" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </a>
      </li>
      <!-- <li class="nav-item" v-tooltip="$t('Theme Settings')">
        <a class="nav-link custom-nav-btn" @click.prevent="sideBarControl" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </a>
      </li> -->

      <!-- User Dropdown Menu -->
      <li v-if="user" class="nav-item dropdown">
        <a class="nav-link user-profile" data-toggle="dropdown" href="#">
          <div>
            <img v-if="!imageError" :src="user.photo_url" :alt="user.name" @error="handleImageError"
              class="profile-avatar" />
            <div v-else class="profile-avatar profile-avatar-fallback">
              <i class="fas fa-user"></i>
            </div>
          </div>
          <div class="ml-2 d-none d-md-block">
            <div class="welcome-text">{{ $t('Welcome') }}</div>
            <div class="user-name">{{ getFirstName(user.name) }}</div>
          </div>
          <span class="mt-1 ml-1">
            <i class="fas fa-angle-down"></i>
          </span>
        </a>
        <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
          <router-link :to="{ name: 'settings.profile' }" class="dropdown-item dropdown-icon-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ $t("Profile") }}
          </router-link>
          <div class="dropdown-divider" />
          <router-link :to="{ name: 'settings.billing' }" class="dropdown-item dropdown-icon-center">
            <i class="pr-2 text-gray nav-icon  fas fa-money-check-alt"></i>{{ $t("Billing") }}
          </router-link>
          <div class="dropdown-divider" />
          <router-link :to="{ name: 'setup.general' }" class="dropdown-item dropdown-icon-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ $t("Setup") }}
          </router-link>
          <div class="dropdown-divider" />
          <a href="#" class="dropdown-item dropdown-icon-center" @click.prevent="clearCache">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {{ $t("Clear Cache") }}
          </a>
          <div class="dropdown-divider" />
          <a href="#" class="dropdown-item dropdown-icon-center" @click.prevent="logout">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            {{ $t("Logout") }}
          </a>
        </div>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import LocaleDropdown from "./LocaleDropdown";

export default {
  components: {
    LocaleDropdown,
  },

  data: () => ({
    appName: window.config.appName,
    notificationCount: 0,
    menuSearchQuery: "",
    menuItems: [],
    imageError: false,
    currentBranchName: '',
    navbarEnforcerInterval: null,
    searchDebounceTimer: null,
    cachedRoutes: null,
  }),

  computed: {
    ...mapGetters({
      user: "auth/user",
      appInfo: "operations/appInfo",
    }),
    searchPlaceholderText() {
      return this.$t('Search...');
    },
    displayBranchName() {
      if (this.currentBranchName === 'Main Branch') {
        return this.appInfo?.companyName || this.currentBranchName;
      }
      return this.currentBranchName;
    },
    showSidebarToggle() {
      // Hide sidebar toggle on select-branch page
      return this.$route.name !== 'branches.select';
    },
    isSelectBranchPage() {
      return this.$route.name === 'branches.select';
    }
  },

  created() {
    this.stockNotification();
    this.loadCurrentBranch();
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.setSearchPlaceholder();
      }, 100);
    });
    // Force navbar full width ONLY on select-branch page
    if (this.isSelectBranchPage) {
      this.$nextTick(() => {
        this.forceFullWidthNavbar();
        // Set up interval to continuously enforce styles (in case AdminLTE overrides)
        // Only runs on select-branch page
        this.navbarEnforcerInterval = setInterval(() => {
          if (this.isSelectBranchPage) {
            this.forceFullWidthNavbar();
          } else {
            // If we're no longer on select-branch page, clear interval and reset
            clearInterval(this.navbarEnforcerInterval);
            this.navbarEnforcerInterval = null;
            this.resetNavbarStyles();
          }
        }, 100);
      });
    } else {
      // Make sure styles are reset on other pages
      this.$nextTick(() => {
        this.resetNavbarStyles();
      });
    }
  },

  watch: {
    '$i18n.locale'() {
      this.updateSearchPlaceholder();
      // Clear cached routes when locale changes
      this.cachedRoutes = null;
    },
    '$route'(to, from) {
      // Clear any existing interval first
      if (this.navbarEnforcerInterval) {
        clearInterval(this.navbarEnforcerInterval);
        this.navbarEnforcerInterval = null;
      }

      // Reset styles when leaving select-branch page
      if (from && from.name === 'branches.select' && to.name !== 'branches.select') {
        this.$nextTick(() => {
          this.resetNavbarStyles();
        });
      }

      // Force navbar full width when route changes to select-branch
      if (to.name === 'branches.select') {
        this.$nextTick(() => {
          this.forceFullWidthNavbar();
          // Set up interval to continuously enforce styles (only on select-branch page)
          this.navbarEnforcerInterval = setInterval(() => {
            if (this.isSelectBranchPage) {
              this.forceFullWidthNavbar();
            } else {
              // If we're no longer on select-branch page, clear interval and reset
              clearInterval(this.navbarEnforcerInterval);
              this.navbarEnforcerInterval = null;
              this.resetNavbarStyles();
            }
          }, 100);
        });
      }
    },
    user: {
      handler() {
        // Reload current branch when user changes (e.g., after selecting new default)
        this.loadCurrentBranch();
      },
      deep: false
    }
  },

  methods: {
    goSelectBranch() {
      this.$router.push({ name: 'branches.select', query: { redirect: this.$route.fullPath } })
    },
    async loadCurrentBranch() {
      try {
        const { data } = await axios.get('/api/branches/current')
        this.currentBranchName = data?.branch?.name || ''
      } catch (e) {
        this.currentBranchName = ''
      }
    },
    setSearchPlaceholder() {
      if (this.$refs.searchInput) {
        this.$refs.searchInput.setAttribute('placeholder', this.$t('Search...'));
      }
    },

    updateSearchPlaceholder() {
      this.setSearchPlaceholder();
    },

    getPlaceholder() {
      return this.$t('Search...');
    },

    // get stock notification
    async stockNotification() {
      const { data } = await axios.get(
        window.location.origin + "/api/dashboard/stock-notification"
      );
      this.notificationCount = data;
    },

    // handle image load error
    handleImageError(event) {
      console.log('Profile image failed to load:', event.target.src);
      this.imageError = true;
      // Fallback to a default avatar or initials
      event.target.style.display = 'none';
    },

    // get first name from full name
    getFirstName(fullName) {
      if (!fullName) return '';
      return fullName.split(' ')[0];
    },

    clearMenuSearch() {
      // Clear debounce timer
      if (this.searchDebounceTimer) {
        clearTimeout(this.searchDebounceTimer);
        this.searchDebounceTimer = null;
      }
      this.menuSearchQuery = "";
      this.menuItems = [];
    },

    // Get all routes from Sidebar structure
    getAllSidebarRoutes() {
      const routes = [];

      // Helper function to add route
      const addRoute = (routeName, translationKey, icon = null) => {
        if (!routeName) return;

        // Get translations in both languages
        const enTranslation = this.getTranslation('en', translationKey);
        const arTranslation = this.getTranslation('ar', translationKey);

        routes.push({
          route: routeName,
          text: translationKey,
          icon: icon,
          enText: enTranslation,
          arText: arTranslation
        });
      };

      // Dashboard
      addRoute('home', 'Dashboard', 'fas fa-home');

      // Sales section
      if (this.$can('invoice-list') || this.$can('invoice-create') || this.$can('quotation-list') || this.$can('quotation-create')) {
        addRoute('pos.create', 'POS', 'fas fa-cash-register');
        addRoute('quotations.index', 'Quotations List', 'fas fa-th-list');
        addRoute('invoices.index', 'Invoices List', 'fas fa-file-invoice');
        addRoute('invoiceReturns.index', 'Returns List', 'fas fa-undo-alt');
        addRoute('clients.index', 'Clients', 'fas fa-users');
      }

      // Purchases section
      if (this.$can('purchase-list') || this.$can('purchase-create') || this.$can('purchase-order-list')) {
        addRoute('purchase-order.index', 'Purchase Orders', 'fas fa-file-invoice');
        addRoute('purchases.index', 'Purchases List', 'fas fa-truck-loading');
        addRoute('purchaseReturns.index', 'Returns List', 'fas fa-undo-alt');
        addRoute('suppliers.index', 'Suppliers', 'fas fa-people-carry');
      }

      // Employees section
      if (this.$can('employee-list') || this.$can('department-list') || this.$can('increment-list')) {
        addRoute('departments.index', 'Departments', 'fas fa-server');
        addRoute('employees.index', 'Employees List', 'fas fa-list-ul');
        addRoute('increments.index', 'Increments', 'fas fa-list-ul');
      }

      // Accounting section
      if ((this.$can('account-list') || this.$can('chart-of-account-list') || this.$can('account-balance-list')) &&
        (this.$canAccessModule('accounting') || this.$canAccessModule('both'))) {
        addRoute('chart-of-accounts.index', 'Chart of Accounts', 'fas fa-chart-line');
        addRoute('accounts.index', 'Bank Accounts', 'fas fa-university');
        addRoute('balances.index', 'Balance Adjustments', 'fas fa-sliders-h');
        addRoute('transferBalances.index', 'Balance Transfers', 'fas fa-exchange-alt');
        addRoute('transactions.index', 'Transaction History', 'fas fa-history');
      }

      // Cost Centers
      if ((this.$can('view_cost_centers') || this.$can('create_cost_center')) &&
        (this.$canAccessModule('accounting') || this.$canAccessModule('both'))) {
        addRoute('cost-centers.index', 'All Cost Centers', 'fas fa-list');
        addRoute('cost-centers.tree', 'Tree View', 'fas fa-sitemap');
        addRoute('cost-centers.create', 'Create Cost Center', 'fas fa-plus');
      }

      // Cost Allocations
      // Hidden for now
      /*
      if ((this.$can('view_cost_centers') || this.$can('create_cost_center')) && 
          (this.$canAccessModule('accounting') || this.$canAccessModule('both'))) {
        addRoute('cost-allocations.index', 'Allocation Rules', 'fas fa-list');
        addRoute('cost-allocations.create', 'Create Rule', 'fas fa-plus');
      }
      */

      // Journal Entries
      if ((this.$can('journal-entry-list') || this.$can('journal-entry-create')) &&
        (this.$canAccessModule('accounting') || this.$canAccessModule('both'))) {
        addRoute('journal-entries.index', 'All Entries', 'fas fa-list');
        addRoute('journal-entries.create', 'New Entry', 'fas fa-plus');
      }

      // Expenses
      if (!this.$isPOS() && (this.$can('expense-list') || this.$can('expense-category-list'))) {
        addRoute('expenseCats.index', 'Categories', 'fas fa-tags');
        addRoute('expenseSubCats.index', 'Sub Categories', 'fas fa-code-branch');
        addRoute('expenses.index', 'Expenses List', 'fas fa-list-ul');
      }

      // Vouchers
      if (!this.$isPOS() && this.$can('payment-voucher-list')) {
        addRoute('receiveVouchers.index', 'Receive Vouchers', 'fas fa-arrow-down');
        addRoute('sendVouchers.index', 'Send Vouchers', 'fas fa-arrow-up');
      }

      // Payments
      if (!this.$isPOS()) {
        if (this.$can('invoice-payment-list') || this.$can('non-invoice-payment-list')) {
          addRoute('invoicePayments.index', 'Invoice', 'fas fa-file-invoice');
          addRoute('nonInvoicePayments.index', 'Non Invoice', 'fas fa-file-alt');
        }
        if (this.$can('purchase-payment-list') || this.$can('non-purchase-payment-list')) {
          addRoute('purchasePayments.index', 'Purchase', 'fas fa-plane-departure');
          addRoute('nonPurchasePayments.index', 'Non Purchase', 'fas fa-truck-pickup');
        }
      }

      // Loan Management
      if (!this.$isPOS() && (this.$can('loan-list') || this.$can('loan-authority-list'))) {
        addRoute('authorities.index', 'Authorities', 'fas fa-building');
        addRoute('loans.index', 'Loans', 'fas fa-list-ul');
        addRoute('loanPayments.index', 'Payments', 'fas fa-receipt');
      }

      // Asset Management
      if (!this.$isPOS() && (this.$can('asset-list') || this.$can('asset-type-list'))) {
        addRoute('assetTypes.index', 'Types', 'fas fa-tags');
        addRoute('assets.index', 'Assets', 'fas fa-list-ul');
      }

      // Payroll
      if (!this.$isPOS() && this.$can('payroll-list')) {
        addRoute('payroll.index', 'Payroll', 'fas fa-clipboard-list');
      }

      // Inventory
      if (this.$can('product-create') || this.$can('product-category-create')) {
        addRoute('productCats.index', 'Categories', 'fas fa-tags');
        addRoute('productSubCats.index', 'Sub Categories', 'fas fa-code-branch');
        addRoute('products.index', 'Item List', 'fas fa-list-ul');
        if (this.$can('print-barcode')) {
          addRoute('barcode.print', 'Barcode', 'fas fa-barcode');
        }
      }

      if (this.$can('inventory') || this.$can('adjustment-create')) {
        addRoute('inventory.index', 'View Inventory', 'fas fa-pallet');
        addRoute('inventory.history-general', 'Inventory History', 'fas fa-history');
        addRoute('inventory.count', 'Inventory Count', 'fas fa-clipboard-check');
        addRoute('adjustments.index', 'Inventory Adjustment', 'fas fa-sliders-h');
      }

      // Reports
      if (!this.$isPOS()) {
        if (this.$can('account-statement')) {
          addRoute('reports.accountStatement', 'Account Statement', 'fas fa-chart-bar');
          addRoute('reports.groupAccountStatement', 'Group Account Statement', 'fas fa-chart-bar');
          addRoute('reports.analyticalAccountStatement', 'Analytical Account Statement', 'fas fa-chart-bar');
          addRoute('reports.invoiceSummary', 'Invoice Summary', 'fas fa-chart-bar');
          addRoute('reports.purchaseSummary', 'Purchase Summary', 'fas fa-chart-bar');
        }
        if (this.$can('balance-sheet') && (this.$canAccessModule('accounting') || this.$canAccessModule('both'))) {
          addRoute('reports.balanceSheet', 'Balance Sheet', 'fas fa-chart-bar');
          addRoute('reports.trialBalance', 'Trial Balance', 'fas fa-chart-bar');
        }
        if (this.$can('vat-report') && (this.$canAccessModule('accounting') || this.$canAccessModule('both'))) {
          addRoute('reports.vatReport', 'VAT Report', 'fas fa-chart-bar');
        }
        if (this.$can('today-profit')) {
          addRoute('reports.todayReport', 'Today Report', 'fas fa-chart-bar');
        }
        if (this.$can('summary-report') && (this.$canAccessModule('accounting') || this.$canAccessModule('both'))) {
          addRoute('reports.summary', 'Summary Report', 'fas fa-chart-bar');
        }
        if (this.$can('profit-loss') && (this.$canAccessModule('accounting') || this.$canAccessModule('both'))) {
          addRoute('reports.profitLoss', 'Profit/Loss Report', 'fas fa-chart-bar');
        }
        if (this.$can('expense-report')) {
          addRoute('reports.expenses', 'Expense Report', 'fas fa-chart-bar');
        }
        if (this.$can('item-report')) {
          addRoute('reports.items', 'Item Report', 'fas fa-chart-bar');
        }
        if (this.$can('inventory-report')) {
          addRoute('reports.inventory', 'Inventory Report', 'fas fa-chart-bar');
        }
        if (this.$can('balance-sheet')) {
          addRoute('reports.supplierPayableReport', 'Supplier Payable Report', 'fas fa-chart-bar');
          addRoute('reports.clientReceivableReport', 'Client Receivable Report', 'fas fa-chart-bar');
        }
        if (this.$can('sales-by-user-report')) {
          addRoute('reports.salesByUserReport', 'Sales By User Report', 'fas fa-chart-bar');
        }
        if (this.$can('collection-by-user-report')) {
          addRoute('reports.collectionByUserReport', 'Collection By User Report', 'fas fa-chart-bar');
        }
      }

      // Others
      if (!this.$isPOS()) {
        if (this.$can('branches-list') || this.$can('branches-create')) {
          addRoute('branches.index', 'Branches', 'fas fa-sitemap');
        }
        if (this.$can('role-permissions') || this.$can('units') || this.$can('currencies') || this.$can('general-settings')) {
          addRoute('setup.index', 'Setup', 'fas fa-cogs');
        }
        if (this.$can('print-templates')) {
          addRoute('print-templates', 'Print Templates', 'fas fa-print');
        }
        addRoute('activity.log', 'Activity log', 'fa fa-bell');
        addRoute('settings.billing', 'Billing', 'fas fa-money-check-alt');
        addRoute('settings.profile', 'Profile', 'fas fa-user-circle');
        if (this.$can('domain-management')) {
          addRoute('domains.index', 'Domain Management', 'fas fa-server');
          addRoute('domain-requests.index', 'Domain Request', 'fas fa-file-import');
        }
        if (this.$can('database-backup')) {
          addRoute('backup', 'Database Backup', 'fas fa-download');
        }
      }

      return routes;
    },

    // Helper to get translation in specific language (optimized)
    getTranslation(locale, key) {
      try {
        const i18n = this.$i18n;
        // Access messages directly from i18n without switching locale
        if (i18n && i18n.messages && i18n.messages[locale]) {
          const messages = i18n.messages[locale];
          if (messages && messages[key]) {
            return messages[key];
          }
        }
        // Fallback: return key if translation not found
        return key;
      } catch (error) {
        return key;
      }
    },

    // Search through routes with debouncing
    searchMenu() {
      // Clear existing timer
      if (this.searchDebounceTimer) {
        clearTimeout(this.searchDebounceTimer);
      }

      // Debounce the search to avoid running on every keystroke
      this.searchDebounceTimer = setTimeout(() => {
        this.performSearch();
      }, 150); // 150ms delay
    },

    // Perform the actual search
    performSearch() {
      const menuSearchQuery = this.menuSearchQuery.trim().toLowerCase();
      if (!menuSearchQuery) {
        this.menuItems = [];
        return;
      }

      try {
        // Get cached routes or calculate them once
        if (!this.cachedRoutes) {
          this.cachedRoutes = this.getAllSidebarRoutes();
        }

        const allRoutes = this.cachedRoutes;

        // Filter routes based on search query
        const matchedRoutes = allRoutes.filter(route => {
          // Search in English translation
          const enMatch = route.enText && route.enText.toLowerCase().includes(menuSearchQuery);
          // Search in Arabic translation
          const arMatch = route.arText && route.arText.toLowerCase().includes(menuSearchQuery);
          // Search in route name
          const routeMatch = route.route && route.route.toLowerCase().includes(menuSearchQuery);
          // Search in translation key
          const keyMatch = route.text && route.text.toLowerCase().includes(menuSearchQuery);

          return enMatch || arMatch || routeMatch || keyMatch;
        });

        // Format results
        this.menuItems = matchedRoutes.map(route => ({
          route: route.route,
          text: route.text,
          icon: route.icon
        }));
      } catch (error) {
        console.error('Search error:', error);
        this.menuItems = [];
      }
    },

    /**
     * Clear all frontend and backend caches
     * Clears: localStorage, sessionStorage, Vuex store, cached routes,
     * service workers, and Cache Storage API
     */
    async clearCache() {
      try {
        // Show loading notification
        if (typeof toast !== 'undefined' && toast.fire) {
          toast.fire({
            type: 'info',
            title: this.$t('Clearing Cache'),
            text: this.$t('Please wait...'),
            timer: 3000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
          });
        }

        // 1. Clear browser storage
        localStorage.clear();
        sessionStorage.clear();

        // 2. Clear Vuex store state (reset cached data in modules)
        // Note: We preserve auth state to avoid logging out the user
        if (this.$store) {
          // Clear operations module cached data
          if (this.$store.state.operations) {
            // Reset operations module state to initial values
            this.$store.commit('operations/FETCH_APPINFO', { appInfo: null });
            this.$store.commit('operations/FETCH_TENANT', { tenant: null });
          }
          // Note: Other modules will be reloaded on page refresh
        }

        // 3. Clear component-level cached data
        this.cachedRoutes = null;
        this.menuItems = [];
        this.menuSearchQuery = '';

        // 4. Unregister all service workers (if any exist)
        if ('serviceWorker' in navigator) {
          try {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (const registration of registrations) {
              await registration.unregister();
            }
          } catch (swError) {
            console.warn('Service worker unregistration failed:', swError);
          }
        }

        // 5. Clear Cache Storage API (caches.keys() and caches.delete())
        if ('caches' in window) {
          try {
            const cacheNames = await caches.keys();
            await Promise.all(
              cacheNames.map((cacheName) => caches.delete(cacheName))
            );
          } catch (cacheError) {
            console.warn('Cache Storage API cleanup failed:', cacheError);
          }
        }

        // 6. Call Laravel API to clear server-side cache
        const { data } = await axios.post('/api/clear-cache');

        if (data.success) {
          // Show success message
          if (typeof toast !== 'undefined' && toast.fire) {
            toast.fire({
              type: 'success',
              title: this.$t('Success'),
              text: this.$t('Cache cleared successfully!'),
              timer: 2000,
              timerProgressBar: true,
            });
          }

          // Force a full page reload after a short delay
          // This ensures all caches are cleared and new assets are loaded
          // The page reload will fetch fresh assets with new hashes (if build was updated)
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          if (typeof toast !== 'undefined' && toast.fire) {
            toast.fire({
              type: 'error',
              title: this.$t('Error'),
              text: data.message || this.$t('Failed to clear cache'),
            });
          }
        }
      } catch (error) {
        console.error('Error clearing cache:', error);
        if (typeof toast !== 'undefined' && toast.fire) {
          toast.fire({
            type: 'error',
            title: this.$t('Error'),
            text: this.$t('Failed to clear cache'),
          });
        }
      }
    },

    async logout() {
      // Log out the user.
      await this.$store.dispatch("auth/logout");
      // Redirect to login.
      this.$router.push({ name: "login" });
    },

    sideBarControl() {
      document.body.classList.toggle("control-sidebar-slide-open");
    },
    forceFullWidthNavbar() {
      // Only apply on select-branch page
      if (!this.isSelectBranchPage) {
        this.resetNavbarStyles();
        return;
      }

      // Force navbar to full width by directly manipulating the DOM
      const navbar = this.$el;
      if (navbar) {
        // Set styles with !important using setProperty
        navbar.style.setProperty('margin-left', '0', 'important');
        navbar.style.setProperty('margin-right', '0', 'important');
        navbar.style.setProperty('left', '0', 'important');
        navbar.style.setProperty('right', '0', 'important');
        navbar.style.setProperty('width', '100%', 'important');
        navbar.style.setProperty('max-width', '100%', 'important');

        // Also set on content-wrapper and footer
        const contentWrapper = document.querySelector('.content-wrapper');
        const mainFooter = document.querySelector('.main-footer');
        if (contentWrapper) {
          contentWrapper.style.setProperty('margin-left', '0', 'important');
          contentWrapper.style.setProperty('margin-right', '0', 'important');
        }
        if (mainFooter) {
          mainFooter.style.setProperty('margin-left', '0', 'important');
          mainFooter.style.setProperty('margin-right', '0', 'important');
        }
      }
    },
    resetNavbarStyles() {
      // Remove inline styles to let CSS take over (for other pages)
      const navbar = this.$el;
      if (navbar) {
        navbar.style.removeProperty('margin-left');
        navbar.style.removeProperty('margin-right');
        navbar.style.removeProperty('left');
        navbar.style.removeProperty('right');
        navbar.style.removeProperty('width');
        navbar.style.removeProperty('max-width');
      }

      const contentWrapper = document.querySelector('.content-wrapper');
      const mainFooter = document.querySelector('.main-footer');
      if (contentWrapper) {
        contentWrapper.style.removeProperty('margin-left');
        contentWrapper.style.removeProperty('margin-right');
      }
      if (mainFooter) {
        mainFooter.style.removeProperty('margin-left');
        mainFooter.style.removeProperty('margin-right');
      }
    },
  },

  beforeDestroy() {
    // Clean up interval
    if (this.navbarEnforcerInterval) {
      clearInterval(this.navbarEnforcerInterval);
      this.navbarEnforcerInterval = null;
    }
    // Clean up debounce timer
    if (this.searchDebounceTimer) {
      clearTimeout(this.searchDebounceTimer);
      this.searchDebounceTimer = null;
    }
    // Reset styles when component is destroyed
    this.resetNavbarStyles();
  },
};
</script>

<style scoped>
.user-profile img,
.profile-avatar {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
}

.profile-avatar-fallback {
  background-color: #6c757d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.user-profile {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-text {
  font-size: 14px;
  color: #5f5f5f;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 2px;
}

.user-name {
  font-size: 16px;
  color: #000000;
  font-weight: 500;
  line-height: 1.2;
}

.search-input {
  height: 48px;
  border-radius: 10px;
  border: 1px solid #E1E4E8;
  padding: 6px 14px;
  font-family: 'DIN', sans-serif;
  width: 300px;
  outline: none;
  transition: border-color 0.2s ease;
}

.search-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.search-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  pointer-events: none;
  font-size: 16px;
}

[dir="rtl"] .search-icon {
  right: auto;
  left: 14px;
}

.clear-btn {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  border: none;
  background: none;
}

[dir="rtl"] .clear-btn {
  left: 8px;
  right: auto;
}

.clear-btn:hover {
  color: #000000;
}

.dropdown-icon-center {
  display: flex;
  align-items: center;
}

.dropdown-icon-center svg {
  margin-right: 4px;
}

.pos-btn {
  background: #33a0d9;
  color: #ffffff;
  border: 2px solid #33a0d9;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 500;
  transition: all 0.2s ease;
  margin: 0;
  text-decoration: none;
}

.pos-btn:hover {
  background: #0f2a4f;
  border-color: #0f2a4f;
  color: #ffffff;
  text-decoration: none;
}

.btn-pos {
  background: transparent;
  color: #111;
  border: 2px solid #33a0d9;
  border-radius: 34px;
  padding: 4px 15px;
}

/* Custom navbar button styles */
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

.custom-nav-btn .badge {
  position: absolute !important;
  top: 8px !important;
  right: 8px !important;
  font-size: 10px !important;
  min-width: 16px !important;
  height: 16px !important;
  line-height: 16px !important;
  padding: 0 4px !important;
}

/* Current branch pill */
.branch-pill {
  background: #ebf6fc;
  border: 1px solid #d6edf7;
  color: #33a0d9;
  padding: 8px 12px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.85rem;
}

[dir="rtl"] .branch-pill .mr-2 {
  margin-right: 0 !important;
  margin-left: .5rem !important;
}
</style>
