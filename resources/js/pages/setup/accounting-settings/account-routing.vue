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
      <!-- Sales Module -->
      <div class="module-section" v-if="salesSettings.length > 0">
        <div class="module-header">
          <h3 class="module-title">
            <i class="fas fa-shopping-cart text-primary"></i>
            {{ $t('Sales Module') }}
          </h3>
          <p class="module-description">{{ $t('Configure accounts for sales-related transactions') }}</p>
        </div>
        
        <div class="settings-grid">
          <div class="setting-item" v-for="setting in salesSettings" :key="setting.setting_key">
            <label class="setting-label">
              {{ setting.setting_name }}
              <span class="required" v-if="setting.is_required">*</span>
            </label>
            <p class="setting-description">{{ setting.description }}</p>
            <VSelect
              v-model="setting.parent_account_id"
              :options="getAccountsForType(setting.account_type)"
              :reduce="option => option.id"
              :placeholder="$t('Select account')"
              :searchable="true"
              :clearable="true"
              @input="updateSetting(setting)"
            >
              <template #option="{ name, code, type }">
                <div class="account-option">
                  <span class="account-name">{{ name }}</span>
                  <span class="account-code">{{ code }}</span>
                  <span class="account-type">{{ type }}</span>
                </div>
              </template>
              <template #selected-option="{ name, code, type }">
                <div class="account-option">
                  <span class="account-name">{{ name }}</span>
                  <span class="account-code">{{ code }}</span>
                  <span class="account-type">{{ type }}</span>
                </div>
              </template>
            </VSelect>
          </div>
        </div>
      </div>

      <!-- Purchase Module -->
      <div class="module-section" v-if="purchaseSettings.length > 0">
        <div class="module-header">
          <h3 class="module-title">
            <i class="fas fa-truck text-success"></i>
            {{ $t('Purchase Module') }}
          </h3>
          <p class="module-description">{{ $t('Configure accounts for purchase-related transactions') }}</p>
        </div>
        
        <div class="settings-grid">
          <div class="setting-item" v-for="setting in purchaseSettings" :key="setting.setting_key">
            <label class="setting-label">
              {{ setting.setting_name }}
              <span class="required" v-if="setting.is_required">*</span>
            </label>
            <p class="setting-description">{{ setting.description }}</p>
            <VSelect
              v-model="setting.parent_account_id"
              :options="getAccountsForType(setting.account_type)"
              :reduce="option => option.id"
              :placeholder="$t('Select account')"
              :searchable="true"
              :clearable="true"
              @input="updateSetting(setting)"
            >
              <template #option="{ name, code, type }">
                <div class="account-option">
                  <span class="account-name">{{ name }}</span>
                  <span class="account-code">{{ code }}</span>
                  <span class="account-type">{{ type }}</span>
                </div>
              </template>
              <template #selected-option="{ name, code, type }">
                <div class="account-option">
                  <span class="account-name">{{ name }}</span>
                  <span class="account-code">{{ code }}</span>
                  <span class="account-type">{{ type }}</span>
                </div>
              </template>
            </VSelect>
          </div>
        </div>
      </div>

      <!-- VAT/Tax Module -->
      <div class="module-section" v-if="vatSettings.length > 0">
        <div class="module-header">
          <h3 class="module-title">
            <i class="fas fa-percentage text-warning"></i>
            {{ $t('VAT/Tax Module') }}
          </h3>
          <p class="module-description">{{ $t('Configure accounts for VAT and tax transactions') }}</p>
        </div>
        
        <div class="settings-grid">
          <div class="setting-item" v-for="setting in vatSettings" :key="setting.setting_key">
            <label class="setting-label">
              {{ setting.setting_name }}
              <span class="required" v-if="setting.is_required">*</span>
            </label>
            <p class="setting-description">{{ setting.description }}</p>
            <VSelect
              v-model="setting.parent_account_id"
              :options="getAccountsForType(setting.account_type)"
              :reduce="option => option.id"
              :placeholder="$t('Select account')"
              :searchable="true"
              :clearable="true"
              @input="updateSetting(setting)"
            >
              <template #option="{ name, code, type }">
                <div class="account-option">
                  <span class="account-name">{{ name }}</span>
                  <span class="account-code">{{ code }}</span>
                  <span class="account-type">{{ type }}</span>
                </div>
              </template>
              <template #selected-option="{ name, code, type }">
                <div class="account-option">
                  <span class="account-name">{{ name }}</span>
                  <span class="account-code">{{ code }}</span>
                  <span class="account-type">{{ type }}</span>
                </div>
              </template>
            </VSelect>
          </div>
        </div>
      </div>

      <!-- Expenses Module -->
      <div class="module-section" v-if="expenseSettings.length > 0">
        <div class="module-header">
          <h3 class="module-title">
            <i class="fas fa-receipt text-danger"></i>
            {{ $t('Expenses Module') }}
          </h3>
          <p class="module-description">{{ $t('Configure accounts for expense transactions') }}</p>
        </div>
        
        <div class="settings-grid">
          <div class="setting-item" v-for="setting in expenseSettings" :key="setting.setting_key">
            <label class="setting-label">
              {{ setting.setting_name }}
              <span class="required" v-if="setting.is_required">*</span>
            </label>
            <p class="setting-description">{{ setting.description }}</p>
            <VSelect
              v-model="setting.parent_account_id"
              :options="getAccountsForType(setting.account_type)"
              :reduce="option => option.id"
              :placeholder="$t('Select account')"
              :searchable="true"
              :clearable="true"
              @input="updateSetting(setting)"
            >
              <template #option="{ name, code, type }">
                <div class="account-option">
                  <span class="account-name">{{ name }}</span>
                  <span class="account-code">{{ code }}</span>
                  <span class="account-type">{{ type }}</span>
                </div>
              </template>
              <template #selected-option="{ name, code, type }">
                <div class="account-option">
                  <span class="account-name">{{ name }}</span>
                  <span class="account-code">{{ code }}</span>
                  <span class="account-type">{{ type }}</span>
                </div>
              </template>
            </VSelect>
          </div>
        </div>
      </div>

      <!-- Inventory Module -->
      <div class="module-section" v-if="inventorySettings.length > 0">
        <div class="module-header">
          <h3 class="module-title">
            <i class="fas fa-boxes text-info"></i>
            {{ $t('Inventory Module') }}
          </h3>
          <p class="module-description">{{ $t('Configure accounts for inventory transactions') }}</p>
        </div>
        
        <div class="settings-grid">
          <div class="setting-item" v-for="setting in inventorySettings" :key="setting.setting_key">
            <label class="setting-label">
              {{ setting.setting_name }}
              <span class="required" v-if="setting.is_required">*</span>
            </label>
            <p class="setting-description">{{ setting.description }}</p>
            <VSelect
              v-model="setting.parent_account_id"
              :options="getAccountsForType(setting.account_type)"
              :reduce="option => option.id"
              :placeholder="$t('Select account')"
              :searchable="true"
              :clearable="true"
              @input="updateSetting(setting)"
            >
              <template #option="{ name, code, type }">
                <div class="account-option">
                  <span class="account-name">{{ name }}</span>
                  <span class="account-code">{{ code }}</span>
                  <span class="account-type">{{ type }}</span>
                </div>
              </template>
              <template #selected-option="{ name, code, type }">
                <div class="account-option">
                  <span class="account-name">{{ name }}</span>
                  <span class="account-code">{{ code }}</span>
                  <span class="account-type">{{ type }}</span>
                </div>
              </template>
            </VSelect>
          </div>
        </div>
      </div>

      <!-- Treasury Module -->
      <div class="module-section" v-if="treasurySettings.length > 0">
        <div class="module-header">
          <h3 class="module-title">
            <i class="fas fa-university text-secondary"></i>
            {{ $t('Treasury Module') }}
          </h3>
          <p class="module-description">{{ $t('Configure accounts for treasury transactions') }}</p>
        </div>
        
        <div class="settings-grid">
          <div class="setting-item" v-for="setting in treasurySettings" :key="setting.setting_key">
            <label class="setting-label">
              {{ setting.setting_name }}
              <span class="required" v-if="setting.is_required">*</span>
            </label>
            <p class="setting-description">{{ setting.description }}</p>
            <VSelect
              v-model="setting.parent_account_id"
              :options="getAccountsForType(setting.account_type)"
              :reduce="option => option.id"
              :placeholder="$t('Select account')"
              :searchable="true"
              :clearable="true"
              @input="updateSetting(setting)"
            >
              <template #option="{ name, code, type }">
                <div class="account-option">
                  <span class="account-name">{{ name }}</span>
                  <span class="account-code">{{ code }}</span>
                  <span class="account-type">{{ type }}</span>
                </div>
              </template>
              <template #selected-option="{ name, code, type }">
                <div class="account-option">
                  <span class="account-name">{{ name }}</span>
                  <span class="account-code">{{ code }}</span>
                  <span class="account-type">{{ type }}</span>
                </div>
              </template>
            </VSelect>
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
      <p>Settings Data: {{ JSON.stringify(settings, null, 2) }}</p>
      <p>Chart of Accounts Sample: {{ JSON.stringify(chartOfAccounts.slice(0, 2), null, 2) }}</p>
    </div>

    <!-- Debug Toggle -->
    <div class="debug-toggle">
      <button @click="debugMode = !debugMode" class="btn btn-sm btn-secondary">
        <i class="fas fa-bug mr-1"></i>
        {{ debugMode ? 'Hide Debug' : 'Show Debug' }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AccountRoutingSettings',
  data() {
    return {
      settings: [],
      saving: false,
      message: '',
      messageType: 'alert-info',
      chartOfAccounts: [],
      isLoading: false,
      debugMode: false // Added debugMode data property
    }
  },
  computed: {
    salesSettings() {
      return this.settings.filter(s => s.module === 'sales')
    },
    
    purchaseSettings() {
      return this.settings.filter(s => s.module === 'purchase')
    },
    
    vatSettings() {
      return this.settings.filter(s => s.module === 'vat')
    },
    
    expenseSettings() {
      return this.settings.filter(s => s.module === 'expenses')
    },
    
    inventorySettings() {
      return this.settings.filter(s => s.module === 'inventory')
    },
    
    treasurySettings() {
      return this.settings.filter(s => s.module === 'treasury')
    }
  },
  
  async mounted() {
    await this.loadSettings()
    await this.loadChartOfAccounts()
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
        
        if (this.chartOfAccounts.length === 0) {
          this.showMessage('Warning: No chart of accounts found. Please create some accounts first.', 'alert-warning')
        }
      } catch (error) {
        console.error('Error loading chart of accounts:', error)
        this.showMessage('Error loading chart of accounts: ' + (error.response?.data?.message || error.message), 'alert-danger')
      }
    },
    
    getAccountsForType(accountType) {
      if (!this.chartOfAccounts || this.chartOfAccounts.length === 0) {
        return []
      }
      
      // Filter by account type name
      return this.chartOfAccounts.filter(account => {
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
    },
    
    async updateSetting(setting) {
      try {
        const response = await this.$http.put(`/api/account-routing-settings/${setting.id}`, {
          parent_account_id: setting.parent_account_id
        })
        
        if (response.data.success) {
          this.showMessage('Setting updated successfully', 'alert-success')
        }
      } catch (error) {
        console.error('Error updating setting:', error)
        this.showMessage('Error updating setting: ' + (error.response?.data?.message || error.message), 'alert-danger')
      }
    },
    
    async saveAllSettings() {
      this.saving = true
      
      try {
        const updates = this.settings.map(setting => ({
          id: setting.id,
          parent_account_id: setting.parent_account_id
        }))
        
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
      
      setTimeout(() => {
        this.message = ''
      }, 5000)
    },

    showSeederInstructions() {
      this.showMessage(
        `To initialize the account routing settings, you need to run the database seeder. Open your terminal and run: php artisan db:seed --class=AccountRoutingSettingsSeeder. This will create the default settings for all modules. After running the seeder, refresh this page to see the settings.`,
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
    }
  }
}
</script>

<style scoped>
.account-routing-settings {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.module-section {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
}

.module-header {
  margin-bottom: 2rem;
  text-align: center;
}

.module-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.module-description {
  color: #7f8c8d;
  font-size: 1rem;
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.setting-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.setting-label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 1rem;
}

.required {
  color: #e74c3c;
  margin-left: 0.25rem;
}

.setting-description {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.account-option {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.account-name {
  font-weight: 600;
  color: #2c3e50;
}

.account-code {
  font-size: 0.8rem;
  color: #7f8c8d;
  font-family: monospace;
}

.account-type {
  font-size: 0.8rem;
  color: #3498db;
  text-transform: uppercase;
  font-weight: 500;
}

.actions-container {
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
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

/* Responsive Design */
@media (max-width: 768px) {
  .account-routing-settings {
    padding: 1rem;
  }
  
  .settings-grid {
    grid-template-columns: 1fr;
  }
  
  .module-section {
    padding: 1.5rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style>
