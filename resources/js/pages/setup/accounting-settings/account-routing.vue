<template>
  <div class="account-routing-settings">
    <!-- Enhanced Header with Background -->
    <div class="page-header">
      <div class="header-background">
        <div class="header-content">
          <div class="header-icon">
            <i class="fas fa-cogs"></i>
          </div>
          <h1 class="page-title">{{ $t('Account Routing Settings') }}</h1>
          <p class="page-description">
            {{ $t('Configure parent accounts for different accounting modules to ensure proper journal entry routing') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Loading State with Better Animation -->
    <div v-if="isLoading" class="loading-container">
      <div class="loading-spinner">
        <div class="spinner"></div>
        <div class="spinner-ring"></div>
      </div>
      <p class="loading-text">{{ $t('Loading Chart of Accounts...') }}</p>
      <div class="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div v-else class="settings-container">
      <!-- Sales Module -->
      <div class="module-section" v-if="salesSettings.length > 0">
        <div class="module-header">
          <div class="module-icon sales-icon">
            <i class="fas fa-shopping-cart"></i>
          </div>
          <div class="module-title-content">
            <h3 class="module-title">{{ $t('Sales Module') }}</h3>
            <p class="module-description">{{ $t('Configure accounts for sales-related transactions') }}</p>
          </div>
          <div class="module-badge">
            <span class="badge-count">{{ salesSettings.length }}</span>
            <span class="badge-text">Settings</span>
          </div>
        </div>
        
        <div class="settings-grid">
          <div class="setting-item" v-for="setting in salesSettings" :key="setting.setting_key">
            <div class="setting-header">
              <label class="setting-label">
                {{ setting.setting_name }}
                <span class="required" v-if="setting.is_required">*</span>
              </label>
              <div class="setting-status" :class="{ 'configured': setting.parent_account_id }">
                <i :class="setting.parent_account_id ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
                <span>{{ setting.parent_account_id ? 'Configured' : 'Not Configured' }}</span>
              </div>
            </div>
            <p class="setting-description">{{ setting.description }}</p>
            <div class="select-container">
              <VSelect
                v-model="setting.parent_account_id"
                :options="getAccountsForType(setting.account_type)"
                :reduce="option => option.id"
                :placeholder="$t('Select account')"
                :searchable="true"
                :clearable="true"
                @input="updateSetting(setting)"
                class="enhanced-select"
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
      </div>

      <!-- Purchase Module -->
      <div class="module-section" v-if="purchaseSettings.length > 0">
        <div class="module-header">
          <div class="module-icon purchase-icon">
            <i class="fas fa-truck"></i>
          </div>
          <div class="module-title-content">
            <h3 class="module-title">{{ $t('Purchase Module') }}</h3>
            <p class="module-description">{{ $t('Configure accounts for purchase-related transactions') }}</p>
          </div>
          <div class="module-badge">
            <span class="badge-count">{{ purchaseSettings.length }}</span>
            <span class="badge-text">Settings</span>
          </div>
        </div>
        
        <div class="settings-grid">
          <div class="setting-item" v-for="setting in purchaseSettings" :key="setting.setting_key">
            <div class="setting-header">
              <label class="setting-label">
                {{ setting.setting_name }}
                <span class="required" v-if="setting.is_required">*</span>
              </label>
              <div class="setting-status" :class="{ 'configured': setting.parent_account_id }">
                <i :class="setting.parent_account_id ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
                <span>{{ setting.parent_account_id ? 'Configured' : 'Not Configured' }}</span>
              </div>
            </div>
            <p class="setting-description">{{ setting.description }}</p>
            <div class="select-container">
              <VSelect
                v-model="setting.parent_account_id"
                :options="getAccountsForType(setting.account_type)"
                :reduce="option => option.id"
                :placeholder="$t('Select account')"
                :searchable="true"
                :clearable="true"
                @input="updateSetting(setting)"
                class="enhanced-select"
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
      </div>

      <!-- VAT/Tax Module -->
      <div class="module-section vat-module" v-if="vatSettings.length > 0">
        <div class="module-header">
          <div class="module-icon vat-icon">
            <i class="fas fa-percentage"></i>
          </div>
          <div class="module-title-content">
            <h3 class="module-title">{{ $t('VAT/Tax Module') }}</h3>
            <p class="module-description">{{ $t('Configure accounts for VAT and tax transactions') }}</p>
          </div>
          <div class="module-badge">
            <span class="badge-count">{{ vatSettings.length }}</span>
            <span class="badge-text">Settings</span>
          </div>
        </div>
        
        <div class="settings-grid">
          <div class="setting-item" v-for="setting in vatSettings" :key="setting.setting_key">
            <div class="setting-header">
              <label class="setting-label">
                {{ setting.setting_name }}
                <span class="required" v-if="setting.is_required">*</span>
              </label>
              <div class="setting-status" :class="{ 'configured': setting.parent_account_id }">
                <i :class="setting.parent_account_id ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
                <span>{{ setting.parent_account_id ? 'Configured' : 'Not Configured' }}</span>
              </div>
            </div>
            <p class="setting-description">{{ setting.description }}</p>
            <div class="select-container">
              <VSelect
                v-model="setting.parent_account_id"
                :options="getAccountsForType(setting.account_type)"
                :reduce="option => option.id"
                :placeholder="$t('Select account')"
                :searchable="true"
                :clearable="true"
                @input="updateSetting(setting)"
                class="enhanced-select"
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
      </div>

      <!-- Expenses Module -->
      <div class="module-section" v-if="expenseSettings.length > 0">
        <div class="module-header">
          <div class="module-icon expense-icon">
            <i class="fas fa-receipt"></i>
          </div>
          <div class="module-title-content">
            <h3 class="module-title">{{ $t('Expenses Module') }}</h3>
            <p class="module-description">{{ $t('Configure accounts for expense transactions') }}</p>
          </div>
          <div class="module-badge">
            <span class="badge-count">{{ expenseSettings.length }}</span>
            <span class="badge-text">Settings</span>
          </div>
        </div>
        
        <div class="settings-grid">
          <div class="setting-item" v-for="setting in expenseSettings" :key="setting.setting_key">
            <div class="setting-header">
              <label class="setting-label">
                {{ setting.setting_name }}
                <span class="required" v-if="setting.is_required">*</span>
              </label>
              <div class="setting-status" :class="{ 'configured': setting.parent_account_id }">
                <i :class="setting.parent_account_id ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
                <span>{{ setting.parent_account_id ? 'Configured' : 'Not Configured' }}</span>
              </div>
            </div>
            <p class="setting-description">{{ setting.description }}</p>
            <div class="select-container">
              <VSelect
                v-model="setting.parent_account_id"
                :options="getAccountsForType(setting.account_type)"
                :reduce="option => option.id"
                :placeholder="$t('Select account')"
                :searchable="true"
                :clearable="true"
                @input="updateSetting(setting)"
                class="enhanced-select"
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
      </div>

      <!-- Inventory Module -->
      <div class="module-section" v-if="inventorySettings.length > 0">
        <div class="module-header">
          <div class="module-icon inventory-icon">
            <i class="fas fa-boxes"></i>
          </div>
          <div class="module-title-content">
            <h3 class="module-title">{{ $t('Inventory Module') }}</h3>
            <p class="module-description">{{ $t('Configure accounts for inventory transactions') }}</p>
          </div>
          <div class="module-badge">
            <span class="badge-count">{{ inventorySettings.length }}</span>
            <span class="badge-text">Settings</span>
          </div>
        </div>
        
        <div class="settings-grid">
          <div class="setting-item" v-for="setting in inventorySettings" :key="setting.setting_key">
            <div class="setting-header">
              <label class="setting-label">
                {{ setting.setting_name }}
                <span class="required" v-if="setting.is_required">*</span>
              </label>
              <div class="setting-status" :class="{ 'configured': setting.parent_account_id }">
                <i :class="setting.parent_account_id ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
                <span>{{ setting.parent_account_id ? 'Configured' : 'Not Configured' }}</span>
              </div>
            </div>
            <p class="setting-description">{{ setting.description }}</p>
            <div class="select-container">
              <VSelect
                v-model="setting.parent_account_id"
                :options="getAccountsForType(setting.account_type)"
                :reduce="option => option.id"
                :placeholder="$t('Select account')"
                :searchable="true"
                :clearable="true"
                @input="updateSetting(setting)"
                class="enhanced-select"
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
      </div>

      <!-- Treasury Module -->
      <div class="module-section" v-if="treasurySettings.length > 0">
        <div class="module-header">
          <div class="module-icon treasury-icon">
            <i class="fas fa-university"></i>
          </div>
          <div class="module-title-content">
            <h3 class="module-title">{{ $t('Treasury Module') }}</h3>
            <p class="module-description">{{ $t('Configure accounts for treasury transactions') }}</p>
          </div>
          <div class="module-badge">
            <span class="badge-count">{{ treasurySettings.length }}</span>
            <span class="badge-text">Settings</span>
          </div>
        </div>
        
        <div class="settings-grid">
          <div class="setting-item" v-for="setting in treasurySettings" :key="setting.setting_key">
            <div class="setting-header">
              <label class="setting-label">
                {{ setting.setting_name }}
                <span class="required" v-if="setting.is_required">*</span>
              </label>
              <div class="setting-status" :class="{ 'configured': setting.parent_account_id }">
                <i :class="setting.parent_account_id ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
                <span>{{ setting.parent_account_id ? 'Configured' : 'Not Configured' }}</span>
              </div>
            </div>
            <p class="setting-description">{{ setting.description }}</p>
            <div class="select-container">
              <VSelect
                v-model="setting.parent_account_id"
                :options="getAccountsForType(setting.account_type)"
                :reduce="option => option.id"
                :placeholder="$t('Select account')"
                :searchable="true"
                :clearable="true"
                @input="updateSetting(setting)"
                class="enhanced-select"
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
      </div>

      <!-- Enhanced No Settings Message -->
      <div v-if="settings.length === 0" class="no-settings-message">
        <div class="no-settings-content">
          <div class="no-settings-icon">
            <i class="fas fa-cog"></i>
          </div>
          <h4 class="no-settings-title">{{ $t('No Account Routing Settings Found') }}</h4>
          <p class="no-settings-description">{{ $t('The account routing settings have not been initialized yet.') }}</p>
          <div class="no-settings-actions">
            <button @click="loadSettings" class="btn btn-primary btn-lg">
              <i class="fas fa-refresh mr-2"></i>
              {{ $t('Refresh Settings') }}
            </button>
            <button @click="showSeederInstructions" class="btn btn-info btn-lg">
              <i class="fas fa-info-circle mr-2"></i>
              {{ $t('How to Fix') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Save Button -->
    <div class="actions-container" v-if="settings.length > 0">
      <div class="save-section">
        <div class="save-info">
          <i class="fas fa-info-circle"></i>
          <span>Configure all required settings before saving</span>
        </div>
        <button 
          @click="saveAllSettings" 
          :disabled="saving"
          class="btn btn-primary btn-lg save-btn"
        >
          <div class="btn-content">
            <i class="fas fa-save"></i>
            <span>{{ saving ? $t('Saving...') : $t('Save All Settings') }}</span>
          </div>
          <div class="btn-progress" v-if="saving">
            <div class="progress-bar"></div>
          </div>
        </button>
      </div>
    </div>

    <!-- Enhanced Status Messages -->
    <div v-if="message" class="alert enhanced-alert" :class="messageType">
      <div class="alert-content">
        <i :class="getAlertIcon()"></i>
        <span>{{ message }}</span>
      </div>
      <button @click="message = ''" class="alert-close">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <!-- Enhanced Debug Information -->
    <div v-if="debugMode" class="debug-panel">
      <div class="debug-header">
        <h4><i class="fas fa-bug"></i> Debug Information</h4>
        <button @click="debugMode = false" class="debug-close">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="debug-content">
        <div class="debug-item">
          <span class="debug-label">Settings Count:</span>
          <span class="debug-value">{{ settings.length }}</span>
        </div>
        <div class="debug-item">
          <span class="debug-label">Chart of Accounts Count:</span>
          <span class="debug-value">{{ chartOfAccounts.length }}</span>
        </div>
        <div class="debug-item">
          <span class="debug-label">Loading:</span>
          <span class="debug-value">{{ isLoading }}</span>
        </div>
        <div class="debug-item">
          <span class="debug-label">Sales Settings:</span>
          <span class="debug-value">{{ salesSettings.length }}</span>
        </div>
        <div class="debug-item">
          <span class="debug-label">Purchase Settings:</span>
          <span class="debug-value">{{ purchaseSettings.length }}</span>
        </div>
        <div class="debug-item">
          <span class="debug-label">VAT Settings:</span>
          <span class="debug-value">{{ vatSettings.length }}</span>
        </div>
        <div class="debug-item full-width">
          <span class="debug-label">Settings Data:</span>
          <pre class="debug-json">{{ JSON.stringify(settings, null, 2) }}</pre>
        </div>
        <div class="debug-item full-width">
          <span class="debug-label">Chart of Accounts Sample:</span>
          <pre class="debug-json">{{ JSON.stringify(chartOfAccounts.slice(0, 2), null, 2) }}</pre>
        </div>
      </div>
    </div>

    <!-- Enhanced Debug Toggle -->
    <div class="debug-toggle">
      <button @click="debugMode = !debugMode" class="btn btn-sm debug-btn" :class="{ 'active': debugMode }">
        <i class="fas fa-bug"></i>
        <span>{{ debugMode ? 'Hide Debug' : 'Show Debug' }}</span>
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
    },

    getAlertIcon() {
      switch (this.messageType) {
        case 'alert-success':
          return 'fas fa-check-circle';
        case 'alert-danger':
          return 'fas fa-times-circle';
        case 'alert-warning':
          return 'fas fa-exclamation-triangle';
        case 'alert-info':
        default:
          return 'fas fa-info-circle';
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

.header-background {
  background-color: #f8f9fa;
  padding: 4rem 2rem;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  margin-bottom: 3rem;
}

.header-content {
  position: relative;
  z-index: 1;
}

.header-icon {
  font-size: 4rem;
  color: #3498db;
  margin-bottom: 1rem;
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
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.module-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.module-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.module-icon {
  font-size: 2rem;
  color: #3498db; /* Primary color for icons */
  margin-right: 1rem;
}

.sales-icon { color: #3498db; } /* Sales module icon */
.purchase-icon { color: #27ae60; } /* Purchase module icon */
.vat-icon { color: #f39c12; } /* VAT/Tax module icon */
.expense-icon { color: #e74c3c; } /* Expenses module icon */
.inventory-icon { color: #9b59b6; } /* Inventory module icon */
.treasury-icon { color: #34495e; } /* Treasury module icon */

.module-title-content {
  flex-grow: 1;
}

.module-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.module-description {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.module-badge {
  background-color: #e0e0e0;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #333;
}

.badge-count {
  background-color: #3498db;
  color: #fff;
  border-radius: 10px;
  padding: 0.3rem 0.7rem;
  font-size: 0.7rem;
  font-weight: 700;
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

.setting-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.setting-label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.required {
  color: #e74c3c;
  font-size: 0.8rem;
}

.setting-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #7f8c8d;
}

.setting-status .fas {
  font-size: 0.8rem;
}

.setting-status .fas-check-circle { color: #27ae60; } /* Green for configured */
.setting-status .fas-exclamation-circle { color: #f39c12; } /* Orange for not configured */

.setting-description {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.select-container {
  position: relative;
}

.enhanced-select .vs__dropdown-toggle {
  border: 1px solid #ced4da;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: #495057;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.enhanced-select .vs__dropdown-menu {
  border: 1px solid #ced4da;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.enhanced-select .vs__dropdown-option {
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: #495057;
  background-color: #fff;
}

.enhanced-select .vs__dropdown-option--highlight {
  background-color: #e9ecef;
}

.enhanced-select .vs__selected {
  background-color: #e9ecef;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  color: #495057;
}

.enhanced-select .vs__clear {
  color: #dc3545;
}

.enhanced-select .vs__search {
  color: #6c757d;
}

.enhanced-select .vs__dropdown-option--selected {
  background-color: #3498db;
  color: #fff;
}

.enhanced-select .vs__dropdown-option--selected .account-option {
  color: #fff;
}

.enhanced-select .vs__dropdown-option--selected .account-name {
  font-weight: 600;
}

.enhanced-select .vs__dropdown-option--selected .account-code {
  color: #e0e0e0;
}

.enhanced-select .vs__dropdown-option--selected .account-type {
  color: #fff;
  background-color: #3498db;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
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

.save-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  margin-top: 2rem;
}

.save-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6c757d;
  font-size: 0.9rem;
}

.save-info i {
  font-size: 0.9rem;
}

.save-btn {
  position: relative;
  overflow: hidden;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #3498db;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.save-btn:hover:not(:disabled) {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.save-btn:disabled {
  background-color: #a0a0a0;
  cursor: not-allowed;
  opacity: 0.7;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-content i {
  font-size: 1rem;
}

.btn-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #3498db;
  border-radius: 8px;
  z-index: 1;
  transition: width 0.3s ease-in-out;
}

.progress-bar {
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.alert {
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.enhanced-alert {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.alert-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-grow: 1;
}

.alert-content i {
  font-size: 1.1rem;
}

.alert-close {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #6c757d;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.2s ease;
}

.alert-close:hover {
  color: #333;
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
  position: relative;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.loading-spinner {
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 auto 1rem;
}

.spinner {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  opacity: 0.3;
}

.loading-text {
  margin-top: 1rem;
  color: #7f8c8d;
  font-size: 1.1rem;
}

.loading-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.loading-dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #3498db;
  border-radius: 50%;
  animation: dot-pulse 1.5s infinite ease-in-out;
}

.loading-dots span:nth-child(1) { animation-delay: -0.32s; }
.loading-dots span:nth-child(2) { animation-delay: -0.16s; }
.loading-dots span:nth-child(3) { animation-delay: 0s; }

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes dot-pulse {
  0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
  40% { transform: translateY(-5px); opacity: 1; }
}

.no-settings-message {
  text-align: center;
  padding: 3rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;
}

.no-settings-content {
  position: relative;
  z-index: 1;
}

.no-settings-icon {
  font-size: 4rem;
  color: #e0e0e0;
  margin-bottom: 16px;
}

.no-settings-title {
  color: #7f8c8d;
  margin-bottom: 10px;
}

.no-settings-description {
  color: #95a5a6;
  margin-bottom: 20px;
}

.no-settings-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.debug-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.debug-btn {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #495057;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.debug-btn:hover {
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.debug-btn.active {
  background-color: #3498db;
  color: #fff;
  border-color: #3498db;
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
  position: relative;
}

.debug-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.debug-header h4 {
  color: #495057;
  margin-bottom: 0;
}

.debug-header .debug-close {
  background: none;
  border: none;
  font-size: 1rem;
  color: #6c757d;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.2s ease;
}

.debug-header .debug-close:hover {
  color: #333;
}

.debug-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.debug-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
}

.debug-label {
  font-weight: 600;
  color: #333;
}

.debug-value {
  font-weight: 500;
  color: #2c3e50;
  font-family: monospace;
}

.debug-json {
  background-color: #f0f0f0;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 0.8rem;
  font-family: monospace;
  white-space: pre-wrap;
  word-break: break-all;
  max-height: 200px;
  overflow-y: auto;
}

.debug-json::-webkit-scrollbar {
  width: 8px;
}

.debug-json::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 4px;
}

.debug-json::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.debug-json::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.debug-item.full-width {
  grid-column: 1 / -1; /* Span across all columns */
}

.vat-module {
  border: 2px solid #f39c12;
  background: linear-gradient(135deg, #fff 0%, #fff9f0 100%);
  position: relative;
}

.vat-module::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #f39c12, #e67e22, #f39c12);
  border-radius: 12px 12px 0 0;
}

.vat-module .module-header {
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  margin: -2rem -2rem 2rem -2rem;
  padding: 1.5rem 2rem;
  border-radius: 10px 10px 0 0;
  color: white;
}

.vat-module .module-title {
  color: white;
  margin-bottom: 0.5rem;
}

.vat-module .module-description {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0;
}

.vat-module .module-icon {
  color: white;
}

.vat-module .module-badge {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.vat-module .badge-count {
  background-color: white;
  color: #f39c12;
}

/* Additional Visual Enhancements */
.module-section {
  position: relative;
  overflow: hidden;
}

.module-section::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 20px 0;
  border-color: transparent #e9ecef transparent transparent;
  opacity: 0.5;
}

.setting-item {
  background: #fafbfc;
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid #e9ecef;
  transition: all 0.2s ease-in-out;
}

.setting-item:hover {
  background: #fff;
  border-color: #3498db;
  box-shadow: 0 2px 8px rgba(52, 152, 219, 0.1);
}

.setting-item:focus-within {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.account-option {
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.account-option:hover {
  background-color: #f8f9fa;
}

.account-name {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.account-code {
  font-size: 0.8rem;
  color: #7f8c8d;
  font-family: 'Courier New', monospace;
  background-color: #f8f9fa;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  display: inline-block;
}

.account-type {
  font-size: 0.75rem;
  color: #3498db;
  text-transform: uppercase;
  font-weight: 600;
  background-color: #e3f2fd;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  display: inline-block;
  letter-spacing: 0.5px;
}

/* Enhanced Button Styles */
.btn {
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.btn:active {
  transform: translateY(0);
}

/* Loading Animation Improvements */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.module-section {
  animation: fadeInUp 0.6s ease-out;
}

.module-section:nth-child(1) { animation-delay: 0.1s; }
.module-section:nth-child(2) { animation-delay: 0.2s; }
.module-section:nth-child(3) { animation-delay: 0.3s; }
.module-section:nth-child(4) { animation-delay: 0.4s; }
.module-section:nth-child(5) { animation-delay: 0.5s; }
.module-section:nth-child(6) { animation-delay: 0.6s; }

/* Status Indicator Improvements */
.setting-status {
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
}

.setting-status.configured {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.setting-status:not(.configured) {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.setting-status i {
  margin-right: 0.3rem;
}

/* Enhanced Select Container */
.select-container {
  position: relative;
}

.select-container::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #6c757d;
  pointer-events: none;
}

/* Progress Bar Animation */
@keyframes progress {
  0% { width: 0%; }
  100% { width: 100%; }
}

.btn-progress .progress-bar {
  animation: progress 2s ease-in-out infinite;
}

/* Enhanced Alert Animations */
.enhanced-alert {
  animation: slideInRight 0.3s ease-out;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Debug Panel Enhancements */
.debug-panel {
  animation: slideInUp 0.3s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Improvements */
@media (max-width: 768px) {
  .account-routing-settings {
    padding: 1rem;
  }
  
  .header-background {
    padding: 2rem 1rem;
  }
  
  .header-icon {
    font-size: 3rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .settings-grid {
    grid-template-columns: 1fr;
  }
  
  .module-section {
    padding: 1.5rem;
    margin: 0 -0.5rem;
  }
  
  .module-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .module-icon {
    font-size: 1.5rem;
  }
  
  .module-title {
    font-size: 1.3rem;
  }
  
  .module-description {
    font-size: 0.9rem;
  }
  
  .module-badge {
    margin-left: auto;
  }
  
  .setting-item {
    padding: 1rem;
  }
  
  .setting-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .setting-label {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  
  .setting-status {
    margin-left: auto;
  }
  
  .select-container {
    width: 100%;
  }
  
  .enhanced-select .vs__dropdown-toggle {
    width: 100%;
  }
  
  .enhanced-select .vs__dropdown-menu {
    width: 100%;
  }
  
  .enhanced-select .vs__dropdown-option {
    width: 100%;
  }
  
  .save-section {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .no-settings-actions {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .debug-toggle {
    bottom: 10px;
    right: 10px;
  }
  
  .debug-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
  
  .debug-panel {
    position: static;
    margin-top: 1rem;
    max-height: none;
    overflow-y: visible;
  }
  
  .debug-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .debug-header h4 {
    margin-bottom: 0;
  }
  
  .debug-header .debug-close {
    margin-left: auto;
  }
  
  .debug-content {
    gap: 0.5rem;
  }
  
  .debug-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  
  .debug-label {
    width: 100%;
    text-align: left;
  }
  
  .debug-value {
    width: 100%;
    text-align: left;
  }
  
  .debug-json {
    max-height: none;
    overflow-y: visible;
  }
  
  .debug-item.full-width {
    grid-column: 1 / -1;
  }
}
</style>
