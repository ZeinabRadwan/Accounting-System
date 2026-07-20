<div class="h-full grid grid-cols-1 lg:grid-cols-12 min-h-0">
    {{-- Left: catalog --}}
    <section class="lg:col-span-7 xl:col-span-8 flex flex-col min-h-0 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/50">
        <div class="p-4 space-y-3 border-b border-slate-200 bg-white">
            <div class="flex flex-col sm:flex-row gap-2">
                <div class="flex-1 relative">
                    <x-ui.input
                        placeholder="{{ __('Search customer by name or phone...') }}"
                        wire:model.live.debounce.300ms="customer_search"
                    />
                    @if (! empty($customer_results))
                        <div class="absolute z-20 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-soft py-1 max-h-56 overflow-y-auto">
                            @foreach ($customer_results as $customer)
                                <button
                                    type="button"
                                    class="w-full text-start px-3 py-2 text-sm hover:bg-slate-50"
                                    wire:click="selectCustomer({{ $customer['id'] }})"
                                >
                                    <div class="font-medium text-slate-900">{{ $customer['name'] }}</div>
                                    <div class="text-xs text-slate-500">
                                        {{ $customer['phone'] }}
                                        @if (! empty($customer['type']))
                                            · {{ $customer['type'] }}
                                        @endif
                                    </div>
                                </button>
                            @endforeach
                        </div>
                    @endif
                </div>
                <x-ui.button variant="secondary" wire:click="openQuickCustomer">
                    <x-ui.icon name="plus" class="w-4 h-4" /> {{ __('Quick Add') }}
                </x-ui.button>
            </div>

            <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs text-slate-500">{{ __('Customer:') }}</span>
                <x-ui.badge variant="primary">
                    {{ $customer_name !== '' ? $customer_name : __('Walk-in Customer') }}
                    @if ($customer_type !== '')
                        · {{ $customer_type }}
                    @endif
                    @if ($customer_phone !== '')
                        · {{ $customer_phone }}
                    @endif
                </x-ui.badge>
                @if ($customer_id)
                    <button type="button" class="text-xs text-slate-500 hover:text-danger-600" wire:click="clearCustomer">{{ __('Clear') }}</button>
                @endif
            </div>

            <input
                type="search"
                wire:model.live.debounce.300ms="product_search"
                placeholder="{{ __('Search products by name or SKU...') }}"
                class="block w-full rounded-xl border-slate-200 bg-white text-base text-slate-800 shadow-sm placeholder:text-slate-400 ui-focus py-3"
                autofocus
            />

            <div class="flex flex-wrap gap-2">
                <button
                    type="button"
                    wire:click="$set('filter_category_id', '')"
                    class="px-3 py-1.5 rounded-xl text-sm font-medium ui-transition {{ $filter_category_id === '' ? 'bg-primary-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50' }}"
                >{{ __('All') }}</button>
                @foreach ($categories as $cat)
                    <button
                        type="button"
                        wire:click="$set('filter_category_id', '{{ $cat->id }}')"
                        class="px-3 py-1.5 rounded-xl text-sm font-medium ui-transition {{ (string) $filter_category_id === (string) $cat->id ? 'bg-primary-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50' }}"
                    >{{ $cat->name }}</button>
                @endforeach
            </div>
        </div>

        <div class="flex-1 overflow-y-auto p-4">
            @if (empty($catalog))
                <x-ui.empty-state title="{{ __('No products') }}" description="{{ __('Add products in Admin, or try another search/category.') }}" icon="cube" />
            @else
                <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                    @foreach ($catalog as $p)
                        <button
                            type="button"
                            wire:click="addProduct({{ $p['id'] }})"
                            wire:key="pos-product-{{ $p['id'] }}"
                            class="pos-product-card text-start rounded-xl border border-slate-200 bg-white p-3 shadow-card hover:border-primary-300 hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-500/40"
                        >
                            <p class="text-sm font-semibold text-slate-900 line-clamp-2">{{ $p['display_name'] }}</p>
                            <p class="mt-1 text-xs text-slate-500">{{ $p['sku'] }}@if ($p['category']) · {{ $p['category'] }}@endif</p>
                            <p class="mt-1 text-xs text-slate-400">{{ $p['unit'] }} · {{ __('Stock') }} {{ number_format((float) $p['stock'], 2) }}</p>
                            <p class="mt-3 text-sm font-semibold text-primary-700">EGP {{ number_format((float) $p['price'], 2) }}</p>
                        </button>
                    @endforeach
                </div>
            @endif
        </div>
    </section>

    {{-- Right: cart --}}
    <section class="lg:col-span-5 xl:col-span-4 flex flex-col min-h-0 bg-white" data-pos-cart>
        <div class="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <h2 class="text-base font-semibold text-slate-900">{{ __('Cart') }}</h2>
            <span class="text-xs text-slate-500">{{ __(':count items', ['count' => count($items)]) }}</span>
        </div>

        <div class="flex-1 overflow-y-auto p-3 space-y-2">
            @forelse ($items as $idx => $it)
                @php
                    $lineTotal = max(0, ((float) $it['quantity'] * (float) $it['unit_price']) - (float) ($it['item_discount'] ?? 0));
                @endphp
                <div class="pos-cart-item rounded-xl border border-slate-200 p-3 space-y-2" wire:key="cart-{{ $idx }}-{{ $it['product_id'] }}">
                    <div class="flex items-start justify-between gap-2">
                        <div>
                            <p class="text-sm font-medium text-slate-900">{{ $it['display_name'] }}</p>
                            <p class="text-xs text-slate-500">{{ $it['sku'] }}</p>
                        </div>
                        <button type="button" class="text-slate-400 hover:text-danger-600" wire:click="removeItem({{ $idx }})">
                            <x-ui.icon name="trash" class="w-4 h-4" />
                        </button>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <select
                            class="block w-full rounded-xl border-slate-200 bg-white text-sm text-slate-800 shadow-sm ui-focus"
                            wire:change="setUnit({{ $idx }}, $event.target.value)"
                        >
                            @forelse (($it['units'] ?? []) as $unit)
                                <option value="{{ $unit['unit_name'] }}" @selected(($it['unit_name'] ?? '') === $unit['unit_name'])>
                                    {{ $unit['unit_name'] }}
                                </option>
                            @empty
                                <option value="{{ $it['unit_name'] }}">{{ $it['unit_name'] }}</option>
                            @endforelse
                        </select>
                        <select
                            class="block w-full rounded-xl border-slate-200 bg-white text-sm text-slate-800 shadow-sm ui-focus"
                            wire:change="setPriceLevel({{ $idx }}, $event.target.value)"
                        >
                            <option value="price1" @selected(($it['price_level'] ?? '') === 'price1')>{{ __('Price 1') }}</option>
                            <option value="price2" @selected(($it['price_level'] ?? '') === 'price2')>{{ __('Price 2') }}</option>
                            <option value="price3" @selected(($it['price_level'] ?? '') === 'price3')>{{ __('Price 3') }}</option>
                        </select>
                    </div>
                    <div class="flex items-center justify-between gap-2">
                        <div class="inline-flex items-center rounded-lg border border-slate-200">
                            <button type="button" class="px-2 py-1 text-slate-600" wire:click="decrementQty({{ $idx }})">−</button>
                            <span class="w-8 text-center text-sm">{{ $it['quantity'] }}</span>
                            <button type="button" class="px-2 py-1 text-slate-600" wire:click="incrementQty({{ $idx }})">+</button>
                        </div>
                        <input type="number" min="0" class="w-20 rounded-lg border-slate-200 text-xs py-1" wire:model.blur="items.{{ $idx }}.item_discount" placeholder="{{ __('Disc') }}" />
                        <p class="text-sm font-semibold text-slate-900">EGP {{ number_format($lineTotal, 2) }}</p>
                    </div>
                </div>
            @empty
                <x-ui.empty-state title="{{ __('Cart is empty') }}" description="{{ __('Select products from the left to begin.') }}" icon="shopping-cart" />
            @endforelse
        </div>

        <div class="border-t border-slate-200 p-4 space-y-3 bg-slate-50/80">
            <div class="flex items-center justify-between gap-3">
                <label class="text-sm text-slate-600">{{ __('Invoice discount') }}</label>
                <input type="number" min="0" class="w-28 rounded-xl border-slate-200 text-sm" wire:model.live="invoice_discount" />
            </div>
            <div class="space-y-1.5 text-sm">
                <div class="flex justify-between text-slate-600"><span>{{ __('Subtotal') }}</span><span>EGP {{ number_format($totals['subtotal'], 2) }}</span></div>
                <div class="flex justify-between text-lg font-semibold text-slate-900 pos-totals-bump" wire:key="grand-{{ number_format($totals['total'], 2) }}">
                    <span>{{ __('Grand Total') }}</span><span>EGP {{ number_format($totals['total'], 2) }}</span>
                </div>
                <div class="flex items-center justify-between gap-3 pt-1">
                    <label class="text-slate-600">{{ __('Paid') }}</label>
                    <div class="flex items-center gap-2">
                        <button type="button" class="text-xs text-primary-600 hover:underline" wire:click="payFull">{{ __('Pay full') }}</button>
                        <input type="number" min="0" class="w-28 rounded-xl border-slate-200 text-sm font-medium" wire:model.live="paid_amount" />
                    </div>
                </div>
                <div class="flex justify-between font-medium {{ $totals['remaining'] > 0 ? 'text-warning-700' : 'text-success-700' }}">
                    <span>{{ __('Remaining') }}</span><span>EGP {{ number_format($totals['remaining'], 2) }}</span>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-2">
                @foreach (['cash' => __('Cash'), 'visa' => __('Visa'), 'instapay' => __('Instapay'), 'vodafone_cash' => __('Vodafone Cash')] as $id => $label)
                    <button
                        type="button"
                        wire:click="$set('payment_method', '{{ $id }}')"
                        class="rounded-xl px-2 py-2.5 text-xs font-semibold border ui-transition {{ $payment_method === $id ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50' }}"
                    >{{ $label }}</button>
                @endforeach
            </div>

            <div class="grid grid-cols-1 gap-2 pt-1">
                <x-ui.button size="lg" class="w-full" wire:click="save" wire:loading.attr="disabled">
                    {{ __('Save Invoice') }}
                </x-ui.button>
                <div class="grid grid-cols-2 gap-2">
                    @if ($last_invoice_id)
                        <x-ui.button
                            variant="secondary"
                            class="w-full"
                            href="{{ route('invoices.print', ['invoice' => $last_invoice_id, 'auto' => 1]) }}"
                            target="_blank"
                        >
                            <x-ui.icon name="printer" class="w-4 h-4" /> {{ __('Print') }}
                        </x-ui.button>
                    @else
                        <x-ui.button variant="secondary" class="w-full" type="button" disabled>
                            <x-ui.icon name="printer" class="w-4 h-4" /> {{ __('Print') }}
                        </x-ui.button>
                    @endif
                    <x-ui.button variant="ghost" class="w-full text-danger-600 hover:bg-danger-50" wire:click="clearCart">
                        {{ __('Clear Cart') }}
                    </x-ui.button>
                </div>
            </div>
            @error('items') <p class="text-xs text-danger-600">{{ $message }}</p> @enderror
            @if ($branchId <= 0)
                <p class="text-xs text-danger-600">{{ __('No active branch found. Create a branch before selling.') }}</p>
            @endif
        </div>
    </section>

    <x-ui.modal name="quick-customer" title="{{ __('Quick Add Customer') }}" show-property="showQuickCustomer">
        <div class="space-y-4">
            <x-ui.input label="{{ __('Name') }}" placeholder="{{ __('Customer name') }}" wire:model="quick_name" :error="$errors->first('quick_name')" />
            <x-ui.input label="{{ __('Phone') }}" placeholder="01xxxxxxxxx" wire:model="quick_phone" :error="$errors->first('quick_phone')" />
            <x-ui.select label="{{ __('Classify As') }}" wire:model.live="quick_type" :error="$errors->first('quick_type')">
                <option value="doctor">{{ __('Doctor') }}</option>
                <option value="student">{{ __('Student') }}</option>
            </x-ui.select>
            @if ($quick_type === 'student')
                <x-ui.select label="{{ __('Student Class (optional)') }}" wire:model="quick_student_class" :error="$errors->first('quick_student_class')">
                    <option value="">— {{ __('None') }} —</option>
                    <option value="clinic">{{ __('Clinic') }}</option>
                    <option value="preclinic">{{ __('Preclinic') }}</option>
                </x-ui.select>
            @endif
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="closeQuickCustomer">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button wire:click="saveQuickCustomer" wire:loading.attr="disabled">{{ __('Save & Select') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>

    <x-ui.modal name="save-success" title="{{ __('Invoice Saved') }}" maxWidth="sm" show-property="showSaveSuccess">
        <div class="pos-success-pop">
            <div class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-success-50 text-success-600">
                <x-ui.icon name="check" class="w-6 h-6" />
            </div>
            <p class="text-sm text-slate-600 text-center">
                {{ __('Invoice') }} <span class="font-semibold text-slate-900">{{ $last_invoice_number }}</span> {{ __('was saved successfully.') }}
                {{ __('Stock has been deducted for this branch.') }}
            </p>
        </div>
        <x-slot:footer>
            @php
                $isAdmin = auth()->user()?->canAccessAdminPanel() ?? false;
            @endphp
            @if ($last_invoice_id)
                <x-ui.button
                    variant="secondary"
                    href="{{ route('invoices.print', ['invoice' => $last_invoice_id, 'auto' => 1]) }}"
                    target="_blank"
                >
                    <x-ui.icon name="printer" class="w-4 h-4" /> {{ __('Print Invoice') }}
                </x-ui.button>
            @endif
            @if ($isAdmin)
                <x-ui.button variant="secondary" href="{{ route('admin.sales.index') }}">{{ __('View Sales') }}</x-ui.button>
            @endif
            <x-ui.button wire:click="closeSaveSuccess">{{ __('New Sale') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</div>
