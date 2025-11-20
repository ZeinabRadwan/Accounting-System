<template>
    <div class="mb-50">
        <div class="card">
            <div class="card-header">
                <!-- breadcrumbs Start -->
                <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
                <!-- breadcrumbs end -->
                <h3 class="card-title">{{ $t('Supplier Payable Report') }}</h3>
                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-6 col-xl-4 mb-2">
                        <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group btn-group c-w-100">
                            <button type="button" @click="refreshTable()" class="btn refresh-btn">
                                <i class="fas fa-sync"></i> {{ $t('Refresh') }}
                            </button>
                            <a v-if="reportGenerated" :href="exportUrl" v-tooltip="$t('Export to Excel')" class="btn export-excel-btn ml-2">
                                <i class="fa fa-arrow-circle-down"></i>
                            </a>
                            <button v-if="reportGenerated" @click="previewPDF" v-tooltip="$t('Preview PDF')" class="btn preview-btn ml-2">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button v-if="reportGenerated" @click="downloadPDF" v-tooltip="$t('Export to PDF')" class="btn export-pdf-btn ml-2">
                                <i class="fas fa-file-export"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Report Results -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">{{ $t('Supplier Payable Report') }}</h3>
            </div>
            <div class="card-body position-relative">
                <div class="table-responsive table-custom mt-3" id="printMe">
                    <table class="table account-statement-table">
                                <thead>
                                        <th>{{ $t("#") }}</th>
                                        <th>{{ $t("Supplier ID") }}</th>
                                        <th>{{ $t("Name") }}</th>
                                        <th>{{ $t("Contact Number") }}</th>
                                        <th>{{ $t("Email") }}</th>
                                        <th>{{ $t("Company Name") }}</th>
                                        <th>{{ $t("Purchase Due") }}</th>
                                        <th>{{ $t("Non Purchase Due") }}</th>
                                        <th>{{ $t("Total Due") }}</th>
                                        <th>{{ $t("Status") }}</th>
                                </thead>
                                <tbody>

                                    <tr v-show="items.length" v-for="(data, i) in items" :key="i">
                                        <td>
                                            <span v-if="pagination && pagination.current_page > 1">
                                                {{
                                                    pagination.per_page * (pagination.current_page - 1) +
                                                    (i + 1)
                                                }}
                                            </span>
                                            <span v-else>{{ i + 1 }}</span>
                                        </td>
                                        <td>{{ data.supplierID | withPrefix(clientPrefix) }}</td>
                                        <td>
                                            <router-link v-if="$can('client-view')" :to="{
                                                name: 'suppliers.show',
                                                params: { slug: data.slug },
                                            }">
                                                {{ data.name }}
                                            </router-link>
                                            <span v-else>{{ data.name }}</span>
                                        </td>
                                        <td>{{ data.phoneNumber }}</td>
                                        <td>{{ data.email }}</td>
                                        <td>{{ data.companyName }}</td>
                                        <td>{{ data.purchaseTotalDue  }} <span class="saudi-riyal">ê</span></td>
                                        <td>{{ data.nonPurchaseCurrentDue  }} <span class="saudi-riyal">ê</span></td>
                                        <td>{{ data.purchaseTotalDue + data.nonPurchaseCurrentDue  }} <span class="saudi-riyal">ê</span></td>
                                        <td>
                                            <span v-if="data.status === 1" class="badge bg-success">{{
                                                $t("Active")
                                            }}</span>
                                            <span v-else class="badge bg-danger">{{
                                                $t("Inactive")
                                            }}</span>
                                        </td>
                                    </tr>
                                    <tr v-show="!loading && !items.length">
                                        <td colspan="9">
                                            <EmptyTable />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="dtable-footer">
                        <div class="form-group row display-per-page">
                            <label>{{ $t("per_page") }} </label>
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
                        <pagination v-if="pagination && pagination.last_page > 1" :pagination="pagination" :offset="5"
                            class="justify-flex-end" @paginate="paginate" />
                        <!-- pagination-end -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from "vuex";

export default {
    middleware: ["auth", "check-permissions"],
    metaInfo() {
        return { title: this.$t("Supplier Payable Report") };
    },
    data: () => ({

        breadcrumbsCurrent: "Supplier Payable Report",
        breadcrumbs: [
            {
                name: "Dashboard",
                url: "home",
            },
            {
                name: "Supplier Payable Report",
                url: "",
            },
        ],
        query: "",
        perPage: 10,
        supplierPrefix: "",
        reportGenerated: false,
    }),
    // Map Getters
    computed: {
        ...mapGetters("operations", ["items", "loading", "pagination", "appInfo"]),
        exportUrl() {
            // Create a dynamic export URL with query parameters
            return `/supplier-payable-report/export/excel?term=${this.query}`;
        },
        printTemplateUrl() {
            // Create a dynamic print template URL for supplier payable report
            const params = new URLSearchParams();
            
            // Always add token first if available
            const token = this.$store.getters['auth/token'];
            if (token) {
                params.append('token', token);
            }
            
            // Add query term if exists
            if (this.query) {
                params.append('term', this.query);
            }
            
            const queryString = params.toString();
            return `/print/reports/supplier-payable-report${queryString ? '?' + queryString : ''}`;
        },
    },
    watch: {
        // watch search data
        query: function (newQ) {
            if (newQ === "") {
                this.getData();
            } else {
                this.searchData();
            }
        },
    },
    created() {
        this.getData();
        this.clientPrefix = this.appInfo.clientPrefix;
    },
    methods: {

        // refresh table
        refreshTable() {
            this.query = "";
            this.query === "" ? this.getData() : this.searchData();
        },
        // update per page count
        updatePerPager() {
            this.pagination.current_page = 1;
            this.query === "" ? this.getData() : this.searchData();
        },
        // get data
        async getData() {
            this.$store.state.operations.loading = true;
            let currentPage = this.pagination ? this.pagination.current_page : 1;
            await this.$store.dispatch("operations/fetchData", {
                path: "/api/reports/supplier-due-report?page=",
                currentPage: currentPage + "&perPage=" + this.perPage,
            });
            this.reportGenerated = true;
        },

        // Pagination
        async paginate() {
            this.query === "" ? this.getData() : this.searchData();
        },

        // Reset pagination
        async resetPagination() {
            this.pagination.current_page = 1;
        },

        // search data
        async searchData() {
            this.$store.state.operations.loading = true;
            let currentPage = this.pagination ? this.pagination.current_page : 1;
            await this.$store.dispatch("operations/searchData", {
                path: "/api/suppliers/search",
                term: this.query,
                currentPage: currentPage + "&perPage=" + this.perPage,
            });
        },

        // reload after search
        async reload() {
            this.query = "";
            await this.searchData();
        },

        // print table
        // download PDF
        downloadPDF() {
            const params = new URLSearchParams();
            
            // Always add token first if available
            const token = this.$store.getters['auth/token'];
            if (token) {
                params.append('token', token);
            }
            
            // Add query term if exists
            if (this.query) {
                params.append('term', this.query);
            }
            
            const queryString = params.toString();
            window.location.href = `/print/reports/supplier-payable-report/pdf${queryString ? '?' + queryString : ''}`;
        },

        // preview PDF
        previewPDF() {
            const params = new URLSearchParams();
            
            // Always add token first if available
            const token = this.$store.getters['auth/token'];
            if (token) {
                params.append('token', token);
            }
            
            // Add query term if exists
            if (this.query) {
                params.append('term', this.query);
            }
            
            const queryString = params.toString();
            window.location.href = `/print/reports/supplier-payable-report/preview${queryString ? '?' + queryString : ''}`;
        },

        async print() {
            await this.$htmlToPaper("printMe");
        },
    },
};
</script>

<style scoped>
.table-custom {
  border: none !important;
}

.account-statement-table {
  border-collapse: separate;
  border-spacing: 0;
}

.account-statement-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.account-statement-table thead tr {
  border: none !important;
}

.account-statement-table thead th:first-child {
  border-top-left-radius: 10px;
}

.account-statement-table thead th:last-child {
  border-top-right-radius: 10px;
}

[dir="rtl"] .account-statement-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .account-statement-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}

.refresh-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  border-radius: 10px;
  border: none;
}

.export-excel-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  border-radius: 10px;
  border: none;
}

.preview-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  border-radius: 10px;
  border: none;
}

.export-pdf-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  border-radius: 10px;
  border: none;
}

.print-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  border-radius: 10px;
  border: none;
}

.btn-group.c-w-100 {
  gap: 10px;
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

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}

@media (max-width: 1300px) {
  .info-box {
    padding: 0;
  }
}
</style>
  
  