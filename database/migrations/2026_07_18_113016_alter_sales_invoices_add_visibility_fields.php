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
        Schema::table('sales_invoices', function (Blueprint $table) {
            if (! Schema::hasColumn('sales_invoices', 'visible_for_sales')) {
                $table->boolean('visible_for_sales')->default(false);
                $table->index(['visible_for_sales'], 'si_visible_idx');
            }
            if (! Schema::hasColumn('sales_invoices', 'daily_visible_invoice_set_id')) {
                $table->unsignedBigInteger('daily_visible_invoice_set_id')->nullable();
                // Short FK name
                $table->foreign('daily_visible_invoice_set_id', 'si_dv_set_fk')
                    ->references('id')->on('daily_visible_invoice_sets')
                    ->nullOnDelete();
            }
            if (! Schema::hasColumn('sales_invoices', 'is_cancelled')) {
                $table->boolean('is_cancelled')->default(false);
                $table->index(['is_cancelled'], 'si_cancelled_idx');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('sales_invoices', function (Blueprint $table) {
            if (Schema::hasColumn('sales_invoices', 'daily_visible_invoice_set_id')) {
                $table->dropForeign('si_dv_set_fk');
                $table->dropColumn('daily_visible_invoice_set_id');
            }
            if (Schema::hasColumn('sales_invoices', 'visible_for_sales')) {
                $table->dropIndex('si_visible_idx');
                $table->dropColumn('visible_for_sales');
            }
            if (Schema::hasColumn('sales_invoices', 'is_cancelled')) {
                $table->dropIndex('si_cancelled_idx');
                $table->dropColumn('is_cancelled');
            }
        });
    }
};
