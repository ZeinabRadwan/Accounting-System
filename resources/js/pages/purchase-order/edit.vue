<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'purchase-order.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
                </router-link>
                <button type="submit" class="btn btn-success" :form="'purchaseOrderEditForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
            <!-- form start -->
            <form id="purchaseOrderEditForm" role="form" @submit.prevent="updatePurchaseOrder" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row" v-if="items && products">
                <div class="form-group col-md-12 col-xl-3">
                  <label for="supplier">{{ $t("Supplier") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.supplier" :options="items" label="name"
                          :class="{ 'is-invalid': form.errors.has('supplier') }" name="supplier"
                          :placeholder="$t('Select a supplier')" @input="onSupplierChange" />
                      
                      <!-- Supplier Chart of Account Status -->
                      <div class="supplier-status mt-2" v-if="form.supplier">
                        <div v-if="!form.supplier.chart_of_account_id" class="supplier-warning">
                          <i class="fas fa-exclamation-triangle text-warning"></i>
                          <span class="ml-2">{{ $t('Supplier needs Chart of Account') }}</span>
                          <button 
                            type="button" 
                            class="btn btn-sm btn-outline-warning ml-2"
                            @click="autoAssignSupplierChartOfAccount"
                            :disabled="isAutoAssigningSupplier"
                          >
                            <i :class="isAutoAssigningSupplier ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                            {{ isAutoAssigningSupplier ? $t('Assigning...') : $t('Auto-Assign') }}
                          </button>
                        </div>
                      </div>
                      
                      <has-error :form="form" field="supplier" />
                    </div>
                <div class="form-group col-md-12 col-xl-3">
                  <label for="poNumber">{{ $t("PO Number") }}</label>
                  <input id="poNumber" v-model="form.poNumber" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('poNumber') }" name="poNumber" :placeholder="$t('Enter PO number')" readonly />
                  <has-error :form="form" field="poNumber" />
                  </div>
                <div v-if="products" class="form-group col-md-12 col-xl-6">
                  <label for="product">{{ $t("Select Products") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.product" :options="products" label="label" :class="{
                          'is-invalid': form.errors.has('selectedProducts'),
                        }" name="product" :placeholder="$t('Search products')"
                          @input="storeProduct(form.product)" />
                      
                      <!-- Product Chart of Account Status -->
                      <div class="product-status mt-2" v-if="form.selectedProducts && form.selectedProducts.length > 0">
                        <div v-if="!form.selectedProducts[0].purchase_account_id" class="product-warning">
                          <i class="fas fa-exclamation-triangle text-warning"></i>
                          <span class="ml-2">{{ $t('Product') }} "{{ form.selectedProducts[0].name }}" {{ $t('needs Purchase Account') }}</span>
                          <button 
                            type="button" 
                            class="btn btn-sm btn-outline-warning ml-2"
                            @click="autoAssignProductChartOfAccount(form.selectedProducts[0])"
                            :disabled="isAutoAssigningProduct === form.selectedProducts[0].id"
                          >
                            <i :class="isAutoAssigningProduct === form.selectedProducts[0].id ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                            {{ isAutoAssigningProduct === form.selectedProducts[0].id ? $t('Assigning...') : $t('Auto-Assign') }}
                          </button>
                        </div>
                      </div>
                      
                      <has-error :form="form" field="selectedProducts" />
                    </div>
                <div class="form-group col-md-12 col-xl-3">
                  <label for="purchaseDate">{{ $t("Purchase Date") }}
                    <span class="required">*</span></label>
                  <input id="purchaseDate" v-model="form.purchaseDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('purchaseDate') }" name="purchaseDate" />
                  <has-error :form="form" field="purchaseDate" />
                  </div>
                </div>

              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row mt-3 mb-4">
                <div class="table-responsive table-custom w-100 m-auto">
                  <table class="table table-hover table-sm text-center">
                      <thead>
                        <tr>
                        <th>{{ $t('#') }}</th>
                        <th>{{ $t('Code') }}</th>
                        <th>{{ $t('Name') }}</th>
                        <th>{{ $t('Quantity') }}</th>
                        <th>{{ $t('Unit Price') }}</th>
                        <th>{{ $t('Total') }}</th>
                        <th>{{ $t('Discount') }}</th>
                        <th>{{ $t('Total After Discount') }}</th>
                        <th>{{ $t('VAT Type') }}</th>
                        <th>{{ $t('VAT') }}</th>
                        <th>{{ $t('Total with VAT') }}</th>
                        <th class="text-right">{{ $t('Action') }}</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr v-for="(item, i) in form.selectedProducts" :key="i" class="text-center">
                        <td style="min-width: 50px;">{{ ++i }}</td>
                        <td style="min-width: 100px;">{{ item.code | withPrefix(prefix) }}</td>
                        <td style="min-width: 200px;">
                          <router-link v-if="$can('product-view')" :to="{
                            name: 'products.show',
                            params: { slug: item.slug },
                          }">
                            {{ item.name }}
                          </router-link>
                          <span v-else>{{ item.name }}</span>
                        </td>
                        <td style="min-width: 200px;">
                          <div class="input-group custom-qty-input">
                            <input type="button" value="-" class="button-minus icon-shape icon-sm btn-danger"
                              data-field="quantity" @click="generateItemTotal(item.qty, 'qty', i - 1, 'decrement')" />

                            <input type="number" step="any" :id="`purchaseQty-${i}`" :value="item.qty" name="quantity"
                              class="quantity-field border-0 incrementor" required :min="item.minQty" @change="
                                generateItemTotal($event.target.value, 'qty', i - 1, '')"
                              @keyup="generateItemTotal($event.target.value, 'qty', i - 1, '')" />

                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                              data-field="quantity" @click="generateItemTotal(item.qty, 'qty', i - 1, 'increment')" />
                          </div>
                          </td>
                          <td style="min-width: 200px;">
                          <div class="input-group custom-qty-input">
                            <input type="number" step="any" :id="`unitPrice-${i}`" :value="item.unitPrice"
                              name="unitPrice" class="quantity-field border-0" required min="1" @change="
                                generateItemTotal($event.target.value, 'price', i - 1, '')"
                              @keyup="generateItemTotal($event.target.value, 'price', i - 1, '')" />
                          </div>
                        </td>
                        <td style="min-width: 120px;">{{ (item.unitPrice * item.qty)  }} <span class="saudi-riyal">ê</span></td>
                        <td style="min-width: 180px;">
                          <div class="input-group">
                            <select 
                              v-model="item.discountType" 
                              class="form-control form-control-sm" 
                              style="width: 60px;"
                              @change="calculateProductDiscount(i - 1)">
                              <option value="fixed">{{ $t("Fixed") }}</option>
                              <option value="percentage">{{ $t("%") }}</option>
                            </select>
                            <input 
                              type="number" 
                              v-model="item.discount" 
                              class="form-control form-control-sm" 
                              style="width: 80px;"
                              step="any" 
                              min="0" 
                              :max="item.discountType == 'percentage' ? 100 : (item.unitPrice * item.qty)"
                              placeholder="0"
                              @change="calculateProductDiscount(i - 1)"
                              @keyup="calculateProductDiscount(i - 1)" />
                          </div>
                        </td>
                        <td style="min-width: 120px;">{{ ((item.unitPrice * item.qty) - (item.discountAmount || 0))  }} <span class="saudi-riyal">ê</span></td>
                        <td style="min-width: 150px;">
                          <select 
                            v-model="item.selectedVatRate" 
                            class="form-control form-control-sm"
                            @change="calculateProductVat(i - 1)"
                            style="min-width: 120px;">
                            <option value="">{{ $t('Select VAT') }}</option>
                            <option 
                              v-for="tax in taxes" 
                              :key="tax.id" 
                              :value="tax">
                              {{ tax.code }} ({{ tax.rate }}%)
                            </option>
                          </select>
                          </td>
                        <td style="min-width: 100px;">
                          <span class="form-control-plaintext form-control-sm text-center">
                            {{ item.productTax  }} <span class="saudi-riyal">ê</span>
                          </span>
                        </td>
                        <td style="min-width: 120px;">{{ item.totalPrice  }} <span class="saudi-riyal">ê</span></td>
                        <td class="text-right" style="min-width: 80px;">
                          <button type="button" class="btn btn-danger" @click="removeItem(item)">
                            <i class="fas fa-times"></i>
                            </button>
                          </td>
                        </tr>
                      <!-- Totals Row -->
                      <tr>
                        <td :colspan="7" class="text-right">
                          <strong>{{ $t('Total') }}:</strong>
                        </td>
                        <td>
                          <strong>{{ totalUnitPrice  }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td>
                          <strong>{{ form.totalDiscount  }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td>
                          <strong>{{ (totalUnitPrice - form.totalDiscount)  }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td>
                          <strong></strong>
                        </td>
                        <td>
                          <strong>{{ form.totalProductTax  }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td>
                          <strong>{{ form.subTotal  }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td></td>
                      </tr>
                      </tbody>
                    </table>
                </div>
              </div>

              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row">
                <div class="form-group col-md-6 col-xl-3">
                  <label for="poReference">{{ $t("PO Reference") }}</label>
                  <input id="poReference" v-model="form.poReference" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('poReference') }" name="poReference" :placeholder="$t('Enter PO reference')" />
                  <has-error :form="form" field="poReference" />
                </div>
                <div class="form-group col-md-6 col-xl-3">
                  <label for="paymentTerms">{{ $t("Payment Terms") }}</label>
                  <input id="paymentTerms" v-model="form.paymentTerms" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paymentTerms') }" name="paymentTerms" :placeholder="$t('Enter payment terms')" />
                  <has-error :form="form" field="paymentTerms" />
                </div>
                <div v-if="taxes" class="form-group col-md-6 col-xl-3">
                  <label for="orderTax">{{ $t("Purchase Tax") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.orderTax" :options="taxes" label="code"
                    :class="{ 'is-invalid': form.errors.has('orderTax') }" name="orderTax" :placeholder="$t('Select a tax type')"
                    @input="updateTax" />
                  <has-error :form="form" field="orderTax" />
                </div>
                <div v-if="taxes" class="form-group col-md-6 col-xl-3">
                  <label for="totalTax">{{ $t("Total Tax") }}</label>
                  <input id="totalTax" v-model="form.totalTax" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalTax') }" name="totalTax" readonly />
                  <has-error :form="form" field="totalTax" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 col-lg-4">
                  <label for="discount">{{ $t("Discount") }}</label>
                  <input id="discount" v-model="form.discount" type="number" step="any" min="1" :max="form.rowSubTotal"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                    :placeholder="$t('Enter discount')" @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="discount" />
                </div>
                <div class="form-group col-md-6 col-lg-4">
                  <label for="transportCost">{{ $t("Transport Cost") }}</label>
                  <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="0"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('transportCost') }" name="transportCost"
                    :placeholder="$t('Enter transport cost')" @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="transportCost" />
                </div>
                <div class="form-group col-md-6 col-lg-4">
                  <label for="netTotal">{{ $t("Net Total") }}</label>
                  <input id="netTotal" v-model="form.netTotal" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('netTotal') }" name="netTotal" readonly />
                  <has-error :form="form" field="netTotal" />
                </div>
              </div>

              <div class="form-group">
                <label for="note">{{ $t("Note") }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="purchaseDate">{{ $t("Purchase Date") }}</label>
                  <input id="purchaseDate" v-model="form.purchaseDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('purchaseDate') }" name="purchaseDate" />
                  <has-error :form="form" field="purchaseDate" />
                </div>
                <div class="form-group col-md-4">
                  <label for="poDate">{{ $t("PO Date") }}</label>
                  <input id="poDate" v-model="form.poDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('poDate') }" name="poDate" />
                  <has-error :form="form" field="poDate" />
                </div>
                <div class="form-group col-md-4">
                  <label for="status">{{ $t("Status") }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t("Active") }}</option>
                    <option value="0">{{ $t("Inactive") }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>

                </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                  <v-button :loading="form.busy" type="success">
                    <i class="fas fa-edit" /> {{ $t("Save changes") }}
                  </v-button>
                  <button type="reset" class="btn btn-info" @click="form.reset()">
                    <i class="fas fa-power-off" /> {{ $t("Reset") }}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Edit Purchase Order") };
  },
  data: () => ({
    breadcrumbsCurrent: "",
    breadcrumbs: [
      {
        name: "",
        url: "home",
      },
      {
        name: "",
        url: "purchase-order.index",
      },
      {
        name: "",
        url: "",
      },
    ],
    form: new Form({
      supplier: "",
      poNumber: "",
      selectedProducts: [],
      orderTax: "",
      totalTax: 0,
      discount: "",
      transportCost: "",
      subTotal: 0,
      rowSubTotal: 0,
      netTotal: 0,
      poReference: "",
      paymentTerms: "",
      totalProductTax: 0,
      poDate: new Date().toISOString().slice(0, 10),
      purchaseDate: new Date().toISOString().slice(0, 10),
      note: "",
      status: 1,
      totalDiscount: 0,
    }),
    products: "",
    taxes: "",
    prefix: "",
    poPrefix: "",
    isAutoAssigningSupplier: false,
    isAutoAssigningProduct: null,
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
    
    // Calculate total unit price (sum of all unit prices)
    totalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        return total + (item.unitPrice * item.qty);
      }, 0);
    },
  },
  async created() {
    this.prefix = this.appInfo.productPrefix;
    this.poPrefix = this.appInfo.poPrefix;
    
    // Set localized breadcrumbs
    this.breadcrumbsCurrent = this.$t("Edit Purchase Order");
    this.breadcrumbs[0].name = this.$t("Dashboard");
    this.breadcrumbs[1].name = this.$t("Purchase Orders");
    this.breadcrumbs[2].name = this.$t("Edit");
    
    // Align data fetching steps with purchases/edit.vue
    await this.getPurchaseOrder();
    this.getSuppliers();
    this.getProducts();
    this.getTaxes();
  },
  mounted() {
    // Load temporary data after component is mounted
    this.$nextTick(() => {
      this.loadTemporaryData()
    })
  },
  methods: {
    // get purchase order
    async getPurchaseOrder() {
      const { data } = await axios.get(
        window.location.origin + "/api/purchase-order/" + this.$route.params.slug
      );
      this.form.poNumber = this.$options.filters.withPrefix(
        data.data.poNumber,
        this.poPrefix
      );
      this.form.supplier = data.data.supplier;
      this.form.poReference = data.data.poReference;
      this.form.transportCost = data.data.transport;
      this.form.totalTax = data.data.tax;
      this.form.orderTax = data.data.taxType || null;
      this.form.discount = data.data.totalDiscount;
      this.form.paymentTerms = data.data.paymentTerms;
      this.form.poDate = data.data.poDate;
      this.form.purchaseDate = data.data.purchaseDate;
      this.form.status = data.data.status;
      this.form.note = data.data.note;
      this.form.selectedProducts = this.assignProducts(data.data.products);
    },

    // get all local suppliers
    async getSuppliers() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-suppliers',
      });
    },

    // get products
    async getProducts() {
      // Match purchases/edit.vue behavior: fetch, sort, then refresh selected items
      const currentProductIds = this.form.selectedProducts ? this.form.selectedProducts.map(p => p.id) : [];
      const { data } = await axios.get(
        window.location.origin + '/api/all-products-not-service'
      );
      this.products = data.data;
      // sort by numeric code if possible
      this.products.sort((a, b) => {
        const na = Number(a.code);
        const nb = Number(b.code);
        if (na < nb) return -1;
        if (na > nb) return 1;
        return 0;
      });
      // ensure label exists for v-select
      this.products = this.products.map(p => ({ ...p, label: `${p.name} (${p.code})` }));

      if (currentProductIds.length > 0 && this.form.selectedProducts) {
        this.form.selectedProducts.forEach(selectedProduct => {
          const freshProduct = this.products.find(p => p.id === selectedProduct.id);
          if (freshProduct) {
            Object.assign(selectedProduct, freshProduct);
          }
        });
      }
    },

    // get taxes
    async getTaxes() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-vat-rates'
      );
      this.taxes = data.data;
    },

    // store item in array
    storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(
        (x) => x.id == product.id
      );
      let qunatity = 1;
      if (index === -1) {
        let purchasePrice =
          product.avgPurchasePrice > 0 ? product.avgPurchasePrice : 1;
        let productTax =
          product.taxType == 'Exclusive'
            ? purchasePrice * (product.taxRate / 100)
            : purchasePrice - purchasePrice / (1 + product.taxRate / 100);
        let totalTax = productTax * qunatity;
        // store product
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          qty: qunatity,
          taxType: product.taxType,
          taxRate: product.taxRate,
          productTax: productTax,
          totalTax: productTax * qunatity,
          unitPrice: purchasePrice,
          unitCost:
            product.taxType == 'Exclusive'
              ? purchasePrice + totalTax
              : purchasePrice,
          totalPrice:
            product.taxType == 'Exclusive'
              ? 1 * (purchasePrice + totalTax)
              : 1 * purchasePrice,
          minQty: 1,
          discount: 0,
          discountType: "fixed",
          discountAmount: 0,
          selectedVatRate: null,
          // Include chart of account IDs for validation
          sales_account_id: product.sales_account_id,
          purchase_account_id: product.purchase_account_id,
        });
      } else {
        // Product already exists, update it with fresh data while preserving user input
        let existingProduct = this.form.selectedProducts[index];
        let updatedProduct = {
          ...existingProduct,
          // Update chart of account IDs with fresh data
          sales_account_id: product.sales_account_id,
          purchase_account_id: product.purchase_account_id,
        };
        this.form.selectedProducts[index] = updatedProduct;
      }
      this.generateItemTotal(qunatity, 'qty', index, '');
      this.updateTax();
      return;
    },

    // update array
    generateItemTotal(value, type, index, action) {
      let item = this.form.selectedProducts[index];
      if (item) {
        if (type == 'qty') {
          item.qty = value;
          if (action == 'increment') {
            item.qty = Number(item.qty) + 1;
          } else if (action == 'decrement') {
            if (item.qty > 0) {
              item.qty = Number(item.qty) - 1;
            }
          }
        } else {
          this.form.selectedProducts[index].unitPrice = value;
          item.unitPrice = value;
          if (action == 'increment') {
            item.unitPrice = Number(item.unitPrice) + 1;
          } else if (action == 'decrement') {
            if (item.qty > 0) {
              item.unitPrice = Number(item.unitPrice) - 1;
            }
          }
        }
        item.productTax =
          item.taxType == 'Exclusive'
            ? item.unitPrice * (item.taxRate / 100)
            : item.unitPrice - item.unitPrice / (1 + item.taxRate / 100);
        item.totalTax = item.productTax * item.qty;
        item.totalPrice =
          item.taxType == 'Exclusive'
            ? item.qty * item.unitPrice + item.totalTax
            : item.qty * item.unitPrice;
        item.unitCost =
          item.taxType == 'Exclusive'
            ? Number(item.unitPrice) + Number(item.productTax)
            : item.unitPrice;
        this.form.selectedProducts[index] = item;
      }
      this.updateTax();
      return;
    },

    // remove item from array
    removeItem(item) {
      let index = this.form.selectedProducts.indexOf(item);
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1);
      }
      this.updateTax();
      return;
    },
    
    // calculate product discount
    calculateProductDiscount(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        if (item.discountType === "percentage") {
          item.discountAmount = Number(((item.unitPrice * item.qty * item.discount) / 100).toFixed(2));
        } else {
          item.discountAmount = Number(item.discount || 0);
        }
        
        // Recalculate totals
        this.generateItemTotal(index, "qty", index, "");
        this.calculateSum();
      }
    },

    // calculate product VAT
    calculateProductVat(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        // Ensure the selectedVatRate is properly set
        if (!item.selectedVatRate) {
          // First try to use the product's default VAT rate, then fall back to available taxes
          if (item.productTax) {
            item.selectedVatRate = this.findMatchingVatRate(item.productTax);
          }
          
          // If no match found or no productTax, fall back to available taxes
          if (!item.selectedVatRate && this.taxes && this.taxes.length > 0) {
            item.selectedVatRate = this.taxes[0];
          }
        }
        
        // Recalculate totals with new VAT rate
        this.generateItemTotal(index, "qty", index, "");
        this.calculateSum();
      }
    },

    // Helper method to find matching VAT rate
    findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;
      return this.taxes.find(tax => tax.rate === productTax);
    },
    
    // update tax
    updateTax() {
      this.form.totalTax = 0;
      if (
        this.form.orderTax &&
        this.form.orderTax.rate > 0 &&
        this.form.netTotal > 0
      ) {
        this.form.totalTax = Number(
          (
            (this.form.orderTax.rate / 100) *
            this.form.subTotal
          ).toFixed(2)
        );
      }
      this.calculateSum();
      return;
    },

    // calculate sum
    calculateSum() {
      let length = this.form.selectedProducts.length;
      this.form.subTotal =
        this.form.totalProductTax =
        this.form.totalDiscount =
        0;
      for (let i = 0; i < length; i++) {
        let looProduct = this.form.selectedProducts[i];
        this.form.subTotal += Number(looProduct.totalPrice.toFixed(2));
        this.form.totalProductTax += Number(looProduct.totalTax.toFixed(2));
        this.form.totalDiscount += Number((looProduct.discountAmount || 0).toFixed(2));
      }
      if (this.form.subTotal > 0) {
        this.form.netTotal =
          this.form.subTotal +
          Number(this.form.totalTax) +
          Number(this.form.transportCost) -
          Number(this.form.discount);
        this.form.rowSubTotal = this.form.subTotal;
      }
      return;
    },

    // get purchase order products
    assignProducts(purchaseOrderProducts) {
      // Clear existing products first
      this.form.selectedProducts = [];
      
      for (var key in purchaseOrderProducts) {
        let purchaseOrderProduct = purchaseOrderProducts[key];
        let minQty = 1;
        
        // Get tax information from the product's tax relationship
        let taxRate = 0;
        let taxType = 'Exclusive';
        if (purchaseOrderProduct.product.tax && purchaseOrderProduct.product.tax.rate) {
          taxRate = purchaseOrderProduct.product.tax.rate;
        }
        if (purchaseOrderProduct.product.tax_type) {
          taxType = purchaseOrderProduct.product.tax_type;
        }
        
        // Calculate product tax based on the stored tax amount or calculate it
        let productTax = purchaseOrderProduct.tax_amount || 0;
        if (productTax === 0 && taxRate > 0) {
          // Calculate tax if not stored
          if (taxType === 'Exclusive') {
            productTax = purchaseOrderProduct.purchase_price * (taxRate / 100);
          } else {
            productTax = purchaseOrderProduct.purchase_price - (purchaseOrderProduct.purchase_price / (1 + taxRate / 100));
          }
        }
        
        // Find matching VAT rate from available taxes
        let selectedVatRate = null;
        if (this.taxes && this.taxes.length > 0 && taxRate > 0) {
          selectedVatRate = this.taxes.find(tax => tax.rate === taxRate);
        }
        
        // Map the product data correctly from the API response
        this.form.selectedProducts.unshift({
          id: purchaseOrderProduct.product.id,
          slug: purchaseOrderProduct.product.slug,
          name: purchaseOrderProduct.product.name,
          code: purchaseOrderProduct.product.code,
          qty: purchaseOrderProduct.quantity,
          taxType: taxType,
          taxRate: taxRate,
          productTax: productTax,
          totalTax: productTax * purchaseOrderProduct.quantity,
          unitCost: purchaseOrderProduct.unit_cost || purchaseOrderProduct.purchase_price,
          totalPrice: (purchaseOrderProduct.unit_cost || purchaseOrderProduct.purchase_price) * purchaseOrderProduct.quantity,
          unitPrice: purchaseOrderProduct.purchase_price,
          minQty: minQty,
          discount: purchaseOrderProduct.discount || 0,
          discountType: purchaseOrderProduct.discount_type || "fixed",
          discountAmount: purchaseOrderProduct.discount_amount || 0,
          selectedVatRate: selectedVatRate,
          // Include chart of account IDs for validation
          sales_account_id: purchaseOrderProduct.product.sales_account_id,
          purchase_account_id: purchaseOrderProduct.product.purchase_account_id,
        });
      }
      this.calculateSum();
      this.updateTax();
      return this.form.selectedProducts;
    },

    // Handle chart of account assignment
    async handleChartOfAccountAssigned(data) {
      if (data.entity === 'supplier') {
        // Refresh supplier data
        await this.getSuppliers();
        
        // If we have a selected supplier, update it with the new data
        if (this.form.supplier && this.items && this.items.length > 0) {
          const updatedSupplier = this.items.find(s => s.id === this.form.supplier.id);
          if (updatedSupplier) {
            this.form.supplier = updatedSupplier;
          }
        }
      } else if (data.entity === 'product') {
        // Refresh product data
        await this.getProducts();
        
        // Update selected products with new chart of account data
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.form.selectedProducts.forEach(selectedProduct => {
            const updatedProduct = this.products.find(p => p.id === selectedProduct.id);
            if (updatedProduct) {
              // Update the chart of account fields
              selectedProduct.sales_account_id = updatedProduct.sales_account_id;
              selectedProduct.purchase_account_id = updatedProduct.purchase_account_id;
            }
          });
        }
      }
      
      // Force re-render of the validation component
      this.$nextTick(() => {
        this.$forceUpdate();
      });
    },

    // Auto-assign Chart of Account for supplier
    async autoAssignSupplierChartOfAccount() {
      if (!this.form.supplier || this.isAutoAssigningSupplier) {
        return;
      }
      
      this.isAutoAssigningSupplier = true;
      
      try {
        const response = await axios.post(`/api/suppliers/${this.form.supplier.slug}/auto-assign-chart-of-account`);
        
        if (response.data.success) {
          // Update the supplier data with new chart of account
          this.form.supplier.chart_of_account_id = response.data.chart_of_account_id;
          
          // Force Vue to re-render the component to update the UI
          this.$nextTick(() => {
            this.$forceUpdate();
          });
          
          // Show success message
          toast.fire({
            type: "success",
            title: this.$t("Chart of Account assigned successfully"),
          });
          
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Failed to assign Chart of Account"),
            text: response.data.message || this.$t("Please try again or assign manually")
          });
        }
        
      } catch (error) {
        console.error('Error auto-assigning chart of account:', error);
        toast.fire({
          type: "error",
          title: this.$t("An error occurred while assigning Chart of Account"),
        });
      } finally {
        this.isAutoAssigningSupplier = false;
      }
    },

    // Auto-assign Chart of Account for a specific product
    async autoAssignProductChartOfAccount(product) {
      if (!product || this.isAutoAssigningProduct === product.id) {
        return;
      }
      
      this.isAutoAssigningProduct = product.id;
      
      try {
        const response = await axios.post(`/api/products/${product.slug}/auto-assign-chart-of-account`);
        
        if (response.data.success) {
          // Update the product data with new chart of account
          product.purchase_account_id = response.data.purchase_account_id;
          
          // Force Vue to re-render the component to update the UI
          this.$nextTick(() => {
            this.$forceUpdate();
          });
          
          // Show success message
          toast.fire({
            type: "success",
            title: this.$t("Chart of Account assigned successfully"),
          });
          
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Failed to assign Chart of Account"),
            text: response.data.message || this.$t("Please try again or assign manually")
          });
        }
        
      } catch (error) {
        console.error('Error auto-assigning chart of account:', error);
        toast.fire({
          type: "error",
          title: this.$t("An error occurred while assigning Chart of Account"),
        });
      } finally {
        this.isAutoAssigningProduct = false;
      }
    },

    // Handle supplier change
    onSupplierChange() {
      // Clear any previous errors
      this.form.errors.clear('supplier');
      
      // If a supplier is selected, ensure we have the latest data including Chart of Account
      if (this.form.supplier && this.form.supplier.id) {
        // Find the supplier in the items list to get the most up-to-date data
        const updatedSupplier = this.items.find(s => s.id === this.form.supplier.id);
        if (updatedSupplier) {
          // Update the form supplier with all the latest data
          this.form.supplier = { ...updatedSupplier };
        }
      }
    },

    // update purchase order
    async updatePurchaseOrder() {
      await this.form
        .patch(
          window.location.origin + '/api/purchase-order/' + this.$route.params.slug
        )
        .then(({ data }) => {
          // Clear temporary data after successful save
          this.clearTemporaryData()
          toast.fire({
            type: 'success',
            title: this.$t('Purchase order updated successfully'),
          });
          this.$router.push({ name: 'purchase-order.show', params: { slug: data.data.slug }, });
        })
        .catch(() => {
          toast.fire({
            type: 'error',
            title: this.$t('Please check your input and try again.'),
          });
        });
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        supplier: this.form.supplier,
        selectedProducts: this.form.selectedProducts,
        subTotal: this.form.subTotal,
        netTotal: this.form.netTotal,
        discount: this.form.discount,
        transportCost: this.form.transportCost,
        totalProductTax: this.form.totalProductTax,
        orderTax: this.form.orderTax,
        totalTax: this.form.totalTax,
        poReference: this.form.poReference,
        paymentTerms: this.form.paymentTerms,
        poDate: this.form.poDate,
        purchaseDate: this.form.purchaseDate,
        note: this.form.note,
        status: this.form.status,
        isSendEmail: this.form.isSendEmail,
        isSendSMS: this.form.isSendSMS,
        totalDiscount: this.form.totalDiscount,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('purchaseOrderEditTempData', JSON.stringify(tempData))
      
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('purchaseOrderEditTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.supplier = data.supplier || this.form.supplier
          this.form.selectedProducts = data.selectedProducts || this.form.selectedProducts
          this.form.subTotal = data.subTotal || this.form.subTotal
          this.form.netTotal = data.netTotal || this.form.netTotal
          this.form.discount = data.discount || this.form.discount
          this.form.transportCost = data.transportCost || this.form.transportCost
          this.form.totalProductTax = data.totalProductTax || this.form.totalProductTax
          this.form.orderTax = data.orderTax || this.form.orderTax
          this.form.totalTax = data.totalTax || this.form.totalTax
          this.form.poReference = data.poReference || this.form.poReference
          this.form.paymentTerms = data.paymentTerms || this.form.paymentTerms
          this.form.poDate = data.poDate || this.form.poDate
          this.form.purchaseDate = data.purchaseDate || this.form.purchaseDate
          this.form.note = data.note || this.form.note
          this.form.status = data.status !== undefined ? data.status : this.form.status
          this.form.isSendEmail = data.isSendEmail || this.form.isSendEmail
          this.form.isSendSMS = data.isSendSMS || this.form.isSendSMS
          this.form.totalDiscount = data.totalDiscount || this.form.totalDiscount
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('purchaseOrderEditTempData')
    },
  },
};
</script>

<style scoped>
/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}

/* Header buttons styling */
.header-buttons {
  margin-bottom: 15px;
}

/* Footer buttons styling */
.footer-buttons {
  gap: 10px;
  display: flex;
}

.footer-buttons .btn {
  margin-right: 10px;
}

.footer-buttons .btn:last-child {
  margin-right: 0;
}



.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Search Input Background Override */
.form-control{
  background: #fff !important;
}

.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
}

.btn-secondary:hover {
  background: #2a8bc4 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.3);
}

.create-btn {
  padding: 11px;
}

/* Supplier status styles */
.supplier-status {
  font-size: 13px;
}

.supplier-warning,
.supplier-success {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
}

.supplier-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.supplier-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

/* Product status styles */
.product-status {
  font-size: 13px;
}

.product-warning,
.product-success {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
}

.product-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.product-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.btn-outline-warning {
  border-color: #ffc107;
  color: #856404;
  font-size: 12px;
  padding: 4px 8px;
}

.btn-outline-warning:hover {
  background-color: #ffc107;
  border-color: #ffc107;
  color: #212529;
}

.btn-outline-warning:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
