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
        Schema::create('cost_allocation_executions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cost_allocation_rule_id')->comment('Reference to allocation rule');
            $table->date('execution_date')->comment('Date when allocation was executed');
            $table->date('period_start_date')->comment('Start date of the allocation period');
            $table->date('period_end_date')->comment('End date of the allocation period');
            $table->decimal('total_amount', 15, 2)->comment('Total amount allocated');
            $table->unsignedBigInteger('journal_entry_id')->nullable()->comment('Reference to created journal entry');
            $table->unsignedBigInteger('executed_by')->comment('User who executed the allocation');
            $table->enum('status', ['pending', 'completed', 'failed'])->default('pending')->comment('Execution status');
            $table->text('notes')->nullable()->comment('Execution notes');
            $table->text('error_message')->nullable()->comment('Error message if execution failed');
            $table->timestamps();

            // Indexes
            $table->index('cost_allocation_rule_id');
            $table->index('execution_date');
            $table->index('journal_entry_id');
            $table->index('executed_by');
            $table->index('status');
            $table->index(['execution_date', 'cost_allocation_rule_id'], 'cae_date_rule_idx');

            // Foreign keys
            $table->foreign('cost_allocation_rule_id')->references('id')->on('cost_allocation_rules')->onDelete('restrict');
            $table->foreign('journal_entry_id')->references('id')->on('journal_entries')->onDelete('restrict');
            $table->foreign('executed_by')->references('id')->on('users')->onDelete('restrict');

            // Unique constraint: prevent duplicate executions for same rule and period
            $table->unique(['cost_allocation_rule_id', 'period_start_date', 'period_end_date'], 'unique_allocation_period');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cost_allocation_executions');
    }
};
