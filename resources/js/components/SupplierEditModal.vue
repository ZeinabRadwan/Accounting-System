<template>
  <div>
    <VModal v-model="showSupplierEditModal" @close="closeModal">
      <template v-slot:title>{{ $t("Edit Supplier") }}</template>
      <template>
        <SupplierForm
          ref="supplierForm"
          :showCardBody="false"
          :initialData="supplierData"
          :fullWidthSections="true"
        />
        <div slot="modal-footer">
          <button @click="submitItem($event)" :disabled="isSubmitting" class="btn btn-success">
            <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
            <i v-else class="fas fa-save"></i>
            {{ isSubmitting ? $t("Saving...") : $t("Save") }}
          </button>
          <button @click="closeModal" class="btn btn-secondary ml-2">
            {{ $t("Cancel") }}
          </button>
        </div>
      </template>
    </VModal>
    <a @click="toggleModal" class="edit-button">
      <slot></slot>
    </a>
  </div>
</template>

<script>
import SupplierForm from "./SupplierForm.vue";
import Swal from "sweetalert2";

const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});

export default {
  name: "SupplierEditModal",
  middleware: ["auth", "check-permissions"],
  components: {
    SupplierForm,
  },
  props: {
    // Supplier data to edit
    supplier: {
      type: Object,
      required: false,
      default: () => ({})
    },
    // Control modal visibility from parent
    showModal: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    showSupplierEditModal: false,
    form: null,
    isSubmitting: false,
    supplierData: {},
  }),
  watch: {
    // Watch for changes in supplier prop
    supplier: {
      handler(newSupplier) {
        if (newSupplier && Object.keys(newSupplier).length > 0) {
          this.mapSupplierData(newSupplier);
        }
      },
      immediate: true,
      deep: true
    },
    // Watch showModal prop and sync with internal state
    showModal: {
      handler(newValue) {
        if (newValue !== this.showSupplierEditModal) {
          this.showSupplierEditModal = newValue;
          if (newValue) {
            // Modal is opening, fetch full supplier data if needed
            this.handleModalOpen();
          }
        }
      },
      immediate: true
    },
    // Watch internal state and emit to parent (for .sync modifier)
    showSupplierEditModal(newValue) {
      // Only emit if it's different from prop to avoid loops
      if (newValue !== this.showModal) {
        this.$emit('update:showModal', newValue);
      }
    }
  },
  methods: {
    // Map supplier data to form structure
    mapSupplierData(supplierData) {
      this.supplierData = {
        // Preserve ID and slug for API calls
        id: supplierData.id,
        slug: supplierData.slug,

        // Account Details
        codeNumber: supplierData.codeNumber || supplierData.supplierID || supplierData.code_number || (supplierData.supplier_id ? supplierData.supplier_id.toString().padStart(6, '0') : '000001'),
        notes: supplierData.notes || '',
        displayLanguage: supplierData.displayLanguage || supplierData.display_language || '',

        // Supplier Details
        type: supplierData.type || 'Company',
        fullName: supplierData.fullName || (supplierData.type === 'Individual' ? supplierData.name : '') || supplierData.full_name || '',
        businessName: supplierData.businessName || supplierData.companyName || supplierData.company_name || supplierData.business_name || (supplierData.type === 'Company' ? supplierData.name : ''),
        firstName: supplierData.firstName || supplierData.first_name || '',
        lastName: supplierData.lastName || supplierData.last_name || '',
        phone: supplierData.phone || '',
        phoneNumber: supplierData.phoneNumber || supplierData.phone_number || supplierData.phone || supplierData.mobile || '',
        email: supplierData.email || '',

        // Address Information
        streetAddress1: supplierData.streetAddress1 || supplierData.street_address_1 || supplierData.street_address1 || supplierData.address || '',
        streetAddress2: supplierData.streetAddress2 || supplierData.street_address_2 || supplierData.street_address2 || '',
        city: supplierData.city || '',
        state: supplierData.state || '',
        postalCode: supplierData.postalCode || supplierData.postal_code || '',
        country: supplierData.country || 'SA',
        saudi_region: supplierData.saudi_region || supplierData.saudi_region_id || null,
        neighbourhood: supplierData.neighbourhood || '',

        // Saudi National Address fields
        buildingNumber: supplierData.buildingNumber || supplierData.building_number || '',
        streetNumber: supplierData.streetNumber || supplierData.street_number || '',
        districtNumber: supplierData.districtNumber || supplierData.district_number || '',
        unitNumber: supplierData.unitNumber || supplierData.unit_number || '',
        additionalNumber: supplierData.additionalNumber || supplierData.additional_number || '',

        // Business Information
        commercialRegister: supplierData.commercialRegister || supplierData.commercial_register || supplierData.taxRegistrationNumber || supplierData.tax_registration_number || '',
        taxCard: supplierData.taxCard || supplierData.tax_card || '',

        // Additional Fields
        image: supplierData.image || '',
        image_path: supplierData.image_path || '',
        attachments: Array.isArray(supplierData.attachments) ? supplierData.attachments : (supplierData.attachments ? JSON.parse(supplierData.attachments) : []),
        status: supplierData.status !== undefined ? supplierData.status : 1,
        isSendEmail: Boolean(supplierData.isSendEmail || supplierData.is_send_email),
        isSendSMS: Boolean(supplierData.isSendSMS || supplierData.is_send_sms),

        // Representatives (ensure this is included)
        representatives: Array.isArray(supplierData.representatives) ? supplierData.representatives : [],

        // Chart of Account
        chartOfAccountId: supplierData.chartOfAccountId || supplierData.chart_of_account_id || null,

        // Legacy fields for backward compatibility
        name: supplierData.name || '',
        companyName: supplierData.companyName || supplierData.company_name || '',
        taxRegistrationNumber: supplierData.taxRegistrationNumber || supplierData.tax_registration_number || '',
        address: supplierData.address || '',
      };
    },

    // Edit supplier
    async submitItem(evt) {
      evt.preventDefault();
      await this.editSupplier();
    },

    async editSupplier() {
      if (this.isSubmitting) return;

      this.isSubmitting = true;

      try {
        // Get the form from the SupplierForm component
        this.form = this.$refs.supplierForm.getFormData();

        // Validate the form
        if (!await this.$refs.supplierForm.validateForm()) {
          this.isSubmitting = false;
          return;
        }

        // Get form data directly from SupplierForm component
        const formData = this.$refs.supplierForm.getFormData();

        // Build the submit data manually (same as SupplierForm.submitForm does)
        const submitData = {
          codeNumber: formData.codeNumber,
          notes: formData.notes,
          displayLanguage: formData.displayLanguage,
          status: formData.status,
          type: formData.type,
          fullName: formData.fullName,
          businessName: formData.businessName,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          phoneNumber: formData.phoneNumber || '', // Explicitly include phone number
          email: formData.email,
          streetAddress1: formData.streetAddress1,
          city: formData.city,
          state: formData.state,
          postalCode: formData.postalCode,
          country: formData.country,
          saudi_region: formData.saudi_region,
          neighbourhood: formData.neighbourhood,
          commercialRegister: formData.commercialRegister,
          taxCard: formData.taxCard,
          buildingNumber: formData.buildingNumber,
          unitNumber: formData.unitNumber,
          additionalNumber: formData.additionalNumber,
          image: formData.image,
          attachments: formData.attachments,
          isSendEmail: formData.isSendEmail,
          isSendSMS: formData.isSendSMS,
          name: formData.type === 'Individual' ? formData.fullName : formData.businessName,
          companyName: formData.businessName,
          taxRegistrationNumber: formData.taxCard,
          address: formData.streetAddress1,
          representatives: formData.representatives || [],
          chartOfAccountId: formData.chartOfAccountId,
        };

        // Check if we have files (image or attachments) - if so, use FormData
        const hasFiles = (submitData.image && submitData.image instanceof File) ||
          (Array.isArray(submitData.attachments) && submitData.attachments.some(f => f instanceof File));

        const supplierSlug = this.supplierData.slug || this.supplier.slug;
        let response;

        if (hasFiles) {
          // Build multipart/form-data to properly send files (image, attachments)
          const fd = new FormData();

          const appendIfDefined = (key, value) => {
            if (value !== undefined && value !== null && value !== '') {
              fd.append(key, value);
            }
          };

          // Simple scalar fields
          appendIfDefined('codeNumber', submitData.codeNumber);
          appendIfDefined('notes', submitData.notes);
          appendIfDefined('displayLanguage', submitData.displayLanguage);
          appendIfDefined('type', submitData.type);
          appendIfDefined('fullName', submitData.fullName);
          appendIfDefined('businessName', submitData.businessName);
          appendIfDefined('companyName', submitData.businessName);
          appendIfDefined('firstName', submitData.firstName);
          appendIfDefined('lastName', submitData.lastName);
          appendIfDefined('phone', submitData.phone);

          // Phone number is required - always include it
          let phoneNumberValue = submitData.phoneNumber;
          if (phoneNumberValue === undefined || phoneNumberValue === null) {
            if (this.$refs.supplierForm && this.$refs.supplierForm.form) {
              phoneNumberValue = this.$refs.supplierForm.form.phoneNumber;
            }
          }
          phoneNumberValue = phoneNumberValue || '';
          const phoneNumberToSend = phoneNumberValue ? String(phoneNumberValue).trim() : '';
          fd.append('phoneNumber', phoneNumberToSend);

          appendIfDefined('email', submitData.email);
          appendIfDefined('streetAddress1', submitData.streetAddress1);
          appendIfDefined('city', submitData.city);
          appendIfDefined('state', submitData.state);
          appendIfDefined('postalCode', submitData.postalCode);
          appendIfDefined('country', submitData.country);
          appendIfDefined('saudi_region', submitData.saudi_region);
          appendIfDefined('neighbourhood', submitData.neighbourhood);
          appendIfDefined('commercialRegister', submitData.commercialRegister);
          appendIfDefined('taxCard', submitData.taxCard);
          appendIfDefined('status', submitData.status);
          appendIfDefined('isSendEmail', submitData.isSendEmail ? 1 : 0);
          appendIfDefined('isSendSMS', submitData.isSendSMS ? 1 : 0);

          // Saudi National Address Fields
          appendIfDefined('buildingNumber', submitData.buildingNumber);
          appendIfDefined('unitNumber', submitData.unitNumber);
          appendIfDefined('additionalNumber', submitData.additionalNumber);

          // Chart of Account
          if (submitData.chartOfAccountId) {
            fd.append('chartOfAccountId', submitData.chartOfAccountId);
          }

          // Image file
          if (submitData.image instanceof File) {
            fd.append('image', submitData.image);
          }

          // Attachments array
          if (Array.isArray(submitData.attachments)) {
            submitData.attachments.forEach((file, idx) => {
              if (file instanceof File) {
                fd.append(`attachments[${idx}]`, file);
              }
            });
          }

          // Representatives array (as nested fields)
          if (Array.isArray(submitData.representatives)) {
            submitData.representatives.forEach((rep, i) => {
              if (!rep) return;
              if (rep.name !== undefined && rep.name !== null) fd.append(`representatives[${i}][name]`, rep.name);
              if (rep.email) fd.append(`representatives[${i}][email]`, rep.email);
              if (rep.phone) fd.append(`representatives[${i}][phone]`, rep.phone);
              if (rep.position) fd.append(`representatives[${i}][position]`, rep.position);
            });
          }

          response = await this.$http.put(`/api/suppliers/${supplierSlug}`, fd, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
        } else {
          // No files, use JSON
          response = await this.$http.put(`/api/suppliers/${supplierSlug}`, submitData);
        }

        if (response.data.success) {
          toast.fire({
            type: "success",
            title: this.$t("Supplier updated successfully"),
          });

          this.$emit("reloadSuppliers");
          this.closeModal();
          this.form = null; // Reset form reference
        } else {
          throw new Error(response.data.message || 'Update failed');
        }

      } catch (error) {
        console.error("Error in editSupplier:", error);
        const errorMessage = error.response?.data?.message || this.$t("Please check your input and try again.");
        toast.fire({ type: "error", title: errorMessage });
        this.isSubmitting = false;
      }
    },

    async toggleModal() {
      this.showSupplierEditModal = !this.showSupplierEditModal;
      // Reset form when opening modal
      if (this.showSupplierEditModal) {
        this.form = null;
        this.isSubmitting = false;

        // If we have a supplier prop and it has a slug, fetch full data
        if (this.supplier && this.supplier.slug) {
          try {
            const response = await this.$http.get(`/api/suppliers/${this.supplier.slug}`);
            const fullSupplierData = response.data.data || response.data;
            this.mapSupplierData(fullSupplierData);
          } catch (error) {
            console.error('Error fetching full supplier data via toggle:', error);
            // Fallback to existing data
            if (this.supplier && Object.keys(this.supplier).length > 0) {
              this.mapSupplierData(this.supplier);
            }
          }
        }
      }
    },

    closeModal() {
      if (this.showSupplierEditModal) {
        this.showSupplierEditModal = false;
        this.$emit('update:showModal', false);
      }
      this.$emit('close');
    },

    // Handle modal opening - fetch full supplier data
    async handleModalOpen() {
      this.form = null;
      this.isSubmitting = false;

      // If we have a supplier prop and it has a slug, fetch full data
      if (this.supplier && this.supplier.slug) {
        try {
          const response = await this.$http.get(`/api/suppliers/${this.supplier.slug}`);
          const fullSupplierData = response.data.data || response.data;
          this.mapSupplierData(fullSupplierData);
        } catch (error) {
          console.error('Error fetching full supplier data:', error);
          // Fallback to existing data
          if (this.supplier && Object.keys(this.supplier).length > 0) {
            this.mapSupplierData(this.supplier);
          }
        }
      } else if (this.supplier && Object.keys(this.supplier).length > 0) {
        // Use existing data if no slug
        this.mapSupplierData(this.supplier);
      }
    },

    // Open modal with supplier data (fetch full data from API)
    async openModal(supplier = null) {
      const supplierToEdit = supplier || this.supplier;
      if (!supplierToEdit) {
        console.error('No supplier data provided for editing');
        return;
      }

      // Check if we have a slug to fetch full data
      if (supplierToEdit.slug) {
        try {
          // Fetch complete supplier data from API
          const response = await this.$http.get(`/api/suppliers/${supplierToEdit.slug}`);
          const fullSupplierData = response.data.data || response.data;
          this.mapSupplierData(fullSupplierData);
        } catch (error) {
          console.error('Error fetching full supplier data:', error);
          // Fallback to partial data if API call fails
          this.mapSupplierData(supplierToEdit);
        }
      } else {
        // Fallback to partial data if no slug
        this.mapSupplierData(supplierToEdit);
      }

      this.showSupplierEditModal = true;
      this.form = null;
      this.isSubmitting = false;
    },
  },
};
</script>

<style scoped>
.edit-button {
  text-decoration: none;
  cursor: pointer;
}

/* Make modal wider */
.modal-content {
  max-width: 1000px;
  margin: 1.75rem auto;
}
</style>
