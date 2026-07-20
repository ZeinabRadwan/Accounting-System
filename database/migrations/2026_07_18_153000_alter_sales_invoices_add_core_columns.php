<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * The sales_invoices table was created earlier without core invoice columns
     * (create migration skipped because the table already existed).
     */
    public function up(): void
    {
        Schema::table('sales_invoices', function (Blueprint $table) {
            if (! Schema::hasColumn('sales_invoices', 'invoice_number')) {
                $table->string('invoice_number')->nullable()->after('id');
            }
            if (! Schema::hasColumn('sales_invoices', 'branch_id')) {
                $table->unsignedBigInteger('branch_id')->nullable()->after('invoice_number');
            }
            if (! Schema::hasColumn('sales_invoices', 'user_id')) {
                $table->unsignedBigInteger('user_id')->nullable()->after('branch_id');
            }
            if (! Schema::hasColumn('sales_invoices', 'customer_id')) {
                $table->unsignedBigInteger('customer_id')->nullable()->after('user_id');
            }
            if (! Schema::hasColumn('sales_invoices', 'subtotal')) {
                $table->decimal('subtotal', 14, 2)->default(0)->after('customer_id');
            }
            if (! Schema::hasColumn('sales_invoices', 'discount_amount')) {
                $table->decimal('discount_amount', 14, 2)->default(0)->after('subtotal');
            }
            if (! Schema::hasColumn('sales_invoices', 'total')) {
                $table->decimal('total', 14, 2)->default(0)->after('discount_amount');
            }
            if (! Schema::hasColumn('sales_invoices', 'payment_method')) {
                $table->string('payment_method')->nullable()->after('total');
            }
            if (! Schema::hasColumn('sales_invoices', 'paid_amount')) {
                $table->decimal('paid_amount', 14, 2)->default(0)->after('payment_method');
            }
            if (! Schema::hasColumn('sales_invoices', 'remaining_amount')) {
                $table->decimal('remaining_amount', 14, 2)->default(0)->after('paid_amount');
            }
            if (! Schema::hasColumn('sales_invoices', 'status')) {
                $table->string('status')->nullable()->after('remaining_amount');
            }
        });

        try {
            Schema::table('sales_invoices', function (Blueprint $table) {
                $table->unique('invoice_number', 'si_invoice_number_uq');
            });
        } catch (\Throwable) {
        }

        try {
            Schema::table('sales_invoices', function (Blueprint $table) {
                $table->foreign('branch_id', 'si_branch_fk')->references('id')->on('branches')->restrictOnDelete();
            });
        } catch (\Throwable) {
        }

        try {
            Schema::table('sales_invoices', function (Blueprint $table) {
                $table->foreign('user_id', 'si_user_fk')->references('id')->on('users')->restrictOnDelete();
            });
        } catch (\Throwable) {
        }

        try {
            Schema::table('sales_invoices', function (Blueprint $table) {
                $table->foreign('customer_id', 'si_customer_fk')->references('id')->on('customers')->nullOnDelete();
            });
        } catch (\Throwable) {
        }

        try {
            Schema::table('sales_invoices', function (Blueprint $table) {
                $table->index(['branch_id', 'customer_id'], 'si_branch_customer_idx');
                $table->index(['created_at'], 'si_created_at_idx');
            });
        } catch (\Throwable) {
        }
    }

    public function down(): void
    {
        Schema::table('sales_invoices', function (Blueprint $table) {
            foreach (['si_branch_fk', 'si_user_fk', 'si_customer_fk'] as $fk) {
                try {
                    $table->dropForeign($fk);
                } catch (\Throwable) {
                }
            }
        });

        Schema::table('sales_invoices', function (Blueprint $table) {
            foreach (['si_invoice_number_uq', 'si_branch_customer_idx', 'si_created_at_idx'] as $idx) {
                try {
                    $table->dropIndex($idx);
                } catch (\Throwable) {
                }
            }
        });

        $cols = collect([
            'invoice_number',
            'branch_id',
            'user_id',
            'customer_id',
            'subtotal',
            'discount_amount',
            'total',
            'payment_method',
            'paid_amount',
            'remaining_amount',
            'status',
        ])->filter(fn ($col) => Schema::hasColumn('sales_invoices', $col))->values()->all();

        if ($cols !== []) {
            Schema::table('sales_invoices', function (Blueprint $table) use ($cols) {
                $table->dropColumn($cols);
            });
        }
    }
};
