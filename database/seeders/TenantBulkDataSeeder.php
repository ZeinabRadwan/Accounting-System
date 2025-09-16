<?php

namespace Database\Seeders;

use App\Models\Invoice;
use App\Models\Purchase;
use App\Models\InvoiceProduct;
use App\Models\PurchaseProduct;
use App\Models\JournalEntry;
use App\Models\JournalEntryLine;
use App\Models\Client;
use App\Models\Supplier;
use App\Models\Product;
use App\Models\VatRate;
use App\Models\FiscalYear;
use App\Models\AccountingPeriod;
use App\Models\ChartOfAccount;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Faker\Factory as Faker;

class TenantBulkDataSeeder extends Seeder
{
    private $faker;
    private $currentFiscalYearId;
    private $currentAccountingPeriodId;
    private $clients;
    private $suppliers;
    private $products;
    private $vatRates;
    private $users;
    private $chartOfAccounts;

    public function __construct()
    {
        $this->faker = Faker::create();
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info('Starting bulk data generation...');
        
        // Get current fiscal year and accounting period
        $this->getCurrentFiscalYearAndPeriod();
        
        // Get required data for relationships
        $this->loadRequiredData();
        
        // Generate invoices
        $this->command->info('Generating 10,000 invoices...');
        $this->generateInvoices(10000);
        
        // Generate purchases
        $this->command->info('Generating 10,000 purchases...');
        $this->generatePurchases(10000);
        
        $this->command->info('Bulk data generation completed!');
    }

    private function getCurrentFiscalYearAndPeriod()
    {
        // Get current fiscal year
        $currentFiscalYear = FiscalYear::where('is_active', true)->first();
        if (!$currentFiscalYear) {
            // Create a default fiscal year if none exists
            $currentFiscalYear = FiscalYear::create([
                'name' => 'FY ' . date('Y'),
                'start_date' => Carbon::create(date('Y'), 1, 1),
                'end_date' => Carbon::create(date('Y'), 12, 31),
                'is_active' => true,
                'created_by' => 1,
            ]);
        }
        $this->currentFiscalYearId = $currentFiscalYear->id;

        // Get current accounting period
        $currentAccountingPeriod = AccountingPeriod::where('is_active', true)->first();
        if (!$currentAccountingPeriod) {
            // Create a default accounting period if none exists
            $currentAccountingPeriod = AccountingPeriod::create([
                'name' => 'Period 1 - ' . date('Y'),
                'fiscal_year_id' => $this->currentFiscalYearId,
                'start_date' => Carbon::create(date('Y'), 1, 1),
                'end_date' => Carbon::create(date('Y'), 12, 31),
                'is_active' => true,
                'is_closed' => false,
                'created_by' => 1,
            ]);
        }
        $this->currentAccountingPeriodId = $currentAccountingPeriod->id;
    }

    private function loadRequiredData()
    {
        $this->clients = Client::all();
        $this->suppliers = Supplier::all();
        $this->products = Product::all();
        $this->vatRates = VatRate::all();
        $this->users = User::all();
        $this->chartOfAccounts = ChartOfAccount::all();

        if ($this->clients->isEmpty() || $this->suppliers->isEmpty() || $this->products->isEmpty()) {
            throw new \Exception('Required data (clients, suppliers, products) not found. Please run basic seeders first.');
        }
    }

    private function generateInvoices($count)
    {
        $batchSize = 100;
        $batches = ceil($count / $batchSize);

        for ($batch = 0; $batch < $batches; $batch++) {
            $invoices = [];
            $invoiceProducts = [];
            $journalEntries = [];
            $journalEntryLines = [];

            $startIndex = $batch * $batchSize;
            $endIndex = min(($batch + 1) * $batchSize, $count);

            for ($i = $startIndex; $i < $endIndex; $i++) {
                $invoice = $this->createInvoiceData($i + 1);
                $invoices[] = $invoice;

                // Create invoice products
                $productCount = $this->faker->numberBetween(1, 5);
                for ($j = 0; $j < $productCount; $j++) {
                    $invoiceProducts[] = $this->createInvoiceProductData($invoice, $j);
                }

                // Create journal entry for invoice
                $journalEntry = $this->createInvoiceJournalEntry($invoice);
                $journalEntries[] = $journalEntry;

                // Create journal entry lines for invoice
                $journalEntryLines = array_merge($journalEntryLines, $this->createInvoiceJournalEntryLines($journalEntry, $invoice));
            }

            // Insert in batches
            DB::table('invoices')->insert($invoices);
            DB::table('invoice_products')->insert($invoiceProducts);
            DB::table('journal_entries')->insert($journalEntries);
            DB::table('journal_entry_lines')->insert($journalEntryLines);

            $this->command->info("Generated invoices batch " . ($batch + 1) . "/{$batches}");
        }
    }

    private function generatePurchases($count)
    {
        $batchSize = 100;
        $batches = ceil($count / $batchSize);

        for ($batch = 0; $batch < $batches; $batch++) {
            $purchases = [];
            $purchaseProducts = [];
            $journalEntries = [];
            $journalEntryLines = [];

            $startIndex = $batch * $batchSize;
            $endIndex = min(($batch + 1) * $batchSize, $count);

            for ($i = $startIndex; $i < $endIndex; $i++) {
                $purchase = $this->createPurchaseData($i + 1);
                $purchases[] = $purchase;

                // Create purchase products
                $productCount = $this->faker->numberBetween(1, 5);
                for ($j = 0; $j < $productCount; $j++) {
                    $purchaseProducts[] = $this->createPurchaseProductData($purchase, $j);
                }

                // Create journal entry for purchase
                $journalEntry = $this->createPurchaseJournalEntry($purchase);
                $journalEntries[] = $journalEntry;

                // Create journal entry lines for purchase
                $journalEntryLines = array_merge($journalEntryLines, $this->createPurchaseJournalEntryLines($journalEntry, $purchase));
            }

            // Insert in batches
            DB::table('purchases')->insert($purchases);
            DB::table('purchase_products')->insert($purchaseProducts);
            DB::table('journal_entries')->insert($journalEntries);
            DB::table('journal_entry_lines')->insert($journalEntryLines);

            $this->command->info("Generated purchases batch " . ($batch + 1) . "/{$batches}");
        }
    }

    private function createInvoiceData($invoiceNumber)
    {
        $client = $this->clients->random();
        $vatRate = $this->vatRates->random();
        $user = $this->users->random();
        
        $subTotal = $this->faker->randomFloat(2, 100, 50000);
        $discountType = $this->faker->randomElement([0, 1]); // 0 = fixed, 1 = percentage
        $discount = $discountType ? $this->faker->randomFloat(2, 0, 20) : $this->faker->randomFloat(2, 0, 1000);
        $transport = $this->faker->randomFloat(2, 0, 500);
        
        return [
            'invoice_no' => (string)$invoiceNumber,
            'slug' => $this->faker->unique()->slug(),
            'reference' => 'REF-' . str_pad($invoiceNumber, 6, '0', STR_PAD_LEFT),
            'client_id' => $client->id,
            'discount_type' => $discountType,
            'discount' => $discount,
            'transport' => $transport,
            'sub_total' => $subTotal,
            'po_reference' => $this->faker->optional(0.7)->bothify('PO-####'),
            'payment_terms' => $this->faker->optional(0.8)->randomElement(['Net 30', 'Net 15', 'Due on Receipt', 'Net 60']),
            'delivery_place' => $this->faker->city(),
            'tax_id' => $vatRate->id,
            'invoice_date' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'created_by' => $user->id,
            'note' => $this->faker->optional(0.6)->sentence(),
            'status' => 1,
            'is_paid' => $this->faker->randomElement([0, 1]),
            'fiscal_year_id' => $this->currentFiscalYearId,
            'accounting_period_id' => $this->currentAccountingPeriodId,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    private function createPurchaseData($purchaseNumber)
    {
        $supplier = $this->suppliers->random();
        $vatRate = $this->vatRates->random();
        $user = $this->users->random();
        
        $subTotal = $this->faker->randomFloat(2, 100, 50000);
        $discount = $this->faker->randomFloat(2, 0, 1000);
        $transport = $this->faker->randomFloat(2, 0, 500);
        
        return [
            'purchase_no' => (string)$purchaseNumber,
            'slug' => $this->faker->unique()->slug(),
            'supplier_id' => $supplier->id,
            'discount' => $discount,
            'transport' => $transport,
            'sub_total' => $subTotal,
            'tax_id' => $vatRate->id,
            'po_reference' => $this->faker->optional(0.7)->bothify('PO-####'),
            'payment_terms' => $this->faker->optional(0.8)->randomElement(['Net 30', 'Net 15', 'Due on Receipt', 'Net 60']),
            'po_date' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'purchase_date' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'created_by' => $user->id,
            'note' => $this->faker->optional(0.6)->sentence(),
            'status' => 1,
            'is_paid' => $this->faker->randomElement([0, 1]),
            'fiscal_year_id' => $this->currentFiscalYearId,
            'accounting_period_id' => $this->currentAccountingPeriodId,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    private function createInvoiceProductData($invoice, $productIndex)
    {
        $product = $this->products->random();
        $vatRate = $this->vatRates->random();
        $quantity = $this->faker->numberBetween(1, 100);
        $salePrice = $this->faker->randomFloat(2, 10, 1000);
        $purchasePrice = $salePrice * $this->faker->randomFloat(2, 0.5, 0.8); // Cost is 50-80% of sale price
        $discountType = $this->faker->randomElement(['fixed', 'percentage']);
        $discount = $discountType === 'percentage' ? $this->faker->randomFloat(2, 0, 20) : $this->faker->randomFloat(2, 0, 100);
        $discountAmount = $discountType === 'percentage' ? ($salePrice * $quantity * $discount) / 100 : $discount;
        $taxAmount = ($salePrice * $quantity - $discountAmount) * ($vatRate->rate / 100);

        return [
            'invoice_id' => $invoice['id'] ?? null, // Will be set after invoice is created
            'product_id' => $product->id,
            'quantity' => $quantity,
            'purchase_price' => $purchasePrice,
            'sale_price' => $salePrice,
            'unit_cost' => $purchasePrice,
            'tax_amount' => $taxAmount,
            'discount' => $discount,
            'discount_type' => $discountType,
            'discount_amount' => $discountAmount,
            'vat_rate_id' => $vatRate->id,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    private function createPurchaseProductData($purchase, $productIndex)
    {
        $product = $this->products->random();
        $quantity = $this->faker->numberBetween(1, 100);
        $purchasePrice = $this->faker->randomFloat(2, 10, 1000);
        $discountType = $this->faker->randomElement(['fixed', 'percentage']);
        $discount = $discountType === 'percentage' ? $this->faker->randomFloat(2, 0, 20) : $this->faker->randomFloat(2, 0, 100);
        $discountAmount = $discountType === 'percentage' ? ($purchasePrice * $quantity * $discount) / 100 : $discount;
        $taxAmount = ($purchasePrice * $quantity - $discountAmount) * 0.15; // Assume 15% tax

        return [
            'purchase_id' => $purchase['id'] ?? null, // Will be set after purchase is created
            'product_id' => $product->id,
            'quantity' => $quantity,
            'purchase_price' => $purchasePrice,
            'unit_cost' => $purchasePrice,
            'tax_amount' => $taxAmount,
            'discount' => $discount,
            'discount_type' => $discountType,
            'discount_amount' => $discountAmount,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    private function createInvoiceJournalEntry($invoice)
    {
        $entryNumber = JournalEntry::generateEntryNumber();
        
        return [
            'entry_number' => $entryNumber,
            'entry_date' => $invoice['invoice_date'],
            'reference' => 'INV-' . $invoice['invoice_no'],
            'description' => 'Invoice #' . $invoice['invoice_no'] . ' - ' . $invoice['reference'],
            'total_debit' => $invoice['sub_total'],
            'total_credit' => $invoice['sub_total'],
            'status' => 'posted',
            'created_by' => $invoice['created_by'],
            'posted_by' => $invoice['created_by'],
            'posted_at' => now(),
            'source_type' => 'App\\Models\\Invoice',
            'source_id' => $invoice['id'] ?? null,
            'fiscal_year_id' => $this->currentFiscalYearId,
            'accounting_period_id' => $this->currentAccountingPeriodId,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    private function createPurchaseJournalEntry($purchase)
    {
        $entryNumber = JournalEntry::generateEntryNumber();
        
        return [
            'entry_number' => $entryNumber,
            'entry_date' => $purchase['purchase_date'],
            'reference' => 'PUR-' . $purchase['purchase_no'],
            'description' => 'Purchase #' . $purchase['purchase_no'],
            'total_debit' => $purchase['sub_total'],
            'total_credit' => $purchase['sub_total'],
            'status' => 'posted',
            'created_by' => $purchase['created_by'],
            'posted_by' => $purchase['created_by'],
            'posted_at' => now(),
            'source_type' => 'App\\Models\\Purchase',
            'source_id' => $purchase['id'] ?? null,
            'fiscal_year_id' => $this->currentFiscalYearId,
            'accounting_period_id' => $this->currentAccountingPeriodId,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    private function createInvoiceJournalEntryLines($journalEntry, $invoice)
    {
        $lines = [];
        $lineNumber = 1;

        // Get relevant chart of accounts
        $salesAccount = $this->chartOfAccounts->where('type.name', 'Revenue')->first();
        $clientAccount = $this->chartOfAccounts->where('type.name', 'Asset')->first();
        $taxAccount = $this->chartOfAccounts->where('name', 'like', '%VAT%')->first();

        if (!$salesAccount || !$clientAccount) {
            // Fallback to any account if specific ones not found
            $salesAccount = $this->chartOfAccounts->first();
            $clientAccount = $this->chartOfAccounts->skip(1)->first() ?? $this->chartOfAccounts->first();
        }

        // Debit: Client Account (Accounts Receivable)
        $lines[] = [
            'journal_entry_id' => $journalEntry['id'] ?? null,
            'chart_of_account_id' => $clientAccount->id,
            'debit_amount' => $invoice['sub_total'],
            'credit_amount' => 0,
            'description' => 'Invoice #' . $invoice['invoice_no'] . ' - Client Receivable',
            'reference' => 'INV-' . $invoice['invoice_no'],
            'line_number' => $lineNumber++,
            'created_at' => now(),
            'updated_at' => now(),
        ];

        // Credit: Sales Account
        $lines[] = [
            'journal_entry_id' => $journalEntry['id'] ?? null,
            'chart_of_account_id' => $salesAccount->id,
            'debit_amount' => 0,
            'credit_amount' => $invoice['sub_total'],
            'description' => 'Invoice #' . $invoice['invoice_no'] . ' - Sales Revenue',
            'reference' => 'INV-' . $invoice['invoice_no'],
            'line_number' => $lineNumber++,
            'created_at' => now(),
            'updated_at' => now(),
        ];

        return $lines;
    }

    private function createPurchaseJournalEntryLines($journalEntry, $purchase)
    {
        $lines = [];
        $lineNumber = 1;

        // Get relevant chart of accounts
        $purchaseAccount = $this->chartOfAccounts->where('type.name', 'Expense')->first();
        $supplierAccount = $this->chartOfAccounts->where('type.name', 'Liability')->first();

        if (!$purchaseAccount || !$supplierAccount) {
            // Fallback to any account if specific ones not found
            $purchaseAccount = $this->chartOfAccounts->first();
            $supplierAccount = $this->chartOfAccounts->skip(1)->first() ?? $this->chartOfAccounts->first();
        }

        // Debit: Purchase Account (Expense)
        $lines[] = [
            'journal_entry_id' => $journalEntry['id'] ?? null,
            'chart_of_account_id' => $purchaseAccount->id,
            'debit_amount' => $purchase['sub_total'],
            'credit_amount' => 0,
            'description' => 'Purchase #' . $purchase['purchase_no'] . ' - Purchase Expense',
            'reference' => 'PUR-' . $purchase['purchase_no'],
            'line_number' => $lineNumber++,
            'created_at' => now(),
            'updated_at' => now(),
        ];

        // Credit: Supplier Account (Accounts Payable)
        $lines[] = [
            'journal_entry_id' => $journalEntry['id'] ?? null,
            'chart_of_account_id' => $supplierAccount->id,
            'debit_amount' => 0,
            'credit_amount' => $purchase['sub_total'],
            'description' => 'Purchase #' . $purchase['purchase_no'] . ' - Supplier Payable',
            'reference' => 'PUR-' . $purchase['purchase_no'],
            'line_number' => $lineNumber++,
            'created_at' => now(),
            'updated_at' => now(),
        ];

        return $lines;
    }
}
