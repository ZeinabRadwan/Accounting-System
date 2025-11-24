<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

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

        // If translations are already loaded, use them to avoid N+1 queries
        if ($this->relationLoaded('translations')) {
            $translation = $this->translations->firstWhere('locale', $locale);
            if ($translation && $translation->name) {
                return $translation->name;
            }
        } else {
            // Fallback to query if not eager loaded
            $translation = $this->translations()
                ->where('locale', $locale)
                ->value('name');
            if ($translation) {
                return $translation;
            }
        }

        return $this->getAttribute($field);
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
