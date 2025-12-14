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
                $parent = $this->parent;
                $locale = $request->get('locale', app()->getLocale());

                return [
                    'id' => $parent->id,
                    'name' => method_exists($parent, 'getTranslatedField') ? $parent->getTranslatedField('name', $locale) : $parent->name,
                    'code' => $parent->code,
                    'original_name' => $parent->name,
                ];
            }),
            'order' => $this->order,
            'is_active' => $this->is_active,
            'children_count' => $this->when(isset($this->children_count), function () {
                return $this->children_count;
            }, function () {
                return $this->children()->count();
            }),
            'has_children' => $this->when(isset($this->children_count), function () {
                return $this->children_count > 0;
            }, function () {
                return $this->children()->exists();
            }),
            'translations' => $this->when($request->get('include_translations', false), function () {
                return $this->getAllTranslations();
            }),
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
