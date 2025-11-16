<template>
  <div class="search-area">
    <div class="search-btn search-icon" :class="[query !== '' ? 'd-none' : 'd-inline-block']">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <input ref="autoFocusInput" type="text" :value="query" class="search-input form-control"
      :placeholder="$t('Search')" @input="$emit('reset-pagination', $event.target.value)" />
    <label class="search-btn search-clear" :class="[query !== '' ? 'd-inline-block' : 'd-none']" @click="$emit('reload')">
      <i class="fas fa-times" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'Search',
  model: {
    prop: 'query',
    event: 'reset-pagination',
  },
  mounted() {
    if (this.isPosSearch) {
      this.$nextTick(() => this.$refs.autoFocusInput.focus())
    }
  },
  props: {
    query: {
    },
    isPosSearch: {
      type: Boolean,
      default: false,
    },

  }
}
</script>

<style>
.search-area {
  position: relative;
}

.search-area input {
  border-radius: 5px;
}

[dir="ltr"] .search-area input {
  padding-left: 40px;
  padding-right: 40px;
}

[dir="rtl"] .search-area input {
  padding-left: 40px;
  padding-right: 40px;
}

/* Search icon positioning */
.search-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
}

.search-icon svg {
  width: 18px;
  height: 18px;
}

[dir="ltr"] .search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  pointer-events: none;
}

[dir="rtl"] .search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  pointer-events: none;
  right: auto;
}

/* Clear button positioning */
[dir="ltr"] .search-clear {
  position: absolute !important;
  right: 12px !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 1;
  cursor: pointer;
}

[dir="rtl"] .search-clear {
  position: absolute !important;
  right: 12px !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 1;
  cursor: pointer;
  left: auto;
}
</style>
