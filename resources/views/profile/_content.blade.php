<div>
    <x-ui.page-header
        title="{{ __('Profile') }}"
        subtitle="{{ __('Manage your account details and password.') }}"
    />

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div class="xl:col-span-2 space-y-4">
            <x-ui.card>
                <livewire:profile.update-profile-information-form />
            </x-ui.card>

            <x-ui.card>
                <livewire:profile.update-password-form />
            </x-ui.card>
        </div>

        <div class="space-y-4">
            <x-ui.card>
                <div class="flex items-center gap-3 mb-4">
                    <x-ui.avatar :user="auth()->user()" size="lg" />
                    <div class="min-w-0">
                        <p class="font-semibold text-slate-900 truncate">{{ auth()->user()->name }}</p>
                        <p class="text-sm text-slate-500 truncate">{{ auth()->user()->email }}</p>
                    </div>
                </div>
                <dl class="space-y-3 text-sm">
                    <div class="flex items-center justify-between gap-3">
                        <dt class="text-slate-500">{{ __('Role') }}</dt>
                        <dd class="font-medium text-slate-900">
                            @php
                                $role = auth()->user()->role;
                                $roleEnum = $role instanceof \App\Domain\Auth\Enums\UserRole
                                    ? $role
                                    : \App\Domain\Auth\Enums\UserRole::tryFrom((string) $role);
                                $roleLabel = $roleEnum?->label() ?? (is_string($role) ? $role : 'User');
                            @endphp
                            <x-ui.badge variant="primary">{{ __($roleLabel) }}</x-ui.badge>
                        </dd>
                    </div>
                    @if (auth()->user()->branch_id)
                        <div class="flex items-center justify-between gap-3">
                            <dt class="text-slate-500">{{ __('Branch') }}</dt>
                            <dd class="font-medium text-slate-900 text-end">
                                {{ auth()->user()->branch?->name ?? ('#'.auth()->user()->branch_id) }}
                            </dd>
                        </div>
                    @endif
                </dl>
            </x-ui.card>

            <x-ui.card class="border-danger-100">
                <livewire:profile.delete-user-form />
            </x-ui.card>
        </div>
    </div>
</div>
