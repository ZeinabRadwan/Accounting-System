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
        Schema::create('client_emails', function (Blueprint $table) {
            $table->id();
            
            // Client relationship
            $table->foreignId('client_id')->constrained('clients')->cascadeOnDelete();
            
            // Email information
            $table->string('email', 255)->comment('Email address');
            $table->boolean('is_primary')->default(false)->comment('Primary email address');
            $table->boolean('is_verified')->default(false)->comment('Whether email is verified');
            
            // Status
            $table->boolean('is_active')->default(true);
            
            // Laravel standard columns
            $table->timestamps();
            $table->softDeletes();
            
            // Indexes for performance
            $table->index(['client_id', 'is_active'], 'idx_client_emails_client_active');
            $table->index(['email'], 'idx_client_emails_email');
            $table->index(['is_primary'], 'idx_client_emails_primary');
            $table->index(['is_verified'], 'idx_client_emails_verified');
            
            // Unique constraint to prevent duplicate emails per client
            $table->unique(['client_id', 'email'], 'uk_client_emails_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('client_emails');
    }
};
