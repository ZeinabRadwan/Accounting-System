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
        Schema::create('purchase_invoice_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('purchase_invoice_id')->constrained('purchase_invoices')->cascadeOnDelete();
            $table->foreignId('product_id')->constrained('products')->restrictOnDelete();

            // Snapshots of cost and unit
            $table->string('product_name');
            $table->string('sku');
            $table->string('unit_name');
            $table->decimal('conversion_factor', 12, 4)->default(1);
            $table->decimal('unit_cost', 12, 2); // cost per chosen unit
            $table->decimal('quantity', 14, 4);
            $table->decimal('line_total_cost', 14, 2); // unit_cost * qty

            $table->boolean('update_price1')->default(false);
            $table->decimal('new_price1', 12, 2)->nullable();
            $table->decimal('new_price2', 12, 2)->nullable();
            $table->decimal('new_price3', 12, 2)->nullable();
            $table->timestamps();

            $table->index(['purchase_invoice_id']);
            $table->index(['product_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchase_invoice_items');
    }
};
