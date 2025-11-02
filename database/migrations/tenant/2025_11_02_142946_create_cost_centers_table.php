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
        Schema::create('cost_centers', function (Blueprint $table) {
            $table->id();
            $table->string('code', 50)->unique()->comment('Unique code for the cost center');
            $table->string('name', 255)->comment('Cost center name in Arabic');
            $table->string('name_en', 255)->nullable()->comment('Cost center name in English');
            $table->unsignedBigInteger('parent_id')->nullable()->comment('Parent cost center for hierarchy');
            $table->boolean('is_active')->default(true)->comment('Whether the cost center is active');
            $table->unsignedBigInteger('created_by')->comment('User who created the cost center');
            $table->unsignedBigInteger('updated_by')->nullable()->comment('User who last updated the cost center');
            $table->softDeletes();
            $table->timestamps();

            // Indexes for performance
            $table->index('code');
            $table->index('parent_id');
            $table->index('is_active');
            $table->index('deleted_at');
            $table->index(['parent_id', 'is_active'], 'cc_parent_active_idx');
            
            // Foreign key constraints
            $table->foreign('parent_id')->references('id')->on('cost_centers')->onDelete('restrict');
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
        Schema::dropIfExists('cost_centers');
    }
};
