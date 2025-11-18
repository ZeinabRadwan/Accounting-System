<template>
  <div>
    <div class="card">
      <div class="card-header">
        <!-- breadcrumbs Start -->
        <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
        <!-- breadcrumbs end -->
        <h3 class="card-title">{{ $t('Filters') }}</h3>
        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-card-widget="collapse">
            <i class="fas fa-minus"></i>
          </button>
        </div>
      </div>
      <!-- form start -->
      <form role="form" @submit.prevent="getReportData" @keydown="form.onKeydown($event)">
        <div class="card-body">
          <div class="row">
            <div class="form-group col-md-6">
              <label for="month"> {{ $t('Month') }} </label>
              <select id="month" v-model="form.month" class="form-control"
                :class="{ 'is-invalid': form.errors.has('month') }">
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
               <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <has-error :form="form" field="month" />
            </div>
            <div class="form-group col-md-6">
              <label for="year">{{ $t('Year') }}</label>
              <select id="year" v-model="form.year" class="form-control"
                :class="{ 'is-invalid': form.errors.has('year') }">
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
              </select>
              <has-error :form="form" field="year" />
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="form-group btn-group c-w-100">
                <button type="submit" class="btn btn-primary">
                  <i class="fas fa-search"></i>
                  {{ $t('View Report') }}
                </button>
                <button type="button" class="btn btn-secondary ml-2" @click="saveTemporary">
                  <i class="fas fa-save"></i> {{ $t('Save Filters') }}
                </button>
                <button type="reset" class="btn btn-secondary ml-2" @click="form.reset()">
                  <i class="fas fa-undo"></i> {{ $t('Reset') }}
                </button>
                <button 
                  v-if="reportInfo" 
                  @click="downloadPDF" 
                  v-tooltip="$t('Export to PDF')" 
                  class="btn export-pdf-btn ml-2"
                >
                  <i class="fas fa-file-export"></i>
                </button>
                <button 
                  v-if="reportInfo" 
                  @click="previewPDF" 
                  v-tooltip="$t('Preview')" 
                  class="btn preview-btn ml-2"
                >
                  <i class="fas fa-eye"></i>
                </button>
                <a 
                  v-if="reportInfo" 
                  :href="printTemplateUrl" 
                  target="_blank" 
                  class="btn print-btn ml-2"
                >
                  <i class="fas fa-print"></i>  
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div v-if="reportInfo" class="card">
      <div class="card-header">
        <h3 class="card-title">{{ $t('Summary Report') }}</h3>
      </div>
      <div class="card-body position-relative">
        <div v-if="loading" class="overlay">
          <i class="fas fa-2x fa-sync-alt fa-spin"></i>
        </div>
        <div class="row invoice-info">
          <div class="m-auto invoice-col">
            <CompanyInfo class="text-center" />
          </div>
        </div>
        <div class="row mt-3 position-relative">
          <div class="table-responsive table-custom col-xl-10 m-auto">
            <table class="table account-statement-table">
              <thead>
                <tr class="success text-center">
                  <th colspan="3">
                    <h5>
                      {{ $t("Monthly Summary") }}:
                      {{ reportInfo.monthName }}, {{ reportInfo.year }}<br />
                    </h5>
                  </th>
                </tr>
              </thead>
              <thead>
                  <th>{{ $t("#") }}</th>
                  <th>{{ $t("Particulars") }}</th>
                  <th>{{ $t("Balance") }}</th>
              </thead>
              <thead>
                <tr>
                  <th colspan="3">{{ $t("Opening Balance") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, i) in reportInfo.openingBalances" :key="i">
                  <td>{{ ++i }}</td>
                  <td>{{ data.bank_name }} [{{ data.account_number }}]</td>
                  <td>{{ data.current_balance}} <span class="saudi-riyal">ê</span></td>
                </tr>
                <tr>
                  <td colspan="2" class="text-right">
                    <strong>{{ $t("Total") }}</strong>
                  </td>
                  <td>
                    <strong>
                      {{ totalOpeningBalance}} <span class="saudi-riyal">ê</span>
                    </strong>
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colspan="3">{{ $t("Sales") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{{ $t("Invoice Sales") }}</td>
                  <td>{{ reportInfo.invoiceSales}} <span class="saudi-riyal">ê</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>{{ $t("Invoice Dues") }}</td>
                  <td>{{ reportInfo.invoiceDue}} <span class="saudi-riyal">ê</span></td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colspan="3">{{ $t("Accounts Collection") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, i) in reportInfo.accountCollections" :key="i">
                  <td>{{ ++i }}</td>
                  <td>{{ data.bank_name }} [{{ data.account_number }}]</td>
                  <td>{{ data.total_collection}} <span class="saudi-riyal">ê</span></td>
                </tr>
                <tr>
                  <td colspan="2" class="text-right">
                    <strong>{{ $t("Total") }}</strong>
                  </td>
                  <td>
                    <strong>{{
                      totalCollection}} <span class="saudi-riyal">ê</span></strong>
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colspan="3">{{ $t("Expenses") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">{{ $t("Purchase") }}</td>
                  <td>{{ reportInfo.totalPurchase}} <span class="saudi-riyal">ê</span></td>
                </tr>
                <tr>
                  <td colspan="2">{{ $t("General") }}</td>
                  <td>{{ reportInfo.expenses}} <span class="saudi-riyal">ê</span></td>
                </tr>
                <tr>
                  <td colspan="2">{{ $t("Payroll") }}</td>
                  <td>{{ reportInfo.payrolls}} <span class="saudi-riyal">ê</span></td>
                </tr>
                <tr>
                  <td colspan="2">{{ $t("Loan Interest") }}</td>
                  <td>{{ reportInfo.loanInterest}} <span class="saudi-riyal">ê</span></td>
                </tr>
                <tr>
                  <td colspan="2">{{ $t("Asset Depreciation") }}</td>
                  <td>
                    {{ reportInfo.assetDepriciation}} <span class="saudi-riyal">ê</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" class="text-right">
                    <strong>{{ $t("Total") }}</strong>
                  </td>
                  <td>
                    <strong>{{ totalExpense}} <span class="saudi-riyal">ê</span></strong>
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colspan="3">{{ $t("Transfer") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, i) in reportInfo.balanceTransfers" :key="i">
                  <td>{{ ++i }}</td>
                  <td>
                    {{ $t("Balance Transfer From") }} [{{
                      data.debit_transaction.cashbook_account.account_number
                    }}] {{ $t("To") }} [{{
  data.credit_transaction.cashbook_account.account_number
}}]
                  </td>
                  <td>{{ data.amount}} <span class="saudi-riyal">ê</span></td>
                </tr>
                <tr>
                  <td colspan="2" class="text-right">
                    <strong>{{ $t("Total") }}</strong>
                  </td>
                  <td>
                    <strong>{{ totalTransfer}} <span class="saudi-riyal">ê</span></strong>
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colspan="3">{{ $t("Closing Balance") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, i) in reportInfo.closingBalances" :key="i">
                  <td>{{ ++i }}</td>
                  <td>{{ data.bank_name }} [{{ data.account_number }}]</td>
                  <td>{{ data.current_balance}} <span class="saudi-riyal">ê</span></td>
                </tr>
                <tr>
                  <td colspan="2" class="text-right">
                    <strong>{{ $t("Total") }}</strong>
                  </td>
                  <td>
                    <strong>{{
                      totalClosingBalance}} <span class="saudi-riyal">ê</span></strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Summary Report") };
  },
  data: () => ({
    breadcrumbsCurrent: "Summary Report",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Reports",
        url: "",
      },
      {
        name: "Summary Report",
        url: "",
      },
    ],
    form: new Form({
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      currentYear: new Date().getFullYear(),
    }),
    reportInfo: "",
    totalOpeningBalance: 0,
    totalClosingBalance: 0,
    totalCollection: 0,
    totalExpense: 0,
    totalTransfer: 0,
    loading: false,
  }),
  computed: {
    years() {
      return Array.from(
        { length: this.form.currentYear - 2020 },
        (value, index) => 2021 + index
      );
    },
    printTemplateUrl() {
      // Create a dynamic print template URL for summary report with current filters
      const params = new URLSearchParams();
      
      if (this.form.month) {
        params.append('month', this.form.month);
      }
      if (this.form.year) {
        params.append('year', this.form.year);
      }
      
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      
      return `/print/reports/summary?${params.toString()}`;
    },
  },

  mounted() {
    this.loadTemporaryData()
  },

  methods: {
    // submit form
    async getReportData() {
      this.loading = true;
      await this.form
        .post(window.location.origin + "/api/reports/summery")
        .then((response) => {
          this.reportInfo = response.data;
          this.calculateSum(this.reportInfo);
          this.loading = false;
        })
        .catch(() => {
          toast.fire({ type: "error", title: this.$t("There was something wrong.") });
        });
      this.form.currentYear = new Date().getFullYear();
    },
    // calculate sum
    calculateSum(allData) {
      [
        this.totalOpeningBalance,
        this.totalClosingBalance,
        this.totalCollection,
        this.totalExpense,
        this.totalTransfer,
      ] = [0, 0, 0, 0, 0];
      this.totalOpeningBalance = allData.openingBalances.reduce(
        (accumulator, current) =>
          Number(accumulator) + Number(current.current_balance),
        0
      );
      this.totalClosingBalance = allData.closingBalances.reduce(
        (accumulator, current) =>
          Number(accumulator) + Number(current.current_balance),
        0
      );
      this.totalCollection = allData.accountCollections.reduce(
        (accumulator, current) =>
          Number(accumulator) + Number(current.total_collection),
        0
      );
      this.totalExpense =
        allData.expenses +
        allData.payrolls +
        allData.loanInterest +
        allData.assetDepriciation;
      this.totalTransfer = allData.balanceTransfers.reduce(
        (accumulator, current) => Number(accumulator) + Number(current.amount),
        0
      );
      return;
    },

    // save form data temporarily
    saveTemporary() {
      const tempData = {
        month: this.form.month,
        year: this.form.year,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('summaryReportTempData', JSON.stringify(tempData))
      toast.fire({
        type: 'success',
        title: this.$t('Filter settings saved temporarily'),
      })
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('summaryReportTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.month = data.month || this.form.month
          this.form.year = data.year || this.form.year
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('summaryReportTempData')
    },

    // print
    printWindow() {
      window.print();
    },
    
    downloadPDF() {
      // Build query parameters from filters
      const params = new URLSearchParams();
      if (this.form.month) {
        params.append('month', this.form.month);
      }
      if (this.form.year) {
        params.append('year', this.form.year);
      }
      
      // Redirect to backend PDF route with query parameters
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      
      const pdfUrl = `/print/reports/summary/pdf?${params.toString()}`;
      window.location.href = pdfUrl;
    },

    previewPDF() {
      // Build query parameters from filters
      const params = new URLSearchParams();
      if (this.form.month) {
        params.append('month', this.form.month);
      }
      if (this.form.year) {
        params.append('year', this.form.year);
      }
      
      // Redirect to backend PDF route with query parameters
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      
      const pdfUrl = `/print/reports/summary/preview?${params.toString()}`;
      window.location.href = pdfUrl;
    },
  },
};
</script>

<style scoped>
.table-custom { border: none !important; }

.account-statement-table { border-collapse: separate; border-spacing: 0; }
.account-statement-table thead th {
  background-color: #33a0d9; color: #ffffff; padding: 8px; border: none !important; border-color: inherit !important; font-weight: 400;
}
.account-statement-table thead tr { border: none !important; }
.account-statement-table thead th:first-child { border-top-left-radius: 10px; }
.account-statement-table thead th:last-child { border-top-right-radius: 10px; }
[dir="rtl"] .account-statement-table thead th:first-child { border-top-left-radius: 0; border-top-right-radius: 10px; }
[dir="rtl"] .account-statement-table thead th:last-child { border-top-right-radius: 0; border-top-left-radius: 10px; }

.refresh-btn { background: #33a0d91a !important; color: #33a0d9 !important; border-radius: 10px; border: none; }
.export-excel-btn { background: #f6fef4 !important; color: #2ab930 !important; border-radius: 10px; border: none; }
.export-pdf-btn { background: #f6fef4 !important; color: #2ab930 !important; border-radius: 10px; border: none; }
.preview-btn { background: #f6fef4 !important; color: #2ab930 !important; border-radius: 10px; border: none; }
.print-btn { background: #33a0d91a !important; color: #33a0d9 !important; border-radius: 10px; border: none; }
.btn-group.c-w-100 { gap: 10px; }
.card { margin-top: 30px; border-radius: 20px; box-shadow: 0px 8px 20px 0px #00000014; border: 1px solid #CED4DA }
.card-footer { background-color: white; border-top: 1px solid #CED4DA; padding: 0 1.25rem 0.625rem 1.25rem; border-radius: 0 0 20px 20px; }
.overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center; z-index: 9999; }
.btn-primary { background: #2AB930 !important; color: white !important; padding: 10px 20px !important; border: none !important; }

@media (max-width: 1300px) {
  .info-box {
    padding: 0;
  }
}
</style>
