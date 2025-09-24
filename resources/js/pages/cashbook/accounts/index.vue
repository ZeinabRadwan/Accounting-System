<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12" v-if="$can('account-list') ||
        $can('account-create') ||
        $can('account-view') ||
        $can('account-edit') ||
        $can('account-delete')
        ">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
          </div>
          <!-- /.card-header -->
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-6 col-xl-8 mb-2 text-right">
                <date-range-picker ref="picker" opens="left" :locale-data="locale" :minDate="minDate" :maxDate="maxDate"
                  :singleDatePicker="false" :showWeekNumbers="false" :showDropdowns="true" :autoApply="true"
                  v-model="dateRange" @update="updateValues" :linkedCalendars="true" class="c-w-100" style="display: none;">
                  <template v-slot:input="picker" style="min-width: 350px">
                    {{ picker.startDate | startDate }} -
                    {{ picker.endDate | endDate }}
                  </template>
                </date-range-picker>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
              </div>
              <div class="col-xl-8 col-8 float-right text-right">
                <div class="btn-group c-w-100">
                  <a
                    @click="refreshTable()"
                    href="#"
                    v-tooltip="$t('Refresh')"
                    class="btn btn-success refresh-btn"
                  >
                    <i class="fas fa-sync"></i>
                  </a>
                  <a
                    :href="exportUrl"
                    v-tooltip="$t('Export to Excel')"
                    class="btn export-excel-btn"
                    title="Export to Excel"
                  >
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.625 17.5001C11.625 17.699 11.546 17.8898 11.4053 18.0305C11.2647 18.1711 11.0739 18.2501 10.875 18.2501H8.24998C8.05107 18.2501 7.86031 18.1711 7.71966 18.0305C7.579 17.8898 7.49998 17.699 7.49998 17.5001V12.2501C7.49998 12.0512 7.579 11.8604 7.71966 11.7198C7.86031 11.5791 8.05107 11.5001 8.24998 11.5001C8.4489 11.5001 8.63966 11.5791 8.78031 11.7198C8.92097 11.8604 8.99998 12.0512 8.99998 12.2501V16.7501H10.875C11.0739 16.7501 11.2647 16.8291 11.4053 16.9698C11.546 17.1104 11.625 17.3012 11.625 17.5001ZM5.68592 11.6398C5.60578 11.5826 5.51514 11.5417 5.41918 11.5194C5.32323 11.4972 5.22384 11.4941 5.12668 11.5103C5.02953 11.5265 4.93651 11.5617 4.85295 11.6138C4.76939 11.6659 4.69692 11.734 4.63967 11.8142L3.37498 13.5851L2.1103 11.8142C2.05509 11.7292 1.98324 11.6564 1.89909 11.5999C1.81495 11.5435 1.72024 11.5047 1.62069 11.4859C1.52114 11.4671 1.41882 11.4687 1.31988 11.4905C1.22095 11.5123 1.12747 11.554 1.04507 11.6129C0.962677 11.6719 0.893077 11.7469 0.840473 11.8335C0.787869 11.9201 0.753352 12.0164 0.739005 12.1167C0.724657 12.217 0.730776 12.3191 0.756994 12.417C0.783211 12.5148 0.828983 12.6064 0.891547 12.6861L2.45342 14.8751L0.889672 17.0642C0.784434 17.2261 0.74571 17.4224 0.781564 17.6121C0.817419 17.8019 0.925088 17.9705 1.08215 18.0829C1.23922 18.1952 1.43357 18.2427 1.62474 18.2153C1.81591 18.188 1.98916 18.088 2.10842 17.9361L3.37498 16.1651L4.63967 17.9361C4.75893 18.088 4.93219 18.188 5.12336 18.2153C5.31453 18.188 5.50888 18.1952 5.66594 18.0829C5.82301 17.9705 5.93068 17.8019 5.96653 17.6121C6.00239 17.4224 5.96366 17.2261 5.85842 17.0642L4.29655 14.8751L5.8603 12.6861C5.91755 12.6059 5.95845 12.5153 5.98067 12.4193C6.00289 12.3234 6.00599 12.224 5.9898 12.1268C5.97361 12.0297 5.93844 11.9367 5.8863 11.8531C5.83416 11.7695 5.76607 11.6971 5.68592 11.6398ZM14.9615 14.0604C14.5865 13.9517 14.1984 13.8401 13.9819 13.7004C13.8647 13.6236 13.8665 13.6067 13.8769 13.5223C13.8783 13.4541 13.896 13.3873 13.9287 13.3274C13.9613 13.2675 14.0078 13.2164 14.0644 13.1782C14.4956 12.8857 15.5025 13.017 15.9225 13.1257C16.1149 13.1763 16.3196 13.1484 16.4915 13.0481C16.6633 12.9478 16.7883 12.7834 16.8389 12.5909C16.8895 12.3985 16.8616 12.1938 16.7613 12.0219C16.661 11.8501 16.4965 11.7251 16.304 11.6745C16.1062 11.6229 14.3353 11.1851 13.2262 11.9332C12.9924 12.0913 12.796 12.2987 12.6511 12.5408C12.5061 12.783 12.416 13.054 12.3872 13.3348C12.1997 14.8236 13.6669 15.2482 14.5434 15.5014C15.674 15.8286 15.7734 15.9626 15.7415 16.2129C15.7125 16.4389 15.6234 16.5251 15.54 16.5814C15.1087 16.8682 14.1187 16.7267 13.7081 16.6142C13.516 16.5609 13.3106 16.586 13.1371 16.6841C13.0512 16.7327 12.9757 16.7977 12.9149 16.8755C12.8541 16.9532 12.8092 17.0422 12.7828 17.1373C12.7564 17.2324 12.749 17.3318 12.761 17.4298C12.773 17.5277 12.8041 17.6224 12.8527 17.7083C12.9508 17.8818 13.1138 18.0093 13.3059 18.0626C13.7708 18.1851 14.2493 18.2481 14.73 18.2501C15.2756 18.2501 15.8831 18.1564 16.3697 17.832C16.6097 17.6724 16.8114 17.4615 16.9602 17.2146C17.109 16.9678 17.2012 16.691 17.2303 16.4042C17.4375 14.7814 15.8887 14.3286 14.9615 14.0604ZM0.749985 8.50012V1.75012C0.749985 1.3523 0.90802 0.970767 1.18932 0.689462C1.47063 0.408157 1.85216 0.250122 2.24998 0.250122H11.25C11.3485 0.250045 11.4461 0.269379 11.5371 0.30702C11.6282 0.344661 11.7109 0.399872 11.7806 0.469497L17.0306 5.7195C17.1002 5.7892 17.1554 5.87194 17.1931 5.96299C17.2307 6.05403 17.2501 6.1516 17.25 6.25012V8.50012C17.25 8.69903 17.171 8.8898 17.0303 9.03045C16.8897 9.1711 16.6989 9.25012 16.5 9.25012C16.3011 9.25012 16.1103 9.1711 15.9697 9.03045C15.829 8.8898 15.75 8.69903 15.75 8.50012V7.00012H11.25C11.0511 7.00012 10.8603 6.9211 10.7197 6.78045C10.579 6.6398 10.5 6.44903 10.5 6.25012V1.75012H2.24998V8.50012C2.24998 8.69903 2.17097 8.8898 2.03031 9.03045C1.88966 9.1711 1.6989 9.25012 1.49998 9.25012C1.30107 9.25012 1.11031 9.1711 0.969655 9.03045C0.829003 8.8898 0.749985 8.69903 0.749985 8.50012ZM12 5.50012H14.6887L12 2.81043V5.50012Z"
                        fill="#2AB930"
                      />
                    </svg>
                  </a>
                  <a
                    href="/accounts/pdf"
                    v-tooltip="$t('Export to PDF')"
                    class="btn export-pdf-btn"
                    title="Export to PDF"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 14.2501C21 14.449 20.921 14.6398 20.7803 14.7805C20.6397 14.9211 20.4489 15.0001 20.25 15.0001H18V16.5001H19.5C19.6989 16.5001 19.8897 16.5791 20.0303 16.7198C20.171 16.8604 20.25 17.0512 20.25 17.2501C20.25 17.449 20.171 17.6398 20.0303 17.7805C19.8897 17.9211 19.6989 18.0001 19.5 18.0001H18V19.5001C18 19.699 17.921 19.8898 17.7803 20.0305C17.6397 20.1711 17.4489 20.2501 17.25 20.2501C17.0511 20.2501 16.8603 20.1711 16.7197 20.0305C16.579 19.8898 16.5 19.699 16.5 19.5001V14.2501C16.5 14.0512 16.579 13.8604 16.7197 13.7198C16.8603 13.5791 17.0511 13.5001 17.25 13.5001H20.25C20.4489 13.5001 20.6397 13.5791 20.7803 13.7198C20.921 13.8604 21 14.0512 21 14.2501ZM8.625 16.1251C8.625 16.8213 8.34844 17.489 7.85616 17.9813C7.36387 18.4736 6.69619 18.7501 6 18.7501H5.25V19.5001C5.25 19.699 5.17098 19.8898 5.03033 20.0305C4.88968 20.1711 4.69891 20.2501 4.5 20.2501C4.30109 20.2501 4.11032 20.1711 3.96967 20.0305C3.82902 19.8898 3.75 19.699 3.75 19.5001V14.2501C3.75 14.0512 3.82902 13.8604 3.96967 13.7198C4.11032 13.5791 4.30109 13.5001 4.5 13.5001H6C6.69619 13.5001 7.36387 13.7767 7.85616 14.269C8.34844 14.7612 8.625 15.4289 8.625 16.1251ZM7.125 16.1251C7.125 15.8268 7.00647 15.5406 6.7955 15.3296C6.58452 15.1186 6.29837 15.0001 6 15.0001H5.25V17.2501H6C6.29837 17.2501 6.58452 17.1316 6.7955 16.9206C7.00647 16.7096 7.125 16.4235 7.125 16.1251ZM15.375 16.8751C15.375 17.7702 15.0194 18.6287 14.3865 19.2616C13.7535 19.8945 12.8951 20.2501 12 20.2501H10.5C10.3011 20.2501 10.1103 20.1711 9.96967 20.0305C9.82902 19.8898 9.75 19.699 9.75 19.5001V14.2501C9.75 14.0512 9.82902 13.8604 9.96967 13.7198C10.1103 13.5791 10.3011 13.5001 10.5 13.5001H12C12.8951 13.5001 13.7535 13.8557 14.3865 14.4886C15.0194 15.1216 15.375 15.98 15.375 16.8751ZM13.875 16.8751C13.875 16.3778 13.6775 15.9009 13.3258 15.5493C12.9742 15.1977 12.4973 15.0001 12 15.0001H11.25V18.7501H12C12.4973 18.7501 12.9742 18.5526 13.3258 18.2009C13.6775 17.8493 13.875 17.3724 13.875 16.8751ZM3.75 10.5001V3.75012C3.75 3.3523 3.90804 2.97077 4.18934 2.68946C4.47064 2.40816 4.85218 2.25012 5.25 2.25012H14.25C14.3485 2.25004 14.4461 2.26938 14.5371 2.30702C14.6282 2.34466 14.7109 2.39987 14.7806 2.4695L20.0306 7.7195C20.1003 7.7892 20.1555 7.87194 20.1931 7.96299C20.2307 8.05403 20.2501 8.1516 20.25 8.25012V10.5001C20.25 10.699 20.171 10.8898 20.0303 11.0305C19.8897 11.1711 19.6989 11.2501 19.5 11.2501C19.3011 11.2501 19.1103 11.1711 18.9697 11.0305C18.829 10.8898 18.75 10.699 18.75 10.5001V9.00012H14.25C14.0511 9.00012 13.8603 8.9211 13.7197 8.78045C13.579 8.6398 13.5 8.44903 13.5 8.25012V3.75012H5.25V10.5001C5.25 10.699 5.17098 10.8898 5.03033 11.0305C4.88968 11.1711 4.69891 11.2501 4.5 11.2501C4.30109 11.2501 4.11032 11.1711 3.96967 11.0305C3.82902 10.8898 3.75 10.699 3.75 10.5001ZM15 7.50012H17.6897L15 4.81043V7.50012Z"
                        fill="#2AB930"
                      />
                    </svg>
                  </a>
                  <a
                    @click="print"
                    v-tooltip="$t('Print Table')"
                    class="btn print-btn"
                  >
                    <i class="fas fa-print"></i>
                  </a>
                  <router-link v-if="$can('account-create')" :to="{ name: 'accounts.create' }" class="btn btn-primary">
                    {{ $t("Create") }}
                    <i class="fas fa-plus-circle d-none d-sm-inline-block" />
                  </router-link>
                </div>
              </div>
            </div>
            <table-loading v-show="loading" />
            <div class="table-responsive table-custom mt-3" id="printMe">
              <table class="table accounts-table">
                <thead>
                  <th>{{ $t("#") }}</th>
                  <th>{{ $t("Image") }}</th>
                  <th>{{ $t("Bank Name") }}</th>
                  <th>{{ $t("Branch Name") }}</th>
                  <th>{{ $t("Account Number") }}</th>
                  <th>{{ $t("Available Balance") }}</th>
                  <th>{{ $t("Status") }}</th>
                  <th v-if="$can('account-view') ||
                    $can('account-edit') ||
                    $can('account-delete')
                    " class="text-right no-print">
                    {{ $t("Action") }}
                  </th>
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
                    <td>
                      <a
                        v-if="data.image"
                        href="#"
                        id="show-modal"
                        @click="previewModal(data.image)"
                      >
                        <img
                          :src="data.image"
                          class="rounded preview-sm"
                          loading="lazy"
                        />
                      </a>
                      <div v-else class="bg-secondary rounded no-preview-sm">
                        <small>{{ $t("No Preview") }}</small>
                      </div>
                    </td>
                    <td>
                      <router-link v-if="$can('account-view')" :to="{
                        name: 'accounts.show',
                        params: { slug: data.slug },
                      }">
                        {{ data.bankName }}
                      </router-link>
                      <span v-else>{{ data.bankName }}</span>
                    </td>
                    <td>{{ data.branchName }}</td>
                    <td>{{ data.accountNumber }}</td>
                    <td>{{ data.availableBalance  }} <span class="saudi-riyal">ê</span></td>
                    <td>
                      <span v-if="data.status === 1" class="badge bg-success">{{
                        $t("Active")
                      }}</span>
                      <span v-else class="badge bg-danger">{{
                        $t("Inactive")
                      }}</span>
                    </td>
                    <td v-if="$can('account-view') ||
                        $can('account-edit') ||
                        $can('account-delete')
                        " class="text-right no-print">
                      <div class="action-dropdown" :class="{ open: openActionIndex === i }">
                        <button type="button" class="action-icon-btn" :data-action-index="i" @click.stop="toggleAction(i)">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M13.125 12.7858C13.125 13.0083 13.059 13.2258 12.9354 13.4108C12.8118 13.5958 12.6361 13.74 12.4305 13.8252C12.225 13.9103 11.9988 13.9326 11.7805 13.8892C11.5623 13.8458 11.3618 13.7387 11.2045 13.5813C11.0472 13.424 10.94 13.2235 10.8966 13.0053C10.8532 12.7871 10.8755 12.5609 10.9606 12.3553C11.0458 12.1497 11.19 11.974 11.375 11.8504C11.56 11.7268 11.7775 11.6608 12 11.6608C12.2984 11.6608 12.5845 11.7794 12.7955 11.9903C13.0065 12.2013 13.125 12.4875 13.125 12.7858ZM12 7.53583C12.2225 7.53583 12.44 7.46985 12.625 7.34623C12.81 7.22262 12.9542 7.04691 13.0394 6.84135C13.1245 6.63578 13.1468 6.40958 13.1034 6.19135C13.06 5.97312 12.9528 5.77267 12.7955 5.61533C12.6382 5.458 12.4377 5.35085 12.2195 5.30744C12.0012 5.26404 11.775 5.28632 11.5695 5.37146C11.3639 5.45661 11.1882 5.60081 11.0646 5.78581C10.941 5.97082 10.875 6.18832 10.875 6.41083C10.875 6.7092 10.9935 6.99534 11.2045 7.20632C11.4155 7.4173 11.7016 7.53583 12 7.53583ZM12 18.0358C11.7775 18.0358 11.56 18.1018 11.375 18.2254C11.19 18.349 11.0458 18.5247 10.9606 18.7303C10.8755 18.9359 10.8532 19.1621 10.8966 19.3803C10.94 19.5985 11.0472 19.799 11.2045 19.9563C11.3618 20.1137 11.5623 20.2208 11.7805 20.2642C11.9988 20.3076 12.225 20.2853 12.4305 20.2002C12.6361 20.115 12.8118 19.9708 12.9354 19.7858C13.059 19.6008 13.125 19.3833 13.125 19.1608C13.125 18.8625 13.0065 18.5763 12.7955 18.3653C12.5845 18.1544 12.2984 18.0358 12 18.0358Z" fill="#023033"/>
                          </svg>
                        </button>
                        <div class="action-menu" v-if="openActionIndex === i">
                          <div class="action-menu-header">
                            <span class="action-menu-title">Actions</span>
                            <button type="button" class="action-menu-close" @click="toggleAction(i)">
                              <i class="fas fa-times"></i>
                            </button>
                          </div>
                          <ul>
                            <li v-if="$can('account-view')">
                              <router-link :to="{ name: 'accounts.show', params: { slug: data.slug } }">
                                <i class="fas fa-list"></i>
                                {{ $t('Transactions') }}
                              </router-link>
                            </li>
                            <li v-if="$can('account-edit')">
                              <router-link :to="{ name: 'accounts.edit', params: { slug: data.slug } }">
                                <i class="fas fa-edit"></i>
                                {{ $t('Edit') }}
                              </router-link>
                            </li>
                            <li v-if="$can('account-delete') && appInfo.defaultAccountSlug != data.slug">
                              <a href="#" @click.prevent="deleteData(data.slug)">
                                <i class="fas fa-trash"></i>
                                {{ $t('Delete') }}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr v-show="!loading && !items.length">
                    <td colspan="8">
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
                  <select @change="updatePerPager" v-model="perPage" class="form-control form-control-sm ml-1">
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

   <Modal v-if="showModal" @close="previewModal()">
      <h5 slot="header">{{ $t("Attached Image Preview") }}</h5>
      <div class="w-100" slot="body">
        <img :src="imagePath" class="rounded img-fluid" loading="lazy" />
      </div>
    </Modal>

  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import i18n from "~/plugins/i18n";
import DateRangePicker from "vue2-daterange-picker";
import Swal from "sweetalert2";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Accounts") };
  },
  components: {
    DateRangePicker,
  },
  data: () => ({
    breadcrumbsCurrent: "Accounts",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Cashbook",
        url: "",
      },
      {
        name: "Accounts",
        url: "",
      },
    ],
    query: "",
    perPage: 10,
    showModal: false,
    openActionIndex: null,
    minDate: moment(new Date("01-01-2021")).format("YYYY-MM-DD"),
    maxDate: moment().add(1, "days").format("YYYY-MM-DD"),
    dateRange: {
      startDate: "",
      endDate: "",
    },
    locale: {
      direction: "ltr",
      format: "YYYY-MM-DD",
      separator: " - ",
      applyLabel: "Apply",
      cancelLabel: "Cancel",
      weekLabel: "W",
      customRangeLabel: "Custom Range",
      daysOfWeek: moment.weekdaysMin(),
      monthNames: moment.monthsShort(),
      firstDay: 1,
    },
  }),
  filters: {
    startDate(val) {
      return val ? moment(val).format("YYYY-MM-DD") : i18n.t("From");
    },
    endDate(val) {
      return val ? moment(val).format("YYYY-MM-DD") : i18n.t("To");
    },
  },
  // Map Getters
  computed: {
    ...mapGetters("operations", ["items", "loading", "pagination", "appInfo"]),
    exportUrl() {
      // Create a dynamic export URL with query parameters
      return `/accounts/export/excel?start_date=${this.dateRange.startDate}&end_date=${this.dateRange.endDate}&term=${this.query}`;
    },
  },
  watch: {
    // watch search data
    query: function (newQ) {
      if (newQ === "") {
        if (this.dateRange.startDate && this.dateRange.endDate) {
          this.searchData();
        } else {
          this.getData();
        }
      } else {
        this.searchData();
      }
    },
  },
  created() {
    this.getData();
  },
  mounted() {
    document.addEventListener('click', this.onClickOutside);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClickOutside);
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    toggleAction(index) {
      this.openActionIndex = this.openActionIndex === index ? null : index;
      
      if (this.openActionIndex === index) {
        this.$nextTick(() => {
          this.positionDropdown(index);
        });
      }
    },
    positionDropdown(index) {
      const button = document.querySelector(`[data-action-index="${index}"]`);
      if (button) {
        const rect = button.getBoundingClientRect();
        const menu = document.querySelector('.action-menu');
        if (menu) {
          // Check if page direction is RTL
          const isRTL = document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
          
          if (isRTL) {
            menu.style.left = '45px';
            menu.style.right = 'auto';
          } else {
            menu.style.left = `${rect.right - 200}px`; // 200px is min-width
            menu.style.right = 'auto';
          }
          menu.style.top = `${rect.bottom + 8}px`;
        }
      }
    },
    onClickOutside() {
      this.openActionIndex = null;
    },
    handleScroll() {
      if (this.openActionIndex !== null) {
        this.positionDropdown(this.openActionIndex);
      }
    },
    handleResize() {
      if (this.openActionIndex !== null) {
        this.positionDropdown(this.openActionIndex);
      }
    },
    // filter data for selected date range
    async updateValues() {
      this.dateRange.startDate = moment(this.dateRange.startDate).format(
        "YYYY-MM-DD"
      );
      this.dateRange.endDate = moment(this.dateRange.endDate).format(
        "YYYY-MM-DD"
      );
      this.searchData();
    },

    // refresh table
    refreshTable() {
      this.query = "";
      this.dateRange.startDate = null;
      this.dateRange.endDate = null;
      this.query === "" ? this.getData() : this.searchData();
      setTimeout(
        function () {
          this.dateRange.startDate = "";
          this.dateRange.endDate = "";
        }.bind(this),
        500
      );
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
        path: "/api/accounts?page=",
        currentPage: currentPage + "&perPage=" + this.perPage,
      });
    },

    // pagination
    async paginate() {
      this.query === "" ? this.getData() : this.searchData();
    },

    // reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },

    // search data
    async searchData() {
      this.$store.state.operations.loading = true;
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      await this.$store.dispatch("operations/searchData", {
        path: "/api/accounts/search",
        term: this.query,
        currentPage: currentPage + "&perPage=" + this.perPage,
        startDate: this.dateRange.startDate,
        endDate: this.dateRange.endDate,
      });
    },

    // reload after search
    async reload() {
      this.query = "";
      await this.searchData();
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
        confirmButtonText: this.$t("Confirm"),
      }).then((result) => {
        if (!result.value) return;

        this.$store
          .dispatch("operations/deleteData", {
            path: "/api/accounts/",
            slug: slug,
          })
          .then((response) => {
            // Some stores return true, some return { success: true }
            const isSuccess = response === true || response?.success === true;
            if (isSuccess) {
              this.getData();
              toast.fire({ type: 'success', title: this.$t('Deleted successfully.') });
              return;
            }

            const backendMsg = response?.response?.data?.message || response?.message;
            if (backendMsg) {
              toast.fire({ type: 'error', title: backendMsg });
            } else {
              toast.fire({ type: 'error', title: this.$t('Opps...something went wrong') });
            }
          })
          .catch((error) => {
            const msg = error?.response?.data?.message || error?.message || this.$t('Opps...something went wrong');
            toast.fire({ type: 'error', title: msg });
          });
      });
    },

    // display modal
    previewModal(image) {
      this.imagePath = image;
      if (this.showModal) {
        return (this.showModal = false);
      }
      return (this.showModal = true);
    },
  },
};
</script>

<style scoped>
.table-custom {
  border: none !important;
  overflow: visible !important;
}

.accounts-table {
  border-collapse: separate;
  border-spacing: 0;
}

.accounts-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.accounts-table thead tr {
  border: none !important;
}

.accounts-table thead th:first-child {
  border-top-left-radius: 10px;
}

.accounts-table thead th:last-child {
  border-top-right-radius: 10px;
}

/* RTL styles for Arabic language */
[dir="rtl"] .accounts-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .accounts-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}

.refresh-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.export-excel-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.export-pdf-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.print-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

/* Action dropdown styles */
.action-dropdown {
  position: relative;
  display: inline-block;
}

.action-icon-btn {
  border: none;
  width: 24px;
  height: 24px;
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
}

.action-menu {
  position: fixed;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 8px 20px 0px #00000014;
  border-radius: 12px;
  min-width: 200px;
  z-index: 9999;
  max-height: 80vh;
  overflow: hidden;
  animation: slideInDown 0.3s ease-out;
}

/* RTL Support for Action Menu */
[dir="rtl"] .action-menu {
  left: 45px !important;
  right: auto !important;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.action-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #f1f5fb;
  background: #f8fafc;
  border-radius: 12px 12px 0 0;
}

.action-menu-title {
  font-size: 14px;
  font-weight: 600;
  color: #023033;
}

.action-menu-close {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.action-menu-close:hover {
  background: #e5e7eb;
  color: #374151;
}

.action-menu ul {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}

.action-menu li {
  border-bottom: 1px solid #f1f5fb;
}

.action-menu li:last-child {
  border-bottom: none;
}

.action-menu li a {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: #023033;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
  gap: 10px;
}

.action-menu li a i {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.action-menu li a:hover {
  background: #f8fafc;
  color: #2AB930;
  transform: translateX(2px);
}

.action-menu li a:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #2AB930;
  transform: scaleY(0);
  transition: transform 0.2s ease;
}

.action-menu li a:hover:before {
  transform: scaleY(1);
}

/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}



.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
  overflow: visible;
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Custom Status Badge Styling */
.accounts-table .badge.bg-success {
  background: #F6FEF4 !important;
  color: #2AB930 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.accounts-table .badge.bg-danger {
  background: #FEF4F4 !important;
  color: #DC3545 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

/* Search Input Background Override */
.form-control{
  background: #fff !important;
}

/* Create Button Styling */
.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
}

/* Image preview styles */
.preview-sm {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.no-preview-sm {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #6c757d;
}
</style>
