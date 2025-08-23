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
use App\Models\AccountRoutingSetting;
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
            // Validate client has chart of account
            if (!$invoice->client || !$invoice->client->isChartOfAccountConnected()) {
                throw new Exception('Client must have a Chart of Account assigned for journal entries.');
            }

            // Validate all products have sales accounts
            $invoiceProducts = $invoice->invoiceProducts;
            if ($invoiceProducts && $invoiceProducts->count() > 0) {
                foreach ($invoiceProducts as $invoiceProduct) {
                    if (!$invoiceProduct->product || !$invoiceProduct->product->hasSalesAccount()) {
                        throw new Exception('Product ' . ($invoiceProduct->product->name ?? 'Unknown') . ' must have a Sales Account assigned.');
                    }
                }
            }

            // Get client-specific accounts receivable account
            $clientAccountsReceivableAccount = $invoice->client->chartOfAccount;
            
            if (!$clientAccountsReceivableAccount) {
                throw new Exception('Client Chart of Account not found.');
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
            $this->createJournalEntryLine($journalEntry, $clientAccountsReceivableAccount->id, $totalAmount, 0, 1, "Accounts Receivable for Invoice {$invoice->invoice_no}");
            
            // Group by sales account to handle multiple products with different accounts
            $salesByAccount = [];
            $totalDiscountAmount = 0;
            
            foreach ($invoiceProducts as $invoiceProduct) {
                $product = $invoiceProduct->product;
                $accountId = $product->sales_account_id;
                
                // Calculate original amount (before discount)
                $originalAmount = $invoiceProduct->sale_price * $invoiceProduct->quantity;
                
                // Add to sales account
                if (!isset($salesByAccount[$accountId])) {
                    $salesByAccount[$accountId] = 0;
                }
                $salesByAccount[$accountId] += $originalAmount;
                
                // Track discount amount
                if ($invoiceProduct->discount_amount > 0) {
                    $totalDiscountAmount += $invoiceProduct->discount_amount;
                }
            }
            
            // Create separate journal entry lines for each sales account (full amount before discount)
            foreach ($salesByAccount as $accountId => $amount) {
                $this->createJournalEntryLine($journalEntry, $accountId, 0, $amount, 2, "Sales Revenue for Invoice {$invoice->invoice_no}");
            }
            
            // Create discount journal entry if there are any discounts
            if ($totalDiscountAmount > 0) {
                $discountAccount = $this->getDiscountAllowedAccount();
                if ($discountAccount) {
                    $this->createJournalEntryLine($journalEntry, $discountAccount->id, $totalDiscountAmount, 0, 3, "Sales Discount for Invoice {$invoice->invoice_no}");
                } else {
                    throw new Exception('Discount Allowed account must be configured in account routing settings to process discounts.');
                }
            }

            // Create VAT journal entry if applicable
            if ($invoice->tax_id) {
                $vatAmount = $invoice->taxAmount();
                if ($vatAmount > 0) {
                    $this->createVatJournalEntry($journalEntry, $invoice, $vatAmount, $userId, 'sales');
                }
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
            // Validate client has chart of account
            if (!$invoice->client || !$invoice->client->isChartOfAccountConnected()) {
                throw new Exception('Client must have a Chart of Account assigned for journal entries.');
            }

            // Get client-specific accounts receivable account
            $clientAccountsReceivableAccount = $invoice->client->chartOfAccount;
            
            // Get the bank account from the invoice payment transaction
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
            
            // If no specific bank account found, throw error - we need a specific account
            if (!$bankAccount) {
                throw new Exception('Payment method must be connected to a Chart of Account for journal entries.');
            }
            
            if (!$clientAccountsReceivableAccount) {
                throw new Exception('Client Chart of Account not found.');
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
            $this->createJournalEntryLine($journalEntry, $clientAccountsReceivableAccount->id, 0, $amount, 2, "Reduction in Accounts Receivable for Invoice {$invoice->invoice_no}");

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
            // Validate supplier has chart of account
            if (!$purchase->supplier || !$purchase->supplier->isChartOfAccountConnected()) {
                throw new Exception('Supplier must have a Chart of Account assigned for journal entries.');
            }

            // Validate all products have purchase accounts
            $purchaseProducts = $purchase->purchaseProducts;
            if ($purchaseProducts && $purchaseProducts->count() > 0) {
                foreach ($purchaseProducts as $purchaseProduct) {
                    if (!$purchaseProduct->product || !$purchaseProduct->product->hasPurchaseAccount()) {
                        throw new Exception('Product ' . ($purchaseProduct->product->name ?? 'Unknown') . ' must have a Purchase Account assigned.');
                    }
                }
            }

            // Get supplier-specific accounts payable account
            $supplierAccountsPayableAccount = $purchase->supplier->chartOfAccount;
            
            if (!$supplierAccountsPayableAccount) {
                throw new Exception('Supplier Chart of Account not found.');
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

            // Group by purchase account to handle multiple products with different accounts
            $purchaseByAccount = [];
            foreach ($purchaseProducts as $purchaseProduct) {
                $product = $purchaseProduct->product;
                $accountId = $product->purchase_account_id;
                $amount = $purchaseProduct->getFinalTotalAttribute(); // Use amount after discount
                
                if (!isset($purchaseByAccount[$accountId])) {
                    $purchaseByAccount[$accountId] = 0;
                }
                $purchaseByAccount[$accountId] += $amount;
            }
            
            // Create separate journal entry lines for each purchase account
            foreach ($purchaseByAccount as $accountId => $amount) {
                $this->createJournalEntryLine($journalEntry, $accountId, $amount, 0, 1, "Purchase Expense for PO {$purchase->purchase_no}");
            }

            // Create VAT journal entry if applicable
            if ($purchase->tax_id) {
                $vatAmount = $purchase->taxAmount();
                if ($vatAmount > 0) {
                    $this->createVatJournalEntry($journalEntry, $purchase, $vatAmount, $userId, 'purchase');
                }
            }

            // Create accounts payable line
            $this->createJournalEntryLine($journalEntry, $supplierAccountsPayableAccount->id, 0, $totalAmount, count($purchaseByAccount) + 2, "Accounts Payable for PO {$purchase->purchase_no}");

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
            // Validate supplier has chart of account
            if (!$purchase->supplier || !$purchase->supplier->isChartOfAccountConnected()) {
                throw new Exception('Supplier must have a Chart of Account assigned for journal entries.');
            }

            // Get supplier-specific accounts payable account
            $supplierAccountsPayableAccount = $purchase->supplier->chartOfAccount;
            
            // Get the bank account from the purchase payment transaction
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
            
            // If no specific bank account found, throw error - we need a specific account
            if (!$bankAccount) {
                throw new Exception('Payment method must be connected to a Chart of Account for journal entries.');
            }
            
            if (!$supplierAccountsPayableAccount) {
                throw new Exception('Supplier Chart of Account not found.');
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
            $this->createJournalEntryLine($journalEntry, $supplierAccountsPayableAccount->id, $amount, 0, 1, "Reduction in Accounts Payable for PO {$purchase->purchase_no}");
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
     * Create VAT journal entry lines for the main journal entry
     */
    private function createVatJournalEntry(JournalEntry $journalEntry, $source, float $vatAmount, int $userId, string $type): void
    {
        if ($type === 'sales') {
            // For sales VAT, debit VAT receivable, credit VAT payable
            $vatReceivableAccount = $this->getDefaultAccount('VAT Receivable', 'Asset');
            $vatPayableAccount = $this->getDefaultAccount('Sales VAT Payable', 'Liability');
            
            if ($vatReceivableAccount && $vatPayableAccount) {
                $reference = $source->invoice_no ?? 'Unknown';
                $this->createJournalEntryLine($journalEntry, $vatReceivableAccount->id, $vatAmount, 0, 3, "VAT Receivable for {$reference}");
                $this->createJournalEntryLine($journalEntry, $vatPayableAccount->id, 0, $vatAmount, 4, "VAT Payable for {$reference}");
            }
        } elseif ($type === 'purchase') {
            // For purchase VAT, debit VAT receivable, credit accounts payable
            $vatReceivableAccount = $this->getDefaultAccount('Purchase VAT Receivable', 'Asset');
            
            if ($vatReceivableAccount) {
                $reference = $source->purchase_no ?? 'Unknown';
                $this->createJournalEntryLine($journalEntry, $vatReceivableAccount->id, $vatAmount, 0, count($journalEntry->lines) + 1, "VAT Receivable for {$reference}");
            }
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

    /**
     * Get discount allowed account from routing settings
     */
    private function getDiscountAllowedAccount(): ?ChartOfAccount
    {
        $setting = AccountRoutingSetting::where('module', 'sales')
            ->where('setting_key', 'discount_allowed_account')
            ->first();

        if (!$setting || !$setting->parent_account_id) {
            return null;
        }

        return ChartOfAccount::find($setting->parent_account_id);
    }
}
