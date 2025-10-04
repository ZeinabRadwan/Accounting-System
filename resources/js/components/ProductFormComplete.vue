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
                <button type="submit" class="btn btn-success" :form="formId" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <form-component />
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
        </div>
      </div>
    </div>

    <!-- Modal mode -->
    <div v-else>
      <VModal v-model="showModal" @close="closeModal" size="lg">
        <template v-slot:title>{{ modalTitle }}</template>
        <div class="w-100">
          <form-component />
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

export default {
  name: "ProductFormComplete",
  components: {
    VModal: () => import('./VModal.vue'),
    HasError: () => import('vform/src/components/bootstrap5').then(m => m.HasError),
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
    }
  },
  created() {
    this.initializeForm()
    this.loadData()
  },
  methods: {
    initializeForm() {
      if (this.mode === 'page') {
        this.breadcrumbsCurrent = this.product ? 'Edit Item' : 'Create Item'
        this.breadcrumbs = [
          { name: 'Dashboard', url: 'home' },
          { name: 'Items', url: 'products.index' },
          { name: this.product ? 'Edit' : 'Create', url: '' }
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
        this.loadProductData(this.product)
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

    // All the methods from the previous file...
    // (I'll add them in the next part to keep this manageable)
  }
}
</script>

<style scoped>
/* Styles will be added */
</style>
