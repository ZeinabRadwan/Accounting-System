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
        Schema::create('banks', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Bank name');
            $table->unsignedInteger('sort_order')->default(0)->comment('Display order for UI');
            $table->timestamps();
            $table->softDeletes();
            
            // Indexes for performance - Optimized for common query patterns
            $table->index(['sort_order', 'name'], 'idx_banks_sort_name');
            $table->index(['deleted_at'], 'idx_banks_deleted_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('banks');
    }
};
