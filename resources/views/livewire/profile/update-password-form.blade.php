<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;
use Livewire\Volt\Component;

new class extends Component
{
    public string $current_password = '';
    public string $password = '';
    public string $password_confirmation = '';

    public function updatePassword(): void
    {
        try {
            $validated = $this->validate([
                'current_password' => ['required', 'string', 'current_password'],
                'password' => ['required', 'string', Password::defaults(), 'confirmed'],
            ]);
        } catch (ValidationException $e) {
            $this->reset('current_password', 'password', 'password_confirmation');

            throw $e;
        }

        Auth::user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        $this->reset('current_password', 'password', 'password_confirmation');

        $this->dispatch('password-updated');
        $this->js('window.Alpine && Alpine.store("toast") && Alpine.store("toast").show('.json_encode(__('Password updated successfully.')).')');
    }
}; ?>

<section>
    <header class="mb-4">
        <h2 class="text-base font-semibold text-slate-900">{{ __('Update Password') }}</h2>
        <p class="mt-1 text-sm text-slate-500">
            {{ __('Ensure your account is using a long, random password to stay secure.') }}
        </p>
    </header>

    <form wire:submit="updatePassword" class="space-y-4 max-w-xl">
        <x-ui.input
            label="{{ __('Current Password') }}"
            wire:model="current_password"
            id="update_password_current_password"
            name="current_password"
            type="password"
            autocomplete="current-password"
            :error="$errors->first('current_password')"
        />

        <x-ui.input
            label="{{ __('New Password') }}"
            wire:model="password"
            id="update_password_password"
            name="password"
            type="password"
            autocomplete="new-password"
            :error="$errors->first('password')"
        />

        <x-ui.input
            label="{{ __('Confirm Password') }}"
            wire:model="password_confirmation"
            id="update_password_password_confirmation"
            name="password_confirmation"
            type="password"
            autocomplete="new-password"
            :error="$errors->first('password_confirmation')"
        />

        <div class="flex items-center justify-end gap-2 pt-2">
            <x-ui.button type="submit" wire:loading.attr="disabled">{{ __('Save Changes') }}</x-ui.button>
        </div>
    </form>
</section>
