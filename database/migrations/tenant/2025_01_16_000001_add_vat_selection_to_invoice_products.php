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
        Schema::table('invoice_products', function (Blueprint $table) {
            if (!Schema::hasColumn('invoice_products', 'vat_rate_id')) {
                $table->unsignedBigInteger('vat_rate_id')->nullable()->after('discount_amount');
                $table->foreign('vat_rate_id')->references('id')->on('vat_rates')->onDelete('set null');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('invoice_products', function (Blueprint $table) {
            if (Schema::hasColumn('invoice_products', 'vat_rate_id')) {
                $table->dropForeign(['vat_rate_id']);
                $table->dropColumn('vat_rate_id');
            }
        });
    }
};
