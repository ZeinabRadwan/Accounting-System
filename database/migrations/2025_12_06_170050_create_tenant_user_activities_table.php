<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tenant_user_activities', function (Blueprint $table) {
            $table->id();
            $table->string('tenant_id'); // Tenant ID (varchar in tenants table)
            $table->string('user_id'); // User ID from tenant database
            $table->string('user_name')->nullable(); // User name for display
            $table->string('user_email')->nullable(); // User email for display
            $table->string('session_id', 64)->unique(); // Unique session identifier
            $table->timestamp('started_at');
            $table->timestamp('last_activity_at');
            $table->integer('total_seconds')->default(0); // Total working time in seconds
            $table->boolean('is_active')->default(true);
            $table->timestamp('expires_at')->nullable(); // Session expiration time
            $table->timestamps();

            // Foreign key constraint
            $table->foreign('tenant_id')->references('id')->on('tenants')->onDelete('cascade');

            // Indexes for performance
            $table->index(['tenant_id', 'is_active']);
            $table->index(['tenant_id', 'last_activity_at']);
            $table->index('expires_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tenant_user_activities');
    }
};
