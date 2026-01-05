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
        Schema::create('analytical_accounts', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150)->comment('Analytical account name, e.g., "Cash Payments", "Credit Card Payments"');
            $table->string('code', 50)->nullable()->unique()->comment('Optional code for reporting');
            $table->enum('type', ['payment', 'channel', 'platform'])->nullable()->comment('Type of analytical account for future categorization');
            $table->boolean('status')->default(true)->comment('Whether the analytical account is active');
            $table->unsignedBigInteger('branch_id')->nullable()->comment('Branch-specific analytical accounts');
            $table->unsignedBigInteger('created_by')->comment('User who created the analytical account');
            $table->softDeletes();
            $table->timestamps();

            // Indexes for performance
            $table->index('code');
            $table->index('status');
            $table->index('branch_id');
            $table->index('type');
            $table->index('deleted_at');
            $table->index(['branch_id', 'status'], 'aa_branch_status_idx');

            // Foreign key constraints
            $table->foreign('branch_id')->references('id')->on('branches')->onDelete('set null');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('analytical_accounts');
    }
};
