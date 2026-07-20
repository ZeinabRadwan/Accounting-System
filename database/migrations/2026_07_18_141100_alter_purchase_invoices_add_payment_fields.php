<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('purchase_invoices') && ! Schema::hasColumn('purchase_invoices', 'payment_method')) {
            Schema::table('purchase_invoices', function (Blueprint $table) {
                $table->string('payment_method')->nullable()->after('notes');
                $table->decimal('paid_amount', 14, 2)->default(0)->after('payment_method');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('purchase_invoices') && Schema::hasColumn('purchase_invoices', 'payment_method')) {
            Schema::table('purchase_invoices', function (Blueprint $table) {
                $table->dropColumn(['payment_method', 'paid_amount']);
            });
        }
    }
};
