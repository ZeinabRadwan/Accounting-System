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
        Schema::table('purchase_products', function (Blueprint $table) {
            $table->decimal('discount', 12, 2)->nullable()->after('tax_amount');
            $table->enum('discount_type', ['percentage', 'fixed'])->default('fixed')->after('discount');
            $table->decimal('discount_amount', 12, 2)->nullable()->after('discount_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('purchase_products', function (Blueprint $table) {
            $table->dropColumn(['discount', 'discount_type', 'discount_amount']);
        });
    }
};
