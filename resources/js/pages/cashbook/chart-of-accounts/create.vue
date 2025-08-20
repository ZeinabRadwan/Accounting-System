<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">
              {{ $t('Create a chart of account') }}
            </h3>
            <router-link :to="{ name: 'chart-of-accounts.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
            </router-link>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="saveAccount" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">{{ $t('Account Name') }}
                    <span class="required">*</span></label>
                  <input id="name" v-model="form.name" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }" name="name"
                    :placeholder="$t('Enter account name')" />
                  <has-error :form="form" field="name" />
                </div>
                <div class="form-group col-md-6">
                  <label for="code">{{ $t('Account Code') }}
                    <span class="required">*</span></label>
                  <input id="code" v-model="form.code" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('code') }" name="code"
                    :placeholder="$t('Enter account code')" />
                  <has-error :form="form" field="code" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="type_id">{{ $t('Account Type') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.type_id" :options="accountTypes" label="name"
                    :class="{ 'is-invalid': form.errors.has('type_id') }" name="type_id"
                    :placeholder="$t('Select account type')" />
                  <has-error :form="form" field="type_id" />
                </div>
                <div class="form-group col-md-6">
                  <label for="parent_id">{{ $t('Parent Account') }}</label>
                  <v-select v-model="form.parent_id" :options="parentAccounts" label="name"
                    :class="{ 'is-invalid': form.errors.has('parent_id') }" name="parent_id"
                    :placeholder="$t('Select parent account (optional)')" />
                  <has-error :form="form" field="parent_id" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="order">{{ $t('Order') }}</label>
                  <input id="order" v-model="form.order" type="number" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('order') }" name="order"
                    :placeholder="$t('Enter display order')" />
                  <has-error :form="form" field="order" />
                </div>
                <div class="form-group col-md-6">
                  <label for="is_active">{{ $t('Status') }}</label>
                  <select id="is_active" v-model="form.is_active" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('is_active') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="is_active" />
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <v-button :loading="form.busy" class="btn btn-primary">
                <i class="fas fa-save" /> {{ $t('Save') }}
              </v-button>
              <button type="reset" class="btn btn-secondary float-right" @click="form.reset()">
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

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Create Chart of Account') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Create Chart of Account',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Cashbook',
        url: '',
      },
      {
        name: 'Chart of Accounts',
        url: 'chart-of-accounts.index',
      },
      {
        name: 'Create',
        url: '',
      },
    ],
    form: new Form({
      name: '',
      code: '',
      type_id: null,
      parent_id: null,
      order: '',
      is_active: 1,
    }),
    accountTypes: [],
    parentAccounts: [],
  }),

  async created() {
    await this.loadAccountTypes();
    await this.loadParentAccounts();
  },

  methods: {
    // load account types
    async loadAccountTypes() {
      try {
        const response = await this.$axios.get('/api/chart-of-account-types');
        this.accountTypes = response.data.data || [];
        console.log('Account Types loaded:', this.accountTypes);
      } catch (error) {
        console.error('Error loading account types:', error);
      }
    },

    // load parent accounts
    async loadParentAccounts() {
      try {
        const response = await this.$axios.get('/api/chart-of-accounts/all');
        this.parentAccounts = response.data.data || [];
        console.log('Parent Accounts loaded:', this.parentAccounts);
      } catch (error) {
        console.error('Error loading parent accounts:', error);
      }
    },

    // save chart of account
    async saveAccount() {
      // Extract IDs from the selected objects before sending
      const formData = {
        ...this.form.data(),
        type_id: this.form.type_id ? this.form.type_id.id : null,
        parent_id: this.form.parent_id ? this.form.parent_id.id : null,
      };

      await this.$axios.post('/api/chart-of-accounts', formData)
        .then(() => {
          toast.fire({
            type: 'success',
            title: this.$t('Chart of account added successfully'),
          })
          this.$router.push({ name: 'chart-of-accounts.index' })
        })
        .catch((error) => {
          console.error('Error saving:', error);
          toast.fire({ type: 'error', title: this.$t('Opps...something went wrong') })
        })
    },
  },
}
</script>
