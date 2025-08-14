<?php



namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tenant;
use Illuminate\Support\Facades\Artisan;
use Database\Seeders\Auth\PermissionTableSeeder;

class TenantPermissionSeeder extends Seeder
{
    public function run()
    {
        Tenant::all()->each(function ($tenant) {
            tenancy()->initialize($tenant);



            Artisan::call('db:seed', [
                '--class' => 'Database\\Seeders\\Auth\\TypeSeeder',
                '--force' => true
            ]);


            Artisan::call('db:seed', [
                '--class' => 'Database\\Seeders\\Auth\\PermissionTableSeeder',
                '--force' => true
            ]);
           

            tenancy()->end();
        });
    }
}
