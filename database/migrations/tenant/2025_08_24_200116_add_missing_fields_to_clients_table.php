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
            $table->string('code_number')->nullable()->after('phone');
            $table->string('billing_method')->nullable()->after('code_number');
            $table->string('currency')->nullable()->after('billing_method');
            $table->string('classification')->nullable()->after('currency');
            $table->text('notes')->nullable()->after('classification');
            $table->string('display_language')->nullable()->after('notes');
            $table->string('commercial_name')->nullable()->after('display_language');
            $table->string('first_name')->nullable()->after('commercial_name');
            $table->string('last_name')->nullable()->after('first_name');
            $table->string('phone_secondary')->nullable()->after('last_name');
            $table->string('street_address1')->nullable()->after('phone_secondary');
            $table->string('street_address2')->nullable()->after('street_address1');
            $table->string('city')->nullable()->after('street_address2');
            $table->string('area')->nullable()->after('city');
            $table->string('postal_code')->nullable()->after('area');
            $table->string('country', 2)->nullable()->after('postal_code');
            $table->string('commercial_register')->nullable()->after('country');
            $table->string('tax_card')->nullable()->after('commercial_register');
            $table->boolean('add_secondary_address')->default(false)->after('tax_card');
            $table->boolean('is_send_email')->default(true)->after('add_secondary_address');
            $table->boolean('is_send_sms')->default(true)->after('is_send_email');
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
                'area', 'postal_code', 'country', 'commercial_register', 'tax_card',
                'add_secondary_address', 'is_send_email', 'is_send_sms'
            ]);
        });
    }
};
