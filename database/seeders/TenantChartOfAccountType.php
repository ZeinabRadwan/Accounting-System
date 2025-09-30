<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\ChartOfAccountType;
use App\Models\ChartOfAccountTypeTranslation;

class TenantChartOfAccountType extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //turn off foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        DB::table('chart_of_account_types')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
        // check if table is empty
        if (DB::table('chart_of_account_types')->count() == 0) {
            $data = [
                ['name' => 'الأصول', 'order' => 1, 'en' => 'Asset', 'ar' => 'الأصول'],
                ['name' => 'الخصوم', 'order' => 2, 'en' => 'Liability', 'ar' => 'الخصوم'],
                ['name' => 'حقوق الملكية', 'order' => 3, 'en' => 'Equity', 'ar' => 'حقوق الملكية'],
                ['name' => 'الإيرادات', 'order' => 4, 'en' => 'Revenue', 'ar' => 'الإيرادات'],
                ['name' => 'المصروفات', 'order' => 5, 'en' => 'Expense', 'ar' => 'المصروفات'],
                ['name' => 'أخرى', 'order' => 6, 'en' => 'Other', 'ar' => 'أخرى'],
            ];

            foreach ($data as $row) {
                $typeId = DB::table('chart_of_account_types')->insertGetId([
                    'name' => $row['name'],
                    'order' => $row['order'],
                ]);

                // Seed translations into dedicated table
                DB::table('chart_of_account_type_translations')->insert([
                    [
                        'chart_of_account_type_id' => $typeId,
                        'locale' => 'en',
                        'name' => $row['en'],
                        'created_at' => now(),
                        'updated_at' => now(),
                    ],
                    [
                        'chart_of_account_type_id' => $typeId,
                        'locale' => 'ar',
                        'name' => $row['ar'],
                        'created_at' => now(),
                        'updated_at' => now(),
                    ],
                ]);
            }
        }
    }
}
