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
            <v-button :loading="isSubmitting" class="btn btn-primary" @click="saveClient">
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

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Edit Client") };
  },
  components: {
    ClientForm,
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
        
        // Map the API response fields to the new form structure
        this.clientData = {
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
      if (this.isSubmitting) return;
      
      this.isSubmitting = true;
      
      try {
        // Get the form from the ClientForm component
        const form = this.$refs.clientForm.getFormData();
        
        // Validate the form
        if (!this.$refs.clientForm.validateForm()) {
          this.isSubmitting = false;
          return;
        }

        // Update the client
        await form.put(`/api/clients/${this.$route.params.slug}`);
        
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "success",
            title: this.$t("Client updated successfully"),
          });
        } else {
          alert(this.$t("Client updated successfully"));
        }
        
        this.$router.push({ name: "clients.index" });
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
