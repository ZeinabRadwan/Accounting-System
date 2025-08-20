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
            $table->string('entry_number')->unique(); // Auto-generated entry number
            $table->date('entry_date'); // Date of the journal entry
            $table->string('reference')->nullable(); // External reference (invoice #, purchase #, etc.)
            $table->text('description'); // Description of the transaction
            $table->decimal('total_debit', 15, 2)->default(0); // Total debit amount
            $table->decimal('total_credit', 15, 2)->default(0); // Total credit amount
            $table->enum('status', ['draft', 'posted', 'void'])->default('draft'); // Entry status
            $table->unsignedBigInteger('created_by'); // User who created the entry
            $table->unsignedBigInteger('posted_by')->nullable(); // User who posted the entry
            $table->timestamp('posted_at')->nullable(); // When the entry was posted
            $table->string('source_type')->nullable(); // Source module (Invoice, Purchase, Expense, etc.)
            $table->unsignedBigInteger('source_id')->nullable(); // Source record ID
            $table->timestamps();
            $table->softDeletes();

            // Indexes for performance
            $table->index('entry_number');
            $table->index('entry_date');
            $table->index('status');
            $table->index('source_type');
            $table->index('source_id');
            $table->index('created_by');
            $table->index('posted_by');
            $table->index(['source_type', 'source_id']);
            $table->index('deleted_at');

            // Foreign key constraints
            $table->foreign('created_by')->references('id')->on('users')->onDelete('restrict');
            $table->foreign('posted_by')->references('id')->on('users')->onDelete('restrict');
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
