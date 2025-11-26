<?php

use App\Http\Controllers\API\ActivityLogController;
use App\Http\Controllers\API\ErrorLogController;
use App\Http\Controllers\API\PermissionController;
use App\Http\Controllers\API\RoleController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\Central\ApplicationManagementController;
use App\Http\Controllers\Central\CentralGeneralController;
use App\Http\Controllers\Central\CentralSettingImageController;
use App\Http\Controllers\Central\CentralSubscriptionInvoiceController;
use App\Http\Controllers\Central\CurrencyController;
use App\Http\Controllers\Central\DashboardController;
use App\Http\Controllers\Central\DomainController;
use App\Http\Controllers\Central\DomainRequestController;
use App\Http\Controllers\Central\FeatureController;
use App\Http\Controllers\Central\NewsletterController;
use App\Http\Controllers\Central\PageController;
use App\Http\Controllers\Central\PaymentController;
use App\Http\Controllers\Central\PaymentMethodController;
use App\Http\Controllers\Central\PlanController;
use App\Http\Controllers\Central\SendNotificationController;
use App\Http\Controllers\Central\SubscriptionController;
use App\Http\Controllers\Central\SubscriptionRequestController;
use App\Http\Controllers\Central\TenantController;
use App\Http\Controllers\NewsletterSubscriptionController;
use App\Http\Controllers\ServerController;
use App\Http\Controllers\TenantDomainFindController;
use App\Http\Controllers\TenantRegisterController;
use App\Http\Controllers\VersionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

/*
 * API Routes for central part of the application.
 */

Route::post('/newsletter-send-confirmation', [NewsletterSubscriptionController::class, 'sendConfirmation'])
    ->name('newsletter-send-confirmation')
    ->middleware('throttle:10,1');
Route::get('/newsletter-unsubscribe/{email}', [NewsletterSubscriptionController::class, 'unsubscribe'])
    ->name('newsletter-unsubscribe');

Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail']);
Route::post('password/reset', [ResetPasswordController::class, 'reset']);

Route::post('email/resend', [VerificationController::class, 'resend']);

// Error logging endpoint
Route::post('/log-frontend-error', [ErrorLogController::class, 'logFrontendError']);

Route::get('general-settings', [CentralGeneralController::class, 'getGeneralSettings']);

// Tenant Register and Find Domain and Login API
Route::post('/register', [TenantRegisterController::class, 'store']);
Route::post('/check-domain', [TenantRegisterController::class, 'checkDomain'])->name('central.check-domain');
Route::post('/find-domain', [TenantDomainFindController::class, 'findDomain'])->name('central.find-domain');
Route::post('/tenant-login', [TenantDomainFindController::class, 'tenantLogin'])->name('central.tenant-login');
Route::post('/login', [LoginController::class, 'login'])->name('central.login');

// return dynamic pages content
Route::get('pages-by-slug/{slug}', [PageController::class, 'showBySlug']);

Route::group(['middleware' => 'auth:sanctum', 'as' => 'central.'], function () {
    // update profile
    Route::post('/update-profile', [DashboardController::class, 'updateProfile']);

    Route::get('/impersonate/{tenant}', [TenantController::class, 'impersonate'])->name('tenant.impersonate');
    Route::get('user', [UserController::class, 'current']);
    Route::post('user', [UserController::class, 'store']);
    Route::get('user/{slug}', [UserController::class, 'show']);
    Route::patch('user/{slug}', [UserController::class, 'update']);
    Route::get('users', [UserController::class, 'index']);
    Route::get('user/search', [UserController::class, 'search']);
    Route::get('get-role', [UserController::class, 'roles']);
    Route::delete('user/{slug}', [UserController::class, 'destroy']);

    Route::post('logout', [LoginController::class, 'logout']);

    // general settings
    Route::post('update-settings', [CentralGeneralController::class, 'updateGeneralSettings']);

    // currency settings
    Route::get('/all-currencies', [CurrencyController::class, 'allCurrencies']);
    Route::apiResource('currencies', CurrencyController::class);

    // Email routes
    Route::get('mail-configuration', [CentralGeneralController::class, 'getMailConfiguration']);
    Route::post('update-mail-configuration', [CentralGeneralController::class, 'updateMailConfiguration']);
    Route::get('/send-test-connection-email', [CentralGeneralController::class, 'sendTestConnectionEmail']);

    // SMS routes
    Route::get('sms-configuration', [CentralGeneralController::class, 'getSMSConfiguration']);
    Route::post('update-sms-configuration', [CentralGeneralController::class, 'updateSMSConfiguration']);

    // payment methods
    Route::apiResource('payment-methods', PaymentMethodController::class)->only('index', 'store');

    // Plan management routes
    Route::get('plans/search', [PlanController::class, 'search']);
    Route::apiResource('plans', PlanController::class);

    // Plan Feature management routes
    Route::get('features/search', [FeatureController::class, 'search']);
    Route::apiResource('features', FeatureController::class);

    // Page management routes
    Route::get('pages/search', [PageController::class, 'search']);
    Route::apiResource('pages', PageController::class);

    // Tenant management routes
    Route::get('tenants/search', [TenantController::class, 'search']);
    Route::get('tenants/archived', [TenantController::class, 'archived']);
    Route::delete('tenants/archived/delete-all', [TenantController::class, 'permanentDeleteAllArchived']);
    Route::post('tenants/{tenant}/ban', [TenantController::class, 'ban']);
    Route::post('tenants/{tenant}/restore', [TenantController::class, 'restore']);
    Route::delete('tenants/{tenant}/permanent-delete', [TenantController::class, 'permanentDelete']);
    Route::apiResource('tenants', TenantController::class);
    Route::post('send-notification/{tenant}', SendNotificationController::class);
    Route::post('payments/download', [PaymentController::class, 'download']);

    // newsletter
    Route::post('/newsletters', [NewsletterController::class, 'send']);
    Route::get('/newsletters/search', [NewsletterController::class, 'search']);
    Route::apiResource('/newsletters', NewsletterController::class)->only(['index', 'destroy']);

    // frontend panel settings
    Route::group(['prefix' => 'settings'], function () {
        Route::post('/update-show-hide-section', [CentralGeneralController::class, 'updateShowHideSection']);
        Route::get('/hero-settings', [CentralGeneralController::class, 'getHeroSettings']);
        Route::patch('/hero-settings', [CentralGeneralController::class, 'updateHeroSettings']);

        Route::get('/about-us-settings', [CentralGeneralController::class, 'getAboutUsSettings']);
        Route::patch('/about-us-settings', [CentralGeneralController::class, 'updateAboutUsSettings']);

        Route::get('/why-us-settings', [CentralGeneralController::class, 'getWhyUsSettings']);
        Route::patch('/why-us-settings', [CentralGeneralController::class, 'updateWhyUsSettings']);

        Route::get('/business-start-settings', [CentralGeneralController::class, 'getBusinessStartSettings']);
        Route::patch('/business-start-settings', [CentralGeneralController::class, 'updateBusinessStartSettings']);

        Route::get('/features-settings', [CentralGeneralController::class, 'getFeaturesSettings']);
        Route::patch('/features-settings', [CentralGeneralController::class, 'updateFeaturesSettings']);

        Route::get('/all-features-settings', [
            CentralGeneralController::class,
            'getAllFeaturesSettings',
        ]);

        Route::get('/get-started-settings', [
            CentralGeneralController::class,
            'getGetStartedSettings',
        ]);

        Route::patch('/all-features-settings', [
            CentralGeneralController::class,
            'updateAllFeaturesSettings',
        ]);

        Route::patch('/get-started-settings', [
            CentralGeneralController::class,
            'updateGetStartedSettings',
        ]);

        Route::get('/software-overview-settings', [
            CentralGeneralController::class,
            'getSoftwareOverviewSettings',
        ]);
        Route::patch('/software-overview-settings', [
            CentralGeneralController::class,
            'updateSoftwareOverviewSettings',
        ]);

        Route::get('/pricing-plan-settings', [
            CentralGeneralController::class,
            'getPricingPlanSettings',
        ]);
        Route::patch('/pricing-plan-settings', [
            CentralGeneralController::class,
            'updatePricingPlanSettings',
        ]);

        Route::get('/newsletter-settings', [
            CentralGeneralController::class,
            'getNewsletterSettings',
        ]);
        Route::patch('/newsletter-settings', [
            CentralGeneralController::class,
            'updateNewsletterSettings',
        ]);

        Route::get('/testimonial-settings', [
            CentralGeneralController::class,
            'getTestimonialSettings',
        ]);
        Route::patch('/testimonial-settings', [
            CentralGeneralController::class,
            'updateTestimonialSettings',
        ]);

        Route::get('/custom-html-settings', [
            CentralGeneralController::class,
            'getCustomHtmlSettings',
        ]);
        Route::patch('/custom-html-settings', [
            CentralGeneralController::class,
            'updateCustomHtmlSettings',
        ]);
    });

    // setting images
    Route::get('/setting-images/search', [CentralSettingImageController::class, 'search']);
    Route::apiResource('/setting-images', CentralSettingImageController::class);

    // dashboard
    Route::get('/dashboard-summary/{summaryType}', [DashboardController::class, 'index']);
    Route::get('/dashboard/top-plans', [DashboardController::class, 'topPlans']);
    Route::get('/dashboard/transaction-status', [DashboardController::class, 'transactionStatus']);

    // client means tenants here
    Route::get('/dashboard/top-clients', [DashboardController::class, 'topClients']);

    // Permission routes
    Route::get('/permissions/search', [PermissionController::class, 'search']);
    Route::get('/all-permissions', [PermissionController::class, 'allPermissions']);
    Route::apiResource('permissions', PermissionController::class);

    // Role routes
    Route::get('/roles/search', [RoleController::class, 'search']);
    Route::get('/all-roles', [RoleController::class, 'allRoles']);
    Route::apiResource('roles', RoleController::class);

    // Billing History Routes
    Route::apiResource('payments', PaymentController::class)->only(['index', 'download']);

    // invoices routes
    Route::post('subscription-invoices', [CentralSubscriptionInvoiceController::class, 'store']);

    // domain management routes
    // Route::get('domains/search', [DomainController::class, 'search']);
    Route::apiResource('domains', DomainController::class)->only(['index', 'destroy']);
    Route::apiResource('domain-requests', DomainRequestController::class)->only(['index', 'update', 'destroy']);

    // manual subscription
    Route::apiResource('subscription-requests', SubscriptionRequestController::class)->only(['index', 'update', 'destroy']);

    Route::apiResource('subscriptions', SubscriptionController::class)->only(['index', 'update']);

    Route::get('activity-log-specific', [ActivityLogController::class, 'specific']);
    Route::get('/activity-log', [ActivityLogController::class, 'index']);
    Route::get('/activity-log/search', [ActivityLogController::class, 'search']);

    Route::get('server', [ServerController::class, 'runCommand']);

    Route::get('version', VersionController::class);

    // database backup
    Route::post('/backup', [DashboardController::class, 'databaseBackup']);

    // application update
    Route::get('/get-updated-version', [ApplicationManagementController::class, 'getUpdateVersion']);
    Route::post('/update-application', [ApplicationManagementController::class, 'updateApplication']);

    // Test endpoint for client creation (for testing environment)
    Route::post('/test/clients', function (Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'phoneNumber' => 'required|string|max:20',
                'email' => 'nullable|email|max:255',
                'companyName' => 'nullable|string|max:255',
                'taxRegistrationNumber' => 'nullable|string|max:255',
                'address' => 'nullable|string|max:500',
                'type' => 'required|in:Company,Individual',
                'status' => 'required|boolean',
                'chartOfAccountId' => 'nullable|exists:chart_of_accounts,id',
                'isSendEmail' => 'boolean',
                'isSendSMS' => 'boolean',
            ]);

            // Custom validation rules
            $validator->after(function ($validator) use ($request) {
                // Email is required when email notification is enabled
                if ($request->isSendEmail && ! $request->email) {
                    $validator->errors()->add('email', 'Email is required when email notification is enabled.');
                }
            });

            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validation failed',
                    'errors' => $validator->errors(),
                ], 422);
            }

            // Create client
            $client = new \App\Models\Client;
            $client->name = $request->name;
            $client->client_id = \App\Models\Client::max('client_id') + 1;
            $client->slug = \Illuminate\Support\Str::slug($request->name);
            $client->email = $request->email;
            $client->phone = $request->phoneNumber;
            $client->company_name = $request->companyName;
            $client->tax_registration_number = $request->taxRegistrationNumber;
            $client->address = $request->address;
            $client->type = $request->type;
            $client->status = $request->status;

            // Auto-assign chart of account if not provided
            if ($request->chartOfAccountId) {
                $client->chart_of_account_id = $request->chartOfAccountId;
            } else {
                // Find the first active accounts receivable account
                $accountsReceivable = \App\Models\ChartOfAccount::where('name', 'Accounts Receivable')
                    ->where('is_active', true)
                    ->first();
                if ($accountsReceivable) {
                    $client->chart_of_account_id = $accountsReceivable->id;
                }
            }

            $client->save();

            return response()->json([
                'message' => 'Client created successfully',
                'data' => [
                    'id' => $client->id,
                    'name' => $client->name,
                    'clientID' => $client->client_id,
                    'slug' => $client->slug,
                    'email' => $client->email,
                    'phoneNumber' => $client->phone,
                    'companyName' => $client->company_name,
                    'taxRegistrationNumber' => $client->tax_registration_number,
                    'address' => $client->address,
                    'type' => $client->type,
                    'status' => $client->status,
                    'image' => $client->image_path,
                    'chart_of_account_id' => $client->chart_of_account_id,
                    'chartOfAccount' => $client->chart_of_account_id ? \App\Models\ChartOfAccount::find($client->chart_of_account_id) : null,
                ],
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error creating client',
                'error' => $e->getMessage(),
            ], 500);
        }
    });
});
