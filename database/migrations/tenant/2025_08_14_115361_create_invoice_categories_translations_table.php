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
        Schema::create('invoice_categories_translations', function (Blueprint $table) {
            $table->id();
            
            // Foreign key to invoice_categories table
            $table->foreignId('invoice_category_id')->constrained('invoice_categories')->cascadeOnDelete();
            
            // Language code
            $table->string('locale', 5)->comment('Language code (e.g., en, ar)');
            
            // Translatable fields
            $table->string('name', 150)->nullable()->comment('Translated category name');
            
            // Laravel standard columns
            $table->timestamps();
            
            // Indexes for performance
            $table->index(['invoice_category_id', 'locale']);
            $table->index(['locale']);
            
            // Ensure unique combination of invoice_category_id and locale
            $table->unique(['invoice_category_id', 'locale'], 'inv_cat_trans_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoice_categories_translations');
    }
};
