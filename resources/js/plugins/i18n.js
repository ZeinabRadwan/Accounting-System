import Vue from 'vue'
import store from '~/store'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {}
})

/**
 * @param {String} locale
 */
export async function loadMessages (locale) {
  const loadedMessages = i18n.getLocaleMessage(locale)
  
  let incomingMessages = {}
  
  try {
    // Try to fetch from build directory first (works in production)
    const response = await fetch(`/build/lang/${locale}.json`)
    if (response.ok) {
      incomingMessages = await response.json()
    } else {
      throw new Error('Fetch failed, trying dynamic import')
    }
  } catch (error) {
    // Fallback to dynamic import (works in development)
    try {
      const mod = await import(`../lang/${locale}.json`)
      incomingMessages = mod && (mod.default || mod)
    } catch (fallbackError) {
      console.error(`Failed to load messages for locale: ${locale}`, fallbackError)
    }
  }

  // Merge to ensure new keys added during development are picked up
  const nextMessages = Object.keys(loadedMessages).length
    ? { ...loadedMessages, ...incomingMessages }
    : incomingMessages

  i18n.setLocaleMessage(locale, nextMessages)

  if (i18n.locale !== locale) {
    i18n.locale = locale
  }
}

(async function () {
  await loadMessages(store.getters['lang/locale'])
})()

export default i18n
