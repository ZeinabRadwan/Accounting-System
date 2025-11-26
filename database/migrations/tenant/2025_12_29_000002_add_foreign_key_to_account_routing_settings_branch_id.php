<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Only proceed if branches table exists
        if (! Schema::hasTable('branches')) {
            return;
        }

        // Helper to check if foreign key exists
        $hasForeignKey = function () {
            $foreignKeys = DB::select("
                SELECT CONSTRAINT_NAME 
                FROM information_schema.KEY_COLUMN_USAGE 
                WHERE TABLE_SCHEMA = DATABASE() 
                AND TABLE_NAME = 'account_routing_settings' 
                AND COLUMN_NAME = 'branch_id' 
                AND REFERENCED_TABLE_NAME = 'branches'
            ");

            return ! empty($foreignKeys);
        };

        // Set default branch_id for existing records that are null (main branch)
        $mainBranch = DB::table('branches')->where('is_main', true)->first();
        if ($mainBranch) {
            DB::table('account_routing_settings')
                ->whereNull('branch_id')
                ->update(['branch_id' => $mainBranch->id]);
        }

        // Make branch_id not nullable after populating (if it's still nullable)
        if (Schema::hasColumn('account_routing_settings', 'branch_id')) {
            $column = DB::selectOne('
                SELECT IS_NULLABLE 
                FROM information_schema.COLUMNS 
                WHERE TABLE_SCHEMA = DATABASE() 
                AND TABLE_NAME = \'account_routing_settings\' 
                AND COLUMN_NAME = \'branch_id\'
            ');

            if ($column && $column->IS_NULLABLE === 'YES') {
                // Drop foreign key first if it exists (MySQL doesn't allow modifying columns with FK constraints)
                if ($hasForeignKey()) {
                    Schema::table('account_routing_settings', function (Blueprint $table) {
                        $table->dropForeign(['branch_id']);
                    });
                }

                // Now modify the column to be not nullable
                Schema::table('account_routing_settings', function (Blueprint $table) {
                    $table->unsignedBigInteger('branch_id')->nullable(false)->change();
                });
            }
        }

        // Add foreign key constraint if it doesn't exist
        if (! $hasForeignKey()) {
            Schema::table('account_routing_settings', function (Blueprint $table) {
                $table->foreign('branch_id')->references('id')->on('branches')->onDelete('cascade');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (! Schema::hasTable('account_routing_settings')) {
            return;
        }

        // Check if foreign key exists before trying to drop it
        try {
            Schema::table('account_routing_settings', function (Blueprint $table) {
                $table->dropForeign(['branch_id']);
            });
        } catch (\Exception $e) {
            // Foreign key might not exist, continue
        }
    }
};
