import Vue from 'vue'
import store from '~/store'
import Meta from 'vue-meta'
import routes from './routes'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'

Vue.use(Meta)
Vue.use(Router)

// RTL Management Functions
function isRTLLocale(locale) {
  const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'ku', 'yi']
  return rtlLanguages.includes(locale.toLowerCase())
}

function forceRTLMode() {
  // Get current locale from multiple sources
  let currentLocale = 'en'
  
  // 1. Check store FIRST (most current state)
  if (store && store.getters['lang/locale']) {
    currentLocale = store.getters['lang/locale']
    console.log('Router: Using locale from store:', currentLocale)
  }
  // 2. Check localStorage second
  else if (localStorage.getItem('current_locale')) {
    currentLocale = localStorage.getItem('current_locale')
    console.log('Router: Using locale from localStorage:', currentLocale)
  }
  // 3. Check window.config
  else if (window.config && window.config.locale) {
    currentLocale = window.config.locale
    console.log('Router: Using locale from window.config:', currentLocale)
  }
  // 4. Check document
  else {
    const docLang = document.documentElement.getAttribute('lang')
    if (docLang) {
      currentLocale = docLang
      console.log('Router: Using locale from document:', currentLocale)
    }
  }
  
  // Apply RTL mode
  const isRTL = isRTLLocale(currentLocale)
  
  console.log('Router: Force applying RTL mode - Locale:', currentLocale, 'RTL:', isRTL)
  
  // Update document attributes
  document.documentElement.setAttribute('lang', currentLocale)
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
  
  // Update body attributes
  if (document.body) {
    document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
    
    // Update CSS classes
    if (isRTL) {
      document.body.classList.add('rtl')
      document.body.classList.remove('ltr')
    } else {
      document.body.classList.add('ltr')
      document.body.classList.remove('rtl')
    }
  }
  
  // Store in localStorage
  localStorage.setItem('current_locale', currentLocale)
  localStorage.setItem('rtl_mode', isRTL.toString())
  
  // Dispatch custom event
  window.dispatchEvent(new CustomEvent('rtl-forced', {
    detail: { locale: currentLocale, isRTL: isRTL }
  }))
  
  // Force re-render of all Vue components
  if (window.Vue && window.Vue.prototype.$root) {
    try {
      window.Vue.prototype.$root.$forceUpdate()
    } catch (e) {
      console.log('Router: Could not force update root component')
    }
  }
}

// The middleware for every page of the application.
const globalMiddleware = ['locale', 'check-auth']

// Import middleware modules
import admin from "~/middleware/admin";
import auth from "~/middleware/auth";
import checkAuth from "~/middleware/check-auth";
import checkBranch from "~/middleware/check-branch";
import checkPermissions from "~/middleware/check-permissions";
import checkSystemType from "~/middleware/check-system-type";
import guest from "~/middleware/guest";
import isSubscribed from "~/middleware/is-subscribed";
import locale from "~/middleware/locale";
import role from "~/middleware/role";
import tenantInitialized from "~/middleware/tenant-initialized";

const routeMiddleware = {
  admin: admin.default || admin,
  auth: auth.default || auth,
  "check-auth": checkAuth.default || checkAuth,
  "check-branch": checkBranch.default || checkBranch,
  "check-permissions": checkPermissions.default || checkPermissions,
  "check-system-type": checkSystemType.default || checkSystemType,
  guest: guest.default || guest,
  "is-subscribed": isSubscribed.default || isSubscribed,
  locale: locale.default || locale,
  role: role.default || role,
  "tenant-initialized": tenantInitialized.default || tenantInitialized,
};

const router = createRouter()

sync(store, router)

export default router

/**
 * Create a new router instance.
 *
 * @return {Router}
 */
function createRouter () {
  const router = new Router({
    scrollBehavior,
    mode: 'history',
    routes
  })

  router.beforeEach(beforeEach)
  router.afterEach(afterEach)
  
  // Add additional RTL guard that runs on every navigation
  router.beforeResolve((to, from, next) => {
    console.log('Router: beforeResolve - Force applying RTL mode')
    forceRTLMode()
    next()
  })

  return router
}

/**
 * Global router guard.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function beforeEach (to, from, next) {
  // FORCE RTL MODE BEFORE ANYTHING ELSE
  forceRTLMode()
  
  let components = []

  try {
    // Get the matched components and resolve them.
    components = await resolveComponents(
      router.getMatchedComponents({ ...to })
    )
  } catch (error) {
    if (/^Loading( CSS)? chunk (\d)+ failed\./.test(error.message)) {
      window.location.reload(true)
      return
    }
  }

  if (components.length === 0) {
    return next()
  }

  // Start the loading bar.
  if (components[components.length - 1].loading !== false) {
    router.app.$nextTick(() => router.app.$loading.start())
  }

  // Get the middleware for all the matched components.
  const middleware = getMiddleware(components)

  // Call each middleware.
  callMiddleware(middleware, to, from, (...args) => {
    // Set the application layout only if "next()" was called with no args.
    if (args.length === 0) {
      router.app.setLayout(components[0].layout || '')
    }

    next(...args)
  })
}

/**
 * Global after hook.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function afterEach () {
  await router.app.$nextTick()

  router.app.$loading.finish()
  
  // FORCE RTL MODE AFTER ROUTE CHANGE
  forceRTLMode()
}

/**
 * Call each middleware.
 *
 * @param {Array} middleware
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
function callMiddleware (middleware, to, from, next) {
  const stack = middleware.reverse()

  const _next = (...args) => {
    // Stop if "_next" was called with an argument or the stack is empty.
    if (args.length > 0 || stack.length === 0) {
      if (args.length > 0) {
        router.app.$loading.finish()
      }

      return next(...args)
    }

    const { middleware, params } = parseMiddleware(stack.pop())

    if (typeof middleware === 'function') {
      middleware(to, from, _next, params)
    } else if (routeMiddleware[middleware]) {
      routeMiddleware[middleware](to, from, _next, params)
    } else {
      throw Error(`Undefined middleware [${middleware}]`)
    }
  }

  _next()
}

/**
 * @param  {String|Function} middleware
 * @return {Object}
 */
function parseMiddleware (middleware) {
  if (typeof middleware === 'function') {
    return { middleware }
  }

  const [name, params] = middleware.split(':')

  return { middleware: name, params }
}

/**
 * Resolve async components.
 *
 * @param  {Array} components
 * @return {Array}
 */
function resolveComponents (components) {
  return Promise.all(components.map(component => {
    return typeof component === 'function' ? component() : component
  }))
}

/**
 * Merge the the global middleware with the components middleware.
 *
 * @param  {Array} components
 * @return {Array}
 */
function getMiddleware (components) {
  const middleware = [...globalMiddleware]

  components.filter(c => c.middleware).forEach(component => {
    if (Array.isArray(component.middleware)) {
      middleware.push(...component.middleware)
    } else {
      middleware.push(component.middleware)
    }
  })

  return middleware
}

/**
 * Scroll Behavior
 *
 * @link https://router.vuejs.org/en/advanced/scroll-behavior.html
 *
 * @param  {Route} to
 * @param  {Route} from
 * @param  {Object|undefined} savedPosition
 * @return {Object}
 */
function scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  if (to.hash) {
    return { selector: to.hash }
  }

  const [component] = router.getMatchedComponents({ ...to }).slice(-1)

  if (component && component.scrollToTop === false) {
    return {}
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ x: 0, y: 0 })
    }, 190)
  })
}

