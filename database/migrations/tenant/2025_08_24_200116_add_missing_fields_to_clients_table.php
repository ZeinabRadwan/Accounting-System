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
            // Add columns only if they don't exist
            if (!Schema::hasColumn('clients', 'code_number')) {
                $table->string('code_number')->nullable()->after('phone');
            }
            if (!Schema::hasColumn('clients', 'billing_method')) {
                $table->string('billing_method')->nullable()->after('code_number');
            }
            if (!Schema::hasColumn('clients', 'currency')) {
                $table->string('currency')->nullable()->after('billing_method');
            }
            if (!Schema::hasColumn('clients', 'classification')) {
                $table->string('classification')->nullable()->after('currency');
            }
            if (!Schema::hasColumn('clients', 'notes')) {
                $table->text('notes')->nullable()->after('classification');
            }
            if (!Schema::hasColumn('clients', 'display_language')) {
                $table->string('display_language')->nullable()->after('notes');
            }
            if (!Schema::hasColumn('clients', 'commercial_name')) {
                $table->string('commercial_name')->nullable()->after('display_language');
            }
            if (!Schema::hasColumn('clients', 'first_name')) {
                $table->string('first_name')->nullable()->after('commercial_name');
            }
            if (!Schema::hasColumn('clients', 'last_name')) {
                $table->string('last_name')->nullable()->after('first_name');
            }
            if (!Schema::hasColumn('clients', 'phone_secondary')) {
                $table->string('phone_secondary')->nullable()->after('last_name');
            }
            if (!Schema::hasColumn('clients', 'street_address1')) {
                $table->string('street_address1')->nullable()->after('phone_secondary');
            }
            if (!Schema::hasColumn('clients', 'street_address2')) {
                $table->string('street_address2')->nullable()->after('street_address1');
            }
            if (!Schema::hasColumn('clients', 'city')) {
                $table->string('city')->nullable()->after('street_address2');
            }
            if (!Schema::hasColumn('clients', 'state')) {
                $table->string('state')->nullable()->after('city');
            }
            if (!Schema::hasColumn('clients', 'area')) {
                $table->string('area')->nullable()->after('state');
            }
            if (!Schema::hasColumn('clients', 'postal_code')) {
                $table->string('postal_code')->nullable()->after('area');
            }
            if (!Schema::hasColumn('clients', 'country')) {
                $table->string('country', 2)->nullable()->after('postal_code');
            }
            if (!Schema::hasColumn('clients', 'commercial_register')) {
                $table->string('commercial_register')->nullable()->after('country');
            }
            if (!Schema::hasColumn('clients', 'tax_card')) {
                $table->string('tax_card')->nullable()->after('commercial_register');
            }
            if (!Schema::hasColumn('clients', 'add_secondary_address')) {
                $table->boolean('add_secondary_address')->default(false)->after('tax_card');
            }
            if (!Schema::hasColumn('clients', 'is_send_email')) {
                $table->boolean('is_send_email')->default(true)->after('add_secondary_address');
            }
            if (!Schema::hasColumn('clients', 'is_send_sms')) {
                $table->boolean('is_send_sms')->default(true)->after('is_send_email');
            }
            if (!Schema::hasColumn('clients', 'full_name')) {
                $table->string('full_name')->nullable()->after('is_send_sms');
            }
            if (!Schema::hasColumn('clients', 'business_name')) {
                $table->string('business_name')->nullable()->after('full_name');
            }
            if (!Schema::hasColumn('clients', 'phone_number')) {
                $table->string('phone_number')->nullable()->after('business_name');
            }
            if (!Schema::hasColumn('clients', 'attachments')) {
                $table->json('attachments')->nullable()->after('phone_number');
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
            $table->dropColumn([
                'code_number', 'billing_method', 'currency', 'classification', 'notes',
                'display_language', 'commercial_name', 'first_name', 'last_name',
                'phone_secondary', 'street_address1', 'street_address2', 'city',
                'state', 'area', 'postal_code', 'country', 'commercial_register', 'tax_card',
                'add_secondary_address', 'is_send_email', 'is_send_sms', 'full_name',
                'business_name', 'phone_number', 'attachments'
            ]);
        });
    }
};
