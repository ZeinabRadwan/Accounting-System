<?php

namespace Database\Seeders\Demo;

use Illuminate\Database\Seeder;

class DemoCurrenciesTableSeeder extends Seeder
{
    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        \DB::table('currencies')->delete();

        \DB::table('currencies')->insert([
            0 => [
                'id' => 1,
                'name' => 'Saudi Riyal',
                'slug' => 'saudi-riyal',
                'code' => 'SAR',
                'symbol' => 'ê',
                'position' => 'right',
                'note' => 'Official currency of Saudi Arabia with new symbol',
                'status' => 1,
                'created_at' => null,
                'updated_at' => null,
            ],
            1 => [
                'id' => 2,
                'name' => 'United States Dollar',
                'slug' => 'united-states-dollar',
                'code' => 'USD',
                'symbol' => '$',
                'position' => 'left',
                'note' => 'US Dollar currency',
                'status' => 1,
                'created_at' => null,
                'updated_at' => null,
            ],
        ]);
    }
}
