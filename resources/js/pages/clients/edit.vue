<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <router-link :to="{ name: 'clients.index' }" class="btn btn-primary">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          
          <!-- Use the new ClientForm component -->
          <ClientForm 
            v-if="!loading && clientData && clientData.slug"
            ref="clientForm"
            :showCardBody="true"
            :initialData="clientData"
            @submit="saveClient"
          />
          
          <!-- Loading state -->
          <div v-else-if="loading" class="card-body text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">{{ $t('Loading...') }}</span>
            </div>
            <p class="mt-2">{{ $t('Loading client data...') }}</p>
          </div>
          
          <!-- Error state -->
          <div v-else class="card-body text-center">
            <div class="alert alert-danger">
              <i class="fas fa-exclamation-triangle"></i>
              {{ $t('Failed to load client data') }}
            </div>
          </div>
          
          <!-- Card footer with action buttons -->
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page">
                <v-button :loading="isSubmitting || loading" :disabled="!isFormReady" class="btn btn-primary" @click="submitForm">
                  <i class="fas fa-save" /> {{ $t("Save") }}
                </v-button>
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
import ClientForm from "../../components/ClientForm.vue";
import VButton from "../../components/Button.vue";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Edit Client") };
  },
  components: {
    ClientForm,
    VButton,
  },
  data: () => ({
    breadcrumbsCurrent: "Edit Client",
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
        name: "Edit",
        url: "",
      },
    ],
    loading: true,
    isSubmitting: false,
    clientData: {},
  }),
  computed: {
    // Check if form is ready
    isFormReady() {
      return !this.loading && this.clientData && this.clientData.slug && Object.keys(this.clientData).length > 0;
    }
  },
  watch: {
    // Watch for form readiness
    '$refs.clientForm': {
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
      await this.getClient();
    } catch (error) {
      console.error("Error in created lifecycle:", error);
    }
  },
  methods: {
    // Get client data
    async getClient() {
      try {
        // Check if we have a valid slug
        if (!this.$route.params.slug) {
          throw new Error("No client slug provided");
        }

        console.log("Fetching client with slug:", this.$route.params.slug);
        
        const response = await this.$http.get(
          `/api/clients/${this.$route.params.slug}`
        );
        
        if (!response.data) {
          throw new Error("No data received from API");
        }
        
        console.log("Raw API response data:", response.data);
        
        // The API response is wrapped in a 'data' object
        const clientData = response.data.data || response.data;
        
        console.log("Client data slug:", clientData.slug);
        console.log("Route params slug:", this.$route.params.slug);
        
        // Map the API response fields to the new form structure
        this.clientData = {
          // Include the actual slug from the client data for representatives loading
          slug: clientData.slug || this.$route.params.slug,
          
          // Account Details
          codeNumber: clientData.codeNumber || clientData.clientID || '000001',
          notes: clientData.notes || '',
          displayLanguage: clientData.displayLanguage || '',
          
          // Client Details
          type: clientData.type || 'Company',
          fullName: clientData.type === 'Individual' ? clientData.name : '',
          businessName: clientData.type === 'Company' ? clientData.companyName : '',
          firstName: clientData.firstName || '',
          lastName: clientData.lastName || '',
          phone: clientData.phone || '',
          phoneNumber: clientData.phoneNumber || '',
          email: clientData.email || '',
          streetAddress1: clientData.streetAddress1 || clientData.address || '',
          streetAddress2: clientData.streetAddress2 || '',
          city: clientData.city || '',
          state: clientData.state || '',
          postalCode: clientData.postalCode || '',
          country: clientData.country || 'SA',
          neighbourhood: clientData.neighbourhood || '',
          commercialRegister: clientData.commercialRegister || clientData.taxRegistrationNumber || '',
          taxCard: clientData.taxCard || '',
          
          // Additional Fields
          image: clientData.image || '',
          attachments: clientData.attachments || [],
          status: clientData.status || 1,
          isSendEmail: clientData.isSendEmail || false,
          isSendSMS: clientData.isSendSMS || false,
          
          // Chart of Account
          chartOfAccountId: clientData.chartOfAccountId || null,
          
          // Representatives
          representatives: clientData.representatives || [],
          
          // Legacy fields for backward compatibility
          name: clientData.name || '',
          companyName: clientData.companyName || '',
          taxRegistrationNumber: clientData.taxRegistrationNumber || '',
          address: clientData.address || '',
        };
        
        this.loading = false;
        
        console.log("Client data loaded successfully:", clientData);
        console.log("Client data slug:", clientData.slug);
        console.log("Route params slug:", this.$route.params.slug);
        console.log("Final slug used:", clientData.slug || this.$route.params.slug);
        console.log("Mapped client data:", this.clientData);
        
      } catch (error) {
        console.error("Error fetching client:", error);
        
        // Show error message if toast is available
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "error",
            title: this.$t("Failed to load client data"),
            text: error.message || "Please check the client slug and try again."
          });
        } else {
          // Fallback to console and alert if toast is not available
          console.error("Toast not available, showing alert");
          alert(this.$t("Failed to load client data: ") + (error.message || "Unknown error"));
        }
        
        // Don't redirect immediately, let user see the error
        this.loading = false;
        
        // Only redirect if it's a critical error (like invalid slug)
        if (error.response && error.response.status === 404) {
          setTimeout(() => {
            this.$router.push({ name: "clients.index" });
          }, 3000);
        }
      }
    },

    // Submit form by calling ClientForm's submitForm method
    submitForm() {
      console.log('=== SUBMIT FORM CALLED ===');
      console.log('ClientForm ref:', this.$refs.clientForm);
      console.log('ClientForm methods:', this.$refs.clientForm ? Object.getOwnPropertyNames(this.$refs.clientForm) : 'No ref');
      
      if (this.$refs.clientForm) {
        console.log('Calling ClientForm submitForm method...');
        this.$refs.clientForm.submitForm();
      } else {
        console.error('ClientForm ref is not available');
      }
    },

    // Save client
    async saveClient(formData) {
      console.log('=== SAVE CLIENT CALLED ===');
      console.log('Form data received:', formData);
      console.log('Is submitting:', this.isSubmitting);
      console.log('Loading:', this.loading);
      
      if (this.isSubmitting || this.loading) {
        console.log('Already submitting or loading, returning');
        return;
      }
      
      console.log('Save client called with form data:', formData);
      this.isSubmitting = true;
      
      try {
        // Use the form data directly from the submit event
        console.log('Sending update request with data:', formData);
        
        const response = await this.$http.put(`/api/clients/${this.clientData.slug}`, formData);
        
        console.log('API response received:', response);
        
        if (response.data.success) {
          console.log('Client updated successfully');
          if (window.toast && typeof window.toast.fire === 'function') {
            window.toast.fire({
              type: "success",
              title: this.$t("Client updated successfully"),
            });
          } else {
            alert(this.$t("Client updated successfully"));
          }
          
          this.$router.push({ name: "clients.index" });
        } else {
          throw new Error(response.data.message || 'Update failed');
        }
      } catch (error) {
        console.error("Error saving client:", error);
        
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({ 
            type: "error", 
            title: this.$t("Opps...something went wrong") 
          });
        } else {
          alert(this.$t("Opps...something went wrong"));
        }
      } finally {
        console.log('Setting isSubmitting to false');
        this.isSubmitting = false;
      }
    },

    // Reset form
    resetForm() {
      if (this.$refs.clientForm) {
        this.$refs.clientForm.resetForm();
      }
    },
  },
};
</script>

<style scoped>
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
  border: 1px solid #CED4DA
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Search Input Background Override */
.form-control{
  background: #F1F5FB !important;
}

.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border-radius: 10px !important;
  border: none !important;
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;
  border-radius: 10px !important;
  border: none !important;
}
</style>

</script>

<style scoped>
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
  border: 1px solid #CED4DA
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Search Input Background Override */
.form-control{
  background: #F1F5FB !important;
}

.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border-radius: 10px !important;
  border: none !important;
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;
  border-radius: 10px !important;
  border: none !important;
}
</style>
