<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use App\Models\App\Traits\HasTranslations;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vendor extends AppModel
{
    use HasTranslations;

    protected $fillable = [
        'name',
        'vat_number',
        'cr_number',
        'id_type_id',
        'id_no',
        'id_date',
        'dob',
        'nationality_id',
        'job',
        'job_place',
        'vendor_id',
        'bank_id',
        'iban',
        'currency_id',
        'avatar',
        'balance',
    ];

    protected $casts = [
        'balance' => 'decimal:2',
        'id_date' => 'date',
        'dob' => 'date',
    ];

    // Relationships
    public function idType(): BelongsTo
    {
        return $this->belongsTo(IdType::class);
    }

    public function nationality(): BelongsTo
    {
        return $this->belongsTo(Nationality::class);
    }

    public function parentVendor(): BelongsTo
    {
        return $this->belongsTo(Vendor::class, 'vendor_id');
    }

    public function childVendors(): HasMany
    {
        return $this->hasMany(Vendor::class, 'vendor_id');
    }

    public function bank(): BelongsTo
    {
        return $this->belongsTo(Bank::class);
    }

    public function currency(): BelongsTo
    {
        return $this->belongsTo(Currency::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    // Accessors
    public function getFullNameAttribute(): string
    {
        return $this->getLocalizedNameAttribute();
    }

    /**
     * Get the localized name with fallback
     */
    public function getDisplayNameAttribute(): string
    {
        return $this->getLocalizedNameAttribute();
    }
}
