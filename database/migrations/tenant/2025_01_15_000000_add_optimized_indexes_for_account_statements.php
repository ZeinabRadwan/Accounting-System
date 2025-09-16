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
        // Add optimized indexes for account statement queries
        Schema::table('journal_entries', function (Blueprint $table) {
            // Composite index for the most common query pattern: status + entry_date + fiscal_year_id
            $table->index(['status', 'entry_date', 'fiscal_year_id'], 'idx_journal_entries_status_date_fiscal');
            
            // Composite index for status + entry_date + accounting_period_id
            $table->index(['status', 'entry_date', 'accounting_period_id'], 'idx_journal_entries_status_date_period');
            
            // Index for entry_date ordering (used in ORDER BY)
            $table->index(['entry_date', 'id'], 'idx_journal_entries_date_id');
        });

        // Add optimized indexes for journal_entry_lines
        Schema::table('journal_entry_lines', function (Blueprint $table) {
            // Composite index for chart_of_account_id + journal_entry_id (most common join pattern)
            $table->index(['chart_of_account_id', 'journal_entry_id'], 'idx_journal_entry_lines_account_entry_optimized');
            
            // Index for chart_of_account_id + debit_amount + credit_amount (for aggregation)
            $table->index(['chart_of_account_id', 'debit_amount', 'credit_amount'], 'idx_journal_entry_lines_account_amounts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop indexes from journal_entries table
        Schema::table('journal_entries', function (Blueprint $table) {
            $table->dropIndex('idx_journal_entries_status_date_fiscal');
            $table->dropIndex('idx_journal_entries_status_date_period');
            $table->dropIndex('idx_journal_entries_date_id');
        });

        // Drop indexes from journal_entry_lines table
        Schema::table('journal_entry_lines', function (Blueprint $table) {
            $table->dropIndex('idx_journal_entry_lines_account_entry_optimized');
            $table->dropIndex('idx_journal_entry_lines_account_amounts');
        });
    }
};
