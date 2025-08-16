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
        Schema::create('countries_translations', function (Blueprint $table) {
            $table->id();
            
            // Foreign key to countries table
            $table->foreignId('country_id')->constrained('countries')->cascadeOnDelete();
            
            // Language code
            $table->string('locale', 5)->comment('Language code (e.g., en, ar)');
            
            // Translatable fields
            $table->string('name', 100)->nullable()->comment('Translated country name');
            
            // Laravel standard columns
            $table->timestamps();
            
            // Indexes for performance
            $table->index(['country_id', 'locale']);
            $table->index(['locale']);
            
            // Ensure unique combination of country_id and locale
            $table->unique(['country_id', 'locale']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('countries_translations');
    }
};
