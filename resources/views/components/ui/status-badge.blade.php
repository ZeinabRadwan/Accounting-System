@props(['status' => 'active'])

@php
$map = [
    'active' => ['success', 'Active'],
    'inactive' => ['slate', 'Inactive'],
    'in_stock' => ['success', 'In Stock'],
    'low_stock' => ['warning', 'Low Stock'],
    'out_of_stock' => ['danger', 'Out of Stock'],
    'expired' => ['danger', 'Expired'],
    'expiring_soon' => ['warning', 'Expiring Soon'],
    'paid' => ['success', 'Paid'],
    'partial' => ['warning', 'Partial'],
    'unpaid' => ['danger', 'Unpaid'],
    'draft' => ['slate', 'Draft'],
    'completed' => ['success', 'Completed'],
    'pending' => ['warning', 'Pending'],
    'cancelled' => ['danger', 'Cancelled'],
];
[$variant, $label] = $map[$status] ?? ['slate', ucfirst(str_replace('_', ' ', $status))];
@endphp

<x-ui.badge :variant="$variant">{{ $slot->isEmpty() ? __($label) : $slot }}</x-ui.badge>
