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
        // Add indexes to invoice_products table for profit & loss queries
        Schema::table('invoice_products', function (Blueprint $table) {
            // Composite index for product + quantity + prices (for aggregation)
            $table->index(['product_id', 'quantity', 'purchase_price', 'sale_price'], 'idx_invoice_products_profit_calc');
        });

        // Add indexes to purchase_products table
        Schema::table('purchase_products', function (Blueprint $table) {
            // Composite index for product + quantity + price (for aggregation)
            $table->index(['product_id', 'quantity', 'purchase_price'], 'idx_purchase_products_cost_calc');
        });

        // Add indexes to invoice_return_products table
        Schema::table('invoice_return_products', function (Blueprint $table) {
            // Composite index for product + quantity + price (for aggregation)
            $table->index(['product_id', 'quantity', 'purchase_price'], 'idx_invoice_return_products_calc');
        });

        // Add indexes to adjustment_products table
        Schema::table('adjustment_products', function (Blueprint $table) {
            // Composite index for product + quantity + price + type (for aggregation)
            $table->index(['product_id', 'quantity', 'purchase_price', 'type'], 'idx_adjustment_products_calc');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop indexes from invoice_products table
        Schema::table('invoice_products', function (Blueprint $table) {
            $table->dropIndex('idx_invoice_products_product');
            $table->dropIndex('idx_invoice_products_invoice');
            $table->dropIndex('idx_invoice_products_profit_calc');
        });

        // Drop indexes from purchase_products table
        Schema::table('purchase_products', function (Blueprint $table) {
            $table->dropIndex('idx_purchase_products_product');
            $table->dropIndex('idx_purchase_products_purchase');
            $table->dropIndex('idx_purchase_products_cost_calc');
        });

        // Drop indexes from invoice_return_products table
        Schema::table('invoice_return_products', function (Blueprint $table) {
            $table->dropIndex('idx_invoice_return_products_product');
            $table->dropIndex('idx_invoice_return_products_return');
            $table->dropIndex('idx_invoice_return_products_calc');
        });

        // Drop indexes from adjustment_products table
        Schema::table('adjustment_products', function (Blueprint $table) {
            $table->dropIndex('idx_adjustment_products_product');
            $table->dropIndex('idx_adjustment_products_adjustment');
            $table->dropIndex('idx_adjustment_products_calc');
        });
    }
};
