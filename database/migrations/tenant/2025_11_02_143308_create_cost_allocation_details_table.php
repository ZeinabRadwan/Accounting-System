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
        Schema::create('cost_allocation_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cost_allocation_rule_id')->comment('Reference to allocation rule');
            $table->unsignedBigInteger('target_cost_center_id')->comment('Target cost center receiving allocation');
            $table->decimal('allocation_ratio', 10, 4)->default(0)->comment('Allocation ratio (percentage or weight)');
            $table->integer('order')->default(0)->comment('Order of this detail within the rule');
            $table->timestamps();

            // Indexes
            $table->index('cost_allocation_rule_id');
            $table->index('target_cost_center_id');
            $table->index(['cost_allocation_rule_id', 'target_cost_center_id'], 'cad_rule_target_idx');

            // Foreign keys
            $table->foreign('cost_allocation_rule_id')->references('id')->on('cost_allocation_rules')->onDelete('cascade');
            $table->foreign('target_cost_center_id')->references('id')->on('cost_centers')->onDelete('restrict');

            // Unique constraint: one detail per rule per target center
            $table->unique(['cost_allocation_rule_id', 'target_cost_center_id'], 'cad_rule_target_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cost_allocation_details');
    }
};
