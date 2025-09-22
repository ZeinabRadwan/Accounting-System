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
                <router-link :to="{ name: 'transferBalances.index' }" class="btn btn-primary">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('cashbook.Back') }}
                </router-link>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="updateTransfer" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-12">
                  <label for="transferReason">{{ $t('cashbook.Transfer Reason') }}
                    <span class="required">*</span></label>
                  <input type="text" id="transferReason" v-model="form.transferReason" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('transferReason') }"
                    :placeholder="$t('cashbook.Enter a reason')" name="transferReason" />
                  <has-error :form="form" field="transferReason" />
                </div>
              </div>
              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="fromAccount">{{ $t('cashbook.From Account') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.fromAccount" :options="items" label="label"
                    :class="{ 'is-invalid': form.errors.has('fromAccount') }" name="fromAccount"
                    :placeholder="$t('cashbook.Select an account')" @input="updateBalance">
                     <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px;" />
                        {{ option.label }}
                    </template>
                  </v-select>
                  <has-error :form="form" field="fromAccount" />
                </div>
                <div class="form-group col-md-6">
                  <label for="toAccount">{{ $t('cashbook.To Account') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.toAccount" :options="items" label="label"
                    :class="{ 'is-invalid': form.errors.has('toAccount') }" name="toAccount"
                    :placeholder="$t('cashbook.Select an account')" disabled />
                  <has-error :form="form" field="toAccount" />
                </div>
              </div>
              <div class="row" v-if="form.fromAccount">
                <div class="form-group col-md-6">
                  <label for="availableBalance">{{
                    $t('cashbook.Available Balance')
                  }}</label>
                  <input id="availableBalance" v-model="form.availableBalance" type="number" step="any"
                    class="form-control" :class="{
                      'is-invalid': form.errors.has('availableBalance'),
                    }" name="availableBalance" readonly />
                  <has-error :form="form" field="availableBalance" />
                </div>
                <div class="form-group col-md-6">
                  <label for="amount">{{ $t('cashbook.Amount') }}
                    <span class="required">*</span></label>
                  <input id="amount" v-model="form.amount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('amount') }" name="amount"
                    :placeholder="$t('cashbook.Enter an amount')" :min="form.minBalance" />
                  <has-error :form="form" field="amount" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="date">{{ $t('cashbook.Date') }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div class="form-group col-md-6">
                  <label for="status">{{ $t('cashbook.Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">
                      {{ $t('cashbook.Active') }}
                    </option>
                    <option value="0">
                      {{ $t('cashbook.Inactive') }}
                    </option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>
              <div class="form-group">
                <label for="note">{{ $t('cashbook.Note') }}</label>
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
                    <i class="fas fa-edit" /> {{ $t('cashbook.Save changes') }}
                  </v-button>
                  <button type="reset" class="btn btn-secondary" @click="form.reset()">
                    <i class="fas fa-power-off" /> {{ $t('cashbook.Reset') }}
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
    return { title: this.$t('cashbook.Edit Balance Transfer') }
  },
  computed: {
    breadcrumbsCurrent() {
      return this.$t('cashbook.Edit Balance Transfer');
    },
    breadcrumbs() {
      return [
        {
          name: this.$t('Dashboard'),
          url: 'home',
        },
        {
          name: this.$t('Cashbook'),
          url: '',
        },
        {
          name: this.$t('cashbook.Balance Transfers'),
          url: 'transferBalances.index',
        },
        {
          name: this.$t('cashbook.Edit'),
        url: '',
      },
    ],
    form: new Form({
      fromAccount: null,
      toAccount: null,
      transferReason: '',
      availableBalance: 0,
      amount: '',
      minBalance: '',
      date: new Date().toISOString().slice(0, 10),
      note: '',
      status: 1,
    }),
    loading: true,
  }),
  computed: {
    ...mapGetters('operations', ['items']),
  },
  created() {
    this.getAccounts()
    this.getTransfer()
  },
  methods: {
    // get all accounts
    async getAccounts() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-accounts',
      })
    },

    // get the transfer
    async getTransfer() {
      const { data } = await axios.get(
        window.location.origin +
        '/api/balance-transfers/' +
        this.$route.params.slug
      )
      this.form.transferReason = data.data.reason
      this.form.fromAccount = data.data.fromAccount
      this.form.toAccount = data.data.toAccount
      this.form.availableBalance = data.data.fromAccount.availableBalance
      this.form.minBalance = data.data.fromAccount.amount
      this.form.amount = data.data.amount
      this.form.date = data.data.date
      this.form.note = data.data.note
      this.form.status = data.data.status
    },

    // update available balance
    updateBalance() {
      return (this.form.availableBalance =
        this.form.fromAccount.availableBalance)
    },

    // update transfer
    async updateTransfer() {
      await this.form
        .patch(
          window.location.origin +
          '/api/balance-transfers/' +
          this.$route.params.slug
        )
        .then(() => {
          toast.fire({
            type: 'success',
            title: this.$t('Transfer updated successfully'),
          })
          this.$router.push({ name: 'transferBalances.index' })
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
