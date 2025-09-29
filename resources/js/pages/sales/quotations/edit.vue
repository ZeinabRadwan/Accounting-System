<template>
  <QuotationForm mode="edit" />
</template>

<script>
import QuotationForm from '~/components/QuotationForm.vue'

export default {
  middleware: ["auth", "check-permissions"],
  components: { QuotationForm },
  metaInfo() {
    return { title: this.$t("Edit Quotation") };
  },
};
</script>

<style scoped>
</style>
