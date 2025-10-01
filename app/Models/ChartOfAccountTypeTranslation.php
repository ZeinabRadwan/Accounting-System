<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChartOfAccountTypeTranslation extends Model
{
    use HasFactory;

    protected $table = 'chart_of_account_type_translations';

    protected $fillable = [
        'chart_of_account_type_id',
        'locale',
        'name',
    ];
}


