<template>
  <div>
    <GlobalSaveButton v-if="!$route.path.includes('/sales/pos')" />
    <child />
  </div>
</template>

<script>
export default {
  name: 'BasicLayout',
}
</script>

<script>
import GlobalSaveButton from '~/components/GlobalSaveButton'

export default {
  name: 'BasicLayout',
  components: { GlobalSaveButton },
}
</script>

<style lang="scss">
.basic-layout {
  color: #636b6f;
  height: 100vh;
  font-weight: 100;
  position: relative;

  .links>a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
