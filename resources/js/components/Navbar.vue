<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link custom-nav-btn" data-widget="pushmenu" href="#" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </a>
      </li>
    </ul>

    <!-- Search beside sidebar toggle -->
    <div class="navbar-search d-none d-md-block" style="margin-left: 10px;">
      <div class="search-area position-relative">
        <input ref="searchInput" type="text" v-model="menuSearchQuery" @input="searchMenu"
          class="search-input" :placeholder="`${$t('Search...')}`">
        <span class="search-icon" :class="[this.menuSearchQuery !== '' ? 'd-none' : '']">
          <i class="fas fa-search"></i>
        </span>
        <button v-if="menuSearchQuery" class="btn btn-link p-0 clear-btn" @click="clearMenuSearch">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div v-if="menuSearchQuery" class="dropdown-menu show w-100 mt-1 shadow" style="display:block; max-height: 320px; overflow:auto;">
        <div v-if="menuItems.length">
          <router-link v-for="(menuItem, index) in menuItems" :key="index" :to="{ name: menuItem.route }" class="dropdown-item d-flex align-items-center">
            <i v-if="menuItem.icon" :class="menuItem.icon + ' mr-2'" />
            <span>{{ $t(menuItem.text) }}</span>
          </router-link>
        </div>
        <div v-else class="dropdown-item text-muted">{{ $t('No matching items found') }}</div>
      </div>
    </div>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li v-tooltip="'POS'" class="nav-item" style="margin-right: 8px;">
        <router-link :to="{ name: 'pos.create' }" class="btn pos-btn">
          <i class="fas fa-cash-register"></i>
          {{ this.$t("POS") }}</router-link>
      </li>

      <li v-if="$can('today-profit')" v-tooltip="'Today Report'" class="nav-item">
        <a class="nav-link custom-nav-btn" :href="`#${$route.name === 'reports.todayReport' ? '' : 'reports.todayReport'}`" @click.prevent="$router.push({ name: 'reports.todayReport' })">
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
        " class="nav-item dropdown" v-tooltip="'Quick Add'">
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
      <li class="nav-item dropdown" v-tooltip="'Notifications'">
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

      <li class="nav-item" v-tooltip="'Toggle Full Screen Mode'">
        <a class="nav-link custom-nav-btn" data-widget="fullscreen" href="#" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </a>
      </li>
      <li class="nav-item" v-tooltip="'Theme Settings'">
        <a class="nav-link custom-nav-btn" @click.prevent="sideBarControl" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </a>
      </li>

      <!-- User Dropdown Menu -->
      <li v-if="user" class="nav-item dropdown">
        <a class="nav-link user-profile" data-toggle="dropdown" href="#">
          <div>
            <img 
              v-if="!imageError"
              :src="user.photo_url" 
              :alt="user.name" 
              @error="handleImageError"
              class="profile-avatar"
            />
            <div 
              v-else
              class="profile-avatar profile-avatar-fallback"
            >
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
  }),

  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
    searchPlaceholderText() {
      return this.$t('Search...');
    }
  },

  created() {
    this.stockNotification();
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.setSearchPlaceholder();
      }, 100);
    });
  },

  watch: {
    '$i18n.locale'() {
      this.updateSearchPlaceholder();
    }
  },

  methods: {
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
      this.menuSearchQuery = "";
      this.menuItems = [];
    },

    searchMenu() {
      const menuSearchQuery = this.menuSearchQuery;
      if (!menuSearchQuery) {
        this.menuItems = [];
        return;
      }
      axios
        .get(window.location.origin + "/api/menu-search", {
          params: {
            menuSearchQuery: menuSearchQuery,
          },
        })
        .then((response) => {
          const fetchedMenuItems = response.data.result.map((item) => ({
            route: item.route,
            text: item.text,
            icon: item.icon,
          }));
          this.menuItems = fetchedMenuItems;
        })
        .catch(() => {
          toast.fire({
            type: "error",
            title: this.$t("Opps...something went wrong"),
          });
        });
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
  left: auto;
  right: 8px;
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
  background: #1B3C71;
  color: #ffffff;
  border: 2px solid #1B3C71;
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
  border: 2px solid #1B3C71;
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
</style>
