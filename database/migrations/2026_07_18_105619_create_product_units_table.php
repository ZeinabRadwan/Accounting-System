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
        Schema::create('product_units', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->cascadeOnDelete();
            $table->string('unit_name');
            $table->decimal('conversion_factor', 12, 4)->default(1); // relative to base unit
            $table->decimal('price1', 12, 2)->nullable();
            $table->decimal('price2', 12, 2)->nullable();
            $table->decimal('price3', 12, 2)->nullable();
            $table->boolean('is_base')->default(false);
            $table->timestamps();

            $table->unique(['product_id', 'unit_name']);
            $table->index(['product_id', 'unit_name']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_units');
    }
};
