<x-admin-layout title="Sales">
    <x-ui.page-header title="Sales" subtitle="Invoices and payment status.">
        <x-ui.button href="{{ route('pos') }}">
            <x-ui.icon name="plus" class="w-4 h-4" /> New Sale (POS)
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="Today" value="EGP 48.2k" icon="cash" tone="primary" />
        <x-ui.stat-card label="Invoices" value="86" icon="clipboard" tone="success" />
        <x-ui.stat-card label="Partial" value="9" icon="exclamation" tone="warning" />
        <x-ui.stat-card label="Unpaid" value="4" icon="x" tone="danger" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[180px]"><x-ui.search placeholder="Invoice # or customer..." /></div>
        <div class="w-full sm:w-40"><x-ui.select><option>All Branches</option><option>Main</option><option>Nasr City</option></x-ui.select></div>
        <div class="w-full sm:w-36"><x-ui.select><option>All Status</option><option>Paid</option><option>Partial</option><option>Unpaid</option></x-ui.select></div>
        <div class="w-full sm:w-40"><x-ui.date-picker /></div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>Invoice</x-ui.th>
            <x-ui.th>Customer</x-ui.th>
            <x-ui.th>Branch</x-ui.th>
            <x-ui.th>Total</x-ui.th>
            <x-ui.th>Paid</x-ui.th>
            <x-ui.th>Status</x-ui.th>
            <x-ui.th>Actions</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @foreach ([
                ['INV-1042', 'Dr. Sara Clinic', 'Main', '3,450', '3,450', 'paid'],
                ['INV-1041', 'Walk-in', 'Nasr City', '890', '890', 'paid'],
                ['INV-1040', 'Smile Dental', 'Main', '6,200', '3,000', 'partial'],
                ['INV-1039', 'Cairo Care', 'Maadi', '1,150', '0', 'unpaid'],
            ] as $row)
                <tr class="hover:bg-slate-50/80">
                    <x-ui.td class="font-medium text-slate-900">{{ $row[0] }}</x-ui.td>
                    <x-ui.td>{{ $row[1] }}</x-ui.td>
                    <x-ui.td>{{ $row[2] }}</x-ui.td>
                    <x-ui.td>EGP {{ $row[3] }}</x-ui.td>
                    <x-ui.td>EGP {{ $row[4] }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$row[5]" /></x-ui.td>
                    <x-ui.td><x-ui.row-actions /></x-ui.td>
                </tr>
            @endforeach
        </x-ui.table-body>
    </x-ui.table>
    <x-ui.pagination :from="1" :to="4" :total="86" />
</x-admin-layout>
