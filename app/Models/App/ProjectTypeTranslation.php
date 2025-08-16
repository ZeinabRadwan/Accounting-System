<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProjectTypeTranslation extends AppModel
{
    protected $table = 'project_types_translations';

    protected $fillable = [
        'project_type_id',
        'locale',
        'name',
    ];

    protected $casts = [
        'locale' => 'string',
    ];

    /**
     * Get the project type that owns this translation.
     */
    public function projectType(): BelongsTo
    {
        return $this->belongsTo(ProjectType::class);
    }

    /**
     * Get the translated name with fallback.
     */
    public function getTranslatedNameAttribute(): string
    {
        return $this->name ?? '';
    }
}
