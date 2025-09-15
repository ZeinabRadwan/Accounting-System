<?php

namespace Database\Seeders\Tenant;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Models\FiscalYear;
use App\Models\AccountingPeriod;
use App\Models\GeneralSetting;

class DefaultFiscalAndAccountingPeriodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info('Starting DefaultFiscalAndAccountingPeriodSeeder...');

        try {
            // Check if there are any fiscal years
            $fiscalYearCount = FiscalYear::count();
            $this->command->info("Found {$fiscalYearCount} fiscal year(s) in the database.");

            if ($fiscalYearCount === 0) {
                $this->command->warn("No fiscal years found. Please create at least one fiscal year first.");
                return;
            }

            // Get the most appropriate fiscal year (active and current, or first available)
            $fiscalYear = $this->getBestFiscalYear();
            $this->command->info("Using fiscal year: {$fiscalYear->name} (ID: {$fiscalYear->id})");

            // Check if there are any accounting periods
            $accountingPeriodCount = AccountingPeriod::count();
            $this->command->info("Found {$accountingPeriodCount} accounting period(s) in the database.");

            if ($accountingPeriodCount === 0) {
                $this->command->warn("No accounting periods found. Please create at least one accounting period first.");
                return;
            }

            // Get the most appropriate accounting period (active and current, or first available)
            $accountingPeriod = $this->getBestAccountingPeriod($fiscalYear->id);
            $this->command->info("Using accounting period: {$accountingPeriod->name} (ID: {$accountingPeriod->id})");

            // Verify data consistency: accounting period must belong to the fiscal year
            if ($accountingPeriod->fiscal_year_id !== $fiscalYear->id) {
                $this->command->error("Data inconsistency detected! Accounting period '{$accountingPeriod->name}' (fiscal_year_id: {$accountingPeriod->fiscal_year_id}) does not belong to fiscal year '{$fiscalYear->name}' (id: {$fiscalYear->id}).");
                $this->command->error("Cannot set accounting period that doesn't belong to the selected fiscal year.");
                return;
            }

            $this->command->info("Data consistency verified. Accounting period belongs to the fiscal year.");

            // Check if fiscal year is changing and reset accounting period if needed
            $this->handleFiscalYearChange($fiscalYear->id);

            // Set current fiscal year in general_settings
            $this->setGeneralSetting(
                'current_fiscal_year_id',
                'Current Fiscal Year ID',
                $fiscalYear->id,
                'Setting the current fiscal year to the only available fiscal year'
            );

            // Set current accounting period in general_settings
            $this->setGeneralSetting(
                'current_accounting_period_id',
                'Current Accounting Period ID',
                $accountingPeriod->id,
                'Setting the current accounting period to the only available accounting period'
            );

            // Ensure the accounting period is marked as active and not closed
            $this->updateAccountingPeriodStatus($accountingPeriod);

            $this->command->info('DefaultFiscalAndAccountingPeriodSeeder completed successfully!');
            Log::info('DefaultFiscalAndAccountingPeriodSeeder completed', [
                'fiscal_year_id' => $fiscalYear->id,
                'fiscal_year_name' => $fiscalYear->name,
                'accounting_period_id' => $accountingPeriod->id,
                'accounting_period_name' => $accountingPeriod->name
            ]);

        } catch (\Exception $e) {
            $this->command->error("Error in DefaultFiscalAndAccountingPeriodSeeder: " . $e->getMessage());
            Log::error('DefaultFiscalAndAccountingPeriodSeeder failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            throw $e;
        }
    }

    /**
     * Set or update a general setting with logging
     *
     * @param string $key
     * @param string $displayName
     * @param mixed $value
     * @param string $description
     * @return void
     */
    private function setGeneralSetting(string $key, string $displayName, $value, string $description): void
    {
        // Check if setting already exists and has the same value
        $existingSetting = GeneralSetting::where('key', $key)->first();
        
        if ($existingSetting && $existingSetting->value == $value) {
            $this->command->info("General setting '{$key}' already set to '{$value}'. No update needed.");
            return;
        }

        // Update or create the setting
        GeneralSetting::updateOrCreate(
            ['key' => $key],
            [
                'display_name' => $displayName,
                'value' => $value,
                'updated_at' => now()
            ]
        );

        $action = $existingSetting ? 'Updated' : 'Created';
        $this->command->info("{$action} general setting '{$key}' = '{$value}' - {$description}");
        
        Log::info("General setting {$action}", [
            'key' => $key,
            'value' => $value,
            'description' => $description
        ]);
    }

    /**
     * Handle fiscal year change by resetting accounting period if needed
     *
     * @param int $newFiscalYearId
     * @return void
     */
    private function handleFiscalYearChange(int $newFiscalYearId): void
    {
        $currentFiscalYearSetting = GeneralSetting::where('key', 'current_fiscal_year_id')->first();
        
        if (!$currentFiscalYearSetting) {
            $this->command->info("No current fiscal year setting found. This is a new setup.");
            return;
        }

        $currentFiscalYearId = (int) $currentFiscalYearSetting->value;
        
        if ($currentFiscalYearId === $newFiscalYearId) {
            $this->command->info("Fiscal year is not changing. Current: {$currentFiscalYearId}, New: {$newFiscalYearId}");
            return;
        }

        $this->command->info("Fiscal year is changing from {$currentFiscalYearId} to {$newFiscalYearId}.");

        // Check if current accounting period belongs to the new fiscal year
        $currentAccountingPeriodSetting = GeneralSetting::where('key', 'current_accounting_period_id')->first();
        
        if ($currentAccountingPeriodSetting) {
            $currentAccountingPeriodId = (int) $currentAccountingPeriodSetting->value;
            $currentAccountingPeriod = AccountingPeriod::find($currentAccountingPeriodId);
            
            if ($currentAccountingPeriod && $currentAccountingPeriod->fiscal_year_id !== $newFiscalYearId) {
                $this->command->warn("Current accounting period '{$currentAccountingPeriod->name}' (ID: {$currentAccountingPeriodId}) belongs to fiscal year {$currentAccountingPeriod->fiscal_year_id}, not the new fiscal year {$newFiscalYearId}.");
                $this->command->info("Resetting current accounting period to null for safety.");
                
                // Reset current accounting period
                GeneralSetting::updateOrCreate(
                    ['key' => 'current_accounting_period_id'],
                    [
                        'display_name' => 'Current Accounting Period ID',
                        'value' => null,
                        'updated_at' => now()
                    ]
                );
                
                Log::info("Reset current accounting period due to fiscal year change", [
                    'old_fiscal_year_id' => $currentFiscalYearId,
                    'new_fiscal_year_id' => $newFiscalYearId,
                    'reset_accounting_period_id' => $currentAccountingPeriodId
                ]);
            } else {
                $this->command->info("Current accounting period belongs to the new fiscal year. No reset needed.");
            }
        }
    }

    /**
     * Update accounting period status (active and not closed)
     *
     * @param AccountingPeriod $accountingPeriod
     * @return void
     */
    private function updateAccountingPeriodStatus(AccountingPeriod $accountingPeriod): void
    {
        $needsUpdate = false;
        $updates = [];

        // Ensure the accounting period is marked as active
        if (!$accountingPeriod->is_active) {
            $updates['is_active'] = true;
            $needsUpdate = true;
            $this->command->info("Will set accounting period '{$accountingPeriod->name}' as active.");
        }

        // Ensure the accounting period is not closed
        if ($accountingPeriod->is_closed) {
            $updates['is_closed'] = false;
            $needsUpdate = true;
            $this->command->info("Will set accounting period '{$accountingPeriod->name}' as not closed.");
        }

        if ($needsUpdate) {
            $updates['updated_at'] = now();
            $accountingPeriod->update($updates);
            
            $this->command->info("Updated accounting period '{$accountingPeriod->name}' status.");
            
            Log::info("Updated accounting period status", [
                'accounting_period_id' => $accountingPeriod->id,
                'accounting_period_name' => $accountingPeriod->name,
                'updates' => $updates
            ]);
        } else {
            $this->command->info("Accounting period '{$accountingPeriod->name}' status is already correct (active: " . ($accountingPeriod->is_active ? 'yes' : 'no') . ", closed: " . ($accountingPeriod->is_closed ? 'yes' : 'no') . ").");
        }
    }

    /**
     * Get the best fiscal year to use as default
     * Priority: 1) Active and current, 2) Active, 3) First available
     *
     * @return FiscalYear
     */
    private function getBestFiscalYear(): FiscalYear
    {
        // Try to get active fiscal year that includes current date
        $currentFiscalYear = FiscalYear::active()
            ->where('start_date', '<=', now())
            ->where('end_date', '>=', now())
            ->first();

        if ($currentFiscalYear) {
            $this->command->info("Found active fiscal year that includes current date.");
            return $currentFiscalYear;
        }

        // Try to get any active fiscal year
        $activeFiscalYear = FiscalYear::active()->first();
        if ($activeFiscalYear) {
            $this->command->info("Found active fiscal year (may not include current date).");
            return $activeFiscalYear;
        }

        // Fall back to first available fiscal year
        $fiscalYear = FiscalYear::first();
        $this->command->info("Using first available fiscal year.");
        return $fiscalYear;
    }

    /**
     * Get the best accounting period to use as default
     * Priority: 1) Active and current, 2) Active, 3) First available for fiscal year
     *
     * @param int $fiscalYearId
     * @return AccountingPeriod
     */
    private function getBestAccountingPeriod(int $fiscalYearId): AccountingPeriod
    {
        // Try to get active accounting period that includes current date
        $currentPeriod = AccountingPeriod::active()
            ->where('fiscal_year_id', $fiscalYearId)
            ->where('start_date', '<=', now())
            ->where('end_date', '>=', now())
            ->first();

        if ($currentPeriod) {
            $this->command->info("Found active accounting period that includes current date.");
            return $currentPeriod;
        }

        // Try to get any active accounting period for this fiscal year
        $activePeriod = AccountingPeriod::active()
            ->where('fiscal_year_id', $fiscalYearId)
            ->first();

        if ($activePeriod) {
            $this->command->info("Found active accounting period for this fiscal year.");
            return $activePeriod;
        }

        // Fall back to first available accounting period for this fiscal year
        $period = AccountingPeriod::where('fiscal_year_id', $fiscalYearId)->first();
        if ($period) {
            $this->command->info("Using first available accounting period for this fiscal year.");
            return $period;
        }

        // If no period found for this fiscal year, get any period
        $period = AccountingPeriod::first();
        $this->command->info("Using first available accounting period (may not belong to selected fiscal year).");
        return $period;
    }
}
