<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ChartOfAccountType extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'chart_of_account_types';
    
    protected $fillable = [
        'name',
        'order',
    ];

    public function chartOfAccounts()
    {
        return $this->hasMany(ChartOfAccount::class, 'type_id');
    }
}
