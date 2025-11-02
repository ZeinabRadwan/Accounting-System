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
        Schema::create('cost_allocation_rules', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255)->comment('Name of the allocation rule');
            $table->unsignedBigInteger('source_cost_center_id')->comment('Cost center from which costs are allocated');
            $table->enum('basis_type', ['percentage', 'employees', 'revenue', 'area', 'consumption'])->comment('Basis type for allocation');
            $table->text('description')->nullable()->comment('Description of the allocation rule');
            $table->boolean('is_active')->default(true)->comment('Whether the rule is active');
            $table->unsignedBigInteger('created_by')->comment('User who created the rule');
            $table->unsignedBigInteger('updated_by')->nullable()->comment('User who last updated the rule');
            $table->softDeletes();
            $table->timestamps();

            // Indexes
            $table->index('source_cost_center_id');
            $table->index('basis_type');
            $table->index('is_active');
            $table->index('deleted_at');

            // Foreign keys
            $table->foreign('source_cost_center_id')->references('id')->on('cost_centers')->onDelete('restrict');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('restrict');
            $table->foreign('updated_by')->references('id')->on('users')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cost_allocation_rules');
    }
};
