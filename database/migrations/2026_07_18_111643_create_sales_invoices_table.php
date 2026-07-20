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
        if (! Schema::hasTable('sales_invoices')) {
            Schema::create('sales_invoices', function (Blueprint $table) {
                $table->id();
                $table->string('invoice_number')->unique();
                $table->foreignId('branch_id')->constrained('branches')->restrictOnDelete();
                $table->foreignId('user_id')->constrained('users')->restrictOnDelete();
                $table->foreignId('customer_id')->nullable()->constrained('customers')->nullOnDelete();

                $table->decimal('subtotal', 14, 2)->default(0);
                $table->decimal('discount_amount', 14, 2)->default(0);
                $table->decimal('total', 14, 2)->default(0);
                $table->string('payment_method'); // cash, visa, instapay, vodafone_cash
                $table->decimal('paid_amount', 14, 2)->default(0);
                $table->decimal('remaining_amount', 14, 2)->default(0);
                $table->string('status'); // paid, partially_paid, unpaid
                $table->timestamps();

                $table->index(['branch_id', 'customer_id']);
                $table->index(['created_at']);
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasTable('sales_invoices')) {
            Schema::dropIfExists('sales_invoices');
        }
    }
};
