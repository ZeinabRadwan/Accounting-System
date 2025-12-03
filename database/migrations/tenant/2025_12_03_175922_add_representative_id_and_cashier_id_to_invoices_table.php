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
        Schema::table('invoices', function (Blueprint $table) {
            $table->unsignedBigInteger('representative_id')->nullable()->after('sale_status');
            $table->unsignedBigInteger('cashier_id')->nullable()->after('representative_id');

            $table->foreign('representative_id')->references('id')->on('employees')->onDelete('set null')->onUpdate('no action');
            $table->foreign('cashier_id')->references('id')->on('employees')->onDelete('set null')->onUpdate('no action');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('invoices', function (Blueprint $table) {
            $table->dropForeign(['representative_id']);
            $table->dropForeign(['cashier_id']);
            $table->dropColumn(['representative_id', 'cashier_id']);
        });
    }
};
