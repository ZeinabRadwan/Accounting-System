<?php

use App\Http\Controllers\SystemUpdateController;
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
use App\Http\Controllers\SuspensionController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

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

// System Update UI is only available if SYSTEM_UPDATE_KEY exists in env
if (! empty(env('SYSTEM_UPDATE_KEY'))) {
    // Route::middleware(['web','auth'])->group(function () {
        Route::get('/system-update', [SystemUpdateController::class, 'index'])->name('system.update.index');
        Route::get('/system-update/settings', [SystemUpdateController::class, 'getSettings'])->name('system.update.settings.get');
        Route::post('/system-update/settings', [SystemUpdateController::class, 'saveSettings'])->name('system.update.settings.save');
        Route::post('/system-update/push', [SystemUpdateController::class, 'pushSettings'])->name('system.update.settings.push');
        Route::post('/system-update/push-build-results', [SystemUpdateController::class, 'pushBuildResults'])->name('system.update.push.build.results');
        Route::post('/system-update/build-only', [SystemUpdateController::class, 'buildOnly'])->name('system.update.build.only');
        Route::get('/system-update/build-stream', [SystemUpdateController::class, 'buildStream'])->name('system.update.build.stream');
        Route::get('/system-update/git-status', [SystemUpdateController::class, 'gitStatus'])->name('system.update.git.status');
        Route::post('/system-update/git-pull', [SystemUpdateController::class, 'gitPull'])->name('system.update.git.pull');
        Route::post('/system-update/git-commit', [SystemUpdateController::class, 'gitCommit'])->name('system.update.git.commit');
        Route::post('/system-update/git-push', [SystemUpdateController::class, 'gitPush'])->name('system.update.git.push');
    // });
}

// Suspension page route (accessible without authentication)
Route::get('/suspended', [SuspensionController::class, 'show'])->name('suspended');

if (! app()->isProduction()) {
    Route::group(['prefix' => '/debug'], function () {
        Route::get('/version', [DebugController::class, 'version']);
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

// Serve language JSON files from build directory (more reliable than static file serving)
Route::get('/build/lang/{locale}.json', function ($locale) {
    $filePath = public_path("build/lang/{$locale}.json");
    
    if (!file_exists($filePath)) {
        return response()->json([
            'error' => 'Language file not found',
            'locale' => $locale,
            'path' => $filePath
        ], 404);
    }
    
    try {
        $content = file_get_contents($filePath);
        $json = json_decode($content, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            return response()->json([
                'error' => 'Invalid JSON',
                'locale' => $locale,
                'json_error' => json_last_error_msg()
            ], 500);
        }
        
        return response()->json($json, 200, [
            'Content-Type' => 'application/json; charset=utf-8',
            'Cache-Control' => 'public, max-age=3600',
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Failed to read file',
            'locale' => $locale,
            'message' => $e->getMessage()
        ], 500);
    }
})->name('build.lang');

// Debug route to test build/lang file accessibility
Route::get('/debug/build-lang/{locale}', function ($locale) {
    $filePath = public_path("build/lang/{$locale}.json");
    $exists = file_exists($filePath);
    $readable = $exists && is_readable($filePath);
    
    $response = [
        'locale' => $locale,
        'file_path' => $filePath,
        'exists' => $exists,
        'readable' => $readable,
        'url' => "/build/lang/{$locale}.json",
        'route_url' => route('build.lang', ['locale' => $locale]),
        'public_path' => public_path(),
        'build_dir_exists' => is_dir(public_path('build')),
        'lang_dir_exists' => is_dir(public_path('build/lang')),
    ];
    
    if ($exists) {
        $response['file_size'] = filesize($filePath);
        $response['file_permissions'] = substr(sprintf('%o', fileperms($filePath)), -4);
        try {
            $content = json_decode(file_get_contents($filePath), true);
            $response['is_valid_json'] = json_last_error() === JSON_ERROR_NONE;
            $response['keys_count'] = $is_valid_json ? count($content) : 0;
        } catch (\Exception $e) {
            $response['read_error'] = $e->getMessage();
        }
    }
    
    // List all lang files
    $langDir = public_path('build/lang');
    if (is_dir($langDir)) {
        $response['available_files'] = array_values(array_filter(
            scandir($langDir),
            fn($file) => pathinfo($file, PATHINFO_EXTENSION) === 'json'
        ));
    }
    
    return response()->json($response, $exists ? 200 : 404);
})->name('debug.build.lang');

Route::get('stripe/cancel', [StripeController::class, 'cancel'])->name('stripe.cancel');
Route::get('stripe/success', [StripeController::class, 'success'])->name('stripe.success');

Route::get('paypal/cancel', [PaypalController::class, 'cancel'])->name('paypal.cancel');
Route::get('paypal/success', [PaypalController::class, 'success'])->name('paypal.success');

Route::get('paystack/success', [PaystackController::class, 'success'])->name('paystack.callback');

Route::get('razorpay/success', [RazorpayController::class, 'success'])->name('razorpay.callback');

Route::get('/newsletter-confirm', [NewsletterSubscriptionController::class, 'confirm'])->name('newsletter-confirm');

// Public set-locale endpoint for central auth pages (no authentication required)
Route::post('api/set-locale-public', [App\Http\Controllers\LanguageController::class, 'setLocale'])->name('set.locale.public');

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

    // SPA Routes (exclude api, storage, and build directories)
    Route::get('/{path}', CentralAppController::class)->where('path', '^(?!.*(?:api|storage|build)).*$');
});

// Route to serve temporary HTML files for PDF generation
Route::get('/storage/app/temp/{filename}', function ($filename) {
    $filePath = storage_path('app/temp/' . $filename);
    
    if (file_exists($filePath)) {
        return response()->file($filePath, [
            'Content-Type' => 'text/html; charset=utf-8'
        ]);
    }
    
    return response('File not found', 404);
});
