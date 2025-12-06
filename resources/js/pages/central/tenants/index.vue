<template>
  <div class="mb-50">
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <div class="col-xl-4 col-4">
              <h3 class="card-title">
                {{ $t("Tenants") }}
              </h3>
            </div>
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <a @click="refreshTable()" href="#" v-tooltip="$t('Refresh')" class="btn btn-success">
                  <i class="fas fa-sync"></i>
                </a>
                <a :href="exportUrl" v-tooltip="$t('Export to Excel')" class="btn btn-info">
                  <i class="fa fa-arrow-circle-down"></i>
                </a>
                <a @click="exportToPDF" href="#" v-tooltip="$t('Export to PDF')" class="btn btn-secondary">
                  <i class="fas fa-file-export"></i>
                </a>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body position-relative">
            <!-- Tabs Navigation -->
            <ul class="nav nav-tabs" id="tenantTabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link" :class="{ active: activeTab === 'active' }" @click="switchTab('active')"
                  type="button">
                  {{ $t("Active Tenants") }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" :class="{ active: activeTab === 'archived' }" @click="switchTab('archived')"
                  type="button">
                  {{ $t("Archived Tenants") }}
                </button>
              </li>
            </ul>

            <!-- Tab Content -->
            <div class="tab-content" id="tenantTabsContent">
              <div class="tab-pane fade" :class="{ 'show active': activeTab === 'active' }" role="tabpanel">
                <div class="row mt-3">
                  <div class="col-6 col-xl-4 mb-2">
                    <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
                  </div>
                  <div class="col-6 col-xl-8 mb-2 text-right">
                    <date-range-picker ref="picker" opens="left" :locale-data="locale" :minDate="minDate"
                      :maxDate="maxDate" :singleDatePicker="false" :showWeekNumbers="false" :showDropdowns="true"
                      :autoApply="true" v-model="dateRange" @update="updateValues" :linkedCalendars="true"
                      class="c-w-100" style="display: none;">
                      <template v-slot:input="picker" style="min-width: 350px">
                        {{ picker.startDate | startDate }} -
                        {{ picker.endDate | endDate }}
                      </template>
                    </date-range-picker>
                  </div>
                </div>
                <table-loading v-show="loading" />
                <GeneralTable :columns="tenantColumns" :rows="tenantsWithIndex" :loading="loading" table-id="printMe"
                  wrapper-class="mt-3" :show-actions="!isDemoMode">
                  <template #cell-nameEmail="{ row }">
                    <div class="profile-area">
                      <div class="mr-2 img">
                        <img :src="row.photo_url" :alt="row.name" class="rounded-circle" />
                      </div>
                      <div>
                        <span class="text-capitalize">{{ row.name }}</span>
                        <a :href="`mailto:${row.email}`">{{ row.email }}</a>
                      </div>
                    </div>
                  </template>
                  <template #cell-plan="{ row }">
                    {{ row.plan && row.plan.name }}
                  </template>
                  <template #cell-onTrial="{ row }">
                    <span v-if="row.on_trial" class="badge bg-success">{{ $t("True") }}</span>
                    <span v-else class="badge bg-danger">{{ $t("False") }}</span>
                  </template>
                  <template #cell-isVerified="{ row }">
                    <span v-if="row.email_verified_at" class="badge bg-success">{{ $t("True") }}</span>
                    <span v-else class="badge bg-danger">{{ $t("False") }}</span>
                  </template>
                  <template #cell-isSubscribed="{ row }">
                    <span v-if="row.is_subscribed" class="badge bg-success">{{ $t("True") }}</span>
                    <span v-else class="badge bg-danger">{{ $t("False") }}</span>
                  </template>
                  <template #cell-banned="{ row }">
                    <span v-if="row.is_banned == false" class="badge bg-success">{{ $t("False") }}</span>
                    <span v-else class="badge bg-danger">{{ $t("True") }}</span>
                  </template>
                  <template #cell-sessionStatus="{ row }">
                    <div v-if="row.activity_stats">
                      <span v-if="row.activity_stats.has_active_sessions" class="badge bg-success">
                        <i class="fas fa-circle"></i> {{ $t("Active") }}
                      </span>
                      <span v-else class="badge bg-secondary">
                        <i class="fas fa-circle"></i> {{ $t("Inactive") }}
                      </span>
                    </div>
                    <span v-else class="badge bg-secondary">{{ $t("Inactive") }}</span>
                  </template>
                  <template #cell-sessionTimer="{ row }">
                    <div v-if="row.activity_stats && row.activity_stats.has_active_sessions">
                      <div class="font-weight-bold text-primary">
                        {{ formatSessionTimerLive(row.activity_stats) }}
                      </div>
                    </div>
                    <span v-else class="text-muted">-</span>
                  </template>
                  <template #cell-workingTime="{ row }">
                    <div v-if="row.activity_stats">
                      <div class="font-weight-bold">
                        {{ formatWorkingTime(row.activity_stats.total_working_seconds) }}
                      </div>
                      <small class="text-muted">
                        {{ $t("Total") }}: {{ row.activity_stats.total_working_hours }} {{ $t("hours") }}
                      </small>
                    </div>
                    <span v-else class="text-muted">-</span>
                  </template>
                  <template #actions="{ row }">
                    <div class="btn-group">
                      <router-link v-if="row.email_verified_at" v-tooltip="$t('View')" :to="{
                        name: 'tenants.show',
                        params: { id: row.id },
                      }" class="btn btn-primary btn-sm">
                        <i class="fas fa-eye" />
                      </router-link>
                      <button v-if="row.email_verified_at" @click="impersonate(row.id)" v-tooltip="$t('Impersonate')"
                        class="btn btn-info btn-sm">
                        <i class="fas fa-user-secret" />
                      </button>
                      <router-link v-if="row.email_verified_at" :to="{
                        name: 'send-notification',
                        params: { id: row.id },
                      }" v-tooltip="$t('Send Email')" class="btn btn-secondary btn-sm">
                        <i class="fas fa-envelope" />
                      </router-link>
                      <router-link v-if="row.email_verified_at" v-tooltip="$t('Edit')" :to="{
                        name: 'tenants.edit',
                        params: { id: row.id },
                      }" class="btn btn-info btn-sm">
                        <i class="fas fa-edit" />
                      </router-link>
                      <a v-if="row.email_verified_at" href="#" v-tooltip="row.is_banned
                        ? $t('Unban')
                        : $t('Ban')
                        " class="btn btn-sm" :class="row.is_banned ? 'btn-success' : 'btn-warning'"
                        @click="ban(row.id)">
                        <i class="fas fa-ban" />
                      </a>
                      <a href="#" v-tooltip="$t('Archive')" class="btn btn-danger btn-sm" @click="deleteData(row.id)">
                        <i class="fas fa-archive" />
                      </a>
                    </div>
                  </template>
                </GeneralTable>
              </div>

              <!-- Archived Tab Content -->
              <div class="tab-pane fade" :class="{ 'show active': activeTab === 'archived' }" role="tabpanel">
                <div class="row mt-3">
                  <div class="col-6 col-xl-4 mb-2">
                    <search v-model="archivedQuery" @reset-pagination="resetPagination()" @reload="reloadArchived" />
                  </div>
                  <div class="col-6 col-xl-8 mb-2 text-right">
                    <button v-if="archivedItems.length > 0 && !isDemoMode" @click="deleteAllArchivedTenants"
                      class="btn btn-danger" :disabled="deletingAllArchived">
                      <i class="fas fa-trash-alt mr-1"></i>
                      <span v-if="deletingAllArchived">{{ $t("Deleting...") }}</span>
                      <span v-else>{{ $t("Delete All Archived") }}</span>
                    </button>
                    <date-range-picker ref="archivedPicker" opens="left" :locale-data="locale" :minDate="minDate"
                      :maxDate="maxDate" :singleDatePicker="false" :showWeekNumbers="false" :showDropdowns="true"
                      :autoApply="true" v-model="archivedDateRange" @update="updateArchivedValues"
                      :linkedCalendars="true" class="c-w-100" style="display: none;">
                      <template v-slot:input="picker" style="min-width: 350px">
                        {{ picker.startDate | startDate }} -
                        {{ picker.endDate | endDate }}
                      </template>
                    </date-range-picker>
                  </div>
                </div>
                <table-loading v-show="archivedLoading" />
                <GeneralTable :columns="archivedTenantColumns" :rows="archivedTenantsWithIndex"
                  :loading="archivedLoading" table-id="printArchived" wrapper-class="mt-3" :show-actions="!isDemoMode">
                  <template #cell-nameEmail="{ row }">
                    <div class="profile-area">
                      <div class="mr-2 img">
                        <img :src="row.photo_url" :alt="row.name" class="rounded-circle" />
                      </div>
                      <div>
                        <span class="text-capitalize">{{ row.name }}</span>
                        <a :href="`mailto:${row.email}`">{{ row.email }}</a>
                      </div>
                    </div>
                  </template>
                  <template #cell-plan="{ row }">
                    {{ row.plan && row.plan.name }}
                  </template>
                  <template #cell-archivedAt="{ row }">
                    {{ row.archived_at ? $moment(row.archived_at).format('YYYY-MM-DD HH:mm') : '-' }}
                  </template>
                  <template #actions="{ row }">
                    <div class="btn-group">
                      <button @click="restoreTenant(row.id)" v-tooltip="$t('Restore')" class="btn btn-success btn-sm">
                        <i class="fas fa-undo" />
                      </button>
                      <button @click="permanentDeleteTenant(row.id)" v-tooltip="$t('Permanent Delete')"
                        class="btn btn-danger btn-sm">
                        <i class="fas fa-trash" />
                      </button>
                    </div>
                  </template>
                </GeneralTable>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page">
                <label>{{ $t('per_page') }} </label>
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
  </div>
</template>

<script>
import i18n from "~/plugins/i18n";
import DateRangePicker from "vue2-daterange-picker";
import moment from "moment";
import { mapGetters } from "vuex";
import axios from "axios";
import html2pdf from "html2pdf.js";
import GeneralTable from "../../../components/GeneralTable.vue";

export default {
  layout: "central",
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Tenants") };
  },
  components: {
    DateRangePicker,
    GeneralTable,
  },
  data: () => ({
    breadcrumbsCurrent: "Tenants",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Tenants",
        url: "",
      },
    ],
    activeTab: "active",
    query: "",
    archivedQuery: "",
    perPage: 10,
    clientPrefix: "",
    minDate: moment(new Date("01-01-2021")).format("YYYY-MM-DD"),
    maxDate: moment().add(1, "days").format("YYYY-MM-DD"),
    dateRange: {
      startDate: "",
      endDate: "",
    },
    archivedDateRange: {
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
    isDemoMode: window.config.isDemoMode,
    archivedItems: [],
    archivedLoading: false,
    archivedPagination: null,
    deletingAllArchived: false,
    refreshInterval: null,
    timerUpdateInterval: null,
    lastDataUpdate: null,
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
      return `/tenants/export/excel?start_date=${this.dateRange.startDate}&end_date=${this.dateRange.endDate}&term=${this.query}`;
    },
    tenantColumns() {
      return [
        { key: "index", label: this.$t("S.No"), sortable: false },
        { key: "domain", label: this.$t("Domain") },
        { key: "nameEmail", label: this.$t("Name & Email") },
        { key: "plan", label: this.$t("Plan") },
        { key: "onTrial", label: this.$t("On Trial") },
        { key: "isVerified", label: this.$t("Is Verified") },
        { key: "isSubscribed", label: this.$t("Is Subscribed") },
        { key: "banned", label: this.$t("Banned") },
        { key: "sessionStatus", label: this.$t("Session Status") },
        { key: "sessionTimer", label: this.$t("Active Duration") },
        { key: "workingTime", label: this.$t("Working Time") },
      ];
    },
    tenantsWithIndex() {
      return this.items.map((item, index) => ({
        ...item,
        index: this.pagination && this.pagination.current_page > 1
          ? this.pagination.per_page * (this.pagination.current_page - 1) + (index + 1)
          : index + 1,
      }));
    },
    archivedTenantColumns() {
      return [
        { key: "index", label: this.$t("S.No"), sortable: false },
        { key: "domain", label: this.$t("Domain") },
        { key: "nameEmail", label: this.$t("Name & Email") },
        { key: "plan", label: this.$t("Plan") },
        { key: "archivedAt", label: this.$t("Archived At") },
        { key: "archived_by_name", label: this.$t("Archived By") },
      ];
    },
    archivedTenantsWithIndex() {
      return this.archivedItems.map((item, index) => ({
        ...item,
        index: this.archivedPagination && this.archivedPagination.current_page > 1
          ? this.archivedPagination.per_page * (this.archivedPagination.current_page - 1) + (index + 1)
          : index + 1,
      }));
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
    // watch archived search data
    archivedQuery: function (newQ) {
      if (newQ === "") {
        if (this.archivedDateRange.startDate && this.archivedDateRange.endDate) {
          this.searchArchivedData();
        } else {
          this.getArchivedData();
        }
      } else {
        this.searchArchivedData();
      }
    },
  },
  created() {
    this.getData();
    this.getArchivedData();
    this.clientPrefix = this.appInfo.clientPrefix;
    this.lastDataUpdate = Date.now();

    // Set up auto-refresh every 30 seconds to update session data from server
    this.refreshInterval = setInterval(() => {
      if (this.activeTab === 'active') {
        this.getData();
      }
    }, 30000); // Refresh every 30 seconds

    // Set up timer update every second for real-time display
    this.timerUpdateInterval = setInterval(() => {
      // Force Vue to re-render to update timers
      this.$forceUpdate();
    }, 1000); // Update every second
  },
  beforeDestroy() {
    // Clear intervals when component is destroyed
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
    if (this.timerUpdateInterval) {
      clearInterval(this.timerUpdateInterval);
    }
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
        path: "/api/tenants?page=",
        currentPage: currentPage + "&perPage=" + this.perPage,
      });
      // Track when data was last updated for live timer calculation
      this.lastDataUpdate = Date.now();
    },

    async impersonate(id) {
      axios
        .get(`/api/impersonate/${id}`)
        .then(({ data }) => {
          window.location.replace(data.data.redirect_url);
        })
        .catch((error) => {
          this.$toast.error(
            this.$t("Error!"),
            error.response.data.message
          );
        });
    },

    // Pagination
    async paginate() {
      this.query === "" ? this.getData() : this.searchData();
    },

    // Reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },

    // search data
    async searchData() {
      this.$store.state.operations.loading = true;
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      await this.$store.dispatch("operations/searchData", {
        path: "/api/tenants/search",
        term: this.query,
        currentPage: currentPage + "&perPage=" + this.perPage,
        startDate: this.dateRange.startDate,
        endDate: this.dateRange.endDate,
      });
      // Track when data was last updated for live timer calculation
      this.lastDataUpdate = Date.now();
    },

    // Reload after search
    async reload() {
      this.query = "";
      await this.searchData();
    },


    // print table
    async print() {
      await this.$htmlToPaper("printMe");
    },

    async exportToPDF() {
      try {
        const element = document.getElementById("printMe");
        if (!element) {
          this.$toast.error(this.$t("Error!"), this.$t("Table not found"));
          return;
        }

        const style = document.createElement('style');
        style.setAttribute('data-pdf-export', 'true');
        style.textContent = `.no-print, .no-print * { display: none !important; }`;
        document.head.appendChild(style);

        const opt = {
          margin: [10, 10, 10, 10],
          filename: `tenants-${(new Date()).toISOString().slice(0, 10)}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, logging: false },
          jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
          pagebreak: { mode: ["avoid-all", "css", "legacy"] }
        };

        await html2pdf().set(opt).from(element).save();
        document.head.removeChild(style);
        this.$toast.success(this.$t("Success!"), this.$t("PDF exported successfully"));
      } catch (e) {
        const pdfStyle = document.querySelector('style[data-pdf-export]');
        if (pdfStyle) document.head.removeChild(pdfStyle);
        this.$toast.error(this.$t("Error!"), this.$t("Failed to export PDF"));
      }
    },

    // delete data
    async deleteData(slug) {
      console.log('Delete function called with slug:', slug);

      const confirmed = confirm(this.$t("Are you sure you want to archive this tenant? The tenant will be moved to archived section and can be restored later."));

      if (confirmed) {
        console.log('Sending delete request for tenant:', slug);

        try {
          const response = await this.$store.dispatch("operations/deleteData", {
            path: "/api/tenants/",
            slug: slug,
          });

          console.log('Delete response:', response);

          if (response === true) {
            this.$toast.success(
              this.$t("Archived"),
              this.$t("Tenant archived successfully")
            );
            this.getData();
          } else {
            console.error('Archive failed with response:', response);
            this.$toast.warning(
              this.$t("Failed"),
              this.$t("Archive failed")
            );
          }
        } catch (error) {
          console.error('Delete request error:', error);
          this.$toast.warning(
            this.$t("Failed"),
            this.$t("Archive failed")
          );
        }
      }
    },

    // Format working time
    formatWorkingTime(seconds) {
      if (!seconds || seconds === 0) {
        return "0h 0m";
      }
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      return `${hours}h ${minutes}m`;
    },

    // Format session timer (HH:MM:SS)
    formatSessionTimer(seconds) {
      if (!seconds || seconds === 0) {
        return "00:00:00";
      }
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    },

    // Format session timer with live calculation for current active session
    formatSessionTimerLive(activityStats) {
      if (!activityStats || !activityStats.has_active_sessions) {
        return "00:00:00";
      }

      // Get current session duration from server
      const currentDuration = activityStats.current_session_duration || 0;

      // The server already calculates this correctly, but we can add a small buffer
      // for real-time display (time since last data update, max 30 seconds)
      if (this.lastDataUpdate) {
        const secondsSinceUpdate = Math.floor((Date.now() - this.lastDataUpdate) / 1000);
        const liveBuffer = Math.min(30, secondsSinceUpdate);
        return this.formatSessionTimer(currentDuration + liveBuffer);
      }

      return this.formatSessionTimer(currentDuration);
    },

    // delete data
    async ban(id) {
      axios
        .post(window.location.origin + "/api/tenants/" + id + "/ban")
        .then((response) => {
          if (response.data.success === true) {
            this.$toast.success(
              this.$t(response.data.message),
              this.$t(response.data.message + "_success")
            );
            this.getData();
          } else {
            this.$toast.warning(
              this.$t("Failed"),
              this.$t("Ban failed")
            );
          }
        });
    },

    // Tab switching
    switchTab(tab) {
      this.activeTab = tab;
      if (tab === 'archived') {
        this.getArchivedData();
      } else {
        this.getData();
      }
    },

    // Get archived data
    async getArchivedData() {
      this.archivedLoading = true;
      try {
        const response = await axios.get(`/api/tenants/archived?perPage=${this.perPage}`);
        this.archivedItems = response.data.data;
        this.archivedPagination = response.data.meta;
      } catch (error) {
        console.error('Error fetching archived tenants:', error);
        this.$toast.error(this.$t("Error!"), this.$t("Failed to load archived tenants"));
      } finally {
        this.archivedLoading = false;
      }
    },

    // Search archived data
    async searchArchivedData() {
      this.archivedLoading = true;
      try {
        const params = new URLSearchParams({
          term: this.archivedQuery,
          perPage: this.perPage,
        });

        if (this.archivedDateRange.startDate && this.archivedDateRange.endDate) {
          params.append('startDate', this.archivedDateRange.startDate);
          params.append('endDate', this.archivedDateRange.endDate);
        }

        const response = await axios.get(`/api/tenants/archived?${params}`);
        this.archivedItems = response.data.data;
        this.archivedPagination = response.data.meta;
      } catch (error) {
        console.error('Error searching archived tenants:', error);
        this.$toast.error(this.$t("Error!"), this.$t("Failed to search archived tenants"));
      } finally {
        this.archivedLoading = false;
      }
    },

    // Update archived values
    async updateArchivedValues() {
      this.archivedDateRange.startDate = moment(this.archivedDateRange.startDate).format("YYYY-MM-DD");
      this.archivedDateRange.endDate = moment(this.archivedDateRange.endDate).format("YYYY-MM-DD");
      this.searchArchivedData();
    },

    // Reload archived data
    async reloadArchived() {
      this.archivedQuery = "";
      await this.searchArchivedData();
    },

    // Restore tenant
    async restoreTenant(id) {
      const confirmed = confirm(this.$t("Are you sure you want to restore this tenant?"));

      if (confirmed) {
        try {
          const response = await axios.post(`/api/tenants/${id}/restore`);
          if (response.data.success) {
            this.$toast.success(
              this.$t("Success"),
              this.$t("Tenant restored successfully")
            );
            this.getArchivedData();
            this.getData(); // Refresh active tenants too
          } else {
            this.$toast.error(
              this.$t("Failed"),
              this.$t("Failed to restore tenant")
            );
          }
        } catch (error) {
          console.error('Error restoring tenant:', error);
          this.$toast.error(
            this.$t("Error!"),
            error.response?.data?.message || this.$t("Failed to restore tenant")
          );
        }
      }
    },

    // Permanent delete tenant
    async permanentDeleteTenant(id) {
      const confirmed = confirm(this.$t("Are you sure you want to permanently delete this tenant? This action cannot be undone and will delete all data including the database."));

      if (confirmed) {
        try {
          const response = await axios.delete(`/api/tenants/${id}/permanent-delete`);
          if (response.data.success) {
            this.$toast.success(
              this.$t("Success"),
              this.$t("Tenant permanently deleted successfully")
            );
            this.getArchivedData();
          } else {
            this.$toast.error(
              this.$t("Failed"),
              this.$t("Failed to permanently delete tenant")
            );
          }
        } catch (error) {
          console.error('Error permanently deleting tenant:', error);
          this.$toast.error(
            this.$t("Error!"),
            error.response?.data?.message || this.$t("Failed to permanently delete tenant")
          );
        }
      }
    },

    // Delete all archived tenants
    async deleteAllArchivedTenants() {
      const count = this.archivedItems.length;
      const confirmed = confirm(
        this.$t("Are you sure you want to permanently delete all {count} archived tenants? This action cannot be undone and will delete all data including their databases.").replace('{count}', count)
      );

      if (confirmed) {
        this.deletingAllArchived = true;
        try {
          const response = await axios.delete('/api/tenants/archived/delete-all');
          if (response.data.success) {
            this.$toast.success(
              this.$t("Success"),
              response.data.message || this.$t("All archived tenants deleted successfully")
            );
            this.getArchivedData();
          } else {
            this.$toast.error(
              this.$t("Failed"),
              this.$t("Failed to delete all archived tenants")
            );
          }
        } catch (error) {
          console.error('Error deleting all archived tenants:', error);
          this.$toast.error(
            this.$t("Error!"),
            error.response?.data?.message || this.$t("Failed to delete all archived tenants")
          );
        } finally {
          this.deletingAllArchived = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.table-custom .table td {
  vertical-align: middle;
}

.profile-area {
  display: flex;
  align-items: center;
}

.profile-area img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
}

.profile-area a {
  display: block;
}
</style>

<style>
.dtable-footer {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 0 0 10px;
  flex-direction: column;
}

.card-footer .form-group.row.display-per-page {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
}

/* Tab styles */
.nav-tabs {
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 0;
}

.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  color: #495057;
  background-color: transparent;
  border-color: transparent;
  padding: 0.5rem 1rem;
  margin-bottom: -1px;
}

.nav-tabs .nav-link:hover {
  border-color: #e9ecef #e9ecef #dee2e6;
  isolation: isolate;
}

.nav-tabs .nav-link.active {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}

.nav-tabs .nav-link.active:hover {
  border-color: #dee2e6 #dee2e6 #fff;
}

.tab-content {
  border: 1px solid #dee2e6;
  border-top: none;
  padding: 1rem;
  background-color: #fff;
}

.tab-pane {
  display: none;
}

.tab-pane.active {
  display: block;
}
</style>
