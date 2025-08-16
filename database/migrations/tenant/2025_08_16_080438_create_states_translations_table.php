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
        Schema::create('states_translations', function (Blueprint $table) {
            $table->id();
            
            // Foreign key to states table
            $table->foreignId('state_id')->constrained('states')->cascadeOnDelete();
            
            // Language code
            $table->string('locale', 5)->comment('Language code (e.g., en, ar)');
            
            // Translatable fields
            $table->string('name', 100)->nullable()->comment('Translated state name');
            
            // Laravel standard columns
            $table->timestamps();
            
            // Indexes for performance
            $table->index(['state_id', 'locale']);
            $table->index(['locale']);
            
            // Ensure unique combination of state_id and locale
            $table->unique(['state_id', 'locale']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('states_translations');
    }
};
