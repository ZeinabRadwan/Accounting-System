<?php

namespace App\Models\App\SamplePage\KanbanView;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;
class Stage extends Model
{
    use HasFactory,BelongsToTenant;

    protected $fillable = ['name'];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
