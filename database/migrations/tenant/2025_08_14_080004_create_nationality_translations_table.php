<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('nationality_translations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('nationality_id')->constrained('nationalities')->onDelete('cascade');
            $table->string('locale', 5);
            $table->string('name')->nullable();
            $table->timestamps();

            $table->unique(['nationality_id', 'locale']);
            $table->index(['locale']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nationality_translations');
    }
};
