<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
          </div>
          <!-- /.card-header -->
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-xl-8 col-8 float-right text-right ml-auto">
                <div class="btn-group c-w-100">
                  <a
                    @click="refreshTable"
                    href="#"
                    v-tooltip="$t('Refresh')"
                    class="btn btn-success refresh-btn"
                  >
                    <i class="fas fa-sync"></i>
                  </a>
                  <a
                    href="#"
                    @click.prevent="exportExcel"
                    v-tooltip="$t('Export to Excel')"
                    class="btn export-excel-btn"
                    title="Export to Excel"
                  >
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.625 17.5001C11.625 17.699 11.546 17.8898 11.4053 18.0305C11.2647 18.1711 11.0739 18.2501 10.875 18.2501H8.24998C8.05107 18.2501 7.86031 18.1711 7.71966 18.0305C7.579 17.8898 7.49998 17.699 7.49998 17.5001V12.2501C7.49998 12.0512 7.579 11.8604 7.71966 11.7198C7.86031 11.5791 8.05107 11.5001 8.24998 11.5001C8.4489 11.5001 8.63966 11.5791 8.78031 11.7198C8.92097 11.8604 8.99998 12.0512 8.99998 12.2501V16.7501H10.875C11.0739 16.7501 11.2647 16.8291 11.4053 16.9698C11.546 17.1104 11.625 17.3012 11.625 17.5001ZM5.68592 11.6398C5.60578 11.5826 5.51514 11.5417 5.41918 11.5194C5.32323 11.4972 5.22384 11.4941 5.12668 11.5103C5.02953 11.5265 4.93651 11.5617 4.85295 11.6138C4.76939 11.6659 4.69692 11.734 4.63967 11.8142L3.37498 13.5851L2.1103 11.8142C2.05509 11.7292 1.98324 11.6564 1.89909 11.5999C1.81495 11.5435 1.72024 11.5047 1.62069 11.4859C1.52114 11.4671 1.41882 11.4687 1.31988 11.4905C1.22095 11.5123 1.12747 11.554 1.04507 11.6129C0.962677 11.6719 0.893077 11.7469 0.840473 11.8335C0.787869 11.9201 0.753352 12.0164 0.739005 12.1167C0.724657 12.217 0.730776 12.3191 0.756994 12.417C0.783211 12.5148 0.828983 12.6064 0.891547 12.6861L2.45342 14.8751L0.889672 17.0642C0.784434 17.2261 0.74571 17.4224 0.781564 17.6121C0.817419 17.8019 0.925088 17.9705 1.08215 18.0829C1.23922 18.1952 1.43357 18.2427 1.62474 18.2153C1.81591 18.188 1.98916 18.088 2.10842 17.9361L3.37498 16.1651L4.63967 17.9361C4.75893 18.088 4.93219 18.188 5.12336 18.2153C5.31453 18.188 5.50888 18.1952 5.66594 18.0829C5.82301 17.9705 5.93068 17.8019 5.96653 17.6121C6.00239 17.4224 5.96366 17.2261 5.85842 17.0642L4.29655 14.8751L5.8603 12.6861C5.91755 12.6059 5.95845 12.5153 5.98067 12.4193C6.00289 12.3234 6.00599 12.224 5.9898 12.1268C5.97361 12.0297 5.93844 11.9367 5.8863 11.8531C5.83416 11.7695 5.76607 11.6971 5.68592 11.6398ZM14.9615 14.0604C14.5865 13.9517 14.1984 13.8401 13.9819 13.7004C13.8647 13.6236 13.8665 13.6067 13.8769 13.5223C13.8783 13.4541 13.896 13.3873 13.9287 13.3274C13.9613 13.2675 14.0078 13.2164 14.0644 13.1782C14.4956 12.8857 15.5025 13.017 15.9225 13.1257C16.1149 13.1763 16.3196 13.1484 16.4915 13.0481C16.6633 12.9478 16.7883 12.7834 16.8389 12.5909C16.8895 12.3985 16.8616 12.1938 16.7613 12.0219C16.661 11.8501 16.4965 11.7251 16.304 11.6745C16.1062 11.6229 14.3353 11.1851 13.2262 11.9332C12.9924 12.0913 12.796 12.2987 12.6511 12.5408C12.5061 12.783 12.416 13.054 12.3872 13.3348C12.1997 14.8236 13.6669 15.2482 14.5434 15.5014C15.674 15.8286 15.7734 15.9626 15.7415 16.2129C15.7125 16.4389 15.6234 16.5251 15.54 16.5814C15.1087 16.8682 14.1187 16.7267 13.7081 16.6142C13.516 16.5609 13.3106 16.586 13.1371 16.6841C13.0512 16.7327 12.9757 16.7977 12.9149 16.8755C12.8541 16.9532 12.8092 17.0422 12.7828 17.1373C12.7564 17.2324 12.749 17.3318 12.761 17.4298C12.773 17.5277 12.8041 17.6224 12.8527 17.7083C12.9508 17.8818 13.1138 18.0093 13.3059 18.0626C13.7708 18.1851 14.2493 18.2481 14.73 18.2501C15.2756 18.2501 15.8831 18.1564 16.3697 17.832C16.6097 17.6724 16.8114 17.4615 16.9602 17.2146C17.109 16.9678 17.2012 16.691 17.2303 16.4042C17.4375 14.7814 15.8887 14.3286 14.9615 14.0604ZM0.749985 8.50012V1.75012C0.749985 1.3523 0.90802 0.970767 1.18932 0.689462C1.47063 0.408157 1.85216 0.250122 2.24998 0.250122H11.25C11.3485 0.250045 11.4461 0.269379 11.5371 0.30702C11.6282 0.344661 11.7109 0.399872 11.7806 0.469497L17.0306 5.7195C17.1002 5.7892 17.1554 5.87194 17.1931 5.96299C17.2307 6.05403 17.2501 6.1516 17.25 6.25012V8.50012C17.25 8.69903 17.171 8.8898 17.0303 9.03045C16.8897 9.1711 16.6989 9.25012 16.5 9.25012C16.3011 9.25012 16.1103 9.1711 15.9697 9.03045C15.829 8.8898 15.75 8.69903 15.75 8.50012V7.00012H11.25C11.0511 7.00012 10.8603 6.9211 10.7197 6.78045C10.579 6.6398 10.5 6.44903 10.5 6.25012V1.75012H2.24998V8.50012C2.24998 8.69903 2.17097 8.8898 2.03031 9.03045C1.88966 9.1711 1.6989 9.25012 1.49998 9.25012C1.30107 9.25012 1.11031 9.1711 0.969655 9.03045C0.829003 8.8898 0.749985 8.69903 0.749985 8.50012ZM12 5.50012H14.6887L12 2.81043V5.50012Z"
                        fill="#2AB930"
                      />
                    </svg>
                  </a>
                  <button 
                    @click="downloadPDF" 
                    v-tooltip="$t('Export to PDF')" 
                    class="btn export-pdf-btn"
                  >
                    <i class="fas fa-file-export"></i>
                  </button>
                  <button 
                    @click="previewPDF" 
                    v-tooltip="$t('Preview')" 
                    class="btn preview-btn"
                  >
                    <i class="fas fa-eye"></i>
                  </button>
                  <a
                    @click="print"
                    v-tooltip="$t('Print Table')"
                    class="btn print-btn"
                  >
                    <i class="fas fa-print"></i>
                  </a>
                  <button type="button" class="btn btn-info save-btn" @click="saveTemporary" title="Save Filter Settings">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- form start -->
          <form role="form">
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
            </form>
            </div>
          <!-- /.card-body -->
        </div>
      </div>
    </div>
    <div v-if="expenses && expenses.length > 0" class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-body position-relative">
            <div class="invoice p-3 mb-3" id="printMe">
          <!-- info row -->
          <div class="row invoice-info">
            <div class="col-sm-4 invoice-col">
              <CompanyInfo />
            </div>
            <div class="col-sm-8 invoice-col float-right text-md-right">
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
                    <th>{{ $t("#") }}</th>
                    <th>{{ $t("Date") }}</th>
                    <th>{{ $t("Expense Reason") }}</th>
                    <th>{{ $t("Category") }}</th>
                    <th>{{ $t("Sub Category") }}</th>
                    <th>{{ $t("Amount") }}</th>
                    <th>{{ $t("Account") }}</th>
                    <th>{{ $t("Status") }}</th>
                    <th class="text-right">{{ $t("Created By") }}</th>
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
                        data.transaction.amount }}<span class="saudi-riyal">ê</span></span>
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
                        calculateTotal(expenses) }}<span class="saudi-riyal">ê</span></strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
            </div>
          </div>
          <!-- /.card-body -->
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

    // refresh top buttons
    refreshTable() {
      this.update({ from: this.form.fromDate, to: this.form.toDate });
    },

    // print table area
    async print() {
      if (this.$htmlToPaper) {
        await this.$htmlToPaper("printMe");
      } else {
        this.printWindow();
      }
    },

    // print
    printWindow() {
      window.print();
    },

    // export Excel without navigation and show toast on validation errors
    async exportExcel() {
      if (!this.form.category || !this.form.category.id) {
        toast.fire({ type: "error", title: this.$t("The category field is required.") });
        return;
      }

      try {
        const response = await fetch(this.exportExcelUrl, { 
          headers: { 
            Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
          } 
        });

        if (!response.ok) {
          let message = this.$t("There was something wrong.");
          try {
            const data = await response.clone().json();
            if (data && data.errors) {
              const firstField = Object.keys(data.errors)[0];
              if (firstField && data.errors[firstField] && data.errors[firstField][0]) {
                message = data.errors[firstField][0];
              }
            } else if (data && typeof data.error === 'string') {
              // Backend returns: "Failed to generate Excel: The category field is required."
              const raw = data.error;
              const extracted = raw.includes(':') ? raw.split(':').pop().trim() : raw;
              message = extracted || raw;
            } else if (data && data.message) {
              message = data.message;
            }
          } catch (e) { void e; }
          toast.fire({ type: "error", title: this.$t(message) });
          return;
        }

        // Check if response is actually an Excel file (not HTML error page)
        const contentType = response.headers.get('content-type');
        if (contentType && !contentType.includes('spreadsheet') && !contentType.includes('excel') && !contentType.includes('octet-stream')) {
          // If we got HTML or JSON instead of Excel, try to parse error
          const text = await response.text();
          if (text.includes('<!DOCTYPE') || text.includes('<html')) {
            toast.fire({ type: "error", title: this.$t("The server returned an error page. Please check your filters and try again.") });
            return;
          }
          try {
            const errorData = JSON.parse(text);
            if (errorData && errorData.error) {
              toast.fire({ type: "error", title: this.$t(errorData.error) });
              return;
            }
          } catch (e) { 
            toast.fire({ type: "error", title: this.$t("The server returned an unexpected response. Please check your filters and try again.") });
            return;
          }
          return;
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'expenses-report.xlsx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        toast.fire({ type: "error", title: this.$t("There was something wrong.") });
      }
    },

    downloadPDF() {
      // Validate category is required
      if (!this.form.category || !this.form.category.id) {
        toast.fire({ type: "error", title: this.$t("The category field is required.") });
        return;
      }

      // Build query parameters from filters
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
      
      // Redirect to backend PDF route with query parameters
      const pdfUrl = `/print/reports/expenses/pdf?${params.toString()}`;
      window.location.href = pdfUrl;
    },

    previewPDF() {
      // Validate category is required
      if (!this.form.category || !this.form.category.id) {
        toast.fire({ type: "error", title: this.$t("The category field is required.") });
        return;
      }

      // Build query parameters from filters
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
      
      // Redirect to backend PDF route with query parameters
      const pdfUrl = `/print/reports/expenses/preview?${params.toString()}`;
      window.location.href = pdfUrl;
    },
  },
};
</script>

<style scoped>
.refresh-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.export-excel-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.export-pdf-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.preview-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.print-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.save-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
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

/* Search Input Background Override */
.form-control {
  background: #fff !important;
}
</style>