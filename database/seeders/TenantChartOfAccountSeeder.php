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
     * This seeder creates a comprehensive Chart of Accounts with specific accounts
     * required for the accounting system, ensuring no duplication of account purposes.
     * 
     * SALES ACCOUNTS (Revenue Type):
     * - Sales Account (4110) - Main sales revenue account
     * - Product Sales Account (4111) - Specific product sales tracking
     * - Clients Account (1130) - Asset account for client receivables
     * - Discount Allowed Account (5310) - Expense for sales discounts given
     * 
     * PURCHASE ACCOUNTS:
     * - Suppliers Account (2110) - Liability account for supplier payables
     * - Purchase Account (5110) - Main purchase expense account
     * - Product Purchase Account (5111) - Specific product purchase tracking
     * - Discount Received Account (5311) - Expense for purchase discounts received
     * 
     * VAT ACCOUNTS:
     * - Purchase VAT Account (1131) - Asset account for VAT paid on purchases
     * - Sales VAT Account (2111) - Liability account for VAT collected on sales
     * 
     * EXPENSE ACCOUNTS:
     * - Expenses Account (5210) - General operating expenses
     * 
     * All accounts are properly categorized and have unique codes to prevent
     * duplication and maintain clarity in financial reports.
     *
     * @return void
     */

     /*
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

        // Level 2 - Detailed accounts with specific accounting system requirements
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
                'name' => 'Clients Account',
                'code' => '1130',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Current Assets'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Purchase VAT Account',
                'code' => '1131',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Current Assets'],
                'order' => 4,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Inventory',
                'code' => '1140',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Current Assets'],
                'order' => 5,
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
                'name' => 'Suppliers Account',
                'code' => '2110',
                'type_id' => $liabilityTypeId,
                'parent_id' => $subAccountIds['Current Liabilities'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Sales VAT Account',
                'code' => '2111',
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
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],

            // Sales Revenue detailed accounts - Specific to accounting system requirements
            [
                'name' => 'Sales Account',
                'code' => '4110',
                'type_id' => $revenueTypeId,
                'parent_id' => $subAccountIds['Sales Revenue'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Product Sales Account',
                'code' => '4111',
                'type_id' => $revenueTypeId,
                'parent_id' => $subAccountIds['Sales Revenue'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Service Revenue',
                'code' => '4120',
                'type_id' => $revenueTypeId,
                'parent_id' => $subAccountIds['Sales Revenue'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Sales Returns',
                'code' => '4121',
                'type_id' => $revenueTypeId,
                'parent_id' => $subAccountIds['Sales Revenue'],
                'order' => 4,
                'is_active' => 1,
                'created_by' => $userId,
            ],

            // Cost of Goods Sold detailed accounts - Purchase related
            [
                'name' => 'Purchase Account',
                'code' => '5110',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Cost of Goods Sold'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Product Purchase Account',
                'code' => '5111',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Cost of Goods Sold'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Purchase Returns',
                'code' => '5112',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Cost of Goods Sold'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],

            // Operating Expenses detailed accounts
            [
                'name' => 'Expenses Account',
                'code' => '5210',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Operating Expenses'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Salaries and Wages',
                'code' => '5220',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Operating Expenses'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Rent Expense',
                'code' => '5230',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Operating Expenses'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Utilities',
                'code' => '5240',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Operating Expenses'],
                'order' => 4,
                'is_active' => 1,
                'created_by' => $userId,
            ],

            // Financial Expenses detailed accounts - Discount related
            [
                'name' => 'Discount Allowed Account',
                'code' => '5310',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Financial Expenses'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Discount Received Account',
                'code' => '5311',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Financial Expenses'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Interest Expense',
                'code' => '5320',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Financial Expenses'],
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
            ['name' => 'الأصول', 'order' => 1],        // Asset
            ['name' => 'الخصوم', 'order' => 2],        // Liability
            ['name' => 'حقوق الملكية', 'order' => 3],  // Equity
            ['name' => 'الإيرادات', 'order' => 4],     // Revenue
            ['name' => 'المصروفات', 'order' => 5],     // Expense
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
        $assetTypeId = DB::table('chart_of_account_types')->where('name', 'الأصول')->first()->id;
        $liabilityTypeId = DB::table('chart_of_account_types')->where('name', 'الخصوم')->first()->id;
        $equityTypeId = DB::table('chart_of_account_types')->where('name', 'حقوق الملكية')->first()->id;
        $revenueTypeId = DB::table('chart_of_account_types')->where('name', 'الإيرادات')->first()->id;
        $expenseTypeId = DB::table('chart_of_account_types')->where('name', 'المصروفات')->first()->id;
        
        // Get a user ID for created_by (assuming you have at least one user)
        $userId = DB::table('users')->first()->id ?? 1;

        // Create hierarchical chart of accounts
        $accounts = [
            // المستوى 0 - الحسابات الرئيسية
            [
                'name' => 'الأصول', // Assets
                'code' => '1000',
                'type_id' => $assetTypeId,
                'parent_id' => null,
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'الخصوم', // Liabilities
                'code' => '2000',
                'type_id' => $liabilityTypeId,
                'parent_id' => null,
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'حقوق الملكية', // Equity
                'code' => '3000',
                'type_id' => $equityTypeId,
                'parent_id' => null,
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'الإيرادات', // Revenue
                'code' => '4000',
                'type_id' => $revenueTypeId,
                'parent_id' => null,
                'order' => 4,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'المصروفات', // Expenses
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
            // الأصول - الحسابات الفرعية
            [
                'name' => 'الأصول المتداولة', // Current Assets
                'code' => '1100',
                'type_id' => $assetTypeId,
                'parent_id' => $rootAccountIds['الأصول'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'الأصول الثابتة', // Fixed Assets
                'code' => '1200',
                'type_id' => $assetTypeId,
                'parent_id' => $rootAccountIds['الأصول'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'الأصول غير الملموسة', // Intangible Assets
                'code' => '1300',
                'type_id' => $assetTypeId,
                'parent_id' => $rootAccountIds['الأصول'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
        
            // الخصوم - الحسابات الفرعية
            [
                'name' => 'الخصوم المتداولة', // Current Liabilities
                'code' => '2100',
                'type_id' => $liabilityTypeId,
                'parent_id' => $rootAccountIds['الخصوم'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'الخصوم طويلة الأجل', // Long-term Liabilities
                'code' => '2200',
                'type_id' => $liabilityTypeId,
                'parent_id' => $rootAccountIds['الخصوم'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
        
            // حقوق الملكية - الحسابات الفرعية
            [
                'name' => 'رأس مال المالك', // Owner’s Equity
                'code' => '3100',
                'type_id' => $equityTypeId,
                'parent_id' => $rootAccountIds['حقوق الملكية'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'الأرباح المحتجزة', // Retained Earnings
                'code' => '3200',
                'type_id' => $equityTypeId,
                'parent_id' => $rootAccountIds['حقوق الملكية'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
        
            // الإيرادات - الحسابات الفرعية
            [
                'name' => 'إيرادات المبيعات', // Sales Revenue
                'code' => '4100',
                'type_id' => $revenueTypeId,
                'parent_id' => $rootAccountIds['الإيرادات'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'إيرادات أخرى', // Other Revenue
                'code' => '4200',
                'type_id' => $revenueTypeId,
                'parent_id' => $rootAccountIds['الإيرادات'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
        
            // المصروفات - الحسابات الفرعية
            [
                'name' => 'تكلفة البضاعة المباعة', // Cost of Goods Sold
                'code' => '5100',
                'type_id' => $expenseTypeId,
                'parent_id' => $rootAccountIds['المصروفات'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'المصروفات التشغيلية', // Operating Expenses
                'code' => '5200',
                'type_id' => $expenseTypeId,
                'parent_id' => $rootAccountIds['المصروفات'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'المصروفات المالية', // Financial Expenses
                'code' => '5300',
                'type_id' => $expenseTypeId,
                'parent_id' => $rootAccountIds['المصروفات'],
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

        // Level 2 - Detailed accounts with specific accounting system requirements
        $detailedAccounts = [
            // الأصول المتداولة - الحسابات التفصيلية
            [
                'name' => 'النقدية', // Cash
                'code' => '1110',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['الأصول المتداولة'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'الحسابات البنكية', // Bank Accounts
                'code' => '1120',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['الأصول المتداولة'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'حسابات العملاء', // Clients Account / Accounts Receivable
                'code' => '1130',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['الأصول المتداولة'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'حساب ضريبة القيمة المضافة للمشتريات', // Purchase VAT Account
                'code' => '1131',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['الأصول المتداولة'],
                'order' => 4,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'المخزون', // Inventory
                'code' => '1140',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['الأصول المتداولة'],
                'order' => 5,
                'is_active' => 1,
                'created_by' => $userId,
            ],
        
            // الأصول الثابتة - الحسابات التفصيلية
            [
                'name' => 'المعدات', // Equipment
                'code' => '1210',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['الأصول الثابتة'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'المباني', // Buildings
                'code' => '1220',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['الأصول الثابتة'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'المركبات', // Vehicles
                'code' => '1230',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['الأصول الثابتة'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
        
            // الخصوم المتداولة - الحسابات التفصيلية
            [
                'name' => 'حسابات الموردين', // Suppliers Account / Accounts Payable
                'code' => '2110',
                'type_id' => $liabilityTypeId,
                'parent_id' => $subAccountIds['الخصوم المتداولة'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'حساب ضريبة القيمة المضافة للمبيعات', // Sales VAT Account
                'code' => '2111',
                'type_id' => $liabilityTypeId,
                'parent_id' => $subAccountIds['الخصوم المتداولة'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'قروض قصيرة الأجل', // Short-term Loans
                'code' => '2120',
                'type_id' => $liabilityTypeId,
                'parent_id' => $subAccountIds['الخصوم المتداولة'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
        
            // إيرادات المبيعات - الحسابات التفصيلية
            [
                'name' => 'حساب المبيعات', // Sales Account
                'code' => '4110',
                'type_id' => $revenueTypeId,
                'parent_id' => $subAccountIds['إيرادات المبيعات'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'حساب مبيعات المنتجات', // Product Sales Account
                'code' => '4111',
                'type_id' => $revenueTypeId,
                'parent_id' => $subAccountIds['إيرادات المبيعات'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'إيرادات الخدمات', // Service Revenue
                'code' => '4120',
                'type_id' => $revenueTypeId,
                'parent_id' => $subAccountIds['إيرادات المبيعات'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'مردودات المبيعات', // Sales Returns
                'code' => '4121',
                'type_id' => $revenueTypeId,
                'parent_id' => $subAccountIds['إيرادات المبيعات'],
                'order' => 4,
                'is_active' => 1,
                'created_by' => $userId,
            ],
        
            // تكلفة البضاعة المباعة - الحسابات التفصيلية
            [
                'name' => 'حساب المشتريات', // Purchase Account
                'code' => '5110',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['تكلفة البضاعة المباعة'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'حساب مشتريات المنتجات', // Product Purchase Account
                'code' => '5111',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['تكلفة البضاعة المباعة'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'مردودات المشتريات', // Purchase Returns
                'code' => '5112',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['تكلفة البضاعة المباعة'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
        
            // المصروفات التشغيلية - الحسابات التفصيلية
            [
                'name' => 'حساب المصروفات', // Expenses Account
                'code' => '5210',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['المصروفات التشغيلية'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'الرواتب والأجور', // Salaries and Wages
                'code' => '5220',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['المصروفات التشغيلية'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'مصروف الإيجار', // Rent Expense
                'code' => '5230',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['المصروفات التشغيلية'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'مصروفات الخدمات', // Utilities
                'code' => '5240',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['المصروفات التشغيلية'],
                'order' => 4,
                'is_active' => 1,
                'created_by' => $userId,
            ],
        
            // المصروفات المالية - الحسابات التفصيلية
            [
                'name' => 'خصم مسموح به', // Discount Allowed Account
                'code' => '5310',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['المصروفات المالية'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'خصم مكتسب', // Discount Received Account
                'code' => '5311',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['المصروفات المالية'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'مصروف الفوائد', // Interest Expense
                'code' => '5320',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['المصروفات المالية'],
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
