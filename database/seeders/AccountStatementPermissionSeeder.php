<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Role;

class AccountStatementPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Check if permission already exists
        $existingPermission = DB::table('permissions')->where('slug', 'account-statement')->first();
        
        if (!$existingPermission) {
            DB::table('permissions')->insert([
                [
                    'name' => 'Account Statement',
                    'guard_name' => 'Report View',
                    'slug' => 'account-statement',
                ],
            ]);
        }

      

        $existingPermission = DB::table('permissions')->where('slug', 'vat-report')->first();
        
        if (!$existingPermission) {
            DB::table('permissions')->insert([
                [
                    'name' => 'VAT Report',
                    'guard_name' => 'Report View',
                    'slug' => 'vat-report',
                ],
            ]);
        }


        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        
        // Give admin role all journal permissions
        $adminRole->givePermissionTo(
            'account-statement',
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
    



    }
}
