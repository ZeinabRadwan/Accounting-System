<x-admin-layout title="Purchases">
    <x-ui.page-header title="Purchases" subtitle="Purchase orders and receiving.">
        <x-ui.button @click="$dispatch('open-modal', 'purchase-form')">
            <x-ui.icon name="plus" class="w-4 h-4" /> New Purchase
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="This Month" value="EGP 92k" icon="clipboard" tone="primary" />
        <x-ui.stat-card label="Open POs" value="8" icon="exclamation" tone="warning" />
        <x-ui.stat-card label="Received" value="21" icon="check" tone="success" />
        <x-ui.stat-card label="Suppliers" value="12" icon="truck" tone="slate" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[180px]"><x-ui.search placeholder="PO # or supplier..." /></div>
        <div class="w-full sm:w-44"><x-ui.select><option>All Suppliers</option><option>MedSupply Egypt</option><option>Dental World</option></x-ui.select></div>
        <div class="w-full sm:w-36"><x-ui.select><option>All Status</option><option>Pending</option><option>Completed</option></x-ui.select></div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>PO #</x-ui.th>
            <x-ui.th>Supplier</x-ui.th>
            <x-ui.th>Branch</x-ui.th>
            <x-ui.th>Total</x-ui.th>
            <x-ui.th>Status</x-ui.th>
            <x-ui.th>Actions</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @foreach ([
                ['PO-220', 'MedSupply Egypt', 'Main', '12,500', 'pending'],
                ['PO-219', 'Dental World', 'Nasr City', '8,900', 'completed'],
                ['PO-218', 'Cairo Imports', 'Maadi', '4,200', 'completed'],
            ] as $row)
                <tr class="hover:bg-slate-50/80">
                    <x-ui.td class="font-medium">{{ $row[0] }}</x-ui.td>
                    <x-ui.td>{{ $row[1] }}</x-ui.td>
                    <x-ui.td>{{ $row[2] }}</x-ui.td>
                    <x-ui.td>EGP {{ $row[3] }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$row[4]" /></x-ui.td>
                    <x-ui.td><x-ui.row-actions /></x-ui.td>
                </tr>
            @endforeach
        </x-ui.table-body>
    </x-ui.table>
    <x-ui.pagination :from="1" :to="3" :total="29" />

    <x-ui.modal name="purchase-form" title="New Purchase" maxWidth="xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <x-ui.select label="Supplier"><option>MedSupply Egypt</option><option>Dental World</option></x-ui.select>
            <x-ui.select label="Branch"><option>Main Branch</option><option>Nasr City</option></x-ui.select>
            <x-ui.date-picker label="Order Date" />
            <x-ui.currency-input label="Expected Total" />
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" @click="$dispatch('close-modal', 'purchase-form')">Cancel</x-ui.button>
            <x-ui.button @click="$dispatch('close-modal', 'purchase-form'); $store.toast.show('Purchase draft created (UI only)')">Create</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</x-admin-layout>
