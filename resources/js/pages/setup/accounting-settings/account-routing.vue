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
      <div class="module-section">
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
      <div class="module-section">
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
      <div class="module-section">
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
      <div class="module-section">
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
      <div class="module-section">
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
      <div class="module-section">
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

    <!-- Debug Information (remove in production) -->
    <div v-if="false" class="debug-panel">
      <h4>Debug Info:</h4>
      <p>Settings Count: {{ settings.length }}</p>
      <p>Chart of Accounts Count: {{ getChartOfAccounts ? getChartOfAccounts.length : 0 }}</p>
      <p>Loading: {{ isLoading }}</p>
      <p>Sales Settings: {{ salesSettings.length }}</p>
      <p>Purchase Settings: {{ purchaseSettings.length }}</p>
      <p>VAT Settings: {{ vatSettings.length }}</p>
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
      chartOfAccounts: []
    }
  },
  computed: {
    ...mapGetters('chartOfAccounts', ['getChartOfAccounts', 'isLoading']),
    
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
    ...mapActions('chartOfAccounts', ['fetchChartOfAccounts']),
    
    async loadSettings() {
      try {
        const response = await this.$http.get('/api/account-routing-settings')
        this.settings = response.data.data || []
      } catch (error) {
        console.error('Error loading settings:', error)
        this.showMessage('Error loading settings', 'alert-danger')
      }
    },
    
    async loadChartOfAccounts() {
      try {
        await this.fetchChartOfAccounts()
        this.chartOfAccounts = this.getChartOfAccounts
      } catch (error) {
        console.error('Error loading chart of accounts:', error)
      }
    },
    
    getAccountsForType(accountType) {
      const accounts = this.getChartOfAccounts
      if (!accounts || accounts.length === 0) {
        return []
      }
      // Filter by account type name (account.type.name) or by account type if it's a string
      return accounts.filter(account => {
        if (account.type && typeof account.type === 'object' && account.type.name) {
          return account.type.name === accountType
        }
        return account.type === accountType
      })
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
        this.showMessage('Error updating setting', 'alert-danger')
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
        this.showMessage('Error saving settings', 'alert-danger')
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
