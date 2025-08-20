<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Nationality extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
        'status'
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function suppliers()
    {
        return $this->hasMany(Supplier::class);
    }

    public function clients()
    {
        return $this->hasMany(Client::class);
    }
}
