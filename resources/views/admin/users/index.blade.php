<x-admin-layout title="Users">
    <x-ui.page-header title="Users" subtitle="Manage admin and sales accounts.">
        <x-ui.button @click="$dispatch('open-modal', 'user-form')">
            <x-ui.icon name="plus" class="w-4 h-4" /> Add User
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="Total Users" value="12" icon="users" tone="primary" />
        <x-ui.stat-card label="Admins" value="2" icon="sparkles" tone="success" />
        <x-ui.stat-card label="Sales" value="10" icon="cash" tone="warning" />
        <x-ui.stat-card label="Active" value="11" icon="check" tone="slate" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[200px]"><x-ui.search placeholder="Search users..." /></div>
        <div class="w-full sm:w-40">
            <x-ui.select>
                <option>All Roles</option>
                <option>Admin</option>
                <option>Sales</option>
            </x-ui.select>
        </div>
        <div class="w-full sm:w-40">
            <x-ui.select>
                <option>All Branches</option>
                <option>Main Branch</option>
                <option>Nasr City</option>
                <option>Maadi</option>
            </x-ui.select>
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>User</x-ui.th>
            <x-ui.th>Role</x-ui.th>
            <x-ui.th>Branch</x-ui.th>
            <x-ui.th>Status</x-ui.th>
            <x-ui.th>Actions</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @foreach ([
                ['Admin User', 'admin@dentallink.co', 'Admin', '—', 'active'],
                ['Omar Sales', 'omar@dentallink.co', 'Sales', 'Main Branch', 'active'],
                ['Nour Cashier', 'nour@dentallink.co', 'Sales', 'Nasr City', 'active'],
                ['Hana Sales', 'hana@dentallink.co', 'Sales', 'Maadi', 'inactive'],
            ] as $row)
                <tr class="hover:bg-slate-50/80">
                    <x-ui.td>
                        <div class="flex items-center gap-3">
                            <x-ui.avatar :name="$row[0]" size="sm" />
                            <div>
                                <p class="font-medium text-slate-900">{{ $row[0] }}</p>
                                <p class="text-xs text-slate-500">{{ $row[1] }}</p>
                            </div>
                        </div>
                    </x-ui.td>
                    <x-ui.td><x-ui.badge :variant="$row[2] === 'Admin' ? 'primary' : 'slate'">{{ $row[2] }}</x-ui.badge></x-ui.td>
                    <x-ui.td>{{ $row[3] }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$row[4]" /></x-ui.td>
                    <x-ui.td><x-ui.row-actions /></x-ui.td>
                </tr>
            @endforeach
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.pagination :from="1" :to="4" :total="12" />

    <x-ui.modal name="user-form" title="Add User">
        <div class="space-y-4">
            <x-ui.input label="Name" placeholder="Full name" />
            <x-ui.input label="Email" type="email" placeholder="user@dentallink.co" />
            <x-ui.select label="Role">
                <option value="admin">Admin</option>
                <option value="sales">Sales</option>
            </x-ui.select>
            <x-ui.select label="Branch">
                <option>Main Branch</option>
                <option>Nasr City</option>
                <option>Maadi</option>
            </x-ui.select>
            <x-ui.input label="Password" type="password" />
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" @click="$dispatch('close-modal', 'user-form')">Cancel</x-ui.button>
            <x-ui.button @click="$dispatch('close-modal', 'user-form'); $store.toast.show('User saved (UI only)')">Save</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</x-admin-layout>
