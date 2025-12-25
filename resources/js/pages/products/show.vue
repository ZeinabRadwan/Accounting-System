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
                <a
                  class="nav-link active"
                  href="#details"
                  data-toggle="tab"
                  @click="getProduct"
                >
                  <i class="fa fa-info"></i>
                  {{ $t("Details") }}</a
                >
              </li>
              <li class="nav-item">
                <a
                  @click="getActivity"
                  class="nav-link"
                  href="#activity-log"
                  data-toggle="tab"
                >
                  <i class="nav-icon fa fa-bell" aria-hidden="true"></i>
                  {{ $t("Activity log") }}</a
                >
              </li>
            </ul>
          </div>
          <div class="btn-group">
            <a @click="generatePDF()" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <router-link
              v-if="$can('product-edit')"
              :to="{
                name: 'products.edit',
                params: { slug: allData.slug },
              }"
              class="btn btn-info"
            >
              <i class="fas fa-edit" /> {{ $t("Edit") }}
            </router-link>
            <router-link
              :to="{ name: 'products.index' }"
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
      <div class="tab-pane active" id="details">
        <div class="row">
          <table-loading v-show="loading" />
          <div
            v-if="!loading"
            class="invoice p-3 mb-3 w-100"
            id="content-to-pdf"
          >
            <div class="row align-items-center flex-row-reverse">
              <div class="col-lg-6">
                <table class="table table-hover table-bordered table-md">
                  <tbody>
                    <tr>
                      <th>{{ $t("Barcode") }}</th>
                      <td>
                        <barcode
                          :format="allData.symbology"
                          width="1"
                          height="25"
                          fontSize="15"
                          :value="allData.code"
                        >
                          {{ $t("Rendering fails.") }}
                        </barcode>
                      </td>
                    </tr>
                    <tr>
                      <th>{{ $t("Item Type") }}</th>
                      <td class="text-capitalize">{{ allData.itemType }}</td>
                    </tr>
                    <tr>
                      <th>{{ $t("Name") }}</th>
                      <td>{{ allData.name }}</td>
                    </tr>
                    <tr>
                      <th>{{ $t("Code") }}</th>
                      <td>{{ allData.code | withPrefix(prefix) }}</td>
                    </tr>
                    <tr>
                      <th>{{ $t("Item Model") }}</th>
                      <td>{{ allData.itemModel }}</td>
                    </tr>
                    <tr>
                      <th>
                        {{ $t("Barcode Symbology") }}
                      </th>
                      <td>{{ allData.symbology }}</td>
                    </tr>
                    <tr v-if="allData.category">
                      <th>{{ $t("Category") }}</th>
                      <td>
                        {{ allData.category.name }} [{{
                          allData.category.code | withPrefix(catPrefix)
                        }}]
                      </td>
                    </tr>
                    <tr v-if="allData.subCategory">
                      <th>{{ $t("Sub Category") }}</th>
                      <td>
                        {{ allData.subCategory.name }} [{{
                          allData.subCategory.code | withPrefix(subCatPrefix)
                        }}]
                      </td>
                    </tr>
                    <tr v-if="allData.itemBrand">
                      <th>{{ $t("Brand") }}</th>
                      <td>{{ allData.itemBrand.name }}</td>
                    </tr>
                    <tr v-if="allData.itemUnit">
                      <th>{{ $t("Unit") }}</th>
                      <td>{{ allData.itemUnit.code }}</td>
                    </tr>
                    <tr v-if="allData.itemTax">
                      <th>{{ $t("Product Tax") }}</th>
                      <td>
                        {{ allData.itemTax.code }}
                        <span
                          v-if="
                            allData.itemTax &&
                            allData.itemTax.groupTaxDetails &&
                            allData.itemTax.groupTaxDetails.length
                          "
                        >
                          (<span
                            v-for="(tax, index) in allData.itemTax
                              .groupTaxDetails"
                            :key="tax.id"
                          >
                            {{ tax.rate }}%<span
                              v-if="
                                index <
                                allData.itemTax.groupTaxDetails.length - 1
                              "
                            >
                              +</span
                            > </span
                          >)
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>{{ $t("Tax Type") }}</th>
                      <td>{{ allData.taxType }}</td>
                    </tr>
                    <tr>
                      <th>{{ $t("Tax Amount") }}</th>
                      <td>{{ allData.taxAmount }}</td>
                    </tr>
                    <tr>
                      <th>{{ $t("Regular Price") }}</th>
                      <td>{{ allData.regularPrice  }} <span class="saudi-riyal">ê</span></td>
                    </tr>
                    <tr>
                      <th>{{ $t("Discount") }}</th>
                      <td>{{ allData.discount || 0 }} <span class="saudi-riyal">ê</span></td>
                    </tr>
                    <tr>
                      <th>{{ $t("Selling Price") }}</th>
                      <td>
                        <span v-if="allData.discount > 0">
                          <del>{{ allData.regularPrice  }} <span class="saudi-riyal">ê</span></del>
                          {{ calculatedSellingPrice  }} <span class="saudi-riyal">ê</span> ({{
                            allData.discount
                          }}%)
                        </span>
                        <span v-else
                          >{{ calculatedSellingPrice  }} <span class="saudi-riyal">ê</span>
                        </span>
                      </td>
                    </tr>
                    <tr v-if="allData.itemUnit">
                      <th>{{ $t("Stock") }}</th>
                      <td>
                        {{ allData.availableQty }} {{ allData.itemUnit.code }}
                      </td>
                    </tr>
                    <tr>
                      <th>{{ $t("Inventory Value") }}</th>
                      <td>
                        {{
                          calculatedInventoryValue
                        }} <span class="saudi-riyal">ê</span>
                      </td>
                    </tr>
                    <tr>
                      <th>{{ $t("Alert Quantity") }}</th>
                      <td>
                        {{ allData.alertQty }}
                        <span v-if="allData.itemUnit">{{
                          allData.itemUnit.code
                        }}</span>
                      </td>
                    </tr>
                    <tr v-if="allData.openingStockCount">
                      <th>{{ $t("Opening Stock Quantity") }}</th>
                      <td>
                        {{ allData.openingStockCount }} <span v-if="allData.itemUnit">{{
                          allData.itemUnit.code
                        }}</span>
                      </td>
                    </tr>
                    <tr v-if="allData.openingStockUnitPrice">
                      <th>{{ $t("Opening Stock Unit Price") }}</th>
                      <td>
                        {{ allData.openingStockUnitPrice  }} <span class="saudi-riyal">ê</span>
                      </td>
                    </tr>
                    <tr v-if="allData.note">
                      <th>{{ $t("Note") }}</th>
                      <td>{{ allData.note }}</td>
                    </tr>
                    <tr>
                      <th>{{ $t("Status") }}</th>
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
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-lg-6 no-print">
                <div class="about-avatar text-center">
                  <img
                    v-if="allData.image"
                    :src="allData.image"
                    class="img-fluid"
                    loading="lazy"
                  />
                  <img
                    v-else
                    src="https://via.placeholder.com/800x1000"
                    class="img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <!-- Purchase Cost Breakdown Section -->
            <div v-if="!allData.itemType || allData.itemType === 'product'" class="row mt-4">
              <div class="col-12">
                <div class="card custom-card">
                  <div class="card-header setings-header">
                    <h3 class="card-title">{{ $t("Purchase Cost Breakdown") }}</h3>
                  </div>
                  <div class="card-body">
                    <div v-if="(purchaseHistory && purchaseHistory.length > 0) || openingQuantity > 0 || totalPurchasedQuantity > 0">
                      <div class="table-responsive">
                        <table class="table table-bordered table-hover table-sm">
                          <thead class="thead-light">
                            <tr>
                              <th>{{ $t("Date") }}</th>
                              <th>{{ $t("Purchase No") }}</th>
                              <th>{{ $t("Reference") }}</th>
                              <th class="text-right">{{ $t("Quantity") }}</th>
                              <th class="text-right">{{ $t("Unit Price") }}</th>
                              <th class="text-right">{{ $t("Line Total") }}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(purchase, index) in purchaseHistory" :key="purchase.id || index" :class="{
                              'table-info': purchase.type === 'opening_stock',
                              'table-warning': purchase.type === 'purchase_return',
                              'table-success': purchase.type === 'discount' || purchase.type === 'freight'
                            }">
                              <td>
                                <span v-if="purchase.purchase_date">{{ formatDate(purchase.purchase_date) }}</span>
                                <span v-else-if="purchase.type === 'opening_stock'" class="text-muted">{{ $t("Opening Stock") }}</span>
                                <span v-else-if="purchase.type === 'purchase_return'" class="text-muted">{{ $t("Purchase Return") }}</span>
                                <span v-else-if="purchase.type === 'discount'" class="text-muted">{{ $t("Discount") }}</span>
                                <span v-else-if="purchase.type === 'freight'" class="text-muted">{{ $t("Freight") }}</span>
                                <span v-else class="text-muted">-</span>
                              </td>
                              <td>
                                <span v-if="purchase.purchase_no">
                                  {{ formatPurchaseNumber(purchase.purchase_no) }}
                                </span>
                                <span v-else-if="purchase.type === 'opening_stock' || purchase.type === 'discount' || purchase.type === 'freight'" class="text-muted">-</span>
                                <span v-else-if="purchase.return_no">
                                  {{ formatPurchaseNumber(purchase.return_no) }}
                                </span>
                                <span v-else class="text-muted">-</span>
                              </td>
                              <td>
                                <span v-if="purchase.purchase_reference">
                                  {{ purchase.purchase_reference }}
                                </span>
                                <span v-else-if="purchase.return_reference">
                                  {{ purchase.return_reference }}
                                </span>
                                <span v-else-if="purchase.type === 'discount'">{{ $t("Purchase Discount") }}</span>
                                <span v-else-if="purchase.type === 'freight'">{{ $t("Freight Cost") }}</span>
                                <span v-else class="text-muted">-</span>
                              </td>
                              <td class="text-right">
                                <span v-if="purchase.type === 'discount' || purchase.type === 'freight'">-</span>
                                <span v-else>
                                  <span v-if="purchase.type === 'purchase_return'" class="text-danger">-</span>
                                  {{ formatNumber(Math.abs(purchase.quantity)) }}
                                  <span v-if="allData.itemUnit">{{ allData.itemUnit.code }}</span>
                                </span>
                              </td>
                              <td class="text-right">
                                <span v-if="purchase.type === 'discount' || purchase.type === 'freight'">-</span>
                                <span v-else>
                                  {{ formatCurrency(purchase.purchase_price) }} <span class="saudi-riyal">ê</span>
                                </span>
                              </td>
                              <td class="text-right">
                                <strong :class="{
                                  'text-danger': purchase.type === 'purchase_return' || purchase.type === 'discount',
                                  'text-success': purchase.type === 'freight'
                                }">
                                  <span v-if="purchase.type === 'purchase_return' || purchase.type === 'discount'">-</span>
                                  <span v-else-if="purchase.type === 'freight'">+</span>
                                  {{ formatCurrency(Math.abs(purchase.line_total)) }} <span class="saudi-riyal">ê</span>
                                </strong>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot class="thead-light">
                            <tr>
                              <th colspan="3" class="text-right">{{ $t("Totals") }}:</th>
                              <th class="text-right">
                                {{ formatNumber(totalPurchaseQuantity) }}
                                <span v-if="allData.itemUnit">{{ allData.itemUnit.code }}</span>
                              </th>
                              <th class="text-right">-</th>
                              <th class="text-right">
                                <strong>{{ formatCurrency(totalPurchaseValue) }} <span class="saudi-riyal">ê</span></strong>
                              </th>
                            </tr>
                            <tr v-if="totalPurchaseDiscounts > 0" class="table-warning">
                              <th colspan="3" class="text-right">
                                <strong class="text-danger">{{ $t("Total Discounts") }}:</strong>
                              </th>
                              <th class="text-right">-</th>
                              <th class="text-right">-</th>
                              <th class="text-right">
                                <strong class="text-danger">-{{ formatCurrency(totalPurchaseDiscounts) }} <span class="saudi-riyal">ê</span></strong>
                              </th>
                            </tr>
                            <tr v-if="totalFreightCosts > 0" class="table-success">
                              <th colspan="3" class="text-right">
                                <strong class="text-success">{{ $t("Total Freight Cost") }}:</strong>
                              </th>
                              <th class="text-right">-</th>
                              <th class="text-right">-</th>
                              <th class="text-right">
                                <strong class="text-success">+{{ formatCurrency(totalFreightCosts) }} <span class="saudi-riyal">ê</span></strong>
                              </th>
                            </tr>
                            <tr v-if="totalPurchaseReturnsValue > 0" class="table-warning">
                              <th colspan="3" class="text-right">
                                <strong class="text-danger">{{ $t("Total Purchase Returns") }}:</strong>
                              </th>
                              <th class="text-right">
                                <span class="text-danger">-{{ formatNumber(totalPurchaseReturnsQuantity) }}</span>
                                <span v-if="allData.itemUnit">{{ allData.itemUnit.code }}</span>
                              </th>
                              <th class="text-right">-</th>
                              <th class="text-right">
                                <strong class="text-danger">-{{ formatCurrency(totalPurchaseReturnsValue) }} <span class="saudi-riyal">ê</span></strong>
                              </th>
                            </tr>
                            <tr v-if="netQuantity > 0" class="bg-light">
                              <th colspan="5" class="text-right">
                                <strong>{{ $t("Weighted Average Cost") }}:</strong>
                              </th>
                              <th class="text-right">
                                <strong class="text-primary">{{ formatCurrency(calculatedAverageCost) }} <span class="saudi-riyal">ê</span></strong>
                              </th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                    <div v-else class="alert alert-info">
                      <i class="fas fa-info-circle"></i>
                      {{ $t("No purchase history available for this product.") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <a
                  @click.prevent="!loading && refreshTable()"
                  href="#"
                  v-tooltip="$t('Refresh')"
                  :class="['btn', 'btn-success', loading ? 'disabled' : '']"
                  :aria-busy="loading ? 'true' : 'false'"
                >
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
    </div>
  </div>
</template>

<script>
import VueBarcode from "vue-barcode";
import { mapGetters } from "vuex";
import axios from "axios";
import html2pdf from "html2pdf.js";
import iziToast from "izitoast";
import GeneralTable from "~/components/GeneralTable";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Product Details") };
  },
  components: {
    barcode: VueBarcode,
    GeneralTable,
  },
  data: () => ({
    breadcrumbsCurrent: "Product Details",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Products",
        url: "products.index",
      },
      {
        name: "Details",
        url: "",
      },
    ],
    allData: "",
    loading: false,
    query: "",
    perPage: 10,
  }),
  // Map Getters
  computed: {
    ...mapGetters("operations", ["appInfo", "items", "loading", "pagination"]),
    // Calculate selling price as regularPrice + taxAmount - discount
    calculatedSellingPrice() {
      if (!this.allData) return 0;
      const regularPrice = parseFloat(this.allData.regularPrice) || 0;
      const taxAmount = parseFloat(this.allData.taxAmount) || 0;
      const discount = parseFloat(this.allData.discount) || 0;
      return regularPrice + taxAmount - discount;
    },
    // Calculate inventory value as sellingPrice * stockQty
    calculatedInventoryValue() {
      if (!this.allData) return 0;
      const stockQty = parseFloat(this.allData.availableQty) || 0;
      return this.calculatedSellingPrice * stockQty;
    },
    // Get purchase history from allData (including opening stock, purchases, returns, discounts, freight)
    purchaseHistory() {
      const history = [];
      
      // Add opening stock if it exists
      if (this.allData && this.allData.openingStockData) {
        const openingStock = this.allData.openingStockData;
        if (openingStock.quantity > 0 && openingStock.unit_price > 0) {
          history.push({
            id: 'opening',
            type: 'opening_stock',
            purchase_date: null,
            purchase_no: null,
            purchase_reference: this.$t('Opening Stock'),
            quantity: parseFloat(openingStock.quantity) || 0,
            purchase_price: parseFloat(openingStock.unit_price) || 0,
            line_total: parseFloat(openingStock.total_value) || 0,
          });
        }
      }
      
      // Add opening inventory if provided separately
      if (this.allData && this.allData.opening_inventory) {
        const openingInv = this.allData.opening_inventory;
        if (openingInv.quantity > 0 && openingInv.unit_price > 0) {
          history.push({
            id: 'opening_inv',
            type: 'opening_stock',
            purchase_date: null,
            purchase_no: null,
            purchase_reference: this.$t('Opening Inventory'),
            quantity: parseFloat(openingInv.quantity) || 0,
            purchase_price: parseFloat(openingInv.unit_price) || 0,
            line_total: (parseFloat(openingInv.quantity) || 0) * (parseFloat(openingInv.unit_price) || 0),
          });
        }
      }
      
      // Add purchase products
      if (this.allData && this.allData.purchaseProducts) {
        const purchaseProducts = this.allData.purchaseProducts
          .filter(pp => pp && pp.purchase_price !== null && pp.purchase_price !== undefined)
          .map(pp => ({
            id: pp.id,
            type: 'purchase',
            purchase_date: pp.purchase_date,
            purchase_no: pp.purchase_no,
            purchase_reference: pp.purchase_reference,
            quantity: parseFloat(pp.quantity) || 0,
            purchase_price: parseFloat(pp.purchase_price) || 0,
            line_total: (parseFloat(pp.quantity) || 0) * (parseFloat(pp.purchase_price) || 0),
          }));
        
        history.push(...purchaseProducts);
      }
      
      // Add purchases from purchases array if provided
      if (this.allData && this.allData.purchases && Array.isArray(this.allData.purchases)) {
        const purchases = this.allData.purchases
          .filter(p => p && p.quantity > 0 && p.unit_price > 0)
          .map(p => ({
            id: p.id || `purchase-${p.purchase_no}`,
            type: 'purchase',
            purchase_date: p.purchase_date || p.date,
            purchase_no: p.purchase_no,
            purchase_reference: p.reference || p.purchase_reference,
            quantity: parseFloat(p.quantity) || 0,
            purchase_price: parseFloat(p.unit_price) || 0,
            line_total: (parseFloat(p.quantity) || 0) * (parseFloat(p.unit_price) || 0),
          }));
        
        history.push(...purchases);
      }
      
      // Add purchase returns
      if (this.allData && this.allData.purchase_returns && Array.isArray(this.allData.purchase_returns)) {
        const returns = this.allData.purchase_returns
          .filter(pr => pr && pr.quantity > 0 && pr.unit_cost > 0)
          .map(pr => ({
            id: pr.id || `return-${pr.return_no}`,
            type: 'purchase_return',
            purchase_date: pr.return_date || pr.date,
            return_no: pr.return_no,
            return_reference: pr.reference || pr.return_reference,
            quantity: parseFloat(pr.quantity) || 0,
            purchase_price: parseFloat(pr.unit_cost) || 0,
            line_total: (parseFloat(pr.quantity) || 0) * (parseFloat(pr.unit_cost) || 0),
          }));
        
        history.push(...returns);
      }
      
      // Add discounts
      if (this.allData && this.allData.discounts && Array.isArray(this.allData.discounts)) {
        const discounts = this.allData.discounts
          .filter(d => d && d.amount > 0)
          .map(d => ({
            id: d.id || `discount-${d.purchase_no || Date.now()}`,
            type: 'discount',
            purchase_date: d.purchase_date || d.date,
            purchase_no: d.purchase_no,
            purchase_reference: d.reference || d.purchase_reference,
            quantity: 0,
            purchase_price: 0,
            line_total: parseFloat(d.amount) || 0,
          }));
        
        history.push(...discounts);
      }
      
      // Add freight costs
      if (this.allData && this.allData.freight_costs && Array.isArray(this.allData.freight_costs)) {
        const freight = this.allData.freight_costs
          .filter(f => f && f.amount > 0)
          .map(f => ({
            id: f.id || `freight-${f.purchase_no || Date.now()}`,
            type: 'freight',
            purchase_date: f.purchase_date || f.date,
            purchase_no: f.purchase_no,
            purchase_reference: f.reference || f.purchase_reference,
            quantity: 0,
            purchase_price: 0,
            line_total: parseFloat(f.amount) || 0,
          }));
        
        history.push(...freight);
      }
      
      // Sort by date (oldest first, opening stock first if no date)
      return history.sort((a, b) => {
        if (a.type === 'opening_stock') return -1;
        if (b.type === 'opening_stock') return 1;
        const dateA = a.purchase_date ? new Date(a.purchase_date) : new Date(0);
        const dateB = b.purchase_date ? new Date(b.purchase_date) : new Date(0);
        return dateA - dateB; // Oldest first
      });
    },
    // Calculate opening inventory quantity
    openingQuantity() {
      if (!this.allData) return 0;
      
      let quantity = 0;
      
      // From openingStockData
      if (this.allData.openingStockData) {
        quantity += parseFloat(this.allData.openingStockData.quantity) || 0;
      }
      
      // From opening_inventory array
      if (this.allData.opening_inventory) {
        quantity += parseFloat(this.allData.opening_inventory.quantity) || 0;
      }
      
      return quantity;
    },
    // Calculate opening inventory value
    openingInventoryValue() {
      if (!this.allData) return 0;
      
      let value = 0;
      
      // From openingStockData
      if (this.allData.openingStockData) {
        value += parseFloat(this.allData.openingStockData.total_value) || 0;
      }
      
      // From opening_inventory array
      if (this.allData.opening_inventory) {
        const qty = parseFloat(this.allData.opening_inventory.quantity) || 0;
        const price = parseFloat(this.allData.opening_inventory.unit_price) || 0;
        value += qty * price;
      }
      
      return value;
    },
    // Calculate total purchased quantity (excluding returns)
    totalPurchasedQuantity() {
      if (!this.purchaseHistory || this.purchaseHistory.length === 0) {
        return 0;
      }
      return this.purchaseHistory
        .filter(p => p.type === 'purchase')
        .reduce((sum, purchase) => {
          return sum + (parseFloat(purchase.quantity) || 0);
        }, 0);
    },
    // Calculate total purchase value (excluding returns, discounts, freight)
    totalPurchaseValue() {
      if (!this.purchaseHistory || this.purchaseHistory.length === 0) {
        return 0;
      }
      return this.purchaseHistory
        .filter(p => p.type === 'purchase')
        .reduce((sum, purchase) => {
          return sum + (parseFloat(purchase.line_total) || 0);
        }, 0);
    },
    // Calculate total purchase quantity (including opening stock and purchases, excluding returns)
    totalPurchaseQuantity() {
      return this.openingQuantity + this.totalPurchasedQuantity;
    },
    // Calculate total purchase discounts
    totalPurchaseDiscounts() {
      if (!this.allData) return 0;
      
      let total = 0;
      
      // From discounts array
      if (this.allData.discounts && Array.isArray(this.allData.discounts)) {
        total = this.allData.discounts.reduce((sum, discount) => {
          return sum + (parseFloat(discount.amount) || 0);
        }, 0);
      }
      
      // Also from purchaseHistory for display
      if (this.purchaseHistory) {
        const discountTotal = this.purchaseHistory
          .filter(p => p.type === 'discount')
          .reduce((sum, discount) => {
            return sum + (parseFloat(discount.line_total) || 0);
          }, 0);
        
        if (discountTotal > total) {
          total = discountTotal;
        }
      }
      
      return total;
    },
    // Calculate total freight costs
    totalFreightCosts() {
      if (!this.allData) return 0;
      
      let total = 0;
      
      // From freight_costs array
      if (this.allData.freight_costs && Array.isArray(this.allData.freight_costs)) {
        total = this.allData.freight_costs.reduce((sum, freight) => {
          return sum + (parseFloat(freight.amount) || 0);
        }, 0);
      }
      
      // Also from purchaseHistory for display
      if (this.purchaseHistory) {
        const freightTotal = this.purchaseHistory
          .filter(p => p.type === 'freight')
          .reduce((sum, freight) => {
            return sum + (parseFloat(freight.line_total) || 0);
          }, 0);
        
        if (freightTotal > total) {
          total = freightTotal;
        }
      }
      
      return total;
    },
    // Calculate total purchase returns quantity
    totalPurchaseReturnsQuantity() {
      if (!this.allData) return 0;
      
      let total = 0;
      
      // From purchase_returns array
      if (this.allData.purchase_returns && Array.isArray(this.allData.purchase_returns)) {
        total = this.allData.purchase_returns.reduce((sum, ret) => {
          return sum + (parseFloat(ret.quantity) || 0);
        }, 0);
      }
      
      // Also from purchaseHistory for display
      if (this.purchaseHistory) {
        const returnTotal = this.purchaseHistory
          .filter(p => p.type === 'purchase_return')
          .reduce((sum, ret) => {
            return sum + (parseFloat(ret.quantity) || 0);
          }, 0);
        
        if (returnTotal > total) {
          total = returnTotal;
        }
      }
      
      return total;
    },
    // Calculate total purchase returns value
    totalPurchaseReturnsValue() {
      if (!this.allData) return 0;
      
      let total = 0;
      
      // From purchase_returns array
      if (this.allData.purchase_returns && Array.isArray(this.allData.purchase_returns)) {
        total = this.allData.purchase_returns.reduce((sum, ret) => {
          const qty = parseFloat(ret.quantity) || 0;
          const cost = parseFloat(ret.unit_cost) || 0;
          return sum + (qty * cost);
        }, 0);
      }
      
      // Also from purchaseHistory for display
      if (this.purchaseHistory) {
        const returnTotal = this.purchaseHistory
          .filter(p => p.type === 'purchase_return')
          .reduce((sum, ret) => {
            return sum + (parseFloat(ret.line_total) || 0);
          }, 0);
        
        if (returnTotal > total) {
          total = returnTotal;
        }
      }
      
      return total;
    },
    // Calculate net quantity (opening + purchased - returned)
    netQuantity() {
      return this.openingQuantity + this.totalPurchasedQuantity - this.totalPurchaseReturnsQuantity;
    },
    // Calculate weighted average cost using the formula:
    // (Opening Inventory Value + Total Purchases Value - Total Purchase Discounts + Total Freight Cost - Purchase Returns Value) / (Opening Quantity + Purchased Quantity - Returned Quantity)
    calculatedAverageCost() {
      const numerator = this.openingInventoryValue 
        + this.totalPurchaseValue 
        - this.totalPurchaseDiscounts 
        + this.totalFreightCosts 
        - this.totalPurchaseReturnsValue;
      
      const denominator = this.netQuantity;
      
      if (denominator > 0) {
        return numerator / denominator;
      }
      
      return 0;
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
    this.getProduct();
    this.prefix = this.appInfo.productPrefix;
    this.catPrefix = this.appInfo.proCatPrefix;
    this.subCatPrefix = this.appInfo.proSubCatPrefix;
  },

  methods: {
    // print
    printWindow() {
      window.print();
    },
    // get the product
    async getProduct() {
      this.loading = true;
      const { data } = await axios.get(
        window.location.origin + "/api/products/" + this.$route.params.slug
      );
      this.allData = data.data;
      this.loading = false;
    },
    // download pdf
    generatePDF() {
      // Get the HTML content to be converted
      const element = document.getElementById("content-to-pdf");
      // Options for PDF generation
      const options = {
        margin: 5,
        filename: "Product-" + this.$route.params.slug + ".pdf",
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
      let modelName = "Product";
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
      let modelName = "Product";
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
    // Format currency
    formatCurrency(value) {
      if (value === null || value === undefined || isNaN(value)) {
        return "0.00";
      }
      return parseFloat(value).toFixed(2);
    },
    // Format number
    formatNumber(value) {
      if (value === null || value === undefined || isNaN(value)) {
        return "0";
      }
      return parseFloat(value).toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      });
    },
    // Format date
    formatDate(dateString) {
      if (!dateString) return "-";
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      } catch (e) {
        return dateString;
      }
    },
    // Format purchase number with prefix
    formatPurchaseNumber(purchaseNo) {
      if (!purchaseNo) return "-";
      const prefix = this.appInfo?.purchasePrefix || "PUR";
      return `${prefix}-${String(purchaseNo).padStart(5, '0')}`;
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
</style>
