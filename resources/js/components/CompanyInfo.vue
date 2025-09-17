<template>
  <div v-if="appInfo" class="company-logo">
    <DefaultImage
      :src="appInfo.blackLogo"
      type="company"
      size="large"
      shape="square"
      :alt="appInfo.companyName"
      class="lg-logo"
    />
    <address class="mt-2">
      <strong v-html="appInfo.companyTagline" /><br />
      <strong v-if="appInfo.phone">{{ $t('Phone') }}: </strong>
      {{ appInfo.phone }}<br />
      <strong v-if="appInfo.email">{{ $t('Email') }}: </strong>
      {{ appInfo.email }}<br />
      <strong v-if="appInfo.address">{{ $t('Address') }}: </strong>
      {{ appInfo.address }}
    </address>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DefaultImage from './DefaultImage.vue'

export default {
  name: 'CompanyInfo',
  components: {
    DefaultImage,
  },
  // Map Getters
  computed: {
    ...mapGetters('operations', ['appInfo']),
  },
}
</script>
