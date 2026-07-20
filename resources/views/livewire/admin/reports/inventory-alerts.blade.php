<div>
    <x-ui.page-header title="{{ __('Inventory Alerts Report') }}" subtitle="{{ __('Totals and groupings for low stock and out of stock products.') }}">
        <x-ui.button variant="secondary" href="{{ route('admin.inventory.alerts') }}">{{ __('Inventory Alerts') }}</x-ui.button>
        <x-ui.button
            href="{{ route('admin.inventory.alerts.print', array_filter([
                'branch' => $filter_branch_id ?: null,
                'category' => $filter_category_id ?: null,
                'status' => $filter_status ?: null,
            ])) }}"
            target="_blank"
        >{{ __('Print / Export') }}</x-ui.button>
    </x-ui.page-header>

    <x-ui.filter-bar class="mb-4">
        <div class="w-full sm:w-44">
            <x-ui.select wire:model.live="filter_branch_id" label="{{ __('Branch') }}">
                <option value="">{{ __('All Branches') }}</option>
                @foreach ($branches as $branch)
                    <option value="{{ $branch->id }}">{{ $branch->name }}</option>
                @endforeach
            </x-ui.select>
        </div>
        <div class="w-full sm:w-44">
            <x-ui.select wire:model.live="filter_category_id" label="{{ __('Category') }}">
                <option value="">{{ __('All Categories') }}</option>
                @foreach ($categories as $category)
                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                @endforeach
            </x-ui.select>
        </div>
        <div class="w-full sm:w-44">
            <x-ui.select wire:model.live="filter_status" label="{{ __('Status') }}">
                <option value="">{{ __('All Statuses') }}</option>
                <option value="out_of_stock">{{ __('Out of Stock') }}</option>
                <option value="low_stock">{{ __('Low Stock') }}</option>
            </x-ui.select>
        </div>
    </x-ui.filter-bar>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Total Out of Stock Products') }}" :value="(string) $report['totals']['out_of_stock']" icon="x" tone="danger" />
        <x-ui.stat-card label="{{ __('Total Low Stock Products') }}" :value="(string) $report['totals']['low_stock']" icon="exclamation" tone="warning" />
        <x-ui.stat-card label="{{ __('Total Alerts') }}" :value="(string) $report['totals']['total']" icon="archive" tone="primary" />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <x-ui.card>
            <h3 class="text-base font-semibold text-slate-900 mb-4">{{ __('Grouped by Branch') }}</h3>
            <x-ui.table>
                <x-ui.table-head>
                    <x-ui.th>{{ __('Branch') }}</x-ui.th>
                    <x-ui.th>{{ __('Out of Stock') }}</x-ui.th>
                    <x-ui.th>{{ __('Low Stock') }}</x-ui.th>
                    <x-ui.th>{{ __('Total') }}</x-ui.th>
                </x-ui.table-head>
                <x-ui.table-body>
                    @forelse ($report['by_branch'] as $row)
                        <tr>
                            <x-ui.td class="font-medium">{{ $row->branch_name }}</x-ui.td>
                            <x-ui.td>{{ $row->out_of_stock }}</x-ui.td>
                            <x-ui.td>{{ $row->low_stock }}</x-ui.td>
                            <x-ui.td class="font-semibold">{{ $row->total }}</x-ui.td>
                        </tr>
                    @empty
                        <tr><x-ui.td colspan="4" class="text-center text-slate-500 py-6">{{ __('No data.') }}</x-ui.td></tr>
                    @endforelse
                </x-ui.table-body>
            </x-ui.table>
        </x-ui.card>

        <x-ui.card>
            <h3 class="text-base font-semibold text-slate-900 mb-4">{{ __('Grouped by Category') }}</h3>
            <x-ui.table>
                <x-ui.table-head>
                    <x-ui.th>{{ __('Category') }}</x-ui.th>
                    <x-ui.th>{{ __('Out of Stock') }}</x-ui.th>
                    <x-ui.th>{{ __('Low Stock') }}</x-ui.th>
                    <x-ui.th>{{ __('Total') }}</x-ui.th>
                </x-ui.table-head>
                <x-ui.table-body>
                    @forelse ($report['by_category'] as $row)
                        <tr>
                            <x-ui.td class="font-medium">{{ $row->category_name }}</x-ui.td>
                            <x-ui.td>{{ $row->out_of_stock }}</x-ui.td>
                            <x-ui.td>{{ $row->low_stock }}</x-ui.td>
                            <x-ui.td class="font-semibold">{{ $row->total }}</x-ui.td>
                        </tr>
                    @empty
                        <tr><x-ui.td colspan="4" class="text-center text-slate-500 py-6">{{ __('No data.') }}</x-ui.td></tr>
                    @endforelse
                </x-ui.table-body>
            </x-ui.table>
        </x-ui.card>
    </div>

    <x-ui.card>
        <h3 class="text-base font-semibold text-slate-900 mb-4">{{ __('Alert Details') }}</h3>
        <x-ui.table>
            <x-ui.table-head>
                <x-ui.th>{{ __('Product') }}</x-ui.th>
                <x-ui.th>{{ __('Category') }}</x-ui.th>
                <x-ui.th>{{ __('Branch') }}</x-ui.th>
                <x-ui.th>{{ __('Qty') }}</x-ui.th>
                <x-ui.th>{{ __('Min') }}</x-ui.th>
                <x-ui.th>{{ __('Status') }}</x-ui.th>
            </x-ui.table-head>
            <x-ui.table-body>
                @forelse ($report['rows'] as $row)
                    <tr>
                        <x-ui.td class="font-medium">{{ $row->product_name }}</x-ui.td>
                        <x-ui.td>{{ $row->category_name ?: '—' }}</x-ui.td>
                        <x-ui.td>{{ $row->branch_name }}</x-ui.td>
                        <x-ui.td>{{ rtrim(rtrim(number_format($row->quantity, 2, '.', ''), '0'), '.') }}</x-ui.td>
                        <x-ui.td>{{ rtrim(rtrim(number_format($row->minimum_stock, 2, '.', ''), '0'), '.') }}</x-ui.td>
                        <x-ui.td>{{ $row->status_label }}</x-ui.td>
                    </tr>
                @empty
                    <tr><x-ui.td colspan="6" class="text-center text-slate-500 py-6">{{ __('No inventory alerts found.') }}</x-ui.td></tr>
                @endforelse
            </x-ui.table-body>
        </x-ui.table>
    </x-ui.card>
</div>
