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
        Schema::table('tenants', function (Blueprint $table) {
            $table->boolean('is_archived')->default(false)->after('plan_ends_at');
            $table->timestamp('archived_at')->nullable()->after('is_archived');
            $table->string('archived_by')->nullable()->after('archived_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tenants', function (Blueprint $table) {
            $table->dropColumn(['is_archived', 'archived_at', 'archived_by']);
        });
    }
};
