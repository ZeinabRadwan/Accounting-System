<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TenantVatRateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // check if table is empty
        if (DB::table('vat_rates')->count() == 0) {
            DB::table('vat_rates')->insert([
                [
                    'name' => 'VAT 15%',
                    'slug' => 'vat-15',
                    'code' => 'VAT@15',
                    'rate' => '15.00',
                    'sales_vat_account_id' => 27,
                    'purchase_vat_account_id' => 21,
                ],
            ]);
        }
    }
}
