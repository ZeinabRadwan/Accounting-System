<?php

namespace Database\Seeders\Tenant;

use Illuminate\Database\Seeder;
use App\Models\FiscalYear;
use App\Models\AccountingPeriod;
use Carbon\Carbon;

class TenantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create fiscal year 2025-2026 (September 1, 2025 to September 1, 2026)
        $fiscalYear = FiscalYear::create([
            'name' => 'FY 2025-2026',
            'start_date' => Carbon::parse('2025-09-01'),
            'end_date' => Carbon::parse('2026-09-01'),
            'is_active' => true,
            'note' => 'Fiscal Year 2025-2026 (September to September)',
            'created_by' => 1, // Assuming user ID 1 exists
        ]);

        // Create 12 monthly accounting periods
        $months = [
            ['name' => 'September 2025', 'start' => '2025-09-01', 'end' => '2025-09-30'],
            ['name' => 'October 2025', 'start' => '2025-10-01', 'end' => '2025-10-31'],
            ['name' => 'November 2025', 'start' => '2025-11-01', 'end' => '2025-11-30'],
            ['name' => 'December 2025', 'start' => '2025-12-01', 'end' => '2025-12-31'],
            ['name' => 'January 2026', 'start' => '2026-01-01', 'end' => '2026-01-31'],
            ['name' => 'February 2026', 'start' => '2026-02-01', 'end' => '2026-02-28'],
            ['name' => 'March 2026', 'start' => '2026-03-01', 'end' => '2026-03-31'],
            ['name' => 'April 2026', 'start' => '2026-04-01', 'end' => '2026-04-30'],
            ['name' => 'May 2026', 'start' => '2026-05-01', 'end' => '2026-05-31'],
            ['name' => 'June 2026', 'start' => '2026-06-01', 'end' => '2026-06-30'],
            ['name' => 'July 2026', 'start' => '2026-07-01', 'end' => '2026-07-31'],
            ['name' => 'August 2026', 'start' => '2026-08-01', 'end' => '2026-08-31'],
        ];

        foreach ($months as $month) {
            AccountingPeriod::create([
                'name' => $month['name'],
                'fiscal_year_id' => $fiscalYear->id,
                'start_date' => Carbon::parse($month['start']),
                'end_date' => Carbon::parse($month['end']),
                'is_active' => true,
                'is_closed' => false,
                'note' => 'Monthly accounting period for ' . $month['name'],
                'created_by' => 1, // Assuming user ID 1 exists
            ]);
        }

        // Set the first period (September 2025) as the current accounting period
        $currentPeriod = AccountingPeriod::where('fiscal_year_id', $fiscalYear->id)
            ->where('name', 'September 2025')
            ->first();
            
        if ($currentPeriod) {
            // Set current fiscal year
            \App\Models\GeneralSetting::updateOrCreate(
                ['key' => 'current_fiscal_year_id'],
                [
                    'display_name' => 'Current Fiscal Year ID',
                    'value' => $fiscalYear->id,
                ]
            );
            
            // Set current accounting period
            \App\Models\GeneralSetting::updateOrCreate(
                ['key' => 'current_accounting_period_id'],
                [
                    'display_name' => 'Current Accounting Period ID',
                    'value' => $currentPeriod->id,
                ]
            );
        }

        $this->command->info('Fiscal Year 2025-2026 and 12 monthly accounting periods created successfully!');
    }
}
