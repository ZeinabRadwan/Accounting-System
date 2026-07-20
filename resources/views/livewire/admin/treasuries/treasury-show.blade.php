<div>
    <x-ui.page-header :title="$treasury->name" :subtitle="__('Payment method: :method', ['method' => str_replace('_', ' ', $treasury->payment_method)])">
        <x-ui.button variant="secondary" href="{{ route('admin.treasuries.index') }}">
            <x-ui.icon name="chevron-left" class="w-4 h-4" /> {{ __('Back') }}
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Current Balance') }}" :value="'EGP '.number_format((float) $treasury->current_balance, 2)" icon="cash" tone="primary" />
        <x-ui.stat-card label="{{ __('Total Income') }}" :value="'EGP '.number_format($totalIncome, 2)" icon="check" tone="success" />
        <x-ui.stat-card label="{{ __('Total Expenses') }}" :value="'EGP '.number_format($totalExpenses, 2)" icon="receipt-refund" tone="danger" />
        <x-ui.stat-card label="{{ __('Transactions') }}" :value="(string) $transactionsCount" icon="clipboard" tone="slate" />
    </div>

    <div class="mb-4 flex flex-wrap items-center gap-3 text-sm">
        <x-ui.status-badge :status="$treasury->is_active ? 'active' : 'inactive'" />
        <span class="text-slate-500">{{ __('Created') }} {{ $treasury->created_at?->format('Y-m-d') }}</span>
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[200px]">
            <x-ui.search placeholder="{{ __('Search description...') }}" wire:model.live.debounce.300ms="search" />
        </div>
        <div class="w-full sm:w-40">
            <x-ui.select wire:model.live="filter_type">
                <option value="">{{ __('All Types') }}</option>
                <option value="income">{{ __('Income') }}</option>
                <option value="expense">{{ __('Expense') }}</option>
            </x-ui.select>
        </div>
        <div class="w-full sm:w-40">
            <x-ui.input type="date" wire:model.live="date_from" />
        </div>
        <div class="w-full sm:w-40">
            <x-ui.input type="date" wire:model.live="date_to" />
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('Date') }}</x-ui.th>
            <x-ui.th>{{ __('Type') }}</x-ui.th>
            <x-ui.th>{{ __('Amount') }}</x-ui.th>
            <x-ui.th>{{ __('Description') }}</x-ui.th>
            <x-ui.th>{{ __('Created By') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($transactions as $tx)
                <tr class="hover:bg-slate-50/80" wire:key="tx-{{ $tx->id }}">
                    <x-ui.td class="text-slate-500 whitespace-nowrap">{{ $tx->created_at?->format('Y-m-d H:i') }}</x-ui.td>
                    <x-ui.td>
                        <x-ui.badge :variant="$tx->type === \App\Domain\Treasury\Enums\TreasuryTransactionType::Income ? 'success' : 'danger'">
                            {{ $tx->type instanceof \BackedEnum ? $tx->type->value : $tx->type }}
                        </x-ui.badge>
                    </x-ui.td>
                    <x-ui.td class="font-semibold {{ $tx->type === \App\Domain\Treasury\Enums\TreasuryTransactionType::Income ? 'text-success-700' : 'text-danger-700' }}">
                        {{ $tx->type === \App\Domain\Treasury\Enums\TreasuryTransactionType::Income ? '+' : '-' }}
                        EGP {{ number_format((float) $tx->amount, 2) }}
                    </x-ui.td>
                    <x-ui.td>{{ $tx->description ?: '—' }}</x-ui.td>
                    <x-ui.td class="text-slate-500">{{ $tx->creator?->name ?: '—' }}</x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="5" class="text-center text-slate-500 py-8">{{ __('No transactions found.') }}</x-ui.td>
                </tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.pagination
        :from="$transactions->firstItem() ?? 0"
        :to="$transactions->lastItem() ?? 0"
        :total="$transactions->total()"
        livewire
        :has-pages="$transactions->hasPages()"
        :on-first-page="$transactions->onFirstPage()"
        :has-more-pages="$transactions->hasMorePages()"
    />
</div>
