<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('purchase_invoice_items', function (Blueprint $table) {
            if (! Schema::hasColumn('purchase_invoice_items', 'expiry_date')) {
                $table->date('expiry_date')->nullable()->after('line_total_cost');
                $table->index(['expiry_date']);
            }
        });
    }

    public function down(): void
    {
        Schema::table('purchase_invoice_items', function (Blueprint $table) {
            if (Schema::hasColumn('purchase_invoice_items', 'expiry_date')) {
                $table->dropIndex(['expiry_date']);
                $table->dropColumn('expiry_date');
            }
        });
    }
};
