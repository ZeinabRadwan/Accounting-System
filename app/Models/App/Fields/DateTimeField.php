<?php

namespace App\Models\App\Fields;

use App\Models\App\AppModel;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;
class DateTimeField extends AppModel
{
    use BelongsToTenant;
    protected $fillable = [
        'date_picker', 'time_picker'
    ];
}
