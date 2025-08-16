<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class ValidMobileNumber implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        // Remove any non-digit characters
        $cleanNumber = preg_replace('/[^0-9]/', '', $value);
        
        // Check if the cleaned number is between 8-15 digits
        return strlen($cleanNumber) >= 8 && strlen($cleanNumber) <= 15;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute must be a valid mobile number between 8-15 digits.';
    }
}
