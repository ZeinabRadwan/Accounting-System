<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TenantChartOfAccountType extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // check if table is empty
        if (DB::table('chart_of_account_types')->count() == 0) {
            DB::table('chart_of_account_types')->insert([
                [
                    'name' => 'Asset',
                    'order' => 1,
                ],
                [
                    'name' => 'Liability',
                    'order' => 2,
                ],
                [
                    'name' => 'Equity',
                    'order' => 3,
                ],
                [
                    'name' => 'Revenue',
                    'order' => 4,
                ],
                [
                    'name' => 'Expense',
                    'order' => 5,
                ],
                [
                    'name' => 'Other',
                    'order' => 6,
                ],
            ]);
        }
    }
}
