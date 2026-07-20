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
        Schema::create('purchase_return_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('purchase_return_id')->constrained('purchase_returns')->cascadeOnDelete();
            $table->foreignId('purchase_invoice_item_id')->constrained('purchase_invoice_items')->restrictOnDelete();
            $table->foreignId('product_id')->constrained('products')->restrictOnDelete();
            $table->string('unit_name');
            $table->decimal('conversion_factor', 12, 4)->default(1);
            $table->decimal('unit_cost', 12, 2);
            $table->decimal('quantity', 14, 4);
            $table->decimal('line_total_cost', 14, 2);
            $table->timestamps();

            $table->index(['purchase_return_id']);
            $table->index(['purchase_invoice_item_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchase_return_items');
    }
};
