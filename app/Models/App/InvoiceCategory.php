<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class InvoiceCategory extends AppModel
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'code',
        'created_by',
        'updated_by',
    ];

    /**
     * Get the translations for this invoice category.
     */
    public function translations(): HasMany
    {
        return $this->hasMany(InvoiceCategoryTranslation::class);
    }

    /**
     * Get translation for current locale.
     */
    public function translation($locale = null)
    {
        $locale = $locale ?: app()->getLocale();
        return $this->translations()->where('locale', $locale)->first();
    }

    /**
     * Get translated name for current locale.
     */
    public function getTranslatedNameAttribute(): string
    {
        $translation = $this->translation();
        return $translation?->name ?? $this->name ?? '';
    }

    /**
     * Get translated name for a specific locale.
     */
    public function getLocalizedNameAttribute(string $locale): string
    {
        $translation = $this->translations()->where('locale', $locale)->first();
        return $translation?->name ?? $this->name ?? '';
    }

    /**
     * Update or create translation for a specific locale.
     */
    public function updateTranslation(string $locale, array $data): InvoiceCategoryTranslation
    {
        $translation = $this->translations()->where('locale', $locale)->first();
        
        if ($translation) {
            $translation->update($data);
            return $translation;
        }
        
        return $this->translations()->create(array_merge($data, ['locale' => $locale]));
    }

    /**
     * Set translations for multiple locales at once.
     */
    public function setTranslations(array $translations): void
    {
        foreach ($translations as $locale => $data) {
            $this->updateTranslation($locale, $data);
        }
    }
}
