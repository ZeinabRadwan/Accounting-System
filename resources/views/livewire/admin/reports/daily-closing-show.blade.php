<div>
    <x-ui.page-header
        title="{{ __('Daily Closing') }}"
        subtitle="{{ $closing->closing_datetime?->format('Y-m-d H:i') . ' · ' . strtoupper($closing->closing_period) }}"
    >
        <x-ui.button variant="secondary" href="{{ route('admin.daily-closings.index') }}">{{ __('Back') }}</x-ui.button>
        <x-ui.button href="{{ route('admin.daily-closings.print', $closing) }}" target="_blank">{{ __('Print / Export') }}</x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Total Sales') }}" :value="'EGP '.number_format((float) $closing->total_sales, 2)" icon="shopping-cart" tone="primary" />
        <x-ui.stat-card label="{{ __('Total Purchases') }}" :value="'EGP '.number_format((float) $closing->total_purchases, 2)" icon="clipboard" tone="warning" />
        <x-ui.stat-card label="{{ __('Net Sales') }}" :value="'EGP '.number_format((float) $closing->net_sales, 2)" icon="chart-bar" tone="success" />
        <x-ui.stat-card label="{{ __('Net Profit') }}" :value="'EGP '.number_format((float) $closing->net_profit, 2)" icon="cash" tone="danger" />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <x-ui.card>
            <h3 class="text-base font-semibold text-slate-900 mb-4">{{ __('Totals') }}</h3>
            <dl class="space-y-3 text-sm">
                <div class="flex items-center justify-between gap-4">
                    <dt class="text-slate-500">{{ __('Total Sales Returns') }}</dt>
                    <dd class="font-medium text-slate-900">EGP {{ number_format((float) $closing->total_sales_returns, 2) }}</dd>
                </div>
                <div class="flex items-center justify-between gap-4">
                    <dt class="text-slate-500">{{ __('Total Purchase Returns') }}</dt>
                    <dd class="font-medium text-slate-900">EGP {{ number_format((float) $closing->total_purchase_returns, 2) }}</dd>
                </div>
                <div class="flex items-center justify-between gap-4">
                    <dt class="text-slate-500">{{ __('Total Expenses') }}</dt>
                    <dd class="font-medium text-slate-900">EGP {{ number_format((float) $closing->total_expenses, 2) }}</dd>
                </div>
                <div class="flex items-center justify-between gap-4">
                    <dt class="text-slate-500">{{ __('Closing Period') }}</dt>
                    <dd class="font-medium text-slate-900">{{ strtoupper($closing->closing_period) }}</dd>
                </div>
            </dl>
        </x-ui.card>

        <x-ui.card>
            <h3 class="text-base font-semibold text-slate-900 mb-4">{{ __('Document Counts') }}</h3>
            <dl class="grid grid-cols-2 gap-3 text-sm">
                <div class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                    <dt class="text-slate-500">{{ __('Sales Invoices') }}</dt>
                    <dd class="mt-1 text-lg font-semibold text-slate-900">{{ number_format((int) ($counts['sales_invoices'] ?? 0)) }}</dd>
                </div>
                <div class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                    <dt class="text-slate-500">{{ __('Purchase Invoices') }}</dt>
                    <dd class="mt-1 text-lg font-semibold text-slate-900">{{ number_format((int) ($counts['purchase_invoices'] ?? 0)) }}</dd>
                </div>
                <div class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                    <dt class="text-slate-500">{{ __('Sales Returns') }}</dt>
                    <dd class="mt-1 text-lg font-semibold text-slate-900">{{ number_format((int) ($counts['sales_returns'] ?? 0)) }}</dd>
                </div>
                <div class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                    <dt class="text-slate-500">{{ __('Purchase Returns') }}</dt>
                    <dd class="mt-1 text-lg font-semibold text-slate-900">{{ number_format((int) ($counts['purchase_returns'] ?? 0)) }}</dd>
                </div>
                <div class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 col-span-2">
                    <dt class="text-slate-500">{{ __('Expense Transactions') }}</dt>
                    <dd class="mt-1 text-lg font-semibold text-slate-900">{{ number_format((int) ($counts['expense_transactions'] ?? 0)) }}</dd>
                </div>
            </dl>
        </x-ui.card>
    </div>

    <x-ui.card>
        <div class="flex items-center justify-between gap-3 mb-4">
            <div>
                <h3 class="text-base font-semibold text-slate-900">{{ __('Treasury Balances') }}</h3>
                <p class="text-sm text-slate-500">{{ __('Opening, movement, and closing balances captured at this closing.') }}</p>
            </div>
            <div class="text-sm font-semibold text-slate-900">
                {{ __('Total Closing Balance') }}: EGP {{ number_format((float) $treasuryClosingTotal, 2) }}
            </div>
        </div>

        <x-ui.table>
            <x-ui.table-head>
                <x-ui.th>{{ __('Treasury Name') }}</x-ui.th>
                <x-ui.th>{{ __('Opening Balance') }}</x-ui.th>
                <x-ui.th>{{ __('Total Income') }}</x-ui.th>
                <x-ui.th>{{ __('Total Expenses') }}</x-ui.th>
                <x-ui.th>{{ __('Closing Balance') }}</x-ui.th>
            </x-ui.table-head>
            <x-ui.table-body>
                @forelse ($treasuries as $row)
                    <tr class="hover:bg-slate-50/80">
                        <x-ui.td class="font-medium">{{ $row['treasury_name'] }}</x-ui.td>
                        <x-ui.td>EGP {{ number_format((float) $row['opening_balance'], 2) }}</x-ui.td>
                        <x-ui.td>EGP {{ number_format((float) $row['total_income'], 2) }}</x-ui.td>
                        <x-ui.td>EGP {{ number_format((float) $row['total_expenses'], 2) }}</x-ui.td>
                        <x-ui.td class="font-semibold">EGP {{ number_format((float) $row['closing_balance'], 2) }}</x-ui.td>
                    </tr>
                @empty
                    <tr>
                        <x-ui.td colspan="5" class="text-center text-slate-500 py-8">{{ __('No treasury balances captured.') }}</x-ui.td>
                    </tr>
                @endforelse
            </x-ui.table-body>
        </x-ui.table>
    </x-ui.card>
</div>
