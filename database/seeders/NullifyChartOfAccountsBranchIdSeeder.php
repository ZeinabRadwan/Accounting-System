<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class NullifyChartOfAccountsBranchIdSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * 
     * This seeder sets branch_id to null for all chart of accounts records.
     * Chart of accounts are typically shared across branches.
     *
     * @return void
     */
    public function run(): void
    {
        // Check if the table and column exist
        if (!Schema::hasTable('chart_of_accounts')) {
            $this->command->warn('Table chart_of_accounts does not exist.');
            return;
        }

        if (!Schema::hasColumn('chart_of_accounts', 'branch_id')) {
            $this->command->warn('Column branch_id does not exist in chart_of_accounts table.');
            return;
        }

        // Get count of records that will be updated
        $count = DB::table('chart_of_accounts')
            ->whereNotNull('branch_id')
            ->count();

        if ($count === 0) {
            $this->command->info('No chart of accounts records have branch_id set. Nothing to update.');
            return;
        }

        // Set branch_id to null for all chart of accounts
        $updated = DB::table('chart_of_accounts')
            ->whereNotNull('branch_id')
            ->update(['branch_id' => null]);

        $this->command->info("Successfully set branch_id to null for {$updated} chart of accounts record(s).");
    }
}

