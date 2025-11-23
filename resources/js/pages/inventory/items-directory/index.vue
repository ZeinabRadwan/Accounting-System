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
    return { title: this.$t("Items Directory") };
  },
  computed: {
    treeConfig() {
      return {
        title: this.$t("Items Directory"),
        breadcrumbs: [
          { name: "Dashboard", url: "home" },
          { name: "Inventory Management", url: "" },
          { name: "Items Directory", url: "" },
        ],
        permissions: {
          list: "product-list",
          create: "product-create",
          view: "product-view",
          edit: "product-edit",
          delete: "product-delete",
        },
        routes: {
          list: () => ({ name: "products.index" }),
          create: () => ({ name: "products.create" }),
          view: (item) => {
            if (item.type === 'product') {
              return { name: "products.show", params: { slug: item.slug } };
            } else if (item.type === 'subcategory') {
              return { name: "productSubCats.index" };
            } else if (item.type === 'category') {
              return { name: "productCats.index" };
            }
            return null;
          },
          edit: (item) => {
            if (item.type === 'product') {
              return { name: "products.edit", params: { slug: item.slug } };
            } else if (item.type === 'subcategory') {
              return { name: "productSubCats.edit", params: { slug: item.slug } };
            } else if (item.type === 'category') {
              return { name: "productCats.edit", params: { slug: item.slug } };
            }
            return null;
          },
          createChild: (item) => {
            if (item.type === 'category') {
              return { name: "productSubCats.create", query: { category_id: item.original_id } };
            } else if (item.type === 'subcategory') {
              return { name: "products.create", query: { sub_category_id: item.original_id } };
            }
            return null;
          },
        },
        api: {
          list: "/api/products/tree",
          search: "/api/products/tree",
          searchParam: "search",
          defaultParams: () => ({}),
          delete: (item) => {
            if (item.type === 'product') {
              return `/api/products/${item.slug}`;
            } else if (item.type === 'subcategory') {
              return `/api/product-sub-categories/${item.slug}`;
            } else if (item.type === 'category') {
              return `/api/product-categories/${item.slug}`;
            }
            return null;
          },
        },
        fields: {
          id: "id",
          parentId: "parent_id",
          childrenCount: "children_count",
        },
        displayNameResolver: (item, { locale }) => {
          if (!item) {
            return "";
          }
          return item.name || "";
        },
        canDelete: (item) => {
          // Can delete products, subcategories, and categories
          return true;
        },
        canAddChild: (item) => {
          // Can add subcategory to category, and product to subcategory
          return item.type === 'category' || item.type === 'subcategory';
        },
        features: {
          dragAndDrop: false,
          showStatusBadge: true,
        },
        messages: {
          entityLabel: this.$t("Item"),
          loadError: this.$t("Failed to load items"),
          searchError: this.$t("Failed to search items"),
          deleteError: this.$t("Sorry you can't remove this item!"),
        },
      };
    },
  },
};
</script>

