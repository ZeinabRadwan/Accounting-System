<x-admin-layout title="Inventory">
    <x-ui.page-header title="Inventory" subtitle="Stock levels across branches.">
        <x-ui.button variant="secondary" @click="$dispatch('open-modal', 'stock-adjust')">
            <x-ui.icon name="adjustments" class="w-4 h-4" /> Adjust Stock
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="Products" value="128" icon="cube" tone="primary" />
        <x-ui.stat-card label="Low Stock" value="14" hint="Below threshold" icon="exclamation" tone="warning" />
        <x-ui.stat-card label="Out of Stock" value="5" icon="x" tone="danger" />
        <x-ui.stat-card label="Branches" value="3" icon="building" tone="slate" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="w-full sm:w-44">
            <x-ui.select>
                <option>All Branches</option>
                <option>Main Branch</option>
                <option>Nasr City</option>
                <option>Maadi</option>
            </x-ui.select>
        </div>
        <div class="w-full sm:w-44">
            <x-ui.select>
                <option>All Categories</option>
                <option>Consumables</option>
                <option>Equipment</option>
                <option>Materials</option>
            </x-ui.select>
        </div>
        <div class="flex-1 min-w-[200px]"><x-ui.search placeholder="Search product..." /></div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>Product</x-ui.th>
            <x-ui.th>Branch</x-ui.th>
            <x-ui.th>Quantity</x-ui.th>
            <x-ui.th>Status</x-ui.th>
            <x-ui.th>Actions</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @foreach ([
                ['Nitrile Gloves M', 'SKU-1001', 'Main Branch', '240', 'in_stock'],
                ['Surgical Mask', 'SKU-1002', 'Nasr City', '18', 'low_stock'],
                ['Diamond Bur Set', 'SKU-2001', 'Maadi', '0', 'out_of_stock'],
                ['Composite Resin A2', 'SKU-3001', 'Main Branch', '56', 'in_stock'],
                ['Alginate Powder', 'SKU-3002', 'Nasr City', '7', 'low_stock'],
            ] as $row)
                <tr class="hover:bg-slate-50/80">
                    <x-ui.td>
                        <p class="font-medium text-slate-900">{{ $row[0] }}</p>
                        <p class="text-xs text-slate-500">{{ $row[1] }}</p>
                    </x-ui.td>
                    <x-ui.td>{{ $row[2] }}</x-ui.td>
                    <x-ui.td class="font-semibold text-slate-900">{{ $row[3] }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$row[4]" /></x-ui.td>
                    <x-ui.td>
                        <div class="flex items-center gap-1">
                            <button type="button" class="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100" title="View" @click="$dispatch('open-drawer', 'stock-view')">
                                <x-ui.icon name="eye" class="w-4 h-4" />
                            </button>
                            <button type="button" class="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100" title="Adjust" @click="$dispatch('open-modal', 'stock-adjust')">
                                <x-ui.icon name="adjustments" class="w-4 h-4" />
                            </button>
                        </div>
                    </x-ui.td>
                </tr>
            @endforeach
        </x-ui.table-body>
    </x-ui.table>
    <x-ui.pagination :from="1" :to="5" :total="128" />

    <x-ui.modal name="stock-adjust" title="Adjust Stock">
        <div class="space-y-4">
            <x-ui.select label="Branch"><option>Main Branch</option><option>Nasr City</option><option>Maadi</option></x-ui.select>
            <x-ui.input label="Product" value="Nitrile Gloves M" disabled />
            <x-ui.quantity-stepper :value="10" />
            <x-ui.textarea label="Reason" placeholder="Adjustment note" />
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" @click="$dispatch('close-modal', 'stock-adjust')">Cancel</x-ui.button>
            <x-ui.button @click="$dispatch('close-modal', 'stock-adjust'); $store.toast.show('Stock adjusted (UI only)')">Apply</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>

    <x-ui.drawer name="stock-view" title="Stock Details">
        <dl class="space-y-4 text-sm">
            <div><dt class="text-slate-500">Product</dt><dd class="font-medium mt-0.5">Nitrile Gloves M</dd></div>
            <div><dt class="text-slate-500">Branch</dt><dd class="mt-0.5">Main Branch</dd></div>
            <div><dt class="text-slate-500">Quantity</dt><dd class="mt-0.5 text-lg font-semibold">240</dd></div>
            <div><dt class="text-slate-500">Status</dt><dd class="mt-1"><x-ui.status-badge status="in_stock" /></dd></div>
        </dl>
    </x-ui.drawer>
</x-admin-layout>
