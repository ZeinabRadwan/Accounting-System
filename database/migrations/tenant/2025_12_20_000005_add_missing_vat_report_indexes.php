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
        // Check if indexes exist before adding them
        // $this->addIndexIfNotExists('invoice_products', 'idx_invoice_products_invoice_vat', ['invoice_id', 'vat_rate_id', 'tax_amount']);
        $this->addIndexIfNotExists('invoices', 'idx_invoices_status_fiscal', ['status', 'fiscal_year_id']);
        $this->addIndexIfNotExists('invoices', 'idx_invoices_status_period', ['status', 'accounting_period_id']);
        $this->addIndexIfNotExists('invoices', 'idx_invoices_status_date', ['status', 'invoice_date']);
        
        $this->addIndexIfNotExists('purchase_products', 'idx_purchase_products_purchase_tax', ['purchase_id', 'tax_amount']);
        $this->addIndexIfNotExists('purchases', 'idx_purchases_status_fiscal', ['status', 'fiscal_year_id']);
        $this->addIndexIfNotExists('purchases', 'idx_purchases_status_period', ['status', 'accounting_period_id']);
        $this->addIndexIfNotExists('purchases', 'idx_purchases_status_date', ['status', 'purchase_date']);
        
        $this->addIndexIfNotExists('journal_entries', 'idx_journal_entries_status_fiscal', ['status', 'fiscal_year_id']);
        $this->addIndexIfNotExists('journal_entries', 'idx_journal_entries_status_period', ['status', 'accounting_period_id']);
        $this->addIndexIfNotExists('journal_entries', 'idx_journal_entries_status_date', ['status', 'entry_date']);
        $this->addIndexIfNotExists('journal_entry_lines', 'idx_journal_lines_account_amount', ['chart_of_account_id', 'debit_amount', 'credit_amount']);
        
        // Additional composite indexes for better performance
        // $this->addIndexIfNotExists('invoice_products', 'idx_invoice_products_vat_status', ['vat_rate_id', 'tax_amount', 'invoice_id']);
        $this->addIndexIfNotExists('purchase_products', 'idx_purchase_products_tax_status', ['tax_amount', 'purchase_id']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop indexes
        Schema::table('invoice_products', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_invoice_products_invoice_vat');
            $this->dropIndexIfExists($table, 'idx_invoice_products_vat_status');
        });

        Schema::table('invoices', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_invoices_status_fiscal');
            $this->dropIndexIfExists($table, 'idx_invoices_status_period');
            $this->dropIndexIfExists($table, 'idx_invoices_status_date');
        });

        Schema::table('purchase_products', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_purchase_products_purchase_tax');
            $this->dropIndexIfExists($table, 'idx_purchase_products_tax_status');
        });

        Schema::table('purchases', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_purchases_status_fiscal');
            $this->dropIndexIfExists($table, 'idx_purchases_status_period');
            $this->dropIndexIfExists($table, 'idx_purchases_status_date');
        });

        Schema::table('journal_entries', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_journal_entries_status_fiscal');
            $this->dropIndexIfExists($table, 'idx_journal_entries_status_period');
            $this->dropIndexIfExists($table, 'idx_journal_entries_status_date');
        });

        Schema::table('journal_entry_lines', function (Blueprint $table) {
            $this->dropIndexIfExists($table, 'idx_journal_lines_account_amount');
        });
    }

    /**
     * Add index if it doesn't exist
     */
    private function addIndexIfNotExists($tableName, $indexName, $columns)
    {
        try {
            Schema::table($tableName, function (Blueprint $table) use ($indexName, $columns) {
                if (is_array($columns)) {
                    $table->index($columns, $indexName);
                } else {
                    $table->index($columns, $indexName);
                }
            });
        } catch (Exception $e) {
            // Index already exists, skip
            if (strpos($e->getMessage(), 'Duplicate key name') === false) {
                throw $e;
            }
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
            if (strpos($e->getMessage(), "doesn't exist") === false) {
                throw $e;
            }
        }
    }
};
