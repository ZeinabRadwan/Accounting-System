<template>
  <div>
    <VModal v-model="showSupplierEditModal" @close="showSupplierEditModal = false">
      <template v-slot:title>{{ $t("Edit Supplier") }}</template>
      <div class="w-100">
        <SupplierForm 
          ref="supplierForm"
          :showCardBody="false" 
          :initialData="supplierData" 
          @submit="updateSupplier"
        />
      </div>
      <div slot="modal-footer">
        <button @click="showSupplierEditModal = false" class="btn btn-secondary mr-2">
          <i class="fas fa-times" /> {{ $t("Cancel") }}
        </button>
        <button @click="updateSupplier" :disabled="loading" class="btn btn-success">
          <i class="fas fa-save" /> {{ $t("Update") }}
        </button>
      </div>
    </VModal>
  </div>
</template>

<script>
import VModal from "./VModal.vue";
import SupplierForm from "./SupplierForm.vue";

export default {
  name: "SupplierEditModal",
  components: {
    VModal,
    SupplierForm,
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    supplier: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      showSupplierEditModal: false,
      loading: false,
      supplierData: {},
    };
  },
  watch: {
    showModal(newVal) {
      this.showSupplierEditModal = newVal;
      if (newVal && this.supplier) {
        this.supplierData = this.mapSupplierData(this.supplier);
      }
    },
    showSupplierEditModal(newVal) {
      this.$emit("update:showModal", newVal);
    },
  },
  methods: {
    // Map supplier data to form format
    mapSupplierData(supplier) {
      return {
        // Account Details
        codeNumber: supplier.supplier_id ? supplier.supplier_id.toString().padStart(6, '0') : "000001",
        notes: supplier.notes || "",
        displayLanguage: supplier.display_language || "",
        
        // Supplier Details
        type: supplier.type || "Company",
        fullName: supplier.full_name || "",
        businessName: supplier.business_name || "",
        firstName: supplier.first_name || "",
        lastName: supplier.last_name || "",
        phone: supplier.phone || "",
        phoneNumber: supplier.phone || "",
        email: supplier.email || "",
        streetAddress1: supplier.street_address1 || "",
        streetAddress2: supplier.street_address2 || "",
        city: supplier.city || "",
        state: supplier.state || "",
        postalCode: supplier.postal_code || "",
        country: supplier.country || "SA",
        neighbourhood: supplier.neighbourhood || "",
        commercialRegister: supplier.commercial_register || "",
        taxCard: supplier.tax_card || "",
        
        // Additional Fields
        image: supplier.image || "",
        attachments: supplier.attachments ? JSON.parse(supplier.attachments) : [],
        status: supplier.status !== undefined ? supplier.status : 1,
        isSendEmail: supplier.is_send_email || false,
        isSendSMS: supplier.is_send_sms || false,
        
        // Legacy fields for backward compatibility
        name: supplier.name || "",
        companyName: supplier.company_name || "",
        taxRegistrationNumber: supplier.tax_registration_number || "",
        address: supplier.address || "",
      };
    },

    // Update supplier
    async updateSupplier() {
      try {
        this.loading = true;
        
        // Get form data from SupplierForm component
        const formData = this.$refs.supplierForm ? this.$refs.supplierForm.getFormData().data() : {};
        
        // Map to API format
        const updateData = {
          ...formData,
          // Map legacy fields for backward compatibility
          name: formData.type === 'Individual' ? formData.fullName : formData.businessName,
          companyName: formData.businessName,
          taxRegistrationNumber: formData.taxCard,
          address: formData.streetAddress1,
        };
        
        // Make API call to update supplier
        const response = await this.$http.put(`/api/suppliers/${this.supplier.slug}`, updateData);
        
        if (response.data.success) {
          // Show success message
          toast.fire({
            type: "success",
            title: this.$t("Supplier updated successfully"),
          });
          
          // Emit events
          this.$emit("supplierUpdated", response.data.data);
          this.$emit("reloadSuppliers");
          this.$emit("close");
          
          // Close modal
          this.showSupplierEditModal = false;
        } else {
          throw new Error(response.data.message || "Failed to update supplier");
        }
      } catch (error) {
        console.error("Error updating supplier:", error);
        toast.fire({
          type: "error",
          title: this.$t("Opps...something went wrong"),
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.btn {
  border-radius: 0.375rem;
  font-weight: 500;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #545b62;
  border-color: #545b62;
}
</style>
