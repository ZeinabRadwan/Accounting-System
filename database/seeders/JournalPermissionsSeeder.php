<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Permission;
use App\Models\Role;

class JournalPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create journal entry permissions
        //create permission for chart of accounts
        $chartOfAccountsPermissions = [
            [
                'name' => 'List',
                'guard_name' => 'Chart of Accounts Management',
                'slug' => 'chart-of-account-list',
            ],
            [
                'name' => 'Create',
                'guard_name' => 'Chart of Accounts Management',
                'slug' => 'chart-of-account-create',
            ],
            [
                'name' => 'View',
                'guard_name' => 'Chart of Accounts Management',
                'slug' => 'chart-of-account-view',
            ],
            [
                'name' => 'Edit',
                'guard_name' => 'Chart of Accounts Management',
                'slug' => 'chart-of-account-edit',
            ],
            [
                'name' => 'Delete',
                'guard_name' => 'Chart of Accounts Management',
                'slug' => 'chart-of-account-delete',
            ],
        ];

        foreach ($chartOfAccountsPermissions as $permission) {
            Permission::firstOrCreate(
                ['slug' => $permission['slug']],
                [
                    'name' => $permission['name'],
                    'guard_name' => $permission['guard_name'],
                ]
            );

        }
        $permissions = [
            [
                'name' => 'List',
                'guard_name' => 'Journal Entry Management',
                'slug' => 'journal-entry-list',
            ],
            [
                'name' => 'Create',
                'guard_name' => 'Journal Entry Management',
                'slug' => 'journal-entry-create',
            ],
            [
                'name' => 'View',
                'guard_name' => 'Journal Entry Management',
                'slug' => 'journal-entry-view',
            ],
            [
                'name' => 'Edit',
                'guard_name' => 'Journal Entry Management',
                'slug' => 'journal-entry-edit',
            ],
            [
                'name' => 'Delete',
                'guard_name' => 'Journal Entry Management',
                'slug' => 'journal-entry-delete',
            ],
            [
                'name' => 'Post',
                'guard_name' => 'Journal Entry Management',
                'slug' => 'journal-entry-post',
            ],
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(
                ['slug' => $permission['slug']],
                [
                    'name' => $permission['name'],
                    'guard_name' => $permission['guard_name'],
                ]
            );
        }

        // Assign permissions to admin role (or create admin role if it doesn't exist)
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        
        // Give admin role all journal permissions
        $adminRole->givePermissionTo(
            'journal-entry-list',
            'journal-entry-create',
            'journal-entry-view',
            'journal-entry-edit',
            'journal-entry-delete',
            'journal-entry-post',
            'chart-of-account-list',
            'chart-of-account-create',
            'chart-of-account-view',
            'chart-of-account-edit',
            'chart-of-account-delete'
        );

        // If you have a super admin role, give it permissions too
        $superAdminRole = Role::firstOrCreate(['name' => 'super-admin']);
        $superAdminRole->givePermissionTo(
            'journal-entry-list',
            'journal-entry-create',
            'journal-entry-view',
            'journal-entry-edit',
            'journal-entry-delete',
            'journal-entry-post',
            'chart-of-account-list',
            'chart-of-account-create',
            'chart-of-account-view',
            'chart-of-account-edit',
            'chart-of-account-delete'
        );

        $roles = DB::table('roles')->get();
        $permissions = DB::table('permissions')->get();
        foreach ($roles as $role) {
            foreach ($permissions as $permission) {
                $exists = DB::table('role_permission')
                    ->where('role_id', $role->id)
                    ->where('permission_id', $permission->id)
                    ->exists();
        
                if (!$exists) {
                    DB::table('role_permission')->insert([
                        'role_id' => $role->id,
                        'permission_id' => $permission->id,
                    ]);
                }
            }
        }
    

        $this->command->info('Journal entry permissions created and assigned to admin roles!');
    }
}
