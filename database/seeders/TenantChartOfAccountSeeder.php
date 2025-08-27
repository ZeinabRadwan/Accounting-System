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
        // Check if chart of accounts already exist to avoid foreign key constraint issues
        if (DB::table('chart_of_accounts')->count() > 0) {
            $this->command->info('Chart of accounts already exist, skipping seeding.');
            return;
        }

        // First, let's create some account types
        $accountTypes = [
            ['name' => 'Asset', 'order' => 1],
            ['name' => 'Liability', 'order' => 2],
            ['name' => 'Equity', 'order' => 3],
            ['name' => 'Revenue', 'order' => 4],
            ['name' => 'Expense', 'order' => 5],
        ];

        // foreach ($accountTypes as $type) {
        //     DB::table('chart_of_account_types')->insert([
        //         'name' => $type['name'],
        //         'order' => $type['order'],
        //         'created_at' => now(),
        //         'updated_at' => now(),
        //     ]);
        // }

        // Get the created account types
        $assetTypeId = DB::table('chart_of_account_types')->where('name', 'Asset')->first()->id;
        $liabilityTypeId = DB::table('chart_of_account_types')->where('name', 'Liability')->first()->id;
        $equityTypeId = DB::table('chart_of_account_types')->where('name', 'Equity')->first()->id;
        $revenueTypeId = DB::table('chart_of_account_types')->where('name', 'Revenue')->first()->id;
        $expenseTypeId = DB::table('chart_of_account_types')->where('name', 'Expense')->first()->id;

        // Get a user ID for created_by (assuming you have at least one user)
        $userId = DB::table('users')->first()->id ?? 1;

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
            $subAccountIds[$account['name']] = $id;
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

        $this->command->info('Chart of Accounts seeded successfully!');
        $this->command->info('Created ' . count($accountTypes) . ' account types');
        $this->command->info('Created ' . (count($accounts) + count($subAccounts) + count($detailedAccounts)) . ' chart of accounts');
    }
}
