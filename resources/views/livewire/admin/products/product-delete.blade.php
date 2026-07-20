<x-ui.confirmation-dialog name="product-delete" title="{{ __('Delete product?') }}" confirmLabel="{{ __('Delete') }}">
    <div class="space-y-2">
        <p>{{ __('Are you sure you want to delete this product?') }}</p>
    </div>
    <x-slot:footer>
        <x-ui.button variant="secondary" @click="$dispatch('close-modal', 'product-delete')">{{ __('Cancel') }}</x-ui.button>
        <x-ui.button tone="danger" wire:click="delete" wire:loading.attr="disabled">
            <x-ui.icon name="trash" class="w-4 h-4" /> {{ __('Delete') }}
        </x-ui.button>
    </x-slot:footer>
</x-ui.confirmation-dialog>
