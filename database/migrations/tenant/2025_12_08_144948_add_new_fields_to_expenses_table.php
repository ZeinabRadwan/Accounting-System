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
        if (! Schema::hasTable('expenses')) {
            return;
        }

        Schema::table('expenses', function (Blueprint $table) {
            // Add cost_center_id if it doesn't exist
            if (! Schema::hasColumn('expenses', 'cost_center_id')) {
                if (Schema::hasColumn('expenses', 'branch_id')) {
                    $table->unsignedBigInteger('cost_center_id')->nullable()->after('branch_id');
                } else {
                    $table->unsignedBigInteger('cost_center_id')->nullable()->after('status');
                }
                $table->foreign('cost_center_id')->references('id')->on('cost_centers')->onDelete('set null')->onUpdate('no action');
            }

            // Add reference if it doesn't exist
            if (! Schema::hasColumn('expenses', 'reference')) {
                if (Schema::hasColumn('expenses', 'cost_center_id')) {
                    $table->string('reference')->nullable()->after('cost_center_id');
                } else {
                    $table->string('reference')->nullable()->after('status');
                }
            }

            // Add tax_id if it doesn't exist (for tax type, similar to invoices)
            if (! Schema::hasColumn('expenses', 'tax_id')) {
                if (Schema::hasColumn('expenses', 'reference')) {
                    $table->unsignedBigInteger('tax_id')->nullable()->after('reference');
                } else {
                    $table->unsignedBigInteger('tax_id')->nullable()->after('status');
                }
                $table->foreign('tax_id')->references('id')->on('vat_rates')->onDelete('set null')->onUpdate('no action');
            }

            // Add attachments as JSON if it doesn't exist
            if (! Schema::hasColumn('expenses', 'attachments')) {
                $table->json('attachments')->nullable()->after('note');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('expenses', function (Blueprint $table) {
            if (Schema::hasColumn('expenses', 'attachments')) {
                $table->dropColumn('attachments');
            }
            if (Schema::hasColumn('expenses', 'tax_id')) {
                $table->dropForeign(['tax_id']);
                $table->dropColumn('tax_id');
            }
            if (Schema::hasColumn('expenses', 'reference')) {
                $table->dropColumn('reference');
            }
            if (Schema::hasColumn('expenses', 'cost_center_id')) {
                $table->dropForeign(['cost_center_id']);
                $table->dropColumn('cost_center_id');
            }
        });
    }
};
