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
        Schema::create('cities_translations', function (Blueprint $table) {
            $table->id();
            
            // Foreign key to cities table
            $table->foreignId('city_id')->constrained('cities')->cascadeOnDelete();
            
            // Language code
            $table->string('locale', 5)->comment('Language code (e.g., en, ar)');
            
            // Translatable fields
            $table->string('name', 100)->nullable()->comment('Translated city name');
            
            // Laravel standard columns
            $table->timestamps();
            
            // Indexes for performance
            $table->index(['city_id', 'locale']);
            $table->index(['locale']);
            
            // Ensure unique combination of city_id and locale
            $table->unique(['city_id', 'locale']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cities_translations');
    }
};
