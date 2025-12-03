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
            $table->unsignedBigInteger('cost_center_id')->nullable()->after('branch_id');
            $table->string('sale_status')->nullable()->after('cost_center_id')->comment('Sale status: مكتملة or معلقة');

            $table->foreign('cost_center_id')->references('id')->on('cost_centers')->onDelete('set null')->onUpdate('no action');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('invoices', function (Blueprint $table) {
            $table->dropForeign(['cost_center_id']);
            $table->dropColumn(['cost_center_id', 'sale_status']);
        });
    }
};
