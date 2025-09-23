<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'chart-of-accounts.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="button" class="btn btn-success" @click="saveTemporary" title="Save Temporarily">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="updateAccount" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">{{ $t('Account Name') }}
                    <span class="required">*</span></label>
                  <input id="name" v-model="form.name" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }" name="name"
                    :placeholder="$t('Enter account name')" />
                  <has-error :form="form" field="name" />
                </div>
                <div class="form-group col-md-6">
                  <label for="code">{{ $t('Account Code') }}
                    <span class="required">*</span></label>
                  
                

                  <!-- Code Input Field -->
                  <div class="code-input-container">
                    <input id="code" 
                           v-model="form.code" 
                           type="text" 
                           class="form-control"
                           :class="{ 'is-invalid': form.errors.has('code') }" 
                           name="code"
                           :placeholder="$t('Enter account code')"
                           :readonly="form.code_generation === 'automatic'"
                           :style="form.code_generation === 'automatic' ? 'background-color: #f8f9fa;' : ''" />
                    
                  
                  </div>
                  
                
                  
                  <!-- Warning when switching to regenerate mode -->
                  <div v-if="form.code_generation === 'automatic' && originalCode && form.code !== originalCode" class="code-warning mt-2">
                    <small class="text-warning">
                      <i class="fas fa-exclamation-triangle mr-1"></i>
                      {{ $t('Warning') }}: {{ $t('Code will be changed from') }} <strong>{{ originalCode }}</strong> {{ $t('to') }} <strong>{{ form.code }}</strong>
                    </small>
                  </div>
                  
                  <has-error :form="form" field="code" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="type_id">{{ $t('Account Type') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.type_id" :options="accountTypes" label="name"
                    :class="{ 'is-invalid': form.errors.has('type_id') }" name="type_id"
                    :placeholder="$t('Select account type')" />
                  <has-error :form="form" field="type_id" />
                </div>
                <div class="form-group col-md-6">
                  <label for="parent_id">{{ $t('Parent Account') }}</label>
                  <v-select v-model="form.parent_id" :options="parentAccounts" label="name"
                    :class="{ 'is-invalid': form.errors.has('parent_id') }" name="parent_id"
                    :placeholder="parentAccounts.length === 0 ? $t('No compatible parent accounts available') : $t('Select parent account (optional)')" />
                  <small v-if="parentAccounts.length === 0 && form.type_id" class="text-muted">
                    <i class="fas fa-info-circle mr-1"></i>
                    {{ $t('No parent accounts available for the selected account type') }}
                  </small>
                  <has-error :form="form" field="parent_id" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="order">{{ $t('Order') }}</label>
                  <input id="order" v-model="form.order" type="number" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('order') }" name="order"
                    :placeholder="$t('Enter display order')" />
                  <has-error :form="form" field="order" />
                </div>
                <div class="form-group col-md-6">
                  <label for="is_active">{{ $t('Status') }}</label>
                  <v-select
                    v-model="form.is_active"
                    :options="statusOptions"
                    label="label"
                    :reduce="opt => opt.value"
                    :class="{ 'is-invalid': form.errors.has('is_active') }"
                    :placeholder="$t('Select status')"
                  />
                  <has-error :form="form" field="is_active" />
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                  <v-button :loading="form.busy" type="success">
                    <i class="fas fa-edit" /> {{ $t('Save changes') }}
                  </v-button>
                  <button type="reset" class="btn btn-info" @click="form.reset()">
                    <i class="fas fa-power-off" /> {{ $t('Reset') }}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Edit Chart of Account') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Edit Chart of Account',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Cashbook',
        url: '',
      },
      {
        name: 'Chart of Accounts',
        url: 'chart-of-accounts.index',
      },
      {
        name: 'Edit',
        url: '',
      },
    ],
    form: new Form({
      name: '',
      code: '',
      code_generation: 'manual', // 'automatic' or 'manual' - default to manual for edit
      type_id: null,
      parent_id: null,
      order: '',
      is_active: 1,
    }),
    accountTypes: [],
    parentAccounts: [],
    allParentAccounts: [], // Store all accounts for filtering
    codeGenerationTimeout: null, // For debouncing
    isGeneratingCode: false, // Prevent multiple simultaneous generations
    originalCode: '', // Store original code for comparison
    statusOptions: [
      { label: 'Active', value: 1 },
      { label: 'Inactive', value: 0 }
    ],
  }),

  async created() {
    await this.loadAccountTypes();
    await this.loadParentAccounts();
    await this.getAccount();
  },

  beforeDestroy() {
    // Clean up any pending timeouts
    if (this.codeGenerationTimeout) {
      clearTimeout(this.codeGenerationTimeout);
    }
  },

  watch: {
    // Watch for account type changes to filter parent accounts
    'form.type_id': {
      handler(newType, oldType) {
        if (newType !== oldType) {
          this.filterParentAccounts();
        }
      },
      deep: true
    },

    // Watch for parent_id changes to auto-generate code
    'form.parent_id': {
      handler(newParent, oldParent) {
        // console.log('Parent changed from', oldParent, 'to', newParent);
        if (this.form.code_generation === 'automatic' && newParent !== oldParent) {
          // console.log('Auto-generating code due to parent change');
          
          // Clear any existing timeout
          if (this.codeGenerationTimeout) {
            clearTimeout(this.codeGenerationTimeout);
          }
          
          // Debounce the code generation
          this.codeGenerationTimeout = setTimeout(() => {
            this.generateCode();
          }, 300); // 300ms delay
        }
      },
      deep: true
    }
  },

  methods: {
    // set code generation mode
    setCodeGeneration(mode) {
      this.form.code_generation = mode;
      if (mode === 'automatic') {
        // Don't clear the code, just make it readonly
        this.generateCode();
      } else {
        // Switch back to manual mode - keep current code
        // this.form.code = this.originalCode; // Keep current code
      }
    },

    // generate automatic code based on parent-child hierarchy
    async generateCode() {
      if (this.form.code_generation !== 'automatic') return;
      if (this.isGeneratingCode) {
        // console.log('Code generation already in progress, skipping...');
        return;
      }
      
      this.isGeneratingCode = true;
      // console.log('Generating code with parent_id:', this.form.parent_id ? this.form.parent_id.id : null);
      
      try {
        const response = await this.$axios.post('/api/chart-of-accounts/generate-code', {
          parent_id: this.form.parent_id ? this.form.parent_id.id : null
        });
        
        // console.log('Code generation response:', response.data);
        
        if (response.data && response.data.code) {
          // console.log('Setting code to:', response.data.code);
          this.form.code = response.data.code;
        }
      } catch (error) {
        console.error('Error generating code:', error);
        this.$toastr.error(this.$t('Error generating code'));
      } finally {
        this.isGeneratingCode = false;
      }
    },

    // load account types
    async loadAccountTypes() {
      try {
        const response = await this.$axios.get('/api/chart-of-account-types');
        this.accountTypes = response.data.data || [];
      } catch (error) {
        console.error('Error loading account types:', error);
      }
    },

    // load parent accounts
    async loadParentAccounts() {
      try {
        const response = await this.$axios.get('/api/chart-of-accounts/all');
        this.allParentAccounts = response.data.data || [];
        this.filterParentAccounts();
        console.log('Parent Accounts loaded:', this.parentAccounts);
      } catch (error) {
        console.error('Error loading parent accounts:', error);
      }
    },

    // filter parent accounts based on selected account type
    filterParentAccounts() {
      if (!this.form.type_id || !this.allParentAccounts) {
        this.parentAccounts = this.allParentAccounts || [];
        return;
      }

      const selectedTypeId = this.form.type_id.id || this.form.type_id;
      
      // Filter parent accounts based on account type hierarchy
      this.parentAccounts = this.allParentAccounts.filter(account => {
        // Allow accounts of the same type or compatible parent types
        const accountTypeId = account.type_id || account.type?.id;
        
        // Basic type compatibility rules
        const typeCompatibility = {
          // Assets can be parent of other assets
          'asset': ['asset'],
          // Liabilities can be parent of other liabilities  
          'liability': ['liability'],
          // Equity can be parent of other equity
          'equity': ['equity'],
          // Income can be parent of other income
          'income': ['income'],
          // Expense can be parent of other expenses
          'expense': ['expense'],
          // COGS can be parent of other COGS
          'cogs': ['cogs'],
        };

        // If we have type names, use them for filtering
        if (account.type && account.type.name) {
          const accountTypeName = account.type.name.toLowerCase();
          const selectedTypeName = this.getTypeNameById(selectedTypeId).toLowerCase();
          
          // Check if the account type is compatible
          if (typeCompatibility[selectedTypeName] && typeCompatibility[selectedTypeName].includes(accountTypeName)) {
            return true;
          }
        }

        // Fallback: allow accounts of the same type
        return accountTypeId === selectedTypeId;
      });

      // If no parent accounts found, clear the selection
      if (this.parentAccounts.length === 0) {
        this.form.parent_id = null;
      }
    },

    // get type name by ID
    getTypeNameById(typeId) {
      const type = this.accountTypes.find(t => t.id === typeId);
      return type ? type.name : '';
    },

    // get account data
    async getAccount() {
      try {
        const response = await this.$axios.get(`/api/chart-of-accounts/${this.$route.params.slug}`);
        const account = response.data.data;
        
        console.log('Account data received:', account); // Debug log
        
        // Set form data
        this.form.name = account.name || '';
        this.form.code = account.code || '';
        this.originalCode = account.code || ''; // Store original code
        this.form.order = account.order || '';
        
        // Handle is_active status - ensure it's a boolean/number
        if (account.is_active !== null && account.is_active !== undefined) {
          this.form.is_active = account.is_active ? 1 : 0;
        } else {
          this.form.is_active = 1; // Default to active if null/undefined
        }
        
        console.log('Form is_active set to:', this.form.is_active); // Debug log
        
        // Set type_id (find the type object from accountTypes array)
        if (account.type_id) {
          const type = this.accountTypes.find(t => t.id === account.type_id);
          this.form.type_id = type || null;
        }
        
        // Set parent_id (find the parent object from parentAccounts array)
        if (account.parent_id) {
          const parent = this.parentAccounts.find(p => p.id === account.parent_id);
          this.form.parent_id = parent || null;
        }
        
        console.log('Form data after population:', this.form.data()); // Debug log
      } catch (error) {
        console.error('Error loading account:', error);
      }
    },

    // update chart of account
    async updateAccount() {
      try {
        // Extract IDs from the selected objects before sending
        const formData = {
          ...this.form.data(),
          type_id: this.form.type_id ? this.form.type_id.id : null,
          parent_id: this.form.parent_id ? this.form.parent_id.id : null,
        };

        console.log('Sending update data:', formData);

        const response = await this.$axios.put(`/api/chart-of-accounts/${this.$route.params.slug}`, formData);
        
        // Check if the response indicates success
        if (response.status === 200 || response.status === 201) {
          // Show success message
          toast.fire({
            icon: 'success',
            title: this.$t('Chart of account updated successfully'),
            showConfirmButton: false,
            timer: 2000
          });
          
          // Clear temporary data after successful save
          this.clearTemporaryData()
          
          // Wait a moment for the toast to show, then redirect
          setTimeout(() => {
            this.$router.push({ name: 'chart-of-accounts.index' });
          }, 1000);
        } else {
          throw new Error('Update failed');
        }
        
      } catch (error) {
        console.error('Error updating:', error);
        
        // Handle validation errors from the response
        if (error.response && error.response.data && error.response.data.errors) {
          this.form.errors.set(error.response.data.errors);
        }
        
        // Show error message
        toast.fire({
          icon: 'error',
          title: error.response?.data?.message || this.$t('Opps...something went wrong'),
          showConfirmButton: false,
          timer: 3000
        });
      }
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        name: this.form.name,
        code: this.form.code,
        type_id: this.form.type_id,
        parent_id: this.form.parent_id,
        code_generation: this.form.code_generation,
        is_system: this.form.is_system,
        enabled: this.form.enabled,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('chartOfAccountEditTempData', JSON.stringify(tempData))
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('chartOfAccountEditTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.name = data.name || this.form.name
          this.form.code = data.code || this.form.code
          this.form.type_id = data.type_id || this.form.type_id
          this.form.parent_id = data.parent_id || this.form.parent_id
          this.form.code_generation = data.code_generation || this.form.code_generation
          this.form.is_system = data.is_system !== undefined ? data.is_system : this.form.is_system
          this.form.enabled = data.enabled !== undefined ? data.enabled : this.form.enabled
        } catch (e) {
          console.error('Error loading temporary data:', e)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('chartOfAccountEditTempData')
    },
  },
  mounted() {
    this.loadTemporaryData()
  },
}
</script>

<style scoped>
/* Header buttons styling */
.header-buttons {
  margin-bottom: 15px;
}

/* Footer buttons styling */
.footer-buttons {
  gap: 10px;
  display: flex;
}

.footer-buttons .btn {
  margin-right: 10px;
}

.footer-buttons .btn:last-child {
  margin-right: 0;
}

/* Code Generation Toggle */
.code-generation-toggle {
  margin-bottom: 0.5rem !important;
}

.code-generation-toggle .btn-group {
  width: 125%;
  display: inline-flex;
  background: #f1f5f9;
  border: none;
  border-radius: 8px;
  padding: 3px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

.code-generation-toggle .btn {
  flex: 1;
  font-size: 12px;
  font-weight: 500;
  padding: 6px 12px;
  line-height: 1.3;
  border-radius: 5px;
  background: transparent !important;
  border: none !important;
  color: #64748b;
  box-shadow: none !important;
  transition: all 0.2s ease;
}

.code-generation-toggle .btn-outline-primary {
  border: none !important;
  color: #64748b;
}

.code-generation-toggle .btn-outline-primary:hover {
  background-color: rgba(255, 255, 255, 0.5) !important;
  color: #475569;
  transform: none;
  box-shadow: none !important;
}

/* Active state - primary in this toggle only */
.code-generation-toggle .btn.btn-primary {
  background: #ffffff !important;
  color: #2AB930 !important;
  border: none !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12) !important;
  transform: none !important;
}

.code-generation-toggle .btn.btn-primary:hover {
  background: #ffffff !important;
  color: #229A26 !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15) !important;
  transform: none !important;
}

/* Code Input Container */
.code-input-container {
  position: relative;
}

.code-generate-btn {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.code-generate-btn .btn {
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
}

/* Code Preview */
.code-preview {
  padding: 0.5rem;
  background: #e3f2fd;
  border: 1px solid #bbdefb;
  border-radius: 4px;
  font-size: 0.875rem;
}

.code-preview strong {
  color: #1976d2;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

/* Code Warning */
.code-warning {
  padding: 0.5rem;
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 4px;
  font-size: 0.875rem;
}

.code-warning strong {
  color: #856404;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

/* Form Input Readonly State */
.form-control[readonly] {
  background-color: #f8f9fa !important;
  border-color: #e9ecef;
  cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 768px) {
  .code-generate-btn {
    position: static;
    transform: none;
    margin-top: 0.5rem;
    width: 100%;
  }
  
  .code-generate-btn .btn {
    width: 100%;
  }
  
  .code-generation-toggle .btn {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}

/* Button States */
.btn-outline-primary:hover {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-outline-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

/* Disabled State */
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}



.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Search Input Background Override */
.form-control{
  background: #fff !important;
}

.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
}
</style>