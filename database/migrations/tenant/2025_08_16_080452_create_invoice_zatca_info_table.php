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
        Schema::create('invoice_zatca_info', function (Blueprint $table) {
            $table->id();
            
            // Relationship to invoices table
            $table->foreignId('invoice_id')->constrained('invoices')->cascadeOnDelete();
            
            // ZATCA compliance status
            $table->string('status', 20)->nullable()->comment('ZATCA compliance status: pending, cleared, rejected, etc.');
            
            // ZATCA identifiers
            $table->string('compliance_invoice_id', 50)->nullable()->index()->comment('ZATCA compliance invoice identifier');
            $table->string('invoice_hash')->nullable()->comment('ZATCA invoice hash for verification');
            
            // ZATCA response data
            $table->json('api_response')->nullable()->comment('Complete ZATCA API response data');
            $table->json('errors')->nullable()->comment('Errors encountered during ZATCA processing');
            
            // Generated content
            $table->text('qr_code')->nullable()->comment('Base64 encoded QR code for the invoice');
            $table->longText('xml_content')->nullable()->comment('Generated XML content for ZATCA submission');
            
            // Timestamps for ZATCA events
            $table->timestamp('submitted_at')->nullable()->comment('When the invoice was submitted to ZATCA');
            $table->timestamp('cleared_at')->nullable()->comment('When the invoice was cleared by ZATCA');
            $table->timestamp('reported_at')->nullable()->comment('When the invoice was reported to ZATCA');
            $table->timestamp('rejected_at')->nullable()->comment('When the invoice was rejected by ZATCA');
            
            // Additional metadata
            $table->string('rejection_reason')->nullable()->comment('Reason for rejection if applicable');
            $table->json('additional_data')->nullable()->comment('Any additional ZATCA-related data');
            
            // Laravel standard columns
            $table->timestamps();
            
            // Indexes for performance
            $table->index(['invoice_id']);
            $table->index(['status']);
            $table->index(['submitted_at']);
            $table->index(['cleared_at']);
            $table->index(['status', 'submitted_at']);
            
            // Ensure one ZATCA record per invoice
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
        Schema::dropIfExists('invoice_zatca_info');
    }
};
