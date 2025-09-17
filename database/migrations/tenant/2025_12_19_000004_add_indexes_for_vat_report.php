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
        // Add indexes to vat_rates table for VAT report queries
        Schema::table('vat_rates', function (Blueprint $table) {
            // Index for status filtering
            $table->index('status', 'idx_vat_rates_status');
            
            // Index for sales_vat_account_id
            $table->index('sales_vat_account_id', 'idx_vat_rates_sales_account');
            
            // Index for purchase_vat_account_id
            $table->index('purchase_vat_account_id', 'idx_vat_rates_purchase_account');
        });

        // Add indexes to invoice_products table for VAT calculations
        Schema::table('invoice_products', function (Blueprint $table) {
            // Index for vat_rate_id filtering
            // $table->index('vat_rate_id', 'idx_invoice_products_vat_rate');
            
            // Index for tax_amount filtering
            $table->index('tax_amount', 'idx_invoice_products_tax_amount');
            
            // Composite index for vat_rate_id + tax_amount (for VAT calculations)
            // $table->index(['vat_rate_id', 'tax_amount'], 'idx_invoice_products_vat_calc');
        });

        // Add indexes to purchase_products table for VAT calculations
        Schema::table('purchase_products', function (Blueprint $table) {
            // Index for tax_amount filtering
            $table->index('tax_amount', 'idx_purchase_products_tax_amount');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop indexes from vat_rates table
        Schema::table('vat_rates', function (Blueprint $table) {
            $table->dropIndex('idx_vat_rates_status');
            $table->dropIndex('idx_vat_rates_sales_account');
            $table->dropIndex('idx_vat_rates_purchase_account');
        });

        // Drop indexes from invoice_products table
        Schema::table('invoice_products', function (Blueprint $table) {
            $table->dropIndex('idx_invoice_products_vat_rate');
            $table->dropIndex('idx_invoice_products_tax_amount');
            $table->dropIndex('idx_invoice_products_vat_calc');
        });

        // Drop indexes from purchase_products table
        Schema::table('purchase_products', function (Blueprint $table) {
            $table->dropIndex('idx_purchase_products_tax_amount');
        });
    }
};
