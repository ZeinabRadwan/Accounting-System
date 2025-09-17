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
        // Add indexes to invoices table for summary queries
        Schema::table('invoices', function (Blueprint $table) {
            // Index for status filtering (most queries filter by status = 1)
            $table->index('status', 'idx_invoices_status');
            
            // Index for invoice_date filtering and ordering
            $table->index('invoice_date', 'idx_invoices_date');
            
            // Index for client_id grouping
            $table->index('client_id', 'idx_invoices_client');
            
            // Composite indexes for common query patterns
            $table->index(['status', 'invoice_date'], 'idx_invoices_status_date');
            $table->index(['status', 'client_id'], 'idx_invoices_status_client');
            $table->index(['fiscal_year_id', 'status'], 'idx_invoices_fiscal_status');
            $table->index(['accounting_period_id', 'status'], 'idx_invoices_period_status');
            $table->index(['invoice_date', 'status'], 'idx_invoices_date_status');
        });

        // Add indexes to purchases table for summary queries
        Schema::table('purchases', function (Blueprint $table) {
            // Index for status filtering
            $table->index('status', 'idx_purchases_status');
            
            // Index for purchase_date filtering and ordering
            $table->index('purchase_date', 'idx_purchases_date');
            
            // Index for supplier_id grouping
            $table->index('supplier_id', 'idx_purchases_supplier');
            
            // Composite indexes for common query patterns
            $table->index(['status', 'purchase_date'], 'idx_purchases_status_date');
            $table->index(['status', 'supplier_id'], 'idx_purchases_status_supplier');
            $table->index(['fiscal_year_id', 'status'], 'idx_purchases_fiscal_status');
            $table->index(['accounting_period_id', 'status'], 'idx_purchases_period_status');
            $table->index(['purchase_date', 'status'], 'idx_purchases_date_status');
        });

        // Add indexes to invoice_payments table
        Schema::table('invoice_payments', function (Blueprint $table) {
            $table->index('invoice_id', 'idx_invoice_payments_invoice');
            $table->index(['invoice_id', 'status'], 'idx_invoice_payments_invoice_status');
        });

        // Add indexes to purchase_payments table
        Schema::table('purchase_payments', function (Blueprint $table) {
            $table->index('purchase_id', 'idx_purchase_payments_purchase');
            $table->index(['purchase_id', 'status'], 'idx_purchase_payments_purchase_status');
        });

        // Add indexes to invoice_returns table
        Schema::table('invoice_returns', function (Blueprint $table) {
            $table->index('invoice_id', 'idx_invoice_returns_invoice');
            $table->index(['invoice_id', 'status'], 'idx_invoice_returns_invoice_status');
        });

        // Add indexes to purchase_returns table
        Schema::table('purchase_returns', function (Blueprint $table) {
            $table->index('purchase_id', 'idx_purchase_returns_purchase');
            $table->index(['purchase_id', 'status'], 'idx_purchase_returns_purchase_status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop indexes from invoices table
        Schema::table('invoices', function (Blueprint $table) {
            $table->dropIndex('idx_invoices_status');
            $table->dropIndex('idx_invoices_date');
            $table->dropIndex('idx_invoices_client');
            $table->dropIndex('idx_invoices_status_date');
            $table->dropIndex('idx_invoices_status_client');
            $table->dropIndex('idx_invoices_fiscal_status');
            $table->dropIndex('idx_invoices_period_status');
            $table->dropIndex('idx_invoices_date_status');
        });

        // Drop indexes from purchases table
        Schema::table('purchases', function (Blueprint $table) {
            $table->dropIndex('idx_purchases_status');
            $table->dropIndex('idx_purchases_date');
            $table->dropIndex('idx_purchases_supplier');
            $table->dropIndex('idx_purchases_status_date');
            $table->dropIndex('idx_purchases_status_supplier');
            $table->dropIndex('idx_purchases_fiscal_status');
            $table->dropIndex('idx_purchases_period_status');
            $table->dropIndex('idx_purchases_date_status');
        });

        // Drop indexes from payment tables
        Schema::table('invoice_payments', function (Blueprint $table) {
            $table->dropIndex('idx_invoice_payments_invoice');
            $table->dropIndex('idx_invoice_payments_invoice_status');
        });

        Schema::table('purchase_payments', function (Blueprint $table) {
            $table->dropIndex('idx_purchase_payments_purchase');
            $table->dropIndex('idx_purchase_payments_purchase_status');
        });

        // Drop indexes from return tables
        Schema::table('invoice_returns', function (Blueprint $table) {
            $table->dropIndex('idx_invoice_returns_invoice');
            $table->dropIndex('idx_invoice_returns_invoice_status');
        });

        Schema::table('purchase_returns', function (Blueprint $table) {
            $table->dropIndex('idx_purchase_returns_purchase');
            $table->dropIndex('idx_purchase_returns_purchase_status');
        });
    }
};
