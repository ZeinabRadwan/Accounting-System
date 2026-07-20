<div>
    <x-ui.page-header title="{{ __('Client Statement') }}" subtitle="{{ __('Account ledger for a selected customer.') }}">
        <x-ui.button variant="secondary" href="{{ route('admin.reports.index') }}">{{ __('Back') }}</x-ui.button>
        @if ($customer_id)
            <x-ui.button href="{{ route('admin.customers.statement', $customer_id) }}">{{ __('Full Statement & Payments') }}</x-ui.button>
        @endif
    </x-ui.page-header>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[220px] relative">
            @if ($customer_id)
                <div class="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
                    <div>
                        <p class="font-medium text-slate-900">{{ $customer_name }}</p>
                        <p class="text-slate-500">{{ $customer_phone }}</p>
                    </div>
                    <x-ui.button size="sm" variant="ghost" wire:click="clearCustomer">{{ __('Clear') }}</x-ui.button>
                </div>
            @else
                <x-ui.search placeholder="{{ __('Search customer name or phone...') }}" wire:model.live.debounce.300ms="customer_search" />
                @if (! empty($customer_results))
                    <div class="absolute z-20 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-soft py-1 max-h-56 overflow-y-auto">
                        @foreach ($customer_results as $customer)
                            <button
                                type="button"
                                class="w-full text-start px-3 py-2 text-sm hover:bg-slate-50"
                                wire:click="selectCustomer({{ $customer['id'] }})"
                            >
                                <span class="font-medium text-slate-900">{{ $customer['name'] }}</span>
                                <span class="text-slate-500"> · {{ $customer['phone'] }}</span>
                            </button>
                        @endforeach
                    </div>
                @endif
            @endif
        </div>
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

    @if (! $customer_id)
        <x-ui.card>
            <x-ui.empty-state
                title="{{ __('Select a customer') }}"
                description="{{ __('Search by name or phone to generate the client statement.') }}"
                icon="user-group"
            />
        </x-ui.card>
    @else
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mb-6">
            <x-ui.stat-card label="{{ __('Opening Balance') }}" :value="'EGP '.number_format($statement['opening_balance'], 2)" icon="clipboard" tone="slate" />
            <x-ui.stat-card label="{{ __('Period Sales') }}" :value="'EGP '.number_format($statement['period_sales'], 2)" icon="shopping-cart" tone="primary" />
            <x-ui.stat-card label="{{ __('Payments') }}" :value="'EGP '.number_format($statement['period_payments'], 2)" icon="cash" tone="success" />
            <x-ui.stat-card label="{{ __('Returns') }}" :value="'EGP '.number_format($statement['period_returns'], 2)" icon="receipt-refund" tone="warning" />
            <x-ui.stat-card label="{{ __('Closing Balance') }}" :value="'EGP '.number_format($statement['closing_balance'], 2)" icon="chart-bar" tone="danger" />
        </div>

        <div class="mb-4 text-sm text-slate-500">
            {{ __('Current due (open invoices):') }}
            <span class="font-semibold text-slate-800">EGP {{ number_format($statement['current_due'], 2) }}</span>
        </div>

        <x-ui.table>
            <x-ui.table-head>
                <x-ui.th>{{ __('Date') }}</x-ui.th>
                <x-ui.th>{{ __('Type') }}</x-ui.th>
                <x-ui.th>{{ __('Reference') }}</x-ui.th>
                <x-ui.th>{{ __('Description') }}</x-ui.th>
                <x-ui.th>{{ __('Debit') }}</x-ui.th>
                <x-ui.th>{{ __('Credit') }}</x-ui.th>
                <x-ui.th>{{ __('Balance') }}</x-ui.th>
            </x-ui.table-head>
            <x-ui.table-body>
                <tr class="bg-slate-50/80">
                    <x-ui.td colspan="4" class="font-medium text-slate-700">{{ __('Opening balance') }}</x-ui.td>
                    <x-ui.td>—</x-ui.td>
                    <x-ui.td>—</x-ui.td>
                    <x-ui.td class="font-semibold">EGP {{ number_format($statement['opening_balance'], 2) }}</x-ui.td>
                </tr>

                @forelse ($statement['lines'] as $line)
                    <tr class="hover:bg-slate-50/80" wire:key="stmt-{{ $line->sort }}">
                        <x-ui.td class="text-slate-500 whitespace-nowrap">{{ $line->date?->format('Y-m-d H:i') }}</x-ui.td>
                        <x-ui.td>
                            @php
                                $variant = match ($line->entry_type) {
                                    'sale' => 'primary',
                                    'payment', 'pos_payment' => 'success',
                                    'return' => 'warning',
                                    default => 'slate',
                                };
                            @endphp
                            <x-ui.badge :variant="$variant">{{ $line->entry_type }}</x-ui.badge>
                        </x-ui.td>
                        <x-ui.td class="font-medium">
                            @if (! empty($line->invoice_id))
                                <a class="text-primary-600 hover:underline" href="{{ route('admin.sales.index', ['invoice' => $line->invoice_id]) }}">
                                    {{ $line->reference }}
                                </a>
                            @else
                                {{ $line->reference }}
                            @endif
                        </x-ui.td>
                        <x-ui.td>{{ $line->description }}</x-ui.td>
                        <x-ui.td>{{ $line->debit > 0 ? 'EGP '.number_format($line->debit, 2) : '—' }}</x-ui.td>
                        <x-ui.td>{{ $line->credit > 0 ? 'EGP '.number_format($line->credit, 2) : '—' }}</x-ui.td>
                        <x-ui.td class="font-semibold {{ ($line->balance ?? 0) > 0 ? 'text-danger-600' : (($line->balance ?? 0) < 0 ? 'text-success-600' : '') }}">
                            EGP {{ number_format($line->balance, 2) }}
                        </x-ui.td>
                    </tr>
                @empty
                    <tr>
                        <x-ui.td colspan="7" class="text-center text-slate-500 py-8">{{ __('No transactions in this period.') }}</x-ui.td>
                    </tr>
                @endforelse

                <tr class="bg-slate-50/80 border-t border-slate-200">
                    <x-ui.td colspan="4" class="font-semibold text-slate-800">{{ __('Closing balance') }}</x-ui.td>
                    <x-ui.td class="font-medium">EGP {{ number_format($statement['period_sales'], 2) }}</x-ui.td>
                    <x-ui.td class="font-medium">EGP {{ number_format($statement['period_payments'] + $statement['period_returns'], 2) }}</x-ui.td>
                    <x-ui.td class="font-semibold text-slate-900">EGP {{ number_format($statement['closing_balance'], 2) }}</x-ui.td>
                </tr>
            </x-ui.table-body>
        </x-ui.table>
    @endif
</div>
