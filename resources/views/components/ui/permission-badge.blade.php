@props(['permission' => 'view'])

@php
$map = [
    'view' => 'primary',
    'create' => 'success',
    'edit' => 'warning',
    'delete' => 'danger',
    'admin' => 'primary',
];
@endphp

<x-ui.badge :variant="$map[$permission] ?? 'slate'" size="sm">{{ $slot->isEmpty() ? ucfirst($permission) : $slot }}</x-ui.badge>
