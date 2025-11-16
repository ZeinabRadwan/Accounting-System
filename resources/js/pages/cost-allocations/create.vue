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
                <button type="submit" class="btn btn-success" :form="'allocationForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <form id="allocationForm" role="form" @submit.prevent="saveRule" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">{{ $t('Allocation Rule Name') }} <span class="required">*</span></label>
                  <input id="name" v-model="form.name" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }" name="name" required />
                  <has-error :form="form" field="name" />
                </div>
                <div class="form-group col-md-6">
                  <label for="source_cost_center_id">{{ $t('Source Cost Center') }} <span class="required">*</span></label>
                  <CostCenterSelect
                    v-model="form.source_cost_center_id"
                    :clearable="false"
                    :placeholder="$t('Select source cost center')"
                    :class="{ 'is-invalid': form.errors.has('source_cost_center_id') }"
                  />
                  <has-error :form="form" field="source_cost_center_id" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="basis_type">{{ $t('Basis Type') }} <span class="required">*</span></label>
                  <select id="basis_type" v-model="form.basis_type" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('basis_type') }" required>
                    <option value="">{{ $t('Select basis type') }}</option>
                    <option value="percentage">{{ $t('Percentage') }}</option>
                    <option value="employees">{{ $t('Employees') }}</option>
                    <option value="revenue">{{ $t('Revenue') }}</option>
                    <option value="area">{{ $t('Area') }}</option>
                    <option value="consumption">{{ $t('Consumption') }}</option>
                  </select>
                  <has-error :form="form" field="basis_type" />
                </div>
                <div class="form-group col-md-6">
                  <label for="is_active">{{ $t('Status') }}</label>
                  <select id="is_active" v-model="form.is_active" class="form-control">
                    <option :value="true">{{ $t('Active') }}</option>
                    <option :value="false">{{ $t('Inactive') }}</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-12">
                  <label for="description">{{ $t('Description') }}</label>
                  <textarea id="description" v-model="form.description" class="form-control" rows="3"></textarea>
                </div>
              </div>
              
              <!-- Allocation Details -->
              <div class="row mt-3">
                <div class="col-md-12">
                  <h5>{{ $t('Target Cost Centers') }} <span class="required">*</span></h5>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>{{ $t('Target Cost Center') }}</th>
                          <th>{{ $t('Allocation Ratio (%)') }}</th>
                          <th class="text-right">{{ $t('Action') }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(detail, index) in form.details" :key="index">
                          <td>
                            <CostCenterSelect
                              v-model="detail.target_cost_center_id"
                              :clearable="false"
                              :placeholder="$t('Select target cost center')"
                            />
                          </td>
                          <td>
                            <input v-model.number="detail.allocation_ratio" type="number" step="0.01" min="0" max="100"
                              class="form-control" :placeholder="$t('Enter ratio')" />
                          </td>
                          <td class="text-right">
                            <button v-if="form.details.length > 1" type="button" @click="removeDetail(index)" class="btn btn-danger btn-sm">
                              <i class="fas fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colspan="2" class="text-right"><strong>{{ $t('Total Ratio') }}:</strong></td>
                          <td><strong>{{ totalRatio }}%</strong></td>
                          <td>
                            <button type="button" @click="addDetail" class="btn btn-primary btn-sm">
                              <i class="fas fa-plus"></i> {{ $t('Add Target Center') }}
                            </button>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div v-if="totalRatio !== 100" class="alert alert-warning mt-2">
                    {{ $t('Total allocation ratio must equal 100%') }}. {{ $t('Current total') }}: {{ totalRatio }}%
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <v-button :loading="form.busy" type="success" :disabled="totalRatio !== 100">
                <i class="fas fa-save" /> {{ $t('Save') }}
              </v-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import CostCenterSelect from '@/components/CostCenterSelect.vue'

export default {
  name: 'CreateCostAllocation',
  middleware: ['auth', 'check-permissions'],
  components: {
    CostCenterSelect
  },
  metaInfo() {
    return { title: this.$t('Create Cost Allocation Rule') }
  },
  data: () => ({
    breadcrumbsCurrent: 'cost_allocations.create',
    breadcrumbs: [
      { name: this.$t('Dashboard'), url: '/' },
      { name: this.$t('Cost Allocations'), url: '/cost-allocations' },
      { name: this.$t('Create'), url: '' }
    ],
    form: new Form({
      name: '',
      source_cost_center_id: null,
      basis_type: '',
      description: '',
      is_active: true,
      details: [
        {
          target_cost_center_id: null,
          allocation_ratio: 0
        }
      ]
    })
  }),
  computed: {
    totalRatio() {
      return this.form.details.reduce((sum, detail) => sum + (parseFloat(detail.allocation_ratio) || 0), 0)
    }
  },
  methods: {
    addDetail() {
      this.form.details.push({
        target_cost_center_id: null,
        allocation_ratio: 0
      })
    },
    removeDetail(index) {
      if (this.form.details.length > 1) {
        this.form.details.splice(index, 1)
      }
    },
    async saveRule() {
      if (this.totalRatio !== 100) {
        this.$toastr.e(this.$t('Total allocation ratio must equal 100%'))
        return
      }

      await this.form
        .post('/api/cost-allocation-rules')
        .then(({ data }) => {
          this.$toastr.s(this.$t('Cost allocation rule created successfully'))
          this.$router.push({ name: 'cost-allocations.index' })
        })
        .catch(() => {
          this.$toastr.e(this.$t('Failed to create cost allocation rule'))
        })
    }
  }
}
</script>

