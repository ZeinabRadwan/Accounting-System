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

     
    public function run()
    {

        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        DB::table('chart_of_accounts')->truncate();
        DB::table('chart_of_account_translations')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
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
        $assetTypeId = DB::table('chart_of_account_types')->where('id', 1)->first()->id;
        $liabilityTypeId = DB::table('chart_of_account_types')->where('id', 2)->first()->id;
        $equityTypeId = DB::table('chart_of_account_types')->where('id', 3)->first()->id;
        $revenueTypeId = DB::table('chart_of_account_types')->where('id', 4)->first()->id;
        $expenseTypeId = DB::table('chart_of_account_types')->where('id', 5)->first()->id;

        // Get a user ID for created_by (assuming you have at least one user)
        $userId = DB::table('users')->first()->id ?? 1;

        // Create hierarchical chart of accounts
        $accounts = [
            // Level 0 - Root Accounts
            [
                'name' => 'Assets',
                'name_ar' => 'الأصول',
                'code' => '1000',
                'type_id' => $assetTypeId,
                'parent_id' => null,
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Liabilities',
                'name_ar' => 'الخصوم',
                'code' => '2000',
                'type_id' => $liabilityTypeId,
                'parent_id' => null,
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Equity',
                'name_ar' => 'حقوق الملكية',
                'code' => '3000',
                'type_id' => $equityTypeId,
                'parent_id' => null,
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Revenue',
                'name_ar' => 'الإيرادات',
                'code' => '4000',
                'type_id' => $revenueTypeId,
                'parent_id' => null,
                'order' => 4,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Expenses',
                'name_ar' => 'المصروفات',
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

            // seed translations (ar uses seeded name; en defaults to same label unless customized later)
            DB::table('chart_of_account_translations')->insert([
                [
                    'chart_of_account_id' => $id,
                    'locale' => 'ar',
                    'name' => $account['name_ar'],
                    'description' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'chart_of_account_id' => $id,
                    'locale' => 'en',
                    'name' => $account['name'],
                    'description' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]);
        }

        // Level 1 - Sub-accounts
        $subAccounts = [
            // Assets sub-accounts
            [
                'name' => 'Current Assets',
                'name_ar' => 'الأصول المتداولة',
                'code' => '1100',
                'type_id' => $assetTypeId,
                'parent_id' => $rootAccountIds['Assets'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Fixed Assets',
                'name_ar' => 'الأصول الثابتة',
                'code' => '1200',
                'type_id' => $assetTypeId,
                'parent_id' => $rootAccountIds['Assets'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Intangible Assets',
                'name_ar' => 'الأصول غير المتداولة',
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
                'name_ar' => 'الخصوم المتداولة',
                'code' => '2100',
                'type_id' => $liabilityTypeId,
                'parent_id' => $rootAccountIds['Liabilities'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Long-term Liabilities',
                'name_ar' => 'الخصوم الطويلة المدى',
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
                'name_ar' => 'حقوق الملكية',
                'code' => '3100',
                'type_id' => $equityTypeId,
                'parent_id' => $rootAccountIds['Equity'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Retained Earnings',
                'name_ar' => 'الأرباح المحتجزة',
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
                'name_ar' => 'الإيرادات المباعة',
                'code' => '4100',
                'type_id' => $revenueTypeId,
                'parent_id' => $rootAccountIds['Revenue'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Other Revenue',
                'name_ar' => 'الإيرادات الأخرى',
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
                'name_ar' => 'تكلفة المباعات',
                'code' => '5100',
                'type_id' => $expenseTypeId,
                'parent_id' => $rootAccountIds['Expenses'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Operating Expenses',
                'name_ar' => 'المصروفات التشغيلية',
                'code' => '5200',
                'type_id' => $expenseTypeId,
                'parent_id' => $rootAccountIds['Expenses'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Financial Expenses',
                'name_ar' => 'المصروفات المالية',
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

            DB::table('chart_of_account_translations')->insert([
                [
                    'chart_of_account_id' => $id,
                    'locale' => 'ar',
                    'name' => $account['name_ar'],
                    'description' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'chart_of_account_id' => $id,
                    'locale' => 'en',
                    'name' => $account['name'],
                    'description' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]);
        }

        // Level 2 - Detailed accounts with specific accounting system requirements
        $detailedAccounts = [
            // Current Assets detailed accounts
            [
                'name' => 'Cash',
                'name_ar' => 'النقدية',
                'code' => '1110',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Current Assets'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Bank Accounts',
                'name_ar' => 'الحسابات البنكية',
                'code' => '1120',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Current Assets'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Clients Account',
                'name_ar' => 'حساب العملاء',
                'code' => '1130',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Current Assets'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Purchase VAT Account',
                'name_ar' => 'حساب القيمة المضافة للمشتريات',
                'code' => '1131',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Current Assets'],
                'order' => 4,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Inventory',
                'name_ar' => 'المخزون',
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
                'name_ar' => 'المعدات',
                'code' => '1210',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Fixed Assets'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Buildings',
                'name_ar' => 'المباني',
                'code' => '1220',
                'type_id' => $assetTypeId,
                'parent_id' => $subAccountIds['Fixed Assets'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Vehicles',
                'name_ar' => 'المركبات',
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
                'name_ar' => 'حساب الموردين',
                'code' => '2110',
                'type_id' => $liabilityTypeId,
                'parent_id' => $subAccountIds['Current Liabilities'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Sales VAT Account',
                'name_ar' => 'حساب القيمة المضافة للمبيعات',
                'code' => '2111',
                'type_id' => $liabilityTypeId,
                'parent_id' => $subAccountIds['Current Liabilities'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Short-term Loans',
                'name_ar' => 'القروض القصيرة المدى',
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
                'name_ar' => 'حساب المبيعات',
                'code' => '4110',
                'type_id' => $revenueTypeId,
                'parent_id' => $subAccountIds['Sales Revenue'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Product Sales Account',
                'name_ar' => 'حساب المبيعات للمنتجات',
                'code' => '4111',
                'type_id' => $revenueTypeId,
                'parent_id' => $subAccountIds['Sales Revenue'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Service Revenue',
                'name_ar' => 'حساب الإيرادات الخدمية',
                'code' => '4120',
                'type_id' => $revenueTypeId,
                'parent_id' => $subAccountIds['Sales Revenue'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Sales Returns',
                'name_ar' => 'إرجاعات المبيعات',
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
                'name_ar' => 'حساب المشتريات',
                'code' => '5110',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Cost of Goods Sold'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Product Purchase Account',
                'name_ar' => 'حساب المشتريات للمنتجات',
                'code' => '5111',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Cost of Goods Sold'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Purchase Returns',
                'name_ar' => 'إرجاعات المشتريات',
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
                'name_ar' => 'حساب المصروفات',
                'code' => '5210',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Operating Expenses'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Salaries and Wages',
                'name_ar' => 'الرواتب والأجور',
                'code' => '5220',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Operating Expenses'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Rent Expense',
                'name_ar' => 'الإيجار',
                'code' => '5230',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Operating Expenses'],
                'order' => 3,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Utilities',
                'name_ar' => 'الخدمات',
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
                'name_ar' => 'حساب الخصم المسموح به',
                'code' => '5310',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Financial Expenses'],
                'order' => 1,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Discount Received Account',
                'name_ar' => 'حساب الخصم المستلم',
                'code' => '5311',
                'type_id' => $expenseTypeId,
                'parent_id' => $subAccountIds['Financial Expenses'],
                'order' => 2,
                'is_active' => 1,
                'created_by' => $userId,
            ],
            [
                'name' => 'Interest Expense',
                'name_ar' => 'الفوائد المدفوعة',
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

            DB::table('chart_of_account_translations')->insert([
                [
                    'chart_of_account_id' => $id,
                    'locale' => 'ar',
                    'name' => $account['name_ar'],
                    'description' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'chart_of_account_id' => $id,
                    'locale' => 'en',
                    'name' => $account['name'],
                    'description' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]);
        }

        $this->command->info('Chart of Accounts seeded successfully!');
        $this->command->info('Created ' . count($accountTypes) . ' account types');
        $this->command->info('Created ' . (count($accounts) + count($subAccounts) + count($detailedAccounts)) . ' chart of accounts');
    }
}
