<template>
  <div>
    <!-- Render the slot content (trigger button) -->
    <div @click="product && openModal()" :style="{ cursor: product ? 'pointer' : 'not-allowed' }">
      <slot></slot>
    </div>

    <VModal v-model="showProductEditModal" @close="closeModal" size="lg">
      <template v-slot:title>{{ $t("Edit Product") }}</template>
      <div class="w-100">
        <!-- form start -->
        <form role="form" @submit.prevent="updateProduct" @keydown="form.onKeydown($event)">
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
                      <input v-model="form.itemCode" type="text" class="form-control" readonly
                        :class="{ 'is-invalid': form.errors.has('itemCode') }" name="itemCode"
                        :placeholder="$t('Enter item code')" />
                    </div>
                    <has-error :form="form" field="itemCode" />
                  </div>

                  <div class="form-group">
                    <label for="barcodeSymbology">{{ $t("Barcode Symbology") }} <span class="required">*</span></label>
                    <select id="barcodeSymbology" v-model="form.barcodeSymbology" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('barcodeSymbology') }" name="barcodeSymbology">
                      <option v-for="opt in barcodeSymbologyOptions" :key="opt" :value="opt">{{ opt }}</option>
                    </select>
                    <has-error :form="form" field="barcodeSymbology" />
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
                    <small class="form-text text-muted">{{ $t("Base unit (conversion factor = 1)") }}</small>
                    <has-error :form="form" field="itemUnit" />
                  </div>

                  <!-- Unit conversions -->
                  <div class="form-group mt-3">
                    <label class="d-block">{{ $t("Unit conversions") }}</label>
                    <small class="form-text text-muted mb-2">{{ $t("Link additional units with conversion factor relative to base unit (e.g. 1 Carton = 12 Pieces)") }}</small>
                    <div class="table-responsive">
                      <table class="table table-sm table-bordered">
                        <thead>
                          <tr>
                            <th>{{ $t("Unit") }}</th>
                            <th style="width: 180px;">{{ $t("Conversion factor") }}</th>
                            <th style="width: 80px;"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><span v-if="form.itemUnit">{{ form.itemUnit.name || form.itemUnit }}</span><span v-else class="text-muted">—</span></td>
                            <td>1 <span class="text-muted">({{ $t("base") }})</span></td>
                            <td></td>
                          </tr>
                          <tr v-for="(row, index) in form.unitConversions" :key="'uc-'+index">
                            <td>
                              <v-select v-model="row.unit" :options="additionalUnitOptions(index)" label="name"
                                :class="{ 'is-invalid': row.unit && !isValidConversionFactor(row.conversion_factor) }"
                                :placeholder="$t('Select a unit')" class="form-control form-control-sm" />
                            </td>
                            <td>
                              <input v-model.number="row.conversion_factor" type="number" step="any" min="0.0001" class="form-control form-control-sm"
                                :class="{ 'is-invalid': !isValidConversionFactor(row.conversion_factor) && row.conversion_factor !== '' }"
                                :placeholder="$t('e.g. 12')" />
                              <small v-if="row.unit" class="form-text text-muted">1 {{ row.unit.name }} = {{ row.conversion_factor || '?' }} {{ baseUnitName }}</small>
                            </td>
                            <td>
                              <button type="button" class="btn btn-sm btn-outline-danger" @click="removeUnitConversion(index)" :title="$t('Remove')">
                                <i class="fas fa-trash-alt"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button type="button" class="btn btn-sm btn-outline-primary" @click="addUnitConversion">
                      <i class="fas fa-plus mr-1"></i>{{ $t("Add unit") }}
                    </button>
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
                    <label for="openingStockEntryUnit">{{ $t("Opening Stock") }}</label>
                    <div class="row no-gutters">
                      <div class="col-5 pr-1">
                        <v-select
                          id="openingStockEntryUnit"
                          v-model="form.openingStockEntryUnit"
                          :options="openingStockUnitOptions"
                          label="name"
                          :class="{ 'is-invalid': form.errors.has('openingStockCount') || openingStockEntryUnitError }"
                          :placeholder="$t('Select unit')"
                          @input="updateOpeningStockFromEntry"
                        />
                      </div>
                      <div class="col-7 pl-1">
                        <input
                          id="openingStockEntryQuantity"
                          v-model="form.openingStockEntryQuantity"
                          type="number"
                          step="any"
                          min="0"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('openingStockCount') || openingStockEntryUnitError }"
                          :placeholder="$t('Quantity')"
                          @input="updateOpeningStockFromEntry"
                          @change="updateOpeningStockFromEntry"
                        />
                      </div>
                    </div>
                    <small v-if="form.openingStockCount !== '' && form.openingStockCount !== null && baseUnitName" class="form-text text-muted">
                      {{ $t("Stored as") }} {{ form.openingStockCount }} {{ baseUnitName }}
                    </small>
                    <has-error :form="form" field="openingStockCount" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="openingStockUnitPrice">{{ $t("Current Stock Unit Price") }}</label>
                    <input id="openingStockUnitPrice" v-model="form.openingStockUnitPrice" type="number" step="any" min="0" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('openingStockUnitPrice') }" name="openingStockUnitPrice" readonly />
                    <has-error :form="form" field="openingStockUnitPrice" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="alertQuantity">{{ $t("Alert Quantity") }}</label>
                    <input id="alertQuantity" v-model="form.alertQuantity" type="number" min="0" max="1000"
                      class="form-control" :class="{ 'is-invalid': form.errors.has('alertQuantity') }" name="alertQuantity"
                      :placeholder="$t('Enter alert quantity')" />
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
              <div class="row">
                <div class="col-md-6">
                  <!-- Sales Account -->
                  <div class="form-group">
                    <label for="salesAccountId">{{ $t("Sales Account") }} <span class="required">*</span></label>
                    <v-select
                      v-model="form.salesAccountId"
                      :options="chartOfAccounts"
                      label="name"
                      :reduce="option => option.id"
                      :class="{ 'is-invalid': form.errors.has('salesAccountId') }"
                      name="salesAccountId"
                      :placeholder="$t('Select sales account')"
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
                    <div v-if="isSalesAccountAutomatic" class="form-text text-info">
                      <i class="fas fa-info-circle"></i> {{ $t("Originally auto-assigned, but you can change it") }}
                    </div>
                    <has-error :form="form" field="salesAccountId" />
                  </div>
                </div>

                <div class="col-md-6">
                  <!-- Purchase Account -->
                  <div class="form-group">
                    <label for="purchaseAccountId">{{ $t("Purchase Account") }} <span class="required">*</span></label>
                    <v-select
                      v-model="form.purchaseAccountId"
                      :options="chartOfAccounts"
                      label="name"
                      :reduce="option => option.id"
                      :class="{ 'is-invalid': form.errors.has('purchaseAccountId') }"
                      name="purchaseAccountId"
                      :placeholder="$t('Select purchase account')"
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
                    <div v-if="isPurchaseAccountAutomatic" class="form-text text-info">
                      <i class="fas fa-info-circle"></i> {{ $t("Originally auto-assigned, but you can change it") }}
                    </div>
                    <has-error :form="form" field="purchaseAccountId" />
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
                <div class="col-md-6">
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
                
                <div class="col-md-6">
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
        <button type="button" class="btn btn-secondary mr-2" @click="closeModal">
          {{ $t("Cancel") }}
        </button>
        <button @click="updateProduct" :disabled="form.busy" class="btn btn-success">
          <i v-if="form.busy" class="fas fa-spinner fa-spin"></i>
          <i v-else class="fas fa-save"></i>
          {{ $t("Update") }}
        </button>
      </div>
    </VModal>
  </div>
</template>

<script>
import VModal from "./VModal.vue";
import Form from "vform";
import { HasError } from "vform/src/components/bootstrap5";
import axios from "axios";

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
      url: null,
      currentProduct: null, // Store the product being edited
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
        openingStockEntryUnit: null,
        openingStockEntryQuantity: "",
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
        unitConversions: [],
      }),
      categories: [],
      barcodeSymbologyOptions: ['CODE128', 'EAN13', 'EAN8', 'UPC', 'CODE39', 'ITF-14'],
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
  computed: {
    baseUnitName() {
      const u = this.form.itemUnit;
      return (u && u.name) ? u.name : (u ? String(u) : '');
    },
    openingStockUnitOptions() {
      const base = this.form.itemUnit;
      if (!base) return [];
      return [base, ...(this.form.unitConversions || []).filter(r => r.unit).map(r => r.unit)];
    },
    openingStockEntryUnitError() {
      if (this.form.itemType !== 'product') return false;
      const q = parseFloat(this.form.openingStockEntryQuantity);
      if (isNaN(q) || q <= 0) return false;
      const factor = this.getConversionFactor(this.form.openingStockEntryUnit);
      return factor <= 0;
    }
  },
  watch: {
    'form.itemUnit': {
      handler(newUnit) {
        if (newUnit && this.form.itemType === 'product') {
          this.form.openingStockEntryUnit = newUnit;
        }
      },
      immediate: false
    }
  },
  created() {
    // Pre-load dropdown data so it's available immediately when modal opens
    this.getSubCategories();
    this.getUnits();
    // this.getBrands(); // Temporarily commented out
    this.getTaxes();
    this.loadChartOfAccounts();
    this.loadAccountRoutingSettings();
  },
  methods: {
    addUnitConversion() {
      if (!Array.isArray(this.form.unitConversions)) {
        this.$set(this.form, 'unitConversions', []);
      }
      this.form.unitConversions.push({ unit: null, conversion_factor: '' });
    },
    removeUnitConversion(index) {
      this.form.unitConversions.splice(index, 1);
    },
    additionalUnitOptions(excludeIndex) {
      const baseId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit);
      const selectedIds = (this.form.unitConversions || [])
        .map((row, i) => i === excludeIndex ? null : (row.unit && (row.unit.id || row.unit)))
        .filter(Boolean);
      return (this.units || []).filter(u => {
        const id = u.id || u;
        return id != baseId && !selectedIds.includes(id);
      });
    },
    isValidConversionFactor(value) {
      const n = parseFloat(value);
      return !isNaN(n) && n > 0;
    },
    getConversionFactor(unit) {
      if (!unit) return 0;
      const baseId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit);
      const id = unit.id || unit;
      if (id == baseId) return 1;
      const row = (this.form.unitConversions || []).find(r => (r.unit && (r.unit.id || r.unit)) == id);
      return row ? (parseFloat(row.conversion_factor) || 0) : 0;
    },
    updateOpeningStockFromEntry() {
      const q = parseFloat(this.form.openingStockEntryQuantity);
      const factor = this.getConversionFactor(this.form.openingStockEntryUnit);
      if (isNaN(q) || q < 0) {
        this.form.openingStockCount = '';
        return;
      }
      if (!this.form.openingStockEntryUnit || factor <= 0) {
        this.form.openingStockCount = '';
        return;
      }
      this.form.openingStockCount = q * factor;
    },
    validateUnitConversions() {
      const baseUnitId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit);
      if (!baseUnitId) {
        return { valid: false, message: this.$t("Unit is required (base unit).") };
      }
      const additional = (this.form.unitConversions || []).filter(r => r.unit || (r.conversion_factor !== '' && r.conversion_factor !== null));
      for (let i = 0; i < additional.length; i++) {
        const r = additional[i];
        if (!r.unit) {
          return { valid: false, message: this.$t("Please select a unit for all conversion rows or remove empty rows.") };
        }
        const factor = parseFloat(r.conversion_factor);
        if (isNaN(factor) || factor <= 0) {
          return { valid: false, message: this.$t("Conversion factor must be a number greater than 0.") };
        }
      }
      if (this.form.itemType === 'product') {
        const q = parseFloat(this.form.openingStockEntryQuantity);
        if (!isNaN(q) && q > 0) {
          if (!this.form.openingStockEntryUnit) {
            return { valid: false, message: this.$t("Please select a unit for opening stock.") };
          }
          const factor = this.getConversionFactor(this.form.openingStockEntryUnit);
          if (factor <= 0) {
            return { valid: false, message: this.$t("Opening stock unit must have a valid conversion factor.") };
          }
          if (q < 0) {
            return { valid: false, message: this.$t("Opening stock quantity must be zero or greater.") };
          }
        }
      }
      return { valid: true, message: '' };
    },
    buildUnitConversionsPayload() {
      const baseUnitId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit);
      if (!baseUnitId) return [];
      return [
        { unit_id: baseUnitId, conversion_factor: 1 },
        ...(this.form.unitConversions || []).filter(r => r.unit).map(r => ({
          unit_id: r.unit && (r.unit.id || r.unit),
          conversion_factor: parseFloat(r.conversion_factor) || 0
        })).filter(r => r.unit_id && r.conversion_factor > 0)
      ];
    },
    async openModal(product = null) {
      // If product is passed as parameter, use it; otherwise use the prop
      const productToEdit = product || this.product;
      if (!productToEdit) {
        console.warn('No product provided to ProductEditModal');
        return;
      }

      // Store the product being edited in component data
      this.currentProduct = productToEdit;

      // Show modal immediately
      this.showProductEditModal = true;

      // Load product data immediately with available data
      this.loadProductData(productToEdit);

      // Check if we need to fetch complete product data in background
      const needsFullData = !productToEdit.itemUnit || !productToEdit.itemTax || 
                           !productToEdit.subCategory || !productToEdit.brand ||
                           typeof productToEdit.itemUnit === 'string' ||
                           typeof productToEdit.itemTax === 'string';

      if (needsFullData && (productToEdit.slug || productToEdit.id)) {
        console.log('Fetching complete product data from API...');
        const identifier = productToEdit.slug || productToEdit.id;
        try {
          const { data } = await axios.get(`/api/products/${identifier}`);
          // Update with complete product data from API
          this.loadProductData(data.data);
        } catch (error) {
          console.warn('Failed to fetch complete product data, using provided data:', error);
          // Keep using the initially loaded product data
        }
      }
    },

    loadProductData(product) {
      console.log('=== LOADING PRODUCT DATA DEBUG ===');
      console.log('Full product object:', product);
      console.log('Product keys:', Object.keys(product));
      console.log('Product structure:');
      console.log('- itemType/item_type:', product.itemType, '/', product.item_type);
      console.log('- name/item_name:', product.name, '/', product.item_name);
      console.log('- price/regular_price/regularPrice:', product.price, '/', product.regular_price, '/', product.regularPrice);
      console.log('- subCategory/sub_category_id:', product.subCategory, '/', product.sub_category_id);
      console.log('- itemUnit/unit_id/item_unit:', product.itemUnit, '/', product.unit_id, '/', product.item_unit);
      console.log('- itemTax/tax_id/vat_rate_id:', product.itemTax, '/', product.tax_id, '/', product.vat_rate_id);
      console.log('- brand/brand_id/itemBrand:', product.brand, '/', product.brand_id, '/', product.itemBrand);
      console.log('===================================');

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

      // Load unit conversions (additional units only; base unit has factor 1)
      const baseUnitId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit);
      const conversions = product.unitConversions || [];
      this.form.unitConversions = conversions
        .filter(c => {
          const uid = c.unit_id || (c.unit && c.unit.id);
          const factor = parseFloat(c.conversion_factor);
          return uid != baseUnitId && !isNaN(factor) && factor > 0;
        })
        .map(c => {
          const unitObj = this.units.find(u => u.id == (c.unit_id || (c.unit && c.unit.id)));
          return { unit: unitObj || null, conversion_factor: c.conversion_factor };
        });
      if (!Array.isArray(this.form.unitConversions)) {
        this.form.unitConversions = [];
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
      this.form.openingStockEntryUnit = this.form.itemUnit || null;
      this.form.openingStockEntryQuantity = product.opening_stock_count != null && product.opening_stock_count !== '' ? (product.opening_stock_count || product.openingStockCount || "") : "";
      this.form.openingStockUnitPrice = product.opening_stock_unit_price || product.openingStockUnitPrice || "";
      this.form.note = product.note || product.description || "";
      this.form.status = product.status || "1";
      this.form.alertQuantity = product.alert_quantity || product.alertQuantity || product.alert_qty || 1;
      this.form.salesAccountId = product.sales_account_id || (product.sales_account ? product.sales_account.id : "") || "";
      this.form.purchaseAccountId = product.purchase_account_id || (product.purchase_account ? product.purchase_account.id : "") || "";
      this.url = product.image || "";

      console.log('Form data after loading:', this.form.data()); // Debug log

      // Calculate selling price after loading data
      this.$nextTick(() => {
        this.calculatePrice();
      });
    },

    async updateProduct() {
      try {
        // Get the current product being edited (stored in component data)
        const currentProduct = this.currentProduct;
        
        // Debug logging to understand the product object structure
        console.log('Current product object:', currentProduct);
        console.log('Available properties:', currentProduct ? Object.keys(currentProduct) : 'No product');
        
        if (!currentProduct) {
          console.error('No product available for update');
          toast.fire({
            type: "error",
            title: this.$t("No product selected for update")
          });
          return;
        }
        
        // Check for slug property with fallbacks
        const productSlug = currentProduct.slug || currentProduct.productSlug || currentProduct.product_slug;
        const productId = currentProduct.id || currentProduct.productID || currentProduct.product_id;
        
        if (!productSlug && !productId) {
          console.error('No product identifier (slug or ID) available for update');
          console.error('Product object:', currentProduct);
          toast.fire({
            type: "error",
            title: this.$t("Product identifier missing. Cannot update product.")
          });
          return;
        }
        
        // If we don't have a slug but have an ID, we need to fetch the product to get the slug
        let identifier = productSlug;
        if (!productSlug && productId) {
          console.log('No slug found, attempting to use ID as fallback:', productId);
          // For now, try to use the ID directly - if the backend doesn't support it, we'll get an error
          identifier = productId;
        }

        // Validate required fields based on item type
        if (this.form.itemType === 'service' && !this.form.servicePurchasePrice) {
          toast.fire({
            type: "error",
            title: this.$t("Service Purchase Price is required for services")
          });
          return;
        }

        // Validate new opening stock fields if checkbox is checked
        if (this.form.isOpeningStock) {
          if (!this.form.newOpeningStockCount || this.form.newOpeningStockCount <= 0) {
            toast.fire({
              type: "error",
              title: this.$t("New Opening Stock Count is required and must be greater than 0")
            });
            return;
          }
          if (!this.form.newOpeningStockUnitPrice || this.form.newOpeningStockUnitPrice <= 0) {
            toast.fire({
              type: "error",
              title: this.$t("New Opening Stock Unit Price is required and must be greater than 0")
            });
            return;
          }
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

        const unitConvValidation = this.validateUnitConversions();
        if (!unitConvValidation.valid) {
          toast.fire({ type: "error", title: unitConvValidation.message });
          return;
        }

        console.log('Using identifier for API call:', identifier);
        
        // Transform object fields to IDs before sending
        const formData = this.form.data();
        formData.unit_conversions = this.buildUnitConversionsPayload();
        
        // Transform v-select objects to IDs
        if (formData.subCategory && typeof formData.subCategory === 'object') {
          formData.subCategory = formData.subCategory.id;
        }
        if (formData.brand && typeof formData.brand === 'object') {
          formData.brand = formData.brand.id;
        }
        if (formData.itemUnit && typeof formData.itemUnit === 'object') {
          formData.itemUnit = formData.itemUnit.id;
        }
        if (formData.productTax && typeof formData.productTax === 'object') {
          formData.productTax = formData.productTax.id;
        }
        
        // Debug: Log each field transformation
        console.log('Field transformations:');
        console.log('- subCategory:', this.form.subCategory, '→', formData.subCategory);
        console.log('- brand:', this.form.brand, '→', formData.brand);
        console.log('- itemUnit:', this.form.itemUnit, '→', formData.itemUnit);
        console.log('- productTax:', this.form.productTax, '→', formData.productTax);
        
        console.log('Form data being sent:', formData);
        
        const response = await axios.put(`/api/products/${identifier}`, formData);
        if (response.data.success) {
          // Show success message with system notification style
          toast.fire({
            type: "success",
            title: this.$t("Product updated successfully")
          });
          this.showProductEditModal = false;
          
          // Emit event with updated product data so parent can update its arrays
          this.$emit("reloadProducts");
          this.$emit("productUpdated", { 
            originalProduct: this.currentProduct, 
            updatedData: formData 
          });
          
          this.form.reset();
          this.url = null;
          this.currentProduct = null; // Clear the stored product
        }
      } catch (error) {
        if (error.response && error.response.data) {
          if (error.response.data.errors) {
            this.form.errors.set(error.response.data.errors);
          } else {
            toast.fire({
              type: "error",
              title: error.response.data.message || this.$t("Error updating product")
            });
          }
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Error updating product")
          });
        }
        console.error('Error updating product:', error);
      }
    },

    closeModal() {
      this.showProductEditModal = false;
      this.currentProduct = null; // Clear the stored product
      this.form.reset();
      this.url = null;
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
        // Get current branch ID
        const user = this.$store?.getters?.['auth/user'] || {}
        const branchId = user.default_branch_id || null
        
        if (!branchId) {
          console.error('Branch ID is required for account routing settings')
          this.accountRoutingSettings = {}
          return
        }
        
        const response = await axios.get(window.location.origin + "/api/account-routing-settings/product-account-routing", {
          params: { branch_id: branchId }
        })
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
        toast.fire({
          type: "error",
          title: this.$t('Please select a valid thumbnail with size less than 2 MB')
        });
      }
    },
  },
};
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-title {
    font-size: 0.95rem;
    margin-bottom: 12px;
  }
  
  .form-card .card-body {
    padding: 0.75rem;
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
}
</style>
