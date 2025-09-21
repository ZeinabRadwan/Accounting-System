<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <router-link :to="{ name: 'chart-of-accounts.index' }" class="btn btn-primary">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="saveAccount" @keydown="form.onKeydown($event)">
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
                  
                  <!-- Code Generation Toggle -->
                  <div class="code-generation-toggle mb-2">
                    <div class="btn-group btn-group-sm" role="group">
                      <button type="button" 
                              :class="['btn', form.code_generation === 'automatic' ? 'btn-primary' : 'btn-outline-primary']"
                              @click="setCodeGeneration('automatic')">
                        <i class="fas fa-magic mr-1"></i>
                        {{ $t('Automatic') }}
                      </button>
                      <button type="button" 
                              :class="['btn', form.code_generation === 'manual' ? 'btn-primary' : 'btn-outline-primary']"
                              @click="setCodeGeneration('manual')">
                        <i class="fas fa-edit mr-1"></i>
                        {{ $t('Manual') }}
                      </button>
                    </div>
                  </div>

                  <!-- Code Input Field -->
                  <div class="code-input-container">
                    <input id="code" 
                           v-model="form.code" 
                           type="text" 
                           class="form-control"
                           :class="{ 'is-invalid': form.errors.has('code') }" 
                           name="code"
                           :placeholder="form.code_generation === 'automatic' ? $t('Code will be generated automatically') : $t('Enter account code')"
                           :readonly="form.code_generation === 'automatic'"
                           :style="form.code_generation === 'automatic' ? 'background-color: #f8f9fa;' : ''" />
                    
                    <!-- Auto-generate Button -->
                    <div v-if="form.code_generation === 'automatic'" class="code-generate-btn">
                      <button type="button" 
                              class="btn btn-outline-secondary btn-sm"
                              @click="generateCode"
                              :disabled="!form.parent_id">
                        <i class="fas fa-sync-alt mr-1"></i>
                        {{ $t('Generate') }}
                      </button>
                    </div>
                  </div>
                  
                  <!-- Code Preview -->
                  <div v-if="form.code_generation === 'automatic' && form.code" class="code-preview mt-2">
                    <small class="text-muted">
                      <i class="fas fa-info-circle mr-1"></i>
                      {{ $t('Generated Code') }}: <strong>{{ form.code }}</strong>
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
                  <select id="is_active" v-model="form.is_active" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('is_active') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="is_active" />
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page">
                  <v-button :loading="form.busy" class="btn btn-primary">
                    <i class="fas fa-save" /> {{ $t('Save') }}
                  </v-button>
                  <button type="reset" class="btn btn-secondary" @click="form.reset()">
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
    return { title: this.$t('Create Chart of Account') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Create Chart of Account',
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
        name: 'Create',
        url: '',
      },
    ],
    form: new Form({
      name: '',
      code: '',
      code_generation: 'automatic', // 'automatic' or 'manual'
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
  }),

  async created() {
    await this.loadAccountTypes();
    await this.loadParentAccounts();
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
        this.form.code = '';
        this.generateCode();
      } else {
        this.form.code = '';
      }
    },

    // generate automatic code based on parent-child hierarchy
    async generateCode() {
      if (this.form.code_generation !== 'automatic') return;
      if (this.isGeneratingCode) {
        console.log('Code generation already in progress, skipping...');
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
        console.log('Account Types loaded:', this.accountTypes);
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

    // save chart of account
    async saveAccount() {
      // Extract IDs from the selected objects before sending
      const formData = {
        ...this.form.data(),
        type_id: this.form.type_id ? this.form.type_id.id : null,
        parent_id: this.form.parent_id ? this.form.parent_id.id : null,
      };

      // console.log('Saving with form data:', formData);
      // console.log('Code being saved:', formData.code);

      await this.$axios.post('/api/chart-of-accounts', formData)
        .then((response) => {
          // console.log('Save response:', response.data);
          toast.fire({
            type: 'success',
            title: this.$t('Chart of account added successfully'),
          })
          this.$router.push({ name: 'chart-of-accounts.index' })
        })
        .catch((error) => {
          console.error('Error saving:', error);
          toast.fire({ type: 'error', title: this.$t('Opps...something went wrong') })
        })
    },
  },
}
</script>

<style scoped>
/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}

/* Restore full border radius for buttons inside the group */
.btn-group.c-w-100 > .btn {
  border-radius: 10px !important;
}
.btn-group.c-w-100 > .btn:first-child {
  border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}
.btn-group.c-w-100 > .btn:last-child {
  border-top-left-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
}

.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
}

.card-header {
  background-color: white;
  border-bottom: 1px solid #CED4DA;
  padding: 1.25rem 1.25rem 0 1.25rem;
  border-radius: 20px 20px 0 0;
}

.card-body {
  padding: 1.25rem;
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Form Control Styling */
.form-control {
  background: #F1F5FB !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 14px;
}

.form-control:focus {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

/* Form Group Labels */
.form-group label {
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  display: block;
}

.required {
  color: #DC3545;
  font-weight: bold;
}

/* Button Styling */
.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border-radius: 10px !important;
  border: none !important;
  font-weight: 500;
}

.btn-primary:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;
  border-radius: 10px !important;
  border: none !important;
  font-weight: 500;
  margin-right: 10px;
}

.btn-secondary:hover {
  background: #2a8bc4 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.3);
}

/* Invalid Form Control */
.is-invalid {
  border-color: #DC3545 !important;
}

/* V-Select Styling */
.v-select {
  background: #F1F5FB !important;
}

.v-select .vs__dropdown-toggle {
  background: #F1F5FB !important;
  border: 1px solid #E5E7EB !important;
  border-radius: 10px !important;
  padding: 10px 16px !important;
}

.v-select .vs__dropdown-toggle:focus {
  border-color: #33a0d9 !important;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25) !important;
}

.v-select.is-invalid .vs__dropdown-toggle {
  border-color: #DC3545 !important;
}

/* Code Generation Toggle */
.code-generation-toggle {
  margin-bottom: 0.5rem;
}

.code-generation-toggle .btn-group {
  width: 100%;
}

.code-generation-toggle .btn {
  flex: 1;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
}

.code-generation-toggle .btn-outline-primary {
  border-color: #33a0d9;
  color: #33a0d9;
}

.code-generation-toggle .btn-outline-primary:hover {
  background-color: #33a0d9;
  border-color: #33a0d9;
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
  border-radius: 8px;
}

/* Code Preview */
.code-preview {
  padding: 0.5rem;
  background: #e3f2fd;
  border: 1px solid #bbdefb;
  border-radius: 10px;
  font-size: 0.875rem;
}

.code-preview strong {
  color: #1976d2;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

/* Form Input Readonly State */
.form-control[readonly] {
  background-color: #f8f9fa !important;
  border-color: #e9ecef;
  cursor: not-allowed;
}

/* Row Spacing */
.row {
  margin-bottom: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .card-footer {
    flex-direction: column;
    gap: 10px;
  }
  
  .card-footer .btn {
    width: 100%;
    margin-right: 0 !important;
  }
  
  .card-footer div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
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
  background-color: #33a0d9;
  border-color: #33a0d9;
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
</style>
