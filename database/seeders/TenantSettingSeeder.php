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
        // Define all settings with professional defaults
        $settingElements = [
            // Fiscal Year and Accounting Period Settings
            'current_fiscal_year_id' => null,
            'current_accounting_period_id' => null,
            
            // Country and Basic Settings
            'country' => 'SA',
            
            // ZATCA Settings with professional defaults
            'zatca_organization_identifier' => '',
            'zatca_serial_number' => '',
            'zatca_organization_name' => '',
            'zatca_address' => '',
            'zatca_environment' => 'developer',
            'zatca_otp' => '',
            'zatca_solution_name' => 'Websoft',
            'zatca_common_name' => '',
            'zatca_organizational_unit' => '',
            'zatca_invoice_type' => 'both',
            'zatca_business_category' => '',
            'zatca_certificate_generated' => '0',
            'zatca_certificate_path' => '',
            'zatca_private_key_path' => '',
            'zatca_compliance_status' => 'pending',
            'zatca_integration_complete' => '0',
            
            // Company Information with professional defaults
            'company_name' => 'Websoft',
            'company_tagline' => 'Websoft',
            'email_address' => 'info@websoft.com',
            'phone_number' => '0555555555',
            'address' => 'Websoft',
            'client_prefix' => 'AC',
            
            // Additional Basic Settings
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
            'logo' => 'white_logo.png',
            'black_logo' => 'black_logo.png',
            'small_logo' => 'small_logo.png',
            'favicon' => 'favicon.png',
            'copyright' => 'Copyright © 2024 All rights reserved.',
            'invoice_thank_you_message' => 'Thank you for your business!',
            'tax_registration_number' => '',
        ];

        foreach ($settingElements as $key => $value) {
            // Use updateOrInsert to avoid duplicates and allow updates
            DB::table('general_settings')->updateOrInsert(
                ['key' => $key],
                [
                    'key' => $key,
                    'display_name' => ucwords(str_replace('_', ' ', $key)),
                    'value' => $value,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );
        }
    }
}