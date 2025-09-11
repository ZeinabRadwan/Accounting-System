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
use Illuminate\Support\Facades\Log;
use Exception;
use App\Models\AccountTransaction;
use App\Models\BalanceTansfer;

class BusinessTransactionJournalService
{
    /**
     * Create journal entry for invoice sale
     */
    public function createInvoiceSaleJournal(Invoice $invoice, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Check if journal entry already exists for this invoice
            $existingJournalEntry = JournalEntry::where('reference', $invoice->invoice_no)
                ->where('source_type', Invoice::class)
                ->where('source_id', $invoice->id)
                ->first();
                
            if ($existingJournalEntry) {
                Log::info("Journal entry already exists for invoice {$invoice->invoice_no} with ID: {$existingJournalEntry->id}");
                DB::rollBack();
                return $existingJournalEntry;
            }
            
            // Validate client has chart of account
            if (!$invoice->client || !$invoice->client->isChartOfAccountConnected()) {
                throw new Exception('Client must have a Chart of Account assigned for journal entries.');
            }

            $totalDiscountAmount = 0;
         
            // Validate all products have sales accounts and VAT accounts
            $invoiceProducts = $invoice->invoiceProducts;
            $vatAccountsByProduct = []; // Store VAT accounts for each product
            
            if ($invoiceProducts && $invoiceProducts->count() > 0) {
                foreach ($invoiceProducts as $invoiceProduct) {
                    if (!$invoiceProduct->product || !$invoiceProduct->product->hasSalesAccount()) {
                        throw new Exception('Product ' . ($invoiceProduct->product->name ?? 'Unknown') . ' must have a Sales Account assigned.');
                    }
                    
                    // Validate VAT account from product's tax rate (with fallback to default account)
                    if($invoiceProduct->product && $invoiceProduct->product->productTax){
                        $vatAccount = $invoiceProduct->product->productTax->getSalesVatAccount();
                        if (!$vatAccount) {
                            throw new Exception('Product "' . $invoiceProduct->product->name . '" must have a Sales VAT Account assigned for journal entries. Please configure the VAT rate "' . $invoiceProduct->product->productTax->name . '" with a Sales VAT Account or ensure the default "Sales VAT Payable" account exists.');
                        }
                        
                        // Store VAT account for this product
                        $vatAccountsByProduct[$invoiceProduct->product_id] = $vatAccount;
                    }


                    if ($invoiceProduct->discount_amount > 0) {
                        $totalDiscountAmount += $invoiceProduct->discount_amount;
                    }


                }
            }

            // Get client-specific accounts receivable account
            $clientAccountsReceivableAccount = $invoice->client->chartOfAccount;
            
            if (!$clientAccountsReceivableAccount) {
                throw new Exception('Client Chart of Account not found.');
            }


            if ($totalDiscountAmount > 0) {
                $discountAccount = $this->getDiscountAllowedAccount();
                if (!$discountAccount) {
                    throw new Exception('Discount Allowed account must be configured in account routing settings to process discounts.');
                }
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

            // Line 1: Debit to Client's Accounts Receivable
            $this->createJournalEntryLine($journalEntry, $clientAccountsReceivableAccount->id, $totalAmount, 0, 1, " ");
           
          
            $lineNumber = 2;



            if ($totalDiscountAmount > 0) {
                $discountAccount = $this->getDiscountAllowedAccount();
                if ($discountAccount) {
                    $this->createJournalEntryLine($journalEntry, $discountAccount->id, $totalDiscountAmount, 0, $lineNumber, " ");
                    $lineNumber++;
                } else {
                    throw new Exception('Discount Allowed account must be configured in account routing settings to process discounts.');
                }
            }


            
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
                $salesByAccount[$accountId] += $originalAmount ;
                
                // Track discount amount
                if ($invoiceProduct->discount_amount > 0) {
                    $totalDiscountAmount += $invoiceProduct->discount_amount;
                }
            }
            
            // Create separate journal entry lines for each sales account (full amount before discount)
            foreach ($salesByAccount as $accountId => $amount) {
                $this->createJournalEntryLine($journalEntry, $accountId, 0, $amount, $lineNumber, "Sales Revenue for Invoice {$invoice->invoice_no}");
                $lineNumber++;
            }
            


 
            // Group by VAT account to handle multiple products with different VAT accounts

            $vatByAccount = [];
           
            
            foreach ($invoiceProducts as $invoiceProduct) {
                if (isset($vatAccountsByProduct[$invoiceProduct->product_id])) {
                    $vatAccountId = $vatAccountsByProduct[$invoiceProduct->product_id]->id;
                    $productVatAmount = $invoiceProduct->tax_amount; // Use the tax amount from invoice product
                   
                    if ($productVatAmount > 0) {
                        if (!isset($vatByAccount[$vatAccountId])) {
                            $vatByAccount[$vatAccountId] = 0;
                        }
                        $vatByAccount[$vatAccountId] += $productVatAmount;
                    }
                }
            }
            
            // Create VAT journal entries (grouped by account)
            foreach ($vatByAccount as $vatAccountId => $totalVatAmount) {
              
                $this->createJournalEntryLine($journalEntry, $vatAccountId, 0, $totalVatAmount, $lineNumber, "VAT Payable for Invoice {$invoice->invoice_no}");
                $lineNumber++;
            }






            // Create discount journal entry if there are any discounts
         
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
    public function createInvoicePaymentJournal(AccountTransaction $transaction, Invoice $invoice, float $amount, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Generate unique reference for payment
            $paymentReference = $invoice->invoice_no . '-PAY-' . time();
            
            // Check if journal entry already exists for this payment (very unlikely but safe)
            $existingJournalEntry = JournalEntry::where('reference', $paymentReference)
                ->where('source_type', InvoicePayment::class)
                ->where('source_id', $invoice->id)
                ->first();
                
            if ($existingJournalEntry) {
                Log::info("Journal entry already exists for invoice payment {$paymentReference} with ID: {$existingJournalEntry->id}");
                DB::rollBack();
                return $existingJournalEntry;
            }
            
            // Validate client has chart of account
            if (!$invoice->client || !$invoice->client->isChartOfAccountConnected()) {
                throw new Exception('Client must have a Chart of Account assigned for journal entries.');
            }

            // Get client-specific accounts receivable account
            $clientAccountsReceivableAccount = $invoice->client->chartOfAccount;
            $bankAccount = $transaction->account->chartOfAccount;
            
            // Get the bank account from the invoice payment transaction
            // $bankAccount = null;
            // $cashbookAccount = null;
            // $invoicePayment = $invoice->invoicePayments()->latest()->first();
            // if ($invoicePayment && $invoicePayment->transaction_id) {
            //     $transaction = \App\Models\AccountTransaction::find($invoicePayment->transaction_id);
            //     if ($transaction && $transaction->account) {
                    // $cashbookAccount = $transaction->account;
                   
                    
            //         // Validate that the cashbook account is connected to a chart of account
            //         if (!$cashbookAccount->isChartOfAccountConnected()) {
            //             throw new Exception($cashbookAccount->getChartOfAccountValidationMessage());
            //         }
            //     }
            // }
            
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
                'reference' => $paymentReference,
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
            $this->createJournalEntryLine($journalEntry, $bankAccount->id, $amount, 0, 1, " ");
            $this->createJournalEntryLine($journalEntry, $clientAccountsReceivableAccount->id, 0, $amount, 2, " ");

            // Create bridge table record
            \App\Models\InvoiceJournal::create([
                'invoice_id' => $invoice->id,
                'journal_entry_id' => $journalEntry->id,
                'type' => 'payment'
            ]);

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            dd($e);
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
            // Check if journal entry already exists for this purchase
            $existingJournalEntry = JournalEntry::where('reference', $purchase->purchase_no)
                ->where('source_type', Purchase::class)
                ->where('source_id', $purchase->id)
                ->first();
                
            if ($existingJournalEntry) {
                Log::info("Journal entry already exists for purchase {$purchase->purchase_no} with ID: {$existingJournalEntry->id}");
                DB::rollBack();
                return $existingJournalEntry;
            }
            
            // Validate supplier has chart of account
            if (!$purchase->supplier || !$purchase->supplier->isChartOfAccountConnected()) {
                throw new Exception('Supplier must have a Chart of Account assigned for journal entries.');
            }

            // Get supplier-specific accounts payable account
            $supplierAccountsPayableAccount = $purchase->supplier->chartOfAccount;
            
            if (!$supplierAccountsPayableAccount) {
                throw new Exception('Supplier Chart of Account not found.');
            }

            // Get purchase products
            $purchaseProducts = $purchase->purchaseProducts;
            if (!$purchaseProducts || $purchaseProducts->count() === 0) {
                throw new Exception('No products found for this purchase.');
            }
            
            Log::info("Found {$purchaseProducts->count()} purchase products for PO {$purchase->purchase_no}");

            // Validate all products have purchase accounts (including fallback)
            foreach ($purchaseProducts as $purchaseProduct) {
                if (!$purchaseProduct->product || !$purchaseProduct->product->hasPurchaseAccountWithFallback()) {
                    throw new Exception('Product ' . ($purchaseProduct->product->name ?? 'Unknown') . ' must have a Purchase Account assigned or a default Product Purchase Account configured in routing settings.');
                }
            }

            // Calculate totals for proper journal entry
            $totalDebit = 0;
            $totalCredit = 0;
            
            // Calculate purchase amounts before discount and VAT
            $purchaseExpensesByAccount = [];
            $totalDiscountAmount = 0;
            $totalVatAmount = 0;
            
            foreach ($purchaseProducts as $purchaseProduct) {
                $purchaseAccount = $purchaseProduct->product->getPurchaseAccountWithFallback();
                $accountId = $purchaseAccount->id;
                
                // Calculate original amount (before discount)
                $originalAmount = $purchaseProduct->purchase_price * $purchaseProduct->quantity;
                
                // Calculate discount amount
                $discountAmount = $purchaseProduct->calculateDiscountAmount();
                $totalDiscountAmount += $discountAmount;
                
                // Calculate amount after discount
                $amountAfterDiscount = $originalAmount - $discountAmount;
                
                // Add VAT amount from product
                $totalVatAmount += $purchaseProduct->tax_amount;
                
                Log::info("Product: {$purchaseProduct->product->name}, Original: {$originalAmount}, Discount: {$discountAmount}, After Discount: {$amountAfterDiscount}, VAT: {$purchaseProduct->tax_amount}");
                
                if (!isset($purchaseExpensesByAccount[$accountId])) {
                    $purchaseExpensesByAccount[$accountId] = [
                        'account' => $purchaseAccount,
                        'total' => 0
                    ];
                }
                $purchaseExpensesByAccount[$accountId]['total'] += $amountAfterDiscount;
            }
            
            // Add transport costs if applicable
            if ($purchase->transport && $purchase->transport > 0) {
                Log::info("Adding transport cost: {$purchase->transport}");
                $totalDebit += $purchase->transport;
            }
            
            // Add VAT amount
            if ($totalVatAmount > 0) {
                Log::info("Adding VAT amount: {$totalVatAmount}");
                $totalDebit += $totalVatAmount;
            }
            
            // Note: Discount received reduces the amount we owe, so it's a credit
            // We don't add it to totalDebit here as it reduces our liability
            
            // Add purchase expense amounts
            foreach ($purchaseExpensesByAccount as $expense) {
                $totalDebit += $expense['total'];
            }
            
            // Credit to supplier's accounts payable (net amount after discount)
            $totalAmount = $purchase->purchaseTotal();
            $totalCredit += $totalAmount;
            
            // Debug logging
            Log::info("Purchase Journal Calculation for PO {$purchase->purchase_no}:");
            Log::info("Total Amount: {$totalAmount}");
            Log::info("Calculated Total Debit: {$totalDebit}");
            Log::info("Calculated Total Credit: {$totalCredit}");
            Log::info("Balance Check: " . ($totalDebit - $totalCredit));
            Log::info("Purchase Sub Total: {$purchase->sub_total}");
            Log::info("Purchase Transport: {$purchase->transport}");
            Log::info("Purchase Discount: {$purchase->discount}");
            Log::info("Purchase Tax ID: {$purchase->tax_id}");
            
            // Create journal entry with correct balanced totals
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $purchase->purchase_date,
                'reference' => $purchase->purchase_no,
                'description' => "Purchase Order {$purchase->purchase_no}",
                'total_debit' => $totalDebit,
                'total_credit' => $totalCredit,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => Purchase::class,
                'source_id' => $purchase->id,
            ]);

            $lineNumber = 1;

            // Line 1: Credit to Supplier's Accounts Payable (net amount after discount)
            $accountsPayableAmount = $totalAmount - $totalDiscountAmount;
            Log::info("Creating journal line 1: Credit to Supplier Accounts Payable - Amount: {$accountsPayableAmount}");
            $this->createJournalEntryLine($journalEntry, $supplierAccountsPayableAccount->id, 0, $accountsPayableAmount, $lineNumber, "Accounts Payable for PO {$purchase->purchase_no}");
            $lineNumber++;

            // Create separate journal entry lines for each purchase account (Debit)
            foreach ($purchaseExpensesByAccount as $accountId => $expense) {
                Log::info("Creating journal line {$lineNumber}: Debit to Purchase Expense - Account ID: {$accountId}, Amount: {$expense['total']}");
                $this->createJournalEntryLine($journalEntry, $accountId, $expense['total'], 0, $lineNumber, "Purchase Expense for PO {$purchase->purchase_no}");
                $lineNumber++;
            }
            
            // Create discount received journal entry if applicable (Credit)
            if ($totalDiscountAmount > 0) {
                $discountAccount = $this->getDiscountReceivedAccount();
                if ($discountAccount) {
                    Log::info("Creating journal line {$lineNumber}: Credit to Discount Received - Account ID: {$discountAccount->id}, Amount: {$totalDiscountAmount}");
                    $this->createJournalEntryLine($journalEntry, $discountAccount->id, 0, $totalDiscountAmount, $lineNumber, "Discount Received for PO {$purchase->purchase_no}");
                    $lineNumber++;
                } else {
                    Log::warning("Discount Received account not configured, skipping discount journal entry");
                }
            }

            // Create transport cost journal entry if applicable (Debit)
            if ($purchase->transport && $purchase->transport > 0) {
                $transportAccount = $this->getTransportExpenseAccount();
                if ($transportAccount) {
                    $this->createJournalEntryLine($journalEntry, $transportAccount->id, $purchase->transport, 0, $lineNumber, "Transport Cost for PO {$purchase->purchase_no}");
                } else {
                    // Fallback to first purchase account if transport account not configured
                    $firstPurchaseAccountId = array_key_first($purchaseExpensesByAccount);
                    if ($firstPurchaseAccountId) {
                        $this->createJournalEntryLine($journalEntry, $firstPurchaseAccountId, $purchase->transport, 0, $lineNumber, "Transport Cost for PO {$purchase->purchase_no}");
                    }
                }
                $lineNumber++;
            }

            // Create VAT journal entry if applicable (Debit)
            if ($totalVatAmount > 0) {
                $vatAccount = $this->getVatAccountForPurchase($purchase);
                if ($vatAccount) {
                    Log::info("Creating journal line {$lineNumber}: Debit to VAT Input - Account ID: {$vatAccount->id}, Amount: {$totalVatAmount}");
                    $this->createJournalEntryLine($journalEntry, $vatAccount->id, $totalVatAmount, 0, $lineNumber, "VAT Input for PO {$purchase->purchase_no}");
                    $lineNumber++;
                } else {
                    Log::warning("VAT Input account not configured, skipping VAT journal entry");
                }
            }

            // Create bridge table record
            Log::info("Creating purchase journal bridge record for purchase ID: {$purchase->id}, journal entry ID: {$journalEntry->id}");
            $purchaseJournal = \App\Models\PurchaseJournal::create([
                'purchase_id' => $purchase->id,
                'journal_entry_id' => $journalEntry->id,
                'type' => 'purchase'
            ]);
            Log::info("Purchase journal bridge record created with ID: {$purchaseJournal->id}");

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            DB::rollBack();
            Log::error('Purchase journal creation failed: ' . $e->getMessage());
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
            // Generate unique reference for payment
            $paymentReference = $purchase->purchase_no . '-PAY-' . time();
            
            // Check if journal entry already exists for this payment (very unlikely but safe)
            $existingJournalEntry = JournalEntry::where('reference', $paymentReference)
                ->where('source_type', Purchase::class)
                ->where('source_id', $purchase->id)
                ->first();
                
            if ($existingJournalEntry) {
                Log::info("Journal entry already exists for purchase payment {$paymentReference} with ID: {$existingJournalEntry->id}");
                DB::rollBack();
                return $existingJournalEntry;
            }
            
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
                'reference' => $paymentReference,
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
            // Get the expense account - use selected account or fallback to default
            $expenseAccount = null;
            if ($expense->expense_account_id) {
                $expenseAccount = \App\Models\ChartOfAccount::find($expense->expense_account_id);
            }
            
            // Fallback to default if no specific account selected
            if (!$expenseAccount) {
                $expenseAccount = $this->getDefaultAccount('Operating Expenses', 'Expense');
            }
            
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

            // Debug: Log the expense amount being used for journal
            Log::info('Creating journal entry for expense ID: ' . $expense->id . ' with amount: ' . $expense->amount);
            
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
            Log::info('Creating journal line 1: Debit to expense account ' . $expenseAccount->id . ' with amount: ' . $expense->amount);
            $this->createJournalEntryLine($journalEntry, $expenseAccount->id, $expense->amount, 0, 1, "Expense: {$expense->reason}");
            
            Log::info('Creating journal line 2: Credit to bank account ' . $bankAccount->id . ' with amount: ' . $expense->amount);
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
            // Validate client has chart of account
            if (!$nonInvoicePayment->client || !$nonInvoicePayment->client->isChartOfAccountConnected()) {
                throw new Exception('Client must have a Chart of Account assigned for journal entries.');
            }

            // Get client-specific accounts receivable account
            $clientAccountsReceivableAccount = $nonInvoicePayment->client->chartOfAccount;
            
            if (!$clientAccountsReceivableAccount) {
                throw new Exception('Client Chart of Account not found.');
            }
            
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
            
            // If no specific bank account found, throw error - we need a specific account
            if (!$bankAccount) {
                throw new Exception('Payment method must be connected to a Chart of Account for journal entries.');
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
            // Line 1: Debit to Bank Account (Cash/Bank receipt)
            $this->createJournalEntryLine($journalEntry, $bankAccount->id, $nonInvoicePayment->amount, 0, 1, "Cash/Bank receipt for non-invoice payment");
            // Line 2: Credit to Client's Accounts Receivable
            $this->createJournalEntryLine($journalEntry, $clientAccountsReceivableAccount->id, 0, $nonInvoicePayment->amount, 2, "Reduction in client accounts receivable");

            // Create bridge table record (you'll need to create this model and migration)
            // \App\Models\NonInvoicePaymentJournal::create([
            //     'non_invoice_payment_id' => $nonInvoicePayment->id,
            //     'journal_entry_id' => $journalEntry->id,
            // ]);

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            // dd($e);
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

        if (!$setting || !$setting->main_account_id) {
            return null;
        }

        return ChartOfAccount::find($setting->main_account_id);
    }

    /**
     * Get transport expense account from routing settings
     */
    private function getTransportExpenseAccount(): ?ChartOfAccount
    {
        $setting = AccountRoutingSetting::where('setting_key', 'transport_expense_account')
            ->where('is_active', true)
            ->first();

        if (!$setting || !$setting->main_account_id) {
            return null;
        }

        return ChartOfAccount::find($setting->main_account_id);
    }

    /**
     * Create journal entry for invoice return
     */
    public function createInvoiceReturnJournal(\App\Models\InvoiceReturn $invoiceReturn, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Load the invoice return with its relationships
            $invoiceReturn->load(['invoice.client', 'invoiceReturnProducts.product']);
            
            // Validate client has chart of account
            if (!$invoiceReturn->invoice || !$invoiceReturn->invoice->client || !$invoiceReturn->invoice->client->isChartOfAccountConnected()) {
                throw new Exception('Client must have a Chart of Account assigned for journal entries.');
            }

            // Get client-specific accounts receivable account
            $clientAccountsReceivableAccount = $invoiceReturn->invoice->client->chartOfAccount;
            
            if (!$clientAccountsReceivableAccount) {
                throw new Exception('Client Chart of Account not found.');
            }

            // Calculate return amounts from return items
            $returnProducts = $invoiceReturn->invoiceReturnProducts;
            
            // Debug: Log the return products count
            \Illuminate\Support\Facades\Log::info('Invoice Return Journal Creation - Return Products Count: ' . $returnProducts->count());
            
            // If no return products, skip journal creation
            if ($returnProducts->count() === 0) {
                \Illuminate\Support\Facades\Log::info('No return products found, skipping journal entry creation');
                DB::rollBack();
                return null;
            }
            
            $totalReturnAmount = 0;
            $totalReturnVat = 0;
            $totalReturnDiscount = 0;
            $salesByAccount = [];
            $vatByAccount = [];

            foreach ($returnProducts as $returnProduct) {
                $product = $returnProduct->product;
                $invoiceProduct = \App\Models\InvoiceProduct::where('invoice_id', $invoiceReturn->invoice_id)
                    ->where('product_id', $product->id)
                    ->first();

                if (!$invoiceProduct) {
                    continue;
                }

                // Calculate amounts based on returned quantity
                $returnQty = $returnProduct->quantity;
                $unitPrice = $invoiceProduct->sale_price;
                $unitDiscount = $invoiceProduct->discount_amount / $invoiceProduct->quantity;
                $unitVat = $invoiceProduct->tax_amount / $invoiceProduct->quantity;

                // Calculate return amounts
                $returnSubtotal = $unitPrice * $returnQty;
                $returnDiscount = $unitDiscount * $returnQty;
                $returnVat = $unitVat * $returnQty;
                $returnNet = $returnSubtotal - $returnDiscount;

                $totalReturnAmount += $returnNet + $returnVat;
                $totalReturnVat += $returnVat;
                $totalReturnDiscount += $returnDiscount;

                // Group by sales account
                if ($product->sales_account_id) {
                    if (!isset($salesByAccount[$product->sales_account_id])) {
                        $salesByAccount[$product->sales_account_id] = 0;
                    }
                    $salesByAccount[$product->sales_account_id] += $returnNet;
                }

                // Group by VAT account
                if ($invoiceProduct->vatRate && $returnVat > 0) {
                    $vatAccount = $invoiceProduct->vatRate->getSalesVatAccount();
                    if ($vatAccount) {
                        if (!isset($vatByAccount[$vatAccount->id])) {
                            $vatByAccount[$vatAccount->id] = 0;
                        }
                        $vatByAccount[$vatAccount->id] += $returnVat;
                    }
                }
            }

            // Debug: Log the calculated amounts
            \Illuminate\Support\Facades\Log::info('Invoice Return Journal - Total Return Amount: ' . $totalReturnAmount);
            \Illuminate\Support\Facades\Log::info('Invoice Return Journal - Sales Accounts: ' . json_encode($salesByAccount));
            \Illuminate\Support\Facades\Log::info('Invoice Return Journal - VAT Accounts: ' . json_encode($vatByAccount));

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $invoiceReturn->date,
                'reference' => $invoiceReturn->return_no . '-RET-' . time(), // Make reference unique
                'description' => "Invoice Return {$invoiceReturn->return_no}",
                'total_debit' => $totalReturnAmount,
                'total_credit' => $totalReturnAmount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => \App\Models\InvoiceReturn::class,
                'source_id' => $invoiceReturn->id,
            ]);

            $lineNumber = 1;

            // Create sales revenue reversal lines (Credit to reverse sales)
            foreach ($salesByAccount as $accountId => $amount) {
                $this->createJournalEntryLine($journalEntry, $accountId, 0, $amount, $lineNumber, "Sales Revenue Reversal for Return {$invoiceReturn->return_no}");
                $lineNumber++;
            }

            // Create VAT reversal lines (Credit to reverse VAT payable)
            foreach ($vatByAccount as $accountId => $amount) {
                $this->createJournalEntryLine($journalEntry, $accountId, 0, $amount, $lineNumber, "VAT Payable Reversal for Return {$invoiceReturn->return_no}");
                $lineNumber++;
            }

            // Create discount reversal line if applicable
            if ($totalReturnDiscount > 0) {
                $discountAccount = $this->getDiscountAllowedAccount();
                if ($discountAccount) {
                    $this->createJournalEntryLine($journalEntry, $discountAccount->id, 0, $totalReturnDiscount, $lineNumber, "Discount Allowed Reversal for Return {$invoiceReturn->return_no}");
                    $lineNumber++;
                }
            }

            // Create accounts receivable reduction line (Debit to reduce client balance)
            $this->createJournalEntryLine($journalEntry, $clientAccountsReceivableAccount->id, $totalReturnAmount, 0, $lineNumber, "Accounts Receivable Reduction for Return {$invoiceReturn->return_no}");

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Get VAT account for purchase from routing settings
     */
    private function getVatAccountForPurchase(Purchase $purchase): ?ChartOfAccount
    {
        // First try to get VAT account from the purchase's tax rate
        if ($purchase->tax_id) {
            $vatRate = $purchase->purchaseTax;
            if ($vatRate && $vatRate->chart_of_account_id) {
                return ChartOfAccount::find($vatRate->chart_of_account_id);
            }
        }

        // Fallback to default VAT input account from routing settings
        $setting = AccountRoutingSetting::where('module', 'vat')
            ->where('setting_key', 'purchase_vat_account')
            ->first();

        if (!$setting || !$setting->main_account_id) {
            return null;
        }

        return ChartOfAccount::find($setting->main_account_id);
    }

    /**
     * Get discount received account from routing settings
     */
    private function getDiscountReceivedAccount(): ?ChartOfAccount
    {
        $setting = AccountRoutingSetting::where('module', 'purchase')
            ->where('setting_key', 'discount_received_account')
            ->first();

        if (!$setting || !$setting->main_account_id) {
            return null;
        }

        return ChartOfAccount::find($setting->main_account_id);
    }

    /**
     * Create journal entry for balance transfer
     */
    public function createBalanceTransferJournal(BalanceTansfer $balanceTransfer, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Check if journal entry already exists for this balance transfer
            $existingJournalEntry = JournalEntry::where('source_type', BalanceTansfer::class)
                ->where('source_id', $balanceTransfer->id)
                ->first();
                
            if ($existingJournalEntry) {
                Log::info("Journal entry already exists for balance transfer {$balanceTransfer->slug} with ID: {$existingJournalEntry->id}");
                DB::rollBack();
                return $existingJournalEntry;
            }

            // Get the debit and credit transactions
            $debitTransaction = $balanceTransfer->debitTransaction;
            $creditTransaction = $balanceTransfer->creditTransaction;

            if (!$debitTransaction || !$creditTransaction) {
                throw new Exception('Balance transfer transactions not found.');
            }

            // Get the cashbook accounts
            $fromAccount = $debitTransaction->cashbookAccount;
            $toAccount = $creditTransaction->cashbookAccount;

            if (!$fromAccount || !$toAccount) {
                throw new Exception('Cashbook accounts not found for balance transfer.');
            }

            // Validate that both accounts are connected to chart of accounts
            if (!$fromAccount->isChartOfAccountConnected()) {
                throw new Exception($fromAccount->getChartOfAccountValidationMessage());
            }

            if (!$toAccount->isChartOfAccountConnected()) {
                throw new Exception($toAccount->getChartOfAccountValidationMessage());
            }

            // Get chart of account IDs
            $fromChartOfAccountId = $fromAccount->getChartOfAccountIdForJournal();
            $toChartOfAccountId = $toAccount->getChartOfAccountIdForJournal();

            if (!$fromChartOfAccountId || !$toChartOfAccountId) {
                throw new Exception('Chart of accounts not found for balance transfer accounts.');
            }

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $balanceTransfer->date,
                'reference' => $balanceTransfer->slug,
                'description' => "Balance Transfer: {$balanceTransfer->reason}",
                'total_debit' => $balanceTransfer->amount,
                'total_credit' => $balanceTransfer->amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => BalanceTansfer::class,
                'source_id' => $balanceTransfer->id,
            ]);

            // Create journal entry lines
            // Line 1: Debit the "To" account (money going in)
            $this->createJournalEntryLine(
                $journalEntry, 
                $toChartOfAccountId, 
                $balanceTransfer->amount, 
                0, 
                1, 
                "Balance Transfer to {$toAccount->bank_name} [{$toAccount->account_number}]"
            );

            // Line 2: Credit the "From" account (money going out)
            $this->createJournalEntryLine(
                $journalEntry, 
                $fromChartOfAccountId, 
                0, 
                $balanceTransfer->amount, 
                2, 
                "Balance Transfer from {$fromAccount->bank_name} [{$fromAccount->account_number}]"
            );

            // Update the account transactions to link them to the journal entry
            $debitTransaction->update(['journal_entry_id' => $journalEntry->id]);
            $creditTransaction->update(['journal_entry_id' => $journalEntry->id]);

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }
    
        /**
     * Create journal entry for balance adjustment
     */
    public function createBalanceAdjustmentJournal(AccountTransaction $accountTransaction, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Check if journal entry already exists for this balance adjustment
            $existingJournalEntry = JournalEntry::where('source_type', AccountTransaction::class)
                ->where('source_id', $accountTransaction->id)
                ->first();
                
            if ($existingJournalEntry) {
                Log::info("Journal entry already exists for balance adjustment {$accountTransaction->slug} with ID: {$existingJournalEntry->id}");
                DB::rollBack();
                return $existingJournalEntry;
            }

            // Get the cashbook account
            $cashbookAccount = $accountTransaction->cashbookAccount;

            if (!$cashbookAccount) {
                throw new Exception('Cashbook account not found for balance adjustment.');
            }

            // Validate that the account is connected to a chart of account
            if (!$cashbookAccount->isChartOfAccountConnected()) {
                throw new Exception($cashbookAccount->getChartOfAccountValidationMessage());
            }

            // Get chart of account ID
            $chartOfAccountId = $cashbookAccount->getChartOfAccountIdForJournal();

            if (!$chartOfAccountId) {
                throw new Exception('Chart of accounts not found for balance adjustment account.');
            }

            // Determine the adjustment type and create appropriate journal entry
            $isAddBalance = $accountTransaction->type == 1; // 1 = Add, 0 = Remove
            
            // For balance adjustments, we need to create a journal entry that affects:
            // - The cashbook account (Asset)
            // - The selected second account from the form
            
            // Get the selected second account
            $secondAccount = ChartOfAccount::find($accountTransaction->second_account_id);
            if (!$secondAccount) {
                throw new Exception('Second account not found. Please select a valid chart of account.');
            }

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $accountTransaction->transaction_date,
                'reference' => $accountTransaction->slug,
                'description' => "Balance Adjustment: {$accountTransaction->reason}",
                'total_debit' => $accountTransaction->amount,
                'total_credit' => $accountTransaction->amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => AccountTransaction::class,
                'source_id' => $accountTransaction->id,
            ]);

            if ($isAddBalance) {
                // Adding balance: Debit Cashbook Account, Credit Selected Account
                $this->createJournalEntryLine(
                    $journalEntry, 
                    $chartOfAccountId, 
                    $accountTransaction->amount, 
                    0, 
                    1, 
                    "Balance Added to {$cashbookAccount->bank_name} [{$cashbookAccount->account_number}]"
                );

                $this->createJournalEntryLine(
                    $journalEntry, 
                    $secondAccount->id, 
                    0, 
                    $accountTransaction->amount, 
                    2, 
                    "Balance Adjustment - {$secondAccount->name}"
                );
            } else {
                // Removing balance: Debit Selected Account, Credit Cashbook Account
                $this->createJournalEntryLine(
                    $journalEntry, 
                    $secondAccount->id, 
                    $accountTransaction->amount, 
                    0, 
                    1, 
                    "Balance Adjustment - {$secondAccount->name}"
                );

                $this->createJournalEntryLine(
                    $journalEntry, 
                    $chartOfAccountId, 
                    0, 
                    $accountTransaction->amount, 
                    2, 
                    "Balance Removed from {$cashbookAccount->bank_name} [{$cashbookAccount->account_number}]"
                );
            }

            // Update the account transaction to link it to the journal entry
            $accountTransaction->update(['journal_entry_id' => $journalEntry->id]);

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }
}