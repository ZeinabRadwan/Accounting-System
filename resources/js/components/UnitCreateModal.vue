<template>
  <div>
    <VModal v-model="showModal" @close="closeModal">
      <template v-slot:title>{{ $t("Create Unit") }}</template>
      <div class="w-100" @click.stop>
        <form role="form" @keydown="form.onKeydown($event)" @submit.prevent.stop>
          <div class="form-group">
            <label for="unitName">{{ $t("Name") }}
              <span class="required">*</span></label>
            <input id="unitName" v-model="form.name" type="text" class="form-control"
              :class="{ 'is-invalid': form.errors.has('name') }" name="name"
              :placeholder="$t('Enter a name')" />
            <has-error :form="form" field="name" />
          </div>
          <div class="form-group">
            <label for="unitCode">{{ $t("Code") }}
              <span class="required">*</span></label>
            <input id="unitCode" v-model="form.code" type="text" class="form-control"
              :class="{ 'is-invalid': form.errors.has('code') }" name="code"
              :placeholder="$t('Enter a code')" />
            <has-error :form="form" field="code" />
          </div>
          <div class="form-group">
            <label for="unitStatus">{{ $t("Status") }}</label>
            <select id="unitStatus" v-model="form.status" class="form-control"
              :class="{ 'is-invalid': form.errors.has('status') }">
              <option value="1">{{ $t("Active") }}</option>
              <option value="0">{{ $t("Inactive") }}</option>
            </select>
            <has-error :form="form" field="status" />
          </div>
          <div class="form-group">
            <label for="unitNote">{{ $t("Note") }}</label>
            <textarea id="unitNote" v-model="form.note" class="form-control"
              :class="{ 'is-invalid': form.errors.has('note') }" 
              :placeholder="$t('Write your note here!')" rows="3"></textarea>
            <has-error :form="form" field="note" />
          </div>
        </form>
      </div>
      <div slot="modal-footer">
        <button @click.stop="saveUnit" :loading="form.busy" class="btn btn-success">
          <i class="fas fa-save" /> {{ $t("Save") }}
        </button>
        <button @click.stop="closeModal" class="btn btn-secondary ml-2">
          {{ $t("Cancel") }}
        </button>
      </div>
    </VModal>
    <a @click="toggleModal" class="create-button">
      <slot></slot>
    </a>
  </div>
</template>

<script>
import Form from 'vform'

export default {
  middleware: ["auth", "check-permissions"],
  data: () => ({
    showModal: false,
    form: new Form({
      name: '',
      code: '',
      note: '',
      status: 1,
    }),
  }),
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
      if (this.showModal) {
        // Reset form when opening modal
        this.resetForm()
      }
    },

    closeModal(event) {
      // Stop event propagation to prevent closing parent modals
      if (event) {
        event.stopPropagation()
        event.preventDefault()
      }
      this.showModal = false
      this.resetForm()
    },

    resetForm() {
      this.form.reset()
      this.form.status = 1
    },

    // Save unit
    async saveUnit(event) {
      // Stop event propagation to prevent closing parent modals
      if (event) {
        event.stopPropagation()
        event.preventDefault()
      }
      
      // Store the unit name before saving
      const unitName = this.form.name
      const unitCode = this.form.code
      
      await this.form
        .post(window.location.origin + '/api/units')
        .then(async () => {
          toast.fire({
            type: 'success',
            title: this.$t('Unit added successfully'),
          })
          // Create a simple object with the name and code for parent to find it
          const createdUnit = { name: unitName, code: unitCode }
          // Emit event with created unit data to refresh and select in parent
          this.$emit('unitCreated', createdUnit)
          // Reset form
          this.form.reset()
          this.form.status = 1
          // Close only this modal, not parent modals
          this.showModal = false
          this.resetForm()
        })
        .catch(() => {
          toast.fire({ type: 'error', title: this.$t('Please check your input and try again.') })
        })
    },
  },
}
</script>

<style scoped>
/* Form Styling */
.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.required {
  color: #dc3545;
  font-weight: bold;
}

.form-control {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  padding: 10px 16px;
  font-size: 14px;
}

.form-control:focus {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

.is-invalid {
  border-color: #DC3545 !important;
}

textarea.form-control {
  min-height: 100px;
  resize: vertical;
}

/* Button Styling */
.btn-success {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
  font-weight: 500;
}

.btn-success:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
}

.btn-secondary {
  background: #6c757d !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
  font-weight: 500;
}

.btn-secondary:hover {
  background: #5a6268 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(108, 117, 125, 0.3);
}

/* Create button styling */
.create-button {
  text-decoration: none;
  cursor: pointer;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-group {
    margin-bottom: 0.75rem;
  }
}
</style>

