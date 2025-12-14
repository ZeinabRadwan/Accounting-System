<template>
  <div class="tree-split-layout">
    <!-- Tree Panel -->
    <div class="tree-panel">
      <div class="tree-search-wrapper">
        <search :query="searchQuery" @reset-pagination="handleSearchInput" @reload="reload" />
      </div>

      <div class="tree-body-container">
        <ul role="tree" aria-multiselectable="false" class="tree-view-list">
          <li v-for="item in hierarchicalItems" :key="item.id" class="tree-item" :class="{
            'tree-item-dragging': draggedItemId === item.id,
            'tree-item-drag-over': dragOverItemId === item.id,
            'tree-item-selected': selectedAccount && selectedAccount.id === item.id,
          }" role="treeitem" :draggable="canDrag && canDrag(item)"
            @dragstart="handleDragStart && handleDragStart($event, item)"
            @dragover.prevent="handleDragOver && handleDragOver($event, item)"
            @dragleave="handleDragLeave && handleDragLeave($event, item)" @drop="handleDrop && handleDrop($event, item)"
            @dragend="handleDragEnd && handleDragEnd">
            <div class="tree-item-content" :class="{ 'tree-item-has-children': item.hasChildren }"
              :style="isRTL ? { paddingRight: (item.level * 35 + 20) + 'px' } : { paddingLeft: (item.level * 35 + 20) + 'px' }"
              @click="handleItemClick(item)">
              <!-- Vertical connector lines for all parent levels -->
              <div v-for="parentLevel in item.level" :key="'connector-' + parentLevel" class="tree-vertical-line"
                :style="getVerticalLineStyle(item, parentLevel - 1)"></div>

              <!-- Horizontal connector line -->
              <div v-if="item.level > 0" class="tree-horizontal-line" :style="getHorizontalLineStyle(item)"></div>

              <!-- Expand/Collapse Icon -->
              <div v-if="item.hasChildren" class="tree-item-expand-icon" @click.stop="onToggleExpand(item.id)">
                <i :class="item.expanded ? 'fas fa-chevron-down' : (isRTL ? 'fas fa-chevron-left' : 'fas fa-chevron-right')"></i>
              </div>
              <div v-else class="tree-item-expand-icon tree-item-expand-placeholder"></div>

              <!-- Folder/File Icon -->
              <div class="tree-item-icon-container">
                <i v-if="item.hasChildren" :class="item.expanded ? 'fas fa-folder-open' : 'fas fa-folder'"></i>
                <i v-else class="fas fa-file-invoice"></i>
              </div>

              <!-- Item Name -->
              <div class="tree-item-info">
                <span class="tree-item-name">{{ getDisplayName(item) }}</span>
                <span v-if="item.code" class="tree-item-code">{{ item.code }}</span>
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

    <!-- Details Panel -->
    <div class="details-panel" :class="{ 'details-panel-visible': selectedAccount }">
      <div v-if="selectedAccount" class="account-details-card">
        <div class="details-header">
          <h3 class="details-title">{{ $t('Account Details') }}</h3>
          <button class="details-close-btn" @click="closeDetails">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="details-body">
          <div class="detail-item">
            <label class="detail-label">{{ $t('Name') }}</label>
            <div class="detail-value">{{ getDisplayName(selectedAccount) }}</div>
          </div>

          <div class="detail-item">
            <label class="detail-label">{{ $t('Code') }}</label>
            <div class="detail-value detail-code">{{ selectedAccount.code }}</div>
          </div>

          <div v-if="selectedAccount.type" class="detail-item">
            <label class="detail-label">{{ $t('Type') }}</label>
            <div class="detail-value">{{ getAccountType(selectedAccount) }}</div>
          </div>

          <div v-if="selectedAccount.level !== undefined" class="detail-item">
            <label class="detail-label">{{ $t('Level') }}</label>
            <div class="detail-value">{{ selectedAccount.level }}</div>
          </div>

          <div v-if="selectedAccount.children_count !== undefined" class="detail-item">
            <label class="detail-label">{{ $t('Children Count') }}</label>
            <div class="detail-value">{{ selectedAccount.children_count }}</div>
          </div>

          <div v-if="selectedAccount.is_active !== undefined" class="detail-item">
            <label class="detail-label">{{ $t('Status') }}</label>
            <div class="detail-value">
              <span :class="selectedAccount.is_active ? 'status-badge status-active' : 'status-badge status-inactive'">
                {{ selectedAccount.is_active ? $t('Active') : $t('Inactive') }}
              </span>
            </div>
          </div>

          <!-- Account Balance Section -->
          <div v-if="accountBalanceData || loadingBalance" class="balance-section">
            <div class="balance-section-header">
              <h4 class="balance-section-title">
                <i class="fas fa-calculator"></i>
                {{ $t('Account Balance') }}
              </h4>
            </div>
            <div v-if="loadingBalance" class="balance-loading">
              <i class="fas fa-spinner fa-spin"></i>
              <span>{{ $t('Loading...') }}</span>
            </div>
            <div v-else-if="accountBalanceData" class="balance-details">
              <div class="balance-detail-row">
                <span class="balance-detail-label">{{ $t('Total Debits') }}</span>
                <span class="balance-detail-value balance-debit-value">
                  {{ accountBalanceData.formatted_debit_amount || '0.00' }}
                </span>
              </div>
              <div class="balance-detail-row">
                <span class="balance-detail-label">{{ $t('Total Credits') }}</span>
                <span class="balance-detail-value balance-credit-value">
                  {{ accountBalanceData.formatted_credit_amount || '0.00' }}
                </span>
              </div>
              <div class="balance-divider"></div>
              <div class="balance-detail-row balance-total-row">
                <span class="balance-detail-label">{{ $t('Current Balance') }}</span>
                <span class="balance-detail-value balance-total-value" 
                      :class="accountBalanceData.balance_type === 'Debit' ? 'balance-debit-total' : 'balance-credit-total'">
                  {{ accountBalanceData.formatted_balance_with_type || '0.00 ' + $t('Debit') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="details-empty">
        <i class="fas fa-hand-pointer details-empty-icon"></i>
        <p class="details-empty-text">{{ $t('Select an account to view details') }}</p>
      </div>
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
      selectedAccount: null,
      accountBalanceData: null,
      loadingBalance: false,
      searchQuery: '',
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
    searchQuery(newQuery) {
      console.log('TreeView: searchQuery changed', newQuery);
      this.$emit('update:query', newQuery);
    },
    query: {
      handler(newQuery) {
        if (newQuery !== this.searchQuery) {
          this.searchQuery = newQuery;
        }
      },
      immediate: true,
    },
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
    async handleItemClick(item) {
      // Select the account to show details
      this.selectedAccount = item;
      this.$emit('select-account', item);
      
      // Fetch full account details with balance
      await this.fetchAccountBalance(item.code);
    },
    async fetchAccountBalance(accountCode) {
      if (!accountCode) {
        return;
      }
      
      try {
        this.loadingBalance = true;
        const response = await this.$axios.get(`/api/chart-of-accounts/${accountCode}`);
        this.accountBalanceData = response.data.data;
      } catch (error) {
        console.error('Error fetching account balance:', error);
        this.accountBalanceData = null;
      } finally {
        this.loadingBalance = false;
      }
    },
    onToggleExpand(itemId) {
      this.$emit('toggle-expand', itemId);
    },
    closeDetails() {
      this.selectedAccount = null;
      this.accountBalanceData = null;
      this.$emit('select-account', null);
    },
    getVerticalLineStyle(item, parentLevel) {
      // Draw vertical lines for each parent level
      const baseIndent = this.isRTL ? 'right' : 'left';
      const indent = parentLevel * 35 + 20 + 10; // 10px to center on expand icon

      return {
        [baseIndent]: `${indent}px`,
      };
    },
    getHorizontalLineStyle(item) {
      // Draw horizontal line connecting to parent
      const baseIndent = this.isRTL ? 'right' : 'left';
      const indent = (item.level - 1) * 35 + 20 + 10; // Start from parent's vertical line

      return {
        [baseIndent]: `${indent}px`,
        width: '25px', // Distance to current item's expand icon
      };
    },
    getAccountType(account) {
      if (!account.type) return '';

      // Check if type has translations
      if (account.type.translations && account.type.translations.name) {
        const translations = account.type.translations.name;
        const activeLocale = this.currentLocale || 'en';
        if (translations[activeLocale] && translations[activeLocale].trim() !== '') {
          return translations[activeLocale];
        }
      }

      // Fallback to type name
      return account.type.name || account.type.original_name || '';
    },
    handleSearchInput(value) {
      this.searchQuery = value;
      this.$emit('reset-pagination');
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
/* ===== Split Layout ===== */
.tree-split-layout {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 0;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e9ecef;
  min-height: 600px;
  max-height: calc(100vh - 200px);
  height: calc(100vh - 200px);
}

[dir="rtl"] .tree-split-layout {
  grid-template-columns: 2fr 3fr;
}

.tree-panel {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e9ecef;
  background: #fff;
  overflow: hidden;
  min-height: 0;
  height: 100%;
}

[dir="rtl"] .tree-panel {
  border-right: none;
  border-left: 1px solid #e9ecef;
}

.details-panel {
  background: #f8f9fa;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.3s ease;
}

/* ===== Tree Search Wrapper ===== */
.tree-search-wrapper {
  padding: 16px 20px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  flex-shrink: 0;
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

/* ===== Tree Body Container ===== */
.tree-body-container {
  flex: 1;
  padding: 8px 0;
  overflow-y: auto;
  overflow-x: visible;
  background: #fff;
  position: relative;
  min-height: 0;
  max-height: 100%;
  height: 0; /* This allows flex to work properly with overflow */
}

/* ===== Tree List ===== */
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

.tree-item-dragging {
  opacity: 0.5;
}

.tree-item-drag-over .tree-item-content {
  background-color: #e3f2fd !important;
  border: 1px dashed #2AB930;
  box-shadow: 0 2px 8px rgba(42, 185, 48, 0.15);
}

.tree-item-selected .tree-item-content {
  background-color: #e8f5e9 !important;
  border-left: 3px solid #2AB930;
}

[dir="rtl"] .tree-item-selected .tree-item-content {
  border-left: none;
  border-right: 3px solid #2AB930;
}

/* ===== Vertical Connector Lines ===== */
.tree-vertical-line {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: #d0d0d0;
  pointer-events: none;
  z-index: 1;
}

.tree-horizontal-line {
  position: absolute;
  top: 50%;
  height: 1px;
  background: #d0d0d0;
  pointer-events: none;
  z-index: 1;
}

/* ===== Tree Item Content ===== */
.tree-item-content {
  display: flex;
  align-items: flex-start;
  padding: 12px 16px;
  min-height: 52px;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  z-index: 2;
  background: #fff;
  border: none;
  border-radius: 6px;
  margin: 2px 8px;
  gap: 6px;
}

.tree-item-content:hover {
  background-color: #f8f9fa;
  transform: translateX(2px);
}

[dir="rtl"] .tree-item-content:hover {
  transform: translateX(-2px);
}

/* ===== Expand/Collapse Icon ===== */
.tree-item-expand-icon {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.15s ease;
  color: #6c757d;
  margin-top: 2px;
}

.tree-item-expand-icon:hover {
  background-color: #e9ecef;
  color: #2AB930;
}

.tree-item-expand-icon i {
  font-size: 11px;
}

.tree-item-expand-placeholder {
  cursor: default;
}

.tree-item-expand-placeholder:hover {
  background-color: transparent;
}

/* ===== Folder/File Icon ===== */
.tree-item-icon-container {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 4px;
  transition: all 0.15s ease;
  margin-top: 2px;
}

.tree-item-icon-container .fa-folder {
  color: #ffb300;
  font-size: 16px;
}

.tree-item-icon-container .fa-folder-open {
  color: #ff8f00;
  font-size: 16px;
}

.tree-item-icon-container .fa-file-invoice {
  color: #2AB930;
  font-size: 14px;
}

/* ===== Info Section ===== */
.tree-item-info {
  flex: 1 1 auto;
  min-width: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-right: 8px;
}

[dir="rtl"] .tree-item-info {
  margin-right: 0;
  margin-left: 8px;
}

.tree-item-name {
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.5;
  letter-spacing: -0.01em;
  overflow-wrap: break-word;
  white-space: normal;
  width: 100%;
  min-width: 150px;
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
}

/* ===== Action Icons - Icon Only ===== */
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
  padding: 2px;
  flex-shrink: 0;
}

[dir="rtl"] .tree-item-actions {
  margin-left: 0;
  margin-right: auto;
}

.tree-item:hover .tree-item-actions {
  opacity: 1;
}

.tree-item-actions :deep(.tree-action-btn) {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.15s ease;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #666;
  font-size: 13px;
  border-radius: 4px;
  position: relative;
}

.tree-item-actions :deep(.tree-action-btn:hover) {
  background: #f5f5f5;
  color: #1a1a1a;
}

.tree-item-actions :deep(.tree-action-btn:active) {
  transform: scale(0.95);
}

.tree-item-actions :deep(.tree-action-btn.disabled) {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

.tree-item-actions :deep(.tree-action-view) {
  color: #2196F3;
}

.tree-item-actions :deep(.tree-action-view:hover) {
  background: #E3F2FD;
  color: #1976D2;
}

.tree-item-actions :deep(.tree-action-edit) {
  color: #FF9800;
}

.tree-item-actions :deep(.tree-action-edit:hover) {
  background: #FFF3E0;
  color: #F57C00;
}

.tree-item-actions :deep(.tree-action-add) {
  color: #2AB930;
}

.tree-item-actions :deep(.tree-action-add:hover) {
  background: #E8F5E9;
  color: #1B5E20;
}

.tree-item-actions :deep(.tree-action-add-main) {
  color: #2AB930;
}

.tree-item-actions :deep(.tree-action-add-main:hover) {
  background: #E8F5E9;
  color: #1B5E20;
}

.tree-item-actions :deep(.tree-action-delete) {
  color: #F44336;
}

.tree-item-actions :deep(.tree-action-delete:hover) {
  background: #FFEBEE;
  color: #C62828;
}

/* ===== Details Panel ===== */
.details-panel {
  padding: 20px;
}

.details-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #9ca3af;
  padding: 40px 20px;
}

.details-empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.details-empty-text {
  font-size: 14px;
  text-align: center;
  margin: 0;
}

.account-details-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.details-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #e9ecef;
  background: #f8f9fa;
}

.details-title {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
}

.details-close-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: #6c757d;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.15s ease;
}

.details-close-btn:hover {
  background: #e9ecef;
  color: #1a1a1a;
}

.details-body {
  padding: 20px;
}

.detail-item {
  margin-bottom: 16px;
}

.detail-item:last-child {
  margin-bottom: 0;
}

.detail-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.detail-value {
  font-size: 14px;
  color: #1a1a1a;
  font-weight: 500;
  word-wrap: break-word;
}

.detail-code {
  font-family: 'Courier New', monospace;
  background: #f3f4f6;
  padding: 6px 10px;
  border-radius: 4px;
  display: inline-block;
  color: #2AB930;
  font-weight: 600;
}

.status-badge {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-active {
  background: #E8F5E9;
  color: #2AB930;
  border: 1px solid #C8E6C9;
}

.status-inactive {
  background: #FFEBEE;
  color: #F44336;
  border: 1px solid #FFCDD2;
}

/* ===== Account Balance Section ===== */
.balance-section {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 2px solid #e9ecef;
}

.balance-section-header {
  margin-bottom: 16px;
}

.balance-section-title {
  font-size: 14px;
  font-weight: 600;
  color: #495057;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.balance-section-title i {
  color: #2AB930;
  font-size: 16px;
}

.balance-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.balance-detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
}

.balance-detail-label {
  font-size: 12px;
  font-weight: 500;
  color: #6c757d;
}

.balance-detail-value {
  font-size: 13px;
  font-weight: 600;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.balance-debit-value {
  color: #28a745;
}

.balance-credit-value {
  color: #dc3545;
}

.balance-divider {
  height: 1px;
  background: #e9ecef;
  margin: 4px 0;
}

.balance-total-row {
  background: #f8f9fa;
  margin: 0 -20px;
  padding: 12px 20px;
  border-top: 2px solid #e9ecef;
  font-weight: 600;
}

.balance-total-value {
  font-size: 14px;
}

.balance-debit-total {
  color: #28a745;
}

.balance-credit-total {
  color: #dc3545;
}

.balance-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px;
  color: #6c757d;
  font-size: 14px;
}

.balance-loading i {
  font-size: 16px;
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .tree-split-layout {
    grid-template-columns: 3fr 2fr;
  }

  [dir="rtl"] .tree-split-layout {
    grid-template-columns: 2fr 3fr;
  }
}

@media (max-width: 768px) {
  .tree-split-layout {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }

  [dir="rtl"] .tree-split-layout {
    grid-template-columns: 1fr;
  }

  .tree-panel {
    border-right: none;
    border-bottom: 1px solid #e9ecef;
  }

  [dir="rtl"] .tree-panel {
    border-left: none;
    border-bottom: 1px solid #e9ecef;
  }

  .details-panel {
    max-height: 300px;
  }

  .tree-item-actions {
    opacity: 1;
  }

  .tree-body-container {
    max-height: calc(100vh - 400px);
  }
}

/* ===== Scrollbar Styling ===== */
.tree-body-container::-webkit-scrollbar,
.details-panel::-webkit-scrollbar {
  width: 6px;
}

.tree-body-container::-webkit-scrollbar-track,
.details-panel::-webkit-scrollbar-track {
  background: #fafafa;
  border-radius: 3px;
}

.tree-body-container::-webkit-scrollbar-thumb,
.details-panel::-webkit-scrollbar-thumb {
  background: #d0d0d0;
  border-radius: 3px;
  transition: background 0.2s ease;
}

.tree-body-container::-webkit-scrollbar-thumb:hover,
.details-panel::-webkit-scrollbar-thumb:hover {
  background: #b0b0b0;
}

/* ===== Drag cursor ===== */
.tree-item[draggable="true"] .tree-item-content {
  cursor: grab;
}

.tree-item[draggable="true"] .tree-item-content:active {
  cursor: grabbing;
}

/* ===== Smooth animations ===== */
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
