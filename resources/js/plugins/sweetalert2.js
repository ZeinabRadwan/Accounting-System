import Vue from 'vue'
import Swal from 'sweetalert2'

// Preserve original fire
const originalFire = Swal.fire.bind(Swal)

// Utility: normalize SweetAlert2 arguments to an options object
function normalizeOptions(arg1, arg2, arg3) {
  if (typeof arg1 === 'object' && arg1 !== null) {
    return { ...arg1 }
  }
  // Signature: (title, text, icon)
  const options = {}
  if (typeof arg1 === 'string') options.title = arg1
  if (typeof arg2 === 'string') options.text = arg2
  if (typeof arg3 === 'string') options.icon = arg3
  return options
}

// Heuristic: determine if this is a DELETE confirmation
function isDeleteConfirmation(options) {
  if (!options) return false

  // If it shows cancel/confirm buttons and indicates delete/removal
  const hasConfirmFlow = options.showCancelButton === true || options.showDenyButton === true || options.showConfirmButton === true
  const title = `${options.title || ''}`.toLowerCase()
  const text = `${options.text || options.message || ''}`.toLowerCase()
  const html = `${options.html || ''}`.toLowerCase()

  const content = `${title} ${text} ${html}`
  const deleteKeywords = [
    'delete', 'remove', 'destroy', 'trash', 'eliminar', 'supprimer', 'löschen', 'حذف', 'مسح', '削除', '삭제'
  ]
  const hasDeleteWord = deleteKeywords.some(k => content.includes(k))

  // Common patterns in our app: confirm delete dialogs
  return hasConfirmFlow && hasDeleteWord
}

// Map SweetAlert options to toast options
function toToastOptions(options) {
  const icon = options.icon || options.type || 'info'
  const title = options.title || ''
  const message = options.text || options.message || ''
  return { icon, title, message }
}

// Patch Swal.fire to redirect non-delete alerts to toast
Swal.fire = function patchedFire(arg1, arg2, arg3) {
  try {
    const options = normalizeOptions(arg1, arg2, arg3)

    // Always use original SweetAlert for any confirm/cancel style dialog
    // to preserve Promise-based API (needed by callers using .then())
    const hasButtons = options.showCancelButton === true || options.showDenyButton === true || options.showConfirmButton === true
    if (hasButtons || isDeleteConfirmation(options)) {
      return originalFire(options)
    }

    // Otherwise, use the global toast system if available
    if (typeof window !== 'undefined' && window.toast) {
      const toastOpts = toToastOptions(options)
      // Route to specific method when possible
      const method = window.toast[toastOpts.icon] || window.toast.fire || window.toast.show
      return typeof method === 'function'
        ? method({ ...toastOpts })
        : window.toast.show({ ...toastOpts })
    }

    // Fallback to original SweetAlert if toast is not available
    return originalFire(options)
  } catch (e) {
    // In case of any error, fallback to original behavior
    return originalFire(arg1, arg2, arg3)
  }
}

// Make Swal available globally (patched)
Vue.prototype.$swal = Swal
window.Swal = Swal
