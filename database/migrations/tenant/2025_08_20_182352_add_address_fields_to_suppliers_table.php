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
        Schema::table('suppliers', function (Blueprint $table) {
            $table->unsignedBigInteger('nationality_id')->nullable()->after('type');
            $table->string('city_name')->nullable()->after('nationality_id');
            $table->string('district')->nullable()->after('city_name');
            $table->string('street_name')->nullable()->after('district');
            $table->string('building_number')->nullable()->after('street_name');
            $table->string('zip_code', 5)->nullable()->after('building_number');
            $table->string('additional_number')->nullable()->after('zip_code');
            $table->string('unit_no')->nullable()->after('additional_number');
        });

        // Add foreign key constraints
        Schema::table('suppliers', function (Blueprint $table) {
            $table->foreign('nationality_id')->references('id')->on('nationalities')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('suppliers', function (Blueprint $table) {
            $table->dropForeign(['nationality_id']);
            $table->dropColumn([
                'nationality_id',
                'city_name',
                'district',
                'street_name',
                'building_number',
                'zip_code',
                'additional_number',
                'unit_no'
            ]);
        });
    }
};
