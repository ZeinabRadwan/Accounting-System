<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\App\IdType;
use App\Models\App\Nationality;
use App\Models\App\Bank;
use App\Models\App\Currency;

class Client extends AppModel
{
    protected $fillable = [
        'user_id',
        'name',
        'type',
        'cr_number',
        'vat_number',
        'id_type_id',
        'id_no',
        'id_date',
        'phone_no',
        'dob',
        'nationality_id',
        'job',
        'job_place',
        'client_id',
        'bank_id',
        'iban',
        'currency_id',
        'avatar',
        'is_active',
        'balance',
    ];

    protected $casts = [
        'type' => 'integer',
        'is_active' => 'boolean',
        'balance' => 'decimal:2',
        'id_date' => 'date',
        'dob' => 'date',
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(\App\Models\Core\Auth\User::class);
    }

    public function idType(): BelongsTo
    {
        return $this->belongsTo(IdType::class);
    }

    public function nationality(): BelongsTo
    {
        return $this->belongsTo(Nationality::class);
    }

    public function parentClient(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function childClients(): HasMany
    {
        return $this->hasMany(Client::class, 'client_id');
    }

    public function bank(): BelongsTo
    {
        return $this->belongsTo(Bank::class);
    }

    public function currency(): BelongsTo
    {
        return $this->belongsTo(Currency::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeIndividual($query)
    {
        return $query->where('type', 1);
    }

    public function scopeCompany($query)
    {
        return $query->where('type', 2);
    }

    // Accessors
    public function getTypeTextAttribute(): string
    {
        return $this->type === 1 ? 'Individual' : 'Company';
    }

    public function getFullNameAttribute(): string
    {
        return $this->name ?? 'N/A';
    }
}
