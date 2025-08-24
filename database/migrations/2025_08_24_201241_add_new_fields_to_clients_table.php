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
            // Account Details Section
            $table->string('code_number')->nullable()->after('client_id');
            $table->enum('billing_method', ['print', 'email', 'both'])->default('print')->after('code_number');
            $table->string('currency', 3)->default('EGP')->after('billing_method');
            $table->enum('classification', ['vip', 'regular', 'wholesale'])->nullable()->after('currency');
            $table->text('notes')->nullable()->after('classification');
            $table->enum('display_language', ['en', 'ar'])->nullable()->after('notes');
            
            // Enhanced Client Details Section
            $table->string('commercial_name')->nullable()->after('name');
            $table->string('first_name')->nullable()->after('commercial_name');
            $table->string('last_name')->nullable()->after('first_name');
            $table->string('phone_secondary')->nullable()->after('phone');
            $table->string('street_address1')->nullable()->after('phone_secondary');
            $table->string('street_address2')->nullable()->after('street_address1');
            $table->string('city')->nullable()->after('street_address2');
            $table->string('area')->nullable()->after('city');
            $table->string('postal_code')->nullable()->after('area');
            $table->string('country', 2)->nullable()->after('postal_code');
            $table->string('commercial_register')->nullable()->after('country');
            $table->string('tax_card')->nullable()->after('commercial_register');
            $table->boolean('add_secondary_address')->default(false)->after('tax_card');
            
            // Additional Fields
            $table->boolean('is_send_email')->default(false)->after('add_secondary_address');
            $table->boolean('is_send_sms')->default(false)->after('is_send_email');
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
            // Drop new fields
            $table->dropColumn([
                'code_number',
                'billing_method',
                'currency',
                'classification',
                'notes',
                'display_language',
                'first_name',
                'last_name',
                'phone_secondary',
                'street_address1',
                'street_address2',
                'city',
                'area',
                'postal_code',
                'country',
                'commercial_register',
                'tax_card',
                'add_secondary_address',
                'is_send_email',
                'is_send_sms'
            ]);
        });
    }
};
