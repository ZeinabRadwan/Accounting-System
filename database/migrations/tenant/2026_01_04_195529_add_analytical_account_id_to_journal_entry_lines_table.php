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
        Schema::table('journal_entry_lines', function (Blueprint $table) {
            if (! Schema::hasColumn('journal_entry_lines', 'analytical_account_id')) {
                $table->unsignedBigInteger('analytical_account_id')->nullable()->after('cost_center_id')->comment('Analytical account for this journal entry line (metadata only, does not affect double-entry)');

                // Indexes for performance
                $table->index('analytical_account_id');
                $table->index(['analytical_account_id', 'journal_entry_id'], 'jel_aa_je_idx');

                // Foreign key constraint
                $table->foreign('analytical_account_id')->references('id')->on('analytical_accounts')->onDelete('set null');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('journal_entry_lines', function (Blueprint $table) {
            if (Schema::hasColumn('journal_entry_lines', 'analytical_account_id')) {
                $table->dropForeign(['analytical_account_id']);
                $table->dropIndex(['analytical_account_id', 'journal_entry_id']);
                $table->dropIndex(['analytical_account_id']);
                $table->dropColumn('analytical_account_id');
            }
        });
    }
};
