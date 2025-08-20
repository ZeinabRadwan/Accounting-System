<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('chart_of_accounts', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);
            $table->string('code', 50)->unique();
            $table->unsignedTinyInteger('type'); 
            $table->integer('sub_type')->nullable();

            $table->boolean('is_enabled')->default(true);
            $table->boolean('is_archived')->default(false);

            $table->text('description')->nullable();

            $table->foreignId('created_by')->constrained('users');
            $table->foreignId('client_id')->nullable()->constrained('clients');

            $table->foreignId('parent_id')->nullable()->constrained('chart_of_accounts'); // hierarchy

            $table->integer('order')->nullable();

            $table->timestamps();
            $table->softDeletes(); // handles deleted_at

            // Important indexes for performance
            $table->index(['type', 'sub_type']); // For filtering by account type
            $table->index(['is_enabled', 'is_archived']); // For filtering active/archived accounts
            $table->index('parent_id'); // For hierarchical queries
            $table->index('client_id'); // For filtering by client
            $table->index('order'); // For sorting
            $table->index('created_by'); // For filtering by creator
            $table->index(['type', 'is_enabled']); // Common query pattern
            $table->index(['client_id', 'is_enabled']); // Common query pattern
            $table->index(['parent_id', 'is_enabled']); // Common query pattern
            $table->index('deleted_at'); // For soft delete queries
        });
    }

    public function down()
    {
        Schema::dropIfExists('chart_of_accounts');
    }
};
