<template>
  <div class="mb-50">
    <!-- Chart of Account Warning Alert - Same as edit form -->
    <div class="chart-account-warning" v-if="showWarning">
      <div class="warning-content">
        <div class="warning-icon">
          <i class="fas fa-info-circle"></i>
        </div>
        <div class="warning-text">
          <h6 class="warning-title">{{ $t('Chart of Account Required') }}</h6>
          <p class="warning-description">{{ $t('Client must have a Chart of Account assigned for journal entries') }}</p>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'clients.index' }" class="btn btn-info">
                  <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">
                    {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />
                  </template>
                  <template v-else>
                    <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">

                      {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />

                    </template>

                    <template v-else>

                      <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">


                        {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />


                      </template>


                      <template v-else>


                        <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}


                      </template>

                    </template>
                  </template>
                </router-link>
                <button type="button" class="btn btn-success" @click="submitForm" :title="$t('Save')">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <!-- form start -->
            <ClientForm 
              ref="clientForm"
              :showCardBody="false"
              @submit="saveClient"
            />
          </div>
          <!-- /.card-body -->
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                <button @click="submitForm" :disabled="isSubmitting" class="btn btn-success">
                  <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
                  <i v-else class="fas fa-save"></i> 
                  {{ isSubmitting ? $t("Saving...") : $t("Save") }}
                </button>
                <button type="reset" class="btn btn-info" @click="resetForm">
                  <i class="fas fa-power-off" /> {{ $t("Reset") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClientForm from "../../components/ClientForm.vue";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Client") };
  },
  components: {
    ClientForm,
  },
  data: () => ({
    breadcrumbsCurrent: "Create Client",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Clients",
        url: "clients.index",
      },
      {
        name: "Create",
        url: "",
      },
    ],
    form: null,
    isSubmitting: false,
  }),
  computed: {
    showWarning() {
      return false; // Temporarily disable warning to test component rendering
    }
  },
  mounted() {
    console.log('Create page mounted');
    console.log('ClientForm ref:', this.$refs.clientForm);
    // Load temporary data after component is mounted
    this.$nextTick(() => {
      this.loadTemporaryData()
    })
  },
  methods: {
    // Submit form by calling ClientForm's submitForm method
    submitForm() {
      if (this.$refs.clientForm) {
        this.$refs.clientForm.submitForm();
      }
    },
    
    // save client
    async saveClient(formData) {
      if (this.isSubmitting) return;
      
      this.isSubmitting = true;
      
      try {
        // Build multipart/form-data to properly send files (image, attachments)
        const fd = new FormData();

        const appendIfDefined = (key, value) => {
          if (value !== undefined && value !== null && value !== '') {
            fd.append(key, value);
          }
        };

        // Debug: Log formData before building FormData - CRITICAL
        console.log('=== CLIENT CREATE - FORM DATA RECEIVED ===');
        console.log('Client Create - formData received:', {
          taxStatus: formData.taxStatus,
          tax_status: formData.tax_status,
          allFormData: formData
        });
        console.log('Client Create - formData keys:', Object.keys(formData || {}));
        console.log('Client Create - formData.taxStatus type:', typeof formData.taxStatus);
        console.log('Client Create - formData.taxStatus value:', formData.taxStatus);
        console.log('Client Create - formData.tax_status value:', formData.tax_status);
        console.log('Client Create - $refs.clientForm exists:', !!this.$refs.clientForm);
        console.log('Client Create - $refs.clientForm.form exists:', !!(this.$refs.clientForm && this.$refs.clientForm.form));
        if (this.$refs.clientForm && this.$refs.clientForm.form) {
          console.log('Client Create - form.taxStatus:', this.$refs.clientForm.form.taxStatus);
          console.log('Client Create - form.data() taxStatus:', this.$refs.clientForm.form.data ? this.$refs.clientForm.form.data().taxStatus : 'N/A');
        }

        // Simple scalar fields
        appendIfDefined('codeNumber', formData.codeNumber);
        appendIfDefined('notes', formData.notes);
        appendIfDefined('displayLanguage', formData.displayLanguage);
        appendIfDefined('type', formData.type);
        
        // CRITICAL: Always append taxStatus - don't use appendIfDefined to ensure it's always sent
        // Get taxStatus from formData, or try to get it from form object if available
        let taxStatusValue = formData.taxStatus || formData.tax_status;
        
        console.log('Client Create - Initial taxStatus check:', {
          formDataTaxStatus: formData.taxStatus,
          formDataTax_status: formData.tax_status,
          currentTaxStatusValue: taxStatusValue
        });
        
        // If still not found, try to get it from the form component
        if (!taxStatusValue && this.$refs.clientForm && this.$refs.clientForm.form) {
          taxStatusValue = this.$refs.clientForm.form.taxStatus;
          console.log('Client Create - Got taxStatus from form object:', taxStatusValue);
        }
        
        // Default to non_taxable if still not found
        taxStatusValue = taxStatusValue || 'non_taxable';
        
        console.log('Client Create - Final taxStatusValue before appending:', taxStatusValue);
        
        // Always append taxStatus - never skip it, even if it's the default value
        // CRITICAL: Use explicit string conversion and ensure it's never null/undefined
        const taxStatusToSend = String(taxStatusValue || 'non_taxable');
        fd.append('taxStatus', taxStatusToSend);
        fd.append('tax_status', taxStatusToSend);
        
        console.log('=== CLIENT CREATE - APPENDING TAX STATUS ===');
        console.log('Client Create - taxStatusValue:', taxStatusValue);
        console.log('Client Create - taxStatusToSend:', taxStatusToSend);
        console.log('Client Create - Appended taxStatus to FormData:', taxStatusToSend);
        console.log('Client Create - formData.taxStatus:', formData.taxStatus);
        console.log('Client Create - formData.tax_status:', formData.tax_status);
        console.log('Client Create - form.taxStatus:', this.$refs.clientForm?.form?.taxStatus);
        
        // Verify it was added
        console.log('Client Create - FormData has taxStatus:', fd.has('taxStatus'));
        console.log('Client Create - FormData has tax_status:', fd.has('tax_status'));
        
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
          // Clear temporary data after successful save
          this.clearTemporaryData()
          toast.fire({
            type: "success",
            title: this.$t("Client added successfully"),
          });
          this.$router.push({ name: "clients.index" });
        } else {
          throw new Error(response.data.message || 'Failed to create client');
        }
      } catch (error) {
        console.error("Error creating client:", error);
        const status = error && error.response && error.response.status;
        const serverErrors = error && error.response && error.response.data && error.response.data.errors;
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
            console.log('Client Create - Set errors on form:', errorsObject);
          } else if (form && form.errors && typeof form.errors.record === 'function') {
            // Fallback to record method if set is not available
            const mapped = {};
            Object.keys(errorsObject).forEach(key => {
              mapped[key] = Array.isArray(errorsObject[key]) ? errorsObject[key][0] : errorsObject[key];
            });
            form.errors.record(mapped);
            console.log('Client Create - Recorded errors on form (fallback):', mapped);
          } else {
            console.warn('Client Create - Form errors object not available or invalid');
          }
          
          // Optionally scroll to the first invalid input
          this.$nextTick(() => {
            const invalid = document.querySelector('.is-invalid');
            if (invalid && typeof invalid.scrollIntoView === 'function') {
              invalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          });
          
          // Show detailed error messages in toast
          const errorTitle = errorMessages.length > 0 
            ? errorMessages.slice(0, 3).join(' | ') + (errorMessages.length > 3 ? ` (+${errorMessages.length - 3} more)` : '')
            : this.$t("Please check the form for errors and try again.")
          
          console.log('Client Create - Error messages for toast:', errorMessages);
          console.log('Client Create - Error title:', errorTitle);
          
          toast.fire({
            type: "error",
            title: this.$t("Validation Error"),
            text: errorTitle,
            html: errorMessages.length > 0 
              ? `<div style="text-align: left; max-height: 200px; overflow-y: auto;">${errorMessages.map(msg => `<div>• ${msg}</div>`).join('')}</div>`
              : undefined
          });
        } else {
          const message = error?.response?.data?.message || error?.message || this.$t("Please check your input and try again.")
          toast.fire({ 
            type: "error", 
            title: this.$t("Error"),
            text: message
          });
        }
      } finally {
        this.isSubmitting = false;
      }
    },
    // save form data temporarily
    saveTemporary() {
      if (this.$refs.clientForm && this.$refs.clientForm.form) {
        const form = this.$refs.clientForm.form
        const tempData = {
          type: form.type,
          fullName: form.fullName,
          businessName: form.businessName,
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          phoneNumber: form.phoneNumber,
          email: form.email,
          address: form.address,
          city: form.city,
          state: form.state,
          zipCode: form.zipCode,
          country: form.country,
          taxNumber: form.taxNumber,
          note: form.note,
          status: form.status,
          chartOfAccountId: form.chartOfAccountId,
          timestamp: new Date().toISOString()
        }
        localStorage.setItem('clientTempData', JSON.stringify(tempData))
        
      }
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
    
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('clientTempData')
      if (tempData && this.$refs.clientForm && this.$refs.clientForm.form) {
        try {
          const data = JSON.parse(tempData)
          const form = this.$refs.clientForm.form
          form.type = data.type || 'Individual'
          form.fullName = data.fullName || ''
          form.businessName = data.businessName || ''
          form.firstName = data.firstName || ''
          form.lastName = data.lastName || ''
          form.phone = data.phone || ''
          form.phoneNumber = data.phoneNumber || ''
          form.email = data.email || ''
          form.address = data.address || ''
          form.city = data.city || ''
          form.state = data.state || ''
          form.zipCode = data.zipCode || ''
          form.country = data.country || ''
          form.taxNumber = data.taxNumber || ''
          form.note = data.note || ''
          form.status = data.status !== undefined ? data.status : 1
          form.chartOfAccountId = data.chartOfAccountId || null
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('clientTempData')
    },

    // Reset form
    resetForm() {
      this.$refs.clientForm.resetForm();
    },
  },
};
</script>

<style scoped>
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

.create-btn {
  padding: 11px;
}

/* Improved warning and success styles */
.chart-account-warning,
.chart-account-success {
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.chart-account-warning {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border: 1px solid #ffc107;
}

.chart-account-success {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  border: 1px solid #28a745;
}

.warning-content,
.success-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.warning-icon,
.success-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.warning-icon {
  color: #856404;
}

.success-icon {
  color: #155724;
}

.warning-text,
.success-text {
  flex-grow: 1;
}

.warning-title,
.success-title {
  margin: 0 0 4px 0;
  font-weight: 600;
  font-size: 14px;
}

.warning-title {
  color: #856404;
}

.success-title {
  color: #155724;
}

.warning-description,
.success-description {
  margin: 0;
  font-size: 13px;
  opacity: 0.8;
}

.warning-description {
  color: #856404;
}

.success-description {
  color: #155724;
}

.warning-action {
  flex-shrink: 0;
}

/* Remove padding for button-plus icon-shape icon-sm btn-primary elements */
.button-plus.icon-shape.icon-sm.btn-primary {
  padding: 0;
}

.btn-primary {
  background: #2AB930 !important;
}

.btn-primary:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Responsive design */
@media (max-width: 768px) {
  .warning-content,
  .success-content {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .warning-action {
    width: 100%;
  }
  
  .btn-primary {
    width: 100%;
  }
}

/* Client status styles */
.client-status {
  font-size: 13px;
}

.client-warning,
.client-success {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
}

.client-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.client-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.btn-outline-warning {
  border-color: #ffc107;
  color: #856404;
  font-size: 12px;
  padding: 4px 8px;
}

.btn-outline-warning:hover {
  background-color: #ffc107;
  border-color: #ffc107;
  color: #212529;
}

.btn-outline-warning:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Product status styles */
.product-status {
  font-size: 13px;
}

.product-warning,
.product-success {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
}

.product-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.product-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

/* Account status styles */
.account-status {
  font-size: 13px;
}

.account-warning,
.account-success {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
}

.account-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.account-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

/* Horizontal radio button group */
.radio-group-horizontal {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
}

.radio-group-horizontal .form-check {
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

.radio-group-horizontal .form-check-input {
  margin-right: 8px;
}

.radio-group-horizontal .form-check-label {
  margin-bottom: 0;
  cursor: pointer;
}

/* Payment validation warning styles */
.text-warning {
  color: #856404 !important;
}

.text-warning small {
  font-size: 12px;
  font-weight: 500;
}

.text-warning i {
  margin-right: 4px;
}

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

/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}



.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Custom Status Badge Styling */
.invoices-create-table .badge.badge-danger {
  background: #FEF4F4 !important;
  color: #DC3545 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

/* Search Input Background Override */
.form-control{
  background: #fff !important;
}

.btn-primary {
  background: #2AB930 !important;
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
}
</style>
