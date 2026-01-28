<template>
    <div v-if="items && items.length > 0" class="items-table-wrapper mt-3 mb-4">
        <div class="table-responsive table-custom w-100 m-auto" style="max-width: 100%;">
            <table :class="['table', 'table-hover', 'table-sm', 'text-center', tableClass]">
                <thead>
                    <th>{{ $t("#") }}</th>
                    <th>{{ $t("Code") }}</th>
                    <th>{{ $t("Item Name") }}</th>
                    <th v-if="showInvoiceQtyColumn">{{ $t("Invoice Qty") }}</th>
                    <th v-if="showCurrentQtyColumn">{{ $t("Current Qty") }}</th>
                    <th>{{ $t("Qty") }}</th>
                    <th>{{ $t("Price") }}</th>
                    <th>{{ $t("Total") }}</th>
                    <th v-if="!hideDiscountColumn">{{ $t("Discount") }}</th>
                    <th v-if="!hideDiscountColumn">{{ $t("Total After Discount") }}</th>
                    <th v-if="!hideVatColumn">{{ $t("VAT Type") }}</th>
                    <th v-if="!hideVatColumn">{{ $t("VAT") }}</th>
                    <th v-if="!hideVatColumn">{{ $t("Total with VAT") }}</th>
                    <th v-if="showReturnPriceColumn" class="text-right">{{ $t("Return Price") }}</th>
                    <th v-if="!showReturnPriceColumn" class="text-right">{{ $t("Action") }}</th>
                </thead>
                <tbody>
                    <tr v-for="(item, i) in items" :key="i">
                        <td class="auto-width">{{ ++i }}</td>
                        <td class="auto-width">{{ item.code | withPrefix(prefix) }}</td>
                        <td class="auto-width">
                            <div class="d-flex align-items-center">
                                <span v-if="Number(item.inventoryCount) < Number(getItemField(item, qtyFieldName)) && item.itemType == 'product'
                                " v-tooltip="$t('Click to manage stock')"
                                    class="badge badge-danger p-2 mr-2 clickable-badge"
                                    @click="$emit('open-stock-modal', item)">
                                    <i class="fas fa-exclamation"></i>
                                </span>
                                <div class="flex-grow-1">
                                    <router-link v-if="$can('product-view')" :to="{
                                        name: 'products.show',
                                        params: { slug: item.slug },
                                    }">
                                        {{ item.name }}
                                    </router-link>
                                    <span v-else>{{ item.name }}</span>
                                </div>
                                <button v-if="showEditButton" type="button" class="btn btn-sm btn-outline-primary ml-2"
                                    @click="$emit('edit-product', item)" v-tooltip="$t('Edit Product')">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                        </td>
                        <td v-if="showInvoiceQtyColumn" class="auto-width">
                            {{ item.invoiceQty || item.qty }} {{ item.unit || '' }}
                        </td>
                        <td v-if="showCurrentQtyColumn" class="auto-width">
                            {{ item.returnQty !== undefined ? item.returnQty : ((item.invoiceQty || item.qty) -
                                (item.oldQty || 0)) }} {{ item.unit || '' }}
                        </td>
                        <td class="fixed-qty-column">
                            <div class="input-group custom-qty-input">
                                <input type="button" value="-" class="button-minus icon-shape icon-sm btn-danger"
                                    data-field="quantity" :disabled="item.isFromQuotation" @click="
                                        handleItemChange(
                                            getItemField(item, qtyFieldName),
                                            'qty',
                                            i - 1,
                                            'decrement'
                                        )
                                        " />

                                <input type="number" step="any" :id="`Qty-${i}`" v-model.number="item[qtyFieldName]"
                                    name="quantity" class="quantity-field border-0 incrementor" required min="1"
                                    :max="disableInventoryMaxRestriction ? null : (item.itemType == 'product' ? item.inventoryCount : (item.maxQty || null))"
                                    :readonly="item.isFromQuotation" :class="{
                                        'is-invalid': getFieldError(`selectedProducts.${i - 1}.${qtyFieldName}`),
                                        'insufficient-stock-input': Number(item.inventoryCount) < Number(getItemField(item, qtyFieldName)) && item.itemType == 'product'
                                    }" @change="
                                        handleItemChange(
                                            $event.target.value,
                                            'qty',
                                            i - 1,
                                            ''
                                        )
                                        " @keyup="
                                            handleItemChange(
                                                $event.target.value,
                                                'qty',
                                                i - 1,
                                                ''
                                            )
                                            " @input="
                                                handleItemChange(
                                                    $event.target.value,
                                                    'qty',
                                                    i - 1,
                                                    ''
                                                )
                                                " :placeholder="$t('Quantity')" />

                                <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                                    data-field="quantity" :disabled="item.isFromQuotation" @click="
                                        handleItemChange(
                                            getItemField(item, qtyFieldName),
                                            'qty',
                                            i - 1,
                                            'increment'
                                        )
                                        " />
                            </div>
                        </td>
                        <td class="auto-width">
                            <div class="input-group custom-qty-input" v-if="!priceReadonly">
                                <input type="number" step="any" min="0" :id="`unitPrice-${i}`"
                                    v-model.number="item[unitPriceFieldName]" name="unitPrice"
                                    class="quantity-field border-0" required :readonly="item.isFromQuotation"
                                    @input="handleItemChange(item[unitPriceFieldName], 'price', i - 1, '')" />
                            </div>
                            <div v-else>
                                {{ formatToTwoDecimals(getItemField(item, unitPriceFieldName)) }}
                            </div>
                        </td>
                        <td class="no-currency auto-width">{{
                            formatToTwoDecimals(
                                (item.originalPrice || getItemField(item, unitPriceFieldName)) * (item.invoiceQty || getItemField(item, qtyFieldName) || 1)
                            ) }} <span class="saudi-riyal">ê</span></td>
                        <td v-if="!hideDiscountColumn" style="min-width: 180px;">
                            <div class="input-group">
                                <select v-model="item.discountType" class="form-control form-control-sm"
                                    style="width: 85px;"
                                    :class="{ 'is-invalid': getFieldError(`selectedProducts.${i - 1}.discountType`) }"
                                    :disabled="item.isFromQuotation" @change="handleDiscountChange(i - 1)">
                                    <option value="fixed">{{ $t("Fixed") }}</option>
                                    <option value="percentage">{{ $t("%") }}</option>
                                </select>
                                <input type="number" v-model="item.discount" class="form-control form-control-sm"
                                    style="width: 80px;" step="any" min="0"
                                    :max="item.discountType == 'percentage' ? 100 : (getItemField(item, unitPriceFieldName) * getItemField(item, qtyFieldName))"
                                    :class="{ 'is-invalid': getFieldError(`selectedProducts.${i - 1}.discount`) }"
                                    :readonly="item.isFromQuotation" placeholder="0"
                                    @change="handleDiscountChange(i - 1)" @keyup="handleDiscountChange(i - 1)" />
                            </div>
                            <div v-if="getFieldError(`selectedProducts.${i - 1}.discount`) || getFieldError(`selectedProducts.${i - 1}.discountType`)"
                                class="invalid-feedback d-block">
                                <span v-if="getFieldError(`selectedProducts.${i - 1}.discount`)" class="d-block">{{
                                    getFieldErrorMessage(`selectedProducts.${i - 1}.discount`) }}</span>
                                <span v-if="getFieldError(`selectedProducts.${i - 1}.discountType`)" class="d-block">{{
                                    getFieldErrorMessage(`selectedProducts.${i - 1}.discountType`) }}</span>
                            </div>
                        </td>
                        <td v-if="!hideDiscountColumn" class="no-currency auto-width">{{
                            formatToTwoDecimals(item.totalAfterDiscount
                                !== undefined ? item.totalAfterDiscount : ((getItemField(item, unitPriceFieldName) *
                                    getItemField(item, qtyFieldName)) -
                                    (item.discountAmount || 0))) }} <span class="saudi-riyal">ê</span></td>
                        <td v-if="!hideVatColumn" class="fixed-vat-column">
                            <select v-if="useVatRateId" v-model="item.vat_rate_id" class="form-control form-control-sm"
                                :class="{ 'is-invalid': getFieldError(`selectedProducts.${i - 1}.vat_rate_id`) }"
                                :disabled="item.isFromQuotation" @change="handleVatChange(i - 1)"
                                style="min-width: 120px;">
                                <option value="">{{ $t('Select VAT') }}</option>
                                <option v-for="tax in taxes" :key="tax.id" :value="tax.id">
                                    {{ tax.code }} ({{ tax.rate }}%)
                                </option>
                            </select>
                            <select v-else v-model="item.selectedVatRate" class="form-control form-control-sm"
                                :class="{ 'is-invalid': getFieldError(`selectedProducts.${i - 1}.selectedVatRate`) }"
                                :disabled="item.isFromQuotation" @change="handleVatChange(i - 1)"
                                style="min-width: 120px;">
                                <option value="">{{ $t('Select VAT') }}</option>
                                <option v-for="tax in taxes" :key="tax.id" :value="tax">
                                    {{ tax.code }} ({{ tax.rate }}%)
                                </option>
                            </select>
                            <div v-if="useVatRateId && getFieldError(`selectedProducts.${i - 1}.vat_rate_id`)"
                                class="invalid-feedback d-block">
                                {{ getFieldErrorMessage(`selectedProducts.${i - 1}.vat_rate_id`) }}
                            </div>
                            <div v-if="!useVatRateId && getFieldError(`selectedProducts.${i - 1}.selectedVatRate`)"
                                class="invalid-feedback d-block">
                                {{ getFieldErrorMessage(`selectedProducts.${i - 1}.selectedVatRate`) }}
                            </div>
                        </td>
                        <td v-if="!hideVatColumn" class="no-currency fixed-vat-column">
                            <div>
                                {{ formatToTwoDecimals(item.totalTax || 0) }}
                                <span class="saudi-riyal">ê</span>
                            </div>
                        </td>
                        <td v-if="!hideVatColumn" class="no-currency auto-width">{{
                            formatToTwoDecimals(item.totalPrice) }}
                            <span class="saudi-riyal">ê</span>
                        </td>
                        <td v-if="showReturnPriceColumn" class="text-right auto-width">
                            {{ formatToTwoDecimals(item.returnTotal !== undefined ? item.returnTotal : (item.totalReturn
                                || 0)) }} <span class="saudi-riyal">ê</span>
                        </td>
                        <td v-if="!showReturnPriceColumn" class="text-right auto-width">
                            <button type="button" class="btn btn-danger" @click="$emit('remove-item', item)">
                                <i class="fas fa-times"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td :colspan="(totalsColspan + (showInvoiceQtyColumn ? 1 : 0) + (showCurrentQtyColumn ? 1 : 0))"
                            class="text-right">
                            <strong v-if="!hideDiscountColumn && !hideVatColumn"> {{ $t("Total") }} : {{ amountInWords
                            }} </strong>
                            <strong v-else>{{ $t("Subtotal") }}</strong>
                        </td>
                        <td v-if="totalsColspan === 4 && !hideDiscountColumn && !hideVatColumn" class="no-currency">
                            <strong>{{ formatToTwoDecimals(totalUnitPrice) }}</strong> <span
                                class="saudi-riyal">ê</span>
                        </td>
                        <td v-if="!hideDiscountColumn && !hideVatColumn" class="no-currency">
                            <strong>{{ formatToTwoDecimals(customTotalValue !== null ? customTotalValue :
                                totalUnitPrice) }}</strong> <span class="saudi-riyal">ê</span>
                        </td>
                        <td v-if="!hideDiscountColumn && !hideVatColumn" class="no-currency">
                            <strong>{{ formatToTwoDecimals(totalProductDiscount) }}</strong> <span
                                class="saudi-riyal">ê</span>
                        </td>
                        <td v-if="!hideDiscountColumn && !hideVatColumn" class="no-currency">
                            <strong>{{ formatToTwoDecimals(totalAfterDiscount) }}</strong> <span
                                class="saudi-riyal">ê</span>
                        </td>
                        <td v-if="!hideVatColumn">
                            <strong></strong>
                        </td>
                        <td v-if="!hideVatColumn" class="no-currency">
                            <strong>{{ formatToTwoDecimals(totalProductTax) }}</strong> <span
                                class="saudi-riyal">ê</span>
                        </td>
                        <td v-if="!hideVatColumn" class="no-currency">
                            <strong>{{ formatToTwoDecimals(subtotal) }}</strong> <span class="saudi-riyal">ê</span>
                        </td>
                        <td v-if="showReturnPriceColumn && !hideDiscountColumn && !hideVatColumn" class="no-currency">
                            <strong>{{ formatToTwoDecimals(customTotalValue !== null ? customTotalValue : 0)
                            }}</strong> <span class="saudi-riyal">ê</span>
                        </td>
                        <td v-if="hideDiscountColumn && hideVatColumn" class="no-currency">
                            <strong>{{ formatToTwoDecimals(totalUnitPrice) }}</strong> <span
                                class="saudi-riyal">ê</span>
                        </td>
                        <td v-if="showReturnPriceColumn && hideDiscountColumn && hideVatColumn" class="text-right">
                            <strong>{{ formatToTwoDecimals(customTotalValue !== null ? customTotalValue : subtotal)
                            }}</strong> <span class="saudi-riyal">ê</span>
                        </td>
                        <td v-if="!showReturnPriceColumn && !hideDiscountColumn && !hideVatColumn"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemsTable',
    props: {
        items: {
            type: Array,
            required: true,
            default: () => []
        },
        prefix: {
            type: String,
            default: ''
        },
        taxes: {
            type: Array,
            default: () => []
        },
        formErrors: {
            type: Object,
            default: () => ({})
        },
        totalUnitPrice: {
            type: Number,
            default: 0
        },
        totalProductDiscount: {
            type: Number,
            default: 0
        },
        totalAfterDiscount: {
            type: Number,
            default: 0
        },
        totalProductTax: {
            type: Number,
            default: 0
        },
        subtotal: {
            type: Number,
            default: 0
        },
        amountInWords: {
            type: String,
            default: ''
        },
        showEditButton: {
            type: Boolean,
            default: true
        },
        useVatRateId: {
            type: Boolean,
            default: false
        },
        tableClass: {
            type: String,
            default: 'quotations-create-table'
        },
        qtyFieldName: {
            type: String,
            default: 'qty'
        },
        unitPriceFieldName: {
            type: String,
            default: 'unitPrice'
        },
        priceReadonly: {
            type: Boolean,
            default: false
        },
        customTotalValue: {
            type: Number,
            default: null
        },
        totalsColspan: {
            type: Number,
            default: 5
        },
        hideDiscountColumn: {
            type: Boolean,
            default: false
        },
        hideVatColumn: {
            type: Boolean,
            default: false
        },
        showInvoiceQtyColumn: {
            type: Boolean,
            default: false
        },
        showCurrentQtyColumn: {
            type: Boolean,
            default: false
        },
        showReturnPriceColumn: {
            type: Boolean,
            default: false
        },
        disableInventoryMaxRestriction: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        getItemField(item, fieldName) {
            return item[fieldName] || 0;
        },
        formatToTwoDecimals(value) {
            if (value === null || value === undefined || value === '') {
                return '0.00';
            }
            const numValue = Number(value);
            if (isNaN(numValue)) {
                return '0.00';
            }
            return numValue.toFixed(2);
        },
        getFieldError(field) {
            if (!this.formErrors || typeof this.formErrors.has !== 'function') {
                return false;
            }
            return this.formErrors.has(field);
        },
        getFieldErrorMessage(field) {
            if (!this.formErrors || typeof this.formErrors.get !== 'function') {
                return '';
            }
            return this.formErrors.get(field);
        },
        handleItemChange(value, type, index, action) {
            this.$emit('item-change', {
                value,
                type,
                index,
                action
            });
        },
        handleDiscountChange(index) {
            this.$emit('discount-change', index);
        },
        handleVatChange(index) {
            this.$emit('vat-change', index);
        }
    }
};
</script>

<style scoped>
/* ItemsTable wrapper - override row flex behavior */
.items-table-wrapper {
    width: 100%;
    display: block;
    margin-left: 0;
    margin-right: 0;
}

.table-custom {
    border: none !important;
    width: 100%;
    overflow-x: auto;
    overflow-y: visible;
    -webkit-overflow-scrolling: touch;
}

/* General table styling for all tables */
.table-custom table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    min-width: 100%;
    height: 100%;
    table-layout: auto;
}

/* General header styling for all tables */
.table-custom table thead th {
    background-color: #33a0d9;
    color: #ffffff;
    padding: 8px;
    border: none !important;
    border-color: inherit !important;
    font-weight: 400;
}

.table-custom table thead tr {
    border: none !important;
}

.table-custom table thead th:first-child {
    border-top-left-radius: 10px;
}

.table-custom table thead th:last-child {
    border-top-right-radius: 10px;
}

/* RTL styles for Arabic language */
[dir="rtl"] .table-custom table thead th:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 10px;
}

[dir="rtl"] .table-custom table thead th:last-child {
    border-top-right-radius: 0;
    border-top-left-radius: 10px;
}

/* Custom Quantity Input Styling */
.custom-qty-input {
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
}

.button-minus,
.button-plus {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.button-minus {
    background-color: #dc3545;
    color: white;
}

.button-plus {
    background-color: #007bff;
    color: white;
}

.button-minus:hover {
    background-color: #c82333;
    transform: scale(1.05);
}

.button-plus:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

.quantity-field {
    width: 60px;
    text-align: center;
    margin: 0 5px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    padding: 5px;
}

.quantity-field:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

/* Clickable badge styling */
.clickable-badge {
    cursor: pointer;
    transition: all 0.3s ease;
    user-select: none;
}

.clickable-badge:hover {
    background-color: #c82333 !important;
    transform: scale(1.05);
    box-shadow: 0 2px 4px rgba(220, 53, 69, 0.3);
}

.clickable-badge:active {
    transform: scale(0.95);
}

/* Insufficient stock input styling */
.insufficient-stock-input {
    border: 2px solid #dc3545 !important;
    background-color: #fff5f5 !important;
    color: #dc3545 !important;
}

.insufficient-stock-input:focus {
    border-color: #dc3545 !important;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
}

/* Custom Status Badge Styling */
.table-custom table .badge.badge-danger {
    background: #FEF4F4 !important;
    color: #DC3545 !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    padding: 10px 16px;
}

/* Auto-width columns - adjust to content */
.table-custom table td.auto-width {
    width: auto;
    min-width: 0;
    white-space: nowrap;
}

/* Fixed columns - maintain minimum width for Quantity, Discount, and VAT */
.table-custom table td.fixed-qty-column {
    min-width: 200px;
    width: auto;
}

.table-custom table td.fixed-discount-column {
    min-width: 180px;
    width: auto;
}

.table-custom table td.fixed-vat-column {
    min-width: 150px;
    width: auto;
}

/* Responsive table styling */
@media (max-width: 768px) {
    .table-custom {
        display: block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .table-custom table {
        display: block;
        width: 100%;
        min-width: fit-content;
        /* Allow table to size based on content */
    }

    .table-custom table thead {
        display: table-header-group;
    }

    .table-custom table tbody {
        display: table-row-group;
    }

    .table-custom table tr {
        display: table-row;
    }

    .table-custom table th,
    .table-custom table td {
        display: table-cell;
        white-space: nowrap;
    }

    /* Ensure fixed columns maintain their minimum width on mobile */
    .table-custom table td.fixed-qty-column {
        min-width: 200px;
    }

    .table-custom table td.fixed-discount-column {
        min-width: 180px;
    }

    .table-custom table td.fixed-vat-column {
        min-width: 150px;
    }
}

@media (max-width: 576px) {
    .table-custom table {
        min-width: fit-content;
        /* Allow table to size based on content */
    }

    .table-custom table thead th,
    .table-custom table tbody td {
        font-size: 12px;
        padding: 6px 4px;
    }
}
</style>
