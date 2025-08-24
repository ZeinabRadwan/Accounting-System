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
        Schema::table('clients', function (Blueprint $table) {
            // Check if columns exist before renaming to avoid conflicts
            if (Schema::hasColumn('clients', 'company_name') && !Schema::hasColumn('clients', 'commercial_name')) {
                $table->renameColumn('company_name', 'commercial_name');
            }
            if (Schema::hasColumn('clients', 'tax_registration_number') && !Schema::hasColumn('clients', 'tax_card')) {
                $table->renameColumn('tax_registration_number', 'tax_card');
            }
            if (Schema::hasColumn('clients', 'address') && !Schema::hasColumn('clients', 'street_address1')) {
                $table->renameColumn('address', 'street_address1');
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
        Schema::table('clients', function (Blueprint $table) {
            // Revert column names if they exist
            if (Schema::hasColumn('clients', 'commercial_name') && !Schema::hasColumn('clients', 'company_name')) {
                $table->renameColumn('commercial_name', 'company_name');
            }
            if (Schema::hasColumn('clients', 'tax_card') && !Schema::hasColumn('clients', 'tax_registration_number')) {
                $table->renameColumn('tax_card', 'tax_registration_number');
            }
            if (Schema::hasColumn('clients', 'street_address1') && !Schema::hasColumn('clients', 'address')) {
                $table->renameColumn('street_address1', 'address');
            }
        });
    }
};
