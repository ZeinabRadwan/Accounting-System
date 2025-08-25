<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('general_settings', function (Blueprint $table) {
            //
        });

        // Add the country setting to the general_settings table only if it doesn't exist
        if (!DB::table('general_settings')->where('key', 'country')->exists()) {
            DB::table('general_settings')->insert([
                'key' => 'country',
                'display_name' => 'Country',
                'value' => 'SA',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('general_settings', function (Blueprint $table) {
            //
        });

        // Remove the country setting
        DB::table('general_settings')->where('key', 'country')->delete();
    }
};
