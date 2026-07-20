<div>
    <x-ui.page-header title="{{ __('Transfers') }}" subtitle="{{ __('Move stock between branches.') }}">
        <x-ui.button wire:click="startCreate">
            <x-ui.icon name="plus" class="w-4 h-4" /> {{ __('New Transfer') }}
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Transfers') }}" :value="(string) $totalCount" icon="switch-horizontal" tone="primary" />
        <x-ui.stat-card label="{{ __('Today') }}" :value="(string) $todayCount" icon="clipboard" tone="success" />
        <x-ui.stat-card label="{{ __('Branches') }}" :value="(string) $branches->count()" icon="building" tone="slate" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[180px]">
            <x-ui.search placeholder="{{ __('Search transfer #...') }}" wire:model.live.debounce.300ms="search" />
        </div>
        <div class="w-full sm:w-44">
            <x-ui.select wire:model.live="filter_branch_from">
                <option value="">{{ __('From: All') }}</option>
                @foreach ($branches as $branch)
                    <option value="{{ $branch->id }}">{{ $branch->name }}</option>
                @endforeach
            </x-ui.select>
        </div>
        <div class="w-full sm:w-44">
            <x-ui.select wire:model.live="filter_branch_to">
                <option value="">{{ __('To: All') }}</option>
                @foreach ($branches as $branch)
                    <option value="{{ $branch->id }}">{{ $branch->name }}</option>
                @endforeach
            </x-ui.select>
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('Transfer #') }}</x-ui.th>
            <x-ui.th>{{ __('From') }}</x-ui.th>
            <x-ui.th>{{ __('To') }}</x-ui.th>
            <x-ui.th>{{ __('Items') }}</x-ui.th>
            <x-ui.th>{{ __('User') }}</x-ui.th>
            <x-ui.th>{{ __('Date') }}</x-ui.th>
            <x-ui.th>{{ __('Actions') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($transfers as $transfer)
                <tr class="hover:bg-slate-50/80" wire:key="trf-{{ $transfer->id }}">
                    <x-ui.td class="font-medium text-slate-900">{{ $transfer->transfer_number }}</x-ui.td>
                    <x-ui.td>{{ $transfer->fromBranch?->name }}</x-ui.td>
                    <x-ui.td>{{ $transfer->toBranch?->name }}</x-ui.td>
                    <x-ui.td>{{ $transfer->items_count }}</x-ui.td>
                    <x-ui.td>{{ $transfer->user?->name }}</x-ui.td>
                    <x-ui.td class="text-slate-500">{{ $transfer->created_at?->format('Y-m-d') }}</x-ui.td>
                    <x-ui.td>
                        <x-ui.row-actions :on-view="'$wire.startView('.$transfer->id.')'" />
                    </x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="7" class="text-center text-slate-500 py-8">{{ __('No transfers yet.') }}</x-ui.td>
                </tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.pagination
        :from="$transfers->firstItem() ?? 0"
        :to="$transfers->lastItem() ?? 0"
        :total="$transfers->total()"
        livewire
        :has-pages="$transfers->hasPages()"
        :on-first-page="$transfers->onFirstPage()"
        :has-more-pages="$transfers->hasMorePages()"
    />

    <x-ui.modal name="transfer-form" title="{{ __('New Transfer') }}" maxWidth="2xl" show-property="showTransferForm">
        <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <x-ui.select label="{{ __('From Branch') }}" wire:model="branch_id_from" :error="$errors->first('branch_id_from')">
                    <option value="">{{ __('Select') }}</option>
                    @foreach ($branches as $branch)
                        <option value="{{ $branch->id }}">{{ $branch->name }}</option>
                    @endforeach
                </x-ui.select>
                <x-ui.select label="{{ __('To Branch') }}" wire:model="branch_id_to" :error="$errors->first('branch_id_to')">
                    <option value="">{{ __('Select') }}</option>
                    @foreach ($branches as $branch)
                        <option value="{{ $branch->id }}">{{ $branch->name }}</option>
                    @endforeach
                </x-ui.select>
            </div>

            <div class="relative">
                <x-ui.search
                    placeholder="{{ __('Search product to add...') }}"
                    wire:model.live.debounce.300ms="product_search"
                />
                @if (! empty($product_results))
                    <div class="absolute z-20 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-soft py-1 max-h-56 overflow-y-auto">
                        @foreach ($product_results as $product)
                            <button
                                type="button"
                                class="w-full text-start px-3 py-2 text-sm hover:bg-slate-50"
                                wire:click="addProduct({{ $product['id'] }})"
                            >
                                <span class="font-medium text-slate-900">{{ $product['display_name'] }}</span>
                                <span class="text-slate-500"> · {{ $product['sku'] }}</span>
                            </button>
                        @endforeach
                    </div>
                @endif
            </div>

            @error('items')
                <p class="text-sm text-danger-600">{{ $message }}</p>
            @enderror

            <div class="overflow-x-auto rounded-xl border border-slate-200">
                <table class="min-w-full text-sm text-start">
                    <thead class="bg-slate-50 text-slate-600">
                        <tr>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Product') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Unit') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Qty') }}</th>
                            <th class="px-3 py-2 text-start font-medium"></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        @forelse ($items as $index => $item)
                            <tr wire:key="titem-{{ $index }}-{{ $item['product_id'] }}">
                                <td class="px-3 py-2">
                                    <p class="font-medium">{{ $item['display_name'] }}</p>
                                    <p class="text-xs text-slate-500">{{ $item['sku'] }}</p>
                                </td>
                                <td class="px-3 py-2">
                                    <select
                                        class="rounded-lg border-slate-200 text-sm"
                                        wire:change="setUnit({{ $index }}, $event.target.value)"
                                    >
                                        @foreach ($item['units'] ?? [] as $unit)
                                            <option value="{{ $unit['unit_name'] }}" @selected($unit['unit_name'] === $item['unit_name'])>
                                                {{ $unit['unit_name'] }}
                                            </option>
                                        @endforeach
                                    </select>
                                </td>
                                <td class="px-3 py-2 w-28">
                                    <x-ui.input type="number" step="0.01" min="0" wire:model="items.{{ $index }}.quantity" />
                                </td>
                                <td class="px-3 py-2">
                                    <x-ui.button type="button" variant="ghost" size="sm" wire:click="removeItem({{ $index }})">
                                        <x-ui.icon name="trash" class="w-4 h-4 text-danger-600" />
                                    </x-ui.button>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="4" class="px-3 py-4 text-center text-slate-500">{{ __('Search and add products.') }}</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            <x-ui.textarea label="{{ __('Notes') }}" wire:model="notes" :error="$errors->first('notes')" placeholder="{{ __('Optional notes...') }}" />
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="closeTransferForm">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button wire:click="save" wire:loading.attr="disabled">{{ __('Save Transfer') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>

    <x-ui.drawer name="transfer-view" title="{{ __('Transfer Details') }}" show-property="showTransferDrawer">
        @if ($viewingTransfer)
            <dl class="space-y-4 text-sm mb-6">
                <div>
                    <dt class="text-slate-500">{{ __('Transfer') }}</dt>
                    <dd class="font-medium text-slate-900 mt-0.5">{{ $viewingTransfer->transfer_number }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('From → To') }}</dt>
                    <dd class="mt-0.5">{{ $viewingTransfer->fromBranch?->name }} → {{ $viewingTransfer->toBranch?->name }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('User') }}</dt>
                    <dd class="mt-0.5">{{ $viewingTransfer->user?->name }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Date') }}</dt>
                    <dd class="mt-0.5">{{ $viewingTransfer->created_at?->format('Y-m-d H:i') }}</dd>
                </div>
                @if ($viewingTransfer->notes)
                    <div>
                        <dt class="text-slate-500">{{ __('Notes') }}</dt>
                        <dd class="mt-0.5">{{ $viewingTransfer->notes }}</dd>
                    </div>
                @endif
            </dl>

            <div class="overflow-x-auto rounded-xl border border-slate-200">
                <table class="min-w-full text-sm text-start">
                    <thead class="bg-slate-50 text-slate-600">
                        <tr>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Product') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Unit') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Qty') }}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        @foreach ($viewingTransfer->items as $line)
                            <tr>
                                <td class="px-3 py-2">
                                    <p class="font-medium">{{ $line->product?->full_display_name ?? $line->product?->display_name }}</p>
                                    <p class="text-xs text-slate-500">{{ $line->product?->sku }}</p>
                                </td>
                                <td class="px-3 py-2">{{ $line->unit_name }}</td>
                                <td class="px-3 py-2">{{ $line->quantity }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        @else
            <p class="text-sm text-slate-500">{{ __('Transfer not found.') }}</p>
        @endif
    </x-ui.drawer>
</div>
