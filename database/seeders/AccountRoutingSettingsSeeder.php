<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AccountRoutingSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            // Sales Module
            [
                'module' => 'sales',
                'setting_key' => 'clients_account',
                'setting_name' => 'Clients Account',
                'account_type' => 'Asset',
                'description' => 'Parent account for all customer receivables',
                'is_required' => true,
            ],
            [
                'module' => 'sales',
                'setting_key' => 'sales_account',
                'setting_name' => 'Sales Account',
                'account_type' => 'Revenue',
                'description' => 'Parent account for all sales revenue (including returns as negative entries)',
                'is_required' => true,
            ],
            [
                'module' => 'sales',
                'setting_key' => 'discount_allowed_account',
                'setting_name' => 'Discount Allowed Account',
                'account_type' => 'Revenue',
                'description' => 'Parent account for sales discounts given to customers',
                'is_required' => true,
            ],

            // Purchase Module
            [
                'module' => 'purchase',
                'setting_key' => 'suppliers_account',
                'setting_name' => 'Suppliers Account',
                'account_type' => 'Liability',
                'description' => 'Parent account for all supplier payables',
                'is_required' => true,
            ],
            [
                'module' => 'purchase',
                'setting_key' => 'purchase_account',
                'setting_name' => 'Purchase Account',
                'account_type' => 'Expense',
                'description' => 'Parent account for all purchase expenses (including returns as negative entries)',
                'is_required' => true,
            ],
            [
                'module' => 'purchase',
                'setting_key' => 'discount_received_account',
                'setting_name' => 'Discount Received Account',
                'account_type' => 'Expense',
                'description' => 'Parent account for discounts received from suppliers',
                'is_required' => true,
            ],

            // VAT/Tax Module
            [
                'module' => 'vat',
                'setting_key' => 'sales_vat_account',
                'setting_name' => 'Sales VAT Account',
                'account_type' => 'Liability',
                'description' => 'Parent account for VAT collected on sales',
                'is_required' => true,
            ],
            [
                'module' => 'vat',
                'setting_key' => 'purchase_vat_account',
                'setting_name' => 'Purchase VAT Account',
                'account_type' => 'Asset',
                'description' => 'Parent account for VAT paid on purchases',
                'is_required' => true,
            ],

            // Expenses Module
            [
                'module' => 'expenses',
                'setting_key' => 'expenses_account',
                'setting_name' => 'Expenses Account',
                'account_type' => 'Expense',
                'description' => 'Parent account for all general expenses',
                'is_required' => true,
            ],
        ];

        foreach ($settings as $setting) {
            DB::table('account_routing_settings')->insertOrIgnore([
                'module' => $setting['module'],
                'setting_key' => $setting['setting_key'],
                'setting_name' => $setting['setting_name'],
                'account_type' => $setting['account_type'],
                'description' => $setting['description'],
                'is_required' => $setting['is_required'],
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
