<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\InvokableRule;

class CustomDomainValidation implements InvokableRule
{
    /**
     * Run the validation rule.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     * @return void
     */
    public function __invoke($attribute, $value, $fail)
    {
        // Check if domain is empty
        if (empty($value)) {
            $fail(__('validation.required', ['attribute' => __('validation.attributes.domain')]));
            return;
        }

        // Check if domain contains only valid characters
        if (!preg_match('/^[a-z0-9-]+$/i', $value)) {
            $fail(__('validation.domain_invalid_characters', ['attribute' => __('validation.attributes.domain')]));
            return;
        }

        // Check if domain starts or ends with hyphen
        if (str_starts_with($value, '-') || str_ends_with($value, '-')) {
            $fail(__('validation.domain_hyphen_position', ['attribute' => __('validation.attributes.domain')]));
            return;
        }

        // Check if domain is too short
        if (strlen($value) < 2) {
            $fail(__('validation.domain_too_short', ['attribute' => __('validation.attributes.domain')]));
            return;
        }

        // Check if domain is too long
        if (strlen($value) > 63) {
            $fail(__('validation.domain_too_long', ['attribute' => __('validation.attributes.domain')]));
            return;
        }

        // Check if domain contains consecutive hyphens
        if (strpos($value, '--') !== false) {
            $fail(__('validation.domain_consecutive_hyphens', ['attribute' => __('validation.attributes.domain')]));
            return;
        }

        // Check if domain contains only numbers (not allowed)
        if (preg_match('/^[0-9]+$/', $value)) {
            $fail(__('validation.domain_numbers_only', ['attribute' => __('validation.attributes.domain')]));
            return;
        }
    }
}
