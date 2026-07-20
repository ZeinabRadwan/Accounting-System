<div>
    <x-ui.page-header title="{{ __('Settings') }}" subtitle="{{ __('Configure invoice, daily ops, and permissions.') }}">
        <x-ui.button variant="secondary" href="{{ route('notifications.index') }}">{{ __('View Notifications') }}</x-ui.button>
        <x-ui.button wire:click="save" wire:loading.attr="disabled">{{ __('Save') }}</x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <x-ui.settings-nav />

        <div class="lg:col-span-3 space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <x-ui.card>
                    <h3 class="text-sm font-semibold text-slate-900 mb-3">{{ __('Low Stock Threshold') }}</h3>
                    <x-ui.input
                        type="number"
                        step="1"
                        min="0"
                        wire:model="low_stock_threshold"
                        label="{{ __('Quantity') }}"
                        :error="$errors->first('low_stock_threshold')"
                    />
                    <p class="mt-2 text-xs text-slate-500">{{ __('Fallback only when a product has no minimum stock set. Product Minimum Stock is preferred.') }}</p>
                </x-ui.card>
                <x-ui.card>
                    <h3 class="text-sm font-semibold text-slate-900 mb-3">{{ __('Large Treasury Transaction Threshold') }}</h3>
                    <x-ui.input
                        type="number"
                        step="0.01"
                        min="0"
                        wire:model="large_treasury_threshold"
                        label="{{ __('Amount (EGP)') }}"
                        :error="$errors->first('large_treasury_threshold')"
                    />
                    <p class="mt-2 text-xs text-slate-500">{{ __('Notify Super Admin when a treasury transaction reaches this amount.') }}</p>
                </x-ui.card>
            </div>

            @foreach ($grouped as $module => $events)
                <x-ui.card>
                    <h3 class="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">{{ __($module) }}</h3>
                    <div class="space-y-3">
                        @foreach ($events as $event)
                            <label class="flex items-start gap-3 rounded-xl border border-slate-200 px-3 py-2.5 hover:bg-slate-50">
                                <input
                                    type="checkbox"
                                    class="mt-1 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                                    wire:model="events.{{ $event->value }}"
                                >
                                <span class="min-w-0">
                                    <span class="block text-sm font-medium text-slate-900">{{ __($event->label()) }}</span>
                                    <span class="block text-xs text-slate-500 mt-0.5">
                                        {{ __('Roles') }}:
                                        {{ collect($event->defaultRoles())->map(fn ($r) => __(str_replace('_', ' ', ucwords($r, '_'))) )->implode(', ') }}
                                        · {{ __('Type') }}: {{ __(ucfirst($event->defaultTone())) }}
                                    </span>
                                </span>
                            </label>
                        @endforeach
                    </div>
                </x-ui.card>
            @endforeach

            <div class="flex justify-end">
                <x-ui.button wire:click="save" wire:loading.attr="disabled">{{ __('Save Settings') }}</x-ui.button>
            </div>
        </div>
    </div>
</div>
