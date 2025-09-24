<template>
  <button
    v-if="isVisible"
    class="btn btn-success global-save-btn"
    :title="$t('Save')"
    @click.prevent="triggerSave"
  >
    <i class="fas fa-save" />
  </button>
</template>

<script>
export default {
  name: 'GlobalSaveButton',
  data: () => ({
    isVisible: false,
  }),
  mounted() {
    this.evaluateVisibility()
    this.$nextTick(() => {
      // Re-evaluate after initial render
      this.evaluateVisibility()
    })

    // Observe route changes to re-check presence of forms
    this.unwatch = this.$watch(
      () => this.$route.fullPath,
      () => setTimeout(this.evaluateVisibility, 50)
    )

    // Recalculate on DOM changes within content wrapper
    const content = document.querySelector('.content-wrapper') || document
    if (window.MutationObserver) {
      this.observer = new MutationObserver(() => {
        this.evaluateVisibility()
      })
      this.observer.observe(content, { childList: true, subtree: true })
    }
  },
  beforeDestroy() {
    if (this.unwatch) this.unwatch()
    if (this.observer) this.observer.disconnect()
  },
  methods: {
    getPrimaryForm() {
      // Priority: explicitly marked form
      let form = document.querySelector('form[data-primary-form="true"]')
      if (form) return form

      // Common pattern: forms with role="form"
      form = document.querySelector('form[role="form"]')
      if (form) return form

      // Fallback: first form in content area
      const content = document.querySelector('.content-wrapper') || document
      form = content.querySelector('form')
      return form || null
    },

    evaluateVisibility() {
      const form = this.getPrimaryForm()
      this.isVisible = !!form
    },

    triggerSave() {
      const form = this.getPrimaryForm()
      if (!form) return

      // Prefer dispatching a submit event so Vue handlers run (@submit.prevent)
      const event = new Event('submit', { bubbles: true, cancelable: true })
      const defaultPrevented = !form.dispatchEvent(event)

      if (!defaultPrevented) {
        // If no handler prevented default, try native submission (for non-Vue forms)
        if (typeof form.requestSubmit === 'function') {
          form.requestSubmit()
        } else if (typeof form.submit === 'function') {
          form.submit()
        }
      }
    },
  },
}
</script>

<style scoped>
.global-save-btn {
  position: fixed;
  top: 85px;
  right: 30px;
  z-index: 1060;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 10px 14px;
}

@media (max-width: 768px) {
  .global-save-btn {
    top: 70px;
    right: 15px;
  }
}
</style>


