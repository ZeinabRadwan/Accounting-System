<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Add ZATCA settings to general_settings table
        $zatcaSettings = [
            // Company Information
            [
                'key' => 'zatca_organization_identifier',
                'display_name' => 'Organization Identifier',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zatca_serial_number',
                'display_name' => 'Serial Number',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zatca_organization_name',
                'display_name' => 'Organization Name',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zatca_address',
                'display_name' => 'Business Address',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zatca_environment',
                'display_name' => 'Environment',
                'value' => 'developer',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zatca_otp',
                'display_name' => 'OTP',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zatca_solution_name',
                'display_name' => 'Solution Name',
                'value' => 'arqam',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zatca_common_name',
                'display_name' => 'Common Name',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zatca_organizational_unit',
                'display_name' => 'Organizational Unit',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zatca_invoice_type',
                'display_name' => 'Invoice Type',
                'value' => 'both',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zatca_business_category',
                'display_name' => 'Business Category',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Certificate and Compliance
            [
                'key' => 'zatca_certificate_generated',
                'display_name' => 'Certificate Generated',
                'value' => '0',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zatca_certificate_path',
                'display_name' => 'Certificate Path',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zatca_private_key_path',
                'display_name' => 'Private Key Path',
                'value' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zatca_compliance_status',
                'display_name' => 'Compliance Status',
                'value' => 'pending',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zatca_integration_complete',
                'display_name' => 'Integration Complete',
                'value' => '0',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($zatcaSettings as $setting) {
            if (!DB::table('general_settings')->where('key', $setting['key'])->exists()) {
                DB::table('general_settings')->insert($setting);
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Remove ZATCA settings from general_settings table
        $zatcaKeys = [
            'zatca_organization_identifier',
            'zatca_serial_number',
            'zatca_organization_name',
            'zatca_address',
            'zatca_environment',
            'zatca_otp',
            'zatca_solution_name',
            'zatca_common_name',
            'zatca_organizational_unit',
            'zatca_invoice_type',
            'zatca_business_category',
            'zatca_certificate_generated',
            'zatca_certificate_path',
            'zatca_private_key_path',
            'zatca_compliance_status',
            'zatca_integration_complete',
        ];

        DB::table('general_settings')->whereIn('key', $zatcaKeys)->delete();
    }
};
