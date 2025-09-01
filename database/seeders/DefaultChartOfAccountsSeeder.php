<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ChartOfAccount;
use App\Models\ChartOfAccountType;

class DefaultChartOfAccountsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create account types if they don't exist
        $this->createAccountTypes();
        
        // Create default chart of accounts
        $this->createDefaultAccounts();
    }

    /**
     * Create account types
     */
    private function createAccountTypes(): void
    {
        $types = [
            'Asset',
            'Liability',
            'Equity',
            'Revenue',
            'Expense'
        ];

        foreach ($types as $typeName) {
            ChartOfAccountType::firstOrCreate(['name' => $typeName]);
        }
    }

    /**
     * Create default chart of accounts
     */
    private function createDefaultAccounts(): void
    {
        $this->createAssetAccounts();
        $this->createLiabilityAccounts();
        $this->createRevenueAccounts();
        $this->createExpenseAccounts();
    }

    /**
     * Create asset accounts
     */
    private function createAssetAccounts(): void
    {
        $assetType = ChartOfAccountType::where('name', 'Asset')->first();
        
        $accounts = [
            ['name' => 'Bank Accounts', 'code' => '1000'],
            ['name' => 'Cash', 'code' => '1001'],
            ['name' => 'Accounts Receivable', 'code' => '1100'],
            ['name' => 'VAT Receivable', 'code' => '1200'],
            ['name' => 'Purchase VAT Receivable', 'code' => '1201'],
            ['name' => 'Inventory', 'code' => '1300'],
            ['name' => 'Fixed Assets', 'code' => '1400'],
        ];

        foreach ($accounts as $account) {
            ChartOfAccount::firstOrCreate(
                ['code' => $account['code']],
                [
                    'name' => $account['name'],
                    'type_id' => $assetType->id,
                    'is_active' => true,
                    'created_by' => 1, // Assuming admin user ID is 1
                ]
            );
        }
    }

    /**
     * Create liability accounts
     */
    private function createLiabilityAccounts(): void
    {
        $liabilityType = ChartOfAccountType::where('name', 'Liability')->first();
        
        $accounts = [
            ['name' => 'Accounts Payable', 'code' => '2000'],
            ['name' => 'Sales VAT Payable', 'code' => '2100'],
            ['name' => 'Loans Payable', 'code' => '2200'],
            ['name' => 'Accrued Expenses', 'code' => '2300'],
        ];

        foreach ($accounts as $account) {
            ChartOfAccount::firstOrCreate(
                ['code' => $account['code']],
                [
                    'name' => $account['name'],
                    'type_id' => $liabilityType->id,
                    'is_active' => true,
                    'created_by' => 1,
                ]
            );
        }
    }

    /**
     * Create revenue accounts
     */
    private function createRevenueAccounts(): void
    {
        $revenueType = ChartOfAccountType::where('name', 'Revenue')->first();
        
        $accounts = [
            ['name' => 'Sales Revenue', 'code' => '4000'],
            ['name' => 'Service Revenue', 'code' => '4001'],
            ['name' => 'Other Revenue', 'code' => '4002'],
            ['name' => 'Discount Allowed', 'code' => '4100'],
        ];

        foreach ($accounts as $account) {
            ChartOfAccount::firstOrCreate(
                ['code' => $account['code']],
                [
                    'name' => $account['name'],
                    'type_id' => $revenueType->id,
                    'is_active' => true,
                    'created_by' => 1,
                ]
            );
        }
    }

    /**
     * Create expense accounts
     */
    private function createExpenseAccounts(): void
    {
        $expenseType = ChartOfAccountType::where('name', 'Expense')->first();
        
        $accounts = [
            ['name' => 'Purchase Expense', 'code' => '5000'],
            ['name' => 'Cost of Goods Sold', 'code' => '5001'],
            ['name' => 'Operating Expenses', 'code' => '5100'],
            ['name' => 'Discount Received', 'code' => '5200'],
            ['name' => 'Transportation Expense', 'code' => '5300'],
        ];

        foreach ($accounts as $account) {
            ChartOfAccount::firstOrCreate(
                ['code' => $account['code']],
                [
                    'name' => $account['name'],
                    'type_id' => $expenseType->id,
                    'is_active' => true,
                    'created_by' => 1,
                ]
            );
        }
    }
}
