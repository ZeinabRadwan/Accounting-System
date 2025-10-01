<template>
  <div class="multilingual-input">
    <!-- Language Selector -->
    <div class="language-selector mb-2">
      <div class="btn-group" role="group">
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          type="button"
          class="btn btn-sm"
          :class="activeLocale === locale.code ? 'btn-primary' : 'btn-outline-secondary'"
          @click="setActiveLocale(locale.code)"
        >
          {{ locale.flag }} {{ locale.name }}
        </button>
      </div>
    </div>

    <!-- Input Field -->
    <div class="input-container">
      <input
        v-model="currentValue"
        :type="inputType"
        :class="inputClass"
        :placeholder="getPlaceholder()"
        :disabled="disabled"
        @input="onInput"
        @blur="onBlur"
        @focus="onFocus"
      />
      
      <!-- Translation Indicator -->
      <div class="translation-indicators">
        <span
          v-for="locale in availableLocales"
          :key="locale.code"
          class="indicator"
          :class="{
            'has-translation': hasTranslation(locale.code),
            'is-active': activeLocale === locale.code,
            'is-fallback': locale.code === fallbackLocale
          }"
          :title="getIndicatorTitle(locale.code)"
        >
          {{ locale.flag }}
        </span>
      </div>
    </div>

    <!-- Translation Status -->
    <div v-if="showStatus" class="translation-status mt-2">
      <small class="text-muted">
        <i class="fas fa-language"></i>
        {{ translationCount }}/{{ availableLocales.length }} languages
        <span v-if="missingTranslations.length > 0" class="text-warning">
          • Missing: {{ missingTranslations.map(l => l.name).join(', ') }}
        </span>
      </small>
    </div>

    <!-- Quick Translation Actions -->
    <div v-if="showActions && hasMultipleLocales" class="translation-actions mt-2">
      <button
        v-if="!hasTranslation(activeLocale) && fallbackValue"
        @click="copyFromFallback"
        class="btn btn-sm btn-outline-info"
        type="button"
      >
        <i class="fas fa-copy"></i> Copy from {{ getLocaleName(fallbackLocale) }}
      </button>
      
      <button
        v-if="hasTranslation(activeLocale)"
        @click="clearTranslation"
        class="btn btn-sm btn-outline-danger"
        type="button"
      >
        <i class="fas fa-trash"></i> Clear
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultilingualInput',
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    field: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      default: 'text'
    },
    inputClass: {
      type: String,
      default: 'form-control'
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showStatus: {
      type: Boolean,
      default: true
    },
    showActions: {
      type: Boolean,
      default: true
    },
    fallbackValue: {
      type: String,
      default: ''
    },
    fallbackLocale: {
      type: String,
      default: 'en'
    },
    availableLocales: {
      type: Array,
      default: () => [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
        { code: 'ur', name: 'اردو', flag: '🇵🇰' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
      ]
    }
  },
  data() {
    return {
      activeLocale: this.fallbackLocale,
      internalValue: { ...this.value }
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.internalValue[this.activeLocale] || ''
      },
      set(value) {
        this.$set(this.internalValue, this.activeLocale, value)
      }
    },
    translationCount() {
      return Object.values(this.internalValue).filter(value => value && value.trim() !== '').length
    },
    missingTranslations() {
      return this.availableLocales.filter(locale => !this.hasTranslation(locale.code))
    },
    hasMultipleLocales() {
      return this.availableLocales.length > 1
    }
  },
  watch: {
    value: {
      handler(newValue) {
        this.internalValue = { ...newValue }
      },
      deep: true
    },
    internalValue: {
      handler(newValue) {
        this.$emit('input', newValue)
      },
      deep: true
    }
  },
  methods: {
    setActiveLocale(locale) {
      this.activeLocale = locale
      this.$emit('locale-change', locale)
    },
    
    hasTranslation(locale) {
      return this.internalValue[locale] && this.internalValue[locale].trim() !== ''
    },
    
    getPlaceholder() {
      if (this.placeholder) return this.placeholder
      return `Enter ${this.field} in ${this.getLocaleName(this.activeLocale)}`
    },
    
    getLocaleName(code) {
      const locale = this.availableLocales.find(l => l.code === code)
      return locale ? locale.name : code
    },
    
    getIndicatorTitle(locale) {
      const hasTranslation = this.hasTranslation(locale)
      const isActive = this.activeLocale === locale
      const isFallback = locale === this.fallbackLocale
      
      let title = `${this.getLocaleName(locale)}`
      if (isFallback) title += ' (Fallback)'
      if (isActive) title += ' (Active)'
      if (hasTranslation) title += ' - Has translation'
      else title += ' - No translation'
      
      return title
    },
    
    copyFromFallback() {
      if (this.fallbackValue) {
        this.$set(this.internalValue, this.activeLocale, this.fallbackValue)
        this.$emit('translation-copied', {
          from: this.fallbackLocale,
          to: this.activeLocale,
          value: this.fallbackValue
        })
      }
    },
    
    clearTranslation() {
      this.$set(this.internalValue, this.activeLocale, '')
      this.$emit('translation-cleared', this.activeLocale)
    },
    
    onInput(event) {
      this.$emit('input-change', {
        locale: this.activeLocale,
        value: event.target.value,
        field: this.field
      })
    },
    
    onBlur(event) {
      this.$emit('blur', event)
    },
    
    onFocus(event) {
      this.$emit('focus', event)
    }
  }
}
</script>

<style scoped>
.multilingual-input {
  position: relative;
}

.language-selector .btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
}

.language-selector .btn {
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.input-container {
  position: relative;
}

.translation-indicators {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 2px;
  pointer-events: none;
}

.indicator {
  font-size: 0.8rem;
  opacity: 0.5;
  transition: opacity 0.2s;
}

.indicator.has-translation {
  opacity: 1;
}

.indicator.is-active {
  opacity: 1;
  transform: scale(1.2);
}

.indicator.is-fallback {
  border: 1px solid #007bff;
  border-radius: 2px;
  padding: 1px;
}

.translation-status {
  font-size: 0.75rem;
}

.translation-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.translation-actions .btn {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
}

@media (max-width: 768px) {
  .language-selector .btn-group {
    width: 100%;
  }
  
  .language-selector .btn {
    flex: 1;
    min-width: 0;
  }
  
  .translation-indicators {
    position: static;
    transform: none;
    margin-top: 0.5rem;
    justify-content: center;
  }
}
</style>
