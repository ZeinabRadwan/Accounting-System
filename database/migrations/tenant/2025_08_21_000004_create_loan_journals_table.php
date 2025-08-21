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
        Schema::create('loan_journals', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('loan_payment_id');
            $table->unsignedBigInteger('journal_entry_id');
            $table->timestamps();

            $table->foreign('loan_payment_id')->references('id')->on('loan_payments')->onDelete('cascade');
            $table->foreign('journal_entry_id')->references('id')->on('journal_entries')->onDelete('cascade');
            
            $table->unique(['loan_payment_id', 'journal_entry_id']);
            $table->index('loan_payment_id');
            $table->index('journal_entry_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loan_journals');
    }
};
