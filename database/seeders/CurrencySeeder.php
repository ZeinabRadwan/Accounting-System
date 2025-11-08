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
                    'name' => 'الريال السعودي',
                    'slug' => 'saudi-riyal',
                    'code' => 'SAR',
                    'symbol' => 'ê',
                    'position' => 'left',
                    'note' => 'العملة الرسمية للمملكة العربية السعودية',
                    'status' => 1,
                ],
                [
                    'name' => 'الدولار الأمريكي',
                    'slug' => 'united-states-dollar',
                    'code' => 'USD',
                    'symbol' => '$',
                    'position' => 'left',
                    'note' => 'العملة الرسمية للولايات المتحدة',
                    'status' => 1,
                ],
            ]);
        }
    }
}
