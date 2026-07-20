<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Sub categories were removed from the product domain.
     * Kept as a no-op so existing migration history remains valid.
     */
    public function up(): void
    {
        //
    }

    public function down(): void
    {
        //
    }
};
