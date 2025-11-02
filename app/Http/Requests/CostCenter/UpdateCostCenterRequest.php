<?php

namespace App\Http\Requests\CostCenter;

use App\Http\Requests\BaseRequest;

class UpdateCostCenterRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $costCenterId = $this->route('cost_center') ?? $this->route('id');
        
        return [
            'code' => ['required', 'string', 'max:50', 'unique:cost_centers,code,' . $costCenterId],
            'name' => ['required', 'string', 'max:255'],
            'name_en' => ['nullable', 'string', 'max:255'],
            'parent_id' => ['nullable', 'exists:cost_centers,id', function ($attribute, $value, $fail) use ($costCenterId) {
                // Prevent setting itself as parent
                if ($value == $costCenterId) {
                    $fail('The cost center cannot be its own parent.');
                }
            }],
            'is_active' => ['nullable', 'boolean'],
        ];
    }
}
