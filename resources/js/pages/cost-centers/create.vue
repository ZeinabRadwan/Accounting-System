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
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="submit" class="btn btn-success" :form="'costCenterForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <form id="costCenterForm" role="form" @submit.prevent="saveCostCenter" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="code">{{ $t('Code') }} <span class="required">*</span></label>
                  <input id="code" v-model="form.code" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('code') }" name="code"
                    :placeholder="$t('Enter cost center code')" required />
                  <has-error :form="form" field="code" />
                </div>
                <div class="form-group col-md-6">
                  <label for="name">{{ $t('Name') }} <span class="required">*</span></label>
                  <input id="name" v-model="form.name" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }" name="name"
                    :placeholder="$t('Enter cost center name')" required />
                  <has-error :form="form" field="name" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name_en">{{ $t('Name (English)') }}</label>
                  <input id="name_en" v-model="form.name_en" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name_en') }" name="name_en"
                    :placeholder="$t('Enter cost center name in English')" />
                  <has-error :form="form" field="name_en" />
                </div>
                <div class="form-group col-md-6">
                  <label for="parent_id">{{ $t('Parent Cost Center') }}</label>
                  <CostCenterSelect
                    v-model="form.parent_id"
                    :clearable="true"
                    :placeholder="$t('Select parent cost center (optional)')"
                    :class="{ 'is-invalid': form.errors.has('parent_id') }"
                  />
                  <has-error :form="form" field="parent_id" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="is_active">{{ $t('Status') }}</label>
                  <select id="is_active" v-model="form.is_active" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('is_active') }">
                    <option :value="true">{{ $t('Active') }}</option>
                    <option :value="false">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="is_active" />
                </div>
              </div>
            </div>
            <div class="card-footer">
              <v-button :loading="form.busy" type="success">
                <i class="fas fa-save" /> {{ $t('Save') }}
              </v-button>
              <button type="reset" class="btn btn-info" @click="form.reset()">
                <i class="fas fa-power-off" /> {{ $t('Reset') }}
              </button>
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
  name: 'CreateCostCenter',
  middleware: ['auth', 'check-permissions'],
  components: {
    CostCenterSelect
  },
  metaInfo() {
    return { title: this.$t('Create Cost Center') }
  },
  data() {
    return {
      breadcrumbsCurrent: 'cost_centers.create',
      breadcrumbs: [
        { name: 'Dashboard', url: '/' },
        { name: 'Cost Centers', url: '/cost-centers' },
        { name: 'Create', url: '' }
      ],
      form: new Form({
        code: '',
        name: '',
        name_en: '',
        parent_id: null,
        is_active: true
      })
    }
  },
  methods: {
    async saveCostCenter() {
      await this.form
        .post('/api/cost-centers')
        .then(({ data }) => {
          this.$toastr.s(this.$t('Cost center created successfully'))
          this.$router.push({ name: 'cost-centers.index' })
        })
        .catch(() => {
          this.$toastr.e(this.$t('Failed to create cost center'))
        })
    }
  }
}
</script>

