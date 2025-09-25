<template>
  <div>
    <GlobalSaveButton v-if="!$route.path.includes('/sales/pos')" />
    <child />
  </div>
</template>

<script>
export default {
  name: 'TemplateLayout',
}
</script>

<script>
import GlobalSaveButton from '~/components/GlobalSaveButton'

export default {
  name: 'TemplateLayout',
  components: { GlobalSaveButton },
}
</script>
