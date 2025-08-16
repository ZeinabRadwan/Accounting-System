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
        Schema::create('accounting_periods', function (Blueprint $table) {
            $table->id();
            $table->foreignId('financial_year_id')->nullable()->constrained('financial_years')->nullOnDelete();
            $table->date('start_date');
            $table->date('end_date');
            $table->unsignedTinyInteger('status')->nullable()->default(1)->comment('1: Active, 0: Not Active');
            
            // Laravel standard columns
            $table->timestamps();
            $table->softDeletes();
            
            // Indexes for performance
            $table->index(['financial_year_id']);
            $table->index(['start_date', 'end_date']);
            $table->index(['status']);
            $table->index(['start_date']);
            $table->index(['end_date']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accounting_periods');
    }
};
