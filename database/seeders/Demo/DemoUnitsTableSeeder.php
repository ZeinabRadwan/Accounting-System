<?php

namespace Database\Seeders\Demo;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DemoUnitsTableSeeder extends Seeder
{
    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        DB::table('units')->delete();

        DB::table('units')->insert([
            0 => [
                'id' => 1,
                'name' => 'قطعة',
                'slug' => 'piece',
                'code' => 'Pcs',
                'note' => 'Individual items or units',
                'status' => 1,
                'created_at' => '2022-04-30 22:16:48',
                'updated_at' => '2022-04-30 22:18:07',
            ],
            1 => [
                'id' => 2,
                'name' => 'كيلوغرام',
                'slug' => 'kilogram',
                'code' => 'Kg',
                'note' => 'Unit of mass',
                'status' => 1,
                'created_at' => '2022-04-30 22:17:43',
                'updated_at' => '2022-04-30 22:17:43',
            ],
            2 => [
                'id' => 3,
                'name' => 'غرام',
                'slug' => 'gram',
                'code' => 'g',
                'note' => 'Unit of mass',
                'status' => 1,
                'created_at' => '2022-04-30 22:18:00',
                'updated_at' => '2022-04-30 22:18:00',
            ],
            3 => [
                'id' => 4,
                'name' => 'لتر',
                'slug' => 'liter',
                'code' => 'L',
                'note' => 'Unit of volume',
                'status' => 1,
                'created_at' => '2022-04-30 22:18:15',
                'updated_at' => '2022-04-30 22:18:15',
            ],
            4 => [
                'id' => 5,
                'name' => 'متر',
                'slug' => 'meter',
                'code' => 'm',
                'note' => 'Unit of length',
                'status' => 1,
                'created_at' => '2022-04-30 22:18:30',
                'updated_at' => '2022-04-30 22:18:30',
            ],
            5 => [
                'id' => 6,
                'name' => 'سنتيمتر',
                'slug' => 'centimeter',
                'code' => 'cm',
                'note' => 'Unit of length',
                'status' => 1,
                'created_at' => '2022-04-30 22:18:45',
                'updated_at' => '2022-04-30 22:18:45',
            ],
            6 => [
                'id' => 7,
                'name' => 'متر مربع',
                'slug' => 'square-meter',
                'code' => 'm²',
                'note' => 'Unit of area',
                'status' => 1,
                'created_at' => '2022-04-30 22:19:00',
                'updated_at' => '2022-04-30 22:19:00',
            ],
            7 => [
                'id' => 8,
                'name' => 'متر مكعب',
                'slug' => 'cubic-meter',
                'code' => 'm³',
                'note' => 'Unit of volume',
                'status' => 1,
                'created_at' => '2022-04-30 22:19:15',
                'updated_at' => '2022-04-30 22:19:15',
            ],
            8 => [
                'id' => 9,
                'name' => 'عبوة',
                'slug' => 'pack',
                'code' => 'Pack',
                'note' => 'Packaged items',
                'status' => 1,
                'created_at' => '2022-04-30 22:19:30',
                'updated_at' => '2022-04-30 22:19:30',
            ],
            9 => [
                'id' => 10,
                'name' => 'صندوق',
                'slug' => 'box',
                'code' => 'Box',
                'note' => 'Boxed items',
                'status' => 1,
                'created_at' => '2022-04-30 22:19:45',
                'updated_at' => '2022-04-30 22:19:45',
            ],
            10 => [
                'id' => 11,
                'name' => 'دزينة',
                'slug' => 'dozen',
                'code' => 'Dz',
                'note' => '12 pieces',
                'status' => 1,
                'created_at' => '2022-04-30 22:20:00',
                'updated_at' => '2022-04-30 22:20:00',
            ],
            11 => [
                'id' => 12,
                'name' => 'زوج',
                'slug' => 'pair',
                'code' => 'Pair',
                'note' => 'Two matching items',
                'status' => 1,
                'created_at' => '2022-04-30 22:20:15',
                'updated_at' => '2022-04-30 22:20:15',
            ],
            12 => [
                'id' => 13,
                'name' => 'مجموعة',
                'slug' => 'set',
                'code' => 'Set',
                'note' => 'Collection of items',
                'status' => 1,
                'created_at' => '2022-04-30 22:20:30',
                'updated_at' => '2022-04-30 22:20:30',
            ],
            13 => [
                'id' => 14,
                'name' => 'زجاجة',
                'slug' => 'bottle',
                'code' => 'Btl',
                'note' => 'Bottled items',
                'status' => 1,
                'created_at' => '2022-04-30 22:20:45',
                'updated_at' => '2022-04-30 22:20:45',
            ],
            14 => [
                'id' => 15,
                'name' => 'كرتون',
                'slug' => 'carton',
                'code' => 'Ctn',
                'note' => 'Carton packaging',
                'status' => 1,
                'created_at' => '2022-04-30 22:21:00',
                'updated_at' => '2022-04-30 22:21:00',
            ],
        ]);
    }
}
