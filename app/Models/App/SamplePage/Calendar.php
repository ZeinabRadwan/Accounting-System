<?php

namespace App\Models\App\SamplePage;

use App\Models\App\Traits\CalendarValidationRules;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;
class Calendar extends Model
{
    use HasFactory,CalendarValidationRules,BelongsToTenant;
    protected $fillable = ['title','description','start','end','completed'];
}
