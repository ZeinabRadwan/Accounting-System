<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->

    <DetailsActivityTabs
      v-if="allData"
      default-tab="details"
      @details-clicked="getLoan"
      @activity-clicked="getActivity"
    >
      <template #actions>
        <div class="btn-group">
            <a @click="generatePDF()" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <router-link v-if="$can('loan-edit')" :to="{
              name: 'loans.edit',
              params: { slug: allData.slug },
            }" class="btn btn-info">
              <i class="fas fa-edit" /> {{ $t("Edit") }}
            </router-link>
            <router-link :to="{ name: 'loans.index' }" class="btn btn-info float-right">
              <template
                v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">

                {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />

              </template>

              <template v-else>

                <template
                  v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">


                  {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />


                </template>


                <template v-else>


                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}


                </template>

              </template>
            </router-link>
          </div>
        </template>

      <template #details>
        <div class="row">
          <!-- Main content -->
          <div class="invoice p-3 mb-3 w-100" id="content-to-pdf">
            <!-- info row -->
            <div class="row invoice-info">
              <div class="col-sm-4 invoice-col">
                <CompanyInfo />
              </div>
              <!-- /.col -->
              <div class="col-sm-8 invoice-col float-right text-md-right">
                <h5>{{ $t("Authority Details") }}</h5>
                <div v-if="allData.authority">
                  <strong>{{ $t("Name") }}:</strong>
                  {{ allData.authority.name }}<br />
                  <strong>{{ $t("Email") }}:</strong>
                  {{ allData.authority.email }}<br />
                  <strong>{{ $t("Contact Number") }}:</strong>
                  {{ allData.authority.contactNumber }}<br />
                  <strong>{{ $t("Address") }}:</strong>
                  {{ allData.authority.address }}<br />
                </div>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <div class="row mt-3">
              <div class="col-12">
                <div class="table-responsive table-custom mt-3">
                  <table class="table loans-table">
                    <thead>
                      <tr>
                        <th>{{ $t("Image") }}</th>
                        <th v-if="allData.reference">
                          {{ $t("Ref. No") }}
                        </th>
                        <th v-if="allData.reason">{{ $t("Reason") }}</th>
                        <th v-if="allData.account">
                          {{ $t("Loan Account") }}
                        </th>
                        <th v-if="allData.loanType == 1">
                          {{ $t("Duration") }}
                        </th>
                        <th v-if="allData.loanType == 1">
                          {{ $t("Installment") }}
                        </th>
                        <th v-if="allData.note">{{ $t("Note") }}</th>
                        <th v-if="allData.date">
                          {{ $t("Loan Date") }}
                        </th>
                        <th>{{ $t("Status") }}</th>
                        <th class="text-right">
                          {{ $t("Created By") }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a v-if="allData.image" href="#" id="show-modal" @click="previewModal(allData.image)">
                            <img :src="allData.image" class="rounded preview-sm" loading="lazy" />
                          </a>
                          <div v-else class="bg-secondary rounded no-preview-sm">
                            <small>{{ $t("No Preview") }}</small>
                          </div>
                        </td>
                        <td v-if="allData.reference">
                          {{ allData.reference }}
                        </td>
                        <td v-if="allData.reason">{{ allData.reason }}</td>
                        <td v-if="allData.account">
                          {{ allData.account.label }}
                        </td>
                        <td v-if="allData.loanType == 1">
                          {{ allData.durationStr }}
                        </td>
                        <td v-if="allData.loanType == 1">
                          {{ allData.installment }}
                        </td>
                        <td v-if="allData.note">{{ allData.note }}</td>
                        <td v-if="allData.date">
                          {{ allData.date | moment("Do MMM, YYYY") }}
                        </td>
                        <td>
                          <span v-if="allData.status === 1" class="badge bg-success">{{ $t("Active") }}</span>
                          <span v-else class="badge bg-danger">{{
                            $t("Inactive")
                          }}</span>
                        </td>
                        <td class="text-right">{{ allData.createdBy }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- /.row -->
            <div class="row mt-4">
              <div class="col-lg-12 col-xl-8">
                <div v-if="allData.loanPayments && allData.loanPayments.length > 0" class="col-12">
                  <strong class="mb-2 d-block">
                    {{ $t("Loan Payments") }}:</strong>
                  <div class="table-responsive table-custom">
                    <GeneralTable
                      :columns="loanPaymentsColumns"
                      :rows="loanPaymentsRows"
                      :loading="loading"
                      wrapper-class=""
                    >
                      <template #cell-amount="{ value }">
                        {{ value }} <span class="saudi-riyal">ê</span>
                      </template>
                      <template #cell-interest="{ value }">
                        {{ value }} <span class="saudi-riyal">ê</span>
                      </template>
                      <template #cell-status="{ value }">
                        <span v-if="value === 1" class="badge bg-success">{{ $t("Active") }}</span>
                        <span v-else class="badge bg-danger">{{ $t("Inactive") }}</span>
                      </template>
                      <template #cell-date="{ value }">
                        <span v-if="value">{{ value | moment("Do MMM, YYYY") }}</span>
                      </template>
                    </GeneralTable>
                  </div>
                </div>
                <div class="callout callout-danger mt-4 w-100 no-print" v-else>
                  <h5>{{ $t("No payments available yet!") }}</h5>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-lg-12 col-xl-4 text-lg-right mt-4">
                <div class="table-responsive table-custom table-border-y-0">
                  <table class="table">
                    <tbody>
                      <tr class="bg-sub-light text-bold">
                        <th>{{ $t("Loan Amount") }}:</th>
                        <td v-if="allData.transaction">
                          {{ allData.transaction.amount }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          {{ $t("Interest") }}
                          <span v-if="allData.loanType == 1">({{ allData.interestRate }}%)</span>:
                        </th>
                        <td>
                          <span class="plus-sign">+</span>
                          {{ allData.interestAmount }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr class="bg-indigo-light">
                        <th>{{ $t("Payable") }}:</th>
                        <td v-if="allData.loanType == 1">
                           
                          {{ allData.payable }} <span class="saudi-riyal">ê</span>
                        </td>
                        <td v-else>
                           
                          {{
                            (allData.payable + allData.interestAmount)
                          }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr>
                        <th>{{ $t("Total Paid") }}:</th>
                        <td>
                          <span class="minus-sign">-</span>
                          <span v-if="allData.loanType == 0">{{
                            allData.loanWithInterest
                          }} <span class="saudi-riyal">ê</span>
                          </span>
                          <span v-else>{{
                            (allData.totalPaid > 0 ? allData.totalPaid : 0)
                          }} <span class="saudi-riyal">ê</span></span>
                        </td>
                      </tr>
                      <tr class="bg-red-light">
                        <th>{{ $t("Due") }}:</th>
                        <td>{{ allData.due }} <span class="saudi-riyal">ê</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
        </div>
      </template>

      <template #activity-log>
        <div class="card custom-card w-100 mt-5 no-print">
          <div class="card-header setings-header">
            <div class="col-xl-4 col-4">
              <h3 class="card-title">
                {{ $t("Activity log") }}
              </h3>
            </div>
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <a @click="refreshTable()" href="#" v-tooltip="$t('Refresh')" class="btn btn-success">
                  <i class="fas fa-sync"></i>
                </a>
              </div>
            </div>
          </div>
          <table-loading v-show="loading" />
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
              </div>
            </div>
            <div id="printMe" class="table-responsive table-custom mt-3">
              <div v-show="items.length > 0" v-for="(data, i) in items" :key="i">
                <div class="card mb-0 border border-gray">
                  <div class="card-body py-1">
                    <div class="row">
                      <div class="col-1 d-flex justify-content-center align-items-center">
                        <i v-if="data.event == 'Update'" class="fa fa-magic" aria-hidden="true"></i>
                        <i v-if="data.event == 'Create'" class="fa fa-plus-circle" aria-hidden="true"></i>
                        <i v-if="data.event == 'Delete'" class="fa fa-trash" aria-hidden="true"></i>
                      </div>
                      <div class="col-11">
                        <div class="row">
                          <div class="col-12">
                            <p class="text-bold mb-0">{{ data.causer_name }}</p>
                          </div>
                          <div class="col-12">
                            <p class="mb-0">{{ data.description }}</p>
                          </div>
                          <div class="col-12">
                            <p class="mb-0">{{ data.performedAt }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center" v-show="!loading && !items.length">
                <EmptyTable />
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page">
                <label>{{ $t("per_page") }} </label>
                <div>
                  <select @change="updatePerPager" v-model="perPage" class="form-control form-control-sm ml-1">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
              <!-- pagination-start -->
              <pagination v-if="pagination && pagination.last_page > 1" :pagination="pagination" :offset="5"
                class="justify-flex-end" @paginate="paginate" />
              <!-- pagination-end -->
            </div>
          </div>
        </div>
      </template>
    </DetailsActivityTabs>

    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModal" @close="previewModal()">
      <h5 slot="header">{{ $t("Attached Image Preview") }}</h5>
      <div class="w-100" slot="body">
        <img :src="imageSrc" class="rounded img-fluid" loading="lazy" />
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import html2pdf from "html2pdf.js";
import GeneralTable from "~/components/GeneralTable";
import DetailsActivityTabs from "~/components/DetailsActivityTabs";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Loan Details") };
  },
  components: {
    GeneralTable,
    DetailsActivityTabs,
  },
  data: () => ({
    breadcrumbsCurrent: "Loan Details",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Loans",
        url: "loans.index",
      },
      {
        name: "Details",
        url: "",
      },
    ],
    url: null,
    showModal: false,
    allData: "",
    imageSrc: "",
    query: "",
    perPage: 10,
  }),

  computed: {
    // Loan payments columns
    loanPaymentsColumns() {
      return [
        { key: "index", label: this.$t("#"), align: "text-center" },
        { key: "referenceNo", label: this.$t("Ref. No"), align: "text-center" },
        { key: "account", label: this.$t("Account"), align: "text-center" },
        { key: "amount", label: this.$t("Amount"), align: "text-center" },
        { key: "interest", label: this.$t("Interest"), align: "text-center" },
        { key: "status", label: this.$t("Status"), align: "text-center" },
        { key: "date", label: this.$t("Date"), align: "text-right" },
      ];
    },

    // Loan payments rows
    loanPaymentsRows() {
      if (!this.allData || !this.allData.loanPayments || this.allData.loanPayments.length === 0) return [];
      return this.allData.loanPayments.map((payment, index) => ({
        index: index + 1,
        referenceNo: payment.reference_no,
        account: payment.loan_payment_transaction?.cashbook_account?.account_number || '-',
        amount: payment.amount,
        interest: payment.interest,
        status: payment.status,
        date: payment.date,
        _raw: payment,
      }));
    },
    ...mapGetters("operations", ["appInfo", "items", "loading", "pagination"]),
  },

  watch: {
    // watch search data
    query: function (newQ) {
      if (newQ === "") {
        this.getActivity();
      } else {
        this.searchData();
      }
    },
  },

  created() {
    this.getLoan();
  },
  methods: {
    // get the loan
    async getLoan() {
      const { data } = await axios.get(
        window.location.origin + "/api/loans/" + this.$route.params.slug
      );
      this.allData = data.data;
    },

    // print
    printWindow() {
      window.print();
    },

    // preview modal
    previewModal(image) {
      this.imageSrc = image;
      if (this.showModal) {
        return (this.showModal = false);
      }
      return (this.showModal = true);
    },

    // download pdf
    generatePDF() {
      // Get the HTML content to be converted
      const element = document.getElementById("content-to-pdf");
      // Options for PDF generation
      const options = {
        margin: 5,
        filename: "Loan-" + this.$route.params.slug + ".pdf",
        image: { type: "jpeg", quality: 0.98 },
        pagebreak: { mode: "avoid-all", before: "#page-break" },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
      };
      // Generate PDF from HTML content
      html2pdf().from(element).set(options).save();
    },

    // print table
    async print() {
      await this.$htmlToPaper("printMe");
    },

    // get activity logs
    async getActivity() {
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      this.$store.state.operations.loading = true;
      let slug = this.$route.params.slug;
      let modelName = "Loan";
      await this.$store.dispatch("operations/fetchSpecificLogs", {
        path: "/api/activity-log-specific?page=",
        currentPage: currentPage + "&perPage=" + this.perPage,
        slug: slug,
        modelName: modelName,
      });
    },

    // search data
    async searchData() {
      this.$store.state.operations.loading = true;
      let slug = this.$route.params.slug;
      let modelName = "Loan";
      await this.$store.dispatch("operations/fetchSpecificLogs", {
        path: "/api/activity-log-specific?page=",
        currentPage: this.pagination.current_page + "&perPage=" + this.perPage,
        term: this.query,
        slug: slug,
        modelName: modelName,
      });
    },

    // pagination
    async paginate() {
      this.getActivity();
    },

    updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getActivity() : this.searchData();
    },

    // reload after search
    async reload() {
      this.query = "";
    },

    // refresh table
    async refreshTable() {
      this.query = "";
      if (this.pagination) {
        this.pagination.current_page = 1;
      }
      this.query === "" ? await this.getActivity() : await this.searchData();
      this.$toast.success(
        this.$t("Refreshed"),
        this.$t("Activity log has been refreshed successfully")
      );
    },

    // reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },
  },
};
</script>
<style scoped>
.table-custom {
  border: none !important;
}

.loans-table {
  border-collapse: separate;
  border-spacing: 0;
}

.loans-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.loans-table thead tr {
  border: none !important;
}

.loans-table thead th:first-child {
  border-top-left-radius: 10px;
}

.loans-table thead th:last-child {
  border-top-right-radius: 10px;
}

/* RTL styles for Arabic language */
[dir="rtl"] .loans-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .loans-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}

/* Custom Status Badge Styling */
.loans-table .badge.bg-success {
  background: #F6FEF4 !important;
  color: #2AB930 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.loans-table .badge.bg-danger {
  background: #FEF4F4 !important;
  color: #DC3545 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}
</style>
