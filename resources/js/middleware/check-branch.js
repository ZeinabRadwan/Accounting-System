import store from '~/store'

export default function (to, from, next) {
  const user = store.getters['auth/user']
  if (!user) return next()

  // Skip branch check for initialization and auth pages
  const allowedRoutes = [
    'tenant.initialization',
    'login',
    'register',
    'password.request',
    'password.reset',
    'verification.verify',
    'verification.resend',
    'cross-domain-login',
    'branches.select'
  ]

  // Always allow access to these routes without branch check
  if (allowedRoutes.includes(to.name) || 
      to.name === 'tenant.initialization' || 
      to.path === '/tenant-initialization' ||
      to.path.startsWith('/tenant-initialization')) {
    return next()
  }

  const defaultBranchId = Number(user.default_branch_id || 0)
  if ((defaultBranchId === 0 || isNaN(defaultBranchId)) && to.name !== 'branches.select') {
    return next({ name: 'branches.select', query: { redirect: to.fullPath } })
  }
  return next()
}


