<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ChartOfAccountType extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'chart_of_account_types';
    
    protected $fillable = [
        'name',
        'order',
    ];

    public function translations(): HasMany
    {
        return $this->hasMany(ChartOfAccountTypeTranslation::class, 'chart_of_account_type_id');
    }

    public function getTranslatedField(string $field, ?string $locale = null): ?string
    {
        $locale = $locale ?: app()->getLocale();
        if ($field !== 'name') {
            return $this->getAttribute($field);
        }
        $translation = $this->translations()
            ->where('locale', $locale)
            ->value('name');
        return $translation ?: $this->getAttribute($field);
    }

    public function getNameTranslatedAttribute(): ?string
    {
        return $this->getTranslatedField('name');
    }

    public function chartOfAccounts()
    {
        return $this->hasMany(ChartOfAccount::class, 'type_id');
    }
}
