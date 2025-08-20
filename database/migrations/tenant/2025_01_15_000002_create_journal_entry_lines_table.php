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
        Schema::create('journal_entry_lines', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('journal_entry_id'); // Reference to journal entry
            $table->unsignedBigInteger('chart_of_account_id'); // Chart of account for this line
            $table->decimal('debit_amount', 15, 2)->default(0); // Debit amount for this line
            $table->decimal('credit_amount', 15, 2)->default(0); // Credit amount for this line
            $table->text('description')->nullable(); // Line-specific description
            $table->string('reference')->nullable(); // Line-specific reference
            $table->integer('line_number'); // Order of the line within the entry
            $table->timestamps();

            // Indexes for performance
            $table->index('journal_entry_id');
            $table->index('chart_of_account_id');
            $table->index('line_number');
            $table->index(['journal_entry_id', 'line_number']);

            // Foreign key constraints
            $table->foreign('journal_entry_id')->references('id')->on('journal_entries')->onDelete('cascade');
            $table->foreign('chart_of_account_id')->references('id')->on('chart_of_accounts')->onDelete('restrict');

            // Note: Amount validation will be handled at the application level
            // Each line must have either debit_amount > 0 OR credit_amount > 0, but not both
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('journal_entry_lines');
    }
};
