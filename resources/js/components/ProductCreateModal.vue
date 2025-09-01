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
                  <input type="radio" id="product" name="itemType" v-model="form.itemType" value="product" autocomplete="off">
                  <div class="option-content">
                    <i class="fas fa-cube"></i>
                    <span>{{ $t("Product") }}</span>
                  </div>
                </label>
                <label class="item-type-option" :class="{ 'active': form.itemType === 'service' }">
                  <input type="radio" id="service" name="itemType" v-model="form.itemType" value="service" autocomplete="off">
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
                <div class="col-md-6">
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
                    <v-select v-model="form.subCategory" :options="categories" label="name"
                      :class="{ 'is-invalid': form.errors.has('subCategory') }" name="subCategory"
                      :placeholder="$t('Select a category')" />
                    <has-error :form="form" field="subCategory" />
                  </div>

                  <div class="form-group">
                    <label for="itemUnit">{{ $t("Unit") }} <span class="required">*</span></label>
                    <v-select v-model="form.itemUnit" :options="units" label="name"
                      :class="{ 'is-invalid': form.errors.has('itemUnit') }" name="itemUnit"
                      :placeholder="$t('Select a unit')" />
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
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="itemModel">{{ $t("Model") }}</label>
                    <input id="itemModel" v-model="form.itemModel" type="text" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('itemModel') }" name="itemModel"
                      :placeholder="$t('Enter a model')" />
                    <has-error :form="form" field="itemModel" />
                  </div>

                  <div class="form-group">
                    <label for="brand">{{ $t("Brand") }}</label>
                    <v-select v-model="form.brand" :options="brands" label="name"
                      :class="{ 'is-invalid': form.errors.has('brand') }" name="brand"
                      :placeholder="$t('Select a brand')" />
                    <has-error :form="form" field="brand" />
                  </div>

                  <div class="form-group">
                    <label for="regularPrice">{{ $t("Price") }} <span class="required">*</span></label>
                    <input id="regularPrice" v-model="form.regularPrice" type="number" step="any" min="0" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('regularPrice') }" name="regularPrice" 
                      :placeholder="$t('Enter price')" @change="calculatePrice" @keyup="calculatePrice" />
                    <has-error :form="form" field="regularPrice" />
                  </div>

                  <div class="form-group">
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
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="openingStockCount">{{ $t("Opening Stock") }}</label>
                    <input id="openingStockCount" v-model="form.openingStockCount" type="number" step="any" min="0" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('openingStockCount') }" name="openingStockCount" 
                      :placeholder="$t('Enter opening stock')" />
                    <has-error :form="form" field="openingStockCount" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="openingStockUnitPrice">{{ $t("Stock Unit Price") }}</label>
                    <input id="openingStockUnitPrice" v-model="form.openingStockUnitPrice" type="number" step="any" min="0" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('openingStockUnitPrice') }" name="openingStockUnitPrice" 
                      :placeholder="$t('Enter unit price')" />
                    <has-error :form="form" field="openingStockUnitPrice" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-card" v-if="form.itemType === 'service'">
            <div class="card-header">
              <h5 class="section-title">
                <i class="fas fa-dollar-sign mr-2"></i>
                {{ $t("Service Details") }}
              </h5>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="servicePurchasePrice">{{ $t("Purchase Price") }} <span class="required">*</span></label>
                <input id="servicePurchasePrice" v-model="form.servicePurchasePrice" type="number" step="any" min="0" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('servicePurchasePrice') }" name="servicePurchasePrice" 
                  :placeholder="$t('Enter purchase price')" />
                <has-error :form="form" field="servicePurchasePrice" />
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
              <div class="row">
                <div class="col-md-6">
                  <!-- Sales Account -->
                  <div v-if="!isSalesAccountAutomatic" class="form-group">
                    <label for="salesAccountId">{{ $t("Sales Account") }} <span class="required">*</span></label>
                    <div class="d-flex align-items-center">
                      <v-select
                        v-model="form.salesAccountId"
                        :options="chartOfAccounts"
                        label="name"
                        :reduce="option => option.id"
                        :class="{ 'is-invalid': form.errors.has('salesAccountId') }"
                        name="salesAccountId"
                        :placeholder="$t('Select sales account')"
                        class="flex-grow-1 mr-2"
                        required
                      />
                      <button 
                        type="button" 
                        @click="autoAssignSalesAccount" 
                        :disabled="isAutoAssigningSales"
                        class="btn btn-outline-success btn-sm auto-assign-btn"
                        :title="$t('Auto-assign')"
                      >
                        <i v-if="isAutoAssigningSales" class="fas fa-spinner fa-spin"></i>
                        <i v-else class="fas fa-magic"></i>
                      </button>
                    </div>
                    <has-error :form="form" field="salesAccountId" />
                  </div>

                  <div v-if="isSalesAccountAutomatic" class="form-group">
                    <label>{{ $t("Sales Account") }}</label>
                    <div class="form-control-plaintext text-muted">
                      <i class="fas fa-info-circle"></i> {{ $t("Auto-assigned") }}
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <!-- Purchase Account -->
                  <div v-if="!isPurchaseAccountAutomatic" class="form-group">
                    <label for="purchaseAccountId">{{ $t("Purchase Account") }} <span class="required">*</span></label>
                    <div class="d-flex align-items-center">
                      <v-select
                        v-model="form.purchaseAccountId"
                        :options="chartOfAccounts"
                        label="name"
                        :reduce="option => option.id"
                        :class="{ 'is-invalid': form.errors.has('purchaseAccountId') }"
                        name="purchaseAccountId"
                        :placeholder="$t('Select purchase account')"
                        class="flex-grow-1 mr-2"
                        required
                      />
                      <button 
                        type="button" 
                        @click="autoAssignPurchaseAccount" 
                        :disabled="isAutoAssigningPurchase"
                        class="btn btn-outline-info btn-sm auto-assign-btn"
                        :title="$t('Auto-assign')"
                      >
                        <i v-if="isAutoAssigningPurchase" class="fas fa-spinner fa-spin"></i>
                        <i v-else class="fas fa-magic"></i>
                      </button>
                    </div>
                    <has-error :form="form" field="purchaseAccountId" />
                  </div>

                  <div v-if="isPurchaseAccountAutomatic" class="form-group">
                    <label>{{ $t("Purchase Account") }}</label>
                    <div class="form-control-plaintext text-muted">
                      <i class="fas fa-info-circle"></i> {{ $t("Auto-assigned") }}
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
              <div class="row">
                <div class="col-md-8">
                  <div class="form-group">
                    <label for="note">{{ $t("Notes") }}</label>
                    <textarea id="note" v-model="form.note" class="form-control" rows="3"
                      :class="{ 'is-invalid': form.errors.has('note') }" name="note"
                      :placeholder="$t('Add any additional notes...')"></textarea>
                    <has-error :form="form" field="note" />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="status">{{ $t("Status") }}</label>
                    <select id="status" v-model="form.status" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('status') }">
                      <option value="1">{{ $t("Active") }}</option>
                      <option value="0">{{ $t("Inactive") }}</option>
                    </select>
                    <has-error :form="form" field="status" />
                  </div>

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
            </div>
          </div>
        </form>
      </div>
      <div slot="modal-footer">
        <button @click="submitItem($event)" :loading="form.busy" class="btn btn-primary">
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
import { mapGetters } from 'vuex'

export default {
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
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
  },
  created() {
    this.getSubCategories();
    this.getUnits();
    this.getBrands();
    this.getTaxes();
    this.getItemCode();
    this.loadChartOfAccounts();
    this.loadAccountRoutingSettings();
  },
  methods: {

    toggleModal() {
      this.showProductCreateModal = !this.showProductCreateModal
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

    // get all product categories
    async getSubCategories() {
      const { data } = await this.form.get(
        window.location.origin + "/api/all-product-sub-categories"
      );
      this.categories = data.data;
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
      if (this.form.regularPrice && this.form.productTax && this.form.taxType) {
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
        Swal.fire(this.$t("Error!"), this.$t("Please select a valid thumbnail with size less than 2 MB"), "error");
      }
    },
    // save product
    async saveProduct() {
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

      // Debug: Log form data being sent
      console.log("Form data being sent:", this.form.data());

      await this.form
        .post(window.location.origin + "/api/products")
        .then(() => {
          toast.fire({
            type: "success",
            title: this.$t("Product added successfully"),
          });
          this.form.reset();
          this.form.itemType = "product"; // Reset to default
          this.showProductCreateModal = false;
          this.$emit('reloadProducts');
        })
        .catch((error) => {
          console.error("Error creating product:", error);
          const errorMessage = error.response?.data?.message || this.$t("Opps...something went wrong");
          toast.fire({ type: "error", title: errorMessage });
        });
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
  },
}
</script>

<style scoped>
/* Form Card Styling - Compact and Modern */
.form-card {
  background: #ffffff;
  border: 1px solid #e3e6f0;
  border-radius: 0.6rem;
  box-shadow: 0 0.1rem 0.5rem 0 rgba(58, 59, 69, 0.1);
  margin-bottom: 1.25rem;
  transition: all 0.2s ease;
}

.form-card:hover {
  box-shadow: 0 0.1rem 0.5rem 0 rgba(58, 59, 69, 0.15);
}

.form-card .card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.875rem 1.25rem;
  border-radius: 0.6rem 0.6rem 0 0;
  border-bottom: none;
}

.form-card .card-header .section-title {
  color: white;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
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
  padding: 1.25rem;
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
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
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
  border-color: #667eea;
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.15);
}

.item-type-option.active .option-content {
  border-color: #667eea;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.25);
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
}
</style>
