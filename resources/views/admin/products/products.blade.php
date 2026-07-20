<x-admin-layout title="Products">
    <x-ui.page-header title="Products" subtitle="Catalog, units, pricing, and availability.">
        <x-ui.button variant="secondary" href="{{ route('admin.products.categories') }}">Categories</x-ui.button>
        <x-ui.button @click="$dispatch('open-modal', { name: 'product-form' })">
            <x-ui.icon name="plus" class="w-4 h-4" /> Add Product
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="Total Products" :value="$productCount ?? 0" icon="cube" tone="primary" />
        <x-ui.stat-card label="Active Products" :value="$activeProducts ?? 0" icon="check" tone="success" />
        <x-ui.stat-card label="Categories" :value="$categoriesCount ?? 0" icon="archive" tone="warning" />
        <x-ui.stat-card label="Units" :value="$unitsCount ?? 0" icon="adjustments" tone="slate" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <form method="GET" class="contents">
            <div class="flex-1 min-w-[200px]">
                <x-ui.search placeholder="Search name or SKU..." name="q" :value="$filters['q'] ?? ''"/>
            </div>
            <div class="w-full sm:w-44">
                <x-ui.select name="category_id">
                    <option value="">All Categories</option>
                    @foreach(($categories ?? collect()) as $cat)
                        <option value="{{ $cat->id }}" @selected(($filters['category_id'] ?? null)===$cat->id)>{{ $cat->name }}</option>
                    @endforeach
                </x-ui.select>
            </div>
            <div class="w-full sm:w-36">
                <x-ui.select name="status">
                    <option value="">All Status</option>
                    <option value="active" @selected(($filters['status'] ?? null)==='active')>Active</option>
                    <option value="inactive" @selected(($filters['status'] ?? null)==='inactive')>Inactive</option>
                </x-ui.select>
            </div>
            <div class="hidden">
                <button type="submit">Apply</button>
            </div>
        </form>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>Product</x-ui.th>
            <x-ui.th>Category</x-ui.th>
            <x-ui.th>Units</x-ui.th>
            <x-ui.th>Base Unit</x-ui.th>
            <x-ui.th>Status</x-ui.th>
            <x-ui.th>Actions</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @isset($products)
            @forelse ($products as $product)
                <tr class="hover:bg-slate-50/80">
                    <x-ui.td>
                        <p class="font-medium text-slate-900">{{ $product->display_name }}</p>
                        <p class="text-xs text-slate-500">{{ $product->sku }}</p>
                    </x-ui.td>
                    <x-ui.td>{{ $product->category?->name }}</x-ui.td>
                    <x-ui.td>{{ $product->units?->count() ?? 0 }}</x-ui.td>
                    <x-ui.td>{{ $product->base_unit }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$product->is_active ? 'active' : 'inactive'" /></x-ui.td>
                    <x-ui.td>
                        <x-ui.row-actions
                            on-view="$dispatch('open-drawer', 'product-view', { id: {{ $product->id }} })"
                            on-edit="$dispatch('open-modal', { name: 'product-form', id: {{ $product->id }} })"
                            on-delete="$dispatch('open-modal', { name: 'product-delete', id: {{ $product->id }} })"
                        />
                    </x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="6" class="text-center text-slate-500">No products found.</x-ui.td>
                </tr>
            @endforelse
            @else
                <tr>
                    <x-ui.td colspan="6" class="text-center text-slate-500">No products found.</x-ui.td>
                </tr>
            @endisset
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.pagination :from="isset($products) ? ($products->firstItem() ?? 0) : 0" :to="isset($products) ? ($products->lastItem() ?? 0) : 0" :total="isset($products) ? $products->total() : 0" />

    <x-ui.modal name="product-form" title="Add Product" maxWidth="2xl">
        @livewire('admin.products.product-crud', ['categories'=>$categories ?? collect()], key('product-crud'))
    </x-ui.modal>

    <x-ui.drawer name="product-view" title="Product Details">
        <dl class="space-y-4 text-sm">
            <div><dt class="text-slate-500">Name</dt><dd class="font-medium text-slate-900 mt-0.5">Nitrile Gloves M</dd></div>
            <div><dt class="text-slate-500">SKU</dt><dd class="mt-0.5">SKU-1001</dd></div>
            <div><dt class="text-slate-500">Category</dt><dd class="mt-0.5">Consumables / Gloves</dd></div>
            <div><dt class="text-slate-500">Base Unit</dt><dd class="mt-0.5">Box</dd></div>
            <div><dt class="text-slate-500">Status</dt><dd class="mt-1"><x-ui.status-badge status="active" /></dd></div>
        </dl>
    </x-ui.drawer>

    @livewire('admin.products.product-delete', [], key('product-delete'))
</x-admin-layout>
