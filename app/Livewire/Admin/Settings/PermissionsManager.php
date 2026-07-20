<?php

namespace App\Livewire\Admin\Settings;

use App\Domain\Auth\Enums\UserRole;
use App\Domain\Auth\Services\PermissionService;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use App\Models\User;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class PermissionsManager extends Component
{
    use InteractsWithAdminLayout;

    public ?int $user_id = null;

    /** @var list<string> */
    public array $available = [
        'allow_item_discount',
        'allow_invoice_discount',
        'allow_price_edit',
        'allow_price2',
        'allow_price3',
        'allow_invoice_cancel',
        'allow_invoice_edit',
        'allow_customer_create',
    ];

    /** @var list<string> */
    public array $selected = [];

    public function mount(PermissionService $service): void
    {
        $service->ensurePermissionsExist($this->available);
        $this->user_id = null;
        $this->selected = [];
    }

    public function updatedUserId(): void
    {
        $this->loadUserPermissions();
    }

    protected function loadUserPermissions(): void
    {
        $user = $this->currentUser();
        if (! $user) {
            $this->selected = [];

            return;
        }

        $this->selected = $user->permissions()->pluck('key')->all();
    }

    protected function currentUser(): ?User
    {
        if (! $this->user_id) {
            return null;
        }

        return $this->visibleUsersQuery()->find($this->user_id);
    }

    public function permissionLabel(string $key): string
    {
        return match ($key) {
            'allow_item_discount' => 'Allow item discount',
            'allow_invoice_discount' => 'Allow invoice discount',
            'allow_price_edit' => 'Allow price edit',
            'allow_price2' => 'Allow Price 2',
            'allow_price3' => 'Allow Price 3',
            'allow_invoice_cancel' => 'Allow invoice cancel',
            'allow_invoice_edit' => 'Allow invoice edit',
            'allow_customer_create' => 'Allow customer create',
            default => ucwords(str_replace('_', ' ', $key)),
        };
    }

    public function save(PermissionService $service): void
    {
        $user = $this->currentUser();
        if (! $user) {
            $this->toast('Select a user first.');

            return;
        }

        if ($user->isSuperAdmin() && ! (Auth::user()?->isSuperAdmin() ?? false)) {
            abort(403);
        }

        $service->sync($user, $this->selected);
        $this->loadUserPermissions();
        $this->toast('Permissions saved for :name', ['name' => $user->name]);
    }

    public function render(): View
    {
        return $this->adminView('livewire.admin.settings.permissions-manager', [
            'users' => $this->visibleUsersQuery()->orderBy('name')->get(['id', 'name', 'email', 'role']),
            'labels' => collect($this->available)
                ->mapWithKeys(fn ($key) => [$key => $this->permissionLabel($key)])
                ->all(),
        ], 'Permissions');
    }

    protected function visibleUsersQuery()
    {
        return User::query()->when(
            ! (Auth::user()?->isSuperAdmin() ?? false),
            fn ($q) => $q->where('role', '!=', UserRole::SuperAdmin->value)
        );
    }
}
