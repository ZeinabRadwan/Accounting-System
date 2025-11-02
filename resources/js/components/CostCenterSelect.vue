<template>
  <v-select
    v-model="selectedValue"
    :options="costCenters"
    :label="labelField"
    :reduce="option => option.id"
    :placeholder="placeholder"
    :multiple="multiple"
    :clearable="clearable"
    :searchable="true"
    :loading="loading"
    :class="selectClass"
    @search="onSearch"
    @open="onOpen"
    :filterable="false"
  >
    <template #option="{ code, name, full_path, display_name }">
      <div>
        <strong>{{ display_name || (code + ' - ' + name) }}</strong>
        <br v-if="full_path && showFullPath">
          <small class="text-muted">{{ full_path }}</small>
        </br>
      </div>
    </template>
    <template #selected-option="{ code, name, display_name }">
      <span>{{ display_name || (code + ' - ' + name) }}</span>
    </template>
    <template #no-options>
      <div class="text-center text-muted p-2">
        {{ $t('No cost centers found') }}
      </div>
    </template>
  </v-select>
</template>

<script>
export default {
  name: 'CostCenterSelect',
  props: {
    value: {
      type: [Number, String, Array],
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: 'Select Cost Center'
    },
    labelField: {
      type: String,
      default: 'display_name'
    },
    showFullPath: {
      type: Boolean,
      default: true
    },
    selectClass: {
      type: String,
      default: ''
    },
    limit: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      costCenters: [],
      loading: false,
      searchTimeout: null
    }
  },
  computed: {
    selectedValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  mounted() {
    this.loadCostCenters()
  },
  methods: {
    async loadCostCenters(search = '') {
      this.loading = true
      try {
        const params = {
          limit: this.limit
        }
        
        if (search && search.length >= 2) {
          params.search = search
        }
        
        const response = await this.$http.get('/api/cost-centers/all', { params })
        
        if (response.data && response.data.data) {
          this.costCenters = response.data.data.map(cc => ({
            ...cc,
            display_name: cc.code + ' - ' + cc.name
          }))
        } else if (Array.isArray(response.data)) {
          this.costCenters = response.data.map(cc => ({
            ...cc,
            display_name: cc.code + ' - ' + cc.name
          }))
        }
      } catch (error) {
        console.error('Error loading cost centers:', error)
        // Silent fail for select component - don't show toast
      } finally {
        this.loading = false
      }
    },
    onSearch(search, loading) {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout)
      }
      
      this.searchTimeout = setTimeout(() => {
        if (!search || search.length < 2) {
          loading(false)
          this.loadCostCenters()
          return
        }
        
        loading(true)
        this.loadCostCenters(search).then(() => {
          loading(false)
        })
      }, 300)
    },
    onOpen() {
      if (this.costCenters.length === 0) {
        this.loadCostCenters()
      }
    }
  }
}
</script>

<style scoped>
.v-select {
  min-width: 200px;
}
</style>

