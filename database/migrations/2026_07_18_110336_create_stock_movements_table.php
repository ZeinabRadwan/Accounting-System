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
        Schema::create('stock_movements', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->cascadeOnDelete();
            $table->foreignId('branch_id_from')->nullable()->constrained('branches')->nullOnDelete();
            $table->foreignId('branch_id_to')->nullable()->constrained('branches')->nullOnDelete();
            $table->string('movement_type'); // enum in code
            $table->decimal('quantity', 18, 4); // in base units (positive)
            $table->json('meta')->nullable(); // optional payload/reference
            $table->timestamps();

            $table->index(['product_id', 'movement_type']);
            $table->index(['branch_id_from', 'branch_id_to']);
            $table->index(['created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_movements');
    }
};
