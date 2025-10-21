<?php

namespace App\Providers;

use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\ServiceProvider;

class JsonTranslationServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Let Laravel load JSON translations from the Vue i18n folder
        // so __('...') picks them up automatically for each locale.
        $this->loadJsonTranslationsFrom(resource_path('js/lang'));
    }
}


