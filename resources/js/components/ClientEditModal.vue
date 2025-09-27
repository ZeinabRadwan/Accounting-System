<template>
  <div>
    <VModal v-model="showClientEditModal" @close="closeModal">
      <template v-slot:title>{{ $t("Edit Client") }}</template>
      <template>
        <ClientForm 
          ref="clientForm"
          :showCardBody="false"
          :initialData="clientData"
        />
        <div slot="modal-footer">
          <button @click="submitItem($event)" :disabled="isSubmitting" class="btn btn-success">
            <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
            <i v-else class="fas fa-save"></i> 
            {{ isSubmitting ? $t("Saving...") : $t("Save") }}
          </button>
          <button @click="closeModal" class="btn btn-secondary ml-2">
            {{ $t("Cancel") }}
          </button>
        </div>
      </template>
    </VModal>
    <a @click="toggleModal" class="edit-button">
      <slot></slot>
    </a>
  </div>
</template>

<script>
import ClientForm from "./ClientForm.vue";

export default {
  name: "ClientEditModal",
  middleware: ["auth", "check-permissions"],
  components: {
    ClientForm,
  },
  props: {
    // Client data to edit
    client: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data: () => ({
    showClientEditModal: false,
    form: null,
    isSubmitting: false,
    clientData: {},
  }),
  watch: {
    // Watch for changes in client prop
    client: {
      handler(newClient) {
        if (newClient && Object.keys(newClient).length > 0) {
          this.mapClientData(newClient);
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    // Map client data to form structure
    mapClientData(clientData) {
      console.log('=== MAPPING CLIENT DATA IN EDIT MODAL ===');
      console.log('Original client data:', clientData);
      console.log('Phone fields in client data:');
      console.log('- clientData.phone:', clientData.phone);
      console.log('- clientData.phoneNumber:', clientData.phoneNumber);
      console.log('- clientData.phone_number:', clientData.phone_number);
      console.log('- clientData.mobile:', clientData.mobile);
      
      this.clientData = {
        // Preserve ID and slug for API calls
        id: clientData.id,
        slug: clientData.slug,
        
        // Account Details
        codeNumber: clientData.codeNumber || clientData.clientID || clientData.code_number || '000001',
        billingMethod: clientData.billingMethod || 'print',
        currency: clientData.currency || 'EGP',
        classification: clientData.classification || '',
        notes: clientData.notes || '',
        displayLanguage: clientData.displayLanguage || clientData.display_language || '',
        
        // Client Details
        type: clientData.type || 'Company',
        fullName: clientData.fullName || (clientData.type === 'Individual' ? clientData.name : ''),
        businessName: clientData.businessName || clientData.companyName || clientData.company_name || (clientData.type === 'Company' ? clientData.name : ''),
        firstName: clientData.firstName || clientData.first_name || '',
        lastName: clientData.lastName || clientData.last_name || '',
        phone: clientData.phone || '',
        phoneNumber: clientData.phoneNumber || clientData.phone_number || clientData.phone || clientData.mobile || '',
        email: clientData.email || '',
        
        // Address Information (make sure all fields are mapped)
        streetAddress1: clientData.streetAddress1 || clientData.street_address_1 || clientData.address || '',
        streetAddress2: clientData.streetAddress2 || clientData.street_address_2 || '',
        city: clientData.city || '',
        state: clientData.state || '',
        postalCode: clientData.postalCode || clientData.postal_code || '',
        country: clientData.country || 'SA',
        neighbourhood: clientData.neighbourhood || '',
        
        // Business Information
        commercialRegister: clientData.commercialRegister || clientData.commercial_register || clientData.taxRegistrationNumber || clientData.tax_registration_number || '',
        taxCard: clientData.taxCard || clientData.tax_card || '',
        addSecondaryAddress: clientData.addSecondaryAddress || false,
        
        // Additional Fields
        image: clientData.image || '',
        image_path: clientData.image_path || '',
        attachments: Array.isArray(clientData.attachments) ? clientData.attachments : [],
        status: clientData.status !== undefined ? clientData.status : 1,
        isSendEmail: Boolean(clientData.isSendEmail || clientData.is_send_email),
        isSendSMS: Boolean(clientData.isSendSMS || clientData.is_send_sms),
        
        // Representatives (ensure this is included)
        representatives: Array.isArray(clientData.representatives) ? clientData.representatives : [],
        
        // Chart of Account
        chartOfAccountId: clientData.chartOfAccountId || clientData.chart_of_account_id || null,
        
        // Legacy fields for backward compatibility
        name: clientData.name || '',
        companyName: clientData.companyName || clientData.company_name || '',
        taxRegistrationNumber: clientData.taxRegistrationNumber || clientData.tax_registration_number || '',
        address: clientData.address || '',
      };
      
      console.log('Mapped client data for form:', this.clientData);
      console.log('=== END MAPPING CLIENT DATA ===');
    },

    // Edit client
    async submitItem(evt) {
      evt.preventDefault();
      await this.editClient();
    },

    async editClient() {
      if (this.isSubmitting) return;
      
      this.isSubmitting = true;
      
      try {
        // Get the form from the ClientForm component
        this.form = this.$refs.clientForm.getFormData();
        
        // Validate the form
        if (!this.$refs.clientForm.validateForm()) {
          this.isSubmitting = false;
          return;
        }

        // Update the client - use the client data passed to the modal
        const clientSlug = this.clientData.slug || this.client.slug;
        await this.form.put(`/api/clients/${clientSlug}`);
        
        toast.fire({
          type: "success",
          title: this.$t("Client updated successfully"),
        });
        
        this.$emit("reloadClients");
        this.closeModal();
        this.form = null; // Reset form reference
        
      } catch (error) {
        console.error("Error updating client:", error);
        const errorMessage = error.response?.data?.message || this.$t("Please check your input and try again.");
        toast.fire({ type: "error", title: errorMessage });
      } finally {
        this.isSubmitting = false;
      }
    },

    async toggleModal() {
      this.showClientEditModal = !this.showClientEditModal;
      // Reset form when opening modal
      if (this.showClientEditModal) {
        this.form = null;
        this.isSubmitting = false;
        
        // If we have a client prop and it has a slug, fetch full data
        if (this.client && this.client.slug) {
          try {
            console.log('Fetching full client data for toggle modal...');
            const response = await this.$http.get(`/api/clients/${this.client.slug}`);
            const fullClientData = response.data.data || response.data;
            console.log('Full client data received via toggle:', fullClientData);
            this.mapClientData(fullClientData);
          } catch (error) {
            console.error('Error fetching full client data via toggle:', error);
            // Fallback to existing data
            if (this.client && Object.keys(this.client).length > 0) {
              this.mapClientData(this.client);
            }
          }
        }
      }
    },

    closeModal() {
      this.showClientEditModal = false;
      this.$emit('close');
    },

    // Open modal with client data (fetch full data from API)
    async openModal(client = null) {
      const clientToEdit = client || this.client;
      if (!clientToEdit) {
        console.error('No client data provided for editing');
        return;
      }
      
      // Check if we have a slug to fetch full data
      if (clientToEdit.slug) {
        try {
          console.log('Fetching full client data for edit modal...');
          // Fetch complete client data from API
          const response = await this.$http.get(`/api/clients/${clientToEdit.slug}`);
          const fullClientData = response.data.data || response.data;
          console.log('Full client data received:', fullClientData);
          this.mapClientData(fullClientData);
        } catch (error) {
          console.error('Error fetching full client data:', error);
          // Fallback to partial data if API call fails
          this.mapClientData(clientToEdit);
        }
      } else {
        // Fallback to partial data if no slug
        this.mapClientData(clientToEdit);
      }
      
      this.showClientEditModal = true;
      this.form = null;
      this.isSubmitting = false;
    },
  },
};
</script>

<style scoped>
.edit-button {
  text-decoration: none;
  cursor: pointer;
}

/* Make modal wider */
.modal-content {
  max-width: 1000px;
  margin: 1.75rem auto;
}
</style>
