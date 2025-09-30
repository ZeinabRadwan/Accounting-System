<?php

namespace App\Traits;

use App\Models\Translation;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Facades\App;

trait Translatable
{
    /**
     * Get all translations for this model
     */
    public function translations(): MorphMany
    {
        return $this->morphMany(Translation::class, 'translatable');
    }

    /**
     * Get translation for a specific field and locale
     */
    public function getTranslation($field, $locale = null)
    {
        $locale = $locale ?: App::getLocale();
        
        $translation = $this->translations()
            ->where('field', $field)
            ->where('locale', $locale)
            ->first();
            
        return $translation ? $translation->value : null;
    }

    /**
     * Get all translations for a specific field
     */
    public function getTranslations($field)
    {
        return $this->translations()
            ->where('field', $field)
            ->pluck('value', 'locale')
            ->toArray();
    }

    /**
     * Set translation for a specific field and locale
     */
    public function setTranslation($field, $locale, $value)
    {
        return $this->translations()->updateOrCreate(
            [
                'field' => $field,
                'locale' => $locale,
            ],
            [
                'value' => $value,
            ]
        );
    }

    /**
     * Set multiple translations for a field
     */
    public function setTranslations($field, array $translations)
    {
        foreach ($translations as $locale => $value) {
            if (!empty($value)) {
                $this->setTranslation($field, $locale, $value);
            }
        }
    }

    /**
     * Get translated field value with fallback
     */
    public function getTranslatedField($field, $locale = null)
    {
        $locale = $locale ?: App::getLocale();
        $fallbackLocale = config('app.fallback_locale', 'en');
        
        // Try to get translation for current locale
        $value = $this->getTranslation($field, $locale);
        
        // If no translation found, try fallback locale
        if (empty($value) && $locale !== $fallbackLocale) {
            $value = $this->getTranslation($field, $fallbackLocale);
        }
        
        // If still no translation, return the original field value
        if (empty($value)) {
            $value = $this->getAttribute($field);
        }
        
        return $value;
    }

    /**
     * Get all available locales for a specific field
     */
    public function getAvailableLocales($field)
    {
        return $this->translations()
            ->where('field', $field)
            ->pluck('locale')
            ->unique()
            ->values()
            ->toArray();
    }

    /**
     * Check if translation exists for a field and locale
     */
    public function hasTranslation($field, $locale)
    {
        return $this->translations()
            ->where('field', $field)
            ->where('locale', $locale)
            ->exists();
    }

    /**
     * Delete translation for a specific field and locale
     */
    public function deleteTranslation($field, $locale)
    {
        return $this->translations()
            ->where('field', $field)
            ->where('locale', $locale)
            ->delete();
    }

    /**
     * Delete all translations for a specific field
     */
    public function deleteTranslations($field)
    {
        return $this->translations()
            ->where('field', $field)
            ->delete();
    }

    /**
     * Get all translations as a structured array
     */
    public function getAllTranslations()
    {
        $translations = [];
        
        foreach ($this->translations as $translation) {
            $translations[$translation->field][$translation->locale] = $translation->value;
        }
        
        return $translations;
    }

    /**
     * Scope to filter by translation
     */
    public function scopeWhereTranslation($query, $field, $value, $locale = null)
    {
        $locale = $locale ?: App::getLocale();
        
        return $query->whereHas('translations', function ($q) use ($field, $value, $locale) {
            $q->where('field', $field)
              ->where('locale', $locale)
              ->where('value', 'like', "%{$value}%");
        });
    }

    /**
     * Scope to order by translation
     */
    public function scopeOrderByTranslation($query, $field, $direction = 'asc', $locale = null)
    {
        $locale = $locale ?: App::getLocale();
        
        return $query->leftJoin('translations', function ($join) use ($field, $locale) {
            $join->on('translations.translatable_id', '=', $this->getTable() . '.id')
                 ->where('translations.translatable_type', '=', get_class($this))
                 ->where('translations.field', '=', $field)
                 ->where('translations.locale', '=', $locale);
        })->orderBy('translations.value', $direction);
    }
}
