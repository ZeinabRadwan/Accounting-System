<x-admin-layout title="Transfers">
    <x-ui.page-header title="Transfers" subtitle="Move stock between branches.">
        <x-ui.button @click="$dispatch('open-modal', 'transfer-form')">
            <x-ui.icon name="plus" class="w-4 h-4" /> New Transfer
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="This Month" value="24" icon="switch-horizontal" tone="primary" />
        <x-ui.stat-card label="In Transit" value="3" icon="truck" tone="warning" />
        <x-ui.stat-card label="Completed" value="21" icon="check" tone="success" />
        <x-ui.stat-card label="Branches" value="3" icon="building" tone="slate" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[180px]"><x-ui.search placeholder="Transfer # or product..." /></div>
        <div class="w-full sm:w-40"><x-ui.select><option>From Branch</option><option>Main</option><option>Nasr City</option></x-ui.select></div>
        <div class="w-full sm:w-40"><x-ui.select><option>To Branch</option><option>Main</option><option>Maadi</option></x-ui.select></div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>Transfer #</x-ui.th>
            <x-ui.th>From</x-ui.th>
            <x-ui.th>To</x-ui.th>
            <x-ui.th>Items</x-ui.th>
            <x-ui.th>Status</x-ui.th>
            <x-ui.th>Actions</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @foreach ([
                ['TR-041', 'Main Branch', 'Nasr City', '5', 'pending'],
                ['TR-040', 'Nasr City', 'Maadi', '2', 'completed'],
                ['TR-039', 'Main Branch', 'Maadi', '8', 'completed'],
            ] as $row)
                <tr class="hover:bg-slate-50/80">
                    <x-ui.td class="font-medium">{{ $row[0] }}</x-ui.td>
                    <x-ui.td>{{ $row[1] }}</x-ui.td>
                    <x-ui.td>{{ $row[2] }}</x-ui.td>
                    <x-ui.td>{{ $row[3] }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$row[4]" /></x-ui.td>
                    <x-ui.td><x-ui.row-actions /></x-ui.td>
                </tr>
            @endforeach
        </x-ui.table-body>
    </x-ui.table>
    <x-ui.pagination :from="1" :to="3" :total="24" />

    <x-ui.modal name="transfer-form" title="New Transfer">
        <div class="space-y-4">
            <x-ui.select label="From Branch"><option>Main Branch</option><option>Nasr City</option></x-ui.select>
            <x-ui.select label="To Branch"><option>Maadi</option><option>Nasr City</option></x-ui.select>
            <x-ui.input label="Product" placeholder="Search product..." />
            <x-ui.quantity-stepper :value="1" />
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" @click="$dispatch('close-modal', 'transfer-form')">Cancel</x-ui.button>
            <x-ui.button @click="$dispatch('close-modal', 'transfer-form'); $store.toast.show('Transfer created (UI only)')">Create</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</x-admin-layout>
