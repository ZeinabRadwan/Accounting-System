<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        Schema::table('suppliers', function (Blueprint $table) {
            // Account Details
            $table->string('code_number')->nullable()->after('supplier_id');
            $table->enum('billing_method', ['print', 'email', 'both'])->default('print')->after('code_number');
            $table->string('currency', 3)->default('EGP')->after('billing_method');
            $table->enum('classification', ['vip', 'regular', 'wholesale'])->nullable()->after('currency');
            $table->text('notes')->nullable()->after('classification');
            $table->enum('display_language', ['en', 'ar'])->nullable()->after('notes');

            // Enhanced Supplier Details
            $table->string('full_name')->nullable()->after('type');
            $table->string('business_name')->nullable()->after('full_name');
            $table->string('first_name')->nullable()->after('business_name');
            $table->string('last_name')->nullable()->after('first_name');
            $table->string('phone_number')->nullable()->after('last_name');

            // Enhanced Address Information
            $table->string('street_address1')->nullable()->after('address');
            $table->string('street_address2')->nullable()->after('street_address1');
            $table->string('city')->nullable()->after('street_address2');
            $table->string('state')->nullable()->after('city');
            $table->string('postal_code')->nullable()->after('state');
            $table->string('country', 2)->default('EG')->after('postal_code');
            $table->string('commercial_register')->nullable()->after('country');
            $table->string('tax_card')->nullable()->after('commercial_register');
            $table->boolean('add_secondary_address')->default(false)->after('tax_card');

            // Additional Fields
            $table->json('attachments')->nullable()->after('image_path');
            $table->boolean('is_send_email')->default(false)->after('attachments');
            $table->boolean('is_send_sms')->default(false)->after('is_send_email');

            // Rename existing fields for consistency
            // Use CHANGE COLUMN for MariaDB compatibility
            DB::statement('ALTER TABLE `suppliers` CHANGE COLUMN `phone` `phone_legacy` VARCHAR(255)');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('suppliers', function (Blueprint $table) {
            // Drop new fields
            $table->dropColumn([
                'code_number',
                'billing_method',
                'currency',
                'classification',
                'notes',
                'display_language',
                'full_name',
                'business_name',
                'first_name',
                'last_name',
                'phone_number',
                'street_address1',
                'street_address2',
                'city',
                'state',
                'postal_code',
                'country',
                'commercial_register',
                'tax_card',
                'add_secondary_address',
                'attachments',
                'is_send_email',
                'is_send_sms',
            ]);

            // Restore original field names
            // Use CHANGE COLUMN for MariaDB compatibility
            DB::statement('ALTER TABLE `suppliers` CHANGE COLUMN `phone_legacy` `phone` VARCHAR(255)');
        });
    }
};
