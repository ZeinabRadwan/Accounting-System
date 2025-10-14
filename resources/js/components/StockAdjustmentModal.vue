<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h5 class="modal-title">
          <i class="fas fa-exclamation-triangle text-warning mr-2"></i>
          {{ $t("Insufficient Stock") }}
        </h5>
        <button type="button" class="close" @click="closeModal">
          <span>&times;</span>
        </button>
      </div>
      
      <div class="modal-body">
        <div class="alert alert-warning" role="alert">
          <i class="fas fa-info-circle mr-2"></i>
          <strong>{{ $t("Stock Alert") }}:</strong>
          {{ $t("The selected quantity exceeds available stock for this product.") }}
        </div>
        
        <div class="product-info mb-4">
          <div class="row">
            <div class="col-md-6">
              <h6>{{ $t("Product Details") }}</h6>
              <p class="mb-1"><strong>{{ $t("Name") }}:</strong> {{ product.name || 'N/A' }}</p>
              <p class="mb-1"><strong>{{ $t("Code") }}:</strong> {{ productCodeWithPrefix }}</p>
              <p class="mb-1"><strong>{{ $t("Current Stock") }}:</strong> 
                <span class="badge badge-info">{{ product.inventoryCount || 0 }}</span>
              </p>
              <p class="mb-1"><strong>{{ $t("Required Quantity") }}:</strong> 
                <span class="badge badge-danger">{{ product.qty || 0 }}</span>
              </p>
            </div>
            <div class="col-md-6">
              <h6>{{ $t("Stock Shortage") }}</h6>
              <p class="text-danger">
                <i class="fas fa-exclamation-circle mr-1"></i>
                <strong>{{ shortageQuantity }}</strong> {{ $t("units short") }}
              </p>
            </div>
          </div>
        </div>

        <div class="stock-options">
          <h6>{{ $t("How to increase stock?") }}</h6>
          <div class="row">
            <div class="col-md-6">
              <div class="option-card" @click.stop="openInventoryAdjustment">
                <div class="option-icon">
                  <i class="fas fa-plus-circle text-success"></i>
                </div>
                <div class="option-content">
                  <h6>{{ $t("Quick Stock Adjustment") }}</h6>
                  <p class="text-muted">{{ $t("Add stock directly to inventory") }}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="option-card" @click.stop="openPurchaseOrder">
                <div class="option-icon">
                  <i class="fas fa-shopping-cart text-primary"></i>
                </div>
                <div class="option-content">
                  <h6>{{ $t("Create Purchase Order") }}</h6>
                  <p class="text-muted">{{ $t("Order more stock from supplier") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Stock Adjustment Form -->
        <div v-if="showQuickAdjustment" class="quick-adjustment mt-4">
          <div class="card">
            <div class="card-header">
              <h6 class="mb-0">
                <i class="fas fa-plus-circle text-success mr-2"></i>
                {{ $t("Quick Stock Adjustment") }}
              </h6>
            </div>
            <div class="card-body">
              <form @submit.prevent="submitQuickAdjustment">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="adjustmentReason">{{ $t("Reason") }} <span class="required">*</span></label>
                      <input 
                        id="adjustmentReason" 
                        v-model="adjustmentForm.reason" 
                        type="text" 
                        class="form-control"
                        :class="{ 'is-invalid': adjustmentForm.errors.has('reason') }"
                        :placeholder="$t('Enter reason for stock adjustment')"
                        required
                      />
                      <has-error :form="adjustmentForm" field="reason" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="adjustmentQuantity">{{ $t("Quantity to Add") }} <span class="required">*</span></label>
                      <input 
                        id="adjustmentQuantity" 
                        v-model="adjustmentForm.quantity" 
                        type="number" 
                        min="1"
                        class="form-control"
                        :class="{ 'is-invalid': adjustmentForm.errors.has('quantity') }"
                        :placeholder="$t('Enter quantity to add')"
                        required
                      />
                      <has-error :form="adjustmentForm" field="quantity" />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="adjustmentNote">{{ $t("Note") }}</label>
                  <textarea 
                    id="adjustmentNote" 
                    v-model="adjustmentForm.note" 
                    class="form-control"
                    rows="3"
                    :placeholder="$t('Enter additional notes (optional)')"
                  ></textarea>
                </div>
                <div class="form-actions">
                  <button type="button" class="btn btn-secondary" @click="showQuickAdjustment = false">
                    {{ $t("Cancel") }}
                  </button>
                  <button type="submit" class="btn btn-success" :disabled="adjustmentForm.busy">
                    <i class="fas fa-save mr-1"></i>
                    {{ $t("Add Stock") }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeModal">
          {{ $t("Close") }}
        </button>
        <button type="button" class="btn btn-primary" @click="adjustQuantity">
          <i class="fas fa-edit mr-1"></i>
          {{ $t("Adjust Quantity") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
import axios from "axios";
import Swal from "sweetalert2";
import { mapGetters } from "vuex";
import "~/plugins/filter";

const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});

export default {
  name: "StockAdjustmentModal",
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    product: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      showQuickAdjustment: false,
      adjustmentForm: new Form({
        reason: "",
        quantity: 1,
        note: ""
      })
    };
  },
  computed: {
    ...mapGetters("operations", ["appInfo"]),
    
    prefix() {
      return this.appInfo?.productPrefix || "";
    },
    
    shortageQuantity() {
      if (!this.product || !this.product.inventoryCount || !this.product.qty) {
        return 0;
      }
      return Math.max(0, this.product.qty - this.product.inventoryCount);
    },
    
    productCodeWithPrefix() {
      if (!this.product || !this.product.code) {
        return 'N/A';
      }
      return this.prefix + this.product.code;
    }
  },
  watch: {
    isOpen(newVal) {
      console.log("Modal isOpen changed to:", newVal);
      console.log("Product object:", this.product);
      if (newVal && this.product) {
        // Set default quantity to shortage amount
        this.adjustmentForm.quantity = this.shortageQuantity || 1;
        this.adjustmentForm.reason = "Stock shortage adjustment";
        console.log("Modal opened with product:", this.product.name);
      }
    }
  },
  mounted() {
    console.log("StockAdjustmentModal mounted");
    console.log("Initial isOpen:", this.isOpen);
    console.log("Initial product:", this.product);
  },
  
  beforeDestroy() {
    console.log("StockAdjustmentModal beforeDestroy");
    console.log("Product at destroy:", this.product);
  },
  methods: {
    closeModal() {
      this.$emit("close");
      this.showQuickAdjustment = false;
      this.adjustmentForm.reset();
    },
    
    adjustQuantity() {
      this.$emit("adjust-quantity", this.product);
      this.closeModal();
    },
    
    openInventoryAdjustment() {
      try {
        console.log("Opening inventory adjustment...");
        console.log("Product object:", this.product);
        
        // Validate product object
        if (!this.product || !this.product.id) {
          console.error("Invalid product object:", this.product);
          toast.fire({
            type: "error",
            title: this.$t("Error"),
            text: this.$t("Product information is missing. Please try again.")
          });
          return;
        }
        
        // Capture product data before closing modal to avoid null reference
        const productData = {
          id: this.product.id,
          name: this.product.name,
          code: this.product.code,
          slug: this.product.slug
        };
        
        console.log("Captured product data:", productData);
        
        // Ask parent to persist current form state before leaving
        this.$emit('persist');
        // Close modal first
        this.closeModal();
        
        // Then navigate with a small delay
        setTimeout(() => {
          try {
            console.log("Navigating to adjustments.create");
            console.log("Product ID:", productData.id);
            
            // Get current route safely
            const returnUrl = this.$route ? this.$route.fullPath : window.location.pathname;
            console.log("Return URL:", returnUrl);
            
            // Check if user has permission to create adjustments
            if (!this.$can('adjustment-create')) {
              toast.fire({
                type: "error",
                title: this.$t("Permission Denied"),
                text: this.$t("You don't have permission to create adjustments.")
              });
              return;
            }
            
            // Try navigation with fallback
            this.$router.push({ 
              name: "adjustments.create", 
              query: { 
                productId: productData.id,
                returnUrl: returnUrl
              } 
            }).then(() => {
              console.log("Navigation successful");
            }).catch(err => {
              console.error("Navigation error:", err);
              
              // Fallback: show alert with manual navigation option
              Swal.fire({
                title: this.$t("Navigate to Adjustments"),
                text: this.$t("Click OK to go to the adjustments page manually."),
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: this.$t("Go to Adjustments"),
                cancelButtonText: this.$t("Cancel")
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = '/inventory-adjustments/create?productId=' + productData.id + '&returnUrl=' + encodeURIComponent(returnUrl);
                }
              });
            });
          } catch (error) {
            console.error("Error in navigation timeout:", error);
            toast.fire({
              type: "error",
              title: this.$t("Error"),
              text: this.$t("An error occurred while navigating. Please try again.")
            });
          }
        }, 300);
      } catch (error) {
        console.error("Error in openInventoryAdjustment:", error);
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: this.$t("An unexpected error occurred. Please try again.")
        });
      }
    },
    
    openPurchaseOrder() {
      console.log("Opening purchase order...");
      // Close modal first
      this.closeModal();
      // Then navigate with a small delay
      setTimeout(() => {
        console.log("Navigating to purchases.create");
        this.$router.push({ name: "purchases.create" }).catch(err => {
          console.error("Navigation error:", err);
        });
      }, 300);
    },
    
    async submitQuickAdjustment() {
      try {
        // Create a quick inventory adjustment
        const adjustmentData = {
          adjustmentReason: this.adjustmentForm.reason,
          adjustmentDate: new Date().toISOString().slice(0, 10),
          note: this.adjustmentForm.note,
          status: 1,
          selectedProducts: [{
            slug: this.product.slug,
            adjustType: "Increment",
            adjustQty: parseInt(this.adjustmentForm.quantity),
            purchasePrice: this.product.avgPurchasePrice || 0
          }]
        };
        
        await axios.post("/api/inventory-adjustments", adjustmentData);
        
        toast.fire({
          type: "success",
          title: this.$t("Stock added successfully"),
          text: this.$t("The product stock has been increased.")
        });
        
        // Emit event to refresh product data
        this.$emit("stock-updated", {
          product: this.product,
          newQuantity: parseInt(this.adjustmentForm.quantity)
        });
        
        this.closeModal();
        
      } catch (error) {
        console.error("Error adding stock:", error);
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: this.$t("Failed to add stock. Please try again.")
        });
      }
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.modal-content {
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #dee2e6;
  background-color: #f8f9fa;
  border-radius: 10px 10px 0 0;
}

.modal-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6c757d;
}

.close:hover {
  color: #000;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 20px;
  border-top: 1px solid #dee2e6;
  background-color: #f8f9fa;
  border-radius: 0 0 10px 10px;
}

.option-card {
  display: flex;
  align-items: center;
  padding: 15px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 15px;
}

.option-card:hover {
  border-color: #007bff;
  background-color: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.option-icon {
  font-size: 2rem;
  margin-right: 15px;
  min-width: 50px;
  text-align: center;
}

.option-content h6 {
  margin: 0 0 5px 0;
  font-weight: 600;
}

.option-content p {
  margin: 0;
  font-size: 0.9rem;
}

.product-info {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

.quick-adjustment .card {
  border: 1px solid #dee2e6;
  border-radius: 8px;
}

.quick-adjustment .card-header {
  background-color: #e9ecef;
  border-bottom: 1px solid #dee2e6;
  padding: 15px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.required {
  color: #dc3545;
}

.badge {
  font-size: 0.875em;
  padding: 0.375rem 0.75rem;
}

.alert {
  border-radius: 8px;
  border: none;
}

.alert-warning {
  background-color: #fff3cd;
  color: #856404;
  border-left: 4px solid #ffc107;
}

/* RTL Support */
[dir="rtl"] .option-card {
  flex-direction: row-reverse;
}

[dir="rtl"] .option-icon {
  margin-right: 0;
  margin-left: 15px;
}

[dir="rtl"] .product-info {
  border-left: none;
  border-right: 4px solid #007bff;
}

[dir="rtl"] .alert-warning {
  border-left: none;
  border-right: 4px solid #ffc107;
}
</style>
