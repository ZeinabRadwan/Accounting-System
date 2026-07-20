<div>
    <x-ui.page-header
        title="{{ __('Statement of Account') }}"
        subtitle="{{ $supplier->name }} · {{ $supplier->phone }}"
    >
        <x-ui.button variant="secondary" href="{{ route('admin.suppliers.index') }}">{{ __('Back') }}</x-ui.button>
        <x-ui.button variant="secondary" href="{{ $printUrl }}" target="_blank">{{ __('Print / PDF') }}</x-ui.button>
        <x-ui.button wire:click="openPaymentForm">{{ __('Record Payment') }}</x-ui.button>
    </x-ui.page-header>

    <x-ui.filter-bar class="mb-4">
        <div class="w-full sm:w-44">
            <x-ui.select wire:model.live="branch_id">
                <option value="">{{ __('All Branches') }}</option>
                @foreach ($branches as $branch)
                    <option value="{{ $branch->id }}">{{ $branch->name }}</option>
                @endforeach
            </x-ui.select>
        </div>
        <div class="w-full sm:w-40">
            <x-ui.input type="date" wire:model.live="date_from" />
        </div>
        <div class="w-full sm:w-40">
            <x-ui.input type="date" wire:model.live="date_to" />
        </div>
    </x-ui.filter-bar>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Amount Owed') }}" :value="'EGP '.number_format($statement['current_due'], 2)" icon="clipboard" tone="danger" />
        <x-ui.stat-card label="{{ __('Credit Balance') }}" :value="'EGP '.number_format($statement['credit_balance'], 2)" icon="cash" tone="success" />
        <x-ui.stat-card label="{{ __('Net Balance') }}" :value="'EGP '.number_format($statement['net_balance'], 2)" icon="chart-bar" tone="primary" />
        <x-ui.stat-card label="{{ __('Period Purchases') }}" :value="'EGP '.number_format($statement['period_purchases'], 2)" icon="truck" tone="slate" />
        <x-ui.stat-card label="{{ __('Period Payments') }}" :value="'EGP '.number_format($statement['period_payments'], 2)" icon="cash" tone="success" />
    </div>

    <h2 class="text-sm font-semibold text-slate-800 mb-2">{{ __('Purchase Invoices') }}</h2>
    <x-ui.table class="mb-8">
        <x-ui.table-head>
            <x-ui.th>{{ __('Invoice #') }}</x-ui.th>
            <x-ui.th>{{ __('Date') }}</x-ui.th>
            <x-ui.th>{{ __('Branch') }}</x-ui.th>
            <x-ui.th>{{ __('Total') }}</x-ui.th>
            <x-ui.th>{{ __('Paid') }}</x-ui.th>
            <x-ui.th>{{ __('Remaining') }}</x-ui.th>
            <x-ui.th>{{ __('Status') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($statement['invoices'] as $invoice)
                <tr class="hover:bg-slate-50/80" wire:key="pinv-{{ $invoice->id }}">
                    <x-ui.td>
                        <a class="font-medium text-primary-600 hover:underline" href="{{ route('admin.purchases.index', ['invoice' => $invoice->id]) }}">
                            {{ $invoice->invoice_number }}
                        </a>
                    </x-ui.td>
                    <x-ui.td class="whitespace-nowrap text-slate-500">{{ $invoice->created_at?->format('Y-m-d H:i') }}</x-ui.td>
                    <x-ui.td>{{ $invoice->branch?->name ?? '—' }}</x-ui.td>
                    <x-ui.td>EGP {{ number_format((float) $invoice->total, 2) }}</x-ui.td>
                    <x-ui.td>EGP {{ number_format((float) $invoice->paid_amount, 2) }}</x-ui.td>
                    <x-ui.td class="font-medium">EGP {{ number_format((float) $invoice->remaining_amount, 2) }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$invoice->status ?? 'unpaid'" /></x-ui.td>
                </tr>
            @empty
                <tr><x-ui.td colspan="7" class="text-center text-slate-500 py-6">{{ __('No purchase invoices in this period.') }}</x-ui.td></tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <h2 class="text-sm font-semibold text-slate-800 mb-2">{{ __('Payments to Supplier') }}</h2>
    <x-ui.table class="mb-8">
        <x-ui.table-head>
            <x-ui.th>{{ __('Date & Time') }}</x-ui.th>
            <x-ui.th>{{ __('Amount') }}</x-ui.th>
            <x-ui.th>{{ __('Method') }}</x-ui.th>
            <x-ui.th>{{ __('Treasury') }}</x-ui.th>
            <x-ui.th>{{ __('Applied to') }}</x-ui.th>
            <x-ui.th>{{ __('Notes') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($statement['payments'] as $payment)
                <tr class="hover:bg-slate-50/80" wire:key="spay-{{ $payment->id }}">
                    <x-ui.td class="whitespace-nowrap">{{ $payment->paid_at?->format('Y-m-d H:i:s') }}</x-ui.td>
                    <x-ui.td class="font-medium text-danger-700">EGP {{ number_format((float) $payment->amount, 2) }}</x-ui.td>
                    <x-ui.td>{{ str_replace('_', ' ', ucfirst((string) $payment->payment_method)) }}</x-ui.td>
                    <x-ui.td>{{ $payment->treasury?->name ?? '—' }}</x-ui.td>
                    <x-ui.td class="text-sm">
                        @forelse ($payment->applications as $app)
                            <a class="text-primary-600 hover:underline" href="{{ route('admin.purchases.index', ['invoice' => $app->purchase_invoice_id]) }}">
                                {{ $app->invoice?->invoice_number ?? ('#'.$app->purchase_invoice_id) }}
                            </a>
                            ({{ number_format((float) $app->applied_amount, 2) }})@if (! $loop->last), @endif
                        @empty
                            @if ((float) $payment->credit_portion > 0)
                                <span class="text-success-700">{{ __('Credit / advance') }}</span>
                            @else
                                —
                            @endif
                        @endforelse
                    </x-ui.td>
                    <x-ui.td class="text-slate-500">{{ $payment->notes ?: '—' }}</x-ui.td>
                </tr>
            @empty
                <tr><x-ui.td colspan="6" class="text-center text-slate-500 py-6">{{ __('No payments in this period.') }}</x-ui.td></tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <h2 class="text-sm font-semibold text-slate-800 mb-2">{{ __('Account Ledger') }}</h2>
    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('Date & Time') }}</x-ui.th>
            <x-ui.th>{{ __('Type') }}</x-ui.th>
            <x-ui.th>{{ __('Reference') }}</x-ui.th>
            <x-ui.th>{{ __('Description') }}</x-ui.th>
            <x-ui.th>{{ __('Method') }}</x-ui.th>
            <x-ui.th>{{ __('Treasury') }}</x-ui.th>
            <x-ui.th>{{ __('Debit') }}</x-ui.th>
            <x-ui.th>{{ __('Credit') }}</x-ui.th>
            <x-ui.th>{{ __('Balance') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            <tr class="bg-slate-50/80">
                <x-ui.td colspan="6" class="font-medium text-slate-700">{{ __('Opening balance') }}</x-ui.td>
                <x-ui.td>—</x-ui.td>
                <x-ui.td>—</x-ui.td>
                <x-ui.td class="font-semibold">EGP {{ number_format($statement['opening_balance'], 2) }}</x-ui.td>
            </tr>
            @forelse ($statement['lines'] as $line)
                <tr class="hover:bg-slate-50/80" wire:key="sstmt-{{ $line->sort }}">
                    <x-ui.td class="whitespace-nowrap text-slate-500">{{ $line->date?->format('Y-m-d H:i:s') }}</x-ui.td>
                    <x-ui.td>
                        @php
                            $variant = match ($line->entry_type) {
                                'purchase' => 'primary',
                                'payment', 'pos_payment' => 'success',
                                default => 'slate',
                            };
                            $typeLabel = match ($line->entry_type) {
                                'purchase' => __('Purchase'),
                                'payment' => __('Payment'),
                                'pos_payment' => __('Purchase payment'),
                                default => $line->entry_type,
                            };
                        @endphp
                        <x-ui.badge :variant="$variant">{{ $typeLabel }}</x-ui.badge>
                    </x-ui.td>
                    <x-ui.td>
                        @if (! empty($line->invoice_id))
                            <a class="text-primary-600 hover:underline" href="{{ route('admin.purchases.index', ['invoice' => $line->invoice_id]) }}">{{ $line->reference }}</a>
                        @else
                            {{ $line->reference }}
                        @endif
                    </x-ui.td>
                    <x-ui.td>{{ $line->description }}</x-ui.td>
                    <x-ui.td>{{ $line->payment_method ? str_replace('_', ' ', ucfirst((string) $line->payment_method)) : '—' }}</x-ui.td>
                    <x-ui.td>{{ $line->treasury_name ?: '—' }}</x-ui.td>
                    <x-ui.td>{{ $line->debit > 0 ? 'EGP '.number_format($line->debit, 2) : '—' }}</x-ui.td>
                    <x-ui.td>{{ $line->credit > 0 ? 'EGP '.number_format($line->credit, 2) : '—' }}</x-ui.td>
                    <x-ui.td class="font-semibold {{ $line->balance > 0 ? 'text-danger-600' : ($line->balance < 0 ? 'text-success-600' : 'text-slate-800') }}">
                        EGP {{ number_format($line->balance, 2) }}
                    </x-ui.td>
                </tr>
            @empty
                <tr><x-ui.td colspan="9" class="text-center text-slate-500 py-6">{{ __('No ledger activity in this period.') }}</x-ui.td></tr>
            @endforelse
            <tr class="bg-slate-50/80">
                <x-ui.td colspan="6" class="font-medium text-slate-700">{{ __('Closing balance') }}</x-ui.td>
                <x-ui.td>—</x-ui.td>
                <x-ui.td>—</x-ui.td>
                <x-ui.td class="font-semibold {{ $statement['closing_balance'] > 0 ? 'text-danger-600' : ($statement['closing_balance'] < 0 ? 'text-success-600' : '') }}">
                    EGP {{ number_format($statement['closing_balance'], 2) }}
                </x-ui.td>
            </tr>
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.modal name="record-supplier-payment" title="{{ __('Record Payment') }}" show-property="showPaymentForm" maxWidth="lg">
        <div class="space-y-4">
            <x-ui.input label="{{ __('Amount') }}" type="number" step="0.01" min="0.01" wire:model="pay_amount" :error="$errors->first('pay_amount')" />
            <x-ui.input label="{{ __('Date & Time') }}" type="datetime-local" wire:model="pay_paid_at" :error="$errors->first('pay_paid_at')" />
            <x-ui.select label="{{ __('Payment Method') }}" wire:model.live="pay_payment_method" :error="$errors->first('pay_payment_method')">
                @foreach ($paymentMethods as $method)
                    <option value="{{ $method->value }}">{{ $method->label() }}</option>
                @endforeach
            </x-ui.select>
            <x-ui.select label="{{ __('Treasury / Cash Account') }}" wire:model="pay_treasury_id" :error="$errors->first('pay_treasury_id')">
                <option value="">{{ __('Select treasury') }}</option>
                @foreach ($treasuries as $treasury)
                    <option value="{{ $treasury->id }}">{{ $treasury->name }} (EGP {{ number_format((float) $treasury->current_balance, 2) }})</option>
                @endforeach
            </x-ui.select>
            <x-ui.select label="{{ __('Apply payment') }}" wire:model.live="pay_apply_mode">
                <option value="fifo">{{ __('FIFO — oldest unpaid invoices first') }}</option>
                <option value="invoice">{{ __('Specific invoice') }}</option>
            </x-ui.select>
            @if ($pay_apply_mode === 'invoice')
                <x-ui.select label="{{ __('Purchase Invoice') }}" wire:model="pay_purchase_invoice_id" :error="$errors->first('pay_purchase_invoice_id')">
                    <option value="">{{ __('Select invoice') }}</option>
                    @foreach ($openInvoices as $inv)
                        <option value="{{ $inv->id }}">{{ $inv->invoice_number }} — {{ __('Remaining') }} EGP {{ number_format((float) $inv->remaining_amount, 2) }}</option>
                    @endforeach
                </x-ui.select>
            @endif
            <label class="flex items-start gap-2 text-sm text-slate-700">
                <input type="checkbox" class="mt-1 rounded border-slate-300" wire:model="pay_allow_negative_treasury">
                <span>{{ __('Allow treasury balance to go negative (override)') }}</span>
            </label>
            <x-ui.textarea label="{{ __('Notes') }}" wire:model="pay_notes" :error="$errors->first('pay_notes')" />
            <p class="text-xs text-slate-500">{{ __('Amounts above outstanding purchase balances are saved as supplier credit / advance.') }}</p>
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="closePaymentForm">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button wire:click="savePayment" wire:loading.attr="disabled">{{ __('Save Payment') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</div>
