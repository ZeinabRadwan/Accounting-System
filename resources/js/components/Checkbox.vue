<template>
  <div class="d-flex checkbox-container">
    <div class="checkbox-wrapper-31">
      <input :id="id || name" :name="name" :checked="internalValue" type="checkbox" @click="handleClick"
        :required="required" />
      <svg viewBox="0 0 35.6 35.6" width="20" height="20">
        <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
        <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
        <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
      </svg>
    </div>
    <label :for="id || name" class="checkbox-label my-auto">
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
  gap: 0;
  flex-direction: row-reverse;
}

.checkbox-wrapper-31:hover .check {
  stroke-dashoffset: 0;
}

.checkbox-wrapper-31 {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.checkbox-wrapper-31 .background {
  fill: #ccc;
  transition: ease all 0.6s;
  -webkit-transition: ease all 0.6s;
}

.checkbox-wrapper-31 .stroke {
  fill: none;
  stroke: #fff;
  stroke-miterlimit: 10;
  stroke-width: 2px;
  stroke-dashoffset: 100;
  stroke-dasharray: 100;
  transition: ease all 0.6s;
  -webkit-transition: ease all 0.6s;
}

.checkbox-wrapper-31 .check {
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
  stroke-dashoffset: 22;
  stroke-dasharray: 22;
  transition: ease all 0.6s;
  -webkit-transition: ease all 0.6s;
}

.checkbox-wrapper-31 input[type=checkbox] {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  margin: 0;
  opacity: 0;
  -appearance: none;
  -webkit-appearance: none;
  z-index: 1;
  cursor: pointer;
}

.checkbox-wrapper-31 input[type=checkbox]:checked+svg .background {
  fill: #0775AF;
}

.checkbox-wrapper-31 input[type=checkbox]:checked+svg .stroke {
  stroke-dashoffset: 0;
}

.checkbox-wrapper-31 input[type=checkbox]:checked+svg .check {
  stroke-dashoffset: 0;
}

.checkbox-label {
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 0;
  line-height: 1;
  cursor: pointer;
}

/* LTR support - checkbox on left, text on right */
[dir="ltr"] .checkbox-container {
  flex-direction: row;
}

[dir="ltr"] .checkbox-wrapper-31 {
  order: 1;
}

[dir="ltr"] .checkbox-label {
  order: 2;
  text-align: left;
}

/* RTL support - text on right, checkbox on left */
[dir="rtl"] .checkbox-container {
  flex-direction: row-reverse;
}

[dir="rtl"] .checkbox-label {
  padding-right: 0;
  text-align: right;
  order: 1;
}

[dir="rtl"] .checkbox-wrapper-31 {
  order: 2;
}
</style>
