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
            
            // Try to get client-specific accounts receivable account
            $clientAccountsReceivableAccount = null;
            if ($invoice->client && $invoice->client->isChartOfAccountConnected()) {
                $clientAccountsReceivableAccount = $invoice->client->chartOfAccount;
            }
            
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
            $accountsReceivableAccountId = $clientAccountsReceivableAccount ? $clientAccountsReceivableAccount->id : $accountsReceivableAccount->id;
            $this->createJournalEntryLine($journalEntry, $accountsReceivableAccountId, $totalAmount, 0, 1, "Accounts Receivable for Invoice {$invoice->invoice_no}");
            
            // Use product-specific sales accounts if available, otherwise use default
            $salesAccountId = $salesRevenueAccount->id;
            $salesDescription = "Sales Revenue for Invoice {$invoice->invoice_no}";
            
            // Check if we have product-specific sales accounts
            $invoiceProducts = $invoice->invoiceProducts;
            if ($invoiceProducts && $invoiceProducts->count() > 0) {
                // Group by sales account to handle multiple products with different accounts
                $salesByAccount = [];
                foreach ($invoiceProducts as $invoiceProduct) {
                    $product = $invoiceProduct->product;
                    $accountId = $product && $product->sales_account_id ? $product->sales_account_id : $salesRevenueAccount->id;
                    $amount = $invoiceProduct->quantity * $invoiceProduct->price;
                    
                    if (!isset($salesByAccount[$accountId])) {
                        $salesByAccount[$accountId] = 0;
                    }
                    $salesByAccount[$accountId] += $amount;
                }
                
                // Create separate journal entry lines for each sales account
                foreach ($salesByAccount as $accountId => $amount) {
                    $this->createJournalEntryLine($journalEntry, $accountId, 0, $amount, 2, "Sales Revenue for Invoice {$invoice->invoice_no}");
                }
            } else {
                // Fallback to default sales account
                $this->createJournalEntryLine($journalEntry, $salesAccountId, 0, $totalAmount, 2, $salesDescription);
            }

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
            
            // Try to get client-specific accounts receivable account
            $clientAccountsReceivableAccount = null;
            if ($invoice->client && $invoice->client->isChartOfAccountConnected()) {
                $clientAccountsReceivableAccount = $invoice->client->chartOfAccount;
            }
            
            // Try to get the bank account from the invoice payment transaction
            $bankAccount = null;
            $cashbookAccount = null;
            $invoicePayment = $invoice->invoicePayments()->latest()->first();
            if ($invoicePayment && $invoicePayment->transaction_id) {
                $transaction = \App\Models\AccountTransaction::find($invoicePayment->transaction_id);
                if ($transaction && $transaction->account) {
                    $cashbookAccount = $transaction->account;
                    $bankAccount = $transaction->account->chartOfAccount;
                    
                    // Validate that the cashbook account is connected to a chart of account
                    if (!$cashbookAccount->isChartOfAccountConnected()) {
                        throw new Exception($cashbookAccount->getChartOfAccountValidationMessage());
                    }
                }
            }
            
            // Fall back to default bank account if no specific one found
            if (!$bankAccount) {
                $bankAccount = $this->getDefaultAccount('Bank Accounts', 'Asset');
            }
            
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
            $accountsReceivableAccountId = $clientAccountsReceivableAccount ? $clientAccountsReceivableAccount->id : $accountsReceivableAccount->id;
            $this->createJournalEntryLine($journalEntry, $accountsReceivableAccountId, 0, $amount, 2, "Reduction in Accounts Receivable for Invoice {$invoice->invoice_no}");

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
            
            // Try to get supplier-specific accounts payable account
            $supplierAccountsPayableAccount = null;
            if ($purchase->supplier && $purchase->supplier->isChartOfAccountConnected()) {
                $supplierAccountsPayableAccount = $purchase->supplier->chartOfAccount;
            }
            
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
            $accountsPayableAccountId = $supplierAccountsPayableAccount ? $supplierAccountsPayableAccount->id : $accountsPayableAccount->id;
            $this->createJournalEntryLine($journalEntry, $accountsPayableAccountId, 0, $totalAmount, 2, "Accounts Payable for PO {$purchase->purchase_no}");
            
            // Use product-specific purchase accounts if available, otherwise use default
            $purchaseAccountId = $purchaseExpenseAccount->id;
            $purchaseDescription = "Purchase Expense for PO {$purchase->purchase_no}";
            
            // Check if we have product-specific purchase accounts
            $purchaseProducts = $purchase->purchaseProducts;
            if ($purchaseProducts && $purchaseProducts->count() > 0) {
                // Group by purchase account to handle multiple products with different accounts
                $purchasesByAccount = [];
                foreach ($purchaseProducts as $purchaseProduct) {
                    $product = $purchaseProduct->product;
                    $accountId = $product && $product->purchase_account_id ? $product->purchase_account_id : $purchaseExpenseAccount->id;
                    $amount = $purchaseProduct->quantity * $purchaseProduct->unit_cost;
                    
                    if (!isset($purchasesByAccount[$accountId])) {
                        $purchasesByAccount[$accountId] = 0;
                    }
                    $purchasesByAccount[$accountId] += $amount;
                }
                
                // Create separate journal entry lines for each purchase account
                foreach ($purchasesByAccount as $accountId => $amount) {
                    $this->createJournalEntryLine($journalEntry, $accountId, $amount, 0, 1, "Purchase Expense for PO {$purchase->purchase_no}");
                }
            } else {
                // Fallback to default purchase account
                $this->createJournalEntryLine($journalEntry, $purchaseAccountId, $totalAmount, 0, 1, $purchaseDescription);
            }

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
    public function createPurchasePaymentJournal(Purchase $purchase, float $amount, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Get default accounts
            $accountsPayableAccount = $this->getDefaultAccount('Accounts Payable', 'Liability');
            
            // Try to get supplier-specific accounts payable account
            $supplierAccountsPayableAccount = null;
            if ($purchase->supplier && $purchase->supplier->isChartOfAccountConnected()) {
                $supplierAccountsPayableAccount = $purchase->supplier->chartOfAccount;
            }
            
            // Try to get the bank account from the purchase payment transaction
            $bankAccount = null;
            $cashbookAccount = null;
            $purchasePayment = $purchase->purchasePayments()->latest()->first();
            if ($purchasePayment && $purchasePayment->account_id) {
                $account = \App\Models\Account::find($purchasePayment->account_id);
                if ($account && $account->chartOfAccount) {
                    $cashbookAccount = $account;
                    $bankAccount = $account->chartOfAccount;
                    
                    // Validate that the cashbook account is connected to a chart of account
                    if (!$cashbookAccount->isChartOfAccountConnected()) {
                        throw new Exception($cashbookAccount->getChartOfAccountValidationMessage());
                    }
                }
            }
            
            // Fall back to default bank account if no specific one found
            if (!$bankAccount) {
                $bankAccount = $this->getDefaultAccount('Bank Accounts', 'Asset');
            }
            
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
            $accountsPayableAccountId = $supplierAccountsPayableAccount ? $supplierAccountsPayableAccount->id : $accountsPayableAccount->id;
            $this->createJournalEntryLine($journalEntry, $accountsPayableAccountId, $amount, 0, 1, "Reduction in Accounts Payable for PO {$purchase->purchase_no}");
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
            
            // Try to get the bank account from the expense's linked account
            $bankAccount = null;
            $cashbookAccount = null;
            if ($expense->account_id) {
                $account = \App\Models\Account::find($expense->account_id);
                if ($account && $account->chartOfAccount) {
                    $cashbookAccount = $account;
                    $bankAccount = $account->chartOfAccount;
                    
                    // Validate that the cashbook account is connected to a chart of account
                    if (!$cashbookAccount->isChartOfAccountConnected()) {
                        throw new Exception($cashbookAccount->getChartOfAccountValidationMessage());
                    }
                }
            }
            
            // Fall back to default bank account if no specific one found
            if (!$bankAccount) {
                $bankAccount = $this->getDefaultAccount('Bank Accounts', 'Asset');
            }
            
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
            $otherIncomeAccount = $this->getDefaultAccount('Other Revenue', 'Revenue');
            
            // Try to get the bank account from the non-invoice payment transaction
            $bankAccount = null;
            $cashbookAccount = null;
            if ($nonInvoicePayment->transaction_id) {
                $transaction = \App\Models\AccountTransaction::find($nonInvoicePayment->transaction_id);
                if ($transaction && $transaction->account) {
                    $cashbookAccount = $transaction->account;
                    $bankAccount = $transaction->account->chartOfAccount;
                    
                    // Validate that the cashbook account is connected to a chart of account
                    if (!$cashbookAccount->isChartOfAccountConnected()) {
                        throw new Exception($cashbookAccount->getChartOfAccountValidationMessage());
                    }
                }
            }
            
            // Fall back to default bank account if no specific one found
            if (!$bankAccount) {
                $bankAccount = $this->getDefaultAccount('Bank Accounts', 'Asset');
            }
            
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
            
            // Try to get the bank account from the loan payment's linked account
            $bankAccount = null;
            $cashbookAccount = null;
            if ($loanPayment->account_id) {
                $account = \App\Models\Account::find($loanPayment->account_id);
                if ($account && $account->chartOfAccount) {
                    $cashbookAccount = $account;
                    $bankAccount = $account->chartOfAccount;
                    
                    // Validate that the cashbook account is connected to a chart of account
                    if (!$cashbookAccount->isChartOfAccountConnected()) {
                        throw new Exception($cashbookAccount->getChartOfAccountValidationMessage());
                    }
                }
            }
            
            // Fall back to default bank account if no specific one found
            if (!$bankAccount) {
                $bankAccount = $this->getDefaultAccount('Bank Accounts', 'Asset');
            }
            
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

    /**
     * Create VAT journal entry for sales
     */
    public function createSalesVatJournal(float $vatAmount, string $reference, string $description, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Get VAT accounts
            $salesVatAccount = $this->getDefaultAccount('Sales VAT Payable', 'Liability');
            $accountsReceivableAccount = $this->getDefaultAccount('Accounts Receivable', 'Asset');
            
            if (!$salesVatAccount || !$accountsReceivableAccount) {
                throw new Exception('Required VAT chart of accounts not found. Please ensure Sales VAT Payable and Accounts Receivable accounts exist.');
            }

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => now(),
                'reference' => $reference,
                'description' => $description,
                'total_debit' => $vatAmount,
                'total_credit' => $vatAmount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => 'VAT',
                'source_id' => null,
            ]);

            // Create journal entry lines
            $this->createJournalEntryLine($journalEntry, $accountsReceivableAccount->id, $vatAmount, 0, 1, "VAT Receivable - {$description}");
            $this->createJournalEntryLine($journalEntry, $salesVatAccount->id, 0, $vatAmount, 2, "VAT Payable - {$description}");

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
    public function createPurchaseVatJournal(float $vatAmount, string $reference, string $description, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Get VAT accounts
            $purchaseVatAccount = $this->getDefaultAccount('Purchase VAT Receivable', 'Asset');
            $accountsPayableAccount = $this->getDefaultAccount('Accounts Payable', 'Liability');
            
            if (!$purchaseVatAccount || !$accountsPayableAccount) {
                throw new Exception('Required VAT chart of accounts not found. Please ensure Purchase VAT Receivable and Accounts Payable accounts exist.');
            }

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => now(),
                'reference' => $reference,
                'description' => $description,
                'total_debit' => $vatAmount,
                'total_credit' => $vatAmount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => 'VAT',
                'source_id' => null,
            ]);

            // Create journal entry lines
            $this->createJournalEntryLine($journalEntry, $purchaseVatAccount->id, $vatAmount, 0, 1, "VAT Receivable - {$description}");
            $this->createJournalEntryLine($journalEntry, $accountsPayableAccount->id, 0, $vatAmount, 2, "VAT Payable - {$description}");

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Get VAT account by VAT rate
     */
    public function getVatAccountByRate(\App\Models\VatRate $vatRate, string $type = 'sales'): ?ChartOfAccount
    {
        if ($type === 'sales') {
            return $vatRate->getSalesVatAccount();
        } else {
            return $vatRate->getPurchaseVatAccount();
        }
    }

    /**
     * Validate VAT rate chart of account connections
     */
    public function validateVatRateConnections(\App\Models\VatRate $vatRate): bool
    {
        return $vatRate->hasChartOfAccountConnections();
    }
}
