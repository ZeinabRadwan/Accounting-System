<x-admin-layout title="Returns">
    <x-ui.page-header title="Returns" subtitle="Sales and purchase returns.">
        <x-ui.button @click="$dispatch('open-modal', 'return-form')">
            <x-ui.icon name="plus" class="w-4 h-4" /> New Return
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="This Month" value="18" icon="receipt-refund" tone="primary" />
        <x-ui.stat-card label="Sales Returns" value="11" icon="shopping-cart" tone="warning" />
        <x-ui.stat-card label="Purchase Returns" value="7" icon="truck" tone="slate" />
        <x-ui.stat-card label="Refunded" value="EGP 6.4k" icon="cash" tone="danger" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[180px]"><x-ui.search placeholder="Return # or reference..." /></div>
        <div class="w-full sm:w-40"><x-ui.select><option>All Types</option><option>Sales</option><option>Purchase</option></x-ui.select></div>
        <div class="w-full sm:w-36"><x-ui.select><option>All Status</option><option>Pending</option><option>Completed</option></x-ui.select></div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>Return #</x-ui.th>
            <x-ui.th>Type</x-ui.th>
            <x-ui.th>Reference</x-ui.th>
            <x-ui.th>Amount</x-ui.th>
            <x-ui.th>Status</x-ui.th>
            <x-ui.th>Actions</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @foreach ([
                ['RET-088', 'Sales', 'INV-1035', '450', 'completed'],
                ['RET-087', 'Purchase', 'PO-210', '1,200', 'pending'],
                ['RET-086', 'Sales', 'INV-1028', '180', 'completed'],
            ] as $row)
                <tr class="hover:bg-slate-50/80">
                    <x-ui.td class="font-medium">{{ $row[0] }}</x-ui.td>
                    <x-ui.td><x-ui.badge :variant="$row[1] === 'Sales' ? 'primary' : 'slate'">{{ $row[1] }}</x-ui.badge></x-ui.td>
                    <x-ui.td>{{ $row[2] }}</x-ui.td>
                    <x-ui.td>EGP {{ $row[3] }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$row[4]" /></x-ui.td>
                    <x-ui.td><x-ui.row-actions /></x-ui.td>
                </tr>
            @endforeach
        </x-ui.table-body>
    </x-ui.table>
    <x-ui.pagination :from="1" :to="3" :total="18" />

    <x-ui.modal name="return-form" title="New Return">
        <div class="space-y-4">
            <x-ui.select label="Type"><option>Sales Return</option><option>Purchase Return</option></x-ui.select>
            <x-ui.input label="Reference" placeholder="INV / PO number" />
            <x-ui.currency-input label="Amount" />
            <x-ui.textarea label="Reason" />
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" @click="$dispatch('close-modal', 'return-form')">Cancel</x-ui.button>
            <x-ui.button @click="$dispatch('close-modal', 'return-form'); $store.toast.show('Return created (UI only)')">Save</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</x-admin-layout>
