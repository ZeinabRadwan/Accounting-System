<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 
     * Update transport_taxable and transport_non_taxable fields from double to boolean
     * Purpose: Store whether transport for a purchase is taxable or not
     */
    public function up(): void
    {
        Schema::table('purchases', function (Blueprint $table) {
            // Drop existing columns if they exist
            if (Schema::hasColumn('purchases', 'transport_taxable')) {
                $table->dropColumn('transport_taxable');
            }
            if (Schema::hasColumn('purchases', 'transport_non_taxable')) {
                $table->dropColumn('transport_non_taxable');
            }
        });

        Schema::table('purchases', function (Blueprint $table) {
            // Add boolean columns with proper defaults
            $table->boolean('transport_taxable')->default(true)->after('transport');
            $table->boolean('transport_non_taxable')->default(false)->after('transport_taxable');
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

        // Restore original double columns if needed
        Schema::table('purchases', function (Blueprint $table) {
            $table->double('transport_taxable', 12, 2)->nullable()->after('transport');
            $table->double('transport_non_taxable', 12, 2)->nullable()->after('transport_taxable');
        });
    }
};

