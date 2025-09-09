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
        if (!Schema::hasTable('purchase_order_products')) {
            Schema::create('purchase_order_products', function (Blueprint $table) {
            $table->id();
            $table->double('quantity', 12, 2)->nullable();
            $table->double('purchase_price', 12, 2)->nullable();
            $table->double('unit_cost', 12, 2)->nullable();
            $table->double('tax_amount', 12, 2)->nullable();
            $table->decimal('discount', 12, 2)->nullable();
            $table->enum('discount_type', ['percentage', 'fixed'])->default('fixed');
            $table->decimal('discount_amount', 12, 2)->nullable();
            $table->timestamps();
            $table->unsignedBigInteger('purchase_order_id');
            $table->unsignedBigInteger('product_id');

            $table->foreign('purchase_order_id')->references('id')->on('purchase_orders')->onDelete('cascade')->onUpdate('no action');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade')->onUpdate('no action');
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
        Schema::dropIfExists('purchase_order_products');
    }
};
