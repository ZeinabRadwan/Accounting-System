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
        // Remove fields from clients table
        Schema::table('clients', function (Blueprint $table) {
            if (Schema::hasColumn('clients', 'billing_method')) {
                $table->dropColumn('billing_method');
            }
            if (Schema::hasColumn('clients', 'currency')) {
                $table->dropColumn('currency');
            }
            if (Schema::hasColumn('clients', 'classification')) {
                $table->dropColumn('classification');
            }
            if (Schema::hasColumn('clients', 'add_secondary_address')) {
                $table->dropColumn('add_secondary_address');
            }
        });

        // Remove fields from suppliers table
        Schema::table('suppliers', function (Blueprint $table) {
            if (Schema::hasColumn('suppliers', 'billing_method')) {
                $table->dropColumn('billing_method');
            }
            if (Schema::hasColumn('suppliers', 'currency')) {
                $table->dropColumn('currency');
            }
            if (Schema::hasColumn('suppliers', 'classification')) {
                $table->dropColumn('classification');
            }
            if (Schema::hasColumn('suppliers', 'add_secondary_address')) {
                $table->dropColumn('add_secondary_address');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Add fields back to clients table
        Schema::table('clients', function (Blueprint $table) {
            $table->string('billing_method')->nullable()->after('code_number');
            $table->string('currency')->nullable()->after('billing_method');
            $table->string('classification')->nullable()->after('currency');
            $table->boolean('add_secondary_address')->default(false)->after('tax_card');
        });

        // Add fields back to suppliers table
        Schema::table('suppliers', function (Blueprint $table) {
            $table->string('billing_method')->nullable()->after('code_number');
            $table->string('currency')->nullable()->after('billing_method');
            $table->string('classification')->nullable()->after('currency');
            $table->boolean('add_secondary_address')->default(false)->after('tax_card');
        });
    }
};
