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
              {{ $t('Edit Chart of Account') }}
            </h3>
            <router-link :to="{ name: 'chart-of-accounts.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
            </router-link>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="updateAccount" @keydown="form.onKeydown($event)">
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
                <i class="fas fa-edit" /> {{ $t('Save changes') }}
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

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Edit Chart of Account') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Edit Chart of Account',
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
        name: 'Edit',
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
    await this.getAccount();
  },

  methods: {
    // load account types
    async loadAccountTypes() {
      try {
        const response = await this.$axios.get('/api/chart-of-account-types');
        this.accountTypes = response.data.data || [];
      } catch (error) {
        console.error('Error loading account types:', error);
      }
    },

    // load parent accounts
    async loadParentAccounts() {
      try {
        const response = await this.$axios.get('/api/chart-of-accounts/all');
        this.parentAccounts = response.data.data || [];
      } catch (error) {
        console.error('Error loading parent accounts:', error);
      }
    },

    // get account data
    async getAccount() {
      try {
        const response = await this.$axios.get(`/api/chart-of-accounts/${this.$route.params.slug}`);
        const account = response.data.data;
        
        console.log('Account data received:', account); // Debug log
        
        // Set form data
        this.form.name = account.name || '';
        this.form.code = account.code || '';
        this.form.order = account.order || '';
        
        // Handle is_active status - ensure it's a boolean/number
        if (account.is_active !== null && account.is_active !== undefined) {
          this.form.is_active = account.is_active ? 1 : 0;
        } else {
          this.form.is_active = 1; // Default to active if null/undefined
        }
        
        console.log('Form is_active set to:', this.form.is_active); // Debug log
        
        // Set type_id (find the type object from accountTypes array)
        if (account.type_id) {
          const type = this.accountTypes.find(t => t.id === account.type_id);
          this.form.type_id = type || null;
        }
        
        // Set parent_id (find the parent object from parentAccounts array)
        if (account.parent_id) {
          const parent = this.parentAccounts.find(p => p.id === account.parent_id);
          this.form.parent_id = parent || null;
        }
        
        console.log('Form data after population:', this.form.data()); // Debug log
      } catch (error) {
        console.error('Error loading account:', error);
      }
    },

    // update chart of account
    async updateAccount() {
      try {
        // Extract IDs from the selected objects before sending
        const formData = {
          ...this.form.data(),
          type_id: this.form.type_id ? this.form.type_id.id : null,
          parent_id: this.form.parent_id ? this.form.parent_id.id : null,
        };

        console.log('Sending update data:', formData);

        const response = await this.$axios.put(`/api/chart-of-accounts/${this.$route.params.slug}`, formData);
        
        // Check if the response indicates success
        if (response.status === 200 || response.status === 201) {
          // Show success message
          toast.fire({
            icon: 'success',
            title: this.$t('Chart of account updated successfully'),
            showConfirmButton: false,
            timer: 2000
          });
          
          // Wait a moment for the toast to show, then redirect
          setTimeout(() => {
            this.$router.push({ name: 'chart-of-accounts.index' });
          }, 1000);
        } else {
          throw new Error('Update failed');
        }
        
      } catch (error) {
        console.error('Error updating:', error);
        
        // Handle validation errors from the response
        if (error.response && error.response.data && error.response.data.errors) {
          this.form.errors.set(error.response.data.errors);
        }
        
        // Show error message
        toast.fire({
          icon: 'error',
          title: error.response?.data?.message || this.$t('Opps...something went wrong'),
          showConfirmButton: false,
          timer: 3000
        });
      }
    },
  },
}
</script>
