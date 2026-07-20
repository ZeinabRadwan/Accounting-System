<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('journal_entries')) {
            Schema::create('journal_entries', function (Blueprint $table) {
                $table->id();
                $table->dateTime('entry_date');
                $table->string('description');
                $table->string('reference_type')->nullable();
                $table->unsignedBigInteger('reference_id')->nullable();
                $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
                $table->timestamps();

                $table->index(['reference_type', 'reference_id']);
            });
        }

        if (! Schema::hasTable('journal_entry_lines')) {
            Schema::create('journal_entry_lines', function (Blueprint $table) {
                $table->id();
                $table->foreignId('journal_entry_id')->constrained('journal_entries')->cascadeOnDelete();
                $table->string('account_type'); // cash, accounts_receivable, accounts_payable
                $table->unsignedBigInteger('account_reference_id')->nullable();
                $table->decimal('debit', 14, 2)->default(0);
                $table->decimal('credit', 14, 2)->default(0);
                $table->timestamps();

                $table->index(['account_type', 'account_reference_id']);
            });
        }

        if (! Schema::hasTable('activity_logs')) {
            Schema::create('activity_logs', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
                $table->string('action');
                $table->string('subject_type')->nullable();
                $table->unsignedBigInteger('subject_id')->nullable();
                $table->text('description')->nullable();
                $table->json('properties')->nullable();
                $table->timestamps();

                $table->index(['subject_type', 'subject_id']);
            });
        }

        if (! Schema::hasTable('customer_payments')) {
            Schema::create('customer_payments', function (Blueprint $table) {
                $table->id();
                $table->foreignId('customer_id')->constrained('customers')->restrictOnDelete();
                $table->decimal('amount', 14, 2);
                $table->string('payment_method');
                $table->foreignId('treasury_id')->constrained('treasuries')->restrictOnDelete();
                $table->dateTime('paid_at');
                $table->text('notes')->nullable();
                $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
                $table->foreignId('journal_entry_id')->nullable()->constrained('journal_entries')->nullOnDelete();
                $table->decimal('credit_portion', 14, 2)->default(0);
                $table->timestamps();
            });
        }

        if (! Schema::hasTable('customer_payment_applications')) {
            Schema::create('customer_payment_applications', function (Blueprint $table) {
                $table->id();
                $table->foreignId('customer_payment_id')->constrained('customer_payments')->cascadeOnDelete();
                $table->foreignId('sales_invoice_id')->constrained('sales_invoices')->restrictOnDelete();
                $table->decimal('applied_amount', 14, 2);
                $table->timestamps();

                $table->unique(['customer_payment_id', 'sales_invoice_id'], 'cpa_payment_invoice_unique');
            });
        }

        if (! Schema::hasTable('supplier_payments')) {
            Schema::create('supplier_payments', function (Blueprint $table) {
                $table->id();
                $table->foreignId('supplier_id')->constrained('suppliers')->restrictOnDelete();
                $table->decimal('amount', 14, 2);
                $table->string('payment_method');
                $table->foreignId('treasury_id')->constrained('treasuries')->restrictOnDelete();
                $table->dateTime('paid_at');
                $table->text('notes')->nullable();
                $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
                $table->foreignId('journal_entry_id')->nullable()->constrained('journal_entries')->nullOnDelete();
                $table->decimal('credit_portion', 14, 2)->default(0);
                $table->timestamps();
            });
        }

        if (! Schema::hasTable('supplier_payment_applications')) {
            Schema::create('supplier_payment_applications', function (Blueprint $table) {
                $table->id();
                $table->foreignId('supplier_payment_id')->constrained('supplier_payments')->cascadeOnDelete();
                $table->foreignId('purchase_invoice_id')->constrained('purchase_invoices')->restrictOnDelete();
                $table->decimal('applied_amount', 14, 2);
                $table->timestamps();

                $table->unique(['supplier_payment_id', 'purchase_invoice_id'], 'spa_payment_invoice_unique');
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('supplier_payment_applications');
        Schema::dropIfExists('supplier_payments');
        Schema::dropIfExists('customer_payment_applications');
        Schema::dropIfExists('customer_payments');
        Schema::dropIfExists('activity_logs');
        Schema::dropIfExists('journal_entry_lines');
        Schema::dropIfExists('journal_entries');
    }
};
