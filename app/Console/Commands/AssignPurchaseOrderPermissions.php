<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Role;
use App\Models\Permission;

class AssignPurchaseOrderPermissions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'permissions:assign-purchase-order';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Assign purchase order permissions to all roles';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // Get all roles
        $roles = Role::all();
        
        // Get purchase order permissions
        $permissions = Permission::where('slug', 'like', 'purchase-order%')->get();
        
        if ($permissions->isEmpty()) {
            $this->error('No purchase order permissions found. Please create them first.');
            return 1;
        }
        
        // Assign permissions to all roles
        foreach ($roles as $role) {
            foreach ($permissions as $permission) {
                $role->permissions()->syncWithoutDetaching([$permission->id]);
            }
        }
        
        $this->info('Purchase order permissions assigned to all roles successfully.');
        return 0;
    }
}