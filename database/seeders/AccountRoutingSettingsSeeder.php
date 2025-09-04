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
                'routing_type' => 'automatic',
            ],
            [
                'module' => 'sales',
                'setting_key' => 'sales_account',
                'setting_name' => 'Sales Account',
                'account_type' => 'Revenue',
                'description' => 'Parent account for all sales revenue (including returns as negative entries)',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],
            [
                'module' => 'sales',
                'setting_key' => 'product_sales_account',
                'setting_name' => 'Product Sales Account',
                'account_type' => 'Revenue',
                'description' => 'Parent account for product sales revenue',
                'is_required' => true,
                'routing_type' => 'automatic',
                'routing_type_options' => json_encode([
                    [
                        'label' => 'Automatic Account Routing',
                        'description' => 'System automatically routes to the selected parent account',
                        'value' => 'automatic'
                    ],
                    [
                        'label' => 'Specify Per Each',
                        'description' => 'You will specify accounts individually for each item',
                        'value' => 'per_each'
                    ]
                ])
            ],
            [
                'module' => 'sales',
                'setting_key' => 'discount_allowed_account',
                'setting_name' => 'Discount Allowed Account',
                'account_type' => 'Expense',
                'description' => 'Parent account for sales discounts given to customers',
                'is_required' => true,
                'routing_type' => 'cancel',
                'routing_type_options' => json_encode([
                    [
                        'label' => 'Automatic Account Routing',
                        'description' => 'System automatically routes to the selected parent account',
                        'value' => 'automatic'
                    ],
                    [
                        'label' => 'Cancel Account Routing',
                        'description' => 'No account routing - discounts are not posted to accounts',
                        'value' => 'cancel'
                    ]
                ])
            ],

            // Purchase Module
            [
                'module' => 'purchase',
                'setting_key' => 'suppliers_account',
                'setting_name' => 'Suppliers Account',
                'account_type' => 'Liability',
                'description' => 'Parent account for all supplier payables',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],
            [
                'module' => 'purchase',
                'setting_key' => 'purchase_account',
                'setting_name' => 'Purchase Account',
                'account_type' => 'Expense',
                'description' => 'Parent account for all purchase expenses (including returns as negative entries)',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],
            [
                'module' => 'purchase',
                'setting_key' => 'product_purchase_account',
                'setting_name' => 'Product Purchase Account',
                'account_type' => 'Expense',
                'description' => 'Parent account for product purchase expenses',
                'is_required' => true,
                'routing_type' => 'automatic',
                'routing_type_options' => json_encode([
                    [
                        'label' => 'Automatic Account Routing',
                        'description' => 'System automatically routes to the selected parent account',
                        'value' => 'automatic'
                    ],
                    [
                        'label' => 'Specify Per Each',
                        'description' => 'You will specify accounts individually for each item',
                        'value' => 'per_each'
                    ]
                ])
            ],
            [
                'module' => 'purchase',
                'setting_key' => 'discount_received_account',
                'setting_name' => 'Discount Received Account',
                'account_type' => 'Expense',
                'description' => 'Parent account for discounts received from suppliers',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],

            // VAT/Tax Module
            [
                'module' => 'vat',
                'setting_key' => 'sales_vat_account',
                'setting_name' => 'Sales VAT Account',
                'account_type' => 'Liability',
                'description' => 'Parent account for VAT collected on sales',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],
            [
                'module' => 'vat',
                'setting_key' => 'purchase_vat_account',
                'setting_name' => 'Purchase VAT Account',
                'account_type' => 'Asset',
                'description' => 'Parent account for VAT paid on purchases',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],

            // Expenses Module
            [
                'module' => 'expenses',
                'setting_key' => 'expenses_account',
                'setting_name' => 'Expenses Account',
                'account_type' => 'Expense',
                'description' => 'Parent account for all general expenses',
                'is_required' => true,
                'routing_type' => 'automatic',
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
                'routing_type' => $setting['routing_type'],
                'routing_type_options' => $setting['routing_type_options'] ?? null,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
