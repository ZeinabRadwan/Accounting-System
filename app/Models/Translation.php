<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Translation extends Model
{
    use HasFactory;

    protected $fillable = [
        'translatable_type',
        'translatable_id',
        'field',
        'locale',
        'value',
    ];

    protected $casts = [
        'value' => 'string',
    ];

    /**
     * Get the parent translatable model.
     */
    public function translatable()
    {
        return $this->morphTo();
    }

    /**
     * Scope to get translations for a specific field and locale
     */
    public function scopeForField($query, $field, $locale = null)
    {
        $query->where('field', $field);
        
        if ($locale) {
            $query->where('locale', $locale);
        }
        
        return $query;
    }

    /**
     * Scope to get translations for a specific locale
     */
    public function scopeForLocale($query, $locale)
    {
        return $query->where('locale', $locale);
    }

    /**
     * Get all available locales for a specific field
     */
    public function scopeAvailableLocales($query, $translatableType, $translatableId, $field)
    {
        return $query->where('translatable_type', $translatableType)
                    ->where('translatable_id', $translatableId)
                    ->where('field', $field)
                    ->pluck('locale')
                    ->unique();
    }
}
