<?php

namespace App\Models\Core\Auth;

use App\Models\Core\BaseModel;
use Spatie\Activitylog\Traits\LogsActivity;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;
class Type extends BaseModel
{
    use BelongsToTenant;
//    use LogsActivity;

    protected $fillable = [
        'name', 'alias'
    ];
    protected static $logAttributes = [
        'name', 'alias'
    ];

    public static function findByAlias(string $alias)
    {
        return self::query()->whereAlias($alias)->first();
    }
}
