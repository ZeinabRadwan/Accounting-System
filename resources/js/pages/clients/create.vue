<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    
    <!-- Chart of Account Warning Alert - Same as edit form -->
    <div class="chart-account-warning" v-if="!form.chartOfAccountId">
      <div class="warning-content">
        <div class="warning-icon">
          <i class="fas fa-info-circle"></i>
        </div>
        <div class="warning-text">
          <h6 class="warning-title">{{ $t('Chart of Account Required') }}</h6>
          <p class="warning-description">{{ $t('Client must have a Chart of Account assigned for journal entries') }}</p>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t("Create Client") }}</h3>
            <router-link :to="{ name: 'clients.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
            </router-link>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="saveClient" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">{{ $t("Name") }}
                    <span class="required">*</span></label>
                  <input id="name" v-model="form.name" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }" name="name"
                    :placeholder="$t('Enter a name')" />
                  <has-error :form="form" field="name" />
                </div>
                <div class="form-group col-md-6">
                  <label for="email">{{ $t("Email") }}</label>
                  <input id="email" v-model="form.email" type="email" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('email') }" name="email"
                    :placeholder="$t('Enter your email address')" />
                  <has-error :form="form" field="email" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="phoneNumber">{{ $t("Contact Number") }}
                    <span class="required">*</span></label>
                  <vue-tel-input :class="{ 'is-invalid': form.errors.has('phoneNumber') }" v-model="form.phoneNumber"
                    :inputOptions="{
                      showDialCode: true,
                    }"></vue-tel-input>
                  <has-error :form="form" field="phoneNumber" />
                </div>
                <div class="form-group col-md-4">
                  <label for="companyName">{{
                    $t("Company Name")
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
                <label for="address">{{ $t("Address") }}</label>
                <textarea id="address" v-model="form.address" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('address') }" :placeholder="$t('Enter an address')" />
                <has-error :form="form" field="address" />
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="image">{{ $t("Image") }}</label>
                  <div class="custom-file">
                    <input id="image" type="file" class="custom-file-input" name="image"
                      :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange" />
                    <label class="custom-file-label" for="image">{{
                      $t("Choose file")
                    }}</label>
                  </div>
                  <has-error :form="form" field="image" />
                  <div class="bg-light mt-4 w-25">
                    <img v-if="url" :src="url" class="img-fluid" :alt="$t('Attached Image')" />
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="type">{{ $t("Type") }}</label>
                  <select id="type" v-model="form.type" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('type') }">
                    <option value="Company">{{ $t("Company") }}</option>
                    <option value="Individual">{{ $t("Individual") }}</option>
                  </select>
                  <has-error :form="form" field="type" />
                </div>
                <div class="form-group col-md-6">
                  <label for="status">{{ $t("Status") }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t("Active") }}</option>
                    <option value="0">{{ $t("Inactive") }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
                <div class="form-group col-md-6 chart-of-account-field">
                  <label for="chartOfAccountId">{{ $t("Chart of Account") }}
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
    return { title: this.$t("Create Client") };
  },
  components: {
    VueTelInput,
    ToggleButton,
  },
  data: () => ({
    isDemoMode: window.config.isDemoMode,
    breadcrumbsCurrent: "Create Client",
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
        name: "Create",
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
  }),
  created() {
    this.loadChartOfAccounts();
  },
  methods: {
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
        Swal.fire(
          this.$t("Error!"),
          this.$t("Please select a valid thumbnail with size less than 2 MB"),
          "error"
        );
      }
    },

    // save client
    async saveClient() {
      // Validate that Chart of Account is selected
      if (!this.form.chartOfAccountId) {
        toast.fire({
          type: "error",
          title: this.$t("Chart of Account is required"),
        });
        return;
      }
      
      await this.form
        .post(window.location.origin + "/api/clients")
        .then(() => {
          toast.fire({
            type: "success",
            title: this.$t("Client added successfully"),
          });
          this.$router.push({ name: "clients.index" });
        })
        .catch(() => {
          toast.fire({ type: "error", title: this.$t("Opps...something went wrong") });
        });
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
          
          toast.fire({
            type: "success",
            title: this.$t("Chart of Account auto-assigned from routing setup"),
          });
        } else {
          // Fallback to the old logic
          const clientData = {
            type: this.form.type || 'Company',
            name: this.form.name,
            email: this.form.email,
            phoneNumber: this.form.phoneNumber,
            companyName: this.form.companyName,
            taxRegistrationNumber: this.form.taxRegistrationNumber,
            address: this.form.address,
          };
          
          let defaultAccount = null;
          
          if (clientData.type === 'Company') {
            defaultAccount = this.chartOfAccounts.find(account => 
              account.name.toLowerCase().includes('accounts receivable') && 
              account.name.toLowerCase().includes('company')
            );
          } else if (clientData.type === 'Individual') {
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
            toast.fire({
              type: "success",
              title: this.$t("Chart of Account auto-assigned successfully"),
            });
          } else {
            toast.fire({
              type: "error",
              title: this.$t("No suitable Chart of Account found for automatic assignment"),
            });
          }
        }
      } catch (error) {
        console.error('Error auto-assigning chart of account:', error);
        toast.fire({
          type: "error",
          title: this.$t("Failed to auto-assign Chart of Account"),
        });
      } finally {
        this.isAutoAssigning = false;
      }
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style scoped>
.vue-tel-input {
  padding: 3px;
}

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

/* Chart of Account Warning Alert Styles - Same as edit form */
.chart-account-warning {
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border: 1px solid #ffc107;
}

.warning-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.warning-icon {
  font-size: 24px;
  flex-shrink: 0;
  color: #856404;
}

.warning-text {
  flex-grow: 1;
}

.warning-title {
  margin: 0 0 4px 0;
  font-weight: 600;
  font-size: 14px;
  color: #856404;
}

.warning-description {
  margin: 0;
  font-size: 13px;
  opacity: 0.8;
  color: #856404;
}

/* Responsive design */
@media (max-width: 768px) {
  .warning-content {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
}
</style>
