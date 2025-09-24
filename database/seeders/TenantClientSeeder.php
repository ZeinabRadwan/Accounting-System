<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TenantClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // check if table is empty
        if (DB::table('clients')->count() == 0) {
            DB::table('clients')->insert([
                [
                    'name' => 'Walking Customer',
                    'client_id' => '1',
                    'slug' => 'walking-customer',
                    'type' => 'Individual',
                    'full_name' => 'Walking Customer',
                    'email' => 'walking@example.com',
                    'phone_number' => '017000000',
                    'code_number' => '000001',
                    'country' => 'EG',
                    'status' => '1',
                    'created_at' => now(),
                    'updated_at' => now(),
                    // Add missing columns with null values to match other rows
                    'business_name' => null,
                    'first_name' => null,
                    'last_name' => null,
                    'street_address1' => null,
                    'city' => null,
                    'state' => null,
                    'postal_code' => null,
                    'commercial_register' => null,
                    'tax_card' => null,
                    // Additional columns that might exist in the schema
                    'phone' => null,
                    'company_name' => null,
                    'address' => null,
                    'tax_registration_number' => null,
                    'image_path' => null,
                    'chart_of_account_id' => 20,
                    'phone_secondary' => null,
                    'street_address2' => null,
                    'area' => null,
                    'neighbourhood' => null,
                    'notes' => null,
                    'display_language' => null,
                    'commercial_name' => null,
                    'is_send_email' => null,
                    'is_send_sms' => null,
                    'attachments' => null,
                   
                ],
                // [
                //     'name' => 'Sample Company Ltd',
                //     'client_id' => '2',
                //     'slug' => 'sample-company-ltd',
                //     'type' => 'Company',
                //     'business_name' => 'Sample Company Ltd',
                //     'first_name' => 'John',
                //     'last_name' => 'Doe',
                //     'email' => 'contact@samplecompany.com',
                //     'phone_number' => '0123456789',
                //     'code_number' => '000002',
                //     'street_address1' => '123 Business Street',
                //     'city' => 'Cairo',
                //     'state' => 'Cairo Governorate',
                //     'postal_code' => '12345',
                //     'country' => 'EG',
                //     'commercial_register' => 'CR123456',
                //     'tax_card' => 'TC789012',
                //     'status' => '1',
                //     'created_at' => now(),
                //     'updated_at' => now(),
                //     // Add missing columns with null values to match other rows
                //     'full_name' => null,
                //     // Additional columns that might exist in the schema
                //     'phone' => null,
                //     'company_name' => null,
                //     'address' => null,
                //     'tax_registration_number' => null,
                //     'image_path' => null,
                //     'chart_of_account_id' => 20,
                //     'phone_secondary' => null,
                //     'street_address2' => null,
                //     'area' => null,
                //     'neighbourhood' => null,
                //     'notes' => null,
                //     'display_language' => null,
                //     'commercial_name' => null,
                //     'is_send_email' => null,
                //     'is_send_sms' => null,
                //     'attachments' => null,
                // ],
                // [
                //     'name' => 'Individual Customer',
                //     'client_id' => '3',
                //     'slug' => 'individual-customer',
                //     'type' => 'Individual',
                //     'full_name' => 'Ahmed Hassan',
                //     'email' => 'ahmed@example.com',
                //     'phone_number' => '0987654321',
                //     'code_number' => '000003',
                //     'street_address1' => '456 Personal Avenue',
                //     'city' => 'Alexandria',
                //     'state' => 'Alexandria Governorate',
                //     'postal_code' => '54321',
                //     'country' => 'EG',
                //     'status' => '1',
                //     'created_at' => now(),
                //     'updated_at' => now(),
                //     // Add missing columns with null values to match other rows
                //     'business_name' => null,
                //     'first_name' => null,
                //     'last_name' => null,
                //     'commercial_register' => null,
                //     'tax_card' => null,
                //     // Additional columns that might exist in the schema
                //     'phone' => null,
                //     'company_name' => null,
                //     'address' => null,
                //     'tax_registration_number' => null,
                //     'image_path' => null,
                //     'chart_of_account_id' => null,
                //     'phone_secondary' => null,
                //     'street_address2' => null,
                //     'area' => null,
                //     'neighbourhood' => null,
                //     'notes' => null,
                //     'display_language' => null,
                //     'commercial_name' => null,
                //     'is_send_email' => null,
                //     'is_send_sms' => null,
                //     'attachments' => null,
                // ],
            ]);
        }
    }
}
