<div>
    <x-ui.page-header title="{{ __('Suppliers') }}" subtitle="{{ __('Vendors and purchase contacts.') }}">
        <x-ui.button wire:click="startCreate">
            <x-ui.icon name="plus" class="w-4 h-4" /> {{ __('Add Supplier') }}
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Total Suppliers') }}" :value="(string) $totalSuppliers" icon="truck" tone="primary" />
        <x-ui.stat-card label="{{ __('With Outstanding') }}" :value="(string) $withBalance" icon="cash" tone="danger" />
        <x-ui.stat-card label="{{ __('Active') }}" :value="(string) $totalSuppliers" icon="check" tone="success" />
        <x-ui.stat-card label="{{ __('Payable') }}" :value="'EGP'" icon="clipboard" tone="warning" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[200px]">
            <x-ui.search placeholder="{{ __('Search suppliers...') }}" wire:model.live.debounce.300ms="search" />
        </div>
        <div class="w-full sm:w-56">
            <x-ui.select wire:model.live="filter_outstanding">
                <option value="">{{ __('All Balances') }}</option>
                <option value="1">{{ __('Has Outstanding Balance') }}</option>
            </x-ui.select>
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('Supplier') }}</x-ui.th>
            <x-ui.th>{{ __('Phone') }}</x-ui.th>
            <x-ui.th>{{ __('Address') }}</x-ui.th>
            <x-ui.th>{{ __('Outstanding Balance') }}</x-ui.th>
            <x-ui.th>{{ __('Actions') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($suppliers as $supplier)
                <tr class="hover:bg-slate-50/80" wire:key="supplier-{{ $supplier->id }}">
                    <x-ui.td class="font-medium text-slate-900">{{ $supplier->name }}</x-ui.td>
                    <x-ui.td>{{ $supplier->phone }}</x-ui.td>
                    <x-ui.td>{{ $supplier->address ?: '—' }}</x-ui.td>
                    <x-ui.td>
                        @php $bal = (float) ($supplier->outstanding_balance ?? 0); @endphp
                        <span class="font-medium {{ $bal > 0 ? 'text-danger-600' : 'text-slate-500' }}">
                            EGP {{ number_format($bal, 2) }}
                        </span>
                    </x-ui.td>
                    <x-ui.td>
                        <div class="flex items-center gap-1">
                            <x-ui.button size="sm" variant="ghost" href="{{ route('admin.suppliers.statement', $supplier) }}" title="{{ __('Statement') }}">
                                <x-ui.icon name="clipboard" class="w-4 h-4" />
                            </x-ui.button>
                            <x-ui.row-actions
                                :on-view="'$wire.startView('.$supplier->id.')'"
                                :on-edit="'$wire.startEdit('.$supplier->id.')'"
                                :on-delete="'$wire.prepareDelete('.$supplier->id.')'"
                            />
                        </div>
                    </x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="5" class="text-center text-slate-500 py-8">{{ __('No suppliers found.') }}</x-ui.td>
                </tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.pagination
        :from="$suppliers->firstItem() ?? 0"
        :to="$suppliers->lastItem() ?? 0"
        :total="$suppliers->total()"
        livewire
        :has-pages="$suppliers->hasPages()"
        :on-first-page="$suppliers->onFirstPage()"
        :has-more-pages="$suppliers->hasMorePages()"
    />

    <x-ui.modal name="supplier-form" :title="$editingId ? __('Edit Supplier') : __('Add Supplier')" show-property="showSupplierForm">
        <div class="space-y-4">
            <x-ui.input label="{{ __('Company Name') }}" wire:model="name" :error="$errors->first('name')" />
            <x-ui.input label="{{ __('Phone') }}" wire:model="phone" :error="$errors->first('phone')" />
            <x-ui.textarea label="{{ __('Address') }}" wire:model="address" :error="$errors->first('address')" />
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="closeSupplierForm">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button wire:click="save" wire:loading.attr="disabled">{{ __('Save') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>

    <x-ui.drawer name="supplier-view" title="{{ __('Supplier Details') }}" show-property="showSupplierDrawer">
        @if ($viewingSupplier)
            <dl class="space-y-4 text-sm">
                <div>
                    <dt class="text-slate-500">{{ __('Name') }}</dt>
                    <dd class="font-medium text-slate-900 mt-0.5">{{ $viewingSupplier->name }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Phone') }}</dt>
                    <dd class="mt-0.5">{{ $viewingSupplier->phone }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Address') }}</dt>
                    <dd class="mt-0.5">{{ $viewingSupplier->address ?: '—' }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Outstanding Balance') }}</dt>
                    <dd class="mt-0.5 font-semibold text-danger-600">EGP {{ number_format($viewingBalance, 2) }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Created') }}</dt>
                    <dd class="mt-0.5">{{ $viewingSupplier->created_at?->format('Y-m-d H:i') }}</dd>
                </div>
            </dl>
            <div class="mt-6">
                <x-ui.button href="{{ route('admin.suppliers.statement', $viewingSupplier) }}">
                    {{ __('View Statement') }}
                </x-ui.button>
            </div>
        @else
            <p class="text-sm text-slate-500">{{ __('Supplier not found.') }}</p>
        @endif
    </x-ui.drawer>

    <x-ui.modal name="delete-supplier" title="{{ __('Delete Supplier') }}" maxWidth="sm" show-property="showDeleteConfirm">
        <p class="text-sm text-slate-600">{{ __('Are you sure you want to delete this supplier?') }}</p>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="cancelDelete">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button variant="danger" wire:click="confirmDelete" wire:loading.attr="disabled">{{ __('Delete') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</div>
