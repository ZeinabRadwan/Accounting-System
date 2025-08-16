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
        Schema::create('financial_years', function (Blueprint $table) {
            $table->id();
            
            // Financial year information
            $table->string('name')->comment('Financial year name');
            $table->date('start_date')->comment('Financial year start date');
            $table->date('end_date')->comment('Financial year end date');
            $table->unsignedTinyInteger('status')->nullable()->default(1)->comment('1: Active, 0: Not Active');
            
            // Laravel standard columns
            $table->timestamps();
            $table->softDeletes();
            
            // Indexes for performance
            $table->index(['start_date', 'end_date']);
            $table->index(['status']);
            $table->index(['start_date']);
            $table->index(['end_date']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('financial_years');
    }
};
