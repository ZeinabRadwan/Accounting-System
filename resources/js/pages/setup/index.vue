<template>
  <div class="setup-page">

    <div class="setup-header">
      <div class="setup-header-icon">
        <i class="fas fa-cog" />
      </div>
      <div class="setup-header-text">
        {{ $t('Settings') }}
      </div>
    </div>

    <div class="row setup-grid">
      <div v-if="$can('general-settings')">
        <router-link :to="{ name: 'setup.general' }" class="setup-card">
          <div class="setup-card-icon bg-primary">
            <i class="fas fa-cog" />
          </div>
          <div class="setup-card-content">
            <h5>{{ $t('General') }}</h5>
            <p>{{ $t('General settings such as, site title, site description, address and so on.') }}</p>
          </div>
          <div class="setup-card-arrow">
            <i class="fas fa-chevron-left" />
          </div>
        </router-link>
      </div>
      <div v-if="$can('general-settings')">
        <router-link :to="{ name: 'setup.mailConfiguration' }" class="setup-card">
          <div class="setup-card-icon bg-info">
            <i class="fas fa-envelope" />
          </div>
          <div class="setup-card-content">
            <h5>{{ $t('Mail Configurations') }}</h5>
            <p>{{ $t('Manage your mail configuration such as HOST, USERNAME, PASSWORD etc.') }}</p>
          </div>
          <div class="setup-card-arrow">
            <i class="fas fa-chevron-left" />
          </div>
        </router-link>
      </div>
      <div v-if="$can('general-settings')">
        <router-link :to="{ name: 'setup.smsConfiguration' }" class="setup-card">
          <div class="setup-card-icon bg-success">
            <i class="fas fa-sms" />
          </div>
          <div class="setup-card-content">
            <h5>{{ $t('SMS Configurations') }}</h5>
            <p>{{ $t('Manage your sms configuration such as TWILIO ACCOUNT SID, FROM etc.') }}</p>
          </div>
          <div class="setup-card-arrow">
            <i class="fas fa-chevron-left" />
          </div>
        </router-link>
      </div>

      <div v-if="developer">
        <router-link :to="{ name: 'permissions.index' }" class="setup-card">
          <div class="setup-card-icon bg-success">
            <i class="fas fa-braille" />
          </div>
          <div class="setup-card-content">
            <h5>{{ $t('User Permissions') }}</h5>
            <p>{{ $t('Manage permission that you are going to assign in a role.') }}</p>
          </div>
          <div class="setup-card-arrow">
            <i class="fas fa-chevron-left" />
          </div>
        </router-link>
      </div>
      <div v-if="$can('user-role')">
        <router-link :to="{ name: 'roles.index' }" class="setup-card">
          <div class="setup-card-icon bg-dark">
            <i class="fas fa-user-lock" />
          </div>
          <div class="setup-card-content">
            <h5>{{ $t('Role & Permissions') }}</h5>
            <p>{{ $t('Manage Roles & Permissions for users who are going to use the system.') }}</p>
          </div>
          <div class="setup-card-arrow">
            <i class="fas fa-chevron-left" />
          </div>
        </router-link>
      </div>
      <div v-if="$can('currencies-management')">
        <router-link :to="{ name: 'currencies.index' }" class="setup-card">
          <div class="setup-card-icon bg-info">
            <i class="fas fa-money-check-alt" />
          </div>
          <div class="setup-card-content">
            <h5>{{ $t('Currencies') }}</h5>
            <p>{{ $t('Manage various types of currencies that you are going to use in the system.') }}</p>
          </div>
          <div class="setup-card-arrow">
            <i class="fas fa-chevron-left" />
          </div>
        </router-link>
      </div>
      <div v-if="$can('units-management')">
        <router-link :to="{ name: 'units.index' }" class="setup-card">
          <div class="setup-card-icon bg-secondary">
            <i class="fas fa-balance-scale" />
          </div>
          <div class="setup-card-content">
            <h5>{{ $t('Units') }}</h5>
            <p>{{ $t('Manage unit types for measurement that you are going to use in the system.') }}</p>
          </div>
          <div class="setup-card-arrow">
            <i class="fas fa-chevron-left" />
          </div>
        </router-link>
      </div>
      <div v-if="$can('vat-rate-management')">
        <router-link :to="{ name: 'vatRates.index' }" class="setup-card">
          <div class="setup-card-icon bg-primary">
            <i class="fas fa-percentage" />
          </div>
          <div class="setup-card-content">
            <h5>{{ $t('Tax Rates') }}</h5>
            <p>{{ $t('Manage Tax rates for Tax management that you are going to use in the system.') }}</p>
          </div>
          <div class="setup-card-arrow">
            <i class="fas fa-chevron-left" />
          </div>
        </router-link>
      </div>
      <div v-if="$can('brands-management')">
        <router-link :to="{ name: 'brands.index' }" class="setup-card">
          <div class="setup-card-icon bg-success">
            <i class="fas fa-bold" />
          </div>
          <div class="setup-card-content">
            <h5>{{ $t('Brands') }}</h5>
            <p>{{ $t('Manage brands that you are going to use in the system.') }}</p>
          </div>
          <div class="setup-card-arrow">
            <i class="fas fa-chevron-left" />
          </div>
        </router-link>
      </div>
      <div v-if="$can('payment-method-management')">
        <router-link :to="{ name: 'paymentMethods.index' }" class="setup-card">
          <div class="setup-card-icon bg-warning">
            <i class="fas fa-wallet" />
          </div>
          <div class="setup-card-content">
            <h5>{{ $t('Payment Methods') }}</h5>
            <p>{{ $t('Manage payment methods that you are going to use in the system.') }}</p>
          </div>
          <div class="setup-card-arrow">
            <i class="fas fa-chevron-left" />
          </div>
        </router-link>
      </div>
      <div v-if="$can('payment-method-management')">
        <router-link :to="{ name: 'analyticalAccounts.index' }" class="setup-card">
          <div class="setup-card-icon bg-info">
            <i class="fas fa-chart-line" />
          </div>
          <div class="setup-card-content">
            <h5>{{ $t('Analytical Accounts') }}</h5>
            <p>{{ $t('Manage analytical accounts for payment method tracking and reporting.') }}</p>
          </div>
          <div class="setup-card-arrow">
            <i class="fas fa-chevron-left" />
          </div>
        </router-link>
      </div>
      <div v-if="$can('general-settings')">
        <router-link :to="{ name: 'setup.fiscal-years' }" class="setup-card">
          <div class="setup-card-icon bg-info">
            <i class="fas fa-calendar-alt" />
          </div>
          <div class="setup-card-content">
            <h5>{{ $t('Fiscal Years') }}</h5>
            <p>{{ $t('Manage fiscal years for your accounting system.') }}</p>
          </div>
          <div class="setup-card-arrow">
            <i class="fas fa-chevron-left" />
          </div>
        </router-link>
      </div>
      <div v-if="$can('general-settings')">
        <router-link :to="{ name: 'setup.accounting-periods' }" class="setup-card">
          <div class="setup-card-icon bg-secondary">
            <i class="fas fa-calendar-week" />
          </div>
          <div class="setup-card-content">
            <h5>{{ $t('Accounting Periods') }}</h5>
            <p>{{ $t('Manage accounting periods within fiscal years.') }}</p>
          </div>
          <div class="setup-card-arrow">
            <i class="fas fa-chevron-left" />
          </div>
        </router-link>
      </div>
      <div v-if="$can('general-settings')">
        <router-link :to="{ path: 'setup/accounting-settings/account-routing' }" class="setup-card">
          <div class="setup-card-icon bg-primary">
            <i class="fas fa-calculator" />
          </div>
          <div class="setup-card-content">
            <h5>{{ $t('اعدادات الحسابات العامة') }}</h5>
            <p>{{ $t('قم باختيار الحسابات الرئيسية لكل قسم محاسبي بشكل مباشر') }}</p>
          </div>
          <div class="setup-card-arrow">
            <i class="fas fa-chevron-left" />
          </div>
        </router-link>
      </div>

      <!-- ZATCA Settings - Only show for Saudi Arabia -->
      <div v-if="$can('general-settings') && isSaudiArabia">
        <router-link :to="{ name: 'setup.zatca' }" class="setup-card">
          <div class="setup-card-icon bg-dark">
            <i class="fas fa-file-invoice" />
          </div>
          <div class="setup-card-content">
            <h5>{{ $t('ZATCA Settings') }}</h5>
            <p>{{ $t('Configure ZATCA e-invoicing settings for Saudi Arabia compliance.') }}</p>
          </div>
          <div class="setup-card-arrow">
            <i class="fas fa-chevron-left" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Setup') }
  },

  data: () => ({
    breadcrumbsCurrent: this.$t('Setup'),
    breadcrumbs: [
      {
        name: this.$t('Dashboard'),
        url: 'home',
      },
      {
        name: this.$t('Setup'),
        url: '',
      },
    ],
    developer: '',
  }),
  // Map Getters
  computed: {
    ...mapGetters('auth', ['user']),
    ...mapGetters('operations', ['appInfo']),
    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia() {
      return !this.appInfo?.country || this.appInfo.country === 'SA';
    },
  },
  created() {
    this.developer = this.user.roles.includes('developer')
  },
  methods: {},
}
</script>

<style scoped>
.setup-page {
  padding: 1rem;
  border: 1px solid #CBD0DD;
  border-radius: 10px;
}

.setup-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: #000000;
}

.setup-header-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.setup-header-text {
  font-size: 1.5rem;
}

.setup-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.setup-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: #F7F7FC;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  width: 100%;
  max-width: 100%;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  height: 100%;
}

.setup-card:hover {
  border-color: #007bff;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.15);
  transform: translateY(-2px);
  text-decoration: none;
  color: inherit;
}

.setup-card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  flex-shrink: 0;
  color: white;
  font-size: 1.5rem;
}

.setup-card-icon.bg-primary {
  background: #0775AF;
}

.setup-card-icon.bg-info {
  background: #00C0E8;
}

.setup-card-icon.bg-success {
  background: #34C759;
}

.setup-card-icon.bg-warning {
  background: #0088FF;
}

.setup-card-icon.bg-dark {
  background: #000000;
}

.setup-card-icon.bg-secondary {
  background: #8E8E93;
}

.setup-card-content {
  flex: 1;
  min-width: 0;
}

.setup-card-content h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin: 0 0 0.5rem 0;
}

.setup-card-content p {
  font-size: 0.85rem;
  color: #6c757d;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.setup-card-arrow {
  color: #6c757d;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.setup-card:hover .setup-card-arrow {
  color: #007bff;
  transform: translateX(-4px);
}

@media (max-width: 768px) {
  .setup-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .setup-card {
    padding: 1rem;
    gap: 0.75rem;
  }

  .setup-card-icon {
    width: 48px;
    height: 48px;
    font-size: 1.25rem;
  }

  .setup-card-content h5 {
    font-size: 0.95rem;
  }

  .setup-card-content p {
    font-size: 0.8rem;
  }
}
</style>

<style>
.dtable-footer {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 0 0 10px;
  flex-direction: column;
}

.card-footer .form-group.row.display-per-page {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
}
</style>