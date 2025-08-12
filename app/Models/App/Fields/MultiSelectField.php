<?php

namespace App\Models\App\Fields;

use App\Models\App\AppModel;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;

class MultiSelectField extends AppModel
{
    use BelongsToTenant;
    protected $fillable = [
        'select', 'multi_select', 'smart_select'
    ];
}
