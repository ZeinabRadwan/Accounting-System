<div>
    <x-ui.page-header title="{{ __('Dashboard') }}" subtitle="{{ __('Overview of sales, inventory, treasuries, and operations.') }}">
        <x-ui.button href="{{ route('pos') }}">
            <x-ui.icon name="cash" class="w-4 h-4" /> {{ __('Open POS') }}
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card
            :label="__('Today\'s Sales')"
            :value="'EGP '.number_format($todaySales, 2)"
            :hint="__(':count orders · paid EGP :paid', ['count' => $todayOrders, 'paid' => number_format($todayPaid, 2)])"
            icon="cash"
            tone="primary"
        />
        <x-ui.stat-card
            :label="__('Open Receivables')"
            :value="'EGP '.number_format($openReceivables, 2)"
            :hint="__('Unpaid / partial invoices')"
            icon="clipboard"
            tone="warning"
        />
        <x-ui.stat-card
            :label="__('Treasury Balance')"
            :value="'EGP '.number_format($treasuryBalance, 2)"
            :hint="__('All active treasuries')"
            icon="cash"
            tone="success"
        />
        <x-ui.stat-card
            :label="__('Customers')"
            :value="number_format($customers)"
            icon="user-group"
            tone="slate"
        />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Expenses Today') }}" :value="'EGP '.number_format($expensesToday, 2)" icon="receipt-refund" tone="danger" />
        <x-ui.stat-card label="{{ __('Purchases Today') }}" :value="'EGP '.number_format($purchasesToday, 2)" icon="clipboard" tone="warning" />
        <a href="{{ route('admin.inventory.alerts', ['status' => 'low_stock']) }}" class="block">
            <x-ui.stat-card label="{{ __('Low Stock Products') }}" :value="(string) $lowStock" hint="{{ __('At or below minimum stock') }}" icon="exclamation" tone="warning" />
        </a>
        <a href="{{ route('admin.inventory.alerts', ['status' => 'out_of_stock']) }}" class="block">
            <x-ui.stat-card label="{{ __('Out of Stock Products') }}" :value="(string) $outOfStock" hint="{{ __('Qty 0 or less') }}" icon="x" tone="danger" />
        </a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Expiring Soon') }}" :value="(string) $expiringSoonLots" hint="{{ __('Within 30 days') }}" icon="exclamation" tone="warning" />
        <x-ui.stat-card label="{{ __('Expired Stock') }}" :value="(string) $expiredLots" hint="{{ __('Past expiry date') }}" icon="x" tone="danger" />
    </div>

    @if ($expiryAlerts->isNotEmpty())
        <x-ui.card class="mb-6">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-base font-semibold text-slate-900">{{ __('Expiry Alerts') }}</h2>
                <a href="{{ route('admin.inventory.index') }}" class="text-sm font-medium text-primary-600 hover:text-primary-700">{{ __('Inventory') }}</a>
            </div>
            <div class="overflow-x-auto -mx-1">
                <table class="min-w-full text-sm text-start">
                    <thead>
                        <tr class="text-start text-xs uppercase tracking-wide text-slate-500 border-b border-slate-100">
                            <th class="pb-3 pe-4 font-semibold">{{ __('Product') }}</th>
                            <th class="pb-3 pe-4 font-semibold">{{ __('Branch') }}</th>
                            <th class="pb-3 pe-4 font-semibold">{{ __('Qty') }}</th>
                            <th class="pb-3 pe-4 font-semibold">{{ __('Expiry') }}</th>
                            <th class="pb-3 font-semibold">{{ __('Status') }}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        @foreach ($expiryAlerts as $lot)
                            @php
                                $isExpired = $lot->expiry_date->lt(\Illuminate\Support\Carbon::today());
                            @endphp
                            <tr>
                                <td class="py-3 pe-4">
                                    <p class="font-medium text-slate-800">{{ $lot->product?->full_display_name ?? $lot->product?->display_name }}</p>
                                    <p class="text-xs text-slate-500">{{ $lot->product?->sku }}</p>
                                </td>
                                <td class="py-3 pe-4 text-slate-600">{{ $lot->branch?->name ?: '—' }}</td>
                                <td class="py-3 pe-4 text-slate-800">{{ number_format((float) $lot->quantity, 2) }}</td>
                                <td class="py-3 pe-4 text-slate-800">{{ $lot->expiry_date->format('Y-m-d') }}</td>
                                <td class="py-3">
                                    <x-ui.status-badge :status="$isExpired ? 'expired' : 'expiring_soon'" />
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </x-ui.card>
    @endif

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6">
        <x-ui.card class="xl:col-span-2">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-base font-semibold text-slate-900">{{ __('Recent Sales') }}</h2>
                <a href="{{ route('admin.sales.index') }}" class="text-sm font-medium text-primary-600 hover:text-primary-700">{{ __('View all') }}</a>
            </div>
            <div class="overflow-x-auto -mx-1">
                <table class="min-w-full text-sm text-start">
                    <thead>
                        <tr class="text-start text-xs uppercase tracking-wide text-slate-500 border-b border-slate-100">
                            <th class="pb-3 pe-4 font-semibold">{{ __('Invoice') }}</th>
                            <th class="pb-3 pe-4 font-semibold">{{ __('Customer') }}</th>
                            <th class="pb-3 pe-4 font-semibold">{{ __('Branch') }}</th>
                            <th class="pb-3 pe-4 font-semibold">{{ __('Total') }}</th>
                            <th class="pb-3 font-semibold">{{ __('Status') }}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        @forelse ($recentSales as $invoice)
                            @php
                                $status = match ((string) $invoice->status) {
                                    'partially_paid' => 'partial',
                                    default => (string) ($invoice->status ?: 'draft'),
                                };
                            @endphp
                            <tr>
                                <td class="py-3 pe-4 font-medium text-slate-800">{{ $invoice->invoice_number ?: '—' }}</td>
                                <td class="py-3 pe-4 text-slate-600">{{ $invoice->customer?->name ?? __('Walk-in') }}</td>
                                <td class="py-3 pe-4 text-slate-600">{{ $invoice->branch?->name ?: '—' }}</td>
                                <td class="py-3 pe-4 text-slate-800">EGP {{ number_format((float) $invoice->total, 2) }}</td>
                                <td class="py-3"><x-ui.status-badge :status="$status" /></td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="5" class="py-6 text-center text-slate-500">{{ __('No sales yet. Create one from POS.') }}</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </x-ui.card>

        <x-ui.card>
            <h2 class="text-base font-semibold text-slate-900 mb-4">{{ __('Quick Actions') }}</h2>
            <div class="space-y-2">
                <x-ui.button href="{{ route('pos') }}" class="w-full justify-start" variant="primary">
                    <x-ui.icon name="cash" class="w-4 h-4" /> {{ __('Open POS') }}
                </x-ui.button>
                <x-ui.button href="{{ route('admin.sales.index') }}" class="w-full justify-start" variant="secondary">
                    <x-ui.icon name="shopping-cart" class="w-4 h-4" /> {{ __('Sales Invoices') }}
                </x-ui.button>
                <x-ui.button href="{{ route('admin.expenses.index') }}" class="w-full justify-start" variant="secondary">
                    <x-ui.icon name="receipt-refund" class="w-4 h-4" /> {{ __('Add Expense') }}
                </x-ui.button>
                <x-ui.button href="{{ route('admin.treasuries.index') }}" class="w-full justify-start" variant="secondary">
                    <x-ui.icon name="cash" class="w-4 h-4" /> {{ __('Treasuries') }}
                </x-ui.button>
                <x-ui.button href="{{ route('admin.inventory.index') }}" class="w-full justify-start" variant="secondary">
                    <x-ui.icon name="archive" class="w-4 h-4" /> {{ __('Inventory') }}
                </x-ui.button>
                <x-ui.button href="{{ route('admin.reports.index') }}" class="w-full justify-start" variant="secondary">
                    <x-ui.icon name="chart-bar" class="w-4 h-4" /> {{ __('Reports') }}
                </x-ui.button>
            </div>
        </x-ui.card>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-6">
        <x-ui.card>
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-base font-semibold text-slate-900">{{ __('Branch Performance Today') }}</h2>
                <a href="{{ route('admin.branches.index') }}" class="text-sm font-medium text-primary-600 hover:text-primary-700">{{ __('Branches') }}</a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                @forelse ($branchPerformance as $branch)
                    <div class="rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                        <p class="text-sm font-medium text-slate-800">{{ $branch['name'] }}</p>
                        <p class="mt-2 text-xl font-semibold text-slate-900">EGP {{ number_format($branch['total'], 2) }}</p>
                        <p class="mt-1 text-xs text-slate-500">{{ __(':count orders', ['count' => $branch['orders']]) }}</p>
                    </div>
                @empty
                    <p class="text-sm text-slate-500">{{ __('No active branches yet.') }}</p>
                @endforelse
            </div>
        </x-ui.card>

        <x-ui.card>
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-base font-semibold text-slate-900">{{ __('Treasury Balances') }}</h2>
                <a href="{{ route('admin.treasuries.index') }}" class="text-sm font-medium text-primary-600 hover:text-primary-700">{{ __('View all') }}</a>
            </div>
            <div class="space-y-3">
                @forelse ($treasuryRows as $treasury)
                    <div class="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3">
                        <div>
                            <p class="text-sm font-medium text-slate-800">{{ $treasury->name }}</p>
                            <p class="text-xs text-slate-500">{{ str_replace('_', ' ', (string) $treasury->payment_method) }}</p>
                        </div>
                        <p class="text-sm font-semibold text-slate-900">EGP {{ number_format((float) $treasury->current_balance, 2) }}</p>
                    </div>
                @empty
                    <p class="text-sm text-slate-500">{{ __('No treasuries yet.') }}</p>
                @endforelse
            </div>
        </x-ui.card>
    </div>
</div>
