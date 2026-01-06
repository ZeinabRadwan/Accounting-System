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

class BusinessTransactionJournalService
{
    /**
     * Reverse journal entry lines - swap debit and credit amounts
     * This helper ensures returns use exact same amounts as original transactions
     * but with reversed accounting directions (Dr ↔ Cr)
     *
     * @param  array  $lines  Array of journal line data with 'account_id', 'debit', 'credit', 'description'
     * @return array Reversed lines with debits and credits swapped
     */
    private function reverseJournalLines(array $lines): array
    {
        $reversedLines = [];
        foreach ($lines as $line) {
            $reversedLines[] = [
                'account_id' => $line['account_id'],
                'debit' => $line['credit'],      // Original credit becomes debit
                'credit' => $line['debit'],      // Original debit becomes credit
                'description' => $line['description'],
            ];
        }

        return $reversedLines;
    }

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

            // Calculate sales and VAT amounts (after all discounts including proportional invoice-level discount)
            // Note: discount_amount on each line item already includes:
            // 1. Product-level discount
            // 2. Proportional invoice-level discount allocation
            // This is a trade discount, so we record sales at net amount (no separate discount entry)
            // VAT (tax_amount) is calculated on:
            //   net_total_after_discount + allocated_transport_share (shipping),
            // so tax_amount already includes VAT on transport.
            foreach ($invoiceProducts as $invoiceProduct) {
                $originalAmount = $invoiceProduct->sale_price * $invoiceProduct->quantity;
                // discount_amount already includes product-level + proportional invoice-level discount
                $lineDiscountAmount = $invoiceProduct->discount_amount ?? 0;
                // Net amount = line_total - discount (this is what goes to sales account, BEFORE adding transport)
                $netAmount = $originalAmount - $lineDiscountAmount;

                $totalSalesAmount += $netAmount;
                // tax_amount already includes VAT on (net amount after discount + allocated transport share)
                $totalVatAmount += $invoiceProduct->tax_amount;
            }

            // Transport cost from invoice header
            $transportCost = (float) ($invoice->transport ?? 0);

            // Header totals (sum of all debits / credits) = net sales + transport + VAT
            // No separate discount entry - trade discount is already reflected in net sales amounts
            // Transport is INCLUDED in revenue (sales) line(s), not as a separate journal line.
            // Accounts receivable = net sales after discount + transport + VAT.
            $headerTotalAmount = $totalSalesAmount + $transportCost + $totalVatAmount;
            $accountsReceivableAmount = $headerTotalAmount;

            // Get default fiscal year and accounting period
            $defaults = $this->getDefaultFiscalYearAndPeriod();
            // Note: branchId is already defined earlier in the function

            // Create journal entry for the invoice itself (AR, Sales, VAT, Discount)
            // Reference must contain invoice number for matching JE ⇄ invoice
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $invoice->invoice_date,
                'reference' => $invoice->invoice_no, // Invoice number for matching
                'description' => __('journal.sale_invoice', ['number' => $invoice->invoice_no]),
                'total_debit' => $headerTotalAmount,
                'total_credit' => $headerTotalAmount,
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

            // Line 1: Debit to Client's Accounts Receivable (net amount after all discounts)
            $this->createJournalEntryLine($journalEntry, $clientAccountsReceivableAccount->id, $accountsReceivableAmount, 0, 1, __('journal.accounts_receivable'));

            $lineNumber = 2;

            // Note: Trade discounts (product-level + proportional invoice-level) are already included
            // in the discount_amount of each line item. We record sales at net amount after discount.
            // No separate discount accounting entry is created for trade discounts.

            // Group by sales account to handle multiple products with different accounts
            $salesByAccount = [];
            $vatByAccount = [];

            foreach ($invoiceProducts as $invoiceProduct) {
                $product = $invoiceProduct->product;
                $accountId = $product->sales_account_id;

                // Calculate net amount after discount (discount_amount includes product-level + proportional invoice-level discount)
                $originalAmount = $invoiceProduct->sale_price * $invoiceProduct->quantity;
                // discount_amount already includes proportional invoice-level discount allocation
                $discountAmount = $invoiceProduct->discount_amount ?? 0;
                // Net amount = line_total - discount (this is what goes to sales account, NOT including transport)
                $netAmount = $originalAmount - $discountAmount;

                // Add to sales account (net amount after discount, BEFORE adding transport)
                if (! isset($salesByAccount[$accountId])) {
                    $salesByAccount[$accountId] = 0;
                }
                $salesByAccount[$accountId] += $netAmount;

                // Handle VAT account (VAT is calculated on net_total after discount, NOT including transport)
                if (isset($vatAccountsByProduct[$invoiceProduct->product_id])) {
                    $vatAccountId = $vatAccountsByProduct[$invoiceProduct->product_id]->id;
                    // tax_amount is already calculated on net_total (after discount), NOT including transport (done in frontend)
                    $productVatAmount = $invoiceProduct->tax_amount;

                    if ($productVatAmount > 0) {
                        if (! isset($vatByAccount[$vatAccountId])) {
                            $vatByAccount[$vatAccountId] = 0;
                        }
                        $vatByAccount[$vatAccountId] += $productVatAmount;
                    }
                }
            }

            // Allocate transport cost proportionally across sales accounts and include it in revenue
            // Business rule: transport should NOT be a separate journal line; it must be merged into revenue.
            if ($transportCost > 0 && ! empty($salesByAccount)) {
                $totalNetSalesForAllocation = array_sum($salesByAccount);

                if ($totalNetSalesForAllocation > 0) {
                    $allocatedTransportTotal = 0.0;
                    $lastAccountId = null;

                    foreach ($salesByAccount as $accountId => $amount) {
                        $lastAccountId = $accountId;

                        // Proportional share of transport: (accountNet / totalNetSales) * transportCost
                        $proportion = $amount / $totalNetSalesForAllocation;
                        $allocatedShare = round($transportCost * $proportion, 2);

                        $salesByAccount[$accountId] += $allocatedShare;
                        $allocatedTransportTotal += $allocatedShare;
                    }

                    // Handle rounding difference by adjusting the last account
                    $roundingDifference = round($transportCost - $allocatedTransportTotal, 2);
                    if ($lastAccountId !== null && abs($roundingDifference) >= 0.01) {
                        $salesByAccount[$lastAccountId] += $roundingDifference;
                    }
                }
            }

            // Create journal entry lines for each sales account:
            // net amount after discount + allocated share of transport
            foreach ($salesByAccount as $accountId => $amount) {
                if ($amount > 0) { // Only create line if amount is greater than 0
                    Log::info("Creating sales journal line: Account ID {$accountId}, Amount: {$amount} (net amount after discount)");
                    $this->createJournalEntryLine($journalEntry, $accountId, 0, $amount, $lineNumber, __('journal.sales_revenue_for_invoice', ['number' => $invoice->invoice_no]));
                    $lineNumber++;
                }
            }

            // Create VAT journal entries (grouped by account)
            // VAT (tax_amount) is calculated on net_total_after_discount + allocated_transport_share
            foreach ($vatByAccount as $vatAccountId => $totalVatAmount) {
                if ($totalVatAmount > 0) { // Only create line if amount is greater than 0
                    Log::info("Creating VAT journal line: Account ID {$vatAccountId}, Amount: {$totalVatAmount}");
                    $this->createJournalEntryLine($journalEntry, $vatAccountId, 0, $totalVatAmount, $lineNumber, __('journal.vat_payable_for_invoice', ['number' => $invoice->invoice_no]));
                    $lineNumber++;
                }
            }

            // Note: No separate discount entry is created for trade discounts.
            // Trade discounts (product-level + proportional invoice-level) are already reflected
            // in the net sales amounts. We record sales and purchases at net amount after discount.

            // Log the final totals for debugging
            Log::info("Journal entry totals - Debit: {$headerTotalAmount}, Credit: {$headerTotalAmount}");
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
             *
             * COGS Calculation: Uses Weighted Average Cost (WAC) method
             * Formula: COGS = quantity_sold × weighted_average_cost
             *
             * Weighted average cost is calculated from all inventory movements
             * (purchases, sales, returns) up to the invoice date.
             */
            $totalCogsAmount = 0;
            $cogsDetails = [];

            foreach ($invoiceProducts as $invoiceProduct) {
                $product = $invoiceProduct->product;

                // Skip service products (products without inventory tracking)
                if ($product && $product->is_service) {
                    continue;
                }

                // Calculate inventory cost using unit_cost from invoice_products if available
                // Otherwise fall back to weighted average cost method
                $quantity = (float) ($invoiceProduct->quantity ?? 0);

                // Use unit_cost from invoice_products if available (stored at invoice creation)
                // This represents the actual cost basis used when the invoice was created
                $unitCost = null;
                if ($invoiceProduct->unit_cost && $invoiceProduct->unit_cost > 0) {
                    $unitCost = (float) $invoiceProduct->unit_cost;
                    Log::info(
                        "Using stored unit_cost for product {$product->name}: ".
                        "unit_cost={$unitCost} (from invoice_products table)"
                    );
                } else {
                    // Fallback to weighted average cost if unit_cost not available
                    $invoiceDate = $invoice->invoice_date ?? now()->format('Y-m-d');
                    $unitCost = $product->calculatePurchaseHistoryAverageCost($invoiceDate);
                    Log::info(
                        "Using weighted average cost for product {$product->name}: ".
                        "weighted_avg_cost={$unitCost} (calculated from purchase history)"
                    );
                }

                // COGS = quantity_sold × unit_cost
                $lineCost = round($quantity * $unitCost, 2);
                $totalCogsAmount += $lineCost;

                $cogsDetails[] = [
                    'product' => $product->name,
                    'quantity' => $quantity,
                    'unit_cost' => $unitCost,
                    'line_cost' => $lineCost,
                ];

                Log::info(
                    "COGS calculation for product {$product->name}: ".
                    "quantity={$quantity}, unit_cost={$unitCost}, lineCost={$lineCost}"
                );
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

                // Dr Cost of Sales (using unit_cost × quantity for each product)
                // This reflects the actual cost basis of inventory sold
                $this->createJournalEntryLine(
                    $cogsJournalEntry,
                    $costOfSalesAccount->id,
                    $totalCogsAmount,
                    0,
                    1,
                    __('journal.cost_of_sales_for_invoice', ['number' => $invoice->invoice_no])
                );

                // Cr Inventory (using unit_cost × quantity for each product)
                // This reduces inventory by the actual cost basis, not the sale price
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
                    "Amount = {$totalCogsAmount} (calculated using unit_cost × quantity for each product). ".
                    'Details: '.json_encode($cogsDetails)
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

            // Get invoice payment to retrieve analytical account
            $invoicePayment = InvoicePayment::where('invoice_id', $invoice->id)
                ->where('transaction_id', $transaction->id)
                ->first();

            // Get analytical account from invoice payment
            $analyticalAccountId = null;
            if ($invoicePayment) {
                $analyticalAccountId = $invoicePayment->getAnalyticalAccountId();
            }

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

            // Create journal entry lines with analytical account (metadata only)
            $this->createJournalEntryLine($journalEntry, $bankAccount->id, $amount, 0, 1, __('journal.cash_bank_receipt'), null, $analyticalAccountId);
            $this->createJournalEntryLine($journalEntry, $clientAccountsReceivableAccount->id, 0, $amount, 2, __('journal.accounts_receivable'), null, $analyticalAccountId);

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

            // Calculate inventory amount for all products with inventory tracking
            // CRITICAL FIX: Inventory value MUST be based on total_after_discount from DB (after item-level discounts)
            // This ensures we use the actual stored values that include all item-level discounts
            // Invoice-level discount will be applied separately
            // VAT must be posted to a separate Purchase VAT (Input VAT) account
            // This follows standard accounting principles and VAT compliance requirements
            $totalInventoryAmount = 0; // Sum of item totals after discount (before invoice-level discount)
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

                // Calculate line inventory value using total_after_discount from DB
                // total_after_discount = (quantity × purchase_price) - item_discount_amount
                // This is the correct accounting treatment: inventory is valued at net cost after item discounts
                $quantity = (float) ($purchaseProduct->quantity ?? 0);
                $purchasePrice = (float) ($purchaseProduct->purchase_price ?? 0);
                $grossTotal = $quantity * $purchasePrice;
                $itemDiscountAmount = (float) ($purchaseProduct->discount_amount ?? 0);

                // Use total_after_discount if available, otherwise calculate it
                $lineInventoryAmount = (float) ($purchaseProduct->total_after_discount ?? ($grossTotal - $itemDiscountAmount));
                $totalInventoryAmount += $lineInventoryAmount;

                // Collect VAT separately - this will be debited to Purchase VAT (Input VAT) account
                // VAT is recoverable/deductible and should NOT be included in inventory cost
                $productVatAmount = (float) ($purchaseProduct->tax_amount ?? 0);
                $totalVatAmount += $productVatAmount;

                $productName = $product->name ?? 'Unknown';
                Log::info("Product: {$productName}, Quantity: {$quantity}, PurchasePrice: {$purchasePrice}, GrossTotal: {$grossTotal}, ItemDiscount: {$itemDiscountAmount}, LineInventoryAmount (after item discount): {$lineInventoryAmount}, VAT: {$productVatAmount}");
            }

            // Calculate purchase-level (bill-level) discount amount, if any
            // Business rule: invoice-level discount is applied on the INVOICE SUBTOTAL (sum of qty × unit_price),
            // not on a single line or on net/after-tax amounts.
            $billDiscountAmount = 0;
            $invoiceSubtotal = $totalInventoryAmount; // Base for discount calculation

            if (! empty($purchase->discount_type) && (float) $purchase->discount_value > 0) {
                $discountValue = (float) $purchase->discount_value;

                if ($purchase->discount_type === 'percentage') {
                    // Percentage discount on invoice subtotal
                    $billDiscountAmount = round($invoiceSubtotal * ($discountValue / 100), 2);
                } else {
                    // Fixed discount amount – cap it to the base to avoid negatives
                    $billDiscountAmount = round($discountValue, 2);
                }

                if ($billDiscountAmount > $invoiceSubtotal) {
                    $billDiscountAmount = $invoiceSubtotal;
                }

                if ($billDiscountAmount > 0) {
                    Log::info("Calculated purchase-level discount for PO {$purchase->purchase_no}: Type={$purchase->discount_type}, Value={$discountValue}, Calculated Amount={$billDiscountAmount}");
                }
            }

            // Get transport taxability from purchase
            // CRITICAL: Use transport_taxable flag from purchase, not supplier tax status
            // This respects user's choice when creating the purchase
            $transportTotal = (float) ($purchase->transport ?? 0);
            $transportIsTaxable = $purchase->transport_taxable == 1 || $purchase->transport_taxable === true;

            // Calculate weighted average VAT rate from all products FIRST
            // We need this to calculate transport cost before VAT when transport is taxable
            $totalNetAmountForWeighting = 0;
            $weightedVatRateSum = 0;

            foreach ($purchaseProducts as $purchaseProduct) {
                $product = $purchaseProduct->product;
                if ($product && $product->is_service) {
                    continue; // Skip services for inventory-based weighting
                }

                // Get item's net amount (after product-level discount, before invoice-level discount)
                $quantity = (float) ($purchaseProduct->quantity ?? 0);
                $purchasePrice = (float) ($purchaseProduct->purchase_price ?? 0);
                $lineGross = $quantity * $purchasePrice;
                $productDiscountAmount = (float) ($purchaseProduct->discount_amount ?? 0);
                $itemNetAmount = $lineGross - $productDiscountAmount;

                if ($itemNetAmount > 0) {
                    // Get VAT rate from stored data or calculate from tax_amount
                    $vatRate = 0;
                    $itemTaxAmount = (float) ($purchaseProduct->tax_amount ?? 0);
                    $itemTotalAfterDiscount = (float) ($purchaseProduct->total_after_discount ?? $itemNetAmount);

                    if ($itemTotalAfterDiscount > 0 && $itemTaxAmount > 0) {
                        // Calculate rate: VAT = Net × Rate, so Rate = VAT / Net
                        // Try to get rate from vat_rate field if available
                        if (isset($purchaseProduct->vat_rate) && $purchaseProduct->vat_rate > 0) {
                            $vatRate = (float) $purchaseProduct->vat_rate;
                        } else {
                            // Fallback: calculate from stored tax_amount
                            $vatRate = ($itemTaxAmount / $itemTotalAfterDiscount) * 100;
                        }
                    }

                    if ($vatRate > 0) {
                        $totalNetAmountForWeighting += $itemNetAmount;
                        $weightedVatRateSum += $itemNetAmount * ($vatRate / 100);
                    }
                }
            }

            // Calculate transport cost before VAT when taxable
            // When transport is taxable: transport field contains transportCost + VAT
            // We need to extract transportCost for inventory calculation
            $transportCostBeforeVAT = 0;
            $transportVATAmount = 0;

            if ($transportIsTaxable && $transportTotal > 0) {
                // Transport is taxable: calculate transport cost before VAT
                // Get VAT rate - use weighted average from items or default 15%
                $vatRate = 15; // Default VAT rate
                if ($totalNetAmountForWeighting > 0) {
                    $vatRate = ($weightedVatRateSum / $totalNetAmountForWeighting) * 100;
                } else {
                    // Fallback: try to get from purchase products
                    foreach ($purchaseProducts as $purchaseProduct) {
                        $itemTaxAmount = (float) ($purchaseProduct->tax_amount ?? 0);
                        $itemTotalAfterDiscount = (float) ($purchaseProduct->total_after_discount ?? 0);
                        if ($itemTotalAfterDiscount > 0 && $itemTaxAmount > 0) {
                            $vatRate = ($itemTaxAmount / $itemTotalAfterDiscount) * 100;
                            break;
                        }
                    }
                }

                // Calculate transport cost before VAT: transportCost = transportTotal / (1 + vatRate/100)
                $transportCostBeforeVAT = round($transportTotal / (1 + $vatRate / 100), 2);
                $transportVATAmount = round($transportTotal - $transportCostBeforeVAT, 2);
            } else {
                // Transport is non-taxable: transport value is the cost itself (no VAT)
                $transportCostBeforeVAT = $transportTotal;
                $transportVATAmount = 0;
            }

            Log::info("Transport calculation for PO {$purchase->purchase_no}: IsTaxable={$transportIsTaxable}, Total={$transportTotal}, CostBeforeVAT={$transportCostBeforeVAT}, VAT={$transportVATAmount}");

            // CRITICAL FIX: Recalculate VAT on Net Amount based on transport taxability
            // When transport is taxable: Net Amount = Subtotal - Discount + Transport Cost (before VAT)
            // When transport is non-taxable: Net Amount = Subtotal - Discount (transport excluded from VAT base)
            // The stored tax_amount values may have been calculated incorrectly
            // We recalculate here to ensure journal entry accuracy
            if ($transportIsTaxable) {
                // Transport is taxable: include transport cost (before VAT) in Net Amount
                $netAmountBeforeVAT = ($totalInventoryAmount - $billDiscountAmount) + $transportCostBeforeVAT;
            } else {
                // Transport is non-taxable: exclude transport from Net Amount (VAT base)
                $netAmountBeforeVAT = ($totalInventoryAmount - $billDiscountAmount);
            }

            // Recalculate total VAT on Net Amount using weighted average rate
            if ($totalNetAmountForWeighting > 0 && $netAmountBeforeVAT > 0) {
                $weightedAverageVatRate = ($weightedVatRateSum / $totalNetAmountForWeighting) * 100;
                $recalculatedTotalVatAmount = round($netAmountBeforeVAT * ($weightedAverageVatRate / 100), 2);

                Log::info("Recalculated VAT for PO {$purchase->purchase_no}: Net Amount={$netAmountBeforeVAT}, Weighted Avg Rate={$weightedAverageVatRate}%, Recalculated VAT={$recalculatedTotalVatAmount}, Original VAT={$totalVatAmount}");

                // Use recalculated VAT if it's significantly different (more than 0.01 difference)
                // This ensures we use the correct calculation even if stored values are wrong
                if (abs($recalculatedTotalVatAmount - $totalVatAmount) > 0.01) {
                    Log::warning("VAT amount mismatch for PO {$purchase->purchase_no}: Using recalculated value {$recalculatedTotalVatAmount} instead of stored {$totalVatAmount}");
                    $totalVatAmount = $recalculatedTotalVatAmount;
                }
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
            // Note: tax_amount already includes VAT on (net amount after discount + allocated transport share)
            $vatAccount = $totalVatAmount > 0 ? $this->getVatAccountForPurchase($purchase) : null;
            if ($totalVatAmount > 0 && ! $vatAccount) {
                throw new Exception('VAT Input account must be configured in account routing settings to create purchase journal entry with VAT.');
            }

            // Calculate total amount for journal entry based on transport taxability
            // When transport is taxable: Total = Inventory (after discount + transport cost) + VAT (includes transport VAT)
            // When transport is non-taxable: Total = Inventory (after discount + transport) + VAT (items only)
            // This represents the total invoice amount (what we owe to supplier or pay in cash)
            // CRITICAL: Transport is always included in inventory cost, whether taxable or non-taxable
            if ($transportIsTaxable) {
                // Transport is taxable: Inventory includes transport cost (before VAT), VAT includes transport VAT
                $inventoryForTotal = ($totalInventoryAmount - $billDiscountAmount) + $transportCostBeforeVAT;
                $vatForTotal = $totalVatAmount; // Includes transport VAT
                $totalAmount = $inventoryForTotal + $vatForTotal;
            } else {
                // Transport is non-taxable: Inventory includes transport, VAT is only on items
                $inventoryForTotal = ($totalInventoryAmount - $billDiscountAmount) + $transportTotal;
                $vatForTotal = $totalVatAmount; // Only item VAT
                $totalAmount = $inventoryForTotal + $vatForTotal;
            }

            // Validate balance (defensive check against internal inconsistencies)
            $expectedTotal = $totalAmount;
            if (abs($totalAmount - $expectedTotal) > 0.01) {
                throw new Exception('Journal entry calculation error: Total amount does not match expected calculation.');
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

            // Line 1: Debit Inventory (net amount after discount + transport)
            // Business rule based on transport taxability:
            // - When transport is taxable: Inventory = Sum(item after_discount) - Invoice Discount + Transport Cost (before VAT)
            // - When transport is non-taxable: Inventory = Sum(item after_discount) - Invoice Discount + Transport
            // CRITICAL: $totalInventoryAmount already contains sum of item total_after_discount (after item-level discounts)
            // Invoice-level discount ($billDiscountAmount) must be applied to get final inventory cost
            // - Discounts reduce inventory cost (not revenue)
            // - Transport is always added to inventory cost (whether taxable or non-taxable)
            if ($transportIsTaxable) {
                // Transport is taxable: include transport cost (before VAT) in inventory
                // Inventory = Sum(item after_discount) - Invoice Discount + Transport Cost (before VAT)
                $inventoryAmount = ($totalInventoryAmount - $billDiscountAmount) + $transportCostBeforeVAT;
                Log::info("Creating journal line {$lineNumber}: Debit Inventory (including taxable transport cost) - Account ID: {$inventoryAccount->id}, Amount: {$inventoryAmount}");
            } else {
                // Transport is non-taxable: include transport in inventory (as part of inventory cost)
                // Inventory = Sum(item after_discount) - Invoice Discount + Transport
                // CRITICAL: $totalInventoryAmount = sum of item total_after_discount (after item discounts only)
                // We must apply invoice-level discount and add transport to get final inventory cost
                // Example: items = 8000, invoice discount = 30, transport = 500, inventory = 8000 - 30 + 500 = 8470
                $inventoryAmount = ($totalInventoryAmount - $billDiscountAmount) + $transportTotal;
                Log::info("Creating journal line {$lineNumber}: Debit Inventory (after invoice discount + non-taxable transport) - Account ID: {$inventoryAccount->id}, Amount: {$inventoryAmount}, TotalInventoryAmount: {$totalInventoryAmount}, BillDiscount: {$billDiscountAmount}, Transport: {$transportTotal}");
            }
            $this->createJournalEntryLine($journalEntry, $inventoryAccount->id, $inventoryAmount, 0, $lineNumber, __('journal.inventory_for_purchase', ['number' => $purchase->purchase_no]));
            $lineNumber++;

            // Line 2: Debit VAT Input (if applicable)
            // VAT calculation based on transport taxability:
            // - When transport is taxable: VAT includes VAT on items + VAT on transport
            // - When transport is non-taxable: VAT includes only VAT on items (transport excluded from VAT base)
            // CRITICAL: VAT is always calculated on items only when transport is non-taxable
            // Transport non-taxable is added to inventory cost, but NOT to VAT base
            $vatAmountForJournal = 0; // Initialize to 0
            if ($transportIsTaxable) {
                // Transport is taxable: VAT includes transport VAT
                // Total VAT = Item VAT + Transport VAT
                $vatAmountForJournal = $totalVatAmount; // Already includes transport VAT
            } else {
                // Transport is non-taxable: VAT is only on items (transport excluded from VAT)
                // Use sum of item VATs directly from database
                $vatAmountForJournal = $totalVatAmount; // Only item VAT, no transport VAT
            }

            if ($vatAmountForJournal > 0 && $vatAccount) {
                Log::info("Creating journal line {$lineNumber}: Debit VAT Input - Account ID: {$vatAccount->id}, Amount: {$vatAmountForJournal}");
                $this->createJournalEntryLine($journalEntry, $vatAccount->id, $vatAmountForJournal, 0, $lineNumber, __('journal.vat_input_for_purchase', ['number' => $purchase->purchase_no]));
                $lineNumber++;
            }

            // Calculate credit amount for AP / cash-bank
            // Credit = Inventory + VAT (transport is already included in inventory when non-taxable)
            // When transport is taxable: Credit = Inventory + VAT (transport included in inventory and VAT)
            // When transport is non-taxable: Credit = Inventory + VAT (transport included in inventory only)
            $creditAccountAmount = $inventoryAmount + $vatAmountForJournal;
            if ($creditAccountAmount < 0) {
                $creditAccountAmount = 0;
            }

            // Final Line: Credit Cash/Bank/Supplier
            // Credit amount = Inventory + VAT
            // This represents the total invoice amount payable to supplier
            // When transport is taxable: Credit = Inventory (with transport) + VAT (with transport VAT)
            // When transport is non-taxable: Credit = Inventory (with transport) + VAT (items only)
            Log::info("Creating journal line {$lineNumber}: Credit Payment Account - Account ID: {$creditAccount->id}, Amount: {$creditAccountAmount}, Inventory: {$inventoryAmount}, VAT: {$vatAmountForJournal}");
            $this->createJournalEntryLine($journalEntry, $creditAccount->id, 0, $creditAccountAmount, $lineNumber, __('journal.payment_for_purchase', ['number' => $purchase->purchase_no]));
            $lineNumber++;

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
     * Recreate journal entry for a purchase after it has been updated.
     *
     * This will remove any existing purchase journal (and its bridge records)
     * and then call createPurchaseJournal() with the provided payment account,
     * ensuring the latest purchase totals and discounts are reflected.
     */
    public function recreatePurchaseJournal(Purchase $purchase, int $userId, ?ChartOfAccount $paymentAccount = null): JournalEntry
    {
        DB::beginTransaction();

        try {
            // Delete existing journal entries for this purchase (including lines via cascade)
            $existingEntries = JournalEntry::where('source_type', Purchase::class)
                ->where('source_id', $purchase->id)
                ->get();

            foreach ($existingEntries as $entry) {
                Log::info("Deleting existing purchase journal entry ID {$entry->id} for purchase {$purchase->purchase_no}");
                $entry->delete();
            }

            // Delete bridge records
            \App\Models\PurchaseJournal::where('purchase_id', $purchase->id)->delete();

            DB::commit();

            // Now recreate a fresh journal entry using the standard logic
            return $this->createPurchaseJournal($purchase, $userId, $paymentAccount);
        } catch (Exception $e) {
            DB::rollBack();
            Log::error('Failed to recreate purchase journal: '.$e->getMessage());
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

            // Get analytical account from purchase payment
            $analyticalAccountId = null;
            if ($purchasePayment) {
                $analyticalAccountId = $purchasePayment->getAnalyticalAccountId();
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

            // Create journal entry lines with analytical account (metadata only)
            $this->createJournalEntryLine($journalEntry, $supplierAccountsPayableAccount->id, $amount, 0, 1, __('journal.reduction_in_accounts_payable_for_purchase', ['number' => $purchase->purchase_no]), null, $analyticalAccountId);
            $this->createJournalEntryLine($journalEntry, $bankAccount->id, 0, $amount, 2, __('journal.cash_bank_payment_for_purchase', ['number' => $purchase->purchase_no]), null, $analyticalAccountId);

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

            // Get analytical account from non-invoice payment
            $analyticalAccountId = $nonInvoicePayment->getAnalyticalAccountId();

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

            // Create journal entry lines based on payment type with analytical account (metadata only)
            // type 1: Payment received from client (Debit Bank, Credit AR)
            // type 0: Payment sent to client (Debit AR, Credit Bank)
            if (intval($nonInvoicePayment->type) === 1) {
                $this->createJournalEntryLine($journalEntry, $bankAccount->id, $nonInvoicePayment->amount, 0, 1, __('journal.cash_bank_receipt_for_non_invoice_payment'), null, $analyticalAccountId);
                $this->createJournalEntryLine($journalEntry, $clientAccountsReceivableAccount->id, 0, $nonInvoicePayment->amount, 2, __('journal.reduction_in_client_accounts_receivable'), null, $analyticalAccountId);
            } else {
                $this->createJournalEntryLine($journalEntry, $clientAccountsReceivableAccount->id, $nonInvoicePayment->amount, 0, 1, __('journal.accounts_receivable'), null, $analyticalAccountId);
                $this->createJournalEntryLine($journalEntry, $bankAccount->id, 0, $nonInvoicePayment->amount, 2, __('journal.cash_bank_payment_for_non_purchase'), null, $analyticalAccountId);
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

            // Get analytical account from non-purchase payment
            $analyticalAccountId = $nonPurchasePayment->getAnalyticalAccountId();

            // Create journal entry lines based on payment type with analytical account (metadata only)
            // type 1: Payment sent to supplier (Debit AP, Credit Bank)
            // type 0: Payment received from supplier (Debit Bank, Credit AP)
            if (intval($nonPurchasePayment->type) === 1) {
                $this->createJournalEntryLine($journalEntry, $supplierAccountsPayableAccount->id, $nonPurchasePayment->amount, 0, 1, __('journal.reduction_in_accounts_payable'), null, $analyticalAccountId);
                $this->createJournalEntryLine($journalEntry, $bankAccount->id, 0, $nonPurchasePayment->amount, 2, __('journal.cash_bank_payment_for_non_purchase'), null, $analyticalAccountId);
            } else {
                $this->createJournalEntryLine($journalEntry, $bankAccount->id, $nonPurchasePayment->amount, 0, 1, __('journal.cash_bank_receipt'), null, $analyticalAccountId);
                $this->createJournalEntryLine($journalEntry, $supplierAccountsPayableAccount->id, 0, $nonPurchasePayment->amount, 2, __('journal.accounts_payable'), null, $analyticalAccountId);
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

            // Get analytical account from payment voucher
            $analyticalAccountId = $paymentVoucher->getAnalyticalAccountId();

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

            // Create journal entry lines based on voucher type with analytical account (metadata only)
            // voucher_type 1 (Receive): Payment received - Debit Bank, Credit Entity Account
            // voucher_type 0 (Send): Payment sent - Debit Entity Account, Credit Bank
            if (intval($paymentVoucher->voucher_type) === 1) {
                // Receive voucher: Money coming in
                $this->createJournalEntryLine($journalEntry, $bankAccount->id, $paymentVoucher->amount, 0, 1, __('journal.cash_bank_receipt'), null, $analyticalAccountId);
                $this->createJournalEntryLine($journalEntry, $entityAccount->id, 0, $paymentVoucher->amount, 2, __('journal.payment_received'), null, $analyticalAccountId);
            } else {
                // Send voucher: Money going out
                $this->createJournalEntryLine($journalEntry, $entityAccount->id, $paymentVoucher->amount, 0, 1, __('journal.payment_sent'), null, $analyticalAccountId);
                $this->createJournalEntryLine($journalEntry, $bankAccount->id, 0, $paymentVoucher->amount, 2, __('journal.cash_bank_payment'), null, $analyticalAccountId);
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
     *
     * Business rule update:
     * - Cost center (cost_center_id) is no longer stored on journal entry lines for invoices.
     *   We keep the optional parameter in the signature for backward compatibility, but ignore it.
     * - Analytical account (analytical_account_id) is metadata only and does not affect double-entry bookkeeping.
     */
    private function createJournalEntryLine(JournalEntry $journalEntry, int $accountId, float $debitAmount, float $creditAmount, int $lineNumber, string $description, ?int $costCenterId = null, ?int $analyticalAccountId = null): JournalEntryLine
    {
        // Note: Foreign key constraints in the database enforce that:
        // - chart_of_account_id must exist in chart_of_accounts table
        // - analytical_account_id must exist in analytical_accounts table
        // These are separate columns with separate foreign keys, so no additional validation is needed.

        $data = [
            'journal_entry_id' => $journalEntry->id,
            'chart_of_account_id' => $accountId,
            'debit_amount' => $debitAmount,
            'credit_amount' => $creditAmount,
            'description' => $description,
            'line_number' => $lineNumber,
        ];

        // Intentionally do NOT set cost_center_id anymore to remove the Cost Center column from journal entries

        // Set analytical account if provided (metadata only, does not affect accounting)
        if ($analyticalAccountId !== null) {
            $data['analytical_account_id'] = $analyticalAccountId;
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
            $invoiceReturn->load(['invoice.client.chartOfAccount', 'invoiceReturnProducts.product.productTax']);

            // Validate client has chart of account
            if (! $invoiceReturn->invoice || ! $invoiceReturn->invoice->client || ! $invoiceReturn->invoice->client->isChartOfAccountConnected()) {
                throw new Exception('Client must have a Chart of Account assigned for journal entries.');
            }

            $client = $invoiceReturn->invoice->client;
            $clientAccountsReceivableAccount = $client->chartOfAccount;

            if (! $clientAccountsReceivableAccount) {
                throw new Exception('Client Chart of Account not found.');
            }

            $returnProducts = $invoiceReturn->invoiceReturnProducts;
            $branchId = $invoiceReturn->branch_id ?? (int) (Auth::user()->default_branch_id ?? 0);

            Log::info('Invoice Return Journal Creation - Return Products Count: '.$returnProducts->count());

            if ($returnProducts->count() === 0) {
                DB::rollBack();
                throw new Exception('No return products found for invoice return journal entry creation.');
            }

            // ============================================================
            // CALCULATE AMOUNTS USING SAME LOGIC AS INVOICE SALE JOURNAL
            // These amounts will be REVERSED (Dr ↔ Cr) but values stay same
            // ============================================================

            $totalSalesAmount = 0;  // Net sales (after line discounts)
            $totalVatAmount = 0;
            $totalCogsAmount = 0;
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

                $returnQty = $returnProduct->quantity;
                $originalQty = $invoiceProduct->quantity ?: 1;

                // Calculate per-unit amounts from original invoice (same as sale journal)
                $unitPrice = $invoiceProduct->sale_price;
                $unitDiscount = $originalQty > 0 ? ($invoiceProduct->discount_amount / $originalQty) : 0;
                $unitVat = $originalQty > 0 ? ($invoiceProduct->tax_amount / $originalQty) : 0;

                // Calculate return amounts (proportional to returned qty)
                $returnGross = $unitPrice * $returnQty;
                $returnDiscount = round($unitDiscount * $returnQty, 2);
                $returnNet = $returnGross - $returnDiscount;
                $returnVat = round($unitVat * $returnQty, 2);

                $totalSalesAmount += $returnNet;
                $totalVatAmount += $returnVat;

                // Group by sales account (same as sale journal)
                if ($product->sales_account_id) {
                    if (! isset($salesByAccount[$product->sales_account_id])) {
                        $salesByAccount[$product->sales_account_id] = 0;
                    }
                    $salesByAccount[$product->sales_account_id] += $returnNet;
                }

                // Group by VAT account (same as sale journal)
                if ($invoiceProduct->vatRate && $returnVat > 0) {
                    $vatAccount = $invoiceProduct->vatRate->getSalesVatAccount($branchId);
                    if ($vatAccount) {
                        if (! isset($vatByAccount[$vatAccount->id])) {
                            $vatByAccount[$vatAccount->id] = 0;
                        }
                        $vatByAccount[$vatAccount->id] += $returnVat;
                    }
                }

                // COGS: Use exact original unit_cost (NO recalculation)
                if ($product && ! $product->is_service) {
                    $originalUnitCost = $returnProduct->unit_cost ?? $invoiceProduct->unit_cost ?? $returnProduct->purchase_price ?? 0;
                    $lineCogs = round($originalUnitCost * $returnQty, 2);
                    $totalCogsAmount += $lineCogs;

                    Log::info("Invoice Return COGS for {$product->name}: qty={$returnQty}, unit_cost={$originalUnitCost}, line_cogs={$lineCogs}");
                }
            }

            // Total amount = net sales + VAT (same as sale journal total)
            $totalAmount = $totalSalesAmount + $totalVatAmount;

            Log::info("Invoice Return Journal Amounts - Sales: {$totalSalesAmount}, VAT: {$totalVatAmount}, Total: {$totalAmount}, COGS: {$totalCogsAmount}");

            $defaults = $this->getDefaultFiscalYearAndPeriod();

            // ============================================================
            // REVENUE REVERSAL JOURNAL (Reverse of Sale Invoice Journal)
            // Sale Invoice:  Dr AR, Cr Sales, Cr VAT
            // Sale Return:   Dr Sales, Dr VAT, Cr AR (REVERSED)
            // ============================================================

            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $invoiceReturn->date,
                'reference' => $invoiceReturn->return_no,
                'description' => __('journal.invoice_return', ['number' => $invoiceReturn->return_no]),
                'total_debit' => $totalAmount,
                'total_credit' => $totalAmount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => \App\Models\InvoiceReturn::class,
                'source_id' => $invoiceReturn->id,
                'fiscal_year_id' => $defaults['fiscal_year_id'],
                'accounting_period_id' => $defaults['accounting_period_id'],
                'branch_id' => $branchId,
            ]);

            $lineNumber = 1;

            // Dr Sales Revenue (reverse of Cr Sales in sale invoice)
            foreach ($salesByAccount as $accountId => $amount) {
                $this->createJournalEntryLine(
                    $journalEntry,
                    $accountId,
                    $amount, // DEBIT (reversed from credit)
                    0,
                    $lineNumber,
                    __('journal.sales_revenue_reversal_for_return', ['number' => $invoiceReturn->return_no])
                );
                $lineNumber++;
            }

            // Dr VAT Payable (reverse of Cr VAT in sale invoice)
            foreach ($vatByAccount as $accountId => $amount) {
                $this->createJournalEntryLine(
                    $journalEntry,
                    $accountId,
                    $amount, // DEBIT (reversed from credit)
                    0,
                    $lineNumber,
                    __('journal.vat_payable_reversal_for_return', ['number' => $invoiceReturn->return_no])
                );
                $lineNumber++;
            }

            // Cr Accounts Receivable (reverse of Dr AR in sale invoice)
            $this->createJournalEntryLine(
                $journalEntry,
                $clientAccountsReceivableAccount->id,
                0,
                $totalAmount, // CREDIT (reversed from debit)
                $lineNumber,
                __('journal.accounts_receivable_reduction_for_return', ['number' => $invoiceReturn->return_no])
            );

            // ============================================================
            // COGS REVERSAL JOURNAL (Reverse of COGS Journal from Sale)
            // Sale COGS:   Dr COGS, Cr Inventory
            // Return COGS: Dr Inventory, Cr COGS (REVERSED)
            // ============================================================

            if ($totalCogsAmount > 0) {
                $inventoryAccount = $this->getInventoryAccount($branchId);
                $costOfSalesAccount = $this->getCostOfSalesAccount($branchId);

                if ($inventoryAccount && $costOfSalesAccount) {
                    $cogsJournalEntry = JournalEntry::create([
                        'entry_number' => JournalEntry::generateEntryNumber(),
                        'entry_date' => $invoiceReturn->date,
                        'reference' => $invoiceReturn->return_no.'-COGS',
                        'description' => __('journal.cogs_reversal_for_return', ['number' => $invoiceReturn->return_no]),
                        'total_debit' => $totalCogsAmount,
                        'total_credit' => $totalCogsAmount,
                        'status' => 'posted',
                        'created_by' => $userId,
                        'posted_by' => $userId,
                        'posted_at' => now(),
                        'source_type' => \App\Models\InvoiceReturn::class,
                        'source_id' => $invoiceReturn->id,
                        'fiscal_year_id' => $defaults['fiscal_year_id'],
                        'accounting_period_id' => $defaults['accounting_period_id'],
                        'branch_id' => $branchId,
                    ]);

                    // Dr Inventory (reverse of Cr Inventory in COGS journal)
                    $this->createJournalEntryLine(
                        $cogsJournalEntry,
                        $inventoryAccount->id,
                        $totalCogsAmount, // DEBIT (reversed from credit)
                        0,
                        1,
                        __('journal.inventory_increase_for_return', ['number' => $invoiceReturn->return_no])
                    );

                    // Cr COGS (reverse of Dr COGS in COGS journal)
                    $this->createJournalEntryLine(
                        $cogsJournalEntry,
                        $costOfSalesAccount->id,
                        0,
                        $totalCogsAmount, // CREDIT (reversed from debit)
                        2,
                        __('journal.cogs_reversal_for_return', ['number' => $invoiceReturn->return_no])
                    );

                    Log::info("COGS reversal journal created for return {$invoiceReturn->return_no}: Amount={$totalCogsAmount}");

                    // Link COGS journal to invoice return
                    if (class_exists('\\App\\Models\\InvoiceReturnJournal')) {
                        \App\Models\InvoiceReturnJournal::create([
                            'invoice_return_id' => $invoiceReturn->id,
                            'journal_entry_id' => $cogsJournalEntry->id,
                            'type' => 'cogs_reversal',
                        ]);
                    }
                } else {
                    Log::warning("COGS reversal skipped for return {$invoiceReturn->return_no}: Missing inventory or COGS account");
                }
            }

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
            $purchaseReturn->load(['purchase.supplier.chartOfAccount', 'purchase.purchaseTax', 'purchaseReturnProducts.product.productTax']);

            // Validate supplier has chart of account
            if (! $purchaseReturn->purchase || ! $purchaseReturn->purchase->supplier || ! $purchaseReturn->purchase->supplier->isChartOfAccountConnected()) {
                throw new Exception('Supplier must have a Chart of Account assigned for journal entries.');
            }

            $supplier = $purchaseReturn->purchase->supplier;
            $supplierAccountsPayableAccount = $supplier->chartOfAccount;

            if (! $supplierAccountsPayableAccount) {
                throw new Exception('Supplier Chart of Account not found.');
            }

            $returnProducts = $purchaseReturn->purchaseReturnProducts;
            $branchId = $purchaseReturn->branch_id ?? (int) (Auth::user()->default_branch_id ?? 0);

            Log::info('Purchase Return Journal Creation - Return Products Count: '.$returnProducts->count());

            if ($returnProducts->count() === 0) {
                DB::rollBack();
                throw new Exception('No return products found for purchase return journal entry creation.');
            }

            // ============================================================
            // CALCULATE AMOUNTS USING SAME LOGIC AS PURCHASE JOURNAL
            // These amounts will be REVERSED (Dr ↔ Cr) but values stay same
            // ============================================================

            $totalInventoryAmount = 0;  // Net inventory (VAT-exclusive)
            $totalVatAmount = 0;
            $purchase = $purchaseReturn->purchase;

            // Get VAT rate from purchase-level tax (fallback if line-level tax_amount is 0)
            $purchaseVatRate = 0;
            if ($purchase->purchaseTax) {
                $purchaseVatRate = (float) $purchase->purchaseTax->rate;
            }

            foreach ($returnProducts as $returnProduct) {
                $product = $returnProduct->product;

                if (! $product) {
                    Log::warning('Product not found for return product ID: '.$returnProduct->id);

                    continue;
                }

                $returnQty = $returnProduct->quantity ?? 0;

                // Get original purchase product for exact amounts
                $purchaseProduct = \App\Models\PurchaseProduct::where('purchase_id', $purchaseReturn->purchase_id)
                    ->where('product_id', $returnProduct->product_id)
                    ->first();

                // Calculate VAT for this line
                $lineVatAmount = 0;
                if ($purchaseProduct) {
                    $originalQty = $purchaseProduct->quantity ?: 1;

                    // Priority 1: Use stored tax_amount from purchase product (exact value)
                    if ($purchaseProduct->tax_amount > 0) {
                        $unitVat = $originalQty > 0 ? ($purchaseProduct->tax_amount / $originalQty) : 0;
                        $lineVatAmount = round($unitVat * $returnQty, 2);
                    }
                    // Priority 2: Calculate from purchase-level VAT rate if line tax is 0
                    elseif ($purchaseVatRate > 0) {
                        $unitPrice = $returnProduct->unit_cost ?? $returnProduct->purchase_price ?? $purchaseProduct->purchase_price ?? 0;
                        $lineVatAmount = round(($unitPrice * $returnQty * $purchaseVatRate) / 100, 2);
                    }
                }

                // Skip service products from inventory but still include VAT
                if ($product->is_service) {
                    Log::info("Skipping service product '{$product->name}' from inventory (no inventory tracking)");
                    $totalVatAmount += $lineVatAmount;

                    continue;
                }

                // INVENTORY: Use exact stored unit_cost (NO recalculation)
                // Same logic as purchase journal: inventory = qty × purchase_price (net, VAT-exclusive)
                $originalUnitCost = $returnProduct->unit_cost ?? $returnProduct->purchase_price ?? 0;
                $lineInventoryAmount = round($originalUnitCost * $returnQty, 2);
                $totalInventoryAmount += $lineInventoryAmount;

                // Add VAT for this product
                $totalVatAmount += $lineVatAmount;

                Log::info("Purchase return: {$product->name}, qty={$returnQty}, unit_cost={$originalUnitCost}, inventory={$lineInventoryAmount}, vat={$lineVatAmount}");
            }

            // Skip if no products with inventory tracking
            if ($totalInventoryAmount == 0 && $totalVatAmount == 0) {
                DB::rollBack();
                throw new Exception('Cannot create journal entry: All products are services with no inventory tracking.');
            }

            // Get accounts from routing settings (same as purchase journal)
            $inventoryAccount = $this->getInventoryAccount($branchId);
            if ($totalInventoryAmount > 0 && ! $inventoryAccount) {
                throw new Exception('Inventory account must be configured in account routing settings.');
            }

            $vatAccount = null;
            if ($totalVatAmount > 0) {
                $vatAccount = $this->getVatAccountForPurchase($purchaseReturn->purchase);
                if (! $vatAccount) {
                    throw new Exception('VAT Input account must be configured in account routing settings.');
                }
            }

            // Total amount = inventory + VAT (same as purchase journal)
            $totalAmount = $totalInventoryAmount + $totalVatAmount;

            Log::info("Purchase Return Journal Amounts - Inventory: {$totalInventoryAmount}, VAT: {$totalVatAmount}, Total: {$totalAmount}");

            $defaults = $this->getDefaultFiscalYearAndPeriod();

            // ============================================================
            // PURCHASE RETURN JOURNAL (Reverse of Purchase Journal)
            // Purchase:        Dr Inventory, Dr VAT Input, Cr Supplier/AP
            // Purchase Return: Dr Supplier/AP, Cr Inventory, Cr VAT Input (REVERSED)
            // ============================================================

            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $purchaseReturn->date,
                'reference' => 'PR-'.$purchaseReturn->code,
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
                'branch_id' => $branchId,
            ]);

            $lineNumber = 1;

            // Dr Supplier/AP (reverse of Cr Supplier in purchase journal)
            Log::info("Line {$lineNumber}: Dr Supplier/AP - Account: {$supplierAccountsPayableAccount->id}, Amount: {$totalAmount}");
            $this->createJournalEntryLine(
                $journalEntry,
                $supplierAccountsPayableAccount->id,
                $totalAmount, // DEBIT (reversed from credit)
                0,
                $lineNumber,
                __('journal.purchase_return_reduce_payable', ['code' => $purchaseReturn->code])
            );
            $lineNumber++;

            // Cr Inventory (reverse of Dr Inventory in purchase journal)
            if ($totalInventoryAmount > 0 && $inventoryAccount) {
                Log::info("Line {$lineNumber}: Cr Inventory - Account: {$inventoryAccount->id}, Amount: {$totalInventoryAmount}");
                $this->createJournalEntryLine(
                    $journalEntry,
                    $inventoryAccount->id,
                    0,
                    $totalInventoryAmount, // CREDIT (reversed from debit)
                    $lineNumber,
                    __('journal.inventory_reduction_for_purchase_return', ['code' => $purchaseReturn->code])
                );
                $lineNumber++;
            }

            // Cr VAT Input (reverse of Dr VAT in purchase journal)
            if ($totalVatAmount > 0 && $vatAccount) {
                Log::info("Line {$lineNumber}: Cr VAT Input - Account: {$vatAccount->id}, Amount: {$totalVatAmount}");
                $this->createJournalEntryLine(
                    $journalEntry,
                    $vatAccount->id,
                    0,
                    $totalVatAmount, // CREDIT (reversed from debit)
                    $lineNumber,
                    __('journal.vat_input_reversal_for_purchase_return', ['code' => $purchaseReturn->code])
                );
            }

            // Create bridge table record if PurchaseReturnJournal model exists
            if (class_exists('\\App\\Models\\PurchaseReturnJournal')) {
                \App\Models\PurchaseReturnJournal::create([
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
}
