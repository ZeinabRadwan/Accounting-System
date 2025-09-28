<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'assets.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="button" class="btn btn-success" @click="saveTemporary" :title="$t('Save Temporarily')">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->

          <!-- form start -->
          <form role="form" enctype="multipart/form-data" @submit.prevent="updateAsset" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">{{ $t('Asset Name') }}
                    <span class="required">*</span></label>
                  <input id="name" v-model="form.name" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }" name="name"
                    :placeholder="$t('Enter asset name')" />
                  <has-error :form="form" field="name" />
                </div>
                <div v-if="items" class="form-group col-md-6">
                  <label for="assetType">{{ $t('Asset Type') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.assetType" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('assetType') }" name="assetType"
                    :placeholder="$t('Select an asset type')" />
                  <has-error :form="form" field="assetType" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="assetCost">{{ $t('Asset Cost') }}
                    <span class="required">*</span></label>
                  <input id="assetCost" v-model="form.assetCost" type="number" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('assetCost') }" name="assetCost"
                    :placeholder="$t('Enter asset cost')" @change="calculateDepreciationExpense"
                    @keyup="calculateDepreciationExpense" />
                  <has-error :form="form" field="assetCost" />
                </div>
                <div class="form-group col-md-6">
                  <label for="depreciation">{{ $t('Depreciation') }}
                    <span class="required">*</span></label>
                  <select id="depreciation" v-model="form.depreciation" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('depreciation') }">
                    <option value="1">{{ $t('Yes') }}</option>
                    <option value="0">{{ $t('No') }}</option>
                  </select>
                  <has-error :form="form" field="depreciation" />
                </div>
              </div>
              <div v-if="form.depreciation == 1" class="row">
                <div class="form-group col-md-3">
                  <label for="depreciationType">{{
                    $t('Depreciation Type')
                  }}</label>
                  <select id="depreciationType" v-model="form.depreciationType" class="form-control" :class="{
                    'is-invalid': form.errors.has('depreciationType'),
                  }" @change="calculateDepreciationExpense">
                    <option value="Month">{{ $t('Monthly') }}</option>
                    <option value="Year">{{ $t('Yearly') }}</option>
                  </select>
                  <has-error :form="form" field="depreciationType" />
                </div>
                <div class="form-group col-md-3">
                  <label for="salvageValue">{{
                    $t('Salvage Value')
                  }}</label>
                  <input id="salvageValue" v-model="form.salvageValue" type="number" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('salvageValue') }" name="salvageValue"
                    :placeholder="$t('Salvage Value')" @change="calculateDepreciationExpense"
                    @keyup="calculateDepreciationExpense" />
                  <has-error :form="form" field="salvageValue" />
                </div>
                <div class="form-group col-md-3">
                  <label for="usefulLife">{{ $t('Useful Life') }}
                    <span class="required">*</span></label>
                  <input id="usefulLife" v-model="form.usefulLife" type="number" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('usefulLife') }" name="usefulLife"
                    :placeholder="$t('Enter useful life')" @change="calculateDepreciationExpense"
                    @keyup="calculateDepreciationExpense" />
                  <has-error :form="form" field="usefulLife" />
                </div>
                <div class="form-group col-md-3">
                  <label for="depreciationExpense">{{
                    $t('Depreciation')
                  }}</label>
                  <input id="depreciationExpense" v-model="form.depreciationExpense" type="text" class="form-control"
                    name="depreciationExpense" readonly />
                </div>
              </div>

              <div class="form-group">
                <label for="note">{{ $t('Note') }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
              <div class="row">
                <div class="form-group col-md-3">
                  <label for="date">{{ $t('Date') }}
                    <span class="required">*</span></label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div class="form-group col-md-3">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
                <div class="form-group col-md-6">
                  <label for="image">{{ $t('Image') }}</label>
                  <div class="custom-file">
                    <input id="image" type="file" class="custom-file-input" name="image"
                      :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange" />
                    <label class="custom-file-label" for="image">{{
                      $t('Choose file')
                    }}</label>
                  </div>
                  <has-error :form="form" field="image" />
                  <div class="bg-light mt-4 w-25">
                    <img v-if="url" :src="url" class="img-fluid" :alt="$t('Attached Image')" />
                  </div>
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                  <v-button :loading="form.busy" type="success">
                    <i class="fas fa-edit" /> {{ $t('Save changes') }}
                  </v-button>
                  <button type="reset" class="btn btn-secondary" @click="form.reset()">
                    <i class="fas fa-power-off" /> {{ $t('Reset') }}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
import { mapGetters } from 'vuex'


export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Edit Asset') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Edit Asset',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Assets',
        url: 'assets.index',
      },
      {
        name: 'Edit',
        url: '',
      },
    ],
    form: new Form({
      name: '',
      assetCost: '',
      assetType: null,
      depreciation: 0,
      salvageValue: 0,
      usefulLife: 0,
      depreciationExpense: '',
      depreciationType: 'Year',
      image: '',
      date: new Date().toISOString().slice(0, 10),
      note: '',
      status: 1,
    }),
    loading: true,
    url: null,
  }),
  computed: {
    ...mapGetters('operations', ['items']),
  },
  created() {
    this.getAsset()
    this.getTypes()
  },
  mounted() {
    this.loadTemporaryData()
  },
  methods: {
    // get all types
    async getTypes() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-asset-types',
      })
    },
    // get asset
    async getAsset() {
      const { data } = await axios.get(
        window.location.origin + '/api/assets/' + this.$route.params.slug
      )
      this.form.name = data.data.name
      this.form.assetCost = data.data.amount
      this.form.note = data.data.note
      this.form.status = data.data.status
      this.form.assetType = data.data.type
      this.form.date = data.data.date
      this.form.depreciation = data.data.depreciation
      this.form.salvageValue =
        data.data.salvageValue > 0 ? data.data.salvageValue : 0
      this.form.usefulLife = data.data.usefulLife
      this.form.depreciationType =
        data.data.depreciationType == 1 ? 'Year' : 'Month'
      this.form.depreciationExpense = data.data.depreciationExpenseTxt
      this.url = data.data.image
    },

    // calculate depreciation expense
    calculateDepreciationExpense() {
      if (
        this.form.depreciation == 1 &&
        this.form.assetCost &&
        this.form.usefulLife
      ) {
        let depreciationExpense =
          (this.form.assetCost - this.form.salvageValue) / this.form.usefulLife
        return (this.form.depreciationExpense =
          depreciationExpense + ' Per ' + this.form.depreciationType)
      }
      return
    },

    // vue file upload
    onFileChange(e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      if (
        file.size < 2111775 &&
        (file.type === 'image/jpeg' ||
          file.type === 'image/png' ||
          file.type === 'image/gif')
      ) {
        reader.onloadend = () => {
          this.form.image = reader.result
        }
        reader.readAsDataURL(file)
        this.url = URL.createObjectURL(file)
      } else {
        this.$toast.error(
          this.$t('Error!'),
          this.$t('Please select a valid thumbnail with size less than 2 MB')
        )
      }
    },
    // update asset
    async updateAsset() {
      await this.form
        .patch(
          window.location.origin + '/api/assets/' + this.$route.params.slug
        )
        .then(() => {
          // Clear temporary data after successful save
          this.clearTemporaryData()
          toast.fire({
            type: 'success',
            title: this.$t('Asset updated successfully'),
          })
          this.$router.push({ name: 'assets.index' })
        })
        .catch(() => {
          toast.fire({
            type: 'error',
            title: this.$t('Please check your input and try again.'),
          })
        })
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        name: this.form.name,
        assetCost: this.form.assetCost,
        assetType: this.form.assetType,
        depreciation: this.form.depreciation,
        salvageValue: this.form.salvageValue,
        usefulLife: this.form.usefulLife,
        depreciationExpense: this.form.depreciationExpense,
        depreciationType: this.form.depreciationType,
        image: this.form.image,
        date: this.form.date,
        note: this.form.note,
        status: this.form.status,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('assetEditTempData', JSON.stringify(tempData))
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('assetEditTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.name = data.name || this.form.name
          this.form.assetCost = data.assetCost || this.form.assetCost
          this.form.assetType = data.assetType || this.form.assetType
          this.form.depreciation = data.depreciation !== undefined ? data.depreciation : this.form.depreciation
          this.form.salvageValue = data.salvageValue || this.form.salvageValue
          this.form.usefulLife = data.usefulLife || this.form.usefulLife
          this.form.depreciationExpense = data.depreciationExpense || this.form.depreciationExpense
          this.form.depreciationType = data.depreciationType || this.form.depreciationType
          this.form.image = data.image || this.form.image
          this.form.date = data.date || this.form.date
          this.form.note = data.note || this.form.note
          this.form.status = data.status !== undefined ? data.status : this.form.status
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('assetEditTempData')
    },
  },
}
</script>

<style scoped>
/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}

/* Header buttons styling */
.header-buttons {
  margin-bottom: 15px;
}

/* Footer buttons styling */
.footer-buttons {
  gap: 10px;
  display: flex;
}

.footer-buttons .btn {
  margin-right: 10px;
}

.footer-buttons .btn:last-child {
  margin-right: 0;
}


.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Search Input Background Override */
.form-control{
  background: #fff !important;
}

.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}
</style>
/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}

/* Header buttons styling */
.header-buttons {
  margin-bottom: 15px;
}

/* Footer buttons styling */
.footer-buttons {
  gap: 10px;
  display: flex;
}

.footer-buttons .btn {
  margin-right: 10px;
}

.footer-buttons .btn:last-child {
  margin-right: 0;
}


.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Search Input Background Override */
.form-control{
  background: #fff !important;
}

.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}
</style>
