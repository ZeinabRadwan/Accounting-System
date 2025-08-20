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
    public function up(): void
    {
        Schema::create('journal_entries', function (Blueprint $table) {
            $table->id();
            $table->string('reference')->unique(); // Unique reference number
            $table->date('entry_date'); // Date of the journal entry
            $table->text('description')->nullable(); // General description
            $table->decimal('total_debit', 15, 2)->default(0); // Total debit amount
            $table->decimal('total_credit', 15, 2)->default(0); // Total credit amount
            $table->enum('status', ['draft', 'posted', 'void'])->default('draft'); // Entry status
            $table->unsignedBigInteger('created_by'); // User who created the entry
            $table->unsignedBigInteger('posted_by')->nullable(); // User who posted the entry
            $table->timestamp('posted_at')->nullable(); // When the entry was posted
            $table->unsignedBigInteger('voided_by')->nullable(); // User who voided the entry
            $table->timestamp('voided_at')->nullable(); // When the entry was voided
            $table->text('void_reason')->nullable(); // Reason for voiding
            $table->timestamps();

            // Indexes for performance
            $table->index('reference');
            $table->index('entry_date');
            $table->index('status');
            $table->index('created_by');
            $table->index('posted_by');
            $table->index('voided_by');
            $table->index(['entry_date', 'status']);
            $table->index(['status', 'created_by']);

            // Foreign key constraints
            $table->foreign('created_by')->references('id')->on('users')->onDelete('restrict');
            $table->foreign('posted_by')->references('id')->on('users')->onDelete('restrict');
            $table->foreign('voided_by')->references('id')->on('users')->onDelete('restrict');

            // Note: Total debit and credit must be equal for a valid journal entry
            // This will be enforced at the application level
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('journal_entries');
    }
};
