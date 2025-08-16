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
        Schema::create('invoice_company_settings', function (Blueprint $table) {
            $table->id();
            
            // Relationship to invoices table
            $table->foreignId('invoice_id')->constrained('invoices')->cascadeOnDelete();
            
            // Company basic information
            $table->string('name', 200)->nullable();
            $table->string('mobile', 100)->nullable();
            
            // Company address information
            $table->text('address')->nullable();
            $table->string('city', 100)->nullable();
            $table->string('street', 100)->nullable();
            $table->string('district', 100)->nullable();
            $table->string('zipcode', 20)->nullable();
            $table->string('building_no', 20)->nullable();
            
            // Tax and registration information
            $table->string('vat_gst_number_switch', 10)->nullable()->comment('on/off');
            $table->string('tax_type', 20)->nullable()->comment('VAT, GST, etc.');
            $table->string('vat_number', 50)->nullable();
            $table->string('registration_number', 50)->nullable();
            
            // PDF display options
            $table->boolean('pdf_watermark')->default(false);
            $table->boolean('signature')->default(false);
            $table->boolean('stamp')->default(false);
            
            // Additional display options
            $table->text('items_columns_show')->nullable();
            $table->unsignedTinyInteger('show_description')->default(0)->comment('0: Hide, 1: Show');
            
            // Laravel standard columns
            $table->timestamps();
            
            // Indexes for performance
            $table->index(['invoice_id']);
            
            // Ensure one company settings record per invoice
            $table->unique('invoice_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoice_company_settings');
    }
};
