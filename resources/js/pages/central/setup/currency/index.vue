<template>
    <div>
        <!-- breadcrumbs Start -->
        <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
        <!-- breadcrumbs end -->

        <div class="row">
            <div class="col-12 col-xl-3">
                <SettingsSidebar />
            </div>
            <div class="col-12 col-xl-9">
                <div class="card">
                    <div class="card-header setings-header">
                        <div class="col-xl-4 col-4">
                            <h3 class="card-title">
                                {{
                                    $t(
                                'Currency Settings'
                                )
                                }}
                            </h3>
                        </div>
                        <div class="col-xl-8 col-8 float-right text-right">
                            <div class="btn-group">
                                <router-link :to="{ name: 'currency.create' }" class="btn btn-primary">
                                    {{ $t('Create') }}
                                    <i class="fas fa-plus-circle d-none d-sm-inline-block" />
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <table-loading v-show="loading" />
                        <GeneralTable
                          :columns="currencyColumns"
                          :rows="currenciesWithIndex"
                          :loading="loading"
                          table-id="printMe"
                          wrapper-class="mt-3"
                          :show-actions="true"
                        >
                          <template #cell-code="{ row }">
                            <span class="text-uppercase">{{ row.code }}</span>
                          </template>
                          <template #cell-preview="{ row }">
                            <span v-if="row.position === 'left'">
                              {{ row.symbol }}0.00
                            </span>
                            <span v-else>0.00{{ row.symbol }}</span>
                          </template>
                          <template #cell-status="{ row }">
                            <span v-if="row.status === 1" class="badge bg-success">{{ $t("Active") }}</span>
                            <span v-else class="badge bg-danger">{{ $t("Inactive") }}</span>
                          </template>
                          <template #actions="{ row }">
                            <div class="btn-group">
                              <router-link v-tooltip="$t('Edit')" :to="{
                                name: 'currency.edit',
                                params: { slug: row.slug },
                              }" class="btn btn-info btn-sm">
                                <i class="fas fa-edit" />
                              </router-link>
                              <!-- Payment method's currency can not be deleted -->
                              <a v-if="appInfo.currency.symbol != row.symbol && row.code != 'NGN' && row.code != 'usd'"
                                v-tooltip="$t('Delete')" href="#" class="btn btn-danger btn-sm"
                                @click="deleteData(row.slug)">
                                <i class="fas fa-trash" />
                              </a>
                            </div>
                          </template>
                        </GeneralTable>
                    </div>
                    <div class="card-footer">
                        <div class="dtable-footer">
                            <div class="form-group row display-per-page">
                                <label>{{ $t('per_page') }} </label>
                                <div>
                                    <select @change="updatePerPager" v-model="perPage"
                                        class="form-control form-control-sm ml-1">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>
                            </div>
                            <!-- pagination-start -->
                            <pagination v-if="pagination && pagination.last_page > 1" :pagination="pagination"
                                :offset="5" class="justify-flex-end" @paginate="paginate" />
                            <!-- pagination-end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SettingsSidebar from '~/components/central/SettingsSidebar';
import GeneralTable from '../../../../components/GeneralTable.vue';

export default {
    layout: 'central',
    middleware: ['auth', 'check-permissions'],
    metaInfo() {
        return {
            title: this.$t('Currency Settings'),
        };
    },
    components: {
        SettingsSidebar,
        GeneralTable,
    },
    data: () => ({
        breadcrumbsCurrent:
            'Currency Settings',
        breadcrumbs: [
            {
                name: 'Dashboard',
                url: 'home',
            },
            {
                name: 'Setup',
                url: 'setup.index',
            },
            {
                name: 'Currency Settings',
                url: '',
            },
        ],
        query: '',
        perPage: 10,
        developer: false,
    }),

    // Map Getters
    computed: {
        ...mapGetters('operations', ['appInfo', 'items', 'loading', 'pagination']),
        currencyColumns() {
            return [
                { key: "index", label: this.$t("#"), sortable: false },
                { key: "name", label: this.$t("Name") },
                { key: "code", label: this.$t("Code") },
                { key: "rate", label: this.$t("Rate") },
                { key: "symbol", label: this.$t("Symbol") },
                { key: "position", label: this.$t("Position") },
                { key: "preview", label: this.$t("Preview") },
                { key: "status", label: this.$t("Status") },
            ];
        },
        currenciesWithIndex() {
            return this.items.map((item, index) => ({
                ...item,
                index: this.pagination.current_page > 1
                    ? this.pagination.per_page * (this.pagination.current_page - 1) + (index + 1)
                    : index + 1,
            }));
        },
    },

    created() {
        this.getData();
        Fire.$on('AfterDelete', () => {
            this.getData();
        });
    },

    methods: {
        // get data
        async getData() {
            this.$store.state.operations.loading = true;
            let currentPage = this.pagination
                ? this.pagination.current_page
                : 1;
            await this.$store.dispatch('operations/fetchData', {
                path: '/api/currencies?page=',
                currentPage: currentPage + '&perPage=' + this.perPage,
            });
        },

        // Pagination
        async paginate() {
            this.query === '' ? this.getData() : this.searchData();
        },

        // update per page count
        updatePerPager() {
            this.pagination.current_page = 1;
            this.query === '' ? this.getData() : this.searchData();
        },

        // print table
        async print() {
            await this.$htmlToPaper("printMe");
        },

        // delete data
        async deleteData(slug) {
            Swal.fire({
                title: this.$t("Are you sure?"),
                text: this.$t("You will not be able to return to this!"),
                type: "warning",
                showCancelButton: true,
                confirmButtonText: this.$t("Confirm"), cancelButtonText: this.$t("Cancel"),
            }).then((result) => {
                // Send request to the server
                if (result.value) {
                    this.$store
                        .dispatch("operations/deleteData", {
                            path: "/api/currencies/",
                            slug: slug,
                        })
                        .then((response) => {
                            if (response === true) {
                                this.$toast.success(
                                    this.$t("Deleted!"),
                                    this.$t("Deleted successfully.")
                                );
                            } else {
                                this.$toast.warning(
                                    this.$t("Failed!"),
                                    this.$t("There was something wrong.")
                                );
                            }
                        });
                }
            });
        },
    },
};
</script>

<style scoped>
.profile_wrap {
    display: flex;
    align-items: center;
}

.profile_wrap img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 10px;
}

.table th,
.table td {
    vertical-align: middle;
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
