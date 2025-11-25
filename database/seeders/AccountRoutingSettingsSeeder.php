<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AccountRoutingSettingsSeeder extends Seeder
{
    /**
     * Default account codes mapping from TenantChartOfAccountSeeder
     * These codes are used to auto-assign default accounts when seeding
     */
    private array $defaultAccountCodes = [
        // Sales Module
        'clients_account' => '12301',           // العملاء - Customers (under المدينون/Debtors)
        'sales_account' => '411',               // ايرادات المبيعات - Sales Revenue
        'product_sales_account' => '41101',     // إيرادات المبيعات السلعيه والخدميه - Product/Service Sales Revenue
        'discount_allowed_account' => '31107',  // الخصم المسموح به - Allowed Discount

        // Purchase Module
        'suppliers_account' => '23301',         // الموردون - Suppliers (under الدائنون/Accounts Payables)
        'purchase_account' => '311',            // تكلفة المبيعات - Cost of Sales
        'product_purchase_account' => '31101',  // تكلفة مبيعات - Cost of Sale
        'discount_received_account' => '41202', // إيرادات الخصم المكتسب - Earned Discount Income
        'transport_expense_account' => '32106', // بدل السفر والانتقال والمواصلات - Travel and Transportation

        // VAT Module
        'sales_vat_account' => '23701',         // ضريبة القيمة المضافة الدائنة - VAT Payable
        'purchase_vat_account' => '12403',      // ذمم مدينة أخرى - Other Accounts Receivable (VAT)

        // Expenses Module
        'expenses_account' => '321',            // المصاريف الادارية والعمومية - General & Admin Expenses

        // Inventory Module
        'inventory_account' => '121',           // المخزون - Inventories

        // Banking Module
        'main_cash_account' => '12601',         // النقدية في الصناديق - Cash in Hand
        'main_bank_account' => '12602',         // النقدية في البنوك - Cash in Bank

        // Advances Module
        'advances_account' => '12401',          // سلف الموظفين - Personal Loans To Employees

        // Assets Module
        'asset_depreciation_account' => '11104', // مجمعات الاهلاك - Accumulated Depreciation

        // Equity Module
        'equity_account' => '21101',            // راس المال - Owner's Equity

        // Liabilities Module
        'current_liabilities_account' => '234', // الذمم الدائنة - Other Accounts Payables

        // Loans Module
        'loans_account' => '22101',             // القروض طويلة الأجل - Long-Term Loans
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get all branches or create settings for a specific branch
        // Check if command exists and has the option before accessing it
        $branchId = null;
        if ($this->command && method_exists($this->command, 'option')) {
            try {
                $branchId = $this->command->option('branch_id');
            } catch (\Exception $e) {
                // Option doesn't exist, continue with null
                $branchId = null;
            }
        }

        if ($branchId) {
            // Create settings for a specific branch
            $this->createSettingsForBranch($branchId);
        } else {
            // Create settings for all branches
            // Check if branches table exists first
            if (! DB::getSchemaBuilder()->hasTable('branches')) {
                // If branches table doesn't exist yet, create settings with null branch_id
                // These will be updated later when branches are created
                $this->createSettingsForBranch(null);

                return;
            }

            $branches = DB::table('branches')->where('is_active', true)->get();

            if ($branches->isEmpty()) {
                // If no branches exist, check for main branch
                $mainBranch = DB::table('branches')->where('is_main', true)->first();
                if ($mainBranch) {
                    $this->createSettingsForBranch($mainBranch->id);
                } else {
                    // No branches at all, create with null (will be updated later)
                    $this->createSettingsForBranch(null);
                }
            } else {
                foreach ($branches as $branch) {
                    $this->createSettingsForBranch($branch->id);
                }
            }
        }
    }

    /**
     * Get the default account ID for a setting key
     */
    private function getDefaultAccountId(string $settingKey): ?int
    {
        if (! isset($this->defaultAccountCodes[$settingKey])) {
            return null;
        }

        $code = $this->defaultAccountCodes[$settingKey];

        // Check if chart_of_accounts table exists
        if (! DB::getSchemaBuilder()->hasTable('chart_of_accounts')) {
            return null;
        }

        $account = DB::table('chart_of_accounts')
            ->where('code', $code)
            ->first();

        return $account?->id;
    }

    private function createSettingsForBranch($branchId): void
    {
        // Delete existing settings for this branch
        if ($branchId === null) {
            DB::table('account_routing_settings')->whereNull('branch_id')->delete();
        } else {
            DB::table('account_routing_settings')->where('branch_id', $branchId)->delete();
        }

        $settings = [
            // Sales Module
            [
                'module' => 'sales',
                'setting_key' => 'clients_account',
                'setting_name' => 'Clients Account',
                'account_type' => 'Asset',
                'description' => 'Parent account for all customer receivables',
                'is_required' => true,
                'routing_type' => 'main_account_per_each',
                'routing_type_options' => json_encode([
                    [
                        'label' => 'Specify Main Account Per Each',
                        'description' => 'You will specify a main account and then individual accounts',
                        'value' => 'main_account_per_each',
                    ],
                    [
                        'label' => 'Automatic Account Routing',
                        'description' => 'System automatically routes to the selected parent account',
                        'value' => 'automatic',
                    ],

                ]),
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
                        'value' => 'automatic',
                    ],
                    [
                        'label' => 'Specify Main Account Per Each',
                        'description' => 'You will specify a main account and then individual accounts',
                        'value' => 'main_account_per_each',
                    ],

                ]),
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
                        'value' => 'automatic',
                    ],
                    [
                        'label' => 'Cancel Account Routing',
                        'description' => 'No account routing - discounts are not posted to accounts',
                        'value' => 'cancel',
                    ],
                ]),
            ],

            // Purchase Module
            [
                'module' => 'purchase',
                'setting_key' => 'suppliers_account',
                'setting_name' => 'Suppliers Account',
                'account_type' => 'Liability',
                'description' => 'Parent account for all supplier payables',
                'is_required' => true,
                'routing_type' => 'main_account_per_each',
                'routing_type_options' => json_encode([
                    [
                        'label' => 'Specify Main Account Per Each',
                        'description' => 'You will specify a main account and then individual accounts',
                        'value' => 'main_account_per_each',
                    ],
                    [
                        'label' => 'Automatic Account Routing',
                        'description' => 'System automatically routes to the selected parent account',
                        'value' => 'automatic',
                    ],

                ]),
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
                        'value' => 'automatic',
                    ],
                    [
                        'label' => 'Specify Main Account Per Each',
                        'description' => 'You will specify a main account and then individual accounts',
                        'value' => 'main_account_per_each',
                    ],

                ]),
            ],
            [
                'module' => 'purchase',
                'setting_key' => 'discount_received_account',
                'setting_name' => 'Discount Received Account',
                'account_type' => 'Expense',
                'description' => 'Parent account for discounts received from suppliers',
                'is_required' => true,
                'routing_type' => 'automatic',
                'routing_type_options' => json_encode([
                    [
                        'label' => 'Automatic Account Routing',
                        'description' => 'System automatically routes to the selected parent account',
                        'value' => 'automatic',
                    ],
                    [
                        'label' => 'Cancel Account Routing',
                        'description' => 'No account routing - discounts are not posted to accounts',
                        'value' => 'cancel',
                    ],
                ]),
            ],

            // VAT/Tax Module
            [
                'module' => 'vat',
                'setting_key' => 'sales_vat_account',
                'setting_name' => 'Sales VAT Account',
                'account_type' => 'Liability',
                'description' => 'Parent account for VAT collected on sales',
                'is_required' => true,
                'routing_type' => 'main_account_per_each',
                'routing_type_options' => json_encode([
                    [
                        'label' => 'Specify Main Account Per Each',
                        'description' => 'You will specify a main account and then individual accounts',
                        'value' => 'main_account_per_each',
                    ],

                ]),
            ],
            [
                'module' => 'vat',
                'setting_key' => 'purchase_vat_account',
                'setting_name' => 'Purchase VAT Account',
                'account_type' => 'Asset',
                'description' => 'Parent account for VAT paid on purchases',
                'is_required' => true,
                'routing_type' => 'main_account_per_each',
                'routing_type_options' => json_encode([
                    [
                        'label' => 'Specify Main Account Per Each',
                        'description' => 'You will specify a main account and then individual accounts',
                        'value' => 'main_account_per_each',
                    ],

                ]),
            ],
            [
                'module' => 'purchase',
                'setting_key' => 'transport_expense_account',
                'setting_name' => 'Transport Expense Account',
                'account_type' => 'Expense',
                'description' => 'Parent account for transport costs on purchases',
                'is_required' => false,
                'routing_type' => 'automatic',
                'routing_type_options' => json_encode([
                    [
                        'label' => 'Automatic Account Routing',
                        'description' => 'System automatically routes to the selected parent account',
                        'value' => 'automatic',
                    ],
                    [
                        'label' => 'Specify Per Each',
                        'description' => 'You will specify accounts individually for each item',
                        'value' => 'per_each',
                    ],
                ]),
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

            // Inventory Module
            [
                'module' => 'inventory',
                'setting_key' => 'inventory_account',
                'setting_name' => 'Inventory Account',
                'account_type' => 'Asset',
                'description' => 'Main account for inventory/stock',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],

            // Banking Module
            [
                'module' => 'banking',
                'setting_key' => 'main_cash_account',
                'setting_name' => 'Main Cash Account',
                'account_type' => 'Asset',
                'description' => 'Main account for cash/cash boxes',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],
            [
                'module' => 'banking',
                'setting_key' => 'main_bank_account',
                'setting_name' => 'Main Bank Account',
                'account_type' => 'Asset',
                'description' => 'Main account for bank accounts',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],

            // Advances Module
            [
                'module' => 'advances',
                'setting_key' => 'advances_account',
                'setting_name' => 'Advances Account',
                'account_type' => 'Asset',
                'description' => 'Main account for advances paid',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],

            // Assets Module
            [
                'module' => 'assets',
                'setting_key' => 'asset_depreciation_account',
                'setting_name' => 'Asset Depreciation Account',
                'account_type' => 'Expense',
                'description' => 'Account for asset depreciation expenses',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],

            // Equity Module
            [
                'module' => 'equity',
                'setting_key' => 'equity_account',
                'setting_name' => 'Equity Account',
                'account_type' => 'Equity',
                'description' => 'Main account for equity/owner capital',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],

            // Liabilities Module
            [
                'module' => 'liabilities',
                'setting_key' => 'current_liabilities_account',
                'setting_name' => 'Current Liabilities Account',
                'account_type' => 'Liability',
                'description' => 'Main account for current liabilities',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],

            // Loans Module
            [
                'module' => 'loans',
                'setting_key' => 'loans_account',
                'setting_name' => 'Loans Account',
                'account_type' => 'Liability',
                'description' => 'Main account for loans payable',
                'is_required' => true,
                'routing_type' => 'automatic',
            ],
        ];

        foreach ($settings as $setting) {
            // Get default account ID for this setting
            $defaultAccountId = $this->getDefaultAccountId($setting['setting_key']);

            DB::table('account_routing_settings')->insert([
                'branch_id' => $branchId,
                'module' => $setting['module'],
                'setting_key' => $setting['setting_key'],
                'setting_name' => $setting['setting_name'],
                'account_type' => $setting['account_type'],
                'description' => $setting['description'],
                'is_required' => $setting['is_required'],
                'routing_type' => $setting['routing_type'],
                'routing_type_options' => $setting['routing_type_options'] ?? null,
                'main_account_id' => $defaultAccountId,
                'parent_account_id' => $defaultAccountId,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    /**
     * Copy account routing settings from source branch to target branch
     * Used when creating a new branch to inherit settings from main branch
     *
     * @param  int  $sourceBranchId  The branch to copy settings from (usually main branch)
     * @param  int  $targetBranchId  The new branch to copy settings to
     */
    public static function copySettingsFromBranch(int $sourceBranchId, int $targetBranchId): void
    {
        // Get all settings from source branch
        $sourceSettings = DB::table('account_routing_settings')
            ->where('branch_id', $sourceBranchId)
            ->get();

        if ($sourceSettings->isEmpty()) {
            // If source branch has no settings, try to get from main branch or create defaults
            $mainBranch = DB::table('branches')->where('is_main', true)->first();
            if ($mainBranch && $mainBranch->id !== $sourceBranchId) {
                $sourceSettings = DB::table('account_routing_settings')
                    ->where('branch_id', $mainBranch->id)
                    ->get();
            }
        }

        // Delete any existing settings for target branch
        DB::table('account_routing_settings')
            ->where('branch_id', $targetBranchId)
            ->delete();

        // Copy settings to target branch
        foreach ($sourceSettings as $setting) {
            DB::table('account_routing_settings')->insert([
                'branch_id' => $targetBranchId,
                'module' => $setting->module,
                'setting_key' => $setting->setting_key,
                'setting_name' => $setting->setting_name,
                'account_type' => $setting->account_type,
                'description' => $setting->description,
                'is_required' => $setting->is_required,
                'routing_type' => $setting->routing_type,
                'routing_type_options' => $setting->routing_type_options,
                'main_account_id' => $setting->main_account_id,
                'parent_account_id' => $setting->parent_account_id,
                'is_active' => $setting->is_active,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
