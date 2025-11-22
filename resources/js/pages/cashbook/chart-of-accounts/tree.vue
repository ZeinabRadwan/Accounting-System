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
    return { title: this.$t("Chart of Accounts - Tree View") };
  },
  computed: {
    treeConfig() {
      const buildRoute = (name, params = {}, query = {}) => ({ name, params, query });

      return {
        title: this.$t("Chart of Accounts - Tree View"),
        breadcrumbs: [
          { name: "Dashboard", url: "home" },
          { name: "Cashbook", url: "" },
          { name: "Chart of Accounts", url: "" },
        ],
        permissions: {
          list: "chart-of-account-list",
          create: "chart-of-account-create",
          view: "chart-of-account-view",
          edit: "chart-of-account-edit",
          delete: "chart-of-account-delete",
        },
        routes: {
          list: () => buildRoute("chart-of-accounts.index"),
          create: () => buildRoute("chart-of-accounts.create"),
          view: (item) => buildRoute("chart-of-accounts.show", { slug: item.code }),
          edit: (item) => buildRoute("chart-of-accounts.edit", { slug: item.code }),
          createChild: (item) => buildRoute("chart-of-accounts.create", {}, { parent_id: item.id }),
        },
        api: {
          list: "/api/chart-of-accounts/translations",
          search: "/api/chart-of-accounts/translations/search",
          searchParam: "search",
          defaultParams: ({ locale }) => ({
            locale,
            include_translations: true,
            include: "type",
            include_type_translations: true,
            perPage: 1000,
          }),
          searchParams: ({ locale }) => ({
            locale,
            field: "name",
            perPage: 1000,
          }),
          delete: (item) => `/api/chart-of-accounts/${item.code}`,
          move: (itemId, { locale }) => `/api/chart-of-accounts/${itemId}/move`,
        },
        fields: {
          id: "id",
          parentId: "parent_id",
          childrenCount: "children_count",
        },
        displayNameResolver: (entity, { locale, fallbackLocale }) => {
          if (!entity) {
            return "";
          }
          const translations = entity.translations && entity.translations.name;
          const activeLocale = locale || fallbackLocale || "en";
          if (translations && translations[activeLocale] && translations[activeLocale].trim() !== "") {
            return translations[activeLocale];
          }
          return entity.name || entity.original_name || "";
        },
        canDelete: () => true,
        canAddChild: (item) => {
          // Only allow adding children to accounts at level 4 and below (level <= 4)
          const level = item.level || 0;
          return level <= 4;
        },
        features: {
          dragAndDrop: true,
          showStatusBadge: false,
        },
        messages: {
          entityLabel: this.$t("Chart of Account"),
          loadError: this.$t("Failed to load chart of accounts"),
          searchError: this.$t("Failed to search chart of accounts"),
          deleteError: this.$t("Sorry you can't remove this chart of account!"),
        },
      };
    },
  },
};
</script>
