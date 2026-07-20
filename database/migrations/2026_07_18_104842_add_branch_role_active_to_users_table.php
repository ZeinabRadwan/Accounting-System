<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (! Schema::hasColumn('users', 'branch_id')) {
                $table->foreignId('branch_id')
                    ->nullable()
                    ->constrained('branches')
                    ->restrictOnDelete();
            }

            if (! Schema::hasColumn('users', 'role')) {
                $table->enum('role', ['admin', 'sales'])
                    ->default('sales')
                    ->after('password');
            }

            if (! Schema::hasColumn('users', 'is_active')) {
                $table->boolean('is_active')
                    ->default(true)
                    ->after('role');
            }
        });

        // Ensure every sales user belongs to exactly one branch.
        // MySQL 8 check constraint.
        $exists = DB::selectOne(
            "SELECT CONSTRAINT_NAME
             FROM information_schema.TABLE_CONSTRAINTS
             WHERE TABLE_SCHEMA = DATABASE()
               AND TABLE_NAME = 'users'
               AND CONSTRAINT_NAME = 'chk_sales_branch'"
        );

        if (! $exists) {
            DB::statement("ALTER TABLE users ADD CONSTRAINT chk_sales_branch CHECK ((role <> 'sales') OR (branch_id IS NOT NULL))");
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        try {
            DB::statement('ALTER TABLE users DROP CHECK chk_sales_branch');
        } catch (\Throwable $e) {
            // ignore if not supported
        }

        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'branch_id')) {
                $table->dropConstrainedForeignId('branch_id');
            }

            $drop = array_values(array_filter([
                Schema::hasColumn('users', 'role') ? 'role' : null,
                Schema::hasColumn('users', 'is_active') ? 'is_active' : null,
            ]));

            if ($drop !== []) {
                $table->dropColumn($drop);
            }
        });
    }
};
