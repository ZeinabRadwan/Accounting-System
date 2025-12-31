<template>
  <div class="text-center py-8">
    <img :src="customImage || '/images/empty.png'" class="w-64 m-auto" alt="result-not-found" />
    <p class="font-bold text-lg text-gray-600 dark:text-gray-200">
      <template v-if="customMessage">
        {{ customMessage }}
      </template>
      <template v-else>
        {{ $t('sorry') }} 😔 {{ $t('no_data_found') }}.
      </template>
    </p>
  </div>
</template>

<script>
export default {
  name: 'EmptyTable',
  props: {
    customMessage: {
      type: String,
      default: null,
    },
    customImage: {
      type: String,
      default: null,
    },
  },
}
</script>



