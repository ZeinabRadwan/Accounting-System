@props([
    'name' => 'confirm',
    'title' => 'Are you sure?',
    'confirmLabel' => 'Confirm',
    'variant' => 'danger',
])

<x-ui.modal :name="$name" :title="$title" maxWidth="sm">
    <p class="text-sm text-slate-600">{{ $slot }}</p>
    <x-slot:footer>
        <x-ui.button variant="secondary" @click="$dispatch('close-modal', '{{ $name }}')">Cancel</x-ui.button>
        <x-ui.button :variant="$variant" @click="$dispatch('close-modal', '{{ $name }}'); $dispatch('confirmed', '{{ $name }}')">
            {{ $confirmLabel }}
        </x-ui.button>
    </x-slot:footer>
</x-ui.modal>
