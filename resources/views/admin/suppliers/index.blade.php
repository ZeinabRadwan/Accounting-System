<x-admin-layout title="Suppliers">
    <x-ui.page-header title="Suppliers" subtitle="Vendors and purchase contacts.">
        <x-ui.button @click="$dispatch('open-modal', 'supplier-form')">
            <x-ui.icon name="plus" class="w-4 h-4" /> Add Supplier
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="Total Suppliers" value="36" icon="truck" tone="primary" />
        <x-ui.stat-card label="Active" value="31" icon="check" tone="success" />
        <x-ui.stat-card label="Open POs" value="8" icon="clipboard" tone="warning" />
        <x-ui.stat-card label="Payable" value="EGP 54k" icon="cash" tone="danger" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[200px]"><x-ui.search placeholder="Search suppliers..." /></div>
        <div class="w-full sm:w-40">
            <x-ui.select><option>All Status</option><option>Active</option><option>Inactive</option></x-ui.select>
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>Supplier</x-ui.th>
            <x-ui.th>Contact</x-ui.th>
            <x-ui.th>Phone</x-ui.th>
            <x-ui.th>Status</x-ui.th>
            <x-ui.th>Actions</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @foreach ([
                ['MedSupply Egypt', 'Ahmed Hassan', '01005556666', 'active'],
                ['Dental World', 'Mona Ali', '01007778888', 'active'],
                ['Cairo Imports', 'Youssef Nabil', '01221112222', 'inactive'],
            ] as $row)
                <tr class="hover:bg-slate-50/80">
                    <x-ui.td class="font-medium text-slate-900">{{ $row[0] }}</x-ui.td>
                    <x-ui.td>{{ $row[1] }}</x-ui.td>
                    <x-ui.td>{{ $row[2] }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$row[3]" /></x-ui.td>
                    <x-ui.td><x-ui.row-actions /></x-ui.td>
                </tr>
            @endforeach
        </x-ui.table-body>
    </x-ui.table>
    <x-ui.pagination :from="1" :to="3" :total="36" />

    <x-ui.modal name="supplier-form" title="Add Supplier">
        <div class="space-y-4">
            <x-ui.input label="Company Name" />
            <x-ui.input label="Contact Person" />
            <x-ui.input label="Phone" />
            <x-ui.textarea label="Address" />
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" @click="$dispatch('close-modal', 'supplier-form')">Cancel</x-ui.button>
            <x-ui.button @click="$dispatch('close-modal', 'supplier-form'); $store.toast.show('Supplier saved (UI only)')">Save</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</x-admin-layout>
