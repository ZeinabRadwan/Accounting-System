<?php

namespace App\Http\Controllers\Traits;

use App\Services\TranslationService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\Model;

trait HasTranslationHandling
{
    protected TranslationService $translationService;

    public function __construct(TranslationService $translationService)
    {
        $this->translationService = $translationService;
    }

    /**
     * Get translations for a model
     */
    public function getTranslations(Model $model): JsonResponse
    {
        $translations = $this->translationService->getModelTranslations($model);
        $missingTranslations = $this->translationService->getMissingTranslations($model);
        $completeness = $this->translationService->getTranslationCompleteness($model);

        return response()->json([
            'translations' => $translations,
            'missing_translations' => $missingTranslations,
            'completeness' => $completeness,
            'supported_locales' => $this->translationService->getSupportedLocales(),
        ]);
    }

    /**
     * Create or update translation for a model
     */
    public function createOrUpdateTranslation(Request $request, Model $model): JsonResponse
    {
        $request->validate([
            'locale' => 'required|string|max:5',
            'name' => 'nullable|string|max:255',
            'job' => 'nullable|string|max:255',
            'job_place' => 'nullable|string|max:255',
        ]);

        $locale = $request->input('locale');
        $data = $request->only(['name', 'description']);

        $success = $this->translationService->createOrUpdateTranslation($model, $locale, $data);

        if ($success) {
            return response()->json([
                'message' => 'Translation updated successfully',
                'translation' => $this->translationService->getModelTranslations($model)[$locale] ?? null,
            ]);
        }

        return response()->json([
            'message' => 'Failed to update translation',
        ], 500);
    }

    /**
     * Delete translation for a model
     */
    public function deleteTranslation(Request $request, Model $model): JsonResponse
    {
        $request->validate([
            'locale' => 'required|string|max:5',
        ]);

        $locale = $request->input('locale');
        $success = $this->translationService->deleteTranslation($model, $locale);

        if ($success) {
            return response()->json([
                'message' => 'Translation deleted successfully',
            ]);
        }

        return response()->json([
            'message' => 'Failed to delete translation',
        ], 500);
    }

    /**
     * Bulk create translations for a model
     */
    public function bulkCreateTranslations(Request $request, Model $model): JsonResponse
    {
        $request->validate([
            'translations' => 'required|array',
            'translations.*.locale' => 'required|string|max:5',
            'translations.*.name' => 'nullable|string|max:255',
            'translations.*.job' => 'nullable|string|max:255',
            'translations.*.job_place' => 'nullable|string|max:255',
        ]);

        $translations = [];
        foreach ($request->input('translations') as $translation) {
            $translations[$translation['locale']] = [
                'name' => $translation['name'] ?? null,
                'description' => $translation['description'] ?? null,
            ];
        }

        $success = $this->translationService->bulkCreateTranslations($model, $translations);

        if ($success) {
            return response()->json([
                'message' => 'Translations created successfully',
                'translations' => $this->translationService->getModelTranslations($model),
            ]);
        }

        return response()->json([
            'message' => 'Failed to create translations',
        ], 500);
    }

    /**
     * Get supported locales
     */
    public function getSupportedLocales(): JsonResponse
    {
        $locales = [];
        foreach ($this->translationService->getSupportedLocales() as $locale) {
            $locales[$locale] = [
                'code' => $locale,
                'name' => $this->translationService->getLocaleName($locale),
                'native_name' => $this->translationService->getNativeLocaleName($locale),
                'flag' => $this->translationService->getLocaleFlag($locale),
                'rtl' => $this->translationService->isRTL($locale),
            ];
        }

        return response()->json([
            'locales' => $locales,
            'current_locale' => $this->translationService->getCurrentLocale(),
        ]);
    }

    /**
     * Get translation statistics for a model
     */
    public function getTranslationStats(Model $model): JsonResponse
    {
        $translations = $this->translationService->getModelTranslations($model);
        $missingTranslations = $this->translationService->getMissingTranslations($model);
        $completeness = $this->translationService->getTranslationCompleteness($model);

        $stats = [
            'total_supported_locales' => count($this->translationService->getSupportedLocales()),
            'translated_locales' => count($translations),
            'missing_locales' => count($missingTranslations),
            'completeness_percentage' => round($completeness, 2),
            'missing_locales_list' => $missingTranslations,
        ];

        return response()->json($stats);
    }
}
