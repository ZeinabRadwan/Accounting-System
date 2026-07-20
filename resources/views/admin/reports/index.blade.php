<x-admin-layout :title="__('Reports')">
    <x-ui.page-header title="{{ __('Reports') }}" subtitle="{{ __('Operational and financial insights.') }}" />

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        @foreach (collect([
            [__('Inventory Report'), __('Stock by branch and product'), 'admin.reports.inventory', 'archive', 'primary'],
            [__('Product Report'), __('Sales and movement by SKU'), 'admin.reports.product', 'cube', 'success'],
            [__('Customer Report'), __('Balances and purchase history'), 'admin.reports.customer', 'user-group', 'warning'],
            [__('Client Statement'), __('Ledger for a selected customer'), 'admin.reports.customer-statement', 'clipboard', 'primary'],
            [__('Supplier Statement'), __('Ledger for a selected supplier'), 'admin.suppliers.index', 'truck', 'warning'],
            auth()->user()?->isSuperAdmin() ? [__('Daily Closings'), __('Immutable automatic closing snapshots'), 'admin.daily-closings.index', 'calendar', 'success'] : null,
            [__('Profit Report'), __('Margins and net performance'), 'admin.reports.profit', 'chart-bar', 'danger'],
            [__('Treasury Report'), __('Balances, income, and expenses'), 'admin.reports.treasury', 'cash', 'primary'],
        ])->filter() as $card)
            <a href="{{ route($card[2]) }}" class="block group">
                <x-ui.card class="h-full !p-5 group-hover:border-primary-200 group-hover:shadow-soft ui-transition">
                    <div class="rounded-xl w-10 h-10 flex items-center justify-center mb-4
                        {{ $card[4] === 'primary' ? 'bg-primary-50 text-primary-600' : '' }}
                        {{ $card[4] === 'success' ? 'bg-success-50 text-success-600' : '' }}
                        {{ $card[4] === 'warning' ? 'bg-warning-50 text-warning-600' : '' }}
                        {{ $card[4] === 'danger' ? 'bg-danger-50 text-danger-600' : '' }}
                    ">
                        <x-ui.icon :name="$card[3]" class="w-5 h-5" />
                    </div>
                    <h3 class="font-semibold text-slate-900">{{ $card[0] }}</h3>
                    <p class="mt-1 text-sm text-slate-500">{{ $card[1] }}</p>
                </x-ui.card>
            </a>
        @endforeach
    </div>

    <x-ui.card>
        <div class="flex flex-col sm:flex-row sm:items-end gap-3 mb-4">
            <div class="flex-1"><x-ui.date-picker label="{{ __('From') }}" /></div>
            <div class="flex-1"><x-ui.date-picker label="{{ __('To') }}" /></div>
            <div class="flex-1"><x-ui.select label="{{ __('Branch') }}"><option>{{ __('All Branches') }}</option><option>{{ __('Main') }}</option></x-ui.select></div>
            <x-ui.button class="sm:mb-0.5">{{ __('Generate') }}</x-ui.button>
        </div>
        <x-ui.empty-state title="{{ __('Select a report') }}" description="{{ __('Choose a report card above or set filters to preview results.') }}" icon="chart-bar" />
    </x-ui.card>
</x-admin-layout>
