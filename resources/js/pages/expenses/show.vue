<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row no-print tabs-header-row">
      <div class="w-100 text-right float-right">
        <div class="d-flex justify-content-between align-items-center" v-if="allData">
          <div class="btn-group">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: activeTab === 'details' }"
                  href="#details"
                  data-toggle="tab"
                  @click="handleTabClick('details')"
                >
                  <i class="fa fa-info"></i>
                  {{ $t("Details") }}</a
                >
              </li>
              <li class="nav-item">
                <a
                  @click="handleTabClick('activity-log')"
                  class="nav-link"
                  :class="{ active: activeTab === 'activity-log' }"
                  href="#activity-log"
                  data-toggle="tab"
                >
                  <i class="nav-icon fa fa-bell" aria-hidden="true"></i>
                  {{ $t("Activity log") }}</a
                >
              </li>
              <li class="nav-item">
                <a
                  @click="handleTabClick('journal-entry')"
                  class="nav-link"
                  :class="{ active: activeTab === 'journal-entry' }"
                  href="#journal-entry"
                  data-toggle="tab"
                >
                  <i class="nav-icon fa fa-book" aria-hidden="true"></i>
                  {{ $t("Journal Entry") }}</a
                >
              </li>
            </ul>
          </div>

          <div class="btn-group">
            <a @click="generatePDF()" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <router-link
              v-if="$can('expense-edit')"
              :to="{
                name: 'expenses.edit',
                params: { slug: allData.slug },
              }"
              class="btn btn-info"
            >
              <i class="fas fa-edit" /> {{ $t("Edit") }}
            </router-link>
            <router-link
              :to="{ name: 'expenses.index' }"
              class="btn btn-info float-right"
            >
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
          </div>
        </div>
      </div>
    </div>

    <div class="tab-content">
      <div class="tab-pane" :class="{ active: activeTab === 'details' }" id="details">
        <div class="row">
          <!-- Main content -->
          <div class="invoice p-3 mb-3 w-100" id="content-to-pdf">
            <!-- info row -->
            <div class="row invoice-info">
              <div class="col-sm-4 invoice-col">
                <CompanyInfo />
              </div>
              <!-- /.col -->
              <div
                v-if="allData.category && allData.subCategory"
                class="col-sm-8 invoice-col float-right text-md-right"
              >
                <h5>{{ $t("Expense Details") }}</h5>
                <strong v-if="allData.date">{{ $t("Date") }}:</strong>
                {{ allData.date | moment("Do MMM, YYYY") }}<br />
                <strong>{{ $t("Category") }}:</strong>
                {{ allData.category.name }} [{{
                  allData.category.code | withPrefix(catPrefix)
                }}]
                <br />
                <strong>{{ $t("Sub Category") }}:</strong>
                {{ allData.subCategory.name }} [{{
                  allData.subCategory.code | withPrefix(subCatPrefix)
                }}]
                <br />
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <!-- Table row -->
            <div class="row mt-5">
              <div class="table-responsive table-custom mt-3 text-center">
                <table class="table products-table" v-if="allData.transaction">
                  <thead>
                    <tr>
                      <th>{{ $t("Image") }}</th>
                      <th>{{ $t("Expense Reason") }}</th>
                      <th>{{ $t("Amount") }}</th>
                      <th>{{ $t("Account") }}</th>
                      <th v-if="allData.transaction.cheque_no">
                        {{ $t("Cheque No") }}
                      </th>
                      <th v-if="allData.transaction.receipt_no">
                        {{ $t("Voucher No") }}
                      </th>
                      <th v-if="allData.note">{{ $t("Note") }}</th>
                      <th>{{ $t("Status") }}</th>
                      <th class="text-right">{{ $t("Created By") }}</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <a
                          v-if="allData.image"
                          href="#"
                          id="show-modal"
                          @click="showModal = true"
                        >
                          <img
                            :src="allData.image"
                            class="rounded preview-sm m-auto"
                            loading="lazy"
                          />
                        </a>
                        <div
                          v-else
                          class="bg-secondary rounded no-preview-sm m-auto"
                        >
                          <small>{{ $t("No Preview") }}</small>
                        </div>
                      </td>
                      <td>{{ allData.reason }}</td>
                      <td v-if="allData.transaction">
                        <CurrencyDisplay :amount="allData.transaction.amount" />
                      </td>
                      <td v-if="allData.account">
                        {{ allData.account.label }}
                      </td>
                      <td v-if="allData.transaction.cheque_no">
                        {{ allData.transaction.cheque_no }}
                      </td>
                      <td v-if="allData.transaction.receipt_no">
                        {{ allData.transaction.receipt_no }}
                      </td>
                      <td v-if="allData.note">{{ allData.note }}</td>
                      <td>
                        <span
                          v-if="allData.status === 1"
                          class="badge bg-success"
                          >{{ $t("Active") }}</span
                        >
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
            <!-- /.row -->
          </div>
          <!-- /.invoice -->
        </div>
      </div>

      <!--  activity logs -->
      <div class="tab-pane" :class="{ active: activeTab === 'activity-log' }" id="activity-log">
        <div class="card custom-card w-100 mt-5 no-print">
          <div class="card-header setings-header">
            <div class="col-xl-4 col-4">
              <h3 class="card-title">
                {{ $t("Activity log") }}
              </h3>
            </div>
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <a
                  @click="refreshTable()"
                  href="#"
                  v-tooltip="$t('Refresh')"
                  class="btn btn-success"
                >
                  <i class="fas fa-sync"></i>
                </a>
              </div>
            </div>
          </div>
          <table-loading v-show="loading" />
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search
                  v-model="query"
                  @reset-pagination="resetPagination()"
                  @reload="reload"
                />
              </div>
            </div>
            <div id="printMe" class="table-responsive table-custom mt-3">
              <div
                v-show="items.length > 0"
                v-for="(data, i) in items"
                :key="i"
              >
                <div class="card mb-0 border border-gray">
                  <div class="card-body py-1">
                    <div class="row">
                      <div
                        class="col-1 d-flex justify-content-center align-items-center"
                      >
                        <i
                          v-if="data.event == 'Update'"
                          class="fa fa-magic"
                          aria-hidden="true"
                        ></i>
                        <i
                          v-if="data.event == 'Create'"
                          class="fa fa-plus-circle"
                          aria-hidden="true"
                        ></i>
                        <i
                          v-if="data.event == 'Delete'"
                          class="fa fa-trash"
                          aria-hidden="true"
                        ></i>
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
                  <select
                    @change="updatePerPager"
                    v-model="perPage"
                    class="form-control form-control-sm ml-1"
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
              <!-- pagination-start -->
              <pagination
                v-if="pagination && pagination.last_page > 1"
                :pagination="pagination"
                :offset="5"
                class="justify-flex-end"
                @paginate="paginate"
              />
              <!-- pagination-end -->
            </div>
          </div>
        </div>
      </div>

      <!-- Journal Entry Tab -->
      <div class="tab-pane" :class="{ active: activeTab === 'journal-entry' }" id="journal-entry">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">{{ $t('Journal Entry Details') }}</h3>
                <div class="card-tools">
                  <button 
                    v-if="journalEntry && journalEntry.status !== 'void'" 
                    @click="voidJournalEntry" 
                    class="btn btn-danger btn-sm"
                  >
                    <i class="fas fa-ban"></i> {{ $t('Void Entry') }}
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div v-if="journalEntryLoading" class="text-center">
                  <i class="fas fa-spinner fa-spin"></i> {{ $t('Loading...') }}
                </div>
                <div v-else-if="!journalEntry" class="text-center text-muted">
                  <i class="fas fa-exclamation-triangle"></i> {{ $t('No journal entry found for this expense.') }}
                </div>
                <div v-else>
                  <!-- Journal Entry Header -->
                  <div class="row mb-4">
                    <div class="col-md-6">
                      <h5>{{ $t('Entry Information') }}</h5>
                      <table class="table table-sm">
                        <tr>
                          <td><strong>{{ $t('Entry Number') }}:</strong></td>
                          <td>{{ journalEntry.formatted_entry_number }}</td>
                        </tr>
                        <tr>
                          <td><strong>{{ $t('Date') }}:</strong></td>
                          <td>{{ formatDate(journalEntry.entry_date) }}</td>
                        </tr>
                        <tr>
                          <td><strong>{{ $t('Reference') }}:</strong></td>
                          <td>{{ journalEntry.reference || '-' }}</td>
                        </tr>
                        <tr>
                          <td><strong>{{ $t('Status') }}:</strong></td>
                          <td>
                            <span :class="getStatusBadgeClass(journalEntry.status)">
                              {{ journalEntry.formatted_status }}
                            </span>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="col-md-6">
                      <h5>{{ $t('Amounts') }}</h5>
                      <table class="table table-sm">
                        <tr>
                          <td><strong>{{ $t('Total Debit') }}:</strong></td>
                          <td class="text-success"><CurrencyDisplay :amount="journalEntry.total_debit" /></td>
                        </tr>
                        <tr>
                          <td><strong>{{ $t('Total Credit') }}:</strong></td>
                          <td class="text-danger"><CurrencyDisplay :amount="journalEntry.total_credit" /></td>
                        </tr>
                        <tr>
                          <td><strong>{{ $t('Balance') }}:</strong></td>
                          <td :class="journalEntry.is_balanced ? 'text-success' : 'text-danger'">
                            {{ journalEntry.is_balanced ? $t('Balanced') : $t('Out of Balance') }}
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>

                  <!-- Journal Entry Lines -->
                  <h5>{{ $t('Journal Entry Lines') }}</h5>
                  <div class="table-responsive">
                    <GeneralTable
                      :columns="journalEntryLinesColumns"
                      :rows="journalEntryLinesRows"
                      wrapper-class="table-responsive"
                    >
                      <template #account="{ row }">
                        <strong>{{ row.chart_of_account?.name }}</strong>
                        <br>
                        <small class="text-muted">{{ row.chart_of_account?.code }}</small>
                      </template>
                      <template #debit_amount="{ row }">
                        <span v-if="row.debit_amount > 0" class="text-success">
                          <CurrencyDisplay :amount="row.debit_amount" />
                        </span>
                        <span v-else>-</span>
                      </template>
                      <template #credit_amount="{ row }">
                        <span v-if="row.credit_amount > 0" class="text-danger">
                          <CurrencyDisplay :amount="row.credit_amount" />
                        </span>
                        <span v-else>-</span>
                      </template>
                    </GeneralTable>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModal" @close="showModal = false">
      <h5 slot="header">{{ $t("Attached Image Preview") }}</h5>
      <div class="w-100" slot="body">
        <img :src="allData.image" class="rounded img-fluid" loading="lazy" />
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import html2pdf from "html2pdf.js";
import GeneralTable from "~/components/GeneralTable";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Expense Details") };
  },
  components: {
    CurrencyDisplay: () => import('~/components/CurrencyDisplay'),
    GeneralTable,
  },
  data: () => ({
    breadcrumbsCurrent: "Expense Details",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Expenses",
        url: "expenses.index",
      },
      {
        name: "Details",
        url: "",
      },
    ],
    showModal: false,
    allData: "",
    catPrefix: "",
    subCatPrefix: "",
    query: "",
    perPage: 10,
    journalEntry: null,
    journalEntryLoading: false,
    activeTab: "details",
  }),

  computed: {
    ...mapGetters("operations", ["appInfo", "items", "loading", "pagination"]),
    journalEntryLinesColumns() {
      return [
        { key: "line_number", label: this.$t("Line") },
        { key: "account", label: this.$t("Account") },
        { key: "description", label: this.$t("Description") },
        { key: "debit_amount", label: this.$t("Debit") },
        { key: "credit_amount", label: this.$t("Credit") },
      ];
    },
    journalEntryLinesRows() {
      if (!this.journalEntry || !this.journalEntry.lines) {
        return [];
      }
      return this.journalEntry.lines.map((line) => ({
        ...line,
        account: line.chart_of_account?.name || "",
      }));
    },
  },

  watch: {
    // watch search data
    query: function (newQ, oldQ) {
      if (newQ === "") {
        this.getActivity();
      } else {
        this.searchData();
      }
    },
  },

  created() {
    this.getExpense();
    this.catPrefix = this.appInfo.expCatPrefix;
    this.subCatPrefix = this.appInfo.expSubCatPrefix;
  },
  mounted() {
    // Listen for Bootstrap tab events to keep state in sync
    if (typeof $ !== "undefined") {
      $('a[data-toggle="tab"]').on("shown.bs.tab", (e) => {
        const target = $(e.target).attr("href");
        if (target === "#details") {
          this.activeTab = "details";
        } else if (target === "#activity-log") {
          this.activeTab = "activity-log";
        } else if (target === "#journal-entry") {
          this.activeTab = "journal-entry";
        }
      });
    }
  },
  methods: {
    // Handle tab click
    handleTabClick(tab) {
      this.activeTab = tab;
      if (tab === "details") {
        this.getExpense();
      } else if (tab === "activity-log") {
        this.getActivity();
      } else if (tab === "journal-entry") {
        this.getJournalEntry();
      }
    },

    // get the expense
    async getExpense() {
      const { data } = await axios.get(
        window.location.origin + "/api/expenses/" + this.$route.params.slug
      );
      this.allData = data.data;
    },

    // get journal entry for this expense
    async getJournalEntry() {
      this.journalEntryLoading = true;
      try {
        const { data } = await axios.get(
          window.location.origin + "/api/expenses/" + this.allData.id + "/journal-entry"
        );
        this.journalEntry = data.data;
      } catch (error) {
        console.error('Error loading journal entry:', error);
        this.journalEntry = null;
      } finally {
        this.journalEntryLoading = false;
      }
    },

    // void journal entry
    async voidJournalEntry() {
      if (!confirm(this.$t('Are you sure you want to void this journal entry?'))) {
        return;
      }

      try {
        await axios.post(
          window.location.origin + "/api/expenses/" + this.allData.id + "/void-journal"
        );
        window.toast.success(this.$t('Journal entry voided successfully'));
        await this.getJournalEntry(); // Refresh the journal entry data
      } catch (error) {
        console.error('Error voiding journal entry:', error);
        window.toast.error(this.$t('Error voiding journal entry'));
      }
    },

    // format date
    formatDate(date) {
      return this.$moment(date).format('MMM DD, YYYY');
    },

    // format currency
    formatCurrency(amount) {
      return this.$options.filters.withCurrency(amount);
    },

    // get status badge class
    getStatusBadgeClass(status) {
      switch (status) {
        case 'posted':
          return 'badge bg-success';
        case 'draft':
          return 'badge bg-warning';
        case 'void':
          return 'badge bg-danger';
        default:
          return 'badge bg-secondary';
      }
    },

    // download pdf
    generatePDF() {
      // Get the HTML content to be converted
      const element = document.getElementById("content-to-pdf");
      // Options for PDF generation
      const options = {
        margin: 5,
        filename: "Expense-" + this.$route.params.slug + ".pdf",
        image: { type: "jpeg", quality: 0.98 },
        pagebreak: { mode: "avoid-all", before: "#page-break" },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
      };
      // Generate PDF from HTML content
      html2pdf().from(element).set(options).save();
    },

    // print
    printWindow() {
      window.print();
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
      let modelName = "Expense";
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
      let modelName = "Expense";
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
.tabs-header-row {
  margin-bottom: 1.5rem;
}

.nav-tabs {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border: none;
  margin-bottom: 0;
  background: #0775AF1A;
  padding: 10px;
  border-radius: 10px;
  align-self: center;
}

.nav-item {
  flex: 1 1 0;
}

.nav-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  color: #000000;
  font-family: DINNextLTArabic;
  font-weight: 400;
  font-size: 0.95rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-link.active {
  background: #0775AF;
  color: #FFFFFF !important;
}

.nav-link:hover {
  filter: brightness(0.96);
}

@media (max-width: 576px) {
  .nav-tabs {
    gap: 6px;
  }

  .nav-link {
    padding: 8px 10px;
    font-size: 0.85rem;
  }
}

.table-custom {
  border: none !important;
}

.products-table {
  border-collapse: separate;
  border-spacing: 0;
}

.products-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.products-table thead tr {
  border: none !important;
}

.products-table thead th:first-child {
  border-top-left-radius: 10px;
}

.products-table thead th:last-child {
  border-top-right-radius: 10px;
}

/* RTL styles for Arabic language */
[dir="rtl"] .products-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .products-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}

/* Custom Status Badge Styling */
.products-table .badge.bg-success {
  background: #F6FEF4 !important;
  color: #2AB930 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.products-table .badge.bg-danger {
  background: #FEF4F4 !important;
  color: #DC3545 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}
</style>
