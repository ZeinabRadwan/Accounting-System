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
                    :href="exportUrl"
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
                    type="button"
                    @click="downloadPDF" 
                    v-tooltip="$t('Export to PDF')" 
                    class="btn export-pdf-btn"
                  >
                    <i class="fas fa-file-export"></i>
                  </button>
                  <button 
                    type="button"
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
                </div>
              </div>
            </div>
          <!-- form start -->
          <form role="form" @submit.prevent="saveType" @keydown="form.onKeydown($event)">
              <div class="row">
                <div v-if="items" class="form-group col-md-12">
                  <label for="productName">{{ $t("Product Name") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.productName" :options="items" label="label"
                    :class="{ 'is-invalid': form.errors.has('productName') }" name="productName"
                    :placeholder="$t('Select a product')" />
                  <has-error :form="form" field="productName" />
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

    <div v-if="allData &&
      allData.stockIns &&
      allData.stockOuts &&
      (allData.stockIns.length > 0 || allData.stockIns.stockOuts > 0)
      " class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-body position-relative">
            <div class="invoice p-3 mb-3" id="printMe">
              <!-- info row -->
              <div class="row invoice-info">
                <div class="col-sm-4 invoice-col">
                  <CompanyInfo />
                </div>
                <!-- /.col -->
                <div v-if="allData.product &&
                  allData.product.category &&
                  allData.product.subCategory &&
                  allData.product.itemUnit
                  " class="col-sm-6 offset-sm-2 invoice-col float-right text-md-right">
                  <h5>
                    {{ $t("Date") }}: {{ date | moment("Do MMM, YYYY") }}
                  </h5>
                  <strong>{{ $t("Code") }}:</strong>
                  {{ allData.product.code | withPrefix(prfix) }}<br />
                  <strong>{{ $t("Category") }}:</strong>
                  {{ allData.product.category.name }}<br />
                  <strong>{{ $t("Sub Category") }}:</strong>
                  {{ allData.product.subCategory.name }}<br />
                  <strong>{{ $t("Stock") }}:</strong>
                  {{ allData.product.availableQty }}
                  {{ allData.product.itemUnit ? allData.product.itemUnit.code : '-' }} <br />
                </div>
              </div>
              <hr />
              <div class="row mt-5 position-relative">
                <table-loading v-show="loading" />
                <div v-if="loading == false" class="col-lg-6 table-responsive mb-5">
                  <h4>
                    <i>{{ $t("Stock In") }}</i>
                  </h4>
                  <table class="table table-bordered table-sm">
                    <thead>
                        <th>{{ $t("#") }}</th>
                        <th>{{ $t("Date") }}</th>
                        <th>{{ $t("Stock In") }}</th>
                        <th>{{ $t("Price") }}</th>
                        <th>{{ $t("Type") }}</th>
                        <th>{{ $t("Code") }}</th>
                        <th class="text-right">
                          {{ $t("Supplier") }}/{{ $t("Client") }}
                        </th>
                    </thead>
                    <tbody>
                      <tr v-for="(data, i) in allData.stockIns" :key="i">
                        <td>{{ i + 1 }}</td>
                        <td>{{ data.date | moment("Do MMM, YYYY") }}</td>
                        <td>{{ data.quantity }}</td>
                        <td>{{ data.price  }} <span class="saudi-riyal">ê</span></td>
                        <td>
                          <span class="badge bg-success">{{ data.type }}</span>
                        </td>
                        <td>{{ data.code }}</td>
                        <td class="text-right">
                          <span v-if="data.type === 'Purchase'">{{
                            data.supplier
                          }}</span>
                          <span v-else-if="data.type === 'Invoice Return'">{{
                            data.client
                          }}</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" align="right">
                          <strong>{{ $t("Total Quantity") }}</strong>
                        </td>
                        <td v-if="allData.stockIns">
                          <strong>{{ stockInQty(allData.stockIns) }}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div v-if="loading == false" class="col-lg-6 table-responsive">
                  <h4>
                    <i>{{ $t("Stock Out") }}</i>
                  </h4>
                  <table class="table table-bordered table-sm">
                    <thead>
                        <th>{{ $t("#") }}</th>
                        <th>{{ $t("Date") }}</th>
                        <th>{{ $t("Stock Out") }}</th>
                        <th>{{ $t("Price") }}</th>
                        <th>{{ $t("Type") }}</th>
                        <th>{{ $t("Code") }}</th>
                        <th class="text-right">{{ $t("Client") }}</th>
                    </thead>
                    <tbody>
                      <tr v-for="(data, i) in allData.stockOuts" :key="i">
                        <td>{{ i + 1 }}</td>
                        <td>{{ data.date | moment("Do MMM, YYYY") }}</td>
                        <td>-{{ data.quantity }}</td>
                        <td>{{ data.price  }} <span class="saudi-riyal">ê</span></td>
                        <td>
                          <span class="badge bg-success">{{ data.type }}</span>
                        </td>
                        <td>{{ data.code }}</td>
                        <td class="text-right">
                          <span v-if="data.type === 'Invoice'">{{
                            data.client
                          }}</span>
                          <span v-else-if="data.type === 'Purchase Return'">{{
                            data.supplier
                          }}</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" align="right">
                          <strong>{{ $t("Total Quantity") }}</strong>
                        </td>
                        <td v-if="allData.stockOuts">
                          <strong>{{ stockOutQty(allData.stockOuts) }}</strong>
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

    <div v-else-if="allData.stockIns &&
      allData.stockOuts &&
      (allData.stockIns.length <= 0 || allData.stockIns.stockOuts <= 0)
      " class="row">
      <div class="col-lg-12">
        <EmptyTable />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
import { mapGetters } from "vuex";
import Swal from "sweetalert2";
import "vue-mj-daterangepicker/dist/vue-mj-daterangepicker.css";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Item Report") };
  },
  data: () => ({
    toast: Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    }),
    form: new Form({
      fromDate: String(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)),
      toDate: String(new Date()),
      productName: "",
    }),
    loading: false,
    allData: "",
    date: new Date(),
    prefix: "",
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
          name: this.$t("Reports"),
          url: "",
        },
        {
          name: this.$t("Item Report"),
          url: "",
        },
      ];
    },
    breadcrumbsCurrent() {
      return this.$t("Item Report");
    },
    exportUrl() {
      // Create a dynamic export URL for items report with current filters
      const params = new URLSearchParams();
      if (this.form.productName && this.form.productName.slug) {
        params.append('productName[slug]', this.form.productName.slug);
      }
      if (this.form.fromDate) {
        params.append('fromDate', this.form.fromDate);
      }
      if (this.form.toDate) {
        params.append('toDate', this.form.toDate);
      }
      return `/items-report/export?${params.toString()}`;
    },
    printTemplateUrl() {
      // Create a dynamic print template URL for items report with current filters
      const params = new URLSearchParams();
      
      // Always pass product information (required by API)
      if (this.form.productName && this.form.productName.slug) {
        params.append('productName[slug]', this.form.productName.slug);
      }
      if (this.form.fromDate) {
        params.append('fromDate', this.form.fromDate);
      }
      if (this.form.toDate) {
        params.append('toDate', this.form.toDate);
      }
      
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      
      return `/print/reports/items?${params.toString()}`;
    },
  },

  created() {
    this.getItems();
    this.prfix = this.appInfo.productPrefix;
  },
  methods: {
    // get all categories
    async getItems() {
      await this.$store.dispatch("operations/allData", {
        path: "/api/all-products",
      });
    },

    // translate validation messages from backend to localized messages
    translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      const direct = this.$t(message)
      if (direct && direct !== message) return direct

      // Get current locale
      const currentLocale = this.$i18n.locale || 'en'
      const isArabic = currentLocale === 'ar'

      // Field label mapping for items report form fields
      const fieldLabelMap = {
        'productName': this.$t('Product Name'),
        'product name': this.$t('Product Name'),
        'product_name': this.$t('Product Name'),
        'fromDate': this.$t('From Date'),
        'from date': this.$t('From Date'),
        'from_date': this.$t('From Date'),
        'toDate': this.$t('To Date'),
        'to date': this.$t('To Date'),
        'to_date': this.$t('To Date'),
      }
      const fieldLabel = fieldLabelMap[field] || fieldLabelMap[field?.toLowerCase()] || field

      // Handle mixed language messages from backend (Arabic + English)
      // Pattern: "حقل [field] مطلوب" -> "Field is required"
      const mixedLanguagePatterns = [
        // Arabic "حقل" + English field + Arabic "مطلوب"
        { 
          re: /حقل\s+([^م]+?)\s+مطلوب/i, 
          en: (_, fieldName) => {
            const cleanFieldName = fieldName.trim()
            const fieldTranslation = fieldLabelMap[cleanFieldName] || 
                                    fieldLabelMap[cleanFieldName.toLowerCase()] || 
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] ||
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] ||
                                    cleanFieldName
            return `${fieldTranslation} is required`
          },
          ar: (_, fieldName) => {
            const cleanFieldName = fieldName.trim()
            const fieldTranslation = fieldLabelMap[cleanFieldName] || 
                                    fieldLabelMap[cleanFieldName.toLowerCase()] || 
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] ||
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] ||
                                    cleanFieldName
            return `${fieldTranslation} مطلوب`
          }
        },
        // Arabic "يرجى اختيار" + English field
        { 
          re: /يرجى\s+اختيار\s+([^.]+)/i, 
          en: (_, fieldName) => {
            const cleanFieldName = fieldName.trim()
            const fieldTranslation = fieldLabelMap[cleanFieldName] || 
                                    fieldLabelMap[cleanFieldName.toLowerCase()] || 
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] ||
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] ||
                                    cleanFieldName
            return `Please select ${fieldTranslation}`
          },
          ar: (_, fieldName) => {
            const cleanFieldName = fieldName.trim()
            const fieldTranslation = fieldLabelMap[cleanFieldName] || 
                                    fieldLabelMap[cleanFieldName.toLowerCase()] || 
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] ||
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] ||
                                    cleanFieldName
            return `يرجى اختيار ${fieldTranslation}`
          }
        },
        // Arabic "يرجى إدخال" + English field
        { 
          re: /يرجى\s+إدخال\s+([^.]+)/i, 
          en: (_, fieldName) => {
            const cleanFieldName = fieldName.trim()
            const fieldTranslation = fieldLabelMap[cleanFieldName] || 
                                    fieldLabelMap[cleanFieldName.toLowerCase()] || 
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] ||
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] ||
                                    cleanFieldName
            return `Please enter ${fieldTranslation}`
          },
          ar: (_, fieldName) => {
            const cleanFieldName = fieldName.trim()
            const fieldTranslation = fieldLabelMap[cleanFieldName] || 
                                    fieldLabelMap[cleanFieldName.toLowerCase()] || 
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] ||
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] ||
                                    cleanFieldName
            return `يرجى إدخال ${fieldTranslation}`
          }
        }
      ]

      // Check mixed language patterns first
      for (const { re, en, ar } of mixedLanguagePatterns) {
        const match = message.match(re)
        if (match) {
          const text = typeof (isArabic ? ar : en) === 'function' ? (isArabic ? ar : en)(...match) : (isArabic ? ar : en)
          return text
        }
      }

      // Additional pattern for "حقل [field] مطلوب" format
      if (message.includes('حقل') && message.includes('مطلوب')) {
        const fieldMatch = message.match(/حقل\s+([^م]+?)\s+مطلوب/i)
        if (fieldMatch) {
          const fieldName = fieldMatch[1].trim()
          let fieldTranslation = fieldLabelMap[fieldName] || 
                                fieldLabelMap[fieldName.toLowerCase()] || 
                                fieldLabelMap[fieldName.replace(/\s+/g, '')] ||
                                fieldLabelMap[fieldName.replace(/\s+/g, '_')] ||
                                fieldName
          return isArabic ? `${fieldTranslation} مطلوب` : `${fieldTranslation} is required`
        }
      }

      // Handle "يرجى اختيار" patterns
      if (message.includes('يرجى اختيار')) {
        const fieldMatch = message.match(/يرجى\s+اختيار\s+([^.]+)/i)
        if (fieldMatch) {
          const fieldName = fieldMatch[1].trim()
          let fieldTranslation = fieldLabelMap[fieldName] || 
                                fieldLabelMap[fieldName.toLowerCase()] || 
                                fieldLabelMap[fieldName.replace(/\s+/g, '')] ||
                                fieldLabelMap[fieldName.replace(/\s+/g, '_')] ||
                                fieldName
          return isArabic ? `يرجى اختيار ${fieldTranslation}` : `Please select ${fieldTranslation}`
        }
      }

      // Common Laravel validation patterns with localized messages
      const patterns = [
        // Required field patterns
        { 
          re: /The\s+.+?\s+field\s+is\s+required\.?/i, 
          en: `${fieldLabel} is required`,
          ar: `${fieldLabel} مطلوب`
        },
        { 
          re: /Please\s+select\s+an?\s+.+?\.?/i, 
          en: `Please select ${fieldLabel}`,
          ar: `يرجى اختيار ${fieldLabel}`
        },
        { 
          re: /Please\s+enter\s+a\s+.+?\.?/i, 
          en: `Please enter ${fieldLabel}`,
          ar: `يرجى إدخال ${fieldLabel}`
        },
        { 
          re: /Please\s+provide\s+a\s+.+?\.?/i, 
          en: `Please provide ${fieldLabel}`,
          ar: `يرجى تقديم ${fieldLabel}`
        },
      ]

      // Check standard Laravel patterns
      for (const { re, en, ar } of patterns) {
        if (re.test(message)) {
          return isArabic ? ar : en
        }
      }

      // Fallback: return the message with translation attempt
      return this.$t(message) !== message ? this.$t(message) : message
    },

    // get filtered data
    async update(values) {
      this.loading = true;
      this.form.fromDate = values.from;
      this.form.toDate = values.to;
      await this.form
        .post(window.location.origin + "/api/reports/items")
        .then((response) => {
          this.allData = response.data;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          
          // Handle validation errors
          if (error.response?.status === 422 && error.response?.data?.errors) {
            // Translate validation errors
            const translatedErrors = {};
            Object.keys(error.response.data.errors).forEach(field => {
              translatedErrors[field] = error.response.data.errors[field].map(message => {
                // Use translateValidationMessage to handle mixed language messages
                return this.translateValidationMessage(message, field);
              });
            });
            
            // Set the translated errors back to the form
            this.form.errors.set(translatedErrors);
            
            // Show a general validation error message
            this.toast.fire({ 
              type: "error", 
              title: this.$t("Please check your input and try again.") 
            });
          } else {
            // Handle other errors
            this.toast.fire({ 
              type: "error", 
              title: this.$t("There was something wrong.") 
            });
          }
        });
    },

    // count stock in qty
    stockInQty(stockIns) {
      let total = stockIns.reduce(
        (accumulator, current) =>
          Number(accumulator) + Number(current.quantity),
        0
      );
      return total;
    },

    // count stock out qty
    stockOutQty(stockOuts) {
      let total = stockOuts.reduce(
        (accumulator, current) =>
          Number(accumulator) + Number(current.quantity),
        0
      );
      return total;
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

    downloadPDF() {
      // Validate product name is required
      if (!this.form.productName || !this.form.productName.slug) {
        this.toast.fire({ type: "error", title: this.$t("The product name field is required.") });
        return;
      }

      // Build query parameters from filters
      const params = new URLSearchParams();
      if (this.form.productName && this.form.productName.slug) {
        params.append('productName[slug]', this.form.productName.slug);
        if (this.form.productName.label) {
          params.append('productName[label]', this.form.productName.label);
        }
        if (this.form.productName.name) {
          params.append('productName[name]', this.form.productName.name);
        }
      }
      if (this.form.fromDate) {
        params.append('fromDate', this.form.fromDate);
      }
      if (this.form.toDate) {
        params.append('toDate', this.form.toDate);
      }
      
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      
      // Redirect to backend PDF route with query parameters
      const pdfUrl = `/print/reports/items/pdf?${params.toString()}`;
      window.location.href = pdfUrl;
    },

    previewPDF() {
      // Validate product name is required
      if (!this.form.productName || !this.form.productName.slug) {
        this.toast.fire({ type: "error", title: this.$t("The product name field is required.") });
        return;
      }

      // Build query parameters from filters
      const params = new URLSearchParams();
      if (this.form.productName && this.form.productName.slug) {
        params.append('productName[slug]', this.form.productName.slug);
        if (this.form.productName.label) {
          params.append('productName[label]', this.form.productName.label);
        }
        if (this.form.productName.name) {
          params.append('productName[name]', this.form.productName.name);
        }
      }
      if (this.form.fromDate) {
        params.append('fromDate', this.form.fromDate);
      }
      if (this.form.toDate) {
        params.append('toDate', this.form.toDate);
      }
      
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      
      // Redirect to backend PDF route with query parameters
      const pdfUrl = `/print/reports/items/preview?${params.toString()}`;
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

@media (max-width: 1300px) {
  .info-box {
    padding: 0;
  }
}
</style>