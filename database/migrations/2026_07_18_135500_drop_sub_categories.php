<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('products') && Schema::hasColumn('products', 'sub_category_id')) {
            Schema::table('products', function (Blueprint $table) {
                $table->dropForeign(['sub_category_id']);
            });

            Schema::table('products', function (Blueprint $table) {
                $table->dropColumn('sub_category_id');
            });
        }

        Schema::dropIfExists('sub_categories');
    }

    public function down(): void
    {
        // Sub categories are permanently removed from the domain.
    }
};
