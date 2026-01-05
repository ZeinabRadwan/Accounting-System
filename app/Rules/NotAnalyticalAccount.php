<?php

namespace App\Rules;

use App\Models\AnalyticalAccount;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class NotAnalyticalAccount implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if ($value && AnalyticalAccount::where('id', $value)->exists()) {
            $fail('Analytical accounts cannot be used as chart of accounts.');
        }
    }
}
