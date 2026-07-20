<x-admin-layout title="Categories">
    <x-ui.page-header title="Categories" subtitle="Product category hierarchy.">
        <x-ui.button variant="secondary" href="{{ route('admin.products.index') }}">Back to Products</x-ui.button>
        <x-ui.button @click="$dispatch('open-modal', 'category-form')">
            <x-ui.icon name="plus" class="w-4 h-4" /> Add Category
        </x-ui.button>
    </x-ui.page-header>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>Name</x-ui.th>
            <x-ui.th>Products</x-ui.th>
            <x-ui.th>Status</x-ui.th>
            <x-ui.th>Actions</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @foreach ([['Consumables', '64', 'active'], ['Equipment', '28', 'active'], ['Materials', '36', 'active']] as $row)
                <tr class="hover:bg-slate-50/80">
                    <x-ui.td class="font-medium">{{ $row[0] }}</x-ui.td>
                    <x-ui.td>{{ $row[1] }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$row[2]" /></x-ui.td>
                    <x-ui.td><x-ui.row-actions /></x-ui.td>
                </tr>
            @endforeach
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.modal name="category-form" title="Add Category">
        <x-ui.input label="Name" placeholder="Category name" />
        <x-slot:footer>
            <x-ui.button variant="secondary" @click="$dispatch('close-modal', 'category-form')">Cancel</x-ui.button>
            <x-ui.button @click="$dispatch('close-modal', 'category-form'); $store.toast.show('Category saved (UI only)')">Save</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</x-admin-layout>
