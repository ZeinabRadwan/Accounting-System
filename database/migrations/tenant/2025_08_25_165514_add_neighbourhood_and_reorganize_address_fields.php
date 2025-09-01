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
        // Add neighbourhood field to clients table
        Schema::table('clients', function (Blueprint $table) {
            if (!Schema::hasColumn('clients', 'neighbourhood')) {
                $table->string('neighbourhood')->nullable()->after('country');
            }
        });

        // Add neighbourhood field to suppliers table
        Schema::table('suppliers', function (Blueprint $table) {
            if (!Schema::hasColumn('suppliers', 'neighbourhood')) {
                $table->string('neighbourhood')->nullable()->after('country');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Remove neighbourhood field from clients table
        Schema::table('clients', function (Blueprint $table) {
            if (Schema::hasColumn('clients', 'neighbourhood')) {
                $table->dropColumn('neighbourhood');
            }
        });

        // Remove neighbourhood field from suppliers table
        Schema::table('suppliers', function (Blueprint $table) {
            if (Schema::hasColumn('suppliers', 'neighbourhood')) {
                $table->dropColumn('neighbourhood');
            }
        });
    }
};
