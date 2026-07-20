<?php

use App\Livewire\Forms\LoginForm;
use Illuminate\Support\Facades\Session;
use Livewire\Attributes\Layout;
use Livewire\Volt\Component;

new #[Layout('layouts.auth')] class extends Component
{
    public LoginForm $form;

    public function login(): void
    {
        $this->validate();

        $this->form->authenticate();

        Session::regenerate();

        $role = auth()->user()?->role;
        $roleValue = $role instanceof \App\Domain\Auth\Enums\UserRole ? $role->value : $role;
        if (in_array($roleValue, ['super_admin', 'admin'], true)) {
            // Force staff admins to dashboard regardless of "intended" URL
            $this->redirect(route('admin.dashboard', absolute: false), navigate: true);
            return;
        }

        $this->redirectIntended(default: route('pos', absolute: false), navigate: true);
    }
}; ?>

<div>
    <div class="mb-6">
        <h2 class="text-2xl font-semibold text-slate-900 tracking-tight">{{ __('Welcome back') }}</h2>
        <p class="mt-1 text-sm text-slate-500">{{ __('Sign in to continue to DentalLink.') }}</p>
    </div>

    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form wire:submit="login" class="space-y-4">
        <x-ui.input
            label="{{ __('Email') }}"
            wire:model="form.email"
            id="email"
            type="email"
            name="email"
            required
            autofocus
            autocomplete="username"
            placeholder="admin@dentallink.co"
            :error="$errors->first('form.email')"
        />

        <div>
            <div class="flex items-center justify-between mb-1.5">
                <label class="block text-sm font-medium text-slate-700">{{ __('Password') }}</label>
                @if (Route::has('password.request'))
                    <a href="{{ route('password.request') }}" class="text-xs font-medium text-primary-600 hover:text-primary-700" wire:navigate>
                        {{ __('Forgot password?') }}
                    </a>
                @endif
            </div>
            <input
                wire:model="form.password"
                id="password"
                type="password"
                name="password"
                required
                autocomplete="current-password"
                class="block w-full rounded-xl border-slate-200 bg-white text-sm text-slate-800 shadow-sm placeholder:text-slate-400 ui-focus ui-transition"
            />
            @error('form.password')
                <p class="mt-1 text-xs text-danger-600">{{ $message }}</p>
            @enderror
        </div>

        <x-ui.checkbox wire:model="form.remember" name="remember" label="{{ __('Remember me') }}" />

        <x-ui.button type="submit" class="w-full" size="lg">
            {{ __('Sign in') }}
        </x-ui.button>
    </form>
</div>
