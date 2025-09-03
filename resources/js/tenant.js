import Vue from 'vue'
import '~/plugins'
import '~/seperate-plugins/axios-tenant'
import '~/components'
import store from '~/store'
import router from '~/router/tenant'
import i18n from '~/plugins/i18n'
import can from '~/helpers/can'
import App from '~/components/App'
import currencyMixin from '~/mixins/currencyMixin'
import globalCurrencyMixin from '~/mixins/globalCurrencyMixin'
import VuePageTransition from 'vue-page-transition'
import Clipboard from 'v-clipboard'
import VueMasonry from 'vue-masonry-css'
import VueHtmlToPaper from 'vue-html-to-paper'
import DateRangePicker from 'vue-mj-daterangepicker'
import vSelect from 'vue-select'
import VTooltip from 'v-tooltip'
import axios from 'axios'
import VueMoment from 'vue-moment'
import { vfmPlugin } from "vue-final-modal"

// Import RTL styles
import '~/assets/css/rtl.css'

// Import RTL DateRangePicker Plugin
import rtlDaterangepickerPlugin from '~/plugins/rtlDaterangepickerPlugin'

// vue page transition
import '@toast-ui/editor/dist/toastui-editor.css'

Vue.use(VuePageTransition)
Vue.use(Clipboard)
Vue.use(VueMasonry)
Vue.use(DateRangePicker)
Vue.use(VueMoment)
Vue.use(vfmPlugin)
Vue.use(VTooltip)

// Use RTL DateRangePicker Plugin
Vue.use(rtlDaterangepickerPlugin)

window.Vue = import('vue').default

const options = {
  name: '_blank',
  styles: [
    'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap',
    window.location.origin + '/css/app.css'
  ],
  timeout: 1000, // default timeout before the print window appears
}
Vue.use(VueHtmlToPaper, options)

Vue.component('VSelect', vSelect)

VTooltip.options.defaultTemplate = '<div class="tooltip-vue" role="tooltip"><div class="tooltip-vue-arrow"></div><div class="tooltip-vue-inner"></div></div>'
VTooltip.options.defaultArrowSelector = '.tooltip-vue-arrow, .tooltip-vue__arrow'
VTooltip.options.defaultInnerSelector = '.tooltip-vue-inner, .tooltip-vue__inner'

Vue.config.productionTip = false
Vue.prototype.$can = can
Vue.prototype.$tenant = window.tenant
Vue.prototype.$stripe_key = window.stripe_key
Vue.prototype.$axios = axios
Vue.prototype.$http = axios

// Register global mixin
Vue.mixin(currencyMixin)
Vue.mixin(globalCurrencyMixin)

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
