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
                <router-link :to="{ name: 'balances.index' }" class="btn btn-primary">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t("cashbook.Back") }}
                </router-link>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="updateAccount" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="account">{{ $t("cashbook.Account") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.account" :options="items" label="label"
                    :class="{ 'is-invalid': form.errors.has('account') }" name="account"
                    :placeholder="$t('cashbook.Select an account')" disabled />
                  <has-error :form="form" field="account" />
                </div>
                <div class="form-group col-md-6">
                  <label for="type">{{ $t("cashbook.Type") }}</label>
                  <select id="type" v-model="form.type" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('type') }">
                    <option value="1">
                      {{ $t("cashbook.Add Balance") }}
                    </option>
                    <option value="0">
                      {{ $t("cashbook.Remove Balance") }}
                    </option>
                  </select>
                  <has-error :form="form" field="type" />
                </div>
              </div>
              <div class="row" v-if="form.account">
                <div class="form-group col-md-6">
                  <label for="availableAmount">{{
                    $t("cashbook.Available Balance")
                  }}</label>
                  <input id="availableAmount" v-model="form.account.availableBalance" type="number" step="any"
                    class="form-control" name="availableAmount" readonly />
                </div>
                <div class="form-group col-md-6">
                  <label for="amount">{{ $t("cashbook.Amount") }}
                    <span class="required">*</span></label>
                  <input id="amount" v-model="form.amount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('amount') }" name="amount"
                    :placeholder="$t('cashbook.Enter an amount')" :min="form.currentAmount" :max="form.type == 0
                      ? form.account.availableBalance + form.currentAmount
                      : ''
                      " />
                  <has-error :form="form" field="amount" />
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
                    <option value="1">
                      {{ $t("cashbook.Active") }}
                    </option>
                    <option value="0">
                      {{ $t("cashbook.Inactive") }}
                    </option>
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
    return { title: this.$t('cashbook.Edit Balance') }
  },
  data: () => ({
    form: new Form({
      account: null,
      type: 0,
      amount: '',
      currentAmount: '',
      date: '',
      note: '',
      status: 1,
    }),
    loading: true,
  }),
  computed: {
    ...mapGetters('operations', ['items']),
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
          name: this.$t("cashbook.Adjustments"),
          url: "balances.index",
        },
        {
          name: this.$t("cashbook.Edit"),
          url: "",
        },
      ];
    },
    breadcrumbsCurrent() {
      return this.$t("cashbook.Edit Balance");
    },
  },
  mounted() {
    this.getTransaction()
    this.getAccounts()
  },
  methods: {
    // get all accounts
    async getAccounts() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-accounts',
      })
    },
    // get transaction
    async getTransaction() {
      const { data } = await axios.get(
        window.location.origin + '/api/balances/' + this.$route.params.slug
      )
      this.form.account = data.data.account
      this.form.type = data.data.type
      this.form.amount = data.data.amount
      this.form.currentAmount = data.data.amount
      this.form.date = data.data.transactionDate
      this.form.note = data.data.note
      this.form.status = data.data.status
    },
    // update balance
    async updateAccount() {
      await this.form
        .patch(
          window.location.origin + '/api/balances/' + this.$route.params.slug
        )
        .then(() => {
          toast.fire({
            type: 'success',
            title: this.$t('cashbook.Balance updated successfully'),
          })
          this.$router.push({ name: 'balances.index' })
        })
        .catch(() => {
          toast.fire({
            type: 'error',
            title: this.$t('cashbook.Opps...something went wrong'),
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
