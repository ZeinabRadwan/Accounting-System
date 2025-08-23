<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    
    <div class="row">
      <div class="col-12 col-xl-3">
        <SettingsSidebar />
      </div>
      <div class="col-12 col-xl-9">
        <div class="card">
          <div class="card-header setings-header">
            <div class="col-xl-4 col-4">
              <h3 class="card-title">
                {{ $t("Account Routing Settings") }}
              </h3>
            </div>
            <div class="col-xl-8 col-8 float-right text-right">
              <button @click="saveSettings" :disabled="form.busy" class="btn btn-primary">
                <i class="fas fa-save" /> {{ $t("Save Changes") }}
              </button>
              <button @click="resetSettings" class="btn btn-secondary ml-2">
                <i class="fas fa-undo" /> {{ $t("Reset") }}
              </button>
            </div>
          </div>
          
          <div class="card-body">
            <!-- Configuration Status -->
            <div class="alert alert-info">
              <i class="fas fa-info-circle"></i>
              <strong>{{ $t("Configuration Status") }}:</strong>
              {{ configurationStatus.configured }}/{{ configurationStatus.total_required }} {{ $t("required settings configured") }}
              <span v-if="configurationStatus.unconfigured > 0" class="text-warning">
                ({{ configurationStatus.unconfigured }} {{ $t("unconfigured") }})
              </span>
            </div>

            <!-- Sales Module -->
            <div class="module-section mb-4">
              <h4 class="text-primary">
                <i class="fas fa-shopping-cart"></i> {{ $t("Sales Module") }}
              </h4>
              <div class="row">
                <div class="col-md-6" v-for="setting in getSettingsByModule('sales')" :key="setting.id">
                  <div class="form-group">
                    <label :for="setting.setting_key">
                      {{ setting.setting_name }}
                      <span v-if="setting.is_required" class="required">*</span>
                    </label>
                    <v-select
                      :id="setting.setting_key"
                      v-model="setting.parent_account_id"
                      :options="availableParentAccounts"
                      label="name"
                      :class="{ 'is-invalid': !setting.isConfigured() && setting.is_required }"
                      :placeholder="$t('Select Parent Account')"
                      :reduce="option => option.id"
                      clearable
                    >
                      <template #option="{ name, code, type }">
                        <div>
                          <strong>{{ name }}</strong>
                          <br>
                          <small class="text-muted">{{ code }} - {{ type }}</small>
                        </div>
                      </template>
                    </v-select>
                    <small class="form-text text-muted">{{ setting.description }}</small>
                    <div v-if="!setting.isConfigured() && setting.is_required" class="invalid-feedback d-block">
                      {{ $t("This setting is required") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Purchase Module -->
            <div class="module-section mb-4">
              <h4 class="text-success">
                <i class="fas fa-truck"></i> {{ $t("Purchase Module") }}
              </h4>
              <div class="row">
                <div class="col-md-6" v-for="setting in getSettingsByModule('purchase')" :key="setting.id">
                  <div class="form-group">
                    <label :for="setting.setting_key">
                      {{ setting.setting_name }}
                      <span v-if="setting.is_required" class="required">*</span>
                    </label>
                    <v-select
                      :id="setting.setting_key"
                      v-model="setting.parent_account_id"
                      :options="availableParentAccounts"
                      label="name"
                      :class="{ 'is-invalid': !setting.isConfigured() && setting.is_required }"
                      :placeholder="$t('Select Parent Account')"
                      :reduce="option => option.id"
                      clearable
                    >
                      <template #option="{ name, code, type }">
                        <div>
                          <strong>{{ name }}</strong>
                          <br>
                          <small class="text-muted">{{ code }} - {{ type }}</small>
                        </div>
                      </template>
                    </v-select>
                    <small class="form-text text-muted">{{ setting.description }}</small>
                    <div v-if="!setting.isConfigured() && setting.is_required" class="invalid-feedback d-block">
                      {{ $t("This setting is required") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- VAT/Tax Module -->
            <div class="module-section mb-4">
              <h4 class="text-warning">
                <i class="fas fa-percentage"></i> {{ $t("VAT/Tax Module") }}
              </h4>
              <div class="row">
                <div class="col-md-6" v-for="setting in getSettingsByModule('vat')" :key="setting.id">
                  <div class="form-group">
                    <label :for="setting.setting_key">
                      {{ setting.setting_name }}
                      <span v-if="setting.is_required" class="required">*</span>
                    </label>
                    <v-select
                      :id="setting.setting_key"
                      v-model="setting.parent_account_id"
                      :options="availableParentAccounts"
                      label="name"
                      :class="{ 'is-invalid': !setting.isConfigured() && setting.is_required }"
                      :placeholder="$t('Select Parent Account')"
                      :reduce="option => option.id"
                      clearable
                    >
                      <template #option="{ name, code, type }">
                        <div>
                          <strong>{{ name }}</strong>
                          <br>
                          <small class="text-muted">{{ code }} - {{ type }}</small>
                        </div>
                      </template>
                    </v-select>
                    <small class="form-text text-muted">{{ setting.description }}</small>
                    <div v-if="!setting.isConfigured() && setting.is_required" class="invalid-feedback d-block">
                      {{ $t("This setting is required") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Expenses Module -->
            <div class="module-section mb-4">
              <h4 class="text-danger">
                <i class="fas fa-receipt"></i> {{ $t("Expenses Module") }}
              </h4>
              <div class="row">
                <div class="col-md-6" v-for="setting in getSettingsByModule('expenses')" :key="setting.id">
                  <div class="form-group">
                    <label :for="setting.setting_key">
                      {{ setting.setting_name }}
                      <span v-if="setting.is_required" class="required">*</span>
                    </label>
                    <v-select
                      :id="setting.setting_key"
                      v-model="setting.parent_account_id"
                      :options="availableParentAccounts"
                      label="name"
                      :class="{ 'is-invalid': !setting.isConfigured() && setting.is_required }"
                      :placeholder="$t('Select Parent Account')"
                      :placeholder="$t('Select Parent Account')"
                      :reduce="option => option.id"
                      clearable
                    >
                      <template #option="{ name, code, type }">
                        <div>
                          <strong>{{ name }}</strong>
                          <br>
                          <small class="text-muted">{{ code }} - {{ type }}</small>
                        </div>
                      </template>
                    </v-select>
                    <small class="form-text text-muted">{{ setting.description }}</small>
                    <div v-if="!setting.isConfigured() && setting.is_required" class="invalid-feedback d-block">
                      {{ $t("This setting is required") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Inventory Module -->
            <div class="module-section mb-4">
              <h4 class="text-info">
                <i class="fas fa-boxes"></i> {{ $t("Inventory Module") }}
              </h4>
              <div class="row">
                <div class="col-md-6" v-for="setting in getSettingsByModule('inventory')" :key="setting.id">
                  <div class="form-group">
                    <label :for="setting.setting_key">
                      {{ setting.setting_name }}
                      <span v-if="setting.is_required" class="required">*</span>
                    </label>
                    <v-select
                      :id="setting.setting_key"
                      v-model="setting.parent_account_id"
                      :options="availableParentAccounts"
                      label="name"
                      :class="{ 'is-invalid': !setting.isConfigured() && setting.is_required }"
                      :placeholder="$t('Select Parent Account')"
                      :reduce="option => option.id"
                      clearable
                    >
                      <template #option="{ name, code, type }">
                        <div>
                          <strong>{{ name }}</strong>
                          <br>
                          <small class="text-muted">{{ code }} - {{ type }}</small>
                        </div>
                      </template>
                    </v-select>
                    <small class="form-text text-muted">{{ setting.description }}</small>
                    <div v-if="!setting.isConfigured() && setting.is_required" class="invalid-feedback d-block">
                      {{ $t("This setting is required") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Treasury Module -->
            <div class="module-section mb-4">
              <h4 class="text-secondary">
                <i class="fas fa-university"></i> {{ $t("Treasury Module") }}
              </h4>
              <div class="row">
                <div class="col-md-6" v-for="setting in getSettingsByModule('treasury')" :key="setting.id">
                  <div class="form-group">
                    <label :for="setting.setting_key">
                      {{ setting.setting_name }}
                      <span v-if="setting.is_required" class="required">*</span>
                    </label>
                    <v-select
                      :id="setting.setting_key"
                      v-model="setting.parent_account_id"
                      :options="availableParentAccounts"
                      label="name"
                      :class="{ 'is-invalid': !setting.isConfigured() && setting.is_required }"
                      :placeholder="$t('Select Parent Account')"
                      :reduce="option => option.id"
                      clearable
                    >
                      <template #option="{ name, code, type }">
                        <div>
                          <strong>{{ name }}</strong>
                          <br>
                          <small class="text-muted">{{ code }} - {{ type }}</small>
                        </div>
                      </template>
                    </v-select>
                    <small class="form-text text-muted">{{ setting.description }}</small>
                    <div v-if="!setting.isConfigured() && setting.is_required" class="invalid-feedback d-block">
                      {{ $t("This setting is required") }}
                    </div>
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
import axios from "axios";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Account Routing Settings") };
  },

  data: () => ({
    breadcrumbsCurrent: "Account Routing Settings",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Setup",
        url: "setup.index",
      },
      {
        name: "Accounting Settings",
        url: "",
      },
    ],
    settings: [],
    availableParentAccounts: [],
    configurationStatus: {
      total_required: 0,
      configured: 0,
      unconfigured: 0,
      unconfigured_settings: []
    },
    loading: true,
  }),

  async created() {
    await this.loadSettings();
    await this.loadParentAccounts();
    await this.checkConfiguration();
  },

  methods: {
    // Load account routing settings
    async loadSettings() {
      try {
        const { data } = await axios.get('/api/account-routing-settings');
        this.settings = Object.values(data.data).flat();
        console.log('Settings loaded:', this.settings);
      } catch (error) {
        console.error('Error loading settings:', error);
        this.$toast.error(this.$t('Failed to load settings'));
      }
    },

    // Load available parent accounts
    async loadParentAccounts() {
      try {
        const { data } = await axios.get('/api/account-routing-settings/available-parent-accounts');
        this.availableParentAccounts = data.data || [];
        console.log('Parent accounts loaded:', this.availableParentAccounts);
      } catch (error) {
        console.error('Error loading parent accounts:', error);
        this.$toast.error(this.$t('Failed to load parent accounts'));
      }
    },

    // Check configuration status
    async checkConfiguration() {
      try {
        const { data } = await axios.get('/api/account-routing-settings/check-configuration');
        this.configurationStatus = data.data;
        console.log('Configuration status:', this.configurationStatus);
      } catch (error) {
        console.error('Error checking configuration:', error);
      }
    },

    // Get settings by module
    getSettingsByModule(module) {
      return this.settings.filter(setting => setting.module === module);
    },

    // Save settings
    async saveSettings() {
      try {
        const settingsToUpdate = this.settings.map(setting => ({
          id: setting.id,
          parent_account_id: setting.parent_account_id
        }));

        await axios.put('/api/account-routing-settings', {
          settings: settingsToUpdate
        });

        this.$toast.success(this.$t('Settings saved successfully'));
        await this.checkConfiguration();
      } catch (error) {
        console.error('Error saving settings:', error);
        this.$toast.error(this.$t('Failed to save settings'));
      }
    },

    // Reset settings to original values
    async resetSettings() {
      if (confirm(this.$t('Are you sure you want to reset all settings?'))) {
        await this.loadSettings();
        this.$toast.info(this.$t('Settings reset to original values'));
      }
    }
  },
};
</script>

<style scoped>
.module-section {
  border: 1px solid #e3e6f0;
  border-radius: 0.35rem;
  padding: 1.5rem;
  background-color: #f8f9fc;
}

.module-section h4 {
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid currentColor;
}

.required {
  color: #e74a3b;
}

.invalid-feedback {
  display: block;
}
</style>
