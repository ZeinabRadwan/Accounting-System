<?php

namespace App\Models\App\Traits;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Str;

trait HasTranslations
{
    /**
     * Get the translations relationship
     */
    public function translations(): HasMany
    {
        $translationModel = $this->getTranslationModel();
        return $this->hasMany($translationModel, $this->getTranslationForeignKey());
    }

    /**
     * Get translation for current locale
     */
    public function translation($locale = null)
    {
        $locale = $locale ?: App::getLocale();
        return $this->translations()->where('locale', $locale)->first();
    }

    /**
     * Get translated attribute
     */
    public function getTranslatedAttribute($attribute, $locale = null)
    {
        $translation = $this->translation($locale);
        return $translation ? $translation->{$attribute} : null;
    }

    /**
     * Get translated name
     */
    public function getTranslatedNameAttribute($locale = null)
    {
        return $this->getTranslatedAttribute('name', $locale);
    }

    /**
     * Get translated job
     */
    public function getTranslatedJobAttribute($locale = null)
    {
        return $this->getTranslatedAttribute('job', $locale);
    }

    /**
     * Get translated job place
     */
    public function getTranslatedJobPlaceAttribute($locale = null)
    {
        return $this->getTranslatedAttribute('job_place', $locale);
    }

    /**
     * Scope to filter by locale
     */
    public function scopeWithTranslation(Builder $query, $locale = null)
    {
        $locale = $locale ?: App::getLocale();
        $translationTable = $this->getTranslationTable();
        $foreignKey = $this->getTranslationForeignKey();
        
        return $query->leftJoin($translationTable, function($join) use ($translationTable, $foreignKey, $locale) {
            $join->on($this->getTable() . '.id', '=', $translationTable . '.' . $foreignKey)
                 ->where($translationTable . '.locale', $locale);
        });
    }

    /**
     * Get the translation model class name
     */
    protected function getTranslationModel(): string
    {
        $modelClass = get_class($this);
        $modelName = class_basename($modelClass);
        return "App\\Models\\App\\Translations\\{$modelName}Translation";
    }

    /**
     * Get the translation table name
     */
    protected function getTranslationTable(): string
    {
        $modelClass = get_class($this);
        $modelName = class_basename($modelClass);
        return Str::plural(Str::snake($modelName)) . '_translations';
    }

    /**
     * Get the foreign key for translations
     */
    protected function getTranslationForeignKey(): string
    {
        $modelClass = get_class($this);
        $modelName = class_basename($this);
        return Str::snake($modelName) . '_id';
    }

    /**
     * Get localized name with fallback
     */
    public function getLocalizedNameAttribute(): string
    {
        $translation = $this->translation();
        if ($translation && $translation->name) {
            return $translation->name;
        }
        
        // Fallback to default name if exists
        return $this->name ?? 'N/A';
    }

    /**
     * Get localized job with fallback
     */
    public function getLocalizedJobAttribute(): ?string
    {
        $translation = $this->translation();
        if ($translation && $translation->job) {
            return $translation->job;
        }
        
        // Fallback to default job if exists
        return $this->job ?? null;
    }

    /**
     * Get localized job place with fallback
     */
    public function getLocalizedJobPlaceAttribute(): ?string
    {
        $translation = $this->translation();
        if ($translation && $translation->job_place) {
            return $translation->job_place;
        }
        
        // Fallback to default job place if exists
        return $this->job_place ?? null;
    }
}
