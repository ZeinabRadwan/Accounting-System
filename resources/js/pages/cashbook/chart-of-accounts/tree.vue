<template>
  <div class="mb-50">
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />

   <!-- Original Header with Actions (Hidden on mobile) -->
   <div class="d-none d-lg-block">
    <div class="card custom-card w-100 mb-4">
      <div class="card-header setings-header">
        <div class="col-xl-4 col-4">
          <h3 class="card-title">
            {{ $t("Chart of Accounts - Tree View") }}
          </h3>
        </div>
        <div class="col-xl-8 col-8 float-right text-right">
          <div class="btn-group c-w-100">
          
            <a @click="refreshTree()" href="#" v-tooltip="'Refresh'" class="btn btn-success">
              <i class="fas fa-sync"></i>
            </a>
            <router-link v-if="$can('chart-of-account-list')" :to="{ name: 'chart-of-accounts.index' }" class="btn btn-info">
              <i class="fas fa-list"></i> 
            </router-link>
            <router-link v-if="$can('chart-of-account-create')" :to="{ name: 'chart-of-accounts.create' }" class="btn btn-primary">
              <i class="fas fa-plus-circle"></i> {{ $t("Create") }}
            </router-link>
            <!-- <a :href="exportUrl" v-tooltip="$t('Export to Excel')" class="btn btn-info">
              <i class="fa fa-arrow-circle-down"></i>
            </a>
            <a href="/chart-of-accounts/pdf" v-tooltip="$t('Export to PDF')" class="btn btn-secondary">
              <i class="fas fa-file-export"></i>
            </a>
            <a @click="print" v-tooltip="$t('Print Table')" class="btn btn-info">
              <i class="fas fa-print"></i>
            </a> -->
         
          </div>
        </div>
      </div>
    </div>
  </div>
    
    <!-- breadcrumbs end -->
    
    <div class="chart-of-accounts-container">
      <div class="chart-of-accounts-row">
        <!-- Left Column - Tree Navigation (3 columns) -->
        <div class="chart-of-accounts-col chart-of-accounts-col-3">
          <div class="chart-of-accounts-search-wrapper">
            <div class="chart-of-accounts-col-3-filters-container">
              <div class="chart-of-accounts-col-3-filters-row">
                <div class="chart-of-accounts-col-3-filters-col">
                  <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
                </div>
              </div>
            </div>
          </div>
          
          <div class="chart-of-accounts-col-3-body-container">
            <ul role="tree" aria-multiselectable="false" class="tree-view-list">
              <li v-for="account in hierarchicalAccounts" 
                  :key="account.id" 
                  class="tree-item" 
                  role="treeitem">
                <div class="tree-item-content" 
                     :style="{ paddingLeft: (account.level * 20 + 20) + 'px' }"
                     @click="toggleNode(account.id)">
                  <div class="tree-item-icon-container">
                    <i v-if="account.hasChildren" :class="account.expanded ? 'fas fa-folder-open' : 'fas fa-folder'"></i>
                    <i v-else class="fas fa-file-alt"></i>
                  </div>
                  <div class="tree-item-label">
                    <div class="account-name">{{ account.name }}</div>
                    <div class="account-code">{{ account.code }}</div>
                  </div>
                  <div class="tree-item-toggle" v-if="account.hasChildren">
                    <i :class="account.expanded ? 'fas fa-chevron-down' : 'fas fa-chevron-right'"></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right Column - Table View (9 columns) -->
        <div class="chart-of-accounts-col chart-of-accounts-col-9">
          <div id="chart-of-accounts-child-board" class="chart-of-accounts-col-9-body-container">
            <!-- Empty state when no account is selected -->
            <div v-if="!selectedAccount" class="empty-state">
              <div class="empty-state-content">
                <i class="fas fa-folder-open text-muted" style="font-size: 48px; margin-bottom: 20px;"></i>
                <h4 class="text-muted">Select an Account</h4>
                <p class="text-muted">Click on any account in the tree to view its details and child accounts.</p>
              </div>
            </div>

            <!-- Account details and children when account is selected -->
            <div v-else>
              <!-- Selected Account Header -->
              <div class="selected-account-header mb-4">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <i class="fas fa-folder-open text-primary mr-3" style="font-size: 24px;"></i>
                    <div>
                      <h4 class="mb-1">{{ selectedAccount.name }}</h4>
                      <p class="text-muted mb-0">Account Code: {{ selectedAccount.code }}</p>
                      <p class="text-muted mb-0" v-if="selectedAccount.types">
                        Type: {{ selectedAccount.types.name }}
                      </p>
                    </div>
                  </div>
                  
                  <!-- Account Balance Information -->
                  <div class="account-balance-info">
                    <div class="balance-cards">
                      <!-- Debit Amount -->
                      <div class="balance-card debit-card">
                        <div class="balance-label">Debit</div>
                        <div class="balance-amount">
                          {{ selectedAccount.formatted_debit_amount || '0.00' }}
                        </div>
                      </div>
                      
                      <!-- Credit Amount -->
                      <div class="balance-card credit-card">
                        <div class="balance-label">Credit</div>
                        <div class="balance-amount">
                          {{ selectedAccount.formatted_credit_amount || '0.00' }}
                        </div>
                      </div>
                      
                      <!-- Balance with Type -->
                      <div class="balance-card balance-card-main" 
                           :class="selectedAccount.balance_type === 'Debit' ? 'debit-balance' : 'credit-balance'">
                        <div class="balance-label">Balance</div>
                        <div class="balance-amount">
                          {{ selectedAccount.formatted_balance_with_type || '0.00 Debit' }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Child Accounts Table -->
              <div v-if="childAccounts.length > 0">
                <h5 class="mb-3">Child Accounts</h5>
                <table class="list-table table table-hover not-clickable chart-of-accounts-col-9-body-container-table">
                  <thead>
                    <tr>
                      <th class="border-0">Account</th>
                      <th class="border-0 text-center">Debit</th>
                      <th class="border-0 text-center">Credit</th>
                      <th class="border-0 text-center">Balance</th>
                      <th class="border-0 text-right" width="50">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="child in childAccounts" 
                        :key="child.id" 
                        class="chart-of-accounts-col-9-body-container-table-row">
                      <td class="border-0">
                        <router-link v-if="$can('chart-of-account-view')" :to="{
                          name: 'chart-of-accounts.show',
                          params: { slug: child.code },
                        }">
                          <div class="chart-of-accounts-col-9-body-container-table-item">
                            <div class="item-container">
                              <i class="icon fas fa-file-alt mr-3"></i>
                              <div class="details">
                                <p class="name">{{ child.name }}</p>
                                <p class="id">{{ child.code }}</p>
                              </div>
                            </div>
                          </div>
                        </router-link>
                        <div v-else class="chart-of-accounts-col-9-body-container-table-item">
                          <div class="item-container">
                            <i class="icon fas fa-file-alt mr-3"></i>
                            <div class="details">
                              <p class="name">{{ child.name }}</p>
                              <p class="id">{{ child.code }}</p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <!-- Debit Amount Column -->
                      <td class="border-0 text-center">
                        <div class="amount-display">
                          <span class="amount-value">{{ child.formatted_debit_amount || '0.00' }}</span>
                        </div>
                      </td>
                      
                      <!-- Credit Amount Column -->
                      <td class="border-0 text-center">
                        <div class="amount-display">
                          <span class="amount-value">{{ child.formatted_credit_amount || '0.00' }}</span>
                        </div>
                      </td>
                      
                      <!-- Balance Column -->
                      <td class="border-0 text-center">
                        <div class="balance-display">
                          <span class="balance-value" 
                                :class="child.balance_type === 'Debit' ? 'debit-text' : 'credit-text'">
                            {{ child.formatted_balance_with_type || '0.00 Debit' }}
                          </span>
                        </div>
                      </td>
                      <td class="border-0 text-right" width="50">
                        <div class="btn-group">
                          <router-link v-if="$can('chart-of-account-view')" 
                                      v-tooltip="$t('View')" 
                                      :to="{ name: 'chart-of-accounts.show', params: { slug: child.code } }" 
                                      class="btn btn-primary btn-sm">
                            <i class="fas fa-eye" />
                          </router-link>
                          
                          <router-link v-if="$can('chart-of-account-edit')" 
                                      v-tooltip="$t('Edit')" 
                                      :to="{ name: 'chart-of-accounts.edit', params: { slug: child.code } }" 
                                      class="btn btn-info btn-sm">
                            <i class="fas fa-edit" />
                          </router-link>
                          
                          <a v-if="$can('chart-of-account-delete')" 
                             v-tooltip="$t('Delete')" 
                             href="#" 
                             class="btn btn-danger btn-sm"
                             @click="deleteData(child.code)">
                            <i class="fas fa-trash" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- No children message -->
              <div v-else class="no-children-message">
                <div class="text-center py-4">
                  <i class="fas fa-info-circle text-muted" style="font-size: 32px; margin-bottom: 16px;"></i>
                  <h5 class="text-muted">No Child Accounts</h5>
                  <p class="text-muted">This account doesn't have any child accounts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

 
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import i18n from "~/plugins/i18n";
import Swal from "sweetalert2";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Chart of Accounts - Tree View") };
  },
  data: () => ({
    breadcrumbsCurrent: "Chart of Accounts - Tree View",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Cashbook",
        url: "",
      },
      {
        name: "Chart of Accounts",
        url: "",
      },
    ],
    query: "",
    allAccounts: [],
    hierarchicalAccounts: [],
    expandedNodes: new Set(),
    selectedAccount: null, // Add this
    childAccounts: [], // Add this
  }),
  
  // Map Getters
  computed: {
    ...mapGetters("operations", ["loading", "appInfo"]),
    exportUrl() {
      return `/chart-of-accounts/export/excel?term=${this.query}`;
    },
  },
  
  watch: {
    // watch search data
    query: function (newQ) {
      if (newQ === "") {
        this.getData();
      } else {
        this.searchData();
      }
    },
  },
  
  created() {
    this.getData();
  },
  
  methods: {
    // get all accounts data
    async getData() {
      this.$store.state.operations.loading = true;
      try {
        const response = await this.$axios.get('/api/chart-of-accounts/all');
        this.allAccounts = response.data.data || [];
        this.buildHierarchy();
      } catch (error) {
        console.error('Error loading accounts:', error);
      } finally {
        this.$store.state.operations.loading = false;
      }
    },

    // search accounts
    async searchData() {
      this.$store.state.operations.loading = true;
      try {
        const response = await this.$axios.get(`/api/chart-of-accounts/search?term=${this.query}`);
        this.allAccounts = response.data.data || [];
        this.buildHierarchy();
      } catch (error) {
        console.error('Error searching accounts:', error);
      } finally {
        this.$store.state.operations.loading = false;
      }
    },

    // build hierarchical structure
    buildHierarchy() {
      const accountsMap = new Map();
      const rootAccounts = [];
      
      // Create a map of all accounts
      this.allAccounts.forEach(account => {
        accountsMap.set(account.id, {
          ...account,
          level: 0,
          expanded: this.expandedNodes.has(account.id),
          hasChildren: false,
          children: []
        });
      });
      
      // Build parent-child relationships
      this.allAccounts.forEach(account => {
        if (account.parent_id) {
          const parent = accountsMap.get(account.parent_id);
          if (parent) {
            parent.children.push(account.id);
            parent.hasChildren = true;
          }
        } else {
          rootAccounts.push(account.id);
        }
      });
      
      // Build flat hierarchical list with levels
      this.hierarchicalAccounts = [];
      this.buildHierarchicalList(rootAccounts, accountsMap, 0);
    },

    // recursively build hierarchical list
    buildHierarchicalList(accountIds, accountsMap, level) {
      accountIds.forEach(id => {
        const account = accountsMap.get(id);
        if (account) {
          account.level = level;
          this.hierarchicalAccounts.push(account);
          
          // Add children if expanded
          if (account.expanded && account.children.length > 0) {
            this.buildHierarchicalList(account.children, accountsMap, level + 1);
          }
        }
      });
    },

    // toggle node expansion and select account
    toggleNode(accountId) {
      // Toggle expansion
      if (this.expandedNodes.has(accountId)) {
        this.expandedNodes.delete(accountId);
      } else {
        this.expandedNodes.add(accountId);
      }
      
      // Select account and show children
      const account = this.allAccounts.find(acc => acc.id === accountId);
      if (account) {
        this.selectedAccount = account;
        this.childAccounts = this.allAccounts.filter(acc => acc.parent_id === accountId);
      }
      
      this.buildHierarchy();
    },

    // expand all nodes
    expandAll() {
      this.allAccounts.forEach(account => {
        if (account.hasChildren) {
          this.expandedNodes.add(account.id);
        }
      });
      this.buildHierarchy();
    },

    // collapse all nodes
    collapseAll() {
      this.expandedNodes.clear();
      this.buildHierarchy();
    },

    // refresh tree
    refreshTree() {
      this.query = "";
      this.expandedNodes.clear();
      this.getData();
    },

    // reset pagination
    async resetPagination() {
      // Not needed for tree view
    },

    // reload after search
    async reload() {
      this.query = "";
      await this.searchData();
    },

    // print tree
    async print() {
      await this.$htmlToPaper("printMe");
    },

    // delete data
    async deleteData(slug) {
      Swal.fire({
        title: this.$t("Are you sure?"),
        text: this.$t("You will not be able to return to this!"),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"),
      }).then((result) => {
        if (result.value) {
          this.$store
            .dispatch("operations/deleteData", {
              path: "/api/chart-of-accounts/",
              slug: slug,
            })
            .then((response) => {
              if (response === true) {
                this.getData();
                Swal.fire(
                  this.$t("Deleted!"),
                  this.$t("Deleted successfully."),
                  "success"
                );
              } else {
                if (response && response.deletable === false) {
                  Swal.fire(
                    this.$t("Cannot Delete"),
                    response.message || this.$t("Sorry you can't remove this chart of account!"),
                    "warning"
                  );
                } else {
                  Swal.fire(
                    this.$t("Failed!"),
                    this.$t("Sorry you can't remove this chart of account!"),
                    "warning"
                  );
                }
              }
            })
            .catch((error) => {
              console.error('Delete error:', error);
              Swal.fire(
                this.$t("Failed!"),
                this.$t("Sorry you can't remove this chart of account!"),
                "warning"
              );
            });
        }
      });
    },

    // get account by id
    getAccountById(id) {
      return this.allAccounts.find(account => account.id === id);
    },
  },
};
</script>

<style scoped>
/* Chart of Accounts Layout */
.chart-of-accounts-container {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  overflow: hidden;
}

.chart-of-accounts-row {
  display: flex;
  min-height: 600px;
}

.chart-of-accounts-col {
  padding: 0;
}

.chart-of-accounts-col-3 {
  flex: 0 0 25%;
  max-width: 25%;
  border-right: 1px solid #e9ecef;
  background: #f8f9fa;
}

.chart-of-accounts-col-9 {
  flex: 0 0 75%;
  max-width: 75%;
  background: #fff;
}

/* Left Column - Tree Navigation */
.chart-of-accounts-search-wrapper {
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
  background: #fff;
}

.chart-of-accounts-col-3-filters-container {
  width: 100%;
}

.chart-of-accounts-col-3-body-container {
  padding: 0;
  height: calc(100vh - 300px);
  overflow-y: auto;
}

/* Tree View Styling */
.tree-view-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tree-item {
  border-bottom: 1px solid #f1f3f4;
}

.tree-item-content {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  min-height: 50px;
  border-left: 2px solid transparent;
}

.tree-item-content:hover {
  background-color: #e3f2fd;
  border-left-color: #1976d2;
}

.tree-item-icon-container {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1976d2;
  flex-shrink: 0;
}

.tree-item-label {
  flex: 1;
  margin-left: 8px;
}

.tree-item-label .account-name {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 2px;
  display: block;
}

.tree-item-label .account-code {
  font-size: 11px;
  color: #666;
  font-weight: 400;
  display: block;
}

.tree-item-toggle {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  margin-left: 8px;
  flex-shrink: 0;
}

/* Tree level indicators */
.tree-item-content::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 4px solid #e0e0e0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
}

.tree-item-content:hover::before {
  border-left-color: #1976d2;
}

/* Folder icons */
.tree-item-icon-container .fa-folder {
  color: #ffc107;
}

.tree-item-icon-container .fa-folder-open {
  color: #ff9800;
}

.tree-item-icon-container .fa-file-alt {
  color: #9e9e9e;
}

/* Expand/collapse animation */
.tree-item-toggle i {
  transition: transform 0.2s ease;
}

.tree-item[aria-expanded="true"] .tree-item-toggle i {
  transform: rotate(0deg);
}

.tree-item[aria-expanded="false"] .tree-item-toggle i {
  transform: rotate(-90deg);
}

/* Nested children styling */
.tree-children {
  list-style: none;
  padding: 0;
  margin: 0;
  background: #fafbfc;
}

.tree-children .tree-item {
  border-bottom: 1px solid #f1f3f4;
}

.tree-children .tree-item-content {
  padding-left: 40px;
  border-left: 2px solid #e3f2fd;
  margin-left: 20px;
}

.tree-children-level-2 .tree-item-content {
  padding-left: 60px;
  border-left: 2px solid #f0f4f8;
  margin-left: 40px;
}

.tree-children .tree-item-content:hover {
  background-color: #f0f4f8;
}

.tree-children-level-2 .tree-item-content:hover {
  background-color: #e8f4fd;
}

/* Right Column - Table View */
.chart-of-accounts-col-9-body-container {
  padding: 20px;
}

.chart-of-accounts-col-9-body-container-table {
  width: 100%;
  margin-bottom: 20px;
}

.chart-of-accounts-col-9-body-container-table th {
  background: #f8f9fa;
  border: none;
  padding: 12px 16px;
  font-weight: 600;
  color: #495057;
  font-size: 14px;
}

.chart-of-accounts-col-9-body-container-table td {
  border: none;
  padding: 16px;
  vertical-align: middle;
}

.chart-of-accounts-col-9-body-container-table-row:hover {
  background-color: #f8f9fa;
}

/* Table Item Styling */
.chart-of-accounts-col-9-body-container-table-item {
  display: flex;
  align-items: center;
}

.item-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.item-container .icon {
  font-size: 18px;
  color: #1976d2;
  margin-right: 12px;
}

.item-container .details {
  flex: 1;
}

.item-container .details .name {
  margin: 0;
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.item-container .details .id {
  margin: 0;
  color: #666;
  font-size: 12px;
}

/* Credit Wrap Styling */
.credit-wrap {
  text-align: right;
}

.credit-container {
  display: inline-block;
  text-align: right;
}

.credit-container .cost {
  margin: 0;
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.credit-container .type {
  margin: 0;
  color: #666;
  font-size: 12px;
  text-transform: capitalize;
}

/* Add Account Button */
.add-account {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.add-account:hover {
  text-decoration: none;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Dropdown Styling */
.dropdown-toggle {
  background: #6c757d;
  border: none;
  padding: 6px 12px;
}

.dropdown-toggle:hover {
  background: #5a6268;
}

.dropdown-menu {
  border: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border-radius: 6px;
}

.dropdown-item {
  padding: 8px 16px;
  font-size: 14px;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
}

/* Responsive Design */
@media (max-width: 768px) {
  .chart-of-accounts-row {
    flex-direction: column;
  }
  
  .chart-of-accounts-col-3,
  .chart-of-accounts-col-9 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  
  .chart-of-accounts-col-3 {
    border-right: none;
    border-bottom: 1px solid #e9ecef;
  }
  
  .chart-of-accounts-col-3-body-container {
    height: 300px;
  }
  
  /* Mobile balance cards */
  .balance-cards {
    flex-direction: column;
    gap: 10px;
  }
  
  .balance-card {
    min-width: auto;
    width: 100%;
  }
  
  .account-balance-info {
    margin-left: 0;
    margin-top: 15px;
  }
  
  .selected-account-header .d-flex {
    flex-direction: column;
    align-items: flex-start !important;
  }
}

/* Print Styles */
@media print {
  .chart-of-accounts-container {
    box-shadow: none;
    border: 1px solid #000;
  }
  
  .dropdown,
  .add-account {
    display: none;
  }
}

/* Empty state styling */
.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  text-align: center;
}

.empty-state-content {
  max-width: 400px;
}

.empty-state-content h4 {
  margin-bottom: 10px;
}

.empty-state-content p {
  font-size: 16px;
  line-height: 1.5;
}

/* Selected account header */
.selected-account-header {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

.selected-account-header h4 {
  color: #333;
  margin: 0;
}

/* Account Balance Information */
.account-balance-info {
  margin-left: 20px;
}

.balance-cards {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.balance-card {
  background: #fff;
  border-radius: 8px;
  padding: 15px 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
  min-width: 120px;
  text-align: center;
  transition: all 0.2s ease;
}

.balance-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.balance-card-main {
  border: 2px solid #007bff;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.debit-card {
  border-left: 4px solid #28a745;
}

.credit-card {
  border-left: 4px solid #dc3545;
}

.debit-balance {
  border-left: 4px solid #28a745;
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
}

.credit-balance {
  border-left: 4px solid #dc3545;
  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
}

.balance-label {
  font-size: 12px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
}

.balance-amount {
  font-size: 16px;
  font-weight: 700;
  color: #333;
  line-height: 1.2;
}

/* Table Amount Display */
.amount-display {
  text-align: center;
}

.amount-value {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.balance-display {
  text-align: center;
}

.balance-value {
  font-size: 14px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
}

.debit-text {
  color: #28a745;
  background: rgba(40, 167, 69, 0.1);
}

.credit-text {
  color: #dc3545;
  background: rgba(220, 53, 69, 0.1);
}

/* No children message */
.no-children-message {
  padding: 40px 20px;
}

.no-children-message h5 {
  margin-bottom: 10px;
}

.no-children-message p {
  margin-bottom: 0;
}

/* Account Actions Styling */
.account-actions {
  display: flex;
  justify-content: flex-end;
}

.action-buttons {
  display: flex;
  gap: 6px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 12px;
  position: relative;
}

.action-btn:hover {
  transform: translateY(-1px);
  text-decoration: none;
}

.action-btn:active {
  transform: translateY(0);
}

/* View Button */
.view-btn {
  background: linear-gradient(135deg, #33a0d9 0%, #138496 100%);
  color: white;
}

.view-btn:hover {
  background: linear-gradient(135deg, #138496 0%, #117a8b 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(23, 162, 184, 0.3);
}

/* Edit Button */
.edit-btn {
  background: linear-gradient(135deg, #ffc107 0%, #e0a800 100%);
  color: #212529;
}

.edit-btn:hover {
  background: linear-gradient(135deg, #e0a800 0%, #d39e00 100%);
  color: #212529;
  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
}

/* Delete Button */
.delete-btn {
  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
  color: white;
}

.delete-btn:hover {
  background: linear-gradient(135deg, #c82333 0%, #bd2130 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .action-buttons {
    gap: 4px;
  }
  
  .action-btn {
    width: 28px;
    height: 28px;
    font-size: 11px;
  }
}

/* Tooltip styling */
.tooltip {
  font-size: 12px;
  font-weight: 500;
}

/* Hover effects for better UX */
.action-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.action-btn:hover::before {
  opacity: 1;
}
</style>
