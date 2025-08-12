<?php

namespace App\Models\App\Chat;

use Illuminate\Database\Eloquent\Model;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;
class Attachment extends Model
{
    use BelongsToTenant;
    protected $fillable = ['message_id', 'path'];
}
