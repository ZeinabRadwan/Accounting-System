<template>
  <div>
    <VModal v-model="showClientCreateModal" @close="showClientCreateModal = false">
      <template v-slot:title>{{ $t("Create Client") }}</template>
      <template>
        <ClientForm 
          ref="clientForm"
          :showCardBody="false"
          @submit="saveClient"
        />
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
import ClientForm from "./ClientForm.vue";

export default {
  name: "ClientCreateModal",
  middleware: ["auth", "check-permissions"],
  components: {
    ClientForm,
  },
  data: () => ({
    showClientCreateModal: false,
    form: null,
    isSubmitting: false,
    validationErrors: {},
  }),
  methods: {
    // Validate required fields before submission
    validateRequiredFields(formData) {
      this.validationErrors = {};
      let isValid = true;

      // Validate phoneNumber (required)
      if (!formData.phoneNumber || formData.phoneNumber.trim() === '') {
        this.validationErrors.phoneNumber = this.$t('Client phone number is required');
        isValid = false;
      }

      // Validate name field - derive from fullName or businessName based on type
      const clientType = formData.type || 'Individual';
      let clientName = null;
      
      if (clientType === 'Individual') {
        if (!formData.fullName || formData.fullName.trim() === '') {
          this.validationErrors.fullName = this.$t('Client name is required');
          isValid = false;
        } else {
          clientName = formData.fullName.trim();
        }
      } else if (clientType === 'Company') {
        if (!formData.businessName || formData.businessName.trim() === '') {
          this.validationErrors.businessName = this.$t('Business name is required');
          isValid = false;
        } else {
          clientName = formData.businessName.trim();
        }
      }

      // Validate email format if provided
      if (formData.email && formData.email.trim() !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
          this.validationErrors.email = this.$t('Invalid email format');
          isValid = false;
        }
      }

      // Validate numeric fields
      if (formData.additionalNumber && formData.additionalNumber.trim() !== '') {
        if (!/^\d+$/.test(formData.additionalNumber.trim())) {
          this.validationErrors.additionalNumber = this.$t('Additional Number must be numeric');
          isValid = false;
        }
      }

      if (formData.commercialRegister && formData.commercialRegister.trim() !== '') {
        if (!/^\d+$/.test(formData.commercialRegister.trim())) {
          this.validationErrors.commercialRegister = this.$t('Commercial Register must be numeric');
          isValid = false;
        }
      }

      if (formData.taxCard && formData.taxCard.trim() !== '') {
        if (!/^\d+$/.test(formData.taxCard.trim())) {
          this.validationErrors.taxCard = this.$t('Tax Number must be numeric');
          isValid = false;
        }
      }

      if (formData.taxRegistrationNumber && formData.taxRegistrationNumber.trim() !== '') {
        if (!/^\d+$/.test(formData.taxRegistrationNumber.trim())) {
          this.validationErrors.taxRegistrationNumber = this.$t('Tax Number must be numeric');
          isValid = false;
        }
      }

      return { isValid, clientName };
    },

    // save client
    async saveClient() {
      if (this.isSubmitting) return;
      
      this.isSubmitting = true;
      
      try {
        // Validate the form
        if (!this.$refs.clientForm.validateForm()) {
          this.isSubmitting = false;
          return;
        }

        // Get the form data from the ClientForm component
        const formData = this.$refs.clientForm.getFormData();
        
        // Validate required fields
        const validation = this.validateRequiredFields(formData);
        if (!validation.isValid) {
          this.isSubmitting = false;
          // Show validation errors
          this.showValidationErrors();
          return;
        }
        
        // Build multipart/form-data to properly send files and handle boolean conversion
        const fd = new FormData();

        const appendIfDefined = (key, value) => {
          if (value !== undefined && value !== null && value !== '') {
            fd.append(key, value);
          }
        };

        // Debug: Log formData before building FormData - CRITICAL
        console.log('ClientCreateModal - formData received:', {
          taxStatus: formData.taxStatus,
          tax_status: formData.tax_status,
          allFormData: formData
        });
        console.log('ClientCreateModal - formData keys:', Object.keys(formData || {}));
        console.log('ClientCreateModal - formData.taxStatus type:', typeof formData.taxStatus);
        console.log('ClientCreateModal - formData.taxStatus value:', formData.taxStatus);
        console.log('ClientCreateModal - formData.tax_status value:', formData.tax_status);
        console.log('ClientCreateModal - $refs.clientForm exists:', !!this.$refs.clientForm);
        console.log('ClientCreateModal - $refs.clientForm.form exists:', !!(this.$refs.clientForm && this.$refs.clientForm.form));
        if (this.$refs.clientForm && this.$refs.clientForm.form) {
          console.log('ClientCreateModal - form.taxStatus:', this.$refs.clientForm.form.taxStatus);
          console.log('ClientCreateModal - form.data() taxStatus:', this.$refs.clientForm.form.data ? this.$refs.clientForm.form.data().taxStatus : 'N/A');
        }

        // Simple scalar fields
        appendIfDefined('codeNumber', formData.codeNumber);
        appendIfDefined('notes', formData.notes);
        appendIfDefined('displayLanguage', formData.displayLanguage);
        appendIfDefined('type', formData.type);
        
        // CRITICAL: Always append taxStatus - don't use appendIfDefined to ensure it's always sent
        // Get taxStatus from formData, or try to get it from form object if available
        let taxStatusValue = formData.taxStatus || formData.tax_status;
        
        console.log('ClientCreateModal - Initial taxStatus check:', {
          formDataTaxStatus: formData.taxStatus,
          formDataTax_status: formData.tax_status,
          currentTaxStatusValue: taxStatusValue
        });
        
        // If still not found, try to get it from the form component
        if (!taxStatusValue && this.$refs.clientForm && this.$refs.clientForm.form) {
          taxStatusValue = this.$refs.clientForm.form.taxStatus;
          console.log('ClientCreateModal - Got taxStatus from form object:', taxStatusValue);
        }
        
        // Default to non_taxable if still not found
        taxStatusValue = taxStatusValue || 'non_taxable';
        
        console.log('ClientCreateModal - Final taxStatusValue before appending:', taxStatusValue);
        
        // Always append taxStatus - never skip it, even if it's the default value
        // CRITICAL: Use explicit string conversion and ensure it's never null/undefined
        const taxStatusToSend = String(taxStatusValue || 'non_taxable');
        fd.append('taxStatus', taxStatusToSend);
        fd.append('tax_status', taxStatusToSend);
        
        console.log('=== CLIENT CREATE MODAL - APPENDING TAX STATUS ===');
        console.log('ClientCreateModal - taxStatusValue:', taxStatusValue);
        console.log('ClientCreateModal - taxStatusToSend:', taxStatusToSend);
        console.log('ClientCreateModal - Appended taxStatus to FormData:', taxStatusToSend);
        console.log('ClientCreateModal - formData.taxStatus:', formData.taxStatus);
        console.log('ClientCreateModal - formData.tax_status:', formData.tax_status);
        console.log('ClientCreateModal - form.taxStatus:', this.$refs.clientForm?.form?.taxStatus);
        
        // Verify it was added
        console.log('ClientCreateModal - FormData has taxStatus:', fd.has('taxStatus'));
        console.log('ClientCreateModal - FormData has tax_status:', fd.has('tax_status'));
        
        // CRITICAL: Append name field - required by database
        // Derive name from fullName (Individual) or businessName (Company)
        const clientType = formData.type || 'Individual';
        const clientName = validation.clientName || (clientType === 'Individual' ? formData.fullName : formData.businessName);
        if (clientName && clientName.trim() !== '') {
          fd.append('name', clientName.trim());
        }
        
        appendIfDefined('fullName', formData.fullName);
        appendIfDefined('businessName', formData.businessName);
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
        appendIfDefined('neighbourhood', formData.neighbourhood);
        appendIfDefined('commercialRegister', formData.commercialRegister);
        appendIfDefined('taxCard', formData.taxCard);
        appendIfDefined('taxRegistrationNumber', formData.taxRegistrationNumber || formData.taxCard);
        appendIfDefined('buildingNumber', formData.buildingNumber);
        appendIfDefined('streetNumber', formData.streetNumber);
        appendIfDefined('districtNumber', formData.districtNumber);
        appendIfDefined('unitNumber', formData.unitNumber);
        appendIfDefined('additionalNumber', formData.additionalNumber);
        appendIfDefined('saudi_region', formData.saudi_region);
        appendIfDefined('status', formData.status);
        
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

        const response = await this.$http.post("/api/clients", fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        
        if (response.data.success) {
          toast.fire({
            type: "success",
            title: this.$t("Client added successfully"),
          });
          this.$emit("reloadClients");
          this.$refs.clientForm.resetForm();
          this.showClientCreateModal = false;
          this.form = null; // Reset form reference
        } else {
          throw new Error(response.data.message || 'Failed to create client');
        }
      } catch (error) {
        console.error("Error creating client:", error);
        const status = error && error.response && error.response.status;
        const serverErrors = error && error.response && error.response.data && error.response.data.errors;
        const errorMessage = error.response?.data?.message || error.message;
        
        // Handle SQL integrity constraint violations (e.g., Column 'name' cannot be null)
        if (errorMessage && (
          errorMessage.includes('Column \'name\' cannot be null') ||
          errorMessage.includes('Integrity constraint violation') ||
          errorMessage.includes('cannot be null')
        )) {
          toast.fire({
            type: "error",
            title: this.$t("Validation Error"),
            text: this.$t("Please fill in all required fields. Client name is required."),
            timer: 5000,
            timerProgressBar: true,
          });
          this.isSubmitting = false;
          return;
        }
        
        if (status === 422 && serverErrors && this.$refs.clientForm) {
          // Get form object directly from ClientForm component
          const form = this.$refs.clientForm.form;
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
            console.log('ClientCreateModal - Set errors on form:', errorsObject);
          } else if (form && form.errors && typeof form.errors.record === 'function') {
            // Fallback to record method if set is not available
            const mapped = {};
            Object.keys(errorsObject).forEach(key => {
              mapped[key] = Array.isArray(errorsObject[key]) ? errorsObject[key][0] : errorsObject[key];
            });
            form.errors.record(mapped);
            console.log('ClientCreateModal - Recorded errors on form (fallback):', mapped);
          } else {
            console.warn('ClientCreateModal - Form errors object not available or invalid');
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
          // Handle other server errors (500, network errors, etc.)
          let errorMessage = this.$t("An error occurred while creating the client. Please try again.");
          
          if (error.response?.data?.message) {
            // Try to translate common error messages
            const rawMessage = error.response.data.message;
            if (rawMessage.includes('cannot be null') || rawMessage.includes('required')) {
              errorMessage = this.$t("Please fill in all required fields.");
            } else {
              errorMessage = rawMessage;
            }
          } else if (error.message) {
            errorMessage = error.message;
          }
          
          toast.fire({
            type: "error",
            title: this.$t("Error"),
            text: errorMessage,
            timer: 5000,
            timerProgressBar: true,
          });
        }
      } finally {
        this.isSubmitting = false;
      }
    },

    // Show validation errors as inline alerts
    showValidationErrors() {
      // Clear previous errors
      if (this.$refs.clientForm && this.$refs.clientForm.form) {
        const form = this.$refs.clientForm.form;
        if (form.errors && typeof form.errors.clear === 'function') {
          form.errors.clear();
        }
      }
      
      // Set new validation errors
      if (this.$refs.clientForm && this.$refs.clientForm.form) {
        const form = this.$refs.clientForm.form;
        if (form.errors && typeof form.errors.set === 'function') {
          const errorsObject = {};
          Object.keys(this.validationErrors).forEach(key => {
            errorsObject[key] = [this.validationErrors[key]];
          });
          form.errors.set(errorsObject);
        }
      }
      
      // Show toast with validation errors
      const errorMessages = Object.values(this.validationErrors);
      if (errorMessages.length > 0) {
        toast.fire({
          type: "error",
          title: this.$t("Validation Error"),
          text: errorMessages[0],
          html: errorMessages.length > 1 
            ? `<div style="text-align: left;">${errorMessages.map(msg => `<div>• ${msg}</div>`).join('')}</div>`
            : undefined,
          timer: 5000,
          timerProgressBar: true,
        });
      }
    },

    toggleModal() {
      this.showClientCreateModal = !this.showClientCreateModal;
      // Reset form when opening modal
      if (this.showClientCreateModal) {
        this.form = null;
        this.isSubmitting = false;
        this.validationErrors = {};
      } else {
        // Clear validation errors when closing modal
        this.validationErrors = {};
      }
    },

    submitItem(evt) {
      evt.preventDefault();
      this.saveClient();
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

      // Field label mapping for client form fields
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
