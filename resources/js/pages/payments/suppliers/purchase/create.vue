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
              <div class="btn-group c-w-100">
                <router-link :to="{ name: 'purchasePayments.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
                </router-link>
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
                    :class="{ 'is-invalid': form.errors.has('supplier') }" name="supplier" placeholder="Select a supplier"
                    @input="getPurchases" />
                  <has-error :form="form" field="supplier" />
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
                <div class="form-group col-md-3">
                  <label for="chequeNo">{{ $t("Cheque No") }}</label>
                  <input type="text" v-model="form.chequeNo" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" id="chequeNo"
                    :placeholder="$t('Enter a cheque number')" />
                  <has-error :form="form" field="chequeNo" />
                </div>
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
                <div class="form-group row display-per-page">
                  <v-button :loading="form.busy" class="btn btn-success">
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
    }),
    accounts: "",
    purchases: "",
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
  },
  created() {
    this.getSuppliers();
    this.getAccounts();
  },
  methods: {
    // get all suppliers
    async getSuppliers() {
      await this.$store.dispatch("operations/allData", {
        path: "/api/all-suppliers",
      });
    },

    // get purchases
    async getPurchases() {
      this.form.selectedPurchases = [];
      if (this.form.supplier) {
        const { data } = await axios.get(
          window.location.origin + "/api/supplier/" + this.form.supplier.slug + "/purchases"
        );
        this.purchases = data.purchases;
        this.form.supplier = data.supplier;
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
          toast.fire({ type: "error", title: this.$t("Opps...something went wrong") });
        });
    },
  },
};
</script>

<style scoped>
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
</style>
