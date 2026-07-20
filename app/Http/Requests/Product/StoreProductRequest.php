<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class StoreProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->canAccessAdminPanel() ?? false;
    }

    public function rules(): array
    {
        return [
            'category_id' => ['required', 'integer', 'exists:categories,id'],
            'display_name' => ['required', 'string', 'max:255'],
            'sku' => ['required', 'string', 'max:100', 'unique:products,sku'],
            'price1' => ['required', 'numeric', 'min:0'],
            'price2' => ['nullable', 'numeric', 'min:0'],
            'price3' => ['nullable', 'numeric', 'min:0'],
            'base_unit' => ['required', 'string', 'max:50'],
            'units' => ['required', 'array', 'min:1'],
            'units.*.unit_name' => ['required', 'string', 'max:50', 'distinct:ignore_case'],
            'units.*.conversion_factor' => ['required', 'numeric', 'gt:0'],
            'units.*.price1' => ['nullable', 'numeric', 'min:0'],
            'units.*.price2' => ['nullable', 'numeric', 'min:0'],
            'units.*.price3' => ['nullable', 'numeric', 'min:0'],
            'units.*.is_base' => ['boolean'],
        ];
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator) {
            $units = $this->input('units', []);
            if (! is_array($units) || $units === []) {
                return;
            }

            $baseCount = 0;
            foreach ($units as $index => $unit) {
                $isBase = filter_var($unit['is_base'] ?? false, FILTER_VALIDATE_BOOLEAN);
                if ($isBase) {
                    $baseCount++;
                    if ((float) ($unit['conversion_factor'] ?? 0) != 1.0) {
                        $validator->errors()->add(
                            "units.{$index}.conversion_factor",
                            'Base unit conversion factor must be 1.'
                        );
                    }
                }
            }

            if ($baseCount !== 1) {
                $validator->errors()->add('units', 'Exactly one base unit is required.');
            }
        });
    }
}

