<template>
  <div>
    <VModal v-model="showSupplierCreateModal" @close="showSupplierCreateModal = false">
      <template v-slot:title>{{ $t("Create Supplier") }}</template>
      <div class="w-100">
        <SupplierForm 
          ref="supplierForm"
          :showCardBody="false" 
          @submit="createSupplier"
        />
      </div>
      <div slot="modal-footer">
        <button @click="showSupplierCreateModal = false" class="btn btn-secondary mr-2">
          <i class="fas fa-times" /> {{ $t("Cancel") }}
        </button>
        <button @click="createSupplier" :disabled="loading" class="btn btn-primary">
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
import VModal from "./VModal.vue";
import SupplierForm from "./SupplierForm.vue";

export default {
  name: "SupplierCreateModal",
  middleware: ["auth", "check-permissions"],
  components: {
    VModal,
    SupplierForm,
  },

  data: () => ({
    isDemoMode: window.config.isDemoMode,
    showSupplierCreateModal: false,
    loading: false,
  }),
  methods: {
    // Create supplier
    async createSupplier() {
      try {
        this.loading = true;
        
        // Get form data from SupplierForm component
        const formData = this.$refs.supplierForm ? this.$refs.supplierForm.getFormData().data() : {};
        
        console.log('Raw form data:', formData);
        
        // Map to API format
        const submitData = {
          ...formData,
          // Map legacy fields for backward compatibility
          name: formData.type === 'Individual' ? formData.fullName : formData.businessName,
          companyName: formData.businessName,
          taxRegistrationNumber: formData.taxCard,
          address: formData.streetAddress1,
        };
        
        console.log('Submit data:', submitData);
        
        // Make API call to create supplier
        const response = await this.$http.post("/api/suppliers", submitData);
        
        if (response.data.success) {
          // Show success message
          toast.fire({
            type: "success",
            title: this.$t("Supplier added successfully"),
          });
          
          // Emit events
          this.$emit("supplierCreated", response.data.data);
          this.$emit("reloadSuppliers");
          
          // Close modal
          this.showSupplierCreateModal = false;
        } else {
          throw new Error(response.data.message || "Failed to create supplier");
        }
      } catch (error) {
        console.error("Error creating supplier:", error);
        toast.fire({
          type: "error",
          title: this.$t("Opps...something went wrong"),
        });
      } finally {
        this.loading = false;
      }
    },

    // toggle modal
    toggleModal() {
      this.showSupplierCreateModal = !this.showSupplierCreateModal;
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style scoped>
.create-button {
  text-decoration: none;
  cursor: pointer;
}

.vue-tel-input {
  padding: 3px;
}

.ti__dropdown-list {
  z-index: 2;
}
</style>
