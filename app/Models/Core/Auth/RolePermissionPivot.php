<?php

namespace App\Models\Core\Auth;

use Illuminate\Database\Eloquent\Relations\Pivot;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;

class RolePermissionPivot extends Pivot
{
    use BelongsToTenant;
    protected $table = 'role_permission';

    protected $casts = [
        'meta' => 'array'
    ];
}
