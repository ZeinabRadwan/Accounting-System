import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Import store modules
import auth from './modules/auth'
import chartOfAccounts from './modules/chartOfAccounts'
import lang from './modules/lang'
import operations from './modules/operations'
import translations from './modules/translations'

const modules = {
  auth,
  chartOfAccounts,
  lang,
  operations,
  translations,
}

// Ensure all modules are namespaced
Object.keys(modules).forEach(name => {
  if (modules[name].namespaced === undefined) {
    modules[name].namespaced = true
  }
})

export default new Vuex.Store({
  modules
})
