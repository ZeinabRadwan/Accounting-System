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
        Schema::create('account_routing_settings', function (Blueprint $table) {
            $table->id();
            $table->string('module'); // sales, purchase, vat, expenses
            $table->string('setting_key'); // clients_account, sales_account, etc.
            $table->string('setting_name'); // Human readable name
            $table->unsignedBigInteger('parent_account_id')->nullable(); // Reference to chart_of_accounts
            $table->string('account_type'); // Asset, Liability, Equity, Revenue, Expense
            $table->string('description')->nullable(); // What this account is used for
            $table->boolean('is_required')->default(false); // Is this setting mandatory?
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            // Foreign key constraint
            $table->foreign('parent_account_id')->references('id')->on('chart_of_accounts')->onDelete('set null');
            
            // Unique constraint per tenant and setting
            $table->unique(['module', 'setting_key']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('account_routing_settings');
    }
};
