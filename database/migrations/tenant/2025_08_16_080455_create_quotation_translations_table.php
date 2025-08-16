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
        Schema::create('quotation_translations', function (Blueprint $table) {
            $table->id();
            
            // Foreign key to quotations table
            $table->foreignId('quotation_id')->constrained('quotations')->cascadeOnDelete();
            
            // Language code
            $table->string('locale', 5)->comment('Language code (e.g., en, ar)');
            
            // Translatable fields
            $table->string('name', 150)->nullable()->comment('Translated quotation name');
            $table->text('subject')->nullable()->comment('Translated quotation subject');
            
            // Laravel standard columns
            $table->timestamps();
            
            // Indexes for performance
            $table->index(['quotation_id', 'locale']);
            $table->index(['locale']);
            
            // Ensure unique combination of quotation_id and locale
            $table->unique(['quotation_id', 'locale']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quotation_translations');
    }
};
