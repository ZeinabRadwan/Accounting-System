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
        Schema::create('sidebar_menus', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('parent_id')->nullable()->index();
            $table->string('menu_id')->nullable(); // like 'dashboard-samples'
            $table->string('icon')->nullable();
            $table->string('name'); // store translation key e.g. 'dashboard'
            $table->string('url')->nullable();
            $table->json('permissions')->nullable(); // store an array of permissions
            $table->integer('order')->default(0);
            $table->timestamps();

            // $table->foreign('parent_id')->references('id')->on('sidebar_menus')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sidebar_menus');
    }
};
