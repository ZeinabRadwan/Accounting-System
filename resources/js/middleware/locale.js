import store from '~/store'
import { loadMessages } from '~/plugins/i18n'

// Use global RTL manager if available, otherwise fallback
function applyRTLMode(locale) {
  if (window.RTLManager) {
    window.RTLManager.applyRTLMode(locale)
  } else {
    // Fallback implementation
    const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'ku', 'yi']
    const isRTL = rtlLanguages.includes(locale.toLowerCase())
    
    // Update document attributes
    document.documentElement.setAttribute('lang', locale)
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
    document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
    
    // Update CSS classes
    if (isRTL) {
      document.body.classList.add('rtl')
      document.body.classList.remove('ltr')
    } else {
      document.body.classList.add('ltr')
      document.body.classList.remove('rtl')
    }
    
    // Store in localStorage
    localStorage.setItem('current_locale', locale)
    localStorage.setItem('rtl_mode', isRTL.toString())
    
    console.log('Applied RTL mode (fallback) - Locale:', locale, 'RTL:', isRTL)
  }
}

export default async (to, from, next) => {
  console.log('Locale middleware - Auth check:', store.getters['auth/check'])
  console.log('Locale middleware - Current locale:', store.getters['lang/locale'])
  
  // FIRST: Check localStorage for stored locale and apply it immediately
  const storedLocale = localStorage.getItem('current_locale')
  const storedRTL = localStorage.getItem('rtl_mode')
  
  if (storedLocale && storedRTL !== null) {
    console.log('Locale middleware - Found stored locale:', storedLocale, 'RTL:', storedRTL)
    applyRTLMode(storedLocale)
  }
  
  // Check if locale was just changed by user or during login
  const localeJustChanged = localStorage.getItem('locale_just_changed')
  
  // If locale was just changed, skip all updates to prevent conflicts
  if (localeJustChanged) {
    console.log('Locale middleware - Skipping updates because locale was just changed')
    await loadMessages(store.getters['lang/locale'])
    const currentLocale = store.getters['lang/locale']
    if (currentLocale) {
      applyRTLMode(currentLocale)
    }
    return next()
  }
  
  // Check if user is authenticated and has a locale preference
  if (store.getters['auth/check']) {
    const user = store.getters['auth/user']
    const currentStoreLocale = store.getters['lang/locale']
    const storedLocale = localStorage.getItem('current_locale')
    
    console.log('Locale middleware - User locale:', user?.locale, 'Store locale:', currentStoreLocale, 'Stored locale:', storedLocale)
    
    // Only update if:
    // 1. User has a locale preference
    // 2. Current store locale is different from user locale
    // 3. There's no stored locale in localStorage (to avoid overriding manual changes)
    if (user && user.locale && user.locale !== currentStoreLocale && !storedLocale) {
      try {
        console.log('Locale middleware - Updating locale from user preference:', user.locale)
        
        // Load messages for the user's locale
        await loadMessages(user.locale)
        
        // Update the Vuex store locale
        await store.dispatch('lang/setLocale', { locale: user.locale })
        
        // Apply RTL mode directly
        applyRTLMode(user.locale)
        
        // Update cookie
        const Cookies = await import('js-cookie')
        Cookies.default.set('locale', user.locale, { expires: 365 })
        
        console.log('Locale middleware - Locale updated from user preference:', user.locale)
      } catch (error) {
        console.warn('Failed to update locale from user preference:', error)
      }
    } else {
      console.log('Locale middleware - Skipping user locale update. Current store locale:', currentStoreLocale, 'Has stored locale:', !!storedLocale)
    }
  }
  
  // Continue with normal locale loading
  await loadMessages(store.getters['lang/locale'])
  
  // Ensure RTL mode is applied for the current locale
  const currentLocale = store.getters['lang/locale']
  console.log('Locale middleware - Ensuring RTL mode for current locale:', currentLocale)
  
  if (currentLocale) {
    applyRTLMode(currentLocale)
  }
  
  // FINAL: Force apply RTL mode one more time to ensure it sticks
  setTimeout(() => {
    const finalLocale = store.getters['lang/locale'] || storedLocale || 'en'
    console.log('Locale middleware - Final RTL application for locale:', finalLocale)
    applyRTLMode(finalLocale)
  }, 100)
  
  next()
}
