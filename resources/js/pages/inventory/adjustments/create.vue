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
                <router-link :to="{ name: 'adjustments.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="button" class="btn btn-success" @click="saveTemporary" :title="$t('Save Temporarily')">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="saveAdjustment" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div v-if="products" class="row">
                <div class="form-group col-md-6">
                  <label for="adjustmentReason">{{ $t("Adjustment Reason") }}
                    <span class="required">*</span></label>
                  <input id="adjustmentReason" v-model="form.adjustmentReason" type="text" class="form-control" :class="{
                    'is-invalid': form.errors.has('adjustmentReason'),
                  }" name="adjustmentReason" :placeholder="$t('Enter a reason')" />
                  <has-error :form="form" field="adjustmentReason" />
                </div>
                <div class="form-group col-md-6">
                  <label for="product">{{ $t("Select Products") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.product" :options="products" label="label" :class="{
                    'is-invalid': form.errors.has('selectedProducts'),
                  }" name="product" :placeholder="$t('Search products')"
                    @input="storeProduct(form.product)" />
                  <has-error :form="form" field="selectedProducts" />
                </div>
              </div>
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row mt-3 mb-4">
                <div class="table-responsive table-custom w-100 m-auto" style="max-width: 100%;">
                    <table class="table table-hover table-sm text-center invoices-create-table">
                      <thead>
                          <th>{{ $t("#") }}</th>
                          <th>{{ $t("Code") }}</th>
                          <th>{{ $t("Name") }}</th>
                          <th>{{ $t("Stock") }}</th>
                          <th class="w-200px">
                            {{ $t("Adjustment Type") }}
                          </th>
                          <th class="w-250px">{{ $t("Quantity") }}</th>
                          <th class="text-right">{{ $t("Action") }}</th>
                      </thead>
                    <tbody>
                      <tr v-for="(item, i) in form.selectedProducts" :key="i">
                        <td style="min-width: 30px;">{{ ++i }}</td>
                        <td style="min-width: 60px;">{{ item.itemCode | withPrefix(prefix) }}</td>
                        <td style="min-width: 120px;">{{ item.name }}</td>
                        <td>
                          <span class="btn btn-warning btn-sm">{{
                            item.stockQty
                          }}</span>
                        </td>
                        <td>
                          <select class="form-control" @change="
                            updateProduct(
                              $event.target.value,
                              'adjustType',
                              i - 1
                            )
                            " :id="`adjustType-${i}`" required>
                            <option value="Increment">
                              {{ $t("Increment") }}
                            </option>
                            <option value="Decrement">
                              {{ $t("Decrement") }}
                            </option>
                          </select>
                        </td>
                        <td>
                          <div class="input-group custom-qty-input">
                            <input type="button" value="-" class="button-minus icon-shape icon-sm btn-danger"
                              data-field="quantity" @click="
                                updateProduct(
                                  item.adjustQty > 1
                                    ? parseFloat(item.adjustQty) - 1
                                    : 1,
                                  'quantity',
                                  i - 1
                                )
                                " />
                            <input type="number" step="any" :id="`Qty-${i}`" name="quantity"
                              class="quantity-field border-0 incrementor" @change="
                                updateProduct(
                                  $event.target.value,
                                  'quantity',
                                  i - 1
                                )
                                " @keyup="updateProduct($event.target.value, 'quantity', i - 1)"
                              :placeholder="$t('Quantity')" min="1" :max="item.maxQty" :value="item.adjustQty"
                              required />
                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                              data-field="quantity" @click="
                                updateProduct(
                                  parseFloat(item.adjustQty) + 1,
                                  'quantity',
                                  i - 1
                                )
                                " />
                          </div>
                        </td>
                        <td class="text-right">
                          <button type="button" class="btn btn-danger" @click="removeItem(item)">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="form-group">
                <label for="note">{{ $t("Note") }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="adjustmentDate">{{
                    $t("Adjustment Date")
                  }}</label>
                  <input id="adjustmentDate" v-model="form.adjustmentDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('adjustmentDate') }" name="adjustmentDate" />
                  <has-error :form="form" field="adjustmentDate" />
                </div>
                <div class="form-group col-md-6">
                  <label for="status">{{ $t("Status") }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t("Active") }}</option>
                    <option value="0">{{ $t("Inactive") }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                  <v-button :loading="form.busy" type="success">
                    <i class="fas fa-save" /> {{ $t("Save") }}
                  </v-button>
                  <button type="reset" class="btn btn-info" @click="form.reset()">
                    <i class="fas fa-power-off" /> {{ $t("Reset") }}
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
import Form from "vform";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Adjustment") };
  },
  data: () => ({
    breadcrumbsCurrent: "Create Adjustment",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Adjustments",
        url: "adjustments.index",
      },
      {
        name: "Create",
        url: "",
      },
    ],
    form: new Form({
      selectedProducts: [],
      adjustmentReason: "",
      adjustmentDate: new Date().toISOString().slice(0, 10),
      note: "",
      status: 1,
    }),
    products: "",
    prefix: "",
    productPreSelected: false,
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
  },
  watch: {
    // Watch for products to be loaded and handle pre-selection
    products: {
      handler(newProducts) {
        if (newProducts && newProducts.length > 0) {
          // Use nextTick to ensure the DOM is updated
          this.$nextTick(() => {
            this.handleProductPreSelection();
          });
        }
      },
      immediate: true
    }
  },
  created() {
    this.getProducts();
    this.prefix = this.appInfo.productPrefix;
  },
  mounted() {
    this.loadTemporaryData();
    this.handleProductPreSelection();
  },
  methods: {
    // get products
    async getProducts() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-products"
      );
      this.products = data.data;
    },

    // store item in array
    storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(
        (x) => x.id == product.id
      );
      let quantity = 1;
      if (index === -1) {
        // store product
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          itemCode: product.code,
          purchasePrice: product.avgPurchasePrice,
          stockQty: product.inventoryCount,
          adjustType: "Increment",
          adjustQty: quantity,
          maxQty: 9999,
        });
      } else {
        // update qty
        if (this.form.selectedProducts[index]) {
          quantity = this.form.selectedProducts[index].adjustQty
            ? this.form.selectedProducts[index].adjustQty + 1
            : 1;
          this.form.selectedProducts[index].adjustQty = quantity;
        }
      }
      return;
    },

    // update array
    updateProduct(value, type, index) {
      let selectedProduct = this.form.selectedProducts[index];
      if (selectedProduct) {
        if (type == "quantity" && selectedProduct.adjustQty >= 1) {
          selectedProduct.adjustQty = value;
        } else if (type == "adjustType") {
          selectedProduct.adjustType = value;
          if (selectedProduct.adjustType == "Decrement") {
            selectedProduct.maxQty = selectedProduct.stockQty;
          } else {
            selectedProduct.maxQty = 9999;
          }
        } else {
          selectedProduct.purchasePrice = value;
          selectedProduct.adjustQty = 1;
        }
      }
      this.form.selectedProducts[index] = selectedProduct;
      return;
    },

    // remove item from array
    removeItem(item) {
      let index = this.form.selectedProducts.indexOf(item);
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1);
      }
      return;
    },

    // save adjustment
    async saveAdjustment() {
      await this.form
        .post(window.location.origin + "/api/inventory-adjustments")
        .then(() => {
          // Clear temporary data after successful save
          this.clearTemporaryData()
          toast.fire({
            type: "success",
            title: this.$t("Adjustment added successfully"),
          });
          this.$router.push({ name: "adjustments.index" });
        })
        .catch(() => {
          toast.fire({ type: "error", title: this.$t("Please check your input and try again.") });
        });
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        adjustmentReason: this.form.adjustmentReason,
        selectedProducts: this.form.selectedProducts,
        status: this.form.status,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('inventoryAdjustmentTempData', JSON.stringify(tempData))
      
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('inventoryAdjustmentTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.adjustmentReason = data.adjustmentReason || ''
          this.form.selectedProducts = data.selectedProducts || []
          this.form.status = data.status !== undefined ? data.status : 1
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('inventoryAdjustmentTempData')
    },
    
    // handle product pre-selection from query parameter
    handleProductPreSelection() {
      // Prevent multiple calls
      if (this.productPreSelected) {
        return;
      }
      
      const productId = this.$route.query.product_id;
      console.log('Product ID from query:', productId);
      console.log('Products available:', this.products);
      
      if (productId && this.products && this.products.length > 0) {
        // Find the product by ID
        const product = this.products.find(p => p.id == productId || p.id == parseInt(productId));
        console.log('Found product:', product);
        
        if (product) {
          // Check if product is already selected
          const existingIndex = this.form.selectedProducts.findIndex(
            (x) => x.id == product.id
          );
          
          if (existingIndex === -1) {
            // Pre-select the product
            this.storeProduct(product);
            this.productPreSelected = true;
            console.log('Product pre-selected successfully');
          } else {
            this.productPreSelected = true;
            console.log('Product already selected');
          }
        } else {
          console.log('Product not found with ID:', productId);
        }
      } else {
        console.log('Missing productId or products not loaded yet');
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
  border: none !important;
}

.btn-primary:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
}

.btn-danger {
  background: #DC3545 !important;
  color: white !important;
  border: none !important;
  font-weight: 500;
}

.btn-danger:hover {
  background: #C82333 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(220, 53, 69, 0.3);
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

.btn-warning {
  background: #FFC107 !important;
  color: #212529 !important;
  padding: 6px 12px !important;
  border-radius: 6px !important;
  border: none !important;
  font-weight: 500;
  font-size: 12px;
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
}

.v-select .vs__dropdown-toggle {
  background: #fff !important;
  border: 1px solid #E5E7EB !important;
  padding: 10px 16px !important;
}

.v-select .vs__dropdown-toggle:focus {
  border-color: #33a0d9 !important;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25) !important;
}

.v-select.is-invalid .vs__dropdown-toggle {
  border-color: #DC3545 !important;
}

/* Table Styling */
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

/* Custom Quantity Input Styling */
.custom-qty-input {
  display: flex;
  align-items: center;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}

.custom-qty-input .button-minus,
.custom-qty-input .button-plus {
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}

/* Remove padding for button-plus icon-shape icon-sm btn-primary elements */
.button-plus.icon-shape.icon-sm.btn-primary {
  padding: 0;
}

/* Remove padding for button-minus icon-shape icon-sm btn-danger elements */
.button-minus.icon-shape.icon-sm.btn-danger {
  padding: 0;
}

.custom-qty-input .quantity-field {
  background: #fff;
  border: none;
  text-align: center;
  padding: 8px 12px;
  min-width: 60px;
  font-weight: 500;
}

.custom-qty-input .quantity-field:focus {
  outline: none;
  background: white;
}

/* Additional Quantity Field Styling for invoices-create-table */
.invoices-create-table .quantity-field {
  border-radius: 0 !important;
  min-height: 50px !important;
  margin: 0 !important;
}

/* Row Spacing */
.row {
  margin-bottom: 1rem;
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
  
  .custom-qty-input {
    flex-direction: column;
    width: 100%;
  }
  
  .custom-qty-input .button-minus,
  .custom-qty-input .button-plus {
    width: 100%;
    margin: 2px 0;
  }
}
</style>
