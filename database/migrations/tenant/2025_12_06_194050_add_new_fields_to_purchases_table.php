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
        if (! Schema::hasTable('purchases')) {
            return;
        }

        Schema::table('purchases', function (Blueprint $table) {
            // Add cost_center_id if it doesn't exist
            if (! Schema::hasColumn('purchases', 'cost_center_id')) {
                if (Schema::hasColumn('purchases', 'branch_id')) {
                    $table->unsignedBigInteger('cost_center_id')->nullable()->after('branch_id');
                } else {
                    $table->unsignedBigInteger('cost_center_id')->nullable();
                }
                $table->foreign('cost_center_id')->references('id')->on('cost_centers')->onDelete('set null')->onUpdate('no action');
            }

            // Add purchase_status if it doesn't exist
            if (! Schema::hasColumn('purchases', 'purchase_status')) {
                $table->string('purchase_status')->nullable()->after('cost_center_id')->comment('Purchase status: تم الاستلام or معلقة');
            }

            // Add reference if it doesn't exist (rename from po_reference)
            if (! Schema::hasColumn('purchases', 'reference')) {
                $table->string('reference')->nullable()->after('purchase_status');
            }

            // Add discount_type if it doesn't exist
            if (! Schema::hasColumn('purchases', 'discount_type')) {
                $table->enum('discount_type', ['percentage', 'fixed'])->nullable()->after('discount')->default('fixed');
            }

            // Add discount_value if it doesn't exist
            if (! Schema::hasColumn('purchases', 'discount_value')) {
                $table->decimal('discount_value', 12, 2)->nullable()->after('discount_type');
            }

            // Add payment_type if it doesn't exist (use is_paid for backward compatibility)
            // We'll use is_paid: 1 = paid, 0 = due/credit
            // But add payment_type as string for clarity: 'paid' or 'due'
            if (! Schema::hasColumn('purchases', 'payment_type')) {
                $table->string('payment_type')->nullable()->after('is_paid')->comment('Payment type: paid or due');
            }

            // Add payment_method_id if it doesn't exist
            if (! Schema::hasColumn('purchases', 'payment_method_id')) {
                $table->unsignedBigInteger('payment_method_id')->nullable()->after('payment_type');
                $table->foreign('payment_method_id')->references('id')->on('payment_methods')->onDelete('set null')->onUpdate('no action');
            }

            // Add attachments as JSON if it doesn't exist
            if (! Schema::hasColumn('purchases', 'attachments')) {
                $table->json('attachments')->nullable()->after('note');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('purchases', function (Blueprint $table) {
            if (Schema::hasColumn('purchases', 'cost_center_id')) {
                $table->dropForeign(['cost_center_id']);
                $table->dropColumn('cost_center_id');
            }
            if (Schema::hasColumn('purchases', 'purchase_status')) {
                $table->dropColumn('purchase_status');
            }
            if (Schema::hasColumn('purchases', 'reference')) {
                $table->dropColumn('reference');
            }
            if (Schema::hasColumn('purchases', 'discount_type')) {
                $table->dropColumn('discount_type');
            }
            if (Schema::hasColumn('purchases', 'discount_value')) {
                $table->dropColumn('discount_value');
            }
            if (Schema::hasColumn('purchases', 'payment_type')) {
                $table->dropColumn('payment_type');
            }
            if (Schema::hasColumn('purchases', 'payment_method_id')) {
                $table->dropForeign(['payment_method_id']);
                $table->dropColumn('payment_method_id');
            }
            if (Schema::hasColumn('purchases', 'attachments')) {
                $table->dropColumn('attachments');
            }
        });
    }
};
