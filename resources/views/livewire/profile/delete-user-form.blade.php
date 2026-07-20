<?php

use App\Livewire\Actions\Logout;
use Illuminate\Support\Facades\Auth;
use Livewire\Volt\Component;

new class extends Component
{
    public string $password = '';

    public bool $showDeleteConfirm = false;

    public function prepareDelete(): void
    {
        $this->resetErrorBag();
        $this->password = '';
        $this->showDeleteConfirm = true;
    }

    public function cancelDelete(): void
    {
        $this->showDeleteConfirm = false;
        $this->password = '';
        $this->resetErrorBag();
    }

    public function deleteUser(Logout $logout): void
    {
        $this->validate([
            'password' => ['required', 'string', 'current_password'],
        ]);

        tap(Auth::user(), $logout(...))->delete();

        $this->redirect('/', navigate: true);
    }
}; ?>

<section>
    <header class="mb-4">
        <h2 class="text-base font-semibold text-danger-700">{{ __('Delete Account') }}</h2>
        <p class="mt-1 text-sm text-slate-500">
            {{ __('Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.') }}
        </p>
    </header>

    <x-ui.button variant="danger" wire:click="prepareDelete">
        {{ __('Delete Account') }}
    </x-ui.button>

    <x-ui.modal
        name="confirm-user-deletion"
        title="{{ __('Delete Account') }}"
        maxWidth="sm"
        show-property="showDeleteConfirm"
    >
        <p class="text-sm text-slate-600 mb-4">
            {{ __('Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.') }}
        </p>

        <x-ui.input
            label="{{ __('Password') }}"
            wire:model="password"
            id="password"
            name="password"
            type="password"
            placeholder="{{ __('Password') }}"
            :error="$errors->first('password')"
        />

        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="cancelDelete">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button variant="danger" wire:click="deleteUser" wire:loading.attr="disabled">
                {{ __('Delete Account') }}
            </x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</section>
