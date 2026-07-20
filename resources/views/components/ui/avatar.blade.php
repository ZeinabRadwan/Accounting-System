@props(['name' => 'User', 'size' => 'md', 'src' => null, 'user' => null])

@php
$sizes = [
    'sm' => 'w-8 h-8 text-xs',
    'md' => 'w-9 h-9 text-sm',
    'lg' => 'w-11 h-11 text-base',
];

if ($user) {
    $name = $user->name ?? $name;
    $src = $user->profile_photo_url ?? $src;
}

$displayName = trim((string) $name);
$parts = collect(preg_split('/\s+/u', $displayName) ?: [])
    ->filter(fn ($part) => $part !== '')
    ->values();

if ($parts->isEmpty()) {
    $initials = '?';
} else {
    $initials = $parts
        ->map(fn ($part) => mb_substr($part, 0, 1))
        ->take(2)
        ->implode('');
}

$sizeClass = $sizes[$size] ?? $sizes['md'];
@endphp

@if ($src)
    <img
        src="{{ $src }}"
        alt="{{ $displayName !== '' ? $displayName : __('User') }}"
        {{ $attributes->merge([
            'class' => 'inline-block rounded-full object-cover '.$sizeClass,
            'title' => $displayName !== '' ? $displayName : null,
        ]) }}
    />
@else
    <span {{ $attributes->merge([
        'class' => 'inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold '.$sizeClass,
        'title' => $displayName !== '' ? $displayName : null,
    ]) }}>
        {{ mb_strtoupper($initials) }}
    </span>
@endif
