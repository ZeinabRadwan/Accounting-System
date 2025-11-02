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
        Schema::create('cost_center_metrics', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cost_center_id')->comment('Reference to cost center');
            $table->enum('metric_type', ['employees', 'revenue', 'area', 'consumption'])->comment('Type of metric');
            $table->decimal('metric_value', 15, 2)->comment('Metric value');
            $table->date('period_date')->comment('Period date for this metric');
            $table->text('notes')->nullable()->comment('Additional notes');
            $table->unsignedBigInteger('created_by')->comment('User who created the metric');
            $table->timestamps();

            // Indexes
            $table->index('cost_center_id');
            $table->index('metric_type');
            $table->index('period_date');
            $table->index(['cost_center_id', 'metric_type', 'period_date'], 'ccm_center_type_date_idx');

            // Foreign keys
            $table->foreign('cost_center_id')->references('id')->on('cost_centers')->onDelete('cascade');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('restrict');

            // Unique constraint: one metric per cost center per type per period
            $table->unique(['cost_center_id', 'metric_type', 'period_date'], 'unique_metric_period');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cost_center_metrics');
    }
};
