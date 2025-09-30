<?php

namespace App\Services;

use App\Models\Translation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;

class TranslationService
{
    /**
     * Get all supported locales
     */
    public function getSupportedLocales()
    {
        return array_keys(config('app.locales', []));
    }

    /**
     * Get current locale
     */
    public function getCurrentLocale()
    {
        return App::getLocale();
    }

    /**
     * Get fallback locale
     */
    public function getFallbackLocale()
    {
        return config('app.fallback_locale', 'en');
    }

    /**
     * Get translation for a model field
     */
    public function getTranslation(Model $model, $field, $locale = null)
    {
        $locale = $locale ?: $this->getCurrentLocale();
        
        $cacheKey = "translation.{$model->getMorphClass()}.{$model->id}.{$field}.{$locale}";

        try {
            return Cache::remember($cacheKey, 3600, function () use ($model, $field, $locale) {
                return $model->getTranslation($field, $locale);
            });
        } catch (\Throwable $e) {
            return $model->getTranslation($field, $locale);
        }
    }

    /**
     * Get all translations for a model field
     */
    public function getTranslations(Model $model, $field)
    {
        $cacheKey = "translations.{$model->getMorphClass()}.{$model->id}.{$field}";
        
        try {
            return Cache::remember($cacheKey, 3600, function () use ($model, $field) {
                return $model->getTranslations($field);
            });
        } catch (\Throwable $e) {
            return $model->getTranslations($field);
        }
    }

    /**
     * Set translation for a model field
     */
    public function setTranslation(Model $model, $field, $locale, $value)
    {
        $result = $model->setTranslation($field, $locale, $value);
        
        // Clear cache
        $this->clearTranslationCache($model, $field, $locale);
        
        return $result;
    }

    /**
     * Set multiple translations for a model field
     */
    public function setTranslations(Model $model, $field, array $translations)
    {
        $result = $model->setTranslations($field, $translations);
        
        // Clear cache
        $this->clearTranslationCache($model, $field);
        
        return $result;
    }

    /**
     * Get translated field with fallback
     */
    public function getTranslatedField(Model $model, $field, $locale = null)
    {
        $locale = $locale ?: $this->getCurrentLocale();
        
        $cacheKey = "translated_field.{$model->getMorphClass()}.{$model->id}.{$field}.{$locale}";
        
        try {
            return Cache::remember($cacheKey, 3600, function () use ($model, $field, $locale) {
                return $model->getTranslatedField($field, $locale);
            });
        } catch (\Throwable $e) {
            return $model->getTranslatedField($field, $locale);
        }
    }

    /**
     * Get all translations for a model
     */
    public function getAllTranslations(Model $model)
    {
        $cacheKey = "all_translations.{$model->getMorphClass()}.{$model->id}";
        
        try {
            return Cache::remember($cacheKey, 3600, function () use ($model) {
                return $model->getAllTranslations();
            });
        } catch (\Throwable $e) {
            return $model->getAllTranslations();
        }
    }

    /**
     * Clear translation cache
     */
    public function clearTranslationCache(Model $model, $field = null, $locale = null)
    {
        $patterns = [
            "translation.{$model->getMorphClass()}.{$model->id}.{$field}.*",
            "translations.{$model->getMorphClass()}.{$model->id}.{$field}",
            "translated_field.{$model->getMorphClass()}.{$model->id}.{$field}.*",
            "all_translations.{$model->getMorphClass()}.{$model->id}",
        ];

        if ($field && $locale) {
            $patterns = [
                "translation.{$model->getMorphClass()}.{$model->id}.{$field}.{$locale}",
                "translated_field.{$model->getMorphClass()}.{$model->id}.{$field}.{$locale}",
            ];
        }

        foreach ($patterns as $pattern) {
            try {
                Cache::forget($pattern);
            } catch (\Throwable $e) {
                // Ignore cache driver limitations
            }
        }
    }

    /**
     * Bulk update translations for multiple models
     */
    public function bulkUpdateTranslations(array $updates)
    {
        $results = [];
        
        foreach ($updates as $update) {
            $model = $update['model'];
            $field = $update['field'];
            $translations = $update['translations'];
            
            $results[] = $this->setTranslations($model, $field, $translations);
        }
        
        return $results;
    }

    /**
     * Get missing translations for a model
     */
    public function getMissingTranslations(Model $model, $field)
    {
        $supportedLocales = $this->getSupportedLocales();
        $existingTranslations = $this->getTranslations($model, $field);
        $existingLocales = array_keys($existingTranslations);
        
        return array_diff($supportedLocales, $existingLocales);
    }

    /**
     * Get translation statistics for a model
     */
    public function getTranslationStats(Model $model, $field = null)
    {
        $supportedLocales = $this->getSupportedLocales();
        $stats = [];
        
        if ($field) {
            $translations = $this->getTranslations($model, $field);
            $stats[$field] = [
                'total_locales' => count($supportedLocales),
                'translated_locales' => count($translations),
                'missing_locales' => count($this->getMissingTranslations($model, $field)),
                'completion_percentage' => round((count($translations) / count($supportedLocales)) * 100, 2),
            ];
        } else {
            $translatableFields = $model->translatable ?? [];
            foreach ($translatableFields as $field) {
                $translations = $this->getTranslations($model, $field);
                $stats[$field] = [
                    'total_locales' => count($supportedLocales),
                    'translated_locales' => count($translations),
                    'missing_locales' => count($this->getMissingTranslations($model, $field)),
                    'completion_percentage' => round((count($translations) / count($supportedLocales)) * 100, 2),
                ];
            }
        }
        
        return $stats;
    }

    /**
     * Export translations for a model
     */
    public function exportTranslations(Model $model, $format = 'array')
    {
        $translations = $this->getAllTranslations($model);
        
        switch ($format) {
            case 'json':
                return json_encode($translations, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
            case 'csv':
                return $this->exportToCsv($translations);
            default:
                return $translations;
        }
    }

    /**
     * Import translations for a model
     */
    public function importTranslations(Model $model, $translations)
    {
        foreach ($translations as $field => $fieldTranslations) {
            if (in_array($field, $model->translatable ?? [])) {
                $this->setTranslations($model, $field, $fieldTranslations);
            }
        }
        
        return true;
    }

    /**
     * Export translations to CSV format
     */
    private function exportToCsv($translations)
    {
        $csv = "Field,Locale,Value\n";
        
        foreach ($translations as $field => $fieldTranslations) {
            foreach ($fieldTranslations as $locale => $value) {
                $csv .= "\"{$field}\",\"{$locale}\",\"" . str_replace('"', '""', $value) . "\"\n";
            }
        }
        
        return $csv;
    }
}
