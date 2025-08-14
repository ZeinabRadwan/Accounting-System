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
        Schema::create('vendors', function (Blueprint $table) {
            $table->id();
            
            // Vendor identification
            $table->string('name')->nullable();
            
            // Business information
            $table->string('vat_number')->nullable()->comment('VAT Number');
            $table->string('cr_number')->nullable()->comment('Commercial Registration Number');
            
            // Identity information
            $table->foreignId('id_type_id')->nullable()->constrained('id_types')->nullOnDelete();
            $table->string('id_no')->nullable()->comment('ID Number');
            $table->date('id_date')->nullable();
            $table->date('dob')->nullable()->comment('Date of Birth');
            
            // Additional information
            $table->foreignId('nationality_id')->nullable()->constrained('nationalities')->nullOnDelete();
            $table->string('job')->nullable();
            $table->string('job_place')->nullable();
            
            // Company and account linking
            $table->foreignId('vendor_id')->nullable()->constrained('vendors')->nullOnDelete();
            
            // Banking information
            $table->foreignId('bank_id')->nullable()->constrained('banks')->nullOnDelete();
            $table->string('iban')->nullable()->comment('International Bank Account Number');
            $table->foreignId('currency_id')->nullable()->constrained('currencies')->nullOnDelete();
            
            // Media and status
            $table->string('avatar', 255)->nullable()->default('');
            
            // Metadata
            $table->decimal('balance', 15, 2)->default(0.00)->comment('Account balance');
            
            // Laravel standard columns
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
            
            // Indexes for performance
            $table->index(['vendor_id']);
            $table->index(['cr_number']);
            $table->index(['vat_number']);
            $table->index(['id_no']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vendors');
    }
};
