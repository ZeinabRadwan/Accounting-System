<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 
     * Add branch_id column to all tenant tables
     */
    public function up()
    {
        // Core entity tables
        $this->addBranchIdToTable('clients');
        $this->addBranchIdToTable('suppliers');
        $this->addBranchIdToTable('products');
        
        // Invoice tables
        $this->addBranchIdToTable('invoices');
        $this->addBranchIdToTable('invoice_products');
        $this->addBranchIdToTable('invoice_payments');
        $this->addBranchIdToTable('invoice_returns');
        $this->addBranchIdToTable('invoice_return_products');
        
        // Purchase tables
        $this->addBranchIdToTable('purchases');
        $this->addBranchIdToTable('purchase_products');
        $this->addBranchIdToTable('purchase_payments');
        $this->addBranchIdToTable('purchase_returns');
        $this->addBranchIdToTable('purchase_return_products');
        
        // Quotation tables
        $this->addBranchIdToTable('quotations');
        $this->addBranchIdToTable('quotation_products');
        
        // Purchase Order tables
        $this->addBranchIdToTable('purchase_orders');
        $this->addBranchIdToTable('purchase_order_products');
        
        // Account tables
        $this->addBranchIdToTable('accounts');
        $this->addBranchIdToTable('account_transactions');
        $this->addBranchIdToTable('balance_tansfers');
        
        // Expense tables
        $this->addBranchIdToTable('expenses');
        
        // Journal tables
        $this->addBranchIdToTable('journal_entries');
        $this->addBranchIdToTable('journal_entry_lines');
        $this->addBranchIdToTable('invoice_journals');
        $this->addBranchIdToTable('purchase_journals');
        $this->addBranchIdToTable('expense_journals');
        $this->addBranchIdToTable('loan_journals');
        
        // Inventory tables
        $this->addBranchIdToTable('inventory_adjustments');
        $this->addBranchIdToTable('adjustment_products');
        
        // Asset tables
        $this->addBranchIdToTable('assets');
        
        // Payment tables
        $this->addBranchIdToTable('non_invoice_payments');
        $this->addBranchIdToTable('non_purchase_payments');
        
        // Representive tables
        $this->addBranchIdToTable('client_representatives');
        $this->addBranchIdToTable('supplier_representatives');
        
        // Employee and payroll tables
        $this->addBranchIdToTable('employees');
        $this->addBranchIdToTable('payrolls');
        $this->addBranchIdToTable('salary_increments');
        
        // Loan tables
        $this->addBranchIdToTable('loans');
        $this->addBranchIdToTable('loan_payments');
        
        // General Settings (branch-specific settings)
        $this->addBranchIdToTable('general_settings');
        
        // Chart of Accounts (branch-specific chart)
        $this->addBranchIdToTable('chart_of_accounts');
        
        // Expense categories
        $this->addBranchIdToTable('expense_categories');
        $this->addBranchIdToTable('expense_sub_categories');
        
        // Product categories
        $this->addBranchIdToTable('product_categories');
        $this->addBranchIdToTable('product_sub_categories');
        
        // Brand and Unit tables
        $this->addBranchIdToTable('brands');
        $this->addBranchIdToTable('units');
        
        // VAT rates
        $this->addBranchIdToTable('vat_rates');
        
        // Account routing settings
        $this->addBranchIdToTable('account_routing_settings');
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        $tables = [
            'clients', 'suppliers', 'products',
            'invoices', 'invoice_products', 'invoice_payments', 'invoice_returns', 'invoice_return_products',
            'purchases', 'purchase_products', 'purchase_payments',             'purchase_returns', 'purchase_return_products',
            'quotations', 'quotation_products',
            'purchase_orders', 'purchase_order_products',
            'accounts', 'account_transactions', 'balance_tansfers',
            'expenses',
            'journal_entries', 'journal_entry_lines', 'invoice_journals', 'purchase_journals', 
            'expense_journals', 'loan_journals',
            'inventory_adjustments', 'adjustment_products',
            'assets',
            'non_invoice_payments', 'non_purchase_payments',
            'client_representatives', 'supplier_representatives',
            'employees', 'payrolls', 'salary_increments',
            'loans', 'loan_payments',
            'general_settings',
            'chart_of_accounts',
            'expense_categories', 'expense_sub_categories',
            'product_categories', 'product_sub_categories',
            'brands', 'units',
            'vat_rates',
            'account_routing_settings',
        ];

        foreach ($tables as $table) {
            if (Schema::hasTable($table)) {
                Schema::table($table, function (Blueprint $blueprint) {
                    $blueprint->dropForeign(['branch_id']);
                    $blueprint->dropColumn('branch_id');
                });
            }
        }
    }

    /**
     * Helper method to add branch_id to a table
     */
    private function addBranchIdToTable(string $tableName)
    {
        if (!Schema::hasTable($tableName)) {
            return;
        }

        Schema::table($tableName, function (Blueprint $table) use ($tableName) {
            if (!Schema::hasColumn($tableName, 'branch_id')) {
                $table->foreignId('branch_id')->nullable()->after('id')
                    ->constrained('branches')->onDelete('restrict');
                $table->index('branch_id');
            }
        });
    }
};

