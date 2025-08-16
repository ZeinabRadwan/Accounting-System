<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivityLogTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create(config('activitylog.table_name'), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('log_name', 160)->nullable();
            $table->text('description');
            $table->unsignedBigInteger('subject_id')->nullable();
            $table->string('subject_type', 160)->nullable();
            $table->unsignedBigInteger('causer_id')->nullable();
            $table->string('causer_type', 160)->nullable();
            $table->text('properties')->nullable();
            $table->timestamps();

            $table->index('log_name');
            $table->index(['subject_id', 'subject_type'], 'subject');
            $table->index(['causer_id', 'causer_type'], 'causer');
            
            // Additional optimized indexes for performance
            $table->index(['log_name', 'created_at'], 'idx_activity_log_name_date');
            $table->index(['subject_type', 'created_at'], 'idx_activity_log_subject_type_date');
            $table->index(['causer_type', 'created_at'], 'idx_activity_log_causer_type_date');
            $table->index(['created_at'], 'idx_activity_log_created_at');
            $table->index(['description'], 'idx_activity_log_description');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists(config('activitylog.table_name'));
    }
}
