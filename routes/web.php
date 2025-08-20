<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DebugController;
use App\Http\Controllers\PaypalController;
use App\Http\Controllers\StripeController;
use App\Http\Controllers\PaystackController;
use App\Http\Controllers\RazorpayController;
use App\Http\Controllers\CentralAppController;
use App\Http\Controllers\Central\ExportController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\NewsletterSubscriptionController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

if (! app()->isProduction()) {
    Route::group(['prefix' => '/debug'], function () {
        Route::get('/version', [DebugController::class, 'version']);
        Route::get('/check-database', [DebugController::class, 'checkDatabase']);
    });
}

Route::post('/updateSystem', function (Request $request) {
    Artisan::call('git:setting');
    // Return a success response
    return response()->json(['status' => 'success']);
});


Route::get('/test-cpanel', function () {
    $cpanelUser = env('CPANEL_USERNAME', 'accountwebsoft');
    $apiToken = env('CPANEL_API_TOKEN', 'L89Q36V64ZHU0JVEWLBO6AG71H0S4FTT');
    $cpanelHost = env('CPANEL_HOST', 'account.websoft.sa');
    $cpanelPort = env('CPANEL_PORT', '2083'); // Use regular cPanel port
    
    $results = [];
    
    // Test 1: Try the working API endpoint (execute/Mysql/create_database)
    try {
        $response1 = Http::withHeaders([
            'Authorization' => "cpanel {$cpanelUser}:{$apiToken}"
        ])->timeout(30)->get("https://{$cpanelHost}:{$cpanelPort}/execute/Mysql/create_database", [
            'name' => 'accountw_test_' . time() // Use correct prefix
        ]);
        
        $results['test1_execute_mysql'] = [
            'status' => $response1->status(),
            'body' => $response1->body(),
            'success' => $response1->successful()
        ];
    } catch (Exception $e) {
        $results['test1_execute_mysql'] = ['error' => $e->getMessage()];
    }
    
    // Test 2: Try alternative API endpoint (execute2)
    try {
        $response2 = Http::withHeaders([
            'Authorization' => "cpanel {$cpanelUser}:{$apiToken}"
        ])->timeout(30)->get("https://{$cpanelHost}:{$cpanelPort}/execute2", [
            'cpanel_jsonapi_version' => '2',
            'cpanel_jsonapi_module' => 'Mysql',
            'cpanel_jsonapi_func' => 'create_database',
            'name' => 'accountw_test_alt_' . time() // Use correct prefix
        ]);
        
        $results['test2_execute2'] = [
            'status' => $response2->status(),
            'body' => $response2->body(),
            'success' => $response2->successful()
        ];
    } catch (Exception $e) {
        $results['test2_execute2'] = ['error' => $e->getMessage()];
    }
    
    return $results;
});



// display system info
Route::get('/system-info', function () {
    return phpinfo();
})->name('systemInfo');

Route::get('stripe/cancel', [StripeController::class, 'cancel'])->name('stripe.cancel');
Route::get('stripe/success', [StripeController::class, 'success'])->name('stripe.success');

Route::get('paypal/cancel', [PaypalController::class, 'cancel'])->name('paypal.cancel');
Route::get('paypal/success', [PaypalController::class, 'success'])->name('paypal.success');

Route::get('paystack/success', [PaystackController::class, 'success'])->name('paystack.callback');

Route::get('razorpay/success', [RazorpayController::class, 'success'])->name('razorpay.callback');

Route::get('/newsletter-confirm', [NewsletterSubscriptionController::class, 'confirm'])->name('newsletter-confirm');

Route::group(['middleware' => ['is_verified', 'need_to_install']], function () {
    Route::get('email/verify/{tenant}', [VerificationController::class, 'verify'])->name('verification.verify');
    Route::get('/tenants/pdf', [ExportController::class, 'tenantsPdf'])->name('tenants.pdf');
    Route::get('/tenants/export/excel', [ExportController::class, 'tenantsExportExcel'])->name('tenants.export.excel');
    Route::get('/domain-requests', CentralAppController::class)->name('domain-requests.index');

    Route::get('/subscription-requests', CentralAppController::class)->name('subscription-requests.index');

    // Central Routes
    Route::group(['as' => 'central.'], function () {
        Route::group(['middleware' => 'auth:sanctum'], function () {
            // spa view
            Route::get('/dashboard', CentralAppController::class)->name('dashboard.index');
            // Use web.php if you want CSRF protection, or api.php for an API endpoint
            Route::post('api/set-locale', [App\Http\Controllers\LanguageController::class, 'setLocale'])->name('set.locale');
        });
    });

    // SPA Routes
    Route::get('/{path}', CentralAppController::class)->where('path', '^(?!.*(?:api|storage)).*$');
});
