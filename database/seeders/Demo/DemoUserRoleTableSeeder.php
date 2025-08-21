<?php

namespace Database\Seeders\Demo;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DemoUserRoleTableSeeder extends Seeder
{
    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

        if (DB::table('user_role')->count() == 0) {
            DB::table('user_role')->insert([
                [
                    'user_id' => 1,
                    'role_id' => 1,
                ],
            ]);
        }
        // \DB::table('user_role')->delete();

        // \DB::table('user_role')->insert([
        //     0 => [
        //         'user_id' => 1,
        //         'role_id' => 1,
        //     ],
        //     1 => [
        //         'user_id' => 2,
        //         'role_id' => 2,
        //     ],
        //     2 => [
        //         'user_id' => 3,
        //         'role_id' => 3,
        //     ],
        //     3 => [
        //         'user_id' => 4,
        //         'role_id' => 2,
        //     ],
        //     4 => [
        //         'user_id' => 5,
        //         'role_id' => 1,
        //     ],
        // ]);
    }
}
