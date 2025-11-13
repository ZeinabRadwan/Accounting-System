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
  const mod = await import(/* webpackChunkName: '' */ `~/lang/${locale}`)
  const incomingMessages = mod && (mod.default || mod)

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
