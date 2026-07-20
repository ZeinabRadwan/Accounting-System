<?php

use App\Domain\Auth\Services\ProfilePhotoService;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;
use Livewire\WithFileUploads;
use Livewire\Volt\Component;

new class extends Component
{
    use WithFileUploads;

    public string $name = '';

    public string $email = '';

    /** @var mixed */
    public $profile_photo = null;

    public ?string $existing_profile_photo_url = null;

    public bool $remove_profile_photo = false;

    public function mount(): void
    {
        $user = Auth::user();
        $this->name = $user->name;
        $this->email = $user->email;
        $this->existing_profile_photo_url = $user->profile_photo_url;
    }

    public function updatedProfilePhoto(): void
    {
        $this->remove_profile_photo = false;
        $this->validate([
            'profile_photo' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ]);
    }

    public function removeProfilePhoto(): void
    {
        $this->profile_photo = null;
        $this->remove_profile_photo = true;
        $this->existing_profile_photo_url = null;
    }

    public function updateProfileInformation(ProfilePhotoService $photos): void
    {
        $user = Auth::user();

        $validated = $this->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($user->id)],
            'profile_photo' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ]);

        $user->fill([
            'name' => $validated['name'],
            'email' => $validated['email'],
        ]);

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        if ($this->remove_profile_photo && ! $this->profile_photo) {
            $photos->delete($user->profile_photo);
            $user->profile_photo = null;
        } elseif ($this->profile_photo) {
            $user->profile_photo = $photos->store($this->profile_photo, $user->profile_photo);
        }

        $user->save();

        $this->profile_photo = null;
        $this->remove_profile_photo = false;
        $this->existing_profile_photo_url = $user->fresh()->profile_photo_url;

        $this->dispatch('profile-updated', name: $user->name);
        $this->js(\App\Support\Toast::script(\App\Support\Toast::make('Profile updated successfully.')));
    }

    public function sendVerification(): void
    {
        $user = Auth::user();

        if ($user->hasVerifiedEmail()) {
            $this->redirectIntended(default: route('dashboard', absolute: false));

            return;
        }

        $user->sendEmailVerificationNotification();

        Session::flash('status', 'verification-link-sent');
    }
}; ?>

<section>
    <header class="mb-4">
        <h2 class="text-base font-semibold text-slate-900">{{ __('Profile Information') }}</h2>
        <p class="mt-1 text-sm text-slate-500">
            {{ __("Update your account's profile information and email address.") }}
        </p>
    </header>

    <form wire:submit="updateProfileInformation" class="space-y-4 max-w-xl">
        <x-ui.profile-photo-input
            wire:model="profile_photo"
            :name="$name !== '' ? $name : __('User')"
            :current-url="$existing_profile_photo_url"
            :preview-url="$profile_photo ? $profile_photo->temporaryUrl() : null"
            :show-remove="filled($existing_profile_photo_url) || filled($profile_photo)"
            :error="$errors->first('profile_photo')"
        />

        <x-ui.input
            label="{{ __('Name') }}"
            wire:model="name"
            id="name"
            name="name"
            type="text"
            required
            autofocus
            autocomplete="name"
            :error="$errors->first('name')"
        />

        <div>
            <x-ui.input
                label="{{ __('Email') }}"
                wire:model="email"
                id="email"
                name="email"
                type="email"
                required
                autocomplete="username"
                :error="$errors->first('email')"
            />

            @if (auth()->user() instanceof \Illuminate\Contracts\Auth\MustVerifyEmail && ! auth()->user()->hasVerifiedEmail())
                <div class="mt-2">
                    <p class="text-sm text-slate-700">
                        {{ __('Your email address is unverified.') }}
                        <button
                            type="button"
                            wire:click.prevent="sendVerification"
                            class="font-medium text-primary-600 hover:text-primary-700 underline"
                        >
                            {{ __('Click here to re-send the verification email.') }}
                        </button>
                    </p>

                    @if (session('status') === 'verification-link-sent')
                        <p class="mt-2 text-sm font-medium text-success-600">
                            {{ __('A new verification link has been sent to your email address.') }}
                        </p>
                    @endif
                </div>
            @endif
        </div>

        <div class="flex items-center justify-end gap-2 pt-2">
            <x-ui.button type="submit" wire:loading.attr="disabled">{{ __('Save Changes') }}</x-ui.button>
        </div>
    </form>
</section>
