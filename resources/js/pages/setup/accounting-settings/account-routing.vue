<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->

    <div class="row">
      <!-- Sidebar Navigation -->
      <div class="col-12 col-xl-3">
        <div class="card settings-card no-print">
          <div class="card-body">
            <ul class="nav flex-column nav-pills m-1">
              <li 
                v-for="tab in tabs" 
                :key="tab.id"
                class="nav-item"
              >
                <button
                  @click="activeTab = tab.id"
                  :class="['nav-link', 'thumb', { 'active': activeTab === tab.id }]"
                  type="button"
                >
                  <i :class="tab.icon"></i>
                  {{ tab.label }}
                  <span class="badge badge-secondary ml-2" v-if="tab.count > 0">{{ tab.count }}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="col-12 col-xl-9">
        <div class="card">
          <div class="card-header setings-header">
            <h3 class="card-title">
              <i class="fas fa-route mr-2"></i>
              {{ $t('اعدادات الحسابات العامة') }}
            </h3>
            <p class="card-description">
              {{ $t('قم باختيار الحسابات الرئيسية لكل قسم محاسبي بشكل مباشر') }}
            </p>
          </div>
          <div class="card-body">
            <!-- Branch Selection -->
            <div class="branch-selector mb-4">
              <label class="form-label">{{ $t('Branch') }}</label>
              <VSelect
                v-model="selectedBranchId"
                :options="branches"
                :reduce="option => option.id"
                :placeholder="$t('Select branch')"
                :searchable="true"
                :clearable="false"
                @input="onBranchChange"
                class="form-select"
              >
                <template #option="{ name, code }">
                  <div>
                    <span class="font-weight-bold">{{ name }}</span>
                    <span v-if="code" class="text-muted ml-2">({{ code }})</span>
                  </div>
                </template>
              </VSelect>
            </div>

            <!-- Loading State -->
            <div v-if="isLoading" class="loading-container">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">{{ $t('Loading...') }}</span>
              </div>
              <p class="loading-text">{{ $t('Loading Chart of Accounts...') }}</p>
            </div>

            <div v-else class="settings-container">
              <!-- Tab Content -->
              <div class="tab-content">
        <!-- Sales Module Tab -->
        <div v-if="activeTab === 'sales'" class="simple-panel">
          <div class="settings-list">
            <div class="setting-row" v-for="setting in salesSettings" :key="setting.setting_key">
              <label class="setting-label">
                {{ $t(setting.setting_name) }}
                <span class="required" v-if="setting.is_required">*</span>
              </label>
              <VSelect
                v-model="setting.main_account_id"
                :options="getAccountsForType(setting.account_type)"
                label="label"
                :reduce="option => option.id"
                :placeholder="$t('Select account')"
                :searchable="true"
                :clearable="true"
                :append-to-body="true"
                @input="onMainAccountChange(setting)"
                class="simple-select"
              >
                <template #no-options>
                  <div class="vselect-status">
                    <i v-if="chartAccountsLoading" class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ chartAccountsLoading ? $t('Loading accounts...') : $t('No accounts found') }}</span>
                  </div>
                </template>
                <template #list-header>
                  <div v-if="chartAccountsLoading" class="vselect-loading">
                    <i class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ $t('Loading accounts...') }}</span>
                  </div>
                </template>
                <template #option="{ name, code, type }">
                  <div class="account-option">
                    <span class="account-name">{{ name }}</span>
                    <span class="account-code">{{ code }}</span>
                    <span class="account-type">{{ type }}</span>
                  </div>
                </template>
                <template #selected-option="{ label, name }">
                  <span class="selected-account-name">{{ label || name }}</span>
                </template>
              </VSelect>
            </div>
          </div>
        </div>

        <!-- Purchase Module Tab -->
        <div v-if="activeTab === 'purchase'" class="simple-panel">
          <div class="settings-list">
            <div class="setting-row" v-for="setting in purchaseSettings" :key="setting.setting_key">
              <label class="setting-label">
                {{ $t(setting.setting_name) }}
                <span class="required" v-if="setting.is_required">*</span>
              </label>
              <VSelect
                v-model="setting.main_account_id"
                :options="getAccountsForType(setting.account_type)"
                label="label"
                :reduce="option => option.id"
                :placeholder="$t('Select account')"
                :searchable="true"
                :clearable="true"
                :append-to-body="true"
                @input="onMainAccountChange(setting)"
                class="simple-select"
              >
                <template #no-options>
                  <div class="vselect-status">
                    <i v-if="chartAccountsLoading" class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ chartAccountsLoading ? $t('Loading accounts...') : $t('No accounts found') }}</span>
                  </div>
                </template>
                <template #list-header>
                  <div v-if="chartAccountsLoading" class="vselect-loading">
                    <i class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ $t('Loading accounts...') }}</span>
                  </div>
                </template>
                <template #option="{ name, code, type }">
                  <div class="account-option">
                    <span class="account-name">{{ name }}</span>
                    <span class="account-code">{{ code }}</span>
                    <span class="account-type">{{ type }}</span>
                  </div>
                </template>
                <template #selected-option="{ label, name }">
                  <span class="selected-account-name">{{ label || name }}</span>
                </template>
              </VSelect>
            </div>
          </div>
        </div>

        <!-- VAT/Tax Module Tab -->
        <div v-if="activeTab === 'vat'" class="simple-panel">
          <div class="settings-list">
            <div class="setting-row" v-for="setting in vatSettings" :key="setting.setting_key">
              <label class="setting-label">
                {{ $t(setting.setting_name) }}
                <span class="required" v-if="setting.is_required">*</span>
              </label>
              <VSelect
                v-model="setting.main_account_id"
                :options="getAccountsForType(setting.account_type)"
                label="label"
                :reduce="option => option.id"
                :placeholder="$t('Select account')"
                :searchable="true"
                :clearable="true"
                :append-to-body="true"
                @input="onMainAccountChange(setting)"
                class="simple-select"
              >
                <template #no-options>
                  <div class="vselect-status">
                    <i v-if="chartAccountsLoading" class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ chartAccountsLoading ? $t('Loading accounts...') : $t('No accounts found') }}</span>
                  </div>
                </template>
                <template #list-header>
                  <div v-if="chartAccountsLoading" class="vselect-loading">
                    <i class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ $t('Loading accounts...') }}</span>
                  </div>
                </template>
                <template #option="{ name, code, type }">
                  <div class="account-option">
                    <span class="account-name">{{ name }}</span>
                    <span class="account-code">{{ code }}</span>
                    <span class="account-type">{{ type }}</span>
                  </div>
                </template>
                <template #selected-option="{ label, name }">
                  <span class="selected-account-name">{{ label || name }}</span>
                </template>
              </VSelect>
            </div>
          </div>
        </div>

        <!-- Expenses Module Tab -->
        <div v-if="activeTab === 'expenses'" class="simple-panel">
          <div class="settings-list">
            <div class="setting-row" v-for="setting in expenseSettings" :key="setting.setting_key">
              <label class="setting-label">
                {{ $t(setting.setting_name) }}
                <span class="required" v-if="setting.is_required">*</span>
              </label>
              <VSelect
                v-model="setting.main_account_id"
                :options="getAccountsForType(setting.account_type)"
                label="label"
                :reduce="option => option.id"
                :placeholder="$t('Select account')"
                :searchable="true"
                :clearable="true"
                :append-to-body="true"
                @input="onMainAccountChange(setting)"
                class="simple-select"
              >
                <template #no-options>
                  <div class="vselect-status">
                    <i v-if="chartAccountsLoading" class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ chartAccountsLoading ? $t('Loading accounts...') : $t('No accounts found') }}</span>
                  </div>
                </template>
                <template #list-header>
                  <div v-if="chartAccountsLoading" class="vselect-loading">
                    <i class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ $t('Loading accounts...') }}</span>
                  </div>
                </template>
                <template #option="{ name, code, type }">
                  <div class="account-option">
                    <span class="account-name">{{ name }}</span>
                    <span class="account-code">{{ code }}</span>
                    <span class="account-type">{{ type }}</span>
                  </div>
                </template>
                <template #selected-option="{ label, name }">
                  <span class="selected-account-name">{{ label || name }}</span>
                </template>
              </VSelect>
            </div>
          </div>
        </div>

        <!-- Inventory Module Tab -->
        <div v-if="activeTab === 'inventory'" class="simple-panel">
          <div class="settings-list">
            <div class="setting-row" v-for="setting in inventorySettings" :key="setting.setting_key">
              <label class="setting-label">
                {{ $t(setting.setting_name) }}
                <span class="required" v-if="setting.is_required">*</span>
              </label>
              <VSelect
                v-model="setting.main_account_id"
                :options="getAccountsForType(setting.account_type)"
                label="label"
                :reduce="option => option.id"
                :placeholder="$t('Select account')"
                :searchable="true"
                :clearable="true"
                :append-to-body="true"
                @input="onMainAccountChange(setting)"
                class="simple-select"
              >
                <template #no-options>
                  <div class="vselect-status">
                    <i v-if="chartAccountsLoading" class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ chartAccountsLoading ? $t('Loading accounts...') : $t('No accounts found') }}</span>
                  </div>
                </template>
                <template #list-header>
                  <div v-if="chartAccountsLoading" class="vselect-loading">
                    <i class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ $t('Loading accounts...') }}</span>
                  </div>
                </template>
                <template #option="{ name, code, type }">
                  <div class="account-option">
                    <span class="account-name">{{ name }}</span>
                    <span class="account-code">{{ code }}</span>
                    <span class="account-type">{{ type }}</span>
                  </div>
                </template>
                <template #selected-option="{ label, name }">
                  <span class="selected-account-name">{{ label || name }}</span>
                </template>
              </VSelect>
            </div>
          </div>
        </div>

        <!-- Banking & Cash Module Tab -->
        <div v-if="activeTab === 'banking'" class="simple-panel">
          <div class="settings-list">
            <div class="setting-row" v-for="setting in bankingSettings" :key="setting.setting_key">
              <label class="setting-label">
                {{ $t(setting.setting_name) }}
                <span class="required" v-if="setting.is_required">*</span>
              </label>
              <VSelect
                v-model="setting.main_account_id"
                :options="getAccountsForType(setting.account_type)"
                label="label"
                :reduce="option => option.id"
                :placeholder="$t('Select account')"
                :searchable="true"
                :clearable="true"
                :append-to-body="true"
                @input="onMainAccountChange(setting)"
                class="simple-select"
              >
                <template #no-options>
                  <div class="vselect-status">
                    <i v-if="chartAccountsLoading" class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ chartAccountsLoading ? $t('Loading accounts...') : $t('No accounts found') }}</span>
                  </div>
                </template>
                <template #list-header>
                  <div v-if="chartAccountsLoading" class="vselect-loading">
                    <i class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ $t('Loading accounts...') }}</span>
                  </div>
                </template>
                <template #option="{ name, code, type }">
                  <div class="account-option">
                    <span class="account-name">{{ name }}</span>
                    <span class="account-code">{{ code }}</span>
                    <span class="account-type">{{ type }}</span>
                  </div>
                </template>
                <template #selected-option="{ label, name }">
                  <span class="selected-account-name">{{ label || name }}</span>
                </template>
              </VSelect>
            </div>
          </div>
        </div>

        <!-- Assets Module Tab -->
        <div v-if="activeTab === 'assets'" class="simple-panel">
          <div class="settings-list">
            <div class="setting-row" v-for="setting in assetsSettings" :key="setting.setting_key">
              <label class="setting-label">
                {{ $t(setting.setting_name) }}
                <span class="required" v-if="setting.is_required">*</span>
              </label>
              <VSelect
                v-model="setting.main_account_id"
                :options="getAccountsForType(setting.account_type)"
                label="label"
                :reduce="option => option.id"
                :placeholder="$t('Select account')"
                :searchable="true"
                :clearable="true"
                :append-to-body="true"
                @input="onMainAccountChange(setting)"
                class="simple-select"
              >
                <template #no-options>
                  <div class="vselect-status">
                    <i v-if="chartAccountsLoading" class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ chartAccountsLoading ? $t('Loading accounts...') : $t('No accounts found') }}</span>
                  </div>
                </template>
                <template #list-header>
                  <div v-if="chartAccountsLoading" class="vselect-loading">
                    <i class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ $t('Loading accounts...') }}</span>
                  </div>
                </template>
                <template #option="{ name, code, type }">
                  <div class="account-option">
                    <span class="account-name">{{ name }}</span>
                    <span class="account-code">{{ code }}</span>
                    <span class="account-type">{{ type }}</span>
                  </div>
                </template>
                <template #selected-option="{ label, name }">
                  <span class="selected-account-name">{{ label || name }}</span>
                </template>
              </VSelect>
            </div>
          </div>
        </div>

        <!-- Equity & Liabilities Module Tab -->
        <div v-if="activeTab === 'equity'" class="simple-panel">
          <div class="settings-list">
            <div class="setting-row" v-for="setting in [...equitySettings, ...liabilitiesSettings]" :key="setting.setting_key">
              <label class="setting-label">
                {{ $t(setting.setting_name) }}
                <span class="required" v-if="setting.is_required">*</span>
              </label>
              <VSelect
                v-model="setting.main_account_id"
                :options="getAccountsForType(setting.account_type)"
                label="label"
                :reduce="option => option.id"
                :placeholder="$t('Select account')"
                :searchable="true"
                :clearable="true"
                :append-to-body="true"
                @input="onMainAccountChange(setting)"
                class="simple-select"
              >
                <template #no-options>
                  <div class="vselect-status">
                    <i v-if="chartAccountsLoading" class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ chartAccountsLoading ? $t('Loading accounts...') : $t('No accounts found') }}</span>
                  </div>
                </template>
                <template #list-header>
                  <div v-if="chartAccountsLoading" class="vselect-loading">
                    <i class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ $t('Loading accounts...') }}</span>
                  </div>
                </template>
                <template #option="{ name, code, type }">
                  <div class="account-option">
                    <span class="account-name">{{ name }}</span>
                    <span class="account-code">{{ code }}</span>
                    <span class="account-type">{{ type }}</span>
                  </div>
                </template>
                <template #selected-option="{ label, name }">
                  <span class="selected-account-name">{{ label || name }}</span>
                </template>
              </VSelect>
            </div>
          </div>
        </div>

        <!-- Loans & Advances Module Tab -->
        <div v-if="activeTab === 'loans'" class="simple-panel">
          <div class="settings-list">
            <div class="setting-row" v-for="setting in [...loansSettings, ...advancesSettings]" :key="setting.setting_key">
              <label class="setting-label">
                {{ $t(setting.setting_name) }}
                <span class="required" v-if="setting.is_required">*</span>
              </label>
              <VSelect
                v-model="setting.main_account_id"
                :options="getAccountsForType(setting.account_type)"
                label="label"
                :reduce="option => option.id"
                :placeholder="$t('Select account')"
                :searchable="true"
                :clearable="true"
                :append-to-body="true"
                @input="onMainAccountChange(setting)"
                class="simple-select"
              >
                <template #no-options>
                  <div class="vselect-status">
                    <i v-if="chartAccountsLoading" class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ chartAccountsLoading ? $t('Loading accounts...') : $t('No accounts found') }}</span>
                  </div>
                </template>
                <template #list-header>
                  <div v-if="chartAccountsLoading" class="vselect-loading">
                    <i class="fas fa-spinner fa-spin mr-2"></i>
                    <span>{{ $t('Loading accounts...') }}</span>
                  </div>
                </template>
                <template #option="{ name, code, type }">
                  <div class="account-option">
                    <span class="account-name">{{ name }}</span>
                    <span class="account-code">{{ code }}</span>
                    <span class="account-type">{{ type }}</span>
                  </div>
                </template>
                <template #selected-option="{ label, name }">
                  <span class="selected-account-name">{{ label || name }}</span>
                </template>
              </VSelect>
            </div>
          </div>
        </div>
              </div>

              <!-- Save Button -->
              <div class="actions-container">
                <button 
                  @click="saveAllSettings" 
                  :disabled="saving"
                  class="btn btn-primary btn-lg"
                >
                  <i class="fas fa-save mr-2"></i>
                  {{ saving ? $t('Saving...') : $t('Save All Settings') }}
                </button>
              </div>

              <!-- Status Messages -->
              <div v-if="message" class="alert" :class="messageType">
                {{ message }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AccountRoutingSettings',
  components: {
    SettingsSidebar: () => import('~/components/SettingsSidebar'),
  },
  data() {
    return {
      breadcrumbsCurrent: this.$t('اعدادات الحسابات العامة'),
      breadcrumbs: [
        {
          name: this.$t('Dashboard'),
          url: 'home',
        },
        {
          name: this.$t('Setup'),
          url: 'setup.index',
        },
        {
          name: this.$t('اعدادات الحسابات العامة'),
          url: '',
        },
      ],
      settings: [],
      saving: false,
      message: '',
      messageType: 'alert-info',
      chartOfAccounts: [],
      chartAccountsLoading: false,
      isLoading: false,
      
      activeTab: 'sales',
      branches: [],
      selectedBranchId: null
    }
  },
  computed: {
    user() {
      return this.$store.getters['auth/user'] || {}
    },
    currentBranchId() {
      return this.selectedBranchId || this.user?.default_branch_id || null
    },
    tabs() {
      return [
        {
          id: 'sales',
          label: this.$t('Sales'),
          icon: 'fas fa-shopping-cart',
          count: this.salesSettings.length
        },
        {
          id: 'purchase',
          label: this.$t('Purchase'),
          icon: 'fas fa-truck',
          count: this.purchaseSettings.length
        },
        {
          id: 'vat',
          label: this.$t('VAT/Tax'),
          icon: 'fas fa-percentage',
          count: this.vatSettings.length
        },
        {
          id: 'expenses',
          label: this.$t('Expenses'),
          icon: 'fas fa-receipt',
          count: this.expenseSettings.length
        },
        {
          id: 'inventory',
          label: this.$t('Inventory'),
          icon: 'fas fa-boxes',
          count: this.inventorySettings.length
        },
        {
          id: 'banking',
          label: this.$t('Banking & Cash'),
          icon: 'fas fa-university',
          count: this.bankingSettings.length
        },
        {
          id: 'assets',
          label: this.$t('Assets'),
          icon: 'fas fa-building',
          count: this.assetsSettings.length
        },
        {
          id: 'equity',
          label: this.$t('Equity & Liabilities'),
          icon: 'fas fa-balance-scale',
          count: this.equitySettings.length + this.liabilitiesSettings.length
        },
        {
          id: 'loans',
          label: this.$t('Loans & Advances'),
          icon: 'fas fa-hand-holding-usd',
          count: this.loansSettings.length + this.advancesSettings.length
        }
      ]
    },
    
    salesSettings() {
      return this.settings.filter(s => this.isSalesSetting(s))
    },
    
    purchaseSettings() {
      return this.settings.filter(s => this.isPurchaseSetting(s))
    },
    
    vatSettings() {
      return this.settings.filter(s => this.isVatSetting(s))
    },
    
    expenseSettings() {
      return this.settings.filter(s => this.isExpenseSetting(s))
    },
    
    inventorySettings() {
      return this.settings.filter(s => this.isInventorySetting(s))
    },
    
    bankingSettings() {
      return this.settings.filter(s => this.isBankingSetting(s))
    },
    
    assetsSettings() {
      return this.settings.filter(s => this.isAssetsSetting(s))
    },
    
    equitySettings() {
      return this.settings.filter(s => this.isEquitySetting(s))
    },
    
    liabilitiesSettings() {
      return this.settings.filter(s => this.isLiabilitiesSetting(s))
    },
    
    loansSettings() {
      return this.settings.filter(s => this.isLoansSetting(s))
    },
    
    advancesSettings() {
      return this.settings.filter(s => this.isAdvancesSetting(s))
    },

    formattedAccounts() {
      // Ensure we always work with an array to avoid runtime errors
      if (!Array.isArray(this.chartOfAccounts) || this.chartOfAccounts.length === 0) {
        return []
      }

      // Filter accounts from level 3 and higher, then format them
      return this.chartOfAccounts
        .filter(account => {
          const level = account.level ?? 0
          return level >= 3
        })
        .map(account => {
          const level = account.level ?? 0
          // Create indent based on level (level 3 = 2 dashes, level 4 = 3 dashes, etc.)
          const indent = level > 1 ? '— '.repeat(Math.max(0, level - 1)) : ''
          return {
            id: account.id,
            label: `${indent}${account.name} (${account.code})`,
            name: account.name,
            code: account.code,
            type: account.type,
            type_id: account.type_id,
            level: account.level,
            is_active: account.is_active,
          }
        })
    }
  },
  
  async mounted() {
    // Ensure user is loaded before proceeding
    if (!this.$store.getters['auth/user'] && this.$store.getters['auth/token']) {
      try {
        await this.$store.dispatch('auth/fetchUser')
      } catch (error) {
        console.warn('Failed to fetch user:', error)
      }
    }
    
    // Initialize selectedBranchId with user's default branch before loading
    const user = this.user
    if (user && user.default_branch_id) {
      this.selectedBranchId = user.default_branch_id
    }
    
    await this.loadBranches()
    // After loading branches, ensure selectedBranchId is set correctly
    // (loadBranches will validate and set it if needed)
    await this.loadSettings()
    
    // Only load chart of accounts if we have a branch selected
    if (this.currentBranchId) {
      await this.loadChartOfAccounts()
    } else {
      console.warn('No branch selected, cannot load chart of accounts')
    }
  },
  
  methods: {
    async loadBranches() {
      try {
        // Use computed property which returns empty object if user is not available
        const user = this.user
        console.log('Loading branches for user:', user)
        
        if (!user || !user.id) {
          console.warn('No user found, trying to load all branches...')
          // Fallback: try to load all branches
          try {
            const response = await this.$http.get('/api/branches', {
              params: { perPage: 1000 }
            })
            if (response.data && response.data.data) {
              this.branches = Array.isArray(response.data.data) ? response.data.data.map(b => ({
                id: b.id,
                label: b.name,
                name: b.name,
                code: b.code || ''
              })) : []
              
              // Set first branch as selected if available
              if (this.branches.length > 0 && !this.selectedBranchId) {
                this.selectedBranchId = this.branches[0].id
              }
            }
          } catch (fallbackError) {
            console.error('Fallback branch loading failed:', fallbackError)
          }
          return
        }
        
        // Try to get all branches first (for superadmin) or user's branches
        const isSuperAdmin = Number(user.account_role) === 1
        console.log('Is superadmin:', isSuperAdmin)
        
        let branchesData = []
        
        if (isSuperAdmin) {
          console.log('Loading all branches for superadmin...')
          const response = await this.$http.get('/api/branches', {
            params: { perPage: 1000 }
          })
          console.log('Branches API response:', response.data)
          
          // Paginated response structure: { data: [...], current_page: 1, ... }
          if (response.data && response.data.data) {
            branchesData = Array.isArray(response.data.data) ? response.data.data : []
          } else if (Array.isArray(response.data)) {
            branchesData = response.data
          }
        } else {
          console.log('Loading user branches for user:', user.id)
          try {
            const response = await this.$http.get(`/api/users/${user.id}/branches`)
            console.log('User branches API response:', response.data)
            
            // Direct array response
            if (Array.isArray(response.data)) {
              branchesData = response.data
            } else if (response.data && Array.isArray(response.data.data)) {
              branchesData = response.data.data
            }
          } catch (userBranchesError) {
            console.error('Error loading user branches, trying all branches:', userBranchesError)
            // Fallback to all branches if user branches fail
            const fallbackResponse = await this.$http.get('/api/branches', {
              params: { perPage: 1000 }
            })
            if (fallbackResponse.data && fallbackResponse.data.data) {
              branchesData = Array.isArray(fallbackResponse.data.data) ? fallbackResponse.data.data : []
            }
          }
        }
        
        console.log('Branches data:', branchesData)
        
        // Format branches for VSelect
        this.branches = branchesData.map(branch => ({
          id: branch.id,
          label: branch.name || branch.label,
          name: branch.name,
          code: branch.code || ''
        }))
        
        console.log('Formatted branches:', this.branches)
        
        // Set default branch - always use user's default branch if available, otherwise first branch
        if (this.branches.length > 0) {
          // Priority: user's default branch > first branch in list
          if (user.default_branch_id) {
            const defaultBranchExists = this.branches.some(b => b.id === user.default_branch_id)
            if (defaultBranchExists) {
              this.selectedBranchId = user.default_branch_id
              console.log('Set selected branch to user default:', this.selectedBranchId)
            } else {
              // User's default branch not in available branches, use first branch
              this.selectedBranchId = this.branches[0].id
              console.log('User default branch not available, using first branch:', this.selectedBranchId)
            }
          } else {
            // No default branch set for user, use first branch
            this.selectedBranchId = this.branches[0].id
            console.log('No user default branch, using first branch:', this.selectedBranchId)
          }
        }
      } catch (error) {
        console.error('Error loading branches:', error)
        console.error('Error response:', error.response)
        this.showMessage(this.$t('Error loading branches') + ': ' + (error.response?.data?.message || error.message), 'alert-danger')
      }
    },
    
    onBranchChange() {
      // Reload both settings and chart of accounts when branch changes
      // This ensures we see accounts specific to the selected branch
      this.loadSettings()
      this.loadChartOfAccounts()
    },
    
    // Resolve module robustly in case backend sends inconsistent module values
    getResolvedModule(setting) {
      if (!setting) return ''
      const module = (setting.module || '').toString().toLowerCase()
      const key = (setting.setting_key || '').toString().toLowerCase()

      if (module === 'sales' || ['clients_account','sales_account','product_sales_account','discount_allowed_account'].includes(key)) return 'sales'
      if (module === 'purchase' || ['suppliers_account','purchase_account','product_purchase_account','discount_received_account','transport_expense_account','purchase_returns_account'].includes(key)) return 'purchase'
      if (module === 'vat' || ['sales_vat_account','purchase_vat_account'].includes(key)) return 'vat'
      if (module === 'expenses' || ['expenses_account'].includes(key)) return 'expenses'
      if (module === 'inventory' || ['inventory_account'].includes(key)) return 'inventory'
      if (module === 'banking' || ['main_cash_account','main_bank_account'].includes(key)) return 'banking'
      if (module === 'assets' || ['asset_depreciation_account'].includes(key)) return 'assets'
      if (module === 'equity' || ['equity_account'].includes(key)) return 'equity'
      if (module === 'liabilities' || ['current_liabilities_account'].includes(key)) return 'liabilities'
      if (module === 'loans' || ['loans_account'].includes(key)) return 'loans'
      if (module === 'advances' || ['advances_account'].includes(key)) return 'advances'
      return module
    },

    // Helper: match base keys with optional suffixes like _automatic, _cancel
    keyMatchesAny(keyRaw, baseList) {
      const key = (keyRaw || '').toString().toLowerCase()
      return baseList.some(base => key === base || key.startsWith(base + '_'))
    },

    // Strong, reusable predicates per module to avoid cross-tab leakage
    isSalesSetting(s) {
      const key = (s.setting_key || '').toString().toLowerCase()
      return this.keyMatchesAny(key, [
        'clients_account',
        'sales_account',
        'product_sales_account',
        'discount_allowed_account'
      ])
    },

    isPurchaseSetting(s) {
      const key = (s.setting_key || '').toString().toLowerCase()
      return this.keyMatchesAny(key, [
        'suppliers_account',
        'discount_received_account',
        'transport_expense_account',
        'purchase_returns_account'
      ])
    },

    isVatSetting(s) {
      const key = (s.setting_key || '').toString().toLowerCase()
      return this.keyMatchesAny(key, [
        'sales_vat_account',
        'purchase_vat_account'
      ])
    },

    isExpenseSetting(s) {
      const key = (s.setting_key || '').toString().toLowerCase()
      return this.keyMatchesAny(key, [
        'expenses_account'
      ])
    },
    
    isInventorySetting(s) {
      const key = (s.setting_key || '').toString().toLowerCase()
      const module = (s.module || '').toString().toLowerCase()
      return module === 'inventory' || this.keyMatchesAny(key, [
        'inventory_account',
        'cost_of_sales_account'
      ])
    },
    
    isBankingSetting(s) {
      const key = (s.setting_key || '').toString().toLowerCase()
      const module = (s.module || '').toString().toLowerCase()
      return module === 'banking' || this.keyMatchesAny(key, [
        'main_cash_account',
        'main_bank_account'
      ])
    },
    
    isAssetsSetting(s) {
      const key = (s.setting_key || '').toString().toLowerCase()
      const module = (s.module || '').toString().toLowerCase()
      return module === 'assets' || this.keyMatchesAny(key, [
        'asset_depreciation_account'
      ])
    },
    
    isEquitySetting(s) {
      const key = (s.setting_key || '').toString().toLowerCase()
      const module = (s.module || '').toString().toLowerCase()
      return module === 'equity' || this.keyMatchesAny(key, [
        'equity_account'
      ])
    },
    
    isLiabilitiesSetting(s) {
      const key = (s.setting_key || '').toString().toLowerCase()
      const module = (s.module || '').toString().toLowerCase()
      return module === 'liabilities' || this.keyMatchesAny(key, [
        'current_liabilities_account'
      ])
    },
    
    isLoansSetting(s) {
      const key = (s.setting_key || '').toString().toLowerCase()
      const module = (s.module || '').toString().toLowerCase()
      return module === 'loans' || this.keyMatchesAny(key, [
        'loans_account'
      ])
    },
    
    isAdvancesSetting(s) {
      const key = (s.setting_key || '').toString().toLowerCase()
      const module = (s.module || '').toString().toLowerCase()
      return module === 'advances' || this.keyMatchesAny(key, [
        'advances_account'
      ])
    },
    getDefaultSettings() {
      // Return default settings structure so all selects are always shown
      return [
        // Sales Module
        { id: null, module: 'sales', setting_key: 'clients_account', setting_name: 'Clients Account', account_type: 'Asset', main_account_id: null, is_required: true },
        { id: null, module: 'sales', setting_key: 'sales_account', setting_name: 'Sales Account', account_type: 'Revenue', main_account_id: null, is_required: true },
        { id: null, module: 'sales', setting_key: 'product_sales_account', setting_name: 'Product Sales Account', account_type: 'Revenue', main_account_id: null, is_required: true },
        { id: null, module: 'sales', setting_key: 'discount_allowed_account', setting_name: 'Discount Allowed Account', account_type: 'Expense', main_account_id: null, is_required: true },
        
        // Purchase Module
        { id: null, module: 'purchase', setting_key: 'suppliers_account', setting_name: 'Suppliers Account', account_type: 'Liability', main_account_id: null, is_required: true },
        { id: null, module: 'purchase', setting_key: 'discount_received_account', setting_name: 'Discount Received Account', account_type: 'Expense', main_account_id: null, is_required: true },
        { id: null, module: 'purchase', setting_key: 'transport_expense_account', setting_name: 'Transport Expense Account', account_type: 'Expense', main_account_id: null, is_required: false },
        { id: null, module: 'purchase', setting_key: 'purchase_returns_account', setting_name: 'Purchase Returns Account', account_type: 'Expense', main_account_id: null, is_required: false },
        
        // VAT/Tax Module
        { id: null, module: 'vat', setting_key: 'sales_vat_account', setting_name: 'Sales VAT Account', account_type: 'Liability', main_account_id: null, is_required: true },
        { id: null, module: 'vat', setting_key: 'purchase_vat_account', setting_name: 'Purchase VAT Account', account_type: 'Asset', main_account_id: null, is_required: true },
        
        // Expenses Module
        { id: null, module: 'expenses', setting_key: 'expenses_account', setting_name: 'Expenses Account', account_type: 'Expense', main_account_id: null, is_required: true },
        
        // Inventory Module
        { id: null, module: 'inventory', setting_key: 'inventory_account', setting_name: 'Inventory Account', account_type: 'Asset', main_account_id: null, is_required: true },
        { id: null, module: 'inventory', setting_key: 'cost_of_sales_account', setting_name: 'Cost of Sales Account', account_type: 'Expense', main_account_id: null, is_required: true },
        
        // Banking Module
        { id: null, module: 'banking', setting_key: 'main_cash_account', setting_name: 'Main Cash Account', account_type: 'Asset', main_account_id: null, is_required: true },
        { id: null, module: 'banking', setting_key: 'main_bank_account', setting_name: 'Main Bank Account', account_type: 'Asset', main_account_id: null, is_required: true },
        
        // Advances Module
        { id: null, module: 'advances', setting_key: 'advances_account', setting_name: 'Advances Account', account_type: 'Asset', main_account_id: null, is_required: true },
        
        // Assets Module
        { id: null, module: 'assets', setting_key: 'asset_depreciation_account', setting_name: 'Asset Depreciation Account', account_type: 'Expense', main_account_id: null, is_required: true },
        
        // Equity Module
        { id: null, module: 'equity', setting_key: 'equity_account', setting_name: 'Equity Account', account_type: 'Equity', main_account_id: null, is_required: true },
        
        // Liabilities Module
        { id: null, module: 'liabilities', setting_key: 'current_liabilities_account', setting_name: 'Current Liabilities Account', account_type: 'Liability', main_account_id: null, is_required: true },
        
        // Loans Module
        { id: null, module: 'loans', setting_key: 'loans_account', setting_name: 'Loans Account', account_type: 'Liability', main_account_id: null, is_required: true }
      ]
    },
    
    mergeSettings(existingSettings, defaultSettings) {
      // Create a map of existing settings by setting_key
      const existingMap = {}
      existingSettings.forEach(setting => {
        existingMap[setting.setting_key] = setting
      })
      
      // Merge: use existing if available, otherwise use default
      return defaultSettings.map(defaultSetting => {
        const existing = existingMap[defaultSetting.setting_key]
        if (existing) {
          return existing
        }
        // Return default with branch_id set
        return {
          ...defaultSetting,
          branch_id: this.currentBranchId
        }
      })
    },
    
    async loadSettings() {
      if (!this.currentBranchId) {
        return
      }
      
      this.isLoading = true
      try {
        const response = await this.$http.get('/api/account-routing-settings', {
          params: {
            branch_id: this.currentBranchId
          }
        })
        
        let existingSettings = []
        // Handle both grouped and flat data structures
        if (response.data.data) {
          if (Array.isArray(response.data.data)) {
            // Flat array structure
            existingSettings = response.data.data
          } else {
            // Grouped structure - flatten it
            Object.keys(response.data.data).forEach(module => {
              if (Array.isArray(response.data.data[module])) {
                existingSettings = existingSettings.concat(response.data.data[module])
              }
            })
          }
        }
        
        // Merge existing settings with defaults to ensure all selects are shown
        const defaultSettings = this.getDefaultSettings()
        this.settings = this.mergeSettings(existingSettings, defaultSettings)
      } catch (error) {
        console.error('Error loading settings:', error)
        // Even on error, show default settings so user can still configure
        const defaultSettings = this.getDefaultSettings()
        this.settings = defaultSettings.map(s => ({
          ...s,
          branch_id: this.currentBranchId
        }))
      } finally {
        this.isLoading = false
      }
    },
    
    async loadChartOfAccounts() {
      this.chartAccountsLoading = true
      try {
        // Pass branch_id and include_stopped to get all accounts including stopped ones
        const response = await this.$http.get('/api/chart-of-accounts/dropdown', {
          params: {
            branch_id: this.currentBranchId,
            include_stopped: true
          }
        })
        
        console.log('API Response:', response.data)
        const accountsData = response.data && response.data.data
        this.chartOfAccounts = Array.isArray(accountsData) ? accountsData : []
        
        console.log('Loaded accounts:', this.chartOfAccounts.length)
        console.log('Sample account:', this.chartOfAccounts[0])
        
        if (this.chartOfAccounts.length === 0) {
          console.warn('No accounts found. Branch ID:', this.currentBranchId)
          this.showMessage(this.$t('Warning: No chart of accounts found. Please create some accounts first.'), 'alert-warning')
        }
      } catch (error) {
        console.error('Error loading chart of accounts:', error)
        console.error('Error response:', error.response)
        this.showMessage(this.$t('Error loading chart of accounts') + ': ' + (error.response?.data?.message || error.message), 'alert-danger')
      } finally {
        this.chartAccountsLoading = false
      }
    },
    
    getAccountsForType(accountType) {
      // Return all accounts from level 3 and higher, regardless of type
      // All account selects should show all accounts from the tree
      return this.formattedAccounts
    },
    
    async updateSetting(setting) {
      try {
        // If setting doesn't have an ID, create it first
        if (!setting.id) {
          const createData = {
            branch_id: this.currentBranchId,
            module: setting.module,
            setting_key: setting.setting_key,
            setting_name: setting.setting_name,
            account_type: setting.account_type,
            main_account_id: setting.main_account_id,
            is_required: setting.is_required || false,
            is_active: true
          }
          
          const createResponse = await this.$http.post('/api/account-routing-settings', createData)
          if (createResponse.data.success) {
            // Update the setting with the new ID
            setting.id = createResponse.data.data?.id
            this.showMessage(this.$t('Setting created successfully'), 'alert-success')
            return
          }
        } else {
          // Update existing setting
          const updateData = {
            main_account_id: setting.main_account_id,
            module: setting.module,
            setting_key: setting.setting_key,
            branch_id: this.currentBranchId
          }

          const response = await this.$http.put(`/api/account-routing-settings/${setting.id}`, updateData)
          
          if (response.data.success) {
            this.showMessage(this.$t('Setting updated successfully'), 'alert-success')
          }
        }
      } catch (error) {
        console.error('Error updating setting:', error)
        this.showMessage(this.$t('Error updating setting') + ': ' + (error.response?.data?.message || error.message), 'alert-danger')
      }
    },
    
    async saveAllSettings() {
      if (!this.currentBranchId) {
        this.showMessage(this.$t('Please select a branch'), 'alert-danger')
        return
      }
      
      this.saving = true
      
      try {
        // Separate settings into updates (have ID) and creates (no ID)
        const updates = []
        const creates = []
        
        this.settings.forEach(setting => {
          if (setting.id) {
            updates.push({
              id: setting.id,
              main_account_id: setting.main_account_id
            })
          } else if (setting.main_account_id) {
            // Only create if an account is selected
            creates.push({
              branch_id: this.currentBranchId,
              module: setting.module,
              setting_key: setting.setting_key,
              setting_name: setting.setting_name,
              account_type: setting.account_type,
              main_account_id: setting.main_account_id,
              is_required: setting.is_required || false,
              is_active: true
            })
          }
        })
        
        // Update existing settings
        if (updates.length > 0) {
          await this.$http.put('/api/account-routing-settings/bulk', { 
            updates,
            branch_id: this.currentBranchId
          })
        }
        
        // Create new settings
        for (const createData of creates) {
          await this.$http.post('/api/account-routing-settings', createData)
        }
        
        // Reload settings to get the new IDs
        await this.loadSettings()
        
        this.showMessage(this.$t('All settings saved successfully'), 'alert-success')
      } catch (error) {
        console.error('Error saving settings:', error)
        this.showMessage(this.$t('Error saving settings') + ': ' + (error.response?.data?.message || error.message), 'alert-danger')
      } finally {
        this.saving = false
      }
    },
    
    showMessage(message, type = 'alert-info') {
      this.message = message
      this.messageType = type

      setTimeout(() => {
        this.message = ''
      }, 5000)
    },

    showSeederInstructions() {
      this.showMessage(
        this.$t('To initialize the account routing settings, you need to run the database seeder. Open your terminal and run: php artisan db:seed --class=AccountRoutingSettingsSeeder. This will create the default settings for all modules. After running the seeder, refresh this page to see the settings.'),
        'alert-info'
      )
    },

    async checkSettingsExist() {
      try {
        const response = await this.$http.get('/api/account-routing-settings')
        if (response.data.data && Array.isArray(response.data.data) && response.data.data.length > 0) {
          return true
        }
        return false
      } catch (error) {
        console.error('Error checking settings:', error)
        return false
      }
    },

    onMainAccountChange(setting) {
      // Update the setting
      this.updateSetting(setting)
    },

    isSettingConfigured(setting) {
      return setting.main_account_id !== null
    },

  }
}
</script>

<style scoped>
.card-description {
  color: #6c757d;
  font-size: 0.9rem;
  margin: 0;
  margin-top: 0.5rem;
}

/* Tab Navigation */
.settings-card {
  margin-bottom: 1.5rem;
}

.settings-card .nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: none;
  background: transparent;
  color: #495057;
  text-align: right;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 6px;
  width: 100%;
  justify-content: flex-start;
}

.settings-card .nav-link:hover {
  background: #f8f9fa;
  color: #007bff;
}

.settings-card .nav-link.active {
  background: #007bff;
  color: white;
}

.settings-card .nav-link i {
  font-size: 1rem;
  width: 20px;
  text-align: center;
}

.settings-card .nav-link .badge {
  margin-right: auto;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
}

.settings-card .nav-link.active .badge {
  background: rgba(255, 255, 255, 0.3);
  color: white;
}

/* Tab Content */
.tab-content {
  padding: 1rem;
}

.tab-panel {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.simple-panel {
  animation: fadeIn 0.2s ease;
  padding: 0 0.5rem;
}

.settings-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.setting-row {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #eef1f4;
}

.setting-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.setting-label {
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
}

.required {
  color: #e74c3c;
  margin-left: 0.25rem;
}

.simple-select {
  width: 100%;
}

.vselect-loading,
.vselect-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  color: #6c757d;
}

.v-select .vs__dropdown-menu {
  z-index: 2000;
}

.actions-container {
  text-align: center;
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
}

.alert {
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.alert-info {
  background-color: #d1ecf1;
  color: #0c5460;
  border: 1px solid #bee5eb;
}

.alert-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.loading-container {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.loading-text {
  margin-top: 1rem;
  color: #7f8c8d;
  font-size: 1.1rem;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}

.no-settings-message {
  text-align: center;
  padding: 3rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  margin-top: 2rem;
}

.no-settings-message .text-muted {
  color: #6c757d !important;
}

.no-settings-message .fas {
  opacity: 0.6;
}

/* debug styles removed */

/* Form Elements */
.routing-option,
.account-option {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem 0;
}

.routing-label,
.account-name {
  font-weight: 600;
  color: #2c3e50;
}

.routing-description,
.account-code {
  font-size: 0.8rem;
  color: #7f8c8d;
  font-family: monospace;
}

.routing-option .account-type,
.account-option .account-type {
  font-size: 0.8rem;
  color: #3498db;
  text-transform: uppercase;
  font-weight: 500;
}

.selected-routing-label,
.selected-account-name {
  font-weight: 600;
  color: #2c3e50;
}

/* Responsive Design */
@media (max-width: 768px) {
  .account-routing-settings {
    padding: 1rem;
  }

  .settings-card {
    margin-bottom: 1rem;
  }
  
  .settings-card .nav-link {
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .setting-row {
    padding-bottom: 0.5rem;
  }
}

@media (max-width: 480px) {
  .tab-content {
    padding: 0.5rem 0;
  }

  .simple-panel {
    padding: 0;
  }
}
</style>
