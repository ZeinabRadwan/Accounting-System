<?php

namespace App\Services;

use App\Models\CostAllocationRule;
use App\Models\CostAllocationDetail;
use App\Models\CostAllocationExecution;
use App\Models\CostCenter;
use App\Models\CostCenterMetric;
use App\Models\JournalEntry;
use App\Models\JournalEntryLine;
use App\Models\ChartOfAccount;
use App\Models\GeneralSetting;
use App\Models\FiscalYear;
use App\Models\AccountingPeriod;
use App\Services\BusinessTransactionJournalService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Exception;

class CostAllocationService
{
    protected $journalService;

    public function __construct(BusinessTransactionJournalService $journalService)
    {
        $this->journalService = $journalService;
    }

    /**
     * Validate allocation rule
     */
    public function validateAllocation(CostAllocationRule $rule): array
    {
        $errors = [];

        // Check if rule has details
        if ($rule->details->count() === 0) {
            $errors[] = 'Allocation rule must have at least one target cost center.';
        }

        // Check if allocation ratios sum to 100%
        if (!$rule->isValidAllocation()) {
            $total = $rule->getTotalAllocationRatio();
            $errors[] = "Total allocation ratio must equal 100%. Current total: {$total}%";
        }

        // Validate source cost center is active
        if (!$rule->sourceCostCenter || !$rule->sourceCostCenter->is_active) {
            $errors[] = 'Source cost center must be active.';
        }

        // Validate target cost centers are active
        foreach ($rule->details as $detail) {
            if (!$detail->targetCostCenter || !$detail->targetCostCenter->is_active) {
                $errors[] = "Target cost center '{$detail->targetCostCenter->name}' must be active.";
            }
        }

        return [
            'valid' => empty($errors),
            'errors' => $errors,
        ];
    }

    /**
     * Calculate allocation amounts based on basis type
     */
    public function calculateAmounts(CostAllocationRule $rule, float $totalAmount, array $metrics = []): array
    {
        $amounts = [];

        if ($rule->basis_type === 'percentage') {
            // Simple percentage allocation
            foreach ($rule->details as $detail) {
                $amount = ($totalAmount * $detail->allocation_ratio) / 100;
                $amounts[$detail->target_cost_center_id] = [
                    'amount' => round($amount, 2),
                    'ratio' => $detail->allocation_ratio,
                ];
            }
        } else {
            // Basis type requires metrics (employees, revenue, area, consumption)
            $totalMetric = 0;

            // Calculate total metric value for all target centers
            foreach ($rule->details as $detail) {
                $centerId = $detail->target_cost_center_id;
                
                if (!isset($metrics[$centerId][$rule->basis_type])) {
                    throw new Exception("Metric '{$rule->basis_type}' not found for cost center ID: {$centerId}");
                }

                // For non-percentage basis, allocation_ratio acts as a weight multiplier
                $metricValue = $metrics[$centerId][$rule->basis_type] * ($detail->allocation_ratio / 100);
                $totalMetric += $metricValue;
            }

            if ($totalMetric <= 0) {
                throw new Exception("Total metric value must be greater than zero for basis type: {$rule->basis_type}");
            }

            // Calculate proportional allocation
            foreach ($rule->details as $detail) {
                $centerId = $detail->target_cost_center_id;
                $metricValue = $metrics[$centerId][$rule->basis_type] * ($detail->allocation_ratio / 100);
                $proportion = $totalMetric > 0 ? ($metricValue / $totalMetric) : 0;
                $amount = $totalAmount * $proportion;

                $amounts[$centerId] = [
                    'amount' => round($amount, 2),
                    'ratio' => $proportion * 100,
                    'metric_value' => $metrics[$centerId][$rule->basis_type],
                ];
            }
        }

        return $amounts;
    }

    /**
     * Get metrics for cost centers for a specific period
     */
    public function getMetricsForPeriod(array $costCenterIds, string $basisType, string $periodDate): array
    {
        $metrics = [];

        foreach ($costCenterIds as $centerId) {
            $metric = CostCenterMetric::where('cost_center_id', $centerId)
                ->where('metric_type', $basisType)
                ->where('period_date', $periodDate)
                ->first();

            if (!$metric) {
                throw new Exception("Metric '{$basisType}' not found for cost center ID: {$centerId} for period: {$periodDate}");
            }

            $metrics[$centerId] = [
                $basisType => $metric->metric_value,
            ];
        }

        return $metrics;
    }

    /**
     * Execute cost allocation
     */
    public function executeAllocation(
        CostAllocationRule $rule,
        float $totalAmount,
        string $periodStartDate,
        string $periodEndDate,
        ?string $executionDate = null,
        array $metrics = [],
        ?ChartOfAccount $sourceAccount = null,
        ?ChartOfAccount $targetAccount = null
    ): CostAllocationExecution {
        DB::beginTransaction();

        try {
            // Validate allocation
            $validation = $this->validateAllocation($rule);
            if (!$validation['valid']) {
                throw new Exception(implode(' ', $validation['errors']));
            }

            // Check if already executed for this period
            $existing = CostAllocationExecution::where('cost_allocation_rule_id', $rule->id)
                ->where('period_start_date', $periodStartDate)
                ->where('period_end_date', $periodEndDate)
                ->where('status', 'completed')
                ->first();

            if ($existing) {
                throw new Exception("Allocation already executed for this period. Execution ID: {$existing->id}");
            }

            // Get metrics if needed
            if ($rule->basis_type !== 'percentage') {
                $targetCenterIds = $rule->details->pluck('target_cost_center_id')->toArray();
                
                if (empty($metrics)) {
                    // Try to get from database
                    $metrics = $this->getMetricsForPeriod($targetCenterIds, $rule->basis_type, $periodEndDate);
                }
            }

            // Calculate amounts
            $amounts = $this->calculateAmounts($rule, $totalAmount, $metrics);

            // Create execution record
            $execution = CostAllocationExecution::create([
                'cost_allocation_rule_id' => $rule->id,
                'execution_date' => $executionDate ?? now()->toDateString(),
                'period_start_date' => $periodStartDate,
                'period_end_date' => $periodEndDate,
                'total_amount' => $totalAmount,
                'executed_by' => Auth::id(),
                'status' => 'pending',
            ]);

            try {
                // Get default accounts if not provided
                if (!$sourceAccount) {
                    $sourceAccount = $this->getDefaultExpenseAccount($rule->sourceCostCenter);
                }

                if (!$targetAccount) {
                    $targetAccount = $this->getDefaultExpenseAccount();
                }

                // Create journal entry
                // Get default fiscal year and accounting period
                $defaults = $this->getDefaultFiscalYearAndPeriod();
                
                $journalEntry = JournalEntry::create([
                    'entry_number' => JournalEntry::generateEntryNumber(),
                    'entry_date' => $executionDate ?? now()->toDateString(),
                    'reference' => 'ALLOC-' . $rule->id . '-' . $periodEndDate,
                    'description' => "Cost allocation: {$rule->name} - Period: {$periodStartDate} to {$periodEndDate}",
                    'total_debit' => $totalAmount,
                    'total_credit' => $totalAmount,
                    'status' => 'posted',
                    'created_by' => Auth::id(),
                    'posted_by' => Auth::id(),
                    'posted_at' => now(),
                    'fiscal_year_id' => $defaults['fiscal_year_id'],
                    'accounting_period_id' => $defaults['accounting_period_id'],
                ]);

                $lineNumber = 1;
                
                // Check if cost_center_id column exists
                $hasCostCenterColumn = Schema::hasColumn('journal_entry_lines', 'cost_center_id');

                // Create credit line for source cost center
                $sourceLineData = [
                    'journal_entry_id' => $journalEntry->id,
                    'chart_of_account_id' => $sourceAccount->id,
                    'debit_amount' => 0,
                    'credit_amount' => $totalAmount,
                    'description' => "Allocation from {$rule->sourceCostCenter->name}",
                    'line_number' => $lineNumber++,
                ];
                if ($hasCostCenterColumn) {
                    $sourceLineData['cost_center_id'] = $rule->source_cost_center_id;
                }
                JournalEntryLine::create($sourceLineData);

                // Create debit lines for target cost centers
                foreach ($amounts as $centerId => $data) {
                    $targetLineData = [
                        'journal_entry_id' => $journalEntry->id,
                        'chart_of_account_id' => $targetAccount->id,
                        'debit_amount' => $data['amount'],
                        'credit_amount' => 0,
                        'description' => "Allocation to " . CostCenter::find($centerId)->name . " ({$data['ratio']}%)",
                        'line_number' => $lineNumber++,
                    ];
                    if ($hasCostCenterColumn) {
                        $targetLineData['cost_center_id'] = $centerId;
                    }
                    JournalEntryLine::create($targetLineData);
                }

                // Update execution
                $execution->update([
                    'journal_entry_id' => $journalEntry->id,
                    'status' => 'completed',
                ]);

                // Add activity log
                activity()
                    ->causedBy(Auth::user())
                    ->performedOn($execution)
                    ->withProperties([
                        'rule_id' => $rule->id,
                        'rule_name' => $rule->name,
                        'total_amount' => $totalAmount,
                        'period' => "{$periodStartDate} to {$periodEndDate}",
                        'event' => 'Execute'
                    ])
                    ->useLog('Cost Allocation Executed')
                    ->log('Cost Allocation Executed');

                DB::commit();

                return $execution;

            } catch (Exception $e) {
                // Update execution with error
                $execution->update([
                    'status' => 'failed',
                    'error_message' => $e->getMessage(),
                ]);

                throw $e;
            }

        } catch (Exception $e) {
            DB::rollBack();
            Log::error('Cost allocation execution failed: ' . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Get default fiscal year and accounting period
     */
    protected function getDefaultFiscalYearAndPeriod(): array
    {
        $currentFiscalYearId = GeneralSetting::where('key', 'current_fiscal_year_id')->first()?->value;
        $currentAccountingPeriodId = GeneralSetting::where('key', 'current_accounting_period_id')->first()?->value;

        if (!$currentFiscalYearId) {
            throw new Exception('Current fiscal year is not configured in system settings.');
        }
        if (!$currentAccountingPeriodId) {
            throw new Exception('Current accounting period is not configured in system settings.');
        }

        $fiscalYear = FiscalYear::find($currentFiscalYearId);
        if (!$fiscalYear) {
            throw new Exception('The configured fiscal year does not exist.');
        }

        $accountingPeriod = AccountingPeriod::find($currentAccountingPeriodId);
        if (!$accountingPeriod) {
            throw new Exception('The configured accounting period does not exist.');
        }

        return [
            'fiscal_year_id' => $fiscalYear->id,
            'accounting_period_id' => $accountingPeriod->id,
        ];
    }

    /**
     * Get default expense account for a cost center
     */
    protected function getDefaultExpenseAccount(?CostCenter $costCenter = null): ChartOfAccount
    {
        // Try to find expense account
        $account = ChartOfAccount::whereHas('type', function ($query) {
            $query->where('name', 'like', '%expense%')
                  ->orWhere('name', 'like', '%مصروف%');
        })
        ->where('is_active', true)
        ->first();

        if (!$account) {
            throw new Exception('Default expense account not found. Please configure expense accounts in chart of accounts.');
        }

        return $account;
    }
}

