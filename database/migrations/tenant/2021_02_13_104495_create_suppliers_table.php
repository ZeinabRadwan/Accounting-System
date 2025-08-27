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
        Schema::create('suppliers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->enum('type', ['Company', 'Individual'])->default('Company');
            $table->string('supplier_id')->nullable();
            $table->string('email')->nullable();
            $table->string('phone');
            $table->string('company_name')->nullable();
            $table->string('address')->nullable();
            $table->string('tax_registration_number')->nullable();
            $table->boolean('status')->nullable()->default(1);
            $table->string('image_path')->nullable();
            $table->unsignedBigInteger('chart_of_account_id')->nullable();
            $table->timestamps();
            
            $table->foreign('chart_of_account_id')->references('id')->on('chart_of_accounts')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('suppliers');
    }
};
