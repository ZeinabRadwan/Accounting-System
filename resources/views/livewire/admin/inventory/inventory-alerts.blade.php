<div>
    <x-ui.page-header title="{{ __('Inventory Alerts') }}" subtitle="{{ __('Monitor low stock and out of stock products by branch.') }}">
        <x-ui.button variant="secondary" href="{{ route('admin.inventory.index') }}">{{ __('Inventory') }}</x-ui.button>
        <x-ui.button variant="secondary" href="{{ route('admin.reports.inventory-alerts') }}">{{ __('Alerts Report') }}</x-ui.button>
        <x-ui.button href="{{ route('admin.inventory.alerts.print', request()->query()) }}" target="_blank">{{ __('Print') }}</x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <a href="{{ route('admin.inventory.alerts', ['status' => 'out_of_stock']) }}" class="block">
            <x-ui.stat-card label="{{ __('Out of Stock') }}" :value="(string) $counts['out_of_stock']" icon="x" tone="danger" />
        </a>
        <a href="{{ route('admin.inventory.alerts', ['status' => 'low_stock']) }}" class="block">
            <x-ui.stat-card label="{{ __('Low Stock') }}" :value="(string) $counts['low_stock']" icon="exclamation" tone="warning" />
        </a>
        <x-ui.stat-card label="{{ __('Total Alerts') }}" :value="(string) $counts['total']" icon="archive" tone="primary" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[200px]">
            <x-ui.search placeholder="{{ __('Search product name or SKU...') }}" wire:model.live.debounce.300ms="search" />
        </div>
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
                @foreach ($categories as $category)
                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                @endforeach
            </x-ui.select>
        </div>
        <div class="w-full sm:w-44">
            <x-ui.select wire:model.live="filter_status">
                <option value="">{{ __('All Statuses') }}</option>
                <option value="out_of_stock">{{ __('Out of Stock') }}</option>
                <option value="low_stock">{{ __('Low Stock') }}</option>
            </x-ui.select>
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('Product Name') }}</x-ui.th>
            <x-ui.th>{{ __('Category') }}</x-ui.th>
            <x-ui.th>{{ __('Branch') }}</x-ui.th>
            <x-ui.th>{{ __('Current Quantity') }}</x-ui.th>
            <x-ui.th>{{ __('Minimum Quantity') }}</x-ui.th>
            <x-ui.th>{{ __('Status') }}</x-ui.th>
            <x-ui.th>{{ __('Last Sale Date') }}</x-ui.th>
            <x-ui.th>{{ __('Last Purchase Date') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($alerts as $row)
                <tr class="hover:bg-slate-50/80" wire:key="alert-{{ $row->id }}">
                    <x-ui.td>
                        <p class="font-medium text-slate-900">{{ $row->product_name }}</p>
                        <p class="text-xs text-slate-500">{{ $row->sku }} @if($row->base_unit) · {{ $row->base_unit }} @endif</p>
                    </x-ui.td>
                    <x-ui.td>{{ $row->category_name ?: '—' }}</x-ui.td>
                    <x-ui.td>{{ $row->branch_name }}</x-ui.td>
                    <x-ui.td class="font-semibold">{{ rtrim(rtrim(number_format($row->quantity, 2, '.', ''), '0'), '.') }}</x-ui.td>
                    <x-ui.td>{{ rtrim(rtrim(number_format($row->minimum_stock, 2, '.', ''), '0'), '.') }}</x-ui.td>
                    <x-ui.td>
                        @if ($row->status === 'out_of_stock')
                            <span class="inline-flex items-center gap-1.5 rounded-full bg-danger-50 text-danger-700 border border-danger-100 px-2.5 py-1 text-xs font-semibold">
                                <span class="w-1.5 h-1.5 rounded-full bg-danger-500"></span>
                                {{ __('Out of Stock') }}
                            </span>
                        @else
                            <span class="inline-flex items-center gap-1.5 rounded-full bg-warning-50 text-warning-700 border border-warning-100 px-2.5 py-1 text-xs font-semibold">
                                <span class="w-1.5 h-1.5 rounded-full bg-warning-500"></span>
                                {{ __('Low Stock') }}
                            </span>
                        @endif
                    </x-ui.td>
                    <x-ui.td>{{ $row->last_sale_at ? \Illuminate\Support\Carbon::parse($row->last_sale_at)->format('Y-m-d H:i') : '—' }}</x-ui.td>
                    <x-ui.td>{{ $row->last_purchase_at ? \Illuminate\Support\Carbon::parse($row->last_purchase_at)->format('Y-m-d H:i') : '—' }}</x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="8" class="text-center text-slate-500 py-10">{{ __('No inventory alerts found.') }}</x-ui.td>
                </tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <div class="mt-4">
        <x-ui.pagination
            :from="$alerts->firstItem() ?? 0"
            :to="$alerts->lastItem() ?? 0"
            :total="$alerts->total()"
            livewire
            :has-pages="$alerts->hasPages()"
            :on-first-page="$alerts->onFirstPage()"
            :has-more-pages="$alerts->hasMorePages()"
        />
    </div>
</div>
