<?php

namespace App\Models\App\Fields;

use App\Models\App\AppModel;
use App\Models\App\Traits\EditorValidationRules;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;
class EditorField extends AppModel
{
    use EditorValidationRules,BelongsToTenant;

    protected $fillable = [
        'subject', 'editor',
    ];
}
