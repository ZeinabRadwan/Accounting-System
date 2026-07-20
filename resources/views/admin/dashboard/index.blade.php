<x-admin-layout title="Dashboard">
    <x-ui.page-header title="{{ __('Dashboard') }}" subtitle="{{ __('Overview of sales, inventory, and operations.') }}" />

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card :label="__('Today\'s Sales')" value="EGP 48,250" :hint="__('+12% vs yesterday')" icon="cash" tone="primary" />
        <x-ui.stat-card label="{{ __('Orders') }}" value="86" hint="{{ __('12 pending') }}" icon="shopping-cart" tone="success" />
        <x-ui.stat-card label="{{ __('Low Stock') }}" value="14" hint="{{ __('Needs attention') }}" icon="exclamation" tone="warning" />
        <x-ui.stat-card label="{{ __('Customers') }}" value="1,284" hint="{{ __('32 new this week') }}" icon="user-group" tone="slate" />
    </div>

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
                        @foreach ([
                            ['INV-1042', 'Dr. Sara Clinic', 'Main', 'EGP 3,450', 'paid'],
                            ['INV-1041', 'Walk-in', 'Nasr City', 'EGP 890', 'paid'],
                            ['INV-1040', 'Smile Dental', 'Main', 'EGP 6,200', 'partial'],
                            ['INV-1039', 'Cairo Care', 'Maadi', 'EGP 1,150', 'unpaid'],
                            ['INV-1038', 'Walk-in', 'Main', 'EGP 420', 'paid'],
                        ] as $row)
                            <tr>
                                <td class="py-3 pe-4 font-medium text-slate-800">{{ $row[0] }}</td>
                                <td class="py-3 pe-4 text-slate-600">{{ $row[1] }}</td>
                                <td class="py-3 pe-4 text-slate-600">{{ $row[2] }}</td>
                                <td class="py-3 pe-4 text-slate-800">{{ $row[3] }}</td>
                                <td class="py-3"><x-ui.status-badge :status="$row[4]" /></td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </x-ui.card>

        <x-ui.card>
            <h2 class="text-base font-semibold text-slate-900 mb-4">Quick Actions</h2>
            <div class="space-y-2">
                <x-ui.button href="{{ route('pos') }}" class="w-full justify-start" variant="primary">
                    <x-ui.icon name="cash" class="w-4 h-4" /> Open POS
                </x-ui.button>
                <x-ui.button href="{{ route('admin.products.index') }}" class="w-full justify-start" variant="secondary">
                    <x-ui.icon name="cube" class="w-4 h-4" /> Manage Products
                </x-ui.button>
                <x-ui.button href="{{ route('admin.inventory.index') }}" class="w-full justify-start" variant="secondary">
                    <x-ui.icon name="archive" class="w-4 h-4" /> Check Inventory
                </x-ui.button>
                <x-ui.button href="{{ route('admin.reports.index') }}" class="w-full justify-start" variant="secondary">
                    <x-ui.icon name="chart-bar" class="w-4 h-4" /> View Reports
                </x-ui.button>
            </div>
        </x-ui.card>
    </div>

    <x-ui.card>
        <h2 class="text-base font-semibold text-slate-900 mb-4">Branch Performance</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            @foreach ([
                ['Main Branch', 'EGP 22,400', '41 orders'],
                ['Nasr City', 'EGP 15,100', '28 orders'],
                ['Maadi', 'EGP 10,750', '17 orders'],
            ] as $branch)
                <div class="rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                    <p class="text-sm font-medium text-slate-800">{{ $branch[0] }}</p>
                    <p class="mt-2 text-xl font-semibold text-slate-900">{{ $branch[1] }}</p>
                    <p class="mt-1 text-xs text-slate-500">{{ $branch[2] }}</p>
                </div>
            @endforeach
        </div>
    </x-ui.card>
</x-admin-layout>
