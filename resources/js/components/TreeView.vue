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
          <!-- Tree Lines - Vertical connectors to show parent-child relationship -->
          <div v-if="item.level > 0" class="tree-lines-wrapper">
            <!-- Vertical lines for each ancestor level (always continue) -->
            <div
              v-for="levelIndex in (item.level - 1)"
              :key="'ancestor-' + levelIndex"
              class="tree-line-vertical tree-line-ancestor"
              :style="isRTL ? { right: ((levelIndex - 1) * 20 + 10) + 'px' } : { left: ((levelIndex - 1) * 20 + 10) + 'px' }"
            ></div>
            <!-- Vertical line for direct parent (continues through all siblings) -->
            <div
              :key="'parent-' + item.level"
              class="tree-line-vertical"
              :class="{ 
                'tree-line-last': isLastSibling(item),
                'tree-line-continue': !isLastSibling(item)
              }"
              :style="isRTL ? { right: ((item.level - 1) * 20 + 10) + 'px' } : { left: ((item.level - 1) * 20 + 10) + 'px' }"
            ></div>
            <!-- Horizontal connector from vertical line to item -->
            <div
              class="tree-line-horizontal"
              :style="isRTL ? { right: ((item.level - 1) * 20 + 10) + 'px' } : { left: ((item.level - 1) * 20 + 10) + 'px' }"
            ></div>
          </div>
          
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
  computed: {
    isRTL() {
      return document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
    },
  },
  methods: {
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
}

/* Tree List */
.tree-view-list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: visible;
}

.tree-item {
  position: relative;
  transition: all 0.2s ease;
  overflow: visible;
}

/* Tree Lines - Vertical lines connecting parent to children */
.tree-lines-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: visible;
}

[dir="rtl"] .tree-lines-wrapper {
  right: 0;
  left: auto;
}

.tree-line-vertical {
  position: absolute;
  top: 50%;
  width: 3px;
  background: #4b5563;
  z-index: 1;
  opacity: 1 !important;
  display: block !important;
  visibility: visible !important;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
}

/* Vertical line for ancestor levels - always continues through all children */
.tree-line-vertical.tree-line-ancestor {
  top: 50%;
  bottom: -10000px;
  background: #4b5563;
  opacity: 1 !important;
  display: block !important;
  visibility: visible !important;
}

/* Continue vertical line through all children when not last sibling */
.tree-line-vertical.tree-line-continue {
  top: 50%;
  bottom: -10000px;
  background: #4b5563;
  opacity: 1 !important;
  display: block !important;
  visibility: visible !important;
}

/* Stop vertical line at middle of last child */
.tree-line-vertical.tree-line-last {
  top: 50%;
  bottom: 0;
  background: #4b5563;
  opacity: 1 !important;
  display: block !important;
  visibility: visible !important;
}

.tree-line-horizontal {
  position: absolute;
  top: 50%;
  width: 24px;
  height: 3px;
  background: #4b5563;
  z-index: 1;
  margin-top: -1.5px;
  opacity: 1 !important;
  display: block !important;
  visibility: visible !important;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
}

/* RTL Support for tree lines */
[dir="rtl"] .tree-line-vertical {
  right: 0;
  left: auto;
}

[dir="rtl"] .tree-line-horizontal {
  right: 0;
  left: auto;
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

