<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'suppliers.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
                </router-link>
                <button type="button" class="btn btn-success" @click="saveTemporary" title="Save Temporarily">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <!-- form start -->
            <SupplierForm 
              ref="supplierForm"
              :showCardBody="false"
              @submit="saveSupplier"
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
import SupplierForm from "../../components/SupplierForm.vue";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Supplier") };
  },
  components: {
    SupplierForm,
  },
  data: () => ({
    breadcrumbsCurrent: "Create Supplier",
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
        name: "Create",
        url: "",
      },
    ],
    form: null,
    isSubmitting: false,
  }),
  mounted() {
    // Load temporary data after child form is mounted
    this.$nextTick(() => {
      this.loadTemporaryData()
    })
  },
  methods: {
    // Submit form by calling SupplierForm's submitForm method
    submitForm() {
      if (this.$refs.supplierForm) {
        this.$refs.supplierForm.submitForm();
      }
    },
    
    // save supplier
    async saveSupplier(formData) {
      if (this.isSubmitting) return;
      
      this.isSubmitting = true;
      
      try {
        // Use the submitted form data directly
        const response = await this.$http.post("/api/suppliers", formData);
        
        if (response.data.success) {
          toast.fire({
            type: "success",
            title: this.$t("Supplier added successfully"),
          });
          this.clearTemporaryData()
          this.$router.push({ name: "suppliers.index" });
        } else {
          throw new Error(response.data.message || 'Failed to create supplier');
        }
      } catch (error) {
        console.error("Error creating supplier:", error);
        toast.fire({ 
          type: "error", 
          title: this.$t("Opps...something went wrong") 
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
        localStorage.setItem('supplierTempData', JSON.stringify(tempData))
         
      }
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('supplierTempData')
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
      localStorage.removeItem('supplierTempData')
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
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

.vue-tel-input {
  padding: 3px;
}
</style>
