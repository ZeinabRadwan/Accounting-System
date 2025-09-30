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
        Schema::create('chart_of_account_translations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('chart_of_account_id');
            $table->string('locale', 5);
            $table->string('name')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();

            $table->index(['chart_of_account_id', 'locale'], 'coa_locale_idx');
            $table->unique(['chart_of_account_id', 'locale'], 'coa_locale_unique');
            $table->foreign('chart_of_account_id', 'coa_fk')
                ->references('id')->on('chart_of_accounts')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chart_of_account_translations');
    }
};


