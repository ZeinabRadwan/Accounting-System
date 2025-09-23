<template>
  <div class="representative-form">
    <div class="form-row">
      <div class="form-group col-md-4">
        <label for="name">
          {{ $t("Name") }} <span class="required">*</span>
        </label>
        <input 
          id="name" 
          v-model="form.name" 
          type="text" 
          class="form-control"
          :class="{ 'is-invalid': form.errors.has('name') }" 
          name="name"
          :placeholder="$t('Enter company representative name')" 
        />
        <has-error :form="form" field="name" />
      </div>

      <div class="form-group col-md-4">
        <label for="email">{{ $t("Email") }}</label>
        <input 
          id="email" 
          v-model="form.email" 
          type="email" 
          class="form-control"
          :class="{ 'is-invalid': form.errors.has('email') }" 
          name="email"
          :placeholder="$t('Enter email address')" 
        />
        <has-error :form="form" field="email" />
      </div>

      <div class="form-group col-md-4">
        <label for="phone">{{ $t("Phone") }}</label>
        <input 
          id="phone" 
          v-model="form.phone" 
          type="text" 
          class="form-control"
          :class="{ 'is-invalid': form.errors.has('phone') }" 
          name="phone"
          :placeholder="$t('Enter phone number')" 
        />
        <has-error :form="form" field="phone" />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-4">
        <label for="position">{{ $t("Position") }}</label>
        <input 
          id="position" 
          v-model="form.position" 
          type="text" 
          class="form-control"
          :class="{ 'is-invalid': form.errors.has('position') }" 
          name="position"
          :placeholder="$t('Enter position/title')" 
        />
        <has-error :form="form" field="position" />
      </div>

      <div class="form-group col-md-4">
        <label for="is_primary">{{ $t("Primary Contact") }}</label>
        <div class="custom-control custom-checkbox">
          <input 
            id="is_primary" 
            v-model="form.is_primary" 
            type="checkbox" 
            class="custom-control-input"
            name="is_primary"
          />
          <label class="custom-control-label" for="is_primary">
            {{ $t("Mark as primary contact") }}
          </label>
        </div>
      </div>

      <div class="form-group col-md-4">
        <label for="notes">{{ $t("Notes") }}</label>
        <textarea 
          id="notes" 
          v-model="form.notes" 
          class="form-control"
          :class="{ 'is-invalid': form.errors.has('notes') }" 
          name="notes"
          :placeholder="$t('Enter additional notes')" 
          rows="2"
        />
        <has-error :form="form" field="notes" />
      </div>
    </div>

    <div class="form-row">
      <div class="col-12">
        <button 
          type="button" 
          class="btn btn-primary" 
          @click="isEditing ? updateRepresentative() : addRepresentative()"
          :disabled="!isValid || loading"
        >
          <i v-if="loading" class="fas fa-spinner fa-spin"></i>
          <i v-if="!isEditing" class="fas fa-plus mr-1"></i>
          {{ isEditing ? $t("Update Representative") : $t("Add Representative") }}
        </button>
        
        <button 
          v-if="isEditing" 
          type="button" 
          class="btn btn-secondary ml-2" 
          @click="cancelEdit"
        >
          {{ $t("Cancel") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";

export default {
  name: "RepresentativeForm",
  props: {
    // Whether we're editing an existing representative
    isEditing: {
      type: Boolean,
      default: false
    },
    // Initial data for editing
    initialData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      loading: false,
      form: new Form({
        name: "",
        email: "",
        phone: "",
        position: "",
        is_primary: false,
        notes: "",
        ...this.initialData
      })
    };
  },
  computed: {
    isValid() {
      return this.form.name && this.form.name.trim().length > 0;
    }
  },
  watch: {
    initialData: {
      handler(newData) {
        if (newData && Object.keys(newData).length > 0) {
          this.form.fill(newData);
        }
      },
      immediate: true
    }
  },
  methods: {
    // Add representative to the list (not save to database)
    addRepresentative() {
      if (!this.isValid) {
        return;
      }

      // Emit the representative data to parent
      this.$emit('add-representative', this.form.data());
      
      // Reset form after adding
      this.resetForm();
    },

    // Update existing representative in the list
    updateRepresentative() {
      if (!this.isValid) {
        return;
      }

      // Emit the updated representative data to parent
      this.$emit('update-representative', this.form.data());
      
      // Reset form after updating
      this.resetForm();
    },

    cancelEdit() {
      this.$emit('cancel');
      this.resetForm();
    },

    resetForm() {
      this.form.reset();
      this.form.is_primary = false;
    },

    // Method to set form data (useful for editing)
    setFormData(data) {
      this.form.fill(data);
    }
  }
};
</script>

<style scoped>
.representative-form {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.form-row {
  margin-bottom: 15px;
}

.required {
  color: #dc3545;
}

.custom-checkbox {
  margin-top: 8px;
}

.btn {
  margin-top: 10px;
}

/* Make primary action button green (same as create button styling elsewhere) */
.btn-primary {
  background-color: rgb(40, 167, 69) !important;
  border-color: rgb(40, 167, 69) !important;
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: rgb(33, 136, 56) !important;
  border-color: rgb(33, 136, 56) !important;
}
</style>
