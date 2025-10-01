<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChartOfAccountTranslation extends Model
{
    use HasFactory;

    protected $table = 'chart_of_account_translations';

    protected $fillable = [
        'chart_of_account_id',
        'locale',
        'name',
        'description',
    ];
}


