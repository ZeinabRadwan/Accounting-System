<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TenantSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // check if table is empty
        if (DB::table('general_settings')->count() == 0) {

            // seed basic data to table
            $settingElemetns = [
                'company_name' => 'Your Company Name',
                'company_tagline' => 'Your Business Slogan',
                'email_address' => 'email@gmail.com',
                'phone_number' => '0170000000',
                'address' => 'Your address',
                'client_prefix' => 'AC',
                'supplier_prefix' => 'AS',
                'employee_prefix' => 'AE',
                'product_cat_prefix' => 'APC',
                'product_sub_cat_prefix' => 'APS',
                'product_prefix' => 'AP',
                'exp_cat_prefix' => 'AEC',
                'exp_sub_cat_prefix' => 'AES',
                'pur_prefix' => 'APP',
                'pur_return_prefix' => 'APR',
                'quotation_prefix' => 'APQ',
                'invoice_prefix' => 'API',
                'invoice_return_prefix' => 'APIR',
                'adjustment_prefix' => 'APA',
                'default_currency' => '1',
                'default_language' => 'ar',
                'country' => 'SA',
                'logo' => 'logo.png',
                'black_logo' => 'black-logo.png',
                'small_logo' => 'small-logo.png',
                'favicon' => 'favicon.png',
                'copyright' => 'Copyright © 2024 All rights reserved.',
                'invoice_thank_you_message' => 'Thank you for your business!',
                'tax_registration_number' => '',
            ];

            foreach ($settingElemetns as $key => $value) {
                DB::table('general_settings')->insert([
                    [
                        'key' => $key,
                        'display_name' => ucwords(str_replace('_', ' ', $key)),
                        'value' => $value,
                    ],
                ]);
            }
        }
    }
}