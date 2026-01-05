<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * This migration:
     * 1. Creates default analytical accounts for existing payment methods
     * 2. Links payment methods to analytical accounts
     * 3. Backfills analytical_account_id on existing payments
     */
    public function up(): void
    {
        // Check if analytical_accounts table exists
        if (! Schema::hasTable('analytical_accounts')) {
            return;
        }

        // Get a user ID for created_by (use first user or system user)
        $userId = DB::table('users')->value('id') ?? 1;

        // Get all payment methods that don't have analytical accounts
        $paymentMethods = DB::table('payment_methods')
            ->whereNull('analytical_account_id')
            ->where('status', 1)
            ->get();

        foreach ($paymentMethods as $paymentMethod) {
            // Create analytical account for this payment method
            $analyticalAccountId = DB::table('analytical_accounts')->insertGetId([
                'name' => $paymentMethod->name.' Payments',
                'code' => 'AA-'.strtoupper(substr($paymentMethod->code ?? $paymentMethod->slug, 0, 10)),
                'type' => 'payment',
                'status' => true,
                'branch_id' => null, // Global analytical account
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Link payment method to analytical account
            DB::table('payment_methods')
                ->where('id', $paymentMethod->id)
                ->update(['analytical_account_id' => $analyticalAccountId]);
        }

        // Backfill analytical_account_id on existing payments
        // Invoice Payments
        DB::table('invoice_payments')
            ->whereNull('analytical_account_id')
            ->whereNotNull('payment_method_id')
            ->update([
                'analytical_account_id' => DB::raw('(SELECT analytical_account_id FROM payment_methods WHERE payment_methods.id = invoice_payments.payment_method_id)'),
            ]);

        // Purchase Payments
        DB::table('purchase_payments')
            ->whereNull('analytical_account_id')
            ->whereNotNull('payment_method_id')
            ->update([
                'analytical_account_id' => DB::raw('(SELECT analytical_account_id FROM payment_methods WHERE payment_methods.id = purchase_payments.payment_method_id)'),
            ]);

        // Non-Invoice Payments
        DB::table('non_invoice_payments')
            ->whereNull('analytical_account_id')
            ->whereNotNull('payment_method_id')
            ->update([
                'analytical_account_id' => DB::raw('(SELECT analytical_account_id FROM payment_methods WHERE payment_methods.id = non_invoice_payments.payment_method_id)'),
            ]);

        // Non-Purchase Payments
        DB::table('non_purchase_payments')
            ->whereNull('analytical_account_id')
            ->whereNotNull('payment_method_id')
            ->update([
                'analytical_account_id' => DB::raw('(SELECT analytical_account_id FROM payment_methods WHERE payment_methods.id = non_purchase_payments.payment_method_id)'),
            ]);

        // Payment Vouchers
        DB::table('payment_vouchers')
            ->whereNull('analytical_account_id')
            ->whereNotNull('payment_method_id')
            ->update([
                'analytical_account_id' => DB::raw('(SELECT analytical_account_id FROM payment_methods WHERE payment_methods.id = payment_vouchers.payment_method_id)'),
            ]);

        // Backfill journal entry lines with analytical accounts from payments
        // This is a complex query that links journal entries to payments and gets analytical accounts
        // Invoice Payment Journals
        DB::statement('
            UPDATE journal_entry_lines jel
            INNER JOIN journal_entries je ON jel.journal_entry_id = je.id
            INNER JOIN invoice_journals ij ON je.id = ij.journal_entry_id AND ij.type = "payment"
            INNER JOIN invoice_payments ip ON ip.invoice_id = ij.invoice_id
            SET jel.analytical_account_id = ip.analytical_account_id
            WHERE jel.analytical_account_id IS NULL
            AND ip.analytical_account_id IS NOT NULL
        ');

        // Purchase Payment Journals
        DB::statement('
            UPDATE journal_entry_lines jel
            INNER JOIN journal_entries je ON jel.journal_entry_id = je.id
            INNER JOIN purchase_journals pj ON je.id = pj.journal_entry_id AND pj.type = "payment"
            INNER JOIN purchase_payments pp ON pp.purchase_id = pj.purchase_id
            SET jel.analytical_account_id = pp.analytical_account_id
            WHERE jel.analytical_account_id IS NULL
            AND pp.analytical_account_id IS NOT NULL
        ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // This migration is not reversible as it would require tracking
        // which analytical accounts were created by this migration
        // and which payments were backfilled
    }
};
