<template>
  <div>
    <VModal v-model="showProductCreateModal" @close="showProductCreateModal = false">
      <template v-slot:title>{{ $t("Create Product") }}</template>
      <div class="w-100">
        <!-- form start -->
        <form role="form" @keydown="form.onKeydown($event)">
          <!-- Item Type Selection Section -->
          <div class="form-card">
            <div class="card-header">
              <h5 class="section-title">
                <i class="fas fa-cube mr-2"></i>
                {{ $t("Item Type") }}
              </h5>
            </div>
            <div class="card-body">
              <div class="item-type-selector">
                <label class="item-type-option" :class="{ 'active': form.itemType === 'product' }">
                  <input type="radio" id="product" name="itemType" v-model="form.itemType" value="product"
                    autocomplete="off">
                  <div class="option-content">
                    <i class="fas fa-cube"></i>
                    <span>{{ $t("Product") }}</span>
                  </div>
                </label>
                <label class="item-type-option" :class="{ 'active': form.itemType === 'service' }">
                  <input type="radio" id="service" name="itemType" v-model="form.itemType" value="service"
                    autocomplete="off">
                  <div class="option-content">
                    <i class="fas fa-cogs"></i>
                    <span>{{ $t("Service") }}</span>
                  </div>
                </label>
              </div>
              <has-error :form="form" field="itemType" />
            </div>
          </div>

          <!-- Main Form Section -->
          <div class="form-card">
            <div class="card-header">
              <h5 class="section-title">
                <i class="fas fa-info-circle mr-2"></i>
                {{ $t("Product Details") }}
              </h5>
            </div>
            <div class="card-body">
              <div class="row">
                <!-- Left Column -->
                <div class="col-form-6">
                  <div class="form-group">
                    <label for="itemName">{{ $t("Item Name") }} <span class="required">*</span></label>
                    <input id="itemName" v-model="form.itemName" type="text" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('itemName') }" name="itemName"
                      :placeholder="$t('Enter a name')" />
                    <has-error :form="form" field="itemName" />
                  </div>

                  <div class="form-group">
                    <label for="itemCode">{{ $t("Item Code") }} <span class="required">*</span></label>
                    <div class="input-group">
                      <span v-if="prefix" class="input-group-text">{{ prefix }}</span>
                      <input v-model="form.itemCode" type="text" class="form-control"
                        :class="{ 'is-invalid': form.errors.has('itemCode') }" name="itemCode"
                        :placeholder="$t('Enter item code')" />
                    </div>
                    <has-error :form="form" field="itemCode" />
                  </div>

                  <div class="form-group">
                    <label for="subCategory">{{ $t("Category") }} <span class="required">*</span></label>
                    <div class="d-flex w-100">
                      <v-select v-model="form.subCategory" :options="categories" label="name" :class="{
                        'is-invalid': form.errors.has('subCategory'),
                        'category-select': true
                      }" name="subCategory" :placeholder="$t('Select a category')" class="flex-grow-1" />
                      <CategorySubcategoryCreateModal @categoryCreated="handleCategoryCreated"
                        @subcategoryCreated="handleSubcategoryCreated">
                        <div class="input-group-text create-btn">
                          <i class="fas fa-solid fa-plus-circle"></i>
                        </div>
                      </CategorySubcategoryCreateModal>
                    </div>
                    <has-error :form="form" field="subCategory" />
                  </div>

                  <div class="form-group">
                    <label for="itemUnit">{{ $t("Unit") }} <span class="required">*</span></label>
                    <div class="d-flex w-100">
                      <v-select v-model="form.itemUnit" :options="units" label="name" :class="{
                        'is-invalid': form.errors.has('itemUnit'),
                        'unit-select': true
                      }" name="itemUnit" :placeholder="$t('Select a unit')" class="flex-grow-1" />
                      <UnitCreateModal @unitCreated="handleUnitCreated">
                        <div class="input-group-text create-btn">
                          <i class="fas fa-solid fa-plus-circle"></i>
                        </div>
                      </UnitCreateModal>
                    </div>
                    <has-error :form="form" field="itemUnit" />
                  </div>

                  <div class="form-group">
                    <label for="productTax">{{ $t("Tax Rate") }} <span class="required">*</span></label>
                    <v-select v-model="form.productTax" :options="taxes" label="code"
                      :class="{ 'is-invalid': form.errors.has('productTax') }" name="productTax"
                      :placeholder="$t('Select a tax')" @input="calculatePrice" />
                    <has-error :form="form" field="productTax" />
                  </div>
                </div>

                <!-- Right Column -->
                <div class="col-form-6">
                  <div class="form-group">
                    <label for="itemModel">{{ $t("Model") }}</label>
                    <input id="itemModel" v-model="form.itemModel" type="text" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('itemModel') }" name="itemModel"
                      :placeholder="$t('Enter a model')" />
                    <has-error :form="form" field="itemModel" />
                  </div>

                  <!-- Brand field temporarily commented out -->
                  <!-- <div class="form-group">
                    <label for="brand">{{ $t("Brand") }}</label>
                    <v-select v-model="form.brand" :options="brands" label="name"
                      :class="{ 'is-invalid': form.errors.has('brand') }" name="brand"
                      :placeholder="$t('Select a brand')" />
                    <has-error :form="form" field="brand" />
                  </div> -->

                  <div class="form-group">
                    <label for="regularPrice">{{ $t("Price") }} <span class="required">*</span></label>
                    <input id="regularPrice" v-model="form.regularPrice" type="number" step="any" min="0"
                      class="form-control" :class="{ 'is-invalid': form.errors.has('regularPrice') }"
                      name="regularPrice" :placeholder="$t('Enter price')" @change="calculatePrice"
                      @keyup="calculatePrice" @input="checkPurchasePriceWarning" @blur="checkPurchasePriceWarning" />
                    <has-error :form="form" field="regularPrice" />
                    <small v-if="showPurchasePriceWarning" class="text-warning d-block mt-1">
                      <i class="fas fa-exclamation-triangle"></i>
                      {{ $t("Warning: Purchase price is greater than selling price") }}
                    </small>
                  </div>

                  <div class="form-group" style="display: none;">
                    <label for="discount">{{ $t("Discount (%)") }}</label>
                    <input v-model="form.discount" type="number" min="0" max="100" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                      :placeholder="$t('Enter discount')" @change="calculatePrice" @keyup="calculatePrice" />
                    <has-error :form="form" field="discount" />
                  </div>

                  <div class="form-group">
                    <label for="sellingPrice">{{ $t("Final Price") }}</label>
                    <input id="sellingPrice" v-model="form.sellingPrice" type="number" class="form-control" readonly
                      :class="{ 'is-invalid': form.errors.has('sellingPrice') }" name="sellingPrice"
                      :placeholder="$t('Calculated automatically')" />
                    <has-error :form="form" field="sellingPrice" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Conditional Fields Section -->
          <div class="form-card" v-if="form.itemType === 'product'">
            <div class="card-header">
              <h5 class="section-title">
                <i class="fas fa-warehouse mr-2"></i>
                {{ $t("Stock Information") }}
              </h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-form-6">
                  <div class="form-group">
                    <label for="openingStockCount">{{ $t("Opening Stock") }}</label>
                    <input id="openingStockCount" v-model="form.openingStockCount" type="number" step="any" min="0"
                      class="form-control" :class="{ 'is-invalid': form.errors.has('openingStockCount') }"
                      name="openingStockCount" :placeholder="$t('Enter opening stock')" />
                    <has-error :form="form" field="openingStockCount" />
                  </div>
                </div>
                <div class="col-form-6">
                  <div class="form-group">
                    <label for="openingStockUnitPrice">{{ $t("Purchase Price") }}</label>
                    <input id="openingStockUnitPrice" v-model="form.openingStockUnitPrice" type="number" step="any"
                      min="0" class="form-control" :class="{ 'is-invalid': form.errors.has('openingStockUnitPrice') }"
                      name="openingStockUnitPrice" :placeholder="$t('Enter purchase price')"
                      @input="checkPurchasePriceWarning" @change="checkPurchasePriceWarning"
                      @blur="checkPurchasePriceWarning" />
                    <has-error :form="form" field="openingStockUnitPrice" />
                    <small v-if="showPurchasePriceWarning" class="text-warning d-block mt-1">
                      <i class="fas fa-exclamation-triangle"></i>
                      {{ $t("Warning: Purchase price is greater than selling price") }}
                    </small>
                  </div>
                </div>
              </div>
              <!-- Alert Quantity moved here to be in warehouse section -->
              <div class="row">
                <div class="col-form-6">
                  <div class="form-group">
                    <label for="alertQuantity">{{ $t("Alert Quantity") }}</label>
                    <input id="alertQuantity" v-model="form.alertQuantity" type="number" min="0" max="1000"
                      class="form-control" :class="{ 'is-invalid': form.errors.has('alertQuantity') }"
                      name="alertQuantity" :placeholder="$t('Enter alert quantity')" />
                    <has-error :form="form" field="alertQuantity" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <!-- Chart of Accounts Section -->
          <div class="form-card">
            <div class="card-header">
              <h5 class="section-title">
                <i class="fas fa-chart-line mr-2"></i>
                {{ $t("Chart of Accounts") }}
              </h5>
            </div>
            <div class="card-body">
              <!-- Override Automatic Routing Toggle Switches -->
              <div v-if="isSalesAccountAutomatic || isPurchaseAccountAutomatic" class="row mb-3">
                <div class="col-12">
                  <div class="alert alert-info d-flex align-items-center">
                    <i class="fas fa-info-circle mr-2"></i>
                    <span>
                      {{ $t("Accounts will be assigned automatically based on your settings.") }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-form-6">
                  <!-- Sales Account -->
                  <div class="form-group">
                    <div class="account-label-row">
                      <label for="salesAccountId" class="account-label">
                        {{ $t("Sales Account") }}
                        <span v-if="!isSalesAccountAutomatic || form.overrideSalesAccount" class="required">*</span>
                      </label>

                      <!-- Toggle Switch (shown when automatic routing is enabled) -->
                      <div v-if="isSalesAccountAutomatic" class="toggle-switch-container">
                        <label class="toggle-switch-label">
                          <span class="toggle-switch-wrapper">
                            <input type="checkbox" v-model="form.overrideSalesAccount" class="toggle-switch-input"
                              @change="onOverrideSalesAccountChange" />
                            <span class="toggle-switch-slider"></span>
                          </span>
                          <span class="toggle-switch-text">
                            {{ form.overrideSalesAccount ? $t("Manual") : $t("Automatic") }}
                          </span>
                        </label>
                      </div>
                    </div>

                    <!-- Manual Selection (shown when override is checked or not automatic) -->
                    <div v-if="!isSalesAccountAutomatic || form.overrideSalesAccount" class="form-group">
                      <div class="d-flex align-items-center">
                        <v-select v-model="form.salesAccountId" :options="chartOfAccounts" label="name"
                          :reduce="option => option.id" :class="{ 'is-invalid': form.errors.has('salesAccountId') }"
                          name="salesAccountId" :placeholder="$t('Select sales account')" class="flex-grow-1 mr-2"
                          required />
                        <!-- <button 
                          type="button" 
                          @click="autoAssignSalesAccount" 
                          :disabled="isAutoAssigningSales"
                          class="btn btn-outline-success btn-sm auto-assign-btn"
                          :title="$t('Auto-assign')"
                        >
                          <i v-if="isAutoAssigningSales" class="fas fa-spinner fa-spin"></i>
                          <i v-else class="fas fa-magic"></i>
                        </button> -->
                      </div>
                      <has-error :form="form" field="salesAccountId" />
                    </div>
                  </div>
                </div>

                <div class="col-form-6">
                  <!-- Purchase Account -->
                  <div class="form-group">
                    <div class="account-label-row">
                      <label for="purchaseAccountId" class="account-label">
                        {{ $t("Purchase Account") }}
                        <span v-if="!isPurchaseAccountAutomatic || form.overridePurchaseAccount"
                          class="required">*</span>
                      </label>

                      <!-- Toggle Switch (shown when automatic routing is enabled) -->
                      <div v-if="isPurchaseAccountAutomatic" class="toggle-switch-container">
                        <label class="toggle-switch-label">
                          <span class="toggle-switch-wrapper">
                            <input type="checkbox" v-model="form.overridePurchaseAccount" class="toggle-switch-input"
                              @change="onOverridePurchaseAccountChange" />
                            <span class="toggle-switch-slider"></span>
                          </span>
                          <span class="toggle-switch-text">
                            {{ form.overridePurchaseAccount ? $t("Manual") : $t("Automatic") }}
                          </span>
                        </label>
                      </div>
                    </div>

                    <!-- Manual Selection (shown when override is checked or not automatic) -->
                    <div v-if="!isPurchaseAccountAutomatic || form.overridePurchaseAccount" class="form-group">
                      <div class="d-flex align-items-center">
                        <v-select v-model="form.purchaseAccountId" :options="chartOfAccounts" label="name"
                          :reduce="option => option.id" :class="{ 'is-invalid': form.errors.has('purchaseAccountId') }"
                          name="purchaseAccountId" :placeholder="$t('Select purchase account')" class="flex-grow-1 mr-2"
                          required />
                        <!-- <button 
                          type="button" 
                          @click="autoAssignPurchaseAccount" 
                          :disabled="isAutoAssigningPurchase"
                          class="btn btn-outline-info btn-sm auto-assign-btn"
                          :title="$t('Auto-assign')"
                        >
                          <i v-if="isAutoAssigningPurchase" class="fas fa-spinner fa-spin"></i>
                          <i v-else class="fas fa-magic"></i>
                        </button> -->
                      </div>
                      <has-error :form="form" field="purchaseAccountId" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Details Section -->
          <div class="form-card">
            <div class="card-header">
              <h5 class="section-title">
                <i class="fas fa-plus-circle mr-2"></i>
                {{ $t("Additional Details") }}
              </h5>
            </div>
            <div class="card-body">
              <!-- Status and Image in one row -->
              <div class="row">
                <div class="col-form-6">
                  <div class="form-group">
                    <label for="status">{{ $t("Status") }}</label>
                    <select id="status" v-model="form.status" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('status') }">
                      <option value="1">{{ $t("Active") }}</option>
                      <option value="0">{{ $t("Inactive") }}</option>
                    </select>
                    <has-error :form="form" field="status" />
                  </div>
                </div>

                <div class="col-form-6">
                  <div class="form-group">
                    <label for="image">{{ $t("Image") }}</label>
                    <div class="custom-file">
                      <input id="image" type="file" class="custom-file-input" name="image"
                        :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange" />
                      <label class="custom-file-label" for="image">
                        <i class="fas fa-upload"></i> {{ $t("Upload") }}
                      </label>
                    </div>
                    <has-error :form="form" field="image" />

                    <!-- Image preview -->
                    <div class="image-preview mt-2" v-if="url">
                      <img :src="url" class="img-fluid rounded" :alt="$t('Product Image')" style="max-height: 80px;" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Notes take full row -->
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="note">{{ $t("Notes") }}</label>
                    <textarea id="note" v-model="form.note" class="form-control" rows="3"
                      :class="{ 'is-invalid': form.errors.has('note') }" name="note"
                      :placeholder="$t('Add any additional notes...')"></textarea>
                    <has-error :form="form" field="note" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div slot="modal-footer">
        <button @click="submitItem($event)" :loading="form.busy" class="btn btn-success">
          <i class="fas fa-save" /> {{ $t("Save") }}
        </button>
      </div>
    </VModal>
    <a @click="toggleModal" class="create-button">
      <slot></slot>
    </a>
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
import Swal from 'sweetalert2'
import { mapGetters } from 'vuex'
import CategorySubcategoryCreateModal from '~/components/CategorySubcategoryCreateModal'
import UnitCreateModal from '~/components/UnitCreateModal'

const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})

export default {
  components: {
    CategorySubcategoryCreateModal,
    UnitCreateModal,
  },
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Product") };
  },
  data: () => ({
    showProductCreateModal: false,
    form: new Form({
      itemType: "product",
      itemName: "",
      itemCode: "",
      itemModel: "",
      barcodeSymbology: "CODE128",
      subCategory: "",
      brand: "",
      itemUnit: "",
      productTax: "",
      taxType: "Exclusive",
      regularPrice: "",
      servicePurchasePrice: "",
      openingStockCount: "",
      openingStockUnitPrice: "",
      purchasePrice: "",
      isOpeningStock: false,
      discount: "",
      sellingPrice: "",
      taxAmount: "",
      note: "",
      alertQuantity: 1,
      status: 1,
      image: "",
      salesAccountId: "",
      purchaseAccountId: "",
      overrideSalesAccount: false,
      overridePurchaseAccount: false,
    }),
    categories: [],
    options: [],
    units: [],
    brands: [],
    taxes: [],
    chartOfAccounts: [],
    prefix: "",
    url: null,
    isAutoAssigningSales: false,
    isAutoAssigningPurchase: false,
    accountRoutingSettings: null,
    isSalesAccountAutomatic: false,
    isPurchaseAccountAutomatic: false,
    showPurchasePriceWarning: false,
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
  },
  watch: {
    'form.openingStockUnitPrice': {
      handler(newPrice) {
        if (this.form.itemType === 'product') {
          // Use setTimeout to ensure value is updated in form
          setTimeout(() => {
            this.checkPurchasePriceWarning()
          }, 200)
        }
      },
      immediate: false
    },
    'form.regularPrice': {
      handler(newPrice) {
        if (this.form.itemType === 'product') {
          // Use setTimeout to ensure value is updated in form
          setTimeout(() => {
            this.checkPurchasePriceWarning()
          }, 200)
        }
      },
      immediate: false
    },
    'form.itemType': {
      handler(newType) {
        // Check when item type changes to product
        if (newType === 'product') {
          setTimeout(() => {
            this.checkPurchasePriceWarning()
          }, 200)
        }
      },
      immediate: false
    }
  },
  created() {
    this.getSubCategories();
    this.getUnits();
    // this.getBrands(); // Temporarily commented out
    this.getTaxes();
    this.getItemCode();
    this.loadChartOfAccounts();
    this.loadAccountRoutingSettings();
  },
  methods: {

    toggleModal() {
      this.showProductCreateModal = !this.showProductCreateModal

      // When opening the modal, ensure account routing settings are loaded and generate item code
      if (this.showProductCreateModal) {
        this.loadAccountRoutingSettings();
        this.getItemCode(); // Generate product code when modal opens
      }
    },

    submitItem(evt) {
      evt.preventDefault();
      this.saveProduct();
    },

    // Load chart of accounts for sales and purchase account selection
    async loadChartOfAccounts() {
      try {
        const { data } = await axios.get(window.location.origin + "/api/products/chart-of-accounts");
        this.chartOfAccounts = data || [];
      } catch (error) {
        console.error("Error loading chart of accounts:", error);
        this.chartOfAccounts = [];
      }
    },

    // Load account routing settings
    async loadAccountRoutingSettings() {
      try {
        const response = await axios.get(window.location.origin + "/api/account-routing-settings/product-account-routing");
        this.accountRoutingSettings = response.data.data || {};

        // Set flags for automatic routing
        this.isSalesAccountAutomatic = this.accountRoutingSettings.sales &&
          this.accountRoutingSettings.sales.routing_type === 'automatic';

        this.isPurchaseAccountAutomatic = this.accountRoutingSettings.purchase &&
          this.accountRoutingSettings.purchase.routing_type === 'automatic';

        // If automatic routing is enabled, set the account IDs from routing settings
        if (this.isSalesAccountAutomatic && this.accountRoutingSettings.sales.main_account_id) {
          this.form.salesAccountId = this.accountRoutingSettings.sales.main_account_id;
        }

        if (this.isPurchaseAccountAutomatic && this.accountRoutingSettings.purchase.main_account_id) {
          this.form.purchaseAccountId = this.accountRoutingSettings.purchase.main_account_id;
        }

        console.log('=== ACCOUNT ROUTING DEBUG ===');
        console.log('Full account routing settings:', this.accountRoutingSettings);
        console.log('Sales settings:', this.accountRoutingSettings.sales);
        console.log('Purchase settings:', this.accountRoutingSettings.purchase);
        console.log('Sales routing type:', this.accountRoutingSettings.sales?.routing_type);
        console.log('Sales main_account_id:', this.accountRoutingSettings.sales?.main_account_id);
        console.log('Purchase routing type:', this.accountRoutingSettings.purchase?.routing_type);
        console.log('Purchase main_account_id:', this.accountRoutingSettings.purchase?.main_account_id);
        console.log('isSalesAccountAutomatic:', this.isSalesAccountAutomatic);
        console.log('isPurchaseAccountAutomatic:', this.isPurchaseAccountAutomatic);
        console.log('Form salesAccountId after auto-assignment:', this.form.salesAccountId);
        console.log('Form purchaseAccountId after auto-assignment:', this.form.purchaseAccountId);
        console.log('==============================');
      } catch (error) {
        console.error("Error loading account routing settings:", error);
        // Set defaults if API fails
        this.isSalesAccountAutomatic = false;
        this.isPurchaseAccountAutomatic = false;
      }
    },

    // get all product categories
    async getSubCategories() {
      const { data } = await this.form.get(
        window.location.origin + "/api/all-product-sub-categories"
      );
      this.categories = data.data;
    },
    // Handle category created event
    async handleCategoryCreated() {
      // Refresh categories list (this includes subcategories which are what we display)
      await this.getSubCategories();
      // Note: Categories are parent categories, but we display subcategories in the dropdown
      // So we just refresh the list - the new category will be available for creating subcategories
    },
    // Handle subcategory created event
    async handleSubcategoryCreated(createdSubcategory) {
      // Refresh categories list (subcategories are what we display)
      await this.getSubCategories();
      // Auto-select the newly created subcategory in the dropdown
      if (createdSubcategory && createdSubcategory.name) {
        // Use $nextTick to ensure the categories array is updated after refresh
        await this.$nextTick();
        // Find the newly created subcategory in the refreshed list by name
        const newSubcategory = this.categories.find(
          cat => cat.name === createdSubcategory.name
        );
        if (newSubcategory) {
          this.form.subCategory = newSubcategory;
        }
      }
    },
    // Handle unit created event
    async handleUnitCreated(createdUnit) {
      // Refresh units list
      await this.getUnits();
      // Auto-select the newly created unit in the dropdown
      if (createdUnit && createdUnit.name) {
        // Use $nextTick to ensure the units array is updated after refresh
        await this.$nextTick();
        // Find the newly created unit in the refreshed list by name or code
        const newUnit = this.units.find(
          unit => unit.name === createdUnit.name || unit.code === createdUnit.code
        );
        if (newUnit) {
          this.form.itemUnit = newUnit;
        }
      }
    },
    // get all brands
    async getBrands() {
      const { data } = await axios.get(window.location.origin + "/api/all-brands");
      this.brands = data.data;
    },
    // get all units
    async getUnits() {
      const { data } = await axios.get(window.location.origin + "/api/all-units");
      this.units = data.data;
    },
    // get all taxes
    async getTaxes() {
      const { data } = await axios.get(window.location.origin + "/api/all-vat-rates");
      this.taxes = data.data;
      // assign default vat rate
      if (this.taxes && this.taxes.length > 0) {
        let defaultVatRateSlug = this.appInfo.defaultVatRateSlug;
        this.form.productTax = this.taxes.find(tax => tax.slug === defaultVatRateSlug);
      }
      this.calculatePrice();
    },
    // get item code
    async getItemCode() {
      const { data } = await axios.get(window.location.origin + "/api/generate-itemcode");
      this.form.itemCode = data.code;
      this.prefix = data.prefix;
    },
    // calculate selling price
    calculatePrice() {
      // Reset values if required fields are missing
      if (!this.form.regularPrice || !this.form.productTax || !this.form.productTax.rate) {
        this.form.taxAmount = "";
        this.form.sellingPrice = this.form.regularPrice || "";
        return;
      }

      const regularPrice = parseFloat(this.form.regularPrice) || 0;
      const taxRate = parseFloat(this.form.productTax.rate) || 0;

      // Calculate taxAmount = regularPrice * (taxRate / 100)
      const taxAmount = regularPrice * (taxRate / 100);
      this.form.taxAmount = parseFloat(taxAmount.toFixed(2));

      // Calculate sellingPrice = regularPrice + taxAmount
      const sellingPrice = regularPrice + taxAmount;
      this.form.sellingPrice = parseFloat(sellingPrice.toFixed(2));
    },
    // Check if purchase price is greater than regular price
    checkPurchasePriceWarning() {
      // Only check for products, not services
      if (this.form.itemType !== 'product') {
        this.showPurchasePriceWarning = false
        return
      }

      // Get values directly from form
      const purchasePriceStr = String(this.form.openingStockUnitPrice || '').trim()
      const regularPriceStr = String(this.form.regularPrice || '').trim()

      // Convert to numbers
      const purchasePrice = purchasePriceStr ? parseFloat(purchasePriceStr) : 0
      const regularPrice = regularPriceStr ? parseFloat(regularPriceStr) : 0

      // Show warning if both prices are valid numbers and purchase price is greater than regular price
      if (!isNaN(purchasePrice) && !isNaN(regularPrice) && purchasePrice > 0 && regularPrice > 0 && purchasePrice > regularPrice) {
        this.showPurchasePriceWarning = true
      } else {
        this.showPurchasePriceWarning = false
      }
    },
    // vue file upload
    onFileChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (file.size < 2111775 &&
        (file.type === "image/jpeg" ||
          file.type === "image/png" ||
          file.type === "image/gif")) {
        reader.onloadend = () => {
          this.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      }
      else {
        this.$toast.error(this.$t("Error!"), this.$t("Please select a valid thumbnail with size less than 2 MB"));
      }
    },
    // save product
    async saveProduct() {
      // Ensure product code is generated before submission
      if (!this.form.itemCode) {
        await this.getItemCode();
      }

      // Ensure price calculation is up-to-date before submission
      this.calculatePrice();

      // For products, ensure purchasePrice is set from openingStockUnitPrice
      // This ensures purchase_price is saved correctly in the database
      if (this.form.itemType === 'product') {
        const openingStockUnitPrice = parseFloat(this.form.openingStockUnitPrice) || 0;
        const openingStockCount = parseFloat(this.form.openingStockCount) || 0;

        // Set purchasePrice to openingStockUnitPrice for products
        // The backend uses openingStockUnitPrice to set purchase_price, but we also send purchasePrice
        // to ensure it's available in the payload for inventory adjustments
        this.form.purchasePrice = openingStockUnitPrice;

        // IMPORTANT: Set isOpeningStock flag to true if there's a purchase price OR opening stock
        // This ensures the backend will use openingStockUnitPrice to set purchase_price
        // The backend only sets purchase_price from openingStockUnitPrice when isOpeningStock is true
        // (See ProductController.php line 147-150 and 218)
        // Note: Backend validation requires openingStockCount >= 1 when isOpeningStock is true
        if (openingStockUnitPrice > 0) {
          this.form.isOpeningStock = true;
          // Ensure openingStockCount is set to at least 1 when we have a purchase price
          // (Backend validation requires min:1 when isOpeningStock is true)
          if (this.form.openingStockCount === "" || this.form.openingStockCount === null || openingStockCount === 0) {
            this.form.openingStockCount = openingStockCount > 0 ? openingStockCount : 1;
          }
        } else if (openingStockCount > 0) {
          this.form.isOpeningStock = true;
          // If there's opening stock but no purchase price, set a default purchase price
          if (!openingStockUnitPrice || openingStockUnitPrice === 0) {
            // You might want to set a default or use regularPrice as fallback
            // For now, we'll leave it as is and let the user enter it
          }
        } else {
          this.form.isOpeningStock = false;
        }
      }

      // Validate required fields based on item type
      if (this.form.itemType === 'service' && !this.form.servicePurchasePrice) {
        toast.fire({
          type: "error",
          title: this.$t("Service Purchase Price is required for services")
        });
        return;
      }

      // Debug: Log validation state
      console.log("Validation state:", {
        isSalesAccountAutomatic: this.isSalesAccountAutomatic,
        overrideSalesAccount: this.form.overrideSalesAccount,
        salesAccountId: this.form.salesAccountId,
        isPurchaseAccountAutomatic: this.isPurchaseAccountAutomatic,
        overridePurchaseAccount: this.form.overridePurchaseAccount,
        purchaseAccountId: this.form.purchaseAccountId
      });

      // Validate sales account - required if not automatic OR if override is checked
      const needsSalesAccount = !this.isSalesAccountAutomatic || this.form.overrideSalesAccount;
      if (needsSalesAccount && !this.form.salesAccountId) {
        toast.fire({
          type: "error",
          title: this.$t("Sales Account is required")
        });
        return;
      }

      // Validate purchase account - required if not automatic OR if override is checked
      const needsPurchaseAccount = !this.isPurchaseAccountAutomatic || this.form.overridePurchaseAccount;
      if (needsPurchaseAccount && !this.form.purchaseAccountId) {
        toast.fire({
          type: "error",
          title: this.$t("Purchase Account is required")
        });
        return;
      }

      // Debug: Log form data being sent
      console.log("=== FORM SUBMISSION DEBUG ===");
      console.log("Form data being sent:", this.form.data());
      console.log("Purchase Price (openingStockUnitPrice):", this.form.openingStockUnitPrice);
      console.log("Purchase Price (purchasePrice):", this.form.purchasePrice);
      console.log("Is Opening Stock (isOpeningStock):", this.form.isOpeningStock);
      console.log("Opening Stock Count:", this.form.openingStockCount);
      console.log("Account routing settings:", this.accountRoutingSettings);
      console.log("Sales settings:", this.accountRoutingSettings.sales);
      console.log("Purchase settings:", this.accountRoutingSettings.purchase);
      console.log("Sales routing type:", this.accountRoutingSettings.sales?.routing_type);
      console.log("Sales main_account_id:", this.accountRoutingSettings.sales?.main_account_id);
      console.log("Form salesAccountId:", this.form.salesAccountId);
      console.log("Form purchaseAccountId:", this.form.purchaseAccountId);
      console.log("=============================");

      await this.form
        .post(window.location.origin + "/api/products")
        .then(async (response) => {
          toast.fire({
            type: "success",
            title: this.$t("Product added successfully"),
          });

          // Store opening stock values before reset
          const openingStockCount = parseFloat(this.form.openingStockCount) || 0;
          const openingStockUnitPrice = parseFloat(this.form.openingStockUnitPrice) || 0;
          // Get purchasePrice from form (set before submission) or fallback to openingStockUnitPrice
          const purchasePrice = parseFloat(this.form.purchasePrice) || openingStockUnitPrice || 0;

          // Emit the newly created product data
          if (response.data && response.data.data) {
            const newProduct = response.data.data;
            // Format the product data to match the expected structure for v-select
            const formattedProduct = {
              id: newProduct.id,
              slug: newProduct.slug,
              name: newProduct.name,
              code: newProduct.code,
              label: `${newProduct.name} [${newProduct.code}]`,
              itemType: newProduct.itemType,
              itemModel: newProduct.itemModel || '',
              avgPurchasePrice: newProduct.avgPurchasePrice || 0,
              regularPrice: newProduct.regularPrice || 0,
              priceWithDiscount: newProduct.sellingPrice,
              sellingPrice: newProduct.sellingPrice,
              taxAmount: newProduct.taxAmount || 0,
              taxType: newProduct.taxType,
              taxRate: newProduct.taxRate,
              productTax: newProduct.productTax,
              inventoryCount: newProduct.inventoryCount || 0,
              image: newProduct.image || '',
              sales_account_id: newProduct.sales_account_id,
              purchase_account_id: newProduct.purchase_account_id
            };
            this.$emit('productCreated', formattedProduct);

            // Create inventory adjustment if opening stock exists and item type is product
            if (newProduct.itemType === 'product' && openingStockCount > 0 && newProduct.slug) {
              try {
                // Use purchasePrice (from form) or openingStockUnitPrice, with fallback to product's avgPurchasePrice
                const adjustmentPurchasePrice = purchasePrice > 0
                  ? purchasePrice
                  : (openingStockUnitPrice > 0
                    ? openingStockUnitPrice
                    : (newProduct.avgPurchasePrice || 0));

                await this.createInventoryAdjustment({
                  productSlug: newProduct.slug,
                  quantity: openingStockCount,
                  purchasePrice: adjustmentPurchasePrice
                });
              } catch (adjustmentError) {
                // Log error but don't block the product creation success
                console.error("Error creating inventory adjustment:", adjustmentError);
                toast.fire({
                  type: "warning",
                  title: this.$t("Product created, but inventory adjustment failed"),
                  text: adjustmentError.response?.data?.message || this.$t("Please create the adjustment manually.")
                });
              }
            }
          }

          // Store auto-assigned account IDs before reset
          const autoAssignedSalesAccountId = this.isSalesAccountAutomatic ? this.form.salesAccountId : null;
          const autoAssignedPurchaseAccountId = this.isPurchaseAccountAutomatic ? this.form.purchaseAccountId : null;

          this.form.reset();
          this.form.itemType = "product"; // Reset to default
          this.form.overrideSalesAccount = false; // Reset override flags
          this.form.overridePurchaseAccount = false;

          // Restore auto-assigned account IDs after reset
          if (autoAssignedSalesAccountId) {
            this.form.salesAccountId = autoAssignedSalesAccountId;
          }
          if (autoAssignedPurchaseAccountId) {
            this.form.purchaseAccountId = autoAssignedPurchaseAccountId;
          }

          this.showProductCreateModal = false;
          this.$emit('reloadProducts');
        })
        .catch((error) => {
          console.error("Error creating product:", error);

          // Check if this is a validation error (status 422)
          const status = error && error.response && error.response.status
          const serverErrors = error && error.response && error.response.data && error.response.data.errors

          if (status === 422 && serverErrors) {
            // Show toast notification for validation errors
            toast.fire({
              type: 'error',
              title: this.$t('Validation Error'),
              text: this.$t('Please check the form for errors and try again.'),
            })

            // Scroll to the first invalid input after DOM updates
            this.$nextTick(() => {
              // Wait a bit more to ensure vform has added the is-invalid class
              setTimeout(() => {
                const invalid = this.$el.querySelector('.is-invalid')
                if (invalid && typeof invalid.scrollIntoView === 'function') {
                  invalid.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
              }, 100)
            })
          } else {
            // For other errors, show generic error message
            const errorMessage = error.response?.data?.message || this.$t("Please check your input and try again.");
            toast.fire({ type: "error", title: errorMessage });
          }
        });
    },

    // Create inventory adjustment for opening stock
    async createInventoryAdjustment({ productSlug, quantity, purchasePrice }) {
      const adjustmentForm = new Form({
        adjustmentReason: this.$t("Opening Stock"),
        adjustmentDate: new Date().toISOString().slice(0, 10),
        note: this.$t("Initial inventory count for new product"),
        status: 1,
        selectedProducts: [
          {
            slug: productSlug,
            adjustType: "Increment",
            adjustQty: quantity,
            purchasePrice: purchasePrice
          }
        ]
      });

      try {
        const response = await adjustmentForm.post(
          window.location.origin + "/api/inventory-adjustments"
        );

        toast.fire({
          type: "success",
          title: this.$t("Inventory adjustment created successfully"),
        });

        return response;
      } catch (error) {
        console.error("Error creating inventory adjustment:", error);
        throw error;
      }
    },

    // Auto-assign sales account
    async autoAssignSalesAccount() {
      if (this.isAutoAssigningSales) {
        return;
      }
      this.isAutoAssigningSales = true;

      try {
        // For new products, we need to simulate the auto-assignment logic
        // since the product doesn't exist in the database yet
        let defaultAccount = null;

        if (this.form.itemType === 'product') {
          // Look for "Sales of Goods" or similar
          defaultAccount = this.chartOfAccounts.find(account =>
            account.name.toLowerCase().includes('sales') &&
            (account.name.toLowerCase().includes('goods') || account.name.toLowerCase().includes('product'))
          );
        } else if (this.form.itemType === 'service') {
          // Look for "Sales of Services" or similar
          defaultAccount = this.chartOfAccounts.find(account =>
            account.name.toLowerCase().includes('sales') &&
            account.name.toLowerCase().includes('service')
          );
        }

        // Fallback to any Sales account
        if (!defaultAccount) {
          defaultAccount = this.chartOfAccounts.find(account =>
            account.name.toLowerCase().includes('sales')
          );
        }

        // Final fallback to any active account
        if (!defaultAccount && this.chartOfAccounts.length > 0) {
          defaultAccount = this.chartOfAccounts[0];
        }

        if (defaultAccount) {
          this.form.salesAccountId = defaultAccount.id;
          toast.fire({
            type: "success",
            title: this.$t("Sales Account auto-assigned successfully"),
          });
        } else {
          toast.fire({
            type: "error",
            title: this.$t("No suitable Sales Account found for automatic assignment"),
          });
        }
      } catch (error) {
        console.error("Error auto-assigning sales account:", error);
        toast.fire({
          type: "error",
          title: this.$t("Failed to auto-assign Sales Account"),
        });
      } finally {
        this.isAutoAssigningSales = false;
      }
    },

    // Auto-assign purchase account
    async autoAssignPurchaseAccount() {
      if (this.isAutoAssigningPurchase) {
        return;
      }
      this.isAutoAssigningPurchase = true;

      try {
        // For new products, we need to simulate the auto-assignment logic
        // since the product doesn't exist in the database yet
        let defaultAccount = null;

        if (this.form.itemType === 'product') {
          // Look for "Cost of Goods Sold" or similar
          defaultAccount = this.chartOfAccounts.find(account =>
            account.name.toLowerCase().includes('cost') &&
            (account.name.toLowerCase().includes('goods') || account.name.toLowerCase().includes('product'))
          );
        } else if (this.form.itemType === 'service') {
          // Look for "Cost of Services" or similar
          defaultAccount = this.chartOfAccounts.find(account =>
            account.name.toLowerCase().includes('cost') &&
            account.name.toLowerCase().includes('service')
          );
        }

        // Fallback to any Cost account
        if (!defaultAccount) {
          defaultAccount = this.chartOfAccounts.find(account =>
            account.name.toLowerCase().includes('cost')
          );
        }

        // Final fallback to any active account
        if (!defaultAccount && this.chartOfAccounts.length > 0) {
          defaultAccount = this.chartOfAccounts[0];
        }

        if (defaultAccount) {
          this.form.purchaseAccountId = defaultAccount.id;
          toast.fire({
            type: "success",
            title: this.$t("Purchase Account auto-assigned successfully"),
          });
        } else {
          toast.fire({
            type: "error",
            title: this.$t("No suitable Purchase Account found for automatic assignment"),
          });
        }
      } catch (error) {
        console.error("Error auto-assigning purchase account:", error);
        toast.fire({
          type: "error",
          title: this.$t("Failed to auto-assign Purchase Account"),
        });
      } finally {
        this.isAutoAssigningPurchase = false;
      }
    },

    // Handle Select it manually checkbox change
    onOverrideSalesAccountChange() {
      if (this.form.overrideSalesAccount) {
        // When overriding, clear the current account selection to force manual selection
        this.form.salesAccountId = "";
      } else {
        // When not overriding and automatic is enabled, restore the automatic account
        if (this.isSalesAccountAutomatic && this.accountRoutingSettings.sales.main_account_id) {
          this.form.salesAccountId = this.accountRoutingSettings.sales.main_account_id;
        }
      }
    },

    // Handle Select it manually checkbox change
    onOverridePurchaseAccountChange() {
      if (this.form.overridePurchaseAccount) {
        // When overriding, clear the current account selection to force manual selection
        this.form.purchaseAccountId = "";
      } else {
        // When not overriding and automatic is enabled, restore the automatic account
        if (this.isPurchaseAccountAutomatic && this.accountRoutingSettings.purchase.main_account_id) {
          this.form.purchaseAccountId = this.accountRoutingSettings.purchase.main_account_id;
        }
      }
    },
  },
}
</script>

<style scoped>
/* Form Card Styling - Match Client Form */
.form-card {
  margin-top: 20px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
  background: #fff;
  margin-bottom: 1.25rem;
  transition: all 0.2s ease;
}

.form-card:hover {
  box-shadow: 0 0.1rem 0.5rem 0 rgba(58, 59, 69, 0.15);
}

.form-card .card-header {
  background-color: #33a0d9;
  color: #ffffff;
  border-radius: 20px 20px 0 0;
  padding: 12px 16px;
  border-bottom: none;
}

.form-card .card-header .section-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  border: none;
  padding: 0;
}

.form-card .card-header .section-title::after {
  display: none;
}

.form-card .card-header .section-title i {
  color: rgba(255, 255, 255, 0.8);
}

.form-card .card-body {
  padding: 16px;
}

/* Enhanced Section Title Styling */
.section-title {
  color: #495057;
  font-weight: 600;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e9ecef;
}

/* Form Groups - Balanced */
.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

/* Required field styling */
.required {
  color: #dc3545;
  font-weight: bold;
}

/* Better spacing between sections */
.row {
  margin-bottom: 1rem;
}

.row:last-child {
  margin-bottom: 0;
}

/* Button styling */
.auto-assign-btn {
  min-width: 40px;
  white-space: nowrap;
  padding: 0.375rem 0.5rem;
}

.auto-assign-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Form text styling */
.form-text {
  font-size: 0.8rem;
  color: #6c757d;
  margin-top: 3px;
}

/* Image preview styling */
.image-preview {
  text-align: center;
}

.image-preview img {
  border: 1px solid #dee2e6;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Custom file input styling */
.custom-file-label {
  border: 1px dashed #dee2e6;
  background-color: #f8f9fa;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.85rem;
}

.custom-file-label:hover {
  border-color: #007bff;
  background-color: #e3f2fd;
}

.custom-file-label i {
  color: #6c757d;
}

/* Create button styling */
.create-button {
  text-decoration: none;
  cursor: pointer;
}

.create-btn {
  padding: 11px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-left: none;
  border-radius: 0 0.25rem 0.25rem 0;
}

.create-btn:hover {
  background-color: #e9ecef;
}

/* Category select with create button styling */
.category-select {
  margin-right: 0 !important;
}

.category-select .vs__dropdown-toggle {
  border-right: none !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}

[dir="rtl"] .category-select .vs__dropdown-toggle {
  border-right: 1px solid #ced4da !important;
  border-left: none !important;
  border-radius: 0 0.25rem 0.25rem 0 !important;
}

/* RTL adjustments for create button */
[dir="rtl"] .create-btn {
  border-left: none;
  border-right: 1px solid #ced4da;
  border-radius: 0.25rem 0 0 0.25rem;
}

[dir="ltr"] .create-btn {
  border-left: 1px solid #ced4da;
  border-right: none;
  border-radius: 0 0.25rem 0.25rem 0;
}

/* Unit select with create button styling */
.unit-select {
  margin-right: 0 !important;
}

.unit-select .vs__dropdown-toggle {
  border-right: none !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}

[dir="rtl"] .unit-select .vs__dropdown-toggle {
  border-right: 1px solid #ced4da !important;
  border-left: none !important;
  border-radius: 0 0.25rem 0.25rem 0 !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-title {
    font-size: 0.95rem;
    margin-bottom: 12px;
  }

  .form-card .card-body {
    padding: 0.75rem;
  }

  .auto-assign-btn {
    min-width: 35px;
    font-size: 0.75rem;
  }
}

/* Input group styling */
.input-group-prepend .input-group-text {
  background-color: #f8f9fa;
  border-color: #ced4da;
  color: #495057;
  font-size: 0.85rem;
}

/* V-select styling */
.v-select {
  margin-bottom: 0;
}

/* Error styling */
.is-invalid {
  border-color: #dc3545 !important;
}

.invalid-feedback {
  display: block;
  width: 100%;
  margin-top: 0.2rem;
  font-size: 75%;
  color: #dc3545;
}

/* Beautiful Item Type Selector - Balanced */
.item-type-selector {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.item-type-option {
  flex: 1;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
}

.item-type-option input[type="radio"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.option-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.75rem;
  background: #ffffff;
  border: 2px solid #e3e6f0;
  border-radius: 8px;
  text-align: center;
  transition: all 0.2s ease;
  min-height: 70px;
}

.item-type-option:hover .option-content {
  border-color: #33a0d9;
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(51, 160, 217, 0.15);
}

.item-type-option.active .option-content {
  border-color: #33a0d9;
  background: #33a0d9;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 3px 10px rgba(51, 160, 217, 0.25);
}

.option-content i {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #6c757d;
  transition: all 0.2s ease;
}

.item-type-option.active .option-content i {
  color: rgba(255, 255, 255, 0.9);
}

.option-content span {
  font-weight: 600;
  font-size: 0.9rem;
  color: #495057;
  transition: all 0.2s ease;
}

.item-type-option.active .option-content span {
  color: white;
}

/* Responsive adjustments for item type selector */
@media (max-width: 768px) {
  .item-type-selector {
    flex-direction: column;
    gap: 0.5rem;
  }

  .option-content {
    padding: 0.75rem 0.5rem;
    min-height: 60px;
  }

  .option-content i {
    font-size: 1.25rem;
    margin-bottom: 0.4rem;
  }

  .option-content span {
    font-size: 0.85rem;
  }

  /* Mobile checkbox adjustments */
  .override-checkbox-container .form-check-label {
    min-height: 44px;
    padding: 0.6rem 0.8rem;
  }

  .checkbox-text {
    font-size: 0.9rem;
  }

  .form-check-input {
    width: 16px;
    height: 16px;
  }
}

/* Account Label Styling */
.account-label-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  gap: 1rem;
  flex-direction: column;
}

.account-label {
  font-weight: 500;
  color: #495057;
  font-size: 0.95rem;
  margin-bottom: 0;
  flex: 1;
}

/* Toggle Switch Styling */
.toggle-switch-container {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.toggle-switch-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 0.75rem;
}

.toggle-switch-wrapper {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
  flex-shrink: 0;
}

.toggle-switch-input {
  position: absolute;
  width: 50px;
  height: 26px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #ced4da;
  border-radius: 26px;
  outline: none;
  transition: background-color 0.3s ease;
  cursor: pointer;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
}

.toggle-switch-input:checked {
  background-color: #33a0d9;
}

.toggle-switch-input:focus {
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

.toggle-switch-slider {
  position: absolute;
  top: 50%;
  left: 3px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border-radius: 50%;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}

.toggle-switch-input:checked+.toggle-switch-slider {
  transform: translate(24px, -50%);
}

.toggle-switch-text {
  font-size: 0.9rem;
  font-weight: 500;
  color: #495057;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.toggle-switch-label:has(.toggle-switch-input:checked) .toggle-switch-text {
  color: #33a0d9;
  font-weight: 600;
}

/* Alert styling for override info */
.alert-info {
  background-color: #d1ecf1;
  border-color: #bee5eb;
  color: #0c5460;
  font-size: 0.9rem;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
}

.alert-info i {
  color: #0c5460;
}

/* Custom column class for form layout */
.col-form-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

/* When width is 1300px or less, make col-form-6 take full width */
@media (max-width: 1300px) {
  .col-form-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
