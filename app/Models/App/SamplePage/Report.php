<?php

namespace App\Models\App\SamplePage;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;
class Report extends AppModel
{
    use HasFactory,BelongsToTenant;

    protected $fillable = ['name', 'count', 'value'];
}
