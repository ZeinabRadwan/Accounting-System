<?php

namespace App\Models\App\FormValidationModel;

use App\Models\App\AppModel;
use App\Models\App\Traits\FormValidationRules;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;
class FormValidation extends AppModel
{
    use FormValidationRules,BelongsToTenant;

    protected $fillable = [
        'text', 'email', 'password_input', 'number', 'date', 'time' , 'text_area'
    ];
}
