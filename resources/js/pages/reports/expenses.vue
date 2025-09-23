<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row no-print">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <button type="button" class="btn btn-info" @click="saveTemporary" title="Save Filter Settings">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- form start -->
          <form role="form">
            <div class="card-body">
              <div class="row">
                <div v-if="items" class="form-group col-md-6">
                  <label for="category">{{ $t("Category Name") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.category" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('category') }" name="category"
                    :placeholder="$t('Select a category')" @input="getSubCategories" />
                  <has-error :form="form" field="category" />
                </div>
                <div v-if="items" class="form-group col-md-6">
                  <label for="subCategory">{{ $t("Sub Category Name")
                  }}<span class="required">*</span></label>
                  <v-select :disabled="form.category.id == 0" v-model="form.subCategory" :options="subCategories"
                    label="name" :class="{ 'is-invalid': form.errors.has('subCategory') }" name="subCategory"
                    :placeholder="$t('Select a category')" />
                  <has-error :form="form" field="subCategory" />
                </div>
              </div>
              <div class="col-12">
                <template :class="w - 100">
                  <date-range-picker :from="form.fromDate" :to="form.toDate" :panel="$route.query.panel"
                    @update="update" />
                </template>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-if="expenses && expenses.length > 0" class="row">
      <div class="col-lg-12">
        <div class="invoice p-3 mb-3">
          <!-- info row -->
          <div class="row invoice-info">
            <div class="col-sm-4 invoice-col">
              <CompanyInfo />
            </div>
            <div class="col-sm-6 offset-sm-2 invoice-col float-right text-md-right">
              <h5>{{ $t("Expense Report") }}</h5>
              <strong>{{ $t("Date") }}:</strong>
              {{ date | moment("Do MMM, YYYY") }}<br />
              <strong>{{ $t("Category") }}:</strong>
              {{ form.category.name }}<br />
              <span v-if="form.subCategory"><strong>{{ $t("Sub Category") }}:</strong>
                {{ form.subCategory.name }}<br /></span>
              <strong>{{ $t("Date Range") }}:</strong>
              {{ form.fromDate | moment("Do MMM, YYYY") }} -
              {{ form.toDate | moment("Do MMM, YYYY") }} <br />
            </div>
          </div>
          <hr />
          <div class="row mt-5 position-relative">
            <table-loading v-show="loading" />
            <div class="table-responsive table-custom">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th>{{ $t("#") }}</th>
                    <th>{{ $t("Date") }}</th>
                    <th>{{ $t("Expense Reason") }}</th>
                    <th>{{ $t("Category") }}</th>
                    <th>{{ $t("Sub Category") }}</th>
                    <th>{{ $t("Amount") }}</th>
                    <th>{{ $t("Account") }}</th>
                    <th>{{ $t("Status") }}</th>
                    <th class="text-right">{{ $t("Created By") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, i) in expenses" :key="i">
                    <td>{{ ++i }}</td>
                    <td>
                      <span v-if="data.date">{{
                        data.date | moment("Do MMM, YYYY")
                      }}</span>
                    </td>
                    <td>{{ data.reason }}</td>
                    <td>
                      <span v-if="data.category">
                        {{ data.category.code | withPrefix(categoryPrefix) }}
                      </span>
                    </td>
                    <td>
                      <span v-if="data.subCategory">
                        {{
                          data.subCategory.code | withPrefix(subCategoryPrefix)
                        }}
                      </span>
                    </td>
                    <td>
                      <span v-if="data.transaction">{{
                        data.transaction.amount | withCurrency
                      }}</span>
                    </td>
                    <td>
                      <span v-if="data.account">
                        {{ data.account.accountNumber }}
                      </span>
                    </td>
                    <td>
                      <span v-if="data.status === 1" class="badge bg-success">{{
                        $t("Active")
                      }}</span>
                      <span v-else class="badge bg-danger">{{
                        $t("Inactive")
                      }}</span>
                    </td>
                    <td class="text-right">{{ data.createdBy }}</td>
                  </tr>
                  <tr>
                    <td colspan="5" class="text-right">
                      <strong>{{ $t("Total") }}</strong>
                    </td>
                    <td colspan="4">
                      <strong>{{
                        calculateTotal(expenses) | withCurrency
                      }}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- this row will not appear when printing -->
          <div class="row no-print mt-5">
            <div class="col-12">
              <router-link :to="{ name: 'inventory.index' }" class="btn btn-info float-right">
                <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
              </router-link>
              <a :href="exportExcelUrl" v-tooltip="$t('Export to Excel')" class="btn btn-info">
                <i class="fa fa-arrow-circle-down"></i>
              </a>
              <a :href="exportPdfUrl" v-tooltip="$t('Export to PDF')" class="btn btn-secondary">
                <i class="fas fa-file-export"></i>
              </a>
              <a 
                v-if="expenses && expenses.length > 0 && form.category" 
                :href="printTemplateUrl" 
                target="_blank" 
                v-tooltip="$t('Print with Template')" 
                class="btn btn-success"
              >
                <i class="fas fa-print"></i> {{ $t("Print with Template") }}
              </a>
              <a href="#" @click="printWindow" class="btn btn-default"><i class="fas fa-print"></i> {{ $t("Print")
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="expenses && expenses.length <= 0" class="row">
      <div class="col-lg-12 col-xl-10 offset-xl-1">
        <EmptyTable />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
import axios from "axios";
import { mapGetters } from "vuex";
import "vue-mj-daterangepicker/dist/vue-mj-daterangepicker.css";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Expense Report") };
  },
  data: () => ({
    breadcrumbsCurrent: "Expense Report",
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
        name: "Expense Report",
        url: "",
      },
    ],
    form: new Form({
      fromDate: String(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)),
      toDate: String(new Date()),
      category: "",
      subCategory: "",
    }),
    subCategories: [],
    loading: false,
    expenses: "",
    date: new Date(),
    categoryPrefix: "",
    subCategoryPrefix: "",
  }),

  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
    exportExcelUrl() {
      const params = new URLSearchParams();
      if (this.form.category && this.form.category.id) {
        params.append('category[id]', this.form.category.id);
        params.append('category[name]', this.form.category.name);
      }
      if (this.form.subCategory && this.form.subCategory.id) {
        params.append('subCategory[id]', this.form.subCategory.id);
        params.append('subCategory[name]', this.form.subCategory.name);
      }
      if (this.form.fromDate) {
        params.append('fromDate', this.form.fromDate);
      }
      if (this.form.toDate) {
        params.append('toDate', this.form.toDate);
      }
      return `/reports/expenses-report/export?${params.toString()}`;
    },
    exportPdfUrl() {
      const params = new URLSearchParams();
      if (this.form.category && this.form.category.id) {
        params.append('category[id]', this.form.category.id);
        params.append('category[name]', this.form.category.name);
      }
      if (this.form.subCategory && this.form.subCategory.id) {
        params.append('subCategory[id]', this.form.subCategory.id);
        params.append('subCategory[name]', this.form.subCategory.name);
      }
      if (this.form.fromDate) {
        params.append('fromDate', this.form.fromDate);
      }
      if (this.form.toDate) {
        params.append('toDate', this.form.toDate);
      }
      return `/reports/expenses-report/pdf?${params.toString()}`;
    },
    printTemplateUrl() {
      // Create a dynamic print template URL for expenses report with current filters
      const params = new URLSearchParams();
      
      // Always pass category information (required by API)
      if (this.form.category) {
        params.append('category[id]', this.form.category.id);
        params.append('category[name]', this.form.category.name);
      }
      if (this.form.subCategory && this.form.subCategory.id) {
        params.append('subCategory[id]', this.form.subCategory.id);
        params.append('subCategory[name]', this.form.subCategory.name);
      }
      if (this.form.fromDate) {
        params.append('fromDate', this.form.fromDate);
      }
      if (this.form.toDate) {
        params.append('toDate', this.form.toDate);
      }
      
      return `/print/reports/expenses?${params.toString()}`;
    },
  },

  created() {
    this.getCatgories();
    this.categoryPrefix = this.appInfo.expCatPrefix;
    this.subCategoryPrefix = this.appInfo.expSubCatPrefix;
  },
  mounted() {
    this.loadTemporaryData()
  },
  methods: {
    // get all categories
    async getCatgories() {
      await this.$store.dispatch("operations/allData", {
        path: "/api/all-expense-categories",
      });
      this.items.unshift({
        id: 0,
        name: "All Categories",
      });
    },

    // get sub categories for a category
    async getSubCategories() {
      this.subCategories = [];
      this.form.subCategory = "";
      if (this.form.category.id != 0) {
        let slug = this.form.category.slug;
        const { data } = await axios.get(
          window.location.origin + "/api/sub-categories-by-category/" + slug
        );
        this.subCategories = data.data;
        if (this.subCategories.length > 0) {
          this.subCategories.unshift({
            id: 0,
            name: "All Sub Categories",
          });
        }
      }
    },

    // get filtered data
    async update(values) {
      this.loading = true;
      this.form.fromDate = values.from;
      this.form.toDate = values.to;
      await this.form
        .post(window.location.origin + "/api/reports/expenses")
        .then((response) => {
          this.expenses = response.data.data;
          this.loading = false;
        })
        .catch(() => {
          toast.fire({ type: "error", title: this.$t("There was something wrong.") });
        });
    },

    // calculate total
    calculateTotal(expenses) {
      let total = expenses.reduce(
        (accumulator, current) =>
          Number(accumulator) + Number(current.transaction.amount),
        0
      );
      return total;
    },

    // save form data temporarily
    saveTemporary() {
      const tempData = {
        category: this.form.category,
        subCategory: this.form.subCategory,
        fromDate: this.form.fromDate,
        toDate: this.form.toDate,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('expensesReportTempData', JSON.stringify(tempData))
      toast.fire({
        type: 'success',
        title: this.$t('Filter settings saved temporarily'),
      })
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('expensesReportTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.category = data.category || this.form.category
          this.form.subCategory = data.subCategory || this.form.subCategory
          this.form.fromDate = data.fromDate || this.form.fromDate
          this.form.toDate = data.toDate || this.form.toDate
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('expensesReportTempData')
    },

    // print
    printWindow() {
      window.print();
    },
  },
};
</script>

<style scoped>
/* Header buttons styling */
.header-buttons {
  margin-bottom: 15px;
}
</style>