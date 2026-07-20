<div>
    <x-ui.page-header title="{{ __('Inventory') }}" subtitle="{{ __('Stock levels across branches.') }}">
        <x-ui.button variant="secondary" href="{{ route('admin.inventory.alerts') }}">{{ __('Inventory Alerts') }}</x-ui.button>
        <x-ui.button variant="secondary" href="{{ route('admin.products.index') }}">{{ __('Products') }}</x-ui.button>
        <x-ui.button variant="secondary" href="{{ route('admin.purchases.index') }}">{{ __('Purchases') }}</x-ui.button>
        <x-ui.button variant="secondary" href="{{ route('admin.transfers.index') }}">{{ __('Transfers') }}</x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Active Products') }}" :value="(string) $productCount" icon="cube" tone="primary" />
        <x-ui.stat-card label="{{ __('Stocked SKUs') }}" :value="(string) $totalSkus" icon="archive" tone="slate" />
        <a href="{{ route('admin.inventory.alerts', ['status' => 'low_stock']) }}" class="block">
            <x-ui.stat-card label="{{ __('Low Stock') }}" :value="(string) $lowStock" hint="{{ __('At or below minimum stock') }}" icon="exclamation" tone="warning" />
        </a>
        <a href="{{ route('admin.inventory.alerts', ['status' => 'out_of_stock']) }}" class="block">
            <x-ui.stat-card label="{{ __('Out of Stock') }}" :value="(string) $outOfStock" icon="x" tone="danger" />
        </a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Expiring Soon') }}" :value="(string) $expiringSoon" hint="{{ __('Within 30 days') }}" icon="exclamation" tone="warning" />
        <x-ui.stat-card label="{{ __('Expired Stock') }}" :value="(string) $expiredLots" hint="{{ __('Past expiry date') }}" icon="x" tone="danger" />
    </div>

    <div class="flex flex-wrap gap-2 mb-4">
        <x-ui.button type="button" :variant="$tab === 'stock' ? 'primary' : 'secondary'" size="sm" wire:click="setTab('stock')">{{ __('Stock') }}</x-ui.button>
        <x-ui.button type="button" :variant="$tab === 'movements' ? 'primary' : 'secondary'" size="sm" wire:click="setTab('movements')">{{ __('Movements') }}</x-ui.button>
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="w-full sm:w-44">
            <x-ui.select wire:model.live="filter_branch_id">
                <option value="">{{ __('All Branches') }}</option>
                @foreach ($branches as $branch)
                    <option value="{{ $branch->id }}">{{ $branch->name }}</option>
                @endforeach
            </x-ui.select>
        </div>
        <div class="w-full sm:w-44">
            <x-ui.select wire:model.live="filter_category_id">
                <option value="">{{ __('All Categories') }}</option>
                @foreach ($categories as $cat)
                    <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                @endforeach
            </x-ui.select>
        </div>
        @if ($tab === 'stock')
            <div class="w-full sm:w-40">
                <x-ui.select wire:model.live="filter_status">
                    <option value="">{{ __('All Status') }}</option>
                    <option value="in_stock">{{ __('In Stock') }}</option>
                    <option value="low_stock">{{ __('Low Stock') }}</option>
                    <option value="out_of_stock">{{ __('Out of Stock') }}</option>
                    <option value="expiring_soon">{{ __('Expiring Soon') }}</option>
                    <option value="expired">{{ __('Expired') }}</option>
                </x-ui.select>
            </div>
        @endif
        <div class="flex-1 min-w-[200px]">
            <x-ui.search placeholder="{{ __('Search product name or SKU...') }}" wire:model.live.debounce.300ms="search" />
        </div>
    </x-ui.filter-bar>

    @if ($tab === 'stock')
        <x-ui.table>
            <x-ui.table-head>
                <x-ui.th>{{ __('Product') }}</x-ui.th>
                <x-ui.th>{{ __('Category') }}</x-ui.th>
                <x-ui.th>{{ __('Branch') }}</x-ui.th>
                <x-ui.th>{{ __('Unit') }}</x-ui.th>
                <x-ui.th>{{ __('Quantity') }}</x-ui.th>
                <x-ui.th>{{ __('Nearest Expiry') }}</x-ui.th>
                <x-ui.th>{{ __('Status') }}</x-ui.th>
                <x-ui.th>{{ __('Actions') }}</x-ui.th>
            </x-ui.table-head>
            <x-ui.table-body>
                @forelse ($rows as $row)
                    @php
                        $qty = (float) $row->quantity;
                        $status = $qty <= 0 ? 'out_of_stock' : ($qty <= 10 ? 'low_stock' : 'in_stock');
                        $nearestExpiry = $row->nearest_expiry ? \Illuminate\Support\Carbon::parse($row->nearest_expiry) : null;
                        if ($nearestExpiry) {
                            if ($nearestExpiry->lt(\Illuminate\Support\Carbon::today())) {
                                $status = 'expired';
                            } elseif ($nearestExpiry->lte(\Illuminate\Support\Carbon::today()->addDays(30))) {
                                $status = 'expiring_soon';
                            }
                        }
                    @endphp
                    <tr class="hover:bg-slate-50/80" wire:key="stock-{{ $row->id }}">
                        <x-ui.td>
                            <p class="font-medium text-slate-900">{{ $row->product?->full_display_name }}</p>
                            <p class="text-xs text-slate-500">{{ $row->product?->sku }}</p>
                        </x-ui.td>
                        <x-ui.td>{{ $row->product?->category?->name ?: '—' }}</x-ui.td>
                        <x-ui.td>{{ $row->branch?->name }}</x-ui.td>
                        <x-ui.td>{{ $row->product?->base_unit }}</x-ui.td>
                        <x-ui.td class="font-semibold text-slate-900">{{ number_format($qty, 2) }}</x-ui.td>
                        <x-ui.td>
                            @if ($nearestExpiry)
                                <span class="{{ $status === 'expired' ? 'text-danger-600 font-medium' : ($status === 'expiring_soon' ? 'text-warning-700 font-medium' : 'text-slate-700') }}">
                                    {{ $nearestExpiry->format('Y-m-d') }}
                                </span>
                            @else
                                <span class="text-slate-400">—</span>
                            @endif
                        </x-ui.td>
                        <x-ui.td><x-ui.status-badge :status="$status" /></x-ui.td>
                        <x-ui.td>
                            <x-ui.row-actions :on-view="'$wire.startViewStock('.$row->id.')'" />
                        </x-ui.td>
                    </tr>
                @empty
                    <tr>
                        <x-ui.td colspan="8" class="text-center text-slate-500 py-8">
                            {{ __('No stock records. Receive stock via Purchases or Transfers.') }}
                        </x-ui.td>
                    </tr>
                @endforelse
            </x-ui.table-body>
        </x-ui.table>
    @else
        <x-ui.table>
            <x-ui.table-head>
                <x-ui.th>{{ __('Date') }}</x-ui.th>
                <x-ui.th>{{ __('Product') }}</x-ui.th>
                <x-ui.th>{{ __('Branch') }}</x-ui.th>
                <x-ui.th>{{ __('Type') }}</x-ui.th>
                <x-ui.th>{{ __('Qty') }}</x-ui.th>
                <x-ui.th>{{ __('Actions') }}</x-ui.th>
            </x-ui.table-head>
            <x-ui.table-body>
                @forelse ($rows as $row)
                    <tr class="hover:bg-slate-50/80" wire:key="mov-{{ $row->id }}">
                        <x-ui.td class="text-slate-500 whitespace-nowrap">{{ $row->created_at?->format('Y-m-d H:i') }}</x-ui.td>
                        <x-ui.td>
                            <p class="font-medium text-slate-900">{{ $row->product?->full_display_name }}</p>
                            <p class="text-xs text-slate-500">{{ $row->product?->sku }}</p>
                        </x-ui.td>
                        <x-ui.td>
                            @if ($row->fromBranch && $row->toBranch)
                                {{ $row->fromBranch->name }} → {{ $row->toBranch->name }}
                            @else
                                {{ $row->fromBranch?->name ?? $row->toBranch?->name ?? '—' }}
                            @endif
                        </x-ui.td>
                        <x-ui.td>
                            <x-ui.badge variant="slate">
                                {{ $row->movement_type instanceof \BackedEnum ? str_replace('_', ' ', $row->movement_type->value) : $row->movement_type }}
                            </x-ui.badge>
                        </x-ui.td>
                        <x-ui.td class="font-semibold">{{ number_format((float) $row->quantity, 2) }}</x-ui.td>
                        <x-ui.td>
                            @if ($row->product_id)
                                <x-ui.row-actions :on-view="'$wire.startViewProduct('.$row->product_id.')'" />
                            @endif
                        </x-ui.td>
                    </tr>
                @empty
                    <tr>
                        <x-ui.td colspan="6" class="text-center text-slate-500 py-8">{{ __('No movements yet.') }}</x-ui.td>
                    </tr>
                @endforelse
            </x-ui.table-body>
        </x-ui.table>
    @endif

    <x-ui.pagination
        :from="$rows->firstItem() ?? 0"
        :to="$rows->lastItem() ?? 0"
        :total="$rows->total()"
        livewire
        :has-pages="$rows->hasPages()"
        :on-first-page="$rows->onFirstPage()"
        :has-more-pages="$rows->hasMorePages()"
    />

    <x-ui.drawer name="stock-view" title="{{ __('Stock Details') }}" show-property="showStockDrawer">
        @if ($viewingProduct)
            <dl class="space-y-4 text-sm mb-6">
                <div>
                    <dt class="text-slate-500">{{ __('Product') }}</dt>
                    <dd class="font-medium text-slate-900 mt-0.5">{{ $viewingProduct->full_display_name }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('SKU') }}</dt>
                    <dd class="mt-0.5">{{ $viewingProduct->sku }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Category') }}</dt>
                    <dd class="mt-0.5">{{ $viewingProduct->category?->name ?: '—' }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Base Unit') }}</dt>
                    <dd class="mt-0.5">{{ $viewingProduct->base_unit }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Units') }}</dt>
                    <dd class="mt-0.5">
                        @forelse ($viewingProduct->units as $unit)
                            <div>{{ $unit->unit_name }}{{ $unit->is_base ? ' · '.__('base') : '' }} (×{{ $unit->conversion_factor }})</div>
                        @empty
                            —
                        @endforelse
                    </dd>
                </div>
            </dl>

            <h3 class="text-sm font-semibold text-slate-900 mb-2">{{ __('Stock by Branch') }}</h3>
            <div class="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table class="min-w-full text-sm text-start">
                    <thead class="bg-slate-50 text-slate-600">
                        <tr>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Branch') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Qty') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Status') }}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        @forelse ($branchStocks as $stock)
                            @php
                                $qty = (float) $stock->quantity;
                                $status = $qty <= 0 ? 'out_of_stock' : ($qty <= 10 ? 'low_stock' : 'in_stock');
                            @endphp
                            <tr>
                                <td class="px-3 py-2">{{ $stock->branch?->name }}</td>
                                <td class="px-3 py-2 font-semibold">{{ number_format($qty, 2) }}</td>
                                <td class="px-3 py-2"><x-ui.status-badge :status="$status" /></td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="3" class="px-3 py-3 text-slate-500">{{ __('No stock at any branch yet.') }}</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            <h3 class="text-sm font-semibold text-slate-900 mb-2">{{ __('Recent Movements') }}</h3>
            <div class="overflow-x-auto rounded-xl border border-slate-200">
                <table class="min-w-full text-sm text-start">
                    <thead class="bg-slate-50 text-slate-600">
                        <tr>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Date') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Type') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Branch') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Qty') }}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        @forelse ($recentMovements as $mov)
                            <tr>
                                <td class="px-3 py-2 text-slate-500 whitespace-nowrap">{{ $mov->created_at?->format('Y-m-d H:i') }}</td>
                                <td class="px-3 py-2">
                                    {{ $mov->movement_type instanceof \BackedEnum ? str_replace('_', ' ', $mov->movement_type->value) : $mov->movement_type }}
                                </td>
                                <td class="px-3 py-2">
                                    @if ($mov->fromBranch && $mov->toBranch)
                                        {{ $mov->fromBranch->name }} → {{ $mov->toBranch->name }}
                                    @else
                                        {{ $mov->fromBranch?->name ?? $mov->toBranch?->name ?? '—' }}
                                    @endif
                                </td>
                                <td class="px-3 py-2 font-semibold">{{ number_format((float) $mov->quantity, 2) }}</td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="4" class="px-3 py-3 text-slate-500">{{ __('No movements for this product.') }}</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        @else
            <p class="text-sm text-slate-500">{{ __('Product not found.') }}</p>
        @endif
    </x-ui.drawer>
</div>
