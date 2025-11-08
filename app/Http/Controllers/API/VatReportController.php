<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\JournalEntry;
use App\Models\VatRate;
use App\Models\AccountRoutingSetting;
use App\Models\ChartOfAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class VatReportController extends Controller
{
    /**
     * Generate VAT report
     */
    public function generateReport(Request $request)
    {
        try {
            $request->validate([
                'startDate' => 'required|date',
                'endDate' => 'required|date|after_or_equal:startDate',
                'vatRateId' => 'nullable|exists:vat_rates,id'
            ]);

            $startDate = $request->startDate;
            $endDate = $request->endDate;
            $vatRateId = $request->vatRateId;

            // Get VAT accounts from routing settings
            $salesVatAccount = $this->getVatAccountFromRouting('vat', 'sales_vat_account');
            $purchaseVatAccount = $this->getVatAccountFromRouting('vat', 'purchase_vat_account');

            if (!$salesVatAccount || !$purchaseVatAccount) {
                return $this->responseWithError('VAT accounts not configured in routing settings');
            }

            // Get sales VAT transactions
            $salesVatTransactions = $this->getSalesVatTransactions($startDate, $endDate, $vatRateId, $salesVatAccount);
            
            // Get purchase VAT transactions
            $purchaseVatTransactions = $this->getPurchaseVatTransactions($startDate, $endDate, $vatRateId, $purchaseVatAccount);

            // Calculate totals
            $salesVatTotal = $this->calculateVatTotal($salesVatTransactions);
            $purchaseVatTotal = $this->calculateVatTotal($purchaseVatTransactions);
            $netVat = $salesVatTotal - $purchaseVatTotal;

            // Generate VAT rate breakdown
            $vatRateBreakdown = $this->generateVatRateBreakdown($salesVatTransactions, $purchaseVatTransactions);

            $summary = [
                'salesVatTotal' => $salesVatTotal,
                'purchaseVatTotal' => $purchaseVatTotal,
                'netVat' => $netVat,
                'period' => [
                    'start' => $startDate,
                    'end' => $endDate
                ]
            ];

            return $this->responseWithSuccess('VAT report generated successfully', [
                'summary' => $summary,
                'salesVatTransactions' => $salesVatTransactions,
                'purchaseVatTransactions' => $purchaseVatTransactions,
                'vatRateBreakdown' => $vatRateBreakdown
            ]);

        } catch (\Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get sales VAT transactions
     */
    private function getSalesVatTransactions($startDate, $endDate, $vatRateId, $salesVatAccount)
    {
        $query = JournalEntry::whereHas('lines', function ($query) use ($salesVatAccount) {
                $query->where('chart_of_account_id', $salesVatAccount->id)
                      ->where('credit', '>', 0);
            })
            ->whereBetween('date', [$startDate, $endDate])
            ->where('description', 'like', '%VAT on Invoice%')
            ->with(['lines.chartOfAccount.type']);

        if ($vatRateId) {
            $query->where('description', 'like', '%' . VatRate::find($vatRateId)->name . '%');
        }

        return $query->orderBy('date', 'desc')->get();
    }

    /**
     * Get purchase VAT transactions
     */
    private function getPurchaseVatTransactions($startDate, $endDate, $vatRateId, $purchaseVatAccount)
    {
        $query = JournalEntry::whereHas('lines', function ($query) use ($purchaseVatAccount) {
                $query->where('chart_of_account_id', $purchaseVatAccount->id)
                      ->where('debit', '>', 0);
            })
            ->whereBetween('date', [$startDate, $endDate])
            ->where('description', 'like', '%VAT on Purchase%')
            ->with(['lines.chartOfAccount.type']);

        if ($vatRateId) {
            $query->where('description', 'like', '%' . VatRate::find($vatRateId)->name . '%');
        }

        return $query->orderBy('date', 'desc')->get();
    }

    /**
     * Calculate VAT total from transactions
     */
    private function calculateVatTotal($transactions)
    {
        return $transactions->sum(function ($transaction) {
            return $transaction->lines->sum(function ($line) {
                return $line->credit > 0 ? $line->credit : $line->debit;
            });
        });
    }

    /**
     * Generate VAT rate breakdown
     */
    private function generateVatRateBreakdown($salesTransactions, $purchaseTransactions)
    {
        $salesBreakdown = $this->getVatRateBreakdown($salesTransactions, 'sales');
        $purchaseBreakdown = $this->getVatRateBreakdown($purchaseTransactions, 'purchase');

        return [
            'sales' => $salesBreakdown,
            'purchase' => $purchaseBreakdown
        ];
    }

    /**
     * Get VAT rate breakdown for specific transaction type
     */
    private function getVatRateBreakdown($transactions, $type)
    {
        $breakdown = [];

        foreach ($transactions as $transaction) {
            // Extract VAT rate from description
            $vatRate = $this->extractVatRateFromDescription($transaction->description);
            
            if ($vatRate) {
                $amount = $this->getTransactionVatAmount($transaction);
                
                if (!isset($breakdown[$vatRate])) {
                    $breakdown[$vatRate] = [
                        'rate' => $vatRate,
                        'amount' => 0,
                        'count' => 0
                    ];
                }
                
                $breakdown[$vatRate]['amount'] += $amount;
                $breakdown[$vatRate]['count']++;
            }
        }

        // Sort by rate and convert to array
        ksort($breakdown);
        return array_values($breakdown);
    }

    /**
     * Extract VAT rate from transaction description
     */
    private function extractVatRateFromDescription($description)
    {
        // Look for VAT rate patterns in description
        if (preg_match('/(\d+(?:\.\d+)?)%/', $description, $matches)) {
            return (float) $matches[1];
        }

        // Try to match VAT rate names
        $vatRates = VatRate::all();
        foreach ($vatRates as $vatRate) {
            if (strpos($description, $vatRate->name) !== false) {
                return (float) $vatRate->rate;
            }
        }

        return null;
    }

    /**
     * Get VAT amount from transaction
     */
    private function getTransactionVatAmount($transaction)
    {
        return $transaction->lines->sum(function ($line) {
            return $line->credit > 0 ? $line->credit : $line->debit;
        });
    }

    /**
     * Get VAT account from routing settings
     */
    private function getVatAccountFromRouting($module, $settingKey)
    {
        $setting = AccountRoutingSetting::where('module', $module)
            ->where('setting_key', $settingKey)
            ->first();

        if (!$setting || !$setting->parent_account_id) {
            return null;
        }

        $branchId = Auth::user()->default_branch_id ?? null;
        return ChartOfAccount::forBranch($branchId)->find($setting->parent_account_id);
    }

    /**
     * Get VAT summary for dashboard
     */
    public function getVatSummary()
    {
        try {
            $currentMonth = Carbon::now()->startOfMonth();
            $previousMonth = Carbon::now()->subMonth()->startOfMonth();

            // Get current month VAT
            $currentMonthVat = $this->getMonthlyVatSummary($currentMonth);
            
            // Get previous month VAT
            $previousMonthVat = $this->getMonthlyVatSummary($previousMonth);

            // Calculate percentage change
            $salesVatChange = $this->calculatePercentageChange(
                $previousMonthVat['salesVatTotal'],
                $currentMonthVat['salesVatTotal']
            );

            $purchaseVatChange = $this->calculatePercentageChange(
                $previousMonthVat['purchaseVatTotal'],
                $currentMonthVat['purchaseVatTotal']
            );

            $netVatChange = $this->calculatePercentageChange(
                $previousMonthVat['netVat'],
                $currentMonthVat['netVat']
            );

            return $this->responseWithSuccess('VAT summary retrieved successfully', [
                'currentMonth' => $currentMonthVat,
                'previousMonth' => $previousMonthVat,
                'changes' => [
                    'salesVat' => $salesVatChange,
                    'purchaseVat' => $purchaseVatChange,
                    'netVat' => $netVatChange
                ]
            ]);

        } catch (\Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get monthly VAT summary
     */
    private function getMonthlyVatSummary($monthStart)
    {
        $monthEnd = $monthStart->copy()->endOfMonth();

        $salesVatAccount = $this->getVatAccountFromRouting('vat', 'sales_vat_account');
        $purchaseVatAccount = $this->getVatAccountFromRouting('vat', 'purchase_vat_account');

        if (!$salesVatAccount || !$purchaseVatAccount) {
            return [
                'salesVatTotal' => 0,
                'purchaseVatTotal' => 0,
                'netVat' => 0
            ];
        }

        $salesVatTotal = JournalEntry::whereHas('lines', function ($query) use ($salesVatAccount) {
                $query->where('chart_of_account_id', $salesVatAccount->id)
                      ->where('credit', '>', 0);
            })
            ->whereBetween('date', [$monthStart, $monthEnd])
            ->where('description', 'like', '%VAT on Invoice%')
            ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
            ->where('chart_of_account_id', $salesVatAccount->id)
            ->sum('credit');

        $purchaseVatTotal = JournalEntry::whereHas('lines', function ($query) use ($purchaseVatAccount) {
                $query->where('chart_of_account_id', $purchaseVatAccount->id)
                      ->where('debit', '>', 0);
            })
            ->whereBetween('date', [$monthStart, $monthEnd])
            ->where('description', 'like', '%VAT on Purchase%')
            ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
            ->where('chart_of_account_id', $purchaseVatAccount->id)
            ->sum('debit');

        return [
            'salesVatTotal' => $salesVatTotal,
            'purchaseVatTotal' => $purchaseVatTotal,
            'netVat' => $salesVatTotal - $purchaseVatTotal
        ];
    }

    /**
     * Calculate percentage change
     */
    private function calculatePercentageChange($oldValue, $newValue)
    {
        if ($oldValue == 0) {
            return $newValue > 0 ? 100 : 0;
        }

        return round((($newValue - $oldValue) / $oldValue) * 100, 2);
    }
}
