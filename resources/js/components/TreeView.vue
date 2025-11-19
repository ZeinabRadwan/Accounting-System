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
            <!-- Vertical lines for each parent level -->
            <div
              v-for="level in item.level"
              :key="'line-' + level"
              class="tree-line-vertical"
              :class="{ 
                'tree-line-last': level === item.level && isLastSibling(item),
                'tree-line-continue': level === item.level && !isLastSibling(item)
              }"
              :style="{ left: ((level - 1) * 20 + 10) + 'px' }"
            ></div>
            <!-- Horizontal connector from vertical line to item -->
            <div
              class="tree-line-horizontal"
              :style="{ left: ((item.level - 1) * 20 + 10) + 'px' }"
            ></div>
          </div>
          
          <div
            class="tree-item-content"
            :style="{ paddingLeft: (item.level * 20 + 20) + 'px' }"
          >
            <!-- Expand/Collapse Icon -->
            <div class="tree-item-expand" @click.stop="onToggleExpand(item.id)">
              <i
                v-if="item.hasChildren"
                :class="item.expanded ? 'fas fa-chevron-down' : (isRTL ? 'fas fa-chevron-left' : 'fas fa-chevron-right')"
              ></i>
              <span v-else class="tree-item-spacer"></span>
            </div>

            <!-- Folder/File Icon -->
            <div class="tree-item-icon-container">
              <i
                v-if="item.hasChildren"
                :class="item.expanded ? 'fas fa-folder-open' : 'fas fa-folder'"
              ></i>
              <i v-else class="fas fa-file-alt"></i>
            </div>

            <!-- Item Info -->
            <div class="tree-item-info">
              <div class="tree-item-main">
                <span class="tree-item-name">{{ getDisplayName(item) }}</span>
                <span class="tree-item-code">{{ item.code }}</span>
                <slot name="badges" :item="item">
                  <!-- Default badges slot -->
                </slot>
                <span v-if="item.children_count && item.children_count > 0" class="tree-item-children-count">
                  <i class="fas fa-sitemap"></i> {{ item.children_count }}
                </span>
              </div>
            </div>

            <!-- Action Icons -->
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
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
  background: #fafbfc;
}

.tree-body-container {
  padding: 0;
  max-height: calc(100vh - 280px);
  overflow-y: auto;
  background: #fff;
}

/* Tree List */
.tree-view-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tree-item {
  position: relative;
  transition: all 0.2s ease;
}

/* Tree Lines - Clear vertical lines connecting parent to children */
.tree-lines-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  pointer-events: none;
  z-index: 0;
}

.tree-line-vertical {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #d0d0d0;
  z-index: 0;
}

/* Continue vertical line through all children */
.tree-line-vertical.tree-line-continue {
  bottom: 0;
}

/* Stop vertical line at middle of last child */
.tree-line-vertical.tree-line-last {
  bottom: 50%;
}

.tree-line-horizontal {
  position: absolute;
  top: 50%;
  width: 12px;
  height: 2px;
  background: #d0d0d0;
  z-index: 0;
  margin-top: -1px;
}

.tree-item-dragging {
  opacity: 0.5;
}

.tree-item-drag-over {
  background-color: #e3f2fd !important;
  border-left: 3px solid #1976d2;
  box-shadow: none;
  transform: none;
}

.tree-item-content {
  display: flex;
  align-items: center;
  padding: 14px 20px;
  min-height: 56px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;
  border-left: 3px solid transparent;
  margin: 1px 0;
  border-radius: 0;
  position: relative;
  z-index: 1;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
}

.tree-item-content:hover {
  background-color: #fafbfc;
  border-left-color: #2AB930;
  box-shadow: none;
}

/* Expand/Collapse */
.tree-item-expand {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  cursor: pointer;
  color: #666;
  flex-shrink: 0;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.tree-item-expand:hover {
  color: #2AB930;
  background-color: #f6fef4;
}

.tree-item-spacer {
  width: 20px;
  height: 20px;
}

/* Icon Container */
.tree-item-icon-container {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-shrink: 0;
}

.tree-item-icon-container .fa-folder {
  color: #ffc107;
  font-size: 16px;
}

.tree-item-icon-container .fa-folder-open {
  color: #ff9800;
  font-size: 16px;
}

.tree-item-icon-container .fa-file-alt {
  color: #9e9e9e;
  font-size: 14px;
}

/* Info Section */
.tree-item-info {
  flex: 1;
  min-width: 0;
}

.tree-item-main {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.tree-item-name {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
  line-height: 1.4;
}

.tree-item-code {
  font-size: 11px;
  color: #666;
  background: #f8f9fa;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-weight: 400;
  border: 1px solid #e9ecef;
  line-height: 1.2;
}

.tree-item-children-count {
  font-size: 11px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
  background: #f8f9fa;
  padding: 3px 8px;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  line-height: 1.2;
}

.tree-item-children-count i {
  font-size: 10px;
  color: #999;
}

/* Action Buttons */
.tree-item-actions {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.tree-item:hover .tree-item-actions {
  opacity: 1;
}

.tree-action-btn {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  background: transparent;
  cursor: pointer;
  color: #666;
  position: relative;
  font-size: 13px;
}

.tree-action-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tree-action-btn.disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

.tree-action-view {
  color: #33a0d9;
}

.tree-action-view:hover {
  background: #e3f2fd;
  color: #1976d2;
}

.tree-action-edit {
  color: #ffc107;
}

.tree-action-edit:hover {
  background: #fff8e1;
  color: #f57c00;
}

.tree-action-add {
  color: #2AB930;
}

.tree-action-add:hover {
  background: #f6fef4;
  color: #1e8e26;
}

.tree-action-delete {
  color: #dc3545;
}

.tree-action-delete:hover {
  background: #fee;
  color: #c82333;
}

/* Responsive */
@media (max-width: 768px) {
  .tree-item-main {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

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
  background: #fafbfc;
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
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tree-item {
  animation: fadeIn 0.2s ease-out;
}
</style>

