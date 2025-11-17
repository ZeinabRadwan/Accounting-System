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
        // Add tax_status to clients table
        Schema::table('clients', function (Blueprint $table) {
            if (! Schema::hasColumn('clients', 'tax_status')) {
                $table->enum('tax_status', ['taxable', 'non_taxable'])->nullable()->default('non_taxable')->after('type');
            }
        });

        // Add tax_status to suppliers table
        Schema::table('suppliers', function (Blueprint $table) {
            if (! Schema::hasColumn('suppliers', 'tax_status')) {
                $table->enum('tax_status', ['taxable', 'non_taxable'])->nullable()->default('non_taxable')->after('type');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Remove tax_status from clients table
        Schema::table('clients', function (Blueprint $table) {
            if (Schema::hasColumn('clients', 'tax_status')) {
                $table->dropColumn('tax_status');
            }
        });

        // Remove tax_status from suppliers table
        Schema::table('suppliers', function (Blueprint $table) {
            if (Schema::hasColumn('suppliers', 'tax_status')) {
                $table->dropColumn('tax_status');
            }
        });
    }
};
