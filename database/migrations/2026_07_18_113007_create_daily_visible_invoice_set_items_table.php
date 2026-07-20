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
        if (! Schema::hasTable('daily_visible_invoice_set_items')) {
            Schema::create('daily_visible_invoice_set_items', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('daily_visible_invoice_set_id');
                $table->unsignedBigInteger('sales_invoice_id');
                $table->timestamps();

                // Short foreign key names to avoid MySQL 64-char limit
                $table->foreign('daily_visible_invoice_set_id', 'dv_set_fk')
                    ->references('id')->on('daily_visible_invoice_sets')
                    ->onDelete('cascade');
                $table->foreign('sales_invoice_id', 'dv_item_inv_fk')
                    ->references('id')->on('sales_invoices')
                    ->onDelete('cascade');

                $table->unique(['daily_visible_invoice_set_id','sales_invoice_id'], 'dv_set_item_unique');
                $table->index(['sales_invoice_id'], 'dv_item_invoice_idx');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('daily_visible_invoice_set_items');
    }
};
