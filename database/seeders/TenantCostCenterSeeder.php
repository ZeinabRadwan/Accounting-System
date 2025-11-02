<?php

namespace Database\Seeders;

use App\Models\CostCenter;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TenantCostCenterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * 
     * This seeder creates a comprehensive hierarchical structure of Cost Centers
     * for the accounting system, following SOCPA standards.
     * 
     * Structure:
     * - Root level: Main organizational divisions
     * - Level 1: Departments/Branches
     * - Level 2: Sections/Projects
     * 
     * @return void
     */
    public function run()
    {
        // Check if cost_centers table exists
        try {
            if (!DB::getSchemaBuilder()->hasTable('cost_centers')) {
                $this->command->warn('Cost centers table does not exist. Please run migrations first.');
                return;
            }
        } catch (\Exception $e) {
            $this->command->warn('Cannot check cost_centers table: ' . $e->getMessage());
            return;
        }

        // Check if cost centers already exist to avoid duplication
        try {
            if (DB::table('cost_centers')->count() > 0) {
                $this->command->info('Cost centers already exist, skipping seeding.');
                return;
            }
        } catch (\Exception $e) {
            $this->command->warn('Error checking existing cost centers: ' . $e->getMessage());
            return;
        }

        // Get a user ID for created_by
        $user = DB::table('users')->first();
        if (!$user) {
            $this->command->warn('No users found in tenant database. Cost centers seeder requires at least one user.');
            $this->command->info('Skipping cost centers seeding for this tenant.');
            return;
        }
        $userId = $user->id;

        // Level 0 - Root Cost Centers (Main Divisions)
        $rootCenters = [
            [
                'code' => 'CC001',
                'name' => 'الإدارة العامة',
                'name_en' => 'General Administration',
                'parent_id' => null,
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC002',
                'name' => 'فروع البيع',
                'name_en' => 'Sales Branches',
                'parent_id' => null,
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC003',
                'name' => 'الإنتاج',
                'name_en' => 'Production',
                'parent_id' => null,
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC004',
                'name' => 'المشاريع',
                'name_en' => 'Projects',
                'parent_id' => null,
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        // Insert root centers and get their IDs
        $rootCenterIds = [];
        foreach ($rootCenters as $center) {
            $id = DB::table('cost_centers')->insertGetId($center);
            $rootCenterIds[$center['code']] = $id;
        }

        // Level 1 - Department/Branch Cost Centers
        $departmentCenters = [
            // Under General Administration
            [
                'code' => 'CC101',
                'name' => 'الموارد البشرية',
                'name_en' => 'Human Resources',
                'parent_id' => $rootCenterIds['CC001'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC102',
                'name' => 'المالية والمحاسبة',
                'name_en' => 'Finance & Accounting',
                'parent_id' => $rootCenterIds['CC001'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC103',
                'name' => 'تقنية المعلومات',
                'name_en' => 'Information Technology',
                'parent_id' => $rootCenterIds['CC001'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC104',
                'name' => 'المشتريات والمخازن',
                'name_en' => 'Procurement & Warehouses',
                'parent_id' => $rootCenterIds['CC001'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Under Sales Branches
            [
                'code' => 'CC201',
                'name' => 'فرع الرياض',
                'name_en' => 'Riyadh Branch',
                'parent_id' => $rootCenterIds['CC002'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC202',
                'name' => 'فرع جدة',
                'name_en' => 'Jeddah Branch',
                'parent_id' => $rootCenterIds['CC002'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC203',
                'name' => 'فرع الدمام',
                'name_en' => 'Dammam Branch',
                'parent_id' => $rootCenterIds['CC002'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC204',
                'name' => 'المبيعات عبر الإنترنت',
                'name_en' => 'Online Sales',
                'parent_id' => $rootCenterIds['CC002'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Under Production
            [
                'code' => 'CC301',
                'name' => 'خط الإنتاج الأول',
                'name_en' => 'Production Line 1',
                'parent_id' => $rootCenterIds['CC003'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC302',
                'name' => 'خط الإنتاج الثاني',
                'name_en' => 'Production Line 2',
                'parent_id' => $rootCenterIds['CC003'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC303',
                'name' => 'مراقبة الجودة',
                'name_en' => 'Quality Control',
                'parent_id' => $rootCenterIds['CC003'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Under Projects
            [
                'code' => 'CC401',
                'name' => 'المشروع أ',
                'name_en' => 'Project A',
                'parent_id' => $rootCenterIds['CC004'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC402',
                'name' => 'المشروع ب',
                'name_en' => 'Project B',
                'parent_id' => $rootCenterIds['CC004'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        // Insert department centers and get their IDs
        $departmentCenterIds = [];
        foreach ($departmentCenters as $center) {
            $id = DB::table('cost_centers')->insertGetId($center);
            $departmentCenterIds[$center['code']] = $id;
        }

        // Level 2 - Section/Project Cost Centers
        $sectionCenters = [
            // Under HR Department
            [
                'code' => 'CC111',
                'name' => 'التوظيف',
                'name_en' => 'Recruitment',
                'parent_id' => $departmentCenterIds['CC101'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC112',
                'name' => 'التدريب والتطوير',
                'name_en' => 'Training & Development',
                'parent_id' => $departmentCenterIds['CC101'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Under Finance & Accounting
            [
                'code' => 'CC121',
                'name' => 'المحاسبة',
                'name_en' => 'Accounting',
                'parent_id' => $departmentCenterIds['CC102'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC122',
                'name' => 'الخزينة',
                'name_en' => 'Treasury',
                'parent_id' => $departmentCenterIds['CC102'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC123',
                'name' => 'المراجعة الداخلية',
                'name_en' => 'Internal Audit',
                'parent_id' => $departmentCenterIds['CC102'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Under IT Department
            [
                'code' => 'CC131',
                'name' => 'تطوير البرمجيات',
                'name_en' => 'Software Development',
                'parent_id' => $departmentCenterIds['CC103'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC132',
                'name' => 'الدعم الفني',
                'name_en' => 'Technical Support',
                'parent_id' => $departmentCenterIds['CC103'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Under Procurement & Warehouses
            [
                'code' => 'CC141',
                'name' => 'المشتريات',
                'name_en' => 'Procurement',
                'parent_id' => $departmentCenterIds['CC104'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC142',
                'name' => 'المخازن الرئيسية',
                'name_en' => 'Main Warehouse',
                'parent_id' => $departmentCenterIds['CC104'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC143',
                'name' => 'مخازن الفروع',
                'name_en' => 'Branch Warehouses',
                'parent_id' => $departmentCenterIds['CC104'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Under Riyadh Branch
            [
                'code' => 'CC211',
                'name' => 'مبيعات الرياض - المبيعات',
                'name_en' => 'Riyadh Sales - Sales',
                'parent_id' => $departmentCenterIds['CC201'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC212',
                'name' => 'مبيعات الرياض - التسويق',
                'name_en' => 'Riyadh Sales - Marketing',
                'parent_id' => $departmentCenterIds['CC201'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC213',
                'name' => 'مبيعات الرياض - خدمة العملاء',
                'name_en' => 'Riyadh Sales - Customer Service',
                'parent_id' => $departmentCenterIds['CC201'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Under Jeddah Branch
            [
                'code' => 'CC221',
                'name' => 'مبيعات جدة - المبيعات',
                'name_en' => 'Jeddah Sales - Sales',
                'parent_id' => $departmentCenterIds['CC202'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'CC222',
                'name' => 'مبيعات جدة - التسويق',
                'name_en' => 'Jeddah Sales - Marketing',
                'parent_id' => $departmentCenterIds['CC202'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Under Dammam Branch
            [
                'code' => 'CC231',
                'name' => 'مبيعات الدمام - المبيعات',
                'name_en' => 'Dammam Sales - Sales',
                'parent_id' => $departmentCenterIds['CC203'],
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        // Insert section centers
        foreach ($sectionCenters as $center) {
            DB::table('cost_centers')->insert($center);
        }

        $totalCenters = count($rootCenters) + count($departmentCenters) + count($sectionCenters);
        
        $this->command->info('Cost Centers seeded successfully!');
        $this->command->info("Created {$totalCenters} cost centers");
        $this->command->info('  - ' . count($rootCenters) . ' root centers (main divisions)');
        $this->command->info('  - ' . count($departmentCenters) . ' department/branch centers');
        $this->command->info('  - ' . count($sectionCenters) . ' section/project centers');
    }
}

