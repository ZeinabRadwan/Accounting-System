<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Add soft deletes to main tenant models
        $tables = [
            'clients',
            'suppliers', 
            'invoices',
            'products',
            'purchases',
            'quotations',
            'expenses',
            'accounts',
            'invoice_products',
            'purchase_products',
            'quotation_products',
            'invoice_payments',
            'purchase_payments',
            'invoice_returns',
            'purchase_returns',
            'invoice_return_products',
            'purchase_return_products',
            'non_invoice_payments',
            'non_purchase_payments',
            'client_representatives',
            'supplier_representatives',
            'product_categories',
            'product_sub_categories',
            'brands',
            'units',
            'vat_rates',
            'expense_categories',
            'expense_sub_categories',
            'fiscal_years',
            'accounting_periods',
            'payments',
            'payment_methods',
            'departments',
            'employees',
            'loans',
            'loan_payments',
            'loan_authorities',
            'payrolls',
            'salary_increments',
            'assets',
            'asset_types',
            'inventory_adjustments',
            'adjustment_products',
            'balance_tansfers',
            'account_transactions',
            'account_routing_settings',
            'print_templates',
            'pages',
            'menus',
            'roles',
            'permissions',
            'features',
            'settings_images',
            'general_settings',
            'purchase_orders',
            'purchase_order_products',
            'quotation_products',
            'invoice_journals',
            'purchase_journals',
            'expense_journals',
            'loan_journals',
            'journal_entry_lines',
        ];

        foreach ($tables as $table) {
            if (Schema::hasTable($table)) {
                // Check if deleted_at column already exists
                if (!Schema::hasColumn($table, 'deleted_at')) {
                    Schema::table($table, function (Blueprint $table) {
                        $table->softDeletes();
                    });
                }
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Remove soft deletes from tenant tables
        $tables = [
            'clients',
            'suppliers', 
            'invoices',
            'products',
            'purchases',
            'quotations',
            'expenses',
            'accounts',
            'invoice_products',
            'purchase_products',
            'quotation_products',
            'invoice_payments',
            'purchase_payments',
            'invoice_returns',
            'purchase_returns',
            'invoice_return_products',
            'purchase_return_products',
            'non_invoice_payments',
            'non_purchase_payments',
            'client_representatives',
            'supplier_representatives',
            'product_categories',
            'product_sub_categories',
            'brands',
            'units',
            'vat_rates',
            'expense_categories',
            'expense_sub_categories',
            'fiscal_years',
            'accounting_periods',
            'payments',
            'payment_methods',
            'departments',
            'employees',
            'loans',
            'loan_payments',
            'loan_authorities',
            'payrolls',
            'salary_increments',
            'assets',
            'asset_types',
            'inventory_adjustments',
            'adjustment_products',
            'balance_tansfers',
            'account_transactions',
            'account_routing_settings',
            'print_templates',
            'pages',
            'menus',
            'roles',
            'permissions',
            'features',
            'settings_images',
            'general_settings',
            'purchase_orders',
            'purchase_order_products',
            'quotation_products',
            'invoice_journals',
            'purchase_journals',
            'expense_journals',
            'loan_journals',
            'journal_entry_lines',
        ];

        foreach ($tables as $table) {
            if (Schema::hasTable($table)) {
                // Check if deleted_at column exists before trying to drop it
                if (Schema::hasColumn($table, 'deleted_at')) {
                    Schema::table($table, function (Blueprint $table) {
                        $table->dropSoftDeletes();
                    });
                }
            }
        }
    }
};
