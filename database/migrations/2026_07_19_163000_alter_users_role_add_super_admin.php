<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasColumn('users', 'role')) {
            return;
        }

        DB::statement("ALTER TABLE users MODIFY COLUMN role VARCHAR(50) NOT NULL DEFAULT 'sales'");

        DB::table('users')
            ->where('role', 'admin')
            ->update(['role' => 'super_admin']);

        try {
            DB::statement('ALTER TABLE users DROP CHECK chk_sales_branch');
        } catch (\Throwable) {
            // ignore
        }

        try {
            DB::statement("ALTER TABLE users ADD CONSTRAINT chk_sales_branch CHECK ((role <> 'sales') OR (branch_id IS NOT NULL))");
        } catch (\Throwable) {
            // ignore
        }
    }

    public function down(): void
    {
        if (! Schema::hasColumn('users', 'role')) {
            return;
        }

        DB::table('users')
            ->where('role', 'super_admin')
            ->update(['role' => 'admin']);

        // Roles outside the original enum cannot be preserved.
        DB::table('users')
            ->whereNotIn('role', ['admin', 'sales'])
            ->update(['role' => 'sales']);

        try {
            DB::statement('ALTER TABLE users DROP CHECK chk_sales_branch');
        } catch (\Throwable) {
            // ignore
        }

        try {
            DB::statement("ALTER TABLE users MODIFY COLUMN role ENUM('admin', 'sales') NOT NULL DEFAULT 'sales'");
        } catch (\Throwable) {
            // ignore
        }

        try {
            DB::statement("ALTER TABLE users ADD CONSTRAINT chk_sales_branch CHECK ((role <> 'sales') OR (branch_id IS NOT NULL))");
        } catch (\Throwable) {
            // ignore
        }
    }
};
