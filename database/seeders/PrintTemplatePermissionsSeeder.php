<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PrintTemplatePermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            [
                'name' => 'Print Templates',
                'guard_name' => 'Print Templates Management',
                'slug' => 'print-templates',
            ],
            [
                'name' => 'Create',
                'guard_name' => 'Print Templates Management',
                'slug' => 'print-templates-create',
            ],
            [
                'name' => 'List',
                'guard_name' => 'Print Templates Management',
                'slug' => 'print-templates-list',
            ],
            [
                'name' => 'Edit',
                'guard_name' => 'Print Templates Management',
                'slug' => 'print-templates-edit',
            ],
            [
                'name' => 'View',
                'guard_name' => 'Print Templates Management',
                'slug' => 'print-templates-view',
            ],
            [
                'name' => 'Delete',
                'guard_name' => 'Print Templates Management',
                'slug' => 'print-templates-delete',
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

        // Assign permissions to all existing roles
        $roles = DB::table('roles')->get();
        $permissions = DB::table('permissions')->whereIn('slug', [
            'print-templates',
            'print-templates-create',
            'print-templates-list',
            'print-templates-edit',
            'print-templates-view',
            'print-templates-delete'
        ])->get();
        
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

        $this->command->info('Print template permissions created and assigned to all roles!');
    }
}
