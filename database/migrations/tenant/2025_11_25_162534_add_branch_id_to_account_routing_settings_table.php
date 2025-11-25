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
        // Drop the old unique constraint if it exists
        // Find the actual constraint name from information_schema
        $constraints = DB::select("
            SELECT CONSTRAINT_NAME 
            FROM information_schema.TABLE_CONSTRAINTS 
            WHERE TABLE_SCHEMA = DATABASE() 
            AND TABLE_NAME = 'account_routing_settings' 
            AND CONSTRAINT_TYPE = 'UNIQUE'
        ");

        // Find the constraint that involves module and setting_key columns
        $constraintToDrop = null;
        foreach ($constraints as $constraint) {
            $constraintName = $constraint->CONSTRAINT_NAME;
            // Check if this constraint involves module and setting_key
            $columns = DB::select("
                SELECT COLUMN_NAME 
                FROM information_schema.KEY_COLUMN_USAGE 
                WHERE TABLE_SCHEMA = DATABASE() 
                AND TABLE_NAME = 'account_routing_settings' 
                AND CONSTRAINT_NAME = ?
                ORDER BY ORDINAL_POSITION
            ", [$constraintName]);

            $columnNames = array_column($columns, 'COLUMN_NAME');
            if (count($columnNames) === 2 &&
                in_array('module', $columnNames) &&
                in_array('setting_key', $columnNames) &&
                ! in_array('branch_id', $columnNames)) {
                $constraintToDrop = $constraintName;
                break;
            }
        }

        // Drop the constraint if found using raw SQL
        if ($constraintToDrop) {
            try {
                DB::statement("ALTER TABLE `account_routing_settings` DROP INDEX `{$constraintToDrop}`");
            } catch (\Exception $e) {
                // Index might already be dropped or have different name, continue
            }
        }

        // Also try to find and drop by checking SHOW INDEXES (more reliable)
        try {
            $allIndexes = DB::select('SHOW INDEXES FROM `account_routing_settings`');
            $indexGroups = [];
            foreach ($allIndexes as $index) {
                if ($index->Key_name !== 'PRIMARY') {
                    $indexGroups[$index->Key_name][] = $index->Column_name;
                }
            }

            // Find unique indexes with module and setting_key
            foreach ($indexGroups as $indexName => $columns) {
                if (count($columns) === 2 &&
                    in_array('module', $columns) &&
                    in_array('setting_key', $columns) &&
                    ! in_array('branch_id', $columns)) {
                    try {
                        DB::statement("ALTER TABLE `account_routing_settings` DROP INDEX `{$indexName}`");
                    } catch (\Exception $e) {
                        // Continue if drop fails
                    }
                    break; // Only drop one matching index
                }
            }
        } catch (\Exception $e) {
            // If SHOW INDEXES fails, continue with migration
        }

        Schema::table('account_routing_settings', function (Blueprint $table) {
            // Add branch_id column (nullable for backward compatibility)
            $table->unsignedBigInteger('branch_id')->nullable()->after('id');

            // Add index for performance
            $table->index('branch_id');

            // Add new unique constraint that includes branch_id
            $table->unique(['branch_id', 'module', 'setting_key'], 'account_routing_settings_branch_module_key_unique');
        });

        // Add foreign key constraint only if branches table exists
        if (Schema::hasTable('branches')) {
            Schema::table('account_routing_settings', function (Blueprint $table) {
                // Add foreign key constraint
                $table->foreign('branch_id')->references('id')->on('branches')->onDelete('cascade');
            });
        }

        // Set default branch_id for existing records (main branch)
        // Only if branches table exists
        if (Schema::hasTable('branches')) {
            $mainBranch = DB::table('branches')->where('is_main', true)->first();
            if ($mainBranch) {
                DB::table('account_routing_settings')
                    ->whereNull('branch_id')
                    ->update(['branch_id' => $mainBranch->id]);
            }
        }

        // Make branch_id not nullable after populating (only if branches table exists)
        if (Schema::hasTable('branches')) {
            Schema::table('account_routing_settings', function (Blueprint $table) {
                $table->unsignedBigInteger('branch_id')->nullable(false)->change();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('account_routing_settings', function (Blueprint $table) {
            // Drop the new unique constraint
            $table->dropUnique('account_routing_settings_branch_module_key_unique');

            // Drop foreign key if it exists
            if (Schema::hasTable('branches')) {
                try {
                    $table->dropForeign(['branch_id']);
                } catch (\Exception $e) {
                    // Foreign key might not exist, continue
                }
            }

            // Drop index
            $table->dropIndex(['branch_id']);

            // Drop branch_id column
            $table->dropColumn('branch_id');
        });

        Schema::table('account_routing_settings', function (Blueprint $table) {
            // Restore the old unique constraint
            $table->unique(['module', 'setting_key']);
        });
    }
};
