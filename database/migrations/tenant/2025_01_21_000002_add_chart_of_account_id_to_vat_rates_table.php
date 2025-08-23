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
        Schema::table('vat_rates', function (Blueprint $table) {
            $table->unsignedBigInteger('sales_vat_account_id')->nullable()->after('group_tax_ids');
            $table->unsignedBigInteger('purchase_vat_account_id')->nullable()->after('sales_vat_account_id');
            
            $table->foreign('sales_vat_account_id')->references('id')->on('chart_of_accounts')->onDelete('set null');
            $table->foreign('purchase_vat_account_id')->references('id')->on('chart_of_accounts')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('vat_rates', function (Blueprint $table) {
            $table->dropForeign(['sales_vat_account_id']);
            $table->dropForeign(['purchase_vat_account_id']);
            $table->dropColumn(['sales_vat_account_id', 'purchase_vat_account_id']);
        });
    }
};
