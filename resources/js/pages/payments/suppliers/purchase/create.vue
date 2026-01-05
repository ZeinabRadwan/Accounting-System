<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'purchasePayments.index' }" class="btn btn-info">
                  <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">

                    {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />

                  </template>

                  <template v-else>

                    <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">


                      {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />


                    </template>


                    <template v-else>


                      <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}


                    </template>

                  </template>
                </router-link>
                <button type="submit" class="btn btn-success" :form="'supplierPurchasePaymentCreateForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form id="supplierPurchasePaymentCreateForm" role="form" @submit.prevent="savePayment" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row" v-if="items">
                <div class="form-group col-md-12">
                  <label for="supplier">{{ $t("Supplier")
                  }}<span class="required">*</span></label>
                  <v-select v-model="form.supplier" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('supplier') }" name="supplier" :placeholder="$t('Select a supplier')"
                    @input="getPurchases" />
                  <has-error :form="form" field="supplier" />
                  <!-- Supplier Chart of Account Status -->
                  <div class="supplier-status mt-2" v-if="form.supplier">
                    <div v-if="!form.supplier.chart_of_account_id" class="supplier-warning">
                      <i class="fas fa-exclamation-triangle text-warning"></i>
                      <span class="ml-2">{{ $t('Supplier needs Chart of Account') }}</span>
                      <button 
                        type="button" 
                        class="btn btn-sm btn-outline-warning ml-2"
                        @click="autoAssignSupplierChartOfAccount"
                        :disabled="isAutoAssigningSupplier"
                      >
                        <i :class="isAutoAssigningSupplier ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                        {{ isAutoAssigningSupplier ? $t('Assigning...') : $t('Auto-Assign') }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="form.supplier" class="row">
                <div class="form-group col-md-4">
                  <label for="purchaseTotal">{{
                    $t("Purchase Total")
                  }}</label>
                  <input id="purchaseTotal" v-model="form.supplier.purchaseTotal" type="text" class="form-control"
                    name="purchaseTotal" readonly />
                </div>
                <div class="form-group col-md-4">
                  <label for="totalPaid">{{ $t("Total Paid") }}</label>
                  <input id="totalPaid" v-model="form.supplier.purchaseTotalPaid" type="text" class="form-control"
                    name="totalPaid" readonly />
                </div>
                <div class="form-group col-md-4">
                  <label for="purchaseDue">{{ $t("Total Due") }}</label>
                  <input id="purchaseDue" v-model="form.supplier.purchaseDue" type="text" class="form-control"
                    name="purchaseDue" readonly />
                </div>
              </div>
              <div class="row mb-3" v-if="form.supplier && purchases">
                <div class="form-group col-md-12">
                  <label for="purchase">{{ $t("Select Purchase")
                  }}<span class="required">*</span></label>
                  <v-select v-model="form.purchase" :options="purchases" label="purchaseNo"
                    :class="{ 'is-invalid': form.errors.has('purchase') }" name="purchase" :placeholder="$t('Search purchase number')
                      " @input="storePurchase(form.purchase)" />
                  <has-error :form="form" field="purchase" />
                </div>
              </div>

              <div v-if="form.selectedPurchases" class="col-md-11 m-auto">
                <div v-for="(item, i) in form.selectedPurchases" :key="i" class="card bg-light border-dark mb-3">
                  <div class="card-header">
                    {{ item.purchaseNo }}
                    {{ $t("Purchase Details") }}
                    <button type="button" class="btn btn-danger float-right" @click="removeItem(item)">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="form-group col-md-3">
                        <label for="purchaseNumber">{{
                          $t("Purchase No")
                        }}</label>
                        <input type="text" :id="`purchaseNumber-${++i}`" class="form-control" :value="item.purchaseNo"
                          readonly />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="purchaseTotal">{{
                          $t("Total")
                        }}</label>
                        <input type="text" :id="`purchaseTotal-${i}`" class="form-control" :value="item.purchaseTotal"
                          readonly />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="purchaseDue">{{ $t("Due") }}</label>
                        <input type="text" :id="`purchaseDue-${i}`" class="form-control" :value="item.newDue" readonly />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="paidAmount">{{ $t("Paid Amount")
                        }}<span class="required">*</span></label>
                        <input type="number" step="any" class="form-control" :id="`paidAmount-${i}`"
                          :placeholder="$t('Enter an amount')"
                          @change="updateArray($event.target.value, i - 1)"
                          @keyup="updateArray($event.target.value, i - 1)" :value="item.paidAmount" required min="1"
                          :max="item.originalDue" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="accounts" class="row">
                <div class="form-group col-md-3">
                  <label for="finalTotal">{{ $t("Total Payment") }}
                  </label>
                  <input id="finalTotal" v-model="form.finalTotal" type="number" step="any" class="form-control"
                    name="finalTotal" readonly />
                </div>
                <div class="form-group col-md-6">
                  <label for="account">{{ $t("Account") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.account" :options="accounts" label="label"
                    :class="{ 'is-invalid': form.errors.has('account') }" name="account"
                    :placeholder="$t('Select an account')" @input="updateBalance">
                     <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px;" />
                        {{ option.label }}
                    </template>
                  </v-select>
                  <has-error :form="form" field="account" />
                </div>
                <div class="form-group col-md-3">
                  <label for="availableBalance">{{
                    $t("Available Balance")
                  }}</label>
                  <input id="availableBalance" v-model="form.availableBalance" type="number" step="any"
                    class="form-control" :class="{
                      'is-invalid': form.errors.has('availableBalance'),
                    }" name="availableBalance" readonly />
                  <has-error :form="form" field="availableBalance" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="paymentMethod">{{ $t("Payment Method") }}</label>
                  <select id="paymentMethod" v-model="form.payment_method_id" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('payment_method_id') }"
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
                  <has-error :form="form" field="payment_method_id" />
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
                <!-- <div class="form-group col-md-3">
                  <label for="chequeNo">{{ $t("Cheque No") }}</label>
                  <input type="text" v-model="form.chequeNo" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" id="chequeNo"
                    :placeholder="$t('Enter a cheque number')" />
                  <has-error :form="form" field="chequeNo" />
                </div> -->
                <div class="form-group col-md-3">
                  <label for="receiptNo">{{ $t("Receipt No") }}</label>
                  <input type="text" v-model="form.receiptNo" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('receiptNo') }" id="receiptNo"
                    :placeholder="$t('Enter a receipt no')" />
                  <has-error :form="form" field="receiptNo" />
                </div>
                <div class="form-group col-md-3">
                  <label for="paymentDate">{{
                    $t("Payment Date")
                  }}</label>
                  <input id="paymentDate" v-model="form.paymentDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paymentDate') }" name="paymentDate" />
                  <has-error :form="form" field="paymentDate" />
                </div>
                <div class="form-group col-md-3">
                  <label for="status">{{ $t("Status") }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t("Active") }}</option>
                    <option value="0">{{ $t("Inactive") }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>
              <div class="form-group">
                <label for="note">{{ $t("Note") }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
              <div class="form-group col-12 d-flex flex-wrap">
                <div class="pr-5 d-flex align-items-center">
                  <toggle-button 
                    v-model="form.isSendEmail" 
                    :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.email_configured" />
                  <span class="ml-3">{{ $t("Send To Email") }}</span>
                  <span v-if="!communicationConfig.loading && !communicationConfig.email_configured" 
                        class="ml-2 text-muted small">
                    ({{ $t("Email not configured") }})
                  </span>
                </div>
              </div>
              <div class="form-group col-12 d-flex flex-wrap">
                <div class="pr-5 d-flex align-items-center">
                  <toggle-button 
                    v-model="form.isSendSMS" 
                    :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.sms_configured" />
                  <span class="ml-3">{{ $t("Send To SMS") }}</span>
                  <span v-if="!communicationConfig.loading && !communicationConfig.sms_configured" 
                        class="ml-2 text-muted small">
                    ({{ $t("SMS not configured") }})
                  </span>
                </div>
              </div>
            </div>

            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                  <v-button :loading="form.busy" type="success">
                    <i class="fas fa-save" /> {{ $t("Save") }}
                  </v-button>
                  <button type="reset" class="btn btn-info ml-2" @click="form.reset()">
                    <i class="fas fa-power-off" /> {{ $t("Reset") }}
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
import Form from "vform";
import axios from 'axios'
import { mapGetters } from "vuex";
import { ToggleButton } from "vue-js-toggle-button";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Supplier Purchase Payment") };
  },
  components: {
    ToggleButton,
  },
  data: () => ({
    isDemoMode: window.config.isDemoMode,
    breadcrumbsCurrent:
      "Create Payment",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Payments",
        url: "",
      },
      {
        name: "Purchase Payments",
        url: "purchasePayments.index",
      },
      {
        name: "Create",
        url: "",
      },
    ],
    form: new Form({
      supplier: "",
      selectedPurchases: [],
      account: "",
      availableBalance: 0,
      total: 0,
      finalTotal: 0,
      chequeNo: "",
      receiptNo: "",
      note: "",
      status: 1,
      paymentDate: new Date().toISOString().slice(0, 10),
      isSendEmail: false,
      isSendSMS: false,
      payment_method_id: null,
    }),
    accounts: "",
    purchases: "",
    isAutoAssigningSupplier: false,
    paymentMethods: [],
    loadingPaymentMethods: false,
    // Communication configuration status
    communicationConfig: {
      email_configured: false,
      sms_configured: false,
      loading: true,
    },
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
    // Get analytical account for selected payment method
    selectedPaymentMethodAnalyticalAccount() {
      if (!this.form.payment_method_id || !this.paymentMethods || this.paymentMethods.length === 0) {
        return null;
      }
      const selectedMethod = this.paymentMethods.find(method => method.id == this.form.payment_method_id);
      if (selectedMethod && selectedMethod.analytical_account) {
        return selectedMethod.analytical_account;
      }
      return null;
    },
  },
  created() {
    this.getSuppliers();
    this.getAccounts();
    this.getPaymentMethods();
    this.loadCommunicationConfigStatus();
  },
  mounted() {
    this.handleQueryParams();
  },
  methods: {
    // get all suppliers
    async getSuppliers() {
      await this.$store.dispatch("operations/allData", {
        path: "/api/all-suppliers",
      });
    },

    // Auto-assign Chart of Account for selected supplier
    async autoAssignSupplierChartOfAccount() {
      if (!this.form.supplier || !this.form.supplier.slug || this.isAutoAssigningSupplier) {
        return
      }
      
      this.isAutoAssigningSupplier = true
      
      try {
        // Store the current supplier slug before making the API call
        const currentSupplierSlug = this.form.supplier.slug
        
        const response = await axios.post(`/api/suppliers/${this.form.supplier.slug}/auto-assign-chart-of-account`)
        
        if (response.data.success) {
          // Update the supplier data with new chart of account
          const newAccountId = response.data.chart_of_account_id || (response.data.data && response.data.data.chart_of_account_id) || null
          if (newAccountId) {
            this.form.supplier.chart_of_account_id = newAccountId
            // Also update the option in items list to keep state consistent when switching suppliers
            const idx = (this.items || []).findIndex(i => i.slug === currentSupplierSlug)
            if (idx !== -1) {
              this.$set(this.items[idx], 'chart_of_account_id', newAccountId)
            }
          }
          
          // Force Vue to re-render the component to update the UI
          this.$nextTick(() => {
            this.$forceUpdate()
          })
          
          // Show success message
          toast.fire({
            type: 'success',
            title: this.$t('Chart of Account assigned successfully'),
          })
        } else {
          toast.fire({
            type: 'error',
            title: this.$t('Failed to assign Chart of Account'),
            text: response.data.message || this.$t('Please try again or assign manually')
          })
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error auto-assigning chart of account:', error)
        
        // Handle different types of errors
        if (error.response?.status === 400) {
          toast.fire({
            type: 'error',
            title: this.$t('Invalid Request'),
            text: error.response?.data?.message || this.$t('Please check the supplier data and try again')
          })
        } else if (error.response?.status === 403 || error.response?.status === 401) {
          toast.fire({
            type: 'error',
            title: this.$t('Permission Denied'),
            text: this.$t("You don't have permission to assign Chart of Accounts.")
          })
        } else {
          toast.fire({
            type: 'error',
            title: this.$t('Failed to assign Chart of Account'),
            text: error.response?.data?.message || error.message || this.$t('An error occurred. Please try again.')
          })
        }
      } finally {
        this.isAutoAssigningSupplier = false
      }
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
        this.communicationConfig.email_configured = false;
        this.communicationConfig.sms_configured = false;
        this.communicationConfig.loading = false;
      }
    },

    // get purchases
    async getPurchases() {
      this.form.selectedPurchases = [];
      if (this.form.supplier) {
        // Preserve chart_of_account_id before updating supplier data
        const currentChartOfAccountId = this.form.supplier.chart_of_account_id;
        const { data } = await axios.get(
          window.location.origin + "/api/supplier/" + this.form.supplier.slug + "/purchases"
        );
        this.purchases = data.purchases;
        // Merge supplier data while preserving chart_of_account_id
        this.form.supplier = {
          ...data.supplier,
          chart_of_account_id: data.supplier.chart_of_account_id || currentChartOfAccountId
        };
      }
    },

    // get accounts
    async getAccounts() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-accounts"
      );
      this.accounts = data.data;
      // assign default account
      if (this.accounts && this.accounts.length > 0) {
        let defaultAccountSlug = this.appInfo.defaultAccountSlug;
        this.form.account = this.accounts.find(
          (account) => account.slug == defaultAccountSlug
        );
        this.updateBalance();
      }
    },

    // get payment methods
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
        toast.fire({
          type: 'error',
          title: this.$t('Error'),
          text: this.$t('Failed to load payment methods'),
        });
      } finally {
        this.loadingPaymentMethods = false;
      }
    },

    // update available balance
    updateBalance() {
      this.form.availableBalance = 0;
      if (this.form.account) {
        this.form.availableBalance = this.form.account.availableBalance;
      }
      return;
    },

    // store item in array
    storePurchase(purchase) {
      var index = this.form.selectedPurchases.findIndex(
        (x) => x.id == purchase.id
      );
      if (index === -1) {
        // store product
        this.form.selectedPurchases.push({
          id: purchase.id,
          slug: purchase.slug,
          purchaseNo: purchase.purchaseNo,
          purchaseTotal: purchase.purchaseTotal,
          newDue: purchase.due,
          originalDue: purchase.due,
          maxAmount: purchase.due,
          paidAmount: 1,
        });
      }
      return;
    },

    // update array
    updateArray(value, index) {
      let purchase = this.form.selectedPurchases[index];
      if (purchase && value <= purchase.maxAmount) {
        purchase.paidAmount = Number(value);
        purchase.newDue = Number(
          (purchase.originalDue - purchase.paidAmount).toFixed(2)
        );
      }
      this.form.selectedPurchases[index] = purchase;
      this.calculateTotal();
      return;
    },

    // remove item from array
    removeItem(item) {
      let index = this.form.selectedPurchases.indexOf(item);
      if (index > -1) {
        this.form.selectedPurchases.splice(index, 1);
      }
      this.calculateTotal();
      this.form.purchase = "";
      return;
    },

    // calculate total
    calculateTotal() {
      // total
      this.form.finalTotal = this.form.selectedPurchases.reduce(function (
        prev,
        cur
      ) {
        return prev + cur.paidAmount;
      },
        0);
      return;
    },

    // save payment
    async savePayment() {
      await this.form
        .post(window.location.origin + "/api/payments/purchase")
        .then(() => {
          toast.fire({
            type: "success",
            title: this.$t("Supplier payment added successfully"),
          });
          this.$router.push({ name: "purchasePayments.index" });
        })
        .catch(() => {
          toast.fire({ type: "error", title: this.$t("Please check your input and try again.") });
        });
    },

    // Handle query parameters from purchase show page
    async handleQueryParams() {
      const purchaseSlug = this.$route.query.purchase;
      const supplierSlug = this.$route.query.supplier;

      if (purchaseSlug && supplierSlug) {
        try {
          // Wait for suppliers to load
          await this.getSuppliers();
          
          // Find the supplier
          const supplier = this.items.find(s => s.slug === supplierSlug);
          
          if (supplier) {
            // Set the supplier
            this.form.supplier = supplier;
            
            // Load purchases for this supplier
            await this.getPurchases();
            
            // Wait a bit for the purchase list to be populated
            await this.$nextTick();
            
            // Find and select the purchase
            if (this.purchases && this.purchases.length > 0) {
              const purchase = this.purchases.find(p => p.slug === purchaseSlug);
              if (purchase) {
                this.form.purchase = purchase;
                this.storePurchase(purchase);
              }
            }
          }
        } catch (error) {
          console.error('Error handling query params:', error);
        }
      }
    },
  },
};
</script>

<style scoped>
/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}

/* Header buttons styling */
.header-buttons {
  margin-bottom: 15px;
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

/* Form Control Styling */
.form-control {
  background: #fff !important;
  border: 1px solid #E5E7EB;
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

.btn-danger {
  background: #DC3545 !important;
  color: white !important;
  padding: 8px 12px !important;
  border-radius: 8px !important;
  border: none !important;
  font-weight: 500;
}

.btn-danger:hover {
  background: #C82333 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(220, 53, 69, 0.3);
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

/* Purchase Card Styling */
.bg-light {
  background-color: #F8F9FA !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  margin-bottom: 15px;
}

.bg-light .card-header {
  background-color: #E9ECEF !important;
  border-bottom: 1px solid #DEE2E6;
  padding: 12px 16px;
  border-radius: 10px 10px 0 0;
  font-weight: 600;
  color: #495057;
}

.bg-light .card-body {
  padding: 16px;
}

/* Toggle Button Styling */
.d-flex {
  display: flex !important;
  align-items: center;
}

.pr-5 {
  padding-right: 3rem !important;
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
  
  .pr-5 {
    padding-right: 1rem !important;
  }
}

.supplier-status {
  font-size: 13px;
}

.supplier-warning {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}
</style>
