<template>
  <Modal v-if="show" @close="handleClose">
    <h5 slot="header">
      {{ type === 'purchase' ? $t("Create purchase payment") : $t("Create invoice payment") }} :
      <span v-if="invoiceNo">{{ invoicePrefix }}{{ invoiceNo }}</span>
    </h5>
    <div slot="body" class="row">
      <form role="form" @submit.prevent="savePayment" @keydown="paymentForm.onKeydown($event)" class="w-100">
        <div class="row">
          <div class="form-group col-md-6">
            <label for="clientInvoiceTotal">{{
              type === 'purchase' ? $t("Purchase Total") : $t("Invoice Total")
            }}</label>
            <input type="text" class="form-control" readonly :value="formatNumber(invoiceTotal)" />
          </div>
          <div class="form-group col-md-6">
            <label for="clientInvoiceDue">{{
              type === 'purchase' ? $t("Purchase Due") : $t("Invoice Due")
            }}</label>
            <input type="text" class="form-control" readonly :value="formatNumber(dueAmount)" />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-4">
            <label for="paidAmount">{{ $t("Paid Amount") }}</label>
            <input type="number" step="any" class="form-control" :placeholder="$t('Enter an amount')" required min="1"
              v-model="paymentForm.paidAmount" :max="dueAmount" />
          </div>
          <div class="form-group col-md-8">
            <label for="account">{{ $t("Account") }}
              <span class="required">*</span></label>
            <div class="d-flex w-100">
              <v-select v-model="paymentForm.account" :options="accounts" label="label"
                :class="{ 'is-invalid': paymentForm.errors.has('account') }" name="account"
                :placeholder="$t('Select an account')" class="flex-grow-1">
                <template slot="option" slot-scope="option">
                  <img :src="option.image" style="width: 30px; height: 30px;" />
                  {{ option.label }}
                </template>
              </v-select>
              <AccountCreateModal @accountCreated="handleAccountCreated">
                <div class="input-group-text create-btn">
                  <i class="fas fa-solid fa-plus-circle"></i>
                </div>
              </AccountCreateModal>
            </div>
            <has-error :form="paymentForm" field="account" />
          </div>
        </div>

        <div class="row">
          <div class="form-group col-md-6">
            <label for="paymentMethod">{{ $t("Payment Method") }}</label>
            <select id="paymentMethod" v-model="paymentForm.payment_method_id" class="form-control"
              :class="{ 'is-invalid': paymentForm.errors.has('payment_method_id') }"
              :disabled="loadingPaymentMethods" name="payment_method_id">
              <option value="">{{ loadingPaymentMethods ? $t("Loading...") : $t("Select") }}</option>
              <option v-if="!loadingPaymentMethods && paymentMethods.length === 0" value="" disabled>
                {{ $t("No payment methods available") }}
              </option>
              <option v-for="method in paymentMethods" :key="method.id" :value="method.id">
                {{ method.name }}
              </option>
            </select>
            <small v-if="loadingPaymentMethods" class="form-text text-muted">
              {{ $t("Loading payment methods...") }}
            </small>
            <has-error :form="paymentForm" field="payment_method_id" />
          </div>
          <div class="form-group col-md-6" v-if="selectedPaymentMethodAnalyticalAccount">
            <label for="analyticalAccount">{{ $t("Analytical Account") }}</label>
            <input type="text" class="form-control" readonly
              :value="selectedPaymentMethodAnalyticalAccount.name || '-'" />
            <small class="form-text text-muted">
              {{ $t("Automatically set based on payment method") }}
            </small>
          </div>
        </div>

        <div class="row">
          <div class="form-group col-md-6">
            <label for="receiptNo">{{ $t("Receipt No") }}</label>
            <input type="text" v-model="paymentForm.receiptNo" class="form-control"
              :class="{ 'is-invalid': paymentForm.errors.has('receiptNo') }" id="receiptNo"
              :placeholder="$t('Enter a receipt no')" />
            <has-error :form="paymentForm" field="receiptNo" />
          </div>
          <div class="form-group col-md-6">
            <label for="paymentDate">{{ $t("Payment Date") }}</label>
            <input id="paymentDate" v-model="paymentForm.paymentDate" type="date" class="form-control"
              :class="{ 'is-invalid': paymentForm.errors.has('paymentDate') }" name="paymentDate" />
            <has-error :form="paymentForm" field="paymentDate" />
          </div>

          <div class="form-group col-md-6">
            <label for="status">{{ $t("Status") }}</label>
            <select id="status" v-model="paymentForm.status" class="form-control"
              :class="{ 'is-invalid': paymentForm.errors.has('status') }" :disabled="invoiceStatus === 0">
              <option v-if="invoiceStatus === 1" value="1">{{ $t("Active") }}</option>
              <option value="0">{{ $t("Inactive") }}</option>
            </select>
            <has-error :form="paymentForm" field="status" />
          </div>
        </div>

        <div class="form-group">
          <label for="note">{{ $t("Note") }}</label>
          <textarea id="note" v-model="paymentForm.note" class="form-control"
            :class="{ 'is-invalid': paymentForm.errors.has('note') }" :placeholder="$t('Write your note here!')" />
          <has-error :form="paymentForm" field="note" />
        </div>
        <div class="form-group col-12 d-flex flex-wrap">
          <div class="pr-5 d-flex align-items-center">
            <toggle-button v-model="paymentForm.isSendEmail"
              :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.email_configured" />
            <span class="ml-3">{{ $t("Send Email Notification") }}</span>
            <span v-if="!communicationConfig.loading && !communicationConfig.email_configured"
              class="ml-2 text-muted small">
              ({{ $t("Email not configured") }})
            </span>
          </div>
        </div>
        <div class="form-group col-12 d-flex flex-wrap">
          <div class="pr-5 d-flex align-items-center">
            <toggle-button v-model="paymentForm.isSendSMS"
              :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.sms_configured" />
            <span class="ml-3">{{ $t("Send SMS Notification") }}</span>
            <span v-if="!communicationConfig.loading && !communicationConfig.sms_configured"
              class="ml-2 text-muted small">
              ({{ $t("SMS not configured") }})
            </span>
          </div>
        </div>
      </form>
    </div>
    <div slot="modal-footer" class="d-flex justify-content-end w-100">
      <v-button :loading="paymentForm.busy" class="btn btn-success mr-2" @click="savePayment">
        <i class="fas fa-save" /> {{ $t("Save") }}
      </v-button>
      <button type="button" class="btn btn-secondary" @click="handleClose">
        {{ $t("Close") }}
      </button>
    </div>
  </Modal>
</template>

<script>
import Form from "vform";
import axios from "axios";
import { mapGetters } from "vuex";
import { ToggleButton } from "vue-js-toggle-button";
import AccountCreateModal from "~/components/AccountCreateModal";

export default {
  name: "InvoicePaymentModal",
  components: {
    ToggleButton,
    AccountCreateModal,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'invoice', // 'invoice' or 'purchase'
      validator: (value) => ['invoice', 'purchase'].includes(value),
    },
    invoiceId: {
      type: [Number, String],
      required: true,
    },
    invoiceNo: {
      type: String,
      required: true,
    },
    invoicePrefix: {
      type: String,
      default: "",
    },
    invoiceTotal: {
      type: Number,
      required: true,
    },
    dueAmount: {
      type: Number,
      required: true,
    },
    invoiceStatus: {
      type: Number,
      default: 1,
    },
    purchaseSlug: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      accounts: [],
      paymentMethods: [],
      loadingPaymentMethods: false,
      isDemoMode: window.config.isDemoMode,
      communicationConfig: {
        email_configured: false,
        sms_configured: false,
        loading: true,
      },
      paymentForm: new Form({
        invoice_id: "",
        paidAmount: 1,
        paymentDate: new Date().toISOString().slice(0, 10),
        account: "",
        receiptNo: "",
        note: "",
        status: 1,
        isSendEmail: false,
        isSendSMS: false,
        payment_method_id: null,
      }),
    };
  },
  computed: {
    ...mapGetters("operations", ["appInfo"]),

    // Get analytical account for selected payment method
    selectedPaymentMethodAnalyticalAccount() {
      if (!this.paymentForm.payment_method_id || !this.paymentMethods || this.paymentMethods.length === 0) {
        return null;
      }
      const selectedMethod = this.paymentMethods.find(method => method.id == this.paymentForm.payment_method_id);
      if (selectedMethod && selectedMethod.analytical_account) {
        return selectedMethod.analytical_account;
      }
      return null;
    },
  },
  watch: {
    show: {
      handler(newVal) {
        if (newVal) {
          this.initializeForm();
        }
      },
      immediate: true
    },
    dueAmount: {
      handler(newVal) {
        if (newVal && this.show) {
          this.paymentForm.paidAmount = newVal > 0 ? newVal : 1;
        }
      },
      immediate: true
    },
    invoiceId: {
      handler(newVal) {
        if (newVal && this.show) {
          console.log('Update form invoice_id from prop:', newVal);
          this.paymentForm.invoice_id = newVal;
        }
      },
      immediate: true
    },
  },
  created() {
    this.loadCommunicationConfigStatus();
    this.getAccounts();
    this.getPaymentMethods();
  },
  methods: {
    // Format number to 2 decimal places
    formatNumber(value) {
      if (value === null || value === undefined || isNaN(value)) return '0.00';
      return parseFloat(value).toFixed(2);
    },

    // Load communication configuration status
    async loadCommunicationConfigStatus() {
      try {
        this.communicationConfig.loading = true;

        const response = await axios.get('/api/communication-config-status');

        this.communicationConfig.email_configured = response.data.email_configured;
        this.communicationConfig.sms_configured = response.data.sms_configured;
        this.communicationConfig.loading = false;
      } catch (error) {
        console.error('Error loading communication config status:', error);
        // Default to false if there's an error
        this.communicationConfig.email_configured = false;
        this.communicationConfig.sms_configured = false;
        this.communicationConfig.loading = false;
      }
    },

    // Initialize form when modal opens
    initializeForm() {
      if (this.type === 'purchase') {
        // For purchases, we don't set invoice_id
        this.paymentForm.invoice_id = null;
      } else {
        this.paymentForm.invoice_id = this.invoiceId;
      }
      const dueAmount = this.dueAmount;
      // Set paid amount to total due amount as default
      this.paymentForm.paidAmount = dueAmount > 0 ? dueAmount : 1;
      this.paymentForm.status = this.invoiceStatus === 0 ? 0 : 1;
      this.paymentForm.payment_method_id = null; // Reset payment method

      // Set default account if available
      if (this.accounts && this.accounts.length > 0 && !this.paymentForm.account) {
        let defaultAccountSlug = this.appInfo?.defaultAccountSlug;
        this.paymentForm.account = this.accounts.find(
          (account) => account.slug == defaultAccountSlug
        ) || this.accounts[0];
      }
    },

    // Get accounts
    async getAccounts() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-accounts"
      );
      this.accounts = data.data;

      // assign default account
      if (this.accounts && this.accounts.length > 0) {
        let defaultAccountSlug = this.appInfo?.defaultAccountSlug;
        this.paymentForm.account = this.accounts.find(
          (account) => account.slug == defaultAccountSlug
        );
      }
    },

    // Get payment methods
    async getPaymentMethods() {
      this.loadingPaymentMethods = true;
      try {
        const response = await axios.get(window.location.origin + '/api/payment-methods', {
          params: { perPage: 1000 } // Get all payment methods
        });
        // Handle both paginated and non-paginated responses
        if (response.data) {
          if (Array.isArray(response.data)) {
            this.paymentMethods = response.data;
          } else if (response.data.data && Array.isArray(response.data.data)) {
            this.paymentMethods = response.data.data;
          } else {
            this.paymentMethods = [];
          }
        } else {
          this.paymentMethods = [];
        }
      } catch (error) {
        console.error('Error loading payment methods:', error);
        this.paymentMethods = [];
        this.$toast.error(
          this.$t('Error'),
          this.$t('Failed to load payment methods')
        );
      } finally {
        this.loadingPaymentMethods = false;
      }
    },

    // Handle account created event
    async handleAccountCreated(newAccount) {
      // Refresh accounts list
      await this.getAccounts();

      // Find and select the newly created account
      if (newAccount && newAccount.id) {
        // Wait for accounts to be updated
        await this.$nextTick();

        // Find the account by id, slug, or label
        const account = this.accounts.find(
          (acc) =>
            acc.id === newAccount.id ||
            acc.slug === newAccount.slug ||
            acc.label === newAccount.label ||
            (acc.bankName === newAccount.bankName && acc.accountNumber === newAccount.accountNumber)
        );

        if (account) {
          this.paymentForm.account = account;
        } else if (newAccount.id) {
          // If not found by matching, try to find by id directly
          const accountById = this.accounts.find(acc => acc.id === newAccount.id);
          if (accountById) {
            this.paymentForm.account = accountById;
          }
        }
      }
    },

    // Save payment
    async savePayment() {
      // Ensure invoice_id is set from props
      if (this.type !== 'purchase' && this.invoiceId) {
        // Always update from prop to ensure we have the latest ID
        this.paymentForm.invoice_id = this.invoiceId;
      } else if (!this.paymentForm.invoice_id && this.type !== 'purchase' && this.invoiceId) {
        console.log('Fallback: Setting invoice_id from prop:', this.invoiceId);
        this.paymentForm.invoice_id = this.invoiceId;
      }

      if (!this.paymentForm.account || !this.paymentForm.account.id) {
        this.$toast.error(
          this.$t("Error"),
          this.$t("Please select an account")
        );
        return;
      }

      let formData;
      let apiEndpoint;
      let successMessage;

      if (this.type === 'purchase') {
        // Prepare form data for purchase payment
        formData = {
          selectedPurchase: {
            slug: this.purchaseSlug,
            due: this.dueAmount,
          },
          paidAmount: parseFloat(this.paymentForm.paidAmount),
          account: this.paymentForm.account,
          receiptNo: this.paymentForm.receiptNo || '',
          paymentDate: this.paymentForm.paymentDate || new Date().toISOString().slice(0, 10),
          note: this.paymentForm.note || '',
          status: this.paymentForm.status,
          isSendEmail: this.paymentForm.isSendEmail || false,
          isSendSMS: this.paymentForm.isSendSMS || false,
          payment_method_id: this.paymentForm.payment_method_id || null,
        };
        apiEndpoint = '/api/purchase-pay';
        successMessage = this.$t("Purchase payment added successfully");
      } else {
        // Determine effective Invoice ID
        // Try prop first (most reliable), then form data
        let effectiveInvoiceId = this.invoiceId;
        if (!effectiveInvoiceId && this.paymentForm.invoice_id) {
            console.log('Using invoice_id from paymentForm fallback:', this.paymentForm.invoice_id);
            effectiveInvoiceId = this.paymentForm.invoice_id;
        }

        // Validation: Check if we have an ID
        if (!effectiveInvoiceId) {
           console.error('CRITICAL: Invoice ID missing in both prop and form');
           this.$toast.error(
            this.$t("Error"),
            "System Error: Invoice ID not found. Please try refreshing or checking the invoice details."
           );
           return;
        }

        // Prepare form data for invoice payment
        formData = {
          invoice_id: effectiveInvoiceId,
          paidAmount: parseFloat(this.paymentForm.paidAmount),
          account: this.paymentForm.account,
          receiptNo: this.paymentForm.receiptNo || '',
          date: this.paymentForm.paymentDate || new Date().toISOString().slice(0, 10),
          note: this.paymentForm.note || '',
          netTotal: this.dueAmount,
          isSendEmail: this.paymentForm.isSendEmail || false,
          isSendSMS: this.paymentForm.isSendSMS || false,
          payment_method_id: this.paymentForm.payment_method_id || null,
        };
        apiEndpoint = '/api/invoices-pay';
        successMessage = this.$t("Invoice payment added successfully");
      }

      await axios
        .post(window.location.origin + apiEndpoint, formData)
        .then(() => {
          this.$toast.success(
            this.$t("Success!"),
            successMessage
          );
          this.paymentForm.reset();
          this.paymentForm.paymentDate = new Date().toISOString().slice(0, 10);
          this.paymentForm.status = 1;
          this.paymentForm.payment_method_id = null;
          // Emit payment saved event
          this.$emit('payment-saved');
          // Close modal
          this.handleClose();
        })
        .catch((error) => {
          if (error.response && error.response.status === 422 && error.response.data && error.response.data.errors) {
            const errors = error.response.data.errors;
            this.paymentForm.errors.set(errors);
            const messages = Object.values(errors).flat();
            this.$toast.error(
              this.$t('Validation Error'),
              messages.join('\n')
            );
          } else {
            this.$toast.error(
              this.$t("Error"),
              error.response?.data?.message || this.$t("Please check your input and try again.")
            );
          }
        });
    },

    // Handle close
    handleClose() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
/* Create button styling for account field */
.create-btn {
  padding: 11px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: #f8f9fa;
  border: 1px solid #E5E7EB;
  border-left: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.create-btn:hover {
  background-color: #e9ecef;
}

.create-btn i {
  color: #33a0d9;
  font-size: 18px;
}

[dir="rtl"] .create-btn {
  border-left: 1px solid #E5E7EB;
  border-right: none;
  border-radius: 0.25rem 0 0 0.25rem;
}

[dir="ltr"] .create-btn {
  border-left: none;
  border-right: 1px solid #E5E7EB;
  border-radius: 0 0.25rem 0.25rem 0;
}

/* Ensure v-select and create button align properly */
.d-flex.w-100 .v-select {
  flex: 1;
}

.d-flex.w-100 .v-select .vs__dropdown-toggle {
  border-right: none;
}

[dir="rtl"] .d-flex.w-100 .v-select .vs__dropdown-toggle {
  border-left: none;
  border-right: 1px solid #E5E7EB;
}
</style>
