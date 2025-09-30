# Frontend Integration Guide for Multilingual System

This guide shows how to integrate the multilingual system into your existing Vue.js frontend.

## 🚀 **Quick Setup**

### 1. Register Components Globally

Add to your `resources/js/app.js`:

```javascript
import MultilingualInput from '@/components/MultilingualInput.vue'
import TranslationManager from '@/components/TranslationManager.vue'
import ChartOfAccountForm from '@/components/ChartOfAccountForm.vue'

// Register globally
Vue.component('MultilingualInput', MultilingualInput)
Vue.component('TranslationManager', TranslationManager)
Vue.component('ChartOfAccountForm', ChartOfAccountForm)
```

### 2. Add Translation Store

Add to your `resources/js/store/index.js`:

```javascript
import translations from './modules/translations'

export default new Vuex.Store({
  modules: {
    translations
  }
})
```

### 3. Initialize Translation Service

Add to your `resources/js/app.js`:

```javascript
import TranslationService from '@/services/TranslationService'

// Initialize translation service
Vue.prototype.$translationService = new TranslationService(axios)

// Initialize translations on app start
store.dispatch('translations/initialize')
```

## 🎨 **Component Usage Examples**

### 1. Simple Multilingual Input

```vue
<template>
  <div>
    <label>Account Name</label>
    <MultilingualInput
      v-model="accountName"
      field="name"
      :fallback-value="originalName"
      placeholder="Enter account name"
      @input-change="onNameChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountName: {
        en: 'Cash Account',
        ar: 'حساب النقدية',
        ur: 'نقدی اکاؤنٹ'
      },
      originalName: 'Cash Account'
    }
  },
  methods: {
    onNameChange({ locale, value, field }) {
      console.log(`Changed ${field} in ${locale} to: ${value}`)
    }
  }
}
</script>
```

### 2. Advanced Translation Management

```vue
<template>
  <div>
    <TranslationManager
      :model-id="account.id"
      model-type="chart-of-accounts"
      :translatable-fields="['name']"
      :initial-translations="account.translations"
      :fallback-values="{ name: account.original_name }"
      @translations-saved="onTranslationsSaved"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: {
        id: 1,
        code: '1000',
        original_name: 'Cash Account',
        translations: {
          name: {
            en: 'Cash Account',
            ar: 'حساب النقدية',
            ur: 'نقدی اکاؤنٹ'
          }
        }
      }
    }
  },
  methods: {
    onTranslationsSaved(translations) {
      this.account.translations = translations
      this.$toast.success('Translations saved!')
    }
  }
}
</script>
```

### 3. Chart of Accounts Form

```vue
<template>
  <div>
    <ChartOfAccountForm
      :account="editingAccount"
      :account-types="accountTypes"
      :parent-accounts="parentAccounts"
      @saved="onAccountSaved"
      @cancelled="closeForm"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      editingAccount: null,
      accountTypes: [
        { id: 1, name: 'Asset' },
        { id: 2, name: 'Liability' }
      ],
      parentAccounts: []
    }
  },
  methods: {
    onAccountSaved(account) {
      console.log('Account saved:', account)
      this.closeForm()
    },
    closeForm() {
      this.editingAccount = null
    }
  }
}
</script>
```

## 🔧 **API Integration Examples**

### 1. Using Translation Service

```javascript
// In your Vue component
export default {
  async mounted() {
    // Get accounts with translations
    const response = await this.$translationService.chartOfAccounts.getWithTranslations({
      locale: this.$store.state.translations.currentLocale,
      include_translations: true
    })
    
    this.accounts = response.data
  },
  
  methods: {
    async createAccount(accountData) {
      try {
        const response = await this.$translationService.chartOfAccounts.createWithTranslations(accountData)
        this.$toast.success('Account created successfully!')
        return response.data
      } catch (error) {
        this.$toast.error('Error creating account')
        throw error
      }
    },
    
    async updateTranslations(accountCode, field, translations) {
      try {
        await this.$translationService.chartOfAccounts.updateTranslations(accountCode, field, translations)
        this.$toast.success('Translations updated!')
      } catch (error) {
        this.$toast.error('Error updating translations')
      }
    }
  }
}
```

### 2. Using Vuex Store

```javascript
// In your Vue component
export default {
  computed: {
    ...mapGetters('translations', [
      'currentLocaleInfo',
      'translationCompletionPercentage',
      'missingTranslationsCount'
    ])
  },
  
  methods: {
    ...mapActions('translations', [
      'setCurrentLocale',
      'loadTranslationStats'
    ]),
    
    async changeLanguage(locale) {
      await this.setCurrentLocale(locale)
      // Reload data with new locale
      this.loadAccounts()
    }
  }
}
```

## 🌐 **Language Switching**

### 1. Language Switcher Component

```vue
<template>
  <div class="language-switcher">
    <div class="dropdown">
      <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        {{ currentLocaleInfo.flag }} {{ currentLocaleInfo.name }}
      </button>
      <ul class="dropdown-menu">
        <li v-for="locale in supportedLocales" :key="locale.code">
          <button
            class="dropdown-item"
            :class="{ active: locale.code === currentLocale }"
            @click="changeLanguage(locale.code)"
          >
            {{ locale.flag }} {{ locale.name }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('translations', [
      'currentLocaleInfo',
      'supportedLocales',
      'currentLocale'
    ])
  },
  
  methods: {
    ...mapActions('translations', ['setCurrentLocale']),
    
    async changeLanguage(locale) {
      await this.setCurrentLocale(locale)
      this.$emit('language-changed', locale)
    }
  }
}
</script>
```

## 📊 **Translation Statistics Dashboard**

```vue
<template>
  <div class="translation-dashboard">
    <div class="row">
      <div class="col-md-3">
        <div class="stat-card">
          <div class="stat-value">{{ stats.total_accounts }}</div>
          <div class="stat-label">Total Accounts</div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="stat-card">
          <div class="stat-value">{{ stats.accounts_with_translations }}</div>
          <div class="stat-label">With Translations</div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="stat-card">
          <div class="stat-value">{{ translationCompletionPercentage }}%</div>
          <div class="stat-label">Completion Rate</div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="stat-card">
          <div class="stat-value">{{ missingTranslationsCount }}</div>
          <div class="stat-label">Missing Translations</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('translations', [
      'translationCompletionPercentage',
      'missingTranslationsCount'
    ]),
    
    stats() {
      return this.$store.state.translations.translationStats
    }
  }
}
</script>
```

## 🔍 **Search with Translations**

```vue
<template>
  <div class="search-container">
    <div class="input-group">
      <input
        v-model="searchTerm"
        type="text"
        class="form-control"
        :placeholder="`Search in ${currentLocaleInfo.name}...`"
        @input="onSearch"
      />
      <select v-model="searchField" class="form-select">
        <option value="name">Search by Name</option>
        <option value="code">Search by Code</option>
      </select>
      <button @click="performSearch" class="btn btn-primary">
        <i class="fas fa-search"></i> Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      searchField: 'name',
      searchResults: []
    }
  },
  
  computed: {
    currentLocaleInfo() {
      return this.$store.getters['translations/currentLocaleInfo']
    }
  },
  
  methods: {
    async performSearch() {
      if (!this.searchTerm.trim()) return
      
      try {
        const response = await this.$translationService.chartOfAccounts.searchTranslations(
          this.searchTerm,
          this.$store.state.translations.currentLocale,
          this.searchField
        )
        
        this.searchResults = response.data
      } catch (error) {
        this.$toast.error('Search failed')
      }
    },
    
    onSearch() {
      // Debounce search
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(() => {
        this.performSearch()
      }, 500)
    }
  }
}
</script>
```

## 🎯 **Key Benefits**

1. **Easy Integration**: Drop-in components that work with your existing forms
2. **Consistent UX**: Same translation interface across all models
3. **Performance**: Cached translations and optimized API calls
4. **Flexible**: Easy to customize and extend
5. **Responsive**: Works on mobile and desktop
6. **Accessible**: Proper ARIA labels and keyboard navigation

## 🚀 **Next Steps**

1. **Apply to Other Models**: Use the same pattern for Products, Clients, etc.
2. **Add Translation Workflow**: Review and approval process
3. **Bulk Operations**: Import/export translations
4. **Translation Memory**: Reuse common translations
5. **Auto-translation**: Integration with translation services

This frontend integration provides a complete multilingual experience that's easy to use and maintain!
