import store from '~/store'

export default (module) => {
  // Get the system type from user
  const user = store.getters['auth/user']
  const systemType = user ? user.system_type : null

  // If no system type or system type is 'both', allow access
  if (!systemType || systemType === 'both') {
    return true
  }

  // Check if the requested module matches the system type
  return systemType === module
}
