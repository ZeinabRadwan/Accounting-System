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
                <router-link :to="{ name: 'products.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="button" class="btn btn-success" @click="saveTemporary" title="Save Temporarily">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="saveProduct" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-12 col-xl-12">
                  <div class="btn-group btn-group-toggle w-25" data-toggle="buttons">
                    <label 
                      class="btn btn-outline-custom"
                      :class="{ 'btn-custom-active': form.itemType === 'product' }">
                      <input type="radio" id="product" name="itemType" v-model="form.itemType" value="product" autocomplete="off">
                      {{ $t('Product') }}
                    </label>

                    <label 
                      class="btn btn-outline-custom"
                      :class="{ 'btn-custom-active': form.itemType === 'service' }">
                      <input type="radio" id="service" name="itemType" v-model="form.itemType" value="service" autocomplete="off">
                      {{ $t('Service') }}
                    </label>
                  </div>
                </div>

                <div class="form-group col-md-6 col-xl-6">
                  <label for="itemName">{{ $t('Item Name') }}
                    <span class="required">*</span></label>
                  <input id="itemName" v-model="form.itemName" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('itemName') }" name="itemName"
                    :placeholder="$t('Enter a name')" />
                  <has-error :form="form" field="itemName" />
                </div>
                <div class="form-group col-md-6 col-xl-3">
                  <label for="itemModel">{{ $t('Item Model') }}</label>
                  <input id="itemModel" v-model="form.itemModel" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('itemModel') }" name="itemModel"
                    :placeholder="$t('Enter a model')" />
                  <has-error :form="form" field="itemModel" />
                </div>
                <div class="form-group col-md-6 col-xl-3">
                  <div class="input-group">
                    <label for="itemCode" class="col-md-12">{{ $t('Item code') }}
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
                <div class="form-group col-md-6 col-xl-4">
                  <label for="barcodeSymbology">{{ $t('Barcode Symbology') }}
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
                <div v-if="items" class="form-group col-md-6 col-xl-4">
                  <label for="subCategory">{{ $t('Sub Category') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.subCategory" :options="items" label="name" :reduce="option => option.id"
                    :class="{ 'is-invalid': form.errors.has('subCategory') }" name="subCategory"
                    :placeholder="$t('Select a category')" />
                  <has-error :form="form" field="subCategory" />
                </div>
                <div v-if="brands" class="form-group col-md-6 col-xl-4">
                  <label for="brand">{{ $t('Brand') }}</label>
                  <v-select v-model="form.brand" :options="brands" label="name" :reduce="option => option.id"
                    :class="{ 'is-invalid': form.errors.has('brand') }" name="brand"
                    :placeholder="$t('Select a brand')" />
                  <has-error :form="form" field="brand" />
                </div>
                <div v-if="units" class="form-group col-md-6 col-xl-4">
                  <label for="itemUnit">{{ $t('Unit') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.itemUnit" :options="units" label="name" :reduce="option => option.id"
                    :class="{ 'is-invalid': form.errors.has('itemUnit') }" name="itemUnit"
                    :placeholder="$t('Select a unit')" />
                  <has-error :form="form" field="itemUnit" />
                </div>
                <div v-if="taxes" class="form-group col-md-6 col-xl-4">
                  <label for="productTax">{{ $t('Product Tax') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.productTax" :options="taxes" label="code" :reduce="option => option.id"
                    :class="{ 'is-invalid': form.errors.has('productTax') }" name="productTax"
                    :placeholder="$t('Select a tax')" @input="calculatePrice" />
                  <has-error :form="form" field="productTax" />
                </div>
                <!-- Tax Type field hidden - always Exclusive -->
                <div class="form-group col-md-6" :class="form.itemType === 'service' ? 'col-xl-3' : 'col-xl-4'">
                  <label for="regularPrice">{{ $t('Regular Price') }}
                    <span class="required">*</span></label>
                  <input id="regularPrice" v-model="form.regularPrice" type="number" step="any" min="0"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('regularPrice') }" name="regularPrice"
                    :placeholder="$t('Enter regular price')
                      " @change="calculatePrice" @keyup="calculatePrice" />
                  <has-error :form="form" field="regularPrice" />
                </div>
                <div class="form-group col-md-6" :class="form.itemType === 'service' ? 'col-xl-3' : 'col-xl-4'">
                  <div class="input-group">
                    <label for="discount" class="col-md-12">{{
                      $t('Discount')
                    }}</label>
                    <input v-model="form.discount" type="number" min="0" max="100" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                      :placeholder="$t('Enter discount')" aria-label="discount"
                      aria-describedby="basic-addon1" @change="calculatePrice" @keyup="calculatePrice" />
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">%</span>
                    </div>
                    <has-error :form="form" field="discount" />
                  </div>
                </div>
                <div class="form-group col-md-6" :class="form.itemType === 'service' ? 'col-xl-3' : 'col-xl-4'">
                  <label for="sellingPrice">{{
                    $t('Selling Price')
                  }}</label>
                  <input id="sellingPrice" v-model="form.sellingPrice" type="number" class="form-control" readonly
                    :class="{ 'is-invalid': form.errors.has('sellingPrice') }" name="sellingPrice" :placeholder="$t('Enter sale price')
                        " />
                  <has-error :form="form" field="sellingPrice" />
                </div>
                <div v-if="form.itemType == 'service'" class="form-group col-md-6 col-xl-3">
                  <label for="servicePurchasePrice">{{ $t('Service Cost') }}
                    <span class="required">*</span></label>
                  <input id="servicePurchasePrice" v-model="form.servicePurchasePrice" type="number" step="any" min="0"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('servicePurchasePrice') }" name="servicePurchasePrice"
                    :placeholder="$t('Enter Service Cost')"/>
                  <has-error :form="form" field="servicePurchasePrice" />
                </div>

                <div v-if="form.itemType == 'product'" class="form-group col-md-12">
                  <div class="form-check">
                    <input v-model="form.isOpeningStock" type="checkbox" class="form-check-input" id="isOpeningStock" />
                    <label for="isOpeningStock">{{
                      $t('Add Opening Stock?')
                    }}</label>
                  </div>
                </div>

                <div v-if="form.isOpeningStock" class="row col-md-12">
                  <div class="form-group col-md-6 col-xl-6">
                    <label for="openingStockCount">{{ $t('Opening Stock Quantity') }}
                      <span class="required">*</span></label>
                    <input id="openingStockCount" v-model="form.openingStockCount" type="number" step="any" min="0"
                      class="form-control" :class="{ 'is-invalid': form.errors.has('openingStockCount') }" name="openingStockCount"
                      :placeholder="$t('Enter opening stock quantity')" />
                    <has-error :form="form" field="openingStockCount" />
                  </div>
                  <div class="form-group col-md-6 col-xl-6">
                    <label for="openingStockUnitPrice">{{ $t('Opening Stock Unit Price') }}
                      <span class="required">*</span></label>
                    <input id="openingStockUnitPrice" v-model="form.openingStockUnitPrice" type="number" step="any" min="0"
                      class="form-control" :class="{ 'is-invalid': form.errors.has('openingStockUnitPrice') }" name="openingStockUnitPrice"
                      :placeholder="$t('Enter opening stock unit price')" />
                    <has-error :form="form" field="openingStockUnitPrice" />
                  </div>
                </div>


                
                <div v-if="!isSalesAccountAutomatic" class="form-group col-md-6">
                  <label for="salesAccountId">{{ $t('Sales Account') }}
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
                    {{ $t('Select a sales account for this item. This account will be used for sales transactions.') }}
                  </small>
                </div>
                <div v-if="isSalesAccountAutomatic" class="form-group col-md-6">
                  <label>{{ $t('Sales Account') }}</label>
                  <div class="form-control-plaintext text-muted">
                    <i class="fas fa-info-circle"></i> {{ $t('Automatically assigned from account routing settings') }}
                    <br>
                    <small v-if="accountRoutingSettings.sales && accountRoutingSettings.sales.main_account_id">
                      {{ $t('Account ID') }}: {{ accountRoutingSettings.sales.main_account_id }}
                    </small>
                  </div>
                </div>
                <div v-if="!isPurchaseAccountAutomatic" class="form-group col-md-6">
                  <label for="purchaseAccountId">{{ $t('Purchase Account') }}
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
                    {{ $t('Select a purchase account for this item. This account will be used for purchase transactions.') }}
                  </small>
                </div>
                <div v-if="isPurchaseAccountAutomatic" class="form-group col-md-6">
                  <label>{{ $t('Purchase Account') }}</label>
                  <div class="form-control-plaintext text-muted">
                    <i class="fas fa-info-circle"></i> {{ $t('Automatically assigned from account routing settings') }}
                    <br>
                    <small v-if="accountRoutingSettings.purchase && accountRoutingSettings.purchase.main_account_id">
                      {{ $t('Account ID') }}: {{ accountRoutingSettings.purchase.main_account_id }}
                    </small>
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <label for="note">{{ $t('Note') }}</label>
                  <textarea id="note" v-model="form.note" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('note') }" name="companyName"
                    :placeholder="$t('Write your note here!')"></textarea>
                  <has-error :form="form" field="note" />
                </div>

                <div v-if="form.itemType == 'product'" class="form-group col-md-6 col-xl-4">
                  <label for="alertQuantity">{{ $t('Alert Quantity') }}
                  </label>
                  <input id="alertQuantity" v-model="form.alertQuantity" type="number" min="0" max="1000"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('alertQuantity') }" name="alertQuantity"
                    :placeholder="$t('Enter alert quantity')
                      " />
                  <has-error :form="form" field="alertQuantity" />
                </div>
                <div class="form-group col-md-6 col-xl-4">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">
                      {{ $t('Active') }}
                    </option>
                    <option value="0">
                      {{ $t('Inactive') }}
                    </option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
                
                <div class="form-group col-md-6 col-xl-4">
                  <label for="image">{{ $t('Image') }}</label>
                  <div class="custom-file">
                    <input id="image" type="file" class="custom-file-input" name="image"
                      :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange" />
                    <label class="custom-file-label" for="image">{{
                      $t('Choose file')
                    }}</label>
                  </div>
                  <has-error :form="form" field="image" />
                  <div class="bg-light mt-4 w-25">
                    <img v-if="url" :src="url" class="img-fluid" :alt="$t('Attached Image')" />
                  </div>
                </div>

              </div>
            </div>
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                  <v-button :loading="form.busy" type="success">
                    <i class="fas fa-save" /> {{ $t('Save') }}
                  </v-button>
                  <button type="reset" class="btn btn-info" @click="form.reset()">
                    <i class="fas fa-power-off" /> {{ $t('Reset') }}
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
import Form from 'vform'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Create Item') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Create Item',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Items',
        url: 'products.index',
      },
      {
        name: 'Create',
        url: '',
      },
    ],
    form: new Form({
      itemType: 'product',
      itemName: '',
      itemCode: '',
      itemModel: '',
      barcodeSymbology: 'CODE128',
      subCategory: '',
      brand: '',
      itemUnit: '',
      productTax: '',
      taxType: 'Exclusive',
      regularPrice: '',
      servicePurchasePrice: '',
      discount: '',
      sellingPrice: '',
      openingStockCount: '',
      openingStockUnitPrice: '',
      isOpeningStock: false,
      note: '',
      alertQuantity: 1,
      status: 1,
      image: '',
      salesAccountId: '',
      purchaseAccountId: '',
    }),
    options: [],
    units: [],
    brands: [],
    taxes: [],
    chartOfAccounts: [],
    prefix: '',
    url: null,
    accountRoutingSettings: null,
    isSalesAccountAutomatic: false,
    isPurchaseAccountAutomatic: false,
  }),
  computed: {
    ...mapGetters('operations', ['items', 'appInfo']),
  },
  created() {
    this.getSubCategories()
    this.getUnits()
    this.getBrands()
    this.getTaxes()
    this.getItemCode()
    this.loadChartOfAccounts()
    this.loadAccountRoutingSettings()
  },
  mounted() {
    this.loadTemporaryData()
  },
  methods: {
    // get all product categories
    async getSubCategories() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-product-sub-categories',
      })
    },

    // get all brands
    async getBrands() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-brands'
      )
      this.brands = data.data
    },

    // get all units
    async getUnits() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-units'
      )
      this.units = data.data
    },

    // get all taxes
    async getTaxes() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-vat-rates'
      )
      this.taxes = data.data
      // assign default vat rate
      if (this.taxes && this.taxes.length > 0) {
        let defaultVatRateSlug = this.appInfo.defaultVatRateSlug;
        let defaultTax = this.taxes.find(
          tax => tax.slug === defaultVatRateSlug
        )
        if (defaultTax) {
          this.form.productTax = defaultTax.id
        }
      }
      this.calculatePrice()
    },

    // get item code
    async getItemCode() {
      const { data } = await axios.get(
        window.location.origin + '/api/generate-itemcode'
      )
      this.form.itemCode = data.code
      this.prefix = data.prefix
    },

    // load chart of accounts
    async loadChartOfAccounts() {
      try {
        const response = await this.$axios.get('/api/products/chart-of-accounts')
        this.chartOfAccounts = response.data || []
        // No longer needed with v-select
      } catch (error) {
        console.error('Error loading chart of accounts:', error)
      }
    },

    // load account routing settings
    async loadAccountRoutingSettings() {
      try {
        const response = await this.$axios.get('/api/account-routing-settings/product-account-routing')
        this.accountRoutingSettings = response.data.data || {}
        
        // Set flags for automatic routing
        this.isSalesAccountAutomatic = this.accountRoutingSettings.sales && 
          this.accountRoutingSettings.sales.routing_type === 'automatic'
        
        this.isPurchaseAccountAutomatic = this.accountRoutingSettings.purchase && 
          this.accountRoutingSettings.purchase.routing_type === 'automatic'
        
        // If automatic routing is enabled, set the account IDs from routing settings
        if (this.isSalesAccountAutomatic && this.accountRoutingSettings.sales.main_account_id) {
          this.form.salesAccountId = this.accountRoutingSettings.sales.main_account_id
        }
        
        if (this.isPurchaseAccountAutomatic && this.accountRoutingSettings.purchase.main_account_id) {
          this.form.purchaseAccountId = this.accountRoutingSettings.purchase.main_account_id
        }

        console.log('Account routing settings loaded:', this.accountRoutingSettings)
        console.log('Sales automatic:', this.isSalesAccountAutomatic)
        console.log('Purchase automatic:', this.isPurchaseAccountAutomatic)
        console.log('Form salesAccountId after auto-assignment:', this.form.salesAccountId)
        console.log('Form purchaseAccountId after auto-assignment:', this.form.purchaseAccountId)
      } catch (error) {
        console.error('Error loading account routing settings:', error)
        // Set defaults if API fails
        this.isSalesAccountAutomatic = false
        this.isPurchaseAccountAutomatic = false
      }
    },

    // calculate selling price
    calculatePrice() {
      if (this.form.sellingPrice && this.form.productTax && this.form.taxType) {
        let discount = 0
        if (this.form.discount && this.form.discount > 0) {
          discount = (this.form.discount / 100) * this.form.regularPrice
        }
        let currentPrice = this.form.regularPrice - discount

        let taxAmount = 0
        let totalTax = 0
        
        // Find the selected tax object to get the rate
        let selectedTax = this.taxes.find(tax => tax.id === this.form.productTax)
        if (selectedTax && selectedTax.rate > 0) {
          taxAmount = selectedTax.rate / 100
        }
        
        if (this.form.taxType == 'Exclusive') {
          totalTax = currentPrice * taxAmount
        } else {
          totalTax = currentPrice - currentPrice / (1 + taxAmount)
        }

        if (this.form.taxType == 'Exclusive') {
          this.form.sellingPrice = this.form.regularPrice - discount + totalTax
        } else {
          this.form.sellingPrice =
            (this.form.regularPrice - discount) / (1 + taxAmount) + totalTax
        }
        return
      }
      return (this.form.sellingPrice = this.form.regularPrice)
    },

    // vue file upload
    onFileChange(e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      if (
        file.size < 2111775 &&
        (file.type === 'image/jpeg' ||
          file.type === 'image/png' ||
          file.type === 'image/gif')
      ) {
        reader.onloadend = () => {
          this.form.image = reader.result
        }
        reader.readAsDataURL(file)
        this.url = URL.createObjectURL(file)
      } else {
        Swal.fire(
          this.$t('Error!'),
          this.$t('Please select a valid thumbnail with size less than 2 MB'),
          'error'
        )
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

      // Debug: Log validation state
      console.log("Validation state:", {
        isSalesAccountAutomatic: this.isSalesAccountAutomatic,
        salesAccountId: this.form.salesAccountId,
        isPurchaseAccountAutomatic: this.isPurchaseAccountAutomatic,
        purchaseAccountId: this.form.purchaseAccountId
      });

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
          // Clear temporary data after successful save
          this.clearTemporaryData()
          toast.fire({
            type: "success",
            title: this.$t("Product added successfully"),
          });
          
          // Store auto-assigned account IDs before reset
          const autoAssignedSalesAccountId = this.isSalesAccountAutomatic ? this.form.salesAccountId : null;
          const autoAssignedPurchaseAccountId = this.isPurchaseAccountAutomatic ? this.form.purchaseAccountId : null;
          
          this.form.reset();
          this.form.itemType = "product"; // Reset to default
          
          // Restore auto-assigned account IDs after reset
          if (autoAssignedSalesAccountId) {
            this.form.salesAccountId = autoAssignedSalesAccountId;
          }
          if (autoAssignedPurchaseAccountId) {
            this.form.purchaseAccountId = autoAssignedPurchaseAccountId;
          }
          
          this.$router.push({ name: 'products.index' });
        })
        .catch((error) => {
          console.error("Error creating product:", error);
          const errorMessage = error.response?.data?.message || this.$t("Opps...something went wrong");
          toast.fire({ type: "error", title: errorMessage });
        });
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        itemType: this.form.itemType,
        itemName: this.form.itemName,
        itemModel: this.form.itemModel,
        itemCode: this.form.itemCode,
        category: this.form.category,
        subCategory: this.form.subCategory,
        brand: this.form.brand,
        unit: this.form.unit,
        barcodeSymbology: this.form.barcodeSymbology,
        itemTax: this.form.itemTax,
        taxType: this.form.taxType,
        regularPrice: this.form.regularPrice,
        discountType: this.form.discountType,
        discountValue: this.form.discountValue,
        discountPrice: this.form.discountPrice,
        wholesalePrice: this.form.wholesalePrice,
        wholesaleQuantity: this.form.wholesaleQuantity,
        purchasePrice: this.form.purchasePrice,
        servicePurchasePrice: this.form.servicePurchasePrice,
        openingStock: this.form.openingStock,
        openingStockValue: this.form.openingStockValue,
        reorderPoint: this.form.reorderPoint,
        salesAccountId: this.form.salesAccountId,
        purchaseAccountId: this.form.purchaseAccountId,
        isSalesAccountAutomatic: this.isSalesAccountAutomatic,
        isPurchaseAccountAutomatic: this.isPurchaseAccountAutomatic,
        status: this.form.status,
        note: this.form.note,
        image: this.form.image ? this.form.image.name : null,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('productTempData', JSON.stringify(tempData))
      
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('productTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.itemType = data.itemType || 'product'
          this.form.itemName = data.itemName || ''
          this.form.itemModel = data.itemModel || ''
          this.form.itemCode = data.itemCode || ''
          this.form.category = data.category || null
          this.form.subCategory = data.subCategory || null
          this.form.brand = data.brand || null
          this.form.unit = data.unit || null
          this.form.barcodeSymbology = data.barcodeSymbology || 'code128'
          this.form.itemTax = data.itemTax || null
          this.form.taxType = data.taxType || 'inclusive'
          this.form.regularPrice = data.regularPrice || ''
          this.form.discountType = data.discountType || 'fixed'
          this.form.discountValue = data.discountValue || ''
          this.form.discountPrice = data.discountPrice || ''
          this.form.wholesalePrice = data.wholesalePrice || ''
          this.form.wholesaleQuantity = data.wholesaleQuantity || ''
          this.form.purchasePrice = data.purchasePrice || ''
          this.form.servicePurchasePrice = data.servicePurchasePrice || ''
          this.form.openingStock = data.openingStock || ''
          this.form.openingStockValue = data.openingStockValue || ''
          this.form.reorderPoint = data.reorderPoint || ''
          this.form.salesAccountId = data.salesAccountId || null
          this.form.purchaseAccountId = data.purchaseAccountId || null
          this.isSalesAccountAutomatic = data.isSalesAccountAutomatic !== undefined ? data.isSalesAccountAutomatic : true
          this.isPurchaseAccountAutomatic = data.isPurchaseAccountAutomatic !== undefined ? data.isPurchaseAccountAutomatic : true
          this.form.status = data.status !== undefined ? data.status : 1
          this.form.note = data.note || ''
          // Note: Image file cannot be restored from localStorage
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('productTempData')
    },
  },
}
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

/* Custom File Input Styling */
.custom-file-input {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
}

.custom-file-label {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
  color: #374151;
}

.custom-file-input:focus ~ .custom-file-label {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

/* Image Preview Styling */
.bg-light {
  background-color: #F8F9FA !important;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #E5E7EB;
}

.img-fluid {
  border-radius: 8px;
  max-width: 100%;
  height: auto;
}

/* Form Check Styling */
.form-check-input {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
}

.form-check-input:checked {
  background-color: #2AB930 !important;
  border-color: #2AB930 !important;
}

.form-check-label {
  color: #374151;
  font-weight: 500;
}

/* Input Group Styling */
.input-group-text {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  color: #374151;
  font-weight: 500;
}

/* Button Group Toggle Styling */
.btn-outline-custom {
  color: #1B3C71;
  border-color: #1B3C71;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  border-radius: 10px;
  padding: 8px 16px;
  font-weight: 500;
}

.btn-outline-custom:hover,
.btn-custom-active {
  background-color: #1B3C71;
  color: #fff;
  border-color: #1B3C71;
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
}
</style> 