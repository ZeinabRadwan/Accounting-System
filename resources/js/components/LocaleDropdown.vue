<template>
  <li v-if="Object.keys(locales).length > 1" class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
      aria-expanded="false">
      <lang-flag :iso="locales[locale][0]" class="d-none d-md-inline-flex" />
      {{ locales[locale][0] }}
    </a>
    <div class="dropdown-menu dropdown-menu-sm">
      <a v-for="(value, key) in locales" :key="key" class="dropdown-item" :title="value[1]" href="#"
        @click.prevent="setLocale(key)">
        <lang-flag :iso="value[0]" />
        {{ value[0] }}
      </a>
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'
import LangFlag from 'vue-lang-code-flags'
import axios from 'axios'

export default {
  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales',
  }),

  components: {
    LangFlag,
  },

  methods: {
    async setLocale(locale) {
      if (this.$i18n.locale !== locale) {
        try {
          debugger;
          // Make an API call to Laravel
          const response = await axios.post('/set-locale', { locale })

          if (response.data.success) {
            // Update client-side i18n and Vuex store
            loadMessages(locale)
            this.$store.dispatch('lang/setLocale', { locale })
          } else {
            console.error('Failed to set locale:', response.data.error)
          }
        } catch (error) {
          console.error('Error setting locale:', error)
        }
      }
    },
  },
}
</script>