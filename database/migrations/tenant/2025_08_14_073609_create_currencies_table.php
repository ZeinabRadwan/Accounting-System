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
        Schema::create('currencies', function (Blueprint $table) {
            $table->id();
            $table->string('code', 3)->unique()->comment('ISO 4217 currency code (e.g., USD, EUR, SAR)');
            $table->string('name')->comment('Currency name (e.g., US Dollar, Euro, Saudi Riyal)');
            $table->string('symbol', 5)->nullable()->comment('Currency symbol (e.g., $, €, ر.س)');
            $table->decimal('exchange_rate', 10, 6)->default(1.000000)->comment('Exchange rate to base currency');
            $table->unsignedInteger('sort_order')->default(0)->comment('Display order for UI');
            $table->timestamps();
            $table->softDeletes();
            
            // Indexes for performance
            $table->index(['sort_order']);
            $table->index(['code']);
            $table->index(['name']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('currencies');
    }
};
