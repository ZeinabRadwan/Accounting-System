<div>
    <x-ui.page-header title="{{ __('Settings') }}" subtitle="{{ __('Configure invoice, daily ops, and permissions.') }}" />

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <x-ui.settings-nav />

        <div class="lg:col-span-3 space-y-4">
            <x-ui.card>
                <h2 class="text-base font-semibold text-slate-900 mb-4">{{ __('User Permissions') }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="md:col-span-1">
                        <x-ui.select label="{{ __('User') }}" wire:model.live="user_id">
                            <option value="">{{ __('Select user...') }}</option>
                            @foreach ($users as $u)
                                <option value="{{ $u->id }}">
                                    {{ $u->name }} ({{ $u->email }})
                                    @if ($u->role)
                                        · {{ ($u->role instanceof \App\Domain\Auth\Enums\UserRole
                                            ? $u->role
                                            : \App\Domain\Auth\Enums\UserRole::tryFrom((string) $u->role))?->label()
                                            ?? ($u->role instanceof \BackedEnum ? $u->role->value : $u->role) }}
                                    @endif
                                </option>
                            @endforeach
                        </x-ui.select>
                    </div>
                    <div class="md:col-span-2">
                        <p class="block text-sm font-medium text-slate-700 mb-2">{{ __('Permissions') }}</p>
                        @if (! $user_id)
                            <p class="text-sm text-slate-500">{{ __('Select a user to edit permissions.') }}</p>
                        @else
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                @foreach ($available as $perm)
                                    <x-ui.checkbox
                                        :label="$labels[$perm] ?? $perm"
                                        value="{{ $perm }}"
                                        wire:model="selected"
                                    />
                                @endforeach
                            </div>
                        @endif
                    </div>
                </div>
                <div class="mt-6 flex justify-end">
                    <x-ui.button wire:click="save" wire:loading.attr="disabled" :disabled="! $user_id">{{ __('Save Permissions') }}</x-ui.button>
                </div>
            </x-ui.card>
        </div>
    </div>
</div>
