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
        Schema::create('project_types_translations', function (Blueprint $table) {
            $table->id();
            
            // Foreign key to project_types table
            $table->foreignId('project_type_id')->constrained('project_types')->cascadeOnDelete();
            
            // Language code
            $table->string('locale', 5)->comment('Language code (e.g., en, ar)');
            
            // Translatable fields
            $table->string('name', 150)->nullable()->comment('Translated project type name');
            
            // Laravel standard columns
            $table->timestamps();
            
            // Indexes for performance
            $table->index(['project_type_id', 'locale']);
            $table->index(['locale']);
            
            // Ensure unique combination of project_type_id and locale
            $table->unique(['project_type_id', 'locale']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_types_translations');
    }
};
