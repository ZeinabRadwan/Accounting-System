import TranslationService from '@/services/TranslationService'

const state = {
  currentLocale: 'en',
  supportedLocales: [],
  translationStats: {},
  isLoading: false,
  error: null
}

const mutations = {
  SET_CURRENT_LOCALE(state, locale) {
    state.currentLocale = locale
    localStorage.setItem('locale', locale)
  },
  
  SET_SUPPORTED_LOCALES(state, locales) {
    state.supportedLocales = locales
  },
  
  SET_TRANSLATION_STATS(state, stats) {
    state.translationStats = stats
  },
  
  SET_LOADING(state, loading) {
    state.isLoading = loading
  },
  
  SET_ERROR(state, error) {
    state.error = error
  },
  
  CLEAR_ERROR(state) {
    state.error = null
  }
}

const actions = {
  /**
   * Initialize translation service
   */
  async initialize({ commit, dispatch }) {
    try {
      commit('SET_LOADING', true)
      
      // Initialize translation service
      const translationService = new TranslationService(this.$axios)
      
      // Get supported locales
      const supportedLocales = translationService.getSupportedLocales()
      commit('SET_SUPPORTED_LOCALES', supportedLocales)
      
      // Get current locale
      const currentLocale = translationService.getCurrentLocale()
      commit('SET_CURRENT_LOCALE', currentLocale)
      
      // Load translation stats
      await dispatch('loadTranslationStats')
      
    } catch (error) {
      commit('SET_ERROR', error.message)
      console.error('Error initializing translations:', error)
    } finally {
      commit('SET_LOADING', false)
    }
  },

  /**
   * Set current locale
   */
  setCurrentLocale({ commit }, locale) {
    commit('SET_CURRENT_LOCALE', locale)
    
    // Update application locale
    if (this.$i18n) {
      this.$i18n.locale = locale
    }
  },

  /**
   * Load translation statistics
   */
  async loadTranslationStats({ commit }) {
    try {
      commit('SET_LOADING', true)
      
      const translationService = new TranslationService(this.$axios)
      const response = await translationService.chartOfAccounts.getTranslationStats()
      
      commit('SET_TRANSLATION_STATS', response.data)
      
    } catch (error) {
      commit('SET_ERROR', error.message)
      console.error('Error loading translation stats:', error)
    } finally {
      commit('SET_LOADING', false)
    }
  },

  /**
   * Get translated value with fallback
   */
  getTranslatedValue({ state }, { translations, field, locale = null }) {
    const translationService = new TranslationService(this.$axios)
    return translationService.getTranslatedValue(translations, field, locale || state.currentLocale)
  },

  /**
   * Check if translation exists
   */
  hasTranslation({ state }, { translations, field, locale = null }) {
    const translationService = new TranslationService(this.$axios)
    return translationService.utils.hasTranslation(translations, field, locale || state.currentLocale)
  },

  /**
   * Get missing translations
   */
  getMissingTranslations({ state }, { translations, field }) {
    const translationService = new TranslationService(this.$axios)
    return translationService.utils.getMissingTranslations(translations, field)
  },

  /**
   * Copy translation from one locale to another
   */
  copyTranslation({ state }, { translations, field, fromLocale, toLocale }) {
    const translationService = new TranslationService(this.$axios)
    return translationService.utils.copyTranslation(translations, field, fromLocale, toLocale)
  },

  /**
   * Clear translation for specific locale
   */
  clearTranslation({ state }, { translations, field, locale }) {
    const translationService = new TranslationService(this.$axios)
    return translationService.utils.clearTranslation(translations, field, locale)
  },

  /**
   * Validate translations
   */
  validateTranslations({ state }, { translations, requiredFields = ['name'] }) {
    const translationService = new TranslationService(this.$axios)
    return translationService.utils.validateTranslations(translations, requiredFields)
  },

  /**
   * Export translations
   */
  async exportTranslations({ commit }, { format = 'json', accountIds = [] }) {
    try {
      commit('SET_LOADING', true)
      
      const translationService = new TranslationService(this.$axios)
      const response = await translationService.chartOfAccounts.exportTranslations(format, accountIds)
      
      return response
      
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  }
}

const getters = {
  /**
   * Get current locale info
   */
  currentLocaleInfo: (state) => {
    return state.supportedLocales.find(locale => locale.code === state.currentLocale)
  },

  /**
   * Get available locales (excluding current)
   */
  availableLocales: (state) => {
    return state.supportedLocales.filter(locale => locale.code !== state.currentLocale)
  },

  /**
   * Get translation completion percentage
   */
  translationCompletionPercentage: (state) => {
    if (!state.translationStats.total_accounts) return 0
    return Math.round((state.translationStats.accounts_with_translations / state.translationStats.total_accounts) * 100)
  },

  /**
   * Get missing translations count
   */
  missingTranslationsCount: (state) => {
    return state.translationStats.total_accounts - state.translationStats.accounts_with_translations
  },

  /**
   * Check if translations are loading
   */
  isTranslationsLoading: (state) => {
    return state.isLoading
  },

  /**
   * Get translation error
   */
  translationError: (state) => {
    return state.error
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
