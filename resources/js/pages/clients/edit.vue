<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    
    <!-- Improved Chart of Account Warning Alert -->
    <div class="chart-account-warning" v-if="!form.chartOfAccountId">
      <div class="warning-content">
        <div class="warning-icon">
          <i class="fas fa-info-circle"></i>
        </div>
        <div class="warning-text">
          <h6 class="warning-title">{{ $t('Chart of Account Required') }}</h6>
          <p class="warning-description">{{ $t('Client must have a Chart of Account assigned for journal entries.') }}</p>
        </div>
        <div class="warning-action">
          <button 
            type="button" 
            class="btn btn-primary btn-sm"
            @click="autoAssignChartOfAccount"
            :disabled="isAutoAssigning"
          >
            <i :class="isAutoAssigning ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
            {{ isAutoAssigning ? $t('Assigning...') : $t('Auto-Assign') }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Success message when chart of account is assigned -->
    <div class="chart-account-success" v-if="form.chartOfAccountId">
      <div class="success-content">
        <div class="success-icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="success-text">
          <h6 class="success-title">{{ $t('Chart of Account Assigned') }}</h6>
          <p class="success-description">{{ $t('Client is ready for journal entries.') }}</p>
        </div>
      </div>
    </div>
    
    <!-- Rest of the form remains the same -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t('Edit Client') }}</h3>
            <router-link :to="{ name: 'clients.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
            </router-link>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="saveClient" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">{{ $t('Name') }}
                    <span class="required">*</span></label>
                  <input id="name" v-model="form.name" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }" name="name"
                    :placeholder="$t('Enter a name')" />
                  <has-error :form="form" field="name" />
                </div>
                <div class="form-group col-md-6">
                  <label for="email">{{ $t('Email') }}</label>
                  <input id="email" v-model="form.email" type="email" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('email') }" name="email"
                    :placeholder="$t('Enter your email address')" />
                  <has-error :form="form" field="email" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="phoneNumber">{{ $t('Contact Number') }}
                    <span class="required">*</span></label>
                  <input id="phoneNumber" v-model="form.phoneNumber" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('phoneNumber') }" name="phoneNumber"
                    :placeholder="$t('Enter a contact number')" />
                  <has-error :form="form" field="phoneNumber" />
                </div>
                <div class="form-group col-md-4">
                  <label for="companyName">{{
                    $t('Company Name')
                  }}</label>
                  <input id="companyName" v-model="form.companyName" type="companyName" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('companyName') }" name="companyName"
                    :placeholder="$t('Enter a company name')" />
                  <has-error :form="form" field="companyName" />
                </div>
                <div class="form-group col-md-4">
                  <label for="taxRegistrationNumber">{{
                    $t("Tax Registration Number")
                  }}</label>
                  <input id="taxRegistrationNumber" v-model="form.taxRegistrationNumber" type="taxRegistrationNumber" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('taxRegistrationNumber') }" name="taxRegistrationNumber"
                    :placeholder="$t('Enter a tax registration number')" />
                  <has-error :form="form" field="taxRegistrationNumber" />
                </div>
              </div>
              <div class="form-group">
                <label for="address">{{ $t('Address') }}</label>
                <textarea id="address" v-model="form.address" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('address') }" :placeholder="$t('Enter an address')" />
                <has-error :form="form" field="address" />
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="image">{{ $t('Image') }}</label>
                  <div class="custom-file">
                    <input id="image" type="file" class="custom-file-input" name="image"
                      :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange" />
                    <label class="custom-file-label" for="image">{{
                      $t('Choose file')
                    }}</label>
                  </div>
                  <has-error :form="form" field="image" />
                  <div class="bg-light mt-4 w-25">
                    <img v-if="url" :src="url" class="img-fluid" :alt="$t('Attached Image')" />
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="type">{{ $t('Type') }}</label>
                  <select id="type" v-model="form.type" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('type') }">
                    <option value="Company">{{ $t('Company') }}</option>
                    <option value="Individual">{{ $t('Individual') }}</option>
                  </select>
                  <has-error :form="form" field="type" />
                </div>
                <div class="form-group col-md-6">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
                <div class="form-group col-md-6 chart-of-account-field">
                  <label for="chartOfAccountId">{{ $t('Chart of Account') }}
                    <span class="required">*</span></label>
                  <div class="d-flex align-items-center">
                    <v-select
                      v-model="form.chartOfAccountId"
                      :options="chartOfAccounts"
                      label="name"
                      :reduce="option => option.id"
                      :class="{ 'is-invalid': form.errors.has('chartOfAccountId') }"
                      name="chartOfAccountId"
                      :placeholder="$t('Select a Chart of Account')"
                      class="flex-grow-1 mr-2"
                    >
                      <template #option="{ name, code, type }">
                        <div>
                          <strong>{{ name }}</strong>
                          <br>
                          <small class="text-muted">{{ code }} - {{ type }}</small>
                        </div>
                      </template>
                    </v-select>
                    <button 
                      type="button"
                      @click="autoAssignChartOfAccount"
                      class="btn btn-outline-success auto-assign-btn"
                      :disabled="isAutoAssigning"
                      title="Auto-assign Chart of Account"
                    >
                      <i :class="isAutoAssigning ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                      {{ isAutoAssigning ? $t('Assigning...') : $t('Auto-Assign') }}
                    </button>
                  </div>
                  <small class="form-text text-muted">{{ $t("Chart of Account is required for journal entries. Use Auto-Assign to automatically assign a suitable account.") }}</small>
                  <has-error :form="form" field="chartOfAccountId" />
                </div>
                <div class="form-group col-12 d-flex flex-wrap">
                  <div class="pr-5">
                    <toggle-button v-model="form.isSendEmail" :disabled="isDemoMode" />
                    {{ $t("Send Welcome Email") }}
                  </div>
                </div>
                <div class="form-group col-12 d-flex flex-wrap">
                  <div class="pr-5">
                    <toggle-button v-model="form.isSendSMS" :disabled="isDemoMode" />
                    {{ $t("Send Welcome SMS") }}
                  </div>
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <v-button :loading="form.busy" class="btn btn-primary">
                <i class="fas fa-save" /> {{ $t("Save") }}
              </v-button>
              <button type="reset" class="btn btn-secondary float-right" @click="form.reset()">
                <i class="fas fa-power-off" /> {{ $t("Reset") }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
import { VueTelInput } from "vue-tel-input";
import { ToggleButton } from "vue-js-toggle-button";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Edit Client") };
  },
  components: {
    VueTelInput,
    ToggleButton,
  },
  data: () => ({
    isDemoMode: window.config.isDemoMode,
    breadcrumbsCurrent: "Edit Client",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Clients",
        url: "clients.index",
      },
      {
        name: "Edit",
        url: "",
      },
    ],
    form: new Form({
      name: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      taxRegistrationNumber: "",
      address: "",
      image: "",
      type: "Company",
      status: 1,
      isSendEmail: false,
      isSendSMS: false,
      chartOfAccountId: "",
    }),
    loading: true,
    url: null,
    chartOfAccounts: [],
    isAutoAssigning: false,
    clientData: {},
  }),
  async created() {
    try {
      await this.getClient();
      await this.loadChartOfAccounts();
    } catch (error) {
      console.error("Error in created lifecycle:", error);
    }
  },
  methods: {
    // Get client data
    async getClient() {
      try {
        // Check if we have a valid slug
        if (!this.$route.params.slug) {
          throw new Error("No client slug provided");
        }

        console.log("Fetching client with slug:", this.$route.params.slug);
        
        const response = await this.$http.get(
          `/api/clients/${this.$route.params.slug}`
        );
        
        if (!response.data) {
          throw new Error("No data received from API");
        }
        
        console.log("Raw API response data:", response.data);
        console.log("Form fields before fill:", this.form.data());
        
        // The API response is wrapped in a 'data' object
        const clientData = response.data.data || response.data;
        
        this.clientData = clientData;
        
        // Map the API response fields to form fields manually
        const formData = {
          name: clientData.name || '',
          email: clientData.email || '',
          phoneNumber: clientData.phoneNumber || '',
          companyName: clientData.companyName || '',
          taxRegistrationNumber: clientData.taxRegistrationNumber || '',
          address: clientData.address || '',
          image: clientData.image || '',
          type: clientData.type || 'Company',
          status: clientData.status || 1,
          isSendEmail: clientData.isSendEmail || false,
          isSendSMS: clientData.isSendSMS || false,
          chartOfAccountId: clientData.chart_of_account_id || '',
        };
        
        console.log("Mapped form data:", formData);
        
        // Fill the form with mapped data
        this.form.fill(formData);
        
        this.url = clientData.image;
        this.loading = false;
        
        console.log("Client data loaded successfully:", clientData);
        console.log("Form data after fill:", this.form.data());
        
      } catch (error) {
        console.error("Error fetching client:", error);
        
        // Show error message if toast is available
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "error",
            title: this.$t("Failed to load client data"),
            text: error.message || "Please check the client slug and try again."
          });
        } else {
          // Fallback to console and alert if toast is not available
          console.error("Toast not available, showing alert");
          alert(this.$t("Failed to load client data: ") + (error.message || "Unknown error"));
        }
        
        // Don't redirect immediately, let user see the error
        this.loading = false;
        
        // Only redirect if it's a critical error (like invalid slug)
        if (error.response && error.response.status === 404) {
          setTimeout(() => {
            this.$router.push({ name: "clients.index" });
          }, 3000);
        }
      }
    },

    // Load chart of accounts from routing setup
    async loadChartOfAccounts() {
      try {
        // First try to get accounts from routing setup
        const routingResponse = await this.$http.get('/api/clients/routing-accounts');
        
        if (routingResponse.data.success && routingResponse.data.accounts.length > 0) {
          this.chartOfAccounts = routingResponse.data.accounts;
          console.log('Loaded accounts from routing setup:', this.chartOfAccounts.length);
        } else {
          // Fallback to the old method if routing is not configured
          const response = await this.$http.get('/api/clients/chart-of-accounts');
          this.chartOfAccounts = response.data || [];
          console.log('Loaded accounts from fallback method:', this.chartOfAccounts.length);
        }
      } catch (error) {
        console.error('Error loading chart of accounts:', error);
        // Try fallback method
        try {
          const response = await this.$http.get('/api/clients/chart-of-accounts');
          this.chartOfAccounts = response.data || [];
        } catch (fallbackError) {
          console.error('Fallback method also failed:', fallbackError);
          this.chartOfAccounts = [];
        }
      }
    },

    // vue file upload
    onFileChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (
        file.size < 2111775 &&
        (file.type === "image/jpeg" ||
          file.type === "image/png" ||
          file.type === "image/gif")
      ) {
        reader.onloadend = () => {
          this.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "error",
            title: this.$t("Error!"),
            text: this.$t("Please select a valid thumbnail with size less than 2 MB")
          });
        } else {
          alert(this.$t("Please select a valid thumbnail with size less than 2 MB"));
        }
      }
    },

    // save client
    async saveClient() {
      // Validate that Chart of Account is selected
      if (!this.form.chartOfAccountId) {
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "error",
            title: this.$t("Chart of Account is required"),
          });
        } else {
          alert(this.$t("Chart of Account is required"));
        }
        return;
      }
      
      try {
        await this.form.put(`/api/clients/${this.$route.params.slug}`);
        
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "success",
            title: this.$t("Client updated successfully"),
          });
        } else {
          alert(this.$t("Client updated successfully"));
        }
        
        this.$router.push({ name: "clients.index" });
      } catch (error) {
        console.error("Error saving client:", error);
        
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({ 
            type: "error", 
            title: this.$t("Opps...something went wrong") 
          });
        } else {
          alert(this.$t("Opps...something went wrong"));
        }
      }
    },

    async autoAssignChartOfAccount() {
      if (this.isAutoAssigning) {
        return;
      }
      this.isAutoAssigning = true;
      
      try {
        // Try to get accounts from routing setup first
        const routingResponse = await this.$http.get('/api/clients/routing-accounts');
        
        if (routingResponse.data.success && routingResponse.data.accounts.length > 0) {
          // Use the first account from routing setup (usually the parent account)
          const defaultAccount = routingResponse.data.accounts[0];
          this.form.chartOfAccountId = defaultAccount.id;
          
          if (window.toast && typeof window.toast.fire === 'function') {
            window.toast.fire({
              type: "success",
              title: this.$t("Chart of Account auto-assigned from routing setup"),
            });
          } else {
            alert(this.$t("Chart of Account auto-assigned from routing setup"));
          }
        } else {
          // Fallback to the old logic
          let defaultAccount = null;
          
          if (this.form.type === 'Company') {
            defaultAccount = this.chartOfAccounts.find(account => 
              account.name.toLowerCase().includes('accounts receivable') && 
              account.name.toLowerCase().includes('company')
            );
          } else if (this.form.type === 'Individual') {
            defaultAccount = this.chartOfAccounts.find(account => 
              account.name.toLowerCase().includes('accounts receivable') && 
              account.name.toLowerCase().includes('individual')
            );
          }
          
          if (!defaultAccount) {
            defaultAccount = this.chartOfAccounts.find(account => 
              account.name.toLowerCase().includes('accounts receivable')
            );
          }
          
          if (!defaultAccount && this.chartOfAccounts.length > 0) {
            defaultAccount = this.chartOfAccounts[0];
          }
          
          if (defaultAccount) {
            this.form.chartOfAccountId = defaultAccount.id;
            
            if (window.toast && typeof window.toast.fire === 'function') {
              window.toast.fire({
                type: "success",
                title: this.$t("Chart of Account auto-assigned successfully"),
              });
            } else {
              alert(this.$t("Chart of Account auto-assigned successfully"));
            }
          } else {
            if (window.toast && typeof window.toast.fire === 'function') {
              window.toast.fire({
                type: "error",
                title: this.$t("No suitable Chart of Account found for automatic assignment"),
              });
            } else {
              alert(this.$t("No suitable Chart of Account found for automatic assignment"));
            }
          }
        }
      } catch (error) {
        console.error('Error auto-assigning chart of account:', error);
        
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "error",
            title: this.$t("Failed to auto-assign Chart of Account"),
          });
        } else {
          alert(this.$t("Failed to auto-assign Chart of Account"));
        }
      } finally {
        this.isAutoAssigning = false;
      }
    },
  },
  computed: {
    // Add computed property to check if chart of account is assigned
    hasChartOfAccount() {
      return !!this.form.chartOfAccountId;
    }
  },
};
</script>

<style scoped>
.chart-of-account-field {
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 15px;
  background-color: #f8f9fa;
  margin-bottom: 20px;
}

.chart-of-account-field label {
  font-weight: 600;
  color: #495057;
  margin-bottom: 10px;
}

.chart-of-account-field .required {
  color: #dc3545;
  font-weight: bold;
}

.auto-assign-btn {
  min-width: 120px;
}

.auto-assign-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-text {
  font-size: 0.875rem;
  color: #6c757d;
  margin-top: 5px;
}

/* Improved warning and success styles */
.chart-account-warning,
.chart-account-success {
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.chart-account-warning {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border: 1px solid #ffc107;
}

.chart-account-success {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  border: 1px solid #28a745;
}

.warning-content,
.success-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.warning-icon,
.success-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.warning-icon {
  color: #856404;
}

.success-icon {
  color: #155724;
}

.warning-text,
.success-text {
  flex-grow: 1;
}

.warning-title,
.success-title {
  margin: 0 0 4px 0;
  font-weight: 600;
  font-size: 14px;
}

.warning-title {
  color: #856404;
}

.success-title {
  color: #155724;
}

.warning-description,
.success-description {
  margin: 0;
  font-size: 13px;
  opacity: 0.8;
}

.warning-description {
  color: #856404;
}

.success-description {
  color: #155724;
}

.warning-action {
  flex-shrink: 0;
}

.btn-primary {
  background: #007bff;
  border-color: #007bff;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #0056b3;
  border-color: #0056b3;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Responsive design */
@media (max-width: 768px) {
  .warning-content,
  .success-content {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .warning-action {
    width: 100%;
  }
  
  .btn-primary {
    width: 100%;
  }
}
</style>
