<?php


namespace App\Models\Core\Log;


use App\Filters\FilterBuilder;
use Spatie\Activitylog\Models\Activity;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;

class ActivityLog extends Activity
{
    use BelongsToTenant;
    public function scopeFilters($query, FilterBuilder $filter)
    {
        return $filter->apply($query);
    }
}
