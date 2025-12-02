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
                <button type="submit" class="btn btn-success" :form="'costCenterForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <form id="costCenterForm" role="form" @submit.prevent="updateCostCenter" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="code">{{ $t('Code') }} <span class="required">*</span></label>
                  <input id="code" v-model="form.code" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('code') }" name="code" required />
                  <has-error :form="form" field="code" />
                </div>
                <div class="form-group col-md-6">
                  <label for="name_ar">{{ $t('Name (Arabic)') }} <span class="required">*</span></label>
                  <input id="name_ar" v-model="form.name" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }" name="name" required />
                  <has-error :form="form" field="name" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name_en">{{ $t('Name (English)') }}</label>
                  <input id="name_en" v-model="form.name_en" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name_en') }" name="name_en" />
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
                  <select id="is_active" v-model="form.is_active" class="form-control">
                    <option :value="true">{{ $t('Active') }}</option>
                    <option :value="false">{{ $t('Inactive') }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <v-button :loading="form.busy" type="success">
                <i class="fas fa-save" /> {{ $t('Update') }}
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
  name: 'EditCostCenter',
  middleware: ['auth', 'check-permissions'],
  components: {
    CostCenterSelect
  },
  metaInfo() {
    return { title: this.$t('Edit Cost Center') }
  },
  data() {
    return {
      breadcrumbsCurrent: 'cost_centers.edit',
      breadcrumbs: [
        { name: 'Dashboard', url: '/' },
        { name: 'Cost Centers', url: '/cost-centers' },
        { name: 'Edit', url: '' }
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
  created() {
    this.getCostCenter()
  },
  methods: {
    async getCostCenter() {
      await this.$http
        .get(`/api/cost-centers/${this.$route.params.slug}`)
        .then(response => {
          const costCenter = response.data && response.data.data ? response.data.data : null

          if (!costCenter) {
            return
          }

          this.form.fill({
            code: costCenter.code,
            name: costCenter.name,
            name_en: costCenter.name_en,
            parent_id: costCenter.parent_id,
            is_active: !!costCenter.is_active
          })
        })
    },
    async updateCostCenter() {
      await this.form
        .put(`/api/cost-centers/${this.$route.params.slug}`)
        .then(({ data }) => {
          this.$toastr.s(this.$t('Cost center updated successfully'))
          this.$router.push({ name: 'cost-centers.index' })
        })
        .catch(() => {
          this.$toastr.e(this.$t('Failed to update cost center'))
        })
    }
  }
}
</script>

