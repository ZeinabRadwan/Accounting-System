import store from '~/store'
import can from '~/helpers/can'

export default async (to, from, next) => {
  const reqiredPermissions = to.meta.permissions

  // If user is not loaded and we have a token, fetch the user first
  if (!store.getters['auth/user'] && store.getters['auth/token']) {
    try {
      await store.dispatch('auth/fetchUser')
    } catch (e) {
      // If fetch fails, continue with permission check anyway
      console.warn('Failed to fetch user in check-permissions:', e)
    }
  }

  const canEnter = can(reqiredPermissions)
  if (!canEnter) {
    return next({ name: 'permission-denied' })
  }
  return next()
}
