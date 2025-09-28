<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
          </div>
          <!-- /.card-header -->
          <div class="card-body position-relative">
            <div class="row set-up-page">
        <div v-if="$can('general-settings')" class="col-xl-4 col-sm-12 col-md-6">
          <div class="card card-large-icons">
            <div class="card-icon text-white bg-brand-primary">
              <i class="fas fa-cog" />
            </div>
            <div class="card-body">
              <h4>{{ $t('General') }}</h4>
              <p>
                {{ $t('General settings such as, site title, site description, address and so on.') }}
              </p>
              <router-link :to="{ name: 'setup.general' }" href="#" class="card-cta">
                {{ $t('Change Setting') }}
                <i class="fas fa-long-arrow-alt-right" />
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="$can('general-settings')" class="col-xl-4 col-sm-12 col-md-6">
          <div class="card card-large-icons">
            <div class="card-icon text-white bg-brand-light-blue">
              <i class="fas fa-envelope" />
            </div>
            <div class="card-body">
              <h4>{{ $t('Mail Configurations') }}</h4>
              <p>
                {{ $t('Manage your mail configuration such as HOST, USERNAME, PASSWORD etc.') }}
              </p>
              <router-link :to="{ name: 'setup.mailConfiguration' }" href="#" class="card-cta">
                {{ $t('Mail Configurations') }}
                <i class="fas fa-long-arrow-alt-right" />
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="$can('general-settings')" class="col-xl-4 col-sm-12 col-md-6">
          <div class="card card-large-icons">
            <div class="card-icon text-white bg-brand-light-green">
              <i class="fas fa-sms" />
            </div>
            <div class="card-body">
              <h4>{{ $t('SMS Configurations') }}</h4>
              <p>
                {{ $t('Manage your sms configuration such as TWILIO ACCOUNT SID, FROM etc.') }}
              </p>
              <router-link :to="{ name: 'setup.smsConfiguration' }" href="#" class="card-cta">
                {{ $t('SMS Configurations') }}
                <i class="fas fa-long-arrow-alt-right" />
              </router-link>
            </div>
          </div>
        </div>

        <div v-if="developer" class="col-xl-4 col-sm-12 col-md-6">
          <div class="card card-large-icons">
            <div class="card-icon text-white bg-brand-green">
              <i class="fas fa-braille" />
            </div>
            <div class="card-body">
              <h4>{{ $t('User Permissions') }}</h4>
              <p>
                {{ $t('Manage permission that you are going to assign in a role.') }}
              </p>
              <router-link :to="{ name: 'permissions.index' }" class="card-cta">
                {{ $t('User Permissions') }}
                <i class="fas fa-long-arrow-alt-right" />
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="$can('user-role')" class="col-xl-4 col-sm-12 col-md-6">
          <div class="card card-large-icons">
            <div class="card-icon text-white bg-brand-dark-blue">
              <i class="fas fa-user-lock" />
            </div>
            <div class="card-body">
              <h4>{{ $t('Role & Permissions') }}</h4>
              <p>
                {{ $t('Manage Roles & Permissions for users who are going to use the system.') }}
              </p>
              <router-link :to="{ name: 'roles.index' }" class="card-cta">
                {{ $t('Roles & Permissions') }}
                <i class="fas fa-long-arrow-alt-right" />
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="$can('currencies-management')" class="col-xl-4 col-sm-12 col-md-6">
          <div class="card card-large-icons">
            <div class="card-icon text-white bg-brand-teal">
              <i class="fas fa-money-check-alt" />
            </div>
            <div class="card-body">
              <h4>{{ $t('Currencies') }}</h4>
              <p>
                {{ $t('Manage various types of currencies that you are going to use in the system.') }}
              </p>
              <router-link :to="{ name: 'currencies.index' }" class="card-cta">
                {{ $t('Currencies') }}
                <i class="fas fa-long-arrow-alt-right" />
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="$can('units-management')" class="col-xl-4 col-sm-12 col-md-6">
          <div class="card card-large-icons">
            <div class="card-icon text-white bg-brand-dark-teal">
              <i class="fas fa-balance-scale" />
            </div>
            <div class="card-body">
              <h4>{{ $t('Units') }}</h4>
              <p>
                {{ $t('Manage unit types for measurement that you are going to use in the system.') }}
              </p>
              <router-link :to="{ name: 'units.index' }" class="card-cta">
                {{ $t('Units') }}
                <i class="fas fa-long-arrow-alt-right" />
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="$can('vat-rate-management')" class="col-xl-4 col-sm-12 col-md-6">
          <div class="card card-large-icons">
            <div class="card-icon text-white bg-brand-primary">
              <i class="fas fa-percentage" />
            </div>
            <div class="card-body">
              <h4>{{ $t('Tax Rates') }}</h4>
              <p>
                {{ $t('Manage Tax rates for Tax management that you are going to use in the system.') }}
              </p>
              <router-link :to="{ name: 'vatRates.index' }" class="card-cta">
                {{ $t('Tax Rates') }}
                <i class="fas fa-long-arrow-alt-right" />
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="$can('brands-management')" class="col-xl-4 col-sm-12 col-md-6">
          <div class="card card-large-icons">
            <div class="card-icon text-white bg-brand-light-green">
              <i class="fas fa-bold" />
            </div>
            <div class="card-body">
              <h4>{{ $t('Brands') }}</h4>
              <p>{{ $t('Manage brands that you are going to use in the system.') }}</p>
              <router-link :to="{ name: 'brands.index' }" class="card-cta">
                {{ $t('Brands') }}
                <i class="fas fa-long-arrow-alt-right" />
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="$can('payment-method-management')" class="col-xl-4 col-sm-12 col-md-6">
          <div class="card card-large-icons">
            <div class="card-icon text-white bg-brand-green">
              <i class="fas fa-wallet" />
            </div>
            <div class="card-body">
              <h4>{{ $t('Payment Methods') }}</h4>
              <p>
                {{ $t('Manage payment methods that you are going to use in the system.') }}
              </p>
              <router-link :to="{ name: 'paymentMethods.index' }" class="card-cta">
                {{ $t('Payment Methods') }}
                <i class="fas fa-long-arrow-alt-right" />
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="$can('general-settings')" class="col-xl-4 col-sm-12 col-md-6">
          <div class="card card-large-icons">
            <div class="card-icon text-white bg-brand-teal">
              <i class="fas fa-calendar-alt" />
            </div>
            <div class="card-body">
              <h4>{{ $t('Fiscal Years') }}</h4>
              <p>
                {{ $t('Manage fiscal years for your accounting system.') }}
              </p>
              <router-link :to="{ name: 'setup.fiscal-years' }" class="card-cta">
                {{ $t('Fiscal Years') }}
                <i class="fas fa-long-arrow-alt-right" />
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="$can('general-settings')" class="col-xl-4 col-sm-12 col-md-6">
          <div class="card card-large-icons">
            <div class="card-icon text-white bg-brand-dark-teal">
              <i class="fas fa-calendar-week" />
            </div>
            <div class="card-body">
              <h4>{{ $t('Accounting Periods') }}</h4>
              <p>
                {{ $t('Manage accounting periods within fiscal years.') }}
              </p>
              <router-link :to="{ name: 'setup.accounting-periods' }" class="card-cta">
                {{ $t('Accounting Periods') }}
                <i class="fas fa-long-arrow-alt-right" />
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="$can('general-settings')" class="col-xl-4 col-sm-12 col-md-6">
          <div class="card card-large-icons">
            <div class="card-icon text-white bg-brand-primary">
              <i class="fas fa-route" />
            </div>
            <div class="card-body">
              <h4>{{ $t('Account Routing') }}</h4>
              <p>
                {{ $t('Configure account routing settings for accounting system.') }}
              </p>
              <router-link :to="{ name: 'setup.account-routing' }" class="card-cta">
                {{ $t('Account Routing') }}
                <i class="fas fa-long-arrow-alt-right" />
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- ZATCA Settings - Only show for Saudi Arabia -->
        <div v-if="$can('general-settings') && isSaudiArabia" class="col-xl-4 col-sm-12 col-md-6">
          <div class="card card-large-icons">
            <div class="card-icon text-white bg-brand-dark-blue">
              <i class="fas fa-file-invoice" />
            </div>
            <div class="card-body">
              <h4>{{ $t('ZATCA Settings') }}</h4>
              <p>
                {{ $t('Configure ZATCA e-invoicing settings for Saudi Arabia compliance.') }}
              </p>
              <router-link :to="{ name: 'setup.zatca' }" class="card-cta">
                {{ $t('ZATCA Settings') }}
                <i class="fas fa-long-arrow-alt-right" />
              </router-link>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
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
    breadcrumbsCurrent: 'Setup',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Setup',
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
}
</script>

<style scoped>
/* Brand color variations for setup cards to match dashboard Today Summary */
.card-icon.bg-brand-primary {
  background: linear-gradient(135deg, #33a0d9 0%, #2a8bc7 100%) !important;
  border: 1px solid rgba(51, 160, 217, 0.3);
  border-radius: 20px;
}

.card-icon.bg-brand-light-blue {
  background: linear-gradient(135deg, #ebf6fc 0%, #d6edf7 100%) !important;
  color: #33a0d9 !important;
  border: 1px solid rgba(235, 246, 252, 0.5);
  border-radius: 20px;
}

.card-icon.bg-brand-light-green {
  background: linear-gradient(135deg, #f6fef4 0%, #e8f5e8 100%) !important;
  color: #33a0d9 !important;
  border: 1px solid rgba(246, 254, 244, 0.5);
  border-radius: 20px;
}

.card-icon.bg-brand-green {
  background: linear-gradient(135deg, #2ab930 0%, #239a26 100%) !important;
  border: 1px solid rgba(42, 185, 48, 0.3);
  border-radius: 20px;
}

.card-icon.bg-brand-dark-blue {
  background: linear-gradient(135deg, #33a0d9 0%, #152a4a 100%) !important;
  border: 1px solid rgba(27, 60, 113, 0.3);
  border-radius: 20px;
}

.card-icon.bg-brand-teal {
  background: linear-gradient(135deg, #449eae 0%, #3a8a98 100%) !important;
  border: 1px solid rgba(68, 158, 174, 0.3);
  border-radius: 20px;
}

.card-icon.bg-brand-dark-teal {
  background: linear-gradient(135deg, #377578 0%, #2d5f61 100%) !important;
  border: 1px solid rgba(55, 117, 120, 0.3);
  border-radius: 20px;
}

/* Icon color adjustments for light backgrounds */
.card-icon.bg-brand-light-blue i,
.card-icon.bg-brand-light-green i {
  color: #33a0d9 !important;
}

.card-icon.bg-brand-primary i,
.card-icon.bg-brand-green i,
.card-icon.bg-brand-dark-blue i,
.card-icon.bg-brand-teal i,
.card-icon.bg-brand-dark-teal i {
  color: white !important;
}

/* Card border styling to match quotations page */
.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
}

.card-header {
  background-color: white;
  border-bottom: 1px solid #CED4DA;
  padding: 1.25rem 1.25rem 0 1.25rem;
  border-radius: 20px 20px 0 0;
}

.card-body {
  padding: 1.25rem;
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Fix for router-link-active icon color override */
.card-cta i {
  color: inherit !important;
}

.card-cta:hover i {
  color: inherit !important;
}

/* Ensure all setup cards have equal height without altering other styles */
.set-up-page .card.card-large-icons {
  min-height: 200px;
}
</style>
