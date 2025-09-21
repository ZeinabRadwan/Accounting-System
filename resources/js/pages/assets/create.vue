<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <router-link :to="{ name: 'assets.index' }" class="btn btn-primary">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" enctype="multipart/form-data" @submit.prevent="saveAsset" @keydown="form.onKeydown($event)">
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
                  <label for="depreciationType">{{ $t('Depreciation Type') }}
                    <span class="required">*</span></label>
                  <select id="depreciationType" v-model="form.depreciationType" class="form-control" :class="{
                    'is-invalid': form.errors.has('depreciationType'),
                  }" @change="calculateDepreciationExpense">
                    <option value="Month">{{ $t('Monthly') }}</option>
                    <option value="Year">{{ $t('Yearly') }}</option>
                  </select>
                  <has-error :form="form" field="depreciationType" />
                </div>
                <div class="form-group col-md-3">
                  <label for="salvageValue">{{ $t('Salvage Value') }}
                    <span class="required">*</span></label>
                  <input id="salvageValue" v-model="form.salvageValue" type="number" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('salvageValue') }" name="salvageValue" min="0"
                    :max="form.assetCost" :placeholder="$t('Salvage Value')"
                    @change="calculateDepreciationExpense" @keyup="calculateDepreciationExpense" />
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
                <div class="form-group row display-per-page">
                  <v-button :loading="form.busy" class="btn btn-primary">
                    <i class="fas fa-save" /> {{ $t('Save') }}
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
import { mapGetters } from 'vuex'
import Form from 'vform'
export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Create Asset') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Create Asset',
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
        name: 'Create',
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
      dailyDepreciation: 0,
      image: '',
      date: new Date().toISOString().slice(0, 10),
      note: '',
      status: 1,
    }),
    url: null,
  }),
  computed: {
    ...mapGetters('operations', ['items']),
  },
  created() {
    this.getCatgories()
  },
  methods: {
    // get all product categories
    async getCatgories() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-asset-types',
      })
    },

    // claculate depreciation expense
    calculateDepreciationExpense() {
      if (
        this.form.depreciation == 1 &&
        this.form.assetCost &&
        this.form.usefulLife
      ) {
        let depreciationExpense =
          (this.form.assetCost - this.form.salvageValue) / this.form.usefulLife
        return (this.form.depreciationExpense =
          Number(depreciationExpense.toFixed(2)) +
          ' Per ' +
          this.form.depreciationType)
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
        Swal.fire(
          this.$t('Error!'),
          this.$t('Please select a valid thumbnail with size less than 2 MB'),
          'error'
        )
      }
    },
    // save asset
    async saveAsset() {
      await this.form
        .post(window.location.origin + '/api/assets')
        .then(() => {
          toast.fire({
            type: 'success',
            title: this.$t('Asset added successfully'),
          })
          this.$router.push({ name: 'assets.index' })
        })
        .catch(() => {
          toast.fire({ type: 'error', title: this.$t('Opps...something went wrong') })
        })
    },
  },
}
</script>

<style scoped>
/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}

/* Restore full border radius for buttons inside the group */
.btn-group.c-w-100 > .btn {
  border-radius: 10px !important;
}
.btn-group.c-w-100 > .btn:first-child {
  border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}
.btn-group.c-w-100 > .btn:last-child {
  border-top-left-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
}

.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
}

.card-header {
  background-color: white;
  border-bottom: 1px solid #CED4DA;
  padding: 1.25rem 1.25rem 0 1.25rem;
  border-radius: 20px 20px 0 0;
}

.card-body {
  padding: 1.25rem;
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Form Control Styling */
.form-control {
  background: #F1F5FB !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 14px;
}

.form-control:focus {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

/* Form Group Labels */
.form-group label {
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  display: block;
}

.required {
  color: #DC3545;
  font-weight: bold;
}

/* Button Styling */
.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border-radius: 10px !important;
  border: none !important;
  font-weight: 500;
}

.btn-primary:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;
  border-radius: 10px !important;
  border: none !important;
  font-weight: 500;
  margin-right: 10px;
}

.btn-secondary:hover {
  background: #2a8bc4 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.3);
}

/* Invalid Form Control */
.is-invalid {
  border-color: #DC3545 !important;
}

/* Textarea Styling */
textarea.form-control {
  min-height: 100px;
  resize: vertical;
}

/* Custom File Input Styling */
.custom-file-input {
  background: #F1F5FB !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
}

.custom-file-label {
  background: #F1F5FB !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
  color: #374151;
  font-weight: 500;
}

.custom-file-label::after {
  background: #33a0d9;
  border-radius: 0 10px 10px 0;
  color: white;
  font-weight: 500;
}

/* Image Preview Styling */
.bg-light {
  background-color: #F8F9FA !important;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #E5E7EB;
}

/* V-Select Styling */
.v-select {
  background: #F1F5FB !important;
}

.v-select .vs__dropdown-toggle {
  background: #F1F5FB !important;
  border: 1px solid #E5E7EB !important;
  border-radius: 10px !important;
  padding: 10px 16px !important;
}

.v-select .vs__dropdown-toggle:focus {
  border-color: #33a0d9 !important;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25) !important;
}

.v-select.is-invalid .vs__dropdown-toggle {
  border-color: #DC3545 !important;
}

/* Row Spacing */
.row {
  margin-bottom: 1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-footer {
    flex-direction: column;
    gap: 10px;
  }
  
  .card-footer .btn {
    width: 100%;
    margin-right: 0 !important;
  }
  
  .card-footer div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
