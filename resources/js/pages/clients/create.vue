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
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'clients.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="button" class="btn btn-success" @click="saveTemporary" title="Save Temporarily">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <ClientForm 
            ref="clientForm"
            :showCardBody="true"
            @submit="saveClient"
          />
          
          <!-- /.card-body -->
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page footer-buttons">
                <button @click="submitForm" :disabled="isSubmitting" class="btn btn-success">
                  <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
                  <i v-else class="fas fa-save"></i> 
                  {{ isSubmitting ? $t("Saving...") : $t("Save") }}
                </button>
                <button type="reset" class="btn btn-secondary" @click="resetForm">
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
        // Use the submitted form data directly
        const response = await this.$http.post("/api/clients", formData);
        
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
        toast.fire({ 
          type: "error", 
          title: this.$t("Opps...something went wrong") 
        });
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
        toast.fire({
          type: 'success',
          title: this.$t('Form saved temporarily'),
        })
      }
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
/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}

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

.card-body {
  padding: 1.25rem;
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

.btn-primary:disabled {
  background: #6C757D !important;
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
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

/* Chart of Account Warning Alert Styles - Same as edit form */
.chart-account-warning {
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border: 1px solid #ffc107;
}

.warning-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.warning-icon {
  font-size: 24px;
  flex-shrink: 0;
  color: #856404;
}

.warning-text {
  flex-grow: 1;
}

.warning-title {
  margin: 0 0 4px 0;
  font-weight: 600;
  font-size: 14px;
  color: #856404;
}

.warning-description {
  margin: 0;
  font-size: 13px;
  opacity: 0.8;
  color: #856404;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-footer {
    flex-direction: column;
    gap: 10px;
  }
  
  .card-footer .btn {
    width: 100%;
    margin-right: 0 !important;
  }
  
  .card-footer div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .warning-content {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
}
</style>
