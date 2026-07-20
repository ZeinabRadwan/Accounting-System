<div>
    <x-ui.page-header title="{{ __('Returns') }}" subtitle="{{ __('Create sales and purchase returns. Stock and treasury update automatically.') }}">
        <x-ui.button wire:click="startCreate">
            <x-ui.icon name="plus" class="w-4 h-4" />
            {{ $tab === 'purchase' ? __('New Purchase Return') : __('New Sales Return') }}
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Sales Returns') }}" :value="(string) $salesCount" icon="receipt-refund" tone="primary" />
        <x-ui.stat-card label="{{ __('Sales Refunded') }}" :value="'EGP '.number_format($salesTotal, 2)" icon="cash" tone="danger" />
        <x-ui.stat-card label="{{ __('Purchase Returns') }}" :value="(string) $purchaseCount" icon="clipboard" tone="warning" />
        <x-ui.stat-card label="{{ __('Purchase Returned') }}" :value="'EGP '.number_format($purchaseTotal, 2)" icon="cash" tone="success" />
    </div>

    <div class="flex flex-wrap gap-2 mb-4">
        <x-ui.button type="button" size="sm" :variant="$tab === 'sales' ? 'primary' : 'secondary'" wire:click="setTab('sales')">{{ __('Sales Returns') }}</x-ui.button>
        <x-ui.button type="button" size="sm" :variant="$tab === 'purchase' ? 'primary' : 'secondary'" wire:click="setTab('purchase')">{{ __('Purchase Returns') }}</x-ui.button>
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[200px]">
            <x-ui.search placeholder="{{ __('Search return or invoice...') }}" wire:model.live.debounce.300ms="search" />
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('Return #') }}</x-ui.th>
            <x-ui.th>{{ __('Invoice') }}</x-ui.th>
            <x-ui.th>{{ __('Branch') }}</x-ui.th>
            <x-ui.th>{{ __('Items') }}</x-ui.th>
            <x-ui.th>{{ __('User') }}</x-ui.th>
            <x-ui.th>{{ __('Total') }}</x-ui.th>
            <x-ui.th>{{ __('Date') }}</x-ui.th>
            <x-ui.th>{{ __('Actions') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($returns as $return)
                <tr class="hover:bg-slate-50/80" wire:key="ret-{{ $tab }}-{{ $return->id }}">
                    <x-ui.td class="font-medium text-slate-900">{{ $return->return_number }}</x-ui.td>
                    <x-ui.td>{{ $return->invoice?->invoice_number }}</x-ui.td>
                    <x-ui.td>{{ $return->branch?->name }}</x-ui.td>
                    <x-ui.td>{{ $return->items_count }}</x-ui.td>
                    <x-ui.td>{{ $return->user?->name }}</x-ui.td>
                    <x-ui.td class="font-semibold">
                        EGP {{ number_format((float) ($tab === 'purchase' ? $return->total_return_cost : $return->total_refund), 2) }}
                    </x-ui.td>
                    <x-ui.td class="text-slate-500">{{ $return->created_at?->format('Y-m-d') }}</x-ui.td>
                    <x-ui.td>
                        <x-ui.row-actions :on-view="'$wire.startView('.$return->id.')'" />
                    </x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="8" class="text-center text-slate-500 py-8">{{ __('No returns found.') }}</x-ui.td>
                </tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.pagination
        :from="$returns->firstItem() ?? 0"
        :to="$returns->lastItem() ?? 0"
        :total="$returns->total()"
        livewire
        :has-pages="$returns->hasPages()"
        :on-first-page="$returns->onFirstPage()"
        :has-more-pages="$returns->hasMorePages()"
    />

    <x-ui.modal
        name="return-form"
        :title="$tab === 'purchase' ? __('New Purchase Return') : __('New Sales Return')"
        maxWidth="2xl"
        show-property="showReturnForm"
    >
        <div class="space-y-4">
            <div class="relative">
                @if ($selected_invoice_id)
                    <div class="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
                        <div>
                            <p class="font-medium text-slate-900">{{ $selected_invoice_number }}</p>
                            <p class="text-slate-500">{{ __('Invoice selected') }}</p>
                        </div>
                        <x-ui.button size="sm" variant="ghost" wire:click="clearInvoice">{{ __('Change') }}</x-ui.button>
                    </div>
                @else
                    <x-ui.search
                        placeholder="{{ __('Search invoice #...') }}"
                        wire:model.live.debounce.300ms="invoice_search"
                    />
                    @if (! empty($invoice_results))
                        <div class="absolute z-20 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-soft py-1 max-h-56 overflow-y-auto">
                            @foreach ($invoice_results as $invoice)
                                <button
                                    type="button"
                                    class="w-full text-start px-3 py-2 text-sm hover:bg-slate-50"
                                    wire:click="selectInvoice({{ $invoice['id'] }})"
                                >
                                    {{ $invoice['label'] }}
                                </button>
                            @endforeach
                        </div>
                    @endif
                @endif
                @error('selected_invoice_id')
                    <p class="mt-1 text-sm text-danger-600">{{ $message }}</p>
                @enderror
            </div>

            @if ($selected_invoice_id)
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <x-ui.select label="{{ __('Treasury / Payment Method') }}" wire:model="payment_method" :error="$errors->first('payment_method')">
                        @foreach ($paymentMethods as $method)
                            <option value="{{ $method->value }}">{{ $method->label() }}</option>
                        @endforeach
                    </x-ui.select>
                    <x-ui.textarea label="{{ __('Notes') }}" wire:model="notes" :error="$errors->first('notes')" />
                </div>

                @error('lines')
                    <p class="text-sm text-danger-600">{{ $message }}</p>
                @enderror

                <div class="overflow-x-auto rounded-xl border border-slate-200">
                    <table class="min-w-full text-sm text-start">
                        <thead class="bg-slate-50 text-slate-600">
                            <tr>
                                <th class="px-3 py-2 text-start font-medium">{{ __('Return') }}</th>
                                <th class="px-3 py-2 text-start font-medium">{{ __('Product') }}</th>
                                <th class="px-3 py-2 text-start font-medium">{{ __('Unit') }}</th>
                                <th class="px-3 py-2 text-start font-medium">{{ __('Sold/Bought') }}</th>
                                <th class="px-3 py-2 text-start font-medium">{{ __('Max') }}</th>
                                <th class="px-3 py-2 text-start font-medium">{{ __('Qty') }}</th>
                                <th class="px-3 py-2 text-start font-medium">{{ __('Price') }}</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100">
                            @foreach ($lines as $index => $line)
                                <tr wire:key="rline-{{ $line['invoice_item_id'] }}">
                                    <td class="px-3 py-2">
                                        <input
                                            type="checkbox"
                                            class="rounded border-slate-300"
                                            wire:model="lines.{{ $index }}.include"
                                            @disabled($line['max_qty'] <= 0)
                                        />
                                    </td>
                                    <td class="px-3 py-2">
                                        <p class="font-medium">{{ $line['product_name'] }}</p>
                                        <p class="text-xs text-slate-500">{{ $line['sku'] }}</p>
                                    </td>
                                    <td class="px-3 py-2">{{ $line['unit_name'] }}</td>
                                    <td class="px-3 py-2">{{ $line['original_qty'] }}</td>
                                    <td class="px-3 py-2">{{ $line['max_qty'] }}</td>
                                    <td class="px-3 py-2 w-28">
                                        <x-ui.input
                                            type="number"
                                            step="0.01"
                                            min="0"
                                            max="{{ $line['max_qty'] }}"
                                            wire:model="lines.{{ $index }}.quantity"
                                            :disabled="$line['max_qty'] <= 0"
                                        />
                                    </td>
                                    <td class="px-3 py-2">{{ number_format((float) $line['unit_price'], 2) }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>

                <p class="text-xs text-slate-500">
                    @if ($tab === 'purchase')
                        {{ __('Purchase return decreases stock and adds the amount back to the selected treasury.') }}
                    @else
                        {{ __('Sales return increases stock and deducts the refund from the selected treasury.') }}
                    @endif
                </p>
            @endif
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="closeReturnForm">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button wire:click="save" wire:loading.attr="disabled" :disabled="! $selected_invoice_id">{{ __('Save Return') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>

    <x-ui.drawer name="return-view" title="{{ __('Return Details') }}" show-property="showReturnDrawer">
        @if ($viewingReturn)
            <dl class="space-y-4 text-sm mb-6">
                <div>
                    <dt class="text-slate-500">{{ __('Return') }}</dt>
                    <dd class="font-medium text-slate-900 mt-0.5">{{ $viewingReturn->return_number }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Invoice') }}</dt>
                    <dd class="mt-0.5">{{ $viewingReturn->invoice?->invoice_number }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Branch') }}</dt>
                    <dd class="mt-0.5">{{ $viewingReturn->branch?->name }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('User') }}</dt>
                    <dd class="mt-0.5">{{ $viewingReturn->user?->name }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Total') }}</dt>
                    <dd class="mt-0.5 font-semibold">
                        EGP {{ number_format((float) ($tab === 'purchase' ? $viewingReturn->total_return_cost : $viewingReturn->total_refund), 2) }}
                    </dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Date') }}</dt>
                    <dd class="mt-0.5">{{ $viewingReturn->created_at?->format('Y-m-d H:i') }}</dd>
                </div>
                @if ($viewingReturn->notes)
                    <div>
                        <dt class="text-slate-500">{{ __('Notes') }}</dt>
                        <dd class="mt-0.5">{{ $viewingReturn->notes }}</dd>
                    </div>
                @endif
            </dl>

            <div class="overflow-x-auto rounded-xl border border-slate-200">
                <table class="min-w-full text-sm text-start">
                    <thead class="bg-slate-50 text-slate-600">
                        <tr>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Product') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Unit') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Qty') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Amount') }}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        @foreach ($viewingReturn->items as $line)
                            <tr>
                                <td class="px-3 py-2">
                                    <p class="font-medium">{{ $line->product?->full_display_name ?? ('#'.$line->product_id) }}</p>
                                    <p class="text-xs text-slate-500">{{ $line->product?->sku }}</p>
                                </td>
                                <td class="px-3 py-2">{{ $line->unit_name }}</td>
                                <td class="px-3 py-2">{{ $line->quantity }}</td>
                                <td class="px-3 py-2">
                                    EGP {{ number_format((float) ($tab === 'purchase' ? $line->line_total_cost : $line->line_refund), 2) }}
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        @else
            <p class="text-sm text-slate-500">{{ __('Return not found.') }}</p>
        @endif
    </x-ui.drawer>
</div>
