<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (! Schema::hasTable('sales_invoice_items')) {
            Schema::create('sales_invoice_items', function (Blueprint $table) {
                $table->id();
                $table->foreignId('sales_invoice_id')->constrained('sales_invoices')->cascadeOnDelete();
                $table->foreignId('product_id')->constrained('products')->restrictOnDelete();

                // Snapshots
                $table->string('product_name');
                $table->string('sku');
                $table->string('unit_name');
                $table->decimal('conversion_factor', 12, 4)->default(1);
                $table->string('price_level'); // price1, price2, price3
                $table->decimal('unit_price', 12, 2);

                // Quantity and totals
                $table->decimal('quantity', 14, 4);
                $table->decimal('item_discount', 14, 2)->default(0);
                $table->decimal('line_subtotal', 14, 2)->default(0);
                $table->decimal('line_total', 14, 2)->default(0);
                $table->timestamps();

                $table->index(['sales_invoice_id']);
                $table->index(['product_id']);
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasTable('sales_invoice_items')) {
            Schema::dropIfExists('sales_invoice_items');
        }
    }
};
