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
        Schema::create('chart_of_accounts', function (Blueprint $table) {
            $table->id();
            
            // Account identification
            $table->string('name', 150)->nullable()->comment('Account name');
            $table->bigInteger('code')->unique()->comment('Unique account code');
            
            // Account classification
            $table->unsignedTinyInteger('type')->default(0);
            $table->unsignedTinyInteger('sub_type')->default(0)->comment('Account sub-type for further classification');
            $table->unsignedTinyInteger('account_level')->default(0)->comment('Hierarchy level in account tree');
            
            // Account structure
            $table->boolean('has_child')->default(false)->comment('Whether this account has child accounts');
            $table->unsignedInteger('order')->nullable()->comment('Display order for UI');
            
            // Account status
            $table->boolean('is_enabled')->default(true)->comment('Whether the account is active');
            $table->boolean('is_archived')->default(false)->comment('Whether the account is archived');
            
            // Relationships
            $table->foreignId('client_id')->nullable()->constrained('clients')->nullOnDelete()->comment('Associated client if account is client-specific');
            
            // Additional information
            $table->string('description')->nullable()->comment('Account description');
            
            // Laravel standard columns
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete()->comment('User who created the account');
            $table->timestamps();
            $table->softDeletes();
            
            // Indexes for performance - Optimized for common query patterns
            // Composite indexes for multi-column queries
            $table->index(['type', 'sub_type', 'is_enabled'], 'idx_chart_accounts_type_subtype_enabled');
            $table->index(['account_level', 'has_child', 'is_enabled'], 'idx_chart_accounts_level_child_enabled');
            $table->index(['is_archived', 'is_enabled'], 'idx_chart_accounts_archive_enabled');
            $table->index(['client_id', 'is_enabled'], 'idx_chart_accounts_client_enabled');
            $table->index(['type', 'is_enabled', 'order'], 'idx_chart_accounts_type_enabled_order');
            
            // Single column indexes for unique lookups
            $table->index(['code'], 'idx_chart_accounts_code');
            $table->index(['name'], 'idx_chart_accounts_name');
            $table->index(['order'], 'idx_chart_accounts_order');
            $table->index(['created_by'], 'idx_chart_accounts_created_by');
            $table->index(['deleted_at'], 'idx_chart_accounts_deleted_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chart_of_accounts');
    }
};
