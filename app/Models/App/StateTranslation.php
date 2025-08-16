<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StateTranslation extends AppModel
{
    protected $table = 'states_translations';

    protected $fillable = [
        'state_id',
        'locale',
        'name',
    ];

    protected $casts = [
        'locale' => 'string',
    ];

    /**
     * Get the state that owns this translation.
     */
    public function state(): BelongsTo
    {
        return $this->belongsTo(State::class);
    }

    /**
     * Get the translated name with fallback.
     */
    public function getTranslatedNameAttribute(): string
    {
        return $this->name ?? '';
    }
}
