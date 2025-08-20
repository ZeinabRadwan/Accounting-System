import store from '~/store'
import { loadMessages } from '~/plugins/i18n'

export default async (to, from, next) => {

  console.log(store.getters['auth/check'])
  // Check if user is authenticated and has a locale preference
  if (store.getters['auth/check']) {
    const user = store.getters['auth/user']
    if (user && user.locale && user.locale !== store.getters['lang/locale']) {
      try {
        // Load messages for the user's locale
        await loadMessages(user.locale)
        
        // Update the Vuex store locale
        await store.dispatch('lang/setLocale', { locale: user.locale })
        
        // Update cookie
        const Cookies = await import('js-cookie')
        Cookies.default.set('locale', user.locale, { expires: 365 })
        
        console.log('Locale updated from user preference:', user.locale)
      } catch (error) {
        console.warn('Failed to update locale from user preference:', error)
      }
    }
  }
  
  // Continue with normal locale loading
  await loadMessages(store.getters['lang/locale'])
  next()
}
