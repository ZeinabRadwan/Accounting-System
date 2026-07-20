<div>
    <x-ui.page-header title="{{ __('Daily Closings') }}" subtitle="{{ __('Immutable scheduled closing snapshots for the full system.') }}">
        <x-ui.button variant="secondary" href="{{ route('admin.reports.index') }}">{{ __('Back to Reports') }}</x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Total Closings') }}" :value="(string) $closings->total()" icon="archive" tone="primary" />
        <x-ui.stat-card
            label="{{ __('Latest Closing') }}"
            :value="$latestClosing?->closing_datetime?->format('Y-m-d H:i') ?? '--'"
            icon="calendar"
            tone="success"
        />
        <x-ui.stat-card
            label="{{ __('Latest Net Profit') }}"
            :value="$latestClosing ? 'EGP '.number_format((float) $latestClosing->net_profit, 2) : 'EGP 0.00'"
            icon="chart-bar"
            tone="warning"
        />
    </div>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('Closing Date & Time') }}</x-ui.th>
            <x-ui.th>{{ __('Period') }}</x-ui.th>
            <x-ui.th>{{ __('Total Sales') }}</x-ui.th>
            <x-ui.th>{{ __('Total Purchases') }}</x-ui.th>
            <x-ui.th>{{ __('Total Expenses') }}</x-ui.th>
            <x-ui.th>{{ __('Net Profit') }}</x-ui.th>
            <x-ui.th>{{ __('Actions') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($closings as $closing)
                <tr class="hover:bg-slate-50/80">
                    <x-ui.td class="font-medium">{{ $closing->closing_datetime?->format('Y-m-d H:i') }}</x-ui.td>
                    <x-ui.td>{{ strtoupper($closing->closing_period) }}</x-ui.td>
                    <x-ui.td>EGP {{ number_format((float) $closing->total_sales, 2) }}</x-ui.td>
                    <x-ui.td>EGP {{ number_format((float) $closing->total_purchases, 2) }}</x-ui.td>
                    <x-ui.td>EGP {{ number_format((float) $closing->total_expenses, 2) }}</x-ui.td>
                    <x-ui.td class="font-semibold">EGP {{ number_format((float) $closing->net_profit, 2) }}</x-ui.td>
                    <x-ui.td>
                        <div class="flex items-center gap-2">
                            <x-ui.button size="sm" href="{{ route('admin.daily-closings.show', $closing) }}">{{ __('Open') }}</x-ui.button>
                            <x-ui.button size="sm" variant="secondary" href="{{ route('admin.daily-closings.print', $closing) }}" target="_blank">
                                {{ __('Print') }}
                            </x-ui.button>
                        </div>
                    </x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="7" class="text-center text-slate-500 py-8">{{ __('No daily closings have been generated yet.') }}</x-ui.td>
                </tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <div class="mt-4">
        <x-ui.pagination
            :from="$closings->firstItem() ?? 0"
            :to="$closings->lastItem() ?? 0"
            :total="$closings->total()"
            livewire
            :has-pages="$closings->hasPages()"
            :on-first-page="$closings->onFirstPage()"
            :has-more-pages="$closings->hasMorePages()"
        />
    </div>
</div>
