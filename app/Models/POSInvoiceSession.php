<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class POSInvoiceSession extends Model
{
    use HasFactory;

    protected $table = 'pos_invoice_sessions';

    protected $fillable = [
        'user_id',
        'session_key',
        'status',
        'invoice_data',
        'opened_at',
        'closed_at',
    ];

    protected $casts = [
        'invoice_data' => 'array',
        'opened_at' => 'datetime',
        'closed_at' => 'datetime',
    ];

    protected static function boot(): void
    {
        parent::boot();

        static::creating(function ($session) {
            if (empty($session->session_key)) {
                $session->session_key = Str::uuid()->toString();
            }
            if (empty($session->opened_at)) {
                $session->opened_at = now();
            }
        });
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeSuspended($query)
    {
        return $query->where('status', 'suspended');
    }

    public function scopeOpen($query)
    {
        return $query->whereIn('status', ['active', 'suspended']);
    }
}
