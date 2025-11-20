<template>
  <v-select-original v-bind="$attrs" v-on="$listeners">
    <template v-for="(slot, name) in $scopedSlots" v-slot:[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
    <template v-for="(slot, name) in $slots" v-slot:[name]>
      <slot :name="name" />
    </template>
    <template #no-options>
      <slot name="no-options">
        <div class="text-center text-muted p-2">
          {{ $t('Sorry, no matching options.') }}
        </div>
      </slot>
    </template>
  </v-select-original>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'LocalizedVSelect',
  components: {
    'v-select-original': vSelect
  },
  inheritAttrs: false
}
</script>

