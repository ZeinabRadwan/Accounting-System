<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CentralUser extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'is_active',
        'tenant_id'
    ];

    protected $connection = 'central';
    protected $table = 'central_users';

    public function tenant()
    {
        return $this->belongsTo(Tenant::class);
    }
}
