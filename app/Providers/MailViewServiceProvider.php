<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class MailViewServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // Register the mail namespace hint for the published mail vendor views
        $this->loadViewsFrom(resource_path('views/vendor/mail'), 'mail');
    }
}
