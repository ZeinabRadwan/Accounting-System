<template>
  <div class="chart-of-account-form">
    <form @submit.prevent="submitForm">
      <!-- Basic Information -->
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="code" class="form-label">Account Code *</label>
            <input
              v-model="form.code"
              type="text"
              class="form-control"
              id="code"
              required
              :disabled="isEdit"
            />
            <div v-if="errors.code" class="text-danger small">{{ errors.code }}</div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="type_id" class="form-label">Account Type *</label>
            <select
              v-model="form.type_id"
              class="form-select"
              id="type_id"
              required
            >
              <option value="">Select Account Type</option>
              <option
                v-for="type in accountTypes"
                :key="type.id"
                :value="type.id"
              >
                {{ type.name }}
              </option>
            </select>
            <div v-if="errors.type_id" class="text-danger small">{{ errors.type_id }}</div>
          </div>
        </div>
      </div>

      <!-- Multilingual Name Field -->
      <div class="mb-3">
        <label class="form-label">Account Name *</label>
        <MultilingualInput
          v-model="form.translations.name"
          field="name"
          :fallback-value="form.name"
          :placeholder="'Enter account name'"
          @input-change="onNameChange"
        />
        <div v-if="errors.name" class="text-danger small">{{ errors.name }}</div>
      </div>

      <!-- Parent Account -->
      <div class="mb-3">
        <label for="parent_id" class="form-label">Parent Account</label>
        <select
          v-model="form.parent_id"
          class="form-select"
          id="parent_id"
        >
          <option value="">No Parent (Root Account)</option>
          <option
            v-for="account in parentAccounts"
            :key="account.id"
            :value="account.id"
          >
            {{ account.code }} - {{ getTranslatedName(account) }}
          </option>
        </select>
        <div v-if="errors.parent_id" class="text-danger small">{{ errors.parent_id }}</div>
      </div>

      <!-- Additional Fields -->
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="order" class="form-label">Order</label>
            <input
              v-model.number="form.order"
              type="number"
              class="form-control"
              id="order"
              min="0"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <div class="form-check">
              <input
                v-model="form.is_active"
                class="form-check-input"
                type="checkbox"
                id="is_active"
              />
              <label class="form-check-label" for="is_active">
                Active Account
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Translation Manager (for advanced users) -->
      <div v-if="showAdvancedTranslation" class="mt-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h6>Advanced Translation Management</h6>
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
            @click="showAdvancedTranslation = false"
          >
            <i class="fas fa-times"></i> Hide
          </button>
        </div>
        
        <TranslationManager
          :model-id="form.id || 'new'"
          model-type="chart-of-accounts"
          :translatable-fields="['name']"
          :initial-translations="form.translations"
          :fallback-values="{ name: form.name }"
          @translations-saved="onTranslationsSaved"
        />
      </div>

      <!-- Show Advanced Translation Button -->
      <div v-else class="mt-3">
        <button
          type="button"
          class="btn btn-sm btn-outline-info"
          @click="showAdvancedTranslation = true"
        >
          <i class="fas fa-language"></i> Advanced Translation Management
        </button>
      </div>

      <!-- Form Actions -->
      <div class="form-actions mt-4">
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="isSubmitting"
        >
          <i class="fas fa-save"></i>
          {{ isSubmitting ? 'Saving...' : (isEdit ? 'Update Account' : 'Create Account') }}
        </button>
        <button
          type="button"
          class="btn btn-secondary ms-2"
          @click="cancelForm"
        >
          <i class="fas fa-times"></i> Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import MultilingualInput from './MultilingualInput.vue'
import TranslationManager from './TranslationManager.vue'

export default {
  name: 'ChartOfAccountForm',
  components: {
    MultilingualInput,
    TranslationManager
  },
  props: {
    account: {
      type: Object,
      default: null
    },
    accountTypes: {
      type: Array,
      default: () => []
    },
    parentAccounts: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      form: {
        id: null,
        code: '',
        name: '',
        type_id: '',
        parent_id: '',
        order: 0,
        is_active: true,
        translations: {
          name: {}
        }
      },
      errors: {},
      isSubmitting: false,
      showAdvancedTranslation: false
    }
  },
  computed: {
    isEdit() {
      return !!this.account?.id
    }
  },
  mounted() {
    this.initializeForm()
  },
  methods: {
    initializeForm() {
      if (this.account) {
        this.form = {
          id: this.account.id,
          code: this.account.code,
          name: this.account.name,
          type_id: this.account.type_id,
          parent_id: this.account.parent_id,
          order: this.account.order || 0,
          is_active: this.account.is_active,
          translations: {
            name: this.account.translations?.name || {}
          }
        }
      }
    },
    
    onNameChange({ locale, value, field }) {
      // Update the fallback value when English is changed
      if (locale === 'en') {
        this.form.name = value
      }
    },
    
    onTranslationsSaved(translations) {
      this.form.translations = translations
      this.$toast.success('Translations updated successfully!')
    },
    
    getTranslatedName(account) {
      // Get translated name for display in parent account dropdown
      const currentLocale = this.$i18n?.locale || 'en'
      return account.translations?.name?.[currentLocale] || account.name
    },
    
    async submitForm() {
      this.isSubmitting = true
      this.errors = {}
      
      try {
        const formData = {
          ...this.form,
          // Ensure we have the English name as fallback
          name: this.form.translations.name.en || this.form.name
        }
        
        let response
        if (this.isEdit) {
          response = await this.$axios.put(`/api/chart-of-accounts/translations/${this.form.code}`, formData)
        } else {
          response = await this.$axios.post('/api/chart-of-accounts/translations', formData)
        }
        
        this.$toast.success(response.data.message)
        this.$emit('saved', response.data.data)
        
      } catch (error) {
        console.error('Error saving chart of account:', error)
        
        if (error.response?.data?.errors) {
          this.errors = error.response.data.errors
        } else {
          this.$toast.error('Error saving chart of account')
        }
      } finally {
        this.isSubmitting = false
      }
    },
    
    cancelForm() {
      this.$emit('cancelled')
    }
  }
}
</script>

<style scoped>
.chart-of-account-form {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form-actions {
  border-top: 1px solid #dee2e6;
  padding-top: 1rem;
}

@media (max-width: 768px) {
  .chart-of-account-form {
    padding: 1rem;
  }
}
</style>
