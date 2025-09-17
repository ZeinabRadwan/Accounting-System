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
        // Add indexes to journal_entry_lines table for balance calculations
        Schema::table('journal_entry_lines', function (Blueprint $table) {
            // Index for account filtering
            $table->index('chart_of_account_id', 'idx_journal_lines_account');
            
            // Composite index for account + debit/credit amounts
            $table->index(['chart_of_account_id', 'debit_amount'], 'idx_journal_lines_account_debit');
            $table->index(['chart_of_account_id', 'credit_amount'], 'idx_journal_lines_account_credit');
        });

        // Add indexes to chart_of_account_types table
        Schema::table('chart_of_account_types', function (Blueprint $table) {
            // Index for name filtering
            $table->index('name', 'idx_chart_of_account_types_name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop indexes from chart_of_accounts table
        Schema::table('chart_of_accounts', function (Blueprint $table) {
            $table->dropIndex('idx_chart_of_accounts_active');
            $table->dropIndex('idx_chart_of_accounts_type');
            $table->dropIndex('idx_chart_of_accounts_active_type');
        });

        // Drop indexes from journal_entry_lines table
        Schema::table('journal_entry_lines', function (Blueprint $table) {
            $table->dropIndex('idx_journal_lines_account');
            $table->dropIndex('idx_journal_lines_account_debit');
            $table->dropIndex('idx_journal_lines_account_credit');
        });

        // Drop indexes from chart_of_account_types table
        Schema::table('chart_of_account_types', function (Blueprint $table) {
            $table->dropIndex('idx_chart_of_account_types_name');
        });
    }
};
