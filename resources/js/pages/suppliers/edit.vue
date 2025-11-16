<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t('Edit Supplier') }}</h3>
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'suppliers.index' }" class="btn btn-info">
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
                </router-link>
                <button type="button" class="btn btn-success" @click="submitForm" :disabled="isSubmitting" :title="$t('Save')">
                  <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
                  <i v-else class="fas fa-save"></i>
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          
          <!-- Use the new SupplierForm component -->
          <SupplierForm 
            v-if="!loading && supplierData && supplierData.slug"
            ref="supplierForm"
            :showCardBody="true"
            :initialData="supplierData"
            @submit="saveSupplier"
          />
          
          <!-- Loading state -->
          <div v-else-if="loading" class="card-body text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">{{ $t('Loading...') }}</span>
            </div>
            <p class="mt-2">{{ $t('Loading supplier data...') }}</p>
          </div>
          
          <!-- Error state -->
          <div v-else class="card-body text-center">
            <div class="alert alert-danger">
              <i class="fas fa-exclamation-triangle"></i>
              {{ $t('Failed to load supplier data') }}
            </div>
          </div>
          
          <!-- Card footer with action buttons -->
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                <button type="button" :disabled="isSubmitting || loading || !isFormReady" class="btn btn-primary" @click="submitForm">
                  <i class="fas fa-edit" /> {{ $t("Save changes") }}
                </button>
                <button type="button" class="btn btn-secondary" @click="resetForm">
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
import SupplierForm from "../../components/SupplierForm.vue";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Edit Supplier") };
  },
  components: {
    SupplierForm,
  },
  data: () => ({
    breadcrumbsCurrent: "Edit Supplier",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Suppliers",
        url: "suppliers.index",
      },
      {
        name: "Edit",
        url: "",
      },
    ],
    loading: true,
    isSubmitting: false,
    supplierData: {},
  }),
  computed: {
    // Check if form is ready
    isFormReady() {
      const ready = !this.loading && this.supplierData && this.supplierData.slug && Object.keys(this.supplierData).length > 0;
      return ready;
    }
  },
  watch: {
    // Watch for form readiness
    '$refs.supplierForm': {
      handler(newVal) {
        if (newVal && newVal.getFormData && typeof newVal.getFormData().data === 'function') {
          this.loading = false;
        }
      },
      immediate: true
    }
  },
  async created() {
    try {
      await this.getSupplier();
    } catch (error) {
      console.error("Error in created lifecycle:", error);
    }
  },
  mounted() {
    // Load temporary data after component is mounted
    this.$nextTick(() => {
      this.loadTemporaryData()
    })
  },
  methods: {
    // Get supplier data
    async getSupplier() {
      try {
        // Check if we have a valid slug
        if (!this.$route.params.slug) {
          throw new Error("No supplier slug provided");
        }

        console.log("Fetching supplier with slug:", this.$route.params.slug);
        
        const response = await this.$http.get(
          `/api/suppliers/${this.$route.params.slug}`
        );
        
        if (!response.data) {
          throw new Error("No data received from API");
        }
        
        console.log("Raw API response data:", response.data);
        
        // The API response is wrapped in a 'data' object
        const supplierData = response.data.data || response.data;
        
        console.log("Supplier data slug:", supplierData.slug);
        console.log("Route params slug:", this.$route.params.slug);
        
        // Map the API response fields to the new form structure
        this.supplierData = {
          // Include the actual slug from the supplier data for representatives loading
          slug: supplierData.slug || this.$route.params.slug,
          
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
          streetAddress1: supplierData.streetAddress1 || supplierData.street_address_1 || supplierData.street_address1 || supplierData.address || '',
          streetAddress2: supplierData.streetAddress2 || supplierData.street_address_2 || supplierData.street_address2 || '',
          city: supplierData.city || '',
          state: supplierData.state || '',
          postalCode: supplierData.postalCode || supplierData.postal_code || '',
          country: supplierData.country || 'SA',
          neighbourhood: supplierData.neighbourhood || '',
          
          // Saudi National Address fields
          buildingNumber: supplierData.buildingNumber || supplierData.building_number || '',
          streetNumber: supplierData.streetNumber || supplierData.street_number || '',
          districtNumber: supplierData.districtNumber || supplierData.district_number || '',
          unitNumber: supplierData.unitNumber || supplierData.unit_number || '',
          additionalNumber: supplierData.additionalNumber || supplierData.additional_number || '',
          
          commercialRegister: supplierData.commercialRegister || supplierData.commercial_register || supplierData.taxRegistrationNumber || supplierData.tax_registration_number || '',
          taxCard: supplierData.taxCard || supplierData.tax_card || '',
          
          // Additional Fields
          image: supplierData.image || '',
          attachments: supplierData.attachments || [],
          status: supplierData.status !== undefined ? supplierData.status : 1,
          isSendEmail: Boolean(supplierData.isSendEmail || supplierData.is_send_email),
          isSendSMS: Boolean(supplierData.isSendSMS || supplierData.is_send_sms),
          
          // Chart of Account
          chartOfAccountId: supplierData.chartOfAccountId || supplierData.chart_of_account_id || null,
          
          // Representatives
          representatives: supplierData.representatives || [],
          
          // Legacy fields for backward compatibility
          name: supplierData.name || '',
          companyName: supplierData.companyName || supplierData.company_name || '',
          taxRegistrationNumber: supplierData.taxRegistrationNumber || supplierData.tax_registration_number || '',
          address: supplierData.address || '',
        };
        
        this.loading = false;
        
        console.log("Supplier data loaded successfully:", supplierData);
        console.log("Supplier data slug:", supplierData.slug);
        console.log("Route params slug:", this.$route.params.slug);
        console.log("Final slug used:", supplierData.slug || this.$route.params.slug);
        console.log("Mapped supplier data:", this.supplierData);
        
      } catch (error) {
        console.error("Error fetching supplier:", error);
        
        // Show error message if toast is available
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "error",
            title: this.$t("Failed to load supplier data"),
            text: error.message || "Please check the supplier slug and try again."
          });
        } else {
          // Fallback to console and alert if toast is not available
          console.error("Toast not available, showing alert");
          alert(this.$t("Failed to load supplier data: ") + (error.message || "Unknown error"));
        }
        
        // Don't redirect immediately, let user see the error
        this.loading = false;
        
        // Only redirect if it's a critical error (like invalid slug)
        if (error.response && error.response.status === 404) {
          setTimeout(() => {
            this.$router.push({ name: "suppliers.index" });
          }, 3000);
        }
      }
    },

    // Submit form by calling SupplierForm's submitForm method
    submitForm() {
      console.log('=== SUBMIT FORM CALLED ===');
      console.log('Is submitting:', this.isSubmitting);
      console.log('Is loading:', this.loading);
      console.log('Is form ready:', this.isFormReady);
      console.log('SupplierForm ref:', this.$refs.supplierForm);
      
      if (this.isSubmitting || this.loading) {
        console.log('Form is submitting or loading, ignoring click');
        return;
      }
      
      if (!this.isFormReady) {
        console.log('Form is not ready, ignoring click');
        return;
      }
      
      if (this.$refs.supplierForm) {
        console.log('Calling SupplierForm submitForm method...');
        this.$refs.supplierForm.submitForm();
      } else {
        console.error('SupplierForm ref is not available');
      }
    },

    // Save supplier
    async saveSupplier(formData) {
      console.log('=== SAVE SUPPLIER CALLED ===');
      console.log('Form data received:', formData);
      console.log('Is submitting:', this.isSubmitting);
      console.log('Loading:', this.loading);
      
      if (this.isSubmitting || this.loading) {
        console.log('Already submitting or loading, returning');
        return;
      }
      
      console.log('Save supplier called with form data:', formData);
      this.isSubmitting = true;
      
      try {
        // Check if we have files (image or attachments) - if so, use FormData
        const hasFiles = (formData.image && formData.image instanceof File) || 
                        (Array.isArray(formData.attachments) && formData.attachments.some(f => f instanceof File));
        
        console.log('Has files:', hasFiles);
        console.log('FormData phoneNumber:', formData.phoneNumber);
        console.log('FormData attachments:', formData.attachments);
        
        let requestData;
        let config = {};
        
        if (hasFiles) {
          // Build multipart/form-data to properly send files (image, attachments)
          const fd = new FormData();

          const appendIfDefined = (key, value) => {
            if (value !== undefined && value !== null && value !== '') {
              fd.append(key, value);
            }
          };

          // Simple scalar fields
          appendIfDefined('codeNumber', formData.codeNumber);
          appendIfDefined('notes', formData.notes);
          appendIfDefined('displayLanguage', formData.displayLanguage);
          appendIfDefined('type', formData.type);
          appendIfDefined('fullName', formData.fullName);
          appendIfDefined('businessName', formData.businessName);
          appendIfDefined('firstName', formData.firstName);
          appendIfDefined('lastName', formData.lastName);
          appendIfDefined('phone', formData.phone);
          
          // Phone number is required - always include it
          // Get phoneNumber from formData, or try to get it from the form directly
          let phoneNumberValue = formData.phoneNumber;
          if (phoneNumberValue === undefined || phoneNumberValue === null) {
            // Try to get from form directly
            if (this.$refs.supplierForm && this.$refs.supplierForm.form) {
              phoneNumberValue = this.$refs.supplierForm.form.phoneNumber;
            }
          }
          // Ensure we have a string value (even if empty)
          phoneNumberValue = phoneNumberValue || '';
          console.log('Adding phoneNumber to FormData:', phoneNumberValue);
          console.log('phoneNumber type:', typeof phoneNumberValue);
          console.log('phoneNumber length:', phoneNumberValue ? phoneNumberValue.length : 0);
          // Always append phoneNumber, even if empty string
          // Use explicit string conversion and ensure it's not null/undefined
          const phoneNumberToSend = phoneNumberValue ? String(phoneNumberValue).trim() : '';
          console.log('phoneNumberToSend:', phoneNumberToSend);
          fd.append('phoneNumber', phoneNumberToSend);
          
          // Debug: Log all FormData entries
          console.log('FormData entries:');
          for (let pair of fd.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
          }
          appendIfDefined('email', formData.email);
          appendIfDefined('streetAddress1', formData.streetAddress1);
          appendIfDefined('city', formData.city);
          appendIfDefined('state', formData.state);
          appendIfDefined('postalCode', formData.postalCode);
          appendIfDefined('country', formData.country);
          appendIfDefined('neighbourhood', formData.neighbourhood);
          appendIfDefined('commercialRegister', formData.commercialRegister);
          appendIfDefined('taxCard', formData.taxCard);
          appendIfDefined('status', formData.status);
          appendIfDefined('isSendEmail', formData.isSendEmail ? 1 : 0);
          appendIfDefined('isSendSMS', formData.isSendSMS ? 1 : 0);
          
          // Saudi National Address Fields
          appendIfDefined('buildingNumber', formData.buildingNumber);
          appendIfDefined('unitNumber', formData.unitNumber);
          appendIfDefined('additionalNumber', formData.additionalNumber);
          
          // Chart of Account
          if (formData.chartOfAccountId) {
            fd.append('chartOfAccountId', formData.chartOfAccountId);
          }
          
          // Image file
          if (formData.image instanceof File) {
            fd.append('image', formData.image);
          }
          
          // Attachments array
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
            });
          }
          
          requestData = fd;
          config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          };
        } else {
          // No files, use JSON
          requestData = formData;
        }
        
        console.log('Sending update request with data:', requestData);
        
        const response = await this.$http.put(`/api/suppliers/${this.supplierData.slug}`, requestData, config);
        
        console.log('API response received:', response);
        
        if (response.data.success) {
          console.log('Supplier updated successfully');
          // Clear temporary data after successful save
          this.clearTemporaryData()
          if (window.toast && typeof window.toast.fire === 'function') {
            window.toast.fire({
              type: "success",
              title: this.$t("Supplier updated successfully"),
            });
          } else {
            alert(this.$t("Supplier updated successfully"));
          }
          
          this.$router.push({ name: "suppliers.index" });
        } else {
          throw new Error(response.data.message || 'Update failed');
        }
      } catch (error) {
        console.error("Error saving supplier:", error);
        
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({ 
            type: "error", 
            title: this.$t("Please check your input and try again.") 
          });
        } else {
          alert(this.$t("Please check your input and try again."));
        }
      } finally {
        console.log('Setting isSubmitting to false');
        this.isSubmitting = false;
      }
    },

    // Reset form
    resetForm() {
      this.$refs.supplierForm.resetForm();
    },

    // save form data temporarily
    saveTemporary() {
      if (this.$refs.supplierForm && this.$refs.supplierForm.form) {
        const f = this.$refs.supplierForm.form
        const tempData = {
          codeNumber: f.codeNumber,
          notes: f.notes,
          displayLanguage: f.displayLanguage,
          type: f.type,
          fullName: f.fullName,
          businessName: f.businessName,
          firstName: f.firstName,
          lastName: f.lastName,
          phone: f.phone,
          phoneNumber: f.phoneNumber,
          email: f.email,
          streetAddress1: f.streetAddress1,
          streetAddress2: f.streetAddress2,
          city: f.city,
          state: f.state,
          postalCode: f.postalCode,
          country: f.country,
          neighbourhood: f.neighbourhood,
          commercialRegister: f.commercialRegister,
          taxCard: f.taxCard,
          attachments: f.attachments,
          status: f.status,
          isSendEmail: f.isSendEmail,
          isSendSMS: f.isSendSMS,
          chartOfAccountId: f.chartOfAccountId,
          representatives: f.representatives,
          timestamp: new Date().toISOString()
        }
        localStorage.setItem('supplierEditTempData', JSON.stringify(tempData))
         
      }
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('supplierEditTempData')
      if (tempData && this.$refs.supplierForm && this.$refs.supplierForm.form) {
        try {
          const d = JSON.parse(tempData)
          const f = this.$refs.supplierForm.form
          f.codeNumber = d.codeNumber || f.codeNumber
          f.notes = d.notes || f.notes
          f.displayLanguage = d.displayLanguage || f.displayLanguage
          f.type = d.type || f.type
          f.fullName = d.fullName || f.fullName
          f.businessName = d.businessName || f.businessName
          f.firstName = d.firstName || f.firstName
          f.lastName = d.lastName || f.lastName
          f.phone = d.phone || f.phone
          f.phoneNumber = d.phoneNumber || f.phoneNumber
          f.email = d.email || f.email
          f.streetAddress1 = d.streetAddress1 || f.streetAddress1
          f.streetAddress2 = d.streetAddress2 || f.streetAddress2
          f.city = d.city || f.city
          f.state = d.state || f.state
          f.postalCode = d.postalCode || f.postalCode
          f.country = d.country || f.country
          f.neighbourhood = d.neighbourhood || f.neighbourhood
          f.commercialRegister = d.commercialRegister || f.commercialRegister
          f.taxCard = d.taxCard || f.taxCard
          f.attachments = d.attachments || f.attachments
          f.status = d.status !== undefined ? d.status : f.status
          f.isSendEmail = d.isSendEmail !== undefined ? d.isSendEmail : f.isSendEmail
          f.isSendSMS = d.isSendSMS !== undefined ? d.isSendSMS : f.isSendSMS
          f.chartOfAccountId = d.chartOfAccountId || f.chartOfAccountId
          f.representatives = d.representatives || f.representatives
        } catch (e) {
          console.error('Error loading temporary data:', e)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('supplierEditTempData')
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

/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}

/* Search Input Background Override */
.form-control{
  background: #fff !important;
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

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Button Styling */
.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
  font-weight: 500;
}

.btn-primary:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
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

.section-title {
  color: #495057;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e9ecef;
}

.radio-group {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.radio-inline {
  display: flex;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;
}

.radio-inline input[type="radio"] {
  margin-right: 0.5rem;
}

.required {
  color: #dc3545;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
}

.is-invalid {
  border-color: #dc3545;
}

.text-muted {
  color: #6c757d !important;
}

.btn {
  border-radius: 0.375rem;
  font-weight: 500;
}

.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
  font-weight: 500;
}

.btn-primary:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .radio-group {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .col-md-3 {
    margin-bottom: 1rem;
  }
}
</style>
