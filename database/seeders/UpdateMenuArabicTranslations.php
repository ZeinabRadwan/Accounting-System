<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UpdateMenuArabicTranslations extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Arabic translations mapping for menu items
        $arabicTranslations = [
            'Dashboard' => 'لوحة التحكم',
            'Categories' => 'الفئات',
            'Sub Categories' => 'الفئات الفرعية',
            'Expenses List' => 'قائمة المصروفات',
            'Purchases List' => 'قائمة المشتريات',
            'Return List' => 'قائمة المرتجعات',
            'Returns List' => 'قائمة المرتجعات',
            'Quotations List' => 'قائمة عروض الأسعار',
            'Invoices List' => 'قائمة الفواتير',
            'Clients List' => 'قائمة العملاء',
            'Suppliers List' => 'قائمة الموردين',
            'Products List' => 'قائمة الأصناف',
            'Reports' => 'التقارير',
            'Setup' => 'الإعداد',
            'Profile' => 'الملف الشخصي',
            'Activity log' => 'سجل العمليات',
            'Item Categories' => 'فئات الأصناف',
            'Item Sub Categories' => 'الفئات الفرعية للأصناف',
            'Expenses' => 'المصروفات',
            'Purchases' => 'المشتريات',
            'Quotations' => 'عروض الأسعار',
            'Invoices' => 'الفواتير',
            'Clients' => 'العملاء',
            'Suppliers' => 'الموردون',
            'Products' => 'الأصناف',
            'Purchase Returns' => 'مردودات المشتريات',
            'Invoice Returns' => 'مردودات الفواتير',
            'Sales vs Purchases' => 'المبيعات مقابل المشتريات',
            'Top Selling Products' => 'أفضل الأصناف مبيعاً',
            'Top 5 Clients' => 'أفضل 5 عملاء',
            'Expense Categories' => 'فئات المصروفات',
            'Expense Sub Categories' => 'الفئات الفرعية للمصروفات',
            'Client Receivable Report' => 'تقرير ذمم العملاء',
            'Sales By User Report' => 'تقرير المبيعات حسب المستخدم',
            'Collection By User Report' => 'تقرير التحصيل حسب المستخدم',
        ];

        // Update existing menu items with Arabic translations
        foreach ($arabicTranslations as $englishName => $arabicName) {
            DB::table('menus')
                ->where('name', $englishName)
                ->update(['name_ar' => $arabicName]);
        }

        $this->command->info('Arabic translations for menu items have been updated successfully.');
    }
}