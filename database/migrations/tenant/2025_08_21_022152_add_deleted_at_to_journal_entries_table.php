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
        Schema::table('journal_entries', function (Blueprint $table) {
            // Add missing columns that are used by the model
            if (!Schema::hasColumn('journal_entries', 'entry_number')) {
                $table->unsignedInteger('entry_number')->after('id');
            }
            if (!Schema::hasColumn('journal_entries', 'source_type')) {
                $table->string('source_type')->nullable()->after('void_reason');
            }
            if (!Schema::hasColumn('journal_entries', 'source_id')) {
                $table->unsignedBigInteger('source_id')->nullable()->after('source_type');
            }
            
            // Add soft deletes column
            $table->softDeletes(); // This adds deleted_at column for soft deletes
            
            // Add indexes for new columns
            $table->index('entry_number');
            $table->index(['source_type', 'source_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('journal_entries', function (Blueprint $table) {
            // Remove indexes
            $table->dropIndex(['source_type', 'source_id']);
            $table->dropIndex(['entry_number']);
            
            // Remove soft deletes column
            $table->dropSoftDeletes(); // This removes the deleted_at column
            
            // Remove added columns
            $table->dropColumn(['source_id', 'source_type', 'entry_number']);
        });
    }
};
