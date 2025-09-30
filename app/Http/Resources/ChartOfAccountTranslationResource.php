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
            'parent' => $this->whenLoaded('parent', function () {
                return new ChartOfAccountTranslationResource($this->parent);
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
