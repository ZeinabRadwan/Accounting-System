<template>
  <div class="mb-50">
    <breadcrumbs :items="configBreadcrumbs" :current="configTitle" />

    <div class="d-none d-lg-block">
      <div class="card custom-card w-100 mb-4">
        <div class="card-header setings-header">
          <div class="col-xl-4 col-4">
            <h3 class="card-title">
              {{ configTitle }}
            </h3>
          </div>
          <div class="col-xl-8 col-8 float-right text-right">
            <div class="btn-group c-w-100">
              <a @click.prevent="refreshTree" href="#" v-tooltip="$t('Refresh')" class="btn refresh-btn">
                <i class="fas fa-sync"></i>
              </a>
              <router-link
                v-if="hasPermission('list') && resolveRoute('list')"
                :to="resolveRoute('list')"
                class="btn tree-btn"
              >
                <i class="fas fa-list"></i>
              </router-link>
              <router-link
                v-if="hasPermission('create') && resolveRoute('create')"
                :to="resolveRoute('create')"
                class="btn btn-primary"
              >
                <i class="fas fa-plus-circle"></i> {{ $t('Create') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tree-page-container">
      <tree-view
        :items="allItems"
        :hierarchical-items="hierarchicalItems"
        :query="query"
        :dragged-item-id="enableDragAndDrop ? draggedItemId : null"
        :drag-over-item-id="enableDragAndDrop ? dragOverItemId : null"
        :can-drag="enableDragAndDrop ? canDragItem : null"
        :get-display-name="resolveDisplayName"
        :is-last-sibling="isLastSibling"
        @toggle-expand="toggleExpand"
        @reset-pagination="resetPagination"
        @reload="reload"
        @drag-start="handleDragStart"
        @drag-over="handleDragOver"
        @drag-leave="handleDragLeave"
        @drop="handleDrop"
        @drag-end="handleDragEnd"
      >
        <template v-if="$scopedSlots.badges" #badges="{ item }">
          <slot name="badges" :item="item" />
        </template>
        <template v-else #badges="{ item }">
          <span
            v-if="showStatusBadge"
            :class="item.is_active ? 'tree-badge tree-badge-active' : 'tree-badge tree-badge-inactive'"
          >
            {{ item.is_active ? $t('Active') : $t('Inactive') }}
          </span>
        </template>

        <template v-if="$scopedSlots.actions" #actions="{ item }">
          <slot name="actions" :item="item" />
        </template>
        <template v-else #actions="{ item }">
          <router-link
            v-if="hasPermission('view') && resolveRoute('view', item)"
            :to="resolveRoute('view', item)"
            class="tree-action-btn tree-action-view"
            v-tooltip="$t('View')"
          >
            <i class="fas fa-eye"></i>
          </router-link>
          <router-link
            v-if="hasPermission('edit') && resolveRoute('edit', item)"
            :to="resolveRoute('edit', item)"
            class="tree-action-btn tree-action-edit"
            v-tooltip="$t('Edit')"
          >
            <i class="fas fa-edit"></i>
          </router-link>
          <router-link
            v-if="hasPermission('create') && resolveRoute('createChild', item)"
            :to="resolveRoute('createChild', item)"
            class="tree-action-btn tree-action-add"
            v-tooltip="$t('Create Child')"
          >
            <i class="fas fa-plus"></i>
          </router-link>
          <a
            v-if="hasPermission('delete') && config.api?.delete"
            href="#"
            @click.prevent="deleteData(item)"
            :class="['tree-action-btn', 'tree-action-delete', { disabled: !canDelete(item) }]"
            v-tooltip="$t('Delete')"
          >
            <i class="fas fa-trash"></i>
          </a>
        </template>
      </tree-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Swal from "sweetalert2";
import TreeView from "@/components/TreeView.vue";

export default {
  name: "EntityTreePage",
  components: {
    TreeView,
  },
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    query: "",
    allItems: [],
    hierarchicalItems: [],
    expandedNodes: new Set(),
    currentLocale: null,
    draggedItemId: null,
    draggedItem: null,
    dragOverItemId: null,
  }),
  computed: {
    ...mapGetters("operations", ["loading", "appInfo"]),
    configTitle() {
      return this.config?.title || "";
    },
    configBreadcrumbs() {
      return this.config?.breadcrumbs || [];
    },
    enableDragAndDrop() {
      return Boolean(this.config?.features?.dragAndDrop && this.config?.api?.move && this.hasPermission("drag"));
    },
    showStatusBadge() {
      return this.config?.features?.showStatusBadge !== false;
    },
    idField() {
      return this.config?.fields?.id || "id";
    },
    parentField() {
      return this.config?.fields?.parentId || "parent_id";
    },
    childrenCountField() {
      return this.config?.fields?.childrenCount || "children_count";
    },
  },
  watch: {
    query(newQuery) {
      if (!newQuery) {
        this.getData();
      } else {
        this.searchData();
      }
    },
    '$store.getters["lang/locale"]': async function(newLocale) {
      if (newLocale && newLocale !== this.currentLocale) {
        this.currentLocale = newLocale;
        if (!this.query) {
          await this.getData();
        } else {
          await this.searchData();
        }
      }
    },
    '$i18n.locale': async function(newLocale) {
      if (newLocale && newLocale !== this.currentLocale) {
        this.currentLocale = newLocale;
        if (!this.query) {
          await this.getData();
        } else {
          await this.searchData();
        }
      }
    },
  },
  created() {
    this.currentLocale =
      this.$store?.getters?.["lang/locale"] ||
      this.$i18n?.locale ||
      (window.config && window.config.locale) ||
      "en";
    this.getData();
  },
  mounted() {
    this.currentLocale =
      this.$store?.getters?.["lang/locale"] ||
      this.$i18n?.locale ||
      (window.config && window.config.locale) ||
      "en";
    window.addEventListener("locale-changed", this.handleLocaleChange);
  },
  beforeDestroy() {
    window.removeEventListener("locale-changed", this.handleLocaleChange);
  },
  methods: {
    hasPermission(key) {
      const permission = this.config?.permissions?.[key];
      if (!permission) {
        return true;
      }
      return this.$can(permission);
    },
    resolveRoute(key, item = null) {
      const routeResolver = this.config?.routes?.[key];
      if (typeof routeResolver === "function") {
        return routeResolver(item);
      }
      return null;
    },
    resolveDisplayName(item) {
      const resolver = this.config?.displayNameResolver;
      if (typeof resolver === "function") {
        return (
          resolver(item, {
            locale: this.currentLocale,
            fallbackLocale: this.$i18n?.fallbackLocale || "en",
          }) || ""
        );
      }
      if (!item) {
        return "";
      }
      return item.name || item.localized_name || item.title || "";
    },
    canDelete(item) {
      const resolver = this.config?.canDelete;
      if (typeof resolver === "function") {
        return resolver(item);
      }
      return true;
    },
    canDragItem(item) {
      if (!this.enableDragAndDrop) {
        return false;
      }
      const resolver = this.config?.canDrag;
      if (typeof resolver === "function") {
        return resolver(item);
      }
      return true;
    },
    buildDefaultParams() {
      const defaultParams = this.config?.api?.defaultParams;
      if (typeof defaultParams === "function") {
        return defaultParams({
          locale: this.currentLocale,
          query: this.query,
        }) || {};
      }
      return { ...(defaultParams || {}) };
    },
    buildSearchParams() {
      const params = { ...this.buildDefaultParams() };
      const searchKey = this.config?.api?.searchParam || "search";
      params[searchKey] = this.query;
      const extra = this.config?.api?.searchParams;
      if (typeof extra === "function") {
        Object.assign(
          params,
          extra({
            locale: this.currentLocale,
            query: this.query,
          }) || {}
        );
      } else if (extra) {
        Object.assign(params, extra);
      }
      return params;
    },
    async getData() {
      if (!this.config?.api?.list) {
        return;
      }
      this.$store.state.operations.loading = true;
      try {
        const response = await this.$axios.get(this.config.api.list, {
          params: this.buildDefaultParams(),
        });
        this.allItems = response.data.data || [];
        this.buildHierarchy();
      } catch (error) {
        console.error("Error loading data:", error);
        this.$toast.error(this.$t("Error"), this.config?.messages?.loadError || this.$t("Failed to load data"));
      } finally {
        this.$store.state.operations.loading = false;
      }
    },
    async searchData() {
      if (!this.config?.api?.search) {
        return this.getData();
      }
      this.$store.state.operations.loading = true;
      try {
        const response = await this.$axios.get(this.config.api.search, {
          params: this.buildSearchParams(),
        });
        this.allItems = response.data.data || [];
        this.buildHierarchy();
      } catch (error) {
        console.error("Error searching data:", error);
        this.$toast.error(this.$t("Error"), this.config?.messages?.searchError || this.$t("Failed to search data"));
      } finally {
        this.$store.state.operations.loading = false;
      }
    },
    buildHierarchy() {
      const itemsMap = new Map();
      const rootItems = [];

      this.allItems.forEach((item) => {
        const id = item[this.idField];
        itemsMap.set(id, {
          ...item,
          level: 0,
          expanded: this.expandedNodes.has(id),
          hasChildren: (item[this.childrenCountField] || 0) > 0,
          children: [],
          children_count: item[this.childrenCountField] || 0,
        });
      });

      this.allItems.forEach((item) => {
        const parentId = item[this.parentField];
        const id = item[this.idField];
        if (parentId) {
          const parent = itemsMap.get(parentId);
          if (parent) {
            parent.children.push(id);
            parent.hasChildren = true;
            parent.children_count = parent.children.length;
          }
        } else {
          rootItems.push(id);
        }
      });

      this.hierarchicalItems = [];
      this.buildHierarchicalList(rootItems, itemsMap, 0);
    },
    buildHierarchicalList(itemIds, itemsMap, level) {
      itemIds.forEach((id, index) => {
        const item = itemsMap.get(id);
        if (item) {
          item.level = level;
          item.isLastChild = index === itemIds.length - 1;
          this.hierarchicalItems.push(item);
          if (item.expanded && item.children.length > 0) {
            this.buildHierarchicalList(item.children, itemsMap, level + 1);
          }
        }
      });
    },
    isLastSibling(item) {
      const currentIndex = this.hierarchicalItems.findIndex((entity) => entity[this.idField] === item[this.idField]);
      if (currentIndex === -1) {
        return true;
      }
      for (let i = currentIndex + 1; i < this.hierarchicalItems.length; i += 1) {
        const nextItem = this.hierarchicalItems[i];
        if (nextItem.level < item.level) {
          return true;
        }
        if (nextItem.level === item.level && nextItem[this.parentField] === item[this.parentField]) {
          return false;
        }
      }
      return true;
    },
    toggleExpand(itemId) {
      if (this.expandedNodes.has(itemId)) {
        this.expandedNodes.delete(itemId);
      } else {
        this.expandedNodes.add(itemId);
      }
      this.buildHierarchy();
    },
    refreshTree() {
      this.query = "";
      this.expandedNodes.clear();
      this.getData();
    },
    async resetPagination() {
      return Promise.resolve();
    },
    async reload() {
      this.query = "";
      await this.searchData();
    },
    handleDragStart(event, item) {
      if (!this.enableDragAndDrop) {
        return;
      }
      this.draggedItemId = item[this.idField];
      this.draggedItem = item;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", String(this.draggedItemId));
      if (event.currentTarget) {
        event.currentTarget.style.opacity = "0.5";
      }
    },
    handleDragOver(event, targetItem) {
      if (!this.enableDragAndDrop || !this.draggedItem || this.draggedItem[this.idField] === targetItem[this.idField]) {
        return;
      }
      if (this.isDescendant(this.draggedItem[this.idField], targetItem[this.idField])) {
        return;
      }
      this.dragOverItemId = targetItem[this.idField];
      event.dataTransfer.dropEffect = "move";
    },
    handleDragLeave(event, targetItem) {
      if (!this.enableDragAndDrop) {
        return;
      }
      if (this.dragOverItemId === targetItem[this.idField]) {
        this.dragOverItemId = null;
      }
    },
    handleDrop(event, targetItem) {
      if (!this.enableDragAndDrop) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      this.dragOverItemId = null;
      if (!this.draggedItem || this.draggedItem[this.idField] === targetItem[this.idField]) {
        return;
      }
      if (this.isDescendant(this.draggedItem[this.idField], targetItem[this.idField])) {
        this.$toast.warning(this.$t("Error"), this.$t("Cannot move item to its own descendant"));
        return;
      }
      const newParentId = targetItem[this.idField];
      const oldParentId = this.draggedItem[this.parentField];
      if (newParentId === oldParentId) {
        return;
      }
      this.confirmMove(this.draggedItem, targetItem, newParentId, oldParentId);
    },
    handleDragEnd(event) {
      if (!this.enableDragAndDrop) {
        return;
      }
      if (event?.currentTarget) {
        event.currentTarget.style.opacity = "1";
      }
      this.draggedItemId = null;
      this.draggedItem = null;
      this.dragOverItemId = null;
    },
    isDescendant(ancestorId, potentialDescendantId) {
      const checkDescendant = (currentId) => {
        const current = this.allItems.find((item) => item[this.idField] === currentId);
        if (!current || !current[this.parentField]) {
          return false;
        }
        if (current[this.parentField] === ancestorId) {
          return true;
        }
        return checkDescendant(current[this.parentField]);
      };
      return checkDescendant(potentialDescendantId);
    },
    async confirmMove(draggedItem, targetItem, newParentId, oldParentId) {
      const entityLabel = this.config?.messages?.entityLabel || this.$t("Item");
      const message = newParentId !== oldParentId
        ? this.$t('Move "{item}" to "{target}"?')
            .replace("{item}", this.resolveDisplayName(draggedItem))
            .replace("{target}", this.resolveDisplayName(targetItem))
        : this.$t('Reorder "{item}"?').replace("{item}", this.resolveDisplayName(draggedItem));

      const result = await Swal.fire({
        title: this.$t("Move {entity}", { entity: entityLabel }),
        html: message,
        type: "question",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"),
        cancelButtonText: this.$t("Cancel"),
      });

      if (result.value) {
        await this.moveItem(draggedItem[this.idField], newParentId);
      }
    },
    async moveItem(itemId, newParentId) {
      if (!this.config?.api?.move) {
        return;
      }
      try {
        const endpoint =
          typeof this.config.api.move === "function"
            ? this.config.api.move(itemId, { locale: this.currentLocale })
            : `${this.config.api.move}/${itemId}`;
        const response = await this.$http.post(endpoint, {
          parent_id: newParentId,
        });
        if (response.status === 200) {
          this.$toast.success(this.$t("Success"), this.config?.messages?.moveSuccess || this.$t("Moved successfully"));
          await this.getData();
        }
      } catch (error) {
        console.error("Move error:", error);
        const errorMessage = error.response?.data?.message || this.config?.messages?.moveError || this.$t("Failed to move item");
        this.$toast.error(this.$t("Error"), errorMessage);
      }
    },
    async deleteData(item) {
      if (!this.config?.api?.delete || !this.canDelete(item)) {
        return;
      }
      const entityLabel = this.config?.messages?.entityLabel || this.$t("item");
      Swal.fire({
        title: this.$t("Are you sure?"),
        text: this.$t("You will not be able to return to this!"),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"),
        cancelButtonText: this.$t("Cancel"),
      }).then((result) => {
        if (result.value) {
          const endpoint =
            typeof this.config.api.delete === "function"
              ? this.config.api.delete(item)
              : `${this.config.api.delete}/${item[this.idField]}`;
          this.$http
            .delete(endpoint)
            .then((response) => {
              if (response.status === 200) {
                this.getData();
                this.$toast.success(this.$t("Deleted!"), this.$t("{entity} deleted successfully.", { entity: entityLabel }));
              } else {
                this.$toast.warning(
                  this.$t("Failed!"),
                  this.config?.messages?.deleteError || this.$t("Unable to delete {entity}.", { entity: entityLabel })
                );
              }
            })
            .catch((error) => {
              console.error("Delete error:", error);
              const errorMessage = error.response?.data?.message || this.config?.messages?.deleteError || this.$t("Unable to delete {entity}.", { entity: entityLabel });
              this.$toast.warning(this.$t("Failed!"), errorMessage);
            });
        }
      });
    },
    async handleLocaleChange(event) {
      if (event?.detail?.locale && event.detail.locale !== this.currentLocale) {
        this.currentLocale = event.detail.locale;
        if (!this.query) {
          await this.getData();
        } else {
          await this.searchData();
        }
      }
    },
  },
};
</script>

<style scoped>
.refresh-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.tree-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.btn-primary {
  background: #2ab930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}

.btn-group.c-w-100 {
  gap: 10px;
}

.tree-page-container {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid #e9ecef;
}

.tree-badge {
  font-size: 11px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 12px;
  white-space: nowrap;
  line-height: 1.2;
}

.tree-badge-active {
  background: #f6fef4;
  color: #2ab930;
  border: 1px solid #e8f5e9;
}

.tree-badge-inactive {
  background: #fef4f4;
  color: #dc3545;
  border: 1px solid #ffebee;
}
</style>

