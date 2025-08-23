<?php

namespace Database\Seeders;

use App\Models\ChartOfAccount;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class TenantChartOfAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Check existing chart of accounts
        $existingAccountsCount = DB::table('chart_of_accounts')->count();
        $existingTypesCount = DB::table('chart_of_account_types')->count();
        
        $this->command->info("Existing chart of accounts: {$existingAccountsCount}");
        $this->command->info("Existing account types: {$existingTypesCount}");
        
        if ($existingAccountsCount > 0) {
            $this->command->info('Chart of accounts already exist, checking for missing accounts...');
        }

        // Check if there are any journal entries that reference chart of accounts
        if (DB::table('journal_entry_lines')->count() > 0) {
            $this->command->info('Journal entries exist, using firstOrCreate approach for chart of accounts...');
            $useFirstOrCreate = true;
        } else {
            $useFirstOrCreate = false;
        }
        
        // First, let's create some account types
        $accountTypes = [
            ['name' => 'Asset', 'order' => 1],
            ['name' => 'Liability', 'order' => 2],
            ['name' => 'Equity', 'order' => 3],
            ['name' => 'Revenue', 'order' => 4],
            ['name' => 'Expense', 'order' => 5],
        ];

        // Ensure all required account types exist
        foreach ($accountTypes as $type) {
            if (!DB::table('chart_of_account_types')->where('name', $type['name'])->exists()) {
                DB::table('chart_of_account_types')->insert([
                    'name' => $type['name'],
                    'order' => $type['order'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }

        // Get the created account types with proper error handling
        $assetType = DB::table('chart_of_account_types')->where('name', 'Asset')->first();
        $liabilityType = DB::table('chart_of_account_types')->where('name', 'Liability')->first();
        $equityType = DB::table('chart_of_account_types')->where('name', 'Equity')->first();
        $revenueType = DB::table('chart_of_account_types')->where('name', 'Revenue')->first();
        $expenseType = DB::table('chart_of_account_types')->where('name', 'Expense')->first();

        // Verify all types exist
        if (!$assetType || !$liabilityType || !$equityType || !$revenueType || !$expenseType) {
            throw new \Exception('Required chart of account types are missing. Please ensure the database is properly seeded.');
        }

        $assetTypeId = $assetType->id;
        $liabilityTypeId = $liabilityType->id;
        $equityTypeId = $equityType->id;
        $revenueTypeId = $revenueType->id;
        $expenseTypeId = $expenseType->id;

        $this->command->info('Chart of Account Types verified:');
        $this->command->info('- Asset ID: ' . $assetTypeId);
        $this->command->info('- Liability ID: ' . $liabilityTypeId);
        $this->command->info('- Equity ID: ' . $equityTypeId);
        $this->command->info('- Revenue ID: ' . $revenueTypeId);
        $this->command->info('- Expense ID: ' . $expenseTypeId);

        // Get a user ID for created_by (assuming you have at least one user)
        $user = DB::table('users')->first();
        if (!$user) {
            throw new \Exception('No users found in the database. Please ensure users are created before running this seeder.');
        }
        $userId = $user->id;

        // Create hierarchical chart of accounts
        $accounts = [
            // Level 0 - Root Accounts
            [
                'name' => 'Assets',
                'code' => '1000',
                'type_id' => $assetTypeId,
                'parent_id' => null,
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Liabilities',
                'code' => '2000',
                'type_id' => $liabilityTypeId,
                'parent_id' => null,
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Equity',
                'code' => '3000',
                'type_id' => $equityTypeId,
                'parent_id' => null,
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Revenue',
                'code' => '4000',
                'type_id' => $revenueTypeId,
                'parent_id' => null,
                'order' => 4,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Expenses',
                'code' => '5000',
                'type_id' => $expenseTypeId,
                'parent_id' => null,
                'order' => 5,
                'is_active' => 1,
                'created_by' => $userId,
            ],
        ];

        // Insert root accounts and get their IDs
        $rootAccountIds = [];
        foreach ($accounts as $account) {
            if ($useFirstOrCreate) {
                // Use firstOrCreate to avoid duplicates when journal entries exist
                $existingAccount = DB::table('chart_of_accounts')
                    ->where('code', $account['code'])
                    ->first();
                
                if ($existingAccount) {
                    $id = $existingAccount->id;
                } else {
                    $id = DB::table('chart_of_accounts')->insertGetId([
                        'name' => $account['name'],
                        'code' => $account['code'],
                        'type_id' => $account['type_id'],
                        'parent_id' => $account['parent_id'],
                        'order' => $account['order'],
                        'is_active' => $account['is_active'],
                        'created_by' => $account['created_by'],
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            } else {
                $id = DB::table('chart_of_accounts')->insertGetId([
                    'name' => $account['name'],
                    'code' => $account['code'],
                    'type_id' => $account['type_id'],
                    'parent_id' => $account['parent_id'],
                    'order' => $account['order'],
                    'is_active' => $account['is_active'],
                    'created_by' => $account['created_by'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
            $rootAccountIds[$account['name']] = $id;
        }

        // Level 1 - Sub-accounts
        $subAccounts = [
            // Assets sub-accounts
            [
                'name' => 'Current Assets',
                'code' => '1100',
                'type_id' => $assetTypeId,
                'parent_id' => $rootAccountIds['Assets'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Fixed Assets',
                'code' => '1200',
                'type_id' => $assetTypeId,
                'parent_id' => $rootAccountIds['Assets'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Intangible Assets',
                'code' => '1300',
                'type_id' => $assetTypeId,
                'parent_id' => $rootAccountIds['Assets'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],

            // Liabilities sub-accounts
            [
                'name' => 'Current Liabilities',
                'code' => '2100',
                'type_id' => $liabilityTypeId,
                'parent_id' => $rootAccountIds['Liabilities'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Long-term Liabilities',
                'code' => '2200',
                'type_id' => $liabilityTypeId,
                'parent_id' => $rootAccountIds['Liabilities'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],

            // Equity sub-accounts
            [
                'name' => 'Owner\'s Equity',
                'code' => '3100',
                'type_id' => $equityTypeId,
                'parent_id' => $rootAccountIds['Equity'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Retained Earnings',
                'code' => '3200',
                'type_id' => $equityTypeId,
                'parent_id' => $rootAccountIds['Equity'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],

            // Revenue sub-accounts
            [
                'name' => 'Sales Revenue',
                'code' => '4100',
                'type_id' => $revenueTypeId,
                'parent_id' => $rootAccountIds['Revenue'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Other Revenue',
                'code' => '4200',
                'type_id' => $revenueTypeId,
                'parent_id' => $rootAccountIds['Revenue'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],

            // Expenses sub-accounts
            [
                'name' => 'Cost of Goods Sold',
                'code' => '5100',
                'type_id' => $expenseTypeId,
                'parent_id' => $rootAccountIds['Expenses'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Operating Expenses',
                'code' => '5200',
                'type_id' => $expenseTypeId,
                'parent_id' => $rootAccountIds['Expenses'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Financial Expenses',
                'code' => '5300',
                'type_id' => $expenseTypeId,
                'parent_id' => $rootAccountIds['Expenses'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
        ];

        // Insert sub-accounts and get their IDs
        $subAccountIds = [];
        foreach ($subAccounts as $account) {
            if ($useFirstOrCreate) {
                // Use firstOrCreate to avoid duplicates when journal entries exist
                $existingAccount = DB::table('chart_of_accounts')
                    ->where('code', $account['code'])
                    ->first();
                
                if ($existingAccount) {
                    $id = $existingAccount->id;
                } else {
                    $id = DB::table('chart_of_accounts')->insertGetId([
                        'name' => $account['name'],
                        'code' => $account['code'],
                        'type_id' => $account['type_id'],
                        'parent_id' => $account['parent_id'],
                        'order' => $account['order'],
                        'is_active' => $account['is_active'],
                        'created_by' => $account['created_by'],
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            } else {
                $id = DB::table('chart_of_accounts')->insertGetId([
                    'name' => $account['name'],
                    'code' => $account['code'],
                    'type_id' => $account['type_id'],
                    'parent_id' => $account['parent_id'],
                    'order' => $account['order'],
                    'is_active' => $account['is_active'],
                    'created_by' => $account['created_by'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
            $subAccountIds[$account['name']] = $id;
        }

        // Verify all required sub-accounts were created
        $requiredSubAccounts = [
            'Current Assets', 'Fixed Assets', 'Intangible Assets',
            'Current Liabilities', 'Long-term Liabilities',
            'Owner\'s Equity', 'Retained Earnings',
            'Sales Revenue', 'Other Revenue',
            'Cost of Goods Sold', 'Operating Expenses', 'Financial Expenses'
        ];

        foreach ($requiredSubAccounts as $requiredAccount) {
            if (!isset($subAccountIds[$requiredAccount])) {
                throw new \Exception("Required sub-account '{$requiredAccount}' was not created. Please check the database.");
            }
        }

        $this->command->info('Sub-accounts created successfully:');
        foreach ($requiredSubAccounts as $accountName) {
            $this->command->info("- {$accountName}: ID " . $subAccountIds[$accountName]);
        }

        // Level 2 - Detailed accounts
        $detailedAccounts = [
            // Current Assets detailed accounts
            [
                'name' => 'Cash',
                'code' => '1110',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Current Assets'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Bank Accounts',
                'code' => '1120',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Current Assets'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Accounts Receivable',
                'code' => '1130',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Current Assets'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Inventory',
                'code' => '1140',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Current Assets'],
                'order' => 4,
                'is_active' => 1,
                'created_by' => $userId,
            ],

            // Fixed Assets detailed accounts
            [
                'name' => 'Equipment',
                'code' => '1210',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Fixed Assets'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Buildings',
                'code' => '1220',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Fixed Assets'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Vehicles',
                'code' => '1230',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Fixed Assets'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],

            // Current Liabilities detailed accounts
            [
                'name' => 'Accounts Payable',
                'code' => '2110',
                'type_id' => $liabilityTypeId,
                'parent_id' => $subAccountIds['Current Liabilities'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Short-term Loans',
                'code' => '2120',
                'type_id' => $liabilityTypeId,
                'parent_id' => $subAccountIds['Current Liabilities'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],

            // Sales Revenue detailed accounts
            [
                'name' => 'Product Sales',
                'code' => '4110',
                'type_id' => $revenueTypeId,
                'parent_id' => $subAccountIds['Sales Revenue'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Service Revenue',
                'code' => '4120',
                'type_id' => $revenueTypeId,
                'parent_id' => $subAccountIds['Sales Revenue'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],

            // Operating Expenses detailed accounts
            [
                'name' => 'Salaries and Wages',
                'code' => '5210',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Operating Expenses'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Rent Expense',
                'code' => '5220',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Operating Expenses'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Utilities',
                'code' => '5230',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Operating Expenses'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
        ];

        // Insert detailed accounts
        foreach ($detailedAccounts as $account) {
            if ($useFirstOrCreate) {
                // Use firstOrCreate to avoid duplicates when journal entries exist
                $existingAccount = DB::table('chart_of_accounts')
                    ->where('code', $account['code'])
                    ->first();
                
                if (!$existingAccount) {
                    DB::table('chart_of_accounts')->insert([
                        'name' => $account['name'],
                        'code' => $account['code'],
                        'type_id' => $account['type_id'],
                        'parent_id' => $account['parent_id'],
                        'order' => $account['order'],
                        'is_active' => $account['is_active'],
                        'created_by' => $account['created_by'],
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            } else {
                DB::table('chart_of_accounts')->insert([
                    'name' => $account['name'],
                    'code' => $account['code'],
                    'type_id' => $account['type_id'],
                    'parent_id' => $account['parent_id'],
                    'order' => $account['order'],
                    'is_active' => $account['is_active'],
                    'created_by' => $account['created_by'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }

        // Add VAT-related chart of accounts
        $vatAccounts = [
            [
                'name' => 'Sales VAT Payable',
                'code' => '2220', // Changed from 2210 to avoid conflict
                'type_id' => $liabilityTypeId,
                'parent_id' => $subAccountIds['Current Liabilities'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Purchase VAT Receivable',
                'code' => '1240', // Changed from 1210 to avoid conflict with Equipment
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Current Assets'],
                'order' => 6,
                'is_active' => 1,
                'created_by' => $userId,
            ],
        ];

        // Insert VAT accounts
        foreach ($vatAccounts as $account) {
            // Check if account with this code already exists
            $existingAccount = DB::table('chart_of_accounts')
                ->where('code', $account['code'])
                ->first();
            
            if ($existingAccount) {
                $this->command->warn("Account with code '{$account['code']}' ({$account['name']}) already exists, skipping...");
                continue;
            }
            
            if ($useFirstOrCreate) {
                // Use firstOrCreate to avoid duplicates when journal entries exist
                $existingAccount = DB::table('chart_of_accounts')
                    ->where('code', $account['code'])
                    ->first();
                
                if (!$existingAccount) {
                    DB::table('chart_of_accounts')->insert([
                        'name' => $account['name'],
                        'code' => $account['code'],
                        'type_id' => $account['type_id'],
                        'parent_id' => $account['parent_id'],
                        'order' => $account['order'],
                        'is_active' => $account['is_active'],
                        'created_by' => $account['created_by'],
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            } else {
                DB::table('chart_of_accounts')->insert([
                    'name' => $account['name'],
                    'code' => $account['code'],
                    'type_id' => $account['type_id'],
                    'parent_id' => $account['parent_id'],
                    'order' => $account['order'],
                    'is_active' => $account['is_active'],
                    'created_by' => $account['created_by'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }

        $this->command->info('Chart of Accounts seeded successfully!');
        $this->command->info('Created ' . count($accountTypes) . ' account types');
        $this->command->info('Created ' . (count($accounts) + count($subAccounts) + count($detailedAccounts) + count($vatAccounts)) . ' chart of accounts');
        
        // Show VAT accounts created
        $this->command->info('VAT Accounts:');
        foreach ($vatAccounts as $vatAccount) {
            $this->command->info("- {$vatAccount['name']}: Code {$vatAccount['code']}");
        }
    }
}
