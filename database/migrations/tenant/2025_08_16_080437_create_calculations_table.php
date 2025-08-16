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
        Schema::create('calculations', function (Blueprint $table) {
            $table->id();
            
            // Polymorphic relationship - can be linked to quotations, invoices, or other documents
            $table->morphs('calculable');
            
            // Base calculations - common between quotations and invoices
            $table->decimal('total_before_discount', 15, 2)->default(0.00);
            $table->unsignedTinyInteger('discount_type')->default(0)->comment('0: None, 1: Percentage, 2: Fixed');
            $table->decimal('discount', 10, 2)->default(0.00);
            $table->decimal('total_discount', 15, 2)->default(0.00);
            $table->decimal('total_after_discount', 15, 2)->default(0.00);
            $table->foreignId('tax_id')->nullable()->constrained('taxes')->nullOnDelete();
            $table->decimal('vat', 15, 2)->default(0.00);
            $table->decimal('total_after_vat', 15, 2)->default(0.00);
            $table->decimal('total', 15, 2)->default(0.00);
            
            // Laravel standard columns
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('updated_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
            $table->softDeletes();
            
            // UUID for external systems
            $table->uuid('uuid')->unique();
            
            // Indexes for performance
            $table->index(['tax_id']);
            $table->index(['discount_type']);
            $table->index(['total_before_discount']);
            $table->index(['total_after_discount']);
            $table->index(['total_after_vat']);
            $table->index(['total']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('calculations');
    }
};
