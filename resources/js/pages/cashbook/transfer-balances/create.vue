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
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'transferBalances.index' }" class="btn btn-info">
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
          <form role="form" @submit.prevent="saveTransfer" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-12">
                  <label for="transferReason">{{ $t('Transfer Reason') }}
                    <span class="required">*</span></label>
                  <input type="text" id="transferReason" v-model="form.transferReason" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('transferReason') }"
                    :placeholder="$t('Enter a reason')" name="transferReason" />
                  <has-error :form="form" field="transferReason" />
                </div>
              </div>
              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="fromAccount">{{ $t('From Account') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.fromAccount" :options="items" label="label"
                    :class="{ 'is-invalid': form.errors.has('fromAccount') || fromAccountError }" name="fromAccount"
                    :placeholder="$t('Select an account')" @input="updateBalance">
                     <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px;" />
                        {{ option.label }}
                    </template>
                  </v-select>
                  <has-error :form="form" field="fromAccount" />
                  <div v-if="fromAccountError" class="invalid-feedback d-block">
                    {{ fromAccountError }}
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="toAccount">{{ $t('To Account') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.toAccount" :options="items" label="label"
                    :class="{ 'is-invalid': form.errors.has('toAccount') || toAccountError }" name="toAccount"
                    :placeholder="$t('Select an account')">
                     <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px;" />
                        {{ option.label }}
                    </template>
                  </v-select>
                  <has-error :form="form" field="toAccount" />
                  <div v-if="toAccountError" class="invalid-feedback d-block">
                    {{ toAccountError }}
                  </div>
                </div>
              </div>
              <div class="row" v-if="form.fromAccount">
                <div class="form-group col-md-6">
                  <label for="availableBalance">{{
                    $t('Available Balance')
                  }}</label>
                  <input id="availableBalance" v-model="form.availableBalance" type="number" step="any"
                    class="form-control" :class="{
                      'is-invalid': form.errors.has('availableBalance'),
                    }" name="availableBalance" readonly />
                  <has-error :form="form" field="availableBalance" />
                </div>
                <div class="form-group col-md-6">
                  <label for="amount">{{ $t('Amount') }}
                    <span class="required">*</span></label>
                  <input id="amount" v-model="form.amount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('amount') }" name="amount" placeholder="Enter an amount" />
                  <has-error :form="form" field="amount" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="date">{{ $t('Date') }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div class="form-group col-md-6">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">
                      {{ $t('Active') }}
                    </option>
                    <option value="0">
                      {{ $t('Inactive') }}
                    </option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>
              <div class="form-group">
                <label for="note">{{ $t('Note') }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                  <v-button :loading="form.busy" type="success">
                    <i class="fas fa-save" /> {{ $t('Save') }}
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
import { mapGetters } from 'vuex'

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Create Transfer') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Create Transfer',
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
        name: 'Balance Transfers',
        url: 'transferBalances.index',
      },
      {
        name: 'Create',
        url: '',
      },
    ],
    form: new Form({
      fromAccount: null,
      toAccount: null,
      transferReason: '',
      availableBalance: 0,
      amount: '',
      date: new Date().toISOString().slice(0, 10),
      note: '',
      status: 1,
    }),
    loading: true,
    fromAccountError: null,
    toAccountError: null,
  }),
  computed: {
    ...mapGetters('operations', ['items', 'appInfo']),
  },
  watch: {
    'form.fromAccount'() {
      // Clear from account error when user changes the account
      this.fromAccountError = null;
    },
    'form.toAccount'() {
      // Clear to account error when user changes the account
      this.toAccountError = null;
    },
  },
  created() {
    this.getAccoutns()
  },
  methods: {
    // get all accounts
    async getAccoutns() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-accounts',
      })
      // assign default account
      if (this.items && this.items.length > 0) {
        let defaultAccountSlug = this.appInfo.defaultAccountSlug;
        this.form.fromAccount = this.items.find(account => account.slug == defaultAccountSlug);
        this.updateBalance()
      }
    },

    // update available balance
    updateBalance() {
      return (this.form.availableBalance =
        this.form.fromAccount.availableBalance)
    },

    // save transfer
    async saveTransfer() {
      await this.form
        .post(window.location.origin + '/api/balance-transfers')
        .then(() => {
          toast.fire({
            type: 'success',
            title: this.$t('Balance transfer added successfully'),
          })
          this.clearTemporaryData()
          this.$router.push({ name: 'transferBalances.index' })
        })
        .catch((error) => {
          // Display the specific error message from the server
          const errorMessage = error.response?.data?.message || this.$t('Opps...something went wrong');
          
          // Check if it's a bank account validation error
          if (errorMessage.includes("not connected to any Chart of Account")) {
            // Try to determine which account has the error based on the account number in the message
            const fromAccountNumber = this.form.fromAccount?.accountNumber || '';
            const toAccountNumber = this.form.toAccount?.accountNumber || '';
            const fromBankName = this.form.fromAccount?.bank_name || '';
            const toBankName = this.form.toAccount?.bank_name || '';
            
            // Check for account number in brackets first
            if (fromAccountNumber && errorMessage.includes(`[${fromAccountNumber}]`)) {
              this.fromAccountError = errorMessage;
              this.toAccountError = null;
            } else if (toAccountNumber && errorMessage.includes(`[${toAccountNumber}]`)) {
              this.toAccountError = errorMessage;
              this.fromAccountError = null;
            } 
            // Fallback to bank name matching
            else if (fromBankName && errorMessage.includes(fromBankName)) {
              this.fromAccountError = errorMessage;
              this.toAccountError = null;
            } else if (toBankName && errorMessage.includes(toBankName)) {
              this.toAccountError = errorMessage;
              this.fromAccountError = null;
            } else {
              // If we can't determine which account, show on both
              this.fromAccountError = errorMessage;
              this.toAccountError = errorMessage;
            }
          } else {
            this.fromAccountError = null;
            this.toAccountError = null;
          }
          
          toast.fire({ 
            type: 'error', 
            title: errorMessage 
          });
        })
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        transferReason: this.form.transferReason,
        fromAccount: this.form.fromAccount,
        toAccount: this.form.toAccount,
        amount: this.form.amount,
        date: this.form.date,
        note: this.form.note,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('transferBalanceTempData', JSON.stringify(tempData))
      toast.fire({ type: 'success', title: this.$t('Form saved temporarily') })
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('transferBalanceTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.transferReason = data.transferReason || this.form.transferReason
          this.form.fromAccount = data.fromAccount || this.form.fromAccount
          this.form.toAccount = data.toAccount || this.form.toAccount
          this.form.amount = data.amount || this.form.amount
          this.form.date = data.date || this.form.date
          this.form.note = data.note || this.form.note
        } catch (e) {
          console.error('Error loading temporary data:', e)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('transferBalanceTempData')
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

/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
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
  background: #fff !important;
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

/* Textarea Styling */
textarea.form-control {
  min-height: 100px;
  resize: vertical;
}

/* V-Select Styling */
.v-select {
  background: #fff !important;
}

.v-select .vs__dropdown-toggle {
  background: #fff !important;
  border: 1px solid #E5E7EB !important;

  padding: 10px 16px !important;
}

.v-select .vs__dropdown-toggle:focus {
  border-color: #33a0d9 !important;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25) !important;
}

.v-select.is-invalid .vs__dropdown-toggle {
  border-color: #DC3545 !important;
}

/* Error Message Styling */
.invalid-feedback {
  color: #DC3545;
  font-size: 12px;
  margin-top: 5px;
}

.d-block {
  display: block !important;
}

/* Row Spacing */
.row {
  margin-bottom: 1rem;
}

/* Responsive adjustments */
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
}
</style>
