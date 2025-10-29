<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_vouchers', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->boolean('voucher_type')->comment('1 = Receive (قبض), 0 = Send (صرف)');
            $table->string('entity_type')->comment('client, supplier, chart_of_account');
            $table->unsignedBigInteger('client_id')->nullable();
            $table->unsignedBigInteger('supplier_id')->nullable();
            $table->unsignedBigInteger('chart_of_account_id')->nullable();
            $table->string('payment_method')->default('direct')->comment('direct, invoice, purchase');
            $table->unsignedBigInteger('invoice_id')->nullable();
            $table->unsignedBigInteger('purchase_id')->nullable();
            $table->double('amount', 12, 2);
            $table->unsignedBigInteger('account_id');
            $table->unsignedBigInteger('transaction_id')->nullable();
            $table->date('date');
            $table->string('cheque_no')->nullable();
            $table->string('receipt_no')->nullable();
            $table->text('note')->nullable();
            $table->boolean('status')->default(1);
            $table->unsignedBigInteger('created_by');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade')->onUpdate('no action');
            $table->foreign('supplier_id')->references('id')->on('suppliers')->onDelete('cascade')->onUpdate('no action');
            $table->foreign('chart_of_account_id')->references('id')->on('chart_of_accounts')->onDelete('cascade')->onUpdate('no action');
            $table->foreign('invoice_id')->references('id')->on('invoices')->onDelete('set null')->onUpdate('no action');
            $table->foreign('purchase_id')->references('id')->on('purchases')->onDelete('set null')->onUpdate('no action');
            $table->foreign('account_id')->references('id')->on('accounts')->onDelete('cascade')->onUpdate('no action');
            $table->foreign('transaction_id')->references('id')->on('account_transactions')->onDelete('set null')->onUpdate('no action');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('no action')->onUpdate('no action');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment_vouchers');
    }
};
