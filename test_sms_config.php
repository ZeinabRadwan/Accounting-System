<?php
/**
 * SMS Configuration Test Script
 * Run this from your Laravel application root to test SMS configuration
 */

require_once 'vendor/autoload.php';

// Load Laravel application
$app = require_once 'bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use Illuminate\Support\Facades\Config;
use NotificationChannels\Twilio\TwilioChannel;

echo "=== SMS Configuration Test ===\n\n";

// Check environment variables
echo "1. Environment Variables:\n";
echo "TWILIO_ACCOUNT_SID: " . (env('TWILIO_ACCOUNT_SID') ? 'SET' : 'NOT SET') . "\n";
echo "TWILIO_AUTH_TOKEN: " . (env('TWILIO_AUTH_TOKEN') ? 'SET' : 'NOT SET') . "\n";
echo "TWILIO_FROM: " . (env('TWILIO_FROM') ? 'SET' : 'NOT SET') . "\n";
echo "TWILIO_SMS_SERVICE_SID: " . (env('TWILIO_SMS_SERVICE_SID') ? 'SET' : 'NOT SET') . "\n\n";

// Check Twilio configuration
echo "2. Twilio Configuration:\n";
$twilioConfig = config('twilio-notification-channel');
echo "Account SID: " . ($twilioConfig['account_sid'] ? 'CONFIGURED' : 'NOT CONFIGURED') . "\n";
echo "Auth Token: " . ($twilioConfig['auth_token'] ? 'CONFIGURED' : 'NOT CONFIGURED') . "\n";
echo "From Number: " . ($twilioConfig['from'] ? 'CONFIGURED' : 'NOT CONFIGURED') . "\n";
echo "SMS Service SID: " . ($twilioConfig['sms_service_sid'] ? 'CONFIGURED' : 'NOT CONFIGURED') . "\n\n";

// Test Twilio client creation
echo "3. Testing Twilio Client Creation:\n";
try {
    $client = new \Twilio\Rest\Client(
        $twilioConfig['account_sid'],
        $twilioConfig['auth_token']
    );
    echo "✅ Twilio client created successfully!\n";
    
    // Test account info
    $account = $client->api->accounts($twilioConfig['account_sid'])->fetch();
    echo "✅ Account verified: " . $account->friendlyName . "\n";
    
} catch (Exception $e) {
    echo "❌ Error creating Twilio client: " . $e->getMessage() . "\n";
}

echo "\n=== Test Complete ===\n";
