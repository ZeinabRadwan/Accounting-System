<div>
    <x-ui.page-header title="{{ __('Categories') }}" subtitle="{{ __('Product category hierarchy.') }}">
        <x-ui.button variant="secondary" href="{{ route('admin.products.index') }}">{{ __('Back to Products') }}</x-ui.button>
        <x-ui.button wire:click="startCreate">
            <x-ui.icon name="plus" class="w-4 h-4" /> {{ __('Add Category') }}
        </x-ui.button>
    </x-ui.page-header>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[200px]">
            <x-ui.search placeholder="{{ __('Search categories...') }}" wire:model.live.debounce.300ms="search" />
        </div>
        <div class="w-full sm:w-40">
            <x-ui.select wire:model.live="filter_status">
                <option value="">{{ __('All Status') }}</option>
                <option value="active">{{ __('Active') }}</option>
                <option value="inactive">{{ __('Inactive') }}</option>
            </x-ui.select>
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('Name') }}</x-ui.th>
            <x-ui.th>{{ __('Products') }}</x-ui.th>
            <x-ui.th>{{ __('Status') }}</x-ui.th>
            <x-ui.th>{{ __('Actions') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($categories as $category)
                <tr class="hover:bg-slate-50/80" wire:key="cat-{{ $category->id }}">
                    <x-ui.td class="font-medium">{{ $category->name }}</x-ui.td>
                    <x-ui.td>{{ $category->products_count }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$category->is_active ? 'active' : 'inactive'" /></x-ui.td>
                    <x-ui.td>
                        <x-ui.row-actions
                            :on-view="'$wire.startView('.$category->id.')'"
                            :on-edit="'$wire.startEdit('.$category->id.')'"
                            :on-delete="'$wire.prepareDelete('.$category->id.')'"
                        />
                    </x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="4" class="text-center text-slate-500 py-8">{{ __('No categories found.') }}</x-ui.td>
                </tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.pagination
        :from="$categories->firstItem() ?? 0"
        :to="$categories->lastItem() ?? 0"
        :total="$categories->total()"
        livewire
        :has-pages="$categories->hasPages()"
        :on-first-page="$categories->onFirstPage()"
        :has-more-pages="$categories->hasMorePages()"
    />

    <x-ui.modal name="category-form" :title="$editingId ? __('Edit Category') : __('Add Category')" show-property="showCategoryForm">
        <div class="space-y-4">
            <x-ui.input label="{{ __('Name') }}" placeholder="{{ __('Category name') }}" wire:model="name" :error="$errors->first('name')" />
            <x-ui.checkbox label="{{ __('Active') }}" wire:model="is_active" />
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="closeCategoryForm">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button wire:click="save" wire:loading.attr="disabled">{{ __('Save') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>

    <x-ui.drawer name="category-view" title="{{ __('Category Details') }}" show-property="showCategoryDrawer">
        @if ($viewingCategory)
            <dl class="space-y-4 text-sm">
                <div>
                    <dt class="text-slate-500">{{ __('Name') }}</dt>
                    <dd class="font-medium text-slate-900 mt-0.5">{{ $viewingCategory->name }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Products') }}</dt>
                    <dd class="mt-0.5">{{ $viewingCategory->products_count }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Status') }}</dt>
                    <dd class="mt-1"><x-ui.status-badge :status="$viewingCategory->is_active ? 'active' : 'inactive'" /></dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Created') }}</dt>
                    <dd class="mt-0.5">{{ $viewingCategory->created_at?->format('Y-m-d H:i') }}</dd>
                </div>
            </dl>
        @else
            <p class="text-sm text-slate-500">{{ __('Category not found.') }}</p>
        @endif
    </x-ui.drawer>

    <x-ui.modal name="delete-category" title="{{ __('Delete Category') }}" maxWidth="sm" show-property="showDeleteConfirm">
        <p class="text-sm text-slate-600">{{ __('Are you sure you want to delete this category?') }}</p>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="cancelDelete">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button variant="danger" wire:click="confirmDelete" wire:loading.attr="disabled">{{ __('Delete') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</div>
