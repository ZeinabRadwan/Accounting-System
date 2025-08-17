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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            
            // User relationship
            $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
            
            // Customer identification
            $table->string('name')->nullable();
            $table->unsignedTinyInteger('type')->default(1)->comment('1: Individual, 2: Company');
            
            // Business information
            $table->string('cr_number')->nullable()->comment('Commercial Registration Number');
            $table->string('vat_number')->nullable()->comment('VAT Number');
            
            // Phone number
            $table->string('phone_no')->nullable()->comment('Phone Number');

            // Identity information
            $table->foreignId('id_type_id')->nullable()->constrained('id_types')->nullOnDelete();
            $table->string('id_no')->nullable()->comment('ID Number');
            $table->date('id_date')->nullable();
            
            // Contact information
            $table->date('dob')->nullable()->comment('Date of Birth');
            
            // Additional information
            $table->foreignId('nationality_id')->nullable()->constrained('nationalities')->nullOnDelete();
            $table->string('job')->nullable();
            $table->string('job_place')->nullable();
            
            // Company
            $table->foreignId('client_id')->nullable()->constrained('clients')->nullOnDelete();
            
            // Banking information
            $table->foreignId('bank_id')->nullable()->constrained('banks')->nullOnDelete();
            $table->string('iban')->nullable()->comment('International Bank Account Number');
            $table->foreignId('currency_id')->nullable()->constrained('currencies')->nullOnDelete();
            
            // Media and status
            $table->string('avatar', 255)->nullable()->default('');
            $table->boolean('is_active')->default(true);
            
            // Metadata
            $table->decimal('balance', 15, 2)->default(0.00)->comment('Account balance');
            
            // Laravel standard columns
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
            
            // Indexes for performance - Optimized for common query patterns
            // Composite indexes for multi-column queries
            $table->index(['type', 'is_active', 'user_id'], 'idx_clients_type_active_user');
            $table->index(['client_id', 'is_active', 'type'], 'idx_clients_parent_active_type');
            $table->index(['nationality_id', 'is_active'], 'idx_clients_nationality_active');
            $table->index(['bank_id', 'currency_id'], 'idx_clients_bank_currency');
            $table->index(['id_type_id', 'id_no'], 'idx_clients_id_type_number');
            
            // Single column indexes for unique lookups
            $table->index(['phone_no'], 'idx_clients_phone');
            $table->index(['cr_number'], 'idx_clients_cr');
            $table->index(['vat_number'], 'idx_clients_vat');
            $table->index(['iban'], 'idx_clients_iban');
            $table->index(['dob'], 'idx_clients_dob');
            $table->index(['id_date'], 'idx_clients_id_date');
            $table->index(['balance'], 'idx_clients_balance');
            
            // User relationship queries
            $table->index(['user_id', 'is_active'], 'idx_clients_user_active');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
};
