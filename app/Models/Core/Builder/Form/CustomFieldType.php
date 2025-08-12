<?php

namespace App\Models\Core\Builder\Form;

use App\Models\Core\BaseModel;
use App\Models\Core\Traits\Translate\TranslatedNameTrait;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;

class CustomFieldType extends BaseModel
{
    protected $appends = ['translated_name'];

    use TranslatedNameTrait,BelongsToTenant;

    protected $fillable = [
        'name'
    ];

}
