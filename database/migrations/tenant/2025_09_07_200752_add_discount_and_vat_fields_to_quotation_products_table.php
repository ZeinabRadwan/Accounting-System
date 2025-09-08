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
        Schema::table('quotation_products', function (Blueprint $table) {
            // Add discount fields
            $table->decimal('discount', 12, 2)->nullable()->after('tax_amount');
            $table->enum('discount_type', ['percentage', 'fixed'])->default('fixed')->after('discount');
            $table->decimal('discount_amount', 12, 2)->nullable()->after('discount_type');
            
            // Add VAT rate field
            $table->unsignedBigInteger('vat_rate_id')->nullable()->after('discount_amount');
            $table->foreign('vat_rate_id')->references('id')->on('vat_rates')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('quotation_products', function (Blueprint $table) {
            // Drop foreign key first
            $table->dropForeign(['vat_rate_id']);
            
            // Drop columns
            $table->dropColumn(['discount', 'discount_type', 'discount_amount', 'vat_rate_id']);
        });
    }
};
