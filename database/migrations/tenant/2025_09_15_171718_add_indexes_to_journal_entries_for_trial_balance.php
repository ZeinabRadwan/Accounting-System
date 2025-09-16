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
        // Add indexes to journal_entries table for faster trial balance queries
        Schema::table('journal_entries', function (Blueprint $table) {
            // Index for status filtering (most queries filter by 'posted')
            $table->index('status', 'idx_journal_entries_status');
            
            // Index for entry_date filtering (used for fiscal year and period filtering)
            $table->index('entry_date', 'idx_journal_entries_entry_date');
            
            // Composite index for status + entry_date (most common query pattern)
            $table->index(['status', 'entry_date'], 'idx_journal_entries_status_date');
            
            // Index for fiscal_year_id filtering
            $table->index('fiscal_year_id', 'idx_journal_entries_fiscal_year');
            
            // Index for accounting_period_id filtering
            $table->index('accounting_period_id', 'idx_journal_entries_accounting_period');
            
            // Composite index for status + fiscal_year_id
            $table->index(['status', 'fiscal_year_id'], 'idx_journal_entries_status_fiscal_year');
            
            // Composite index for status + accounting_period_id
            $table->index(['status', 'accounting_period_id'], 'idx_journal_entries_status_period');
        });

        // Add indexes to journal_entry_lines table for faster trial balance queries
        Schema::table('journal_entry_lines', function (Blueprint $table) {
            // Index for chart_of_account_id filtering (most important for trial balance)
            $table->index('chart_of_account_id', 'idx_journal_entry_lines_chart_of_account');
            
            // Index for journal_entry_id (for joins)
            $table->index('journal_entry_id', 'idx_journal_entry_lines_journal_entry');
            
            // Composite index for chart_of_account_id + journal_entry_id
            $table->index(['chart_of_account_id', 'journal_entry_id'], 'idx_journal_entry_lines_account_entry');
            
            // Index for debit_amount (for summing)
            $table->index('debit_amount', 'idx_journal_entry_lines_debit_amount');
            
            // Index for credit_amount (for summing)
            $table->index('credit_amount', 'idx_journal_entry_lines_credit_amount');
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
            $table->dropIndex('idx_journal_entries_status');
            $table->dropIndex('idx_journal_entries_entry_date');
            $table->dropIndex('idx_journal_entries_status_date');
            $table->dropIndex('idx_journal_entries_fiscal_year');
            $table->dropIndex('idx_journal_entries_accounting_period');
            $table->dropIndex('idx_journal_entries_status_fiscal_year');
            $table->dropIndex('idx_journal_entries_status_period');
        });

        // Drop indexes from journal_entry_lines table
        Schema::table('journal_entry_lines', function (Blueprint $table) {
            $table->dropIndex('idx_journal_entry_lines_chart_of_account');
            $table->dropIndex('idx_journal_entry_lines_journal_entry');
            $table->dropIndex('idx_journal_entry_lines_account_entry');
            $table->dropIndex('idx_journal_entry_lines_debit_amount');
            $table->dropIndex('idx_journal_entry_lines_credit_amount');
        });
    }
};
