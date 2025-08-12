<?php

namespace App\Models\Core\File;

use App\Models\Core\BaseModel;
use App\Models\Core\File\Traits\FileRelationship;
use App\Models\Core\File\Traits\FileMethod;
use App\Models\Core\File\Traits\FileAttribute;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;
class File extends BaseModel
{
    use BelongsToTenant;
    protected $fillable = [
        'path', 'type'
    ];

    protected $appends = ['full_url'];

    protected $hidden = [
        'fileable_type', 'fileable_id'
    ];

    public bool $enableLoggingModelsEvents = false;

    use FileRelationship, FileMethod, FileAttribute;
}
