<div>
    <x-ui.page-header title="{{ __('Settings') }}" subtitle="{{ __('Configure invoice, daily ops, and permissions.') }}" />

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <x-ui.settings-nav />

        <div class="lg:col-span-3">
            <x-ui.card>
                <h2 class="text-base font-semibold text-slate-900 mb-4">{{ __('Invoice Settings') }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <x-ui.input label="{{ __('Company Name') }}" wire:model="store_name" :error="$errors->first('store_name')" />
                    <x-ui.input label="{{ __('Logo Path') }}" wire:model="logo_path" placeholder="/storage/logo.png" :error="$errors->first('logo_path')" />
                    <x-ui.input label="{{ __('Phone') }}" wire:model="phone" :error="$errors->first('phone')" />
                    <div class="md:col-span-2">
                        <x-ui.input label="{{ __('Address') }}" wire:model="address" :error="$errors->first('address')" />
                    </div>
                    <div class="md:col-span-2">
                        <x-ui.textarea label="{{ __('Receipt Header') }}" wire:model="receipt_header" :error="$errors->first('receipt_header')" />
                    </div>
                    <div class="md:col-span-2">
                        <x-ui.textarea label="{{ __('Receipt Footer') }}" wire:model="receipt_footer" :error="$errors->first('receipt_footer')" />
                    </div>
                </div>
                <div class="mt-6 flex justify-end gap-2">
                    <x-ui.button wire:click="save" wire:loading.attr="disabled">{{ __('Save Changes') }}</x-ui.button>
                </div>
            </x-ui.card>
        </div>
    </div>
</div>
