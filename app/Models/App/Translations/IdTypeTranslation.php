<?php

namespace App\Models\App\Translations;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class IdTypeTranslation extends AppModel
{
    protected $fillable = [
        'id_type_id',
        'locale',
        'name',
    ];

    protected $casts = [
        'locale' => 'string',
    ];

    /**
     * Get the ID type that owns the translation
     */
    public function idType(): BelongsTo
    {
        return $this->belongsTo(\App\Models\App\IdType::class);
    }
}
