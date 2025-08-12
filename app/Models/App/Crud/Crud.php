<?php

namespace App\Models\App\Crud;

use App\Models\App\AppModel;
use App\Models\App\Traits\CrudValidationRules;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;
class Crud extends AppModel
{
    use CrudValidationRules, HasFactory,BelongsToTenant;

    protected $fillable = ['name', 'email', 'phone', 'gender', 'age', 'status'];
}
