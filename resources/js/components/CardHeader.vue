<template>
  <div class="card-header" :class="{ 'rtl-row-reverse': rtlRowReverse }">
    <div class="card-header-content">
      <h3 class="card-title">
        <slot name="icon"></slot>
        <slot name="title">
          <span v-if="title">{{ title }}</span>
        </slot>
      </h3>
      <div v-if="$slots.actions" class="card-tools">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardHeader",
  props: {
    title: {
      type: String,
      default: "",
    },
    rtlRowReverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.card-header {
  border-bottom: 0 !important;
  padding: 0.75rem 1.25rem 0 0 !important;
}

[dir="ltr"] .card-header {
  padding: 0.75rem 0 0 1.25rem !important;
}

.card-header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.card-header h3 {
  color: #023033;
  font-weight: bold;
  font-size: 1.25rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row;
}

/* SVG Icon styling in card header */
.card-header h3 svg {
  width: 44px;
  height: 44px;
  background: #33a0d91a;
  color: #33a0d9;
  border-radius: 10px;
  padding: 8px;
  margin-right: 12px;
  margin-left: 0;
  font-weight: bold;
  box-sizing: border-box;
  flex-shrink: 0;
}

.card-header .card-tools {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row;
}

.card-header .card-tools .form-control {
  border-radius: 10px;
  border: 1px solid #ced4da;
  padding: 8px 12px;
  font-size: 0.875rem;
}

/* RTL support for card header */
[dir="rtl"] .card-header-content {
  flex-direction: row;
}

/* RTL row-reverse override for specific cards */
[dir="rtl"] .card-header.rtl-row-reverse .card-header-content {
  flex-direction: row-reverse !important;
}

[dir="rtl"] .card-header h3 {
  flex-direction: row;
}

[dir="rtl"] .card-header h3 svg {
  margin-right: 0;
  margin-left: 12px;
}

/* RTL support for card tools */
[dir="rtl"] .card-header .card-tools {
  flex-direction: row;
}
</style>
