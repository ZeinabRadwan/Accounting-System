<template>
  <div class="translation-manager">
    <!-- Language Tabs -->
    <div class="language-tabs mb-4">
      <ul class="nav nav-tabs">
        <li 
          v-for="locale in supportedLocales" 
          :key="locale.code"
          class="nav-item"
        >
          <button
            class="nav-link"
            :class="{ active: activeLocale === locale.code }"
            @click="setActiveLocale(locale.code)"
            type="button"
          >
            {{ locale.flag }} {{ locale.name }}
          </button>
        </li>
      </ul>
    </div>

    <!-- Translation Form -->
    <div class="translation-form">
      <div v-for="field in translatableFields" :key="field" class="mb-3">
        <label :for="`${field}_${activeLocale}`" class="form-label">
          {{ getFieldLabel(field) }} ({{ getLocaleName(activeLocale) }})
        </label>
        <input
          :id="`${field}_${activeLocale}`"
          v-model="translations[field][activeLocale]"
          type="text"
          class="form-control"
          :placeholder="`Enter ${getFieldLabel(field)} in ${getLocaleName(activeLocale)}`"
          @input="onTranslationChange(field, activeLocale, $event.target.value)"
        />
        <div v-if="errors[`${field}.${activeLocale}`]" class="text-danger small">
          {{ errors[`${field}.${activeLocale}`] }}
        </div>
      </div>
    </div>

    <!-- Translation Status -->
    <div class="translation-status mt-3">
      <div class="row">
        <div class="col-md-6">
          <h6>Translation Status</h6>
          <div v-for="field in translatableFields" :key="field" class="mb-2">
            <div class="d-flex justify-content-between">
              <span>{{ getFieldLabel(field) }}</span>
              <span class="badge" :class="getStatusClass(field)">
                {{ getTranslationCount(field) }}/{{ supportedLocales.length }}
              </span>
            </div>
            <div class="progress mt-1" style="height: 4px;">
              <div 
                class="progress-bar" 
                :class="getProgressClass(field)"
                :style="{ width: getProgressPercentage(field) + '%' }"
              ></div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h6>Missing Translations</h6>
          <div v-for="field in translatableFields" :key="field">
            <div v-if="getMissingTranslations(field).length > 0" class="small text-muted">
              <strong>{{ getFieldLabel(field) }}:</strong>
              {{ getMissingTranslations(field).map(locale => getLocaleName(locale)).join(', ') }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="translation-actions mt-4">
      <button 
        @click="saveTranslations" 
        class="btn btn-primary"
        :disabled="isSaving"
      >
        <i class="fas fa-save"></i> {{ isSaving ? 'Saving...' : 'Save Translations' }}
      </button>
      <button 
        @click="resetTranslations" 
        class="btn btn-secondary ms-2"
        :disabled="isSaving"
      >
        <i class="fas fa-undo"></i> Reset
      </button>
      <button 
        @click="copyFromFallback" 
        class="btn btn-outline-info ms-2"
        :disabled="isSaving"
      >
        <i class="fas fa-copy"></i> Copy from English
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TranslationManager',
  props: {
    modelId: {
      type: [String, Number],
      required: true
    },
    modelType: {
      type: String,
      required: true
    },
    translatableFields: {
      type: Array,
      default: () => ['name']
    },
    initialTranslations: {
      type: Object,
      default: () => ({})
    },
    fallbackValues: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      activeLocale: 'en',
      translations: {},
      errors: {},
      isSaving: false,
      supportedLocales: [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
        { code: 'ur', name: 'اردو', flag: '🇵🇰' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
        { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
        { code: 'th', name: 'ไทย', flag: '🇹🇭' },
        { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
        { code: 'ko', name: '한국어', flag: '🇰🇷' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹' },
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'nl', name: 'Nederlands', flag: '🇳🇱' }
      ]
    }
  },
  mounted() {
    this.initializeTranslations()
  },
  methods: {
    initializeTranslations() {
      // Initialize translations structure
      this.translations = {}
      this.translatableFields.forEach(field => {
        this.translations[field] = {}
        this.supportedLocales.forEach(locale => {
          this.translations[field][locale.code] = this.initialTranslations[field]?.[locale.code] || ''
        })
      })
    },
    
    setActiveLocale(locale) {
      this.activeLocale = locale
    },
    
    getFieldLabel(field) {
      const labels = {
        name: 'Name',
        description: 'Description',
        title: 'Title',
        address: 'Address',
        notes: 'Notes'
      }
      return labels[field] || field.charAt(0).toUpperCase() + field.slice(1)
    },
    
    getLocaleName(code) {
      const locale = this.supportedLocales.find(l => l.code === code)
      return locale ? locale.name : code
    },
    
    onTranslationChange(field, locale, value) {
      this.translations[field][locale] = value
      this.$emit('translation-change', { field, locale, value })
    },
    
    getTranslationCount(field) {
      return Object.values(this.translations[field]).filter(value => value.trim() !== '').length
    },
    
    getProgressPercentage(field) {
      return (this.getTranslationCount(field) / this.supportedLocales.length) * 100
    },
    
    getStatusClass(field) {
      const count = this.getTranslationCount(field)
      const total = this.supportedLocales.length
      
      if (count === 0) return 'bg-danger'
      if (count === total) return 'bg-success'
      if (count >= total * 0.5) return 'bg-warning'
      return 'bg-secondary'
    },
    
    getProgressClass(field) {
      const count = this.getTranslationCount(field)
      const total = this.supportedLocales.length
      
      if (count === 0) return 'bg-danger'
      if (count === total) return 'bg-success'
      if (count >= total * 0.5) return 'bg-warning'
      return 'bg-secondary'
    },
    
    getMissingTranslations(field) {
      return this.supportedLocales
        .filter(locale => !this.translations[field][locale.code]?.trim())
        .map(locale => locale.code)
    },
    
    async saveTranslations() {
      this.isSaving = true
      this.errors = {}
      
      try {
        const promises = this.translatableFields.map(field => {
          const fieldTranslations = this.translations[field]
          const nonEmptyTranslations = Object.fromEntries(
            Object.entries(fieldTranslations).filter(([_, value]) => value.trim() !== '')
          )
          
          if (Object.keys(nonEmptyTranslations).length > 0) {
            return this.$axios.put(`/api/${this.modelType}/${this.modelId}/translations/update`, {
              field,
              translations: nonEmptyTranslations
            })
          }
          return Promise.resolve()
        })
        
        await Promise.all(promises.filter(Boolean))
        
        this.$toast.success('Translations saved successfully!')
        this.$emit('translations-saved', this.translations)
        
      } catch (error) {
        console.error('Error saving translations:', error)
        this.$toast.error('Error saving translations')
        
        if (error.response?.data?.errors) {
          this.errors = error.response.data.errors
        }
      } finally {
        this.isSaving = false
      }
    },
    
    resetTranslations() {
      this.initializeTranslations()
      this.$emit('translations-reset')
    },
    
    copyFromFallback() {
      this.translatableFields.forEach(field => {
        const fallbackValue = this.fallbackValues[field] || ''
        this.supportedLocales.forEach(locale => {
          if (locale.code !== 'en' && !this.translations[field][locale.code]?.trim()) {
            this.translations[field][locale.code] = fallbackValue
          }
        })
      })
      this.$toast.info('Copied English values to empty translations')
    }
  }
}
</script>

<style scoped>
.translation-manager {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #dee2e6;
}

.language-tabs .nav-tabs {
  border-bottom: 2px solid #dee2e6;
}

.language-tabs .nav-link {
  border: none;
  border-bottom: 3px solid transparent;
  color: #6c757d;
  font-weight: 500;
}

.language-tabs .nav-link.active {
  color: #007bff;
  border-bottom-color: #007bff;
  background: none;
}

.language-tabs .nav-link:hover {
  border-bottom-color: #007bff;
  color: #007bff;
}

.translation-status {
  background: white;
  padding: 1rem;
  border-radius: 0.375rem;
  border: 1px solid #e9ecef;
}

.progress {
  background-color: #e9ecef;
}

.translation-actions .btn {
  min-width: 140px;
}

@media (max-width: 768px) {
  .translation-manager {
    padding: 1rem;
  }
  
  .language-tabs .nav-tabs {
    flex-wrap: wrap;
  }
  
  .translation-actions .btn {
    min-width: auto;
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>
