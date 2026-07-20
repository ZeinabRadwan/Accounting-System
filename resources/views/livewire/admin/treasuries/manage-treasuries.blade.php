<div>
    <x-ui.page-header title="{{ __('Treasuries') }}" subtitle="{{ __('Cash accounts linked to POS payment methods.') }}">
        <x-ui.button wire:click="startCreate">
            <x-ui.icon name="plus" class="w-4 h-4" /> {{ __('Add Treasury') }}
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Total Balance') }}" :value="'EGP '.number_format($totalBalance, 2)" icon="cash" tone="primary" />
        <x-ui.stat-card label="{{ __('Treasuries') }}" :value="(string) $treasuries->total()" icon="archive" tone="slate" />
        <x-ui.stat-card label="{{ __('Active') }}" :value="(string) $activeCount" icon="check" tone="success" />
        <x-ui.stat-card label="{{ __('Methods') }}" :value="(string) count($paymentMethods)" icon="adjustments" tone="warning" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[200px]">
            <x-ui.search placeholder="{{ __('Search treasuries...') }}" wire:model.live.debounce.300ms="search" />
        </div>
        <div class="w-full sm:w-40">
            <x-ui.select wire:model.live="filter_status">
                <option value="">{{ __('All Status') }}</option>
                <option value="active">{{ __('Active') }}</option>
                <option value="inactive">{{ __('Inactive') }}</option>
            </x-ui.select>
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('Treasury') }}</x-ui.th>
            <x-ui.th>{{ __('Payment Method') }}</x-ui.th>
            <x-ui.th>{{ __('Balance') }}</x-ui.th>
            <x-ui.th>{{ __('Transactions') }}</x-ui.th>
            <x-ui.th>{{ __('Status') }}</x-ui.th>
            <x-ui.th>{{ __('Actions') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($treasuries as $treasury)
                <tr class="hover:bg-slate-50/80" wire:key="treasury-{{ $treasury->id }}">
                    <x-ui.td>
                        <a href="{{ route('admin.treasuries.show', $treasury) }}" class="font-medium text-primary-700 hover:text-primary-800 hover:underline">
                            {{ $treasury->name }}
                        </a>
                    </x-ui.td>
                    <x-ui.td>{{ str_replace('_', ' ', $treasury->payment_method) }}</x-ui.td>
                    <x-ui.td class="font-semibold">EGP {{ number_format((float) $treasury->current_balance, 2) }}</x-ui.td>
                    <x-ui.td>{{ $treasury->transactions_count }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$treasury->is_active ? 'active' : 'inactive'" /></x-ui.td>
                    <x-ui.td>
                        <x-ui.row-actions
                            :on-view="'window.location.href=\''.route('admin.treasuries.show', $treasury).'\''"
                            :on-edit="'$wire.startEdit('.$treasury->id.')'"
                            :on-delete="'$wire.prepareDelete('.$treasury->id.')'"
                        />
                    </x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="6" class="text-center text-slate-500 py-8">{{ __('No treasuries found.') }}</x-ui.td>
                </tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.pagination
        :from="$treasuries->firstItem() ?? 0"
        :to="$treasuries->lastItem() ?? 0"
        :total="$treasuries->total()"
        livewire
        :has-pages="$treasuries->hasPages()"
        :on-first-page="$treasuries->onFirstPage()"
        :has-more-pages="$treasuries->hasMorePages()"
    />

    <x-ui.modal name="treasury-form" :title="$editingId ? __('Edit Treasury') : __('Add Treasury')" show-property="showTreasuryForm">
        <div class="space-y-4">
            <x-ui.input label="{{ __('Name') }}" wire:model="name" :error="$errors->first('name')" placeholder="{{ __('Cash Treasury') }}" />
            <x-ui.select label="{{ __('Payment Method') }}" wire:model="payment_method" :error="$errors->first('payment_method')">
                @foreach ($paymentMethods as $method)
                    <option value="{{ $method->value }}">{{ $method->label() }}</option>
                @endforeach
            </x-ui.select>
            <x-ui.checkbox label="{{ __('Active') }}" wire:model="is_active" />
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="closeTreasuryForm">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button wire:click="save" wire:loading.attr="disabled">{{ __('Save') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>

    <x-ui.modal name="delete-treasury" title="{{ __('Delete Treasury') }}" maxWidth="sm" show-property="showDeleteConfirm">
        <p class="text-sm text-slate-600">{{ __('Delete this treasury? Only empty treasuries with no transactions can be removed.') }}</p>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="cancelDelete">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button variant="danger" wire:click="confirmDelete" wire:loading.attr="disabled">{{ __('Delete') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</div>
