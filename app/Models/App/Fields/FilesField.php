<?php

namespace App\Models\App\Fields;

use App\Models\App\AppModel;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;
class FilesField extends AppModel
{
    use BelongsToTenant;
    protected $fillable = [
        'default_file', 'custom_file', 'dropzone_file',
    ];
}
