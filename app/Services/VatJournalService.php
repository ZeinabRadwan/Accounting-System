<?php

namespace App\Services;

use App\Models\AccountRoutingSetting;
use App\Models\ChartOfAccount;
use App\Models\JournalEntry;
use App\Models\JournalEntryLine;
use App\Models\VatRate;
use Exception;
use Illuminate\Support\Facades\DB;

class VatJournalService
{
    /**
     * Create VAT journal entry for sales
     */
    public function createSalesVatJournal($invoice, $vatAmount, $vatRateId)
    {
        try {
            DB::beginTransaction();

            $vatRate = VatRate::with('salesVatAccount')->find($vatRateId);

            if (! $vatRate) {
                throw new Exception('VAT rate not found');
            }

            // Get the sales VAT account from routing settings
            $salesVatAccount = $this->getSalesVatAccount();

            if (! $salesVatAccount) {
                throw new Exception('Sales VAT account not configured in routing settings');
            }

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'reference' => 'INV-VAT-'.$invoice->id,
                'date' => $invoice->date,
                'description' => "VAT on Invoice #{$invoice->invoice_no} - {$vatRate->name}",
                'status' => 'posted',
                'created_by' => auth()->id(),
            ]);

            // Create journal entry lines
            $this->createSalesVatJournalLines($journalEntry, $invoice, $vatAmount, $salesVatAccount);

            DB::commit();

            return $journalEntry;

        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Create VAT journal entry for purchases
     */
    public function createPurchaseVatJournal($purchase, $vatAmount, $vatRateId)
    {
        try {
            DB::beginTransaction();

            $vatRate = VatRate::with('purchaseVatAccount')->find($vatRateId);

            if (! $vatRate) {
                throw new Exception('VAT rate not found');
            }

            // Get the purchase VAT account from routing settings
            $purchaseVatAccount = $this->getPurchaseVatAccount();

            if (! $purchaseVatAccount) {
                throw new Exception('Purchase VAT account not configured in routing settings');
            }

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'reference' => 'PUR-VAT-'.$purchase->id,
                'date' => $purchase->date,
                'description' => "VAT on Purchase #{$purchase->purchase_no} - {$vatRate->name}",
                'status' => 'posted',
                'created_by' => auth()->id(),
            ]);

            // Create journal entry lines
            $this->createPurchaseVatJournalLines($journalEntry, $purchase, $vatAmount, $purchaseVatAccount);

            DB::commit();

            return $journalEntry;

        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Create journal entry lines for sales VAT
     */
    private function createSalesVatJournalLines($journalEntry, $invoice, $vatAmount, $salesVatAccount)
    {
        // Get accounts from routing settings
        $clientsAccount = $this->getAccountFromRouting('sales', 'clients_account');
        $salesAccount = $this->getAccountFromRouting('sales', 'sales_account');

        if (! $clientsAccount || ! $salesAccount) {
            throw new Exception('Required sales accounts not configured in routing settings');
        }

        // Line 1: Debit Clients Account (Accounts Receivable)
        JournalEntryLine::create([
            'journal_entry_id' => $journalEntry->id,
            'chart_of_account_id' => $clientsAccount->id,
            'debit' => $vatAmount,
            'credit' => 0,
            'description' => "VAT receivable on invoice #{$invoice->invoice_no}",
        ]);

        // Line 2: Credit Sales VAT Account
        JournalEntryLine::create([
            'journal_entry_id' => $journalEntry->id,
            'chart_of_account_id' => $salesVatAccount->id,
            'debit' => 0,
            'credit' => $vatAmount,
            'description' => "VAT payable on invoice #{$invoice->invoice_no}",
        ]);
    }

    /**
     * Create journal entry lines for purchase VAT
     */
    private function createPurchaseVatJournalLines($journalEntry, $purchase, $vatAmount, $purchaseVatAccount)
    {
        // Get accounts from routing settings
        $suppliersAccount = $this->getAccountFromRouting('purchase', 'suppliers_account');
        $purchaseAccount = $this->getAccountFromRouting('purchase', 'purchase_account');

        if (! $suppliersAccount || ! $purchaseAccount) {
            throw new Exception('Required purchase accounts not configured in routing settings');
        }

        // Line 1: Debit Purchase VAT Account
        JournalEntryLine::create([
            'journal_entry_id' => $journalEntry->id,
            'chart_of_account_id' => $purchaseVatAccount->id,
            'debit' => $vatAmount,
            'credit' => 0,
            'description' => "VAT receivable on purchase #{$purchase->purchase_no}",
        ]);

        // Line 2: Credit Suppliers Account (Accounts Payable)
        JournalEntryLine::create([
            'journal_entry_id' => $journalEntry->id,
            'chart_of_account_id' => $suppliersAccount->id,
            'debit' => 0,
            'credit' => $vatAmount,
            'description' => "VAT payable on purchase #{$purchase->purchase_no}",
        ]);
    }

    /**
     * Get sales VAT account from routing settings
     */
    private function getSalesVatAccount($branchId = null)
    {
        if (! $branchId) {
            $branchId = \Illuminate\Support\Facades\Auth::user()->default_branch_id ?? null;
        }

        $setting = AccountRoutingSetting::where('branch_id', $branchId)
            ->where('module', 'vat')
            ->where('setting_key', 'sales_vat_account')
            ->where('is_active', true)
            ->first();

        if (! $setting || ! $setting->main_account_id) {
            return null;
        }

        return ChartOfAccount::forBranch($branchId)->find($setting->main_account_id);
    }

    /**
     * Get purchase VAT account from routing settings
     */
    private function getPurchaseVatAccount($branchId = null)
    {
        if (! $branchId) {
            $branchId = \Illuminate\Support\Facades\Auth::user()->default_branch_id ?? null;
        }

        $setting = AccountRoutingSetting::where('branch_id', $branchId)
            ->where('module', 'vat')
            ->where('setting_key', 'purchase_vat_account')
            ->where('is_active', true)
            ->first();

        if (! $setting || ! $setting->main_account_id) {
            return null;
        }

        return ChartOfAccount::forBranch($branchId)->find($setting->main_account_id);
    }

    /**
     * Get account from routing settings by module and key
     */
    private function getAccountFromRouting($module, $settingKey, $branchId = null)
    {
        if (! $branchId) {
            $branchId = \Illuminate\Support\Facades\Auth::user()->default_branch_id ?? null;
        }

        $setting = AccountRoutingSetting::where('branch_id', $branchId)
            ->where('module', $module)
            ->where('setting_key', $settingKey)
            ->first();

        if (! $setting || ! $setting->main_account_id) {
            return null;
        }

        $branchId = \Illuminate\Support\Facades\Auth::user()->default_branch_id ?? null;

        return ChartOfAccount::forBranch($branchId)->find($setting->main_account_id);
    }

    /**
     * Validate VAT rate connections
     */
    public function validateVatRateConnections()
    {
        $vatRates = VatRate::all();
        $issues = [];

        foreach ($vatRates as $vatRate) {
            if (! $vatRate->salesVatAccount) {
                $issues[] = [
                    'vat_rate' => $vatRate->name,
                    'issue' => 'Sales VAT Account not connected',
                    'type' => 'warning',
                ];
            }

            if (! $vatRate->purchaseVatAccount) {
                $issues[] = [
                    'vat_rate' => $vatRate->name,
                    'issue' => 'Purchase VAT Account not connected',
                    'type' => 'warning',
                ];
            }
        }

        return $issues;
    }

    /**
     * Get VAT summary for reporting
     */
    public function getVatSummary($startDate, $endDate)
    {
        $salesVat = JournalEntry::whereHas('lines', function ($query) {
            $query->whereHas('chartOfAccount', function ($q) {
                $q->whereHas('type', function ($t) {
                    $t->where('name', 'Liability');
                });
            });
        })
            ->whereBetween('date', [$startDate, $endDate])
            ->where('description', 'like', '%VAT on Invoice%')
            ->with(['lines.chartOfAccount'])
            ->get();

        $purchaseVat = JournalEntry::whereHas('lines', function ($query) {
            $query->whereHas('chartOfAccount', function ($q) {
                $q->whereHas('type', function ($t) {
                    $t->where('name', 'Asset');
                });
            });
        })
            ->whereBetween('date', [$startDate, $endDate])
            ->where('description', 'like', '%VAT on Purchase%')
            ->with(['lines.chartOfAccount'])
            ->get();

        return [
            'sales_vat' => $salesVat,
            'purchase_vat' => $purchaseVat,
            'net_vat' => $this->calculateNetVat($salesVat, $purchaseVat),
        ];
    }

    /**
     * Calculate net VAT
     */
    private function calculateNetVat($salesVat, $purchaseVat)
    {
        $salesVatTotal = $salesVat->sum(function ($entry) {
            return $entry->lines->where('credit', '>', 0)->sum('credit');
        });

        $purchaseVatTotal = $purchaseVat->sum(function ($entry) {
            return $entry->lines->where('debit', '>', 0)->sum('debit');
        });

        return $salesVatTotal - $purchaseVatTotal;
    }
}
