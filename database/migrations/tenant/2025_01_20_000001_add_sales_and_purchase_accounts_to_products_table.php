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
        Schema::table('products', function (Blueprint $table) {
            $table->unsignedBigInteger('sales_account_id')->nullable()->after('tax_id');
            $table->unsignedBigInteger('purchase_account_id')->nullable()->after('sales_account_id');
            
            $table->foreign('sales_account_id')->references('id')->on('chart_of_accounts')->onDelete('set null');
            $table->foreign('purchase_account_id')->references('id')->on('chart_of_accounts')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropForeign(['sales_account_id']);
            $table->dropForeign(['purchase_account_id']);
            $table->dropColumn(['sales_account_id', 'purchase_account_id']);
        });
    }
};
