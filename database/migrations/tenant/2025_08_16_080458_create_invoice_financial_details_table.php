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
        Schema::create('invoice_financial_details', function (Blueprint $table) {
            $table->id();
            
            // Invoice reference
            $table->foreignId('invoice_id')->constrained('invoices')->cascadeOnDelete();
            
            // Financial information
            $table->foreignId('currency_id')->nullable()->constrained('currencies')->nullOnDelete();
            $table->decimal('exchange_rate', 16, 6)->default(1.000000);
            $table->foreignId('accounting_period_id')->nullable()->constrained('accounting_periods')->nullOnDelete();
            $table->foreignId('financial_year_id')->nullable()->constrained('financial_years')->nullOnDelete();
            
            // Laravel standard columns
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('updated_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
            $table->softDeletes();
            
            // Indexes for performance
            $table->index(['invoice_id']);
            $table->index(['currency_id']);
            $table->index(['accounting_period_id']);
            $table->index(['financial_year_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoice_financial_details');
    }
};
