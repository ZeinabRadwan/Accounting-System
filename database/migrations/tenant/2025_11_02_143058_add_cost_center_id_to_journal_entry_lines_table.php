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
        Schema::table('journal_entry_lines', function (Blueprint $table) {
            $table->unsignedBigInteger('cost_center_id')->nullable()->after('chart_of_account_id')->comment('Cost center for this journal entry line');
            
            // Indexes for performance
            $table->index('cost_center_id');
            $table->index(['cost_center_id', 'journal_entry_id'], 'jel_cc_je_idx');
            
            // Foreign key constraint
            $table->foreign('cost_center_id')->references('id')->on('cost_centers')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('journal_entry_lines', function (Blueprint $table) {
            $table->dropForeign(['cost_center_id']);
            $table->dropIndex(['cost_center_id']);
            $table->dropIndex(['cost_center_id', 'journal_entry_id']);
            $table->dropColumn('cost_center_id');
        });
    }
};
