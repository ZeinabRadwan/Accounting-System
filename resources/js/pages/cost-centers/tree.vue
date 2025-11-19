<template>
  <entity-tree-page :config="treeConfig" />
</template>

<script>
import EntityTreePage from "@/components/EntityTreePage.vue";

export default {
  components: {
    EntityTreePage,
  },
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Cost Centers - Tree View") };
  },
  computed: {
    treeConfig() {
      return {
        title: this.$t("Cost Centers - Tree View"),
        breadcrumbs: [
          { name: "Dashboard", url: "home" },
          { name: "Cost Centers", url: "" },
        ],
        permissions: {
          list: "view_cost_centers",
          create: "create_cost_center",
          view: "view_cost_centers",
          edit: "update_cost_center",
          delete: "delete_cost_center",
          drag: "update_cost_center",
        },
        routes: {
          list: () => ({ name: "cost-centers.index" }),
          create: () => ({ name: "cost-centers.create" }),
          view: (item) => ({ name: "cost-centers.show", params: { slug: item.id } }),
          edit: (item) => ({ name: "cost-centers.edit", params: { slug: item.id } }),
          createChild: (item) => ({ name: "cost-centers.create", query: { parent_id: item.id } }),
        },
        api: {
          list: "/api/cost-centers/tree",
          search: "/api/cost-centers/tree",
          searchParam: "search",
          defaultParams: () => ({}),
          delete: (item) => `/api/cost-centers/${item.id}`,
          move: (itemId) => `/api/cost-centers/${itemId}/move`,
        },
        displayNameResolver: (item, { locale }) => {
          if (!item) {
            return "";
          }
          if (item.localized_name) {
            return item.localized_name;
          }
          if ((locale === "en" || !locale) && item.name_en) {
            return item.name_en;
          }
          return item.name || "";
        },
        canDelete: (item) => item?.can_delete !== false,
        features: {
          dragAndDrop: true,
          showStatusBadge: true,
        },
        messages: {
          entityLabel: this.$t("Cost Center"),
          loadError: this.$t("Failed to load cost centers"),
          searchError: this.$t("Failed to search cost centers"),
          moveSuccess: this.$t("Cost center moved successfully"),
          moveError: this.$t("Failed to move cost center"),
          deleteError: this.$t("Sorry you can't remove this cost center!"),
        },
      };
    },
  },
};
</script>
