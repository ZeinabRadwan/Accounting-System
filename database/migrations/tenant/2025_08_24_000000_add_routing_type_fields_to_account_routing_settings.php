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

        //if fields doesnt exists then add them
        if (!Schema::hasColumn('account_routing_settings', 'routing_type')) {
            Schema::table('account_routing_settings', function (Blueprint $table) {
                $table->enum('routing_type', ['automatic', 'per_each', 'main_account_per_each', 'cancel'])
                      ->default('automatic')
                      ->after('parent_account_id');
            });
        }
        if (!Schema::hasColumn('account_routing_settings', 'main_account_id')) {
            Schema::table('account_routing_settings', function (Blueprint $table) {
                $table->unsignedBigInteger('main_account_id')->nullable()->after('routing_type');
            });
        }
        if (!Schema::hasColumn('account_routing_settings', 'routing_type_options')) {
            Schema::table('account_routing_settings', function (Blueprint $table) {
                $table->json('routing_type_options')->nullable()->after('main_account_id');
            });
        }
        if (!Schema::hasColumn('account_routing_settings', 'main_account_id')) {
            Schema::table('account_routing_settings', function (Blueprint $table) {
                $table->foreign('main_account_id')->references('id')->on('chart_of_accounts')->onDelete('set null');
            });
        }

        // Schema::table('account_routing_settings', function (Blueprint $table) {
        //     // Add routing type field
        //     $table->enum('routing_type', ['automatic', 'per_each', 'main_account_per_each', 'cancel'])
        //           ->default('automatic')
        //           ->after('parent_account_id');
            
        //     // Add main account field - this will be the single account field for all routing types
        //     $table->unsignedBigInteger('main_account_id')->nullable()->after('routing_type');
            
        //     // Add routing type options field for custom routing options
        //     $table->json('routing_type_options')->nullable()->after('main_account_id');
            
        //     // Add foreign key constraint for main account
        //     $table->foreign('main_account_id')->references('id')->on('chart_of_accounts')->onDelete('set null');
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('account_routing_settings', function (Blueprint $table) {
            $table->dropForeign(['main_account_id']);
            $table->dropColumn(['routing_type', 'main_account_id', 'routing_type_options']);
        });
    }
};
