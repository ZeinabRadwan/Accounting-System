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
        if (Schema::hasTable('purchase_orders')) {
            Schema::table('purchase_orders', function (Blueprint $table) {
            $table->unsignedBigInteger('fiscal_year_id')->nullable()->after('created_by');
            $table->unsignedBigInteger('accounting_period_id')->nullable()->after('fiscal_year_id');
            
            // Add foreign key constraints
            $table->foreign('fiscal_year_id')->references('id')->on('fiscal_years')->onDelete('set null');
            $table->foreign('accounting_period_id')->references('id')->on('accounting_periods')->onDelete('set null');
        });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('purchase_orders', function (Blueprint $table) {
            // Drop foreign key constraints first
            $table->dropForeign(['fiscal_year_id']);
            $table->dropForeign(['accounting_period_id']);
            
            // Drop the columns
            $table->dropColumn(['fiscal_year_id', 'accounting_period_id']);
        });
    }
};
