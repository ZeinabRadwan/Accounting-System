<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
          </div>
          <div class="card-body position-relative">
            <div class="row d-fex" style="justify-content: flex-end">
              <div class="col-6 col-xl-4 mb-2">
                <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
              </div>
              <div class="col-xl-6 col-3 float-right text-right">
                <div class="btn-group c-w-100">
                  <a @click="refreshTable()" href="#" v-tooltip="$t('Refresh')" class="btn btn-success refresh-btn">
                    <i class="fas fa-sync"></i>
                  </a>
                  <router-link v-if="$can('purchase-return-create')" :to="{ name: 'debitNotes.create' }" class="btn btn-primary">
                    {{ $t("Create") }}
                    <i class="fas fa-plus-circle d-none d-sm-inline-block" />
                  </router-link>
                </div>
              </div>
            </div>
            <table-loading v-show="loading" />
            <div class="table-responsive table-custom mt-3">
              <GeneralTable
                :columns="columns"
                :rows="rowsWithIndex"
                :loading="loading"
                table-id=""
                wrapper-class=""
                :show-actions="true"
              >
                <template #cell-debitNoteNo="{ row }">
                  <router-link v-if="$can('purchase-return-view')" :to="{ name: 'debitNotes.show', params: { slug: row.slug } }">
                    {{ row.debitNoteNo }}
                  </router-link>
                  <span v-else>{{ row.debitNoteNo }}</span>
                </template>
                <template #cell-purchaseNo="{ row }">
                  {{ row.purchaseNo }}
                </template>
                <template #cell-date="{ row }">
                  <span v-if="row.date">{{ row.date | moment("Do MMM, YYYY") }}</span>
                </template>
                <template #cell-discountAmount="{ row }">
                  <span v-html="formatCurrency(row.discountAmount || 0)"></span>
                </template>
                <template #cell-taxAmount="{ row }">
                  <span v-html="formatCurrency(row.taxAmount || 0)"></span>
                </template>
                <template #cell-totalAmount="{ row }">
                  <span v-html="formatCurrency(row.totalAmount || 0)"></span>
                </template>
                <template #cell-journalEntry="{ row }">
                  <span v-if="row.journalEntry">
                    <router-link :to="{ name: 'journal-entries.show', params: { id: row.journalEntry.id } }" class="badge bg-info text-white" style="text-decoration: none;">
                      {{ row.journalEntry.entry_number || '#' + row.journalEntry.id }}
                    </router-link>
                  </span>
                  <span v-else class="text-muted">-</span>
                </template>
                <template #actions="{ row }">
                  <router-link v-if="$can('purchase-return-view')" :to="{ name: 'debitNotes.show', params: { slug: row.slug } }" class="btn btn-sm btn-info">
                    <i class="fas fa-eye"></i>
                  </router-link>
                </template>
              </GeneralTable>
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
              <pagination v-if="pagination && pagination.last_page > 1" :pagination="pagination" :offset="5" class="justify-flex-end" @paginate="paginate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GeneralTable from "../../../components/GeneralTable.vue";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Debit Note") };
  },
  components: { GeneralTable },
  data: () => ({
    breadcrumbsCurrent: "",
    breadcrumbs: [
      { name: "Dashboard", url: "home" },
      { name: "Purchases", url: "" },
      { name: "", url: "" },
    ],
    perPage: 10,
    query: "",
  }),
  computed: {
    ...mapGetters("operations", ["items", "loading", "pagination", "appInfo"]),
    columns() {
      return [
        { key: "index", label: this.$t("#"), sortable: false },
        { key: "debitNoteNo", label: this.$t("Debit Note No") },
        { key: "purchaseNo", label: this.$t("Reference Purchase Invoice") },
        { key: "supplierName", label: this.$t("Supplier") },
        { key: "date", label: this.$t("Date") },
        { key: "discountAmount", label: this.$t("Discount Amount") },
        { key: "taxAmount", label: this.$t("Tax (15%)") },
        { key: "totalAmount", label: this.$t("Total") },
        { key: "journalEntry", label: this.$t("Journal Entry"), sortable: false },
      ];
    },
    rowsWithIndex() {
      const pagination = this.pagination || {};
      return (this.items || []).map((item, index) => ({
        ...item,
        index: pagination.current_page > 1 ? pagination.per_page * (pagination.current_page - 1) + (index + 1) : index + 1,
      }));
    },
  },
  watch: {
    query(val) {
      this.pagination && (this.pagination.current_page = 1);
      this.getData();
    },
  },
  created() {
    this.breadcrumbsCurrent = this.$t("Debit Note");
    this.breadcrumbs[1].name = this.$t("Purchases");
    this.breadcrumbs[2].name = this.$t("Debit Note");
    this.getData();
  },
  methods: {
    async getData() {
      this.$store.state.operations.loading = true;
      const currentPage = this.pagination ? this.pagination.current_page : 1;
      const term = this.query ? "&term=" + encodeURIComponent(this.query) : "";
      await this.$store.dispatch("operations/fetchData", {
        path: "/api/debit-notes?page=",
        currentPage: currentPage + "&perPage=" + this.perPage + term,
      });
    },
    paginate() {
      this.getData();
    },
    resetPagination() {
      if (this.pagination) this.pagination.current_page = 1;
    },
    updatePerPager() {
      if (this.pagination) this.pagination.current_page = 1;
      this.getData();
    },
    refreshTable() {
      this.query = "";
      this.getData();
    },
    reload() {
      this.getData();
    },
    formatCurrency(amount) {
      const n = Number(amount);
      if (isNaN(n)) return "0.00";
      return this.appInfo && this.appInfo.currencySymbol
        ? this.appInfo.currencySymbol + " " + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>
