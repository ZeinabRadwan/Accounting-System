<?php

namespace App\Models\Core\Auth;

use Illuminate\Database\Eloquent\Model;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;

class Profile extends Model
{
    use BelongsToTenant;
    protected $fillable = ['user_id', 'gender', 'date_of_birth', 'address',	'contact'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
