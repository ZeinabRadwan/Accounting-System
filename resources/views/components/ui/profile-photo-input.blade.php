@props([
    'name' => 'User',
    'label' => null,
    'currentUrl' => null,
    'previewUrl' => null,
    'error' => null,
    'showRemove' => false,
])

@php
    $label = $label ?? __('Profile Photo');
    $displaySrc = $previewUrl ?: $currentUrl;
@endphp

<div class="space-y-2">
    <p class="block text-sm font-medium text-slate-700">{{ $label }}</p>
    <div class="flex items-center gap-4">
        <div class="shrink-0">
            @if ($displaySrc)
                <img
                    src="{{ $displaySrc }}"
                    alt="{{ $name }}"
                    class="w-16 h-16 rounded-full object-cover border border-slate-200"
                />
            @else
                <x-ui.avatar :name="$name" size="lg" class="!w-16 !h-16 !text-base" />
            @endif
        </div>
        <div class="flex-1 min-w-0 space-y-2">
            <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                {{ $attributes->merge([
                    'class' => 'block w-full text-sm text-slate-600 file:me-3 file:rounded-lg file:border-0 file:bg-primary-50 file:px-3 file:py-2 file:text-sm file:font-medium file:text-primary-700 hover:file:bg-primary-100',
                ]) }}
            />
            <p class="text-xs text-slate-500">{{ __('JPG, JPEG, PNG, or WEBP. Max 2 MB.') }}</p>
            @if ($showRemove)
                <button
                    type="button"
                    class="text-xs font-medium text-danger-600 hover:text-danger-700"
                    wire:click="removeProfilePhoto"
                >
                    {{ __('Remove photo') }}
                </button>
            @endif
        </div>
    </div>
    @if ($error)
        <p class="text-xs text-danger-600">{{ $error }}</p>
    @endif
</div>
