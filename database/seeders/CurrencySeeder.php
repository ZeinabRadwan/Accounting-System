<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // check if table is empty
        if (DB::table('currencies')->count() == 0) {
            DB::table('currencies')->insert([
                [
                    'name' => 'Saudi Riyal',
                    'slug' => 'saudi-riyal',
                    'code' => 'SAR',
                    'symbol' => 'ر.س',
                    'position' => 'left',
                    'note' => 'This is default currency for Saudi Arabia',
                    'status' => 1,
                ],
                [
                    'name' => 'United States Dollar',
                    'slug' => 'united-states-dollar',
                    'code' => 'USD',
                    'symbol' => '$',
                    'position' => 'left',
                    'note' => 'US Dollar currency',
                    'status' => 1,
                ],
            ]);
        }
    }
}
