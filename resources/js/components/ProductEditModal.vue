<template>
  <div>
    <!-- Render the slot content (trigger button) -->
    <div @click="product && openModal()" :style="{ cursor: product ? 'pointer' : 'not-allowed' }">
      <slot></slot>
    </div>
    
    <VModal v-model="showProductEditModal" @close="showProductEditModal = false" size="lg">
      <template v-slot:title>{{ $t("Edit Product") }}</template>
      <div class="w-100">
        <!-- Loading spinner -->
        <div v-if="isLoading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">{{ $t('Loading...') }}</span>
          </div>
          <p class="mt-3 text-muted">{{ $t('Loading product data...') }}</p>
        </div>
        
        <!-- form start -->
        <form v-else role="form" @submit.prevent="updateProduct" @keydown="form.onKeydown($event)">
          <div class="row">
            <!-- Item Type Selection -->
            <div class="form-group col-md-12">
              <label>{{ $t("Item Type") }} <span class="required">*</span></label>
              <div class="btn-group btn-group-toggle w-100" data-toggle="buttons">
                <label 
                  class="btn btn-outline-custom"
                  :class="{ 'btn-custom-active': form.itemType === 'product' }">
                  <input type="radio" id="product" name="itemType" v-model="form.itemType" value="product" autocomplete="off">
                  {{ $t("Product") }}
                </label>
                <label 
                  class="btn btn-outline-custom"
                  :class="{ 'btn-custom-active': form.itemType === 'service' }">
                  <input type="radio" id="service" name="itemType" v-model="form.itemType" value="service" autocomplete="off">
                  {{ $t("Service") }}
                </label>
              </div>
              <has-error :form="form" field="itemType" />
            </div>

            <div class="form-group col-6">
              <label for="itemName">{{ $t("Item Name") }}
                <span class="required">*</span></label>
              <input id="itemName" v-model="form.itemName" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('itemName') }" name="itemName"
                :placeholder="$t('Enter a name')" />
              <has-error :form="form" field="itemName" />
            </div>
            
            <div class="form-group col-12">
              <label for="itemModel">{{ $t("Item Model") }}</label>
              <input id="itemModel" v-model="form.itemModel" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('itemModel') }" name="itemModel"
                :placeholder="$t('Enter a model')" />
              <has-error :form="form" field="itemModel" />
            </div>
            
            <div class="form-group col-6">
              <div class="input-group">
                <label for="itemCode" class="col-md-12">{{ $t("Item code") }}
                  <span class="required">*</span></label>
                <div class="input-group-prepend">
                  <span v-if="prefix" class="input-group-text" id="basic-addon1">{{ prefix }}</span>
                </div>
                <input v-model="form.itemCode" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('itemCode') }" name="itemCode"
                  :placeholder="$t('Enter item code')" aria-label="itemCode"
                  aria-describedby="basic-addon1" />
                <has-error :form="form" field="itemCode" />
              </div>
            </div>
            
            <div class="form-group col-6">
              <label for="barcodeSymbology">{{ $t("Barcode Symbology") }}
                <span class="required">*</span></label>
              <select id="barcodeSymbology" v-model="form.barcodeSymbology" class="form-control" :class="{
                'is-invalid': form.errors.has('barcodeSymbology'),
              }">
                <option value="CODE128">CODE128</option>
                <option value="CODE39">CODE39</option>
                <option value="EAN8">EAN8</option>
                <option value="EAN13">EAN13</option>
                <option value="UPC">UPC</option>
              </select>
              <has-error :form="form" field="barcodeSymbology" />
            </div>

            
            
            <div v-if="categories" class="form-group col-6">
              <label for="subCategory">{{ $t("Sub Category") }}
                <span class="required">*</span></label>
              <v-select v-model="form.subCategory" :options="categories" label="name"
                :class="{ 'is-invalid': form.errors.has('subCategory') }" name="subCategory"
                :placeholder="$t('Select a category')" />
              <has-error :form="form" field="subCategory" />
            </div>
            
            <div v-if="brands" class="form-group col-6">
              <label for="brand">{{ $t("Brand") }}</label>
              <v-select v-model="form.brand" :options="brands" label="name"
                :class="{ 'is-invalid': form.errors.has('brand') }" name="brand"
                :placeholder="$t('Select a brand')" />
              <has-error :form="form" field="brand" />
            </div>
            
            <div v-if="units" class="form-group col-6">
              <label for="itemUnit">{{ $t("Unit") }} <span class="required">*</span></label>
              <v-select v-model="form.itemUnit" :options="units" label="name"
                :class="{ 'is-invalid': form.errors.has('itemUnit') }" name="itemUnit"
                :placeholder="$t('Select a unit')" />
              <has-error :form="form" field="itemUnit" />
            </div>
            
            <div v-if="taxes" class="form-group col-6">
              <label for="productTax">{{ $t("Product Tax") }}
                <span class="required">*</span></label>
              <v-select v-model="form.productTax" :options="taxes" label="code"
                :class="{ 'is-invalid': form.errors.has('productTax') }" name="productTax"
                :placeholder="$t('Select a tax')" @input="calculatePrice" />
              <has-error :form="form" field="productTax" />
            </div>

            <!-- Tax Type field hidden - always Exclusive -->
            <div class="form-group col-6">
              <label for="regularPrice">{{ $t("Regular Price") }}
                <span class="required">*</span></label>
              <input id="regularPrice" v-model="form.regularPrice" type="number" step="any" min="0" class="form-control"
                :class="{ 'is-invalid': form.errors.has('regularPrice') }" name="regularPrice"
                :placeholder="$t('Enter regular price')" @change="calculatePrice" @keyup="calculatePrice" />
              <has-error :form="form" field="regularPrice" />
            </div>

            <!-- Service Purchase Price (only for services) -->
            <div v-if="form.itemType === 'service'" class="form-group col-6">
              <label for="servicePurchasePrice">{{ $t("Service Purchase Price") }}
                <span class="required">*</span></label>
              <input id="servicePurchasePrice" v-model="form.servicePurchasePrice" type="number" step="any" min="0" class="form-control"
                :class="{ 'is-invalid': form.errors.has('servicePurchasePrice') }" name="servicePurchasePrice"
                :placeholder="$t('Enter service purchase price')" />
              <has-error :form="form" field="servicePurchasePrice" />
            </div>

            <!-- Opening Stock Fields (only for products) -->
            <div v-if="form.itemType === 'product'" class="form-group col-6">
              <label for="openingStockCount">{{ $t("Opening Stock Count") }}</label>
              <input id="openingStockCount" v-model="form.openingStockCount" type="number" step="any" min="0" class="form-control"
                :class="{ 'is-invalid': form.errors.has('openingStockCount') }" name="openingStockCount"
                :placeholder="$t('Enter opening stock count')" />
              <has-error :form="form" field="openingStockCount" />
            </div>
            <div v-if="form.itemType === 'product'" class="form-group col-6">
              <label for="openingStockUnitPrice">{{ $t("Opening Stock Unit Price") }}</label>
              <input id="openingStockUnitPrice" v-model="form.openingStockUnitPrice" type="number" step="any" min="0" class="form-control"
                :class="{ 'is-invalid': form.errors.has('openingStockUnitPrice') }" name="openingStockUnitPrice"
                :placeholder="$t('Enter opening stock unit price')" />
              <has-error :form="form" field="openingStockUnitPrice" />
            </div>

            <div class="form-group col-6">
              <div class="input-group">
                <label for="discount" class="col-md-12">{{
                  $t("Discount")
                }}</label>
                <input v-model="form.discount" type="number" min="0" max="100" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                  :placeholder="$t('Enter discount')" aria-label="discount" aria-describedby="basic-addon1"
                  @change="calculatePrice" @keyup="calculatePrice" />
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">%</span>
                </div>
                <has-error :form="form" field="discount" />
              </div>
            </div>
            <div class="form-group col-6">
              <label for="sellingPrice">{{
                $t("Selling Price")
              }}</label>
              <input id="sellingPrice" v-model="form.sellingPrice" type="number" class="form-control" readonly
                :class="{ 'is-invalid': form.errors.has('sellingPrice') }" name="sellingPrice"
                :placeholder="$t('Enter sale price')" />
              <has-error :form="form" field="sellingPrice" />
            </div>

            <!-- Chart of Account Fields -->
            <div v-if="!isSalesAccountAutomatic" class="form-group col-6">
              <label for="salesAccountId">{{ $t("Sales Account") }}
                <span class="required">*</span></label>
              <v-select
                v-model="form.salesAccountId"
                :options="chartOfAccounts"
                label="name"
                :reduce="option => option.id"
                :class="{ 'is-invalid': form.errors.has('salesAccountId') }"
                name="salesAccountId"
                :placeholder="$t('Select a sales account')"
                required
              >
                <template #option="{ name, code, type }">
                  <div>
                    <strong>{{ name }}</strong>
                    <br>
                    <small class="text-muted">{{ code }} - {{ type }}</small>
                  </div>
                </template>
              </v-select>
              <has-error :form="form" field="salesAccountId" />
              <small class="form-text text-muted">
                {{ $t("Select a sales account for this item. This account will be used for sales transactions.") }}
              </small>
            </div>
            <div v-if="isSalesAccountAutomatic" class="form-group col-6">
              <label>{{ $t("Sales Account") }}</label>
              <div class="form-control-plaintext text-muted">
                <i class="fas fa-info-circle"></i> {{ $t("Automatically assigned from account routing settings") }}
                <br>
                <small v-if="accountRoutingSettings && accountRoutingSettings.sales && accountRoutingSettings.sales.parent_account_id">
                  {{ $t("Account ID") }}: {{ accountRoutingSettings.sales.parent_account_id }}
                </small>
              </div>
            </div>
            <div v-if="!isPurchaseAccountAutomatic" class="form-group col-6">
              <label for="purchaseAccountId">{{ $t("Purchase Account") }}
                <span class="required">*</span></label>
              <v-select
                v-model="form.purchaseAccountId"
                :options="chartOfAccounts"
                label="name"
                :reduce="option => option.id"
                :class="{ 'is-invalid': form.errors.has('purchaseAccountId') }"
                name="purchaseAccountId"
                :placeholder="$t('Select a purchase account')"
                required
              >
                <template #option="{ name, code, type }">
                  <div>
                    <strong>{{ name }}</strong>
                    <br>
                    <small class="text-muted">{{ code }} - {{ type }}</small>
                  </div>
                </template>
              </v-select>
              <has-error :form="form" field="purchaseAccountId" />
              <small class="form-text text-muted">
                {{ $t("Select a purchase account for this item. This account will be used for purchase transactions.") }}
              </small>
            </div>
            <div v-if="isPurchaseAccountAutomatic" class="form-group col-6">
              <label>{{ $t("Purchase Account") }}</label>
              <div class="form-control-plaintext text-muted">
                <i class="fas fa-info-circle"></i> {{ $t("Automatically assigned from account routing settings") }}
                <br>
                <small v-if="accountRoutingSettings && accountRoutingSettings.purchase && accountRoutingSettings.purchase.parent_account_id">
                  {{ $t("Account ID") }}: {{ accountRoutingSettings.purchase.parent_account_id }}
                </small>
              </div>
            </div>

            <div class="form-group col-12">
              <label for="note">{{ $t("Note") }}</label>
              <textarea id="note" v-model="form.note" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('note') }" name="note"
                :placeholder="$t('Write your note here!')" rows="3"></textarea>
              <has-error :form="form" field="note" />
            </div>
            <div class="form-group col-6">
              <label for="alertQuantity">{{ $t("Alert Quantity") }}
              </label>
              <input id="alertQuantity" v-model="form.alertQuantity" type="number" min="0" max="1000" class="form-control"
                :class="{ 'is-invalid': form.errors.has('alertQuantity') }" name="alertQuantity"
                :placeholder="$t('Enter alert quantity')" />
              <has-error :form="form" field="alertQuantity" />
            </div>
            <div class="form-group col-6">
              <label for="status">{{ $t("Status") }}</label>
              <select id="status" v-model="form.status" class="form-control"
                :class="{ 'is-invalid': form.errors.has('status') }">
                <option value="1">
                  {{ $t("Active") }}
                </option>
                <option value="0">
                  {{ $t("Inactive") }}
                </option>
              </select>
              <has-error :form="form" field="status" />
            </div>
            <div class="form-group col-12">
              <label for="image">{{ $t("Image") }}</label>
              <div class="custom-file">
                <input id="image" type="file" class="custom-file-input" name="image"
                  :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange" />
                <label class="custom-file-label" for="image">{{
                  $t("Choose file")
                }}</label>
              </div>
              <has-error :form="form" field="image" />
              <div class="bg-light mt-4 w-25">
                <img v-if="url" :src="url" class="img-fluid" :alt="$t('Attached Image')" />
              </div>
            </div>
          </div>
          <!-- /.card-body -->
          <div class="card-footer">
            <button type="submit" class="btn btn-primary" :disabled="form.busy">
              <i v-if="form.busy" class="fas fa-spinner fa-spin"></i>
              <i v-else class="fas fa-edit"></i>
              {{ $t("Update") }}
            </button>
            <button type="button" class="btn btn-secondary" @click="showProductEditModal = false">
              {{ $t("Cancel") }}
            </button>
          </div>
        </form>
      </div>
    </VModal>
  </div>
</template>

<script>
import VModal from "./VModal.vue";
import Form from "vform";
import { HasError } from "vform/src/components/bootstrap5";
import axios from "axios";
import toast from "sweetalert2";

export default {
  name: "ProductEditModal",
  components: {
    VModal,
    HasError,
  },
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      showProductEditModal: false,
      isLoading: false,
      url: null,
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
        discount: "",
        sellingPrice: "",
        note: "",
        alertQuantity: 1,
        status: 1,
        image: "",
        salesAccountId: "",
        purchaseAccountId: "",
      }),
      categories: [],
      brands: [],
      units: [],
      taxes: [],
      chartOfAccounts: [],
      prefix: "",
      accountRoutingSettings: null,
      isSalesAccountAutomatic: false,
      isPurchaseAccountAutomatic: false,
    };
  },
  watch: {
    // Remove the product watcher to prevent loading data before dropdowns are ready
  },
  mounted() {
    // Data loading moved to openModal to ensure proper order
  },
  methods: {
    async openModal(product = null) {
      // If product is passed as parameter, use it; otherwise use the prop
      const productToEdit = product || this.product;
      if (!productToEdit) {
        console.warn('No product provided to ProductEditModal');
        return;
      }
      
      this.isLoading = true;
      this.showProductEditModal = true;
      
      try {
        // Load all required data first
        await Promise.all([
          this.getSubCategories(),
          this.getUnits(),
          this.getBrands(),
          this.getTaxes(),
          this.loadChartOfAccounts(),
          this.loadAccountRoutingSettings()
        ]);
        
        // Now load product data after all dropdown data is available
        this.loadProductData(productToEdit);
      } catch (error) {
        console.error('Error loading modal data:', error);
      } finally {
        this.isLoading = false;
      }
    },
    
    loadProductData(product) {
      console.log('Loading product data:', product); // Debug log
      
      this.form.itemType = product.item_type || product.itemType || "product";
      this.form.itemName = product.name || product.item_name || "";
      this.form.itemModel = product.model || product.item_model || "";
      this.form.itemCode = product.code || product.item_code || "";
      this.form.barcodeSymbology = product.barcode_symbology || product.barcodeSymbology || product.symbology || "CODE128";
      
      // Handle subCategory - find the exact object from categories array
      if (product.subCategory) {
        if (typeof product.subCategory === 'object' && product.subCategory.id) {
          // Find the exact object from categories array to ensure proper v-select binding
          const categoryObject = this.categories.find(cat => cat.id == product.subCategory.id);
          this.form.subCategory = categoryObject || product.subCategory;
        } else {
          // It's an ID, find the object
          const categoryObject = this.categories.find(cat => cat.id == product.subCategory);
          this.form.subCategory = categoryObject || product.subCategory;
        }
      } else {
        // Try to find by ID if available
        const categoryId = product.sub_category_id || product.category_id;
        if (categoryId) {
          const categoryObject = this.categories.find(cat => cat.id == categoryId);
          this.form.subCategory = categoryObject || "";
        } else {
          this.form.subCategory = "";
        }
      }
      
      // Handle brand - find the exact object from brands array
      if (product.itemBrand) {
        if (typeof product.itemBrand === 'object' && product.itemBrand.id) {
          // Find the exact object from brands array to ensure proper v-select binding
          const brandObject = this.brands.find(brand => brand.id == product.itemBrand.id);
          this.form.brand = brandObject || product.itemBrand;
        } else {
          // It's an ID, find the object
          const brandObject = this.brands.find(brand => brand.id == product.itemBrand);
          this.form.brand = brandObject || product.itemBrand;
        }
      } else {
        // Try to find by ID if available
        const brandId = product.brand_id || product.brand || product.item_brand;
        if (brandId) {
          const brandObject = this.brands.find(brand => brand.id == brandId);
          this.form.brand = brandObject || "";
        } else {
          this.form.brand = "";
        }
      }
      
      // Handle unit - find the exact object from units array
      if (product.itemUnit) {
        if (typeof product.itemUnit === 'object' && product.itemUnit.id) {
          // Find the exact object from units array to ensure proper v-select binding
          const unitObject = this.units.find(unit => unit.id == product.itemUnit.id);
          this.form.itemUnit = unitObject || product.itemUnit;
        } else {
          // It's an ID, find the object
          const unitObject = this.units.find(unit => unit.id == product.itemUnit);
          this.form.itemUnit = unitObject || product.itemUnit;
        }
      } else {
        // Try to find by ID if available
        const unitId = product.unit_id || product.item_unit || product.unit;
        if (unitId) {
          const unitObject = this.units.find(unit => unit.id == unitId);
          this.form.itemUnit = unitObject || "";
        } else {
          this.form.itemUnit = "";
        }
      }
      
      // Handle tax field - find the exact object from taxes array
      if (product.itemTax) {
        if (typeof product.itemTax === 'object' && product.itemTax.id) {
          // Find the exact object from taxes array to ensure proper v-select binding
          const taxObject = this.taxes.find(tax => tax.id == product.itemTax.id);
          this.form.productTax = taxObject || product.itemTax;
        } else {
          // It's an ID, find the object
          const taxObject = this.taxes.find(tax => tax.id == product.itemTax);
          this.form.productTax = taxObject || product.itemTax;
        }
      } else if (product.tax_id || product.tax || product.item_tax || product.vat_rate_id) {
        const taxId = product.tax_id || product.tax || product.item_tax || product.vat_rate_id;
        // Find the tax object by ID from the taxes array
        const taxObject = this.taxes.find(tax => tax.id == taxId);
        this.form.productTax = taxObject || "";
      } else {
        this.form.productTax = "";
      }
      
      this.form.taxType = product.tax_type || product.taxType || "Exclusive";
      this.form.regularPrice = product.regular_price || product.regularPrice || product.price || "";
      this.form.servicePurchasePrice = product.service_purchase_price || product.servicePurchasePrice || "";
      this.form.discount = product.discount || 0;
      this.form.sellingPrice = product.selling_price || product.sellingPrice || "";
      this.form.openingStockCount = product.opening_stock_count || product.openingStockCount || "";
      this.form.openingStockUnitPrice = product.opening_stock_unit_price || product.openingStockUnitPrice || "";
      this.form.note = product.note || product.description || "";
      this.form.status = product.status || "1";
      this.form.alertQuantity = product.alert_quantity || product.alertQuantity || product.alert_qty || 1;
      this.form.salesAccountId = product.sales_account_id || (product.sales_account ? product.sales_account.id : "") || "";
      this.form.purchaseAccountId = product.purchase_account_id || (product.purchase_account ? product.purchase_account.id : "") || "";
      this.url = product.image || "";
      
      console.log('Form data after loading:', this.form.data()); // Debug log
      console.log('Tax field value:', this.form.productTax);
      console.log('Available taxes:', this.taxes);
      console.log('SubCategory field value:', this.form.subCategory);
      console.log('Available categories:', this.categories);
      console.log('Brand field value:', this.form.brand);
      console.log('Available brands:', this.brands);
      console.log('Unit field value:', this.form.itemUnit);
      console.log('Available units:', this.units);
      
      // Calculate selling price after loading data
      this.$nextTick(() => {
        this.calculatePrice();
      });
    },
    
    async updateProduct() {
      try {
        // Get the current product being edited (either from prop or parameter)
        const currentProduct = this.product;
        if (!currentProduct || !currentProduct.id) {
          console.error('No product ID available for update');
          return;
        }

        // Validate required fields based on item type
        if (this.form.itemType === 'service' && !this.form.servicePurchasePrice) {
          toast.fire({ 
            type: "error", 
            title: this.$t("Service Purchase Price is required for services") 
          });
          return;
        }

        // Validate sales account if not automatic
        if (!this.isSalesAccountAutomatic && !this.form.salesAccountId) {
          toast.fire({ 
            type: "error", 
            title: this.$t("Sales Account is required") 
          });
          return;
        }

        // Validate purchase account if not automatic
        if (!this.isPurchaseAccountAutomatic && !this.form.purchaseAccountId) {
          toast.fire({ 
            type: "error", 
            title: this.$t("Purchase Account is required") 
          });
          return;
        }

        const response = await this.form.put(`/api/products/${currentProduct.id}`);
        if (response.data.success) {
          // Show success message
          if (this.$toastr) {
            this.$toastr.s(response.data.message);
          }
          this.showProductEditModal = false;
          this.$emit("reloadProducts");
          this.form.reset();
          this.url = null;
        }
      } catch (error) {
        if (error.response && error.response.data) {
          this.form.errors.set(error.response.data.errors);
        }
      }
    },
    
    // get all product categories
    async getSubCategories() {
      try {
        const { data } = await this.form.get(window.location.origin + "/api/all-product-sub-categories");
        this.categories = data.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    
    // get all brands
    async getBrands() {
      try {
        const { data } = await axios.get(window.location.origin + "/api/all-brands");
        this.brands = data.data;
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    },
    
    // get all units
    async getUnits() {
      try {
        const { data } = await axios.get(window.location.origin + "/api/all-units");
        this.units = data.data;
      } catch (error) {
        console.error("Error fetching units:", error);
      }
    },
    
    // get all taxes
    async getTaxes() {
      try {
        const { data } = await axios.get(window.location.origin + "/api/all-vat-rates");
        this.taxes = data.data;
        this.calculatePrice();
      } catch (error) {
        console.error("Error fetching taxes:", error);
      }
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
        if (this.isSalesAccountAutomatic && this.accountRoutingSettings.sales.parent_account_id) {
          this.form.salesAccountId = this.accountRoutingSettings.sales.parent_account_id;
        }
        
        if (this.isPurchaseAccountAutomatic && this.accountRoutingSettings.purchase.parent_account_id) {
          this.form.purchaseAccountId = this.accountRoutingSettings.purchase.parent_account_id;
        }

        console.log('Account routing settings loaded:', this.accountRoutingSettings);
        console.log('Sales automatic:', this.isSalesAccountAutomatic);
        console.log('Purchase automatic:', this.isPurchaseAccountAutomatic);
      } catch (error) {
        console.error("Error loading account routing settings:", error);
        // Set defaults if API fails
        this.isSalesAccountAutomatic = false;
        this.isPurchaseAccountAutomatic = false;
      }
    },
    
    calculatePrice() {
      if (this.form.regularPrice && this.form.productTax && this.form.taxType && this.form.productTax.rate) {
        let discount = 0;
        if (this.form.discount && this.form.discount > 0) {
          discount = (this.form.discount / 100) * this.form.regularPrice;
        }
        let currentPrice = this.form.regularPrice - discount;
        let taxAmount = 0;
        let totalTax = 0;
        if (this.form.productTax.rate > 0) {
          taxAmount = this.form.productTax.rate / 100;
        }
        if (this.form.taxType == "Exclusive") {
          totalTax = currentPrice * taxAmount;
        }
        else {
          totalTax = currentPrice - currentPrice / (1 + taxAmount);
        }
        if (this.form.taxType == "Exclusive") {
          this.form.sellingPrice = this.form.regularPrice - discount + totalTax;
        }
        else {
          this.form.sellingPrice =
            (this.form.regularPrice - discount) / (1 + taxAmount) + totalTax;
        }
        return;
      }
      this.form.sellingPrice = this.form.regularPrice;
    },
    
    onFileChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (
        file.size < 2111775 &&
        (file.type === 'image/jpeg' ||
          file.type === 'image/png' ||
          file.type === 'image/gif')
      ) {
        reader.onloadend = () => {
          this.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        if (this.$toastr) {
          this.$toastr.e('Please select a valid thumbnail with size less than 2 MB');
        }
      }
    },
  },
};
</script>

<style scoped>
.btn-outline-custom {
  border: 1px solid #ddd;
  color: #666;
  background-color: #fff;
}

.btn-outline-custom:hover,
.btn-outline-custom:focus {
  background-color: #f8f9fa;
  border-color: #ddd;
  color: #666;
}

.btn-custom-active {
  background-color: #007bff !important;
  border-color: #007bff !important;
  color: #fff !important;
}

.form-text {
  font-size: 0.875rem;
  color: #6c757d;
  margin-top: 5px;
}

.custom-file-label::after {
  content: "Browse";
}
</style>
