<template>
  <div class="mb-50">
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-lg-12" v-if="$can('chart-of-account-list') ||
        $can('chart-of-account-create') ||
        $can('chart-of-account-view') ||
        $can('chart-of-account-edit') ||
        $can('chart-of-account-delete')
        ">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <div class="col-xl-4 col-4">
              <h3 class="card-title">
                {{ $t("Chart of Accounts") }}
              </h3>
            </div>
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <a @click="refreshTable()" href="#" v-tooltip="'Refresh'" class="btn btn-success">
                  <i class="fas fa-sync"></i>
                </a>
                <a :href="exportUrl" v-tooltip="$t('Export to Excel')" class="btn btn-info">
                  <i class="fa fa-arrow-circle-down"></i>
                </a>
                <a href="/chart-of-accounts/pdf" v-tooltip="$t('Export to PDF')" class="btn btn-secondary">
                  <i class="fas fa-file-export"></i>
                </a>
                <a @click="print" v-tooltip="$t('Print Table')" class="btn btn-info">
                  <i class="fas fa-print"></i>
                </a>
                <router-link v-if="$can('chart-of-account-tree')" :to="{ name: 'chart-of-accounts.tree' }" class="btn btn-secondary">
                  <i class="fas fa-tree d-none d-sm-inline-block" />
                </router-link>
                <router-link v-if="$can('chart-of-account-create')" :to="{ name: 'chart-of-accounts.create' }" class="btn btn-primary">
                  {{ $t("Create") }}
                  <i class="fas fa-plus-circle d-none d-sm-inline-block" />
                </router-link>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
              </div>
              <div class="col-6 col-xl-8 mb-2 text-right">
                <date-range-picker ref="picker" opens="left" :locale-data="locale" :minDate="minDate" :maxDate="maxDate"
                  :singleDatePicker="false" :showWeekNumbers="false" :showDropdowns="true" :autoApply="true"
                  v-model="dateRange" @update="updateValues" :linkedCalendars="true" class="c-w-100">
                  <template v-slot:input="picker" style="min-width: 350px">
                    {{ picker.startDate | startDate }} -
                    {{ picker.endDate | endDate }}
                  </template>
                </date-range-picker>
              </div>
            </div>
            <table-loading v-show="loading" />
            <div class="table-responsive table-custom mt-3" id="printMe">
              <table class="table">
                <thead>
                  <tr>
                    <th>{{ $t("Code") }}</th>
                    <th>{{ $t("Name") }}</th>
                    <th>{{ $t("Type") }}</th>
                    <th>{{ $t("Parent Account") }}</th>
                    <th>{{ $t("Order") }}</th>
                    <th>{{ $t("Status") }}</th>
                    <th v-if="$can('chart-of-account-view') ||
                      $can('chart-of-account-edit') ||
                      $can('chart-of-account-delete')
                      " class="text-right no-print">
                      {{ $t("Action") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-show="items.length" v-for="(data, i) in items" :key="i">
                    <td>
                      <router-link v-if="$can('chart-of-account-view')" :to="{
                        name: 'chart-of-accounts.show',
                        params: { slug: data.code },
                      }">
                        {{ data.code }}
                      </router-link>
                      <span v-else>{{ data.code }}</span>
                    </td>
                    <td>{{ data.name }}</td>
                    <td>
                      <span v-if="data.types" class="badge bg-info">
                        {{ data.types.name }}
                      </span>
                      <span v-else class="text-muted">-</span>
                    </td>
                    <td>
                      <span v-if="data.parent" class="text-muted">
                        {{ data.parent.name }}
                      </span>
                      <span v-else class="text-muted">-</span>
                    </td>
                    <td>{{ data.order || '-' }}</td>
                    <td>
                      <span v-if="data.is_active" class="badge bg-success">{{
                        $t("Active")
                      }}</span>
                      <span v-else class="badge bg-danger">{{
                        $t("Inactive")
                      }}</span>
                    </td>
                    <td v-if="$can('chart-of-account-view') ||
                        $can('chart-of-account-edit') ||
                        $can('chart-of-account-delete')
                        " class="text-right no-print">
                      <div class="btn-group">
                        <router-link v-if="$can('chart-of-account-view')" v-tooltip="$t('View')" :to="{
                          name: 'chart-of-accounts.show',
                          params: { slug: data.code },
                        }" class="btn btn-primary btn-sm">
                          <i class="fas fa-eye" />
                        </router-link>
                        <router-link v-if="$can('chart-of-account-edit')" v-tooltip="$t('Edit')" :to="{
                          name: 'chart-of-accounts.edit',
                          params: { slug: data.code },
                        }" class="btn btn-info btn-sm">
                          <i class="fas fa-edit" />
                        </router-link>
                        <a v-if="$can('chart-of-account-delete')" v-tooltip="$t('Delete')" href="#" class="btn btn-danger btn-sm"
                          @click="deleteData(data.code)">
                          <i class="fas fa-trash" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr v-show="!loading && !items.length">
                    <td colspan="7">
                      <EmptyTable />
                    </td>
                  </tr>
                </tbody>
              </table>
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
      </div>
    </div>

   <Modal v-if="showModal" @close="previewModal()">
      <h5 slot="header">{{ $t("Chart of Account Details") }}</h5>
      <div class="w-100" slot="body">
        <div class="row">
          <div class="col-md-6">
            <strong>{{ $t("Code") }}:</strong> {{ selectedAccount.code }}
          </div>
          <div class="col-md-6">
            <strong>{{ $t("Name") }}:</strong> {{ selectedAccount.name }}
          </div>
          <div class="col-md-6">
            <strong>{{ $t("Type") }}:</strong> {{ selectedAccount.types ? selectedAccount.types.name : '-' }}
          </div>
          <div class="col-md-6">
            <strong>{{ $t("Parent Account") }}:</strong> {{ selectedAccount.parent ? selectedAccount.parent.name : '-' }}
          </div>
        </div>
      </div>
    </Modal>

  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import i18n from "~/plugins/i18n";
import DateRangePicker from "vue2-daterange-picker";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Chart of Accounts") };
  },
  components: {
    DateRangePicker,
  },
  data: () => ({
    breadcrumbsCurrent: "Chart of Accounts",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Cashbook",
        url: "",
      },
      {
        name: "Chart of Accounts",
        url: "",
      },
    ],
    query: "",
    perPage: 10,
    showModal: false,
    selectedAccount: {},
    minDate: moment(new Date("01-01-2021")).format("YYYY-MM-DD"),
    maxDate: moment().add(1, "days").format("YYYY-MM-DD"),
    dateRange: {
      startDate: "",
      endDate: "",
    },
    locale: {
      direction: "ltr",
      format: "YYYY-MM-DD",
      separator: " - ",
      applyLabel: "Apply",
      cancelLabel: "Cancel",
      weekLabel: "W",
      customRangeLabel: "Custom Range",
      daysOfWeek: moment.weekdaysMin(),
      monthNames: moment.monthsShort(),
      firstDay: 1,
    },
  }),
  filters: {
    startDate(val) {
      return val ? moment(val).format("YYYY-MM-DD") : i18n.t("From");
    },
    endDate(val) {
      return val ? moment(val).format("YYYY-MM-DD") : i18n.t("To");
    },
  },
  // Map Getters
  computed: {
    ...mapGetters("operations", ["items", "loading", "pagination", "appInfo"]),
    exportUrl() {
      // Create a dynamic export URL with query parameters
      return `/chart-of-accounts/export/excel?start_date=${this.dateRange.startDate}&end_date=${this.dateRange.endDate}&term=${this.query}`;
    },
  },
  watch: {
    // watch search data
    query: function (newQ) {
      if (newQ === "") {
        if (this.dateRange.startDate && this.dateRange.endDate) {
          this.searchData();
        } else {
          this.getData();
        }
      } else {
        this.searchData();
      }
    },
  },
  created() {
    this.getData();
  },
  methods: {
    // filter data for selected date range
    async updateValues() {
      this.dateRange.startDate = moment(this.dateRange.startDate).format(
        "YYYY-MM-DD"
      );
      this.dateRange.endDate = moment(this.dateRange.endDate).format(
        "YYYY-MM-DD"
      );
      this.searchData();
    },

    // refresh table
    refreshTable() {
      this.query = "";
      this.dateRange.startDate = null;
      this.dateRange.endDate = null;
      this.query === "" ? this.getData() : this.searchData();
      setTimeout(
        function () {
          this.dateRange.startDate = "";
          this.dateRange.endDate = "";
        }.bind(this),
        500
      );
    },

    // update per page count
    updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getData() : this.searchData();
    },

    // get data
    async getData() {
      this.$store.state.operations.loading = true;
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      await this.$store.dispatch("operations/fetchData", {
        path: "/api/chart-of-accounts?page=",
        currentPage: currentPage + "&perPage=" + this.perPage,
      });
    },

    // pagination
    async paginate() {
      this.query === "" ? this.getData() : this.searchData();
    },

    // reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },

    // search data
    async searchData() {
      this.$store.state.operations.loading = true;
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      await this.$store.dispatch("operations/searchData", {
        path: "/api/chart-of-accounts/search",
        term: this.query,
        currentPage: currentPage + "&perPage=" + this.perPage,
        startDate: this.dateRange.startDate,
        endDate: this.dateRange.endDate,
      });
    },

    // reload after search
    async reload() {
      this.query = "";
      await this.searchData();
    },

    // print table
    async print() {
      await this.$htmlToPaper("printMe");
    },







     // delete data
     async deleteData(slug) {
      Swal.fire({
        title: this.$t("Are you sure?"),
        text: this.$t("You will not be able to return to this!"),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"),
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          this.$store
            .dispatch("operations/deleteData", {
              path: "/api/chart-of-accounts/",
              slug: slug,
            })
            .then((response) => {
              if (response === true) {
                this.getData();
                Swal.fire(
                  this.$t("Deleted!"),
                  this.$t("Deleted successfully."),
                  "success"
                );
              } else {
                Swal.fire(
                  this.$t("Failed!"),
                  this.$t("Sorry you can't remove this account!"),
                  "warning"
                );
              }
            });
        }
      });
    },



    // display modal
    previewModal(account) {
      this.selectedAccount = account;
      if (this.showModal) {
        return (this.showModal = false);
      }
      return (this.showModal = true);
    },
  },
};
</script>
