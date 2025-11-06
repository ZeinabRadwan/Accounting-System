import store from '~/store'

export default async (to, from, next) => {
  // Skip subscription check for initialization and auth pages
  const allowedRoutes = [
    'tenant.initialization',
    'login',
    'register',
    'password.request',
    'password.reset',
    'verification.verify',
    'verification.resend',
    'cross-domain-login',
    'settings.billing'
  ]

  // Always allow access to these routes without subscription check
  if (allowedRoutes.includes(to.name) || 
      to.name === 'tenant.initialization' || 
      to.path === '/tenant-initialization' ||
      to.path.startsWith('/tenant-initialization')) {
    return next()
  }

  if (store.getters['operations/tenant'] && !store.getters['operations/tenant'].is_subscribed) {
    if (to.name === 'settings.billing') {
      next()
    }
    else{
      next({ name: 'settings.billing' })
    }
  }

  next()
};
