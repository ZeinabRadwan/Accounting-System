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
        Schema::table('purchases', function (Blueprint $table) {
            $table->double('transport_taxable', 12, 2)->nullable()->after('transport');
            $table->double('transport_non_taxable', 12, 2)->nullable()->after('transport_taxable');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('purchases', function (Blueprint $table) {
            $table->dropColumn(['transport_taxable', 'transport_non_taxable']);
        });
    }
};
