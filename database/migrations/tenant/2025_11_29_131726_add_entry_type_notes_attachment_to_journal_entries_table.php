<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('journal_entries', function (Blueprint $table) {
            if (! Schema::hasColumn('journal_entries', 'entry_type')) {
                $table->enum('entry_type', [
                    'manual', 'opening_entry', 'payment_voucher', 'receipt_voucher',
                    'transfer_voucher', 'pos_sales', 'sales', 'sales_returns',
                    'purchases', 'purchase_returns', 'credit_note', 'debit_note',
                    'inventory_transfer', 'inventory_adjustment',
                ])->default('manual')->after('entry_date');
            }
            if (! Schema::hasColumn('journal_entries', 'notes')) {
                $table->text('notes')->nullable()->after('description');
            }
            if (! Schema::hasColumn('journal_entries', 'attachment')) {
                $table->string('attachment')->nullable()->after('notes');
            }

            if (Schema::hasColumn('journal_entries', 'entry_type')) {
                $table->index('entry_type');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('journal_entries', function (Blueprint $table) {
            $table->dropIndex(['entry_type']);
            $table->dropColumn(['entry_type', 'notes', 'attachment']);
        });
    }
};
