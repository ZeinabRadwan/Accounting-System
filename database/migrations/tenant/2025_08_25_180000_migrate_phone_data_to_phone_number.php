<?php

use Illuminate\Database\Migrations\Migration;
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
        // Copy phone data from phone_legacy to phone_number for existing suppliers
        DB::statement("UPDATE suppliers SET phone_number = phone_legacy WHERE phone_legacy IS NOT NULL AND phone_legacy != '' AND (phone_number IS NULL OR phone_number = '')");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // This migration cannot be easily reversed as it would overwrite existing phone_number data
        // If reversal is needed, a more sophisticated approach would be required
    }
};
