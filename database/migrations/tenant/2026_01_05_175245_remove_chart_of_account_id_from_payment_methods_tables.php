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
        // Remove chart_of_account_id from payment_methods table
        if (Schema::hasColumn('payment_methods', 'chart_of_account_id')) {
            Schema::table('payment_methods', function (Blueprint $table) {
                $table->dropForeign(['chart_of_account_id']);
                $table->dropColumn('chart_of_account_id');
            });
        }

        // Remove chart_of_account_id from payment_method_branch_accounts table
        if (Schema::hasColumn('payment_method_branch_accounts', 'chart_of_account_id')) {
            Schema::table('payment_method_branch_accounts', function (Blueprint $table) {
                $table->dropForeign(['chart_of_account_id']);
                $table->dropColumn('chart_of_account_id');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Re-add chart_of_account_id to payment_methods table
        Schema::table('payment_methods', function (Blueprint $table) {
            $table->unsignedBigInteger('chart_of_account_id')->nullable()->after('status');
            $table->foreign('chart_of_account_id')->references('id')->on('chart_of_accounts')->onDelete('set null');
        });

        // Re-add chart_of_account_id to payment_method_branch_accounts table
        Schema::table('payment_method_branch_accounts', function (Blueprint $table) {
            $table->unsignedBigInteger('chart_of_account_id')->nullable();
            $table->foreign('chart_of_account_id')->references('id')->on('chart_of_accounts')->onDelete('set null');
        });
    }
};
