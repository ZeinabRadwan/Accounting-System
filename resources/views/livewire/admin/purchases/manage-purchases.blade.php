<div>
    <x-ui.page-header title="{{ __('Purchases') }}" subtitle="{{ __('Purchase orders and receiving.') }}">
        <x-ui.button wire:click="startCreate">
            <x-ui.icon name="plus" class="w-4 h-4" /> {{ __('New Purchase') }}
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Total Amount') }}" :value="'EGP '.number_format($totalAmount, 0)" icon="clipboard" tone="primary" />
        <x-ui.stat-card label="{{ __('Invoices') }}" :value="(string) $totalCount" icon="check" tone="success" />
        <x-ui.stat-card label="{{ __('Suppliers') }}" :value="(string) $suppliers->count()" icon="truck" tone="slate" />
        <x-ui.stat-card label="{{ __('Branches') }}" :value="(string) $branches->count()" icon="building" tone="warning" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[180px]">
            <x-ui.search placeholder="{{ __('PO # or supplier...') }}" wire:model.live.debounce.300ms="search" />
        </div>
        <div class="w-full sm:w-44">
            <x-ui.select wire:model.live="filter_supplier_id">
                <option value="">{{ __('All Suppliers') }}</option>
                @foreach ($suppliers as $supplier)
                    <option value="{{ $supplier->id }}">{{ $supplier->name }}</option>
                @endforeach
            </x-ui.select>
        </div>
        <div class="w-full sm:w-44">
            <x-ui.select wire:model.live="filter_branch_id">
                <option value="">{{ __('All Branches') }}</option>
                @foreach ($branches as $branch)
                    <option value="{{ $branch->id }}">{{ $branch->name }}</option>
                @endforeach
            </x-ui.select>
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('PO #') }}</x-ui.th>
            <x-ui.th>{{ __('Supplier') }}</x-ui.th>
            <x-ui.th>{{ __('Branch') }}</x-ui.th>
            <x-ui.th>{{ __('Total') }}</x-ui.th>
            <x-ui.th>{{ __('Date') }}</x-ui.th>
            <x-ui.th>{{ __('Actions') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($invoices as $invoice)
                <tr class="hover:bg-slate-50/80" wire:key="po-{{ $invoice->id }}">
                    <x-ui.td class="font-medium">{{ $invoice->invoice_number }}</x-ui.td>
                    <x-ui.td>{{ $invoice->supplier?->name }}</x-ui.td>
                    <x-ui.td>{{ $invoice->branch?->name }}</x-ui.td>
                    <x-ui.td>EGP {{ number_format((float) $invoice->total, 2) }}</x-ui.td>
                    <x-ui.td class="text-slate-500">{{ $invoice->created_at?->format('Y-m-d') }}</x-ui.td>
                    <x-ui.td>
                        <x-ui.row-actions
                            :on-view="'$wire.startView('.$invoice->id.')'"
                        />
                    </x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="6" class="text-center text-slate-500 py-8">{{ __('No purchase invoices yet.') }}</x-ui.td>
                </tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.pagination
        :from="$invoices->firstItem() ?? 0"
        :to="$invoices->lastItem() ?? 0"
        :total="$invoices->total()"
        livewire
        :has-pages="$invoices->hasPages()"
        :on-first-page="$invoices->onFirstPage()"
        :has-more-pages="$invoices->hasMorePages()"
    />

    <x-ui.modal name="purchase-form" title="{{ __('New Purchase') }}" maxWidth="2xl" show-property="showPurchaseForm">
        <div class="space-y-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <x-ui.select label="{{ __('Branch') }}" wire:model="branch_id" :error="$errors->first('branch_id')">
                    <option value="">{{ __('Select branch') }}</option>
                    @foreach ($branches as $branch)
                        <option value="{{ $branch->id }}">{{ $branch->name }}</option>
                    @endforeach
                </x-ui.select>
                <x-ui.input label="{{ __('Discount') }}" type="number" step="0.01" min="0" wire:model="discount_amount" :error="$errors->first('discount_amount')" />
                <x-ui.select label="{{ __('Pay From Treasury') }}" wire:model="payment_method" :error="$errors->first('payment_method')">
                    <option value="cash">{{ __('Cash Treasury') }}</option>
                    <option value="visa">{{ __('Visa Treasury') }}</option>
                    <option value="instapay">{{ __('Instapay Treasury') }}</option>
                    <option value="vodafone_cash">{{ __('Vodafone Cash Treasury') }}</option>
                </x-ui.select>
                <x-ui.input label="{{ __('Paid Amount') }}" type="number" step="0.01" min="0" wire:model="paid_amount" placeholder="{{ __('Defaults to total') }}" :error="$errors->first('paid_amount')" />
            </div>

            <div class="space-y-2">
                <label class="block text-sm font-medium text-slate-700">{{ __('Supplier') }}</label>
                <div class="flex flex-col sm:flex-row gap-2">
                    <div class="flex-1 relative">
                        <x-ui.input
                            placeholder="{{ __('Search supplier by name or phone...') }}"
                            wire:model.live.debounce.300ms="supplier_search"
                        />
                        @if (! empty($supplier_results))
                            <div class="absolute z-20 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-soft py-1 max-h-48 overflow-y-auto">
                                @foreach ($supplier_results as $supplier)
                                    <button
                                        type="button"
                                        class="w-full text-start px-3 py-2 text-sm hover:bg-slate-50"
                                        wire:click="selectSupplier({{ $supplier['id'] }})"
                                    >
                                        <div class="font-medium text-slate-900">{{ $supplier['name'] }}</div>
                                        <div class="text-xs text-slate-500">{{ $supplier['phone'] }}</div>
                                    </button>
                                @endforeach
                            </div>
                        @endif
                    </div>
                    <x-ui.button type="button" variant="secondary" wire:click="openQuickSupplier">
                        <x-ui.icon name="plus" class="w-4 h-4" /> {{ __('Quick Add') }}
                    </x-ui.button>
                </div>
                <div class="flex items-center gap-2 flex-wrap">
                    <x-ui.badge variant="primary">
                        {{ $supplier_name !== '' ? $supplier_name : __('No supplier selected') }}
                        @if ($supplier_phone !== '')
                            · {{ $supplier_phone }}
                        @endif
                    </x-ui.badge>
                    @if ($supplier_id)
                        <button type="button" class="text-xs text-slate-500 hover:text-danger-600" wire:click="clearSupplier">{{ __('Clear') }}</button>
                    @endif
                </div>
                @error('supplier_id') <p class="text-xs text-danger-600">{{ $message }}</p> @enderror
            </div>

            <div class="space-y-2">
                <label class="block text-sm font-medium text-slate-700">{{ __('Products') }}</label>
                <div class="relative">
                    <x-ui.input
                        placeholder="{{ __('Search products by name or SKU...') }}"
                        wire:model.live.debounce.300ms="product_search"
                    />
                    @if (! empty($product_results))
                        <div class="absolute z-20 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-soft py-1 max-h-48 overflow-y-auto">
                            @foreach ($product_results as $product)
                                <button
                                    type="button"
                                    class="w-full text-start px-3 py-2 text-sm hover:bg-slate-50"
                                    wire:click="addProduct({{ $product['id'] }})"
                                >
                                    <div class="font-medium text-slate-900">{{ $product['display_name'] }}</div>
                                    <div class="text-xs text-slate-500">{{ $product['sku'] }}@if ($product['category']) · {{ $product['category'] }}@endif</div>
                                </button>
                            @endforeach
                        </div>
                    @endif
                </div>
                @error('items') <p class="text-xs text-danger-600">{{ $message }}</p> @enderror
            </div>

            <div class="overflow-x-auto rounded-xl border border-slate-200">
                <table class="min-w-full text-sm text-start">
                    <thead class="bg-slate-50 text-slate-600">
                        <tr>
                            <th class="px-3 py-2.5 text-start font-medium">{{ __('Product') }}</th>
                            <th class="px-3 py-2.5 text-start font-medium">{{ __('Unit') }}</th>
                            <th class="px-3 py-2.5 text-start font-medium">{{ __('Cost') }}</th>
                            <th class="px-3 py-2.5 text-start font-medium">{{ __('Qty') }}</th>
                            <th class="px-3 py-2.5 text-start font-medium">{{ __('Expiry') }} <span class="font-normal text-slate-400">({{ __('optional') }})</span></th>
                            <th class="px-3 py-2.5 text-start font-medium">{{ __('Line') }}</th>
                            <th class="px-3 py-2.5 text-end font-medium"></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        @forelse ($items as $index => $item)
                            @php
                                $line = (float) ($item['unit_cost'] ?? 0) * (float) ($item['quantity'] ?? 0);
                            @endphp
                            <tr wire:key="pitem-{{ $index }}-{{ $item['product_id'] }}" class="bg-white">
                                <td class="px-3 py-2 align-top">
                                    <p class="font-medium text-slate-900">{{ $item['display_name'] }}</p>
                                    <p class="text-xs text-slate-500">{{ $item['sku'] }}</p>
                                    @error('items.'.$index.'.product_id') <p class="text-xs text-danger-600">{{ $message }}</p> @enderror
                                </td>
                                <td class="px-3 py-2 align-top min-w-[120px]">
                                    <select
                                        class="block w-full rounded-xl border-slate-200 bg-white text-sm text-slate-800 shadow-sm ui-focus"
                                        wire:change="setUnit({{ $index }}, $event.target.value)"
                                    >
                                        @forelse (($item['units'] ?? []) as $unit)
                                            <option value="{{ $unit['unit_name'] }}" @selected(($item['unit_name'] ?? '') === $unit['unit_name'])>
                                                {{ $unit['unit_name'] }}
                                            </option>
                                        @empty
                                            <option value="{{ $item['unit_name'] }}">{{ $item['unit_name'] }}</option>
                                        @endforelse
                                    </select>
                                </td>
                                <td class="px-3 py-2 align-top min-w-[110px]">
                                    <x-ui.input type="number" step="0.01" min="0" wire:model.live="items.{{ $index }}.unit_cost" :error="$errors->first('items.'.$index.'.unit_cost')" />
                                </td>
                                <td class="px-3 py-2 align-top min-w-[100px]">
                                    <x-ui.input type="number" step="0.01" min="0.01" wire:model.live="items.{{ $index }}.quantity" :error="$errors->first('items.'.$index.'.quantity')" />
                                </td>
                                <td class="px-3 py-2 align-top min-w-[150px]">
                                    <x-ui.input type="date" wire:model="items.{{ $index }}.expiry_date" :error="$errors->first('items.'.$index.'.expiry_date')" />
                                </td>
                                <td class="px-3 py-2 align-top font-medium text-slate-900 whitespace-nowrap">
                                    EGP {{ number_format($line, 2) }}
                                </td>
                                <td class="px-3 py-2 align-top text-end">
                                    <x-ui.button type="button" variant="ghost" size="sm" wire:click="removeItem({{ $index }})">
                                        <x-ui.icon name="trash" class="w-4 h-4 text-danger-600" />
                                    </x-ui.button>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="7" class="px-3 py-6 text-center text-slate-500">{{ __('Search and add products above.') }}</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
                <x-ui.input label="{{ __('Notes') }}" wire:model="notes" placeholder="{{ __('Optional notes...') }}" />
                <div class="text-end space-y-1 sm:min-w-[180px]">
                    <p class="text-slate-600">{{ __('Subtotal:') }} <span class="font-medium text-slate-900">EGP {{ number_format((float) $lineSubtotal, 2) }}</span></p>
                    <p class="text-slate-900 font-semibold">{{ __('Total:') }} EGP {{ number_format(max(0, (float) $lineSubtotal - (float) $discount_amount), 2) }}</p>
                </div>
            </div>
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="closePurchaseForm">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button wire:click="save" wire:loading.attr="disabled">{{ __('Save Purchase') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>

    <x-ui.modal name="quick-supplier" title="{{ __('Quick Add Supplier') }}" show-property="showQuickSupplier">
        <div class="space-y-4">
            <x-ui.input label="{{ __('Name') }}" placeholder="{{ __('Supplier name') }}" wire:model="quick_name" :error="$errors->first('quick_name')" />
            <x-ui.input label="{{ __('Phone') }}" placeholder="01xxxxxxxxx" wire:model="quick_phone" :error="$errors->first('quick_phone')" />
            <x-ui.textarea label="{{ __('Address') }}" wire:model="quick_address" :error="$errors->first('quick_address')" />
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="closeQuickSupplier">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button wire:click="saveQuickSupplier" wire:loading.attr="disabled">{{ __('Save & Select') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>

    <x-ui.drawer name="purchase-view" title="{{ __('Purchase Details') }}" show-property="showPurchaseDrawer">
        @if ($viewingInvoice)
            <dl class="space-y-4 text-sm mb-6">
                <div>
                    <dt class="text-slate-500">{{ __('PO #') }}</dt>
                    <dd class="font-medium text-slate-900 mt-0.5">{{ $viewingInvoice->invoice_number }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Supplier') }}</dt>
                    <dd class="mt-0.5">{{ $viewingInvoice->supplier?->name }} @if ($viewingInvoice->supplier?->phone)· {{ $viewingInvoice->supplier->phone }}@endif</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Branch') }}</dt>
                    <dd class="mt-0.5">{{ $viewingInvoice->branch?->name }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Created by') }}</dt>
                    <dd class="mt-0.5">{{ $viewingInvoice->user?->name }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Date') }}</dt>
                    <dd class="mt-0.5">{{ $viewingInvoice->created_at?->format('Y-m-d H:i') }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Totals') }}</dt>
                    <dd class="mt-0.5">
                        {{ __('Subtotal') }} EGP {{ number_format((float) $viewingInvoice->subtotal, 2) }}
                        · {{ __('Discount') }} EGP {{ number_format((float) $viewingInvoice->discount_amount, 2) }}
                        · <span class="font-semibold">{{ __('Total') }} EGP {{ number_format((float) $viewingInvoice->total, 2) }}</span>
                    </dd>
                </div>
                @if ($viewingInvoice->notes)
                    <div>
                        <dt class="text-slate-500">{{ __('Notes') }}</dt>
                        <dd class="mt-0.5">{{ $viewingInvoice->notes }}</dd>
                    </div>
                @endif
            </dl>

            <div class="overflow-x-auto rounded-xl border border-slate-200">
                <table class="min-w-full text-sm text-start">
                    <thead class="bg-slate-50 text-slate-600">
                        <tr>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Product') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Unit') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Cost') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Qty') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Expiry') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Line') }}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        @foreach ($viewingInvoice->items as $line)
                            <tr>
                                <td class="px-3 py-2">
                                    <p class="font-medium">{{ $line->product_name }}</p>
                                    <p class="text-xs text-slate-500">{{ $line->sku }}</p>
                                </td>
                                <td class="px-3 py-2">{{ $line->unit_name }}</td>
                                <td class="px-3 py-2">{{ number_format((float) $line->unit_cost, 2) }}</td>
                                <td class="px-3 py-2">{{ $line->quantity }}</td>
                                <td class="px-3 py-2">
                                    @if ($line->expiry_date)
                                        {{ $line->expiry_date->format('Y-m-d') }}
                                    @else
                                        <span class="text-slate-400">—</span>
                                    @endif
                                </td>
                                <td class="px-3 py-2">{{ number_format((float) $line->line_total_cost, 2) }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        @else
            <p class="text-sm text-slate-500">{{ __('Purchase not found.') }}</p>
        @endif
    </x-ui.drawer>
</div>
