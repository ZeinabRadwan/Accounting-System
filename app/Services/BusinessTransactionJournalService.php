<?php

namespace App\Services;

use App\Enums\JournalEntryType;
use App\Models\AccountingPeriod;
use App\Models\AccountRoutingSetting;
use App\Models\AccountTransaction;
use App\Models\BalanceTansfer;
use App\Models\ChartOfAccount;
use App\Models\Expense;
use App\Models\FiscalYear;
use App\Models\GeneralSetting;
use App\Models\Invoice;
use App\Models\InvoicePayment;
use App\Models\JournalEntry;
use App\Models\JournalEntryLine;
use App\Models\LoanPayment;
use App\Models\NonInvoicePayment;
use App\Models\PaymentVoucher;
use App\Models\Purchase;
use App\Models\PurchasePayment;
use App\Models\PurchaseReturn;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;

class BusinessTransactionJournalService
{
    /**
     * Get default fiscal year and accounting period from settings
     *
     * @throws Exception
     */
    private function getDefaultFiscalYearAndPeriod(): array
    {
        // Get default fiscal year and accounting period from general settings
        $currentFiscalYearId = GeneralSetting::where('key', 'current_fiscal_year_id')->first()?->value;
        $currentAccountingPeriodId = GeneralSetting::where('key', 'current_accounting_period_id')->first()?->value;

        // Validate that the settings exist
        if (! $currentFiscalYearId) {
            throw new Exception('Current fiscal year is not configured in system settings.');
        }
        if (! $currentAccountingPeriodId) {
            throw new Exception('Current accounting period is not configured in system settings.');
        }

        // Validate that the fiscal year and accounting period exist in their respective tables
        $fiscalYear = FiscalYear::find($currentFiscalYearId);
        if (! $fiscalYear) {
            throw new Exception('The configured fiscal year does not exist.');
        }

        $accountingPeriod = AccountingPeriod::find($currentAccountingPeriodId);
        if (! $accountingPeriod) {
            throw new Exception('The configured accounting period does not exist.');
        }

        // Validate that the accounting period belongs to the fiscal year
        if ($accountingPeriod->fiscal_year_id != $fiscalYear->id) {
            throw new Exception('The configured accounting period does not belong to the configured fiscal year.');
        }

        return [
            'fiscal_year_id' => $currentFiscalYearId,
            'accounting_period_id' => $currentAccountingPeriodId,
        ];
    }

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

            // Validate client exists and load relationship explicitly
            if (! $invoice->client) {
                throw new Exception('Invoice must have a client assigned for journal entries.');
            }

            // Ensure client relationship is loaded
            if (! $invoice->relationLoaded('client')) {
                $invoice->load('client');
            }

            // Ensure client's chartOfAccount relationship is loaded
            if (! $invoice->client->relationLoaded('chartOfAccount')) {
                $invoice->client->load('chartOfAccount');
            }

            // DO NOT use ensureChartOfAccountLoaded() here - it assigns default account (12301)
            // Instead, we'll create a specific account for the client (like suppliers)

            $totalDiscountAmount = 0;

            // Validate all products have sales accounts and VAT accounts
            $invoiceProducts = $invoice->invoiceProducts;
            $vatAccountsByProduct = []; // Store VAT accounts for each product

            if ($invoiceProducts && $invoiceProducts->count() > 0) {
                foreach ($invoiceProducts as $invoiceProduct) {
                    if (! $invoiceProduct->product || ! $invoiceProduct->product->hasSalesAccount()) {
                        throw new Exception('Product '.($invoiceProduct->product->name ?? 'Unknown').' must have a Sales Account assigned.');
                    }

                    // Validate VAT account from product's tax rate (with fallback to default account)
                    if ($invoiceProduct->product && $invoiceProduct->product->productTax) {
                        // Pass branch_id to get the correct VAT account from account routing settings
                        $vatAccount = $invoiceProduct->product->productTax->getSalesVatAccount($invoice->branch_id);
                        if (! $vatAccount) {
                            throw new Exception('Product "'.$invoiceProduct->product->name.'" must have a Sales VAT Account assigned for journal entries. Please configure the VAT rate "'.$invoiceProduct->product->productTax->name.'" with a Sales VAT Account or ensure the default "Sales VAT Payable" account exists.');
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
            // Use the actual account assigned to the client (from client's chart_of_account_id)
            // This ensures each client uses their own ledger account, not a static 12301
            // IMPORTANT: Similar to purchases where suppliers get their own accounts, clients should too

            // Get branch ID first (needed for routing settings and account creation)
            $branchId = $invoice->branch_id ?? (int) (Auth::user()->default_branch_id ?? 0);

            // Refresh client data to ensure we have the latest chart_of_account_id
            $invoice->client->refresh();

            // Get the routing setting to check the main account code
            $routingSetting = \App\Models\AccountRoutingSetting::where('setting_key', 'clients_account')
                ->where('is_active', true)
                ->where('branch_id', $branchId)
                ->first();

            $mainAccountCode = null;
            if ($routingSetting && $routingSetting->main_account_id) {
                $mainAccount = \App\Models\ChartOfAccount::find($routingSetting->main_account_id);
                if ($mainAccount) {
                    $mainAccountCode = $mainAccount->code;
                }
            }

            // Check if client has chart_of_account_id assigned
            $needsNewAccount = false;
            if (! $invoice->client->chart_of_account_id) {
                $needsNewAccount = true;
                Log::info("Client {$invoice->client->name} (ID: {$invoice->client->id}) doesn't have a chart of account. Creating one automatically...");
            } else {
                // Check if client is using the main account (12301) instead of a child account
                $currentAccount = $invoice->client->chartOfAccount;
                if ($currentAccount && $mainAccountCode && $currentAccount->code === $mainAccountCode) {
                    $needsNewAccount = true;
                    Log::warning(
                        "Client {$invoice->client->name} (ID: {$invoice->client->id}) is using the main account {$mainAccountCode} ".
                        'instead of a child account. Creating a child account automatically...'
                    );
                }
            }

            // If client doesn't have a chart of account OR is using the main account, create a child account (like suppliers)
            if ($needsNewAccount) {
                try {
                    $routingService = new \App\Services\AccountRoutingService;
                    $clientAccount = $routingService->createClientAccount($invoice->client->name, $branchId);

                    if ($clientAccount) {
                        // Update the client with the new account
                        $invoice->client->chart_of_account_id = $clientAccount->id;
                        $invoice->client->save();

                        // Reload the relationship
                        $invoice->client->load('chartOfAccount');

                        Log::info(
                            "Created chart of account for client {$invoice->client->name}: ".
                            "Account ID {$clientAccount->id}, Code {$clientAccount->code}, Name {$clientAccount->name}. ".
                            'This is a child account under the main clients account, similar to how suppliers work.'
                        );
                    } else {
                        throw new Exception('Failed to create chart of account for client. Please configure client account routing settings (clients_account) with routing_type = main_account_per_each.');
                    }
                } catch (\Exception $e) {
                    Log::error("Failed to auto-create chart of account for client {$invoice->client->name}: ".$e->getMessage());
                    throw new Exception(
                        'Client "'.($invoice->client->name ?? 'Unknown').'" does not have a Chart of Account assigned. '.
                        'Please assign a Chart of Account to this client, or ensure client account routing is configured to auto-create accounts. '.
                        'Error: '.$e->getMessage()
                    );
                }
            }

            // Reload the relationship to ensure we have the latest data
            $invoice->client->load('chartOfAccount');
            $clientAccountsReceivableAccount = $invoice->client->chartOfAccount;

            if (! $clientAccountsReceivableAccount) {
                throw new Exception(
                    'Client "'.($invoice->client->name ?? 'Unknown').'" Chart of Account not found. '.
                    'Please assign a Chart of Account to this client. '.
                    'The client currently has chart_of_account_id = '.($invoice->client->chart_of_account_id ?? 'NULL').'. '.
                    'This should work the same way as Purchases where suppliers automatically get their own accounts.'
                );
            }

            // Verify the account code is NOT the main account (12301) - it should be a child account like 12301-001
            if ($mainAccountCode && $clientAccountsReceivableAccount->code === $mainAccountCode) {
                Log::warning(
                    "WARNING: Client {$invoice->client->name} is using the main account {$mainAccountCode} instead of a child account. ".
                    'This means the client was assigned the default account. '.
                    "Please ensure client account routing is configured with routing_type = 'main_account_per_each' to create child accounts."
                );
            }

            // Log the account being used for debugging - verify it's not a static 12301
            // Compare with purchase behavior: purchases use supplier->chartOfAccount (actual account)
            Log::info(
                "Invoice {$invoice->invoice_no} - Using client's actual chart of account (same as purchases use supplier account): ".
                "Client ID: {$invoice->client->id}, Client Name: {$invoice->client->name}, ".
                'Client chart_of_account_id: '.($invoice->client->chart_of_account_id ?? 'NULL').', '.
                "Account ID: {$clientAccountsReceivableAccount->id}, Account Code: {$clientAccountsReceivableAccount->code}, ".
                "Account Name: {$clientAccountsReceivableAccount->name}. ".
                'If this shows 12301, the client was assigned the default account - assign a specific account to the client.'
            );

            if ($totalDiscountAmount > 0) {
                $discountAccount = $this->getDiscountAllowedAccount($invoice->branch_id);
                if (! $discountAccount) {
                    throw new Exception('Discount Allowed account must be configured in account routing settings to process discounts.');
                }
            }

            // Calculate the actual totals for the journal entry
            $totalSalesAmount = 0;
            $totalVatAmount = 0;

            // Calculate sales and VAT amounts (after discounts)
            foreach ($invoiceProducts as $invoiceProduct) {
                $originalAmount = $invoiceProduct->sale_price * $invoiceProduct->quantity;
                $discountAmount = $invoiceProduct->discount_amount ?? 0;
                $netAmount = $originalAmount - $discountAmount;

                $totalSalesAmount += $netAmount;
                $totalVatAmount += $invoiceProduct->tax_amount;
            }

            // The total amount should be net sales + VAT
            $totalAmount = $totalSalesAmount + $totalVatAmount;

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();
            // Note: branchId is already defined earlier in the function

            // Create journal entry for the invoice itself (AR, Sales, VAT)
            // Reference must contain invoice number for matching JE ⇄ invoice
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $invoice->invoice_date,
                'reference' => $invoice->invoice_no, // Invoice number for matching
                'description' => __('journal.sale_invoice', ['number' => $invoice->invoice_no]),
                'total_debit' => $totalAmount,
                'total_credit' => $totalAmount,
                'status' => 'posted', // Auto-post for system-generated entries
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => Invoice::class,
                'source_id' => $invoice->id,
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => $branchId,
            ]);

            // Line 1: Debit to Client's Accounts Receivable
            $this->createJournalEntryLine($journalEntry, $clientAccountsReceivableAccount->id, $totalAmount, 0, 1, __('journal.accounts_receivable'));

            $lineNumber = 2;

            // Note: Discounts are handled by reducing the sales amount, not as separate entries

            // Group by sales account to handle multiple products with different accounts
            $salesByAccount = [];
            $vatByAccount = [];

            foreach ($invoiceProducts as $invoiceProduct) {
                $product = $invoiceProduct->product;
                $accountId = $product->sales_account_id;

                // Calculate amount after discount
                $originalAmount = $invoiceProduct->sale_price * $invoiceProduct->quantity;
                $discountAmount = $invoiceProduct->discount_amount ?? 0;
                $netAmount = $originalAmount - $discountAmount;

                // Add to sales account (net amount after discount)
                if (! isset($salesByAccount[$accountId])) {
                    $salesByAccount[$accountId] = 0;
                }
                $salesByAccount[$accountId] += $netAmount;

                // Handle VAT account
                if (isset($vatAccountsByProduct[$invoiceProduct->product_id])) {
                    $vatAccountId = $vatAccountsByProduct[$invoiceProduct->product_id]->id;
                    $productVatAmount = $invoiceProduct->tax_amount;

                    if ($productVatAmount > 0) {
                        if (! isset($vatByAccount[$vatAccountId])) {
                            $vatByAccount[$vatAccountId] = 0;
                        }
                        $vatByAccount[$vatAccountId] += $productVatAmount;
                    }
                }
            }

            // Create separate journal entry lines for each sales account (net amount after discount)
            foreach ($salesByAccount as $accountId => $amount) {
                if ($amount > 0) { // Only create line if amount is greater than 0
                    Log::info("Creating sales journal line: Account ID {$accountId}, Amount: {$amount}");
                    $this->createJournalEntryLine($journalEntry, $accountId, 0, $amount, $lineNumber, __('journal.sales_revenue_for_invoice', ['number' => $invoice->invoice_no]));
                    $lineNumber++;
                }
            }

            // Create VAT journal entries (grouped by account)
            foreach ($vatByAccount as $vatAccountId => $totalVatAmount) {
                if ($totalVatAmount > 0) { // Only create line if amount is greater than 0
                    Log::info("Creating VAT journal line: Account ID {$vatAccountId}, Amount: {$totalVatAmount}");
                    $this->createJournalEntryLine($journalEntry, $vatAccountId, 0, $totalVatAmount, $lineNumber, __('journal.vat_payable_for_invoice', ['number' => $invoice->invoice_no]));
                    $lineNumber++;
                }
            }

            // Log the final totals for debugging
            Log::info("Journal entry totals - Debit: {$totalAmount}, Credit: {$totalAmount}");
            Log::info('Sales accounts: '.json_encode($salesByAccount));
            Log::info('VAT accounts: '.json_encode($vatByAccount));

            // Create discount journal entry if there are any discounts
            // Create bridge table record for the invoice journal
            \App\Models\InvoiceJournal::create([
                'invoice_id' => $invoice->id,
                'journal_entry_id' => $journalEntry->id,
                'type' => 'sale',
            ]);

            /**
             * Create separate COGS / Inventory journal entry
             *
             * Required entry:
             *   Dr Cost of Sales
             *   Cr Inventory
             *
             * Skip products without inventory tracking (is_service = true)
             */
            $totalCogsAmount = 0;
            foreach ($invoiceProducts as $invoiceProduct) {
                $product = $invoiceProduct->product;

                // Skip service products (products without inventory tracking)
                if ($product && $product->is_service) {
                    continue;
                }

                // COGS must use sale_price (net amount without VAT) only
                // sale_price = net amount per unit (without VAT - CORRECT for COGS)
                // purchase_price = purchase cost (WRONG for COGS)
                // unit_cost = (sale_price * quantity - discount + tax) / quantity (includes VAT - WRONG for COGS)
                $lineCost = ($invoiceProduct->sale_price ?? 0) * ($invoiceProduct->quantity ?? 0);
                $totalCogsAmount += $lineCost;

                Log::info("COGS calculation for product {$product->name}: sale_price={$invoiceProduct->sale_price}, quantity={$invoiceProduct->quantity}, lineCost={$lineCost}");
            }

            // Always create COGS journal entry if there are inventory products (non-service products)
            // COGS JE is mandatory when invoice contains inventory items
            // COGS must use net amount only (sale_price * quantity), excluding VAT
            if ($totalCogsAmount > 0) {
                // Get Inventory and Cost of Sales accounts from routing settings
                $inventoryAccount = $this->getInventoryAccount($branchId);
                $costOfSalesAccount = $this->getCostOfSalesAccount($branchId);

                // COGS journal entry is required - provide detailed error message if accounts are not configured
                if (! $inventoryAccount || ! $costOfSalesAccount) {
                    $missingAccounts = [];
                    if (! $inventoryAccount) {
                        $missingAccounts[] = 'Inventory Account (المخزون)';
                    }
                    if (! $costOfSalesAccount) {
                        $missingAccounts[] = 'Cost of Sales Account (تكلفة المبيعات)';
                    }

                    throw new Exception(
                        'COGS journal entry is required for invoice '.$invoice->invoice_no.' but the following accounts must be configured in Account Routing Settings: '.
                        implode(', ', $missingAccounts).'. '.
                        'Please go to Settings > Account Routing and configure these accounts under the Inventory module.'
                    );
                }

                // Log COGS calculation details for debugging
                Log::info(
                    "Invoice {$invoice->invoice_no} - COGS Calculation: ".
                    "Total COGS Amount = {$totalCogsAmount} (net amount only, excluding VAT). ".
                    "Invoice Total = {$totalAmount} (sales + VAT). ".
                    'COGS should be less than invoice total.'
                );

                // Create COGS journal entry with invoice number in reference for matching
                $cogsJournalEntry = JournalEntry::create([
                    'entry_number' => JournalEntry::generateEntryNumber(),
                    'entry_date' => $invoice->invoice_date,
                    'reference' => $invoice->invoice_no.'-COGS', // Invoice number for matching JE ⇄ invoice
                    'description' => __('journal.cogs_for_sale_invoice', ['number' => $invoice->invoice_no]),
                    'total_debit' => $totalCogsAmount,
                    'total_credit' => $totalCogsAmount,
                    'status' => 'posted',
                    'created_by' => $userId,
                    'posted_by' => $userId,
                    'posted_at' => now(),
                    'source_type' => Invoice::class,
                    'source_id' => $invoice->id,
                    'fiscal_year_id' => $defaults['fiscal_year_id'],
                    'accounting_period_id' => $defaults['accounting_period_id'],
                    'branch_id' => $branchId,
                ]);

                // Dr Cost of Sales (using net amount only, excluding VAT)
                // This is based on sale_price, not the invoice total
                $this->createJournalEntryLine(
                    $cogsJournalEntry,
                    $costOfSalesAccount->id,
                    $totalCogsAmount,
                    0,
                    1,
                    __('journal.cost_of_sales_for_invoice', ['number' => $invoice->invoice_no])
                );

                // Cr Inventory (using net amount only, excluding VAT)
                // This reduces inventory by the sale_price amount, not the invoice total
                $this->createJournalEntryLine(
                    $cogsJournalEntry,
                    $inventoryAccount->id,
                    0,
                    $totalCogsAmount,
                    2,
                    __('journal.inventory_reduction_for_invoice', ['number' => $invoice->invoice_no])
                );

                // Link COGS journal to invoice
                \App\Models\InvoiceJournal::create([
                    'invoice_id' => $invoice->id,
                    'journal_entry_id' => $cogsJournalEntry->id,
                    'type' => 'sale_cogs',
                ]);

                Log::info(
                    "COGS journal entry created for invoice {$invoice->invoice_no}: ".
                    "Amount = {$totalCogsAmount} (net amount only, excluding VAT). ".
                    'This is calculated as sum(sale_price * quantity) for all inventory products.'
                );
            } else {
                // Log when COGS is skipped (only service products or no inventory products)
                Log::info("COGS journal entry skipped for invoice {$invoice->invoice_no}: No inventory products found (only service products or zero quantity).");
            }

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
            $paymentReference = $invoice->invoice_no.'-PAY-'.time();

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
            if (! $invoice->client || ! $invoice->client->isChartOfAccountConnected()) {
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
            if (! $bankAccount) {
                throw new Exception('Payment method must be connected to a Chart of Account for journal entries.');
            }

            if (! $clientAccountsReceivableAccount) {
                throw new Exception('Client Chart of Account not found.');
            }

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => now()->toDateString(),
                'reference' => $paymentReference,
                'description' => __('journal.payment_received_for_invoice', ['number' => $invoice->invoice_no]),
                'total_debit' => $amount,
                'total_credit' => $amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => InvoicePayment::class,
                'source_id' => $invoice->id,
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => $invoice->branch_id ?? (int) (Auth::user()->default_branch_id ?? 0),
            ]);

            // Create journal entry lines
            $this->createJournalEntryLine($journalEntry, $bankAccount->id, $amount, 0, 1, __('journal.cash_bank_receipt'));
            $this->createJournalEntryLine($journalEntry, $clientAccountsReceivableAccount->id, 0, $amount, 2, __('journal.accounts_receivable'));

            // Create bridge table record
            \App\Models\InvoiceJournal::create([
                'invoice_id' => $invoice->id,
                'journal_entry_id' => $journalEntry->id,
                'type' => 'payment',
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
    public function createPurchaseJournal(Purchase $purchase, int $userId, ?ChartOfAccount $paymentAccount = null): JournalEntry
    {
        DB::beginTransaction();

        try {
            // Check if journal entry already exists for this purchase
            // First check by source_type and source_id (most specific)
            $existingJournalEntry = JournalEntry::where('source_type', Purchase::class)
                ->where('source_id', $purchase->id)
                ->first();

            if ($existingJournalEntry) {
                Log::info("Journal entry already exists for purchase {$purchase->purchase_no} (ID: {$purchase->id}) with journal entry ID: {$existingJournalEntry->id}");
                DB::rollBack();

                return $existingJournalEntry;
            }

            // Also check if reference already exists (to avoid unique constraint violation)
            // This could happen if a journal entry was created manually with the same reference
            // If it exists, we'll use a unique reference by appending the purchase ID
            $reference = $purchase->purchase_no;
            $existingByReference = JournalEntry::where('reference', $reference)->first();

            if ($existingByReference) {
                Log::warning("Journal entry with reference '{$reference}' already exists (ID: {$existingByReference->id}). Using unique reference: {$reference}-PUR-{$purchase->id}");
                $reference = $purchase->purchase_no.'-PUR-'.$purchase->id;
            }

            // Determine payment account based on payment type
            // If payment account is provided (cash/bank payment), use it
            // Otherwise, use supplier account (credit purchase)
            if ($paymentAccount) {
                $creditAccount = $paymentAccount;
                Log::info("Using payment account (cash/bank) for purchase journal: Account ID {$paymentAccount->id}");
            } else {
                // Validate supplier has chart of account
                if (! $purchase->supplier || ! $purchase->supplier->isChartOfAccountConnected()) {
                    throw new Exception('Supplier must have a Chart of Account assigned for journal entries.');
                }

                // Get supplier-specific accounts payable account for credit purchases
                $creditAccount = $purchase->supplier->chartOfAccount;

                if (! $creditAccount) {
                    throw new Exception('Supplier Chart of Account not found.');
                }
                Log::info("Using supplier account (credit purchase) for purchase journal: Account ID {$creditAccount->id}");
            }

            // Get purchase products
            $purchaseProducts = $purchase->purchaseProducts;
            if (! $purchaseProducts || $purchaseProducts->count() === 0) {
                throw new Exception('No products found for this purchase.');
            }

            Log::info("Found {$purchaseProducts->count()} purchase products for PO {$purchase->purchase_no}");

            // Calculate inventory amount = sum of (product cost × quantity) for all products with inventory tracking
            $totalInventoryAmount = 0;
            $totalVatAmount = 0;

            foreach ($purchaseProducts as $purchaseProduct) {
                // Skip products without inventory tracking (services)
                $product = $purchaseProduct->product;
                if ($product && $product->is_service) {
                    $productName = $product->name ?? 'Unknown';
                    Log::info("Skipping service product '{$productName}' from journal entry (no inventory tracking)");
                    // Still include VAT for service products
                    $productVatAmount = $purchaseProduct->tax_amount ?? 0;
                    $totalVatAmount += $productVatAmount;

                    continue;
                }

                // Calculate inventory amount: product cost × quantity
                $productCost = $purchaseProduct->purchase_price ?? 0;
                $quantity = $purchaseProduct->quantity ?? 0;
                $lineInventoryAmount = $productCost * $quantity;
                $totalInventoryAmount += $lineInventoryAmount;

                // Add VAT amount from product
                $productVatAmount = $purchaseProduct->tax_amount ?? 0;
                $totalVatAmount += $productVatAmount;

                $productName = $product->name ?? 'Unknown';
                Log::info("Product: {$productName}, Cost: {$productCost}, Quantity: {$quantity}, Inventory Amount: {$lineInventoryAmount}, VAT: {$productVatAmount}");
            }

            // Skip journal entry if no products have inventory tracking (all are services)
            if ($totalInventoryAmount == 0) {
                Log::info("Skipping journal entry creation for purchase {$purchase->purchase_no}: No products with inventory tracking found.");
                DB::rollBack();
                throw new Exception('Cannot create journal entry: All products in this purchase are services and do not have inventory tracking.');
            }

            // Get Inventory account from routing settings
            $inventoryAccount = $this->getInventoryAccount($purchase->branch_id);
            if (! $inventoryAccount) {
                throw new Exception('Inventory account must be configured in account routing settings to create purchase journal entry.');
            }

            // Get VAT Input account
            $vatAccount = $totalVatAmount > 0 ? $this->getVatAccountForPurchase($purchase) : null;
            if ($totalVatAmount > 0 && ! $vatAccount) {
                throw new Exception('VAT Input account must be configured in account routing settings to create purchase journal entry with VAT.');
            }

            // Calculate total amount = inventory + VAT
            $totalAmount = $totalInventoryAmount + $totalVatAmount;

            // Validate balance
            if (abs($totalAmount - ($totalInventoryAmount + $totalVatAmount)) > 0.01) {
                throw new Exception('Journal entry calculation error: Total amount does not match inventory + VAT.');
            }

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();
            $branchId = $purchase->branch_id ?? (int) (Auth::user()->default_branch_id ?? 0);

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $purchase->purchase_date,
                'entry_type' => JournalEntryType::Purchases,
                'reference' => $reference,
                'description' => __('journal.purchase', ['number' => $purchase->purchase_no]),
                'total_debit' => $totalAmount,
                'total_credit' => $totalAmount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => Purchase::class,
                'source_id' => $purchase->id,
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => $branchId,
            ]);

            $lineNumber = 1;

            // Line 1: Debit Inventory
            Log::info("Creating journal line {$lineNumber}: Debit Inventory - Account ID: {$inventoryAccount->id}, Amount: {$totalInventoryAmount}");
            $this->createJournalEntryLine($journalEntry, $inventoryAccount->id, $totalInventoryAmount, 0, $lineNumber, __('journal.inventory_for_purchase', ['number' => $purchase->purchase_no]));
            $lineNumber++;

            // Line 2: Debit VAT Input (if applicable)
            if ($totalVatAmount > 0 && $vatAccount) {
                Log::info("Creating journal line {$lineNumber}: Debit VAT Input - Account ID: {$vatAccount->id}, Amount: {$totalVatAmount}");
                $this->createJournalEntryLine($journalEntry, $vatAccount->id, $totalVatAmount, 0, $lineNumber, __('journal.vat_input_for_purchase', ['number' => $purchase->purchase_no]));
                $lineNumber++;
            }

            // Line 3: Credit Cash/Bank/Supplier
            Log::info("Creating journal line {$lineNumber}: Credit Payment Account - Account ID: {$creditAccount->id}, Amount: {$totalAmount}");
            $this->createJournalEntryLine($journalEntry, $creditAccount->id, 0, $totalAmount, $lineNumber, __('journal.payment_for_purchase', ['number' => $purchase->purchase_no]));

            // Create bridge table record
            Log::info("Creating purchase journal bridge record for purchase ID: {$purchase->id}, journal entry ID: {$journalEntry->id}");
            $purchaseJournal = \App\Models\PurchaseJournal::create([
                'purchase_id' => $purchase->id,
                'journal_entry_id' => $journalEntry->id,
                'type' => 'purchase',
            ]);
            Log::info("Purchase journal bridge record created with ID: {$purchaseJournal->id}");

            DB::commit();

            return $journalEntry;
        } catch (Exception $e) {
            DB::rollBack();
            Log::error('Purchase journal creation failed: '.$e->getMessage());
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
            $paymentReference = $purchase->purchase_no.'-PAY-'.time();

            // Get the purchase payment to check for existing journal entry
            $purchasePayment = $purchase->purchasePayments()->latest()->first();

            // Check if journal entry already exists for this payment (very unlikely but safe)
            $purchasePaymentId = $purchasePayment ? $purchasePayment->id : null;
            $existingJournalEntry = null;
            if ($purchasePaymentId) {
                $existingJournalEntry = JournalEntry::where('reference', $paymentReference)
                    ->where('source_type', PurchasePayment::class)
                    ->where('source_id', $purchasePaymentId)
                    ->first();
            }

            if ($existingJournalEntry) {
                Log::info("Journal entry already exists for purchase payment {$paymentReference} with ID: {$existingJournalEntry->id}");
                DB::rollBack();

                return $existingJournalEntry;
            }

            // Validate supplier has chart of account
            if (! $purchase->supplier || ! $purchase->supplier->isChartOfAccountConnected()) {
                throw new Exception('Supplier must have a Chart of Account assigned for journal entries.');
            }

            // Get supplier-specific accounts payable account
            $supplierAccountsPayableAccount = $purchase->supplier->chartOfAccount;

            // Get the bank account from the purchase payment transaction
            $bankAccount = null;
            $cashbookAccount = null;
            if ($purchasePayment && $purchasePayment->transaction_id) {
                $transaction = \App\Models\AccountTransaction::find($purchasePayment->transaction_id);
                if ($transaction && $transaction->account) {
                    $cashbookAccount = $transaction->account;
                    $bankAccount = $transaction->account->chartOfAccount;

                    // Validate that the cashbook account is connected to a chart of account
                    if (! $cashbookAccount->isChartOfAccountConnected()) {
                        throw new Exception($cashbookAccount->getChartOfAccountValidationMessage());
                    }
                }
            }

            // If no specific bank account found, throw error - we need a specific account
            if (! $bankAccount) {
                throw new Exception('Payment method must be connected to a Chart of Account for journal entries.');
            }

            if (! $supplierAccountsPayableAccount) {
                throw new Exception('Supplier Chart of Account not found.');
            }

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();

            // Get the purchase payment ID
            $purchasePaymentId = $purchasePayment ? $purchasePayment->id : $purchase->id;

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => now()->toDateString(),
                'reference' => $paymentReference,
                'description' => __('journal.payment_made_for_purchase', ['number' => $purchase->purchase_no]),
                'total_debit' => $amount,
                'total_credit' => $amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => PurchasePayment::class,
                'source_id' => $purchasePaymentId,
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => $purchase->branch_id ?? (int) (Auth::user()->default_branch_id ?? 0),
            ]);

            // Create journal entry lines
            $this->createJournalEntryLine($journalEntry, $supplierAccountsPayableAccount->id, $amount, 0, 1, __('journal.reduction_in_accounts_payable_for_purchase', ['number' => $purchase->purchase_no]));
            $this->createJournalEntryLine($journalEntry, $bankAccount->id, 0, $amount, 2, __('journal.cash_bank_payment_for_purchase', ['number' => $purchase->purchase_no]));

            // Create bridge table record
            \App\Models\PurchaseJournal::create([
                'purchase_id' => $purchase->id,
                'journal_entry_id' => $journalEntry->id,
                'type' => 'payment',
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
                $branchId = \Illuminate\Support\Facades\Auth::user()->default_branch_id ?? null;
                $expenseAccount = \App\Models\ChartOfAccount::forBranch($branchId)->find($expense->expense_account_id);
            }

            // Fallback to default if no specific account selected
            if (! $expenseAccount) {
                $expenseAccount = $this->getDefaultAccount('Operating Expenses', 'Expense');
            }

            // Try to get the bank account from the expense's linked transaction
            $bankAccount = null;
            $cashbookAccount = null;
            if ($expense->transaction_id) {
                $transaction = \App\Models\AccountTransaction::find($expense->transaction_id);
                if ($transaction && $transaction->account) {
                    $account = $transaction->account;
                    if ($account && $account->chartOfAccount) {
                        $cashbookAccount = $account;
                        $bankAccount = $account->chartOfAccount;

                        // Validate that the cashbook account is connected to a chart of account
                        if (! $cashbookAccount->isChartOfAccountConnected()) {
                            throw new Exception($cashbookAccount->getChartOfAccountValidationMessage());
                        }
                    }
                }
            }

            // Fall back to default bank account if no specific one found
            if (! $bankAccount) {
                $bankAccount = $this->getDefaultAccount('Bank Accounts', 'Asset');
            }

            // Provide detailed error messages for missing accounts
            if (! $expenseAccount && ! $bankAccount) {
                throw new Exception('Required chart of accounts not found. Please ensure both an expense account and a bank/payment account are configured.');
            } elseif (! $expenseAccount) {
                throw new Exception('Expense account not found. Please configure an expense account in account routing settings or ensure a default "Operating Expenses" account exists in the chart of accounts.');
            } elseif (! $bankAccount) {
                throw new Exception('Bank/payment account not found. Please ensure the payment account is connected to a Chart of Account, or configure a default "Bank Accounts" account in the chart of accounts.');
            }

            // Debug: Log the expense amount being used for journal
            Log::info('Creating journal entry for expense ID: '.$expense->id.' with amount: '.$expense->amount);

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $expense->date,
                'reference' => $expense->id,
                'description' => __('journal.expense', ['reason' => $expense->reason]),
                'total_debit' => $expense->amount,
                'total_credit' => $expense->amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => Expense::class,
                'source_id' => $expense->id,
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => $expense->branch_id ?? (int) (Auth::user()->default_branch_id ?? 0),
            ]);

            // Create journal entry lines
            Log::info('Creating journal line 1: Debit to expense account '.$expenseAccount->id.' with amount: '.$expense->amount);
            $this->createJournalEntryLine($journalEntry, $expenseAccount->id, $expense->amount, 0, 1, __('journal.expense', ['reason' => $expense->reason]));

            Log::info('Creating journal line 2: Credit to bank account '.$bankAccount->id.' with amount: '.$expense->amount);
            $this->createJournalEntryLine($journalEntry, $bankAccount->id, 0, $expense->amount, 2, __('journal.cash_bank_payment_for_expense'));

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
            if (! $nonInvoicePayment->client || ! $nonInvoicePayment->client->isChartOfAccountConnected()) {
                throw new Exception('Client must have a Chart of Account assigned for journal entries.');
            }

            // Get client-specific accounts receivable account
            $clientAccountsReceivableAccount = $nonInvoicePayment->client->chartOfAccount;

            if (! $clientAccountsReceivableAccount) {
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
                    if (! $cashbookAccount->isChartOfAccountConnected()) {
                        throw new Exception($cashbookAccount->getChartOfAccountValidationMessage());
                    }
                }
            }

            // If no specific bank account found, throw error - we need a specific account
            if (! $bankAccount) {
                throw new Exception('Payment method must be connected to a Chart of Account for journal entries.');
            }

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $nonInvoicePayment->date,
                'reference' => 'NIP-'.$nonInvoicePayment->id.'-PAY-'.time(),
                'description' => __('journal.non_invoice_payment', ['note' => $nonInvoicePayment->note]),
                'total_debit' => $nonInvoicePayment->amount,
                'total_credit' => $nonInvoicePayment->amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => NonInvoicePayment::class,
                'source_id' => $nonInvoicePayment->id,
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => $nonInvoicePayment->branch_id ?? (int) (Auth::user()->default_branch_id ?? 0),
            ]);

            // Create journal entry lines based on payment type
            // type 1: Payment received from client (Debit Bank, Credit AR)
            // type 0: Payment sent to client (Debit AR, Credit Bank)
            if (intval($nonInvoicePayment->type) === 1) {
                $this->createJournalEntryLine($journalEntry, $bankAccount->id, $nonInvoicePayment->amount, 0, 1, __('journal.cash_bank_receipt_for_non_invoice_payment'));
                $this->createJournalEntryLine($journalEntry, $clientAccountsReceivableAccount->id, 0, $nonInvoicePayment->amount, 2, __('journal.reduction_in_client_accounts_receivable'));
            } else {
                $this->createJournalEntryLine($journalEntry, $clientAccountsReceivableAccount->id, $nonInvoicePayment->amount, 0, 1, __('journal.accounts_receivable'));
                $this->createJournalEntryLine($journalEntry, $bankAccount->id, 0, $nonInvoicePayment->amount, 2, __('journal.cash_bank_payment_for_non_purchase'));
            }

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
                    if (! $cashbookAccount->isChartOfAccountConnected()) {
                        throw new Exception($cashbookAccount->getChartOfAccountValidationMessage());
                    }
                }
            }

            // Fall back to default bank account if no specific one found
            if (! $bankAccount) {
                $bankAccount = $this->getDefaultAccount('Bank Accounts', 'Asset');
            }

            if (! $loanAccount || ! $bankAccount) {
                throw new Exception('Required chart of accounts not found.');
            }

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $loanPayment->payment_date,
                'reference' => $loanPayment->id,
                'description' => __('journal.loan_payment', ['note' => $loanPayment->note]),
                'total_debit' => $loanPayment->amount,
                'total_credit' => $loanPayment->amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => LoanPayment::class,
                'source_id' => $loanPayment->id,
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => $loanPayment->branch_id ?? (int) (Auth::user()->default_branch_id ?? 0),
            ]);

            // Create journal entry lines
            $this->createJournalEntryLine($journalEntry, $loanAccount->id, $loanPayment->amount, 0, 1, __('journal.reduction_in_loans_payable'));
            $this->createJournalEntryLine($journalEntry, $bankAccount->id, 0, $loanPayment->amount, 2, __('journal.cash_bank_payment_for_loan'));

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
     * Create journal entry for supplier non-purchase payment
     */
    public function createNonPurchasePaymentJournal(\App\Models\NonPurchasePayment $nonPurchasePayment, int $userId): JournalEntry
    {
        DB::beginTransaction();

        try {
            // Validate supplier has chart of account
            if (! $nonPurchasePayment->supplier || ! $nonPurchasePayment->supplier->isChartOfAccountConnected()) {
                throw new Exception('Supplier must have a Chart of Account assigned for journal entries.');
            }

            // Get supplier-specific accounts payable account
            $supplierAccountsPayableAccount = $nonPurchasePayment->supplier->chartOfAccount;

            if (! $supplierAccountsPayableAccount) {
                throw new Exception('Supplier Chart of Account not found.');
            }

            // Try to get the bank account from the non-purchase payment transaction
            $bankAccount = null;
            $cashbookAccount = null;
            if ($nonPurchasePayment->transaction_id) {
                $transaction = \App\Models\AccountTransaction::find($nonPurchasePayment->transaction_id);
                if ($transaction && $transaction->account) {
                    $cashbookAccount = $transaction->account;
                    $bankAccount = $transaction->account->chartOfAccount;

                    // Validate that the cashbook account is connected to a chart of account
                    if (! $cashbookAccount->isChartOfAccountConnected()) {
                        throw new Exception($cashbookAccount->getChartOfAccountValidationMessage());
                    }
                }
            }

            // If no specific bank account found, throw error - we need a specific account
            if (! $bankAccount) {
                throw new Exception('Payment method must be connected to a Chart of Account for journal entries.');
            }

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $nonPurchasePayment->date,
                'reference' => 'NPP-'.$nonPurchasePayment->id.'-PAY-'.time(),
                'description' => __('journal.supplier_non_purchase_payment'),
                'total_debit' => $nonPurchasePayment->amount,
                'total_credit' => $nonPurchasePayment->amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => \App\Models\NonPurchasePayment::class,
                'source_id' => $nonPurchasePayment->id,
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => $nonPurchasePayment->branch_id ?? (int) (Auth::user()->default_branch_id ?? 0),
            ]);

            // Create journal entry lines based on payment type
            // type 1: Payment sent to supplier (Debit AP, Credit Bank)
            // type 0: Payment received from supplier (Debit Bank, Credit AP)
            if (intval($nonPurchasePayment->type) === 1) {
                $this->createJournalEntryLine($journalEntry, $supplierAccountsPayableAccount->id, $nonPurchasePayment->amount, 0, 1, __('journal.reduction_in_accounts_payable'));
                $this->createJournalEntryLine($journalEntry, $bankAccount->id, 0, $nonPurchasePayment->amount, 2, __('journal.cash_bank_payment_for_non_purchase'));
            } else {
                $this->createJournalEntryLine($journalEntry, $bankAccount->id, $nonPurchasePayment->amount, 0, 1, __('journal.cash_bank_receipt'));
                $this->createJournalEntryLine($journalEntry, $supplierAccountsPayableAccount->id, 0, $nonPurchasePayment->amount, 2, __('journal.accounts_payable'));
            }

            DB::commit();

            return $journalEntry;
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Create journal entry for payment voucher
     */
    public function createPaymentVoucherJournal(PaymentVoucher $paymentVoucher, int $userId): JournalEntry
    {
        DB::beginTransaction();

        try {
            // Get the bank account from the voucher transaction
            $bankAccount = null;
            if ($paymentVoucher->transaction_id) {
                $transaction = AccountTransaction::find($paymentVoucher->transaction_id);
                if ($transaction && $transaction->account && $transaction->account->chartOfAccount) {
                    $bankAccount = $transaction->account->chartOfAccount;

                    // Validate that the cashbook account is connected to a chart of account
                    if (! $transaction->account->isChartOfAccountConnected()) {
                        throw new Exception($transaction->account->getChartOfAccountValidationMessage());
                    }
                }
            }

            // If no specific bank account found, throw error - we need a specific account
            if (! $bankAccount) {
                throw new Exception('Payment method must be connected to a Chart of Account for journal entries.');
            }

            // Get the entity account based on entity type
            $entityAccount = null;

            if ($paymentVoucher->entity_type === 'client') {
                // For client vouchers, use client's chart of account
                if (! $paymentVoucher->client || ! $paymentVoucher->client->isChartOfAccountConnected()) {
                    throw new Exception('Client must have a Chart of Account assigned for journal entries.');
                }
                $entityAccount = $paymentVoucher->client->chartOfAccount;

                if (! $entityAccount) {
                    throw new Exception('Client Chart of Account not found.');
                }
            } elseif ($paymentVoucher->entity_type === 'supplier') {
                // For supplier vouchers, use supplier's chart of account
                if (! $paymentVoucher->supplier || ! $paymentVoucher->supplier->isChartOfAccountConnected()) {
                    throw new Exception('Supplier must have a Chart of Account assigned for journal entries.');
                }
                $entityAccount = $paymentVoucher->supplier->chartOfAccount;

                if (! $entityAccount) {
                    throw new Exception('Supplier Chart of Account not found.');
                }
            } elseif ($paymentVoucher->entity_type === 'chart_of_account') {
                // For chart of account vouchers, use the chart of account directly
                if (! $paymentVoucher->chartOfAccount) {
                    throw new Exception('Chart of Account not found.');
                }
                $entityAccount = $paymentVoucher->chartOfAccount;
            }

            if (! $entityAccount) {
                throw new Exception('Entity Chart of Account not found.');
            }

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();

            // Generate reference
            $voucherReference = 'VOUCHER-'.$paymentVoucher->id.'-'.($paymentVoucher->voucher_type ? 'RECEIVE' : 'SEND').'-'.time();

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $paymentVoucher->date,
                'reference' => $voucherReference,
                'description' => __('journal.payment_voucher', [
                    'type' => $paymentVoucher->voucher_type ? __('journal.receive') : __('journal.send'),
                    'note' => $paymentVoucher->note ?? '',
                ]),
                'total_debit' => $paymentVoucher->amount,
                'total_credit' => $paymentVoucher->amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => PaymentVoucher::class,
                'source_id' => $paymentVoucher->id,
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => $paymentVoucher->branch_id ?? (int) (Auth::user()->default_branch_id ?? 0),
            ]);

            // Create journal entry lines based on voucher type
            // voucher_type 1 (Receive): Payment received - Debit Bank, Credit Entity Account
            // voucher_type 0 (Send): Payment sent - Debit Entity Account, Credit Bank
            if (intval($paymentVoucher->voucher_type) === 1) {
                // Receive voucher: Money coming in
                $this->createJournalEntryLine($journalEntry, $bankAccount->id, $paymentVoucher->amount, 0, 1, __('journal.cash_bank_receipt'));
                $this->createJournalEntryLine($journalEntry, $entityAccount->id, 0, $paymentVoucher->amount, 2, __('journal.payment_received'));
            } else {
                // Send voucher: Money going out
                $this->createJournalEntryLine($journalEntry, $entityAccount->id, $paymentVoucher->amount, 0, 1, __('journal.payment_sent'));
                $this->createJournalEntryLine($journalEntry, $bankAccount->id, 0, $paymentVoucher->amount, 2, __('journal.cash_bank_payment'));
            }

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
    private function createJournalEntryLine(JournalEntry $journalEntry, int $accountId, float $debitAmount, float $creditAmount, int $lineNumber, string $description, ?int $costCenterId = null): JournalEntryLine
    {
        $data = [
            'journal_entry_id' => $journalEntry->id,
            'chart_of_account_id' => $accountId,
            'debit_amount' => $debitAmount,
            'credit_amount' => $creditAmount,
            'description' => $description,
            'line_number' => $lineNumber,
        ];

        // Only include cost_center_id if it's not null and the column exists
        if ($costCenterId !== null) {
            // Check if the column exists in the database
            if (Schema::hasColumn('journal_entry_lines', 'cost_center_id')) {
                $data['cost_center_id'] = $costCenterId;
            }
        }

        return JournalEntryLine::create($data);
    }

    /**
     * Get default account by name and type
     */
    private function getDefaultAccount(string $accountName, string $typeName): ?ChartOfAccount
    {
        $branchId = \Illuminate\Support\Facades\Auth::user()->default_branch_id ?? null;

        return ChartOfAccount::forBranch($branchId)
            ->whereHas('type', function ($query) use ($typeName) {
                $query->where('name', $typeName);
            })
            ->where('name', 'like', "%{$accountName}%")
            ->where('is_active', true)
            ->first();
    }

    /**
     * Get inventory account from routing settings
     */
    private function getInventoryAccount(?int $branchId = null): ?ChartOfAccount
    {
        $branchId = $branchId ?? Auth::user()->default_branch_id ?? null;

        $setting = AccountRoutingSetting::where('branch_id', $branchId)
            ->where('module', 'inventory')
            ->where('setting_key', 'inventory_account')
            ->where('is_active', true)
            ->first();

        if (! $setting || ! $setting->main_account_id) {
            return null;
        }

        return ChartOfAccount::forBranch($branchId)->find($setting->main_account_id);
    }

    /**
     * Get cost of sales account from routing settings
     */
    private function getCostOfSalesAccount(?int $branchId = null): ?ChartOfAccount
    {
        $branchId = $branchId ?? Auth::user()->default_branch_id ?? null;

        $setting = AccountRoutingSetting::where('branch_id', $branchId)
            ->where('module', 'inventory')
            ->where('setting_key', 'cost_of_sales_account')
            ->where('is_active', true)
            ->first();

        if (! $setting || ! $setting->main_account_id) {
            return null;
        }

        return ChartOfAccount::forBranch($branchId)->find($setting->main_account_id);
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

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $data['entry_date'],
                // Default to 'manual' for custom entries when entry_type is not explicitly provided
                'entry_type' => $data['entry_type'] ?? 'manual',
                'reference' => $data['reference'] ?? null,
                'description' => $data['description'],
                'notes' => $data['notes'] ?? null,
                'attachment' => $data['attachment'] ?? null,
                'total_debit' => $totalDebits,
                'total_credit' => $totalCredits,
                'status' => $data['status'] ?? 'draft',
                'created_by' => $userId,
                'posted_by' => $data['status'] === 'posted' ? $userId : null,
                'posted_at' => $data['status'] === 'posted' ? now() : null,
                'source_type' => $data['source_type'] ?? null,
                'source_id' => $data['source_id'] ?? null,
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => $data['branch_id'] ?? (int) (Auth::user()->default_branch_id ?? 0),
            ]);

            // Create journal entry lines
            foreach ($data['lines'] as $index => $line) {
                $this->createJournalEntryLine(
                    $journalEntry,
                    $line['chart_of_account_id'],
                    $line['debit_amount'] ?? 0,
                    $line['credit_amount'] ?? 0,
                    $index + 1,
                    $line['description'] ?? '',
                    $line['cost_center_id'] ?? null
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

            if (! $salesVatAccount || ! $accountsReceivableAccount) {
                throw new Exception('Required VAT chart of accounts not found. Please ensure Sales VAT Payable and Accounts Receivable accounts exist.');
            }

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();

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
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => (int) (Auth::user()->default_branch_id ?? 0),
            ]);

            // Create journal entry lines
            $this->createJournalEntryLine($journalEntry, $accountsReceivableAccount->id, $vatAmount, 0, 1, __('journal.vat_receivable', ['description' => $description]));
            $this->createJournalEntryLine($journalEntry, $salesVatAccount->id, 0, $vatAmount, 2, __('journal.vat_payable', ['description' => $description]));

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

            if (! $purchaseVatAccount || ! $accountsPayableAccount) {
                throw new Exception('Required VAT chart of accounts not found. Please ensure Purchase VAT Receivable and Accounts Payable accounts exist.');
            }

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();

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
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => (int) (Auth::user()->default_branch_id ?? 0),
            ]);

            // Create journal entry lines
            $this->createJournalEntryLine($journalEntry, $purchaseVatAccount->id, $vatAmount, 0, 1, __('journal.vat_receivable', ['description' => $description]));
            $this->createJournalEntryLine($journalEntry, $accountsPayableAccount->id, 0, $vatAmount, 2, __('journal.vat_payable', ['description' => $description]));

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
                $this->createJournalEntryLine($journalEntry, $vatReceivableAccount->id, $vatAmount, 0, 3, __('journal.vat_receivable_for', ['reference' => $reference]));
                $this->createJournalEntryLine($journalEntry, $vatPayableAccount->id, 0, $vatAmount, 4, __('journal.vat_payable_for', ['reference' => $reference]));
            }
        } elseif ($type === 'purchase') {
            // For purchase VAT, debit VAT receivable, credit accounts payable
            $vatReceivableAccount = $this->getDefaultAccount('Purchase VAT Receivable', 'Asset');

            if ($vatReceivableAccount) {
                $reference = $source->purchase_no ?? 'Unknown';
                $this->createJournalEntryLine($journalEntry, $vatReceivableAccount->id, $vatAmount, 0, count($journalEntry->lines) + 1, __('journal.vat_receivable_for', ['reference' => $reference]));
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
    private function getDiscountAllowedAccount($branchId = null): ?ChartOfAccount
    {
        if (! $branchId) {
            $branchId = Auth::user()->default_branch_id ?? null;
        }

        $setting = AccountRoutingSetting::where('branch_id', $branchId)
            ->where('module', 'sales')
            ->where('setting_key', 'discount_allowed_account')
            ->first();

        if (! $setting || ! $setting->main_account_id) {
            return null;
        }

        $branchId = Auth::user()->default_branch_id ?? null;

        return ChartOfAccount::forBranch($branchId)->find($setting->main_account_id);
    }

    /**
     * Get transport expense account from routing settings
     */
    private function getTransportExpenseAccount($branchId = null): ?ChartOfAccount
    {
        if (! $branchId) {
            $branchId = Auth::user()->default_branch_id ?? null;
        }

        $setting = AccountRoutingSetting::where('branch_id', $branchId)
            ->where('setting_key', 'transport_expense_account')
            ->where('is_active', true)
            ->first();

        if (! $setting || ! $setting->main_account_id) {
            return null;
        }

        $branchId = Auth::user()->default_branch_id ?? null;

        return ChartOfAccount::forBranch($branchId)->find($setting->main_account_id);
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
            if (! $invoiceReturn->invoice || ! $invoiceReturn->invoice->client || ! $invoiceReturn->invoice->client->isChartOfAccountConnected()) {
                throw new Exception('Client must have a Chart of Account assigned for journal entries.');
            }

            // Get client-specific accounts receivable account
            $clientAccountsReceivableAccount = $invoiceReturn->invoice->client->chartOfAccount;

            if (! $clientAccountsReceivableAccount) {
                throw new Exception('Client Chart of Account not found.');
            }

            // Calculate return amounts from return items
            $returnProducts = $invoiceReturn->invoiceReturnProducts;

            // Debug: Log the return products count
            \Illuminate\Support\Facades\Log::info('Invoice Return Journal Creation - Return Products Count: '.$returnProducts->count());

            // If no return products, skip journal creation
            if ($returnProducts->count() === 0) {
                \Illuminate\Support\Facades\Log::info('No return products found, skipping journal entry creation');
                DB::rollBack();
                throw new Exception('No return products found for invoice return journal entry creation.');
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

                if (! $invoiceProduct) {
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
                    if (! isset($salesByAccount[$product->sales_account_id])) {
                        $salesByAccount[$product->sales_account_id] = 0;
                    }
                    $salesByAccount[$product->sales_account_id] += $returnNet;
                }

                // Group by VAT account
                if ($invoiceProduct->vatRate && $returnVat > 0) {
                    // Pass branch_id to get the correct VAT account from account routing settings
                    $vatAccount = $invoiceProduct->vatRate->getSalesVatAccount($invoiceReturn->invoice->branch_id ?? null);
                    if ($vatAccount) {
                        if (! isset($vatByAccount[$vatAccount->id])) {
                            $vatByAccount[$vatAccount->id] = 0;
                        }
                        $vatByAccount[$vatAccount->id] += $returnVat;
                    }
                }
            }

            // Debug: Log the calculated amounts
            \Illuminate\Support\Facades\Log::info('Invoice Return Journal - Total Return Amount: '.$totalReturnAmount);
            \Illuminate\Support\Facades\Log::info('Invoice Return Journal - Sales Accounts: '.json_encode($salesByAccount));
            \Illuminate\Support\Facades\Log::info('Invoice Return Journal - VAT Accounts: '.json_encode($vatByAccount));

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $invoiceReturn->date,
                'reference' => $invoiceReturn->return_no.'-RET-'.time(), // Make reference unique
                'description' => __('journal.invoice_return', ['number' => $invoiceReturn->return_no]),
                'total_debit' => $totalReturnAmount,
                'total_credit' => $totalReturnAmount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => \App\Models\InvoiceReturn::class,
                'source_id' => $invoiceReturn->id,
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => $invoiceReturn->branch_id ?? (int) (Auth::user()->default_branch_id ?? 0),
            ]);

            $lineNumber = 1;

            // Create sales revenue reversal lines (Credit to reverse sales)
            foreach ($salesByAccount as $accountId => $amount) {
                $this->createJournalEntryLine($journalEntry, $accountId, 0, $amount, $lineNumber, __('journal.sales_revenue_reversal_for_return', ['number' => $invoiceReturn->return_no]));
                $lineNumber++;
            }

            // Create VAT reversal lines (Credit to reverse VAT payable)
            foreach ($vatByAccount as $accountId => $amount) {
                $this->createJournalEntryLine($journalEntry, $accountId, 0, $amount, $lineNumber, __('journal.vat_payable_reversal_for_return', ['number' => $invoiceReturn->return_no]));
                $lineNumber++;
            }

            // Create discount reversal line if applicable
            if ($totalReturnDiscount > 0) {
                $discountAccount = $this->getDiscountAllowedAccount($invoiceReturn->invoice->branch_id ?? null);
                if ($discountAccount) {
                    $this->createJournalEntryLine($journalEntry, $discountAccount->id, 0, $totalReturnDiscount, $lineNumber, __('journal.discount_allowed_reversal_for_return', ['number' => $invoiceReturn->return_no]));
                    $lineNumber++;
                }
            }

            // Create accounts receivable reduction line (Debit to reduce client balance)
            $this->createJournalEntryLine($journalEntry, $clientAccountsReceivableAccount->id, $totalReturnAmount, 0, $lineNumber, __('journal.accounts_receivable_reduction_for_return', ['number' => $invoiceReturn->return_no]));

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
        $branchId = $purchase->branch_id ?? Auth::user()->default_branch_id ?? null;

        // Use the VatRate's getPurchaseVatAccount method which prioritizes routing settings
        if ($purchase->tax_id) {
            $vatRate = $purchase->purchaseTax;
            if ($vatRate) {
                return $vatRate->getPurchaseVatAccount($branchId);
            }
        }

        // Fallback: Get directly from routing settings if no tax rate on purchase
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
     * Get discount received account from routing settings
     */
    private function getDiscountReceivedAccount($branchId = null): ?ChartOfAccount
    {
        if (! $branchId) {
            $branchId = Auth::user()->default_branch_id ?? null;
        }

        $setting = AccountRoutingSetting::where('branch_id', $branchId)
            ->where('module', 'purchase')
            ->where('setting_key', 'discount_received_account')
            ->first();

        if (! $setting || ! $setting->main_account_id) {
            return null;
        }

        $branchId = Auth::user()->default_branch_id ?? null;

        return ChartOfAccount::forBranch($branchId)->find($setting->main_account_id);
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

            if (! $debitTransaction || ! $creditTransaction) {
                throw new Exception('Balance transfer transactions not found.');
            }

            // Get the cashbook accounts
            $fromAccount = $debitTransaction->cashbookAccount;
            $toAccount = $creditTransaction->cashbookAccount;

            if (! $fromAccount || ! $toAccount) {
                throw new Exception('Cashbook accounts not found for balance transfer.');
            }

            // Validate that both accounts are connected to chart of accounts
            if (! $fromAccount->isChartOfAccountConnected()) {
                throw new Exception($fromAccount->getChartOfAccountValidationMessage());
            }

            if (! $toAccount->isChartOfAccountConnected()) {
                throw new Exception($toAccount->getChartOfAccountValidationMessage());
            }

            // Get chart of account IDs
            $fromChartOfAccountId = $fromAccount->getChartOfAccountIdForJournal();
            $toChartOfAccountId = $toAccount->getChartOfAccountIdForJournal();

            if (! $fromChartOfAccountId || ! $toChartOfAccountId) {
                throw new Exception('Chart of accounts not found for balance transfer accounts.');
            }

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $balanceTransfer->date,
                'reference' => $balanceTransfer->slug,
                'description' => $balanceTransfer->note ?? __('journal.balance_transfer', ['reason' => $balanceTransfer->reason]),
                'total_debit' => $balanceTransfer->amount,
                'total_credit' => $balanceTransfer->amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => BalanceTansfer::class,
                'source_id' => $balanceTransfer->id,
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => $balanceTransfer->branch_id ?? (int) (Auth::user()->default_branch_id ?? 0),
            ]);

            // Create journal entry lines
            // Line 1: Debit the "To" account (money going in)
            $this->createJournalEntryLine(
                $journalEntry,
                $toChartOfAccountId,
                $balanceTransfer->amount,
                0,
                1,
                __('journal.balance_transfer_to', ['account' => $toAccount->bank_name, 'number' => $toAccount->account_number])
            );

            // Line 2: Credit the "From" account (money going out)
            $this->createJournalEntryLine(
                $journalEntry,
                $fromChartOfAccountId,
                0,
                $balanceTransfer->amount,
                2,
                __('journal.balance_transfer_from', ['account' => $fromAccount->bank_name, 'number' => $fromAccount->account_number])
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

            if (! $cashbookAccount) {
                throw new Exception('Cashbook account not found for balance adjustment.');
            }

            // Validate that the account is connected to a chart of account
            if (! $cashbookAccount->isChartOfAccountConnected()) {
                throw new Exception($cashbookAccount->getChartOfAccountValidationMessage());
            }

            // Get chart of account ID
            $chartOfAccountId = $cashbookAccount->getChartOfAccountIdForJournal();

            if (! $chartOfAccountId) {
                throw new Exception('Chart of accounts not found for balance adjustment account.');
            }

            // Determine the adjustment type and create appropriate journal entry
            $isAddBalance = $accountTransaction->type == 1; // 1 = Add, 0 = Remove

            // For balance adjustments, we need to create a journal entry that affects:
            // - The cashbook account (Asset)
            // - The selected second account from the form

            // Get the selected second account
            $branchId = Auth::user()->default_branch_id ?? null;
            $secondAccount = ChartOfAccount::forBranch($branchId)->find($accountTransaction->second_account_id);
            if (! $secondAccount) {
                throw new Exception('Second account not found. Please select a valid chart of account.');
            }

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $accountTransaction->transaction_date,
                // Ensure reference is unique to avoid duplicate key violations
                'reference' => $accountTransaction->slug.'-'.$accountTransaction->id,
                'description' => $accountTransaction->note ?? __('journal.balance_adjustment', ['reason' => $accountTransaction->reason]),
                'total_debit' => $accountTransaction->amount,
                'total_credit' => $accountTransaction->amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => AccountTransaction::class,
                'source_id' => $accountTransaction->id,
                'branch_id' => $accountTransaction->branch_id ?? (int) (Auth::user()->default_branch_id ?? 0),
            ]);

            if ($isAddBalance) {
                // Adding balance: Debit Cashbook Account, Credit Selected Account
                $this->createJournalEntryLine(
                    $journalEntry,
                    $chartOfAccountId,
                    $accountTransaction->amount,
                    0,
                    1,
                    __('journal.balance_added_to', ['account' => $cashbookAccount->bank_name, 'number' => $cashbookAccount->account_number])
                );

                $this->createJournalEntryLine(
                    $journalEntry,
                    $secondAccount->id,
                    0,
                    $accountTransaction->amount,
                    2,
                    __('journal.balance_adjustment_account', ['name' => $secondAccount->name])
                );
            } else {
                // Removing balance: Debit Selected Account, Credit Cashbook Account
                $this->createJournalEntryLine(
                    $journalEntry,
                    $secondAccount->id,
                    $accountTransaction->amount,
                    0,
                    1,
                    __('journal.balance_adjustment_account', ['name' => $secondAccount->name])
                );

                $this->createJournalEntryLine(
                    $journalEntry,
                    $chartOfAccountId,
                    0,
                    $accountTransaction->amount,
                    2,
                    __('journal.balance_removed_from', ['account' => $cashbookAccount->bank_name, 'number' => $cashbookAccount->account_number])
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

    /**
     * Create journal entry for purchase return
     */
    public function createPurchaseReturnJournal(PurchaseReturn $purchaseReturn, int $userId): JournalEntry
    {
        DB::beginTransaction();

        try {
            // Load the purchase return with its relationships
            $purchaseReturn->load(['purchase.supplier', 'purchase.purchaseTax', 'purchaseReturnProducts.product.productTax']);

            // Validate supplier has chart of account
            if (! $purchaseReturn->purchase || ! $purchaseReturn->purchase->supplier || ! $purchaseReturn->purchase->supplier->isChartOfAccountConnected()) {
                throw new Exception('Supplier must have a Chart of Account assigned for journal entries.');
            }

            // Get supplier-specific accounts payable account
            $supplierAccountsPayableAccount = $purchaseReturn->purchase->supplier->chartOfAccount;

            if (! $supplierAccountsPayableAccount) {
                throw new Exception('Supplier Chart of Account not found.');
            }

            // Calculate return amounts from return items
            $returnProducts = $purchaseReturn->purchaseReturnProducts;

            // Debug: Log the return products count
            \Illuminate\Support\Facades\Log::info('Purchase Return Journal Creation - Return Products Count: '.$returnProducts->count());

            // If no return products, skip journal creation
            if ($returnProducts->count() === 0) {
                \Illuminate\Support\Facades\Log::info('No return products found, skipping journal entry creation');
                DB::rollBack();
                throw new Exception('No return products found for purchase return journal entry creation.');
            }

            $totalReturnAmount = 0;
            $totalInventoryAmount = 0;
            $totalVatAmount = 0;

            foreach ($returnProducts as $returnProduct) {
                $product = $returnProduct->product;

                if (! $product) {
                    \Illuminate\Support\Facades\Log::warning('Product not found for return product ID: '.$returnProduct->id);

                    continue;
                }

                // Skip service products (products without inventory tracking)
                if ($product->is_service) {
                    \Illuminate\Support\Facades\Log::info("Skipping service product '{$product->name}' from purchase return journal entry (no inventory tracking)");
                    // Still include VAT for service products
                    $returnAmount = $this->calculateReturnAmountWithVat($returnProduct, $purchaseReturn);
                    $totalReturnAmount += $returnAmount;
                    // Calculate VAT amount for service products
                    $vatAmount = $this->calculateVatAmountForReturn($returnProduct, $purchaseReturn);
                    $totalVatAmount += $vatAmount;

                    continue;
                }

                // Calculate inventory amount: product cost × quantity (without VAT)
                $productCost = $returnProduct->purchase_price ?? 0;
                $quantity = $returnProduct->quantity ?? 0;
                $lineInventoryAmount = $productCost * $quantity;
                $totalInventoryAmount += $lineInventoryAmount;

                // Calculate return amount with VAT for total
                $returnAmount = $this->calculateReturnAmountWithVat($returnProduct, $purchaseReturn);
                $totalReturnAmount += $returnAmount;

                // Calculate VAT amount
                $vatAmount = $this->calculateVatAmountForReturn($returnProduct, $purchaseReturn);
                $totalVatAmount += $vatAmount;
            }

            // Skip journal entry if no products have inventory tracking (all are services)
            if ($totalInventoryAmount == 0 && $totalVatAmount == 0) {
                \Illuminate\Support\Facades\Log::info("Skipping journal entry creation for purchase return {$purchaseReturn->code}: No products with inventory tracking found.");
                DB::rollBack();
                throw new Exception('Cannot create journal entry: All products in this purchase return are services and do not have inventory tracking.');
            }

            // Get Inventory account from routing settings
            $inventoryAccount = $this->getInventoryAccount($purchaseReturn->branch_id);
            if ($totalInventoryAmount > 0 && ! $inventoryAccount) {
                throw new Exception('Inventory account must be configured in account routing settings to create purchase return journal entry.');
            }

            // Get VAT Input account if VAT exists
            $vatAccount = null;
            if ($totalVatAmount > 0) {
                $vatAccount = $this->getVatAccountForPurchase($purchaseReturn->purchase);
                if (! $vatAccount) {
                    throw new Exception('VAT Input account must be configured in account routing settings to create purchase return journal entry with VAT.');
                }
            }

            // Debug: Log the calculated amounts
            \Illuminate\Support\Facades\Log::info('Purchase Return Journal - Total Return Amount: '.$totalReturnAmount);
            \Illuminate\Support\Facades\Log::info('Purchase Return Journal - Total Inventory Amount: '.$totalInventoryAmount);
            \Illuminate\Support\Facades\Log::info('Purchase Return Journal - Total VAT Amount: '.$totalVatAmount);

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();

            // Calculate total amount = inventory + VAT
            $totalAmount = $totalInventoryAmount + $totalVatAmount;

            // Validate balance
            if (abs($totalAmount - ($totalInventoryAmount + $totalVatAmount)) > 0.01) {
                throw new Exception('Journal entry calculation error: Total amount does not match inventory + VAT.');
            }

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $purchaseReturn->date,
                'reference' => 'PR-'.$purchaseReturn->code.'-'.time(), // Make reference unique
                'description' => __('journal.purchase_return', ['code' => $purchaseReturn->code]),
                'total_debit' => $totalAmount,
                'total_credit' => $totalAmount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => PurchaseReturn::class,
                'source_id' => $purchaseReturn->id,
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => $purchaseReturn->branch_id ?? (int) (Auth::user()->default_branch_id ?? 0),
            ]);

            $lineNumber = 1;

            // Line 1: Debit Inventory (to reduce inventory for returned items)
            if ($totalInventoryAmount > 0 && $inventoryAccount) {
                \Illuminate\Support\Facades\Log::info("Creating journal line {$lineNumber}: Debit Inventory - Account ID: {$inventoryAccount->id}, Amount: {$totalInventoryAmount}");
                $this->createJournalEntryLine(
                    $journalEntry,
                    $inventoryAccount->id,
                    $totalInventoryAmount, // debit (to reduce inventory)
                    0, // credit
                    $lineNumber,
                    __('journal.inventory_reduction_for_purchase_return', ['code' => $purchaseReturn->code])
                );
                $lineNumber++;
            }

            // Line 2: Debit VAT Input (if applicable) - to reverse VAT input
            if ($totalVatAmount > 0 && $vatAccount) {
                \Illuminate\Support\Facades\Log::info("Creating journal line {$lineNumber}: Debit VAT Input - Account ID: {$vatAccount->id}, Amount: {$totalVatAmount}");
                $this->createJournalEntryLine(
                    $journalEntry,
                    $vatAccount->id,
                    $totalVatAmount, // debit (to reverse VAT input)
                    0, // credit
                    $lineNumber,
                    __('journal.vat_input_reversal_for_purchase_return', ['code' => $purchaseReturn->code])
                );
                $lineNumber++;
            }

            // Line 3: Credit Supplier Account (to reduce what we owe the supplier)
            $this->createJournalEntryLine(
                $journalEntry,
                $supplierAccountsPayableAccount->id,
                0, // debit
                $totalAmount, // credit (to reduce payable)
                $lineNumber,
                __('journal.purchase_return_reduce_payable', ['code' => $purchaseReturn->code])
            );

            // Create bridge table record if PurchaseReturnJournal model exists
            $bridgeModelPath = '\\App\\Models\\PurchaseReturnJournal';
            if (class_exists($bridgeModelPath)) {
                $bridgeModelPath::create([
                    'purchase_return_id' => $purchaseReturn->id,
                    'journal_entry_id' => $journalEntry->id,
                    'type' => 'return',
                ]);
            }

            DB::commit();

            return $journalEntry;
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Calculate return amount with VAT for a purchase return product
     */
    private function calculateReturnAmountWithVat($returnProduct, $purchaseReturn)
    {
        $returnQty = $returnProduct->quantity;
        $purchasePrice = $returnProduct->purchase_price;

        // Get the original purchase product to get tax information
        $originalProduct = \App\Models\PurchaseProduct::where('purchase_id', $purchaseReturn->purchase_id)
            ->where('product_id', $returnProduct->product_id)
            ->first();

        if ($originalProduct) {
            // Calculate unit discount
            $unitDiscount = $originalProduct->discount_amount > 0 && $originalProduct->quantity > 0
                ? $originalProduct->discount_amount / $originalProduct->quantity
                : 0;

            // Calculate unit net (price after discount)
            $unitNet = $purchasePrice - $unitDiscount;

            // Get VAT rate from the product's tax information or use default
            $vatRate = 15; // Default VAT rate for purchases
            if ($returnProduct->product && $returnProduct->product->productTax) {
                $vatRate = $returnProduct->product->productTax->rate;
            } elseif ($purchaseReturn->purchase && $purchaseReturn->purchase->purchaseTax) {
                $vatRate = $purchaseReturn->purchase->purchaseTax->rate;
            }

            // Calculate unit VAT
            $unitVat = ($unitNet * $vatRate) / 100;

            // Calculate unit total (net + VAT)
            $unitTotal = $unitNet + $unitVat;

            // Calculate return total for this product
            $productReturnTotal = $unitTotal * $returnQty;

            return round($productReturnTotal, 2);
        } else {
            // Fallback: if original product not found, use simple calculation
            return round($returnQty * $purchasePrice, 2);
        }
    }

    /**
     * Calculate VAT amount for a purchase return product
     */
    private function calculateVatAmountForReturn($returnProduct, $purchaseReturn)
    {
        $returnQty = $returnProduct->quantity;
        $purchasePrice = $returnProduct->purchase_price;

        // Get the original purchase product to get tax information
        $originalProduct = \App\Models\PurchaseProduct::where('purchase_id', $purchaseReturn->purchase_id)
            ->where('product_id', $returnProduct->product_id)
            ->first();

        if ($originalProduct) {
            // Calculate unit discount
            $unitDiscount = $originalProduct->discount_amount > 0 && $originalProduct->quantity > 0
                ? $originalProduct->discount_amount / $originalProduct->quantity
                : 0;

            // Calculate unit net (price after discount)
            $unitNet = $purchasePrice - $unitDiscount;

            // Get VAT rate from the product's tax information or use default
            $vatRate = 15; // Default VAT rate for purchases
            if ($returnProduct->product && $returnProduct->product->productTax) {
                $vatRate = $returnProduct->product->productTax->rate;
            } elseif ($purchaseReturn->purchase && $purchaseReturn->purchase->purchaseTax) {
                $vatRate = $purchaseReturn->purchase->purchaseTax->rate;
            }

            // Calculate unit VAT
            $unitVat = ($unitNet * $vatRate) / 100;

            // Calculate total VAT for returned quantity
            $totalVat = $unitVat * $returnQty;

            return round($totalVat, 2);
        } else {
            // Fallback: if original product not found, calculate VAT from price
            $vatRate = 15; // Default VAT rate
            if ($returnProduct->product && $returnProduct->product->productTax) {
                $vatRate = $returnProduct->product->productTax->rate;
            } elseif ($purchaseReturn->purchase && $purchaseReturn->purchase->purchaseTax) {
                $vatRate = $purchaseReturn->purchase->purchaseTax->rate;
            }
            $unitVat = ($purchasePrice * $vatRate) / 100;

            return round($unitVat * $returnQty, 2);
        }
    }
}
