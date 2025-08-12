<?php

namespace App\Models\App\FormValidationModel;

use App\Models\App\AppModel;
use App\Models\App\Traits\FromRangeValidation;
use Illuminate\Database\Eloquent\Model;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;
class RangeValidation extends AppModel
{
    use FromRangeValidation,BelongsToTenant;

    protected $fillable = [
       'min_range', 'max_range', 'length', 'alphanumaric',
    ];
}
