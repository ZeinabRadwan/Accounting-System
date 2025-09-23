<?php

namespace Database\Seeders\Demo;

use Illuminate\Database\Seeder;

class DemoVatRatesTableSeeder extends Seeder
{
    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        \DB::table('vat_rates')->delete();

        \DB::table('vat_rates')->insert([
            0 => [
                'id' => 1,
                'name' => 'VAT 15%',
                'slug' => 'vat-15',
                'code' => 'VAT@15',
                'rate' => 15.0,
                'note' => '',
                'status' => 1,
                'created_at' => '2022-04-30 22:14:59',
                'updated_at' => '2022-04-30 22:14:59',
            ],
            1 => [
                'id' => 2,
                'name' => 'VAT 5%',
                'slug' => 'vat-5',
                'code' => 'VAT@5',
                'rate' => 5.0,
                'note' => null,
                'status' => 1,
                'created_at' => '2022-04-30 22:15:14',
                'updated_at' => '2022-04-30 22:15:14',
            ],
            2 => [
                'id' => 3,
                'name' => 'VAT 0%',
                'slug' => 'vat-0',
                'code' => 'VAT@0',
                'rate' => 0.0,
                'note' => null,
                'status' => 1,
                'created_at' => '2022-04-30 22:15:33',
                'updated_at' => '2022-04-30 22:15:33',
            ],
        ]);
    }
}
