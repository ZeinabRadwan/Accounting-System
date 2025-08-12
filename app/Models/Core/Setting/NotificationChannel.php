<?php

namespace App\Models\Core\Setting;

use App\Models\Core\BaseModel;
use App\Models\Core\Traits\Translate\TranslatedNameTrait;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;

class NotificationChannel extends BaseModel
{
    use TranslatedNameTrait,BelongsToTenant;
}
