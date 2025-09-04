<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\GeneralSetting;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Add fiscal year and accounting period settings as key-value pairs
        GeneralSetting::create([
            'key' => 'current_fiscal_year_id',
            'display_name' => 'Current Fiscal Year ID',
            'value' => null,
        ]);

        GeneralSetting::create([
            'key' => 'current_accounting_period_id',
            'display_name' => 'Current Accounting Period ID',
            'value' => null,
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        GeneralSetting::whereIn('key', ['current_fiscal_year_id', 'current_accounting_period_id'])->delete();
    }
};
