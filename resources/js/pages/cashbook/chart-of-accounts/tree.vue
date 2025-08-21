<template>
  <div class="mb-50">
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-lg-12" v-if="$can('chart-of-account-list') ||
        $can('chart-of-account-create') ||
        $can('chart-of-account-view') ||
        $can('chart-of-account-edit') ||
        $can('chart-of-account-delete')
        ">
        <div class="card custom-card w-100">
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
                <a :href="exportUrl" v-tooltip="$t('Export to Excel')" class="btn btn-info">
                  <i class="fa fa-arrow-circle-down"></i>
                </a>
                <a href="/chart-of-accounts/pdf" v-tooltip="$t('Export to PDF')" class="btn btn-secondary">
                  <i class="fas fa-file-export"></i>
                </a>
                <a @click="print" v-tooltip="$t('Print Table')" class="btn btn-info">
                  <i class="fas fa-print"></i>
                </a>
                <router-link v-if="$can('chart-of-account-create')" :to="{ name: 'chart-of-accounts.create' }" class="btn btn-primary">
                  {{ $t("Create") }}
                  <i class="fas fa-plus-circle d-none d-sm-inline-block" />
                </router-link>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
              </div>
              <div class="col-6 col-xl-8 mb-2 text-right">
                <div class="btn-group">
                  <button @click="expandAll" class="btn btn-outline-info btn-sm">
                    <i class="fas fa-expand-arrows-alt"></i> {{ $t("Expand All") }}
                  </button>
                  <button @click="collapseAll" class="btn btn-outline-info btn-sm">
                    <i class="fas fa-compress-arrows-alt"></i> {{ $t("Collapse All") }}
                  </button>
                </div>
              </div>
            </div>
            <table-loading v-show="loading" />
            <div class="tree-view mt-3" id="printMe">
              <!-- Hierarchical Tree Structure -->
              <div v-for="account in hierarchicalAccounts" :key="account.id" class="tree-item">
                <div class="tree-row" :style="{ paddingLeft: (account.level * 20) + 'px' }">
                  <div class="tree-content">
                    <div class="tree-toggle" @click="toggleNode(account.id)" v-if="account.hasChildren">
                      <i :class="account.expanded ? 'fas fa-chevron-down' : 'fas fa-chevron-right'"></i>
                    </div>
                    <div class="tree-toggle-placeholder" v-else></div>
                    
                    <div class="tree-info">
                      <div class="account-code">
                        <router-link v-if="$can('chart-of-account-view')" :to="{
                          name: 'chart-of-accounts.show',
                          params: { slug: account.code },
                        }" class="text-primary font-weight-bold">
                          {{ account.code }}
                        </router-link>
                        <span v-else class="text-primary font-weight-bold">{{ account.code }}</span>
                      </div>
                      <div class="account-name">{{ account.name }}</div>
                      <div class="account-type">
                        <span v-if="account.types" class="badge bg-info badge-sm">
                          {{ account.types.name }}
                        </span>
                      </div>
                      <div class="account-status">
                        <span v-if="account.is_active" class="badge bg-success badge-sm">
                          {{ $t("Active") }}
                        </span>
                        <span v-else class="badge bg-danger badge-sm">
                          {{ $t("Inactive") }}
                        </span>
                      </div>
                    </div>
                    
                    <div class="tree-actions" v-if="$can('chart-of-account-view') ||
                      $can('chart-of-account-edit') ||
                      $can('chart-of-account-delete')">
                      <div class="btn-group btn-group-sm">
                        <router-link v-if="$can('chart-of-account-view')" v-tooltip="$t('View')" :to="{
                          name: 'chart-of-accounts.show',
                          params: { slug: account.code },
                        }" class="btn btn-primary btn-sm">
                          <i class="fas fa-eye" />
                        </router-link>
                        <router-link v-if="$can('chart-of-account-edit')" v-tooltip="$t('Edit')" :to="{
                          name: 'chart-of-accounts.edit',
                          params: { slug: account.code },
                        }" class="btn btn-info btn-sm">
                          <i class="fas fa-edit" />
                        </router-link>
                        <a v-if="$can('chart-of-account-delete')" v-tooltip="$t('Delete')" href="#" class="btn btn-danger btn-sm"
                          @click="deleteData(account.code)">
                          <i class="fas fa-trash" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div v-show="!loading && !hierarchicalAccounts.length" class="text-center py-4">
                <EmptyTable />
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
          expanded: this.expandedNodes.has(account.id), // Use stored expansion state
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

    // toggle node expansion
    toggleNode(accountId) {
      if (this.expandedNodes.has(accountId)) {
        this.expandedNodes.delete(accountId);
      } else {
        this.expandedNodes.add(accountId);
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
  },
};
</script>

<style scoped>
.tree-view {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.tree-item {
  margin-bottom: 8px;
}

.tree-row {
  border: 1px solid #e3e6f0;
  border-radius: 8px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.tree-row:hover {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-color: #007bff;
  box-shadow: 0 4px 12px rgba(0,123,255,0.15);
  transform: translateY(-1px);
}

.tree-content {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  min-height: 60px;
}

.tree-toggle {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #007bff;
  margin-right: 12px;
  border-radius: 50%;
  transition: all 0.2s ease;
  background: rgba(0,123,255,0.1);
}

.tree-toggle:hover {
  background: rgba(0,123,255,0.2);
  color: #0056b3;
  transform: scale(1.1);
}

.tree-toggle-placeholder {
  width: 24px;
  margin-right: 12px;
}

.tree-info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 24px;
}

.account-code {
  min-width: 120px;
  font-weight: 600;
  font-size: 0.95rem;
}

.account-name {
  flex: 1;
  min-width: 250px;
  font-size: 1rem;
  color: #2c3e50;
  font-weight: 500;
}

.account-type {
  min-width: 100px;
}

.account-status {
  min-width: 80px;
}

.tree-actions {
  margin-left: 20px;
}

.badge-sm {
  font-size: 0.75em;
  padding: 0.4em 0.8em;
  border-radius: 20px;
  font-weight: 500;
}

.bg-info {
  background: linear-gradient(135deg, #17a2b8 0%, #138496 100%) !important;
  border: none;
}

.bg-success {
  background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%) !important;
  border: none;
}

.bg-danger {
  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%) !important;
  border: none;
}

/* Tree level indicators */
.tree-row::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #007bff 0%, #0056b3 100%);
  border-radius: 0 2px 2px 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .tree-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .tree-actions {
    margin-left: 0;
    margin-top: 12px;
  }
  
  .tree-content {
    padding: 12px 16px;
  }
}

@media (max-width: 576px) {
  .tree-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .account-code,
  .account-name {
    min-width: auto;
    width: 100%;
  }
}
</style>
