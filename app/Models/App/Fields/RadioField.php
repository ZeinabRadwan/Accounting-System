<?php

namespace App\Models\App\Fields;

use App\Models\App\AppModel;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;

class RadioField extends AppModel
{
    use BelongsToTenant;
    protected $fillable = [
        'radio', 'radio_buttons_group', 'checkbox'
    ];
}
