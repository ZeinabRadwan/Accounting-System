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
        Schema::create('financial_years_translations', function (Blueprint $table) {
            $table->id();
            
            // Foreign key to financial_years table
            $table->foreignId('financial_year_id')->constrained('financial_years')->cascadeOnDelete();
            
            // Language code
            $table->string('locale', 5)->comment('Language code (e.g., en, ar)');
            
            // Translatable fields
            $table->string('name', 150)->nullable()->comment('Translated financial year name');
            
            // Laravel standard columns
            $table->timestamps();
            
            // Indexes for performance
            $table->index(['financial_year_id', 'locale']);
            $table->index(['locale']);
            
            // Ensure unique combination of financial_year_id and locale
            $table->unique(['financial_year_id', 'locale']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('financial_years_translations');
    }
};
