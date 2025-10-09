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
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('vat_rates')->truncate();
        if (DB::table('vat_rates')->count() == 0) {
            DB::table('vat_rates')->insert([
                [
                    'name' => 'ضريبة القيمة المضافة  15%',
                    'slug' => 'vat-15',
                    'code' => 'VAT@15',
                    'note' => 'ضريبة القيمة المضافة  15%',
                    'rate' => '15.00',
                    'sales_vat_account_id' => 27,
                    'purchase_vat_account_id' => 21,
                ],
            ]);

            DB::table('vat_rates')->insert([
                [
                    'name' => 'الضريبة الصفرية 0%',
                    'slug' => 'vat-0',
                    'code' => 'VAT@0',
                    'note' => 'الضريبة الصفرية 0%',
                ],
            ]);
            DB::table('vat_rates')->insert([
                [
                    'name' => 'الضريبة المعفاة 0%',
                    'slug' => 'vat-exempt',
                    'code' => 'VAT@EXEMPT',
                    'note' => 'الضريبة المعفاة 0%',
                ],
            ]);
        }
    }
}
