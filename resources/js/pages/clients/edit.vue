<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    
    <!-- Chart of Account Validation Component -->
    <ChartOfAccountValidation 
      :client="clientData" 
      :type="'invoice'"
      @chart-of-account-assigned="onChartOfAccountAssigned"
    />
    
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
                  <has-error :form="form" field="chartOfAccountId" />
                  <small class="form-text text-muted">
                    {{ $t('Chart of Account is required for journal entries. Use Auto-Assign to automatically assign a suitable account.') }}
                  </small>
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <v-button :loading="form.busy" class="btn btn-primary">
                <i class="fas fa-edit" /> {{ $t('Save changes') }}
              </v-button>
              <button type="reset" class="btn btn-secondary float-right" @click="form.reset()">
                <i class="fas fa-power-off" /> {{ $t('Reset') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
import ChartOfAccountValidation from '../../components/ChartOfAccountValidation.vue'

export default {
  components: {
    ChartOfAccountValidation
  },
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Edit Client') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Edit Client',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Clients',
        url: 'clients.index',
      },
      {
        name: 'Edit',
        url: '',
      },
    ],
    form: new Form({
      name: '',
      email: '',
      phoneNumber: '',
      companyName: '',
      taxRegistrationNumber: '',
      address: '',
      image: '',
      type: 'Company',
      status: 1,
      chartOfAccountId: '',
    }),
    loading: true,
    url: null,
    chartOfAccounts: [],
    clientData: null,
    isAutoAssigning: false,
  }),
  created() {
    // Don't load chart accounts here - wait for authentication
  },
  async mounted() {
    // Load chart accounts first, then get client data
    console.log('Component mounted, loading chart accounts...');
    await this.loadChartOfAccounts();
    this.getClient();
  },
  methods: {
    // Load chart of accounts
    async loadChartOfAccounts() {
      try {
        console.log('Loading chart of accounts...');
        console.log('Current URL:', window.location.origin);
        console.log('API endpoint:', '/api/clients/chart-of-accounts');
        
        const response = await this.$http.get('/api/clients/chart-of-accounts');
        console.log('Chart of accounts response:', response);
        this.chartOfAccounts = response.data || [];
        console.log('Chart of accounts loaded:', this.chartOfAccounts);
      } catch (error) {
        console.error('Error loading chart of accounts:', error);
        console.error('Error response:', error.response);
        console.error('Error status:', error.response?.status);
        console.error('Error data:', error.response?.data);
        
        // Fallback: try to load chart accounts after a delay (in case of timing issues)
        console.log('Retrying chart accounts load after delay...');
        setTimeout(async () => {
          try {
            const retryResponse = await this.$http.get('/api/clients/chart-of-accounts');
            this.chartOfAccounts = retryResponse.data || [];
            console.log('Chart of accounts loaded on retry:', this.chartOfAccounts);
          } catch (retryError) {
            console.error('Retry also failed:', retryError);
            this.chartOfAccounts = [];
          }
        }, 2000);
      }
    },

    // get client
    async getClient() {
      try {
        console.log('Getting client data...');
        const { data } = await axios.get(
          window.location.origin + '/api/clients/' + this.$route.params.slug
        )
        console.log('Client data received:', data);
        
        // Set clientData for validation component
        this.clientData = data.data;
        
        this.form.name = data.data.name
        this.form.clientID = data.data.clientID
        this.form.email = data.data.email
        this.form.phoneNumber = data.data.phoneNumber
        this.form.companyName = data.data.companyName
        this.form.taxRegistrationNumber = data.data.taxRegistrationNumber
        this.form.address = data.data.address
        this.form.type = data.data.type || 'Company'
        this.form.status = data.data.status
        // Handle chart of account ID - ensure it's just the ID, not an object
        if (data.data.chart_of_account_id) {
          // If it's an object with id property, extract the id
          if (typeof data.data.chart_of_account_id === 'object' && data.data.chart_of_account_id.id) {
            this.form.chartOfAccountId = data.data.chart_of_account_id.id;
          } else {
            this.form.chartOfAccountId = data.data.chart_of_account_id;
          }
        } else {
          this.form.chartOfAccountId = '';
        }
        
        console.log('Chart of Account ID set to:', this.form.chartOfAccountId);
        console.log('Available chart accounts:', this.chartOfAccounts);
        
        this.url = data.data.image
      } catch (error) {
        console.error('Error getting client:', error);
      }
    },

    // vue file upload
    onFileChange(e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      if (
        file.size < 2111775 &&
        (file.type === 'image/jpeg' ||
          file.type === 'image/png' ||
          file.type === 'image/gif')
      ) {
        reader.onloadend = () => {
          this.form.image = reader.result
        }
        reader.readAsDataURL(file)
        this.url = URL.createObjectURL(file)
      } else {
        Swal.fire(
          this.$t('Error!'),
          this.$t('Please select a valid thumbnail with size less than 2 MB'),
          'error'
        )
      }
    },

    // update client
    async saveClient() {
      // Validate that Chart of Account is selected
      if (!this.form.chartOfAccountId) {
        this.$toast.fire({
          icon: 'error',
          title: this.$t('Chart of Account is required')
        });
        return;
      }
      
      await this.form
        .patch(
          window.location.origin + '/api/clients/' + this.$route.params.slug
        )
        .then(() => {
          toast.fire({
            type: 'success',
            title: this.$t('Client updated successfully'),
          })
          this.$router.push({ name: 'clients.index' })
        })
        .catch(() => {
          toast.fire({
            type: 'error',
            title: this.$t('Opps...something went wrong'),
          })
        })
    },

    // Auto-assign Chart of Account
    async autoAssignChartOfAccount() {
      if (!this.$route.params.slug) return
      
      this.isAutoAssigning = true
      
      try {
        const response = await this.$http.post(`/api/clients/${this.$route.params.slug}/auto-assign-chart-of-account`)
        
        if (response.data.success) {
          // Update the form with the assigned chart of account
          this.form.chartOfAccountId = response.data.chart_of_account_id
          
          // Refresh chart of accounts to show the assigned one
          await this.loadChartOfAccounts()
          
          // Show success message
          this.$toast.fire({
            icon: 'success',
            title: this.$t('Chart of Account assigned successfully')
          })
          
          // Update clientData for validation component
          if (this.clientData) {
            this.clientData.chart_of_account_id = response.data.chart_of_account_id
          }
        } else {
          this.$toast.fire({
            icon: 'error',
            title: response.data.message || this.$t('Failed to assign Chart of Account')
          })
        }
      } catch (error) {
        console.error('Failed to auto-assign chart of account:', error)
        this.$toast.fire({
          icon: 'error',
          title: this.$t('Failed to assign Chart of Account automatically')
        })
      } finally {
        this.isAutoAssigning = false
      }
    },

    // Handle chart of account assignment from validation component
    onChartOfAccountAssigned(data) {
      if (data.entity === 'client' && data.entityId === this.clientData?.id) {
        // Update the form with the assigned chart of account
        this.form.chartOfAccountId = data.chartOfAccountId
        
        // Refresh chart of accounts
        this.loadChartOfAccounts()
        
        // Update clientData
        if (this.clientData) {
          this.clientData.chart_of_account_id = data.chartOfAccountId
        }
      }
    },
  },
}
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
</style>
