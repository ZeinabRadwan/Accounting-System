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
                'description' => 'Parent account for all sales revenue',
                'is_required' => true,
            ],
            [
                'module' => 'sales',
                'setting_key' => 'returns_account',
                'setting_name' => 'Returns Account',
                'account_type' => 'Revenue',
                'description' => 'Parent account for sales returns and credit notes',
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
                'description' => 'Parent account for all purchase expenses',
                'is_required' => true,
            ],
            [
                'module' => 'purchase',
                'setting_key' => 'purchase_returns_account',
                'setting_name' => 'Purchase Returns Account',
                'account_type' => 'Expense',
                'description' => 'Parent account for purchase returns and debit notes',
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

            // Inventory Module
            [
                'module' => 'inventory',
                'setting_key' => 'inventory_account',
                'setting_name' => 'Inventory Account',
                'account_type' => 'Asset',
                'description' => 'Parent account for inventory assets',
                'is_required' => true,
            ],
            [
                'module' => 'inventory',
                'setting_key' => 'cogs_account',
                'setting_name' => 'Cost of Goods Sold Account',
                'account_type' => 'Expense',
                'description' => 'Parent account for cost of goods sold',
                'is_required' => true,
            ],

            // Treasury Module
            [
                'module' => 'treasury',
                'setting_key' => 'cash_account',
                'setting_name' => 'Cash Account',
                'account_type' => 'Asset',
                'description' => 'Parent account for cash and bank accounts',
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
