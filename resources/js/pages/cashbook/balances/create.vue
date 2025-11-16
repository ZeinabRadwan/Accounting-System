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
                <router-link :to="{ name: 'balances.index' }" class="btn btn-info">
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
                <button type="button" class="btn btn-success" @click="saveAdjustment" :title="$t('Save Temporarily')">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="saveAdjustment" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="account">{{ $t("Bank Account") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.account" :options="items" label="label"
                    :class="{ 'is-invalid': form.errors.has('account') || bankAccountError }" name="account"
                    :placeholder="$t('Select a bank account')">
                     <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px;" />
                        {{ option.label }}
                    </template>
                  </v-select>
                  <has-error :form="form" field="account" />
                  <div v-if="bankAccountError" class="invalid-feedback d-block">
                    {{ bankAccountError }}
                  </div>
                </div>
                <div class="form-group col-md-6" v-if="chartOfAccounts && chartOfAccounts.length > 0">
                  <label for="secondAccount">{{ $t("Account") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.secondAccount" :options="chartOfAccounts" label="name"
                    :class="{ 'is-invalid': form.errors.has('secondAccount') }" name="secondAccount"
                    :placeholder="$t('Select account for journal entry')">
                    <template slot="option" slot-scope="option">
                      <div>
                        <strong>{{ option.name }}</strong>
                        <br>
                        <small class="text-muted">{{ option.code }} - {{ option.type }}</small>
                      </div>
                    </template>
                  </v-select>
                  <has-error :form="form" field="secondAccount" />
                </div>
              </div>
              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="type">{{ $t("Type") }}</label>
                  <select id="type" v-model="form.type" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('type') }">
                    <option value="1">
                      {{ $t("Add Balance") }}
                    </option>
                    <option value="0">
                      {{ $t("Remove Balance") }}
                    </option>
                  </select>
                  <has-error :form="form" field="type" />
                </div>
              </div>
              <div class="row" v-if="form.account">
                <div class="form-group col-md-6">
                  <label for="availableAmount">{{
                    $t("Available Balance")
                  }}</label>
                  <input id="availableAmount" v-model="form.account.availableBalance" type="number" step="any"
                    class="form-control" name="availableAmount" readonly />
                </div>
                <div class="form-group col-md-6">
                  <label for="amount">{{ $t("Amount") }}
                    <span class="required">*</span></label>
                  <input id="amount" v-model="form.amount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('amount') }" name="amount"
                    :placeholder="$t('Enter an amount')"
                    :max="form.type == 0 ? form.account.availableBalance : ''" />
                  <has-error :form="form" field="amount" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="date">{{ $t("Date") }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div class="form-group col-md-6">
                  <label for="status">{{ $t("Status") }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">
                      {{ $t("Active") }}
                    </option>
                    <option value="0">
                      {{ $t("Inactive") }}
                    </option>
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
import { mapGetters } from "vuex";
export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Adjustment") };
  },
  data: () => ({
    form: new Form({
      account: null,
      type: 1,
      amount: "",
      date: new Date().toISOString().slice(0, 10),
      note: "",
      status: 1,
      secondAccount: null,
    }),
    loading: true,
    chartOfAccounts: [],
    bankAccountError: null,
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
    breadcrumbs() {
      return [
        {
          name: this.$t("Dashboard"),
          url: "home",
        },
        {
          name: this.$t("Cashbook"),
          url: "",
        },
        {
          name: this.$t("Adjustments"),
          url: "balances.index",
        },
        {
          name: this.$t("Create"),
          url: "",
        },
      ];
    },
    breadcrumbsCurrent() {
      return this.$t("Create Adjustment");
    },
  },
  watch: {
    'form.account'() {
      // Clear bank account error when user changes the account
      this.bankAccountError = null;
    },
  },
  created() {
    this.getAccounts();
    this.getChartOfAccounts();
  },
  mounted() {
    this.loadTemporaryData()
  },
  methods: {
    // get all accounts
    async getAccounts() {
      await this.$store.dispatch("operations/allData", {
        path: "/api/all-accounts",
      });
      // assign default account
      if (this.items && this.items.length > 0) {
        let defaultAccountSlug = this.appInfo.defaultAccountSlug;
        this.form.account = this.items.find(
          (account) => account.slug == defaultAccountSlug
        );
      }
    },
    // get chart of accounts
    async getChartOfAccounts() {
      try {
        const response = await this.$http.get('/api/accounts/chart-of-accounts');
        
        if (response.data && response.data.success) {
          this.chartOfAccounts = response.data.data || [];
        } else {
          this.chartOfAccounts = [];
        }
      } catch (error) {
        console.error('Error loading chart of accounts:', error);
        toast.fire({
          type: "error",
          title: this.$t("Failed to load chart of accounts")
        });
      }
    },
    // save adjustment
    async saveAdjustment() {
      // Validate that second account is selected
      if (!this.form.secondAccount) {
        toast.fire({
          type: "error",
          title: this.$t("Please select a second account")
        });
        return;
      }

      await this.form
        .post(window.location.origin + "/api/balances")
        .then(() => {
          toast.fire({
            type: "success",
            title: this.$t("Adjustment added successfully"),
          });
          this.$router.push({ name: "balances.index" });
        })
        .catch((error) => {
          const resp = error?.response?.data;
          let firstValidationMessage = null;
          if (resp?.errors && typeof resp.errors === 'object') {
            const allErrors = Object.values(resp.errors).flat().filter(Boolean);
            if (allErrors.length > 0) {
              firstValidationMessage = allErrors[0];
            }
          }

          // Prefer first validation message, fallback to server message, then generic
          const errorMessage = firstValidationMessage || resp?.message || this.$t("Please check your input and try again.");

          // Bank account COA validation shown inline when applicable
          if (typeof errorMessage === 'string' && errorMessage.includes("not connected to any Chart of Account")) {
            this.bankAccountError = errorMessage;
          } else {
            this.bankAccountError = null;
          }

          toast.fire({ type: "error", title: errorMessage });
        });
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        account: this.form.account,
        secondAccount: this.form.secondAccount,
        amount: this.form.amount,
        date: this.form.date,
        note: this.form.note,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('balanceTempData', JSON.stringify(tempData))
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('balanceTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.account = data.account || null
          this.form.secondAccount = data.secondAccount || null
          this.form.amount = data.amount || ''
          this.form.date = data.date || new Date().toISOString().slice(0, 10)
          this.form.note = data.note || ''
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('balanceTempData')
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

/* Text Muted Styling */
.text-muted {
  color: #6C757D !important;
  font-size: 12px;
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
