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
        // Add chart_of_account_id to products if not exists
        if (!Schema::hasColumn('products', 'sales_account_id')) {
            Schema::table('products', function (Blueprint $table) {
                $table->unsignedBigInteger('sales_account_id')->nullable()->after('tax_id');
                $table->unsignedBigInteger('purchase_account_id')->nullable()->after('sales_account_id');
                
                $table->foreign('sales_account_id')->references('id')->on('chart_of_accounts')->onDelete('set null');
                $table->foreign('purchase_account_id')->references('id')->on('chart_of_accounts')->onDelete('set null');
            });
        }

        // Add chart_of_account_id to accounts if not exists
        if (!Schema::hasColumn('accounts', 'chart_of_account_id')) {
            Schema::table('accounts', function (Blueprint $table) {
                $table->unsignedBigInteger('chart_of_account_id')->nullable()->after('created_by');
                
                $table->foreign('chart_of_account_id')->references('id')->on('chart_of_accounts')->onDelete('set null');
            });
        }

        // Add chart_of_account_id to clients if not exists
        if (!Schema::hasColumn('clients', 'chart_of_account_id')) {
            Schema::table('clients', function (Blueprint $table) {
                $table->unsignedBigInteger('chart_of_account_id')->nullable()->after('created_by');
                
                $table->foreign('chart_of_account_id')->references('id')->on('chart_of_accounts')->onDelete('set null');
            });
        }

        // Add chart_of_account_id to suppliers if not exists
        if (!Schema::hasColumn('suppliers', 'chart_of_account_id')) {
            Schema::table('suppliers', function (Blueprint $table) {
                $table->unsignedBigInteger('chart_of_account_id')->nullable()->after('created_by');
                
                $table->foreign('chart_of_account_id')->references('id')->on('chart_of_accounts')->onDelete('set null');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Remove foreign keys first
        Schema::table('products', function (Blueprint $table) {
            $table->dropForeign(['sales_account_id']);
            $table->dropForeign(['purchase_account_id']);
            $table->dropColumn(['sales_account_id', 'purchase_account_id']);
        });

        Schema::table('accounts', function (Blueprint $table) {
            $table->dropForeign(['chart_of_account_id']);
            $table->dropColumn('chart_of_account_id');
        });

        Schema::table('clients', function (Blueprint $table) {
            $table->dropForeign(['chart_of_account_id']);
            $table->dropColumn('chart_of_account_id');
        });

        Schema::table('suppliers', function (Blueprint $table) {
            $table->dropForeign(['chart_of_account_id']);
            $table->dropColumn('chart_of_account_id');
        });
    }
};
