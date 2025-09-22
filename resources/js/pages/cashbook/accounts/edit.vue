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
              <div class="btn-group c-w-100">
                <router-link :to="{ name: 'accounts.index' }" class="btn btn-primary">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t("cashbook.Back") }}
                </router-link>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="updateAccount" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-12">
                  <label for="bankName">{{ $t("cashbook.Bank Name") }}
                    <span class="required">*</span></label>
                  <input id="bankName" v-model="form.bankName" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('bankName') }" name="bankName"
                    :placeholder="$t('cashbook.Enter bank name')" />
                  <has-error :form="form" field="bankName" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="branchName">{{ $t('Branch Name') }}
                  </label>
                  <input id="branchName" v-model="form.branchName" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('branchName') }" name="branchName"
                    :placeholder="$t('Enter a branch name')" />
                  <has-error :form="form" field="branchName" />
                </div>
                <div class="form-group col-md-6">
                  <label for="accountNumber">{{ $t("cashbook.Account Number") }}
                    <span class="required">*</span></label>
                  <input id="accountNumber" v-model="form.accountNumber" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('accountNumber') }" name="accountNumber" :placeholder="$t('Enter an account number')
                      " />
                  <has-error :form="form" field="accountNumber" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="chartOfAccountId">{{ $t("cashbook.Chart of Accounts") }}
                    <span class="required">*</span></label>
                  <v-select
                    v-model="formattedChartOfAccountId"
                    :options="chartOfAccounts"
                    label="name"
                    :reduce="option => option.id"
                    track-by="id"
                    :class="{ 'is-invalid': form.errors.has('chartOfAccountId') }"
                    name="chartOfAccountId"
                    :placeholder="$t('cashbook.Select account type')"
                    :key="chartOfAccounts.length"
                  >
                    <template #option="{ name, code, type }">
                      <div>
                        <strong>{{ name }}</strong>
                        <br>
                        <small class="text-muted">{{ code }} - {{ type }}</small>
                      </div>
                    </template>
                  </v-select>
                  <!-- Debug information -->
                  <div v-if="selectedChartOfAccount" class="mt-2 text-muted small">
                    Selected: {{ selectedChartOfAccount.name }} (ID: {{ selectedChartOfAccount.id }})
                  </div>
                  <div v-else class="mt-2 text-muted small">
                    No chart of account selected. Current value: {{ formattedChartOfAccountId }}
                  </div>
                  <has-error :form="form" field="chartOfAccountId" />
                </div>
                <div class="form-group col-md-6">
                  <label for="image">{{ $t("Image") }}</label>
                  <div class="custom-file">
                    <input
                      id="image"
                      type="file"
                      class="custom-file-input"
                      name="image"
                      :class="{ 'is-invalid': form.errors.has('image') }"
                      @change="onFileChange"
                    />
                    <label class="custom-file-label" for="image">{{
                      $t("Choose file")
                    }}</label>
                  </div>
                  <has-error :form="form" field="image" />
                  <div class="bg-light mt-4 w-25">
                    <img
                      v-if="url"
                      :src="url"
                      class="img-fluid"
                      :alt="$t('Attached Image')"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="date">{{ $t("cashbook.Date") }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div class="form-group col-md-6">
                  <label for="status">{{ $t("cashbook.Status") }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t("cashbook.Active") }}</option>
                    <option value="0">{{ $t("cashbook.Inactive") }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>
              <div class="form-group">
                <label for="note">{{ $t("cashbook.Note") }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('cashbook.Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page">
                  <v-button :loading="form.busy" class="btn btn-primary">
                    <i class="fas fa-edit" /> {{ $t("cashbook.Save changes") }}
                  </v-button>
                  <button type="reset" class="btn btn-secondary" @click="form.reset()">
                    <i class="fas fa-power-off" /> {{ $t("cashbook.Reset") }}
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
import Swal from "sweetalert2"

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('cashbook.Edit Bank Account') }
  },
  data: () => ({
    form: new Form({
      accountLabel: '',
      bankName: '',
      branchName: '',
      accountNumber: '',
      date: '',
      image: '',
      note: '',
      status: 1,
      chartOfAccountId: '',
    }),
    url: null,
    loading: true,
    chartOfAccounts: [],
  }),

  computed: {
    breadcrumbs() {
      return [
        {
          name: this.$t("cashbook.Dashboard"),
          url: "home",
        },
        {
          name: this.$t("cashbook.Cashbook"),
          url: "",
        },
        {
          name: this.$t("cashbook.Bank Accounts"),
          url: "accounts.index",
        },
        {
          name: this.$t("cashbook.Edit"),
          url: "",
        },
      ];
    },
    breadcrumbsCurrent() {
      return this.$t("cashbook.Edit Bank Account");
    },
  },

  mounted() {
    this.loadChartOfAccounts()
  },

  watch: {
    'formattedChartOfAccountId': {
      handler(newVal, oldVal) {
        console.log('formattedChartOfAccountId changed from', oldVal, 'to', newVal)
      },
      deep: true
    },
    'chartOfAccounts': {
      handler(newVal) {
        if (newVal && newVal.length > 0) {
          // Load account data after chart of accounts are available
          this.getAccount()
        }
      },
      immediate: true
    }
  },

  computed: {
    selectedChartOfAccount() {
      if (!this.form.chartOfAccountId || !this.chartOfAccounts.length) return null
      return this.chartOfAccounts.find(coa => coa.id === this.form.chartOfAccountId)
    },
    
    // Ensure the chartOfAccountId is properly formatted
    formattedChartOfAccountId: {
      get() {
        return this.form.chartOfAccountId
      },
      set(value) {
        this.form.chartOfAccountId = value
      }
    }
  },

  methods: {
    // load chart of accounts
    async loadChartOfAccounts() {
      try {
        const response = await this.$axios.get('/api/accounts/chart-of-accounts')
        console.log('Full API response:', response)
        console.log('Response data:', response.data)
        this.chartOfAccounts = response.data.data || []
        console.log('Loaded chart of accounts:', this.chartOfAccounts)
        console.log('First chart of account structure:', this.chartOfAccounts[0])
      } catch (error) {
        console.error('Error loading chart of accounts:', error)
      }
    },
    // get account
    async getAccount() {
      const { data } = await axios.get(
        window.location.origin + '/api/accounts/' + this.$route.params.slug
      )
      console.log('Loaded account data:', data.data)
      this.form.accountLabel = data.data.accountLabel
      this.form.bankName = data.data.bankName
      this.form.branchName = data.data.branchName
      this.form.accountNumber = data.data.accountNumber
      this.form.date = data.data.date
      this.url = data.data.image
      this.form.note = data.data.note
      this.form.status = data.data.status
      
      // Fix: Set the chartOfAccountId to the ID value for proper v-select handling
      if (data.data.chartOfAccount && data.data.chartOfAccount.id) {
        this.form.chartOfAccountId = data.data.chartOfAccount.id
      } else {
        this.form.chartOfAccountId = null
      }
      console.log('Set chartOfAccountId to:', this.form.chartOfAccountId)
      
      // Ensure the v-select is properly updated
      this.$nextTick(() => {
        console.log('After nextTick - chartOfAccountId:', this.form.chartOfAccountId)
      })
    },
    // update account
    async updateAccount() {
      await this.form
        .patch(
          window.location.origin + '/api/accounts/' + this.$route.params.slug
        )
        .then(() => {
          toast.fire({
            type: 'success',
            title: this.$t('cashbook.Account updated successfully'),
          })
          this.$router.push({ name: 'accounts.index' })
        })
        .catch(() => {
          toast.fire({
            type: 'error',
            title: this.$t('cashbook.Opps...something went wrong'),
          })
        })
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
  background: #F1F5FB !important;
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
</style>

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
  background: #F1F5FB !important;
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
</style>
