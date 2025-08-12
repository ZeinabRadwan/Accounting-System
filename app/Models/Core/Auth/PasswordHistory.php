<?php

namespace App\Models\Core\Auth;

use Illuminate\Database\Eloquent\Model;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;

class PasswordHistory extends Model
{
    use BelongsToTenant;
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'password_histories';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['password'];
}
