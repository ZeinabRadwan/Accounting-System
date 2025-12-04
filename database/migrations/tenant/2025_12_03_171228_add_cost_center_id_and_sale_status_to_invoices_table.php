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
        // Some older tenant databases may not have the branch_id column yet.
        // Make this migration defensive so it works regardless of column order.
        if (! Schema::hasTable('invoices')) {
            return;
        }

        if (Schema::hasColumn('invoices', 'cost_center_id')) {
            // Columns already added, nothing to do.
            return;
        }

        Schema::table('invoices', function (Blueprint $table) {
            if (Schema::hasColumn('invoices', 'branch_id')) {
                $table->unsignedBigInteger('cost_center_id')->nullable()->after('branch_id');
            } else {
                // Fallback: add after client_id (or at the end if client_id not found)
                if (Schema::hasColumn('invoices', 'client_id')) {
                    $table->unsignedBigInteger('cost_center_id')->nullable()->after('client_id');
                } else {
                    $table->unsignedBigInteger('cost_center_id')->nullable();
                }
            }

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
