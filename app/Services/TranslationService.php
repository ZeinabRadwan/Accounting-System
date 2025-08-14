<?php

namespace App\Services;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class TranslationService
{
    /**
     * Get the current locale
     */
    public function getCurrentLocale(): string
    {
        return App::getLocale();
    }

    /**
     * Get all supported locales
     */
    public function getSupportedLocales(): array
    {
        $languages = config('language.languages', []);
        return array_column($languages, 'code');
    }

    /**
     * Get locale information
     */
    public function getLocaleInfo(string $locale): ?array
    {
        $languages = config('language.languages', []);
        foreach ($languages as $language) {
            if ($language['code'] === $locale) {
                return $language;
            }
        }
        return null;
    }

    /**
     * Check if locale is RTL
     */
    public function isRTL(string $locale): bool
    {
        // Common RTL languages
        $rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'yi'];
        return in_array($locale, $rtlLanguages);
    }

    /**
     * Get locale name
     */
    public function getLocaleName(string $locale): string
    {
        $info = $this->getLocaleInfo($locale);
        return $info['name'] ?? $locale;
    }

    /**
     * Get native locale name
     */
    public function getNativeLocaleName(string $locale): string
    {
        $info = $this->getLocaleInfo($locale);
        return $info['nativeName'] ?? $locale;
    }

    /**
     * Get locale flag
     */
    public function getLocaleFlag(string $locale): string
    {
        // Simple flag mapping for common languages
        $flags = [
            'en' => '🇺🇸', 'ar' => '🇸🇦', 'fr' => '🇫🇷', 'es' => '🇪🇸', 'de' => '🇩🇪',
            'it' => '🇮🇹', 'pt' => '🇵🇹', 'ru' => '🇷🇺', 'zh' => '🇨🇳', 'ja' => '🇯🇵',
            'ko' => '🇰🇷', 'hi' => '🇮🇳', 'tr' => '🇹🇷', 'nl' => '🇳🇱', 'pl' => '🇵🇱',
            'he' => '🇮🇱', 'fa' => '🇮🇷', 'ur' => '🇵🇰', 'bn' => '🇧🇩', 'th' => '🇹🇭'
        ];
        return $flags[$locale] ?? '🌐';
    }

    /**
     * Create or update translation for a model
     */
    public function createOrUpdateTranslation(Model $model, string $locale, array $data): bool
    {
        $translationModel = $this->getTranslationModel($model);
        $foreignKey = $this->getTranslationForeignKey($model);
        
        $translation = $translationModel::updateOrCreate(
            [
                $foreignKey => $model->id,
                'locale' => $locale,
            ],
            $data
        );

        return (bool) $translation;
    }

    /**
     * Delete translation for a model
     */
    public function deleteTranslation(Model $model, string $locale): bool
    {
        $translationModel = $this->getTranslationModel($model);
        $foreignKey = $this->getTranslationForeignKey($model);
        
        return $translationModel::where([
            $foreignKey => $model->id,
            'locale' => $locale,
        ])->delete() > 0;
    }

    /**
     * Get all translations for a model
     */
    public function getModelTranslations(Model $model): array
    {
        $translationModel = $this->getTranslationModel($model);
        $foreignKey = $this->getTranslationForeignKey($model);
        
        return $translationModel::where($foreignKey, $model->id)
            ->get()
            ->keyBy('locale')
            ->toArray();
    }

    /**
     * Bulk create translations for a model
     */
    public function bulkCreateTranslations(Model $model, array $translations): bool
    {
        $translationModel = $this->getTranslationModel($model);
        $foreignKey = $this->getTranslationForeignKey($model);
        
        $data = [];
        foreach ($translations as $locale => $translationData) {
            $data[] = array_merge($translationData, [
                $foreignKey => $model->id,
                'locale' => $locale,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        return $translationModel::insert($data);
    }

    /**
     * Get translation model class
     */
    protected function getTranslationModel(Model $model): string
    {
        $modelClass = get_class($model);
        $modelName = class_basename($modelClass);
        return "App\\Models\\App\\Translations\\{$modelName}Translation";
    }

    /**
     * Get translation foreign key
     */
    protected function getTranslationForeignKey(Model $model): string
    {
        $modelClass = get_class($model);
        $modelName = class_basename($modelClass);
        return Str::snake($modelName) . '_id';
    }

    /**
     * Get missing translations for a model
     */
    public function getMissingTranslations(Model $model): array
    {
        $existingTranslations = $this->getModelTranslations($model);
        $supportedLocales = $this->getSupportedLocales();
        
        return array_diff($supportedLocales, array_keys($existingTranslations));
    }

    /**
     * Check if model has translation for locale
     */
    public function hasTranslation(Model $model, string $locale): bool
    {
        $translationModel = $this->getTranslationModel($model);
        $foreignKey = $this->getTranslationForeignKey($model);
        
        return $translationModel::where([
            $foreignKey => $model->id,
            'locale' => $locale,
        ])->exists();
    }

    /**
     * Get translation completeness percentage for a model
     */
    public function getTranslationCompleteness(Model $model): float
    {
        $existingTranslations = $this->getModelTranslations($model);
        $supportedLocales = $this->getSupportedLocales();
        
        if (empty($supportedLocales)) {
            return 0.0;
        }

        return (count($existingTranslations) / count($supportedLocales)) * 100;
    }
}
