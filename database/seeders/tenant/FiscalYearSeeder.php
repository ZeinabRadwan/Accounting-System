<?php

namespace Database\Seeders\Tenant;

use Illuminate\Database\Seeder;
use App\Models\FiscalYear;
use App\Models\AccountingPeriod;
use Carbon\Carbon;

class FiscalYearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create current fiscal year (2024-2025)
        $currentFiscalYear = FiscalYear::create([
            'name' => 'FY 2024-2025',
            'start_date' => Carbon::parse('2024-04-01'),
            'end_date' => Carbon::parse('2025-03-31'),
            'is_active' => true,
            'note' => 'Current fiscal year',
            'created_by' => 1,
        ]);

        // Create accounting periods for current fiscal year
        $periods = [
            ['name' => 'Q1 2024-25', 'start' => '2024-04-01', 'end' => '2024-06-30'],
            ['name' => 'Q2 2024-25', 'start' => '2024-07-01', 'end' => '2024-09-30'],
            ['name' => 'Q3 2024-25', 'start' => '2024-10-01', 'end' => '2024-12-31'],
            ['name' => 'Q4 2024-25', 'start' => '2025-01-01', 'end' => '2025-03-31'],
        ];

        foreach ($periods as $period) {
            AccountingPeriod::create([
                'name' => $period['name'],
                'fiscal_year_id' => $currentFiscalYear->id,
                'start_date' => Carbon::parse($period['start']),
                'end_date' => Carbon::parse($period['end']),
                'is_active' => true,
                'is_closed' => false,
                'note' => 'Quarterly accounting period',
                'created_by' => 1,
            ]);
        }

        // Create previous fiscal year (2023-2024)
        $previousFiscalYear = FiscalYear::create([
            'name' => 'FY 2023-2024',
            'start_date' => Carbon::parse('2023-04-01'),
            'end_date' => Carbon::parse('2024-03-31'),
            'is_active' => false,
            'note' => 'Previous fiscal year',
            'created_by' => 1,
        ]);

        // Create accounting periods for previous fiscal year
        $previousPeriods = [
            ['name' => 'Q1 2023-24', 'start' => '2023-04-01', 'end' => '2023-06-30'],
            ['name' => 'Q2 2023-24', 'start' => '2023-07-01', 'end' => '2023-09-30'],
            ['name' => 'Q3 2023-24', 'start' => '2023-10-01', 'end' => '2023-12-31'],
            ['name' => 'Q4 2023-24', 'start' => '2024-01-01', 'end' => '2024-03-31'],
        ];

        foreach ($previousPeriods as $period) {
            AccountingPeriod::create([
                'name' => $period['name'],
                'fiscal_year_id' => $previousFiscalYear->id,
                'start_date' => Carbon::parse($period['start']),
                'end_date' => Carbon::parse($period['end']),
                'is_active' => false,
                'is_closed' => true,
                'note' => 'Closed quarterly accounting period',
                'created_by' => 1,
            ]);
        }

        // Set current fiscal year and accounting period in general settings
        $currentPeriod = AccountingPeriod::where('fiscal_year_id', $currentFiscalYear->id)
            ->where('is_active', true)
            ->where('is_closed', false)
            ->first();
            
        if ($currentPeriod) {
            // Set current fiscal year
            \App\Models\GeneralSetting::updateOrCreate(
                ['key' => 'current_fiscal_year_id'],
                [
                    'display_name' => 'Current Fiscal Year ID',
                    'value' => $currentFiscalYear->id,
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
    }
}
