<template>
  <div>
    <div class="tree-search-wrapper">
      <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
    </div>

    <div class="tree-body-container">
      <ul role="tree" aria-multiselectable="false" class="tree-view-list">
        <li
          v-for="item in hierarchicalItems"
          :key="item.id"
          class="tree-item"
          :class="{
            'tree-item-dragging': draggedItemId === item.id,
            'tree-item-drag-over': dragOverItemId === item.id,
          }"
          role="treeitem"
          :draggable="canDrag && canDrag(item)"
          @dragstart="handleDragStart && handleDragStart($event, item)"
          @dragover.prevent="handleDragOver && handleDragOver($event, item)"
          @dragleave="handleDragLeave && handleDragLeave($event, item)"
          @drop="handleDrop && handleDrop($event, item)"
          @dragend="handleDragEnd && handleDragEnd"
        >
          <div
            class="tree-item-content"
            :class="{ 'tree-item-has-children': item.hasChildren }"
            :style="isRTL ? { paddingRight: (item.level * 20 + 20) + 'px' } : { paddingLeft: (item.level * 20 + 20) + 'px' }"
            @click="handleItemClick(item)"
          >
            <!-- Folder/File Icon -->
            <div class="tree-item-icon-container" @click.stop="handleItemClick(item)">
              <i
                v-if="item.hasChildren"
                :class="item.expanded ? 'fas fa-folder-open' : 'fas fa-folder'"
              ></i>
              <i v-else class="fas fa-circle"></i>
            </div>

            <!-- Item Name -->
            <div class="tree-item-info">
              <span class="tree-item-name">{{ getDisplayName(item) }}</span>
              <span v-if="item.code" class="tree-item-code">{{ item.code }}</span>
            </div>

            <!-- Action Buttons -->
            <div class="tree-item-actions" @click.stop>
              <slot name="actions" :item="item">
                <!-- Default actions slot -->
              </slot>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeView',
  props: {
    items: {
      type: Array,
      required: true,
    },
    hierarchicalItems: {
      type: Array,
      required: true,
    },
    query: {
      type: String,
      default: '',
    },
    draggedItemId: {
      type: [String, Number],
      default: null,
    },
    dragOverItemId: {
      type: [String, Number],
      default: null,
    },
    canDrag: {
      type: Function,
      default: null,
    },
    getDisplayName: {
      type: Function,
      required: true,
    },
    isLastSibling: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isRTL: false,
    };
  },
  computed: {
    currentLocale() {
      return this.$store?.getters?.['lang/locale'] || 
             this.$i18n?.locale || 
             (window.config && window.config.locale) || 
             'en';
    },
  },
  watch: {
    currentLocale: {
      handler(newLocale) {
        this.updateRTLStatus(newLocale);
      },
      immediate: true,
    },
    '$i18n.locale': {
      handler(newLocale) {
        this.updateRTLStatus(newLocale);
      },
      immediate: true,
    },
  },
  mounted() {
    this.updateRTLStatus(this.currentLocale);
    // Listen for locale change events
    window.addEventListener('locale-changed', this.handleLocaleChange);
    window.addEventListener('rtl-forced', this.handleRTLChange);
  },
  beforeDestroy() {
    window.removeEventListener('locale-changed', this.handleLocaleChange);
    window.removeEventListener('rtl-forced', this.handleRTLChange);
  },
  methods: {
    isRTLLocale(locale) {
      const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'ku', 'yi'];
      return rtlLanguages.includes((locale || '').toLowerCase());
    },
    updateRTLStatus(locale) {
      const localeToCheck = locale || this.currentLocale;
      // Check from locale first
      this.isRTL = this.isRTLLocale(localeToCheck);
      // Also check document direction as fallback
      if (!this.isRTL) {
        this.isRTL = document.documentElement.dir === 'rtl' || 
                     document.documentElement.getAttribute('dir') === 'rtl';
      }
    },
    handleLocaleChange(event) {
      if (event && event.detail) {
        const { locale, isRTL } = event.detail;
        if (locale) {
          this.updateRTLStatus(locale);
        } else if (isRTL !== undefined) {
          this.isRTL = isRTL;
        }
      } else {
        this.updateRTLStatus(this.currentLocale);
      }
    },
    handleRTLChange(event) {
      if (event && event.detail) {
        const { locale, isRTL } = event.detail;
        if (locale) {
          this.updateRTLStatus(locale);
        } else if (isRTL !== undefined) {
          this.isRTL = isRTL;
        }
      }
    },
    handleItemClick(item) {
      if (item.hasChildren) {
        this.onToggleExpand(item.id);
      }
    },
    onToggleExpand(itemId) {
      this.$emit('toggle-expand', itemId);
    },
    resetPagination() {
      this.$emit('reset-pagination');
    },
    reload() {
      this.$emit('reload');
    },
    handleDragStart(event, item) {
      this.$emit('drag-start', event, item);
    },
    handleDragOver(event, item) {
      this.$emit('drag-over', event, item);
    },
    handleDragLeave(event, item) {
      this.$emit('drag-leave', event, item);
    },
    handleDrop(event, item) {
      this.$emit('drop', event, item);
    },
    handleDragEnd() {
      this.$emit('drag-end');
    },
  },
};
</script>

<style scoped>
/* Tree Search Wrapper */
.tree-search-wrapper {
  padding: 16px 20px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
}

.tree-search-wrapper :deep(.search-area) {
  position: relative;
}

.tree-search-wrapper :deep(.search-input) {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 10px 40px;
  font-size: 14px;
  color: #1a1a1a;
  width: 100%;
  transition: all 0.2s ease;
}

.tree-search-wrapper :deep(.search-input:focus) {
  outline: none;
  background: #fff;
  border-color: #2AB930;
  box-shadow: 0 0 0 3px rgba(42, 185, 48, 0.1);
}

.tree-search-wrapper :deep(.search-input::placeholder) {
  color: #adb5bd;
}

.tree-search-wrapper :deep(.search-icon) {
  color: #6c757d;
}

.tree-body-container {
  padding: 8px 0;
  max-height: calc(100vh - 280px);
  overflow-y: auto;
  overflow-x: visible;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
}

/* Tree List */
.tree-view-list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: visible;
  width: 100%;
  max-width: 1200px;
}

.tree-item {
  position: relative;
  transition: all 0.2s ease;
  overflow: visible;
}

.tree-item-dragging {
  opacity: 0.5;
}

.tree-item-drag-over .tree-item-content {
  background-color: #e3f2fd !important;
  border: 1px dashed #2AB930;
  box-shadow: 0 2px 8px rgba(42, 185, 48, 0.15);
}

.tree-item-content {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  min-height: 44px;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;
  position: relative;
  z-index: 2;
  background: #fff;
  border: none;
  border-radius: 6px;
  margin: 2px 8px;
}

.tree-item-content.tree-item-has-children {
  cursor: pointer;
}

.tree-item-content:hover {
  background-color: #f8f9fa;
  transform: translateX(2px);
}

[dir="rtl"] .tree-item-content:hover {
  transform: translateX(-2px);
}

/* Icon Container */
.tree-item-icon-container {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.15s ease;
}

[dir="rtl"] .tree-item-icon-container {
  margin-right: 0;
  margin-left: 10px;
}

.tree-item-icon-container:hover {
  background-color: #f0f0f0;
}

.tree-item-icon-container .fa-folder {
  color: #ffb300;
  font-size: 18px;
}

.tree-item-icon-container .fa-folder-open {
  color: #ff8f00;
  font-size: 18px;
}

.tree-item-icon-container .fa-circle {
  color: #bdbdbd;
  font-size: 6px;
}

/* Info Section */
.tree-item-info {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
}

.tree-item-name {
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  letter-spacing: -0.01em;
}

.tree-item-code {
  font-size: 12px;
  font-weight: 400;
  color: #6b7280;
  background: #f3f4f6;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  white-space: nowrap;
  flex-shrink: 0;
  margin-left: 8px;
}

[dir="rtl"] .tree-item-code {
  margin-left: 0;
  margin-right: 8px;
}

/* Action Buttons - Modern grouped style */
.tree-item-actions {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: auto;
  opacity: 0;
  transition: opacity 0.2s ease;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

[dir="rtl"] .tree-item-actions {
  margin-left: 0;
  margin-right: auto;
}

.tree-item:hover .tree-item-actions {
  opacity: 1;
}

.tree-action-btn {
  padding: 6px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.15s ease;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #666;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  position: relative;
}

.tree-action-btn:hover {
  background: #f5f5f5;
  color: #1a1a1a;
}

.tree-action-btn:active {
  transform: scale(0.98);
}

.tree-action-btn.disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

.tree-action-view {
  color: #666;
}

.tree-action-view:hover {
  background: #e0e0e0;
  color: #333;
}

.tree-action-edit {
  color: #666;
}

.tree-action-edit:hover {
  background: #e0e0e0;
  color: #333;
}

.tree-action-add {
  color: #666;
}

.tree-action-add:hover {
  background: #e0e0e0;
  color: #333;
}

.tree-action-delete {
  color: #666;
}

.tree-action-delete:hover {
  background: #fee;
  color: #d32f2f;
}

/* Responsive */
@media (max-width: 768px) {
  .tree-item-actions {
    opacity: 1;
  }

  .tree-body-container {
    max-height: calc(100vh - 200px);
  }
}

/* Scrollbar Styling */
.tree-body-container::-webkit-scrollbar {
  width: 6px;
}

.tree-body-container::-webkit-scrollbar-track {
  background: #fafafa;
  border-radius: 3px;
}

.tree-body-container::-webkit-scrollbar-thumb {
  background: #d0d0d0;
  border-radius: 3px;
  transition: background 0.2s ease;
}

.tree-body-container::-webkit-scrollbar-thumb:hover {
  background: #b0b0b0;
}

/* Drag cursor */
.tree-item[draggable="true"] .tree-item-content {
  cursor: grab;
}

.tree-item[draggable="true"] .tree-item-content:active {
  cursor: grabbing;
}

/* Smooth animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.tree-item {
  animation: fadeIn 0.2s ease-out;
}
</style>

