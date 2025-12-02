import store from '~/store'

// Routes that POS-only users can access
const POS_ALLOWED_ROUTES = [
  'home',
  'dashboard',
  'pos.create',
  'inventory.index',
  'inventory.history',
  'inventory.history-general',
  'inventory.count',
  'products.index',
  'products.create',
  'products.show',
  'products.edit',
  'productCats.index',
  'productCats.create',
  'productCats.edit',
  'productSubCats.index',
  'productSubCats.create',
  'productSubCats.edit',
  'adjustments.index',
  'adjustments.create',
  'adjustments.show',
  'adjustments.edit',
  'barcode.print',
  'stockAlertProducts',
  'setup.index',
  'setup.general'
]

export default async (to, from, next) => {
  // Allow authentication and initialization routes for everyone
  const publicRoutes = [
    'login',
    'register',
    'welcome',
    'password.request',
    'password.reset',
    'verification.verify',
    'verification.resend',
    'permission-denied',
    'tenant.initialization',
    'cross-domain-login',
    'tenant.impersonate'
  ]

  if (publicRoutes.includes(to.name)) {
    return next()
  }

  // Fetch user if not already fetched
  if (!store.getters['auth/user']) {
    await store.dispatch('auth/fetchUser')
  }

  const user = store.getters['auth/user']
  const systemType = user ? user.system_type : null

  // If no system type or system type is 'both', allow all access
  if (!systemType || systemType === 'both') {
    return next()
  }

  // For POS-only users, check if route is in allowed list
  if (systemType === 'pos') {
    // Skip check if route name doesn't exist yet (initial load or 404)
    if (!to.name || to.name === 'errors/404') {
      return next()
    }

    // Allow if route name is in POS_ALLOWED_ROUTES
    if (POS_ALLOWED_ROUTES.includes(to.name)) {
      return next()
    }
    
    // Check if route explicitly allows POS
    const systemTypeAllowed = to.meta.systemType
    if (systemTypeAllowed) {
      if (Array.isArray(systemTypeAllowed) && systemTypeAllowed.includes('pos')) {
        return next()
      } else if (systemTypeAllowed === 'pos') {
        return next()
      }
    }
    
    // Don't redirect to permission-denied if we're already there
    if (to.name === 'permission-denied' || from.name === 'permission-denied') {
      return next({ name: 'home' })
    }
    
    // Block all other routes for POS users
    return next({ name: 'permission-denied' })
  }

  // For accounting-only users, check system type restrictions
  const systemTypeAllowed = to.meta.systemType

  // If no system type restriction is set, allow access for accounting
  if (!systemTypeAllowed) {
    return next()
  }

  // Check if system type is allowed
  if (systemTypeAllowed && Array.isArray(systemTypeAllowed)) {
    if (systemTypeAllowed.includes(systemType)) {
      return next()
    }
  } else if (systemTypeAllowed === systemType) {
    return next()
  }

  // Block access and redirect to permission denied
  return next({ name: 'permission-denied' })
}
