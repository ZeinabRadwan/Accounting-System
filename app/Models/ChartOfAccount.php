<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ChartOfAccount extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'chart_of_accounts';
    
    protected $fillable = [
        'name',
        'code',
        'type_id',
        'parent_id',
        'order',
        'is_active',
        'created_by',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'order' => 'integer',
    ];

    /**
     * Get the account type
     */
    public function type()
    {
        return $this->belongsTo(ChartOfAccountType::class, 'type_id');
    }

    /**
     * Get the parent account
     */
    public function parent()
    {
        return $this->belongsTo(ChartOfAccount::class, 'parent_id');
    }

    /**
     * Get the user who created this account
     */
    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
