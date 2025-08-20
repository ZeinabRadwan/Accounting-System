<?php

require_once 'vendor/autoload.php';

$app = require_once 'bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\Supplier;
use App\Models\Client;

echo "Starting to update CR Number fields...\n";

try {
    // Update suppliers
    $suppliersUpdated = Supplier::whereNull('cr_number')->update(['cr_number' => 'N/A']);
    echo "Updated {$suppliersUpdated} suppliers with default CR Number\n";

    // Update clients
    $clientsUpdated = Client::whereNull('cr_number')->update(['cr_number' => 'N/A']);
    echo "Updated {$clientsUpdated} clients with default CR Number\n";

    // Also ensure type field exists for suppliers
    $suppliersTypeUpdated = Supplier::whereNull('type')->update(['type' => 'Company']);
    echo "Updated {$suppliersTypeUpdated} suppliers with default Type\n";

    echo "CR Number fields update completed successfully!\n";
} catch (Exception $e) {
    echo "Error updating CR Number fields: " . $e->getMessage() . "\n";
}
