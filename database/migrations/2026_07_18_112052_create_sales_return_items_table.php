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
        Schema::create('sales_return_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sales_return_id')->constrained('sales_returns')->cascadeOnDelete();
            $table->foreignId('sales_invoice_item_id')->constrained('sales_invoice_items')->restrictOnDelete();
            $table->foreignId('product_id')->constrained('products')->restrictOnDelete();
            $table->string('unit_name');
            $table->decimal('conversion_factor', 12, 4)->default(1);
            $table->decimal('unit_price', 12, 2);
            $table->decimal('quantity', 14, 4);
            $table->decimal('line_refund', 14, 2);
            $table->timestamps();

            $table->index(['sales_return_id']);
            $table->index(['sales_invoice_item_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales_return_items');
    }
};
