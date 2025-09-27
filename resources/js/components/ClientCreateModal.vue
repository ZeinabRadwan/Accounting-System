<template>
  <div>
    <VModal v-model="showClientCreateModal" @close="showClientCreateModal = false">
      <template v-slot:title>{{ $t("Create Client") }}</template>
      <template>
        <ClientForm 
          ref="clientForm"
          :showCardBody="false"
          @submit="saveClient"
        />
        <div slot="modal-footer">
          <button @click="submitItem($event)" :disabled="isSubmitting" class="btn btn-success">
            <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
            <i v-else class="fas fa-save"></i> 
            {{ isSubmitting ? $t("Saving...") : $t("Save") }}
          </button>
        </div>
      </template>
    </VModal>
    <a @click="toggleModal" class="create-button">
      <slot></slot>
    </a>
  </div>
</template>

<script>
import ClientForm from "./ClientForm.vue";

export default {
  name: "ClientCreateModal",
  middleware: ["auth", "check-permissions"],
  components: {
    ClientForm,
  },
  data: () => ({
    showClientCreateModal: false,
    form: null,
    isSubmitting: false,
  }),
  methods: {
    // save client
    async saveClient() {
      if (this.isSubmitting) return;
      
      this.isSubmitting = true;
      
      try {
        // Validate the form
        if (!this.$refs.clientForm.validateForm()) {
          this.isSubmitting = false;
          return;
        }

        // Get the form data from the ClientForm component
        const formData = this.$refs.clientForm.getFormData();
        
        // Build multipart/form-data to properly send files and handle boolean conversion
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
        appendIfDefined('phoneNumber', formData.phoneNumber);
        appendIfDefined('email', formData.email);
        appendIfDefined('streetAddress1', formData.streetAddress1);
        appendIfDefined('streetAddress2', formData.streetAddress2);
        appendIfDefined('city', formData.city);
        appendIfDefined('state', formData.state);
        appendIfDefined('postalCode', formData.postalCode);
        appendIfDefined('country', formData.country);
        appendIfDefined('neighbourhood', formData.neighbourhood);
        appendIfDefined('commercialRegister', formData.commercialRegister);
        appendIfDefined('taxCard', formData.taxCard);
        appendIfDefined('status', formData.status);
        
        // Convert boolean values to integers for Laravel validation
        appendIfDefined('isSendEmail', formData.isSendEmail ? 1 : 0);
        appendIfDefined('isSendSMS', formData.isSendSMS ? 1 : 0);

        // Chart of account id (number or object)
        if (formData.chartOfAccountId && typeof formData.chartOfAccountId === 'object' && formData.chartOfAccountId.id) {
          appendIfDefined('chartOfAccountId', formData.chartOfAccountId.id);
        } else {
          appendIfDefined('chartOfAccountId', formData.chartOfAccountId);
        }

        // Image file
        if (formData.image instanceof File) {
          fd.append('image', formData.image);
        }

        // Attachments as files
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
            if (rep.is_primary !== undefined && rep.is_primary !== null) fd.append(`representatives[${i}][is_primary]`, rep.is_primary ? 1 : 0);
            if (rep.notes) fd.append(`representatives[${i}][notes]`, rep.notes);
          });
        }

        const response = await this.$http.post("/api/clients", fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        
        if (response.data.success) {
          toast.fire({
            type: "success",
            title: this.$t("Client added successfully"),
          });
          this.$emit("reloadClients");
          this.$refs.clientForm.resetForm();
          this.showClientCreateModal = false;
          this.form = null; // Reset form reference
        }
      } catch (error) {
        console.error("Error creating client:", error);
        const errorMessage = error.response?.data?.message || this.$t("Please check your input and try again.");
        toast.fire({ type: "error", title: errorMessage });
      } finally {
        this.isSubmitting = false;
      }
    },

    toggleModal() {
      this.showClientCreateModal = !this.showClientCreateModal;
      // Reset form when opening modal
      if (this.showClientCreateModal) {
        this.form = null;
        this.isSubmitting = false;
      }
    },

    submitItem(evt) {
      evt.preventDefault();
      this.saveClient();
    },
  },
};
</script>

<style scoped>
.create-button {
  text-decoration: none;
  cursor: pointer;
}

/* Make modal wider */
.modal-content {
  max-width: 1000px;
  margin: 1.75rem auto;
}
</style>
