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
        Schema::create('nationalities', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Nationality name (e.g., Saudi, American, British)');
            $table->unsignedInteger('sort_order')->default(0)->comment('Display order for UI');
            $table->timestamps();
            $table->softDeletes();
            
            // Indexes for performance
            $table->index(['sort_order']);
            $table->index(['name']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nationalities');
    }
};
