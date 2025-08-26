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
            <router-link :to="{ name: 'suppliers.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
            </router-link>
          </div>
          <!-- /.card-header -->
          
          <!-- Use the SupplierForm component -->
          <SupplierForm 
            ref="supplierForm"
            :showCardBody="true"
            :initialData="supplierData"
          />
          
          <!-- Card footer with action buttons -->
          <div class="card-footer">
            <v-button :loading="isSubmitting || loading" :disabled="!isFormReady" class="btn btn-primary" @click="saveSupplier">
              <i class="fas fa-save" /> {{ $t("Save") }}
            </v-button>
            <button type="button" class="btn btn-secondary float-right" @click="resetForm">
              <i class="fas fa-power-off" /> {{ $t("Reset") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SupplierForm from "../../components/SupplierForm.vue";
import VButton from "../../components/Button.vue";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Edit Supplier") };
  },
  components: {
    SupplierForm,
    VButton,
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
      return this.$refs.supplierForm && 
             this.$refs.supplierForm.getFormData && 
             this.$refs.supplierForm.getFormData().data;
    }
  },
  watch: {
    // Watch for form readiness
    '$refs.supplierForm': {
      handler(newVal) {
        if (newVal && newVal.getFormData && newVal.getFormData().data) {
          console.log('Form is now ready');
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
        
        // Transform the data to match the expected format
        this.supplierData = {
          ...supplierData,
          // Map API fields to component fields
          codeNumber: supplierData.code_number || (supplierData.supplierID ? supplierData.supplierID.toString().padStart(6, '0') : "000001"),
          fullName: supplierData.full_name || "",
          businessName: supplierData.business_name || "",
          firstName: supplierData.first_name || "",
          lastName: supplierData.last_name || "",
          phoneNumber: supplierData.phoneNumber || supplierData.phone_number || "",
          streetAddress1: supplierData.street_address1 || "",
          streetAddress2: supplierData.street_address2 || "",
          postalCode: supplierData.postal_code || "",
          commercialRegister: supplierData.commercial_register || "",
          taxCard: supplierData.tax_card || "",
          isSendEmail: supplierData.is_send_email || false,
          isSendSMS: supplierData.is_send_sms || false,
        };
        
        console.log("Transformed supplier data:", this.supplierData);
        this.loading = false;
      } catch (error) {
        console.error("Error getting supplier:", error);
        this.loading = false;
      }
    },

    // Save supplier using the SupplierForm component
    async saveSupplier() {
      console.log('=== SAVE SUPPLIER STARTED ===');
      
      // Check if form is ready
      if (!this.isFormReady) {
        console.error('Form is not ready yet');
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "error",
            title: this.$t("Form is not ready yet"),
            text: this.$t("Please wait a moment and try again.")
          });
        } else {
          alert(this.$t("Form is not ready yet. Please wait a moment and try again."));
        }
        return;
      }
      
      try {
        this.isSubmitting = true;
        console.log('Set isSubmitting to true');
        
        // Get form data from the SupplierForm component
        console.log('Getting form from SupplierForm component...');
        const form = this.$refs.supplierForm.getFormData();
        console.log('Form data retrieved:', form);
        
        if (!form) {
          throw new Error("No form data available");
        }
        
        // Check if form is ready
        if (!form.data) {
          console.error('Form is not ready yet');
          if (window.toast && typeof window.toast.fire === 'function') {
            window.toast.fire({
              type: "error",
              title: this.$t("Form is not ready yet"),
              text: this.$t("Please wait a moment and try again.")
            });
          } else {
            alert(this.$t("Form is not ready yet. Please wait a moment and try again."));
          }
          this.isSubmitting = false;
          return;
        }
        
        console.log('Saving supplier with data:', form);
        console.log('Preparing update data...');
        
        // Get the actual form data using .data() method
        const formData = form.data();
        console.log('Form data using .data() method:', formData);
        
        // Prepare the data for update
        const updateData = {
          // Account Details
          codeNumber: formData.codeNumber,
          notes: formData.notes,
          displayLanguage: formData.displayLanguage,
          status: formData.status,
          
          // Supplier Details
          type: formData.type,
          fullName: formData.fullName,
          businessName: formData.businessName,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          streetAddress1: formData.streetAddress1,
          streetAddress2: formData.streetAddress2,
          city: formData.city,
          state: formData.state,
          postalCode: formData.postalCode,
          country: formData.country,
          neighbourhood: formData.neighbourhood,
          commercialRegister: formData.commercialRegister,
          taxCard: formData.taxCard,
          
          // Additional Fields
          image: formData.image,
          attachments: formData.attachments,
          isSendEmail: formData.isSendEmail,
          isSendSMS: formData.isSendSMS,
          
          // Representatives
          representatives: formData.representatives || [],
          
          // Legacy fields for backward compatibility
          name: formData.type === 'Individual' ? formData.fullName : formData.businessName,
          companyName: formData.businessName,
          taxRegistrationNumber: formData.taxCard,
          address: formData.streetAddress1,
        };
        
        console.log('Update data prepared:', updateData);
        console.log('Making API call to update supplier...');
        
        // Make API call to update supplier
        const response = await this.$http.put(
          `/api/suppliers/${this.$route.params.slug}`, 
          updateData
        );
        
        console.log('API response received:', response);
        
        if (response.data.success) {
          console.log('Supplier updated successfully');
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
          throw new Error(response.data.message || "Failed to update supplier");
        }
      } catch (error) {
        console.error("Error updating supplier:", error);
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "error",
            title: this.$t("Oops...something went wrong"),
          });
        } else {
          alert(this.$t("Oops...something went wrong"));
        }
      } finally {
        console.log('Setting isSubmitting to false');
        this.isSubmitting = false;
      }
    },

    // Reset form
    resetForm() {
      if (this.$refs.supplierForm) {
        this.$refs.supplierForm.resetForm();
      }
    },
  },
};
</script>

<style scoped>
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

.btn-dark {
  background-color: #343a40;
  border-color: #343a40;
}

.btn-dark:hover {
  background-color: #23272b;
  border-color: #1d2124;
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
