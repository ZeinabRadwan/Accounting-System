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
        Schema::create('chart_of_account_type_translations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('chart_of_account_type_id');
            $table->string('locale', 5);
            $table->string('name');
            $table->timestamps();

            $table->index(['chart_of_account_type_id', 'locale'], 'coat_type_locale_idx');
            $table->unique(['chart_of_account_type_id', 'locale'], 'coat_type_locale_unique');
            $table->foreign('chart_of_account_type_id', 'coat_type_fk')
                ->references('id')->on('chart_of_account_types')
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
        Schema::dropIfExists('chart_of_account_type_translations');
    }
};


