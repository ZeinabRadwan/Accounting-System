<?php

require_once 'vendor/autoload.php';

$app = require_once 'bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use App\Models\Client;
use App\Models\ChartOfAccount;

echo "Testing client fix...\n";

try {
    $client = Client::where('slug', 'walking-customer')->first();
    
    if ($client) {
        echo "Client found: {$client->name}\n";
        echo "Current Chart of Account ID: " . ($client->chart_of_account_id ?? 'NULL') . "\n";
        echo "Phone: {$client->phone}\n";
        
        // Test if we can find a suitable chart of account
        $accountsReceivable = ChartOfAccount::where('name', 'like', '%Accounts Receivable%')
            ->orWhere('name', 'like', '%Customer%')
            ->orWhere('name', 'like', '%Client%')
            ->first();
        
        if ($accountsReceivable) {
            echo "Found suitable account: {$accountsReceivable->name} (ID: {$accountsReceivable->id})\n";
            
            // Test update
            $updateData = [
                'name' => $client->name,
                'phone' => '0502069121', // Fixed phone number
                'chart_of_account_id' => $accountsReceivable->id
            ];
            
            $client->update($updateData);
            echo "Successfully updated client!\n";
            
            // Verify the update
            $client->refresh();
            echo "Updated Chart of Account ID: {$client->chart_of_account_id}\n";
            echo "Updated Phone: {$client->phone}\n";
        } else {
            echo "No suitable Chart of Account found\n";
        }
    } else {
        echo "Client 'walking-customer' not found!\n";
    }
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
