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
        Schema::create('vat_rates', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->string('code');
            $table->double('rate', 4, 2);
            $table->string('note')->nullable();
            $table->boolean('status')->nullable()->default(1);
            $table->boolean('is_group_tax')->default(false);
            $table->json('group_tax_ids')->nullable();
            $table->unsignedBigInteger('sales_vat_account_id')->nullable();
            $table->unsignedBigInteger('purchase_vat_account_id')->nullable();
            $table->timestamps();
            
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
        Schema::dropIfExists('vat_rates');
    }
};
