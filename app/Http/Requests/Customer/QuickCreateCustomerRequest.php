<?php

namespace App\Http\Requests\Customer;

use Illuminate\Foundation\Http\FormRequest;

class QuickCreateCustomerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->can('permission', 'allow_customer_create') ?? false;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:50'],
        ];
    }
}

