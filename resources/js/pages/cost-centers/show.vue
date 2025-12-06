<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'cost-centers.index' }" class="btn btn-info">
                  <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">

                    {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />

                  </template>

                  <template v-else>

                    <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">


                      {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />


                    </template>


                    <template v-else>


                      <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}


                    </template>

                  </template>
                </router-link>
                <router-link :to="{ name: 'cost-centers.edit', params: { slug: costCenter.id } }" class="btn btn-primary">
                  <i class="fas fa-edit" /> {{ $t('Edit') }}
                </router-link>
              </div>
            </div>
          </div>
          <div class="card-body" v-if="costCenter">
            <div class="row">
              <div class="col-md-6">
                <table class="table table-bordered">
                  <tr>
                    <th>{{ $t('Code') }}</th>
                    <td>{{ costCenter.code }}</td>
                  </tr>
                  <tr>
                    <th>{{ $t('Name') }}</th>
                    <td>{{ costCenter.name }}</td>
                  </tr>
                  <tr v-if="costCenter.name_en">
                    <th>{{ $t('Name (English)') }}</th>
                    <td>{{ costCenter.name_en }}</td>
                  </tr>
                  <tr>
                    <th>{{ $t('Full Path') }}</th>
                    <td>{{ costCenter.full_path }}</td>
                  </tr>
                  <tr>
                    <th>{{ $t('Parent') }}</th>
                    <td>{{ costCenter.parent ? costCenter.parent.name : '-' }}</td>
                  </tr>
                  <tr>
                    <th>{{ $t('Status') }}</th>
                    <td>
                      <span :class="['badge', costCenter.is_active ? 'badge-success' : 'badge-danger']">
                        {{ costCenter.is_active ? $t('Active') : $t('Inactive') }}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>{{ $t('Journal Entry Lines Count') }}</th>
                    <td>{{ costCenter.journal_entry_lines_count || 0 }}</td>
                  </tr>
                  <tr>
                    <th>{{ $t('Children Count') }}</th>
                    <td>{{ costCenter.children_count || 0 }}</td>
                  </tr>
                  <tr>
                    <th>{{ $t('Created By') }}</th>
                    <td>{{ costCenter.creator ? costCenter.creator.name : '-' }}</td>
                  </tr>
                  <tr>
                    <th>{{ $t('Created At') }}</th>
                    <td>{{ costCenter.created_at }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GeneralTable from "~/components/GeneralTable";

export default {
  name: 'ShowCostCenter',
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Cost Center Details') }
  },
  components: {
    GeneralTable,
  },
  data() {
    return {
      breadcrumbsCurrent: 'cost_centers.show',
      breadcrumbs: [
        { name: 'Dashboard', url: '/' },
        { name: 'Cost Centers', url: '/cost-centers' },
        { name: 'Details', url: '' }
      ],
      costCenter: null
    }
  },
  created() {
    this.getCostCenter()
  },
  methods: {
    async getCostCenter() {
      try {
        const response = await this.$http.get(`/api/cost-centers/${this.$route.params.slug}`)
        const { data } = response
        
        // Check if response has error
        if (data && data.error) {
          this.$toast.error(this.$t('Error'), data.message || this.$t('Cost center not found'))
          this.$router.push({ name: 'cost-centers.index' })
          return
        }
        
        // Check if data exists
        if (data && data.data) {
          this.costCenter = data.data
        } else if (data && data.id) {
          // Direct resource response
          this.costCenter = data
        } else {
          this.$toast.error(this.$t('Error'), this.$t('Cost center not found'))
          this.$router.push({ name: 'cost-centers.index' })
        }
      } catch (error) {
        console.error('Error loading cost center:', error)
        const errorMessage = error.response?.data?.message || this.$t('Failed to load cost center')
        this.$toast.error(this.$t('Error'), errorMessage)
        this.$router.push({ name: 'cost-centers.index' })
      }
    }
  }
}
</script>

