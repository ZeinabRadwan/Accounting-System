<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
          </div>
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-md-3">
                <card :title="$t('Billing Settings')" class="settings-card">
                  <ul class="nav flex-column nav-pills m-1">
                    <li v-for="tab in tabs" :key="tab.route" class="nav-item">
                      <router-link :to="{ name: tab.route }" class="nav-link" active-class="active" v-if="$can(tab.permission)">
                        <i class="mr-2" :class="tab.icon"></i>
                        {{ tab.name }}
                      </router-link>
                    </li>
                  </ul>
                </card>
              </div>
              <div class="col-md-9">
                <transition name="fade" mode="out-in">
                  <router-view />
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  middleware: ['auth', 'check-permissions'],

  metaInfo() {
    return { title: this.$t('Billing Settings') }
  },

  data: () => ({
    breadcrumbsCurrent: 'Billing Settings',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Billing Settings',
        url: '',
      },
    ]
  }),

  computed: {
    tabs() {
      return [
        {
          icon: "fas fa-user",
          name: this.$t('profile'),
          route: 'settings.profile',
          permission: 'update-profile',
        },
        {
          icon: "fas fa-money-bill",
          name: this.$t('Billing Settings'),
          route: 'settings.billing',
          permission: 'billing',
        },
        {
          icon: "fas fa-file-invoice",
          name: this.$t('Payments'),
          route: 'settings.billing.payments',
          permission: 'billing',
        },
        {
          icon: "fas fa-paper-plane",
          name: this.$t('Subscription Requests'),
          route: 'settings.billing.subscription-requests',
          permission: 'billing',
        },
      ]
    }
  }
}
</script>

<style>
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

.settings-card .card-header {
  border-bottom: 1px solid#ddd;

}

.settings-card .card-body {
  padding: 10px;
}

.settings-card .nav-pills .nav-link,
.settings-card .nav-tabs .nav-link {
  justify-content: flex-start;
}

.settings-card .nav-pills .nav-link.active,
.settings-card .nav-pills .show>.nav-link {
  color: #33a0d9;
  background-color: #33a0d959;
}


.settings-card .nav-pills .nav-link {
  display: flex;
  align-items: center;
}

.settings-card .nav-pills .nav-link svg {
  width: 12px;
  margin-right: 6px;
  height: 12px;
}

.settings-card .nav.flex-column:not(.nav-sidebar)>li {
  border-bottom: none !important;
}

.setings-header {
  padding: 13px 20px;
  border-bottom: 0px;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.setings-header h3 {
  margin-top: 0px;
}

.trial-block {
  display: flex;
  align-items: center;
  background: #33a0d9;
  padding: 15px;
  border-radius: 5px;
  color: #fff;
}

.trial-block svg {
  width: 80px;
  margin-right: 10px;
  color: #c9cafa;
}

.trial-block div h4 {
  margin-bottom: 0px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
}

.trial-block div p {
  margin-bottom: 0px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 4px;
  margin-bottom: -3px;
}

.trial-block div small {
  color: #edc1c7;
}
</style>

<style>
.dtable-footer {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding: 0 0 0 10px;
    flex-direction: column;
}
.card-footer .form-group.row.display-per-page {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    width: 100%;
    align-items: center;
}
</style>

