<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Bridge table linking invoice returns to their journal entries
     * Supports multiple journal entries per return (e.g., sales reversal + COGS reversal)
     */
    public function up(): void
    {
        Schema::create('invoice_return_journals', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('invoice_return_id');
            $table->unsignedBigInteger('journal_entry_id');
            $table->string('type', 50)->default('return')->comment('Type: return, return_cogs');
            $table->timestamps();

            $table->index(['invoice_return_id', 'type']);
            $table->index('journal_entry_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoice_return_journals');
    }
};
