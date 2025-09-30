/**
 * Translation Service for handling multilingual API calls
 */
class TranslationService {
  constructor(axios) {
    this.axios = axios
    this.supportedLocales = [
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

  /**
   * Get supported locales
   */
  getSupportedLocales() {
    return this.supportedLocales
  }

  /**
   * Get current locale from localStorage or default to 'en'
   */
  getCurrentLocale() {
    return localStorage.getItem('locale') || 'en'
  }

  /**
   * Set current locale
   */
  setCurrentLocale(locale) {
    localStorage.setItem('locale', locale)
    return locale
  }

  /**
   * Get locale info by code
   */
  getLocaleInfo(code) {
    return this.supportedLocales.find(locale => locale.code === code)
  }

  /**
   * Get translated field value with fallback
   */
  getTranslatedValue(translations, field, locale = null) {
    const targetLocale = locale || this.getCurrentLocale()
    const fallbackLocale = 'en'
    
    // Try to get translation for target locale
    if (translations[field] && translations[field][targetLocale]) {
      return translations[field][targetLocale]
    }
    
    // Try fallback locale
    if (translations[field] && translations[field][fallbackLocale]) {
      return translations[field][fallbackLocale]
    }
    
    // Return empty string if no translation found
    return ''
  }

  /**
   * Set translation value
   */
  setTranslationValue(translations, field, locale, value) {
    if (!translations[field]) {
      translations[field] = {}
    }
    translations[field][locale] = value
    return translations
  }

  /**
   * Get translation statistics
   */
  getTranslationStats(translations, fields = ['name']) {
    const stats = {}
    
    fields.forEach(field => {
      if (translations[field]) {
        const fieldTranslations = translations[field]
        const totalLocales = this.supportedLocales.length
        const translatedLocales = Object.values(fieldTranslations).filter(value => 
          value && value.trim() !== ''
        ).length
        
        stats[field] = {
          total: totalLocales,
          translated: translatedLocales,
          missing: totalLocales - translatedLocations,
          percentage: Math.round((translatedLocales / totalLocales) * 100)
        }
      }
    })
    
    return stats
  }

  /**
   * Chart of Accounts API calls
   */
  chartOfAccounts = {
    /**
     * Get accounts with translations
     */
    async getWithTranslations(params = {}) {
      const response = await this.axios.get('/api/chart-of-accounts/translations', { params })
      return response.data
    },

    /**
     * Create account with translations
     */
    async createWithTranslations(data) {
      const response = await this.axios.post('/api/chart-of-accounts/translations', data)
      return response.data
    },

    /**
     * Update account with translations
     */
    async updateWithTranslations(code, data) {
      const response = await this.axios.put(`/api/chart-of-accounts/translations/${code}`, data)
      return response.data
    },

    /**
     * Get translations for specific account
     */
    async getTranslations(code) {
      const response = await this.axios.get(`/api/chart-of-accounts/${code}/translations`)
      return response.data
    },

    /**
     * Update translations for specific account
     */
    async updateTranslations(code, field, translations) {
      const response = await this.axios.put(`/api/chart-of-accounts/${code}/translations/update`, {
        field,
        translations
      })
      return response.data
    },

    /**
     * Search accounts by translations
     */
    async searchTranslations(searchTerm, locale = null, field = 'name') {
      const params = {
        search: searchTerm,
        field,
        locale: locale || this.getCurrentLocale()
      }
      const response = await this.axios.get('/api/chart-of-accounts/translations/search', { params })
      return response.data
    },

    /**
     * Get translation statistics
     */
    async getTranslationStats() {
      const response = await this.axios.get('/api/chart-of-accounts/translations/stats')
      return response.data
    },

    /**
     * Export translations
     */
    async exportTranslations(format = 'json', accountIds = []) {
      const params = { format }
      if (accountIds.length > 0) {
        params.account_ids = accountIds
      }
      const response = await this.axios.get('/api/chart-of-accounts/translations/export', { params })
      return response.data
    }
  }

  /**
   * Generic model translation methods
   */
  model = {
    /**
     * Get model with translations
     */
    async getWithTranslations(modelType, params = {}) {
      const response = await this.axios.get(`/api/${modelType}/translations`, { params })
      return response.data
    },

    /**
     * Create model with translations
     */
    async createWithTranslations(modelType, data) {
      const response = await this.axios.post(`/api/${modelType}/translations`, data)
      return response.data
    },

    /**
     * Update model with translations
     */
    async updateWithTranslations(modelType, id, data) {
      const response = await this.axios.put(`/api/${modelType}/translations/${id}`, data)
      return response.data
    },

    /**
     * Get translations for specific model
     */
    async getTranslations(modelType, id) {
      const response = await this.axios.get(`/api/${modelType}/${id}/translations`)
      return response.data
    },

    /**
     * Update translations for specific model
     */
    async updateTranslations(modelType, id, field, translations) {
      const response = await this.axios.put(`/api/${modelType}/${id}/translations/update`, {
        field,
        translations
      })
      return response.data
    },

    /**
     * Search model by translations
     */
    async searchTranslations(modelType, searchTerm, locale = null, field = 'name') {
      const params = {
        search: searchTerm,
        field,
        locale: locale || this.getCurrentLocale()
      }
      const response = await this.axios.get(`/api/${modelType}/translations/search`, { params })
      return response.data
    }
  }

  /**
   * Utility methods
   */
  utils = {
    /**
     * Check if translation exists
     */
    hasTranslation(translations, field, locale) {
      return translations[field] && 
             translations[field][locale] && 
             translations[field][locale].trim() !== ''
    },

    /**
     * Get missing translations
     */
    getMissingTranslations(translations, field) {
      return this.supportedLocales
        .filter(locale => !this.utils.hasTranslation(translations, field, locale.code))
        .map(locale => locale.code)
    },

    /**
     * Copy translation from one locale to another
     */
    copyTranslation(translations, field, fromLocale, toLocale) {
      if (translations[field] && translations[field][fromLocale]) {
        if (!translations[field][toLocale]) {
          translations[field][toLocale] = {}
        }
        translations[field][toLocale] = translations[field][fromLocale]
      }
      return translations
    },

    /**
     * Clear translation for specific locale
     */
    clearTranslation(translations, field, locale) {
      if (translations[field] && translations[field][locale]) {
        delete translations[field][locale]
      }
      return translations
    },

    /**
     * Validate translations
     */
    validateTranslations(translations, requiredFields = ['name']) {
      const errors = {}
      
      requiredFields.forEach(field => {
        if (!translations[field]) {
          errors[field] = `${field} translations are required`
          return
        }
        
        const fieldTranslations = translations[field]
        const hasAnyTranslation = Object.values(fieldTranslations).some(value => 
          value && value.trim() !== ''
        )
        
        if (!hasAnyTranslation) {
          errors[field] = `At least one translation for ${field} is required`
        }
      })
      
      return Object.keys(errors).length > 0 ? errors : null
    }
  }
}

export default TranslationService
