import store from '~/store'
import { loadMessages } from '~/plugins/i18n'

// Track if RTL mode has been applied in this middleware run to prevent loops
let rtlAppliedInThisRun = false
let lastAppliedLocale = null
let lastRoutePath = null
let middlewareRunning = false

// Use global RTL manager if available, otherwise fallback
function applyRTLMode(locale, skipLogging = false) {
  if (!locale) {
    return
  }
  
  // Prevent applying the same locale multiple times in the same run
  if (rtlAppliedInThisRun && lastAppliedLocale === locale) {
    if (!skipLogging) {
      console.log('Locale middleware - Skipping duplicate RTL application for locale:', locale)
    }
    return
  }
  
  if (window.RTLManager) {
    window.RTLManager.applyRTLMode(locale)
  } else {
    // Fallback implementation
    const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'ku', 'yi']
    const isRTL = rtlLanguages.includes(locale.toLowerCase())
    
    // Check current state to avoid unnecessary updates
    const currentDir = document.documentElement.getAttribute('dir')
    const currentLang = document.documentElement.getAttribute('lang')
    const expectedDir = isRTL ? 'rtl' : 'ltr'
    
    // Only update if needed
    if (currentDir !== expectedDir || currentLang !== locale) {
      // Update document attributes
      document.documentElement.setAttribute('lang', locale)
      document.documentElement.setAttribute('dir', expectedDir)
      document.body.setAttribute('dir', expectedDir)
      
      // Update CSS classes
      if (isRTL) {
        document.body.classList.add('rtl')
        document.body.classList.remove('ltr')
      } else {
        document.body.classList.add('ltr')
        document.body.classList.remove('rtl')
      }
      
      // Store in localStorage (but use a flag to prevent triggering storage events during middleware)
      const wasApplying = window._applyingRTLMode
      window._applyingRTLMode = true
      localStorage.setItem('current_locale', locale)
      localStorage.setItem('rtl_mode', isRTL.toString())
      window._applyingRTLMode = wasApplying
      
      if (!skipLogging) {
        console.log('Applied RTL mode (fallback) - Locale:', locale, 'RTL:', isRTL)
      }
    } else {
      // State is already correct, skip logging to reduce noise
      return
    }
  }
  
  rtlAppliedInThisRun = true
  lastAppliedLocale = locale
}

export default async (to, from, next) => {
  // Prevent concurrent middleware execution
  if (middlewareRunning) {
    console.log('Locale middleware - Already running, skipping duplicate call')
    return next()
  }
  
  // Check if this is the same route (no actual navigation)
  const currentPath = to.path
  const fromPath = from ? from.path : null
  if (currentPath === lastRoutePath && (fromPath === lastRoutePath || !fromPath)) {
    // Same route, skip processing
    return next()
  }
  
  middlewareRunning = true
  lastRoutePath = currentPath
  
  // Reset the flag for this middleware run
  rtlAppliedInThisRun = false
  lastAppliedLocale = null
  
  // Only log in development or when debugging
  const isDebugMode = process.env.NODE_ENV === 'development' && localStorage.getItem('debug_locale_middleware') === 'true'
  
  if (isDebugMode) {
    console.log('Locale middleware - Auth check:', store.getters['auth/check'])
    console.log('Locale middleware - Current locale:', store.getters['lang/locale'])
  }
  
  // Check if locale was just changed by user or during login
  const localeJustChanged = localStorage.getItem('locale_just_changed')
  
  // If locale was just changed, skip all updates to prevent conflicts
  if (localeJustChanged) {
    if (isDebugMode) {
      console.log('Locale middleware - Skipping updates because locale was just changed')
    }
    await loadMessages(store.getters['lang/locale'])
    // Don't call applyRTLMode here - it was already applied when the locale was changed
    middlewareRunning = false
    return next()
  }
  
  // Get stored locale from localStorage
  const storedLocale = localStorage.getItem('current_locale')
  const storedRTL = localStorage.getItem('rtl_mode')
  
  // Check if user is authenticated and has a locale preference
  if (store.getters['auth/check']) {
    const user = store.getters['auth/user']
    const currentStoreLocale = store.getters['lang/locale']
    
    if (isDebugMode) {
      console.log('Locale middleware - User locale:', user?.locale, 'Store locale:', currentStoreLocale, 'Stored locale:', storedLocale)
    }
    
    // Only update if:
    // 1. User has a locale preference
    // 2. Current store locale is different from user locale
    // 3. There's no stored locale in localStorage (to avoid overriding manual changes)
    if (user && user.locale && user.locale !== currentStoreLocale && !storedLocale) {
      try {
        if (isDebugMode) {
          console.log('Locale middleware - Updating locale from user preference:', user.locale)
        }
        
        // Load messages for the user's locale
        await loadMessages(user.locale)
        
        // Update the Vuex store locale
        await store.dispatch('lang/setLocale', { locale: user.locale })
        
        // Apply RTL mode directly
        applyRTLMode(user.locale, !isDebugMode)
        
        // Update cookie
        const Cookies = await import('js-cookie')
        Cookies.default.set('locale', user.locale, { expires: 365 })
        
        if (isDebugMode) {
          console.log('Locale middleware - Locale updated from user preference:', user.locale)
        }
      } catch (error) {
        console.warn('Failed to update locale from user preference:', error)
      }
    } else {
      if (isDebugMode) {
        console.log('Locale middleware - Skipping user locale update. Current store locale:', currentStoreLocale, 'Has stored locale:', !!storedLocale)
      }
    }
  }
  
  // Continue with normal locale loading
  await loadMessages(store.getters['lang/locale'])
  
  // Determine which locale to use
  const currentLocale = store.getters['lang/locale'] || storedLocale || 'en'
  
  // Apply RTL mode only once, using the determined locale
  // Only apply if locale actually changed or hasn't been applied yet
  if (currentLocale && !rtlAppliedInThisRun) {
    if (isDebugMode) {
      console.log('Locale middleware - Applying RTL mode for locale:', currentLocale)
    }
    applyRTLMode(currentLocale, !isDebugMode)
  }
  
  middlewareRunning = false
  next()
}
