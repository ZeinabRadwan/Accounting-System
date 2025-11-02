<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Permission;
use App\Models\Role;

class CostCenterPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create cost center permissions
        $permissions = [
            [
                'name' => 'View Cost Centers',
                'guard_name' => 'Cost Center Management',
                'slug' => 'view_cost_centers',
            ],
            [
                'name' => 'Create Cost Center',
                'guard_name' => 'Cost Center Management',
                'slug' => 'create_cost_center',
            ],
            [
                'name' => 'Update Cost Center',
                'guard_name' => 'Cost Center Management',
                'slug' => 'update_cost_center',
            ],
            [
                'name' => 'Delete Cost Center',
                'guard_name' => 'Cost Center Management',
                'slug' => 'delete_cost_center',
            ],
            [
                'name' => 'View Cost Center Reports',
                'guard_name' => 'Cost Center Management',
                'slug' => 'view_cost_center_reports',
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

        // Assign permissions to admin role
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        
        // Give admin role all cost center permissions
        $adminRole->givePermissionTo(
            'view_cost_centers',
            'create_cost_center',
            'update_cost_center',
            'delete_cost_center',
            'view_cost_center_reports'
        );

        // If you have a super admin role, give it permissions too
        $superAdminRole = Role::firstOrCreate(['name' => 'super-admin']);
        $superAdminRole->givePermissionTo(
            'view_cost_centers',
            'create_cost_center',
            'update_cost_center',
            'delete_cost_center',
            'view_cost_center_reports'
        );

        // Assign permissions to all existing roles (optional - for backward compatibility)
        $roles = DB::table('roles')->get();
        $permissions = DB::table('permissions')->where('guard_name', 'Cost Center Management')->get();
        
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

        $this->command->info('Cost center permissions created and assigned to admin roles!');
    }
}

