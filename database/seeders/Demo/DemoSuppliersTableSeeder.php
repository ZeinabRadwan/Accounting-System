<?php

namespace Database\Seeders\Demo;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DemoSuppliersTableSeeder extends Seeder
{
    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        DB::table('suppliers')->delete();

        DB::table('suppliers')->insert([
            0 => [
                'id' => 1,
                'name' => 'سعود العتيبي',
                'slug' => 'saud-alotaibi',
                'type' => 'Individual',
                'supplier_id' => '1',
                'email' => 'novuty@mailinator.com',
                'phone_number' => '+1 (654) 921-9435',
                'company_name' => 'شركة نيوتن للتجارة',
                'address' => 'Et deleniti alias do',
                'status' => 1,
                'image_path' => 'avatar.png',
                'created_at' => '2022-04-30 22:39:34',
                'updated_at' => '2022-04-30 22:39:34',
            ],
            1 => [
                'id' => 2,
                'name' => 'ريم القحطاني',
                'slug' => 'reem-alqahtani',
                'type' => 'Company',
                'supplier_id' => '2',
                'email' => 'xabexived@mailinator.com',
                'phone_number' => '+1 (546) 502-6344',
                'company_name' => 'شركة ريتشاردسون',
                'address' => 'Eos perferendis aut',
                'status' => 1,
                'image_path' => 'avatar.png',
                'created_at' => '2022-04-30 22:40:00',
                'updated_at' => '2022-04-30 22:40:00',
            ],
            2 => [
                'id' => 3,
                'name' => 'فهد الدوسري',
                'slug' => 'fahad-aldosari',
                'type' => 'Individual',
                'supplier_id' => '3',
                'email' => 'qihykiwos@mailinator.com',
                'phone_number' => '+1 (951) 281-5524',
                'company_name' => 'شركة جونز وماكنيل',
                'address' => 'Reprehenderit et lib',
                'status' => 1,
                'image_path' => 'avatar.png',
                'created_at' => '2022-04-30 22:40:26',
                'updated_at' => '2022-04-30 22:40:26',
            ],
            3 => [
                'id' => 4,
                'name' => 'نواف الشمري',
                'slug' => 'nawaf-alshammari',
                'type' => 'Company',
                'supplier_id' => '4',
                'email' => 'birevagiv@mailinator.com',
                'phone_number' => '+1 (115) 102-4307',
                'company_name' => 'شركة هوبر المتحدة',
                'address' => 'Omnis adipisicing od',
                'status' => 1,
                'image_path' => 'avatar.png',
                'created_at' => '2022-04-30 22:40:47',
                'updated_at' => '2022-04-30 22:40:55',
            ],
            4 => [
                'id' => 5,
                'name' => 'ليان السبيعي',
                'slug' => 'layan-alsubai',
                'type' => 'Individual',
                'supplier_id' => '5',
                'email' => 'hafyryhica@mailinator.com',
                'phone_number' => '+1 (403) 725-6412',
                'company_name' => 'شركة لورنس',
                'address' => 'Voluptatibus esse ex',
                'status' => 1,
                'image_path' => 'avatar.png',
                'created_at' => '2022-04-30 22:41:35',
                'updated_at' => '2022-04-30 22:41:35',
            ],
        ]);
    }
}
