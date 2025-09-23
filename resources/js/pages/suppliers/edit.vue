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
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="button" class="btn btn-success" @click="saveTemporary" title="Save Temporarily">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          
          <!-- Use the SupplierForm component -->
          <SupplierForm 
            ref="supplierForm"
            :showCardBody="true"
            :initialData="supplierData"
            @submit="saveSupplier"
          />
          
          <!-- Card footer with action buttons -->
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page footer-buttons">
                <button @click="submitForm" :disabled="isSubmitting" class="btn btn-success">
                  <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
                  <i v-else class="fas fa-save"></i> 
                  {{ isSubmitting ? $t("Saving...") : $t("Save") }}
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
  async created() {
    try {
      await this.getSupplier();
    } catch (error) {
      console.error("Error in created lifecycle:", error);
    }
  },
  mounted() {
    // Load temporary data after child form is mounted
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
          // Chart of Account mapping
          chartOfAccountId: supplierData.chart_of_account_id || null,
        };
        
        console.log("Transformed supplier data:", this.supplierData);
        this.loading = false;
      } catch (error) {
        console.error("Error getting supplier:", error);
        this.loading = false;
      }
    },

    // Submit form by calling SupplierForm's submitForm method
    submitForm() {
      if (this.$refs.supplierForm) {
        this.$refs.supplierForm.submitForm();
      }
    },
    
    // Save supplier - called by SupplierForm via @submit event
    async saveSupplier(formData) {
      if (this.isSubmitting) return;
      
      this.isSubmitting = true;
      
      try {
        // Use the submitted form data directly for update
        const response = await this.$http.put(
          `/api/suppliers/${this.$route.params.slug}`, 
          formData
        );
        
        if (response.data.success) {
          toast.fire({
            type: "success",
            title: this.$t("Supplier updated successfully"),
          });
          this.clearTemporaryData()
          this.$router.push({ name: "suppliers.index" });
        } else {
          throw new Error(response.data.message || 'Failed to update supplier');
        }
      } catch (error) {
        console.error("Error updating supplier:", error);
        toast.fire({ 
          type: "error", 
          title: this.$t("Oops...something went wrong") 
        });
      } finally {
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
        toast.fire({ type: 'success', title: this.$t('Form saved temporarily') })
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

/* Restore full border radius for buttons inside the group */
.btn-group.c-w-100 > .btn {
  border-radius: 10px !important;
}
.btn-group.c-w-100 > .btn:first-child {
  border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}
.btn-group.c-w-100 > .btn:last-child {
  border-top-left-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
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
  border-radius: 10px !important;
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
  border-radius: 10px !important;
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
  border-radius: 10px !important;
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
  border-radius: 10px !important;
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
