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

class TenantBulkDataSeederV2 extends Seeder
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
     * Log message - works both in seeder and command contexts
     */
    private function log($message)
    {
        if ($this->command) {
            $this->command->info($message);
        } else {
            echo $message . "\n";
        }
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->log('Starting bulk data generation...');
        
        // Get current fiscal year and accounting period
        $this->getCurrentFiscalYearAndPeriod();
        
        // Get required data for relationships
        $this->loadRequiredData();
        
        // Generate bulk clients and suppliers
        $this->log('Generating 100 clients...');
        $this->generateBulkClients(100);
        
        $this->log('Generating 100 suppliers...');
        $this->generateBulkSuppliers(100);
        
        // Reload data to include the new clients and suppliers
        $this->clients = Client::all();
        $this->suppliers = Supplier::all();
        
        // Generate invoices
        $this->log('Generating 100 invoices...');
        $this->generateInvoices(100);
        
        // Generate purchases
        $this->log('Generating 100 purchases...');
        $this->generatePurchases(100);
        
        $this->log('Bulk data generation completed!');
    }

    /**
     * Get all leaf accounts (accounts that have a parent but no children)
     */
    private function getLeafAccounts()
    {
        // Get all account IDs that have children
        $parentIds = $this->chartOfAccounts->pluck('id')->toArray();
        $accountsWithChildren = $this->chartOfAccounts->whereIn('parent_id', $parentIds)->pluck('parent_id')->unique();
        
        // Filter accounts that have a parent but are not parents themselves
        $leafAccounts = $this->chartOfAccounts->filter(function ($account) use ($accountsWithChildren) {
            return $account->parent_id !== null && !$accountsWithChildren->contains($account->id);
        });
        
        $this->log("Found " . $leafAccounts->count() . " leaf accounts for journal entries");
        
        return $leafAccounts;
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
        $this->chartOfAccounts = ChartOfAccount::with('type')->get();

        // Create missing required data
        if ($this->clients->isEmpty()) {
            $this->log('Creating sample clients...');
            $this->createSampleClients();
            $this->clients = Client::all();
        }

        if ($this->suppliers->isEmpty()) {
            $this->log('Creating sample suppliers...');
            $this->createSampleSuppliers();
            $this->suppliers = Supplier::all();
        }

        if ($this->products->isEmpty()) {
            $this->log('Creating sample products...');
            $this->createSampleProducts();
            $this->products = Product::all();
        }

        if ($this->vatRates->isEmpty()) {
            $this->log('Creating sample VAT rates...');
            $this->createSampleVatRates();
            $this->vatRates = VatRate::all();
        }

        if ($this->users->isEmpty()) {
            $this->log('Creating sample users...');
            $this->createSampleUsers();
            $this->users = User::all();
        }

        if ($this->chartOfAccounts->isEmpty()) {
            $this->log('Creating sample chart of accounts...');
            $this->createSampleChartOfAccounts();
            $this->chartOfAccounts = ChartOfAccount::with('type')->get();
        }
    }

    private function generateInvoices($count)
    {
        $batchSize = 50; // Smaller batch size for better memory management
        $batches = ceil($count / $batchSize);

        for ($batch = 0; $batch < $batches; $batch++) {
            DB::transaction(function () use ($batch, $batchSize, $count) {
                $startIndex = $batch * $batchSize;
                $endIndex = min(($batch + 1) * $batchSize, $count);

                for ($i = $startIndex; $i < $endIndex; $i++) {
                    $this->createInvoiceWithProductsAndJournal($i + 1);
                }
            });

            $this->log("Generated invoices batch " . ($batch + 1) . "/{$batches}");
        }
    }

    private function generatePurchases($count)
    {
        $batchSize = 50; // Smaller batch size for better memory management
        $batches = ceil($count / $batchSize);

        for ($batch = 0; $batch < $batches; $batch++) {
            DB::transaction(function () use ($batch, $batchSize, $count) {
                $startIndex = $batch * $batchSize;
                $endIndex = min(($batch + 1) * $batchSize, $count);

                for ($i = $startIndex; $i < $endIndex; $i++) {
                    $this->createPurchaseWithProductsAndJournal($i + 1);
                }
            });

            $this->log("Generated purchases batch " . ($batch + 1) . "/{$batches}");
        }
    }

    private function createInvoiceWithProductsAndJournal($invoiceNumber)
    {
        // Create invoice
        $invoice = Invoice::create([
            'invoice_no' => (string)$invoiceNumber,
            'slug' => $this->faker->unique()->slug(),
            'reference' => 'REF-' . str_pad($invoiceNumber, 6, '0', STR_PAD_LEFT),
            'client_id' => $this->clients->random()->id,
            'discount_type' => $this->faker->randomElement([0, 1]),
            'discount' => $this->faker->randomFloat(2, 0, 1000),
            'transport' => $this->faker->randomFloat(2, 0, 500),
            'sub_total' => $this->faker->randomFloat(2, 100, 50000),
            'po_reference' => $this->faker->optional(0.7)->bothify('PO-####'),
            'payment_terms' => $this->faker->optional(0.8)->randomElement(['Net 30', 'Net 15', 'Due on Receipt', 'Net 60']),
            'delivery_place' => $this->faker->city(),
            'tax_id' => $this->vatRates->random()->id,
            'invoice_date' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'created_by' => $this->users->random()->id,
            'note' => $this->faker->optional(0.6)->sentence(),
            'status' => 1,
            'is_paid' => $this->faker->randomElement([0, 1]),
            'fiscal_year_id' => $this->currentFiscalYearId,
            'accounting_period_id' => $this->currentAccountingPeriodId,
        ]);

        // Create invoice products
        $productCount = $this->faker->numberBetween(1, 5);
        for ($j = 0; $j < $productCount; $j++) {
            $this->createInvoiceProduct($invoice);
        }

        // Create journal entry for invoice
        $this->createInvoiceJournalEntry($invoice);
    }

    private function createPurchaseWithProductsAndJournal($purchaseNumber)
    {
        // Create purchase
        $purchase = Purchase::create([
            'purchase_no' => (string)$purchaseNumber,
            'slug' => $this->faker->unique()->slug(),
            'supplier_id' => $this->suppliers->random()->id,
            'discount' => $this->faker->randomFloat(2, 0, 1000),
            'transport' => $this->faker->randomFloat(2, 0, 500),
            'sub_total' => $this->faker->randomFloat(2, 100, 50000),
            'tax_id' => $this->vatRates->random()->id,
            'po_reference' => $this->faker->optional(0.7)->bothify('PO-####'),
            'payment_terms' => $this->faker->optional(0.8)->randomElement(['Net 30', 'Net 15', 'Due on Receipt', 'Net 60']),
            'po_date' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'purchase_date' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'created_by' => $this->users->random()->id,
            'note' => $this->faker->optional(0.6)->sentence(),
            'status' => 1,
            'is_paid' => $this->faker->randomElement([0, 1]),
            'fiscal_year_id' => $this->currentFiscalYearId,
            'accounting_period_id' => $this->currentAccountingPeriodId,
        ]);

        // Create purchase products
        $productCount = $this->faker->numberBetween(1, 5);
        for ($j = 0; $j < $productCount; $j++) {
            $this->createPurchaseProduct($purchase);
        }

        // Create journal entry for purchase
        $this->createPurchaseJournalEntry($purchase);
    }

    private function createInvoiceProduct($invoice)
    {
        $product = $this->products->random();
        $vatRate = $this->vatRates->random();
        $quantity = $this->faker->numberBetween(1, 100);
        $salePrice = $this->faker->randomFloat(2, 10, 1000);
        $purchasePrice = $salePrice * $this->faker->randomFloat(2, 0.5, 0.8);
        $discountType = $this->faker->randomElement(['fixed', 'percentage']);
        $discount = $discountType === 'percentage' ? $this->faker->randomFloat(2, 0, 20) : $this->faker->randomFloat(2, 0, 100);
        $discountAmount = $discountType === 'percentage' ? ($salePrice * $quantity * $discount) / 100 : $discount;
        $taxAmount = ($salePrice * $quantity - $discountAmount) * ($vatRate->rate / 100);

        InvoiceProduct::create([
            'invoice_id' => $invoice->id,
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
        ]);
    }

    private function createPurchaseProduct($purchase)
    {
        $product = $this->products->random();
        $quantity = $this->faker->numberBetween(1, 100);
        $purchasePrice = $this->faker->randomFloat(2, 10, 1000);
        $discountType = $this->faker->randomElement(['fixed', 'percentage']);
        $discount = $discountType === 'percentage' ? $this->faker->randomFloat(2, 0, 20) : $this->faker->randomFloat(2, 0, 100);
        $discountAmount = $discountType === 'percentage' ? ($purchasePrice * $quantity * $discount) / 100 : $discount;
        $taxAmount = ($purchasePrice * $quantity - $discountAmount) * 0.15; // Assume 15% tax

        PurchaseProduct::create([
            'purchase_id' => $purchase->id,
            'product_id' => $product->id,
            'quantity' => $quantity,
            'purchase_price' => $purchasePrice,
            'unit_cost' => $purchasePrice,
            'tax_amount' => $taxAmount,
            'discount' => $discount,
            'discount_type' => $discountType,
            'discount_amount' => $discountAmount,
        ]);
    }

    private function createInvoiceJournalEntry($invoice)
    {
        $entryNumber = JournalEntry::generateEntryNumber();
        
        $journalEntry = JournalEntry::create([
            'entry_number' => $entryNumber,
            'entry_date' => $invoice->invoice_date,
            'reference' => 'INV-' . $invoice->invoice_no,
            'description' => 'Invoice #' . $invoice->invoice_no . ' - ' . $invoice->reference,
            'total_debit' => $invoice->sub_total,
            'total_credit' => $invoice->sub_total,
            'status' => 'posted',
            'created_by' => $invoice->created_by,
            'posted_by' => $invoice->created_by,
            'posted_at' => now(),
            'source_type' => 'App\\Models\\Invoice',
            'source_id' => $invoice->id,
            'fiscal_year_id' => $this->currentFiscalYearId,
            'accounting_period_id' => $this->currentAccountingPeriodId,
        ]);

        // Create journal entry lines
        $this->createInvoiceJournalEntryLines($journalEntry, $invoice);
    }

    private function createPurchaseJournalEntry($purchase)
    {
        $entryNumber = JournalEntry::generateEntryNumber();
        
        $journalEntry = JournalEntry::create([
            'entry_number' => $entryNumber,
            'entry_date' => $purchase->purchase_date,
            'reference' => 'PUR-' . $purchase->purchase_no,
            'description' => 'Purchase #' . $purchase->purchase_no,
            'total_debit' => $purchase->sub_total,
            'total_credit' => $purchase->sub_total,
            'status' => 'posted',
            'created_by' => $purchase->created_by,
            'posted_by' => $purchase->created_by,
            'posted_at' => now(),
            'source_type' => 'App\\Models\\Purchase',
            'source_id' => $purchase->id,
            'fiscal_year_id' => $this->currentFiscalYearId,
            'accounting_period_id' => $this->currentAccountingPeriodId,
        ]);

        // Create journal entry lines
        $this->createPurchaseJournalEntryLines($journalEntry, $purchase);
    }

    private function createInvoiceJournalEntryLines($journalEntry, $invoice)
    {
        // Get chart of accounts that have a parent but no children (leaf accounts)
        $leafAccounts = $this->getLeafAccounts();
        
        // Randomly select from ALL leaf accounts, not just first ones
        $revenueAccounts = $leafAccounts->where('type.name', 'Revenue');
        $assetAccounts = $leafAccounts->where('type.name', 'Asset');
        
        // If we have specific account types, use them randomly
        if ($revenueAccounts->isNotEmpty()) {
            $salesAccount = $revenueAccounts->random();
        } else {
            $salesAccount = $leafAccounts->random();
        }
        
        if ($assetAccounts->isNotEmpty()) {
            $clientAccount = $assetAccounts->random();
        } else {
            // Make sure we don't use the same account for both debit and credit
            $clientAccount = $leafAccounts->where('id', '!=', $salesAccount->id)->random();
        }

        // Log which accounts are being used for this invoice
        if ($invoice->id % 1000 == 0) { // Log every 1000th invoice to avoid spam
            $this->log("Invoice #{$invoice->id}: Using Sales Account: {$salesAccount->name} (ID: {$salesAccount->id}), Client Account: {$clientAccount->name} (ID: {$clientAccount->id})");
        }

        // Debit: Client Account (Accounts Receivable)
        JournalEntryLine::create([
            'journal_entry_id' => $journalEntry->id,
            'chart_of_account_id' => $clientAccount->id,
            'debit_amount' => $invoice->sub_total,
            'credit_amount' => 0,
            'description' => 'Invoice #' . $invoice->invoice_no . ' - Client Receivable',
            'reference' => 'INV-' . $invoice->invoice_no,
            'line_number' => 1,
        ]);

        // Credit: Sales Account
        JournalEntryLine::create([
            'journal_entry_id' => $journalEntry->id,
            'chart_of_account_id' => $salesAccount->id,
            'debit_amount' => 0,
            'credit_amount' => $invoice->sub_total,
            'description' => 'Invoice #' . $invoice->invoice_no . ' - Sales Revenue',
            'reference' => 'INV-' . $invoice->invoice_no,
            'line_number' => 2,
        ]);
    }

    private function createPurchaseJournalEntryLines($journalEntry, $purchase)
    {
        // Get chart of accounts that have a parent but no children (leaf accounts)
        $leafAccounts = $this->getLeafAccounts();
        
        // Randomly select from ALL leaf accounts, not just first ones
        $expenseAccounts = $leafAccounts->where('type.name', 'Expense');
        $liabilityAccounts = $leafAccounts->where('type.name', 'Liability');
        
        // If we have specific account types, use them randomly
        if ($expenseAccounts->isNotEmpty()) {
            $purchaseAccount = $expenseAccounts->random();
        } else {
            $purchaseAccount = $leafAccounts->random();
        }
        
        if ($liabilityAccounts->isNotEmpty()) {
            $supplierAccount = $liabilityAccounts->random();
        } else {
            // Make sure we don't use the same account for both debit and credit
            $supplierAccount = $leafAccounts->where('id', '!=', $purchaseAccount->id)->random();
        }

        // Log which accounts are being used for this purchase
        if ($purchase->id % 1000 == 0) { // Log every 1000th purchase to avoid spam
            $this->log("Purchase #{$purchase->id}: Using Purchase Account: {$purchaseAccount->name} (ID: {$purchaseAccount->id}), Supplier Account: {$supplierAccount->name} (ID: {$supplierAccount->id})");
        }

        // Debit: Purchase Account (Expense)
        JournalEntryLine::create([
            'journal_entry_id' => $journalEntry->id,
            'chart_of_account_id' => $purchaseAccount->id,
            'debit_amount' => $purchase->sub_total,
            'credit_amount' => 0,
            'description' => 'Purchase #' . $purchase->purchase_no . ' - Purchase Expense',
            'reference' => 'PUR-' . $purchase->purchase_no,
            'line_number' => 1,
        ]);

        // Credit: Supplier Account (Accounts Payable)
        JournalEntryLine::create([
            'journal_entry_id' => $journalEntry->id,
            'chart_of_account_id' => $supplierAccount->id,
            'debit_amount' => 0,
            'credit_amount' => $purchase->sub_total,
            'description' => 'Purchase #' . $purchase->purchase_no . ' - Supplier Payable',
            'reference' => 'PUR-' . $purchase->purchase_no,
            'line_number' => 2,
        ]);
    }

    private function createSampleClients()
    {
        $clients = [
            ['name' => 'ABC Corporation', 'email' => 'contact@abccorp.com', 'phone' => '+1-555-0101', 'address' => '123 Business St, New York, NY 10001'],
            ['name' => 'XYZ Industries', 'email' => 'info@xyzind.com', 'phone' => '+1-555-0102', 'address' => '456 Industrial Ave, Los Angeles, CA 90210'],
            ['name' => 'Global Solutions Ltd', 'email' => 'sales@globalsol.com', 'phone' => '+1-555-0103', 'address' => '789 Commerce Blvd, Chicago, IL 60601'],
            ['name' => 'Tech Innovations Inc', 'email' => 'hello@techinnov.com', 'phone' => '+1-555-0104', 'address' => '321 Innovation Dr, Austin, TX 73301'],
            ['name' => 'Premier Services Co', 'email' => 'contact@premierserv.com', 'phone' => '+1-555-0105', 'address' => '654 Service Way, Miami, FL 33101'],
        ];

        foreach ($clients as $clientData) {
            Client::create([
                'name' => $clientData['name'],
                'email' => $clientData['email'],
                'phone_number' => $clientData['phone'],
                'address' => $clientData['address'],
                'status' => 1,
                'type' => 'Company',
            ]);
        }
    }

    private function createSampleSuppliers()
    {
        $suppliers = [
            ['name' => 'Supply Chain Solutions', 'email' => 'orders@supplychain.com', 'phone' => '+1-555-0201', 'address' => '100 Supply St, Dallas, TX 75201'],
            ['name' => 'Manufacturing Partners', 'email' => 'sales@manufpartners.com', 'phone' => '+1-555-0202', 'address' => '200 Factory Rd, Detroit, MI 48201'],
            ['name' => 'Wholesale Distributors', 'email' => 'contact@wholesale.com', 'phone' => '+1-555-0203', 'address' => '300 Distribution Ave, Phoenix, AZ 85001'],
            ['name' => 'Raw Materials Co', 'email' => 'info@rawmaterials.com', 'phone' => '+1-555-0204', 'address' => '400 Material Blvd, Denver, CO 80201'],
            ['name' => 'Equipment Suppliers', 'email' => 'sales@equipsupply.com', 'phone' => '+1-555-0205', 'address' => '500 Equipment Way, Seattle, WA 98101'],
        ];

        foreach ($suppliers as $supplierData) {
            Supplier::create([
                'name' => $supplierData['name'],
                'email' => $supplierData['email'],
                'phone_number' => $supplierData['phone'],
                'street_address1' => $supplierData['address'],
                'status' => 1,
                'type' => 'Company',
            ]);
        }
    }

    private function createSampleProducts()
    {
        // First create product categories and subcategories
        $this->createSampleProductCategories();
        
        // Create VAT rates first
        $this->createSampleVatRates();
        
        $products = [
            ['name' => 'Office Chair', 'code' => 'CHR-001', 'regular_price' => 299.99, 'purchase_price' => 199.99],
            ['name' => 'Desk Lamp', 'code' => 'LMP-001', 'regular_price' => 89.99, 'purchase_price' => 59.99],
            ['name' => 'Computer Monitor', 'code' => 'MON-001', 'regular_price' => 599.99, 'purchase_price' => 399.99],
            ['name' => 'Wireless Mouse', 'code' => 'MOU-001', 'regular_price' => 49.99, 'purchase_price' => 29.99],
            ['name' => 'Keyboard', 'code' => 'KEY-001', 'regular_price' => 79.99, 'purchase_price' => 49.99],
            ['name' => 'Notebook', 'code' => 'NBK-001', 'regular_price' => 12.99, 'purchase_price' => 7.99],
            ['name' => 'Pen Set', 'code' => 'PEN-001', 'regular_price' => 24.99, 'purchase_price' => 14.99],
            ['name' => 'File Cabinet', 'code' => 'CAB-001', 'regular_price' => 199.99, 'purchase_price' => 129.99],
            ['name' => 'Printer Paper', 'code' => 'PAP-001', 'regular_price' => 19.99, 'purchase_price' => 12.99],
            ['name' => 'Stapler', 'code' => 'STP-001', 'regular_price' => 15.99, 'purchase_price' => 9.99],
        ];

        // Get a random subcategory
        $subCategory = \App\Models\ProductSubCategory::first();
        
        // Get the 15% VAT rate
        $vatRate = \App\Models\VatRate::where('rate', 15.0)->first();
        
        foreach ($products as $productData) {
            Product::create([
                'name' => $productData['name'],
                'code' => $productData['code'],
                'regular_price' => $productData['regular_price'],
                'purchase_price' => $productData['purchase_price'],
                'status' => 1,
                'is_service' => 0,
                'tax_type' => 'Exclusive',
                'tax_id' => $vatRate ? $vatRate->id : null,
                'sub_cat_id' => $subCategory ? $subCategory->id : null,
            ]);
        }
    }

    private function createSampleProductCategories()
    {
        // Create product categories
        $categories = [
            ['name' => 'Office Supplies', 'code' => 1, 'status' => 1],
            ['name' => 'Electronics', 'code' => 2, 'status' => 1],
            ['name' => 'Furniture', 'code' => 3, 'status' => 1],
        ];

        $createdCategories = [];
        foreach ($categories as $categoryData) {
            $category = \App\Models\ProductCategory::create($categoryData);
            $createdCategories[] = $category;
        }

        // Create subcategories
        $subCategories = [
            ['name' => 'Writing Supplies', 'cat_id' => $createdCategories[0]->id, 'code' => 1, 'status' => 1],
            ['name' => 'Computer Accessories', 'cat_id' => $createdCategories[1]->id, 'code' => 2, 'status' => 1],
            ['name' => 'Office Furniture', 'cat_id' => $createdCategories[2]->id, 'code' => 3, 'status' => 1],
        ];

        foreach ($subCategories as $subCategoryData) {
            \App\Models\ProductSubCategory::create($subCategoryData);
        }
    }

    private function createSampleVatRates()
    {
        $vatRates = [
            ['name' => 'Standard VAT', 'rate' => 15.0, 'status' => 1],
            ['name' => 'Reduced VAT', 'rate' => 5.0, 'status' => 1],
            ['name' => 'Zero VAT', 'rate' => 0.0, 'status' => 1],
        ];

        foreach ($vatRates as $vatData) {
            VatRate::create($vatData);
        }
    }

    private function createSampleUsers()
    {
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
            'email_verified_at' => now(),
        ]);
    }

    private function createSampleChartOfAccounts()
    {
        // First create account types
        $accountTypes = [
            ['name' => 'Asset'],
            ['name' => 'Liability'],
            ['name' => 'Equity'],
            ['name' => 'Revenue'],
            ['name' => 'Expense'],
        ];

        $createdTypes = [];
        foreach ($accountTypes as $typeData) {
            $type = \App\Models\ChartOfAccountType::create($typeData);
            $createdTypes[$typeData['name']] = $type;
        }

        // Create chart of accounts with proper hierarchy
        $accounts = [
            // Top-level accounts (parent_id = null)
            ['code' => '1000', 'name' => 'Assets', 'type_id' => $createdTypes['Asset']->id, 'parent_id' => null],
            ['code' => '2000', 'name' => 'Liabilities', 'type_id' => $createdTypes['Liability']->id, 'parent_id' => null],
            ['code' => '4000', 'name' => 'Revenue', 'type_id' => $createdTypes['Revenue']->id, 'parent_id' => null],
            ['code' => '5000', 'name' => 'Expenses', 'type_id' => $createdTypes['Expense']->id, 'parent_id' => null],
        ];

        $createdAccounts = [];
        foreach ($accounts as $accountData) {
            $account = ChartOfAccount::create([
                'code' => $accountData['code'],
                'name' => $accountData['name'],
                'type_id' => $accountData['type_id'],
                'parent_id' => $accountData['parent_id'],
                'is_active' => true,
                'created_by' => 1,
            ]);
            $createdAccounts[$accountData['code']] = $account;
        }

        // Create child accounts (leaf accounts) - these will be used for journal entries
        $childAccounts = [
            // Asset leaf accounts
            ['code' => '1100', 'name' => 'Cash', 'type_id' => $createdTypes['Asset']->id, 'parent_id' => $createdAccounts['1000']->id],
            ['code' => '1130', 'name' => 'Accounts Receivable', 'type_id' => $createdTypes['Asset']->id, 'parent_id' => $createdAccounts['1000']->id],
            ['code' => '1140', 'name' => 'Inventory', 'type_id' => $createdTypes['Asset']->id, 'parent_id' => $createdAccounts['1000']->id],
            ['code' => '1200', 'name' => 'Equipment', 'type_id' => $createdTypes['Asset']->id, 'parent_id' => $createdAccounts['1000']->id],
            
            // Liability leaf accounts
            ['code' => '2100', 'name' => 'Accounts Payable', 'type_id' => $createdTypes['Liability']->id, 'parent_id' => $createdAccounts['2000']->id],
            ['code' => '2200', 'name' => 'Short-term Loans', 'type_id' => $createdTypes['Liability']->id, 'parent_id' => $createdAccounts['2000']->id],
            
            // Revenue leaf accounts
            ['code' => '4100', 'name' => 'Sales Revenue', 'type_id' => $createdTypes['Revenue']->id, 'parent_id' => $createdAccounts['4000']->id],
            ['code' => '4200', 'name' => 'Service Revenue', 'type_id' => $createdTypes['Revenue']->id, 'parent_id' => $createdAccounts['4000']->id],
            
            // Expense leaf accounts
            ['code' => '5100', 'name' => 'Purchase Expenses', 'type_id' => $createdTypes['Expense']->id, 'parent_id' => $createdAccounts['5000']->id],
            ['code' => '5200', 'name' => 'Operating Expenses', 'type_id' => $createdTypes['Expense']->id, 'parent_id' => $createdAccounts['5000']->id],
            ['code' => '5300', 'name' => 'Administrative Expenses', 'type_id' => $createdTypes['Expense']->id, 'parent_id' => $createdAccounts['5000']->id],
        ];

        foreach ($childAccounts as $accountData) {
            ChartOfAccount::create([
                'code' => $accountData['code'],
                'name' => $accountData['name'],
                'type_id' => $accountData['type_id'],
                'parent_id' => $accountData['parent_id'],
                'is_active' => true,
                'created_by' => 1,
            ]);
        }
    }

    /**
     * Generate bulk clients with realistic data
     */
    private function generateBulkClients($count)
    {
        $batchSize = 50;
        $batches = ceil($count / $batchSize);

        for ($batch = 0; $batch < $batches; $batch++) {
            DB::transaction(function () use ($batch, $batchSize, $count) {
                $startIndex = $batch * $batchSize;
                $endIndex = min(($batch + 1) * $batchSize, $count);

                for ($i = $startIndex; $i < $endIndex; $i++) {
                    $this->createBulkClient($i + 1);
                }
            });

            $this->log("Generated clients batch " . ($batch + 1) . "/{$batches}");
        }
    }

    /**
     * Generate bulk suppliers (vendors) with realistic data
     */
    private function generateBulkSuppliers($count)
    {
        $batchSize = 50;
        $batches = ceil($count / $batchSize);

        for ($batch = 0; $batch < $batches; $batch++) {
            DB::transaction(function () use ($batch, $batchSize, $count) {
                $startIndex = $batch * $batchSize;
                $endIndex = min(($batch + 1) * $batchSize, $count);

                for ($i = $startIndex; $i < $endIndex; $i++) {
                    $this->createBulkSupplier($i + 1);
                }
            });

            $this->log("Generated suppliers batch " . ($batch + 1) . "/{$batches}");
        }
    }

    /**
     * Create a single bulk client with realistic data
     */
    private function createBulkClient($clientNumber)
    {
        $companyTypes = ['Corp', 'Inc', 'LLC', 'Ltd', 'Co', 'Group', 'Solutions', 'Services', 'Enterprises', 'Partners'];
        $industries = ['Technology', 'Manufacturing', 'Healthcare', 'Finance', 'Retail', 'Construction', 'Consulting', 'Education', 'Real Estate', 'Logistics'];
        $cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
        
        $companyType = $this->faker->randomElement($companyTypes);
        $industry = $this->faker->randomElement($industries);
        $city = $this->faker->randomElement($cities);
        
        $companyName = $this->faker->company() . ' ' . $companyType;
        $email = strtolower(str_replace([' ', '.', ',', '&'], ['', '', '', 'and'], $companyName)) . '@' . $this->faker->domainName();
        
        Client::create([
            'name' => $companyName,
            'email' => $email,
            'phone_number' => $this->faker->phoneNumber(),
            'address' => $this->faker->streetAddress() . ', ' . $city . ', ' . $this->faker->stateAbbr() . ' ' . $this->faker->postcode(),
            'status' => $this->faker->randomElement([0, 1]), // Randomly active/inactive
            'type' => $this->faker->randomElement(['Company', 'Individual']),
            'tax_registration_number' => $this->faker->optional(0.8)->numerify('##-#######'),
        ]);
    }

    /**
     * Create a single bulk supplier (vendor) with realistic data
     */
    private function createBulkSupplier($supplierNumber)
    {
        $companyTypes = ['Supply', 'Distributors', 'Manufacturing', 'Wholesale', 'Trading', 'Import/Export', 'Services', 'Solutions', 'Enterprises', 'Partners'];
        $industries = ['Raw Materials', 'Manufacturing', 'Technology', 'Office Supplies', 'Equipment', 'Food & Beverage', 'Textiles', 'Chemicals', 'Electronics', 'Automotive'];
        $cities = ['Detroit', 'Dallas', 'Phoenix', 'Denver', 'Seattle', 'Boston', 'Atlanta', 'Miami', 'Tampa', 'Orlando'];
        
        $companyType = $this->faker->randomElement($companyTypes);
        $industry = $this->faker->randomElement($industries);
        $city = $this->faker->randomElement($cities);
        
        $companyName = $this->faker->company() . ' ' . $companyType;
        $email = strtolower(str_replace([' ', '.', ',', '&'], ['', '', '', 'and'], $companyName)) . '@' . $this->faker->domainName();
        
        Supplier::create([
            'name' => $companyName,
            'email' => $email,
            'phone_number' => $this->faker->phoneNumber(),
            'street_address1' => $this->faker->streetAddress() . ', ' . $city . ', ' . $this->faker->stateAbbr() . ' ' . $this->faker->postcode(),
            'status' => $this->faker->randomElement([0, 1]), // Randomly active/inactive
            'type' => $this->faker->randomElement(['Company', 'Individual']),
            'tax_registration_number' => $this->faker->optional(0.8)->numerify('##-#######'),
        ]);
    }
}
