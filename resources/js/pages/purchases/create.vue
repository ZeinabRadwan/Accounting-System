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
                <router-link :to="{ name: 'purchases.index' }" class="btn btn-info">
                  <template v-if="isRTL || $i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">
                    {{ $t("Back") }} <i class="fas fa-long-arrow-alt-left" />
                  </template>
                  <template v-else>
                    <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
                  </template>
                </router-link>
                <button type="submit" class="btn btn-success" :form="'purchaseCreateForm'" :title="$t('Save')">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
            <div class="card-body">
              <!-- form start -->
              <form id="purchaseCreateForm" role="form" @submit.prevent="savePurchase" @keydown="form.onKeydown($event)">
              <div class="row" v-if="suppliers && products">
                <div class="form-group col-md-6">
                  <label for="supplier">{{ $t("Supplier") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select class="flex-grow-1" v-model="form.supplier" :options="suppliers" label="name"
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
                      </div>
                      
                      <has-error :form="form" field="supplier" />
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="poReference">{{
                    $t("PO Reference")
                  }}</label>
                  <input id="poReference" v-model="form.poReference" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('poReference') }" name="poReference" :placeholder="$t('Enter PO reference')
                      " />
                  <has-error :form="form" field="poReference" />
                </div>
              </div>
              <div class="row" v-if="products">
                <div class="form-group col-md-6">
                  <label for="product">{{ $t("Select Products") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select v-model="form.product" :options="products" label="label" class="flex-grow-1" :class="{
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
                <!-- Transport Cost Fields - Show based on supplier tax status -->
                <div v-if="isSupplierTaxable" class="form-group col-md-6 col-xl-3">
                  <label for="transportTaxableCost">{{
                    $t("Taxable Transport Cost")
                  }}</label>
                  <input id="transportTaxableCost" v-model="form.transportTaxableCost" type="number" step="any" min="0"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('transportTaxableCost') }" name="transportTaxableCost"
                    :placeholder="$t('Enter transport cost')
                        " @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="transportTaxableCost" />
                </div>
                <div v-if="isSupplierTaxable" class="form-group col-md-6 col-xl-3">
                  <label for="transportVatAmount">{{
                    $t("Transport VAT Amount")
                  }}</label>
                  <input id="transportVatAmount" v-model="form.transportVatAmount" type="number" step="any" 
                    class="form-control" name="transportVatAmount" readonly />
                </div>
                <div v-else class="form-group col-md-6 col-xl-3">
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
                <div class="form-group col-md-6 col-xl-3">
                  <label for="addPayment">{{ $t("Add Payment?") }}</label>
                  <select id="addPayment" v-model="form.addPayment" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('addPayment') }" name="addPayment">
                    <option value="" selected disabled>
                      {{ $t("Select an option") }}
                    </option>
                    <option value="1">{{ $t("Yes") }}</option>
                    <option value="0">{{ $t("No") }}</option>
                  </select>
                  <has-error :form="form" field="addPayment" />
                </div>
              </div>
              <div class="row" v-if="form.addPayment == 1 &&
                accounts &&
                form.selectedProducts &&
                form.selectedProducts.length > 0
                ">
                <div class="form-group col-md-6">
                  <label for="account">{{ $t("Account") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.account" :options="accounts" label="label"
                    :class="{ 'is-invalid': form.errors.has('account') }" name="account"
                    :placeholder="$t('Select an account')" @input="updateBalance">
                     <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px;" />
                        {{ option.label }}
                    </template>
                  </v-select>
                  <has-error :form="form" field="account" />
                </div>
                <div class="form-group col-md-6">
                  <label for="availableBalance">{{
                    $t("Available Balance")
                  }}</label>
                  <input id="availableBalance" v-model="form.availableBalance" type="number" step="any"
                    class="form-control" :class="{
                      'is-invalid': form.errors.has('availableBalance'),
                    }" name="availableBalance" readonly />
                  <has-error :form="form" field="availableBalance" />
                </div>
                <div class="form-group col-md-4">
                  <label for="totalPaid">{{ $t("Total Paid") }}
                    <span class="required">*</span></label>
                  <input id="totalPaid" v-model="form.totalPaid" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalPaid') }" name="totalPaid" min="1" :max="form.netTotal"
                    :placeholder="$t('Enter an amount')" />
                  <has-error :form="form" field="totalPaid" />
                </div>
                <!-- <div class="form-group col-md-4">
                  <label for="chequeNo">{{ $t("Cheque No") }}</label>
                  <input id="chequeNo" v-model="form.chequeNo" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" name="chequeNo"
                    :placeholder="$t('Enter a cheque number')" />
                  <has-error :form="form" field="chequeNo" />
                </div> -->
                <div class="form-group col-md-4">
                  <label for="receiptNo">{{ $t("Receipt No") }}</label>
                  <input id="receiptNo" v-model="form.receiptNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('receiptNo') }" name="receiptNo"
                    :placeholder="$t('Enter a receipt no')" />
                  <has-error :form="form" field="receiptNo" />
                </div>
              </div>
              <div class="form-group">
                <label for="note">{{ $t("Note") }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
              <div class="row">
                <div class="form-group col-md-4" style="display: none;">
                  <label for="purchaseDate">{{
                    $t("Purchase Date")
                  }}</label>
                  <input id="purchaseDate" v-model="form.purchaseDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('purchaseDate') }" name="purchaseDate" />
                  <has-error :form="form" field="purchaseDate" />
                </div>
                <div class="form-group col-md-4" style="display: none;">
                  <label for="poDate">{{
                    $t("PO Date")
                  }}</label>
                  <input id="poDate" v-model="form.poDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('poDate') }" name="poDate" />
                  <has-error :form="form" field="poDate" />
                </div>
                <div class="form-group col-md-4" v-if="!isSaudiArabia">
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
                  <button type="submit" :disabled="form.busy" class="btn btn-success" @click="savePurchase">
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
import RTLMixin from '~/mixins/RTLMixin'

import { ToWords } from 'to-words';

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Purchase") };
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
    breadcrumbsCurrent: "Create Purchase",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Purchases",
        url: "purchases.index",
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
      transportTaxableCost: "",
      transportVatAmount: 0,
      account: "",
      availableBalance: "",
      totalProductTax: 0,
      orderTax: "",
      totalTax: 0,
      totalPaid: "",
      poReference: "",
      paymentTerms: "",
      addPayment: "",
      chequeNo: "",
      receiptNo: "",
      poDate: new Date().toISOString().slice(0, 10),
      purchaseDate: new Date().toISOString().slice(0, 10),
      note: "",
      status: 0, // Default to inactive for ZATCA compatibility
      isSendEmail: false,
      isSendSMS: false,
      totalDiscount: 0,
    }),
    products: "",
    accounts: "",
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
    // Check if supplier is taxable (has tax_status === 'taxable' and tax_registration_number)
    isSupplierTaxable() {
      if (!this.form.supplier) {
        return false;
      }
      
      // Support both camelCase and snake_case
      const taxStatus = this.form.supplier.tax_status || this.form.supplier.taxStatus;
      const taxRegNumber = this.form.supplier.tax_registration_number || 
                          this.form.supplier.taxRegistrationNumber ||
                          this.form.supplier.tax_registrationNumber;
      
      const isTaxable = taxStatus === 'taxable' && 
                       taxRegNumber && 
                       taxRegNumber.length > 0;
      
      // Debug log
      console.log('isSupplierTaxable check:', {
        supplier: this.form.supplier.name,
        tax_status: taxStatus,
        tax_registration_number: taxRegNumber,
        isTaxable: isTaxable,
        supplierData: this.form.supplier
      });
      
      return isTaxable;
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
    },
    'form.transportTaxableCost': {
      handler() {
        this.updateNetTotal();
      }
    }
  },
  async created() {
    console.log('=== Component Created ===');
    console.log('appInfo at creation:', this.appInfo);
    this.prefix = this.appInfo.productPrefix;
    
    // Load initial data
    await Promise.all([
      this.getSuppliers(),
      this.getProducts(),
      this.getAccounts(),
      this.getTaxes(),
      this.loadCommunicationConfigStatus()
    ]);
    
    // Load purchase order data if query parameter exists (after data is loaded)
    if (this.$route.query.fromPurchaseOrder) {
      await this.loadPurchaseOrderData(this.$route.query.fromPurchaseOrder);
    }
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
      // this.$toast.success(this.$t("Product created and added to purchase successfully!"));
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
    // get accounts
    async getAccounts() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-accounts"
      );
      this.accounts = data.data;
      // assign default account
      if (this.accounts && this.accounts.length > 0) {
        let defaultAccountSlug = this.appInfo.defaultAccountSlug;
        this.form.account = this.accounts.find(
          (account) => account.slug === defaultAccountSlug
        );
      }
      this.updateBalance();
    },
    // update available balance
    updateBalance() {
      this.form.availableBalance = 0;
      if (this.form.account) {
        this.form.availableBalance = this.form.account.availableBalance;
      }
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
          totalBeforeDiscount: product.regularPrice * quantity, // For ItemsTable component
          totalAfterDiscount: product.regularPrice * quantity, // For ItemsTable component
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
      this.generateItemTotal(value, type, index, action);
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
        
        // Set totalBeforeDiscount for ItemsTable component (use Vue.set for reactivity)
        this.$set(item, 'totalBeforeDiscount', total);
        
        // 2. Line Item: Total After Discount
        let totalAfterDiscount;
        if (item.discountType === "percentage") {
          totalAfterDiscount = Number((total - (total * (item.discount || 0) / 100)).toFixed(2));
        } else {
          totalAfterDiscount = Number((total - (item.discountAmount || 0)).toFixed(2));
        }
        
        // Set totalAfterDiscount for ItemsTable component (use Vue.set for reactivity)
        this.$set(item, 'totalAfterDiscount', totalAfterDiscount);
        
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
        // Calculate VAT on total after discount (for the entire quantity)
        item.totalTax = Number((totalAfterDiscount * vatRate / 100).toFixed(2));
        // productTax is VAT per unit (for display purposes)
        item.productTax = item.qty > 0 ? Number((item.totalTax / item.qty).toFixed(2)) : 0;
        
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
      // Use totalTax (VAT for entire quantity) not productTax (VAT per unit)
      let vatAmount = item.totalTax || 0;
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
      // Sum of all item.totalPrice values (which is totalAfterDiscount + totalTax)
      return this.form.selectedProducts.reduce((total, item) => {
        return Number((total + (item.totalPrice || 0)).toFixed(2));
      }, 0);
    },

    // Helper method to get sum of all individual VAT amounts
    getTotalVATSum() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        // Use totalTax (VAT for entire quantity) not productTax (VAT per unit)
        return Number((total + (item.totalTax || 0)).toFixed(2));
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
      
      // Calculate transport costs
      let transportTotal = 0;
      
      if (this.isSupplierTaxable) {
        // For taxable suppliers: always calculate VAT
        const transportTaxable = Number(this.form.transportTaxableCost || 0);
        
        // Get default VAT rate for transport (use first VAT rate or 15% default)
        let vatRate = 15; // Default VAT rate
        if (this.taxes && this.taxes.length > 0) {
          vatRate = this.taxes[0].rate || 15;
        }
        
        // Calculate VAT on transport cost
        const transportVAT = transportTaxable * (vatRate / 100);
        
        // Store VAT amount for display
        this.form.transportVatAmount = Number(transportVAT.toFixed(2));
        
        // Total transport = transport cost + VAT
        transportTotal = transportTaxable + transportVAT;
      } else {
        // For non-taxable suppliers: use simple transport cost
        transportTotal = Number(this.form.transportCost || 0);
        this.form.transportVatAmount = 0;
      }
      
      // Net Total = Total with VAT + Transport cost
      this.form.netTotal = Number((totalWithVAT + transportTotal).toFixed(2));
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
    // save purchase
    async savePurchase() {

      
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
      
      // Check account (only required if adding payment)
      if (this.form.addPayment == 1 && !this.form.account) {
        validationErrors.push(this.$t("Please select an account"));
      }
      
      // Check total paid (only required if adding payment)
      if (this.form.addPayment == 1 && (!this.form.totalPaid || Number(this.form.totalPaid) <= 0)) {
        validationErrors.push(this.$t("Please enter the total amount paid"));
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
        
        // Submit the form
        
        // Prepare the form data
        const formData = this.form.data();
        
        // Convert addPayment to boolean for backend validation
        formData.addPayment = this.form.addPayment == 1;
        
        // Only include payment-related fields if payment is being added
        if (this.form.addPayment == 1) {
          formData.account = this.form.account;
          formData.totalPaid = this.form.totalPaid;
        } else {
          // Remove payment-related fields if not adding payment
          delete formData.account;
          delete formData.totalPaid;
        }
        
        // Handle orderTax - only include if country is NOT Saudi Arabia
        if (this.isSaudiArabia) {
          delete formData.orderTax;
        }
        
        // Use direct axios call instead of form.post to have better control over error handling
        const response = await this.$axios.post("/api/purchases", formData);
        
        toast.fire({
          type: "success",
          title: this.$t("Purchase added successfully"),
        });
        
        this.clearTemporaryData()
        this.$router.push({
          name: "purchases.show",
          params: { slug: response.data.data.slug },
        });
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          // Validation errors from backend - show all errors in one notification
          const errorMessages = Object.values(error.response.data.errors).flat();
          const errorList = errorMessages.map(error => `• ${error}`).join('\n');
          toast.fire({
            type: "error",
            title: `${this.$t("Validation Error")}:\n\n${errorList}`,
            timer: 8000,
            timerProgressBar: true
          });
        } else if (error.response && error.response.data && error.response.data.message) {
          // Custom error message from backend
          toast.fire({
            type: "error",
            title: this.$t("Error"),
            text: error.response.data.message
          });
        } else {
          // Use centralized error handler
          const ErrorHandler = require('~/utils/errorHandler').default;
          ErrorHandler.handleApiError(error, {
            showValidationErrors: true
          });
        }
      }
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
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        supplier: this.form.supplier,
        selectedProducts: this.form.selectedProducts,
        subTotal: this.form.subTotal,
        netTotal: this.form.netTotal,
        transportCost: this.form.transportCost,
        orderTax: this.form.orderTax,
        totalProductTax: this.form.totalProductTax,
        totalTax: this.form.totalTax,
        discount: this.form.discount,
        poReference: this.form.poReference,
        paymentTerms: this.form.paymentTerms,
        poDate: this.form.poDate,
        purchaseDate: this.form.purchaseDate,
        addPayment: this.form.addPayment,
        account: this.form.account,
        totalPaid: this.form.totalPaid,
        note: this.form.note,
        status: this.form.status,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('purchaseTempData', JSON.stringify(tempData))
       
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('purchaseTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.supplier = data.supplier || this.form.supplier
          this.form.selectedProducts = data.selectedProducts || this.form.selectedProducts
          this.form.subTotal = data.subTotal || this.form.subTotal
          this.form.netTotal = data.netTotal || this.form.netTotal
          this.form.transportCost = data.transportCost || this.form.transportCost
          this.form.orderTax = data.orderTax || this.form.orderTax
          this.form.totalProductTax = data.totalProductTax || this.form.totalProductTax
          this.form.totalTax = data.totalTax || this.form.totalTax
          this.form.discount = data.discount || this.form.discount
          this.form.poReference = data.poReference || this.form.poReference
          this.form.paymentTerms = data.paymentTerms || this.form.paymentTerms
          this.form.poDate = data.poDate || this.form.poDate
          this.form.purchaseDate = data.purchaseDate || this.form.purchaseDate
          this.form.addPayment = data.addPayment || this.form.addPayment
          this.form.account = data.account || this.form.account
          this.form.totalPaid = data.totalPaid || this.form.totalPaid
          this.form.note = data.note || this.form.note
          this.form.status = data.status !== undefined ? data.status : this.form.status
        } catch (e) {
          console.error('Error loading temporary data:', e)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('purchaseTempData')
    },
    
    // Load purchase order data and populate form
    async loadPurchaseOrderData(purchaseOrderSlug) {
      try {
        this.$store.state.operations.loading = true;
        
        // Fetch purchase order data
        const { data } = await axios.get(
          window.location.origin + "/api/purchase-order/" + purchaseOrderSlug
        );
        
        const purchaseOrder = data.data;
        
        // Set supplier
        if (purchaseOrder.supplier && this.suppliers && this.suppliers.length > 0) {
          const supplier = this.suppliers.find(s => s.id === purchaseOrder.supplier.id || s.id === purchaseOrder.supplier_id);
          if (supplier) {
            this.form.supplier = supplier;
            this.onSupplierChange();
          }
        }
        
        // Set purchase order reference fields
        if (purchaseOrder.po_reference) {
          this.form.poReference = purchaseOrder.po_reference;
        }
        if (purchaseOrder.payment_terms) {
          this.form.paymentTerms = purchaseOrder.payment_terms;
        }
        if (purchaseOrder.po_date) {
          this.form.poDate = purchaseOrder.po_date;
        }
        if (purchaseOrder.purchase_date) {
          this.form.purchaseDate = purchaseOrder.purchase_date;
        } else {
          this.form.purchaseDate = new Date().toISOString().slice(0, 10);
        }
        if (purchaseOrder.note) {
          this.form.note = purchaseOrder.note;
        }
        if (purchaseOrder.transport) {
          this.form.transportCost = purchaseOrder.transport;
        }
        
        // Map purchase order products to form products
        if (purchaseOrder.purchase_order_products && purchaseOrder.purchase_order_products.length > 0) {
          const selectedProducts = [];
          
          for (const poProduct of purchaseOrder.purchase_order_products) {
            // Find the product in the products list
            const product = this.products.find(p => p.id === poProduct.product_id || (poProduct.product && p.id === poProduct.product.id));
            
            if (product) {
              // Find matching VAT rate
              let selectedVatRate = null;
              if (poProduct.tax_amount && poProduct.tax_amount > 0 && this.taxes && this.taxes.length > 0) {
                // Try to find VAT rate by rate value (calculate from tax_amount)
                const lineTotal = poProduct.quantity * poProduct.purchase_price;
                const discountAmount = poProduct.discount_amount || 0;
                const totalAfterDiscount = lineTotal - discountAmount;
                const calculatedVatRate = totalAfterDiscount > 0 ? (poProduct.tax_amount / totalAfterDiscount) * 100 : 0;
                
                // Find matching VAT rate
                selectedVatRate = this.taxes.find(tax => 
                  Math.abs(tax.rate - calculatedVatRate) < 0.01 || 
                  (poProduct.product && poProduct.product.productTax && this.findMatchingVatRate(poProduct.product.productTax))
                );
                
                if (!selectedVatRate && poProduct.product && poProduct.product.productTax) {
                  selectedVatRate = this.findMatchingVatRate(poProduct.product.productTax);
                }
              }
              
              // Calculate total before discount
              const lineTotal = (poProduct.purchase_price || product.regularPrice) * (poProduct.quantity || 1);
              const discountAmount = poProduct.discount_amount || 0;
              const totalAfterDiscount = lineTotal - discountAmount;
              
              // Create product object for form
              const formProduct = {
                id: product.id,
                slug: product.slug,
                name: product.name,
                code: product.code,
                qty: poProduct.quantity || 1,
                unitPrice: poProduct.purchase_price || product.regularPrice,
                originalPrice: poProduct.purchase_price || product.regularPrice,
                discount: poProduct.discount || 0,
                discountType: poProduct.discount_type || 'fixed',
                discountAmount: discountAmount,
                selectedVatRate: selectedVatRate || (this.taxes && this.taxes.length > 0 ? this.taxes[0] : null),
                productTax: poProduct.tax_amount || 0,
                totalTax: poProduct.tax_amount || 0,
                unitCost: poProduct.unit_cost || poProduct.purchase_price || product.regularPrice,
                totalPrice: (poProduct.purchase_price || product.regularPrice) * (poProduct.quantity || 1),
                totalBeforeDiscount: lineTotal, // For ItemsTable component
                totalAfterDiscount: totalAfterDiscount, // For ItemsTable component
                sales_account_id: product.sales_account_id,
                purchase_account_id: product.purchase_account_id,
              };
              
              selectedProducts.push(formProduct);
            }
          }
          
          // Set selected products
          this.form.selectedProducts = selectedProducts;
          
          // Recalculate totals for all products (calculateProductVat already calls generateItemTotalPrice)
          selectedProducts.forEach((product, index) => {
            this.calculateProductDiscount(index);
            this.calculateProductVat(index);
          });
          
          // Recalculate totals
          this.calculateSum();
        }
        
        // Show success message
        toast.fire({
          type: "success",
          title: this.$t("Purchase order data loaded successfully"),
        });
        
        this.$store.state.operations.loading = false;
      } catch (error) {
        console.error('Error loading purchase order data:', error);
        this.$store.state.operations.loading = false;
        toast.fire({
          type: "error",
          title: this.$t("Failed to load purchase order data"),
          text: error.response?.data?.message || this.$t("Please try again"),
        });
      }
    },
  },
  mounted() {
    this.loadTemporaryData()
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
}

.v-select .vs__dropdown-toggle {
  background: #fff !important;
  border: 1px solid #E5E7EB;
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

/* Toggle Button Styling */
.toggle-button {
  margin-right: 10px;
}

/* Supplier/Product Status Styles */
.supplier-status,
.product-status {
  font-size: 13px;
}

.supplier-warning,
.product-warning {
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

/* Quantity Field Styling */
.quantity-field {
  border-radius: 0 !important;
  min-height: 50px !important;
  margin: 0 !important;
}

/* Table Custom Styling */
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
</style>
