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
        Schema::table('clients', function (Blueprint $table) {
            // Add Saudi National Address fields only if they don't exist
            if (!Schema::hasColumn('clients', 'building_number')) {
                $table->string('building_number', 5)->nullable()->after('postal_code');
            }
            if (!Schema::hasColumn('clients', 'street_number')) {
                $table->string('street_number', 5)->nullable()->after('building_number');
            }
            if (!Schema::hasColumn('clients', 'district_number')) {
                $table->string('district_number', 5)->nullable()->after('street_number');
            }
            if (!Schema::hasColumn('clients', 'unit_number')) {
                $table->string('unit_number', 5)->nullable()->after('district_number');
            }
            if (!Schema::hasColumn('clients', 'additional_number')) {
                $table->string('additional_number', 5)->nullable()->after('unit_number');
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
        Schema::table('clients', function (Blueprint $table) {
            $table->dropColumn([
                'building_number',
                'street_number',
                'district_number',
                'unit_number',
                'additional_number'
            ]);
        });
    }
};
