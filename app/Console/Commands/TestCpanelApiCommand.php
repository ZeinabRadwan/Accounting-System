<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class TestCpanelApiCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cpanel:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test cPanel API connection and database creation';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Testing cPanel API Connection...');

        // Get cPanel credentials from environment
        $cpanelUser = env('CPANEL_USERNAME', 'accountwebsoft');
        $apiToken = env('CPANEL_API_TOKEN', '');
        $cpanelHost = env('CPANEL_HOST', 'account.websoft.sa');
        $cpanelPort = env('CPANEL_PORT', '2083');

        $this->line("cPanel Host: {$cpanelHost}:{$cpanelPort}");
        $this->line("cPanel User: {$cpanelUser}");
        $this->line("API Token: " . (empty($apiToken) ? 'NOT SET' : substr($apiToken, 0, 10) . '...'));

        if (empty($apiToken)) {
            $this->error('CPANEL_API_TOKEN is not set in your .env file!');
            $this->line('Please add: CPANEL_API_TOKEN=your_actual_token_here');
            return 1;
        }

        // Test 1: Check if we can connect to cPanel
        $this->info('1. Testing cPanel connection...');
        try {
            $response = Http::withHeaders([
                'Authorization' => "cpanel {$cpanelUser}:{$apiToken}"
            ])->timeout(30)->get("https://{$cpanelHost}:{$cpanelPort}/execute/version");
            
            $this->line("Response Status: " . $response->status());
            $this->line("Response Body: " . $response->body());
            
            if ($response->successful()) {
                $this->info('✅ cPanel connection successful!');
            } else {
                $this->error('❌ cPanel connection failed!');
            }
        } catch (\Exception $e) {
            $this->error('❌ Connection error: ' . $e->getMessage());
        }

        // Test 2: Try to create a test database
        $this->info('2. Testing database creation...');
        $testDbName = 'test_tenant_' . time();

        try {
            $response = Http::withHeaders([
                'Authorization' => "cpanel {$cpanelUser}:{$apiToken}"
            ])->timeout(30)->get("https://{$cpanelHost}:{$cpanelPort}/execute/Mysql/create_database", [
                'name' => $testDbName
            ]);
            
            $this->line("Response Status: " . $response->status());
            $this->line("Response Body: " . $response->body());
            
            $data = $response->json();
            
            if (isset($data['status']) && $data['status'] === 1) {
                $this->info("✅ Successfully created test database: {$testDbName}");
                
                // Clean up - delete the test database
                $this->info('3. Cleaning up test database...');
                $deleteResponse = Http::withHeaders([
                    'Authorization' => "cpanel {$cpanelUser}:{$apiToken}"
                ])->timeout(30)->get("https://{$cpanelHost}:{$cpanelPort}/execute/Mysql/delete_database", [
                    'name' => $testDbName
                ]);
                
                if ($deleteResponse->successful()) {
                    $this->info('✅ Successfully deleted test database');
                } else {
                    $this->warn('⚠️  Warning: Could not delete test database');
                }
            } else {
                $this->error('❌ Failed to create test database');
                $this->line('Error details: ' . json_encode($data));
            }
        } catch (\Exception $e) {
            $this->error('❌ Database creation error: ' . $e->getMessage());
        }

        // Test 3: Try alternative API endpoint
        $this->info('4. Testing alternative API endpoint...');
        try {
            $response2 = Http::withHeaders([
                'Authorization' => "cpanel {$cpanelUser}:{$apiToken}"
            ])->timeout(30)->get("https://{$cpanelHost}:{$cpanelPort}/execute2", [
                'cpanel_jsonapi_version' => '2',
                'cpanel_jsonapi_module' => 'Mysql',
                'cpanel_jsonapi_func' => 'create_database',
                'name' => 'test_alt_' . time()
            ]);
            
            $this->line("Alternative API Response Status: " . $response2->status());
            $this->line("Alternative API Response Body: " . $response2->body());
            
            $data2 = $response2->json();
            if (isset($data2['cpanelresult']['data'][0]['result']) && $data2['cpanelresult']['data'][0]['result'] === 1) {
                $this->info('✅ Alternative API endpoint works!');
            } else {
                $this->error('❌ Alternative API endpoint failed');
            }
        } catch (\Exception $e) {
            $this->error('❌ Alternative API error: ' . $e->getMessage());
        }

        $this->info('Test completed.');
        return 0;
    }
}
