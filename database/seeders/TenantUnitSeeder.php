<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TenantUnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('units')->insert([
            [
                'name' => 'قطعة',
                'slug' => 'piece',
                'code' => 'Pcs',
                'note' => 'Individual items or units',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'كيلوغرام',
                'slug' => 'kilogram',
                'code' => 'Kg',
                'note' => 'Unit of mass',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'غرام',
                'slug' => 'gram',
                'code' => 'g',
                'note' => 'Unit of mass',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'لتر',
                'slug' => 'liter',
                'code' => 'L',
                'note' => 'Unit of volume',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'متر',
                'slug' => 'meter',
                'code' => 'm',
                'note' => 'Unit of length',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'سنتيمتر',
                'slug' => 'centimeter',
                'code' => 'cm',
                'note' => 'Unit of length',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'متر مربع',
                'slug' => 'square-meter',
                'code' => 'm²',
                'note' => 'Unit of area',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'متر مكعب',
                'slug' => 'cubic-meter',
                'code' => 'm³',
                'note' => 'Unit of volume',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'حزمة',
                'slug' => 'pack',
                'code' => 'Pack',
                'note' => 'Packaged items',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'صندوق',
                'slug' => 'box',
                'code' => 'Box',
                'note' => 'Boxed items',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'دزينة',
                'slug' => 'dozen',
                'code' => 'Dz',
                'note' => '12 pieces',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'زوج',
                'slug' => 'pair',
                'code' => 'Pair',
                'note' => 'Two matching items',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'مجموعة',
                'slug' => 'set',
                'code' => 'Set',
                'note' => 'Collection of items',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'زجاجة',
                'slug' => 'bottle',
                'code' => 'Btl',
                'note' => 'Bottled items',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'كرتون',
                'slug' => 'carton',
                'code' => 'Ctn',
                'note' => 'Carton packaging',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
