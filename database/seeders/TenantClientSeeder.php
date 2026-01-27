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
        // Ensure "Walking Customer" exists, create or update it
        DB::table('clients')->updateOrInsert(
            ['slug' => 'walking-customer'],
            [
                'name' => 'Walking Customer',
                'client_id' => '1',
                'slug' => 'walking-customer',
                'type' => 'Individual',
                'full_name' => 'Walking Customer',
                'email' => 'walking@example.com',
                'phone_number' => '017000000',
                'code_number' => '000001',
                'country' => 'SA',
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
                'phone' => '017000000',
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
                'is_send_email' => true,
                'is_send_sms' => true,
                'attachments' => null,
            ]
        );

        // Additional clients can be added here if needed for initial seeding
    }
}
