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
            // Add missing columns that should have been in the original table creation
            $table->string('purchase_no')->after('id');
            $table->string('slug')->after('purchase_no');
            $table->double('discount', 12, 2)->nullable()->after('slug');
            $table->double('transport', 12, 2)->nullable()->after('discount');
            $table->double('sub_total', 12, 2)->nullable()->after('transport');
            $table->string('po_reference')->nullable()->after('sub_total');
            $table->string('payment_terms')->nullable()->after('po_reference');
            $table->date('po_date')->nullable()->after('payment_terms');
            $table->date('purchase_date')->nullable()->after('po_date');
            $table->string('note')->nullable()->after('purchase_date');
            $table->boolean('status')->nullable()->default(1)->after('note');
            $table->boolean('is_paid')->nullable()->default(0)->after('status');
            $table->unsignedBigInteger('supplier_id')->after('updated_at');
            $table->unsignedBigInteger('tax_id')->nullable()->after('supplier_id');
            $table->unsignedBigInteger('created_by')->after('tax_id');

            // Add foreign key constraints
            $table->foreign('supplier_id')->references('id')->on('suppliers')->onDelete('cascade')->onUpdate('no action');
            $table->foreign('tax_id')->references('id')->on('vat_rates')->onDelete('set null')->onUpdate('no action');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('no action')->onUpdate('no action');
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
            $table->dropForeign(['supplier_id']);
            $table->dropForeign(['tax_id']);
            $table->dropForeign(['created_by']);
            
            // Drop the columns
            $table->dropColumn([
                'purchase_orders_no', 'slug', 'discount', 'transport', 'sub_total',
                'po_reference', 'payment_terms', 'po_date', 'purchase_date', 'note',
                'status', 'is_paid', 'supplier_id', 'tax_id', 'created_by'
            ]);
        });
    }
};
