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
            $table->string('name', 150);
            $table->string('code', 50)->unique();
            $table->foreignId('type_id')->constrained('chart_of_account_types');
            $table->foreignId('parent_id')->nullable()->constrained('chart_of_accounts');
            $table->integer('order')->nullable();
            $table->boolean('is_active')->default(true);
            $table->foreignId('created_by')->constrained('users');
            $table->softDeletes(); // handles deleted_at
            $table->timestamps();
         

            // Important indexes for performance
            $table->index('type_id'); // For filtering by account type
            $table->index('is_active'); // For filtering active/archived accounts
            $table->index('parent_id'); // For hierarchical queries
            $table->index('order'); // For sorting
            $table->index('created_by'); // For filtering by creator
            $table->index(['type_id', 'is_active']); // Common query pattern
            $table->index(['parent_id', 'is_active']); // Common query pattern
            $table->index('deleted_at'); // For soft delete queries
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
