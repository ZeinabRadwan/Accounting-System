<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-12 col-xl-3">
        <SettingsSidebar />
      </div>
      <div class="col-12 col-xl-9">
        <form
          role="form"
          @submit.prevent="saveType"
          @keydown="form.onKeydown($event)"
        >
          <div class="card">
            <div class="card-header setings-header">
              <div class="col-xl-4 col-4">
                <h3 class="card-title">
                  {{ $t("Create a Tax rate") }}
                </h3>
              </div>
              <div class="col-xl-8 col-8 float-right text-right">
                <router-link
                  :to="{ name: 'vatRates.index' }"
                  class="btn btn-info float-right"
                >
                  <i class="fas fa-long-arrow-alt-left" />
                  {{ $t("Back") }}
                </router-link>
              </div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="isGroupTax">{{ $t("Is Group Tax?") }}</label>
                <select
                  id="isGroupTax"
                  v-model="form.isGroupTax"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('isGroupTax') }"
                >
                  <option value="1">{{ $t("Yes") }}</option>
                  <option value="0">{{ $t("No") }}</option>
                </select>
                <has-error :form="form" field="isGroupTax" />
              </div>

              <div class="form-group">
                <label for="name"
                  >{{ $t("Name") }}
                  <span class="required">*</span></label
                >
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('name') }"
                  name="name"
                  :placeholder="$t('Enter a name')"
                />
                <has-error :form="form" field="name" />
              </div>
              <div class="form-group">
                <label for="code"
                  >{{ $t("Short Code") }}
                  <span class="required">*</span></label
                >
                <input
                  id="code"
                  v-model="form.code"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('code') }"
                  name="code"
                  :placeholder="$t('Enter a code')"
                />
                <has-error :form="form" field="code" />
              </div>

              <div v-if="form.isGroupTax == true">
                <div v-if="taxes" class="form-group">
                  <label for="groupTaxItem"
                    >{{ $t("Select Tax") }}
                    <span class="required">*</span></label
                  >
                  <v-select
                    multiple
                    v-model="form.groupTaxItem"
                    :options="taxes"
                    label="code"
                    :class="{ 'is-invalid': form.errors.has('groupTaxItem') }"
                    name="groupTaxItem"
                    :placeholder="$t('Select a tax')"
                  />
                  <has-error :form="form" field="groupTaxItem" />
                </div>
              </div>

              <div class="form-group">
                <label for="rate"
                  >{{ $t("Rate(Calculated in %)") }}
                  <span class="required">*</span></label
                >
                <input
                  id="rate"
                  v-model="form.rate"
                  type="number"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('rate') }"
                  name="rate"
                  step="any"
                  :placeholder="$t('Enter a rate')"
                  :disabled="form.isGroupTax == true"
                />
                <has-error :form="form" field="rate" />
              </div>

              <div class="form-group">
                <label for="status">{{ $t("Status") }}</label>
                <select
                  id="status"
                  v-model="form.status"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('status') }"
                >
                  <option value="1">{{ $t("Active") }}</option>
                  <option value="0">{{ $t("Inactive") }}</option>
                </select>
                <has-error :form="form" field="status" />
              </div>

              <div class="form-group">
                <label for="note">{{ $t("Note") }}</label>
                <textarea
                  id="note"
                  v-model="form.note"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }"
                  :placeholder="$t('Write your note here!')"
                />
                <has-error :form="form" field="note" />
              </div>

              <!-- Chart of Account Connections -->
              <div class="form-group">
                <label for="sales_vat_account_id">{{ $t("Sales VAT Account") }}</label>
                <v-select
                  v-model="form.sales_vat_account_id"
                  :options="salesVatAccounts"
                  label="name"
                  :class="{ 'is-invalid': form.errors.has('sales_vat_account_id') }"
                  name="sales_vat_account_id"
                  :placeholder="$t('Select Sales VAT Account')"
                  :reduce="option => option.id"
                >
                  <template #option="{ name, code, type }">
                    <div>
                      <strong>{{ name }}</strong>
                      <br>
                      <small class="text-muted">{{ code }} - {{ type }}</small>
                    </div>
                  </template>
                </v-select>
                <has-error :form="form" field="sales_vat_account_id" />
                <small class="form-text text-muted">
                  {{ $t("This account will be credited when VAT is collected on sales") }}
                </small>
              </div>

              <div class="form-group">
                <label for="purchase_vat_account_id">{{ $t("Purchase VAT Account") }}</label>
                <v-select
                  v-model="form.purchase_vat_account_id"
                  :options="purchaseVatAccounts"
                  label="name"
                  :class="{ 'is-invalid': form.errors.has('purchase_vat_account_id') }"
                  name="purchase_vat_account_id"
                  :placeholder="$t('Select Purchase VAT Account')"
                  :reduce="option => option.id"
                >
                  <template #option="{ name, code, type }">
                    <div>
                      <strong>{{ name }}</strong>
                      <br>
                      <small class="text-muted">{{ code }} - {{ type }}</small>
                    </div>
                  </template>
                </v-select>
                <has-error :form="form" field="purchase_vat_account_id" />
                <small class="form-text text-muted">
                  {{ $t("This account will be debited when VAT is paid on purchases") }}
                </small>
              </div>
            </div>
            <div class="card-footer">
              <v-button :loading="form.busy" class="btn btn-success">
                <i class="fas fa-save" /> {{ $t("Save") }}
              </v-button>
              <button
                type="reset"
                class="btn btn-secondary float-right"
                @click="form.reset()"
              >
                <i class="fas fa-power-off" /> {{ $t("Reset") }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
import axios from "axios";
export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Tax Rate") };
  },

  watch: {
    "form.groupTaxItem": {
      handler(newVal) {
        if (this.form.isGroupTax) {
          this.calculateGroupTaxRate();
        }
      },
      deep: true,
    },
    "form.isGroupTax": {
      handler(newVal) {
        if (newVal) {
          this.form.rate = "";
          this.form.groupTaxItem = [];
        }
      },
    },
  },

  data: () => ({
    breadcrumbsCurrent: "Create Tax Rate",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Setup",
        url: "setup.index",
      },
      {
        name: "Tax Rates",
        url: "vatRates.index",
      },
      {
        name: "Create",
        url: "",
      },
    ],
    form: new Form({
      name: "",
      note: "",
      groupTaxItem: [],
      isGroupTax: 0,
      status: 1,
      code: "",
      rate: "",
      sales_vat_account_id: "",
      purchase_vat_account_id: "",
    }),
    taxes: [],
    salesVatAccounts: [],
    purchaseVatAccounts: [],
    loading: true,
  }),
  async created() {
    await this.getVatAccounts();
    await this.getTaxes();
  },
  methods: {
    // get all taxes
    async getTaxes() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-vat-rates"
      );
      this.taxes = data.data;
    },

    calculateGroupTaxRate() {
      if (this.form.groupTaxItem.length > 0) {
        this.form.rate = this.form.groupTaxItem.reduce((total, tax) => {
          return total + tax.rate;
        }, 0);
      } else {
        this.form.rate = "";
      }
    },

    // save category
    async saveType() {
      await this.form
        .post(window.location.origin + "/api/vat-rates")
        .then(() => {
          toast.fire({
            type: "success",
            title: this.$t("Tax Rate added successfully"),
          });
          this.$router.push({ name: "vatRates.index" });
        })
        .catch(() => {
          toast.fire({
            type: "error",
            title: this.$t("Opps...something went wrong"),
          });
        });
    },

    async getVatAccounts() {
      try {
        const { data } = await axios.get(
          window.location.origin + "/api/vat-rates/chart-of-accounts"
        );
        console.log('VAT accounts API response:', data);
        this.salesVatAccounts = data.data.sales_vat_accounts || [];
        this.purchaseVatAccounts = data.data.purchase_vat_accounts || [];
        console.log('Sales VAT accounts:', this.salesVatAccounts);
        console.log('Purchase VAT accounts:', this.purchaseVatAccounts);
      } catch (error) {
        console.error('Error loading VAT chart of accounts:', error);
        // Fallback to default accounts if API fails
        this.salesVatAccounts = [
          { id: null, name: 'Sales VAT Payable', code: '2210', type: 'Liability' }
        ];
        this.purchaseVatAccounts = [
          { id: null, name: 'Purchase VAT Receivable', code: '1210', type: 'Asset' }
        ];
      }
    },
  },
};
</script>
