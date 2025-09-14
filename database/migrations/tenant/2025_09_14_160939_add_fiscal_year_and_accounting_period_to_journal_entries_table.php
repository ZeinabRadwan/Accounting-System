<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('journal_entries', function (Blueprint $table) {
            $table->unsignedBigInteger('fiscal_year_id')->nullable()->after('entry_date');
            $table->unsignedBigInteger('accounting_period_id')->nullable()->after('fiscal_year_id');
            
            // Add foreign key constraints
            $table->foreign('fiscal_year_id')->references('id')->on('fiscal_years')->onDelete('set null');
            $table->foreign('accounting_period_id')->references('id')->on('accounting_periods')->onDelete('set null');
            
            // Add indexes for better performance
            $table->index('fiscal_year_id');
            $table->index('accounting_period_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('journal_entries', function (Blueprint $table) {
            // Drop foreign key constraints first
            $table->dropForeign(['fiscal_year_id']);
            $table->dropForeign(['accounting_period_id']);
            
            // Drop indexes
            $table->dropIndex(['fiscal_year_id']);
            $table->dropIndex(['accounting_period_id']);
            
            // Drop columns
            $table->dropColumn(['fiscal_year_id', 'accounting_period_id']);
        });
    }
};
