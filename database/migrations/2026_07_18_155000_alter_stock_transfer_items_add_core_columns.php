<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * stock_transfer_items existed without core columns (create migration was skipped).
     */
    public function up(): void
    {
        Schema::table('stock_transfer_items', function (Blueprint $table) {
            if (! Schema::hasColumn('stock_transfer_items', 'stock_transfer_id')) {
                $table->unsignedBigInteger('stock_transfer_id')->nullable()->after('id');
            }
            if (! Schema::hasColumn('stock_transfer_items', 'product_id')) {
                $table->unsignedBigInteger('product_id')->nullable()->after('stock_transfer_id');
            }
            if (! Schema::hasColumn('stock_transfer_items', 'unit_name')) {
                $table->string('unit_name')->nullable()->after('product_id');
            }
            if (! Schema::hasColumn('stock_transfer_items', 'conversion_factor')) {
                $table->decimal('conversion_factor', 12, 4)->default(1)->after('unit_name');
            }
            if (! Schema::hasColumn('stock_transfer_items', 'quantity')) {
                $table->decimal('quantity', 14, 4)->default(0)->after('conversion_factor');
            }
        });

        try {
            Schema::table('stock_transfer_items', function (Blueprint $table) {
                $table->foreign('stock_transfer_id', 'sti_transfer_fk')
                    ->references('id')->on('stock_transfers')->cascadeOnDelete();
            });
        } catch (\Throwable) {
        }

        try {
            Schema::table('stock_transfer_items', function (Blueprint $table) {
                $table->foreign('product_id', 'sti_product_fk')
                    ->references('id')->on('products')->restrictOnDelete();
            });
        } catch (\Throwable) {
        }

        try {
            Schema::table('stock_transfer_items', function (Blueprint $table) {
                $table->index(['stock_transfer_id'], 'sti_transfer_idx');
                $table->index(['product_id'], 'sti_product_idx');
            });
        } catch (\Throwable) {
        }
    }

    public function down(): void
    {
        Schema::table('stock_transfer_items', function (Blueprint $table) {
            foreach (['sti_transfer_fk', 'sti_product_fk'] as $fk) {
                try {
                    $table->dropForeign($fk);
                } catch (\Throwable) {
                }
            }
        });

        $cols = collect([
            'stock_transfer_id',
            'product_id',
            'unit_name',
            'conversion_factor',
            'quantity',
        ])->filter(fn ($col) => Schema::hasColumn('stock_transfer_items', $col))->values()->all();

        if ($cols !== []) {
            Schema::table('stock_transfer_items', function (Blueprint $table) use ($cols) {
                $table->dropColumn($cols);
            });
        }
    }
};
