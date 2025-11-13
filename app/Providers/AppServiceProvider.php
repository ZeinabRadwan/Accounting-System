<?php

namespace App\Providers;

use App\Models\Currency;
use App\Models\GeneralSetting;
use App\Models\Permission;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Laravel\Dusk\DuskServiceProvider;
use Stancl\Tenancy\Events\TenancyBootstrapped;

class AppServiceProvider extends ServiceProvider
{
    private function generalSettingAndPermission()
    {
        try {
            // if table is not empty then get setting items
            if (DB::connection()->getDatabaseName()) {
                if (Schema::hasTable('general_settings')) {
                    $allSettings = GeneralSetting::get();
                    // define global variables
                    if (count($allSettings) > 0) {
                        config(['config.clientPrefix' => $allSettings->where('key', 'client_prefix')->first()?->value]);
                        config(['config.employeePrefix' => $allSettings->where('key', 'employee_prefix')->first()?->value]);
                        config(['config.supplierPrefix' => $allSettings->where('key', 'supplier_prefix')->first()?->value]);
                        config(['config.expCatPrefix' => $allSettings->where('key', 'exp_cat_prefix')->first()?->value]);
                        config(['config.expSubCatPrefix' => $allSettings->where('key', 'exp_sub_cat_prefix')->first()?->value]);
                        config(['config.proCatPrefix' => $allSettings->where('key', 'product_cat_prefix')->first()?->value]);
                        config(['config.proSubCatPrefix' => $allSettings->where('key', 'product_sub_cat_prefix')->first()?->value]);
                        config(['config.productPrefix' => $allSettings->where('key', 'product_prefix')->first()?->value]);
                        config(['config.purchasePrefix' => $allSettings->where('key', 'pur_prefix')->first()?->value]);
                        config(['config.purchaseReturnPrefix' => $allSettings->where('key', 'pur_return_prefix')->first()?->value]);
                        config(['config.quotationPrefix' => $allSettings->where('key', 'quotation_prefix')->first()?->value]);
                        config(['config.invoicePrefix' => $allSettings->where('key', 'invoice_prefix')->first()?->value]);
                        config(['config.invoiceReturnPrefix' => $allSettings->where('key', 'invoice_return_prefix')->first()?->value]);
                        config(['config.adjustmentPrefix' => $allSettings->where('key', 'adjustment_prefix')->first()?->value]);
                        config(['config.favicon' => $allSettings->where('key', 'favicon')->first()?->value]);
                        config(['config.companyName' => $allSettings->where('key', 'company_name')->first()?->value]);
                        config(['config.companyPhoneNumber' => $allSettings->where('key', 'phone_number')->first()?->value]);
                        config(['config.companyEmail' => $allSettings->where('key', 'email_address')->first()?->value]);
                        config(['config.logo' => $allSettings->where('key', 'logo')->first()?->value ?: 'white_logo.png']);
                        config(['config.logoBlack' => $allSettings->where('key', 'logo_black')->first()?->value ?: 'black_logo.png']);
                        config(['config.address' => $allSettings->where('key', 'address')->first()?->value]);
                    }
                }

                if (Schema::hasTable('currencies')) {
                    $currency = Currency::where('id', 1)->first();
                    config(['config.currencySymbol' => $currency?->symbol]);
                    config(['config.currencyPosition' => $currency?->position]);
                }
            }
            // check permission for tenant
            if (DB::connection()->getDatabaseName()) {
                if (Schema::hasTable('permissions')) {
                    $permissions = Permission::all();
                    if (! empty($permissions)) {
                        foreach ($permissions as $permission) {
                            Gate::define($permission->slug, function ($user) use ($permission) {
                                return $user->hasPermissionTo($permission->slug);
                            });
                        }
                    }
                }
            }
        } catch (\Exception $e) {
            // Database connection failed - this is expected if MySQL is not running
            // Silently fail and allow the application to continue
            // The database will be checked again when tenant is bootstrapped
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // define default string length
        // Schema::defaultStringLength(191);

        // Print template setup is handled directly in TenantService

        $this->generalSettingAndPermission();

        // Override @vite directive to use global_asset for build files in tenant contexts
        if (config('tenancy.asset_helper_tenancy')) {
            Blade::directive('vite', function ($expression) {
                return "<?php 
                    \$vite = \\Illuminate\\Support\\Facades\\Vite::useCspNonce(app('csp-nonce'));
                    \$html = \$vite->toHtml($expression, false);
                    
                    // Replace tenant asset URLs with global asset URLs for build files
                    // Handle both absolute URLs (with domain) and relative URLs
                    // Match href or src attributes containing /tenancy/assets/build/
                    \$html = preg_replace_callback(
                        '/(href|src)=[\"\\']([^\"\\']*\\/tenancy\\/assets\\/build\\/([^\"\\']*))[\"\\']/i',
                        function (\$matches) {
                            \$attr = \$matches[1]; // href or src
                            \$fullUrl = \$matches[2]; // full URL with /tenancy/assets/build/
                            \$filePath = \$matches[3]; // just the file path after /build/
                            
                            // Build the correct global asset path
                            \$newPath = 'build/'.$filePath;
                            // Use global_asset to generate the correct global URL
                            return \$attr.'=\"'.global_asset(\$newPath).'\"';
                        },
                        \$html
                    );
                    
                    echo \$html;
                ?>";
            });
        }

        /*
         * tenant related configurations start
         */

        // after tenant bootstrapped do other checking stuff
        Event::listen(TenancyBootstrapped::class, function (TenancyBootstrapped $event) {
            $this->generalSettingAndPermission();
        });

        /*
         * tenant related configurations end
         */

        // Model::preventLazyLoading(
        //     ! app()->isProduction()
        // );

        Model::preventSilentlyDiscardingAttributes(
            ! app()->isProduction()
        );

        /*
         * Custom Macros
         */
        Builder::macro('toRawSql', function () {
            return vsprintf(str_replace(['?'], ['\'%s\''], $this->toSql()), $this->getBindings());
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->environment('local', 'testing') && class_exists(DuskServiceProvider::class)) {
            $this->app->register(DuskServiceProvider::class);
        } else {
            $this->app->bind('path.public', function () {
                return realpath(base_path().'/../../public_html');
            });
        }
    }
}
