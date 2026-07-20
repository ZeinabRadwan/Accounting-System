<div>
    <x-ui.page-header title="{{ __('Settings') }}" subtitle="{{ __('Configure invoice, daily ops, and permissions.') }}" />

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <x-ui.settings-nav />

        <div class="lg:col-span-3">
            <x-ui.card>
                <h2 class="text-base font-semibold text-slate-900 mb-4">{{ __('Daily Settings') }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
                    <x-ui.input
                        label="{{ __('Daily Sales Limit (EGP)') }}"
                        type="number"
                        step="0.01"
                        wire:model="daily_sales_limit"
                        :error="$errors->first('daily_sales_limit')"
                    />
                    <x-ui.input
                        label="{{ __('Invoice Prefix') }}"
                        wire:model="invoice_prefix"
                        :error="$errors->first('invoice_prefix')"
                    />
                    <x-ui.select
                        label="{{ __('Default Payment Method') }}"
                        wire:model="default_payment_method"
                        :error="$errors->first('default_payment_method')"
                    >
                        @foreach ($paymentMethods as $method)
                            <option value="{{ $method->value }}">{{ $method->label() }}</option>
                        @endforeach
                    </x-ui.select>
                </div>
                <div class="mt-6 flex justify-end">
                    <x-ui.button wire:click="save" wire:loading.attr="disabled">{{ __('Save Changes') }}</x-ui.button>
                </div>
            </x-ui.card>
        </div>
    </div>
</div>
