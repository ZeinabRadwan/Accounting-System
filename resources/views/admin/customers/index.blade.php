<x-admin-layout title="Customers">
    <x-ui.page-header title="Customers" subtitle="Clinics, walk-ins, and account balances.">
        <x-ui.button @click="$dispatch('open-modal', 'customer-form')">
            <x-ui.icon name="plus" class="w-4 h-4" /> Add Customer
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="Total Customers" value="1,284" icon="user-group" tone="primary" />
        <x-ui.stat-card label="Active" value="1,190" icon="check" tone="success" />
        <x-ui.stat-card label="With Balance" value="86" icon="cash" tone="warning" />
        <x-ui.stat-card label="New This Month" value="42" icon="plus" tone="slate" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[200px]"><x-ui.search placeholder="Search name or phone..." /></div>
        <div class="w-full sm:w-40">
            <x-ui.select><option>All Status</option><option>Active</option><option>Inactive</option></x-ui.select>
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>Customer</x-ui.th>
            <x-ui.th>Phone</x-ui.th>
            <x-ui.th>Balance</x-ui.th>
            <x-ui.th>Status</x-ui.th>
            <x-ui.th>Actions</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @foreach ([
                ['Dr. Sara Clinic', '01001234567', 'EGP 2,400', 'active'],
                ['Smile Dental', '01007654321', 'EGP 0', 'active'],
                ['Cairo Care', '01112223334', 'EGP 850', 'active'],
                ['Walk-in Guest', '—', 'EGP 0', 'inactive'],
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
    <x-ui.pagination :from="1" :to="4" :total="1284" />

    <x-ui.modal name="customer-form" title="Add Customer">
        <div class="space-y-4">
            <x-ui.input label="Name" placeholder="Clinic or customer name" />
            <x-ui.input label="Phone" placeholder="01xxxxxxxxx" />
            <x-ui.textarea label="Notes" placeholder="Optional notes" />
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" @click="$dispatch('close-modal', 'customer-form')">Cancel</x-ui.button>
            <x-ui.button @click="$dispatch('close-modal', 'customer-form'); $store.toast.show('Customer saved (UI only)')">Save</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</x-admin-layout>
