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
        Schema::table('branches', function (Blueprint $table) {
            $table->string('slug')->unique()->nullable()->after('code');
        });

        // Generate slugs for existing branches
        $branches = DB::table('branches')->get();
        foreach ($branches as $branch) {
            $slug = \Illuminate\Support\Str::slug($branch->name);
            
            // Make sure slug is unique
            $counter = 1;
            while (DB::table('branches')->where('slug', $slug)->where('id', '!=', $branch->id)->exists()) {
                $slug = \Illuminate\Support\Str::slug($branch->name) . '-' . $counter;
                $counter++;
            }
            
            DB::table('branches')
                ->where('id', $branch->id)
                ->update(['slug' => $slug]);
        }

        // Make slug not nullable after populating
        Schema::table('branches', function (Blueprint $table) {
            $table->string('slug')->nullable(false)->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('branches', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
    }
};
