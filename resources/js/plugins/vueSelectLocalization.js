import Vue from 'vue'
import LocalizedVSelect from '~/components/LocalizedVSelect'

// Plugin to replace v-select with localized version
export default {
  install(Vue) {
    // Register the localized version to replace v-select
    Vue.component('v-select', LocalizedVSelect)
    Vue.component('VSelect', LocalizedVSelect)
  }
}
