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
        // Modify clients table
        Schema::table('clients', function (Blueprint $table) {
            $table->json('phone_numbers')->nullable()->after('phone');
            $table->json('email_addresses')->nullable()->after('email');
        });

        // Modify suppliers table
        Schema::table('suppliers', function (Blueprint $table) {
            $table->json('phone_numbers')->nullable()->after('phone');
            $table->json('email_addresses')->nullable()->after('email');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Revert clients table
        Schema::table('clients', function (Blueprint $table) {
            $table->dropColumn(['phone_numbers', 'email_addresses']);
        });

        // Revert suppliers table
        Schema::table('suppliers', function (Blueprint $table) {
            $table->dropColumn(['phone_numbers', 'email_addresses']);
        });
    }
};
