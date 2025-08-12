<?php


namespace App\Models\App\PaymentMethods;


use App\Models\App\AppModel;
use App\Models\App\Traits\PaymentMethodRules;
use App\Models\Core\Setting\Setting;

use App\Models\Core\Traits\StatusRelationship;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;

class PaymentMethod extends AppModel
{
    use HasFactory, PaymentMethodRules, StatusRelationship,BelongsToTenant;

    protected $fillable = [
        'name', 'alias', 'status_id', 'is_default', 'created_by', 'rounded_to'
    ];

    public function settings()
    {
        return $this->morphMany(Setting::class, 'settingable');
    }
}