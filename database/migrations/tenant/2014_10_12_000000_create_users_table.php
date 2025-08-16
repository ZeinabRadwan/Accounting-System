<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateUsersTable.
 */
class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('email', 160)->unique();
            $table->string('password')->nullable();
            $table->timestamp('last_login_at')->nullable();
            $table->unsignedBigInteger("created_by")->nullable();
            $table->foreignId('status_id')->constrained()->onDelete('cascade');
            $table->string('invitation_token')->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null');
            
            // Indexes for performance - Optimized for common query patterns
            $table->index(['email', 'status_id'], 'idx_users_email_status');
            $table->index(['status_id'], 'idx_users_status');
            $table->index(['last_login_at'], 'idx_users_last_login');
            $table->index(['created_by'], 'idx_users_created_by');
            $table->index(['invitation_token'], 'idx_users_invitation');
            $table->index(['deleted_at'], 'idx_users_deleted_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
