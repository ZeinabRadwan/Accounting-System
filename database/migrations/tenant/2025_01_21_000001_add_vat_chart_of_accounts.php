<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Add VAT-related chart of accounts
        $userId = DB::table('users')->first()->id ?? 1;
        
        // Get account type IDs
        $liabilityTypeId = DB::table('chart_of_account_types')->where('name', 'Liability')->first()->id;
        $assetTypeId = DB::table('chart_of_account_types')->where('name', 'Asset')->first()->id;
        
        // Insert VAT chart of accounts
        DB::table('chart_of_accounts')->insertOrIgnore([
            [
                'name' => 'Sales VAT Payable',
                'code' => '2210',
                'type_id' => $liabilityTypeId,
                'parent_id' => null,
                'order' => 9,
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Purchase VAT Receivable',
                'code' => '1210',
                'type_id' => $assetTypeId,
                'parent_id' => null,
                'order' => 6,
                'is_active' => true,
                'created_by' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Remove VAT chart of accounts
        DB::table('chart_of_accounts')->whereIn('code', ['2210', '1210'])->delete();
    }
};
