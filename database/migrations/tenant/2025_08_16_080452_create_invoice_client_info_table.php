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
        Schema::create('invoice_client_info', function (Blueprint $table) {
            $table->id();
            
            // Relationship to invoices table
            $table->foreignId('invoice_id')->constrained('invoices')->cascadeOnDelete();
            
            // Client information (denormalized for performance)
            $table->string('client_name', 100)->nullable();
            $table->string('client_cr_number', 20)->nullable();
            $table->string('client_vat_number', 20)->nullable();
            $table->json('client_address')->nullable();
            
            // Representative information
            $table->string('representative_name', 100)->nullable();
            $table->string('representative_vat_number', 20)->nullable();
            $table->string('representative_cr_number', 20)->nullable();
            $table->json('representative_address')->nullable();
            
            // Laravel standard columns
            $table->timestamps();
            
            // Indexes for performance - Optimized for common query patterns
            $table->index(['invoice_id'], 'idx_invoice_client_info_invoice');
            $table->index(['client_name', 'client_cr_number'], 'idx_invoice_client_info_name_cr');
            $table->index(['client_vat_number', 'client_cr_number'], 'idx_invoice_client_info_vat_cr');
            $table->index(['representative_name', 'representative_vat_number'], 'idx_invoice_client_info_rep_name_vat');
            $table->index(['representative_cr_number', 'representative_vat_number'], 'idx_invoice_client_info_rep_cr_vat');
            
            // Ensure one client info record per invoice
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
        Schema::dropIfExists('invoice_client_info');
    }
};
