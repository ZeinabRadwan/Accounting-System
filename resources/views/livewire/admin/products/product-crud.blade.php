<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <x-ui.input label="{{ __('Display Name') }}" placeholder="{{ __('Product name') }}" wire:model.defer="display_name" />
    <x-ui.input label="{{ __('SKU') }}" placeholder="SKU-xxxx" wire:model.defer="sku" />
    <x-ui.select label="{{ __('Category') }}" wire:model.live="category_id" name="category_id">
        <option value="">{{ __('Select...') }}</option>
        @foreach($categories as $cat)
            <option value="{{ $cat->id }}">{{ $cat->name }}</option>
        @endforeach
    </x-ui.select>
    <x-ui.input label="{{ __('Base Unit') }}" placeholder="{{ __('Box') }}" wire:model.defer="base_unit" />
    <x-ui.currency-input label="{{ __('Price 1') }}" wire:model.defer="price1" />
    <x-ui.currency-input label="{{ __('Price 2') }}" wire:model.defer="price2" />
    <x-ui.currency-input label="{{ __('Price 3') }}" wire:model.defer="price3" />
</div>
<x-slot:footer>
    <x-ui.button variant="secondary" @click="$dispatch('close-modal', 'product-form')">{{ __('Cancel') }}</x-ui.button>
    <x-ui.button wire:click="save" wire:loading.attr="disabled">
        <x-ui.icon name="check" class="w-4 h-4" /> {{ __('Save') }}
    </x-ui.button>
</x-slot:footer>
