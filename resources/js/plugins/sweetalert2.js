import Vue from 'vue'
import Swal from 'sweetalert2'

// Make Swal available globally
Vue.prototype.$swal = Swal
window.Swal = Swal
