<template>
    <div :id="tableId || undefined" class="table-responsive table-custom" :class="wrapperClass" :dir="dir || undefined">
        <table class="table general-table">
            <thead>
                <tr>
                    <th v-for="(column, index) in columns" :key="index" :class="[
                        column.align || '',
                        sortable && column.sortable !== false ? 'sortable' : ''
                    ]" @click="sortable && column.sortable !== false ? handleSort(column.key) : null">
                        <div class="th-content">
                            <span>{{ column.label }}</span>
                            <span v-if="sortable && column.sortable !== false" class="sort-icons">
                                <i class="fas fa-sort-up"
                                    :class="{ active: sortColumn === column.key && sortDirection === 'asc' }"></i>
                                <i class="fas fa-sort-down"
                                    :class="{ active: sortColumn === column.key && sortDirection === 'desc' }"></i>
                            </span>
                        </div>
                    </th>
                    <th v-if="(actions && actions.length > 0) || showActions" class="text-right">
                        <i v-if="actionHeaderIcon" :class="actionHeaderIcon"></i>
                        <span v-else>{{ $t("Action") }}</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-if="sortedRows.length">
                    <tr v-for="(row, rowIndex) in sortedRows" :key="rowIndex">
                        <td v-for="(column, colIndex) in columns" :key="colIndex" :class="column.align || ''">
                            <slot :name="`cell-${column.key}`" :row="row" :value="getCellValue(row, column.key)"
                                :column="column">
                                {{ getCellValue(row, column.key) }}
                            </slot>
                        </td>
                        <td v-if="(actions && actions.length > 0) || showActions" class="text-right">
                            <slot name="actions" :row="row" :index="rowIndex">
                                <div class="action-buttons">
                                    <button v-for="(action, actionIndex) in actions" :key="actionIndex"
                                        :class="['btn', 'btn-sm', action.class || 'btn-outline-primary']"
                                        @click="handleAction(action, row, rowIndex)"
                                        v-tooltip="action.tooltip || action.label">
                                        <i :class="action.icon || ''"></i>
                                        <span v-if="action.showLabel">{{ action.label }}</span>
                                    </button>
                                </div>
                            </slot>
                        </td>
                    </tr>
                </template>
                <tr v-if="!loading && !sortedRows.length">
                    <td :colspan="columns.length + ((actions && actions.length > 0) || showActions ? 1 : 0)">
                        <EmptyTable :custom-message="emptyMessage" :custom-image="emptyImage" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import EmptyTable from "./EmptyTable.vue";

export default {
    name: "GeneralTable",
    components: {
        EmptyTable,
    },
    props: {
        columns: {
            type: Array,
            required: true,
            validator: (value) => {
                return value.every((col) => col.key && col.label);
            },
        },
        rows: {
            type: Array,
            default: () => [],
        },
        actions: {
            type: Array,
            default: null,
            validator: (value) => {
                if (!value) {
                    return true;
                }
                return value.every((action) => action.handler || action.to || action.href);
            },
        },
        sortable: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        tableId: {
            type: String,
            default: undefined,
        },
        wrapperClass: {
            type: String,
            default: "",
        },
        showActions: {
            type: Boolean,
            default: false,
        },
        actionHeaderIcon: {
            type: String,
            default: null,
        },
        emptyMessage: {
            type: String,
            default: null,
        },
        emptyImage: {
            type: String,
            default: null,
        },
        dir: {
            type: String,
            default: undefined,
        },
    },
    data() {
        return {
            sortColumn: null,
            sortDirection: "asc",
        };
    },
    computed: {
        sortedRows() {
            if (!this.sortable || !this.sortColumn) {
                return this.rows;
            }

            const sorted = [...this.rows].sort((a, b) => {
                const aValue = this.getCellValue(a, this.sortColumn);
                const bValue = this.getCellValue(b, this.sortColumn);

                if (aValue === null || aValue === undefined) {
                    return 1;
                }
                if (bValue === null || bValue === undefined) {
                    return -1;
                }

                if (typeof aValue === "number" && typeof bValue === "number") {
                    return this.sortDirection === "asc" ? aValue - bValue : bValue - aValue;
                }

                const aStr = String(aValue).toLowerCase();
                const bStr = String(bValue).toLowerCase();

                if (this.sortDirection === "asc") {
                    return aStr.localeCompare(bStr);
                } else {
                    return bStr.localeCompare(aStr);
                }
            });

            return sorted;
        },
    },
    methods: {
        getCellValue(row, key) {
            if (key.includes(".")) {
                const keys = key.split(".");
                let value = row;
                for (const k of keys) {
                    value = value?.[k];
                }
                return value;
            }
            return row[key];
        },
        handleSort(columnKey) {
            if (this.sortColumn === columnKey) {
                this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
            } else {
                this.sortColumn = columnKey;
                this.sortDirection = "asc";
            }
        },
        handleAction(action, row, index) {
            if (action.handler) {
                action.handler(row, index);
            } else if (action.to) {
                this.$router.push(typeof action.to === "function" ? action.to(row) : action.to);
            } else if (action.href) {
                window.location.href =
                    typeof action.href === "function" ? action.href(row) : action.href;
            } else if (action.event) {
                this.$emit(action.event, row, index);
            }
        },
    },
};
</script>

<style scoped>
.table-custom {
    border: none;
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
}

.table-responsive {
    width: 100%;
    overflow-x: auto;
}

.general-table {
    width: 100%;
    border-collapse: collapse;
    font-family: DINNextLTArabic;
    font-weight: 400;
    color: #000000;
    direction: ltr;
}

[dir="rtl"] .general-table {
    direction: rtl;
}

.general-table thead th {
    background: #eceff3;
    color: #2f3541;
    padding: 10px 12px;
    border: none;
    cursor: default;
}

.general-table thead th.sortable {
    cursor: pointer;
    user-select: none;
}

.general-table thead th.sortable:hover {
    background: #d8dfe6;
}

.general-table thead th:first-child {
    border-top-left-radius: 12px;
}

.general-table thead th:last-child {
    border-top-right-radius: 12px;
}

[dir="rtl"] .general-table thead th:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 12px;
}

[dir="rtl"] .general-table thead th:last-child {
    border-top-right-radius: 0;
    border-top-left-radius: 12px;
}

.th-content {
    display: flex;
    align-items: center;
    gap: 8px;
}

.sort-icons {
    display: flex;
    flex-direction: column;
    gap: 2px;
    opacity: 0.3;
    transition: opacity 0.2s;
}

.general-table thead th.sortable:hover .sort-icons {
    opacity: 0.6;
}

.sort-icons i {
    font-size: 10px;
    line-height: 1;
    color: #2f3541;
}

.sort-icons i.active {
    opacity: 1;
    color: #0775af;
}

.general-table tbody td {
    padding: 10px 12px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #e3e7ea;
    color: #000000;
}

.table-custom .table td,
.table-custom .table thead>tr>th {
    border-left: none !important;
    border-right: none !important;
}

.general-table tbody tr:last-child td {
    border-bottom: none;
}

.general-table tbody tr:hover {
    background: #f7f9fb;
}

.general-table .badge.bg-success {
    background: #daf5ca !important;
    color: #005523 !important;
    border-radius: 8px;
}

.general-table .badge.bg-danger {
    background: #eceff3 !important;
    color: #545d71 !important;
    border-radius: 8px;
}

.general-table a {
    color: inherit;
    text-decoration: none;
}

.general-table a:hover {
    text-decoration: underline;
}

.action-buttons {
    display: flex;
    gap: 6px;
    justify-content: flex-end;
    flex-wrap: wrap;
}

[dir="rtl"] .action-buttons {
    justify-content: flex-start;
}

.action-buttons .btn {
    padding: 4px 8px;
    font-size: 0.875rem;
}

.action-buttons .btn i {
    margin-right: 4px;
}

[dir="rtl"] .action-buttons .btn i {
    margin-right: 0;
    margin-left: 4px;
}

@media (max-width: 576px) {
    .general-table {
        font-size: 0.875rem;
    }

    .general-table thead th,
    .general-table tbody td {
        padding: 8px 10px;
    }

    .action-buttons {
        flex-direction: column;
        gap: 4px;
    }

    .action-buttons .btn {
        width: 100%;
    }
}
</style>
