<?php

namespace App\Models;

use Stancl\Tenancy\Database\Models\Tenant as BaseTenant;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Database\Concerns\HasDatabase;
use Stancl\Tenancy\Database\Concerns\HasDomains;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Tenant extends BaseTenant implements TenantWithDatabase
{
    use HasDatabase, HasDomains, HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'company_name',
        'data'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'data' => 'array',
    ];

    /**
     * Get the company name from data or use a default
     */
    public function getCompanyNameAttribute($value)
    {
        if ($this->attributes['company_name']) {
            return $this->attributes['company_name'];
        }
        return $this->data['company_name'] ?? 'Unknown Company';
    }

    /**
     * Set the company name
     */
    public function setCompanyNameAttribute($value)
    {
        $this->attributes['company_name'] = $value;
        $this->data = array_merge($this->data ?? [], ['company_name' => $value]);
    }
}
