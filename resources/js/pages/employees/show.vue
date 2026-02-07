<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->

    <DetailsActivityTabs
      v-if="allData"
      :show-tabs="!!allData"
      default-tab="details"
      @details-clicked="loadInitialData"
      @activity-clicked="getActivity"
    >
      <template #details>
        <div class="row">
          <div
            class="col-md-12 m-auto"
            :class="
              !$can('payroll-list') && !$can('increment-list')
                ? 'col-lg-6'
                : 'col-lg-3'
            "
          >
            <!-- Profile Image -->
            <div class="card">
              <div class="card-body box-profile">
                <div class="text-center mb-2">
                  <a
                    href="#"
                    id="show-modal"
                    @click="previewModal(allData.image || '')"
                  >
                    <img
                      v-bind="getAvatarProps(allData.image, 'employees')"
                      class="profile-user-img img-fluid img-circle"
                      loading="lazy"
                    />
                  </a>
                </div>
                <h3 class="profile-username text-center">{{ allData.name }}</h3>
                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item">
                    <strong>{{ $t("Emp ID") }}</strong>
                    <span class="float-right">{{
                      allData.empID | withPrefix(employeePrefix)
                    }}</span>
                  </li>
                  <li v-if="allData.department" class="list-group-item">
                    <strong>{{ $t("Department") }}</strong>
                    <span class="float-right">{{
                      allData.department.name
                    }}</span>
                  </li>
                  <li v-if="allData.designation" class="list-group-item">
                    <strong>{{ $t("Designation") }}</strong>
                    <span class="float-right">{{ allData.designation }}</span>
                  </li>
                  <li v-if="allData.mobileNumber" class="list-group-item">
                    <strong>{{ $t("Contact Number") }}</strong>
                    <span class="float-right">{{ allData.mobileNumber }}</span>
                  </li>
                  <li v-if="allData.email" class="list-group-item">
                    <strong>{{ $t("Email") }}</strong>
                    <span class="float-right">{{ allData.email }}</span>
                  </li>
                  <li v-if="allData.salary" class="list-group-item">
                    <strong>{{ $t("Basic Salary") }}</strong>
                    <span class="float-right">{{ parseFloat(allData.salary).toFixed(2) }} <span class="saudi-riyal">ê</span></span>
                  </li>
                  <li v-if="allData.totalSalary" class="list-group-item">
                    <strong>{{ $t("Current Salary") }}</strong>
                    <span class="float-right">{{ parseFloat(allData.totalSalary).toFixed(2) }} <span class="saudi-riyal">ê</span></span>
                  </li>
                  <li v-if="allData.commission" class="list-group-item">
                    <strong>{{ $t("Commission") }}</strong>
                    <span class="float-right">{{ allData.commission }}%</span>
                  </li>

                  <li v-if="allData.gender" class="list-group-item">
                    <strong>{{ $t("Gender") }}</strong>
                    <span class="float-right">{{ allData.gender }}</span>
                  </li>
                  <li v-if="allData.bloodGroup" class="list-group-item">
                    <strong>{{ $t("Blood Group") }}</strong>
                    <span class="float-right">{{ allData.bloodGroup }}</span>
                  </li>
                  <li v-if="allData.religion" class="list-group-item">
                    <strong>{{ $t("Religion") }}</strong>
                    <span class="float-right">{{ allData.religion }}</span>
                  </li>
                  <li v-if="allData.birthDate" class="list-group-item">
                    <strong>{{ $t("Birth Date") }}</strong>
                    <span class="float-right">{{
                      allData.birthDate | moment("Do MMM, YYYY")
                    }}</span>
                  </li>
                  <li v-if="allData.joiningDate" class="list-group-item">
                    <strong>{{ $t("Join Date") }}</strong>
                    <span class="float-right">{{
                      allData.joiningDate | moment("Do MMM, YYYY")
                    }}</span>
                  </li>
                  <li v-if="allData.appointmentDate" class="list-group-item">
                    <strong>{{
                      $t("Appointment Date")
                    }}</strong>
                    <span class="float-right">{{
                      allData.appointmentDate | moment("Do MMM, YYYY")
                    }}</span>
                  </li>
                  <li v-if="allData.address" class="list-group-item">
                    <strong>{{ $t("Address") }}</strong>
                    <span class="float-right">{{ allData.address }}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>{{ $t("Allow Employee Login") }}</strong>
                    <span v-if="allData.user" class="float-right">{{
                      $t("Yes")
                    }}</span>
                    <span v-else class="float-right">{{
                      $t("No")
                    }}</span>
                  </li>
                  <li
                    v-if="allData.user && allData.user.role"
                    class="list-group-item"
                  >
                    <strong>{{ $t("Role") }}</strong>
                    <span class="float-right">{{
                      allData.user.role.name
                    }}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <strong>{{ $t("Allowed Banks / Accounts") }}</strong>
                    <span class="text-right flex-grow-1 ml-2">
                      <template v-if="allowedAccountLabels.length > 0">
                        <span
                          v-for="(label, idx) in allowedAccountLabels"
                          :key="idx"
                          class="badge bg-secondary mr-1 mb-1"
                        >
                          {{ label }}
                        </span>
                      </template>
                      <span v-else class="text-muted">{{ $t("All accounts") }}</span>
                    </span>
                  </li>
                </ul>
                <span
                  v-if="allData.status === 1"
                  class="btn-block btn bg-success"
                  >{{ $t("Active") }}</span
                >
                <span v-else class="badge bg-danger">{{
                  $t("Inactive")
                }}</span>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
          <div
            v-if="$can('payroll-list') || $can('increment-list')"
            class="col-md-12 col-lg-9"
          >
            <div class="card">
              <div class="card-header p-2">
                <div class="row">
                  <div class="col-md-8">
                    <ul class="nav nav-pills">
                      <li v-if="$can('payroll-list')" class="nav-item">
                        <a
                          class="nav-link active"
                          href="#payroll"
                          data-toggle="tab"
                          >{{ $t("Payroll") }}</a
                        >
                      </li>
                      <li v-if="$can('increment-list')" class="nav-item">
                        <a
                          @click="getEmployeeSalIncrements"
                          class="nav-link"
                          href="#increment"
                          data-toggle="tab"
                          >{{ $t("Increment History") }}</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <router-link
                      :to="{ name: 'employees.index' }"
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
              <!-- /.card-header -->
              <div class="card-body">
                <div class="tab-content">
                  <div
                    v-if="$can('payroll-list')"
                    class="tab-pane active"
                    id="payroll"
                  >
                    <div>
                      <div class="card-body p-0 position-relative">
                        <div class="col-md-12 large-serach-box">
                          <search
                            v-model="query"
                            @reset-pagination="resetPagination"
                            @reload="reload"
                          />
                        </div>
                        <table-loading v-show="loading" />
                        <div class="table-responsive table-custom mt-3">
                          <GeneralTable
                            :columns="payrollColumns"
                            :rows="payrollRows"
                            :loading="loading"
                            :actions="payrollActions"
                            wrapper-class=""
                          >
                            <template #cell-salaryDate="{ value }">
                              <span v-if="value">{{ value | moment("Do MMM, YYYY") }}</span>
                            </template>
                            <template #cell-totalPaid="{ value }">
                              <span v-if="value">{{ value }} <span class="saudi-riyal">ê</span></span>
                            </template>
                            <template #cell-status="{ value }">
                              <span v-if="value === 1" class="badge bg-success">{{ $t("Active") }}</span>
                              <span v-else class="badge bg-danger">{{ $t("Inactive") }}</span>
                            </template>
                          </GeneralTable>
                        </div>
                      </div>
                      <!-- NEW PAGINATION -->
                      <div
                        v-if="pagination && pagination.total > 0"
                        class="dtable-footer"
                      >
                        <div class="form-group row display-per-page">
                          <label>{{ $t("per_page") }} </label>
                          <div>
                            <select
                              @change="updatePerPager('payroll')"
                              v-model="perPage"
                              class="form-control form-control-sm ml-1"
                            >
                              <!-- options component -->
                              <option
                                v-for="option in options"
                                :value="option.value"
                              >
                                {{ option.text }}
                              </option>
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
                      <!-- NEW PAGINATION END -->
                    </div>
                  </div>
                  <div
                    v-if="$can('increment-list')"
                    class="tab-pane"
                    id="increment"
                  >
                    <div>
                      <div class="card-body p-0 position-relative">
                        <div class="col-md-12 large-serach-box">
                          <search
                            v-model="salIncreQuery"
                            @reset-pagination="resetSalIncrePagination"
                            @reload="salIncreReload"
                          />
                        </div>
                        <table-loading v-show="salIncreLoading" />
                        <div class="table-responsive table-custom mt-3">
                          <GeneralTable
                            :columns="incrementsColumns"
                            :rows="incrementsRows"
                            :loading="salIncreLoading"
                            :actions="incrementsActions"
                            wrapper-class=""
                          >
                            <template #cell-reason="{ row }">
                              <router-link
                                :to="{
                                  name: 'increments.show',
                                  params: { slug: row._raw.slug },
                                }"
                              >
                                {{ row.reason }}
                              </router-link>
                            </template>
                            <template #cell-basicSalary="{ value }">
                              <span v-if="value">{{ value }} <span class="saudi-riyal">ê</span></span>
                            </template>
                            <template #cell-incrementAmount="{ value }">
                              {{ value }} <span class="saudi-riyal">ê</span>
                            </template>
                            <template #cell-presentSalary="{ value }">
                              <span v-if="value">{{ value }} <span class="saudi-riyal">ê</span></span>
                            </template>
                            <template #cell-incrementDate="{ value }">
                              <span v-if="value">{{ value | moment("Do MMM, YYYY") }}</span>
                            </template>
                            <template #cell-status="{ value }">
                              <span v-if="value === 1" class="badge bg-success">{{ $t("Active") }}</span>
                              <span v-else class="badge bg-danger">{{ $t("Inactive") }}</span>
                            </template>
                          </GeneralTable>
                        </div>
                      </div>
                      <!--                  <div
                    v-if="salIncrePagination.last_page > 1"
                    class="mt-3 clearfix"
                  >
                    <pagination
                      :pagination="salIncrePagination"
                      :offset="5"
                      class="justify-flex-end"
                      @paginate="salIncrePaginate"
                    />
                  </div>-->
                      <!-- NEW PAGINATION -->
                      <div
                        v-if="
                          salIncrePagination && salIncrePagination.total > 0
                        "
                        class="dtable-footer"
                      >
                        <div class="form-group row display-per-page">
                          <label>{{ $t("per_page") }} </label>
                          <div>
                            <select
                              @change="updatePerPager('increment-history')"
                              v-model="perPage"
                              class="form-control form-control-sm ml-1"
                            >
                              <!-- options component -->
                              <option
                                v-for="option in options"
                                :value="option.value"
                              >
                                {{ option.text }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <!-- pagination-start -->
                        <pagination
                          v-if="
                            salIncrePagination &&
                            salIncrePagination.last_page > 1
                          "
                          :pagination="salIncrePagination"
                          :offset="5"
                          class="justify-flex-end"
                          @paginate="salIncrePaginate"
                        />
                        <!-- pagination-end -->
                      </div>
                      <!-- NEW PAGINATION END -->
                    </div>
                  </div>
                </div>
                <!-- /.tab-content -->
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.nav-tabs-custom -->
          </div>
          <!-- /.col -->
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
                <a
                  @click="refreshActivityTable()"
                  href="#"
                  v-tooltip="$t('Refresh')"
                  class="btn btn-success"
                >
                  <i class="fas fa-sync"></i>
                </a>
              </div>
            </div>
          </div>
          <table-loading v-show="activityLoading" />
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search
                  v-model="activitySearchQuery"
                  @reset-pagination="resetActivityPagination()"
                  @reload="activityReload"
                />
              </div>
            </div>
            <div id="printMe" class="table-responsive table-custom mt-3">
              <div
                v-show="allActivityLog.length > 0"
                v-for="(data, i) in allActivityLog"
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
                            <p class="mb-0">{{ $t(data.description) }}</p>
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
              <div
                class="text-center"
                v-show="!activityLoading && !allActivityLog.length"
              >
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
                    @change="updateActivityPerPager"
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
                v-if="
                  allActivityLogPagination &&
                  allActivityLogPagination.last_page > 1
                "
                :pagination="
                  allActivityLog
                    ? allActivityLogPagination
                    : { current_page: 1 }
                "
                :offset="5"
                class="justify-flex-end"
                @paginate="activityPaginate"
              />
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
        <img :src="allData.image" class="rounded img-fluid" loading="lazy" />
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import avatarMixin from "~/mixins/avatarMixin";
import GeneralTable from "~/components/GeneralTable";
import DetailsActivityTabs from "~/components/DetailsActivityTabs";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Employee Details") };
  },
  mixins: [avatarMixin],
  components: {
    GeneralTable,
    DetailsActivityTabs,
  },
  data: () => ({
    breadcrumbsCurrent: "Employee Details",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Employees",
        url: "employees.index",
      },
      {
        name: "Details",
        url: "",
      },
    ],
    allIncrements: "",
    salIncreLoading: false,
    salIncrePagination: "",
    url: null,
    showModal: false,
    allData: "",
    query: "",
    salIncreQuery: "",
    employeePrefix: "",
    activitySearchQuery: "",
    allActivityLog: "",
    allActivityLogPagination: "",
    activityLoading: false,
    perPage: 10,
    allowedAccountsOptions: [],
    options: [
      { value: "10", text: "10" },
      { value: "25", text: "25" },
      { value: "50", text: "50" },
      { value: "100", text: "100" },
    ],
  }),
  // Map Getters
  computed: {
    ...mapGetters("operations", ["items", "loading", "pagination", "appInfo"]),

    // Payroll columns
    payrollColumns() {
      const columns = [
        { key: "index", label: this.$t("#"), align: "text-center" },
        { key: "salaryMonth", label: this.$t("Salary Month"), align: "text-center" },
        { key: "salaryDate", label: this.$t("Salary Date"), align: "text-center" },
        { key: "account", label: this.$t("Account"), align: "text-center" },
        { key: "totalPaid", label: this.$t("Total Paid"), align: "text-center" },
        { key: "status", label: this.$t("Status"), align: "text-center" },
      ];
      if (this.$can('payroll-edit') || this.$can('payroll-view') || this.$can('payroll-delete')) {
        columns.push({ key: "action", label: this.$t("Action"), align: "text-right" });
      }
      return columns;
    },

    // Payroll rows
    payrollRows() {
      if (!this.items || this.items.length === 0) return [];
      return this.items.map((data, i) => {
        const index = this.pagination && this.pagination.current_page > 1
          ? this.pagination.per_page * (this.pagination.current_page - 1) + (i + 1)
          : i + 1;
        return {
          index,
          salaryMonth: data.salaryMonth,
          salaryDate: data.salaryDate,
          account: data.transaction?.cashbook_account?.account_number || '-',
          totalPaid: data.transaction?.amount || 0,
          status: data.status,
          action: data,
          _raw: data,
        };
      });
    },

    // Payroll actions
    payrollActions() {
      return [
        {
          label: this.$t('View'),
          icon: 'fas fa-eye',
          class: 'btn-primary btn-sm',
          handler: (row) => {
            this.$router.push({ name: 'payroll.show', params: { slug: row._raw.slug } });
          },
          show: () => this.$can('payroll-view'),
        },
        {
          label: this.$t('Edit'),
          icon: 'fas fa-edit',
          class: 'btn-info btn-sm',
          handler: (row) => {
            this.$router.push({ name: 'payroll.edit', params: { slug: row._raw.slug } });
          },
          show: () => this.$can('payroll-edit'),
        },
        {
          label: this.$t('Delete'),
          icon: 'fas fa-trash',
          class: 'btn-danger btn-sm',
          handler: (row) => {
            this.deletePayroll(row._raw.slug);
          },
          show: () => this.$can('payroll-delete'),
        },
      ];
    },

    // Increments columns
    incrementsColumns() {
      const columns = [
        { key: "index", label: this.$t("#"), align: "text-center" },
        { key: "reason", label: this.$t("Increment Reason"), align: "text-left" },
        { key: "basicSalary", label: this.$t("Basic Salary"), align: "text-center" },
        { key: "incrementAmount", label: this.$t("Increment Amount"), align: "text-center" },
        { key: "presentSalary", label: this.$t("Present Salary"), align: "text-center" },
        { key: "incrementDate", label: this.$t("Increment Date"), align: "text-center" },
        { key: "status", label: this.$t("Status"), align: "text-center" },
      ];
      if (this.$can('increment-edit') || this.$can('increment-view') || this.$can('increment-delete')) {
        columns.push({ key: "action", label: this.$t("Action"), align: "text-right" });
      }
      return columns;
    },

    // Increments rows
    incrementsRows() {
      if (!this.allIncrements || this.allIncrements.length === 0) return [];
      return this.allIncrements.map((data, i) => {
        const index = this.salIncrePagination && this.salIncrePagination.current_page > 1
          ? this.salIncrePagination.per_page * (this.salIncrePagination.current_page - 1) + (i + 1)
          : i + 1;
        return {
          index,
          reason: data.reason,
          basicSalary: data.employee?.salary || 0,
          incrementAmount: data.incrementAmount,
          presentSalary: data.employee ? (data.employee.salary + data.incrementAmount) : 0,
          incrementDate: data.incrementDate,
          status: data.status,
          action: data,
          _raw: data,
        };
      });
    },

    // Allowed accounts labels for display (resolve IDs to labels from options)
    allowedAccountLabels() {
      if (!this.allData || !this.allData.allowedAccountIds || !Array.isArray(this.allData.allowedAccountIds)) {
        return [];
      }
      if (!this.allowedAccountsOptions || this.allowedAccountsOptions.length === 0) {
        return this.allData.allowedAccountIds.map((id) => `#${id}`);
      }
      return this.allData.allowedAccountIds.map((id) => {
        const acc = this.allowedAccountsOptions.find((a) => a.id === id);
        return acc ? acc.label : `#${id}`;
      });
    },
    // Increments actions
    incrementsActions() {
      return [
        {
          label: this.$t('View'),
          icon: 'fas fa-eye',
          class: 'btn-primary btn-sm',
          handler: (row) => {
            this.$router.push({ name: 'increments.show', params: { slug: row._raw.slug } });
          },
          show: () => this.$can('increment-view'),
        },
        {
          label: this.$t('Edit'),
          icon: 'fas fa-edit',
          class: 'btn-info btn-sm',
          handler: (row) => {
            this.$router.push({ name: 'increments.edit', params: { slug: row._raw.slug } });
          },
          show: () => this.$can('increment-edit'),
        },
        {
          label: this.$t('Delete'),
          icon: 'fas fa-trash',
          class: 'btn-danger btn-sm',
          handler: (row) => {
            this.deleteIncrement(row._raw.slug);
          },
          show: () => this.$can('increment-delete'),
        },
      ];
    },
  },
  watch: {
    // watch invoice search data
    query: function (newQ, oldQ) {
      if (newQ === "") {
        this.getEmployeePayroll();
      } else {
        this.searchEmployeePayroll();
      }
    },
    // watch salary increment search data
    salIncreQuery: function (newQ, oldQ) {
      if (newQ === "") {
        this.getEmployeeSalIncrements();
      } else {
        this.searchEmployeeSalIncrements();
      }
    },

    // watch activitySearchQuery data
    activitySearchQuery: function (newQ, oldQ) {
      if (newQ === "") {
        this.getActivity();
      } else {
        this.searchActivity();
      }
    },
  },

  created() {
    this.getEmployee();
    this.getAllowedAccountsOptions();
    this.getEmployeePayroll();
    this.employeePrefix = this.appInfo.employeePrefix;
    Fire.$on("AfterDelete", () => {
      this.getEmployeePayroll();
      this.getEmployeeSalIncrements();
    });
  },
  methods: {
    async loadInitialData() {
      this.getEmployee();
      this.getEmployeePayroll();
    },

    // get the employee
    async getEmployee() {
      const { data } = await axios.get(
        window.location.origin + "/api/employees/" + this.$route.params.slug
      );
      this.allData = data.data;
    },

    // load all accounts (for resolving allowed_account_ids to labels)
    async getAllowedAccountsOptions() {
      try {
        const { data } = await axios.get(
          window.location.origin + "/api/all-accounts",
          { params: { for_employee_assignment: 1 } }
        );
        this.allowedAccountsOptions = Array.isArray(data.data) ? data.data : [];
      } catch (e) {
        console.error("Error loading accounts for display:", e);
        this.allowedAccountsOptions = [];
      }
    },

    // update per page count
    updatePerPager(tabName) {
      this.pagination.current_page = 1;
      this.salIncrePagination.hasOwnProperty("current_page")
        ? (this.salIncrePagination.current_page = 1)
        : "";

      switch (tabName) {
        case "payroll":
          this.query === ""
            ? this.getEmployeePayroll()
            : this.searchEmployeePayroll();
          break;
        case "increment-history":
          this.query === ""
            ? this.getEmployeeSalIncrements()
            : this.searchEmployeeSalIncrements();
          break;
      }
    },

    // get the employee payroll
    async getEmployeePayroll() {
      this.$store.state.operations.loading = true;
      await this.$store.dispatch("operations/fetchData", {
        path: "/api/employee-payroll/" + this.$route.params.slug + "?page=",
        currentPage: this.pagination.current_page + "&perPage=" + this.perPage,
      });
    },

    // search employee payroll
    async searchEmployeePayroll() {
      this.$store.state.operations.loading = true;
      await this.$store.dispatch("operations/searchData", {
        term: this.query,
        path: "/api/employee-payroll/" + this.$route.params.slug + "/search/",
        currentPage: this.pagination.current_page + "&perPage=" + this.perPage,
      });
    },

    // pagination
    async paginate() {
      this.query === ""
        ? this.getEmployeePayroll()
        : this.searchEmployeePayroll();
    },

    // reset purchase pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },

    // reload purchases after search
    async reload() {
      this.query = "";
    },

    // get the employee salary increments
    async getEmployeeSalIncrements() {
      this.salIncreLoading = true;
      let currentPage = this.allIncrements
        ? this.salIncrePagination.current_page
        : 1;
      const { data } = await axios.get(
        window.location.origin +
          "/api/employee-increments/" +
          this.$route.params.slug +
          "?page=" +
          currentPage +
          "&perPage=" +
          this.perPage
      );
      this.allIncrements = data.data;
      this.salIncrePagination = data.meta;
      this.salIncreLoading = false;
    },

    // search employee salary increments
    async searchEmployeeSalIncrements() {
      this.salIncreLoading = true;
      let currentPage = this.allIncrements
        ? this.salIncrePagination.current_page
        : 1;
      const { data } = await axios.get(
        window.location.origin +
          "/api/employee-increments/" +
          this.$route.params.slug +
          "/search?term=" +
          this.salIncreQuery +
          "&page=" +
          currentPage +
          "&perPage=" +
          this.perPage
      );
      this.allIncrements = data.data;
      this.salIncrePagination = data.meta;
      this.salIncreLoading = false;
    },

    // salary increments pagination
    async salIncrePaginate() {
      this.salIncreQuery === ""
        ? this.getEmployeeSalIncrements()
        : this.searchEmployeeSalIncrements();
    },

    // reset increments pagination
    async resetSalIncrePagination() {
      this.salIncrePagination.current_page = 1;
    },

    // Reload increments after search
    async salIncreReload() {
      this.salIncreQuery = "";
    },

    // print
    printWindow() {
      window.print();
    },

    // print table
    async printActivityLog() {
      await this.$htmlToPaper("printMe");
    },

    // get activity logs
    async getActivity() {
      this.activityLoading = true;
      let currentPage = this.allActivityLog
        ? this.allActivityLogPagination.current_page
        : 1;
      let slug = this.$route.params.slug;
      let modelName = "Employee";

      const baseUrl = `${window.location.origin}/api/activity-log-specific`;
      const queryParams = `?page=${currentPage}&perPage=${this.perPage}&slug=${slug}&modelName=${modelName}`;
      const url = baseUrl + queryParams;

      const { data } = await axios.get(url);

      this.allActivityLog = data.data;
      this.allActivityLogPagination = data.meta;
      this.activityLoading = false;
    },

    // search data
    async searchActivity() {
      this.activityLoading = true;
      let currentPage = this.allActivityLog
        ? this.allActivityLogPagination.current_page
        : 1;
      let term = this.activitySearchQuery;
      let slug = this.$route.params.slug;
      let modelName = "Employee";

      const baseUrl = `${window.location.origin}/api/activity-log-specific`;
      const queryParams = `?page=${currentPage}&perPage=${this.perPage}&term=${term}&slug=${slug}&modelName=${modelName}`;
      const url = baseUrl + queryParams;

      const { data } = await axios.get(url);

      this.allActivityLog = data.data;
      this.allActivityLogPagination = data.meta;
      this.activityLoading = false;
    },

    // activity pagination
    async activityPaginate() {
      this.getActivity();
    },

    // update activity per page count
    updateActivityPerPager() {
      this.allActivityLogPagination.current_page = 1;
      this.activitySearchQuery === ""
        ? this.getActivity()
        : this.searchActivity();
    },

    // reload after search
    async activityReload() {
      this.activitySearchQuery = "";
    },

    // refresh activity table
    async refreshActivityTable() {
      this.activitySearchQuery = "";
      if (this.allActivityLogPagination) {
        this.allActivityLogPagination.current_page = 1;
      }
      this.activitySearchQuery === ""
        ? await this.getActivity()
        : await this.searchActivity();
      this.$toast.success(
        this.$t("Refreshed"),
        this.$t("Activity log has been refreshed successfully")
      );
    },

    // reset activity pagination
    async resetActivityPagination() {
      this.allActivityLogPagination.current_page = 1;
    },

    // dispaly modal
    previewModal(image) {
      this.imagePath = image;
      if (this.showModal) {
        return (this.showModal = false);
      }
      return (this.showModal = true);
    },

    // calcualte total paid
    calculateTotalPaid() {
      let totalPaid = 0;
      this.allData.loans.forEach(function (loan) {
        totalPaid += Number(loan.totalPaid);
      });
      return totalPaid;
    },

    // delete payroll
    async deletePayroll(slug) {
      Swal.fire({
        title: this.$t("Are you sure?"),
        text: this.$t("You will not be able to return to this!"),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"),cancelButtonText: this.$t("Cancel"),
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          this.$store
            .dispatch("operations/deleteData", {
              path: "/api/payroll/",
              slug: slug,
            })
            .then((response) => {
              if (response === true) {
                this.$toast.success(
                  this.$t("Deleted!"),
                  this.$t("Deleted successfully.")
                );
                Fire.$emit("AfterDelete");
              } else {
                this.$toast.warning(
                  this.$t("Failed!"),
                  this.$t("There was something wrong.")
                );
              }
            });
        }
      });
    },

    // delete increment
    async deleteIncrement(slug) {
      Swal.fire({
        title: this.$t("Are you sure?"),
        text: this.$t("You will not be able to return to this!"),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"),cancelButtonText: this.$t("Cancel"),
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          this.$store
            .dispatch("operations/deleteData", {
              path: "/api/increments/",
              slug: slug,
            })
            .then((response) => {
              if (response === true) {
                this.$toast.success(
                  this.$t("Deleted!"),
                  this.$t("Deleted successfully.")
                );
                Fire.$emit("AfterDelete");
              } else {
                this.$toast.warning(
                  this.$t("Failed!"),
                  this.$t("There was something wrong.")
                );
              }
            });
        }
      });
    },
  },
};
</script>

<style scoped>
.invoices-table {
  border-collapse: separate;
  border-spacing: 0;
}

.invoices-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.invoices-table thead tr {
  border: none !important;
}

.invoices-table thead th:first-child {
  border-top-left-radius: 10px;
}

.invoices-table thead th:last-child {
  border-top-right-radius: 10px;
}

/* RTL styles for Arabic language */
[dir="rtl"] .invoices-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .invoices-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}

.invoices-table .badge.bg-success {
  background-color: #28a745 !important;
  color: #ffffff !important;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
}

.invoices-table .badge.bg-danger {
  background-color: #dc3545 !important;
  color: #ffffff !important;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
}

.invoices-table td {
  position: relative;
  overflow: visible;
}
</style>
