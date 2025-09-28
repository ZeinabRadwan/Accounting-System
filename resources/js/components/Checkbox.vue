<template>
  <div class="custom-control custom-checkbox d-flex checkbox-container">
    <input
      :id="id || name"
      :name="name"
      :checked="internalValue"
      type="checkbox"
      class="custom-control-input"
      @click="handleClick"
      :required="required"
    />
    <label :for="id || name" class="custom-control-label my-auto">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',

  props: {
    id: { type: String, default: null },
    name: { type: String, default: 'checkbox' },
    value: { type: Boolean, default: false },
    checked: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
  },

  data: () => ({
    internalValue: false,
  }),

  watch: {
    value(val) {
      this.internalValue = val
    },

    checked(val) {
      this.internalValue = val
    },

    internalValue(val, oldVal) {
      if (val !== oldVal) {
        this.$emit('input', val)
      }
    },
  },

  created() {
    this.internalValue = this.value

    if ('checked' in this.$options.propsData) {
      this.internalValue = this.checked
    }
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e)

      if (!e.isPropagationStopped) {
        this.internalValue = e.target.checked
      }
    },
  },
}
</script>

<style scoped>
/* Checkbox container layout */
.checkbox-container {
  align-items: flex-start;
  gap: 0.5rem;
}

.checkbox-container .custom-control-input {
  position: static;
  margin-top: 0.25rem;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
}

.checkbox-container .custom-control-label {
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 0;
  line-height: 1.5;
}

/* RTL support for checkbox positioning */
[dir="rtl"] .checkbox-container {
  flex-direction: row-reverse;
}

[dir="rtl"] .checkbox-container .custom-control-input {
  margin-left: 0;
  margin-right: 0;
}

[dir="rtl"] .checkbox-container .custom-control-label {
  padding-right: 21px;
}
</style>
