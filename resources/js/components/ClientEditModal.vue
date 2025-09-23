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
      this.clientData = {
        // Preserve ID and slug for API calls
        id: clientData.id,
        slug: clientData.slug,
        
        // Account Details
        codeNumber: clientData.codeNumber || clientData.clientID || '000001',
        billingMethod: clientData.billingMethod || 'print',
        currency: clientData.currency || 'EGP',
        classification: clientData.classification || '',
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
        commercialRegister: clientData.commercialRegister || clientData.taxRegistrationNumber || '',
        taxCard: clientData.taxCard || '',
        addSecondaryAddress: clientData.addSecondaryAddress || false,
        
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
        const errorMessage = error.response?.data?.message || this.$t("Opps...something went wrong");
        toast.fire({ type: "error", title: errorMessage });
      } finally {
        this.isSubmitting = false;
      }
    },

    toggleModal() {
      this.showClientEditModal = !this.showClientEditModal;
      // Reset form when opening modal
      if (this.showClientEditModal) {
        this.form = null;
        this.isSubmitting = false;
      }
    },

    closeModal() {
      this.showClientEditModal = false;
      this.$emit('close');
    },

    // Open modal with client data (similar to ProductEditModal)
    openModal(client = null) {
      const clientToEdit = client || this.client;
      if (!clientToEdit) {
        console.error('No client data provided for editing');
        return;
      }
      
      this.mapClientData(clientToEdit);
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
