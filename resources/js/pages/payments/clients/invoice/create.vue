<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'invoicePayments.index' }" class="btn btn-info">
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
                <button type="submit" class="btn btn-success" :form="'clientInvoicePaymentCreateForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form id="clientInvoicePaymentCreateForm" role="form" @submit.prevent="savePayment" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row" v-if="items">
                <div class="form-group col-md-12">
                  <label for="client">{{ $t("Client") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.client" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('client') }" name="client"
                    :placeholder="$t('Select a client')" @input="getInvoices" />
                  <has-error :form="form" field="client" />
                  <!-- Client Chart of Account Status -->
                  <div v-if="form.client" class="mt-2">
                    <div v-if="!form.client.chart_of_account_id" class="d-flex align-items-center">
                      <span class="badge badge-warning">{{ $t('Warning') }}</span>
                      <span class="ml-2">{{ $t('Client needs Chart of Account') }}</span>
                      <button type="button" class="btn btn-sm btn-outline-primary ml-3"
                        :disabled="isAutoAssigningClient"
                        @click="autoAssignClientChartOfAccount">
                        <i v-if="!isAutoAssigningClient" class="fas fa-magic"></i>
                        <i v-else class="fas fa-spinner fa-spin"></i>
                        <span class="ml-1">{{ isAutoAssigningClient ? $t('Assigning...') : $t('Auto-Assign') }}</span>
                      </button>
                    </div>
                    <div v-else class="d-flex align-items-center text-success">
                      <i class="fas fa-check-circle"></i>
                      <span class="ml-2">{{ $t('Client Chart of Account ready') }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="form.client" class="row">
                <div class="form-group col-md-4">
                  <label for="clientInvoiceTotal">{{
                    $t("Invoice Total")
                  }}</label>
                  <input id="clientInvoiceTotal" v-model="form.client.clientInvoiceTotal" type="text" class="form-control"
                    name="clientInvoiceTotal" readonly />
                </div>
                <div class="form-group col-md-4">
                  <label for="clientTotalPaid">{{
                    $t("Total Paid")
                  }}</label>
                  <input id="clientTotalPaid" v-model="form.client.clientTotalPaid" type="text" class="form-control"
                    name="clientTotalPaid" readonly />
                </div>
                <div class="form-group col-md-4">
                  <label for="clientDue">{{ $t("Total Due") }}</label>
                  <input id="clientDue" v-model="form.client.clientDue" type="text" class="form-control" name="clientDue"
                    readonly />
                </div>
              </div>
              <div class="row mb-3" v-if="form.client && invoices">
                <div class="form-group col-md-12">
                  <label for="invoice">{{ $t("Select Invoice") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.invoice" :options="invoices" label="label"
                    :class="{ 'is-invalid': form.errors.has('invoice') }" name="invoice" :placeholder="$t('Search invoice number')
                      " @input="storeInvoice(form.invoice)" />
                  <has-error :form="form" field="invoice" />
                </div>
              </div>

              <div v-if="form.errors.errors && form.errors.errors.selectedInvoices" class="col-md-11 m-auto">
                <div v-for="(msg, i) in form.errors.errors.selectedInvoices" :key="i" class="callout callout-danger">
                  <p><i class="icon fas fa-ban"></i> {{ $t(msg) }}</p>
                </div>
              </div>

              <div v-if="form.selectedInvoices" class="col-md-11 m-auto">
                <div v-for="(item, i) in form.selectedInvoices" :key="i" class="card bg-light border-dark mb-3">
                  <div class="card-header">
                    {{ item.invoiceNo }} {{ $t("Invoice Details") }}
                    <button type="button" class="btn btn-danger float-right" @click="removeItem(item)">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="form-group col-md-3">
                        <label for="invoiceNumber">{{
                          $t("Invoice No")
                        }}</label>
                        <input type="text" :id="`invoiceNumber-${++i}`" class="form-control" :value="item.invoiceNo"
                          readonly />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="invoiceTotal">{{
                          $t("Invoice Total")
                        }}</label>
                        <input type="text" :id="`invoiceTotal-${i}`" class="form-control" :value="item.invoiceTotal"
                          readonly />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="invoiceDue">{{
                          $t("Invoice Due")
                        }}</label>
                        <input type="text" :id="`invoiceDue-${i}`" class="form-control" :value="item.newDue" readonly />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="paidAmount">{{
                          $t("Paid Amount")
                        }}</label>
                        <input type="number" step="any" class="form-control" :id="`paidAmount-${i}`"
                          :placeholder="$t('Enter an amount')"
                          @change="updateArray($event.target.value, i - 1)" @keyup="
                            updateArray(
                              $event.target.value,
                              'paidAmount',
                              i - 1
                            )
                            " required min="1" :max="item.originalDue" value="1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="accounts" class="row">
                <div class="form-group col-md-6">
                  <label for="totalPayment">{{ $t("Total Payment") }}
                    <span class="required">*</span></label>
                  <input id="totalPayment" v-model="form.totalPayment" type="number" step="any" class="form-control"
                    name="totalPayment" readonly />
                </div>
                <div class="form-group col-md-6">
                  <label for="account">{{ $t("Account") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.account" :options="accounts" label="label"
                    :class="{ 'is-invalid': form.errors.has('account') }" name="account"
                    :placeholder="$t('Select an account')">
                     <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px;" />
                        {{ option.label }}
                    </template>
                  </v-select>
                  <has-error :form="form" field="account" />
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
                  <label for="status">{{ $t("Status") }}
                    <small v-if="hasInactiveInvoice" class="text-muted ml-2">({{ $t("Cannot be changed when invoice is inactive") }})</small>
                  </label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }"
                    :disabled="hasInactiveInvoice">
                    <option v-if="!hasInactiveInvoice" value="1">{{ $t("Active") }}</option>
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
                <div class="pr-5">
                  <toggle-button v-model="form.isSendEmail" :disabled="isDemoMode" />
                  {{ $t("Send Email Notification") }}
                </div>
              </div>
              <div class="form-group col-12 d-flex flex-wrap">
                <div class="pr-5">
                  <toggle-button v-model="form.isSendSMS" :disabled="isDemoMode" />
                  {{ $t("Send SMS Notification") }}
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
                  <button type="reset" class="btn btn-info" @click="form.reset()">
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
import axios from "axios";
import { mapGetters } from "vuex";
import { ToggleButton } from "vue-js-toggle-button";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Client Invoice Payment") };
  },
  components: {
    ToggleButton,
  },
  data: () => ({
    isDemoMode: window.config.isDemoMode,
    breadcrumbsCurrent: "Create Payment",
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
        name: "Invoice Payments",
        url: "invoicePayments.index",
      },
      {
        name: "Create",
        url: "",
      },
    ],
    form: new Form({
      client: "",
      selectedInvoices: [],
      totalPayment: 0,
      paymentDate: new Date().toISOString().slice(0, 10),
      note: "",
      status: 1,
      account: "",
      chequeNo: "",
      receiptNo: "",
      isSendEmail: false,
      isSendSMS: false,
    }),
    accounts: "",
    invoices: "",
    isAutoAssigningClient: false,
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
    // Check if any selected invoice has status 0 (inactive)
    hasInactiveInvoice() {
      return this.form.selectedInvoices.some(invoice => invoice.status === 0);
    },
  },
  created() {
    this.getClients();
    this.getAccounts();
  },
  mounted() {
    this.loadTemporaryData()
    this.handleQueryParams()
  },
  methods: {
    // Auto-assign Chart of Account for selected client
    async autoAssignClientChartOfAccount() {
      if (!this.form.client || !this.form.client.slug) return;
      try {
        this.isAutoAssigningClient = true;
        const { data } = await axios.post(`/api/clients/${this.form.client.slug}/auto-assign-chart-of-account`);

        const newAccountId = data.chart_of_account_id || (data.data && data.data.chart_of_account_id) || null;
        if (newAccountId) {
          // Update current form client
          this.$set(this.form.client, 'chart_of_account_id', newAccountId);

          // Also update the item in the clients list (items from vuex)
          const idx = (this.items || []).findIndex(c => c.slug === this.form.client.slug);
          if (idx !== -1) {
            this.$set(this.items, idx, { ...this.items[idx], chart_of_account_id: newAccountId });
          }

          toast.fire({
            type: 'success',
            title: this.$t('Chart of Account assigned successfully'),
          });
        } else {
          toast.fire({
            type: 'error',
            title: this.$t('Failed to assign Chart of Account'),
          });
        }
      } catch (error) {
        // Permission denied or other backend validation
        const message = error?.response?.data?.message || error?.message;
        if (message && message.toLowerCase().includes("permission")) {
          toast.fire({
            type: 'error',
            title: this.$t("Permission Denied"),
            text: this.$t("You don't have permission to assign Chart of Accounts."),
          });
        } else {
          toast.fire({
            type: 'error',
            title: this.$t('Failed to assign Chart of Account'),
            text: message,
          });
        }
        // eslint-disable-next-line no-console
        console.error('Error auto-assigning chart of account:', error);
      } finally {
        this.isAutoAssigningClient = false;
      }
    },
    // get all clients
    async getClients() {
      await this.$store.dispatch("operations/allData", {
        path: "/api/all-clients",
      });
    },

    // get invoices
    async getInvoices() {
      this.form.selectedInvoices = [];
      if (this.form.client) {
        this.form.clientBalance = this.form.client.clientTotalAdvance;
        const { data } = await axios.get(
          window.location.origin +
          "/api/client/" +
          this.form.client.slug +
          "/invoices"
        );
        this.invoices = data.invoices;
        this.form.client = data.client;
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
      }
    },

    // store item in array
    storeInvoice(invoice) {
      var index = this.form.selectedInvoices.findIndex(
        (x) => x.id == invoice.id
      );
      if (index === -1) {
        // store product
        this.form.selectedInvoices.push({
          id: invoice.id,
          slug: invoice.slug,
          invoiceNo: invoice.label,
          invoiceTotal: invoice.invoiceTotal,
          newDue: invoice.due,
          originalDue: invoice.due,
          maxAmount: invoice.due,
          paidAmount: 1,
          note: "",
          status: invoice.status, // Include invoice status
        });
        
        // Set payment status based on invoice status
        if (invoice.status === 0) {
          this.form.status = 0; // Set payment to inactive if invoice is inactive
        }
      }
      return true;
    },

    // update array
    updateArray(value, index) {
      let invoice = this.form.selectedInvoices[index];
      if (invoice && value <= invoice.maxAmount) {
        this.form.selectedInvoices[index].paidAmount = Number(value);
        invoice.newDue = Number(
          (invoice.originalDue - invoice.paidAmount).toFixed(2)
        );
      }
      this.form.selectedInvoices[index] = invoice;
      this.calculateTotal();
      return;
    },

    // remove item from array
    removeItem(item) {
      let index = this.form.selectedInvoices.indexOf(item);
      if (index > -1) {
        this.form.selectedInvoices.splice(index, 1);
      }
      this.calculateTotal();
      this.form.invoice = "";
      return;
    },

    // calculate total
    calculateTotal() {
      this.form.totalPayment = this.form.selectedInvoices.reduce(function (
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
        .post(window.location.origin + "/api/payments/invoice")
        .then(() => {
          // Clear temporary data after successful save
          this.clearTemporaryData()
          toast.fire({
            type: "success",
            title: this.$t("Invoice payment added successfully"),
          });
          this.$router.push({ name: "invoicePayments.index" });
        })
        .catch((error) => {
          // Show all validation messages when present
          if (error?.response?.status === 422 && error?.response?.data?.errors) {
            const errorsMap = error.response.data.errors
            this.form.errors.set(errorsMap)

            const messages = Object.values(errorsMap).flat()
            const combined = messages.join('\n')

            toast.fire({
              type: 'error',
              title: this.$t('Validation Error'),
              text: combined,
              timer: 8000,
              timerProgressBar: true,
            })
            return
          }

          // Prefer backend-provided general message
          const backendMessage =
            error?.response?.data?.message ||
            error?.response?.data?.error ||
            error?.message

          toast.fire({
            type: 'error',
            title: this.$t('Error'),
            text: backendMessage || this.$t('Please check your input and try again.'),
          })
        });
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        client: this.form.client,
        invoices: this.form.invoices,
        account: this.form.account,
        amount: this.form.amount,
        paymentMethod: this.form.paymentMethod,
        reference: this.form.reference,
        date: this.form.date,
        note: this.form.note,
        status: this.form.status,
        sendSms: this.form.sendSms,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('invoicePaymentTempData', JSON.stringify(tempData))
      
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('invoicePaymentTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.client = data.client || null
          this.form.invoices = data.invoices || []
          this.form.account = data.account || null
          this.form.amount = data.amount || ''
          this.form.paymentMethod = data.paymentMethod || ''
          this.form.reference = data.reference || ''
          this.form.date = data.date || ''
          this.form.note = data.note || ''
          this.form.status = data.status !== undefined ? data.status : 1
          this.form.sendSms = data.sendSms || false
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('invoicePaymentTempData')
    },

    // Handle query parameters from invoice show page
    async handleQueryParams() {
      const invoiceSlug = this.$route.query.invoice;
      const clientSlugOrId = this.$route.query.client;

      if (invoiceSlug && clientSlugOrId) {
        try {
          // Wait for clients to load
          await this.getClients();
          
          // Find the client
          const client = this.items.find(c => c.slug === clientSlugOrId || c.id == clientSlugOrId);
          
          if (client) {
            // Set the client
            this.form.client = client;
            
            // Load invoices for this client
            await this.getInvoices();
            
            // Wait a bit for the invoice list to be populated
            await this.$nextTick();
            
            // Find and select the invoice
            if (this.invoices && this.invoices.length > 0) {
              const invoice = this.invoices.find(inv => inv.slug === invoiceSlug);
              if (invoice) {
                this.form.invoice = invoice;
                this.storeInvoice(invoice);
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

/* Invoice Card Styling */
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

/* Callout Styling */
.callout {
  border-radius: 10px;
  padding: 12px 16px;
  margin-bottom: 16px;
}

.callout-danger {
  background-color: #F8D7DA;
  border: 1px solid #F5C6CB;
  color: #721C24;
}

.callout i {
  margin-right: 8px;
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

/* Text Muted */
.text-muted {
  color: #6C757D !important;
  font-size: 12px;
}

/* Small Text */
small {
  font-size: 12px;
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
</style>
