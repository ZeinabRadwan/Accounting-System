@php
$nav = [
    ['label' => __('Dashboard'), 'route' => 'admin.dashboard', 'icon' => 'home'],
    ['label' => __('Branches'), 'route' => 'admin.branches.index', 'icon' => 'building'],
    ['label' => __('Users'), 'route' => 'admin.users.index', 'icon' => 'users'],
    ['label' => __('Products'), 'route' => 'admin.products.index', 'icon' => 'cube'],
    ['label' => __('Customers'), 'route' => 'admin.customers.index', 'icon' => 'user-group'],
    ['label' => __('Suppliers'), 'route' => 'admin.suppliers.index', 'icon' => 'truck'],
    ['label' => __('Inventory'), 'route' => 'admin.inventory.index', 'icon' => 'archive'],
    ['label' => __('Inventory Alerts'), 'route' => 'admin.inventory.alerts', 'icon' => 'exclamation'],
    ['label' => __('Sales'), 'route' => 'admin.sales.index', 'icon' => 'shopping-cart'],
    ['label' => __('Purchases'), 'route' => 'admin.purchases.index', 'icon' => 'clipboard'],
    ['label' => __('Returns'), 'route' => 'admin.returns.index', 'icon' => 'receipt-refund'],
    ['label' => __('Transfers'), 'route' => 'admin.transfers.index', 'icon' => 'switch-horizontal'],
    ['label' => __('Treasuries'), 'route' => 'admin.treasuries.index', 'icon' => 'cash'],
    ['label' => __('Expenses'), 'route' => 'admin.expenses.index', 'icon' => 'receipt-refund'],
    ['label' => __('Reports'), 'route' => 'admin.reports.index', 'icon' => 'chart-bar'],
    ['label' => __('Settings'), 'route' => 'admin.settings.index', 'icon' => 'cog'],
];

if (auth()->user()?->isSuperAdmin()) {
    array_splice($nav, count($nav) - 1, 0, [[
        'label' => __('Daily Closings'),
        'route' => 'admin.daily-closings.index',
        'icon' => 'calendar',
    ]]);
}
@endphp

<aside {{ $attributes->merge(['class' => 'flex flex-col h-full bg-white border-e border-slate-200']) }}>
    <div class="flex items-center gap-2.5 px-5 h-16 border-b border-slate-100">
        <div class="w-8 h-8 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold text-sm">DL</div>
        <div>
            <p class="text-sm font-semibold text-slate-900 leading-tight">DentalLink</p>
            <p class="text-[11px] text-slate-500 leading-tight">ERP & POS</p>
        </div>
    </div>

    <nav class="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        @foreach ($nav as $item)
            @php $active = request()->routeIs($item['route']) || request()->routeIs(str_replace('.index', '.*', $item['route'])); @endphp
            <a
                href="{{ route($item['route']) }}"
                @click="$store.sidebar.close()"
                class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ui-transition {{ $active ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900' }}"
            >
                <x-ui.icon :name="$item['icon']" class="w-5 h-5 shrink-0 {{ $active ? 'text-primary-600' : 'text-slate-400' }}" />
                {{ $item['label'] }}
            </a>
        @endforeach
    </nav>

    <div class="p-3 border-t border-slate-100 space-y-0.5">
        <a href="{{ route('pos') }}" class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
            <x-ui.icon name="cash" class="w-5 h-5 text-slate-400" />
            {{ __('Open POS') }}
        </a>
    </div>
</aside>
