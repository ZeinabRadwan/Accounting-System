<?php

namespace App\Services;

use App\Models\JournalEntry;
use App\Models\JournalEntryLine;
use App\Models\ChartOfAccount;
use App\Models\Invoice;
use App\Models\Purchase;
use App\Models\Expense;
use App\Models\InvoicePayment;
use App\Models\PurchasePayment;
use App\Models\LoanPayment;
use App\Models\NonInvoicePayment;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Exception;

class BusinessTransactionJournalService
{
    /**
     * Create journal entry for invoice sale
     */
    public function createInvoiceSaleJournal(Invoice $invoice, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Get default accounts from chart of accounts
            $accountsReceivableAccount = $this->getDefaultAccount('Accounts Receivable', 'Asset');
            $salesRevenueAccount = $this->getDefaultAccount('Sales Revenue', 'Revenue');
            
            if (!$accountsReceivableAccount || !$salesRevenueAccount) {
                throw new Exception('Required chart of accounts not found. Please set up default accounts.');
            }

            $totalAmount = $invoice->invoiceTotal();
            
            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $invoice->invoice_date,
                'reference' => $invoice->invoice_no,
                'description' => "Sale Invoice {$invoice->invoice_no}",
                'total_debit' => $totalAmount,
                'total_credit' => $totalAmount,
                'status' => 'posted', // Auto-post for system-generated entries
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => Invoice::class,
                'source_id' => $invoice->id,
            ]);

            // Create journal entry lines
            $this->createJournalEntryLine($journalEntry, $accountsReceivableAccount->id, $totalAmount, 0, 1, "Accounts Receivable for Invoice {$invoice->invoice_no}");
            $this->createJournalEntryLine($journalEntry, $salesRevenueAccount->id, 0, $totalAmount, 2, "Sales Revenue for Invoice {$invoice->invoice_no}");

            // Create bridge table record
            \App\Models\InvoiceJournal::create([
                'invoice_id' => $invoice->id,
                'journal_entry_id' => $journalEntry->id,
                'type' => 'sale'
            ]);

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Create journal entry for invoice payment
     */
    public function createInvoicePaymentJournal(Invoice $invoice, float $amount, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Get default accounts
            $accountsReceivableAccount = $this->getDefaultAccount('Accounts Receivable', 'Asset');
            $bankAccount = $this->getDefaultAccount('Bank Accounts', 'Asset');
            
            if (!$accountsReceivableAccount || !$bankAccount) {
                throw new Exception('Required chart of accounts not found.');
            }

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => now()->toDateString(),
                'reference' => $invoice->invoice_no . '-PAY-' . time(),
                'description' => "Payment received for Invoice {$invoice->invoice_no}",
                'total_debit' => $amount,
                'total_credit' => $amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => InvoicePayment::class,
                'source_id' => $invoice->id,
            ]);

            // Create journal entry lines
            $this->createJournalEntryLine($journalEntry, $bankAccount->id, $amount, 0, 1, "Cash/Bank receipt for Invoice {$invoice->invoice_no}");
            $this->createJournalEntryLine($journalEntry, $accountsReceivableAccount->id, 0, $amount, 2, "Reduction in Accounts Receivable for Invoice {$invoice->invoice_no}");

            // Create bridge table record
            \App\Models\InvoiceJournal::create([
                'invoice_id' => $invoice->id,
                'journal_entry_id' => $journalEntry->id,
                'type' => 'payment'
            ]);

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Create journal entry for purchase
     */
    public function createPurchaseJournal(Purchase $purchase, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Get default accounts
            $purchaseExpenseAccount = $this->getDefaultAccount('Purchase Expense', 'Expense');
            $accountsPayableAccount = $this->getDefaultAccount('Accounts Payable', 'Liability');
            
            if (!$purchaseExpenseAccount || !$accountsPayableAccount) {
                throw new Exception('Required chart of accounts not found. Please set up default accounts.');
            }

            $totalAmount = $purchase->purchaseTotal();
            
            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $purchase->purchase_date,
                'reference' => $purchase->purchase_no,
                'description' => "Purchase Order {$purchase->purchase_no}",
                'total_debit' => $totalAmount,
                'total_credit' => $totalAmount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => Purchase::class,
                'source_id' => $purchase->id,
            ]);

            // Create journal entry lines
            $this->createJournalEntryLine($journalEntry, $purchaseExpenseAccount->id, $totalAmount, 0, 1, "Purchase Expense for PO {$purchase->purchase_no}");
            $this->createJournalEntryLine($journalEntry, $accountsPayableAccount->id, 0, $totalAmount, 2, "Accounts Payable for PO {$purchase->purchase_no}");

            // Create bridge table record
            \App\Models\PurchaseJournal::create([
                'purchase_id' => $purchase->id,
                'journal_entry_id' => $journalEntry->id,
                'type' => 'purchase'
            ]);

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Create journal entry for purchase payment
     */
    public function createPurchasePaymentJournal(Purchase $purchase, float $amount, int $accountId, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Get default accounts
            $accountsPayableAccount = $this->getDefaultAccount('Accounts Payable', 'Liability');
            $bankAccount = ChartOfAccount::find($accountId);
            
            if (!$accountsPayableAccount || !$bankAccount) {
                throw new Exception('Required chart of accounts not found.');
            }

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => now()->toDateString(),
                'reference' => $purchase->purchase_no . '-PAY-' . time(),
                'description' => "Payment made for Purchase Order {$purchase->purchase_no}",
                'total_debit' => $amount,
                'total_credit' => $amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => PurchasePayment::class,
                'source_id' => $purchase->id,
            ]);

            // Create journal entry lines
            $this->createJournalEntryLine($journalEntry, $accountsPayableAccount->id, $amount, 0, 1, "Reduction in Accounts Payable for PO {$purchase->purchase_no}");
            $this->createJournalEntryLine($journalEntry, $bankAccount->id, 0, $amount, 2, "Cash/Bank payment for PO {$purchase->purchase_no}");

            // Create bridge table record
            \App\Models\PurchaseJournal::create([
                'purchase_id' => $purchase->id,
                'journal_entry_id' => $journalEntry->id,
                'type' => 'payment'
            ]);

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Create journal entry for expense
     */
    public function createExpenseJournal(Expense $expense, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Get default accounts
            $expenseAccount = $this->getDefaultAccount('Operating Expenses', 'Expense');
            $bankAccount = ChartOfAccount::find($expense->account_id);
            
            if (!$expenseAccount || !$bankAccount) {
                throw new Exception('Required chart of accounts not found.');
            }

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $expense->date,
                'reference' => $expense->id,
                'description' => "Expense: {$expense->reason}",
                'total_debit' => $expense->amount,
                'total_credit' => $expense->amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => Expense::class,
                'source_id' => $expense->id,
            ]);

            // Create journal entry lines
            $this->createJournalEntryLine($journalEntry, $expenseAccount->id, $expense->amount, 0, 1, "Expense: {$expense->reason}");
            $this->createJournalEntryLine($journalEntry, $bankAccount->id, 0, $expense->amount, 2, "Cash/Bank payment for expense");

            // Create bridge table record
            \App\Models\ExpenseJournal::create([
                'expense_id' => $expense->id,
                'journal_entry_id' => $journalEntry->id,
            ]);

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Create journal entry for non-invoice payment
     */
    public function createNonInvoicePaymentJournal(NonInvoicePayment $nonInvoicePayment, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Get default accounts
            $bankAccount = $this->getDefaultAccount('Bank Accounts', 'Asset');
            $otherIncomeAccount = $this->getDefaultAccount('Other Revenue', 'Revenue');
            
            if (!$bankAccount || !$otherIncomeAccount) {
                throw new Exception('Required chart of accounts not found.');
            }

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $nonInvoicePayment->date,
                'reference' => 'NIP-' . $nonInvoicePayment->id . '-PAY-' . time(),
                'description' => "Non-Invoice Payment: {$nonInvoicePayment->note}",
                'total_debit' => $nonInvoicePayment->amount,
                'total_credit' => $nonInvoicePayment->amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => NonInvoicePayment::class,
                'source_id' => $nonInvoicePayment->id,
            ]);

            // Create journal entry lines
            $this->createJournalEntryLine($journalEntry, $bankAccount->id, $nonInvoicePayment->amount, 0, 1, "Cash/Bank receipt for non-invoice payment");
            $this->createJournalEntryLine($journalEntry, $otherIncomeAccount->id, 0, $nonInvoicePayment->amount, 2, "Other Revenue from non-invoice payment");

            // Create bridge table record (you'll need to create this model and migration)
            // \App\Models\NonInvoicePaymentJournal::create([
            //     'non_invoice_payment_id' => $nonInvoicePayment->id,
            //     'journal_entry_id' => $journalEntry->id,
            // ]);

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Create journal entry for loan payment
     */
    public function createLoanPaymentJournal(LoanPayment $loanPayment, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Get default accounts
            $loanAccount = $this->getDefaultAccount('Loans Payable', 'Liability');
            $bankAccount = ChartOfAccount::find($loanPayment->account_id);
            
            if (!$loanAccount || !$bankAccount) {
                throw new Exception('Required chart of accounts not found.');
            }

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $loanPayment->payment_date,
                'reference' => $loanPayment->id,
                'description' => "Loan Payment: {$loanPayment->note}",
                'total_debit' => $loanPayment->amount,
                'total_credit' => $loanPayment->amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => LoanPayment::class,
                'source_id' => $loanPayment->id,
            ]);

            // Create journal entry lines
            $this->createJournalEntryLine($journalEntry, $loanAccount->id, $loanPayment->amount, 0, 1, "Reduction in Loans Payable");
            $this->createJournalEntryLine($journalEntry, $bankAccount->id, 0, $loanPayment->amount, 2, "Cash/Bank payment for loan");

            // Create bridge table record
            \App\Models\LoanJournal::create([
                'loan_payment_id' => $loanPayment->id,
                'journal_entry_id' => $journalEntry->id,
            ]);

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Create a journal entry line
     */
    private function createJournalEntryLine(JournalEntry $journalEntry, int $accountId, float $debitAmount, float $creditAmount, int $lineNumber, string $description): JournalEntryLine
    {
        return JournalEntryLine::create([
            'journal_entry_id' => $journalEntry->id,
            'chart_of_account_id' => $accountId,
            'debit_amount' => $debitAmount,
            'credit_amount' => $creditAmount,
            'description' => $description,
            'line_number' => $lineNumber,
        ]);
    }

    /**
     * Get default account by name and type
     */
    private function getDefaultAccount(string $accountName, string $typeName): ?ChartOfAccount
    {
        return ChartOfAccount::whereHas('type', function($query) use ($typeName) {
            $query->where('name', $typeName);
        })->where('name', 'like', "%{$accountName}%")
        ->where('is_active', true)
        ->first();
    }

    /**
     * Create a custom journal entry
     */
    public function createCustomJournalEntry(array $data, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Validate that debits equal credits
            $totalDebits = collect($data['lines'])->sum('debit_amount');
            $totalCredits = collect($data['lines'])->sum('credit_amount');
            
            if (abs($totalDebits - $totalCredits) > 0.01) {
                throw new Exception('Journal entry must be balanced. Total debits must equal total credits.');
            }

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $data['entry_date'],
                'reference' => $data['reference'] ?? null,
                'description' => $data['description'],
                'total_debit' => $totalDebits,
                'total_credit' => $totalCredits,
                'status' => $data['status'] ?? 'draft',
                'created_by' => $userId,
                'posted_by' => $data['status'] === 'posted' ? $userId : null,
                'posted_at' => $data['status'] === 'posted' ? now() : null,
                'source_type' => $data['source_type'] ?? null,
                'source_id' => $data['source_id'] ?? null,
            ]);

            // Create journal entry lines
            foreach ($data['lines'] as $index => $line) {
                $this->createJournalEntryLine(
                    $journalEntry,
                    $line['chart_of_account_id'],
                    $line['debit_amount'] ?? 0,
                    $line['credit_amount'] ?? 0,
                    $index + 1,
                    $line['description'] ?? ''
                );
            }

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }
}
