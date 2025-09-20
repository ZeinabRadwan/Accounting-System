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
    public function up(): void
    {
        // No migration needed - the existing boolean column already supports 0/1
        // We'll use 0 = inactive, 1 = active, 2 = cancelled
        // The column will automatically handle the new value 2 when we set it
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        // Convert any cancelled payments (2) back to inactive (0)
        DB::statement("UPDATE invoice_payments SET status = CASE WHEN status = 2 THEN 0 ELSE status END");
    }
};
