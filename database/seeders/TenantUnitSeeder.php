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
                'name' => 'Piece',
                'slug' => 'piece',
                'code' => 'Pcs',
                'note' => 'Individual items or units',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Kilogram',
                'slug' => 'kilogram',
                'code' => 'Kg',
                'note' => 'Unit of mass',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Gram',
                'slug' => 'gram',
                'code' => 'g',
                'note' => 'Unit of mass',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Liter',
                'slug' => 'liter',
                'code' => 'L',
                'note' => 'Unit of volume',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Meter',
                'slug' => 'meter',
                'code' => 'm',
                'note' => 'Unit of length',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Centimeter',
                'slug' => 'centimeter',
                'code' => 'cm',
                'note' => 'Unit of length',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Square Meter',
                'slug' => 'square-meter',
                'code' => 'm²',
                'note' => 'Unit of area',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Cubic Meter',
                'slug' => 'cubic-meter',
                'code' => 'm³',
                'note' => 'Unit of volume',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Pack',
                'slug' => 'pack',
                'code' => 'Pack',
                'note' => 'Packaged items',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Box',
                'slug' => 'box',
                'code' => 'Box',
                'note' => 'Boxed items',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Dozen',
                'slug' => 'dozen',
                'code' => 'Dz',
                'note' => '12 pieces',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Pair',
                'slug' => 'pair',
                'code' => 'Pair',
                'note' => 'Two matching items',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Set',
                'slug' => 'set',
                'code' => 'Set',
                'note' => 'Collection of items',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Bottle',
                'slug' => 'bottle',
                'code' => 'Btl',
                'note' => 'Bottled items',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Carton',
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
