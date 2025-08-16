<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use App\Models\App\Traits\HasTranslations;

class ProjectType extends AppModel
{
    use HasTranslations;

    protected $fillable = [
        'name',
    ];

    /**
     * Get the project type display name.
     */
    public function getDisplayNameAttribute(): string
    {
        $translatedName = $this->getLocalizedNameAttribute();
        if ($translatedName && $translatedName !== 'N/A') {
            return $translatedName;
        }
        
        return $this->name ?? 'N/A';
    }
}
