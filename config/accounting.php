<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Cost Centers Configuration
    |--------------------------------------------------------------------------
    |
    | This configuration controls the cost center functionality in the
    | accounting system. You can enable or disable cost centers and
    | configure whether they are required for journal entries.
    |
    */

    'cost_centers' => [
        // Enable or disable cost center functionality
        'enabled' => env('COST_CENTERS_ENABLED', true),

        // Whether cost centers are required when creating journal entries
        'required_for_journal' => env('COST_CENTERS_REQUIRED_FOR_JOURNAL', false),
    ],

    /*
    |--------------------------------------------------------------------------
    | Cost Allocation Configuration
    |--------------------------------------------------------------------------
    |
    | Configuration for cost allocation system including allocation basis types
    | and validation rules.
    |
    */

    'cost_allocation' => [
        // Enable or disable cost allocation functionality
        'enabled' => env('COST_ALLOCATION_ENABLED', true),

        // Allocation basis types
        'basis_types' => [
            'percentage' => 'Percentage',
            'employees' => 'Number of Employees',
            'revenue' => 'Revenue',
            'area' => 'Area (Square Meters)',
            'consumption' => 'Consumption/Usage',
        ],
    ],
];

