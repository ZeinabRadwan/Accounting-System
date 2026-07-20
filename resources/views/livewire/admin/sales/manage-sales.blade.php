<div>
    <x-ui.page-header title="{{ __('Sales') }}" subtitle="{{ __('Invoices and payment status.') }}">
        <x-ui.button href="{{ route('pos') }}">
            <x-ui.icon name="plus" class="w-4 h-4" /> {{ __('New Sale (POS)') }}
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Total Amount') }}" :value="'EGP '.number_format($totalAmount, 0)" icon="cash" tone="primary" />
        <x-ui.stat-card label="{{ __('Invoices') }}" :value="(string) $totalCount" icon="clipboard" tone="success" />
        <x-ui.stat-card label="{{ __('Partial') }}" :value="(string) $partialCount" icon="exclamation" tone="warning" />
        <x-ui.stat-card label="{{ __('Unpaid') }}" :value="(string) $unpaidCount" icon="x" tone="danger" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[180px]">
            <x-ui.search placeholder="{{ __('Invoice # or customer...') }}" wire:model.live.debounce.300ms="search" />
        </div>
        <div class="w-full sm:w-40">
            <x-ui.select wire:model.live="filter_branch_id">
                <option value="">{{ __('All Branches') }}</option>
                @foreach ($branches as $branch)
                    <option value="{{ $branch->id }}">{{ $branch->name }}</option>
                @endforeach
            </x-ui.select>
        </div>
        <div class="w-full sm:w-36">
            <x-ui.select wire:model.live="filter_status">
                <option value="">{{ __('All Status') }}</option>
                <option value="paid">{{ __('Paid') }}</option>
                <option value="partially_paid">{{ __('Partial') }}</option>
                <option value="unpaid">{{ __('Unpaid') }}</option>
            </x-ui.select>
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('Invoice') }}</x-ui.th>
            <x-ui.th>{{ __('Customer') }}</x-ui.th>
            <x-ui.th>{{ __('Branch') }}</x-ui.th>
            <x-ui.th>{{ __('Total') }}</x-ui.th>
            <x-ui.th>{{ __('Paid') }}</x-ui.th>
            <x-ui.th>{{ __('Status') }}</x-ui.th>
            <x-ui.th>{{ __('Date') }}</x-ui.th>
            <x-ui.th>{{ __('Actions') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($invoices as $invoice)
                @php
                    $status = match ((string) $invoice->status) {
                        'partially_paid' => 'partial',
                        default => (string) $invoice->status,
                    };
                @endphp
                <tr class="hover:bg-slate-50/80" wire:key="inv-{{ $invoice->id }}">
                    <x-ui.td class="font-medium text-slate-900">{{ $invoice->invoice_number }}</x-ui.td>
                    <x-ui.td>{{ $invoice->customer?->name ?? __('Walk-in') }}</x-ui.td>
                    <x-ui.td>{{ $invoice->branch?->name }}</x-ui.td>
                    <x-ui.td>EGP {{ number_format((float) $invoice->total, 2) }}</x-ui.td>
                    <x-ui.td>EGP {{ number_format((float) $invoice->paid_amount, 2) }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$status" /></x-ui.td>
                    <x-ui.td class="text-slate-500">{{ $invoice->created_at?->format('Y-m-d') }}</x-ui.td>
                    <x-ui.td>
                        <div class="flex items-center gap-1">
                            <x-ui.row-actions :on-view="'$wire.startView('.$invoice->id.')'" />
                            <a
                                href="{{ route('invoices.print', $invoice) }}"
                                target="_blank"
                                class="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-primary-600"
                                title="{{ __('Print') }}"
                            >
                                <x-ui.icon name="printer" class="w-4 h-4" />
                            </a>
                        </div>
                    </x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="8" class="text-center text-slate-500 py-8">{{ __('No sales invoices yet. Create one from POS.') }}</x-ui.td>
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

    <x-ui.drawer name="invoice-view" title="{{ __('Invoice Details') }}" show-property="showInvoiceDrawer">
        @if ($viewingInvoice)
            <dl class="space-y-4 text-sm mb-6">
                <div>
                    <dt class="text-slate-500">{{ __('Invoice') }}</dt>
                    <dd class="font-medium text-slate-900 mt-0.5">{{ $viewingInvoice->invoice_number }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Customer') }}</dt>
                    <dd class="mt-0.5">
                        {{ $viewingInvoice->customer?->name ?? __('Walk-in') }}
                        @if ($viewingInvoice->customer?->phone)
                            · {{ $viewingInvoice->customer->phone }}
                        @endif
                    </dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Branch') }}</dt>
                    <dd class="mt-0.5">{{ $viewingInvoice->branch?->name }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Cashier') }}</dt>
                    <dd class="mt-0.5">{{ $viewingInvoice->user?->name }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Payment') }}</dt>
                    <dd class="mt-0.5">{{ $viewingInvoice->payment_method }} · {{ $viewingInvoice->status }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Totals') }}</dt>
                    <dd class="mt-0.5">
                        {{ __('Subtotal') }} EGP {{ number_format((float) $viewingInvoice->subtotal, 2) }}
                        · {{ __('Discount') }} EGP {{ number_format((float) $viewingInvoice->discount_amount, 2) }}
                        · {{ __('Paid') }} EGP {{ number_format((float) $viewingInvoice->paid_amount, 2) }}
                        · <span class="font-semibold">{{ __('Total') }} EGP {{ number_format((float) $viewingInvoice->total, 2) }}</span>
                    </dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Date') }}</dt>
                    <dd class="mt-0.5">{{ $viewingInvoice->created_at?->format('Y-m-d H:i') }}</dd>
                </div>
            </dl>

            <div class="overflow-x-auto rounded-xl border border-slate-200">
                <table class="min-w-full text-sm text-start">
                    <thead class="bg-slate-50 text-slate-600">
                        <tr>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Product') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Unit') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Price') }}</th>
                            <th class="px-3 py-2 text-start font-medium">{{ __('Qty') }}</th>
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
                                <td class="px-3 py-2">{{ number_format((float) $line->unit_price, 2) }}</td>
                                <td class="px-3 py-2">{{ $line->quantity }}</td>
                                <td class="px-3 py-2">{{ number_format((float) $line->line_total, 2) }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>

            <div class="mt-5 flex flex-col gap-2">
                <x-ui.button
                    class="w-full"
                    href="{{ route('invoices.print', ['invoice' => $viewingInvoice, 'auto' => 1]) }}"
                    target="_blank"
                >
                    <x-ui.icon name="printer" class="w-4 h-4" /> {{ __('Print Invoice') }}
                </x-ui.button>
                @if (! $viewingInvoice->is_cancelled && auth()->user()?->hasPermission('allow_invoice_cancel'))
                    <x-ui.button
                        class="w-full"
                        variant="danger"
                        wire:click="cancelInvoice"
                        wire:confirm="{{ __('Cancel this invoice? Applied payments will be refunded to treasury and reversing journal entries will be created.') }}"
                    >
                        {{ __('Cancel Invoice') }}
                    </x-ui.button>
                @endif
            </div>
        @else
            <p class="text-sm text-slate-500">{{ __('Invoice not found.') }}</p>
        @endif
    </x-ui.drawer>
</div>
