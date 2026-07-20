<div>
    <x-ui.page-header title="{{ __('Branches') }}" subtitle="{{ __('Manage store locations and status.') }}">
        <x-ui.button wire:click="startCreate">
            <x-ui.icon name="plus" class="w-4 h-4" /> {{ __('Add Branch') }}
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Total Branches') }}" :value="(string) $totalBranches" icon="building" tone="primary" />
        <x-ui.stat-card label="{{ __('Active') }}" :value="(string) $activeBranches" icon="check" tone="success" />
        <x-ui.stat-card label="{{ __('Inactive') }}" :value="(string) $inactiveBranches" icon="x" tone="slate" />
        <x-ui.stat-card label="{{ __('Users Assigned') }}" :value="(string) $usersAssigned" icon="users" tone="warning" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[200px]">
            <x-ui.search placeholder="{{ __('Search branches...') }}" wire:model.live.debounce.300ms="search" />
        </div>
        <div class="w-full sm:w-40">
            <x-ui.select wire:model.live="filter_status">
                <option value="">{{ __('All Status') }}</option>
                <option value="active">{{ __('Active') }}</option>
                <option value="inactive">{{ __('Inactive') }}</option>
            </x-ui.select>
        </div>
    </x-ui.filter-bar>

    @if ($branches->isEmpty())
        <x-ui.card>
            <x-ui.empty-state
                title="{{ __('No branches found.') }}"
                description="{{ __('Try adjusting your filters or add a new branch.') }}"
                icon="building"
            >
                <x-ui.button wire:click="startCreate">
                    <x-ui.icon name="plus" class="w-4 h-4" /> {{ __('Add Branch') }}
                </x-ui.button>
            </x-ui.empty-state>
        </x-ui.card>
    @else
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            @foreach ($branches as $branch)
                @php
                    $previewUsers = $branch->users->take(4);
                    $extraUsers = max(0, (int) $branch->users_count - $previewUsers->count());
                    $inventoryQty = (float) ($branch->inventory_qty ?? 0);
                @endphp
                <x-ui.card wire:key="branch-{{ $branch->id }}" class="flex flex-col !p-0 overflow-hidden">
                    <div class="p-5 flex-1">
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex items-start gap-3 min-w-0">
                                <div class="shrink-0 rounded-xl bg-primary-50 text-primary-600 p-2.5">
                                    <x-ui.icon name="building" class="w-5 h-5" />
                                </div>
                                <div class="min-w-0">
                                    <h3 class="text-base font-semibold text-slate-900 truncate">{{ $branch->name }}</h3>
                                    <p class="mt-0.5 text-xs font-medium text-slate-500 uppercase tracking-wide">
                                        {{ __('Code') }}: {{ $branch->code }}
                                    </p>
                                </div>
                            </div>
                            <x-ui.status-badge :status="$branch->is_active ? 'active' : 'inactive'" />
                        </div>

                        <div class="mt-4 space-y-2 text-sm text-slate-600">
                            <div class="flex items-start gap-2">
                                <x-ui.icon name="map-pin" class="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
                                <span class="leading-snug">{{ $branch->address ?: __('No address set') }}</span>
                            </div>
                        </div>

                        <div class="mt-4 grid grid-cols-2 gap-2">
                            <div class="rounded-xl bg-slate-50 border border-slate-100 px-3 py-2.5">
                                <p class="text-[11px] font-medium uppercase tracking-wide text-slate-500">{{ __('Products') }}</p>
                                <p class="mt-1 text-lg font-semibold text-slate-900">{{ number_format((int) $branch->products_count) }}</p>
                            </div>
                            <div class="rounded-xl bg-slate-50 border border-slate-100 px-3 py-2.5">
                                <p class="text-[11px] font-medium uppercase tracking-wide text-slate-500">{{ __('Inventory Qty') }}</p>
                                <p class="mt-1 text-lg font-semibold text-slate-900">{{ rtrim(rtrim(number_format($inventoryQty, 2, '.', ''), '0'), '.') }}</p>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center justify-between gap-2 mb-2">
                                <p class="text-xs font-medium uppercase tracking-wide text-slate-500">{{ __('Assigned Users') }}</p>
                                <span class="text-xs text-slate-500">{{ (int) $branch->users_count }}</span>
                            </div>
                            @if ($previewUsers->isEmpty())
                                <p class="text-sm text-slate-400">{{ __('No users assigned') }}</p>
                            @else
                                <div class="flex items-center">
                                    <div class="flex -space-x-2 rtl:space-x-reverse">
                                        @foreach ($previewUsers as $user)
                                            <x-ui.avatar
                                                :user="$user"
                                                size="sm"
                                                class="ring-2 ring-white"
                                            />
                                        @endforeach
                                    </div>
                                    @if ($extraUsers > 0)
                                        <span class="ms-2 inline-flex items-center justify-center rounded-full bg-primary-50 text-primary-700 border border-primary-100 min-w-8 h-8 px-2 text-xs font-semibold">
                                            +{{ $extraUsers }}
                                        </span>
                                    @endif
                                </div>
                            @endif
                        </div>
                    </div>

                    <div class="border-t border-slate-100 px-4 py-3 bg-slate-50/60 flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="text-xs text-slate-500">{{ __('Actions') }}</span>
                            <button
                                type="button"
                                wire:click="openLocationSettings({{ $branch->id }})"
                                class="inline-flex items-center gap-1 text-xs font-medium text-primary-600 hover:text-primary-700"
                                title="{{ __('Location Settings') }}"
                            >
                                <x-ui.icon name="map-pin" class="w-3.5 h-3.5" />
                                @if ($branch->latitude && $branch->longitude && $branch->allowed_radius)
                                    <span class="w-1.5 h-1.5 rounded-full bg-success-500"></span>
                                @endif
                            </button>
                        </div>
                        <x-ui.row-actions
                            :on-view="'$wire.startView('.$branch->id.')'"
                            :on-edit="'$wire.startEdit('.$branch->id.')'"
                            :on-delete="'$wire.prepareDelete('.$branch->id.')'"
                        />
                    </div>
                </x-ui.card>
            @endforeach
        </div>

        <div class="mt-4">
            <x-ui.pagination
                :from="$branches->firstItem() ?? 0"
                :to="$branches->lastItem() ?? 0"
                :total="$branches->total()"
                livewire
                :has-pages="$branches->hasPages()"
                :on-first-page="$branches->onFirstPage()"
                :has-more-pages="$branches->hasMorePages()"
            />
        </div>
    @endif

    <x-ui.modal name="branch-form" :title="$editingId ? __('Edit Branch') : __('Add Branch')" show-property="showBranchForm">
        <div class="space-y-4">
            <x-ui.input label="{{ __('Name') }}" placeholder="{{ __('Branch name') }}" wire:model="name" :error="$errors->first('name')" />
            <x-ui.input label="{{ __('Code') }}" placeholder="BR-004" wire:model="code" :error="$errors->first('code')" />
            <x-ui.input label="{{ __('Address') }}" placeholder="{{ __('Street, city...') }}" wire:model="address" :error="$errors->first('address')" />
            <x-ui.checkbox label="{{ __('Active') }}" wire:model="is_active" />
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="closeBranchForm">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button wire:click="save" wire:loading.attr="disabled">{{ __('Save') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>

    <x-ui.drawer name="branch-view" title="{{ __('Branch Details') }}" show-property="showBranchDrawer">
        @if ($viewingBranch)
            <div class="space-y-6 text-sm">
                <div class="flex items-start gap-3">
                    <div class="rounded-xl bg-primary-50 text-primary-600 p-2.5">
                        <x-ui.icon name="building" class="w-5 h-5" />
                    </div>
                    <div class="min-w-0 flex-1">
                        <div class="flex items-start justify-between gap-2">
                            <h3 class="text-base font-semibold text-slate-900">{{ $viewingBranch->name }}</h3>
                            <x-ui.status-badge :status="$viewingBranch->is_active ? 'active' : 'inactive'" />
                        </div>
                        <p class="mt-0.5 text-xs font-medium text-slate-500 uppercase tracking-wide">
                            {{ __('Code') }}: {{ $viewingBranch->code }}
                        </p>
                    </div>
                </div>

                <dl class="space-y-4">
                    <div>
                        <dt class="text-slate-500">{{ __('Address') }}</dt>
                        <dd class="mt-0.5 flex items-start gap-2 text-slate-800">
                            <x-ui.icon name="map-pin" class="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
                            <span>{{ $viewingBranch->address ?: __('No address set') }}</span>
                        </dd>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <dt class="text-slate-500">{{ __('Created') }}</dt>
                            <dd class="mt-0.5">{{ $viewingBranch->created_at?->format('Y-m-d H:i') }}</dd>
                        </div>
                        <div>
                            <dt class="text-slate-500">{{ __('Updated') }}</dt>
                            <dd class="mt-0.5">{{ $viewingBranch->updated_at?->format('Y-m-d H:i') }}</dd>
                        </div>
                    </div>
                </dl>

                <div>
                    <h4 class="text-sm font-semibold text-slate-900 mb-3">{{ __('Inventory Summary') }}</h4>
                    <div class="grid grid-cols-2 gap-2">
                        <div class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                            <p class="text-[11px] font-medium uppercase tracking-wide text-slate-500">{{ __('Products') }}</p>
                            <p class="mt-1 text-lg font-semibold text-slate-900">{{ number_format((int) $viewingBranch->products_count) }}</p>
                        </div>
                        <div class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                            <p class="text-[11px] font-medium uppercase tracking-wide text-slate-500">{{ __('Inventory Qty') }}</p>
                            <p class="mt-1 text-lg font-semibold text-slate-900">
                                {{ rtrim(rtrim(number_format((float) ($viewingBranch->inventory_qty ?? 0), 2, '.', ''), '0'), '.') }}
                            </p>
                        </div>
                        <div class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                            <p class="text-[11px] font-medium uppercase tracking-wide text-slate-500">{{ __('Low Stock') }}</p>
                            <p class="mt-1 text-lg font-semibold text-warning-700">{{ number_format((int) ($viewingBranch->low_stock_count ?? 0)) }}</p>
                        </div>
                        <div class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                            <p class="text-[11px] font-medium uppercase tracking-wide text-slate-500">{{ __('Out of Stock') }}</p>
                            <p class="mt-1 text-lg font-semibold text-danger-700">{{ number_format((int) ($viewingBranch->out_of_stock_count ?? 0)) }}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between mb-3">
                        <h4 class="text-sm font-semibold text-slate-900">{{ __('Assigned Users') }}</h4>
                        <span class="text-xs text-slate-500">{{ (int) $viewingBranch->users_count }}</span>
                    </div>
                    @if ($viewingBranch->users->isEmpty())
                        <p class="text-sm text-slate-400">{{ __('No users assigned') }}</p>
                    @else
                        <ul class="divide-y divide-slate-100 rounded-xl border border-slate-200 overflow-hidden">
                            @foreach ($viewingBranch->users as $user)
                                @php
                                    $roleEnum = $user->role instanceof \App\Domain\Auth\Enums\UserRole
                                        ? $user->role
                                        : \App\Domain\Auth\Enums\UserRole::tryFrom((string) $user->role);
                                    $roleLabel = $roleEnum?->label() ?? (string) $user->role;
                                @endphp
                                <li class="flex items-center gap-3 px-3 py-2.5 bg-white">
                                    <x-ui.avatar :user="$user" size="sm" />
                                    <div class="min-w-0 flex-1">
                                        <p class="font-medium text-slate-900 truncate">{{ $user->name }}</p>
                                        <p class="text-xs text-slate-500 truncate">{{ $user->email }}</p>
                                    </div>
                                    <div class="flex flex-col items-end gap-1 shrink-0">
                                        <x-ui.badge :variant="$roleEnum === \App\Domain\Auth\Enums\UserRole::Sales ? 'warning' : 'primary'" size="sm">
                                            {{ __($roleLabel) }}
                                        </x-ui.badge>
                                        <x-ui.status-badge :status="$user->is_active ? 'active' : 'inactive'" />
                                    </div>
                                </li>
                            @endforeach
                        </ul>
                    @endif
                </div>
            </div>
        @else
            <p class="text-sm text-slate-500">{{ __('Branch not found.') }}</p>
        @endif
    </x-ui.drawer>

    {{-- Location Settings Modal --}}
    <x-ui.modal name="location-settings" :title="__('Location Settings')" maxWidth="2xl" show-property="showLocationSettings">
        <div
            x-data="{
                lat: @entangle('geo_latitude'),
                lng: @entangle('geo_longitude'),
                radius: @entangle('geo_allowed_radius'),
                map: null,
                marker: null,
                circle: null,
                loaded: false,
                initMap() {
                    if (this.loaded) return;
                    this.loaded = true;

                    this.$nextTick(() => {
                        const el = this.$refs.leafletMap;
                        if (!el) return;

                        const startLat = this.lat ? parseFloat(this.lat) : 30.0444;
                        const startLng = this.lng ? parseFloat(this.lng) : 31.2357;
                        const startZoom = this.lat ? 15 : 6;

                        this.map = L.map(el).setView([startLat, startLng], startZoom);
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; OpenStreetMap'
                        }).addTo(this.map);

                        if (this.lat && this.lng) {
                            this.placeMarker(parseFloat(this.lat), parseFloat(this.lng));
                        }

                        this.map.on('click', (e) => {
                            this.lat = e.latlng.lat.toFixed(7);
                            this.lng = e.latlng.lng.toFixed(7);
                            this.placeMarker(e.latlng.lat, e.latlng.lng);
                        });

                        setTimeout(() => this.map.invalidateSize(), 200);
                    });
                },
                placeMarker(lat, lng) {
                    if (this.marker) this.marker.setLatLng([lat, lng]);
                    else this.marker = L.marker([lat, lng]).addTo(this.map);

                    this.updateCircle(lat, lng);
                    this.map.setView([lat, lng], Math.max(this.map.getZoom(), 14));
                },
                updateCircle(lat, lng) {
                    const r = parseInt(this.radius) || 200;
                    if (this.circle) {
                        this.circle.setLatLng([lat, lng]);
                        this.circle.setRadius(r);
                    } else {
                        this.circle = L.circle([lat, lng], {
                            radius: r,
                            color: '#3b82f6',
                            fillColor: '#3b82f6',
                            fillOpacity: 0.15,
                            weight: 2,
                        }).addTo(this.map);
                    }
                }
            }"
            x-init="$watch('radius', () => { if (marker) updateCircle(parseFloat(lat), parseFloat(lng)); })"
            x-effect="if ($wire.showLocationSettings) { $nextTick(() => initMap()); }"
        >
            <div class="space-y-4">
                <p class="text-sm text-slate-600">{{ __('Click on the map to set the branch location. Sales users will only be able to use the system within the allowed radius.') }}</p>

                <div x-ref="leafletMap" class="w-full h-72 rounded-xl border border-slate-200 bg-slate-100 z-0"></div>

                <div class="grid grid-cols-3 gap-3">
                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-1">{{ __('Latitude') }}</label>
                        <input type="text" x-model="lat" wire:model="geo_latitude" readonly
                            class="block w-full rounded-xl border-slate-200 bg-slate-50 text-sm text-slate-800 shadow-sm">
                        @error('geo_latitude') <p class="mt-1 text-xs text-danger-600">{{ $message }}</p> @enderror
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-1">{{ __('Longitude') }}</label>
                        <input type="text" x-model="lng" wire:model="geo_longitude" readonly
                            class="block w-full rounded-xl border-slate-200 bg-slate-50 text-sm text-slate-800 shadow-sm">
                        @error('geo_longitude') <p class="mt-1 text-xs text-danger-600">{{ $message }}</p> @enderror
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-1">{{ __('Radius (m)') }}</label>
                        <input type="number" x-model.number="radius" wire:model="geo_allowed_radius" min="50" max="50000" step="50"
                            class="block w-full rounded-xl border-slate-200 bg-white text-sm text-slate-800 shadow-sm ui-focus">
                        @error('geo_allowed_radius') <p class="mt-1 text-xs text-danger-600">{{ $message }}</p> @enderror
                    </div>
                </div>
            </div>
        </div>
        <x-slot:footer>
            <x-ui.button variant="ghost" wire:click="clearGeofence" class="!text-danger-600 hover:!bg-danger-50">{{ __('Remove Geofence') }}</x-ui.button>
            <div class="flex-1"></div>
            <x-ui.button variant="secondary" wire:click="closeLocationSettings">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button wire:click="saveLocation" wire:loading.attr="disabled">{{ __('Save Location') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>

    <x-ui.modal name="delete-branch" title="{{ __('Delete Branch') }}" maxWidth="sm" show-property="showDeleteConfirm">
        <p class="text-sm text-slate-600">{{ __('Are you sure you want to delete this branch?') }}</p>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="cancelDelete">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button variant="danger" wire:click="confirmDelete" wire:loading.attr="disabled">{{ __('Delete') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</div>
