<?php

namespace App\Http\Requests\Customer;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Domain\Customer\Models\Customer;

class UpdateCustomerRequest extends FormRequest
{
    public function authorize(): bool
    {
        // Allow admins; sales may or may not be allowed to update; keep permissive via permission
        return $this->user()?->can('permission', 'allow_customer_create') ?? false;
    }

    public function rules(): array
    {
        /** @var Customer|null $customer */
        $customer = $this->route('customer');
        $id = $customer?->id;

        return [
            'name' => ['required', 'string', 'max:255'],
            'phone' => [
                'required',
                'string',
                'max:50',
                Rule::unique('customers', 'phone')->ignore($id),
            ],
        ];
    }
}

