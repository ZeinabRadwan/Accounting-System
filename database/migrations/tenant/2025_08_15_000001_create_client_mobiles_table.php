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
        Schema::create('client_mobiles', function (Blueprint $table) {
            $table->id();
            
            // Client relationship
            $table->foreignId('client_id')->constrained('clients')->cascadeOnDelete();
            
            // Mobile information
            $table->string('mobile_number', 20)->comment('Mobile phone number');
            $table->string('country_code', 5)->default('+966')->comment('Country calling code');
            $table->boolean('is_primary')->default(false)->comment('Primary mobile number');
            $table->boolean('is_verified')->default(false)->comment('Whether mobile is verified');
            
            // Status
            $table->boolean('is_active')->default(true);
            
            // Laravel standard columns
            $table->timestamps();
            $table->softDeletes();
            
            // Indexes for performance
            $table->index(['client_id', 'is_active'], 'idx_client_mobiles_client_active');
            $table->index(['mobile_number', 'country_code'], 'idx_client_mobiles_number_code');
            $table->index(['is_primary'], 'idx_client_mobiles_primary');
            $table->index(['is_verified'], 'idx_client_mobiles_verified');
            
            // Unique constraint to prevent duplicate mobile numbers per client
            $table->unique(['client_id', 'mobile_number', 'country_code'], 'uk_client_mobiles_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('client_mobiles');
    }
};
