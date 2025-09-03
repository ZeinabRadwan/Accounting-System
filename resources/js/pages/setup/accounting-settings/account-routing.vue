<template>
  <div class="account-routing-settings">
    <div class="page-header">
      <h1 class="page-title">{{ $t('Account Routing Settings') }}</h1>
      <p class="page-description">
        {{ $t('Configure parent accounts for different accounting modules to ensure proper journal entry routing') }}
      </p>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="loading-container">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <p class="loading-text">{{ $t('Loading Chart of Accounts...') }}</p>
    </div>

    <div v-else class="settings-container">
      <!-- Tab Navigation -->
      <div class="tab-navigation">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="['tab-button', { 'active': activeTab === tab.id }]"
        >
          <i :class="tab.icon"></i>
          <span>{{ tab.label }}</span>
          <span class="tab-count" v-if="tab.count > 0">{{ tab.count }}</span>
        </button>
      </div>

      <!-- Tab Content -->
      <div class="tab-content">
        <!-- Sales Module Tab -->
        <div v-if="activeTab === 'sales'" class="tab-panel">
          <div class="module-header">
            <h3 class="module-title">
              <i class="fas fa-shopping-cart text-primary"></i>
              {{ $t('Sales Module') }}
            </h3>
            <p class="module-description">{{ $t('Configure accounts for sales-related transactions') }}</p>
          </div>
          
          <div class="settings-grid">
            <div class="setting-card" v-for="setting in salesSettings" :key="setting.setting_key">
              <div class="setting-header">
                <h4 class="setting-name">
                  {{ setting.setting_name }}
                  <span class="required" v-if="setting.is_required">*</span>
                </h4>
                <div class="setting-status">
                  <span v-if="isSettingConfigured(setting)" class="status-badge status-success">
                    <i class="fas fa-check-circle"></i> {{ $t('Configured') }}
                  </span>
                  <span v-else class="status-badge status-warning">
                    <i class="fas fa-exclamation-triangle"></i> {{ $t('Not Configured') }}
                  </span>
                </div>
              </div>
              
              <p class="setting-description">{{ setting.description }}</p>
              
              <div class="setting-controls">
                <!-- Routing Type Dropdown -->
                <div class="form-group">
                  <label class="form-label">{{ $t('Routing Type') }}</label>
                  <VSelect
                    v-model="setting.routing_type"
                    :options="getRoutingTypeOptions(setting)"
                    :reduce="option => option.value"
                    :placeholder="$t('Select routing type')"
                    :searchable="false"
                    :clearable="false"
                    @input="onRoutingTypeChange(setting)"
                    class="form-select"
                  >
                    <template #option="{ label, description }">
                      <div class="routing-option">
                        <span class="routing-label">{{ label }}</span>
                        <span class="routing-description">{{ description }}</span>
                      </div>
                    </template>
                    <template #selected-option="{ label }">
                      <span class="selected-routing-label">{{ label }}</span>
                    </template>
                  </VSelect>
                </div>

                <!-- Main Account Dropdown (Conditional) -->
                <div v-if="shouldShowMainAccount(setting)" class="form-group">
                  <label class="form-label">{{ $t('Main Account') }}</label>
                  <VSelect
                    v-model="setting.main_account_id"
                    :options="getAccountsForType(setting.account_type)"
                    :reduce="option => option.id"
                    :placeholder="$t('Select account')"
                    :searchable="true"
                    :clearable="true"
                    @input="onMainAccountChange(setting)"
                    class="form-select"
                  >
                    <template #option="{ name, code, type }">
                      <div class="account-option">
                        <span class="account-name">{{ name }}</span>
                        <span class="account-code">{{ code }}</span>
                        <span class="account-type">{{ type }}</span>
                      </div>
                    </template>
                    <template #selected-option="{ name }">
                      <span class="selected-account-name">{{ name }}</span>
                    </template>
                  </VSelect>
                </div>

                <!-- Special handling for Discount Allowed setting -->
                <div v-if="setting.setting_key === 'discount_allowed_account' && setting.routing_type === 'automatic'" class="form-group">
                  <div class="alert alert-info">
                    <i class="fas fa-info-circle mr-2"></i>
                    <strong>Note:</strong> When discounts are applied to sales, they will be automatically posted to the selected account above.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Purchase Module Tab -->
        <div v-if="activeTab === 'purchase'" class="tab-panel">
          <div class="module-header">
            <h3 class="module-title">
              <i class="fas fa-truck text-success"></i>
              {{ $t('Purchase Module') }}
            </h3>
            <p class="module-description">{{ $t('Configure accounts for purchase-related transactions') }}</p>
          </div>
          
          <div class="settings-grid">
            <div class="setting-card" v-for="setting in purchaseSettings" :key="setting.setting_key">
              <div class="setting-header">
                <h4 class="setting-name">
                  {{ setting.setting_name }}
                  <span class="required" v-if="setting.is_required">*</span>
                </h4>
                <div class="setting-status">
                  <span v-if="isSettingConfigured(setting)" class="status-badge status-success">
                    <i class="fas fa-check-circle"></i> {{ $t('Configured') }}
                  </span>
                  <span v-else class="status-badge status-warning">
                    <i class="fas fa-exclamation-triangle"></i> {{ $t('Not Configured') }}
                  </span>
                </div>
              </div>
              
              <p class="setting-description">{{ setting.description }}</p>
              
              <div class="setting-controls">
                <!-- Routing Type Dropdown -->
                <div class="form-group">
                  <label class="form-label">{{ $t('Routing Type') }}</label>
                  <VSelect
                    v-model="setting.routing_type"
                    :options="getRoutingTypeOptions(setting)"
                    :reduce="option => option.value"
                    :placeholder="$t('Select routing type')"
                    :searchable="false"
                    :clearable="false"
                    @input="onRoutingTypeChange(setting)"
                    class="form-select"
                  >
                    <template #option="{ label, description }">
                      <div class="routing-option">
                        <span class="routing-label">{{ label }}</span>
                        <span class="routing-description">{{ description }}</span>
                      </div>
                    </template>
                    <template #selected-option="{ label }">
                      <span class="selected-routing-label">{{ label }}</span>
                    </template>
                  </VSelect>
                </div>

                <!-- Main Account Dropdown (Conditional) -->
                <div v-if="shouldShowMainAccount(setting)" class="form-group">
                  <label class="form-label">{{ $t('Main Account') }}</label>
                  <VSelect
                    v-model="setting.main_account_id"
                    :options="getAccountsForType(setting.account_type)"
                    :reduce="option => option.id"
                    :placeholder="$t('Select account')"
                    :searchable="true"
                    :clearable="true"
                    @input="onMainAccountChange(setting)"
                    class="form-select"
                  >
                    <template #option="{ name, code, type }">
                      <div class="account-option">
                        <span class="account-name">{{ name }}</span>
                        <span class="account-code">{{ code }}</span>
                        <span class="account-type">{{ type }}</span>
                      </div>
                    </template>
                    <template #selected-option="{ name }">
                      <span class="selected-account-name">{{ name }}</span>
                    </template>
                  </VSelect>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- VAT/Tax Module Tab -->
        <div v-if="activeTab === 'vat'" class="tab-panel">
          <div class="module-header">
            <h3 class="module-title">
              <i class="fas fa-percentage text-warning"></i>
              {{ $t('VAT/Tax Module') }}
            </h3>
            <p class="module-description">{{ $t('Configure accounts for VAT and tax transactions') }}</p>
          </div>
          
          <div class="settings-grid">
            <div class="setting-card" v-for="setting in vatSettings" :key="setting.setting_key">
              <div class="setting-header">
                <h4 class="setting-name">
                  {{ setting.setting_name }}
                  <span class="required" v-if="setting.is_required">*</span>
                </h4>
                <div class="setting-status">
                  <span v-if="isSettingConfigured(setting)" class="status-badge status-success">
                    <i class="fas fa-check-circle"></i> {{ $t('Configured') }}
                  </span>
                  <span v-else class="status-badge status-warning">
                    <i class="fas fa-exclamation-triangle"></i> {{ $t('Not Configured') }}
                  </span>
                </div>
              </div>
              
              <p class="setting-description">{{ setting.description }}</p>
              
              <div class="setting-controls">
                <!-- Routing Type Dropdown -->
                <div class="form-group">
                  <label class="form-label">{{ $t('Routing Type') }}</label>
                  <VSelect
                    v-model="setting.routing_type"
                    :options="getRoutingTypeOptions(setting)"
                    :reduce="option => option.value"
                    :placeholder="$t('Select routing type')"
                    :searchable="false"
                    :clearable="false"
                    @input="onRoutingTypeChange(setting)"
                    class="form-select"
                  >
                    <template #option="{ label, description }">
                      <div class="routing-option">
                        <span class="routing-label">{{ label }}</span>
                        <span class="routing-description">{{ description }}</span>
                      </div>
                    </template>
                    <template #selected-option="{ label }">
                      <span class="selected-routing-label">{{ label }}</span>
                    </template>
                  </VSelect>
                </div>

                <!-- Main Account Dropdown (Conditional) -->
                <div v-if="shouldShowMainAccount(setting)" class="form-group">
                  <label class="form-label">{{ $t('Main Account') }}</label>
                  <VSelect
                    v-model="setting.main_account_id"
                    :options="getAccountsForType(setting.account_type)"
                    :reduce="option => option.id"
                    :placeholder="$t('Select account')"
                    :searchable="true"
                    :clearable="true"
                    @input="onMainAccountChange(setting)"
                    class="form-select"
                  >
                    <template #option="{ name, code, type }">
                      <div class="account-option">
                        <span class="account-name">{{ name }}</span>
                        <span class="account-code">{{ code }}</span>
                        <span class="account-type">{{ type }}</span>
                      </div>
                    </template>
                    <template #selected-option="{ name }">
                      <span class="selected-account-name">{{ name }}</span>
                    </template>
                  </VSelect>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Expenses Module Tab -->
        <div v-if="activeTab === 'expenses'" class="tab-panel">
          <div class="module-header">
            <h3 class="module-title">
              <i class="fas fa-receipt text-danger"></i>
              {{ $t('Expenses Module') }}
            </h3>
            <p class="module-description">{{ $t('Configure accounts for expense transactions') }}</p>
          </div>
          
          <div class="settings-grid">
            <div class="setting-card" v-for="setting in expenseSettings" :key="setting.setting_key">
              <div class="setting-header">
                <h4 class="setting-name">
                  {{ setting.setting_name }}
                  <span class="required" v-if="setting.is_required">*</span>
                </h4>
                <div class="setting-status">
                  <span v-if="isSettingConfigured(setting)" class="status-badge status-success">
                    <i class="fas fa-check-circle"></i> {{ $t('Configured') }}
                  </span>
                  <span v-else class="status-badge status-warning">
                    <i class="fas fa-exclamation-triangle"></i> {{ $t('Not Configured') }}
                  </span>
                </div>
              </div>
              
              <p class="setting-description">{{ setting.description }}</p>
              
              <div class="setting-controls">
                <!-- Routing Type Dropdown -->
                <div class="form-group">
                  <label class="form-label">{{ $t('Routing Type') }}</label>
                  <VSelect
                    v-model="setting.routing_type"
                    :options="getRoutingTypeOptions(setting)"
                    :reduce="option => option.value"
                    :placeholder="$t('Select routing type')"
                    :searchable="false"
                    :clearable="false"
                    @input="onRoutingTypeChange(setting)"
                    class="form-select"
                  >
                    <template #option="{ label, description }">
                      <div class="routing-option">
                        <span class="routing-label">{{ label }}</span>
                        <span class="routing-description">{{ description }}</span>
                      </div>
                    </template>
                    <template #selected-option="{ label }">
                      <span class="selected-routing-label">{{ label }}</span>
                    </template>
                  </VSelect>
                </div>

                <!-- Main Account Dropdown (Conditional) -->
                <div v-if="shouldShowMainAccount(setting)" class="form-group">
                  <label class="form-label">{{ $t('Main Account') }}</label>
                  <VSelect
                    v-model="setting.main_account_id"
                    :options="getAccountsForType(setting.account_type)"
                    :reduce="option => option.id"
                    :placeholder="$t('Select account')"
                    :searchable="true"
                    :clearable="true"
                    @input="onMainAccountChange(setting)"
                    class="form-select"
                  >
                    <template #option="{ name, code, type }">
                      <div class="account-option">
                        <span class="account-name">{{ name }}</span>
                        <span class="account-code">{{ code }}</span>
                        <span class="account-type">{{ type }}</span>
                      </div>
                    </template>
                    <template #selected-option="{ name }">
                      <span class="selected-account-name">{{ name }}</span>
                    </template>
                  </VSelect>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Settings Message -->
        <div v-if="settings.length === 0" class="no-settings-message">
          <div class="text-center py-5">
            <i class="fas fa-cog text-muted" style="font-size: 48px; margin-bottom: 16px;"></i>
            <h4 class="text-muted">{{ $t('No Account Routing Settings Found') }}</h4>
            <p class="text-muted">{{ $t('The account routing settings have not been initialized yet.') }}</p>
            <div class="mt-3">
              <button @click="loadSettings" class="btn btn-primary mr-2">
                <i class="fas fa-refresh mr-2"></i>
                {{ $t('Refresh Settings') }}
              </button>
              <button @click="showSeederInstructions" class="btn btn-info">
                <i class="fas fa-info-circle mr-2"></i>
                {{ $t('How to Fix') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Save Button -->
    <div class="actions-container" v-if="settings.length > 0">
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

    <!-- Debug Information (remove in production) -->
    <div v-if="debugMode" class="debug-panel">
      <h4>Debug Info:</h4>
      <p>Settings Count: {{ settings.length }}</p>
      <p>Chart of Accounts Count: {{ chartOfAccounts.length }}</p>
      <p>Loading: {{ isLoading }}</p>
      <p>Sales Settings: {{ salesSettings.length }}</p>
      <p>Purchase Settings: {{ purchaseSettings.length }}</p>
      <p>VAT Settings: {{ vatSettings.length }}</p>
      
      <!-- Discount Setting Debug -->
      <h5>Discount Allowed Setting:</h5>
      <div v-if="settings.find(s => s.setting_key === 'discount_allowed_account')" class="discount-debug">
        <p><strong>Found:</strong> Yes</p>
        <p><strong>Setting:</strong> {{ JSON.stringify(settings.find(s => s.setting_key === 'discount_allowed_account'), null, 2) }}</p>
      </div>
      <div v-else class="discount-debug">
        <p><strong>Found:</strong> No</p>
      </div>
      
      <p>Settings Data: {{ JSON.stringify(settings, null, 2) }}</p>
      <p>Chart of Accounts Sample: {{ JSON.stringify(chartOfAccounts.slice(0, 2), null, 2) }}</p>
    </div>

    <!-- Debug Toggle -->
    <div class="debug-toggle">
      <button @click="debugMode = !debugMode" class="btn btn-sm btn-secondary">
        <i class="fas fa-bug mr-1"></i>
        {{ debugMode ? 'Hide Debug' : 'Show Debug' }}
      </button>
      <button @click="debugDiscountSetting" class="btn btn-sm btn-info ml-2">
        <i class="fas fa-search mr-1"></i>
        Debug Discount
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AccountRoutingSettings',
  data() {
    console.log('AccountRoutingSettings data() called')
    
    return {
      settings: [],
      saving: false,
      message: '',
      messageType: 'alert-info',
      chartOfAccounts: [],
      isLoading: false,
      debugMode: false,
      activeTab: 'sales',
      // Default routing type options for most settings
      defaultRoutingTypeOptions: [
        { 
          label: 'Automatic Account Routing', 
          description: 'System automatically routes to the selected parent account', 
          value: 'automatic' 
        },
        { 
          label: 'Specify Per Each', 
          description: 'You will specify accounts individually for each item', 
          value: 'per_each' 
        },
        { 
          label: 'Specify Main Account Per Each', 
          description: 'You will specify a main account and then individual accounts', 
          value: 'main_account_per_each' 
        }
      ]
    }
  },
  computed: {
    tabs() {
      console.log('tabs computed property evaluated')
      return [
        {
          id: 'sales',
          label: 'Sales',
          icon: 'fas fa-shopping-cart',
          count: this.salesSettings.length
        },
        {
          id: 'purchase',
          label: 'Purchase',
          icon: 'fas fa-truck',
          count: this.purchaseSettings.length
        },
        {
          id: 'vat',
          label: 'VAT/Tax',
          icon: 'fas fa-percentage',
          count: this.vatSettings.length
        },
        {
          id: 'expenses',
          label: 'Expenses',
          icon: 'fas fa-receipt',
          count: this.expenseSettings.length
        }
      ]
    },
    
    salesSettings() {
      const sales = this.settings.filter(s => s.module === 'sales' && s.setting_key !== 'returns_account')
      console.log('Sales settings found:', sales.map(s => ({ key: s.setting_key, name: s.setting_name, routing_type: s.routing_type })))
      
      // Check specifically for discount setting
      const discountSetting = sales.find(s => s.setting_key === 'discount_allowed_account')
      if (discountSetting) {
        console.log('Discount Allowed Setting in salesSettings:', discountSetting)
      } else {
        console.log('Discount Allowed Setting NOT found in salesSettings')
        console.log('All sales settings keys:', sales.map(s => s.setting_key))
      }
      
      return sales
    },
    
    purchaseSettings() {
      const purchase = this.settings.filter(s => s.module === 'purchase' && s.setting_key !== 'purchase_returns_account')
      console.log('Purchase settings found:', purchase.map(s => ({ key: s.setting_key, name: s.setting_name, routing_type: s.routing_type })))
      return purchase
    },
    
    vatSettings() {
      const vat = this.settings.filter(s => s.module === 'vat')
      console.log('VAT settings found:', vat.map(s => ({ key: s.setting_key, name: s.setting_name, routing_type: s.routing_type })))
      return vat
    },
    
    expenseSettings() {
      const expenses = this.settings.filter(s => s.module === 'expenses')
      console.log('Expense settings found:', expenses.map(s => ({ key: s.setting_key, name: s.setting_name, routing_type: s.routing_type })))
      return expenses
    },

    // Get routing type options for a specific setting
    getRoutingTypeOptions() {
      return (setting) => {
        console.log('getRoutingTypeOptions called for setting:', setting.setting_key)
        
        // If a custom routing_type_options array is provided, use it.
        if (setting.routing_type_options && Array.isArray(setting.routing_type_options)) {
          // Debug for discount setting
          if (setting.setting_key === 'discount_allowed_account') {
            console.log('Discount setting using custom routing options:', setting.routing_type_options)
          }
          return setting.routing_type_options
        }
        // Otherwise, use the default options.
        if (setting.setting_key === 'discount_allowed_account') {
          console.log('Discount setting using default routing options:', this.defaultRoutingTypeOptions)
        }
        return this.defaultRoutingTypeOptions
      }
    }
  },
  
  async mounted() {
    console.log('AccountRoutingSettings component mounted')
    
    await this.loadSettings()
    await this.loadChartOfAccounts()
    
    // Debug discount setting
    this.$nextTick(() => {
      console.log('Component mounted, checking discount setting...')
      this.debugDiscountSetting()
      
      // Additional debugging
      console.log('Component state after mount:', {
        settingsCount: this.settings.length,
        hasDiscountSetting: this.settings.some(s => s.setting_key === 'discount_allowed_account'),
        salesSettingsCount: this.salesSettings.length,
        chartOfAccountsCount: this.chartOfAccounts.length
      })
    })
  },
  
  methods: {
    async loadSettings() {
      this.isLoading = true
      try {
        const response = await this.$http.get('/api/account-routing-settings')
        console.log('Settings response:', response.data)
        
        // Handle both grouped and flat data structures
        if (response.data.data) {
          if (Array.isArray(response.data.data)) {
            // Flat array structure
            this.settings = response.data.data
          } else {
            // Grouped structure - flatten it
            this.settings = []
            Object.keys(response.data.data).forEach(module => {
              if (Array.isArray(response.data.data[module])) {
                this.settings = this.settings.concat(response.data.data[module])
              }
            })
          }
        } else {
          this.settings = []
        }
        
        console.log('Processed settings:', this.settings)
        
        // Check for discount setting specifically
        const discountSetting = this.settings.find(s => s.setting_key === 'discount_allowed_account')
        if (discountSetting) {
          console.log('Discount Allowed Setting found:', discountSetting)
        } else {
          console.log('Discount Allowed Setting NOT found in processed settings')
          console.log('Available setting keys:', this.settings.map(s => s.setting_key))
        }
      } catch (error) {
        console.error('Error loading settings:', error)
        this.showMessage('Error loading settings: ' + (error.response?.data?.message || error.message), 'alert-danger')
      } finally {
        this.isLoading = false
      }
    },
    
    async loadChartOfAccounts() {
      try {
        const response = await this.$http.get('/api/chart-of-accounts/all')
        this.chartOfAccounts = response.data.data || []
        console.log('Chart of accounts loaded:', this.chartOfAccounts.length)
        
        // Check for Revenue accounts specifically
        const revenueAccounts = this.chartOfAccounts.filter(account => {
          if (account.type && typeof account.type === 'object' && account.type.name) {
            return account.type.name === 'Revenue'
          }
          return account.type === 'Revenue'
        })
        console.log('Revenue accounts found:', revenueAccounts.length)
        
        if (this.chartOfAccounts.length === 0) {
          this.showMessage('Warning: No chart of accounts found. Please create some accounts first.', 'alert-warning')
        }
      } catch (error) {
        console.error('Error loading chart of accounts:', error)
        this.showMessage('Error loading chart of accounts: ' + (error.response?.data?.message || error.message), 'alert-danger')
      }
    },
    
    getAccountsForType(accountType) {
      console.log('getAccountsForType called for account type:', accountType)
      
      if (!this.chartOfAccounts || this.chartOfAccounts.length === 0) {
        console.log('No chart of accounts available')
        return []
      }
      
      // Filter by account type name
      const accounts = this.chartOfAccounts.filter(account => {
        if (account.type && typeof account.type === 'object' && account.type.name) {
          return account.type.name === accountType
        }
        return account.type === accountType
      }).map(account => ({
        id: account.id,
        name: account.name,
        code: account.code,
        type: account.type && typeof account.type === 'object' ? account.type.name : account.type
      }))
      
      // Debug for Revenue accounts (used by discount setting)
      if (accountType === 'Revenue') {
        console.log('Revenue accounts found for discount setting:', accounts)
      }
      
      console.log(`Found ${accounts.length} accounts for type: ${accountType}`)
      return accounts
    },
    
    async updateSetting(setting) {
      console.log('updateSetting called for setting:', setting.setting_key)
      
      try {
        const updateData = {
          routing_type: setting.routing_type,
          main_account_id: setting.main_account_id
        }
        
        // Debug for discount setting
        if (setting.setting_key === 'discount_allowed_account') {
          console.log('Updating discount setting:', updateData)
        }
        
        const response = await this.$http.put(`/api/account-routing-settings/${setting.id}`, updateData)
        
        if (response.data.success) {
          this.showMessage('Setting updated successfully', 'alert-success')
          
          // Debug for discount setting
          if (setting.setting_key === 'discount_allowed_account') {
            console.log('Discount setting updated successfully')
          }
        }
      } catch (error) {
        console.error('Error updating setting:', error)
        this.showMessage('Error updating setting: ' + (error.response?.data?.message || error.message), 'alert-danger')
      }
    },
    
    async saveAllSettings() {
      console.log('saveAllSettings called')
      this.saving = true
      
      try {
        const updates = this.settings.map(setting => ({
          id: setting.id,
          routing_type: setting.routing_type,
          main_account_id: setting.main_account_id
        }))
        
        // Debug for discount setting
        const discountUpdate = updates.find(u => {
          const setting = this.settings.find(s => s.id === u.id)
          return setting && setting.setting_key === 'discount_allowed_account'
        })
        if (discountUpdate) {
          console.log('Discount setting update in bulk save:', discountUpdate)
        }
        
        const response = await this.$http.put('/api/account-routing-settings/bulk', { updates })
        
        if (response.data.success) {
          this.showMessage('All settings saved successfully', 'alert-success')
        }
      } catch (error) {
        console.error('Error saving settings:', error)
        this.showMessage('Error saving settings: ' + (error.response?.data?.message || error.message), 'alert-danger')
      } finally {
        this.saving = false
      }
    },
    
    showMessage(message, type = 'alert-info') {
      this.message = message
      this.messageType = type
      
      // Debug for discount-related messages
      if (message.includes('discount') || message.includes('Discount')) {
        console.log('Discount-related message shown:', { message, type })
      }
      
      setTimeout(() => {
        this.message = ''
      }, 5000)
    },

    showSeederInstructions() {
      this.showMessage(
        `To initialize the account routing settings, you need to run the database seeder. Open your terminal and run: php artisan db:seed --class=AccountRoutingSettingsSeeder. This will create the default settings for all modules. After running the seeder, refresh this page to see the settings.`,
        'alert-info'
      )
      
      // Debug current state
      console.log('Seeder instructions shown - current settings state:', {
        settingsCount: this.settings.length,
        hasDiscountSetting: this.settings.some(s => s.setting_key === 'discount_allowed_account'),
        discountSetting: this.settings.find(s => s.setting_key === 'discount_allowed_account')
      })
    },

    async checkSettingsExist() {
      try {
        const response = await this.$http.get('/api/account-routing-settings')
        if (response.data.data && Array.isArray(response.data.data) && response.data.data.length > 0) {
          // Check for discount setting specifically
          const hasDiscountSetting = response.data.data.some(s => s.setting_key === 'discount_allowed_account')
          console.log('Settings exist check - has discount setting:', hasDiscountSetting)
          return true
        }
        return false
      } catch (error) {
        console.error('Error checking settings:', error)
        return false
      }
    },

    // Handle routing type change
    onRoutingTypeChange(setting) {
      console.log('onRoutingTypeChange called for setting:', setting.setting_name, 'to routing type:', setting.routing_type)
      
      // Clear main account when switching to per_each or cancel routing
      if (setting.routing_type === 'per_each' || setting.routing_type === 'cancel') {
        setting.main_account_id = null
      }
      
      // Debug for discount setting
      if (setting.setting_key === 'discount_allowed_account') {
        console.log('Discount setting routing type changed:', {
          setting_key: setting.setting_key,
          old_routing_type: setting.routing_type,
          main_account_id: setting.main_account_id,
          shouldShowMainAccount: this.shouldShowMainAccount(setting)
        })
      }
      
      // Update the setting
      this.updateSetting(setting)
    },

    // Handle main account change
    onMainAccountChange(setting) {
      console.log('onMainAccountChange called for setting:', setting.setting_name, 'to main account ID:', setting.main_account_id)
      
      // Debug for discount setting
      if (setting.setting_key === 'discount_allowed_account') {
        console.log('Discount setting main account changed:', {
          setting_key: setting.setting_key,
          routing_type: setting.routing_type,
          main_account_id: setting.main_account_id,
          shouldShowMainAccount: this.shouldShowMainAccount(setting)
        })
      }
      
      // Update the setting
      this.updateSetting(setting)
    },

    // Check if main account dropdown should be shown
    shouldShowMainAccount(setting) {
      console.log('shouldShowMainAccount called for setting:', setting.setting_key, 'with routing_type:', setting.routing_type)
      
      const shouldShow = ['automatic', 'main_account_per_each'].includes(setting.routing_type)
      
      // Debug for discount setting
      if (setting.setting_key === 'discount_allowed_account') {
        console.log('shouldShowMainAccount for discount setting:', {
          setting_key: setting.setting_key,
          routing_type: setting.routing_type,
          shouldShow: shouldShow
        })
      }
      
      return shouldShow
    },

    // Check if setting is configured based on routing type
    isSettingConfigured(setting) {
      console.log('isSettingConfigured called for setting:', setting.setting_key, 'with routing_type:', setting.routing_type)
      
      const isConfigured = (() => {
        switch (setting.routing_type) {
          case 'automatic':
            return setting.main_account_id !== null
          case 'per_each':
            return true // No account needed for per each routing
          case 'main_account_per_each':
            return setting.main_account_id !== null
          case 'cancel':
            return true // No account needed for cancel routing
          default:
            return false
        }
      })()
      
      // Debug for discount setting
      if (setting.setting_key === 'discount_allowed_account') {
        console.log('isSettingConfigured for discount setting:', {
          setting_key: setting.setting_key,
          routing_type: setting.routing_type,
          main_account_id: setting.main_account_id,
          isConfigured: isConfigured
        })
      }
      
      return isConfigured
    },

    // Debug method to check discount setting specifically
    debugDiscountSetting() {
      const discountSetting = this.settings.find(s => s.setting_key === 'discount_allowed_account')
      if (discountSetting) {
        console.log('Discount Allowed Setting:', {
          key: discountSetting.setting_key,
          name: discountSetting.setting_name,
          routing_type: discountSetting.routing_type,
          main_account_id: discountSetting.main_account_id,
          account_type: discountSetting.account_type,
          routing_type_options: discountSetting.routing_type_options
        })
      } else {
        console.log('Discount Allowed Setting not found in settings')
      }
    }
  }
}
</script>

<style scoped>
.account-routing-settings {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.page-description {
  font-size: 1.1rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
}

.settings-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Tab Navigation */
.tab-navigation {
  display: flex;
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  overflow-x: auto;
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: #6c757d;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  min-width: 120px;
  justify-content: center;
}

.tab-button:hover {
  background: #e9ecef;
  color: #495057;
}

.tab-button.active {
  background: white;
  color: #007bff;
  border-bottom-color: #007bff;
}

.tab-button i {
  font-size: 1.1rem;
}

.tab-count {
  background: #6c757d;
  color: white;
  border-radius: 12px;
  padding: 0.2rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

.tab-button.active .tab-count {
  background: #007bff;
}

/* Tab Content */
.tab-content {
  padding: 2rem;
}

.tab-panel {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.module-header {
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e9ecef;
}

.module-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.module-description {
  color: #7f8c8d;
  font-size: 1.1rem;
  margin: 0;
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 1.5rem;
}

.setting-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.setting-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.setting-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.setting-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
  flex: 1;
}

.required {
  color: #e74c3c;
  margin-left: 0.25rem;
}

.setting-description {
  color: #7f8c8d;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.setting-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.9rem;
  margin: 0;
}

.form-select {
  width: 100%;
}

.setting-status {
  margin-left: 1rem;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.status-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.status-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.actions-container {
  text-align: center;
  margin-top: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

/* Discount info alert styling */
.setting-card .alert-info {
  margin: 0.5rem 0;
  padding: 0.75rem;
  font-size: 0.9rem;
  text-align: left;
  border-left: 4px solid #17a2b8;
}

.setting-card .alert-info i {
  margin-right: 0.5rem;
  color: #17a2b8;
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

.debug-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.debug-panel {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 2rem;
  font-family: monospace;
  font-size: 0.9rem;
  max-height: 400px;
  overflow-y: auto;
}

.debug-panel h4 {
  color: #495057;
  margin-bottom: 1rem;
}

.debug-panel p {
  margin-bottom: 0.5rem;
  word-break: break-all;
}

.debug-panel h5 {
  color: #495057;
  margin: 1rem 0 0.5rem 0;
  border-top: 1px solid #dee2e6;
  padding-top: 0.5rem;
}

.discount-debug {
  background: #e9ecef;
  padding: 0.5rem;
  border-radius: 4px;
  margin: 0.5rem 0;
}

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
  
  .settings-grid {
    grid-template-columns: 1fr;
  }
  
  .tab-navigation {
    flex-wrap: wrap;
  }
  
  .tab-button {
    min-width: 100px;
    padding: 0.75rem 1rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .setting-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .setting-status {
    margin-left: 0;
  }
}

@media (max-width: 480px) {
  .tab-content {
    padding: 1rem;
  }
  
  .setting-card {
    padding: 1rem;
  }
  
  .module-header {
    text-align: left;
  }
  
  .module-title {
    justify-content: flex-start;
  }
}
</style>
