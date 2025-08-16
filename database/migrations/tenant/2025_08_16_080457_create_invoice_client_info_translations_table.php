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
        Schema::create('invoice_client_info_translations', function (Blueprint $table) {
            $table->id();
            
            // Foreign key to invoice_client_info table
            $table->foreignId('invoice_client_info_id')->constrained('invoice_client_info')->cascadeOnDelete();
            
            // Language code
            $table->string('locale', 5)->comment('Language code (e.g., en, ar)');
            
            // Translatable fields
            $table->string('client_name', 100)->nullable()->comment('Translated client name');
            $table->string('representative_name', 100)->nullable()->comment('Translated representative name');
            
            // Laravel standard columns
            $table->timestamps();
            
            // Indexes for performance - Optimized for common query patterns
            $table->index(['invoice_client_info_id', 'locale'], 'idx_ic_trans_client_locale');
            $table->index(['locale', 'invoice_client_info_id'], 'idx_ic_trans_locale_client');
            
            // Ensure unique combination of invoice_client_info_id and locale
            $table->unique(['invoice_client_info_id', 'locale'], 'ic_trans_client_locale_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoice_client_info_translations');
    }
};
