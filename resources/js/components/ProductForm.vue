<template>
  <div class="product-form-container">
    <!-- Breadcrumbs for page mode -->
    <div v-if="mode === 'page'" class="row">
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
                <button type="button" class="btn btn-success" :disabled="form.busy" @click="submitForm" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <product-form-template
              :form="form"
              :form-id="formId"
              :product="product"
              :categories="categories"
              :units="units"
              :taxes="taxes"
              :chart-of-accounts="chartOfAccounts"
              :prefix="prefix"
              :url="url"
              :is-sales-account-automatic="isSalesAccountAutomatic"
              :is-purchase-account-automatic="isPurchaseAccountAutomatic"
              :is-edit-mode="isEditMode"
              @calculate-price="calculatePrice"
              @on-file-change="onFileChange"
              @on-override-sales-account-change="onOverrideSalesAccountChange"
              @on-override-purchase-account-change="onOverridePurchaseAccountChange"
              @submit-form="submitForm"
            />
          </div>
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                <VButton :loading="form.busy" type="success" native-type="button" @click.prevent="submitForm">
                  <i class="fas fa-save" /> {{ $t('Save') }}
                </VButton>
                <button type="reset" class="btn btn-info" @click="form.reset()">
                  <i class="fas fa-power-off" /> {{ $t('Reset') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal mode -->
    <div v-else>
      <VModal v-model="showModal" @close="closeModal" size="lg">
        <template v-slot:title>{{ modalTitle }}</template>
        <div class="w-100">
          <product-form-template
            :form="form"
            :form-id="formId"
            :product="product"
            :categories="categories"
            :units="units"
            :taxes="taxes"
            :chart-of-accounts="chartOfAccounts"
            :prefix="prefix"
            :url="url"
            :is-sales-account-automatic="isSalesAccountAutomatic"
            :is-purchase-account-automatic="isPurchaseAccountAutomatic"
            :is-edit-mode="isEditMode"
            @calculate-price="calculatePrice"
            @on-file-change="onFileChange"
            @on-override-sales-account-change="onOverrideSalesAccountChange"
            @on-override-purchase-account-change="onOverridePurchaseAccountChange"
            @submit-form="submitForm"
          />
        </div>
        <div slot="modal-footer">
          <button type="button" class="btn btn-secondary mr-2" @click="closeModal">
            {{ $t("Cancel") }}
          </button>
          <button @click="submitForm" :disabled="form.busy" class="btn btn-success">
            <i v-if="form.busy" class="fas fa-spinner fa-spin"></i>
            <i v-else class="fas fa-save"></i>
            {{ submitButtonText }}
          </button>
        </div>
      </VModal>
      <a @click="openModal" class="create-button">
        <slot></slot>
      </a>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
import { mapGetters } from 'vuex'
import Swal from 'sweetalert2'

const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})

export default {
  name: "ProductForm",
  components: {
    VModal: () => import('./VModal.vue'),
    VButton: () => import('./Button.vue'),
    Breadcrumbs: () => import('./Breadcrumbs.vue'),
    ProductFormTemplate: () => import('./ProductFormTemplate.vue'),
  },
  props: {
    mode: {
      type: String,
      default: 'page', // 'page' or 'modal'
      validator: value => ['page', 'modal'].includes(value)
    },
    product: {
      type: Object,
      default: null
    },
    formId: {
      type: String,
      default: 'productForm'
    }
  },
  data() {
    return {
      showModal: false,
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
        newOpeningStockCount: "",
        newOpeningStockUnitPrice: "",
        isOpeningStock: false,
        discount: "",
        sellingPrice: "",
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
      brands: [],
      units: [],
      taxes: [],
      chartOfAccounts: [],
      prefix: "",
      accountRoutingSettings: null,
      isSalesAccountAutomatic: false,
      isPurchaseAccountAutomatic: false,
      breadcrumbsCurrent: '',
      breadcrumbs: []
    }
  },
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
    modalTitle() {
      return this.product ? this.$t("Edit Product") : this.$t("Create Product")
    },
    submitButtonText() {
      return this.product ? this.$t("Update") : this.$t("Save")
    },
    isEditMode() {
      return !!this.product
    }
  },
  created() {
    this.initializeForm()
    this.loadData()
  },
  methods: {
    initializeForm() {
      if (this.mode === 'page') {
        this.breadcrumbsCurrent = this.product ? this.$t('Edit Item') : this.$t('Create Item')
        this.breadcrumbs = [
          { name: this.$t('Dashboard'), url: 'home' },
          { name: this.$t('Items'), url: 'products.index' },
          { name: this.product ? this.$t('Edit') : this.$t('Create'), url: '' }
        ]
      }
    },

    async loadData() {
      await Promise.all([
        this.getSubCategories(),
        this.getUnits(),
        this.getTaxes(),
        this.loadChartOfAccounts(),
        this.loadAccountRoutingSettings()
      ])

      if (!this.product) {
        this.getItemCode()
      } else {
        // Wait a bit to ensure chartOfAccounts is loaded before loading product data
        this.$nextTick(() => {
          this.loadProductData(this.product)
        })
      }
    },

    openModal() {
      this.showModal = true
      if (this.showModal) {
        this.loadAccountRoutingSettings()
      }
    },

    closeModal() {
      this.showModal = false
      this.form.reset()
      this.url = null
    },

    async submitForm() {
      if (this.product) {
        await this.updateProduct()
      } else {
        await this.saveProduct()
      }
    },

    // get all product categories
    async getSubCategories() {
      try {
        const { data } = await this.form.get(window.location.origin + "/api/all-product-sub-categories")
        this.categories = data.data
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    },

    // get all brands
    async getBrands() {
      try {
        const { data } = await axios.get(window.location.origin + "/api/all-brands")
        this.brands = data.data
      } catch (error) {
        console.error("Error fetching brands:", error)
      }
    },

    // get all units
    async getUnits() {
      try {
        const { data } = await axios.get(window.location.origin + "/api/all-units")
        this.units = data.data
      } catch (error) {
        console.error("Error fetching units:", error)
      }
    },

    // get all taxes
    async getTaxes() {
      try {
        const { data } = await axios.get(window.location.origin + "/api/all-vat-rates")
        this.taxes = data.data
        // assign default vat rate
        if (this.taxes && this.taxes.length > 0) {
          let defaultVatRateSlug = this.appInfo.defaultVatRateSlug
          this.form.productTax = this.taxes.find(tax => tax.slug === defaultVatRateSlug)
        }
        this.calculatePrice()
      } catch (error) {
        console.error("Error fetching taxes:", error)
      }
    },

    // get item code
    async getItemCode() {
      try {
        const { data } = await axios.get(window.location.origin + "/api/generate-itemcode")
        this.form.itemCode = data.code
        this.prefix = data.prefix
      } catch (error) {
        console.error("Error fetching item code:", error)
      }
    },

    // Load chart of accounts
    async loadChartOfAccounts() {
      try {
        const { data } = await axios.get(window.location.origin + "/api/products/chart-of-accounts")
        this.chartOfAccounts = data || []
      } catch (error) {
        console.error("Error loading chart of accounts:", error)
        this.chartOfAccounts = []
      }
    },

    // Load account routing settings
    async loadAccountRoutingSettings() {
      try {
        const response = await axios.get(window.location.origin + "/api/account-routing-settings/product-account-routing")
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
      } catch (error) {
        console.error("Error loading account routing settings:", error)
        this.isSalesAccountAutomatic = false
        this.isPurchaseAccountAutomatic = false
      }
    },

    // calculate selling price
    calculatePrice() {
      if (this.form.regularPrice && this.form.productTax && this.form.taxType) {
        let discount = 0
        if (this.form.discount && this.form.discount > 0) {
          discount = (this.form.discount / 100) * this.form.regularPrice
        }
        let currentPrice = this.form.regularPrice - discount
        let taxAmount = 0
        let totalTax = 0
        if (this.form.productTax.rate > 0) {
          taxAmount = this.form.productTax.rate / 100
        }
        if (this.form.taxType == "Exclusive") {
          totalTax = currentPrice * taxAmount
        }
        else {
          totalTax = currentPrice - currentPrice / (1 + taxAmount)
        }
        if (this.form.taxType == "Exclusive") {
          this.form.sellingPrice = this.form.regularPrice - discount + totalTax
        }
        else {
          this.form.sellingPrice =
            (this.form.regularPrice - discount) / (1 + taxAmount) + totalTax
        }
        return
      }
      this.form.sellingPrice = this.form.regularPrice
    },

    // vue file upload
    onFileChange(e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      if (file.size < 2111775 &&
        (file.type === "image/jpeg" ||
          file.type === "image/png" ||
          file.type === "image/gif")) {
        reader.onloadend = () => {
          this.form.image = reader.result
        }
        reader.readAsDataURL(file)
        this.url = URL.createObjectURL(file)
      }
      else {
        this.$toast.error(this.$t("Error!"), this.$t("Please select a valid thumbnail with size less than 2 MB"))
      }
    },

    // save product
    async saveProduct() {
      // Validate required fields based on item type
      if (this.form.itemType === 'service' && !this.form.servicePurchasePrice) {
        toast.fire({ 
          type: "error", 
          title: "Service Purchase Price is required for services" 
        })
        return
      }

      // Validate sales account - required if not automatic OR if override is checked
      const needsSalesAccount = !this.isSalesAccountAutomatic || this.form.overrideSalesAccount
      if (needsSalesAccount && !this.form.salesAccountId) {
        toast.fire({ 
          type: "error", 
          title: "Sales Account is required" 
        })
        return
      }

      // Validate purchase account - required if not automatic OR if override is checked
      const needsPurchaseAccount = !this.isPurchaseAccountAutomatic || this.form.overridePurchaseAccount
      if (needsPurchaseAccount && !this.form.purchaseAccountId) {
        toast.fire({ 
          type: "error", 
          title: "Purchase Account is required" 
        })
        return
      }

      // Check if form has any errors
      if (this.form.errors.any()) {
        toast.fire({ 
          type: "error", 
          title: "Please fix the form errors before submitting" 
        })
        return
      }
      
      await this.form
        .post(window.location.origin + "/api/products")
        .then((response) => {
          toast.fire({
            type: "success",
            title: this.$t("Product added successfully"),
          })
          
          // Emit the newly created product data
          if (response.data && response.data.data) {
            const newProduct = response.data.data
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
            }
            this.$emit('productCreated', formattedProduct)
          }
          
          // Store auto-assigned account IDs before reset
          const autoAssignedSalesAccountId = this.isSalesAccountAutomatic ? this.form.salesAccountId : null
          const autoAssignedPurchaseAccountId = this.isPurchaseAccountAutomatic ? this.form.purchaseAccountId : null
          
          this.form.reset()
          this.form.itemType = "product" // Reset to default
          this.form.overrideSalesAccount = false // Reset override flags
          this.form.overridePurchaseAccount = false
          
          // Restore auto-assigned account IDs after reset
          if (autoAssignedSalesAccountId) {
            this.form.salesAccountId = autoAssignedSalesAccountId
          }
          if (autoAssignedPurchaseAccountId) {
            this.form.purchaseAccountId = autoAssignedPurchaseAccountId
          }
          
          if (this.mode === 'modal') {
            this.showModal = false
          } else {
            this.$router.push({ name: 'products.index' })
          }
          this.$emit('reloadProducts')
        })
        .catch((error) => {
          console.error("Error creating product:", error)
          const errorMessage = error.response?.data?.message || "Please check your input and try again."
          toast.fire({ type: "error", title: errorMessage })
        })
    },

    // update product
    async updateProduct() {
      try {
        if (!this.product) {
          console.error('No product available for update')
          toast.fire({
            type: "error",
            title: this.$t("No product selected for update")
          })
          return
        }
        
        const productSlug = this.product.slug || this.product.productSlug || this.product.product_slug
        const productId = this.product.id || this.product.productID || this.product.product_id
        
        if (!productSlug && !productId) {
          console.error('No product identifier (slug or ID) available for update')
          toast.fire({
            type: "error",
            title: this.$t("Product identifier missing. Cannot update product.")
          })
          return
        }
        
        let identifier = productSlug
        if (!productSlug && productId) {
          identifier = productId
        }

        // Validate required fields based on item type
        if (this.form.itemType === 'service' && !this.form.servicePurchasePrice) {
          toast.fire({
            type: "error",
            title: this.$t("Service Purchase Price is required for services")
          })
          return
        }

        // Validate sales account - always required for edit mode
        if (!this.form.salesAccountId) {
          toast.fire({
            type: "error",
            title: this.$t("Sales Account is required")
          })
          return
        }

        // Validate purchase account - always required for edit mode
        if (!this.form.purchaseAccountId) {
          toast.fire({
            type: "error",
            title: this.$t("Purchase Account is required")
          })
          return
        }

        // Transform object fields to IDs before sending
        const formData = this.form.data()
        
        // Transform v-select objects to IDs
        if (formData.subCategory && typeof formData.subCategory === 'object') {
          formData.subCategory = formData.subCategory.id
        }
        if (formData.brand && typeof formData.brand === 'object') {
          formData.brand = formData.brand.id
        }
        if (formData.itemUnit && typeof formData.itemUnit === 'object') {
          formData.itemUnit = formData.itemUnit.id
        }
        if (formData.productTax && typeof formData.productTax === 'object') {
          formData.productTax = formData.productTax.id
        }
        
        const response = await axios.put(`/api/products/${identifier}`, formData)
        if (response.data.success) {
          toast.fire({
            type: "success",
            title: this.$t("Product updated successfully")
          })
          
          if (this.mode === 'modal') {
            this.showModal = false
          } else {
            this.$router.push({ name: 'products.index' })
          }
          
          this.$emit("reloadProducts")
          this.$emit("productUpdated", { 
            originalProduct: this.product, 
            updatedData: formData 
          })
          
          this.form.reset()
          this.url = null
        }
      } catch (error) {
        if (error.response && error.response.data) {
          if (error.response.data.errors) {
            this.form.errors.set(error.response.data.errors)
          } else {
            toast.fire({
              type: "error",
              title: error.response.data.message || this.$t("Error updating product")
            })
          }
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Error updating product")
          })
        }
        console.error('Error updating product:', error)
      }
    },

    loadProductData(product) {
      this.form.itemType = product.item_type || product.itemType || "product"
      this.form.itemName = product.name || product.item_name || ""
      this.form.itemModel = product.model || product.item_model || ""
      this.form.itemCode = product.code || product.item_code || ""
      this.form.barcodeSymbology = product.barcode_symbology || product.barcodeSymbology || product.symbology || "CODE128"

      // Handle subCategory - find the exact object from categories array
      if (product.subCategory) {
        if (typeof product.subCategory === 'object' && product.subCategory.id) {
          const categoryObject = this.categories.find(cat => cat.id == product.subCategory.id)
          this.form.subCategory = categoryObject || product.subCategory
        } else {
          const categoryObject = this.categories.find(cat => cat.id == product.subCategory)
          this.form.subCategory = categoryObject || product.subCategory
        }
      } else {
        const categoryId = product.sub_category_id || product.category_id
        if (categoryId) {
          const categoryObject = this.categories.find(cat => cat.id == categoryId)
          this.form.subCategory = categoryObject || ""
        } else {
          this.form.subCategory = ""
        }
      }

      // Handle unit - find the exact object from units array
      if (product.itemUnit) {
        if (typeof product.itemUnit === 'object' && product.itemUnit.id) {
          const unitObject = this.units.find(unit => unit.id == product.itemUnit.id)
          this.form.itemUnit = unitObject || product.itemUnit
        } else {
          const unitObject = this.units.find(unit => unit.id == product.itemUnit)
          this.form.itemUnit = unitObject || product.itemUnit
        }
      } else {
        const unitId = product.unit_id || product.item_unit || product.unit
        if (unitId) {
          const unitObject = this.units.find(unit => unit.id == unitId)
          this.form.itemUnit = unitObject || ""
        } else {
          this.form.itemUnit = ""
        }
      }

      // Handle tax field - find the exact object from taxes array
      if (product.itemTax) {
        if (typeof product.itemTax === 'object' && product.itemTax.id) {
          const taxObject = this.taxes.find(tax => tax.id == product.itemTax.id)
          this.form.productTax = taxObject || product.itemTax
        } else {
          const taxObject = this.taxes.find(tax => tax.id == product.itemTax)
          this.form.productTax = taxObject || product.itemTax
        }
      } else if (product.tax_id || product.tax || product.item_tax || product.vat_rate_id) {
        const taxId = product.tax_id || product.tax || product.item_tax || product.vat_rate_id
        const taxObject = this.taxes.find(tax => tax.id == taxId)
        this.form.productTax = taxObject || ""
      } else {
        this.form.productTax = ""
      }

      this.form.taxType = product.tax_type || product.taxType || "Exclusive"
      this.form.regularPrice = product.regular_price || product.regularPrice || product.price || ""
      this.form.servicePurchasePrice = product.service_purchase_price || product.servicePurchasePrice || ""
      this.form.discount = product.discount || 0
      this.form.sellingPrice = product.selling_price || product.sellingPrice || ""
      this.form.openingStockCount = product.opening_stock_count || product.openingStockCount || ""
      this.form.openingStockUnitPrice = product.opening_stock_unit_price || product.openingStockUnitPrice || ""
      this.form.note = product.note || product.description || ""
      this.form.status = product.status || "1"
      this.form.alertQuantity = product.alert_quantity || product.alertQuantity || product.alert_qty || 1
      // Handle sales account - find the exact object from chartOfAccounts array
      const salesAccountId = product.sales_account_id || (product.sales_account ? product.sales_account.id : "")
      if (salesAccountId) {
        const salesAccountObject = this.chartOfAccounts.find(account => account.id == salesAccountId)
        this.form.salesAccountId = salesAccountObject ? salesAccountObject.id : salesAccountId
      } else {
        this.form.salesAccountId = ""
      }

      // Handle purchase account - find the exact object from chartOfAccounts array
      const purchaseAccountId = product.purchase_account_id || (product.purchase_account ? product.purchase_account.id : "")
      if (purchaseAccountId) {
        const purchaseAccountObject = this.chartOfAccounts.find(account => account.id == purchaseAccountId)
        this.form.purchaseAccountId = purchaseAccountObject ? purchaseAccountObject.id : purchaseAccountId
      } else {
        this.form.purchaseAccountId = ""
      }
      this.url = product.image || ""

      // Calculate selling price after loading data
      this.$nextTick(() => {
        this.calculatePrice()
      })
    },

    // Handle Select it manually checkbox change
    onOverrideSalesAccountChange() {
      if (this.form.overrideSalesAccount) {
        this.form.salesAccountId = ""
      } else {
        if (this.isSalesAccountAutomatic && this.accountRoutingSettings.sales.main_account_id) {
          this.form.salesAccountId = this.accountRoutingSettings.sales.main_account_id
        }
      }
    },

    // Handle Select it manually checkbox change
    onOverridePurchaseAccountChange() {
      if (this.form.overridePurchaseAccount) {
        this.form.purchaseAccountId = ""
      } else {
        if (this.isPurchaseAccountAutomatic && this.accountRoutingSettings.purchase.main_account_id) {
          this.form.purchaseAccountId = this.accountRoutingSettings.purchase.main_account_id
        }
      }
    }

  }
}
</script>

<style scoped>
/* Styles will be added in next part */
</style>
