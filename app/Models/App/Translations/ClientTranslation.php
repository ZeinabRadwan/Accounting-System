<?php

namespace App\Models\App\Translations;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClientTranslation extends AppModel
{
    protected $fillable = [
        'client_id',
        'locale',
        'name',
        'job',
        'job_place',
    ];

    protected $casts = [
        'locale' => 'string',
    ];

    /**
     * Get the client that owns the translation
     */
    public function client(): BelongsTo
    {
        return $this->belongsTo(\App\Models\App\Client::class);
    }
}
