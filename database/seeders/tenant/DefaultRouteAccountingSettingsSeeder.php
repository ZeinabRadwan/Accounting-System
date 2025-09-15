<?php

namespace Database\Seeders\Tenant;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Models\ChartOfAccount;

class DefaultRouteAccountingSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * This seeder ensures all account routing settings are properly linked
     * to their corresponding chart of accounts and sets them as default selections.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info('Starting DefaultRouteAccountingSettingsSeeder...');

        try {
            // Check if chart of accounts exist
            $accountCount = ChartOfAccount::count();
            if ($accountCount === 0) {
                $this->command->error('No chart of accounts found. Please run TenantChartOfAccountSeeder first.');
                return;
            }

            $this->command->info("Found {$accountCount} chart of accounts in the database.");

            // Get all required accounts by code for easy lookup
            $accounts = $this->getRequiredAccounts();
            
            // Define the routing settings with their corresponding account codes
            $routingSettings = $this->getRoutingSettingsMapping();

            $updatedCount = 0;
            $createdCount = 0;

            // Process each routing setting and enable all possible routing types
            foreach ($routingSettings as $setting) {
                // Get all possible routing types for this setting
                $routingTypes = $this->getAllRoutingTypes($setting);
                
                foreach ($routingTypes as $routingType) {
                    $this->processRoutingSetting($setting, $routingType, $accounts, $updatedCount, $createdCount);
                }
            }

            $this->command->info("DefaultRouteAccountingSettingsSeeder completed successfully!");
            $this->command->info("Updated: {$updatedCount} settings, Created: {$createdCount} settings");

            Log::info('DefaultRouteAccountingSettingsSeeder completed', [
                'updated_count' => $updatedCount,
                'created_count' => $createdCount,
                'total_accounts' => $accountCount
            ]);

        } catch (\Exception $e) {
            $this->command->error("Error in DefaultRouteAccountingSettingsSeeder: " . $e->getMessage());
            Log::error('DefaultRouteAccountingSettingsSeeder failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            throw $e;
        }
    }

    /**
     * Get all required accounts from the database
     *
     * @return \Illuminate\Support\Collection
     */
    private function getRequiredAccounts()
    {
        return ChartOfAccount::where('is_active', true)
            ->select('id', 'name', 'code', 'type_id')
            ->get();
    }

    /**
     * Get routing settings mapping with their corresponding account codes
     * Based on the actual accounts created by TenantChartOfAccountSeeder
     *
     * @return array
     */
    private function getRoutingSettingsMapping()
    {
        return [
            // Sales Module
            [
                'module' => 'sales',
                'setting_key' => 'clients_account',
                'setting_name' => 'Clients Account',
                'account_code' => '1100', // Accounts Receivable
                'account_type' => 'Asset',
                'description' => 'Parent account for all customer receivables',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],
            [
                'module' => 'sales',
                'setting_key' => 'sales_account',
                'setting_name' => 'Sales Account',
                'account_code' => '4000', // Sales Revenue
                'account_type' => 'Revenue',
                'description' => 'Parent account for all sales revenue (including returns as negative entries)',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],
            [
                'module' => 'sales',
                'setting_key' => 'product_sales_account',
                'setting_name' => 'Product Sales Account',
                'account_code' => '4000', // Sales Revenue (same as sales account)
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
                'account_code' => '4100', // Discount Allowed
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
                'account_code' => '2000', // Accounts Payable
                'account_type' => 'Liability',
                'description' => 'Parent account for all supplier payables',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],
            [
                'module' => 'purchase',
                'setting_key' => 'purchase_account',
                'setting_name' => 'Purchase Account',
                'account_code' => '5000', // Purchase Expense
                'account_type' => 'Expense',
                'description' => 'Parent account for all purchase expenses (including returns as negative entries)',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],
            [
                'module' => 'purchase',
                'setting_key' => 'product_purchase_account',
                'setting_name' => 'Product Purchase Account',
                'account_code' => '5001', // Cost of Goods Sold
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
                'account_code' => '5200', // Discount Received
                'account_type' => 'Expense',
                'description' => 'Parent account for discounts received from suppliers',
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

            // VAT/Tax Module
            [
                'module' => 'vat',
                'setting_key' => 'sales_vat_account',
                'setting_name' => 'Sales VAT Account',
                'account_code' => '2100', // Sales VAT Payable
                'account_type' => 'Liability',
                'description' => 'Parent account for VAT collected on sales',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],
            [
                'module' => 'vat',
                'setting_key' => 'purchase_vat_account',
                'setting_name' => 'Purchase VAT Account',
                'account_code' => '1201', // Purchase VAT Receivable
                'account_type' => 'Asset',
                'description' => 'Parent account for VAT paid on purchases',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],

            // Purchase Module - Transport
            [
                'module' => 'purchase',
                'setting_key' => 'transport_expense_account',
                'setting_name' => 'Transport Expense Account',
                'account_code' => '5300', // Transportation Expense
                'account_type' => 'Expense',
                'description' => 'Parent account for transport costs on purchases',
                'is_required' => false,
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

            // Expenses Module
            [
                'module' => 'expenses',
                'setting_key' => 'expenses_account',
                'setting_name' => 'Expenses Account',
                'account_code' => '5100', // Operating Expenses
                'account_type' => 'Expense',
                'description' => 'Parent account for all general expenses',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],
        ];
    }

    /**
     * Get all possible routing types for a setting
     *
     * @param array $setting
     * @return array
     */
    private function getAllRoutingTypes(array $setting): array
    {
        // Define all possible routing types
        $allRoutingTypes = [
            'automatic' => 'Automatic Account Routing',
            'per_each' => 'Specify Per Each',
            'main_account_per_each' => 'Specify Main Account Per Each',
            'cancel' => 'Cancel Account Routing'
        ];

        // For settings that support multiple routing types, return all
        // For settings that only support specific types, return those
        if (isset($setting['routing_type_options']) && is_array($setting['routing_type_options'])) {
            $supportedTypes = [];
            foreach ($setting['routing_type_options'] as $option) {
                if (isset($option['value']) && isset($allRoutingTypes[$option['value']])) {
                    $supportedTypes[] = $option['value'];
                }
            }
            return $supportedTypes;
        }

        // Default: return all routing types
        return array_keys($allRoutingTypes);
    }

    /**
     * Process a single routing setting with a specific routing type
     *
     * @param array $setting
     * @param string $routingType
     * @param \Illuminate\Support\Collection $accounts
     * @param int &$updatedCount
     * @param int &$createdCount
     * @return void
     */
    private function processRoutingSetting(array $setting, string $routingType, $accounts, int &$updatedCount, int &$createdCount): void
    {
        $accountCode = $setting['account_code'];
        $account = $accounts->where('code', $accountCode)->first();

        if (!$account) {
            $this->command->warn("Account with code '{$accountCode}' not found for setting '{$setting['setting_key']}' with routing type '{$routingType}'. Skipping...");
            return;
        }

        // Create unique setting key for this routing type
        $uniqueSettingKey = $setting['setting_key'] . '_' . $routingType;

        // Check if routing setting already exists
        $existingSetting = DB::table('account_routing_settings')
            ->where('module', $setting['module'])
            ->where('setting_key', $uniqueSettingKey)
            ->first();

        if ($existingSetting) {
            // Update existing setting with account link
            if ($existingSetting->main_account_id != $account->id) {
                DB::table('account_routing_settings')
                    ->where('id', $existingSetting->id)
                    ->update([
                        'main_account_id' => $account->id,
                        'parent_account_id' => $account->id, // Keep both for compatibility
                        'is_active' => true,
                        'updated_at' => now()
                    ]);
                
                $this->command->info("Updated routing setting '{$uniqueSettingKey}' ({$routingType}) → Account '{$account->name}' ({$account->code})");
                $updatedCount++;
            } else {
                $this->command->info("Routing setting '{$uniqueSettingKey}' ({$routingType}) already linked to correct account.");
            }
        } else {
            // Create new routing setting
            DB::table('account_routing_settings')->insert([
                'module' => $setting['module'],
                'setting_key' => $uniqueSettingKey,
                'setting_name' => $setting['setting_name'] . ' (' . ucfirst(str_replace('_', ' ', $routingType)) . ')',
                'main_account_id' => $account->id,
                'parent_account_id' => $account->id, // Keep both for compatibility
                'account_type' => $setting['account_type'],
                'description' => $setting['description'] . ' - Routing Type: ' . ucfirst(str_replace('_', ' ', $routingType)),
                'is_required' => $setting['is_required'],
                'routing_type' => $routingType,
                'routing_type_options' => $setting['routing_type_options'] ?? null,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
            
            $this->command->info("Created routing setting '{$uniqueSettingKey}' ({$routingType}) → Account '{$account->name}' ({$account->code})");
            $createdCount++;
        }

        Log::info("Processed routing setting", [
            'setting_key' => $uniqueSettingKey,
            'routing_type' => $routingType,
            'account_name' => $account->name,
            'account_code' => $account->code,
            'account_id' => $account->id
        ]);
    }
}
