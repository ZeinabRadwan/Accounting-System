import axios from 'axios'

export default async (to, from, next) => {
  // Skip check for initialization page itself and auth pages
  const allowedRoutes = [
    'tenant.initialization',
    'login',
    'register',
    'password.request',
    'password.reset',
    'verification.verify',
    'verification.resend',
    'cross-domain-login'
  ]

  if (allowedRoutes.includes(to.name)) {
    return next()
  }

  try {
    const response = await axios.get('/api/tenant-initialization/check')
    
    if (response.data && response.data.data) {
      const isInitialized = response.data.data.is_initialized

      if (!isInitialized) {
        // Redirect to initialization page
        return next({ name: 'tenant.initialization' })
      }
    }

    next()
  } catch (error) {
    console.error('Error checking initialization status:', error)
    
    // On error, assume not initialized and redirect
    return next({ name: 'tenant.initialization' })
  }
}
