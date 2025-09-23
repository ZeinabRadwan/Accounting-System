<template>
  <div class="mb-50">
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
                <button type="button" class="btn btn-success" @click="saveTemporary" title="Save Temporarily">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <!-- form start -->
            <form role="form" @submit.prevent="savePurchaseOrder" @keydown="form.onKeydown($event)">
              <div class="row" v-if="items && products">
                <div class="form-group col-md-12 col-xl-3">
                  <label for="supplier">{{ $t("Supplier") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select class="flex-grow-1" v-model="form.supplier" :options="items" label="name"
                          :class="{ 'is-invalid': form.errors.has('supplier') }" name="supplier"
                          :placeholder="$t('Select a supplier')" @input="onSupplierChange" />
                        <SupplierCreateModal @reloadSuppliers="getSuppliers">
                          <div class="input-group-text create-btn">
                            <i class="fas fa-solid fa-plus-circle"></i>
                          </div>
                        </SupplierCreateModal>
                      </div>
                      
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
                        <div v-else class="supplier-success">
                          <i class="fas fa-check-circle text-success"></i>
                          <span class="ml-2">{{ $t('Supplier Chart of Account ready') }}</span>
                        </div>
                      </div>
                      
                      <has-error :form="form" field="supplier" />
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-12 col-xl-6">
                  <label for="product">{{ $t("Select Products") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select v-model="form.product" :options="products" label="label" class="flex-grow-1" :class="{
                          'is-invalid': form.errors.has('selectedProducts'),
                        }" name="product" :placeholder="$t('Search products')"
                          @input="storeProduct(form.product)" />
                        <ProductCreateModal @reloadProducts="getProducts">
                          <div class="input-group-text create-btn">
                            <i class="fas fa-solid fa-plus-circle"></i>
                          </div>
                        </ProductCreateModal>
                      </div>
                      
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
                        <div v-else class="product-success">
                          <i class="fas fa-check-circle text-success"></i>
                          <span class="ml-2">{{ $t('Product') }} "{{ form.selectedProducts[0].name }}" {{ $t('Purchase Account ready') }}</span>
                        </div>
                      </div>
                      
                      <has-error :form="form" field="selectedProducts" />
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row mt-3 mb-4">
                <div class="table-responsive table-custom w-100 m-auto">
                  <table class="table table-hover table-sm text-center">
                      <thead>
                        <tr>
                        <th>{{ $t("#") }}</th>
                        <th>{{ $t("Code") }}</th>
                        <th>{{ $t("Name") }}</th>
                          <th>{{ $t("Quantity") }}</th>
                        <th>{{ $t("Purchase Price") }}</th>
                          <th>{{ $t("Total") }}</th>
                        <th>{{ $t("Discount") }}</th>
                        <th>{{ $t("Total After Discount") }}</th>
                        <th>{{ $t("VAT Type") }}</th>
                        <th>{{ $t("VAT") }}</th>
                        <th>{{ $t("Total with VAT") }}</th>
                        <th class="text-right">{{ $t("Action") }}</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr v-for="(item, i) in form.selectedProducts" :key="i">
                        <td>{{ ++i }}</td>
                        <td>{{ item.code | withPrefix(prefix) }}</td>
                        <td>
                          <router-link v-if="$can('product-view')" :to="{
                            name: 'products.show',
                            params: { slug: item.slug },
                          }">
                            {{ item.name }}
                          </router-link>
                          <span v-else>{{ item.name }}</span>
                        </td>
                        <td>
                          <div class="input-group custom-qty-input">
                            <input type="button" value="-" class="button-minus icon-shape icon-sm btn-danger"
                              data-field="quantity" @click="
                                generateItemTotal(
                                  item.qty,
                                  'qty',
                                  i - 1,
                                  'decrement'
                                )
                                " />

                            <input type="number" step="any" :id="`purchaseQty-${i}`" :value="item.qty" name="quantity"
                              class="quantity-field border-0 incrementor" required min="1" 
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${i-1}.qty`) }"
                              @change="
                                generateItemTotal(
                                  $event.target.value,
                                  'qty',
                                  i - 1,
                                  ''
                                )
                                " @keyup="generateItemTotal($event.target.value, 'qty', i - 1, '')" />

                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                              data-field="quantity" @click="
                                generateItemTotal(
                                  item.qty,
                                  'qty',
                                  i - 1,
                                  'increment'
                                )
                                " />
                          </div>
                          <div v-if="form.errors.has(`selectedProducts.${i-1}.qty`)" class="invalid-feedback d-block">
                            {{ form.errors.get(`selectedProducts.${i-1}.qty`) }}
                          </div>
                          </td>
                          <td>
                          <div class="input-group custom-qty-input">
                            <input type="button" value="-" class="button-minus icon-shape icon-sm btn-danger"
                              data-field="unitPrice" @click="
                                generateItemTotal(
                                  item.originalPrice || item.unitPrice,
                                  'price',
                                  i - 1,
                                  'decrement'
                                )
                                " />

                            <input type="number" step="any" :id="`unitPrice-${i}`" :value="item.originalPrice || item.unitPrice"
                              name="unitPrice" class="quantity-field border-0 incrementor" required min="0" 
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${i-1}.unitPrice`) }"
                              @change="
                                generateItemTotal(
                                  $event.target.value,
                                  'price',
                                  i - 1,
                                  ''
                                )
                                " @keyup="generateItemTotal($event.target.value, 'price', i - 1, '')" />
                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                              data-field="unitPrice" @click="
                                generateItemTotal(
                                  item.originalPrice || item.unitPrice,
                                  'price',
                                  i - 1,
                                  'increment'
                                )
                                " />
                          </div>
                          <div v-if="form.errors.has(`selectedProducts.${i-1}.unitPrice`)" class="invalid-feedback d-block">
                            {{ form.errors.get(`selectedProducts.${i-1}.unitPrice`) }}
                          </div>
                        </td>
                        <td>{{ ((item.originalPrice || item.unitPrice) * item.qty) | withCurrency }}</td>
                        <td>
                          <div class="input-group">
                            <select 
                              v-model="item.discountType" 
                              class="form-control form-control-sm" 
                              style="width: 60px;"
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${i-1}.discountType`) }"
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
                              :max="item.discountType == 'percentage' ? 100 : ((item.originalPrice || item.unitPrice) * item.qty)"
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${i-1}.discount`) }"
                              placeholder="0"
                              @change="calculateProductDiscount(i - 1)"
                              @keyup="calculateProductDiscount(i - 1)" />
                          </div>
                          <div v-if="form.errors.has(`selectedProducts.${i-1}.discount`) || form.errors.has(`selectedProducts.${i-1}.discountType`)" class="invalid-feedback d-block">
                            <span v-if="form.errors.has(`selectedProducts.${i-1}.discount`)" class="d-block">{{ form.errors.get(`selectedProducts.${i-1}.discount`) }}</span>
                            <span v-if="form.errors.has(`selectedProducts.${i-1}.discountType`)" class="d-block">{{ form.errors.get(`selectedProducts.${i-1}.discountType`) }}</span>
                          </div>
                        </td>
                        <td>{{ getTotalAfterDiscount(item) | withCurrency }}</td>
                        <td>
                          <select 
                            v-model="item.selectedVatRate" 
                            class="form-control form-control-sm"
                            :class="{ 'is-invalid': form.errors.has(`selectedProducts.${i-1}.selectedVatRate`) }"
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
                          <div v-if="form.errors.has(`selectedProducts.${i-1}.selectedVatRate`)" class="invalid-feedback d-block">
                            {{ form.errors.get(`selectedProducts.${i-1}.selectedVatRate`) }}
                          </div>
                          </td>
                        <td>
                          <span class="form-control-plaintext form-control-sm text-center">
                            {{ item.productTax | withCurrency }}
                          </span>
                        </td>
                        <td>{{ getTotalWithVAT(item) | withCurrency }}</td>
                        <td class="text-right">
                          <button type="button" class="btn btn-danger" @click="removeItem(item)">
                            <i class="fas fa-times"></i>
                            </button>
                          </td>
                        </tr>
                      <!-- Totals Row -->
                      <tr>
                        <td colspan="5" class="text-right">
                          <strong> {{ $t("Total") }} : {{ toWord() }} </strong>
                        </td>
                        <td>
                          <strong>{{ totalUnitPrice | withCurrency }}</strong>
                        </td>
                        <td>
                          <strong>{{ getTotalDiscountSum() | withCurrency }}</strong>
                        </td>
                        <td>
                          <strong>{{ getSubTotalAfterDiscount() | withCurrency }}</strong>
                        </td>
                        <td>
                          <strong></strong>
                        </td>
                        <td>
                          <strong>{{ getTotalVATSum() | withCurrency }}</strong>
                        </td>
                        <td>
                          <strong>{{ getTotalWithVATSum() | withCurrency }}</strong>
                        </td>
                        <td></td>
                      </tr>
                      </tbody>
                    </table>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6 col-xl-3">
                  <label for="poReference">{{
                    $t("PO Reference")
                  }}</label>
                  <input id="poReference" v-model="form.poReference" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('poReference') }" name="poReference" :placeholder="$t('Enter PO reference')
                      " />
                  <has-error :form="form" field="poReference" />
                </div>
                <div class="form-group col-md-6 col-xl-3">
                  <label for="paymentTerms">{{
                    $t("Payment Terms")
                  }}</label>
                  <input id="paymentTerms" v-model="form.paymentTerms" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paymentTerms') }" name="paymentTerms" :placeholder="$t('Enter payment terms')
                      " />
                  <has-error :form="form" field="paymentTerms" />
                </div>
                <div v-if="taxes && !isSaudiArabia" class="form-group col-md-6 col-xl-3">
                  <label for="orderTax">{{ $t("Purchase Tax") }}
                    <span class="required">*</span></label>
                  <!-- Debug: isSaudiArabia = {{ isSaudiArabia }}, taxes = {{ taxes ? 'exists' : 'null' }} -->
                  <v-select v-model="form.orderTax" :options="taxes" label="code"
                    :class="{ 'is-invalid': form.errors.has('orderTax') }" name="orderTax" :placeholder="$t('Select a tax type')
                      " @input="updateTax" />
                  <has-error :form="form" field="orderTax" />
                </div>
                <div v-if="taxes && !isSaudiArabia" class="form-group col-md-6 col-xl-3">
                  <label for="totalTax">{{
                    $t("Total Tax")
                  }}</label>
                  <input id="totalTax" v-model="form.totalTax" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalTax') }" name="totalTax" readonly />
                  <has-error :form="form" field="totalTax" />
                </div>
              </div>
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row">
                <div class="form-group col-md-6 col-xl-3" v-if="!isSaudiArabia">
                  <label for="discount">{{
                    $t("Discount")
                  }}</label>
                  <!-- Debug: isSaudiArabia = {{ isSaudiArabia }} -->
                  <input id="discount" v-model="form.discount" type="number" step="any" min="1" :max="form.subTotal"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                    :placeholder="$t('Enter discount')
                      " @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="discount" />
                </div>
                <div class="form-group col-md-6 col-xl-3">
                  <label for="transportCost">{{
                    $t("Transport Cost")
                  }}</label>
                  <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="0"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('transportCost') }" name="transportCost"
                    :placeholder="$t('Enter transport cost')
                        " @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="transportCost" />
                </div>
                <div class="form-group col-md-6 col-xl-3">
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
                  <label for="purchaseDate">{{
                    $t("Purchase Date")
                  }}</label>
                  <input id="purchaseDate" v-model="form.purchaseDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('purchaseDate') }" name="purchaseDate" />
                  <has-error :form="form" field="purchaseDate" />
                </div>
                <div class="form-group col-md-4">
                  <label for="poDate">{{
                    $t("PO Date")
                  }}</label>
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
              <div class="form-group col-12 d-flex flex-wrap">
                <div class="pr-5">
                  <toggle-button v-model="form.isSendEmail" :disabled="isDemoMode"/>
                  {{ $t("Send To Email") }}
                </div>
              </div>
              <div class="form-group col-12 d-flex flex-wrap">
                <div class="pr-5">
                  <toggle-button v-model="form.isSendSMS" :disabled="isDemoMode"/>
                  {{ $t("Send To SMS") }}
                </div>
              </div>
            </form>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons">
                  <button type="submit" :disabled="form.busy" class="btn btn-success" @click="savePurchaseOrder">
                    <i :class="form.busy ? 'fas fa-spinner fa-spin' : 'fas fa-save'" /> 
                    {{ form.busy ? $t("Saving...") : $t("Save") }}
                  </button>
                  <button type="reset" class="btn btn-secondary" @click="form.reset()">
                    <i class="fas fa-power-off" /> {{ $t("Reset") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
import axios from "axios";
import { mapGetters } from "vuex";
import { ToggleButton } from "vue-js-toggle-button";
import ProductCreateModal from '~/components/ProductCreateModal'
import SupplierCreateModal from '~/components/SupplierCreateModal'

import { ToWords } from 'to-words';

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Purchase Order") };
  },
  components: {
    ToggleButton,
    ProductCreateModal,
    SupplierCreateModal
  },
  data: () => ({
    isDemoMode: window.config.isDemoMode,
    breadcrumbsCurrent: "Create Purchase Order",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Purchase Orders",
        url: "purchase-order.index",
      },
      {
        name: "Create",
        url: "",
      },
    ],
    isAutoAssigningSupplier: false,
    isAutoAssigningProduct: null,
    form: new Form({
      supplier: "",
      selectedProducts: [],
      subTotal: 0,
      netTotal: 0,
      discount: "",
      transportCost: "",
      totalProductTax: 0,
      orderTax: "",
      totalTax: 0,
      poReference: "",
      paymentTerms: "",
      poDate: new Date().toISOString().slice(0, 10),
      purchaseDate: new Date().toISOString().slice(0, 10),
      note: "",
      status: 1,
      isSendEmail: false,
      isSendSMS: false,
      totalDiscount: 0,
    }),
    products: "",
    taxes: "",
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
    
    // Calculate total unit price (sum of all unit prices)
    totalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        return total + ((item.originalPrice || item.unitPrice) * item.qty);
      }, 0);
    },
    // Check if the country is Saudi Arabia
    isSaudiArabia() {
      console.log('=== isSaudiArabia Debug ===');
      console.log('appInfo:', this.appInfo);
      console.log('appInfo.country:', this.appInfo ? this.appInfo.country : 'appInfo is null/undefined');
      console.log('Country comparison result:', this.appInfo && this.appInfo.country === 'SA');
      console.log('========================');
      return this.appInfo && this.appInfo.country === 'SA'
    },
  },
  watch: {
    appInfo: {
      handler(newVal, oldVal) {
        console.log('=== appInfo Watcher ===');
        console.log('New appInfo:', newVal);
        console.log('Old appInfo:', oldVal);
        console.log('Country in new appInfo:', newVal ? newVal.country : 'newVal is null/undefined');
        console.log('======================');
      },
      immediate: true,
      deep: true
    },
    isSaudiArabia: {
      handler(newVal, oldVal) {
        console.log('=== isSaudiArabia Watcher ===');
        console.log('New isSaudiArabia:', newVal);
        console.log('Old isSaudiArabia:', oldVal);
        // Clear orderTax when fields are hidden (when isSaudiArabia is true)
        if (newVal === true) {
          console.log('Clearing orderTax because fields are hidden');
          this.form.orderTax = null;
          this.form.totalTax = 0;
        }
        console.log('============================');
      },
      immediate: true
    },
    // Watch for changes in selectedProducts to update Net Total
    'form.selectedProducts': {
      handler() {
        this.updateNetTotal();
      },
      deep: true
    },
    // Watch for changes in transport cost to update Net Total
    'form.transportCost': {
      handler() {
        this.updateNetTotal();
      }
    }
  },
  created() {
    console.log('=== Component Created ===');
    console.log('appInfo at creation:', this.appInfo);
    this.getSuppliers();
    this.getProducts();
    this.getTaxes();
    this.prefix = this.appInfo.productPrefix;
  },
  mounted() {
    this.loadTemporaryData()
  },
  methods: {
    // get all local suppliers
    async getSuppliers() {
      // Store the current supplier ID if one is selected
      const currentSupplierId = this.form.supplier ? this.form.supplier.id : null;
      
      await this.$store.dispatch("operations/allData", {
        path: "/api/all-suppliers",
      });
      
      // If we had a supplier selected, find and restore it
      if (currentSupplierId && this.items && this.items.length > 0) {
        const currentSupplier = this.items.find(s => s.id === currentSupplierId);
        if (currentSupplier) {
          this.form.supplier = currentSupplier;
        } else {
          // Fallback to first supplier if current one not found
          this.form.supplier = this.items[0];
        }
      } else {
        // No supplier was selected, use first one
        this.form.supplier = this.items[0];
      }
    },
    // get products
    async getProducts() {
      // Store the current selected products IDs
      const currentProductIds = this.form.selectedProducts ? this.form.selectedProducts.map(p => p.id) : [];
      
      const { data } = await axios.get(
        window.location.origin + "/api/all-products-not-service"
      );
      this.products = data.data;
      this.products.sort(this.sortProducts);
      
      // Update selected products with fresh data if they exist
      if (currentProductIds.length > 0 && this.form.selectedProducts) {
        this.form.selectedProducts.forEach(selectedProduct => {
          const freshProduct = this.products.find(p => p.id === selectedProduct.id);
          if (freshProduct) {
            // Update the product with fresh data while preserving user input
            Object.assign(selectedProduct, freshProduct);
          }
        });
      }
    },
    // sort products
    sortProducts(a, b) {
      if (Number(a.code) < Number(b.code)) {
        return -1;
      }
      if (Number(a.code) > Number(b.code)) {
        return 1;
      }
      return 0;
    },
    // get taxes
    async getTaxes() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-vat-rates"
      );
      this.taxes = data.data;
      // assign default vat rate
      if (this.taxes && this.taxes.length > 0) {
        let defaultVatRateSlug = this.appInfo.defaultVatRateSlug;
        this.form.orderTax = this.taxes.find(
          (tax) => tax.slug === defaultVatRateSlug
        );
      }
      this.updateTax();
    },
    // update tax
    updateTax() {
      this.form.totalTax = 0;
      if (
        this.form.orderTax &&
        this.form.orderTax.rate > 0 &&
        this.form.subTotal > 0
      ) {
        this.form.totalTax = Number(
          ((this.form.orderTax.rate / 100) * this.form.subTotal).toFixed(2)
        );
      }
      this.calculateSum();
      return;
    },
    // store item in array
    storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(
        (x) => x.id == product.id
      );
      let quantity = 1;
      if (index === -1) {
        let purchasePrice =
          product.avgPurchasePrice > 0 ? product.avgPurchasePrice : 1;
        // store product
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          qty: quantity,
          unitPrice: purchasePrice,
          originalPrice: purchasePrice, // Store original price to preserve it
          discount: 0,
          discountType: "fixed",
          discountAmount: 0,
          selectedVatRate: this.findMatchingVatRate(product.productTax) || (this.taxes && this.taxes.length > 0 ? this.taxes[0] : null),
          productTax: 0,
          totalTax: 0,
          unitCost: purchasePrice,
          totalPrice: purchasePrice * quantity,
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
      this.generateItemTotal(quantity, "qty", index, "");
      // Calculate VAT for the newly added product if it has a default VAT rate
      if (index === -1 && this.taxes && this.taxes.length > 0) {
        this.calculateProductVat(0); // 0 because we used unshift, so new product is at index 0
      }
      this.updateTax();
      return;
    },
    // update array
    generateItemTotal(value, type, index, action) {
      let item = this.form.selectedProducts[index];
      if (item) {
        if (type == "qty") {
          item.qty = value;
          if (action == "increment") {
            item.qty = Number(item.qty) + 1;
          } else if (action == "decrement") {
            if (item.qty > 0) {
              item.qty = Number(item.qty) - 1;
            }
          }
        } else {
          item.unitPrice = value;
          if (action == "increment") {
            item.unitPrice = Number(item.unitPrice) + 1;
          } else if (action == "decrement") {
            if (item.unitPrice > 0) {
              item.unitPrice = Number(item.unitPrice) - 1;
            }
          }
          // Update original price when user manually changes unit price
          item.originalPrice = item.unitPrice;
        }
        
        // Use the new method to calculate totals
        this.generateItemTotalPrice(index);
        
        this.form.selectedProducts[index] = item;
      }
      this.updateTax();
      this.calculateSum();
      return;
    },
    
    // calculate product discount
    calculateProductDiscount(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        let total = (item.originalPrice || item.unitPrice) * item.qty;
        
        if (item.discountType === "percentage") {
          // For percentage: discount amount = total * discount / 100
          item.discountAmount = Number((total * (item.discount || 0) / 100).toFixed(2));
        } else {
          // For fixed: discount amount = discount value directly
          item.discountAmount = Number(item.discount || 0);
        }
        
        // Recalculate totals using the new method
        this.generateItemTotalPrice(index);
        this.calculateSum();
      }
    },

    // calculate product VAT
    calculateProductVat(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        // Recalculate totals using the new method
        this.generateItemTotalPrice(index);
        this.calculateSum();
      }
    },

    // generate item total price (following the pseudocode exactly)
    generateItemTotalPrice(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        // 1. Line Item: Total (Before Discount)
        let total = Number(((item.originalPrice || item.unitPrice) * item.qty).toFixed(2));
        
        // 2. Line Item: Total After Discount
        let totalAfterDiscount;
        if (item.discountType === "percentage") {
          totalAfterDiscount = Number((total - (total * (item.discount || 0) / 100)).toFixed(2));
        } else {
          totalAfterDiscount = Number((total - (item.discountAmount || 0)).toFixed(2));
        }
        
        // Get VAT rate
        let vatRate = 0;
        if (item.selectedVatRate && item.selectedVatRate.rate !== undefined && item.selectedVatRate.rate !== null) {
          vatRate = Number(item.selectedVatRate.rate);
        } else if (item.taxRate !== undefined && item.taxRate !== null) {
          vatRate = Number(item.taxRate);
        }
        
        // Ensure vatRate is a valid number
        if (isNaN(vatRate) || vatRate < 0) {
          vatRate = 0;
        }
        
        // 3. Line Item: VAT Amount (always calculated on TotalAfterDiscount)
        item.productTax = Number((totalAfterDiscount * vatRate / 100).toFixed(2));
        item.totalTax = Number((item.productTax * item.qty).toFixed(2));
        
        // 4. Line Item: Total With VAT
        item.totalPrice = Number((totalAfterDiscount + item.totalTax).toFixed(2));
        
        // Calculate unit cost (unit price + VAT per unit)
        item.unitCost = Number(((item.originalPrice || item.unitPrice) + item.productTax).toFixed(2));
        
        // Update the item in the array
        this.form.selectedProducts[index] = item;
      }
    },

    // Helper method to get total after discount for display
    getTotalAfterDiscount(item) {
      let total = (item.originalPrice || item.unitPrice) * item.qty;
      if (item.discountType === "percentage") {
        return total - (total * (item.discount || 0) / 100);
      } else {
        return total - (item.discountAmount || 0);
      }
    },

    // Helper method to get subtotal after discount for display
    getSubTotalAfterDiscount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (prev, cur) {
        let lineTotal = (cur.originalPrice || cur.unitPrice) * cur.qty;
        let lineTotalAfterDiscount;
        if (cur.discountType === "percentage") {
          lineTotalAfterDiscount = lineTotal - (lineTotal * (cur.discount || 0) / 100);
        } else {
          lineTotalAfterDiscount = lineTotal - (cur.discountAmount || 0);
        }
        return Number((prev + lineTotalAfterDiscount).toFixed(2));
      }, 0);
    },

    // Helper method to get total with VAT for display (VAT + Total After Discount)
    getTotalWithVAT(item) {
      let totalAfterDiscount = this.getTotalAfterDiscount(item);
      let vatAmount = item.productTax || 0;
      return Number((totalAfterDiscount + vatAmount).toFixed(2));
    },

    // Helper method to get grand total with VAT (Total VAT + Total After Discount)
    getGrandTotalWithVAT() {
      let totalAfterDiscount = this.getSubTotalAfterDiscount();
      let totalVAT = this.form.totalProductTax || 0;
      return Number((totalAfterDiscount + totalVAT).toFixed(2));
    },

    // Helper method to get sum of all individual "Total with VAT" values
    getTotalWithVATSum() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        return Number((total + this.getTotalWithVAT(item)).toFixed(2));
      }, 0);
    },

    // Helper method to get sum of all individual VAT amounts
    getTotalVATSum() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        return Number((total + (item.productTax || 0)).toFixed(2));
      }, 0);
    },

    // Helper method to get sum of all individual discount amounts
    getTotalDiscountSum() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        return Number((total + (item.discountAmount || 0)).toFixed(2));
      }, 0);
    },

    // Update Net Total when Total with VAT or Transport Cost changes
    updateNetTotal() {
      // Calculate Total with VAT (sum of all individual "Total with VAT" values)
      let totalWithVAT = this.getTotalWithVATSum();
      
      // Net Total = Total with VAT + Transport cost (if transport cost is empty, Net Total = Total with VAT)
      this.form.netTotal = Number((
        totalWithVAT + 
        Number(this.form.transportCost || 0)
      ).toFixed(2));
    },

    // Helper method to find matching VAT rate
    findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;
      
      // If productTax is an object (VAT rate object), use its rate property
      if (typeof productTax === 'object' && productTax.rate !== undefined) {
        return this.taxes.find(tax => tax.rate === productTax.rate);
      }
      
      // If productTax is a number (rate value), compare directly
      if (typeof productTax === 'number') {
        return this.taxes.find(tax => tax.rate === productTax);
      }
      
      return null;
    },

    // return number to word
    toWord(){
      const toWords = new ToWords();
      let words = toWords.convert(this.totalUnitPrice);
      return words + ' Only';
    },
    
    // remove item from array
    removeItem(item) {
      let index = this.form.selectedProducts.indexOf(item);
      if (index > -1) {
      this.form.selectedProducts.splice(index, 1);
      }
      this.updateTax();
      this.calculateSum();
      return;
    },
    
    // calculate sum (following the pseudocode exactly)
    calculateSum() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        this.form.totalDiscount = 0;
        this.form.subTotal = 0;
        this.form.totalProductTax = 0;
        this.form.netTotal = 0;
        return;
      }
      
      // 5. Discount Summary (All Lines)
      this.form.totalDiscount = this.form.selectedProducts.reduce(function (prev, cur) {
        return Number((prev + (cur.discountAmount || 0)).toFixed(2));
      }, 0);
      
      // 7. Subtotal After Discount (All Lines) - sum of all line totals after discount
      let subTotalAfterDiscount = this.form.selectedProducts.reduce(function (prev, cur) {
        let lineTotal = (cur.originalPrice || cur.unitPrice) * cur.qty;
        let lineTotalAfterDiscount;
        if (cur.discountType === "percentage") {
          lineTotalAfterDiscount = lineTotal - (lineTotal * (cur.discount || 0) / 100);
        } else {
          lineTotalAfterDiscount = lineTotal - (cur.discountAmount || 0);
        }
        return Number((prev + lineTotalAfterDiscount).toFixed(2));
      }, 0);
      
      // 8. Total VAT Summary (All Lines)
      this.form.totalProductTax = this.form.selectedProducts.reduce(function (prev, cur) {
        return Number((prev + (cur.totalTax || 0)).toFixed(2));
      }, 0);
      
      // 9. Net Total (Final Payable Amount) = Total with VAT + Transport cost
      this.form.subTotal = subTotalAfterDiscount; // This is the subtotal after discount
      
      // Update Net Total using the dedicated method
      this.updateNetTotal();
      
      return;
    },
    // save purchase order
    async savePurchaseOrder() {

      
      // Check if form is already busy
      if (this.form.busy) {

        return;
      }
      
      // Validate required fields - collect all errors first
      const validationErrors = [];
      
      // Check supplier
      if (!this.form.supplier) {
        validationErrors.push(this.$t("Please select a supplier"));
      }
      
      // Check products
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        validationErrors.push(this.$t("Please add at least one product"));
      }
      
      // Check product details
      if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
      this.form.selectedProducts.forEach((product, index) => {
        if (!product.qty || Number(product.qty) <= 0) {
            validationErrors.push(`${this.$t("Product")} ${index + 1}: ${this.$t("Invalid quantity")}`);
        }
        if (!product.unitPrice || Number(product.unitPrice) <= 0) {
            validationErrors.push(`${this.$t("Product")} ${index + 1}: ${this.$t("Invalid unit price")}`);
          }
        });
      }
      
      // Show all validation errors if any
      if (validationErrors.length > 0) {
        const errorList = validationErrors.map(error => `• ${error}`).join('\n');
        toast.fire({
          type: "error",
          title: `${this.$t("Validation Error")}:\n\n${errorList}`,
          timer: 8000,
          timerProgressBar: true
        });
        return;
      }
      
      try {
        // Clear any existing form errors to prevent individual error display
        this.form.errors.clear();
        
        // Prepare the form data manually to ensure proper structure
        const formData = {
          supplier: this.form.supplier,
          selectedProducts: this.form.selectedProducts.map(product => ({
            id: product.id,
            quantity: product.qty, // Convert qty to quantity for backend
            unitPrice: product.unitPrice,
            discount: product.discount || 0,
            discount_type: product.discountType || 'fixed',
            discount_amount: product.discountAmount || 0,
          })),
          subTotal: this.form.subTotal,
          netTotal: this.form.netTotal,
          discount: this.form.discount,
          transport: this.form.transportCost || 0,
          totalProductTax: this.form.totalProductTax,
          orderTax: this.form.orderTax,
          totalTax: this.form.totalTax,
          poReference: this.form.poReference || '',
          paymentTerms: this.form.paymentTerms || '',
          poDate: this.form.poDate,
          purchaseDate: this.form.purchaseDate,
          note: this.form.note,
          status: this.form.status,
          isSendEmail: this.form.isSendEmail,
          isSendSMS: this.form.isSendSMS,
          totalDiscount: this.form.totalDiscount,
        };
        
        
        // Handle orderTax - only include if country is NOT Saudi Arabia
        if (this.isSaudiArabia) {
          delete formData.orderTax;
        }
        
        // Use direct axios call instead of form.post to have better control over error handling
        const response = await this.$axios.post("/api/purchase-order", formData);
        
        // Clear temporary data after successful save
        this.clearTemporaryData()
        toast.fire({
          type: "success",
          title: this.$t("Purchase order created successfully"),
        });
        
        this.$router.push({
          name: "purchase-order.show",
          params: { slug: response.data.data.slug },
        });
      } catch (error) {
        this.loading = false;
        
        // Use centralized error handler
        const ErrorHandler = require('~/utils/errorHandler').default;
        ErrorHandler.handleApiError(error, {
          showValidationErrors: true
        });
      }
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
      localStorage.setItem('purchaseOrderTempData', JSON.stringify(tempData))
      toast.fire({
        type: 'success',
        title: this.$t('Form saved temporarily'),
      })
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('purchaseOrderTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.supplier = data.supplier || null
          this.form.selectedProducts = data.selectedProducts || []
          this.form.subTotal = data.subTotal || 0
          this.form.netTotal = data.netTotal || 0
          this.form.discount = data.discount || 0
          this.form.transportCost = data.transportCost || 0
          this.form.totalProductTax = data.totalProductTax || 0
          this.form.orderTax = data.orderTax || 0
          this.form.totalTax = data.totalTax || 0
          this.form.poReference = data.poReference || ''
          this.form.paymentTerms = data.paymentTerms || ''
          this.form.poDate = data.poDate || ''
          this.form.purchaseDate = data.purchaseDate || ''
          this.form.note = data.note || ''
          this.form.status = data.status !== undefined ? data.status : 1
          this.form.isSendEmail = data.isSendEmail || false
          this.form.isSendSMS = data.isSendSMS || false
          this.form.totalDiscount = data.totalDiscount || 0
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('purchaseOrderTempData')
    },
    

    
    // Auto-assign Chart of Account for supplier
    async autoAssignSupplierChartOfAccount() {
      if (!this.form.supplier || this.isAutoAssigningSupplier) {
        return;
      }
      
      this.isAutoAssigningSupplier = true;
      
      try {
        const response = await this.$http.post(`/api/suppliers/${this.form.supplier.slug}/auto-assign-chart-of-account`);
        
        if (response.data.success) {
          console.log('Auto-assign response:', response.data);
          console.log('Current supplier before update:', this.form.supplier);
          
          // Update the supplier data with new chart of account
          this.form.supplier.chart_of_account_id = response.data.chart_of_account_id;
          
          console.log('Supplier after updating chart_of_account_id:', this.form.supplier);
          
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
        const response = await this.$http.post(`/api/products/${product.slug}/auto-assign-chart-of-account`);
        
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

/* Restore full border radius for buttons inside the group */
.btn-group.c-w-100 > .btn {
  border-radius: 10px !important;
}
.btn-group.c-w-100 > .btn:first-child {
  border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}
.btn-group.c-w-100 > .btn:last-child {
  border-top-left-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
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

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Form Control Styling */
.form-control {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 14px;
}

.form-control:focus {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

/* Form Group Labels */
.form-group label {
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  display: block;
}

.required {
  color: #DC3545;
  font-weight: bold;
}

/* Button Styling */
.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border-radius: 10px !important;
  border: none !important;
  font-weight: 500;
}

.btn-primary:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;
  border-radius: 10px !important;
  border: none !important;
  font-weight: 500;
  margin-right: 10px;
}

.btn-secondary:hover {
  background: #2a8bc4 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.3);
}

/* Invalid Form Control */
.is-invalid {
  border-color: #DC3545 !important;
}

/* Textarea Styling */
textarea.form-control {
  min-height: 100px;
  resize: vertical;
}

/* V-Select Styling */
.v-select {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
}

.v-select .vs__dropdown-toggle {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
}

.v-select .vs__search::placeholder {
  color: #6B7280;
}

.v-select .vs__selected {
  color: #374151;
}

.v-select .vs__dropdown-menu {
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Table Styling */
.table-custom {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.table-custom thead th {
  background-color: #F8F9FA;
  border-bottom: 2px solid #E5E7EB;
  font-weight: 600;
  color: #374151;
  padding: 12px 8px;
  text-align: center;
}

.table-custom tbody td {
  padding: 12px 8px;
  border-bottom: 1px solid #E5E7EB;
  vertical-align: middle;
}

.table-custom tbody tr:hover {
  background-color: #F8F9FA;
}

/* Custom Quantity Input Styling */
.custom-qty-input {
  display: flex;
  align-items: center;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}

.custom-qty-input .button-minus,
.custom-qty-input .button-plus {
  background: #6C757D;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.custom-qty-input .button-minus:hover {
  background: #DC3545;
}

.custom-qty-input .button-plus:hover {
  background: #2AB930;
}

.custom-qty-input .quantity-field {
  border: none;
  background: transparent;
  text-align: center;
  width: 60px;
  padding: 8px 4px;
  font-weight: 500;
}

.custom-qty-input .quantity-field:focus {
  outline: none;
  box-shadow: none;
}

/* Toggle Button Styling */
.toggle-button {
  margin-right: 10px;
}

/* Create Button Styling */
.create-btn {
  padding: 11px;
  background: #2AB930;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.create-btn:hover {
  background: #229A26;
}

/* Supplier/Product Status Styles */
.supplier-status,
.product-status {
  font-size: 13px;
}

.supplier-warning,
.supplier-success,
.product-warning,
.product-success {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
}

.supplier-warning,
.product-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.supplier-success,
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
  border-radius: 6px;
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

/* Row Spacing */
.row {
  margin-bottom: 1rem;
}

/* Form Text Styling */
.form-text {
  color: #6B7280;
  font-size: 0.875rem;
}

.text-muted {
  color: #6B7280 !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-footer {
    flex-direction: column;
    gap: 10px;
  }
  
  .card-footer .btn {
    width: 100%;
    margin-right: 0 !important;
  }
  
  .card-footer div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .table-custom {
    font-size: 12px;
  }
  
  .table-custom thead th,
  .table-custom tbody td {
    padding: 8px 4px;
  }
}
</style>
