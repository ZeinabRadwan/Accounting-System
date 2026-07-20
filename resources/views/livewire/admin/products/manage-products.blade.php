<div>
    <x-ui.page-header title="{{ __('Products') }}" subtitle="{{ __('Catalog, units, pricing, and availability.') }}">
        <x-ui.button variant="secondary" href="{{ route('admin.products.categories') }}">{{ __('Categories') }}</x-ui.button>
        <x-ui.button wire:click="startCreate">
            <x-ui.icon name="plus" class="w-4 h-4" /> {{ __('Add Product') }}
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Total Products') }}" :value="(string) $products->total()" icon="cube" tone="primary" />
        <x-ui.stat-card label="{{ __('Categories') }}" :value="(string) $categories->count()" icon="archive" tone="warning" />
        <x-ui.stat-card label="{{ __('Active') }}" :value="(string) $activeProducts" icon="check" tone="success" />
        <x-ui.stat-card label="{{ __('Units') }}" :value="(string) $unitsCount" icon="adjustments" tone="slate" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[200px]">
            <x-ui.search placeholder="{{ __('Search name or SKU...') }}" wire:model.live.debounce.300ms="search" />
        </div>
        <div class="w-full sm:w-44">
            <x-ui.select wire:model.live="filter_category_id">
                <option value="">{{ __('All Categories') }}</option>
                @foreach ($categories as $cat)
                    <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                @endforeach
            </x-ui.select>
        </div>
        <div class="w-full sm:w-36">
            <x-ui.select wire:model.live="filter_status">
                <option value="">{{ __('All Status') }}</option>
                <option value="active">{{ __('Active') }}</option>
                <option value="inactive">{{ __('Inactive') }}</option>
            </x-ui.select>
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('Product') }}</x-ui.th>
            <x-ui.th>{{ __('Category') }}</x-ui.th>
            <x-ui.th>{{ __('Units') }}</x-ui.th>
            <x-ui.th>{{ __('Base Unit') }}</x-ui.th>
            <x-ui.th>{{ __('Status') }}</x-ui.th>
            <x-ui.th>{{ __('Actions') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($products as $product)
                <tr class="hover:bg-slate-50/80" wire:key="product-{{ $product->id }}">
                    <x-ui.td>
                        <p class="font-medium text-slate-900">{{ $product->full_display_name }}</p>
                        <p class="text-xs text-slate-500">{{ $product->sku }}</p>
                    </x-ui.td>
                    <x-ui.td>{{ $product->category?->name }}</x-ui.td>
                    <x-ui.td>{{ $product->units?->count() ?? 0 }}</x-ui.td>
                    <x-ui.td>{{ $product->base_unit }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$product->is_active ? 'active' : 'inactive'" /></x-ui.td>
                    <x-ui.td>
                        <x-ui.row-actions
                            :on-view="'$wire.startView('.$product->id.')'"
                            :on-edit="'$wire.startEdit('.$product->id.')'"
                            :on-delete="'$wire.prepareDelete('.$product->id.')'"
                        />
                    </x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="6" class="text-center text-slate-500 py-8">{{ __('No products found.') }}</x-ui.td>
                </tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.pagination
        :from="$products->firstItem() ?? 0"
        :to="$products->lastItem() ?? 0"
        :total="$products->total()"
        livewire
        :has-pages="$products->hasPages()"
        :on-first-page="$products->onFirstPage()"
        :has-more-pages="$products->hasMorePages()"
    />

    <x-ui.modal name="product-form" :title="$editingId ? __('Edit Product') : __('Add Product')" maxWidth="2xl" show-property="showProductForm">
        <div class="space-y-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <x-ui.select label="{{ __('Category') }}" wire:model="category_id" :error="$errors->first('category_id')">
                    <option value="">{{ __('Select...') }}</option>
                    @foreach ($categories as $cat)
                        <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                    @endforeach
                </x-ui.select>
                <x-ui.input label="{{ __('Product Name') }}" wire:model="display_name" :error="$errors->first('display_name')" placeholder="{{ __('Product name (saved as Name - Category)') }}" />
                <x-ui.input
                    type="number"
                    step="0.01"
                    min="0"
                    label="{{ __('Minimum Stock (Base Unit)') }}"
                    wire:model="minimum_stock"
                    :error="$errors->first('minimum_stock')"
                    placeholder="10"
                />
            </div>

            <div class="border-t border-slate-100 pt-4">
                <div class="flex items-center justify-between mb-3">
                    <div>
                        <h3 class="text-sm font-semibold text-slate-900">{{ __('Units') }}</h3>
                        <p class="text-xs text-slate-500 mt-0.5">
                            {{ __('Mark one base unit (factor = 1). Other factors mean how many base units equal 1 of that unit.') }}
                        </p>
                    </div>
                    <x-ui.button type="button" variant="secondary" size="sm" wire:click="addUnit">
                        <x-ui.icon name="plus" class="w-4 h-4" /> {{ __('Add Unit') }}
                    </x-ui.button>
                </div>

                <div class="overflow-x-auto rounded-xl border border-slate-200">
                    <table class="min-w-full text-sm text-start">
                        <thead class="bg-slate-50 text-slate-600">
                            <tr>
                                <th class="px-3 py-2.5 text-start font-medium">{{ __('Unit') }}</th>
                                <th class="px-3 py-2.5 text-center font-medium">{{ __('Base') }}</th>
                                <th class="px-3 py-2.5 text-start font-medium">{{ __('Conversion Factor') }}</th>
                                <th class="px-3 py-2.5 text-start font-medium">{{ __('Price 1') }}</th>
                                <th class="px-3 py-2.5 text-start font-medium">{{ __('Price 2') }}</th>
                                <th class="px-3 py-2.5 text-start font-medium">{{ __('Price 3') }}</th>
                                <th class="px-3 py-2.5 text-end font-medium">{{ __('Actions') }}</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100">
                            @foreach ($units as $index => $unit)
                                @php $isBase = (bool) ($unit['is_base'] ?? false); @endphp
                                <tr wire:key="unit-row-{{ $index }}" class="bg-white">
                                    <td class="px-3 py-2 align-top min-w-[130px]">
                                        <x-ui.input wire:model="units.{{ $index }}.unit_name" placeholder="{{ __('e.g. Piece') }}" :error="$errors->first('units.'.$index.'.unit_name')" />
                                    </td>
                                    <td class="px-3 py-2 align-top text-center">
                                        <input
                                            type="radio"
                                            name="product_base_unit"
                                            class="rounded-full border-slate-300 text-primary-600 focus:ring-primary-500"
                                            wire:click="setBaseUnit({{ $index }})"
                                            @checked($isBase)
                                        />
                                    </td>
                                    <td class="px-3 py-2 align-top min-w-[120px]">
                                        <x-ui.input
                                            type="number"
                                            step="0.0001"
                                            min="0.0001"
                                            wire:model="units.{{ $index }}.conversion_factor"
                                            :disabled="$isBase"
                                            placeholder="{{ $isBase ? '1' : '10' }}"
                                            :error="$errors->first('units.'.$index.'.conversion_factor')"
                                        />
                                        @if ($isBase)
                                            <p class="text-[11px] text-slate-400 mt-1">{{ __('Always 1') }}</p>
                                        @endif
                                    </td>
                                    <td class="px-3 py-2 align-top min-w-[100px]">
                                        <x-ui.input type="number" step="0.01" min="0" wire:model="units.{{ $index }}.price1" placeholder="0.00" :error="$errors->first('units.'.$index.'.price1')" />
                                    </td>
                                    <td class="px-3 py-2 align-top min-w-[100px]">
                                        <x-ui.input type="number" step="0.01" min="0" wire:model="units.{{ $index }}.price2" placeholder="{{ __('= Price 1') }}" :error="$errors->first('units.'.$index.'.price2')" />
                                    </td>
                                    <td class="px-3 py-2 align-top min-w-[100px]">
                                        <x-ui.input type="number" step="0.01" min="0" wire:model="units.{{ $index }}.price3" placeholder="{{ __('= Price 1') }}" :error="$errors->first('units.'.$index.'.price3')" />
                                    </td>
                                    <td class="px-3 py-2 align-top text-end">
                                        <x-ui.button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            wire:click="removeUnit({{ $index }})"
                                            :disabled="count($units) <= 1"
                                        >
                                            <x-ui.icon name="trash" class="w-4 h-4 text-danger-600" />
                                        </x-ui.button>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                @error('units')
                    <p class="text-xs text-danger-600 mt-2">{{ $message }}</p>
                @enderror
            </div>
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="closeProductForm">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button wire:click="save" wire:loading.attr="disabled">{{ __('Save') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>

    <x-ui.drawer name="product-view" title="{{ __('Product Details') }}" show-property="showProductDrawer">
        @if ($viewingProduct)
            <dl class="space-y-4 text-sm">
                <div>
                    <dt class="text-slate-500">{{ __('Category') }}</dt>
                    <dd class="mt-0.5">{{ $viewingProduct->category?->name }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Product Name') }}</dt>
                    <dd class="font-medium text-slate-900 mt-0.5">{{ $viewingProduct->full_display_name }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Minimum Stock (Base Unit)') }}</dt>
                    <dd class="mt-0.5">{{ rtrim(rtrim(number_format((float) ($viewingProduct->minimum_stock ?? 0), 2, '.', ''), '0'), '.') }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500 mb-2">{{ __('Units') }}</dt>
                    <dd>
                        <div class="overflow-x-auto rounded-xl border border-slate-200">
                            <table class="min-w-full text-sm text-start">
                                <thead class="bg-slate-50 text-slate-600">
                                    <tr>
                                        <th class="px-3 py-2 text-start font-medium">{{ __('Unit') }}</th>
                                        <th class="px-3 py-2 text-start font-medium">{{ __('Base') }}</th>
                                        <th class="px-3 py-2 text-start font-medium">{{ __('Conversion Factor') }}</th>
                                        <th class="px-3 py-2 text-start font-medium">{{ __('Price 1') }}</th>
                                        <th class="px-3 py-2 text-start font-medium">{{ __('Price 2') }}</th>
                                        <th class="px-3 py-2 text-start font-medium">{{ __('Price 3') }}</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-100">
                                    @forelse ($viewingProduct->units->sortByDesc('is_base') as $unit)
                                        <tr>
                                            <td class="px-3 py-2 font-medium">{{ $unit->unit_name }}</td>
                                            <td class="px-3 py-2">
                                                @if ($unit->is_base)
                                                    <x-ui.badge variant="primary">{{ __('Base') }}</x-ui.badge>
                                                @else
                                                    <span class="text-slate-400">—</span>
                                                @endif
                                            </td>
                                            <td class="px-3 py-2">
                                                × {{ rtrim(rtrim(number_format((float) $unit->conversion_factor, 4, '.', ''), '0'), '.') }}
                                                @if (! $unit->is_base)
                                                    <span class="text-xs text-slate-500">(1 {{ $unit->unit_name }} = {{ rtrim(rtrim(number_format((float) $unit->conversion_factor, 4, '.', ''), '0'), '.') }} {{ $viewingProduct->base_unit }})</span>
                                                @endif
                                            </td>
                                            <td class="px-3 py-2">{{ number_format((float) ($unit->price1 ?? 0), 2) }}</td>
                                            <td class="px-3 py-2">{{ number_format((float) ($unit->price2 ?? $unit->price1 ?? 0), 2) }}</td>
                                            <td class="px-3 py-2">{{ number_format((float) ($unit->price3 ?? $unit->price1 ?? 0), 2) }}</td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <td colspan="6" class="px-3 py-3 text-slate-500">{{ __('No units.') }}</td>
                                        </tr>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>
                    </dd>
                </div>
            </dl>
        @else
            <p class="text-sm text-slate-500">{{ __('Product not found.') }}</p>
        @endif
    </x-ui.drawer>

    <x-ui.modal name="delete-product" title="{{ __('Delete Product') }}" maxWidth="sm" show-property="showDeleteConfirm">
        <p class="text-sm text-slate-600">{{ __('Are you sure you want to delete this product?') }}</p>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="cancelDelete">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button variant="danger" wire:click="confirmDelete" wire:loading.attr="disabled">{{ __('Delete') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</div>
