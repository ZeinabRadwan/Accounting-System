<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use App\Models\Branch;
use App\Models\User;

class BackfillBranchIdsSeeder extends Seeder
{
    public function run(): void
    {
        // Ensure there is a main branch
        $mainBranch = Branch::where('is_main', true)->first();
        if (!$mainBranch) {
            $mainBranch = Branch::create([
                'name' => 'Main Branch',
                'code' => 'MAIN',
                'slug' => 'main-branch',
                'is_active' => true,
                'is_main' => true,
            ]);
        }

        $branchId = (int) $mainBranch->id;

        // Tables that received branch_id in the tenant migration
        $tables = [
            // Core entity tables
            'clients', 'suppliers', 'products',
            // Invoice tables
            'invoices', 'invoice_products', 'invoice_payments', 'invoice_returns', 'invoice_return_products',
            // Purchase tables
            'purchases', 'purchase_products', 'purchase_payments', 'purchase_returns', 'purchase_return_products',
            // Quotation tables
            'quotations', 'quotation_products',
            // Purchase Order tables
            'purchase_orders', 'purchase_order_products',
            // Account tables
            'accounts', 'account_transactions', 'balance_tansfers',
            // Expense tables
            'expenses',
            // Journal tables
            'journal_entries', 'journal_entry_lines', 'invoice_journals', 'purchase_journals', 'expense_journals', 'loan_journals',
            // Inventory tables
            'inventory_adjustments', 'adjustment_products',
            // Asset tables
            'assets',
            // Payment tables
            'non_invoice_payments', 'non_purchase_payments',
            // Representatives
            'client_representatives', 'supplier_representatives',
            // Employee and payroll tables
            'employees', 'payrolls', 'salary_increments',
            // Loan tables
            'loans', 'loan_payments',
            // General Settings (branch-specific settings)
            'general_settings',
            // Chart of Accounts (branch-specific chart)
            'chart_of_accounts',
            // Expense categories
            'expense_categories', 'expense_sub_categories',
            // Product categories
            'product_categories', 'product_sub_categories',
            // Brand and Unit tables
            'brands', 'units',
            // VAT rates
            'vat_rates',
            // Account routing settings
            'account_routing_settings',
        ];

        foreach ($tables as $table) {
            if (Schema::hasTable($table) && Schema::hasColumn($table, 'branch_id')) {
                DB::table($table)->whereNull('branch_id')->update(['branch_id' => $branchId]);
            }
        }

        // Users: set default_branch_id if null and attach to pivot
        if (Schema::hasTable('users')) {
            // Backfill default_branch_id
            DB::table('users')->whereNull('default_branch_id')->update(['default_branch_id' => $branchId]);

            // Attach users to branch_user pivot
            if (Schema::hasTable('branch_user')) {
                User::chunk(500, function ($users) use ($branchId) {
                    foreach ($users as $user) {
                        try {
                            if (method_exists($user, 'branches')) {
                                $user->branches()->syncWithoutDetaching([$branchId]);
                            } else {
                                // Fallback direct insert if relationship not available
                                $exists = DB::table('branch_user')
                                    ->where('user_id', $user->id)
                                    ->where('branch_id', $branchId)
                                    ->exists();
                                if (!$exists) {
                                    DB::table('branch_user')->insert([
                                        'user_id' => $user->id,
                                        'branch_id' => $branchId,
                                        'created_at' => now(),
                                        'updated_at' => now(),
                                    ]);
                                }
                            }
                        } catch (\Throwable $e) {
                            // Continue; log if necessary in real run
                        }
                    }
                });
            }
        }
    }
}


