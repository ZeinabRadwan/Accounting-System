<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ChartOfAccountTranslationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $locale = $request->get('locale', app()->getLocale());

        return [
            'id' => $this->id,
            'code' => $this->code,
            'name' => $this->getTranslatedField('name', $locale),
            'original_name' => $this->name,
            'type_id' => $this->type_id,
            'type' => $this->whenLoaded('type', function () use ($request) {
                $type = $this->type;
                $locale = $request->get('locale', app()->getLocale());
                $payload = [
                    'id' => $type->id,
                    'name' => method_exists($type, 'getTranslatedField') ? $type->getTranslatedField('name', $locale) : $type->name,
                    'original_name' => $type->name,
                ];
                if ($request->get('include_type_translations', false)) {
                    $payload['translations'] = $type->translations ?? [];
                }

                return $payload;
            }),
            'parent_id' => $this->parent_id,
            'parent' => $this->whenLoaded('parent', function () use ($request) {
                // Only return basic parent info to avoid recursive loading
                $parent = $this->parent;
                $locale = $request->get('locale', app()->getLocale());

                return [
                    'id' => $parent->id,
                    'code' => $parent->code,
                    'name' => $parent->getTranslatedField('name', $locale),
                    'original_name' => $parent->name,
                ];
            }),
            'order' => $this->order,
            'is_active' => $this->is_active,
            'created_by' => $this->created_by,
            'creator' => $this->whenLoaded('creator', function () {
                return new UserResource($this->creator);
            }),
            'translations' => $this->when($request->get('include_translations', false), function () {
                return $this->getAllTranslations();
            }),
            'available_locales' => $this->when($request->get('include_available_locales', false), function () {
                return [
                    'name' => $this->getAvailableLocales('name'),
                ];
            }),
            'translation_stats' => $this->when($request->get('include_translation_stats', false), function () {
                return app(\App\Services\TranslationService::class)->getTranslationStats($this->resource);
            }),
            'balance' => $this->when($request->get('include_balance', false), function () {
                // Use pre-calculated bulk balance data if available (much faster)
                $bulkBalanceData = $this->getAttribute('_bulk_balance_data');

                if ($bulkBalanceData !== null) {
                    $currentBalance = $bulkBalanceData['balance'] ?? 0;
                    $totalBalance = $bulkBalanceData['total_balance'] ?? 0;

                    return [
                        'current_balance' => $currentBalance,
                        'total_balance' => $totalBalance,
                        'balance_type' => $totalBalance >= 0 ? 'Debit' : 'Credit',
                        'formatted_balance' => number_format(abs($totalBalance), 2).' '.($totalBalance >= 0 ? 'Debit' : 'Credit'),
                        'debit_amount' => $bulkBalanceData['debits'] ?? 0,
                        'credit_amount' => $bulkBalanceData['credits'] ?? 0,
                        'total_debit_amount' => $bulkBalanceData['total_debits'] ?? 0,
                        'total_credit_amount' => $bulkBalanceData['total_credits'] ?? 0,
                    ];
                }

                // Fallback to individual calculation if bulk data not available
                return [
                    'current_balance' => $this->getBalance(),
                    'total_balance' => $this->getTotalBalance(),
                    'balance_type' => $this->getTotalBalanceType(),
                    'formatted_balance' => $this->getFormattedTotalBalanceWithType(),
                ];
            }),
            'children' => $this->whenLoaded('children', function () {
                return ChartOfAccountTranslationResource::collection($this->children);
            }),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }

    /**
     * Get additional data that should be returned with the resource array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function with($request)
    {
        return [
            'meta' => [
                'current_locale' => app()->getLocale(),
                'fallback_locale' => config('app.fallback_locale', 'en'),
                'supported_locales' => array_keys(config('app.locales', [])),
            ],
        ];
    }
}
