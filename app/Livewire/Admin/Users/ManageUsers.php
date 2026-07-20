<?php

namespace App\Livewire\Admin\Users;

use App\Domain\Auth\Enums\UserRole;
use App\Domain\Auth\Services\ProfilePhotoService;
use App\Domain\Branch\Models\Branch;
use App\Domain\Notifications\Services\SystemNotifier;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use App\Models\User;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Livewire\Component;
use Livewire\WithFileUploads;
use Livewire\WithPagination;

class ManageUsers extends Component
{
    use InteractsWithAdminLayout;
    use WithFileUploads;
    use WithPagination;

    public string $search = '';
    public string $filter_role = '';
    public string $filter_status = '';
    public string $filter_branch_id = '';

    public bool $showUserForm = false;
    public bool $showUserDrawer = false;
    public bool $showDeleteConfirm = false;

    public ?int $editingId = null;
    public ?int $viewingId = null;
    public ?int $deletingId = null;

    public string $name = '';
    public string $email = '';
    public string $password = '';
    public string $role = 'sales';
    public ?int $branch_id = null;
    public bool $is_active = true;

    /** @var mixed */
    public $profile_photo = null;

    public ?string $existing_profile_photo_url = null;

    public bool $remove_profile_photo = false;

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function updatedFilterRole(): void
    {
        if (! $this->canManageSuperAdmins() && $this->filter_role === UserRole::SuperAdmin->value) {
            $this->filter_role = '';
        }

        $this->resetPage();
    }

    public function updatedFilterStatus(): void
    {
        $this->resetPage();
    }

    public function updatedFilterBranchId(): void
    {
        $this->resetPage();
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

    public function startCreate(): void
    {
        $this->resetForm();
        $this->showUserForm = true;
    }

    public function startEdit(int $id): void
    {
        $user = $this->findManagedUserOrAbort($id);

        $this->editingId = $user->id;
        $this->name = $user->name;
        $this->email = $user->email;
        $this->password = '';
        $this->role = $user->role instanceof UserRole ? $user->role->value : (string) $user->role;
        $this->branch_id = $user->branch_id;
        $this->is_active = (bool) $user->is_active;
        $this->profile_photo = null;
        $this->existing_profile_photo_url = $user->profile_photo_url;
        $this->remove_profile_photo = false;
        $this->resetErrorBag();
        $this->showUserForm = true;
    }

    public function startView(int $id): void
    {
        $this->findManagedUserOrAbort($id);
        $this->viewingId = $id;
        $this->showUserDrawer = true;
    }

    public function closeUserForm(): void
    {
        $this->showUserForm = false;
        $this->resetForm();
    }

    public function save(ProfilePhotoService $photos): void
    {
        $assignableRoles = $this->assignableRoleValues();

        $rules = [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', Rule::unique('users', 'email')->ignore($this->editingId)],
            'role' => ['required', Rule::in($assignableRoles)],
            'branch_id' => [$this->role === UserRole::Sales->value ? 'required' : 'nullable', 'integer', 'exists:branches,id'],
            'is_active' => ['boolean'],
            'password' => $this->editingId
                ? ['nullable', 'string', 'min:8']
                : ['required', 'string', 'min:8'],
            'profile_photo' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ];

        $validated = $this->validate($rules);

        if ($validated['role'] === UserRole::SuperAdmin->value && ! $this->canManageSuperAdmins()) {
            abort(403);
        }

        if ($validated['role'] !== UserRole::Sales->value) {
            $validated['branch_id'] = null;
        }

        if ($this->editingId) {
            $user = $this->findManagedUserOrAbort($this->editingId);
            $oldRole = $user->role instanceof UserRole ? $user->role->value : (string) $user->role;

            $user->fill([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'role' => $validated['role'],
                'branch_id' => $validated['branch_id'] ?? null,
                'is_active' => $validated['is_active'],
            ]);
            if (! empty($validated['password'])) {
                $user->password = Hash::make($validated['password']);
            }

            if ($this->remove_profile_photo && ! $this->profile_photo) {
                $photos->delete($user->profile_photo);
                $user->profile_photo = null;
            } elseif ($this->profile_photo) {
                $user->profile_photo = $photos->store($this->profile_photo, $user->profile_photo);
            }

            $user->save();

            if ($oldRole !== $validated['role']) {
                app(SystemNotifier::class)->userRoleChanged($user, $oldRole, $validated['role']);
            }

            $message = 'User updated successfully.';
        } else {
            $path = $this->profile_photo
                ? $photos->store($this->profile_photo)
                : null;

            $user = User::create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'password' => Hash::make($validated['password']),
                'role' => $validated['role'],
                'branch_id' => $validated['branch_id'] ?? null,
                'is_active' => $validated['is_active'],
                'profile_photo' => $path,
            ]);

            app(SystemNotifier::class)->userCreated($user);
            $message = 'User created successfully.';
        }

        $this->showUserForm = false;
        $this->resetForm();
        $this->toast($message);
    }

    public function prepareDelete(int $id): void
    {
        $this->findManagedUserOrAbort($id);
        $this->deletingId = $id;
        $this->showDeleteConfirm = true;
    }

    public function cancelDelete(): void
    {
        $this->deletingId = null;
        $this->showDeleteConfirm = false;
    }

    public function confirmDelete(): void
    {
        if (! $this->deletingId) {
            return;
        }

        $user = $this->findManagedUserOrAbort($this->deletingId);

        if ((int) $user->id === (int) Auth::id()) {
            $this->showDeleteConfirm = false;
            $this->deletingId = null;
            $this->toastWarning('You cannot delete your own account.');

            return;
        }

        app(SystemNotifier::class)->userDeleted($user);
        $user->delete();

        if ($this->viewingId === $this->deletingId) {
            $this->showUserDrawer = false;
            $this->viewingId = null;
        }

        $this->deletingId = null;
        $this->showDeleteConfirm = false;
        $this->toast('User deleted successfully.');
    }

    protected function resetForm(): void
    {
        $this->editingId = null;
        $this->name = '';
        $this->email = '';
        $this->password = '';
        $this->role = UserRole::Sales->value;
        $this->branch_id = null;
        $this->is_active = true;
        $this->profile_photo = null;
        $this->existing_profile_photo_url = null;
        $this->remove_profile_photo = false;
        $this->resetErrorBag();
    }

    public function render(): View
    {
        if (! $this->canManageSuperAdmins() && $this->filter_role === UserRole::SuperAdmin->value) {
            $this->filter_role = '';
        }

        $usersQuery = $this->managedUsersQuery()
            ->with('branch:id,name')
            ->when($this->search !== '', function ($q) {
                $term = trim($this->search);
                $q->where(function ($qq) use ($term) {
                    $qq->where('name', 'like', "%{$term}%")
                        ->orWhere('email', 'like', "%{$term}%");
                });
            })
            ->when($this->filter_role !== '', fn ($q) => $q->where('role', $this->filter_role))
            ->when($this->filter_status === 'active', fn ($q) => $q->where('is_active', true))
            ->when($this->filter_status === 'inactive', fn ($q) => $q->where('is_active', false))
            ->when($this->filter_branch_id !== '', fn ($q) => $q->where('branch_id', (int) $this->filter_branch_id))
            ->orderBy('name');

        $users = $usersQuery->paginate(15);

        $viewingUser = null;
        if ($this->viewingId) {
            $viewingUser = $this->managedUsersQuery()
                ->with('branch:id,name')
                ->find($this->viewingId);

            if (! $viewingUser) {
                $this->viewingId = null;
                $this->showUserDrawer = false;
            }
        }

        $statsBase = $this->managedUsersQuery();

        return $this->adminView('livewire.admin.users.manage-users', [
            'users' => $users,
            'branches' => Branch::orderBy('name')->get(['id', 'name']),
            'roles' => $this->assignableRoles(),
            'canManageSuperAdmins' => $this->canManageSuperAdmins(),
            'viewingUser' => $viewingUser,
            'totalUsers' => (clone $statsBase)->count(),
            'superAdminCount' => $this->canManageSuperAdmins()
                ? User::where('role', UserRole::SuperAdmin)->count()
                : 0,
            'adminCount' => (clone $statsBase)->where('role', UserRole::Admin)->count(),
            'salesCount' => (clone $statsBase)->where('role', UserRole::Sales)->count(),
            'activeCount' => (clone $statsBase)->where('is_active', true)->count(),
            'photoPreviewUrl' => $this->photoPreviewUrl(),
        ], 'Users');
    }

    protected function photoPreviewUrl(): ?string
    {
        try {
            return $this->profile_photo?->temporaryUrl();
        } catch (\Throwable) {
            return null;
        }
    }

    protected function canManageSuperAdmins(): bool
    {
        return Auth::user()?->isSuperAdmin() ?? false;
    }

    /**
     * @return list<UserRole>
     */
    protected function assignableRoles(): array
    {
        if ($this->canManageSuperAdmins()) {
            return UserRole::cases();
        }

        return array_values(array_filter(
            UserRole::cases(),
            fn (UserRole $role) => $role !== UserRole::SuperAdmin
        ));
    }

    /**
     * @return list<string>
     */
    protected function assignableRoleValues(): array
    {
        return array_map(fn (UserRole $role) => $role->value, $this->assignableRoles());
    }

    protected function managedUsersQuery(): Builder
    {
        return User::query()->when(
            ! $this->canManageSuperAdmins(),
            fn (Builder $q) => $q->where('role', '!=', UserRole::SuperAdmin->value)
        );
    }

    protected function findManagedUserOrAbort(int $id): User
    {
        $user = $this->managedUsersQuery()->with('branch:id,name')->find($id);

        if (! $user) {
            abort(403);
        }

        return $user;
    }
}
