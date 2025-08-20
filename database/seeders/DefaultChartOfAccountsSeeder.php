<?php

namespace Database\Seeders;

use App\Models\ChartOfAccount;
use App\Models\ChartOfAccountType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DefaultChartOfAccountsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // First, ensure we have the basic account types
        $this->createAccountTypes();
        
        // Then create the default chart of accounts
        $this->createDefaultAccounts();
    }

    /**
     * Create basic account types
     */
    private function createAccountTypes()
    {
        $types = [
            ['name' => 'Asset', 'order' => 1],
            ['name' => 'Liability', 'order' => 2],
            ['name' => 'Equity', 'order' => 3],
            ['name' => 'Revenue', 'order' => 4],
            ['name' => 'Expense', 'order' => 5],
        ];

        foreach ($types as $type) {
            ChartOfAccountType::firstOrCreate(
                ['name' => $type['name']],
                ['order' => $type['order']]
            );
        }
    }

    /**
     * Create default chart of accounts
     */
    private function createDefaultAccounts()
    {
        $userId = DB::table('users')->first()->id ?? 1;
        
        // Get account type IDs
        $assetTypeId = ChartOfAccountType::where('name', 'Asset')->first()->id;
        $liabilityTypeId = ChartOfAccountType::where('name', 'Liability')->first()->id;
        $equityTypeId = ChartOfAccountType::where('name', 'Equity')->first()->id;
        $revenueTypeId = ChartOfAccountType::where('name', 'Revenue')->first()->id;
        $expenseTypeId = ChartOfAccountType::where('name', 'Expense')->first()->id;

        $accounts = [
            // Assets
            [
                'name' => 'Cash',
                'code' => '1000',
                'type_id' => $assetTypeId,
                'parent_id' => null,
                'order' => 1,
                'is_active' => true,
                'created_by' => $userId,
            ],
            [
                'name' => 'Bank Accounts',
                'code' => '1100',
                'type_id' => $assetTypeId,
                'parent_id' => null,
                'order' => 2,
                'is_active' => true,
                'created_by' => $userId,
            ],
            [
                'name' => 'Accounts Receivable',
                'code' => '1200',
                'type_id' => $assetTypeId,
                'parent_id' => null,
                'order' => 3,
                'is_active' => true,
                'created_by' => $userId,
            ],
            [
                'name' => 'Inventory',
                'code' => '1300',
                'type_id' => $assetTypeId,
                'parent_id' => null,
                'order' => 4,
                'is_active' => true,
                'created_by' => $userId,
            ],
            [
                'name' => 'Fixed Assets',
                'code' => '1400',
                'type_id' => $assetTypeId,
                'parent_id' => null,
                'order' => 5,
                'is_active' => true,
                'created_by' => $userId,
            ],

            // Liabilities
            [
                'name' => 'Accounts Payable',
                'code' => '2000',
                'type_id' => $liabilityTypeId,
                'parent_id' => null,
                'order' => 6,
                'is_active' => true,
                'created_by' => $userId,
            ],
            [
                'name' => 'Loans Payable',
                'code' => '2100',
                'type_id' => $liabilityTypeId,
                'parent_id' => null,
                'order' => 7,
                'is_active' => true,
                'created_by' => $userId,
            ],
            [
                'name' => 'Tax Payable',
                'code' => '2200',
                'type_id' => $liabilityTypeId,
                'parent_id' => null,
                'order' => 8,
                'is_active' => true,
                'created_by' => $userId,
            ],

            // Equity
            [
                'name' => 'Owner\'s Equity',
                'code' => '3000',
                'type_id' => $equityTypeId,
                'parent_id' => null,
                'order' => 9,
                'is_active' => true,
                'created_by' => $userId,
            ],
            [
                'name' => 'Retained Earnings',
                'code' => '3100',
                'type_id' => $equityTypeId,
                'parent_id' => null,
                'order' => 10,
                'is_active' => true,
                'created_by' => $userId,
            ],

            // Revenue
            [
                'name' => 'Sales Revenue',
                'code' => '4000',
                'type_id' => $revenueTypeId,
                'parent_id' => null,
                'order' => 11,
                'is_active' => true,
                'created_by' => $userId,
            ],
            [
                'name' => 'Other Revenue',
                'code' => '4100',
                'type_id' => $revenueTypeId,
                'parent_id' => null,
                'order' => 12,
                'is_active' => true,
                'created_by' => $userId,
            ],

            // Expenses
            [
                'name' => 'Cost of Goods Sold',
                'code' => '5000',
                'type_id' => $expenseTypeId,
                'parent_id' => null,
                'order' => 13,
                'is_active' => true,
                'created_by' => $userId,
            ],
            [
                'name' => 'Purchase Expense',
                'code' => '5100',
                'type_id' => $expenseTypeId,
                'parent_id' => null,
                'order' => 14,
                'is_active' => true,
                'created_by' => $userId,
            ],
            [
                'name' => 'Operating Expenses',
                'code' => '5200',
                'type_id' => $expenseTypeId,
                'parent_id' => null,
                'order' => 15,
                'is_active' => true,
                'created_by' => $userId,
            ],
            [
                'name' => 'Financial Expenses',
                'code' => '5300',
                'type_id' => $expenseTypeId,
                'parent_id' => null,
                'order' => 16,
                'is_active' => true,
                'created_by' => $userId,
            ],
        ];

        foreach ($accounts as $account) {
            ChartOfAccount::firstOrCreate(
                ['code' => $account['code']],
                $account
            );
        }
    }
}
