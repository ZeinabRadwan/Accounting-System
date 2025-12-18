<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Adds unit_cost snapshot field to return products tables.
     * This stores the exact unit cost from the original transaction for perfect reversibility.
     *
     * For InvoiceReturnProduct: stores the unit_cost used in the original COGS entry
     * For PurchaseReturnProduct: stores the original unit_cost from the purchase
     */
    public function up(): void
    {
        // Add unit_cost to invoice_return_products for COGS reversal accuracy
        if (Schema::hasTable('invoice_return_products') && ! Schema::hasColumn('invoice_return_products', 'unit_cost')) {
            Schema::table('invoice_return_products', function (Blueprint $table) {
                $table->decimal('unit_cost', 15, 4)->nullable()->after('purchase_price')
                    ->comment('Original unit cost from invoice product for exact COGS reversal');
            });
        }

        // Add unit_cost to purchase_return_products for inventory reversal accuracy
        if (Schema::hasTable('purchase_return_products') && ! Schema::hasColumn('purchase_return_products', 'unit_cost')) {
            Schema::table('purchase_return_products', function (Blueprint $table) {
                $table->decimal('unit_cost', 15, 4)->nullable()->after('purchase_price')
                    ->comment('Original unit cost from purchase product for exact inventory reversal');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasTable('invoice_return_products') && Schema::hasColumn('invoice_return_products', 'unit_cost')) {
            Schema::table('invoice_return_products', function (Blueprint $table) {
                $table->dropColumn('unit_cost');
            });
        }

        if (Schema::hasTable('purchase_return_products') && Schema::hasColumn('purchase_return_products', 'unit_cost')) {
            Schema::table('purchase_return_products', function (Blueprint $table) {
                $table->dropColumn('unit_cost');
            });
        }
    }
};
