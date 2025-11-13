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
  
  // Detect if we're in development (Vite HMR) or production
  const isDevelopment = import.meta.env.DEV || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  
  console.log(`[i18n] Loading locale: ${locale}, Environment: ${isDevelopment ? 'DEV' : 'PROD'}`)
  
  // In production, try fetch first. In development, try dynamic import first.
  if (!isDevelopment) {
    // PRODUCTION: Try fetch from build directory (via Laravel route for reliability)
    try {
      // First try direct file access, then fallback to Laravel route
      const directUrl = `/build/lang/${locale}.json`
      const routeUrl = `/build/lang/${locale}.json` // Same URL, but Laravel route handles it
      
      console.log(`[i18n] Attempting to fetch from: ${directUrl}`)
      const response = await fetch(directUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        cache: 'no-cache'
      })
      
      if (response.ok) {
        const contentType = response.headers.get('content-type')
        console.log(`[i18n] Successfully fetched ${directUrl}, Content-Type: ${contentType}`)
        
        if (contentType && contentType.includes('application/json')) {
          incomingMessages = await response.json()
          console.log(`[i18n] Loaded ${Object.keys(incomingMessages).length} translation keys for ${locale}`)
        } else {
          console.warn(`[i18n] Unexpected Content-Type: ${contentType}, expected application/json`)
          throw new Error(`Invalid Content-Type: ${contentType}`)
        }
      } else {
        // Log detailed error info
        const errorText = await response.text().catch(() => 'Unable to read response')
        console.error(`[i18n] Failed to fetch ${url}:`, {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          body: errorText.substring(0, 200)
        })
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
    } catch (error) {
      console.error(`[i18n] Fetch failed for locale ${locale}:`, error)
      // In production, if fetch fails, we should still try dynamic import as fallback
      try {
        console.log(`[i18n] Falling back to dynamic import for ${locale}`)
        const mod = await import(`../lang/${locale}.json`)
        incomingMessages = mod && (mod.default || mod)
        console.log(`[i18n] Fallback dynamic import succeeded for ${locale}`)
      } catch (fallbackError) {
        console.error(`[i18n] Both fetch and dynamic import failed for locale: ${locale}`, fallbackError)
        incomingMessages = {}
      }
    }
  } else {
    // DEVELOPMENT: Try dynamic import first (faster with Vite HMR)
    try {
      console.log(`[i18n] Attempting dynamic import for: ${locale}`)
      const mod = await import(`../lang/${locale}.json`)
      incomingMessages = mod && (mod.default || mod)
      console.log(`[i18n] Dynamic import succeeded for ${locale}`)
    } catch (error) {
      console.warn(`[i18n] Dynamic import failed for locale ${locale}, trying fetch:`, error.message)
      // Fallback to fetch in development
      try {
        const url = `/build/lang/${locale}.json`
        const response = await fetch(url)
        if (response.ok) {
          incomingMessages = await response.json()
          console.log(`[i18n] Fallback fetch succeeded for ${locale}`)
        } else {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
      } catch (fallbackError) {
        console.error(`[i18n] Both dynamic import and fetch failed for locale: ${locale}`, fallbackError)
        incomingMessages = {}
      }
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
