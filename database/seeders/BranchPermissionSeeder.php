<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BranchPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Branch permissions
        $branchPermissions = [
            [
                'name' => 'Create',
                'guard_name' => 'Branch Management',
                'slug' => 'branches-create',
            ],
            [
                'name' => 'List',
                'guard_name' => 'Branch Management',
                'slug' => 'branches-list',
            ],
            [
                'name' => 'Edit',
                'guard_name' => 'Branch Management',
                'slug' => 'branches-edit',
            ],
            [
                'name' => 'View',
                'guard_name' => 'Branch Management',
                'slug' => 'branches-view',
            ],
            [
                'name' => 'Delete',
                'guard_name' => 'Branch Management',
                'slug' => 'branches-delete',
            ],
            [
                'name' => 'Assign Users',
                'guard_name' => 'Branch Management',
                'slug' => 'branches-assign-users',
            ],
        ];

        // Use upsert to insert or update permissions
        // This will insert if not exists, update if exists based on slug
        foreach ($branchPermissions as $permission) {
            DB::table('permissions')->updateOrInsert(
                ['slug' => $permission['slug']], // Match condition
                $permission // Data to insert/update
            );
        }
    }
}

