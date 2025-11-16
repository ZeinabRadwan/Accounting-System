<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'cost-allocations.index' }" class="btn btn-info">
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
              </div>
            </div>
          </div>
          <div class="card-body" v-if="rule">
            <form @submit.prevent="executeAllocation">
              <div class="row">
                <div class="form-group col-md-6">
                  <label>{{ $t('Rule Name') }}</label>
                  <input :value="rule.name" type="text" class="form-control" readonly />
                </div>
                <div class="form-group col-md-6">
                  <label>{{ $t('Source Cost Center') }}</label>
                  <input :value="rule.source_cost_center ? rule.source_cost_center.name : '-'" type="text" class="form-control" readonly />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label>{{ $t('Total Amount') }} <span class="required">*</span></label>
                  <input v-model.number="form.total_amount" type="number" step="0.01" min="0" class="form-control" required />
                </div>
                <div class="form-group col-md-4">
                  <label>{{ $t('Period Start Date') }} <span class="required">*</span></label>
                  <input v-model="form.period_start_date" type="date" class="form-control" required />
                </div>
                <div class="form-group col-md-4">
                  <label>{{ $t('Period End Date') }} <span class="required">*</span></label>
                  <input v-model="form.period_end_date" type="date" class="form-control" required />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label>{{ $t('Execution Date') }}</label>
                  <input v-model="form.execution_date" type="date" class="form-control" />
                </div>
              </div>
              
              <!-- Preview -->
              <div class="row mt-3" v-if="form.total_amount > 0 && rule.details">
                <div class="col-md-12">
                  <h5>{{ $t('Allocation Preview') }}</h5>
                  <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>{{ $t('Target Cost Center') }}</th>
                          <th>{{ $t('Ratio') }}</th>
                          <th class="text-right">{{ $t('Amount') }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="detail in rule.details" :key="detail.id">
                          <td>{{ detail.target_cost_center ? detail.target_cost_center.name : '-' }}</td>
                          <td>{{ detail.allocation_ratio }}%</td>
                          <td class="text-right">{{ calculateAmount(detail.allocation_ratio) }}</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colspan="2" class="text-right"><strong>{{ $t('Total') }}:</strong></td>
                          <td class="text-right"><strong>{{ form.total_amount }}</strong></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              
              <div class="card-footer">
                <button type="submit" class="btn btn-success" :disabled="loading">
                  <i v-if="loading" class="fas fa-spinner fa-spin"></i>
                  <i v-else class="fas fa-play"></i>
                  {{ loading ? $t('Executing...') : $t('Execute Allocation') }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExecuteCostAllocation',
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Execute Cost Allocation') }
  },
  data: () => ({
    breadcrumbsCurrent: 'cost_allocations.execute',
    breadcrumbs: [
      { name: this.$t('Dashboard'), url: '/' },
      { name: this.$t('Cost Allocations'), url: '/cost-allocations' },
      { name: this.$t('Execute Allocation'), url: '' }
    ],
    rule: null,
    form: {
      total_amount: 0,
      period_start_date: '',
      period_end_date: '',
      execution_date: new Date().toISOString().split('T')[0]
    },
    loading: false
  }),
  created() {
    this.getRule()
  },
  methods: {
    async getRule() {
      await this.$http
        .get(`/api/cost-allocation-rules/${this.$route.params.id}`)
        .then(({ data }) => {
          this.rule = data
        })
    },
    calculateAmount(ratio) {
      if (!this.form.total_amount) return 0
      return ((this.form.total_amount * ratio) / 100).toFixed(2)
    },
    async executeAllocation() {
      this.loading = true
      await this.$http
        .post('/api/cost-allocations/execute', {
          rule_id: this.$route.params.id,
          ...this.form
        })
        .then(({ data }) => {
          this.$toastr.s(this.$t('Cost allocation executed successfully'))
          this.$router.push({ name: 'cost-allocations.index' })
        })
        .catch(error => {
          this.$toastr.e(error.response?.data?.message || this.$t('Failed to execute allocation'))
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

