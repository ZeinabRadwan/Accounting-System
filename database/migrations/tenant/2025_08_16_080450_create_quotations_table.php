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
        Schema::create('quotations', function (Blueprint $table) {
            $table->id();
            
            // Quotation identification
            $table->string('quotation_number')->unique()->comment('Unique quotation number');
            $table->string('name', 150)->nullable()->comment('Quotation name');
            $table->string('sader_no', 20)->nullable()->comment('Sader number for tracking');
            $table->unsignedTinyInteger('quotation_type')->default(1)->comment('1: Standard, 2: Template, 3: Proposal');
            
            // Relationships
            $table->foreignId('client_id')->constrained('clients')->cascadeOnDelete();
            $table->foreignId('representative_id')->nullable()->constrained('clients')->nullOnDelete();
            $table->foreignId('responsible_id')->nullable()->constrained('users')->nullOnDelete()->comment('Person responsible for the quotation');
            
            // Location information
            $table->foreignId('city_id')->nullable()->constrained('cities')->nullOnDelete();
            
            // Project details
            $table->foreignId('project_type_id')->nullable()->constrained('project_types')->nullOnDelete();
            $table->string('subject', 150)->nullable()->comment('Quotation subject');
            $table->text('content')->nullable()->comment('Quotation content/description');
            
            // Financial information
            $table->foreignId('tax_id')->nullable()->constrained('taxes')->nullOnDelete();
            
            // Project timeline
            $table->string('estimated_days', 10)->nullable()->comment('Estimated project duration in days');
            $table->date('quotation_date')->index()->comment('Date when quotation was created');
            
            // Approval workflow
            $table->unsignedTinyInteger('customer_approval')->default(0)->comment('0: Pending, 1: Approved, 2: Rejected');
            $table->date('approval_date')->nullable()->comment('Date when customer approved');
            $table->foreignId('approved_by')->nullable()->constrained('users')->nullOnDelete()->comment('User who approved');
            $table->timestamp('approved_at')->nullable()->comment('Timestamp when approved');
            
            // Status and metadata
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending')->index();
            $table->unsignedTinyInteger('is_template')->default(0)->comment('0: Regular quotation, 1: Template');
            $table->unsignedTinyInteger('is_archived')->default(0)->comment('0: Active, 1: Archived');
            $table->foreignId('archived_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('archived_at')->nullable();
            
            // Document settings
            $table->unsignedTinyInteger('template')->default(1)->comment('Template number to use');
            $table->string('lang', 5)->default('en')->comment('Language: en, ar');
            $table->unsignedTinyInteger('is_signature')->default(0)->comment('0: No signature, 1: Signature required');
            $table->unsignedTinyInteger('is_stamp')->default(0)->comment('0: No stamp, 1: Stamp required');
            
            // Analysis and customization
            $table->text('items_columns_show')->nullable()->comment('JSON of columns to show in items table');
            
            // Laravel standard columns
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('updated_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
            $table->softDeletes();
            
            // UUID for external systems
            $table->uuid('uuid')->unique();
            
            // Indexes for performance - Optimized for common query patterns
            // Composite indexes for multi-column queries
            $table->index(['client_id', 'status', 'quotation_date'], 'idx_quotations_client_status_date');
            $table->index(['status', 'quotation_type', 'quotation_date'], 'idx_quotations_status_type_date');
            $table->index(['responsible_id', 'status'], 'idx_quotations_responsible_status');
            $table->index(['representative_id', 'status'], 'idx_quotations_rep_status');
            $table->index(['customer_approval', 'status'], 'idx_quotations_approval_status');
            $table->index(['is_template', 'status'], 'idx_quotations_template_status');
            $table->index(['is_archived', 'archived_at'], 'idx_quotations_archive_status');
            $table->index(['city_id', 'status'], 'idx_quotations_city_status');
            $table->index(['tax_id', 'status'], 'idx_quotations_tax_status');
            $table->index(['template', 'lang'], 'idx_quotations_template_lang');
            
            // Single column indexes for unique lookups
            $table->index(['uuid'], 'idx_quotations_uuid');
            $table->index(['quotation_number'], 'idx_quotations_number');
            $table->index(['sader_no'], 'idx_quotations_sader');
            $table->index(['project_type_id'], 'idx_quotations_project_type');
            $table->index(['created_by'], 'idx_quotations_created_by');
            $table->index(['updated_by'], 'idx_quotations_updated_by');
            
            // Date and approval queries
            $table->index(['quotation_date', 'status'], 'idx_quotations_date_status');
            $table->index(['approval_date', 'customer_approval'], 'idx_quotations_approval_date');
            $table->index(['archived_at', 'is_archived'], 'idx_quotations_archive_date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quotations');
    }
};
