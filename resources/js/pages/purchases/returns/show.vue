<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->

    <div class="row no-print mb-2">
      <div class="w-100 text-right float-right">
        <div class="d-flex justify-content-between" v-if="allData">
          <div class="btn-group">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" href="#details" data-toggle="tab" @click="getInvoiceReturn">
                  <i class="fa fa-info"></i>
                  {{ $t("Details") }}</a>
              </li>
              <li class="nav-item">
                <a @click="getActivity" class="nav-link" href="#activity-log" data-toggle="tab">
                  <i class="nav-icon fa fa-bell" aria-hidden="true"></i>
                  {{ $t("Activity log") }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#journal-entry" data-toggle="tab">
                  <i class="nav-icon fa fa-book" aria-hidden="true"></i>
                  {{ $t("Journal Entry") }}</a>
              </li>
            </ul>
          </div>
          <div class="btn-group">
            <!-- New preview and download PDF buttons -->
            <a @click="previewPDF" href="#" class="btn btn-info">
              <i class="fas fa-eye"></i> {{ $t("Preview PDF") }}
            </a>
            <a @click="downloadPDF" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <a v-if="isSaudiArabia && allData && allData.status === 0" @click="sendPurchaseReturn(allData)" href="#"
              class="btn btn-success">
              <i class="fas fa-paper-plane"></i> {{ $t("Send Purchase Return to ZATCA") }}
            </a>
            <router-link v-if="$can('purchase-return-edit') && !(isSaudiArabia && allData && allData.status === 1)" :to="{
              name: 'purchaseReturns.edit',
              params: { slug: allData.slug },
            }" class="btn btn-info">
              <i class="fas fa-edit" /> {{ $t("Edit") }}
            </router-link>
            <router-link :to="{ name: 'purchaseReturns.index' }" class="btn btn-info float-right">
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
        </div>
      </div>
    </div>

    <div class="tab-content">
      <div class="tab-pane active" id="details">
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
                <h5>{{ $t("Supplier Details") }}</h5>
                <div v-if="allData.purchase && allData.supplier">
                  <span v-if="allData.supplier.companyName"><strong>{{ $t("Supplier ID") }}:</strong>
                    {{ allData.supplier.supplierID | withPrefix(supplierPrefix)
                    }}<br /></span>
                  <strong>{{ $t("Supplier Name") }}:</strong>
                  {{ allData.supplier.name }}<br />
                  <span v-if="allData.supplier.companyName"><strong>{{ $t("Company Name") }}:</strong>
                    {{ allData.supplier.companyName }}<br /></span>
                  <span v-if="allData.supplier.email"><strong>{{ $t("Email") }}:</strong>
                    {{ allData.supplier.email }}<br /></span>
                  <span v-if="allData.supplier.phoneNumber"><strong>{{ $t("Contact Number") }}:</strong>
                    {{ allData.supplier.phoneNumber }}<br /></span>
                  <span v-if="allData.supplier.address"><strong>{{ $t("Address") }}:</strong>
                    {{ allData.supplier.address }}<br /></span>
                </div>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <div class="row mt-3">
              <div class="col-12">
                <div class="table-responsive table-custom">
                  <table v-if="allData.purchase" class="table">
                    <thead>
                      <tr>
                        <th v-if="allData.purchase.code">
                          {{ $t("Purchase No") }}
                        </th>
                        <th v-if="allData.returnNo">
                          {{ $t("Return No") }}
                        </th>
                        <th v-if="allData.purchase.purchaseDate">
                          {{ $t("Purchase Date") }}
                        </th>
                        <th v-if="allData.returnDate">
                          {{ $t("Return Date") }}
                        </th>
                        <th v-if="allData.reason">
                          {{ $t("Return Reason") }}
                        </th>
                        <th v-if="allData.note">{{ $t("Note") }}</th>
                        <th>{{ $t("Status") }}</th>
                        <th v-if="allData.createdBy" class="text-right">
                          {{ $t("Created By") }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td v-if="allData.purchase.code">
                          {{
                            allData.purchase.code | withPrefix(purchasePrefix)
                          }}
                        </td>
                        <td v-if="allData.returnNo">
                          {{ allData.returnNo | withPrefix(returnPrefix) }}
                        </td>
                        <td v-if="allData.purchase.purchaseDate">
                          {{
                            allData.purchase.purchaseDate
                            | moment("Do MMM, YYYY")
                          }}
                        </td>
                        <td v-if="allData.returnDate">
                          {{ allData.returnDate | moment("Do MMM, YYYY") }}
                        </td>
                        <td v-if="allData.reason">{{ allData.reason }}</td>
                        <td v-if="allData.note">{{ allData.note }}</td>
                        <td>
                          <span v-if="allData.status === 1" class="badge bg-success">{{ $t("Active") }}</span>
                          <span v-else class="badge bg-danger">{{
                            $t("Inactive")
                            }}</span>
                        </td>
                        <td v-if="allData.createdBy" class="text-right">
                          {{ allData.createdBy }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Table row -->
            <div class="row position-relative mt-4">
              <table-loading v-show="loading" />
              <div v-if="allData.purchase" class="col-12 table-responsive">
                <strong class="mb-2 d-block">{{ $t("Return Products") }}:</strong>
                <div class="table-custom table-responsive text-center">
                  <table class="table table-sm purchases-create-table">
                    <thead>
                      <tr>
                        <th>{{ $t("#") }}</th>
                        <th>{{ $t("Code") }}</th>
                        <th>{{ $t("Item Name") }}</th>
                        <th>{{ $t("Qty") }}</th>
                        <th>{{ $t("Price") }}</th>
                        <th>{{ $t("Total") }}</th>
                        <th>{{ $t("Discount") }}</th>
                        <th>{{ $t("Total After Discount") }}</th>
                        <th>{{ $t("VAT Type") }}</th>
                        <th>{{ $t("VAT") }}</th>
                        <th>{{ $t("Total with VAT") }}</th>
                      </tr>
                    </thead>
                    <tbody v-if="returnProducts">
                      <tr v-for="(data, i) in returnProducts" :key="i">
                        <td>{{ ++i }}</td>
                        <td v-if="data.product">
                          {{ data.product.code | withPrefix(productPrefix) }}
                        </td>
                        <td v-if="data.product">{{ data.product.name }}</td>
                        <td v-if="data.product">
                          {{ data.returnQty }}
                          <span v-if="data.product.itemUnit">{{
                            data.product.itemUnit.code
                            }}</span>
                        </td>
                        <td>{{ formatToTwoDecimals(data.purchasePrice) }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ formatToTwoDecimals(data.purchasePrice * data.returnQty) }} <span
                            class="saudi-riyal">ê</span></td>
                        <td>{{ formatToTwoDecimals(calculateUnitDiscount(data)) }} <span class="saudi-riyal">ê</span>
                        </td>
                        <td>{{ formatToTwoDecimals(calculateUnitNet(data)) }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ getVatRate(data) }}%</td>
                        <td>{{ formatToTwoDecimals(calculateUnitVat(data)) }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ formatToTwoDecimals(calculateUnitTotal(data)) }} <span class="saudi-riyal">ê</span></td>
                      </tr>
                      <tr>
                        <td colspan="5" class="text-right">
                          <strong>{{ $t("Subtotal") }}</strong>
                        </td>
                        <td>
                          <strong>{{ formatToTwoDecimals(calculateTotalReturnedProductCost()) }} <span
                              class="saudi-riyal">ê</span></strong>
                        </td>
                        <td>
                          <strong>{{ formatToTwoDecimals(calculateTotalReturnDiscount()) }} <span
                              class="saudi-riyal">ê</span></strong>
                        </td>
                        <td>
                          <strong>{{ formatToTwoDecimals(calculateTotalReturnedProductCost() -
                            calculateTotalReturnDiscount()) }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td></td>
                        <td>
                          <strong>{{ formatToTwoDecimals(calculateTotalReturnTax()) }} <span
                              class="saudi-riyal">ê</span></strong>
                        </td>
                        <td>
                          <strong>{{ formatToTwoDecimals(calculateTotalReturnedProductCost() -
                            calculateTotalReturnDiscount() + calculateTotalReturnTax()) }} <span
                              class="saudi-riyal">ê</span></strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Purchase Return Calculation Summary Table -->
            <div class="row mt-4" id="page-break">
              <div class="col-lg-12 col-xl-8">
                <!-- Empty space for left side content if needed -->
              </div>
              <div class="col-lg-12 col-xl-4 text-lg-right mt-4">
                <div class="table-responsive table-custom table-border-y-0">
                  <table class="table">
                    <tbody>
                      <tr class="bg-sub-light text-bold">
                        <th>{{ $t("Subtotal") }}:</th>
                        <td>{{ formatToTwoDecimals(calculateTotalReturnedProductCost()) }} <span
                            class="saudi-riyal">ê</span></td>
                      </tr>
                      <tr>
                        <th>{{ $t("Product Discount") }}:</th>
                        <td>
                          {{ formatToTwoDecimals(calculateTotalReturnDiscount()) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>

                      <tr class="bg-green-light text-bold">
                        <th>{{ $t("Total After Discount") }}:</th>
                        <td>{{ formatToTwoDecimals(calculateTotalReturnedProductCost() - calculateTotalReturnDiscount())
                          }}
                          <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>

                      <tr>
                        <th>{{ $t("Product VAT") }}:</th>
                        <td>
                          {{ formatToTwoDecimals(calculateTotalReturnTax()) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>

                      <tr class="bg-indigo-light">
                        <th>{{ $t("Total with VAT") }}:</th>
                        <td>
                          <span class="equal-sign">=</span>
                          {{ formatToTwoDecimals(calculateTotalReturnedProductCost() - calculateTotalReturnDiscount() +
                            calculateTotalReturnTax()) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.row -->
          </div>
          <!-- /.invoice -->
        </div>
      </div>

      <!--  activity logs -->
      <div class="tab-pane" id="activity-log">
        <div class="card custom-card w-100 mt-5 no-print">
          <div class="card-header setings-header">
            <div class="col-xl-4 col-4">
              <h3 class="card-title">
                {{ $t("Activity log") }}
              </h3>
            </div>
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <a @click.prevent="!loading && refreshTable()" href="#" v-tooltip="$t('Refresh')"
                  :class="['btn', 'btn-success', loading ? 'disabled' : '']" :aria-busy="loading ? 'true' : 'false'">
                  <i v-if="!loading" class="fas fa-sync"></i>
                  <i v-else class="fas fa-spinner fa-spin"></i>
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
      </div>

      <!-- Journal Entry Section -->
      <div class="tab-pane" id="journal-entry">
        <div class="card custom-card w-100 mt-5 no-print">
          <div class="card-header setings-header">
            <div class="col-xl-4 col-4">
              <h3 class="card-title">
                {{ $t("Journal Entry Information") }}
              </h3>
            </div>
          </div>
          <div class="card-body">
            <div v-if="allData.journalEntries && allData.journalEntries.length > 0">
              <div v-for="(journalEntry, index) in sortedJournalEntries" :key="index" class="mb-4">
                <div class="row mb-3">
                  <div class="col-md-3">
                    <strong>{{ $t("Entry Number") }}:</strong>
                    <span class="ml-2">{{
                      journalEntry.formatted_entry_number
                      }}</span>
                  </div>
                  <div class="col-md-3">
                    <strong>{{ $t("Entry Date") }}:</strong>
                    <span class="ml-2">{{
                      journalEntry.entry_date | formatDate
                      }}</span>
                  </div>
                  <div class="col-md-3">
                    <strong>{{ $t("Status") }}:</strong>
                    <span class="ml-2 badge" :class="journalEntry.status === 'posted'
                      ? 'badge-success'
                      : 'badge-warning'
                      ">
                      {{ journalEntry.formatted_status }}
                    </span>
                  </div>
                  <div class="col-md-3">
                    <strong>{{ $t("Total Amount") }}:</strong>
                    <span class="ml-2">
                      <CurrencyDisplay :amount="journalEntry.total_debit" />
                    </span>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-12">
                    <strong>{{ $t("Description") }}:</strong>
                    <span class="ml-2">{{ journalEntry.description }}</span>
                  </div>
                </div>

                <div class="table-responsive">
                  <table class="table table-bordered table-sm">
                    <thead class="bg-light">
                      <tr>
                        <th>{{ $t("Line") }}</th>
                        <th>{{ $t("Chart of Account") }}</th>
                        <th>{{ $t("Description") }}</th>
                        <th class="text-right">{{ $t("Debit") }}</th>
                        <th class="text-right">{{ $t("Credit") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(line, lineIndex) in journalEntry.lines" :key="lineIndex">
                        <td>{{ line.line_number }}</td>
                        <td>
                          <strong>{{ line.chart_of_account.name }}</strong>
                          <br />
                          <small class="text-muted">{{
                            line.chart_of_account.type.name
                            }}</small>
                        </td>
                        <td>{{ line.description }}</td>
                        <td class="text-right">
                          <span v-if="line.debit_amount > 0">{{
                            line.debit_amount
                            }}<span class="saudi-riyal">ê</span>
                          </span>
                          <span v-else class="text-muted">-</span>
                        </td>
                        <td class="text-right">
                          <span v-if="line.credit_amount > 0">{{
                            line.credit_amount
                          }} <span class="saudi-riyal">ê</span>
                          </span>
                          <span v-else class="text-muted">-</span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot class="bg-light">
                      <tr>
                        <th colspan="3" class="text-right">
                          {{ $t("Total") }}:
                        </th>
                        <th class="text-right">
                          {{ journalEntry.total_debit }} <span class="saudi-riyal">ê</span>
                        </th>
                        <th class="text-right">
                          {{ journalEntry.total_credit }} <span class="saudi-riyal">ê</span>
                        </th>
                      </tr>
                      <tr>
                        <th colspan="3" class="text-right">
                          {{ $t("Balance") }}:
                        </th>
                        <th colspan="2" class="text-center">
                          <span class="badge" :class="journalEntry.is_balanced
                            ? 'badge-success'
                            : 'badge-danger'
                            ">
                            {{
                              journalEntry.is_balanced
                                ? $t("Balanced")
                                : $t("Unbalanced")
                            }}
                          </span>
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <div v-else class="text-center text-muted">
              <p>
                {{ $t("No journal entries found for this purchase return.") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import SwalOriginal from "sweetalert2/dist/sweetalert2";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return {
      title: this.isSaudiArabia
        ? this.$t("Debit Note Details")
        : this.$t("Purchase Return Details")
    };
  },
  components: {
    CurrencyDisplay: () => import('~/components/CurrencyDisplay'),
  },
  data: () => ({
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Purchase Returns",
        url: "purchaseReturns.index",
      },
      {
        name: "Details",
        url: "",
      },
    ],
    allData: "",
    purchaseSubTotal: 0,
    purchaseReturn: 0,
    returnProducts: [],
    productPrefix: "",
    purchasePrefix: "",
    returnPrefix: "",
    supplierPrefix: "",
    loading: false,
    query: "",
    perPage: 10,
  }),

  computed: {
    ...mapGetters("operations", ["appInfo", "items", "loading", "pagination"]),
    // Check if the country is Saudi Arabia
    isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA';
    },

    // Dynamic breadcrumb current page title
    breadcrumbsCurrent() {
      return this.isSaudiArabia
        ? this.$t("Debit Note Details")
        : this.$t("Purchase Return Details");
    },

    // Filter products that have return quantities > 0
    productsWithReturns() {
      if (!this.returnProducts || this.returnProducts.length === 0) {
        return [];
      }
      return this.returnProducts.filter((product) => product.returnQty > 0);
    },

    // Sort journal entry lines with debits first, then credits
    sortedJournalEntries() {
      if (!this.allData || !this.allData.journalEntries) {
        return [];
      }

      return this.allData.journalEntries.map(journalEntry => ({
        ...journalEntry,
        lines: this.sortJournalEntryLines(journalEntry.lines || [])
      }));
    },
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
    this.getInvoiceReturn();
    this.productPrefix = this.appInfo.productPrefix;
    this.purchasePrefix = this.appInfo.purchasePrefix;
    this.returnPrefix = this.appInfo.purchaseReturnPrefix;
    this.supplierPrefix = this.appInfo.supplierPrefix;
  },
  methods: {
    // Format number to two decimal places
    formatToTwoDecimals(value) {
      // Handle null, undefined, or non-numeric values
      if (value === null || value === undefined || isNaN(value)) {
        return '0.00'
      }
      const numValue = Number(value)
      if (isNaN(numValue)) {
        return '0.00'
      }
      return numValue.toFixed(2)
    },

    // get the return
    async getInvoiceReturn() {
      this.loading = true;
      const { data } = await axios.get(
        window.location.origin +
        "/api/purchase-returns/" +
        this.$route.params.slug
      );
      this.allData = data.data;
      this.returnProducts = this.allData.returnProducts;
      this.returnProducts.sort(this.sortProducts);
      this.calculateTotalAmount();
      this.loading = false;
    },

    sortProducts(a, b) {
      if (a.product.code < b.product.code) {
        return -1;
      }
      if (a.product.code > b.product.code) {
        return 1;
      }
      return 0;
    },

    // Sort journal entry lines: debits first, then credits
    sortJournalEntryLines(lines) {
      if (!lines || lines.length === 0) {
        return [];
      }

      return [...lines].sort((a, b) => {
        // If both are debits or both are credits, maintain original order
        const aIsDebit = a.debit_amount > 0;
        const bIsDebit = b.debit_amount > 0;

        if (aIsDebit && !bIsDebit) return -1; // a is debit, b is credit - a comes first
        if (!aIsDebit && bIsDebit) return 1;  // a is credit, b is debit - b comes first

        // If both are same type, maintain original order by line number
        return a.line_number - b.line_number;
      });
    },

    // Get VAT rate for a product from database
    getVatRate(product = null) {
      if (product && product.vatRate) {
        return product.vatRate;
      }
      // Fallback to first product's VAT rate or default 15%
      if (this.returnProducts && this.returnProducts.length > 0) {
        return this.returnProducts[0].vatRate || 15;
      }
      return 15; // Default VAT rate
    },

    // Calculate unit discount
    calculateUnitDiscount(product) {
      const returnQty = parseFloat(product.returnQty) || 0;
      const discountAmount = parseFloat(product.discountAmount) || 0;
      const purchasedQty = parseFloat(product.purchasedQty) || 1;

      if (purchasedQty > 0) {
        const unitDiscount = discountAmount / purchasedQty;
        return Number((unitDiscount * returnQty).toFixed(2));
      }
      return 0;
    },

    // Calculate unit net (price after discount)
    calculateUnitNet(product) {
      const purchasePrice = parseFloat(product.purchasePrice) || 0;
      const returnQty = parseFloat(product.returnQty) || 0;
      const discountAmount = parseFloat(product.discountAmount) || 0;
      const purchasedQty = parseFloat(product.purchasedQty) || 1;

      if (purchasedQty > 0) {
        const unitDiscount = discountAmount / purchasedQty;
        const unitNet = purchasePrice - unitDiscount;
        return Number((unitNet * returnQty).toFixed(2));
      }
      return Number((purchasePrice * returnQty).toFixed(2));
    },

    // Calculate unit VAT
    calculateUnitVat(product) {
      const returnQty = parseFloat(product.returnQty) || 0;
      const discountAmount = parseFloat(product.discountAmount) || 0;
      const purchasedQty = parseFloat(product.purchasedQty) || 1;
      const purchasePrice = parseFloat(product.purchasePrice) || 0;
      const vatRate = this.getVatRate(product);

      if (purchasedQty > 0) {
        const unitDiscount = discountAmount / purchasedQty;
        const unitNet = purchasePrice - unitDiscount;
        const unitVat = (unitNet * vatRate) / 100;
        return Number((unitVat * returnQty).toFixed(2));
      }
      return 0;
    },

    // Calculate unit total (net + VAT)
    calculateUnitTotal(product) {
      const unitNet = this.calculateUnitNet(product);
      const unitVat = this.calculateUnitVat(product);
      return Number((unitNet + unitVat).toFixed(2));
    },

    // Calculate total cost of returned products
    calculateTotalReturnedProductCost() {
      if (!this.productsWithReturns || this.productsWithReturns.length === 0) {
        return 0;
      }
      return this.productsWithReturns.reduce((total, product) => {
        const returnQty = parseFloat(product.returnQty) || 0;
        const purchasePrice = parseFloat(product.purchasePrice) || 0;
        return total + (returnQty * purchasePrice);
      }, 0);
    },

    // Calculate total return discount
    calculateTotalReturnDiscount() {
      if (!this.productsWithReturns || this.productsWithReturns.length === 0) {
        return 0;
      }
      return this.productsWithReturns.reduce((total, product) => {
        return total + this.calculateUnitDiscount(product);
      }, 0);
    },

    // Calculate total return tax
    calculateTotalReturnTax() {
      if (!this.productsWithReturns || this.productsWithReturns.length === 0) {
        return 0;
      }
      return this.productsWithReturns.reduce((total, product) => {
        return total + this.calculateUnitVat(product);
      }, 0);
    },

    // calculate total return
    calculateTotalAmount() {
      let purchaseSubTotal = 0;
      let purchaseReturn = 0;
      if (this.returnProducts) {
        purchaseSubTotal = this.returnProducts.reduce(function (prev, next) {
          return prev + Number(next.purchasedQty) * Number(next.purchasePrice);
        }, 0);
        purchaseReturn = this.returnProducts.reduce(function (prev, next) {
          return prev + Number(next.returnQty) * Number(next.purchasePrice);
        }, 0);
      }
      this.purchaseSubTotal = purchaseSubTotal;
      this.purchaseReturn = purchaseReturn;
      return;
    },

    // print
    // Commented out - replaced with downloadPDF and previewPDF methods
    // printWindow() {
    //   window.print();
    // },

    // download PDF
    downloadPDF() {
      window.location.href = `/print/purchase-return/${this.$route.params.slug}/pdf`;
    },

    // preview PDF
    previewPDF() {
      window.location.href = `/print/purchase-return/${this.$route.params.slug}/preview`;
    },

    // Commented out - replaced with downloadPDF method
    // generatePDF() {
    //   // Get the HTML content to be converted
    //   const element = document.getElementById("content-to-pdf");
    //   // Options for PDF generation
    //   const options = {
    //     margin: 5,
    //     filename: "Purchase Return Invoice-" + this.$route.params.slug + ".pdf",
    //     image: { type: "jpeg", quality: 0.98 },
    //     pagebreak: { mode: "avoid-all", before: "#page-break" },
    //     html2canvas: { scale: 2 },
    //     jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
    //   };
    //   // Generate PDF from HTML content
    //   html2pdf().from(element).set(options).save();
    // },

    // print table
    async print() {
      await this.$htmlToPaper("printMe");
    },

    // get activity logs
    async getActivity() {
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      this.$store.state.operations.loading = true;
      let slug = this.$route.params.slug;
      let modelName = "PurchaseReturn";
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
      let modelName = "PurchaseReturn";
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
      await this.getActivity();
      this.$toast.success(
        this.$t("Refreshed"),
        this.$t("Activity log has been refreshed successfully")
      );
    },

    // reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },

    // send purchase return to ZATCA
    async sendPurchaseReturn(data) {
      SwalOriginal.fire({
        title: this.$t("Send Purchase Return to ZATCA"),
        text: this.$t("Do you want to send this purchase return to ZATCA?"),
        type: "question",
        showCancelButton: true,
        confirmButtonText: this.$t("Yes"),
        cancelButtonText: this.$t("No"),
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#dc3545",
      }).then(async (result) => {
        if (result.value) {
          try {
            // Show loading
            SwalOriginal.fire({
              title: this.$t("Sending..."),
              text: this.$t("Please wait while we send the purchase return to ZATCA"),
              allowOutsideClick: false,
              showConfirmButton: false,
              willOpen: () => {
                SwalOriginal.showLoading();
              }
            });

            // Send purchase return to ZATCA and create journal entries
            const response = await axios.post(`/api/purchase-returns/${data.slug}/send-to-zatca`);

            // Close the loading dialog
            SwalOriginal.close();

            if (response.data.success) {
              this.$toast.success(
                this.$t("Sent Successfully!"),
                this.$t("Purchase return has been sent to ZATCA and journal entries have been created.")
              );
              // Refresh the purchase return data to update the status
              this.getInvoiceReturn();
            } else {
              this.$toast.error(
                this.$t("Failed!"),
                response.data.message || this.$t("Failed to send purchase return to ZATCA")
              );
            }
          } catch (error) {
            console.error('Error sending purchase return to ZATCA:', error);
            // Close the loading dialog
            SwalOriginal.close();
            this.$toast.error(
              this.$t("Error!"),
              this.$t("An error occurred while sending the purchase return to ZATCA")
            );
          }
        }
      });
    },
  },
};
</script>
<style scoped>
.nav-pills .nav-item {
  background: #ddd;
  margin: 2px;
  border-radius: 0.25rem;
}

/* Calculation Summary Styles */
.equal-sign {
  color: #007bff;
  font-weight: bold;
  margin-right: 5px;
}

.bg-indigo-light {
  background-color: #e3f2fd !important;
}

.bg-red-light {
  background-color: #ffebee !important;
}

.bg-green-light {
  background-color: #e8f5e8 !important;
}

.bg-sub-light {
  background-color: #f8f9fa !important;
}

/* Purchase Create Table Styles */
.purchases-create-table {
  border-collapse: collapse;
  width: 100%;
}

.purchases-create-table th,
.purchases-create-table td {
  border: 1px solid #dee2e6;
  padding: 8px;
  text-align: center;
  vertical-align: middle;
}

.purchases-create-table th {
  background-color: #f8f9fa;
  font-weight: bold;
  font-size: 0.875rem;
}

.purchases-create-table tbody tr:hover {
  background-color: #f8f9fa;
}

.purchases-create-table .quantity-field {
  width: 80px;
  text-align: center;
}

.purchases-create-table .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}
</style>
