<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            if (! Schema::hasColumn('customers', 'credit_balance')) {
                $table->decimal('credit_balance', 14, 2)->default(0)->after('phone');
            }
        });

        Schema::table('suppliers', function (Blueprint $table) {
            if (! Schema::hasColumn('suppliers', 'credit_balance')) {
                $table->decimal('credit_balance', 14, 2)->default(0)->after('address');
            }
        });

        if (Schema::hasTable('purchase_invoices')) {
            Schema::table('purchase_invoices', function (Blueprint $table) {
                if (! Schema::hasColumn('purchase_invoices', 'remaining_amount')) {
                    $table->decimal('remaining_amount', 14, 2)->default(0)->after('paid_amount');
                }
                if (! Schema::hasColumn('purchase_invoices', 'status')) {
                    $table->string('status', 30)->default('unpaid')->after('remaining_amount');
                }
            });

            DB::table('purchase_invoices')->orderBy('id')->chunkById(100, function ($rows) {
                foreach ($rows as $row) {
                    $total = (float) $row->total;
                    $paid = (float) $row->paid_amount;
                    $remaining = max(0, round($total - $paid, 2));
                    $status = $paid <= 0 ? 'unpaid' : ($remaining <= 0 ? 'paid' : 'partially_paid');
                    DB::table('purchase_invoices')->where('id', $row->id)->update([
                        'remaining_amount' => $remaining,
                        'status' => $status,
                    ]);
                }
            });
        }
    }

    public function down(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            if (Schema::hasColumn('customers', 'credit_balance')) {
                $table->dropColumn('credit_balance');
            }
        });

        Schema::table('suppliers', function (Blueprint $table) {
            if (Schema::hasColumn('suppliers', 'credit_balance')) {
                $table->dropColumn('credit_balance');
            }
        });

        if (Schema::hasTable('purchase_invoices')) {
            Schema::table('purchase_invoices', function (Blueprint $table) {
                $cols = [];
                if (Schema::hasColumn('purchase_invoices', 'remaining_amount')) {
                    $cols[] = 'remaining_amount';
                }
                if (Schema::hasColumn('purchase_invoices', 'status')) {
                    $cols[] = 'status';
                }
                if ($cols !== []) {
                    $table->dropColumn($cols);
                }
            });
        }
    }
};
