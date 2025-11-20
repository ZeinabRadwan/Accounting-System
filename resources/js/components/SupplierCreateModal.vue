<template>
  <div>
    <VModal v-model="showSupplierCreateModal" @close="showSupplierCreateModal = false">
      <template v-slot:title>{{ $t("Create Supplier") }}</template>
      <template>
        <SupplierForm ref="supplierForm" :showCardBody="false" :fullWidthSections="true" @submit="saveSupplier" />
        <div slot="modal-footer">
          <button @click="submitItem($event)" :disabled="isSubmitting" class="btn btn-success">
            <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
            <i v-else class="fas fa-save"></i>
            {{ isSubmitting ? $t("Saving...") : $t("Save") }}
          </button>
        </div>
      </template>
    </VModal>
    <a @click="toggleModal" class="create-button">
      <slot></slot>
    </a>
  </div>
</template>

<script>
import SupplierForm from "./SupplierForm.vue";

export default {
  name: "SupplierCreateModal",
  middleware: ["auth", "check-permissions"],
  components: {
    SupplierForm,
  },
  data: () => ({
    showSupplierCreateModal: false,
    form: null,
    isSubmitting: false,
  }),
  methods: {
    // save supplier
    async saveSupplier() {
      if (this.isSubmitting) return;

      this.isSubmitting = true;

      try {
        // Validate the form
        if (!this.$refs.supplierForm.validateForm()) {
          this.isSubmitting = false;
          return;
        }

        // Get the form data from the SupplierForm component
        const formData = this.$refs.supplierForm.getFormData();

        // Build multipart/form-data to properly send files and handle boolean conversion
        const fd = new FormData();

        const appendIfDefined = (key, value) => {
          if (value !== undefined && value !== null && value !== '') {
            fd.append(key, value);
          }
        };

        // Debug: Log formData before building FormData - CRITICAL
        console.log('SupplierCreateModal - formData received:', {
          taxStatus: formData.taxStatus,
          tax_status: formData.tax_status,
          allFormData: formData
        });
        console.log('SupplierCreateModal - formData keys:', Object.keys(formData || {}));
        console.log('SupplierCreateModal - formData.taxStatus type:', typeof formData.taxStatus);
        console.log('SupplierCreateModal - formData.taxStatus value:', formData.taxStatus);
        console.log('SupplierCreateModal - formData.tax_status value:', formData.tax_status);
        console.log('SupplierCreateModal - $refs.supplierForm exists:', !!this.$refs.supplierForm);
        console.log('SupplierCreateModal - $refs.supplierForm.form exists:', !!(this.$refs.supplierForm && this.$refs.supplierForm.form));
        if (this.$refs.supplierForm && this.$refs.supplierForm.form) {
          console.log('SupplierCreateModal - form.taxStatus:', this.$refs.supplierForm.form.taxStatus);
          console.log('SupplierCreateModal - form.data() taxStatus:', this.$refs.supplierForm.form.data ? this.$refs.supplierForm.form.data().taxStatus : 'N/A');
        }

        // Simple scalar fields
        appendIfDefined('codeNumber', formData.codeNumber);
        appendIfDefined('notes', formData.notes);
        appendIfDefined('displayLanguage', formData.displayLanguage);
        appendIfDefined('type', formData.type);

        // CRITICAL: Always append taxStatus - don't use appendIfDefined to ensure it's always sent
        // Get taxStatus from formData, or try to get it from form object if available
        let taxStatusValue = formData.taxStatus || formData.tax_status;

        console.log('SupplierCreateModal - Initial taxStatus check:', {
          formDataTaxStatus: formData.taxStatus,
          formDataTax_status: formData.tax_status,
          currentTaxStatusValue: taxStatusValue
        });

        // If still not found, try to get it from the form component
        if (!taxStatusValue && this.$refs.supplierForm && this.$refs.supplierForm.form) {
          taxStatusValue = this.$refs.supplierForm.form.taxStatus;
          console.log('SupplierCreateModal - Got taxStatus from form object:', taxStatusValue);
        }

        // Default to non_taxable if still not found
        taxStatusValue = taxStatusValue || 'non_taxable';

        console.log('SupplierCreateModal - Final taxStatusValue before appending:', taxStatusValue);

        // Always append taxStatus - never skip it, even if it's the default value
        // CRITICAL: Use explicit string conversion and ensure it's never null/undefined
        const taxStatusToSend = String(taxStatusValue || 'non_taxable');
        fd.append('taxStatus', taxStatusToSend);
        fd.append('tax_status', taxStatusToSend);

        console.log('=== SUPPLIER CREATE MODAL - APPENDING TAX STATUS ===');
        console.log('SupplierCreateModal - taxStatusValue:', taxStatusValue);
        console.log('SupplierCreateModal - taxStatusToSend:', taxStatusToSend);
        console.log('SupplierCreateModal - Appended taxStatus to FormData:', taxStatusToSend);
        console.log('SupplierCreateModal - formData.taxStatus:', formData.taxStatus);
        console.log('SupplierCreateModal - formData.tax_status:', formData.tax_status);
        console.log('SupplierCreateModal - form.taxStatus:', this.$refs.supplierForm?.form?.taxStatus);

        // Verify it was added
        console.log('SupplierCreateModal - FormData has taxStatus:', fd.has('taxStatus'));
        console.log('SupplierCreateModal - FormData has tax_status:', fd.has('tax_status'));

        appendIfDefined('fullName', formData.fullName);
        appendIfDefined('businessName', formData.businessName);
        appendIfDefined('companyName', formData.businessName);
        appendIfDefined('firstName', formData.firstName);
        appendIfDefined('lastName', formData.lastName);
        appendIfDefined('phone', formData.phone);
        appendIfDefined('phoneNumber', formData.phoneNumber);
        appendIfDefined('email', formData.email);
        appendIfDefined('streetAddress1', formData.streetAddress1);
        appendIfDefined('streetAddress2', formData.streetAddress2);
        appendIfDefined('city', formData.city);
        appendIfDefined('state', formData.state);
        appendIfDefined('postalCode', formData.postalCode);
        appendIfDefined('country', formData.country);
        appendIfDefined('saudi_region', formData.saudi_region);
        appendIfDefined('neighbourhood', formData.neighbourhood);
        appendIfDefined('commercialRegister', formData.commercialRegister);
        appendIfDefined('taxCard', formData.taxCard);
        appendIfDefined('status', formData.status);

        // Saudi National Address Fields
        appendIfDefined('buildingNumber', formData.buildingNumber);
        appendIfDefined('streetNumber', formData.streetNumber);
        appendIfDefined('districtNumber', formData.districtNumber);
        appendIfDefined('unitNumber', formData.unitNumber);
        appendIfDefined('additionalNumber', formData.additionalNumber);
        appendIfDefined('taxRegistrationNumber', formData.taxRegistrationNumber || formData.taxCard);

        // Handle name field - always required when type is Individual
        const name = formData.name || (formData.type === 'Individual' ? formData.fullName : formData.businessName);
        if (name) {
          fd.append('name', name);
        }

        // Handle address field
        const address = formData.address || formData.streetAddress1;
        if (address) {
          fd.append('address', address);
        }

        // Convert boolean values to integers for Laravel validation
        appendIfDefined('isSendEmail', formData.isSendEmail ? 1 : 0);
        appendIfDefined('isSendSMS', formData.isSendSMS ? 1 : 0);

        // Chart of account id (number or object)
        if (formData.chartOfAccountId && typeof formData.chartOfAccountId === 'object' && formData.chartOfAccountId.id) {
          appendIfDefined('chartOfAccountId', formData.chartOfAccountId.id);
        } else {
          appendIfDefined('chartOfAccountId', formData.chartOfAccountId);
        }

        // Image file
        if (formData.image instanceof File) {
          fd.append('image', formData.image);
        }

        // Attachments as files
        if (Array.isArray(formData.attachments)) {
          formData.attachments.forEach((file, idx) => {
            if (file instanceof File) {
              fd.append(`attachments[${idx}]`, file);
            }
          });
        }

        // Representatives array (as nested fields)
        if (Array.isArray(formData.representatives)) {
          formData.representatives.forEach((rep, i) => {
            if (!rep) return;
            if (rep.name !== undefined && rep.name !== null) fd.append(`representatives[${i}][name]`, rep.name);
            if (rep.email) fd.append(`representatives[${i}][email]`, rep.email);
            if (rep.phone) fd.append(`representatives[${i}][phone]`, rep.phone);
            if (rep.position) fd.append(`representatives[${i}][position]`, rep.position);
            if (rep.is_primary !== undefined && rep.is_primary !== null) fd.append(`representatives[${i}][is_primary]`, rep.is_primary ? 1 : 0);
            if (rep.notes) fd.append(`representatives[${i}][notes]`, rep.notes);
          });
        }

        const response = await this.$http.post("/api/suppliers", fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

        if (response.data.success) {
          toast.fire({
            type: "success",
            title: this.$t("Supplier added successfully"),
          });
          this.$emit("reloadSuppliers");
          this.$refs.supplierForm.resetForm();
          this.showSupplierCreateModal = false;
          this.form = null; // Reset form reference
        } else {
          throw new Error(response.data.message || 'Failed to create supplier');
        }
      } catch (error) {
        console.error("Error creating supplier:", error);
        const status = error && error.response && error.response.status;
        const serverErrors = error && error.response && error.response.data && error.response.data.errors;

        if (status === 422 && serverErrors && this.$refs.supplierForm) {
          // Get form object directly from SupplierForm component
          const form = this.$refs.supplierForm.form;
          const errorMessages = [];

          // Prepare errors object for vform
          const errorsObject = {};

          Object.keys(serverErrors).forEach((key) => {
            const messages = serverErrors[key];
            if (Array.isArray(messages) && messages.length > 0) {
              // Translate messages before adding to errorsObject
              const translatedMessages = messages.map(msg => this.translateValidationMessage(msg, key));
              errorsObject[key] = translatedMessages;

              // Collect error messages for toast notification
              const fieldLabel = this.getFieldLabel(key);
              translatedMessages.forEach(msg => {
                errorMessages.push(`${fieldLabel}: ${msg}`);
              });

              // Also map attachments.* to attachments field for UI display
              if (key.startsWith('attachments.')) {
                if (!errorsObject.attachments) {
                  errorsObject.attachments = translatedMessages;
                }
              }
            }
          });

          // Set errors on form using vform's set method
          if (form && form.errors && typeof form.errors.set === 'function') {
            form.errors.set(errorsObject);
            console.log('SupplierCreateModal - Set errors on form:', errorsObject);
          } else if (form && form.errors && typeof form.errors.record === 'function') {
            // Fallback to record method if set is not available
            const mapped = {};
            Object.keys(errorsObject).forEach(key => {
              mapped[key] = Array.isArray(errorsObject[key]) ? errorsObject[key][0] : errorsObject[key];
            });
            form.errors.record(mapped);
            console.log('SupplierCreateModal - Recorded errors on form (fallback):', mapped);
          } else {
            console.warn('SupplierCreateModal - Form errors object not available or invalid');
          }

          // Show detailed error messages in toast
          const errorTitle = errorMessages.length > 0
            ? errorMessages.slice(0, 3).join(' | ') + (errorMessages.length > 3 ? ` (+${errorMessages.length - 3} more)` : '')
            : this.$t("Please check the form for errors and try again.")

          toast.fire({
            type: "error",
            title: this.$t("Validation Error"),
            text: errorTitle,
            html: errorMessages.length > 0
              ? `<div style="text-align: left; max-height: 200px; overflow-y: auto;">${errorMessages.map(msg => `<div>• ${msg}</div>`).join('')}</div>`
              : undefined
          });
        } else {
          const errorMessage = error.response?.data?.message || this.$t("Please check your input and try again.");
          toast.fire({ type: "error", title: errorMessage });
        }
      } finally {
        this.isSubmitting = false;
      }
    },

    toggleModal() {
      this.showSupplierCreateModal = !this.showSupplierCreateModal;
      // Reset form when opening modal
      if (this.showSupplierCreateModal) {
        this.form = null;
        this.isSubmitting = false;
      }
    },

    submitItem(evt) {
      evt.preventDefault();
      this.saveSupplier();
    },

    // Get field label for error messages
    getFieldLabel(field) {
      const fieldLabelMap = {
        codeNumber: this.$t('Code Number'),
        notes: this.$t('Notes'),
        displayLanguage: this.$t('Display Language'),
        type: this.$t('Type'),
        fullName: this.$t('Full Name'),
        businessName: this.$t('Business Name'),
        firstName: this.$t('First Name'),
        lastName: this.$t('Last Name'),
        phone: this.$t('Phone'),
        phoneNumber: this.$t('Mobile Number'),
        email: this.$t('Email'),
        streetAddress1: this.$t('Street Address 1'),
        streetAddress2: this.$t('Street Address 2'),
        city: this.$t('City'),
        state: this.$t('State'),
        postalCode: this.$t('Postal Code'),
        country: this.$t('Country'),
        neighbourhood: this.$t('Neighbourhood'),
        commercialRegister: this.$t('Commercial Register'),
        taxCard: this.$t('Tax Card'),
        buildingNumber: this.$t('Building Number'),
        streetNumber: this.$t('Street Number'),
        districtNumber: this.$t('District Number'),
        unitNumber: this.$t('Unit Number'),
        additionalNumber: this.$t('Additional Number'),
        taxStatus: this.$t('Tax Status'),
        taxRegistrationNumber: this.$t('Tax Registration Number'),
        image: this.$t('Image'),
        attachments: this.$t('Attachments'),
        status: this.$t('Status'),
        chartOfAccountId: this.$t('Chart of Account'),
      };
      return fieldLabelMap[field] || field;
    },

    // translate validation messages from backend to localized messages
    translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      const direct = this.$t(message);
      if (direct && direct !== message) return direct;

      // Get current locale
      const currentLocale = this.$i18n.locale || 'en';
      const isArabic = currentLocale === 'ar';

      // Field label mapping for supplier form fields
      const fieldLabelMap = {
        codeNumber: this.$t('Code Number'),
        notes: this.$t('Notes'),
        displayLanguage: this.$t('Display Language'),
        type: this.$t('Type'),
        fullName: this.$t('Full Name'),
        businessName: this.$t('Business Name'),
        firstName: this.$t('First Name'),
        lastName: this.$t('Last Name'),
        phone: this.$t('Phone'),
        phoneNumber: this.$t('Mobile Number'),
        email: this.$t('Email'),
        streetAddress1: this.$t('Street Address 1'),
        streetAddress2: this.$t('Street Address 2'),
        city: this.$t('City'),
        state: this.$t('State'),
        postalCode: this.$t('Postal Code'),
        country: this.$t('Country'),
        neighbourhood: this.$t('Neighbourhood'),
        commercialRegister: this.$t('Commercial Register'),
        taxCard: this.$t('Tax Card'),
        buildingNumber: this.$t('Building Number'),
        streetNumber: this.$t('Street Number'),
        districtNumber: this.$t('District Number'),
        unitNumber: this.$t('Unit Number'),
        additionalNumber: this.$t('Additional Number'),
        taxStatus: this.$t('Tax Status'),
        taxRegistrationNumber: this.$t('Tax Registration Number'),
        image: this.$t('Image'),
        attachments: this.$t('Attachments'),
        status: this.$t('Status'),
        chartOfAccountId: this.$t('Chart of Account'),
      };

      // Try to translate common validation messages
      const commonMessages = {
        'required': isArabic ? 'مطلوب' : 'required',
        'must be exactly 15 digits': isArabic ? 'يجب أن يكون 15 رقم بالضبط' : 'must be exactly 15 digits',
        'must contain only numbers and be 15 digits': isArabic ? 'يجب أن يحتوي على أرقام فقط ويكون 15 رقم' : 'must contain only numbers and be 15 digits',
      };

      // Check if message contains common patterns
      for (const [pattern, translation] of Object.entries(commonMessages)) {
        if (message.toLowerCase().includes(pattern.toLowerCase())) {
          const fieldLabel = fieldLabelMap[field] || field;
          return `${fieldLabel}: ${translation}`;
        }
      }

      // Return original message if no translation found
      return message;
    },
  },
};
</script>
<style scoped>
.create-button {
  text-decoration: none;
  cursor: pointer;
}

/* Make modal wider */
.modal-content {
  max-width: 1000px;
  margin: 1.75rem auto;
}
</style>
