<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use App\Models\App\Invoice;
use App\Models\App\Traits\HasTranslations;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class InvoiceClientInfo extends AppModel
{
    use HasTranslations;

    protected $table = 'invoice_client_info';

    protected $fillable = [
        'invoice_id',
        'client_name',
        'client_cr_number',
        'client_vat_number',
        'client_address',
        'representative_name',
        'representative_vat_number',
        'representative_cr_number',
        'representative_address',
    ];

    protected $casts = [
        'client_address' => 'array',
        'representative_address' => 'array',
    ];

    protected $translatable = [
        'client_name',
        'representative_name',
    ];

    /**
     * Get the invoice that owns this client info.
     */
    public function invoice(): BelongsTo
    {
        return $this->belongsTo(Invoice::class);
    }

    /**
     * Get the translations for this client info.
     */
    public function translations(): HasMany
    {
        return $this->hasMany(InvoiceClientInfoTranslation::class);
    }

    /**
     * Get the translation for a specific locale.
     */
    public function translation(string $locale = null): BelongsTo
    {
        $locale = $locale ?? app()->getLocale();
        return $this->belongsTo(InvoiceClientInfoTranslation::class, 'id', 'invoice_client_info_id')
            ->where('locale', $locale);
    }

    /**
     * Create or update a translation for this client info.
     */
    public function updateTranslation(string $locale, array $data): InvoiceClientInfoTranslation
    {
        $translation = $this->translations()->where('locale', $locale)->first();
        
        if ($translation) {
            $translation->update($data);
            return $translation;
        }
        
        return $this->translations()->create(array_merge($data, ['locale' => $locale]));
    }

    /**
     * Get translation for a specific locale or create if it doesn't exist.
     */
    public function getOrCreateTranslation(string $locale): InvoiceClientInfoTranslation
    {
        return $this->translations()->firstOrCreate(['locale' => $locale]);
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

    /**
     * Get the translated client name for the current locale.
     */
    public function getTranslatedClientNameAttribute(): string
    {
        $translation = $this->translations()->where('locale', app()->getLocale())->first();
        return $translation?->client_name ?? $this->client_name ?? '';
    }

    /**
     * Get the translated representative name for the current locale.
     */
    public function getTranslatedRepresentativeNameAttribute(): string
    {
        $translation = $this->translations()->where('locale', app()->getLocale())->first();
        return $translation?->representative_name ?? $this->representative_name ?? '';
    }

    /**
     * Get the translated client name for a specific locale.
     */
    public function getLocalizedClientNameAttribute(string $locale): string
    {
        $translation = $this->translations()->where('locale', $locale)->first();
        return $translation?->client_name ?? $this->client_name ?? '';
    }

    /**
     * Get the translated representative name for a specific locale.
     */
    public function getLocalizedRepresentativeNameAttribute(string $locale): string
    {
        $translation = $this->translations()->where('locale', $locale)->first();
        return $translation?->representative_name ?? $this->representative_name ?? '';
    }

    /**
     * Check if client info has translations.
     */
    public function hasTranslations(): bool
    {
        return $this->translations()->exists();
    }

    /**
     * Get available locales for this client info.
     */
    public function getAvailableLocales(): array
    {
        return $this->translations()->pluck('locale')->toArray();
    }

    /**
     * Check if client info has translation for a specific locale.
     */
    public function hasTranslation(string $locale): bool
    {
        return $this->translations()->where('locale', $locale)->exists();
    }
}
