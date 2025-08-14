<?php

namespace App\Models\App\Translations;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VendorTranslation extends AppModel
{
    protected $fillable = [
        'vendor_id',
        'locale',
        'name',
        'job',
        'job_place',
    ];

    protected $casts = [
        'locale' => 'string',
    ];

    /**
     * Get the vendor that owns the translation
     */
    public function vendor(): BelongsTo
    {
        return $this->belongsTo(\App\Models\App\Vendor::class);
    }
}
