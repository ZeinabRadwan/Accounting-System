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
        Schema::create('invoice_contents', function (Blueprint $table) {
            $table->id();
            
            // Relationship to invoices table
            $table->foreignId('invoice_id')->constrained('invoices')->cascadeOnDelete();
            
            // Invoice content
            $table->text('description')->nullable()->comment('Invoice description');
            $table->text('terms_conditions')->nullable()->comment('Terms and conditions');
            $table->text('invoice_notes')->nullable()->comment('Additional notes for the invoice');
            $table->text('mini_footer')->nullable()->comment('Footer text for the invoice');
            
            // Laravel standard columns
            $table->timestamps();
            
            // Indexes for performance
            $table->index(['invoice_id']);
            
            // Ensure one content record per invoice
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
        Schema::dropIfExists('invoice_contents');
    }
};
