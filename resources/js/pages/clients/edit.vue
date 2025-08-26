<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t('Edit Client') }}</h3>
            <router-link :to="{ name: 'clients.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
            </router-link>
          </div>
          <!-- /.card-header -->
          
          <!-- Use the new ClientForm component -->
          <ClientForm 
            ref="clientForm"
            :showCardBody="true"
            :initialData="clientData"
          />
          
          <!-- Card footer with action buttons -->
          <div class="card-footer">
            <v-button :loading="isSubmitting || loading" :disabled="!isFormReady" class="btn btn-primary" @click="saveClient">
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
      return this.$refs.clientForm && 
             this.$refs.clientForm.getFormData && 
             this.$refs.clientForm.getFormData().data;
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

    // save client
    async saveClient() {
      console.log('=== SAVE CLIENT STARTED ===');
      
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
      
      if (this.isSubmitting) {
        console.log('Already submitting, returning');
        return;
      }
      
      this.isSubmitting = true;
      console.log('Set isSubmitting to true');
      
      try {
        // Get the form from the ClientForm component
        console.log('Getting form from ClientForm component...');
        const form = this.$refs.clientForm.getFormData();
        console.log('Form data retrieved:', form);
        
        // Check if form is ready
        if (!form || !form.data) {
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
        
        // Validate the form
        console.log('Validating form...');
        const isValid = await this.$refs.clientForm.validateForm();
        console.log('Form validation result:', isValid);
        
        if (!isValid) {
          console.log('Form validation failed, returning');
          this.isSubmitting = false;
          return;
        }

        console.log('Form validation passed, preparing update data...');
        
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
          
          // Client Details
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
        console.log('Making API call to update client...');

        // Update the client using direct HTTP call
        const response = await this.$http.put(`/api/clients/${this.$route.params.slug}`, updateData);
        
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
/* No additional styles needed as ClientForm handles its own styling */
</style>
