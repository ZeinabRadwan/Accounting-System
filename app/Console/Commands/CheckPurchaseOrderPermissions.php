<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Permission;
use App\Models\Role;

class CheckPurchaseOrderPermissions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'permissions:check-purchase-order';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check purchase order permissions';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $permissions = Permission::where('slug', 'like', 'purchase-order%')->get();
        
        $this->info('Purchase order permissions found: ' . $permissions->count());
        
        foreach ($permissions as $permission) {
            $this->line('- ' . $permission->name . ' (' . $permission->slug . ')');
        }
        
        $roles = Role::all();
        $this->info('Roles found: ' . $roles->count());
        
        foreach ($roles as $role) {
            $rolePermissions = $role->permissions()->where('slug', 'like', 'purchase-order%')->count();
            $this->line('- ' . $role->name . ' has ' . $rolePermissions . ' purchase order permissions');
        }
        
        return Command::SUCCESS;
    }
}
