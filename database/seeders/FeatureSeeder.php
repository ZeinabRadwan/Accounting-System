<?php

namespace Database\Seeders;

use App\Models\Feature;
use Illuminate\Database\Seeder;

class FeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $features = [
            'Role Management',
            'VAT Rates Management',
            'Database Backup',
            'On Demand Support',
        ];

        foreach ($features as $featureName) {
            Feature::updateOrCreate(
                ['name' => $featureName],
                ['name' => $featureName]
            );
        }
    }
}