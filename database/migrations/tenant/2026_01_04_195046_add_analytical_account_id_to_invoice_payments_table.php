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
        Schema::table('invoice_payments', function (Blueprint $table) {
            if (! Schema::hasColumn('invoice_payments', 'analytical_account_id')) {
                $table->unsignedBigInteger('analytical_account_id')->nullable()->after('payment_method_id');
                $table->foreign('analytical_account_id')->references('id')->on('analytical_accounts')->onDelete('set null');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('invoice_payments', function (Blueprint $table) {
            if (Schema::hasColumn('invoice_payments', 'analytical_account_id')) {
                $table->dropForeign(['analytical_account_id']);
                $table->dropColumn('analytical_account_id');
            }
        });
    }
};
