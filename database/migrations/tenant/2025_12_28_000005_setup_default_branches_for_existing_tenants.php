<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 
     * This migration creates a default "Main Branch" for the tenant if one doesn't exist,
     * assigns it to all users, and assigns all existing data to this branch.
     */
    public function up()
    {
        // Check if branches table exists
        if (!Schema::hasTable('branches')) {
            return;
        }

        // Get the default branch for this tenant (Main Branch)
        $defaultBranch = DB::table('branches')
            ->where('is_main', true)
            ->first();

        if (!$defaultBranch) {
            // Create default "Main Branch"
            $defaultBranchId = DB::table('branches')->insertGetId([
                'name' => 'Main Branch',
                'code' => 'MAIN',
                'is_main' => true,
                'is_active' => true,
                'description' => 'Main branch for this organization. All existing data is assigned here.',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        } else {
            $defaultBranchId = $defaultBranch->id;
        }

        // Assign default branch to all users who don't have a branch
        if (Schema::hasTable('users') && Schema::hasTable('branch_user')) {
            $usersWithoutBranches = DB::table('users')
                ->whereNotIn('id', function ($query) {
                    $query->select('user_id')
                        ->from('branch_user');
                })
                ->get();

            foreach ($usersWithoutBranches as $user) {
                DB::table('branch_user')->insert([
                    'user_id' => $user->id,
                    'branch_id' => $defaultBranchId,
                    'role' => 'member',
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            // Set default_branch_id for users who don't have one
            DB::table('users')
                ->whereNull('default_branch_id')
                ->update(['default_branch_id' => $defaultBranchId]);
        }

        // Assign all existing data to default branch
        $this->assignDataToBranch($defaultBranchId);
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        // This migration is idempotent - no rollback needed
        // The data will remain assigned to the main branch
    }

    /**
     * Assign all existing data to a branch
     */
    private function assignDataToBranch($branchId)
    {
        $tablesWithBranchId = [
            'clients',
            'suppliers',
            'products',
            'invoices',
            'invoice_products',
            'invoice_payments',
            'invoice_returns',
            'invoice_return_products',
            'purchases',
            'purchase_products',
            'purchase_payments',
            'purchase_returns',
            'purchase_return_products',
            'quotations',
            'quotation_products',
            'purchase_orders',
            'purchase_order_products',
            'accounts',
            'account_transactions',
            'balance_tansfers',
            'expenses',
            'journal_entries',
            'journal_entry_lines',
            'invoice_journals',
            'purchase_journals',
            'expense_journals',
            'loan_journals',
            'inventory_adjustments',
            'adjustment_products',
            'assets',
            'non_invoice_payments',
            'non_purchase_payments',
            'client_representatives',
            'supplier_representatives',
            'employees',
            'payrolls',
            'salary_increments',
            'loans',
            'loan_payments',
            'general_settings',
            'chart_of_accounts',
            'expense_categories',
            'expense_sub_categories',
            'product_categories',
            'product_sub_categories',
            'brands',
            'units',
            'vat_rates',
            'account_routing_settings',
        ];

        foreach ($tablesWithBranchId as $table) {
            // Check if table and branch_id column exist
            if (Schema::hasTable($table) && Schema::hasColumn($table, 'branch_id')) {
                // Update null branch_id to default branch
                DB::table($table)
                    ->whereNull('branch_id')
                    ->update(['branch_id' => $branchId]);
            }
        }
    }
};

