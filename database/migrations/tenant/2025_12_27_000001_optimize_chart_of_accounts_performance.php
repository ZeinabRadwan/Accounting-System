<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Add only the essential indexes for chart_of_accounts table that don't exist yet
        Schema::table('chart_of_accounts', function (Blueprint $table) {
            // These are new indexes not created in previous migrations
            $this->addIndexIfNotExists($table, 'idx_chart_accounts_name', ['name']);
            $this->addIndexIfNotExists($table, 'idx_chart_accounts_code', ['code']);
            $this->addIndexIfNotExists($table, 'idx_chart_accounts_order_active', ['order', 'is_active']);
            $this->addIndexIfNotExists($table, 'idx_chart_accounts_parent_order', ['parent_id', 'order']);
            $this->addIndexIfNotExists($table, 'idx_chart_accounts_created_by_active', ['created_by', 'is_active']);
            $this->addIndexIfNotExists($table, 'idx_chart_accounts_deleted_at_active', ['deleted_at', 'is_active']);
            
            // Additional critical indexes for chart of accounts performance
            $this->addIndexIfNotExists($table, 'idx_chart_accounts_type_active_order', ['type_id', 'is_active', 'order']);
            $this->addIndexIfNotExists($table, 'idx_chart_accounts_parent_active', ['parent_id', 'is_active']);
            $this->addIndexIfNotExists($table, 'idx_chart_accounts_name_active', ['name', 'is_active']);
            $this->addIndexIfNotExists($table, 'idx_chart_accounts_code_active', ['code', 'is_active']);
        });

        // Add only new indexes for journal_entry_lines table
        Schema::table('journal_entry_lines', function (Blueprint $table) {
            // These are new indexes not created in previous migrations
            $this->addIndexIfNotExists($table, 'idx_journal_lines_account_entry', ['chart_of_account_id', 'journal_entry_id']);
            $this->addIndexIfNotExists($table, 'idx_journal_lines_debit_amount', ['debit_amount']);
            $this->addIndexIfNotExists($table, 'idx_journal_lines_credit_amount', ['credit_amount']);
            
            // Additional critical indexes for balance calculations
            $this->addIndexIfNotExists($table, 'idx_journal_lines_account_debit', ['chart_of_account_id', 'debit_amount']);
            $this->addIndexIfNotExists($table, 'idx_journal_lines_account_credit', ['chart_of_account_id', 'credit_amount']);
            $this->addIndexIfNotExists($table, 'idx_journal_lines_entry_status', ['journal_entry_id', 'chart_of_account_id']);
        });

        // Add only new indexes for journal_entries table
        Schema::table('journal_entries', function (Blueprint $table) {
            // These are new indexes not created in previous migrations
            $this->addIndexIfNotExists($table, 'idx_journal_entries_entry_date', ['entry_date']);
            $this->addIndexIfNotExists($table, 'idx_journal_entries_reference', ['reference']);
            
            // Additional critical indexes for chart of accounts queries
            $this->addIndexIfNotExists($table, 'idx_journal_entries_status_date', ['status', 'entry_date']);
            $this->addIndexIfNotExists($table, 'idx_journal_entries_created_by_status', ['created_by', 'status']);
            $this->addIndexIfNotExists($table, 'idx_journal_entries_posted_at', ['posted_at']);
        });

        // Add indexes to account_transactions table for chart of accounts queries
        Schema::table('account_transactions', function (Blueprint $table) {
            $this->addIndexIfNotExists($table, 'idx_account_transactions_account', ['account_id']);
            $this->addIndexIfNotExists($table, 'idx_account_transactions_second_account', ['second_account_id']);
            $this->addIndexIfNotExists($table, 'idx_account_transactions_type', ['type']);
            $this->addIndexIfNotExists($table, 'idx_account_transactions_date', ['transaction_date']);
            $this->addIndexIfNotExists($table, 'idx_account_transactions_account_type', ['account_id', 'type']);
            $this->addIndexIfNotExists($table, 'idx_account_transactions_account_date', ['account_id', 'transaction_date']);
        });

        // Add indexes to expenses table for chart of accounts queries
        Schema::table('expenses', function (Blueprint $table) {
            $this->addIndexIfNotExists($table, 'idx_expenses_account', ['expense_account_id']);
            $this->addIndexIfNotExists($table, 'idx_expenses_subcategory', ['sub_cat_id']);
            $this->addIndexIfNotExists($table, 'idx_expenses_date', ['date']);
            $this->addIndexIfNotExists($table, 'idx_expenses_account_date', ['expense_account_id', 'date']);
        });

        // Add indexes to invoices table for chart of accounts queries
        Schema::table('invoices', function (Blueprint $table) {
            $this->addIndexIfNotExists($table, 'idx_invoices_client', ['client_id']);
            $this->addIndexIfNotExists($table, 'idx_invoices_status', ['status']);
            $this->addIndexIfNotExists($table, 'idx_invoices_date', ['invoice_date']);
            $this->addIndexIfNotExists($table, 'idx_invoices_client_status', ['client_id', 'status']);
        });

        // Add indexes to purchases table for chart of accounts queries
        Schema::table('purchases', function (Blueprint $table) {
            $this->addIndexIfNotExists($table, 'idx_purchases_supplier', ['supplier_id']);
            $this->addIndexIfNotExists($table, 'idx_purchases_status', ['status']);
            $this->addIndexIfNotExists($table, 'idx_purchases_date', ['purchase_date']);
            $this->addIndexIfNotExists($table, 'idx_purchases_supplier_status', ['supplier_id', 'status']);
        });

        // Add indexes to invoice_products table for chart of accounts queries
        Schema::table('invoice_products', function (Blueprint $table) {
            $this->addIndexIfNotExists($table, 'idx_invoice_products_invoice', ['invoice_id']);
            $this->addIndexIfNotExists($table, 'idx_invoice_products_product', ['product_id']);
        });

        // Add indexes to purchase_products table for chart of accounts queries
        Schema::table('purchase_products', function (Blueprint $table) {
            $this->addIndexIfNotExists($table, 'idx_purchase_products_purchase', ['purchase_id']);
            $this->addIndexIfNotExists($table, 'idx_purchase_products_product', ['product_id']);
        });

        // Add indexes to invoice_payments table for chart of accounts queries
        Schema::table('invoice_payments', function (Blueprint $table) {
            $this->addIndexIfNotExists($table, 'idx_invoice_payments_invoice', ['invoice_id']);
            $this->addIndexIfNotExists($table, 'idx_invoice_payments_status', ['status']);
            $this->addIndexIfNotExists($table, 'idx_invoice_payments_date', ['date']);
            $this->addIndexIfNotExists($table, 'idx_invoice_payments_invoice_status', ['invoice_id', 'status']);
        });

        // Add indexes to purchase_payments table for chart of accounts queries
        Schema::table('purchase_payments', function (Blueprint $table) {
            $this->addIndexIfNotExists($table, 'idx_purchase_payments_purchase', ['purchase_id']);
            $this->addIndexIfNotExists($table, 'idx_purchase_payments_status', ['status']);
            $this->addIndexIfNotExists($table, 'idx_purchase_payments_date', ['date']);
            $this->addIndexIfNotExists($table, 'idx_purchase_payments_purchase_status', ['purchase_id', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop indexes from chart_of_accounts table
        Schema::table('chart_of_accounts', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_chart_accounts_name');
            $this->dropIndexIfExists($table, 'idx_chart_accounts_code');
            $this->dropIndexIfExists($table, 'idx_chart_accounts_order_active');
            $this->dropIndexIfExists($table, 'idx_chart_accounts_parent_order');
            $this->dropIndexIfExists($table, 'idx_chart_accounts_created_by_active');
            $this->dropIndexIfExists($table, 'idx_chart_accounts_deleted_at_active');
            $this->dropIndexIfExists($table, 'idx_chart_accounts_type_active_order');
            $this->dropIndexIfExists($table, 'idx_chart_accounts_parent_active');
            $this->dropIndexIfExists($table, 'idx_chart_accounts_name_active');
            $this->dropIndexIfExists($table, 'idx_chart_accounts_code_active');
        });

        // Drop indexes from journal_entry_lines table
        Schema::table('journal_entry_lines', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_journal_lines_account_entry');
            $this->dropIndexIfExists($table, 'idx_journal_lines_debit_amount');
            $this->dropIndexIfExists($table, 'idx_journal_lines_credit_amount');
            $this->dropIndexIfExists($table, 'idx_journal_lines_account_debit');
            $this->dropIndexIfExists($table, 'idx_journal_lines_account_credit');
            $this->dropIndexIfExists($table, 'idx_journal_lines_entry_status');
        });

        // Drop indexes from journal_entries table
        Schema::table('journal_entries', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_journal_entries_entry_date');
            $this->dropIndexIfExists($table, 'idx_journal_entries_reference');
            $this->dropIndexIfExists($table, 'idx_journal_entries_status_date');
            $this->dropIndexIfExists($table, 'idx_journal_entries_created_by_status');
            $this->dropIndexIfExists($table, 'idx_journal_entries_posted_at');
        });

        // Drop indexes from account_transactions table
        Schema::table('account_transactions', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_account_transactions_account');
            $this->dropIndexIfExists($table, 'idx_account_transactions_second_account');
            $this->dropIndexIfExists($table, 'idx_account_transactions_type');
            $this->dropIndexIfExists($table, 'idx_account_transactions_date');
            $this->dropIndexIfExists($table, 'idx_account_transactions_account_type');
            $this->dropIndexIfExists($table, 'idx_account_transactions_account_date');
        });

        // Drop indexes from expenses table
        Schema::table('expenses', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_expenses_account');
            $this->dropIndexIfExists($table, 'idx_expenses_subcategory');
            $this->dropIndexIfExists($table, 'idx_expenses_date');
            $this->dropIndexIfExists($table, 'idx_expenses_account_date');
        });

        // Drop indexes from invoices table
        Schema::table('invoices', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_invoices_client');
            $this->dropIndexIfExists($table, 'idx_invoices_status');
            $this->dropIndexIfExists($table, 'idx_invoices_date');
            $this->dropIndexIfExists($table, 'idx_invoices_client_status');
        });

        // Drop indexes from purchases table
        Schema::table('purchases', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_purchases_supplier');
            $this->dropIndexIfExists($table, 'idx_purchases_status');
            $this->dropIndexIfExists($table, 'idx_purchases_date');
            $this->dropIndexIfExists($table, 'idx_purchases_supplier_status');
        });

        // Drop indexes from invoice_products table
        Schema::table('invoice_products', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_invoice_products_invoice');
            $this->dropIndexIfExists($table, 'idx_invoice_products_product');
        });

        // Drop indexes from purchase_products table
        Schema::table('purchase_products', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_purchase_products_purchase');
            $this->dropIndexIfExists($table, 'idx_purchase_products_product');
        });

        // Drop indexes from invoice_payments table
        Schema::table('invoice_payments', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_invoice_payments_invoice');
            $this->dropIndexIfExists($table, 'idx_invoice_payments_status');
            $this->dropIndexIfExists($table, 'idx_invoice_payments_date');
            $this->dropIndexIfExists($table, 'idx_invoice_payments_invoice_status');
        });

        // Drop indexes from purchase_payments table
        Schema::table('purchase_payments', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_purchase_payments_purchase');
            $this->dropIndexIfExists($table, 'idx_purchase_payments_status');
            $this->dropIndexIfExists($table, 'idx_purchase_payments_date');
            $this->dropIndexIfExists($table, 'idx_purchase_payments_purchase_status');
        });
    }

    /**
     * Add index if it doesn't exist
     */
    private function addIndexIfNotExists(Blueprint $table, $indexName, $columns)
    {
        try {
            // Check if index exists using raw SQL
            $existingIndexes = DB::select("SHOW INDEX FROM {$table->getTable()} WHERE Key_name = ?", [$indexName]);
            
            if (empty($existingIndexes)) {
                if (is_array($columns)) {
                    $table->index($columns, $indexName);
                } else {
                    $table->index($columns, $indexName);
                }
            }
        } catch (Exception $e) {
            // If we can't check or create, just skip
            // This prevents migration failures due to existing indexes
        }
    }

    /**
     * Drop index if it exists
     */
    private function dropIndexIfExists(Blueprint $table, $indexName)
    {
        try {
            $table->dropIndex($indexName);
        } catch (Exception $e) {
            // Index doesn't exist, skip
            if (strpos($e->getMessage(), "doesn't exist") === false && 
                strpos($e->getMessage(), 'Unknown key') === false) {
                throw $e;
            }
        }
    }
};