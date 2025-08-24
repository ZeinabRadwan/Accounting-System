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
          <button @click="submitItem($event)" :disabled="isSubmitting" class="btn btn-primary">
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
        // Get the form from the ClientForm component
        this.form = this.$refs.clientForm.getFormData();
        
        // Validate the form
        if (!this.$refs.clientForm.validateForm()) {
          this.isSubmitting = false;
          return;
        }

        await this.form
          .post(window.location.origin + "/api/clients")
          .then(() => {
            toast.fire({
              type: "success",
              title: this.$t("Client added successfully"),
            });
            this.$emit("reloadClients");
            this.$refs.clientForm.resetForm();
            this.showClientCreateModal = false;
            this.form = null; // Reset form reference
          })
          .catch((error) => {
            console.error("Error creating client:", error);
            const errorMessage = error.response?.data?.message || this.$t("Opps...something went wrong");
            toast.fire({ type: "error", title: errorMessage });
          });
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
