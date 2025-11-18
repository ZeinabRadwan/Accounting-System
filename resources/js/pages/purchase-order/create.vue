<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'purchase-order.index' }" class="btn btn-info">
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
                <button type="submit" class="btn btn-success" :form="'purchaseOrderCreateForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <!-- form start -->
            <form id="purchaseOrderCreateForm" role="form" @submit.prevent="savePurchaseOrder" @keydown="form.onKeydown($event)">
              <div class="row" v-if="suppliers && products">
                <div class="form-group col-md-6">
                  <label for="supplier">{{ $t("Supplier") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select class="flex-grow-1" v-model="form.supplier" :options="suppliers" label="name" :clearable="false"
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
                        <div v-if="!form.supplier.chart_of_account_id" class="warning">
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
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="product">{{ $t("Select Products") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select v-model="form.product" :options="products" label="label" class="flex-grow-1" :clearable="false" :class="{
                          'is-invalid': form.errors.has('selectedProducts'),
                        }" name="product" :placeholder="$t('Search products')"
                          @input="storeProduct(form.product)" />
                        <ProductCreateModal @reloadProducts="getProducts" @productCreated="handleProductCreated">
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
                      </div>
                      
                      <has-error :form="form" field="selectedProducts" />
                    </div>
                  </div>
                </div>
              </div>
              <ItemsTable
                :items="form.selectedProducts"
                :prefix="prefix"
                :taxes="taxes"
                :form-errors="form.errors"
                :total-unit-price="totalUnitPrice"
                :total-product-discount="totalProductDiscount"
                :total-after-discount="totalAfterDiscount"
                :total-product-tax="totalProductTax"
                :subtotal="subtotal"
                :amount-in-words="toWord()"
                table-class="invoices-create-table"
                @item-change="handleItemChange"
                @discount-change="calculateProductDiscount"
                @vat-change="calculateProductVat"
                @remove-item="removeItem"
              />
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="poReference">{{
                    $t("PO Reference")
                  }}</label>
                  <input id="poReference" v-model="form.poReference" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('poReference') }" name="poReference" :placeholder="$t('Enter PO reference')
                      " />
                  <has-error :form="form" field="poReference" />
                </div>

                <div v-if="taxes && !isSaudiArabia" class="form-group col-md-4">
                  <label for="orderTax">{{ $t("Purchase Tax") }}
                    <span class="required">*</span></label>
                  <!-- Debug: isSaudiArabia = {{ isSaudiArabia }}, taxes = {{ taxes ? 'exists' : 'null' }} -->
                  <v-select v-model="form.orderTax" :options="taxes" label="code" :clearable="false"
                    :class="{ 'is-invalid': form.errors.has('orderTax') }" name="orderTax" :placeholder="$t('Select a tax type')
                      " @input="updateTax" />
                  <has-error :form="form" field="orderTax" />
                </div>

                <div class="form-group col-md-4">
                  <label for="netTotal">{{ $t("Net Total") }}</label>
                  <input id="netTotal" v-model="form.netTotal" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('netTotal') }" name="netTotal" readonly />
                  <has-error :form="form" field="netTotal" />
                </div>

                <div v-if="taxes && !isSaudiArabia" class="form-group col-md-4">
                  <label for="totalTax">{{
                    $t("Total Tax")
                  }}</label>
                  <input id="totalTax" v-model="form.totalTax" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalTax') }" name="totalTax" readonly />
                  <has-error :form="form" field="totalTax" />
                </div>

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
                <div class="form-group col-md-4">
                  <label for="transportCost">{{
                    $t("Transport Cost")
                  }}</label>
                  <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="0"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('transportCost') }" name="transportCost"
                    :placeholder="$t('Enter transport cost')
                        " @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="transportCost" />
                </div>

                <div class="form-group col-md-6">
                  <label for="paymentTerms">{{
                    $t("Payment Terms")
                  }}</label>
                  <input id="paymentTerms" v-model="form.paymentTerms" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paymentTerms') }" name="paymentTerms" :placeholder="$t('Enter payment terms')
                      " />
                  <has-error :form="form" field="paymentTerms" />
                </div>
              </div>
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row">
               
               
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
                <div class="pr-5 d-flex align-items-center">
                  <toggle-button 
                    v-model="form.isSendEmail" 
                    :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.email_configured" />
                  <span class="ml-3">{{ $t("Send To Email") }}</span>
                  <span v-if="!communicationConfig.loading && !communicationConfig.email_configured" 
                        class="ml-2 text-muted small">
                    ({{ $t("Email not configured") }})
                  </span>
                </div>
              </div>
              <div class="form-group col-12 d-flex flex-wrap">
                <div class="pr-5 d-flex align-items-center">
                  <toggle-button 
                    v-model="form.isSendSMS" 
                    :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.sms_configured" />
                  <span class="ml-3">{{ $t("Send To SMS") }}</span>
                  <span v-if="!communicationConfig.loading && !communicationConfig.sms_configured" 
                        class="ml-2 text-muted small">
                    ({{ $t("SMS not configured") }})
                  </span>
                </div>
              </div>
            </form>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                  <button type="submit" :disabled="form.busy" class="btn btn-success" @click="savePurchaseOrder">
                    <i :class="form.busy ? 'fas fa-spinner fa-spin' : 'fas fa-save'" /> 
                    {{ form.busy ? $t("Saving...") : $t("Save") }}
                  </button>
                  <button type="reset" class="btn btn-info" @click="form.reset()">
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
import ItemsTable from '~/components/ItemsTable'
import ErrorHandler from '~/utils/errorHandler'
import RTLMixin from '~/mixins/RTLMixin'

import { ToWords } from 'to-words';

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Purchase Order") };
  },
  mixins: [RTLMixin],
  components: {
    ToggleButton,
    ProductCreateModal,
    SupplierCreateModal,
    ItemsTable,
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
    suppliers: [], // Local suppliers array instead of using shared items
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
    
    // Communication configuration status
    communicationConfig: {
      email_configured: false,
      sms_configured: false,
      loading: true,
    },
  }),
  computed: {
    ...mapGetters("operations", ["appInfo"]),
    
    // Calculate total unit price (sum of all unit prices)
    totalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        return total + ((item.originalPrice || item.unitPrice) * item.qty);
      }, 0);
    },

    totalProductDiscount() {
      return this.getTotalDiscountSum();
    },

    totalAfterDiscount() {
      return this.getSubTotalAfterDiscount();
    },

    totalProductTax() {
      return this.getTotalVATSum();
    },

    subtotal() {
      return this.getTotalWithVATSum();
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
    this.loadCommunicationConfigStatus();
    this.prefix = this.appInfo.productPrefix;
  },
  mounted() {
    this.loadTemporaryData()
  },
  methods: {
    // Load communication configuration status
    async loadCommunicationConfigStatus() {
      try {
        this.communicationConfig.loading = true;
        
        const response = await axios.get('/api/communication-config-status');
        
        this.communicationConfig.email_configured = response.data.email_configured;
        this.communicationConfig.sms_configured = response.data.sms_configured;
        this.communicationConfig.loading = false;
      } catch (error) {
        console.error('Error loading communication config status:', error);
        // Default to false if there's an error
        this.communicationConfig.email_configured = false;
        this.communicationConfig.sms_configured = false;
        this.communicationConfig.loading = false;
      }
    },

    // get all local suppliers
    async getSuppliers() {
      // Store the current supplier ID if one is selected
      const currentSupplierId = this.form.supplier ? this.form.supplier.id : null;
      
      const { data } = await axios.get(window.location.origin + "/api/all-suppliers");
      this.suppliers = data.data || [];
      
      // If we had a supplier selected, find and restore it
      if (currentSupplierId && this.suppliers && this.suppliers.length > 0) {
        const currentSupplier = this.suppliers.find(s => s.id === currentSupplierId);
        if (currentSupplier) {
          this.form.supplier = currentSupplier;
        } else {
          // Fallback to first supplier if current one not found
          this.form.supplier = this.suppliers[0];
        }
      } else {
        // No supplier was selected, use first one
        if (this.suppliers && this.suppliers.length > 0) {
          this.form.supplier = this.suppliers[0];
        }
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

    // handle newly created product
    handleProductCreated(newProduct) {
      // Add the new product to the products list
      this.products.unshift(newProduct);
      this.products.sort(this.sortProducts);
      
      // Automatically select the newly created product
      this.form.product = newProduct;
      
      // Automatically add it to the selected products list
      this.storeProduct(newProduct);
      
      // Show success message
      // this.$toast.success(this.$t("Product created and added to purchase order successfully!"));
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
        // Prefer avgPurchasePrice from API payload; fallback to sellingPrice then regularPrice then 1
        let purchasePrice = 1;
        if (product && Number(product.avgPurchasePrice) > 0) {
          purchasePrice = Number(product.avgPurchasePrice);
        } else if (product && Number(product.sellingPrice) > 0) {
          purchasePrice = Number(product.sellingPrice);
        } else if (product && Number(product.regularPrice) > 0) {
          purchasePrice = Number(product.regularPrice);
        }
        // store product
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          qty: quantity,
          unitPrice: product.regularPrice,
          originalPrice: product.regularPrice, // Align calculations with unitPrice
          discount: 0,
          discountType: "fixed",
          discountAmount: 0,
          selectedVatRate: this.findMatchingVatRate(product.productTax) || (this.taxes && this.taxes.length > 0 ? this.taxes[0] : null),
          productTax: 0,
          totalTax: 0,
          unitCost: product.regularPrice,
          totalPrice: product.regularPrice * quantity,
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
    // Handle item change from ItemsTable component
    handleItemChange({ value, type, index, action }) {
      // Map ItemsTable event format to generateItemTotal method signature
      // ItemsTable: { value, type, index, action }
      // generateItemTotal: (value, type, index, action)
      this.generateItemTotal(value, type, index, action);
    },

    // update array
    generateItemTotal(value, type, index, action) {
      let item = this.form.selectedProducts[index];
      if (item) {
        if (type == "qty") {
          let newQty = value;
          if (action == "increment") {
            newQty = Number(item.qty) + 1;
          } else if (action == "decrement") {
            if (item.qty > 0) {
              newQty = Number(item.qty) - 1;
            }
          }
          this.$set(item, 'qty', newQty);
        } else if (type == "price") {
          let newPrice = value;
          if (action == "increment") {
            newPrice = Number(item.unitPrice) + 1;
          } else if (action == "decrement") {
            if (item.unitPrice > 0) {
              newPrice = Number(item.unitPrice) - 1;
            }
          }
          this.$set(item, 'unitPrice', newPrice);
          // Update original price when user manually changes unit price
          this.$set(item, 'originalPrice', newPrice);
        }
        
        // Recalculate discount amount when quantity or price changes
        if (item.discount > 0) {
          if (item.discountType === "percentage") {
            this.$set(item, 'discountAmount', Number(((item.unitPrice * item.qty * item.discount) / 100).toFixed(2)));
          } else {
            this.$set(item, 'discountAmount', Number(item.discount || 0));
          }
        }
        
        // Use the new method to calculate totals
        this.generateItemTotalPrice(index);
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

    // return number to word with language support
    toWord(){
      const amount = this.totalUnitPrice || 0;
      
      // Handle edge cases
      if (isNaN(amount) || amount < 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'مبلغ غير صحيح' : 'Invalid Amount';
      }
      
      if (amount === 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'صفر ريال فقط' : 'Zero Only';
      }
      
      if (this.isRTL && this.currentLocale === 'ar') {
        return this.convertToArabicWords(amount);
      } else {
        return this.convertToEnglishWords(amount);
      }
    },

    // Convert number to Arabic words
    convertToArabicWords(amount) {
      const currencyInfo = this.getCurrencyInfo();
      if (amount === 0) return `صفر ${currencyInfo.main} فقط`;
      
      const integerPart = Math.floor(amount);
      const decimalPart = Math.round((amount - integerPart) * 100);
      
      let result = '';
      
      if (integerPart > 0) {
        const arabicNumber = this.convertIntegerToArabic(integerPart);
        result += arabicNumber + ' ' + currencyInfo.main;
        
        // Add proper pluralization for main currency
        if (integerPart === 1) {
          // Keep singular form
        } else if (integerPart === 2) {
          result = result.replace(currencyInfo.main, currencyInfo.main + 'ان');
        } else if (integerPart >= 3 && integerPart <= 10) {
          result = result.replace(currencyInfo.main, currencyInfo.main + 'ات');
        } else {
          // Keep plural form for larger numbers
        }
      }
      
      if (decimalPart > 0) {
        if (result) result += ' و ';
        const arabicDecimal = this.convertIntegerToArabic(decimalPart);
        result += arabicDecimal + ' ' + currencyInfo.sub;
        
        // Add proper pluralization for sub currency
        if (decimalPart === 1) {
          // Keep singular form
        } else if (decimalPart === 2) {
          result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ان');
        } else if (decimalPart >= 3 && decimalPart <= 10) {
          result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ات');
        } else {
          // Keep plural form for larger numbers
        }
      }
      
      return result + ' فقط';
    },

    // Get currency information based on locale and app settings
    getCurrencyInfo() {
      const currency = this.appInfo?.currency || 'SAR';
      const isArabic = this.isRTL && this.currentLocale === 'ar';
      
      const currencyMap = {
        'SAR': {
          en: { main: 'Riyal', sub: 'Halala', symbol: 'ê' },
          ar: { main: 'ريال', sub: 'هللة', symbol: 'ê' }
        },
        'USD': {
          en: { main: 'Dollar', sub: 'Cent', symbol: '$' },
          ar: { main: 'دولار', sub: 'سنت', symbol: '$' }
        },
        'EUR': {
          en: { main: 'Euro', sub: 'Cent', symbol: '€' },
          ar: { main: 'يورو', sub: 'سنت', symbol: '€' }
        },
        'EGP': {
          en: { main: 'Pound', sub: 'Piastre', symbol: '£' },
          ar: { main: 'جنيه', sub: 'قرش', symbol: '£' }
        }
      };
      
      return currencyMap[currency]?.[isArabic ? 'ar' : 'en'] || currencyMap['SAR'][isArabic ? 'ar' : 'en'];
    },

    // Convert number to English words
    convertToEnglishWords(amount) {
      const currencyInfo = this.getCurrencyInfo();
      const toWords = new ToWords();
      let words = toWords.convert(amount);
      
      // Add currency information
      const integerPart = Math.floor(amount);
      const decimalPart = Math.round((amount - integerPart) * 100);
      
      let result = words;
      
      if (integerPart > 0) {
        result += ' ' + currencyInfo.main;
        if (integerPart !== 1) result += 's';
      }
      
      if (decimalPart > 0) {
        if (result) result += ' and ';
        result += this.convertIntegerToEnglish(decimalPart) + ' ' + currencyInfo.sub;
        if (decimalPart !== 1) result += 's';
      }
      
      return result + ' Only';
    },

    // Convert integer to English words (for decimal parts)
    convertIntegerToEnglish(num) {
      if (num === 0) return 'zero';
      
      const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      
      if (num < 10) return ones[num];
      if (num < 20) return teens[num - 10];
      if (num < 100) {
        const ten = Math.floor(num / 10);
        const one = num % 10;
        if (one === 0) return tens[ten];
        return tens[ten] + '-' + ones[one];
      }
      
      return 'number';
    },

    // Convert integer to Arabic words
    convertIntegerToArabic(num) {
      if (num === 0) return 'صفر';
      
      const ones = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
      const tens = ['', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
      const teens = ['عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];
      const hundreds = ['', 'مائة', 'مائتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];
      
      if (num < 10) return ones[num];
      if (num < 20) return teens[num - 10];
      if (num < 100) {
        const ten = Math.floor(num / 10);
        const one = num % 10;
        if (one === 0) return tens[ten];
        return ones[one] + ' و ' + tens[ten];
      }
      if (num < 1000) {
        const hundred = Math.floor(num / 100);
        const remainder = num % 100;
        if (remainder === 0) return hundreds[hundred];
        return hundreds[hundred] + ' و ' + this.convertIntegerToArabic(remainder);
      }
      if (num < 1000000) {
        const thousand = Math.floor(num / 1000);
        const remainder = num % 1000;
        if (remainder === 0) {
          if (thousand === 1) return 'ألف';
          if (thousand === 2) return 'ألفان';
          if (thousand >= 3 && thousand <= 10) return this.convertIntegerToArabic(thousand) + ' آلاف';
          return this.convertIntegerToArabic(thousand) + ' ألف';
        }
        return this.convertIntegerToArabic(thousand) + ' ألف و ' + this.convertIntegerToArabic(remainder);
      }
      if (num < 1000000000) {
        const million = Math.floor(num / 1000000);
        const remainder = num % 1000000;
        if (remainder === 0) {
          if (million === 1) return 'مليون';
          if (million === 2) return 'مليونان';
          if (million >= 3 && million <= 10) return this.convertIntegerToArabic(million) + ' ملايين';
          return this.convertIntegerToArabic(million) + ' مليون';
        }
        return this.convertIntegerToArabic(million) + ' مليون و ' + this.convertIntegerToArabic(remainder);
      }
      
      return 'رقم كبير جداً';
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
            productTax: product.productTax || 0, // Include VAT amount
            totalTax: product.totalTax || 0, // Include total VAT amount
            selectedVatRate: product.selectedVatRate, // Include VAT rate object
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
        // Find the supplier in the suppliers list to get the most up-to-date data
        const updatedSupplier = this.suppliers.find(s => s.id === this.form.supplier.id);
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

.create-btn {
  padding: 11px;
}

/* Improved warning and success styles */
.chart-account-warning,
.chart-account-success {
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.chart-account-warning {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border: 1px solid #ffc107;
}

.chart-account-success {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  border: 1px solid #28a745;
}

.warning-content,
.success-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.warning-icon,
.success-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.warning-icon {
  color: #856404;
}

.success-icon {
  color: #155724;
}

.warning-text,
.success-text {
  flex-grow: 1;
}

.warning-title,
.success-title {
  margin: 0 0 4px 0;
  font-weight: 600;
  font-size: 14px;
}

.warning-title {
  color: #856404;
}

.success-title {
  color: #155724;
}

.warning-description,
.success-description {
  margin: 0;
  font-size: 13px;
  opacity: 0.8;
}

.warning-description {
  color: #856404;
}

.success-description {
  color: #155724;
}

.warning-action {
  flex-shrink: 0;
}

/* Remove padding for button-plus icon-shape icon-sm btn-primary elements */
.button-plus.icon-shape.icon-sm.btn-primary {
  padding: 0;
}

.btn-primary {
  background: #2AB930 !important;
}

.btn-primary:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Responsive design */
@media (max-width: 768px) {
  .warning-content,
  .success-content {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .warning-action {
    width: 100%;
  }
  
  .btn-primary {
    width: 100%;
  }
}

/* Client status styles */
.client-status {
  font-size: 13px;
}

.warning,
.success {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
}

.warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.client-success {
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

/* Account status styles */
.account-status {
  font-size: 13px;
}

.account-warning,
.account-success {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
}

.account-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.account-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

/* Horizontal radio button group */
.radio-group-horizontal {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
}

.radio-group-horizontal .form-check {
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

.radio-group-horizontal .form-check-input {
  margin-right: 8px;
}

.radio-group-horizontal .form-check-label {
  margin-bottom: 0;
  cursor: pointer;
}

/* Payment validation warning styles */
.text-warning {
  color: #856404 !important;
}

.text-warning small {
  font-size: 12px;
  font-weight: 500;
}

.text-warning i {
  margin-right: 4px;
}

.table-custom {
  border: none !important;
}

.invoices-create-table {
  border-collapse: separate;
  border-spacing: 0;
}

.invoices-create-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.invoices-create-table thead tr {
  border: none !important;
}

.invoices-create-table thead th:first-child {
  border-top-left-radius: 10px;
}

.invoices-create-table thead th:last-child {
  border-top-right-radius: 10px;
}

/* RTL styles for Arabic language */
[dir="rtl"] .invoices-create-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .invoices-create-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}

/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
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

/* Custom Status Badge Styling */
.invoices-create-table .badge.badge-danger {
  background: #FEF4F4 !important;
  color: #DC3545 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

/* Search Input Background Override */
.form-control{
  background: #fff !important;
}

.btn-primary {
  background: #2AB930 !important;
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}

.form-control {
  border-radius: 0px;
}
</style>
