<?php

namespace App\Models\App\User;

use Illuminate\Database\Eloquent\Model;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;
class UserSocialLink extends Model
{
    use BelongsToTenant;
    protected $table = 'user_social_link';

    protected $fillable = ['link'];

    public $timestamps = false;
}
