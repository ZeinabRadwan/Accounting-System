<?php

namespace Database\Seeders;

use App\Domain\Treasury\Services\TreasuryService;
use Illuminate\Database\Seeder;

class TreasurySeeder extends Seeder
{
    public function run(): void
    {
        app(TreasuryService::class)->seedDefaults();
    }
}
