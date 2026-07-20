<div>
    <x-ui.page-header title="{{ __('Users') }}" subtitle="{{ __('Manage Super Admin, Admin, and Sales accounts.') }}">
        <x-ui.button wire:click="startCreate">
            <x-ui.icon name="plus" class="w-4 h-4" /> {{ __('Add User') }}
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 {{ $canManageSuperAdmins ? 'xl:grid-cols-5' : 'xl:grid-cols-4' }} gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Total Users') }}" :value="(string) $totalUsers" icon="users" tone="primary" />
        @if ($canManageSuperAdmins)
            <x-ui.stat-card label="{{ __('Super Admins') }}" :value="(string) $superAdminCount" icon="sparkles" tone="success" />
        @endif
        <x-ui.stat-card label="{{ __('Admins') }}" :value="(string) $adminCount" icon="users" tone="warning" />
        <x-ui.stat-card label="{{ __('Sales') }}" :value="(string) $salesCount" icon="cash" tone="slate" />
        <x-ui.stat-card label="{{ __('Active') }}" :value="(string) $activeCount" icon="check" tone="slate" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[200px]">
            <x-ui.search placeholder="{{ __('Search users...') }}" wire:model.live.debounce.300ms="search" />
        </div>
        <div class="w-full sm:w-48">
            <x-ui.select wire:model.live="filter_role">
                <option value="">{{ __('All Roles') }}</option>
                @foreach ($roles as $roleOption)
                    <option value="{{ $roleOption->value }}">{{ __($roleOption->label()) }}</option>
                @endforeach
            </x-ui.select>
        </div>
        <div class="w-full sm:w-40">
            <x-ui.select wire:model.live="filter_status">
                <option value="">{{ __('All Status') }}</option>
                <option value="active">{{ __('Active') }}</option>
                <option value="inactive">{{ __('Inactive') }}</option>
            </x-ui.select>
        </div>
        <div class="w-full sm:w-40">
            <x-ui.select wire:model.live="filter_branch_id">
                <option value="">{{ __('All Branches') }}</option>
                @foreach ($branches as $branch)
                    <option value="{{ $branch->id }}">{{ $branch->name }}</option>
                @endforeach
            </x-ui.select>
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('User') }}</x-ui.th>
            <x-ui.th>{{ __('Role') }}</x-ui.th>
            <x-ui.th>{{ __('Branch') }}</x-ui.th>
            <x-ui.th>{{ __('Status') }}</x-ui.th>
            <x-ui.th>{{ __('Actions') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($users as $user)
                @php
                    $roleEnum = $user->role instanceof \App\Domain\Auth\Enums\UserRole
                        ? $user->role
                        : \App\Domain\Auth\Enums\UserRole::tryFrom((string) $user->role);
                    $roleLabel = $roleEnum?->label() ?? ucfirst((string) $user->role);
                    $badgeVariant = match ($roleEnum) {
                        \App\Domain\Auth\Enums\UserRole::SuperAdmin => 'primary',
                        \App\Domain\Auth\Enums\UserRole::Admin => 'warning',
                        default => 'slate',
                    };
                @endphp
                <tr class="hover:bg-slate-50/80" wire:key="user-{{ $user->id }}">
                    <x-ui.td>
                        <div class="flex items-center gap-3">
                            <x-ui.avatar :user="$user" size="sm" />
                            <div>
                                <p class="font-medium text-slate-900">{{ $user->name }}</p>
                                <p class="text-xs text-slate-500">{{ $user->email }}</p>
                            </div>
                        </div>
                    </x-ui.td>
                    <x-ui.td>
                        <x-ui.badge :variant="$badgeVariant">{{ __($roleLabel) }}</x-ui.badge>
                    </x-ui.td>
                    <x-ui.td>{{ $user->branch?->name ?? '—' }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$user->is_active ? 'active' : 'inactive'" /></x-ui.td>
                    <x-ui.td>
                        <x-ui.row-actions
                            :on-view="'$wire.startView('.$user->id.')'"
                            :on-edit="'$wire.startEdit('.$user->id.')'"
                            :on-delete="'$wire.prepareDelete('.$user->id.')'"
                        />
                    </x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="5" class="text-center text-slate-500 py-8">{{ __('No users found.') }}</x-ui.td>
                </tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.pagination
        :from="$users->firstItem() ?? 0"
        :to="$users->lastItem() ?? 0"
        :total="$users->total()"
        livewire
        :has-pages="$users->hasPages()"
        :on-first-page="$users->onFirstPage()"
        :has-more-pages="$users->hasMorePages()"
    />

    <x-ui.modal name="user-form" :title="$editingId ? __('Edit User') : __('Add User')" show-property="showUserForm">
        <div class="space-y-4">
            <x-ui.profile-photo-input
                wire:model="profile_photo"
                :name="$name !== '' ? $name : __('User')"
                :current-url="$existing_profile_photo_url"
                :preview-url="$photoPreviewUrl"
                :show-remove="filled($existing_profile_photo_url) || filled($photoPreviewUrl)"
                :error="$errors->first('profile_photo')"
            />
            <x-ui.input label="{{ __('Name') }}" placeholder="{{ __('Full name') }}" wire:model="name" :error="$errors->first('name')" />
            <x-ui.input label="{{ __('Email') }}" type="email" placeholder="user@dentallink.co" wire:model="email" :error="$errors->first('email')" />
            <x-ui.select label="{{ __('Role') }}" wire:model.live="role" :error="$errors->first('role')">
                @foreach ($roles as $roleOption)
                    <option value="{{ $roleOption->value }}">{{ __($roleOption->label()) }}</option>
                @endforeach
            </x-ui.select>
            @if ($role === 'sales')
                <x-ui.select label="{{ __('Branch') }}" wire:model="branch_id" :error="$errors->first('branch_id')">
                    <option value="">{{ __('Select branch') }}</option>
                    @foreach ($branches as $branch)
                        <option value="{{ $branch->id }}">{{ $branch->name }}</option>
                    @endforeach
                </x-ui.select>
            @endif
            <x-ui.input label="{{ __('Password') }} {{ $editingId ? __('(optional)') : '' }}" type="password" wire:model="password" :error="$errors->first('password')" />
            <x-ui.checkbox label="{{ __('Active') }}" wire:model="is_active" />
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="closeUserForm">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button wire:click="save" wire:loading.attr="disabled">{{ __('Save') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>

    <x-ui.drawer name="user-view" title="{{ __('User Details') }}" show-property="showUserDrawer">
        @if ($viewingUser)
            <div class="flex items-center gap-3 mb-5">
                <x-ui.avatar :user="$viewingUser" size="lg" />
                <div class="min-w-0">
                    <p class="font-semibold text-slate-900 truncate">{{ $viewingUser->name }}</p>
                    <p class="text-sm text-slate-500 truncate">{{ $viewingUser->email }}</p>
                </div>
            </div>
            <dl class="space-y-4 text-sm">
                <div>
                    <dt class="text-slate-500">{{ __('Role') }}</dt>
                    <dd class="mt-0.5">
                        {{ __(($viewingUser->role instanceof \App\Domain\Auth\Enums\UserRole
                            ? $viewingUser->role
                            : \App\Domain\Auth\Enums\UserRole::tryFrom((string) $viewingUser->role))?->label()
                            ?? (string) $viewingUser->role) }}
                    </dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Branch') }}</dt>
                    <dd class="mt-0.5">{{ $viewingUser->branch?->name ?? '—' }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Status') }}</dt>
                    <dd class="mt-1"><x-ui.status-badge :status="$viewingUser->is_active ? 'active' : 'inactive'" /></dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Created') }}</dt>
                    <dd class="mt-0.5">{{ $viewingUser->created_at?->format('Y-m-d H:i') }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Updated') }}</dt>
                    <dd class="mt-0.5">{{ $viewingUser->updated_at?->format('Y-m-d H:i') }}</dd>
                </div>
            </dl>
        @else
            <p class="text-sm text-slate-500">{{ __('User not found.') }}</p>
        @endif
    </x-ui.drawer>

    <x-ui.modal name="delete-user" title="{{ __('Delete User') }}" maxWidth="sm" show-property="showDeleteConfirm">
        <p class="text-sm text-slate-600">{{ __('Are you sure you want to delete this user?') }}</p>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="cancelDelete">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button variant="danger" wire:click="confirmDelete" wire:loading.attr="disabled">{{ __('Delete') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</div>
