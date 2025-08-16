<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePermissionTables extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 160)->index();
            $table->boolean('is_admin')->default(0);
            $table->boolean('is_default')->default(0);
            $table->foreignId('type_id')->nullable()->references('id')->on('types')->onDelete('SET NULL');
            $table->unsignedBigInteger('created_by')->nullable();
            $table->timestamps();

            $table->foreign('created_by')->references('id')->on('users')->onDelete('cascade');
            
            // Additional indexes for performance
            $table->index(['is_admin', 'is_default'], 'idx_roles_admin_default');
            $table->index(['type_id', 'is_admin'], 'idx_roles_type_admin');
            $table->index(['created_by'], 'idx_roles_created_by');
        });

        Schema::create('permissions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('type_id')->nullable()->constrained()->onDelete('NO ACTION');
            $table->string('name');
            $table->string('group_name')->nullable();
            $table->timestamps();

            // Indexes for performance
            $table->index(['type_id', 'group_name'], 'idx_permissions_type_group');
            $table->index(['group_name'], 'idx_permissions_group');
        });

        Schema::create('role_permission', function (Blueprint $table) {
            $table->foreignId('role_id')->constrained()->onDelete('cascade');
            $table->foreignId('permission_id')->constrained()->onDelete('cascade');
            $table->text('meta')->nullable();

            $table->primary(['permission_id', 'role_id']);
            
            // Additional indexes for performance
            $table->index(['role_id'], 'idx_role_permission_role');
            $table->index(['permission_id'], 'idx_role_permission_permission');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down() {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('roles');
        Schema::dropIfExists('permissions');
        Schema::dropIfExists('role_permission');
        Schema::enableForeignKeyConstraints();
    }
}
