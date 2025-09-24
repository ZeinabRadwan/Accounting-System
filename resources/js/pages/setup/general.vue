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
                <form
                    role="form"
                    @submit.prevent="updateSettings"
                    @keydown="form.onKeydown($event)"
                >
                    <div class="card">
                        <div class="card-header setings-header">
                            <h3 class="card-title">
                                {{
                                    $t(
                                        'General Settings'
                                    )
                                }}
                            </h3>
                        </div>
                        <div class="card-body">
                            <div class="card inner-card">
                                <div class="card-header">
                                    {{
                                        $t(
                                            'Add Your Company Information'
                                        )
                                    }}
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="companyName"
                                                >{{
                                                    $t('Company Name')
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="companyName"
                                                v-model="form.companyName"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'companyName'
                                                        ),
                                                }"
                                                name="companyName"
                                                :placeholder="
                                                    $t(
                                                        'Enter a company name'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="companyName"
                                            />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="companyTagline"
                                                >{{
                                                    $t(
                                                        'Company Tagline'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="companyTagline"
                                                v-model="form.companyTagline"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'companyTagline'
                                                        ),
                                                }"
                                                name="companyTagline"
                                                :placeholder="
                                                    $t(
                                                        'Company Tagline'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="companyTagline"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="emailAddress"
                                                >{{
                                                    $t(
                                                        'Email Address'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="emailAddress"
                                                v-model="form.emailAddress"
                                                type="email"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'emailAddress'
                                                        ),
                                                }"
                                                name="emailAddress"
                                                :placeholder="
                                                    $t(
                                                        'Enter an email address'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="emailAddress"
                                            />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="phoneNumber"
                                                >{{
                                                    $t(
                                                        'Phone Number'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="phoneNumber"
                                                v-model="form.phoneNumber"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'phoneNumber'
                                                        ),
                                                }"
                                                name="phoneNumber"
                                                :placeholder="
                                                    $t(
                                                        'Phone Number'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="name"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="address">{{
                                            $t('Address')
                                        }}</label>
                                        <textarea
                                            id="address"
                                            v-model="form.address"
                                            class="form-control"
                                            :class="{
                                                'is-invalid':
                                                    form.errors.has('address'),
                                            }"
                                            :placeholder="
                                                $t('Enter an address')
                                            "
                                        />
                                        <has-error
                                            :form="form"
                                            field="address"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="card inner-card">
                                <div class="card-header">
                                    {{
                                        $t(
                                            'Add the code prefixes'
                                        )
                                    }}
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label for="clientPrefix"
                                                >{{
                                                    $t(
                                                        'Client Prefix'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="clientPrefix"
                                                v-model="form.clientPrefix"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'clientPrefix'
                                                        ),
                                                }"
                                                name="clientPrefix"
                                                :placeholder="
                                                    $t(
                                                        'Enter a client prefix'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="clientPrefix"
                                            />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="supplierPrefix"
                                                >{{
                                                    $t(
                                                        'Supplier Prefix'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="supplierPrefix"
                                                v-model="form.supplierPrefix"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'supplierPrefix'
                                                        ),
                                                }"
                                                name="supplierPrefix"
                                                :placeholder="
                                                    $t(
                                                        'Enter a supplier prefix'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="supplierPrefix"
                                            />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="employeePrefix"
                                                >{{
                                                    $t(
                                                        'Employee Prefix'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="employeePrefix"
                                                v-model="form.employeePrefix"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'employeePrefix'
                                                        ),
                                                }"
                                                name="employeePrefix"
                                                :placeholder="
                                                    $t(
                                                        'Enter an employee prefix'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="employeePrefix"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label for="proCatPrefix"
                                                >{{
                                                    $t(
                                                        'Item Category Prefix'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="proCatPrefix"
                                                v-model="form.proCatPrefix"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'proCatPrefix'
                                                        ),
                                                }"
                                                name="proCatPrefix"
                                                :placeholder="
                                                    $t(
                                                        'Enter an item category prefix'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="proCatPrefix"
                                            />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="proSubCatPrefix"
                                                >{{
                                                    $t(
                                                        'Item Sub Category Prefix'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="proSubCatPrefix"
                                                v-model="form.proSubCatPrefix"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'proSubCatPrefix'
                                                        ),
                                                }"
                                                name="proSubCatPrefix"
                                                :placeholder="
                                                    $t(
                                                        'Enter an item sub category prefix'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="proSubCatPrefix"
                                            />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="productPrefix"
                                                >{{
                                                    $t(
                                                        'Item Prefix'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="productPrefix"
                                                v-model="form.productPrefix"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'productPrefix'
                                                        ),
                                                }"
                                                name="productPrefix"
                                                :placeholder="
                                                    $t(
                                                        'Enter an item prefix'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="productPrefix"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div
                                            class="form-group col-lg-6 col-xl-3"
                                        >
                                            <label for="expCatPrefix"
                                                >{{
                                                    $t(
                                                        'Expense Category Prefix'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="expCatPrefix"
                                                v-model="form.expCatPrefix"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'expCatPrefix'
                                                        ),
                                                }"
                                                name="expCatPrefix"
                                                :placeholder="
                                                    $t(
                                                        'Enter an expense category prefix'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="expCatPrefix"
                                            />
                                        </div>
                                        <div
                                            class="form-group col-lg-6 col-xl-3"
                                        >
                                            <label for="expSubCatPrefix"
                                                >{{
                                                    $t(
                                                        'Expense Sub Category Prefix'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="expSubCatPrefix"
                                                v-model="form.expSubCatPrefix"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'expSubCatPrefix'
                                                        ),
                                                }"
                                                name="expSubCatPrefix"
                                                :placeholder="
                                                    $t(
                                                        'Enter an expense sub category prefix'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="expSubCatPrefix"
                                            />
                                        </div>
                                        <div
                                            class="form-group col-lg-6 col-xl-3"
                                        >
                                            <label for="purchasePrefix"
                                                >{{
                                                    $t(
                                                        'Purchase Prefix'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="purchasePrefix"
                                                v-model="form.purchasePrefix"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'purchasePrefix'
                                                        ),
                                                }"
                                                name="purchasePrefix"
                                                :placeholder="
                                                    $t(
                                                        'Enter a purchase prefix'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="purchasePrefix"
                                            />
                                        </div>
                                        <div
                                            class="form-group col-lg-6 col-xl-3"
                                        >
                                            <label for="purchaseReturnPrefix"
                                                >{{
                                                    $t(
                                                        'Purchase Return Prefix'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="purchaseReturnPrefix"
                                                v-model="
                                                    form.purchaseReturnPrefix
                                                "
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'purchaseReturnPrefix'
                                                        ),
                                                }"
                                                name="purchaseReturnPrefix"
                                                :placeholder="
                                                    $t(
                                                        'Enter a purchase return prefix'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="purchaseReturnPrefix"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div
                                            class="form-group col-lg-6 col-xl-3"
                                        >
                                            <label for="quotationPrefix"
                                                >{{
                                                    $t(
                                                        'Quotation Prefix'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="quotationPrefix"
                                                v-model="form.quotationPrefix"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'quotationPrefix'
                                                        ),
                                                }"
                                                name="quotationPrefix"
                                                :placeholder="
                                                    $t(
                                                        'Enter a quotation prefix'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="quotationPrefix"
                                            />
                                        </div>
                                        <div
                                            class="form-group col-lg-6 col-xl-3"
                                        >
                                            <label for="invoicePrefix"
                                                >{{
                                                    $t(
                                                        'Invoice Prefix'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="invoicePrefix"
                                                v-model="form.invoicePrefix"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'invoicePrefix'
                                                        ),
                                                }"
                                                name="invoicePrefix"
                                                :placeholder="
                                                    $t(
                                                        'Enter an invoice prefix'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="invoicePrefix"
                                            />
                                        </div>
                                        <div
                                            class="form-group col-lg-6 col-xl-3"
                                        >
                                            <label for="invoiceReturnPrefix"
                                                >{{
                                                    $t(
                                                        'Invoice Return Prefix'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="invoiceReturnPrefix"
                                                v-model="
                                                    form.invoiceReturnPrefix
                                                "
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'invoiceReturnPrefix'
                                                        ),
                                                }"
                                                name="invoiceReturnPrefix"
                                                :placeholder="
                                                    $t(
                                                        'Enter an invoice return prefix'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="invoiceReturnPrefix"
                                            />
                                        </div>
                                        <div
                                            class="form-group col-lg-6 col-xl-3"
                                        >
                                            <label for="adjustmentPrefix"
                                                >{{
                                                    $t(
                                                        'Inventory Adjustment Prefix'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="adjustmentPrefix"
                                                v-model="form.adjustmentPrefix"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'adjustmentPrefix'
                                                        ),
                                                }"
                                                name="adjustmentPrefix"
                                                :placeholder="
                                                    $t(
                                                        'Enter an inventory adjustment prefix'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="adjustmentPrefix"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card inner-card">
                                <div class="card-header">
                                    {{
                                        $t(
                                            'Add your default elements'
                                        )
                                    }}
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label for="country"
                                                >{{
                                                    $t(
                                                        'Country'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <select
                                                v-model="form.country"
                                                name="country"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'country'
                                                        ),
                                                }"
                                            >
                                                <option value="">{{ $t('Select a country') }}</option>
                                                <option
                                                    v-for="country in countries"
                                                    :key="country.code"
                                                    :value="country.code"
                                                >
                                                    {{ country.name }}
                                                </option>
                                            </select>
                                            <has-error
                                                :form="form"
                                                field="country"
                                            />
                                        </div>
                                        <div
                                            v-if="items"
                                            class="form-group col-md-4"
                                        >
                                            <label for="currency"
                                                >{{
                                                    $t(
                                                        'Default Currency'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <v-select
                                                v-model="form.currency"
                                                :options="items"
                                                label="label"
                                                :class="{
                                                    'is-invalid':form.errors.has('currency'),
                                                    'text-uppercase': true
                                                }"
                                                name="currency"
                                                :placeholder="
                                                    $t(
                                                        'Select a currency'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="currency"
                                            />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="language"
                                                >{{
                                                    $t(
                                                        'Default Language'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <select
                                                v-model="form.language"
                                                name=""
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'language'
                                                        ),
                                                }"
                                            >
                                                <option
                                                    v-for="(value, key) in locales"
                                                    :key="key"
                                                    :value="key"
                                                >
                                                    {{ value[1] }}
                                                </option>
                                            </select>
                                            <has-error
                                                :form="form"
                                                field="language"
                                            />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="taxRegistrationNumber">{{
                                                $t("Tax Registration Number")
                                            }}</label>
                                            <input id="taxRegistrationNumber" v-model="form.taxRegistrationNumber" type="taxRegistrationNumber" class="form-control"
                                                :class="{ 'is-invalid': form.errors.has('taxRegistrationNumber') }" name="taxRegistrationNumber"
                                                :placeholder="$t('Enter a tax registration number')" />
                                            <has-error :form="form" field="taxRegistrationNumber" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <!-- Fiscal Year Selection -->
                                        <div class="form-group col-md-6">
                                            <label for="currentFiscalYear">{{
                                                $t('Current Fiscal Year')
                                            }}
                                                <span class="required">*</span>
                                            </label>
                                            <v-select
                                                v-model="form.currentFiscalYear"
                                                :options="fiscalYears"
                                                label="full_name"
                                                :class="{
                                                    'is-invalid': form.errors.has('currentFiscalYear'),
                                                }"
                                                name="currentFiscalYear"
                                                :placeholder="fiscalYears.length > 0 ? $t('Select a fiscal year') : $t('No fiscal years available. Please create one first.')"
                                                @input="onFiscalYearChange"
                                                :disabled="fiscalYears.length === 0"
                                            />
                                            <has-error :form="form" field="currentFiscalYear" />
                                            <small v-if="fiscalYears.length === 0" class="text-muted">
                                                <router-link :to="{ name: 'setup.fiscal-years' }">
                                                    {{ $t('Create Fiscal Years') }}
                                                </router-link>
                                            </small>
                                        </div>
                                        <!-- Accounting Period Selection -->
                                        <div class="form-group col-md-6">
                                            <label for="currentAccountingPeriod">{{
                                                $t('Current Accounting Period')
                                            }}
                                                <span class="required">*</span>
                                            </label>
                                            <v-select
                                                v-model="form.currentAccountingPeriod"
                                                :options="filteredAccountingPeriods"
                                                label="full_name"
                                                :class="{
                                                    'is-invalid': form.errors.has('currentAccountingPeriod'),
                                                }"
                                                name="currentAccountingPeriod"
                                                :placeholder="filteredAccountingPeriods.length > 0 ? $t('Select an accounting period') : $t('No accounting periods available. Please create one first.')"
                                                :disabled="filteredAccountingPeriods.length === 0"
                                            />
                                            <has-error :form="form" field="currentAccountingPeriod" />
                                            <small v-if="filteredAccountingPeriods.length === 0" class="text-muted">
                                                <router-link :to="{ name: 'setup.accounting-periods' }">
                                                    {{ $t('Create Accounting Periods') }}
                                                </router-link>
                                            </small>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <!--/Default client-->
                                        <div
                                            v-if="this.allClients"
                                            class="form-group col-md-4"
                                        >
                                            <label for="client"
                                                >{{
                                                    $t(
                                                        'Default Client'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <v-select
                                                v-model="form.defaultClient"
                                                :options="this.allClients"
                                                label="name"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'defaultClient'
                                                        ),
                                                }"
                                                name="client"
                                                :placeholder="
                                                    $t(
                                                        'Select a client'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="defaultClient"
                                            />
                                        </div>
                                        <!--/Default Account-->
                                        <div
                                            v-if="this.allAccounts"
                                            class="form-group col-md-4"
                                        >
                                            <label for="client"
                                                >{{
                                                    $t(
                                                        'Default Account'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <v-select
                                                v-model="form.defaultAccount"
                                                :options="allAccounts"
                                                label="bankName"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'defaultAccount'
                                                        ),
                                                }"
                                                name="account"
                                                :placeholder="
                                                    $t(
                                                        'Select a account'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="defaultAccount"
                                            />
                                        </div>
                                        <!--/Default VatRate-->
                                        <div
                                            v-if="this.allVatRates"
                                            class="form-group col-md-4"
                                        >
                                            <label for="vatRate"
                                                >{{
                                                    $t(
                                                        'Default Tax Rate'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <v-select
                                                v-model="form.defaultVatRate"
                                                :options="this.allVatRates"
                                                label="name"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'defaultVatRate'
                                                        ),
                                                }"
                                                name="vatRate"
                                                :placeholder="
                                                    $t(
                                                        'Select a Tax Rate'
                                                    )
                                                "
                                            />
                                            <has-error
                                                :form="form"
                                                field="defaultVatRate"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="logo">{{
                                                $t(
                                                    'White Logo'
                                                )
                                            }}</label>
                                            <div class="custom-file">
                                                <input
                                                    id="logo"
                                                    type="file"
                                                    class="custom-file-input"
                                                    name="logo"
                                                    :class="{
                                                        'is-invalid':
                                                            form.errors.has(
                                                                'logo'
                                                            ),
                                                    }"
                                                    @change="onLogoChange"
                                                />
                                                <label
                                                    class="custom-file-label"
                                                    for="logo"
                                                    >{{
                                                        $t('Choose file')
                                                    }}</label
                                                >
                                            </div>
                                            <has-error
                                                :form="form"
                                                field="logo"
                                            />
                                            <div class="bg-light mt-4 w-25">
                                                <img
                                                    v-if="logo"
                                                    :src="logo"
                                                    class="img-fluid"
                                                    alt="Logo"
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="blackLogo">{{
                                                $t(
                                                    'Black Logo'
                                                )
                                            }}</label>
                                            <div class="custom-file">
                                                <input
                                                    id="blackLogo"
                                                    type="file"
                                                    class="custom-file-input"
                                                    name="blackLogo"
                                                    :class="{
                                                        'is-invalid':
                                                            form.errors.has(
                                                                'blackLogo'
                                                            ),
                                                    }"
                                                    @change="onBlackLogoChange"
                                                />
                                                <label
                                                    class="custom-file-label"
                                                    for="blackLogo"
                                                    >{{
                                                        $t('Choose file')
                                                    }}</label
                                                >
                                            </div>
                                            <has-error
                                                :form="form"
                                                field="blackLogo"
                                            />
                                            <div class="bg-light mt-4 w-25">
                                                <img
                                                    v-if="blackLogo"
                                                    :src="blackLogo"
                                                    class="img-fluid"
                                                    alt="Black Logo"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="smallLogo">{{
                                                $t(
                                                    'Small Logo'
                                                )
                                            }}</label>
                                            <div class="custom-file">
                                                <input
                                                    id="smallLogo"
                                                    type="file"
                                                    class="custom-file-input"
                                                    name="smallLogo"
                                                    :class="{
                                                        'is-invalid':
                                                            form.errors.has(
                                                                'smallLogo'
                                                            ),
                                                    }"
                                                    @change="onSmallLogoChange"
                                                />
                                                <label
                                                    class="custom-file-label"
                                                    for="smallLogo"
                                                    >{{
                                                        $t('Choose file')
                                                    }}</label
                                                >
                                            </div>
                                            <has-error
                                                :form="form"
                                                field="smallLogo"
                                            />
                                            <div class="bg-light mt-4 w-25">
                                                <img
                                                    v-if="smallLogo"
                                                    :src="smallLogo"
                                                    class="img-fluid"
                                                    alt="Small Logo"
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="favicon">{{
                                                $t(
                                                    'Favicon'
                                                )
                                            }}</label>
                                            <div class="custom-file">
                                                <input
                                                    id="favicon"
                                                    type="file"
                                                    class="custom-file-input"
                                                    name="favicon"
                                                    :class="{
                                                        'is-invalid':
                                                            form.errors.has(
                                                                'favicon'
                                                            ),
                                                    }"
                                                    @change="onFaviconChange"
                                                />
                                                <label
                                                    class="custom-file-label"
                                                    for="favicon"
                                                    >{{
                                                        $t('Choose file')
                                                    }}</label
                                                >
                                            </div>
                                            <has-error
                                                :form="form"
                                                field="favicon"
                                            />
                                            <div class="bg-light mt-4 w-25">
                                                <img
                                                    v-if="favicon"
                                                    :src="favicon"
                                                    class="img-fluid"
                                                    alt="Favicon"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-12">
                                        <label for="copyrightText">{{
                                            $t(
                                            "Invoice Thank You Message"
                                            )
                                        }}
                                            <span class="required">*</span></label>
                                        <input id="invoiceThankYouMessage" v-model="form.invoiceThankYouMessage" type="text" class="form-control"
                                            :class="{ 'is-invalid': form.errors.has('invoiceThankYouMessage') }" name="invoiceThankYouMessage"/>
                                        <has-error :form="form" field="invoiceThankYouMessage" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-12">
                                            <label for="copyrightText"
                                                >{{
                                                    $t(
                                                        'Copyright Text'
                                                    )
                                                }}
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                id="copyrightText"
                                                v-model="form.copyrightText"
                                                type="text"
                                                class="form-control"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'copyrightText'
                                                        ),
                                                }"
                                                name="copyrightText"
                                                placeholder="$t('Copyright Text')"
                                            />
                                            <has-error
                                                :form="form"
                                                field="copyrightText"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <v-button
                                :loading="form.busy"
                                class="btn btn-primary"
                            >
                                <i class="fas fa-edit" />
                                {{ $t('Save changes') }}
                            </v-button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Form from 'vform';
import { mapGetters } from 'vuex';
import { loadMessages } from '~/plugins/i18n';
import axios from 'axios';

export default {
    middleware: ['auth', 'check-permissions'],
    metaInfo() {
        return { title: this.$t('General Settings') };
    },
    data: () => ({
        isDemoMode: window.config.isDemoMode,
        allClients: [],
        allAccounts: [],
        allVatRates: [],
        fiscalYears: [],
        accountingPeriods: [],
        countries: [
            { code: 'SA', name: 'Saudi Arabia' },
            { code: 'US', name: 'United States' },
            { code: 'CA', name: 'Canada' },
            { code: 'GB', name: 'United Kingdom' },
            { code: 'DE', name: 'Germany' },
            { code: 'FR', name: 'France' },
            { code: 'IT', name: 'Italy' },
            { code: 'ES', name: 'Spain' },
            { code: 'NL', name: 'Netherlands' },
            { code: 'BE', name: 'Belgium' },
            { code: 'CH', name: 'Switzerland' },
            { code: 'AT', name: 'Austria' },
            { code: 'SE', name: 'Sweden' },
            { code: 'NO', name: 'Norway' },
            { code: 'DK', name: 'Denmark' },
            { code: 'FI', name: 'Finland' },
            { code: 'PL', name: 'Poland' },
            { code: 'CZ', name: 'Czech Republic' },
            { code: 'HU', name: 'Hungary' },
            { code: 'RO', name: 'Romania' },
            { code: 'BG', name: 'Bulgaria' },
            { code: 'HR', name: 'Croatia' },
            { code: 'SI', name: 'Slovenia' },
            { code: 'SK', name: 'Slovakia' },
            { code: 'LT', name: 'Lithuania' },
            { code: 'LV', name: 'Latvia' },
            { code: 'EE', name: 'Estonia' },
            { code: 'IE', name: 'Ireland' },
            { code: 'PT', name: 'Portugal' },
            { code: 'GR', name: 'Greece' },
            { code: 'CY', name: 'Cyprus' },
            { code: 'MT', name: 'Malta' },
            { code: 'LU', name: 'Luxembourg' },
            { code: 'IS', name: 'Iceland' },
            { code: 'LI', name: 'Liechtenstein' },
            { code: 'MC', name: 'Monaco' },
            { code: 'SM', name: 'San Marino' },
            { code: 'VA', name: 'Vatican City' },
            { code: 'AD', name: 'Andorra' },
            { code: 'AU', name: 'Australia' },
            { code: 'NZ', name: 'New Zealand' },
            { code: 'JP', name: 'Japan' },
            { code: 'CN', name: 'China' },
            { code: 'KR', name: 'South Korea' },
            { code: 'IN', name: 'India' },
            { code: 'BR', name: 'Brazil' },
            { code: 'MX', name: 'Mexico' },
            { code: 'AR', name: 'Argentina' },
            { code: 'CL', name: 'Chile' },
            { code: 'CO', name: 'Colombia' },
            { code: 'PE', name: 'Peru' },
            { code: 'VE', name: 'Venezuela' },
            { code: 'UY', name: 'Uruguay' },
            { code: 'PY', name: 'Paraguay' },
            { code: 'BO', name: 'Bolivia' },
            { code: 'EC', name: 'Ecuador' },
            { code: 'GY', name: 'Guyana' },
            { code: 'SR', name: 'Suriname' },
            { code: 'FK', name: 'Falkland Islands' },
            { code: 'GS', name: 'South Georgia' },
            { code: 'AQ', name: 'Antarctica' },
            { code: 'RU', name: 'Russia' },
            { code: 'UA', name: 'Ukraine' },
            { code: 'BY', name: 'Belarus' },
            { code: 'MD', name: 'Moldova' },
            { code: 'GE', name: 'Georgia' },
            { code: 'AM', name: 'Armenia' },
            { code: 'AZ', name: 'Azerbaijan' },
            { code: 'KZ', name: 'Kazakhstan' },
            { code: 'UZ', name: 'Uzbekistan' },
            { code: 'TM', name: 'Turkmenistan' },
            { code: 'KG', name: 'Kyrgyzstan' },
            { code: 'TJ', name: 'Tajikistan' },
            { code: 'MN', name: 'Mongolia' },
            { code: 'AF', name: 'Afghanistan' },
            { code: 'PK', name: 'Pakistan' },
            { code: 'BD', name: 'Bangladesh' },
            { code: 'LK', name: 'Sri Lanka' },
            { code: 'NP', name: 'Nepal' },
            { code: 'BT', name: 'Bhutan' },
            { code: 'MV', name: 'Maldives' },
            { code: 'MM', name: 'Myanmar' },
            { code: 'TH', name: 'Thailand' },
            { code: 'LA', name: 'Laos' },
            { code: 'KH', name: 'Cambodia' },
            { code: 'VN', name: 'Vietnam' },
            { code: 'MY', name: 'Malaysia' },
            { code: 'SG', name: 'Singapore' },
            { code: 'ID', name: 'Indonesia' },
            { code: 'PH', name: 'Philippines' },
            { code: 'TW', name: 'Taiwan' },
            { code: 'HK', name: 'Hong Kong' },
            { code: 'MO', name: 'Macau' },
            { code: 'TR', name: 'Turkey' },
            { code: 'IL', name: 'Israel' },
            { code: 'LB', name: 'Lebanon' },
            { code: 'SY', name: 'Syria' },
            { code: 'JO', name: 'Jordan' },
            { code: 'IQ', name: 'Iraq' },
            { code: 'IR', name: 'Iran' },
            { code: 'KW', name: 'Kuwait' },
            { code: 'BH', name: 'Bahrain' },
            { code: 'QA', name: 'Qatar' },
            { code: 'AE', name: 'United Arab Emirates' },
            { code: 'OM', name: 'Oman' },
            { code: 'YE', name: 'Yemen' },
            { code: 'EG', name: 'Egypt' },
            { code: 'SD', name: 'Sudan' },
            { code: 'SS', name: 'South Sudan' },
            { code: 'LY', name: 'Libya' },
            { code: 'TN', name: 'Tunisia' },
            { code: 'DZ', name: 'Algeria' },
            { code: 'MA', name: 'Morocco' },
            { code: 'EH', name: 'Western Sahara' },
            { code: 'MR', name: 'Mauritania' },
            { code: 'ML', name: 'Mali' },
            { code: 'BF', name: 'Burkina Faso' },
            { code: 'NE', name: 'Niger' },
            { code: 'TD', name: 'Chad' },
            { code: 'NG', name: 'Nigeria' },
            { code: 'CM', name: 'Cameroon' },
            { code: 'CF', name: 'Central African Republic' },
            { code: 'CG', name: 'Republic of the Congo' },
            { code: 'CD', name: 'Democratic Republic of the Congo' },
            { code: 'GA', name: 'Gabon' },
            { code: 'GQ', name: 'Equatorial Guinea' },
            { code: 'ST', name: 'São Tomé and Príncipe' },
            { code: 'AO', name: 'Angola' },
            { code: 'NA', name: 'Namibia' },
            { code: 'BW', name: 'Botswana' },
            { code: 'ZW', name: 'Zimbabwe' },
            { code: 'ZM', name: 'Zambia' },
            { code: 'MW', name: 'Malawi' },
            { code: 'MZ', name: 'Mozambique' },
            { code: 'MG', name: 'Madagascar' },
            { code: 'MU', name: 'Mauritius' },
            { code: 'SC', name: 'Seychelles' },
            { code: 'KM', name: 'Comoros' },
            { code: 'DJ', name: 'Djibouti' },
            { code: 'SO', name: 'Somalia' },
            { code: 'ET', name: 'Ethiopia' },
            { code: 'ER', name: 'Eritrea' },
            { code: 'KE', name: 'Kenya' },
            { code: 'TZ', name: 'Tanzania' },
            { code: 'UG', name: 'Uganda' },
            { code: 'RW', name: 'Rwanda' },
            { code: 'BI', name: 'Burundi' },
        ],
        breadcrumbsCurrent: 'General Settings',
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
                name: 'Update general settings',
                url: '',
            },
        ],
        form: new Form({
            companyName: '',
            companyTagline: '',
            emailAddress: '',
            phoneNumber: '',
            address: '',
            clientPrefix: '',
            supplierPrefix: '',
            employeePrefix: '',
            proCatPrefix: '',
            proSubCatPrefix: '',
            productPrefix: '',
            expCatPrefix: '',
            expSubCatPrefix: '',
            purchasePrefix: '',
            purchaseReturnPrefix: '',
            quotationPrefix: '',
            invoicePrefix: '',
            invoiceReturnPrefix: '',
            adjustmentPrefix: '',
            currency: '',
            language: 'ar',
            country: 'SA',
            copyrightText: '',
            invoiceThankYouMessage: '',
            taxRegistrationNumber: '',
            logo: '',
            blackLogo: '',
            smallLogo: '',
            favicon: '',
            defaultClient: '',
            defaultAccount: '',
            defaultVatRate: '',
            currentFiscalYear: '',
            currentAccountingPeriod: '',
        }),
        logo: '',
        blackLogo: '',
        smallLogo: '',
        favicon: '',
    }),
    computed: {
        ...mapGetters({
            appInfo: 'operations/appInfo',
            items: 'operations/items',
            locales: 'lang/locales',
        }),
        filteredAccountingPeriods() {
            if (!this.accountingPeriods) {
                return [];
            }
            
            // If no fiscal year is selected, return all accounting periods
            if (!this.form.currentFiscalYear) {
                return this.accountingPeriods;
            }
            
            // Filter accounting periods by the selected fiscal year
            return this.accountingPeriods.filter(period => 
                period.fiscal_year && period.fiscal_year.id === this.form.currentFiscalYear.id
            );
        }
    },

    async created() {
        this.getVatRates();
        this.getCurrencies();
        this.getClients();
        this.getAccounts();
        
        // Load fiscal years and accounting periods first
        await this.getFiscalYears();
        await this.getAccountingPeriods();
        
        // Then assign values
        this.assignValues();
    },
    methods: {
        // get all product categories
        async getCurrencies() {
            await this.$store.dispatch('operations/allData', {
                path: '/api/all-currencies',
            });
        },
        // get all clients
        async getClients() {
            await axios.get('/api/all-clients').then((response) => {
                this.allClients = response.data.data;
                // assign default client
                if (this.allClients && this.allClients.length > 0) {
                    let defaultClientSlug = this.appInfo.defaultClientSlug;
                    this.form.defaultClient = this.allClients.find(
                        (client) => client.slug === defaultClientSlug
                    );
                }
            });
        },
        // get all accounts
        async getAccounts() {
            await axios.get('/api/all-accounts').then((response) => {
                this.allAccounts = response.data.data;
                // assign default account
                if (this.allAccounts && this.allAccounts.length > 0) {
                    let defaultAccountSlug = this.appInfo.defaultAccountSlug;
                    this.form.defaultAccount = this.allAccounts.find(
                        (account) => account.slug === defaultAccountSlug
                    );
                }
            });
        },
        // get all vat rates
        getVatRates() {
            axios.get('/api/all-vat-rates').then((response) => {
                this.allVatRates = response.data.data;
                // assign default vat rate
                if (this.allVatRates && this.allVatRates.length > 0) {
                    let defaultVatRateSlug = this.appInfo.defaultVatRateSlug;
                    this.form.defaultVatRate = this.allVatRates.find(
                        (tax) => tax.slug === defaultVatRateSlug
                    );
                }
            });
        },
        // get all fiscal years
        async getFiscalYears() {
            try {
                const response = await axios.get('/api/all-fiscal-years');
                this.fiscalYears = response.data.data;
                console.log('Fiscal Years loaded:', this.fiscalYears);
            } catch (error) {
                console.error('Error loading fiscal years:', error);
                this.fiscalYears = [];
            }
        },
        // get all accounting periods
        async getAccountingPeriods() {
            try {
                const response = await axios.get('/api/all-accounting-periods');
                this.accountingPeriods = response.data.data;
                console.log('Accounting Periods loaded:', this.accountingPeriods);
            } catch (error) {
                console.error('Error loading accounting periods:', error);
                this.accountingPeriods = [];
            }
        },
        // handle fiscal year change
        onFiscalYearChange(fiscalYear) {
            this.form.currentFiscalYear = fiscalYear;
            
            // Check if current accounting period belongs to the new fiscal year
            if (this.form.currentAccountingPeriod && 
                this.form.currentAccountingPeriod.fiscal_year && 
                this.form.currentAccountingPeriod.fiscal_year.id !== fiscalYear.id) {
                // Reset accounting period if it doesn't belong to the new fiscal year
                this.form.currentAccountingPeriod = '';
            }
        },
        // assign values
        assignValues() {
            if (this.appInfo) {
                this.form.companyName = this.appInfo.companyName;
                this.form.companyTagline = this.appInfo.companyTagline;
                this.form.emailAddress = this.appInfo.email;
                this.form.phoneNumber = this.appInfo.phone;
                this.form.address = this.appInfo.address;
                this.form.clientPrefix = this.appInfo.clientPrefix;
                this.form.supplierPrefix = this.appInfo.supplierPrefix;
                this.form.employeePrefix = this.appInfo.employeePrefix;
                this.form.proCatPrefix = this.appInfo.proCatPrefix;
                this.form.proSubCatPrefix = this.appInfo.proSubCatPrefix;
                this.form.productPrefix = this.appInfo.productPrefix;
                this.form.expCatPrefix = this.appInfo.expCatPrefix;
                this.form.expSubCatPrefix = this.appInfo.expSubCatPrefix;
                this.form.purchasePrefix = this.appInfo.purchasePrefix;
                this.form.purchaseReturnPrefix =
                    this.appInfo.purchaseReturnPrefix;
                this.form.quotationPrefix = this.appInfo.quotationPrefix;
                this.form.invoicePrefix = this.appInfo.invoicePrefix;
                this.form.invoiceReturnPrefix =
                    this.appInfo.invoiceReturnPrefix;
                this.form.adjustmentPrefix = this.appInfo.adjustmentPrefix;
                this.form.currency = this.appInfo.currency;
                this.form.language = this.appInfo.language;
                this.form.country = this.appInfo.country;
                this.logo = this.appInfo.logo;
                this.blackLogo = this.appInfo.blackLogo;
                this.smallLogo = this.appInfo.smallLogo;
                this.favicon = this.appInfo.favicon;
                this.form.copyrightText = this.appInfo.copyright;
                this.form.invoiceThankYouMessage = this.appInfo.invoiceThankYouMessage;
                this.form.taxRegistrationNumber = this.appInfo.taxRegistrationNumber;
                
                // Assign fiscal year and accounting period
                if (this.appInfo.currentFiscalYear && this.fiscalYears.length > 0) {
                    this.form.currentFiscalYear = this.fiscalYears.find(
                        (fy) => fy.id === this.appInfo.currentFiscalYear.id
                    );
                }
                if (this.appInfo.currentAccountingPeriod && this.accountingPeriods.length > 0) {
                    this.form.currentAccountingPeriod = this.accountingPeriods.find(
                        (period) => period.id === this.appInfo.currentAccountingPeriod.id
                    );
                }
            }
        },

        // vue logo upload
        onLogoChange(e) {
            const file = e.target.files[0];
            const reader = new FileReader();
            if (
                file.size < 2111775 &&
                (file.type === 'image/jpeg' ||
                    file.type === 'image/png' ||
                    file.type === 'image/gif' ||
                    file.type === "image/svg" ||
                    file.type === "image/svg+xml")
            ) {
                reader.onloadend = () => {
                    this.form.logo = reader.result;
                };
                reader.readAsDataURL(file);
                this.logo = URL.createObjectURL(file);
            } else {
                Swal.fire(
                    this.$t('Error!'),
                    this.$t('Please select a valid thumbnail with size less than 2 MB'),
                    'error'
                );
            }
        },

        // vue black logo upload
        onBlackLogoChange(e) {
            const file = e.target.files[0];
            const reader = new FileReader();
            if (
                file.size < 2111775 &&
                (file.type === 'image/jpeg' ||
                    file.type === 'image/png' ||
                    file.type === 'image/gif' ||
                    file.type === "image/svg" ||
                    file.type === "image/svg+xml")
            ) {
                reader.onloadend = () => {
                    this.form.blackLogo = reader.result;
                };
                reader.readAsDataURL(file);
                this.blackLogo = URL.createObjectURL(file);
            } else {
                Swal.fire(
                    this.$t('Error!'),
                    this.$t('Please select a valid thumbnail with size less than 2 MB'),
                    'error'
                );
            }
        },

        // vue small logo upload
        onSmallLogoChange(e) {
            const file = e.target.files[0];
            const reader = new FileReader();
            if (
                file.size < 2111775 &&
                (file.type === 'image/jpeg' ||
                    file.type === 'image/png' ||
                    file.type === 'image/gif' ||
                    file.type === "image/svg" ||
                    file.type === "image/svg+xml")
            ) {
                reader.onloadend = () => {
                    this.form.smallLogo = reader.result;
                };
                reader.readAsDataURL(file);
                this.smallLogo = URL.createObjectURL(file);
            } else {
                Swal.fire(
                    this.$t('Error!'),
                    this.$t('Please select a valid thumbnail with size less than 2 MB'),
                    'error'
                );
            }
        },

        // vue favicon upload
        onFaviconChange(e) {
            const file = e.target.files[0];
            const reader = new FileReader();
            if (
                file.size < 2111775 &&
                (file.type === 'image/jpeg' ||
                    file.type === 'image/png' ||
                    file.type === 'image/gif' ||
                    file.type === "image/svg" ||
                    file.type === "image/svg+xml")
            ) {
                reader.onloadend = () => {
                    this.form.favicon = reader.result;
                };
                reader.readAsDataURL(file);
                this.favicon = URL.createObjectURL(file);
            } else {
                Swal.fire(
                    this.$t('Error!'),
                    this.$t('Please select a valid thumbnail with size less than 2 MB'),
                    'error'
                );
            }
        },

        // update settings
        async updateSettings() {
            if (this.isDemoMode) {
                return toast.fire({
                    type: 'warning',
                    title: this.$t(
                        'You are not allowed to do this in demo version.'
                    ),
                });
            }
            // update locale
            let locale = this.form.language;
            if (this.$i18n.locale !== locale) {
                loadMessages(locale);
                this.$store.dispatch('lang/setLocale', { locale });
            }

            // for production
            await this.form
                .post(window.location.origin + '/api/update-settings')
                .then(() => {
                    toast.fire({
                        type: 'success',
                        title: this.$t(
                            'Settings updated successfully'
                        ),
                    });
                    window.location.reload();
                })
                .catch(() => {
                    toast.fire({
                        type: 'error',
                        title: this.$t('Opps...something went wrong'),
                    });
                });

            // action for demo
            // toast.fire({
            //   type: "warning",
            //   title: this.$t("You are not allowed to do this in demo version."),
            // });
        },
    },
};
</script>

<style lang="scss" scoped>
.inner-card {
    margin-top: 20px;
    border-radius: 20px;
    box-shadow: 0px 8px 20px 0px #00000014;
    border: 1px solid #CED4DA;
    background: #fff;
}

.inner-card .card-header {
    background-color: #33a0d9;
    color: #ffffff;
    border-radius: 20px 20px 0 0;
    padding: 22px 16px;
    border-bottom: none;
}

/* Inputs styling to match ClientForm */
.form-control {
    background: #fff !important;
}

input[readonly] {
    background-color: #f8f9fa !important;
    color: #6c757d;
    border-color: #CED4DA;
    cursor: not-allowed;
}

.form-control:focus,
select.form-control:focus,
textarea.form-control:focus {
    border-color: #33a0d9;
    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.15);
}

/* v-select tweaks */
.v-select .vs__dropdown-toggle {
    border-radius: 6px;
    border-color: #CED4DA;
}

.v-select .vs__dropdown-toggle:focus,
.v-select .vs__dropdown-toggle.vs__open {
    border-color: #33a0d9;
    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.15);
}

.v-select .vs__search,
.v-select .vs__selected,
.v-select .vs__dropdown-menu {
    font-size: 0.95rem;
}

/* Custom file input */
.custom-file-input:focus ~ .custom-file-label {
    border-color: #33a0d9;
    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.15);
}

.custom-file-label {
    border-radius: 6px;
    text-align: left !important;
}

[dir="rtl"] .custom-file-label {
    text-align: left !important;
}
</style>
