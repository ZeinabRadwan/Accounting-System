<?php

namespace App\Http\Controllers\Example;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Traits\HasTranslationHandling;
use App\Models\App\Client;
use App\Models\App\Vendor;
use App\Models\App\Currency;
use App\Models\App\Bank;
use App\Models\App\Nationality;
use App\Models\App\IdType;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TranslationController extends Controller
{
    use HasTranslationHandling;

    /**
     * Get translations for a client
     */
    public function getClientTranslations(Client $client): JsonResponse
    {
        return $this->getTranslations($client);
    }

    /**
     * Create or update client translation
     */
    public function createOrUpdateClientTranslation(Request $request, Client $client): JsonResponse
    {
        return $this->createOrUpdateTranslation($request, $client);
    }

    /**
     * Delete client translation
     */
    public function deleteClientTranslation(Request $request, Client $client): JsonResponse
    {
        return $this->deleteTranslation($request, $client);
    }

    /**
     * Bulk create client translations
     */
    public function bulkCreateClientTranslations(Request $request, Client $client): JsonResponse
    {
        return $this->bulkCreateTranslations($request, $client);
    }

    /**
     * Get client translation statistics
     */
    public function getClientTranslationStats(Client $client): JsonResponse
    {
        return $this->getTranslationStats($client);
    }

    /**
     * Get translations for a vendor
     */
    public function getVendorTranslations(Vendor $vendor): JsonResponse
    {
        return $this->getTranslations($vendor);
    }

    /**
     * Create or update vendor translation
     */
    public function createOrUpdateVendorTranslation(Request $request, Vendor $vendor): JsonResponse
    {
        return $this->createOrUpdateTranslation($request, $vendor);
    }

    /**
     * Delete vendor translation
     */
    public function deleteVendorTranslation(Request $request, Vendor $vendor): JsonResponse
    {
        return $this->deleteTranslation($request, $vendor);
    }

    /**
     * Bulk create vendor translations
     */
    public function bulkCreateVendorTranslations(Request $request, Vendor $vendor): JsonResponse
    {
        return $this->bulkCreateTranslations($request, $vendor);
    }

    /**
     * Get vendor translation statistics
     */
    public function getVendorTranslationStats(Vendor $vendor): JsonResponse
    {
        return $this->getTranslationStats($vendor);
    }

    /**
     * Get translations for a currency
     */
    public function getCurrencyTranslations(Currency $currency): JsonResponse
    {
        return $this->getTranslations($currency);
    }

    /**
     * Create or update currency translation
     */
    public function createOrUpdateCurrencyTranslation(Request $request, Currency $currency): JsonResponse
    {
        return $this->createOrUpdateTranslation($request, $currency);
    }

    /**
     * Delete currency translation
     */
    public function deleteCurrencyTranslation(Request $request, Currency $currency): JsonResponse
    {
        return $this->deleteTranslation($request, $currency);
    }

    /**
     * Bulk create currency translations
     */
    public function bulkCreateCurrencyTranslations(Request $request, Currency $currency): JsonResponse
    {
        return $this->bulkCreateTranslations($request, $currency);
    }

    /**
     * Get currency translation statistics
     */
    public function getCurrencyTranslationStats(Currency $currency): JsonResponse
    {
        return $this->getTranslationStats($currency);
    }

    /**
     * Get translations for a bank
     */
    public function getBankTranslations(Bank $bank): JsonResponse
    {
        return $this->getTranslations($bank);
    }

    /**
     * Create or update bank translation
     */
    public function createOrUpdateBankTranslation(Request $request, Bank $bank): JsonResponse
    {
        return $this->createOrUpdateTranslation($request, $bank);
    }

    /**
     * Delete bank translation
     */
    public function deleteBankTranslation(Request $request, Bank $bank): JsonResponse
    {
        return $this->deleteTranslation($request, $bank);
    }

    /**
     * Bulk create bank translations
     */
    public function bulkCreateBankTranslations(Request $request, Bank $bank): JsonResponse
    {
        return $this->bulkCreateTranslations($request, $bank);
    }

    /**
     * Get bank translation statistics
     */
    public function getBankTranslationStats(Bank $bank): JsonResponse
    {
        return $this->getTranslationStats($bank);
    }

    /**
     * Get translations for a nationality
     */
    public function getNationalityTranslations(Nationality $nationality): JsonResponse
    {
        return $this->getTranslations($nationality);
    }

    /**
     * Create or update nationality translation
     */
    public function createOrUpdateNationalityTranslation(Request $request, Nationality $nationality): JsonResponse
    {
        return $this->createOrUpdateTranslation($request, $nationality);
    }

    /**
     * Delete nationality translation
     */
    public function deleteNationalityTranslation(Request $request, Nationality $nationality): JsonResponse
    {
        return $this->deleteTranslation($request, $nationality);
    }

    /**
     * Bulk create nationality translations
     */
    public function bulkCreateNationalityTranslations(Request $request, Nationality $nationality): JsonResponse
    {
        return $this->bulkCreateTranslations($request, $nationality);
    }

    /**
     * Get nationality translation statistics
     */
    public function getNationalityTranslationStats(Nationality $nationality): JsonResponse
    {
        return $this->getTranslationStats($nationality);
    }

    /**
     * Get translations for an ID type
     */
    public function getIdTypeTranslations(IdType $idType): JsonResponse
    {
        return $this->getTranslations($idType);
    }

    /**
     * Create or update ID type translation
     */
    public function createOrUpdateIdTypeTranslation(Request $request, IdType $idType): JsonResponse
    {
        return $this->createOrUpdateTranslation($request, $idType);
    }

    /**
     * Delete ID type translation
     */
    public function deleteIdTypeTranslation(Request $request, IdType $idType): JsonResponse
    {
        return $this->deleteTranslation($request, $idType);
    }

    /**
     * Bulk create ID type translations
     */
    public function bulkCreateIdTypeTranslations(Request $request, IdType $idType): JsonResponse
    {
        return $this->bulkCreateTranslations($request, $idType);
    }

    /**
     * Get ID type translation statistics
     */
    public function getIdTypeTranslationStats(IdType $idType): JsonResponse
    {
        return $this->getTranslationStats($idType);
    }

    /**
     * Get all supported locales
     */
    public function getSupportedLocales(): JsonResponse
    {
        return $this->getSupportedLocales();
    }

    /**
     * Get translation overview for all entities
     */
    public function getTranslationOverview(): JsonResponse
    {
        $overview = [
            'clients' => [
                'total' => Client::count(),
                'with_translations' => Client::whereHas('translations')->count(),
                'completeness' => $this->getAverageTranslationCompleteness(Client::class),
            ],
            'vendors' => [
                'total' => Vendor::count(),
                'with_translations' => Vendor::whereHas('translations')->count(),
                'completeness' => $this->getAverageTranslationCompleteness(Vendor::class),
            ],
            'currencies' => [
                'total' => Currency::count(),
                'with_translations' => Currency::whereHas('translations')->count(),
                'completeness' => $this->getAverageTranslationCompleteness(Currency::class),
            ],
            'banks' => [
                'total' => Bank::count(),
                'with_translations' => Bank::whereHas('translations')->count(),
                'completeness' => $this->getAverageTranslationCompleteness(Bank::class),
            ],
            'nationalities' => [
                'total' => Nationality::count(),
                'with_translations' => Nationality::whereHas('translations')->count(),
                'completeness' => $this->getAverageTranslationCompleteness(Nationality::class),
            ],
            'id_types' => [
                'total' => IdType::count(),
                'with_translations' => IdType::whereHas('translations')->count(),
                'completeness' => $this->getAverageTranslationCompleteness(IdType::class),
            ],
        ];

        return response()->json($overview);
    }

    /**
     * Get average translation completeness for a model class
     */
    protected function getAverageTranslationCompleteness(string $modelClass): float
    {
        $models = $modelClass::all();
        if ($models->isEmpty()) {
            return 0.0;
        }

        $totalCompleteness = 0;
        foreach ($models as $model) {
            $totalCompleteness += $this->translationService->getTranslationCompleteness($model);
        }

        return round($totalCompleteness / $models->count(), 2);
    }
}
