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
        Schema::create('invoice_items', function (Blueprint $table) {
            $table->id();
            
            // Relationship to invoices table
            $table->foreignId('invoice_id')->constrained('invoices')->cascadeOnDelete();
            
            // Item identification
            $table->string('item_name')->comment('Name/description of the item');
            $table->string('item_name_ar')->nullable()->comment('Arabic name/description');
            $table->string('item_code')->nullable()->comment('Item code/SKU');
            
            // Item details
            $table->text('description')->nullable()->comment('Detailed description');
            $table->text('description_ar')->nullable()->comment('Arabic description');
            $table->string('unit')->nullable()->comment('Unit of measurement');
            $table->decimal('quantity', 15, 3)->default(1.000)->comment('Quantity of items');
            
            // Pricing
            $table->decimal('unit_price', 15, 2)->default(0.00)->comment('Price per unit');
            $table->decimal('total_price', 15, 2)->default(0.00)->comment('Total price (quantity * unit_price)');
            $table->unsignedTinyInteger('discount_type')->default(0)->comment('0: None, 1: Percentage, 2: Fixed');
            $table->decimal('discount', 10, 2)->default(0.00)->comment('Discount amount or percentage');
            $table->decimal('discount_amount', 15, 2)->default(0.00)->comment('Calculated discount amount');
            $table->decimal('price_after_discount', 15, 2)->default(0.00)->comment('Price after applying discount');
            
            // Tax and totals
            $table->foreignId('tax_id')->nullable()->constrained('taxes')->nullOnDelete();
            $table->decimal('tax_rate', 5, 2)->default(0.00)->comment('Tax rate percentage');
            $table->decimal('tax_amount', 15, 2)->default(0.00)->comment('Calculated tax amount');
            $table->decimal('final_price', 15, 2)->default(0.00)->comment('Final price including tax');
            
            // Additional metadata
            $table->json('custom_fields')->nullable()->comment('Additional custom fields');
            $table->unsignedInteger('sort_order')->default(0)->comment('Order of items in the invoice');
            
            // Laravel standard columns
            $table->timestamps();
            $table->softDeletes();
            
            // Indexes for performance
            $table->index(['invoice_id', 'sort_order']);
            $table->index(['item_code']);
            $table->index(['tax_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoice_items');
    }
};
