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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            
            // Invoice identification
            $table->string('invoice_number')->unique()->comment('Unique invoice number');
            $table->unsignedTinyInteger('invoice_type')->default(1)->comment('1: Simplified, 2: Vat');
            
            // Relationships
            $table->foreignId('client_id')->constrained('clients')->cascadeOnDelete();
            $table->foreignId('representative_id')->nullable()->constrained('clients')->nullOnDelete();
            $table->foreignId('quotation_id')->nullable()->constrained('quotations')->nullOnDelete();
            
            // Dates
            $table->date('issue_date')->index();
            $table->date('due_date')->index();
            $table->date('supply_date')->nullable();
            $table->timestamp('send_date')->nullable();
            
            // Status
            $table->unsignedTinyInteger('status')->default(0)->comment('0: Draft, 1: Sent, 2: Paid, 3: Overdue, 4: Cancelled');
            
            // Template and language
            $table->unsignedTinyInteger('template')->default(1);
            
            // Metadata
            $table->foreignId('category_id')->nullable()->constrained('invoice_categories')->nullOnDelete();
            
            // Laravel standard columns
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('updated_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
            $table->softDeletes();
            
            // UUID for external systems
            $table->uuid('uuid')->unique();
            
            // Indexes for performance - Optimized for common query patterns
            // Composite indexes for multi-column queries
            $table->index(['client_id', 'status', 'issue_date'], 'idx_invoices_client_status_date');
            $table->index(['status', 'due_date', 'issue_date'], 'idx_invoices_status_dates');
            $table->index(['invoice_type', 'status', 'issue_date'], 'idx_invoices_type_status_date');
            $table->index(['quotation_id', 'status'], 'idx_invoices_quotation_status');
            $table->index(['representative_id', 'status'], 'idx_invoices_rep_status');
            $table->index(['category_id', 'status'], 'idx_invoices_category_status');
            $table->index(['template', 'status'], 'idx_invoices_template_status');
            
            // Single column indexes for unique lookups
            $table->index(['uuid'], 'idx_invoices_uuid');
            $table->index(['created_by'], 'idx_invoices_created_by');
            $table->index(['updated_by'], 'idx_invoices_updated_by');
            
            // Date range queries
            $table->index(['issue_date', 'due_date'], 'idx_invoices_date_range');
            $table->index(['supply_date'], 'idx_invoices_supply_date');
            $table->index(['send_date'], 'idx_invoices_send_date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoices');
    }
};
