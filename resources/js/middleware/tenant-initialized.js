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

  // Always allow access to initialization page - check both name and path
  if (allowedRoutes.includes(to.name) || 
      to.name === 'tenant.initialization' || 
      to.path === '/tenant-initialization' ||
      to.path.startsWith('/tenant-initialization')) {
    // Mark that we're on initialization page in sessionStorage
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('on_initialization_page', 'true')
    }
    return next()
  }

  // If we're navigating away from initialization page, clear the flag
  if (from && (from.name === 'tenant.initialization' || from.path === '/tenant-initialization')) {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('on_initialization_page')
    }
    return next()
  }

  // Check if we're already on initialization page (prevent loops)
  if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('on_initialization_page') === 'true') {
    return next()
  }

  try {
    const response = await axios.get('/api/tenant-initialization/check', {
      timeout: 5000 // Add timeout to prevent hanging
    })
    
    if (response.data && response.data.data) {
      const isInitialized = response.data.data.is_initialized

      if (!isInitialized) {
        // Only redirect if we're not already going to initialization page
        if (to.name !== 'tenant.initialization' && 
            to.path !== '/tenant-initialization' &&
            !to.path.startsWith('/tenant-initialization')) {
          // Set flag before redirecting
          if (typeof sessionStorage !== 'undefined') {
            sessionStorage.setItem('on_initialization_page', 'true')
          }
          return next({ name: 'tenant.initialization' })
        }
      } else {
        // If initialized, clear the flag
        if (typeof sessionStorage !== 'undefined') {
          sessionStorage.removeItem('on_initialization_page')
        }
      }
    }

    next()
  } catch (error) {
    console.error('Error checking initialization status:', error)
    
    // On error, don't redirect if we're already on or going to initialization page
    // This prevents infinite redirect loops
    if (to.name === 'tenant.initialization' || 
        to.path === '/tenant-initialization' ||
        to.path.startsWith('/tenant-initialization') ||
        (from && (from.name === 'tenant.initialization' || from.path === '/tenant-initialization')) ||
        (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('on_initialization_page') === 'true')) {
      // Already on initialization page or coming from it, just allow
      return next()
    }
    
    // Only redirect to initialization if we're not already there
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('on_initialization_page', 'true')
    }
    return next({ name: 'tenant.initialization' })
  }
}
