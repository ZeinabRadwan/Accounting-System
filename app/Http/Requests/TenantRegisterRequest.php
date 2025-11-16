<?php

namespace App\Http\Requests;

use App\Rules\DomainValidation;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password as PasswordRule;

class TenantRegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        // Set locale from request header or input
        $locale = $this->header('Accept-Language', 'en');

        // Check if locale is in Accept-Language header
        if (strpos($locale, 'ar') !== false) {
            app()->setLocale('ar');
        } elseif (strpos($locale, 'en') !== false) {
            app()->setLocale('en');
        }

        // Also check for locale in the request data
        if ($this->has('locale')) {
            $requestLocale = $this->input('locale');
            if (in_array($requestLocale, ['ar', 'en'])) {
                app()->setLocale($requestLocale);
            }
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'company' => ['required', 'string', 'max:255'],
            'name' => ['required', 'string', 'max:255'],
            'domain' => ['required', 'string', 'max:255', 'alpha_dash', new DomainValidation],
            'email' => ['required', 'string', 'email:rfc,dns', 'max:255', 'unique:tenants,data->email'],
            'password' => ['required', 'confirmed', PasswordRule::defaults()],
            'terms_and_conditions' => ['required', 'accepted'],
        ];
    }
}
