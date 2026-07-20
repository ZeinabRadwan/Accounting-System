<?php

use App\Livewire\Forms\LoginForm;
use Illuminate\Support\Facades\Session;
use Livewire\Attributes\Layout;
use Livewire\Volt\Component;

new #[Layout('layouts.auth')] class extends Component
{
    public LoginForm $form;

    public ?float $user_lat = null;
    public ?float $user_lng = null;
    public bool $location_denied = false;

    public function login(): void
    {
        $this->validate();

        $this->form->authenticate();

        $user = auth()->user();

        if ($user->isSales()) {
            $branch = $user->branch;

            if ($branch && $branch->hasGeofence()) {
                if ($this->location_denied) {
                    auth()->logout();
                    Session::invalidate();
                    Session::regenerateToken();
                    throw \Illuminate\Validation\ValidationException::withMessages([
                        'form.email' => __('Location access is required for Sales users. Please allow location access and try again.'),
                    ]);
                }

                if ($this->user_lat === null || $this->user_lng === null) {
                    auth()->logout();
                    Session::invalidate();
                    Session::regenerateToken();
                    throw \Illuminate\Validation\ValidationException::withMessages([
                        'form.email' => __('Unable to determine your location. Please allow location access and try again.'),
                    ]);
                }

                if (! $branch->isWithinGeofence($this->user_lat, $this->user_lng)) {
                    auth()->logout();
                    Session::invalidate();
                    Session::regenerateToken();
                    throw \Illuminate\Validation\ValidationException::withMessages([
                        'form.email' => __('You are outside your assigned branch\'s allowed location.'),
                    ]);
                }
            }
        }

        Session::regenerate();

        $role = $user->role;
        $roleValue = $role instanceof \App\Domain\Auth\Enums\UserRole ? $role->value : $role;
        if (in_array($roleValue, ['super_admin', 'admin'], true)) {
            $this->redirect(route('admin.dashboard', absolute: false), navigate: true);
            return;
        }

        $this->redirectIntended(default: route('pos', absolute: false), navigate: true);
    }
}; ?>

<div
    x-data="{
        gettingLocation: false,
        locationReady: false,
        locationError: null,
        getLocation() {
            if (!navigator.geolocation) {
                this.locationError = '{{ __('Geolocation is not supported by your browser.') }}';
                return;
            }
            this.gettingLocation = true;
            this.locationError = null;
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    $wire.user_lat = pos.coords.latitude;
                    $wire.user_lng = pos.coords.longitude;
                    $wire.location_denied = false;
                    this.locationReady = true;
                    this.gettingLocation = false;
                },
                (err) => {
                    this.gettingLocation = false;
                    if (err.code === 1) {
                        $wire.location_denied = true;
                        this.locationError = '{{ __('Location access denied. Sales users need location access to sign in.') }}';
                    } else {
                        this.locationError = '{{ __('Unable to get your location. Please try again.') }}';
                    }
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
            );
        }
    }"
    x-init="getLocation()"
>
    <div class="mb-6">
        <h2 class="text-2xl font-semibold text-slate-900 tracking-tight">{{ __('Welcome back') }}</h2>
        <p class="mt-1 text-sm text-slate-500">{{ __('Sign in to continue to DentalLink.') }}</p>
    </div>

    <x-auth-session-status class="mb-4" :status="session('status')" />

    <template x-if="locationError">
        <div class="mb-4 rounded-xl border border-warning-200 bg-warning-50 p-3">
            <p class="text-sm text-warning-800" x-text="locationError"></p>
            <button type="button" @click="getLocation()" class="mt-1 text-xs font-medium text-primary-600 hover:text-primary-700">
                {{ __('Retry') }}
            </button>
        </div>
    </template>

    <template x-if="gettingLocation">
        <div class="mb-4 flex items-center gap-2 text-sm text-slate-500">
            <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
            {{ __('Getting your location...') }}
        </div>
    </template>

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
