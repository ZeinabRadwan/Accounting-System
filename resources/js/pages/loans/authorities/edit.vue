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
                <router-link :to="{ name: 'authorities.index' }" class="btn btn-primary">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="updateAuthority" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-12">
                  <label for="name">{{ $t('Name') }}
                    <span class="required">*</span></label>
                  <input id="name" v-model="form.name" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }" name="name"
                    :placeholder="$t('Enter a name')" />
                  <has-error :form="form" field="name" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="email">{{ $t('Email') }}</label>
                  <input id="email" v-model="form.email" type="email" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('email') }" name="email"
                    :placeholder="$t('Enter your email address')" />
                  <has-error :form="form" field="email" />
                </div>
                <div class="form-group col-md-6">
                  <label for="contactNumber">{{ $t('Contact Number') }}
                    <span class="required">*</span></label>
                  <input id="contactNumber" v-model="form.contactNumber" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('contactNumber') }" name="contactNumber"
                    :placeholder="$t('Enter a contact number')" />
                  <has-error :form="form" field="contactNumber" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="ccLoanLimit">{{ $t('Cash Credit (CC) Loan Limit') }}
                    <span class="required">*</span></label>
                  <input id="ccLoanLimit" v-model="form.ccLoanLimit" type="number" step=".01" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('ccLoanLimit') }" name="ccLoanLimit"
                    :placeholder="$t('Enter cc loan limit')" :min="form.ccLoanTaken" />
                  <has-error :form="form" field="ccLoanLimit" />
                </div>
                <div class="form-group col-md-6">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="address">{{ $t('Address') }}</label>
                  <textarea id="address" v-model="form.address" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('address') }" name="address"
                    :placeholder="$t('Enter an address')" />
                  <has-error :form="form" field="address" />
                </div>
                <div class="form-group col-md-6">
                  <label for="note">{{ $t('Note') }}</label>
                  <textarea id="note" v-model="form.note" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                  <has-error :form="form" field="note" />
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page">
                  <v-button :loading="form.busy" class="btn btn-primary">
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

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Edit Loan Authority') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Edit Authority',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Loan Authorities',
        url: 'authorities.index',
      },
      {
        name: 'Edit',
        url: '',
      },
    ],
    form: new Form({
      name: '',
      email: '',
      contactNumber: '',
      ccLoanTaken: '',
      ccLoanLimit: '',
      address: '',
      note: '',
      status: 1,
    }),
    loading: true,
  }),

  mounted() {
    this.getCategory()
  },
  methods: {
    // get category
    async getCategory() {
      const { data } = await axios.get(
        window.location.origin +
        '/api/loan-authorities/' +
        this.$route.params.slug
      )
      this.form.name = data.data.name
      this.form.email = data.data.email
      this.form.contactNumber = data.data.contactNumber
      this.form.ccLoanLimit = data.data.ccLimit
      this.form.ccLoanTaken = data.data.ccLoanTaken
      this.form.address = data.data.address
      this.form.note = data.data.note
      this.form.status = data.data.status
    },
    // update category
    async updateAuthority() {
      await this.form
        .patch(
          window.location.origin +
          '/api/loan-authorities/' +
          this.$route.params.slug
        )
        .then(() => {
          toast.fire({
            type: 'success',
            title: this.$t('Loan authority updated successfully'),
          })
          this.$router.push({ name: 'authorities.index' })
        })
        .catch(() => {
          toast.fire({
            type: 'error',
            title: this.$t('Opps...something went wrong'),
          })
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
  border-radius: 10px !important;
  border: none !important;
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;
  border-radius: 10px !important;
  border: none !important;
}

.btn-secondary:hover {
  background: #2a8bc4 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.3);
}
</style>
