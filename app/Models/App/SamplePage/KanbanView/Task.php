<?php

namespace App\Models\App\SamplePage\KanbanView;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;
class Task extends AppModel
{
    use HasFactory,BelongsToTenant;

    protected $fillable = ['title', 'owner_name', 'stage_id'];

    public function stage()
    {
        return $this->belongsTo(Stage::class);
    }
}
