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
        Schema::table('purchase_orders', function (Blueprint $table) {
            // Add missing columns that the controller is trying to use
            $table->double('net_total', 12, 2)->nullable()->after('sub_total');
            $table->double('total_tax', 12, 2)->nullable()->after('net_total');
            $table->boolean('is_send_email')->default(false)->after('is_paid');
            $table->boolean('is_send_sms')->default(false)->after('is_send_email');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('purchase_orders', function (Blueprint $table) {
            // Drop the added columns
            $table->dropColumn(['net_total', 'total_tax', 'is_send_email', 'is_send_sms']);
        });
    }
};
