<x-admin-layout title="Branches">
    <div x-data="{ showCreate: false }">
        <x-ui.page-header title="Branches" subtitle="Manage store locations and status.">
            <x-ui.button @click="showCreate = true; $dispatch('open-modal', 'branch-form')">
                <x-ui.icon name="plus" class="w-4 h-4" /> Add Branch
            </x-ui.button>
        </x-ui.page-header>

        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <x-ui.stat-card label="Total Branches" value="3" icon="building" tone="primary" />
            <x-ui.stat-card label="Active" value="3" icon="check" tone="success" />
            <x-ui.stat-card label="Inactive" value="0" icon="x" tone="slate" />
            <x-ui.stat-card label="Users Assigned" value="12" icon="users" tone="warning" />
        </div>

        <x-ui.filter-bar class="mb-4">
            <div class="flex-1 min-w-[200px]"><x-ui.search placeholder="Search branches..." /></div>
            <div class="w-full sm:w-40">
                <x-ui.select>
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                </x-ui.select>
            </div>
        </x-ui.filter-bar>

        <x-ui.table>
            <x-ui.table-head>
                <x-ui.th>Branch</x-ui.th>
                <x-ui.th>Code</x-ui.th>
                <x-ui.th>Phone</x-ui.th>
                <x-ui.th>Status</x-ui.th>
                <x-ui.th>Actions</x-ui.th>
            </x-ui.table-head>
            <x-ui.table-body>
                @foreach ([['Main Branch', 'BR-001', '0100 111 2222', 'active'], ['Nasr City', 'BR-002', '0100 333 4444', 'active'], ['Maadi', 'BR-003', '0100 555 6666', 'active']] as $row)
                    <tr class="hover:bg-slate-50/80">
                        <x-ui.td>
                            <p class="font-medium text-slate-900">{{ $row[0] }}</p>
                        </x-ui.td>
                        <x-ui.td class="text-slate-500">{{ $row[1] }}</x-ui.td>
                        <x-ui.td>{{ $row[2] }}</x-ui.td>
                        <x-ui.td><x-ui.status-badge :status="$row[3]" /></x-ui.td>
                        <x-ui.td><x-ui.row-actions /></x-ui.td>
                    </tr>
                @endforeach
            </x-ui.table-body>
        </x-ui.table>

        <x-ui.pagination :from="1" :to="3" :total="3" />

        <x-ui.modal name="branch-form" title="Add Branch">
            <div class="space-y-4">
                <x-ui.input label="Name" placeholder="Branch name" />
                <x-ui.input label="Code" placeholder="BR-004" />
                <x-ui.input label="Phone" placeholder="01xxxxxxxxx" />
                <x-ui.switch label="Active" :checked="true" />
            </div>
            <x-slot:footer>
                <x-ui.button variant="secondary" @click="$dispatch('close-modal', 'branch-form')">Cancel</x-ui.button>
                <x-ui.button
                    @click="$dispatch('close-modal', 'branch-form'); $store.toast.show('Branch saved (UI only)')">Save</x-ui.button>
            </x-slot:footer>
        </x-ui.modal>
    </div>
</x-admin-layout>
