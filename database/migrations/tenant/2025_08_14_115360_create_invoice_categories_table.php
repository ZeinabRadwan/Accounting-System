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
        Schema::create('invoice_categories', function (Blueprint $table) {
            $table->id();
            
            // Basic category information
            $table->string('name')->comment('Default category name');
            
            // Laravel standard columns
            $table->timestamps();
            $table->softDeletes();
            
            // Indexes for performance
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoice_categories');
    }
};
