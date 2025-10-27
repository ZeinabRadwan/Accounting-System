import canAccessModule from '~/helpers/canAccessModule'

export default {
  install(Vue) {
    Vue.prototype.$canAccessModule = function(module) {
      return canAccessModule(module)
    }

    Vue.prototype.$isPOS = function() {
      const user = this.$store.getters['auth/user']
      return user && user.system_type === 'pos'
    }

    Vue.prototype.$isAccounting = function() {
      const user = this.$store.getters['auth/user']
      return user && user.system_type === 'accounting'
    }

    Vue.prototype.$isBoth = function() {
      const user = this.$store.getters['auth/user']
      return user && user.system_type === 'both'
    }
  }
}
