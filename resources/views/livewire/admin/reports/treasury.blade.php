<div>
    <x-ui.page-header title="{{ __('Treasury Report') }}" subtitle="{{ __('Balances, income, and expenses by treasury.') }}">
        <x-ui.button variant="secondary" href="{{ route('admin.treasuries.index') }}">{{ __('Manage Treasuries') }}</x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Total Balance') }}" :value="'EGP '.number_format($totalBalance, 2)" icon="cash" tone="primary" />
        <x-ui.stat-card label="{{ __('Total Income') }}" :value="'EGP '.number_format($totalIncome, 2)" icon="check" tone="success" />
        <x-ui.stat-card label="{{ __('Total Expenses') }}" :value="'EGP '.number_format($totalExpenses, 2)" icon="x" tone="danger" />
    </div>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('Treasury Name') }}</x-ui.th>
            <x-ui.th>{{ __('Payment Method') }}</x-ui.th>
            <x-ui.th>{{ __('Current Balance') }}</x-ui.th>
            <x-ui.th>{{ __('Total Income') }}</x-ui.th>
            <x-ui.th>{{ __('Total Expenses') }}</x-ui.th>
            <x-ui.th>{{ __('Transactions') }}</x-ui.th>
            <x-ui.th>{{ __('Status') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($rows as $row)
                <tr class="hover:bg-slate-50/80" wire:key="tr-{{ $row->id }}">
                    <x-ui.td class="font-medium">{{ $row->name }}</x-ui.td>
                    <x-ui.td>{{ str_replace('_', ' ', $row->payment_method) }}</x-ui.td>
                    <x-ui.td class="font-semibold">EGP {{ number_format($row->current_balance, 2) }}</x-ui.td>
                    <x-ui.td>EGP {{ number_format($row->total_income, 2) }}</x-ui.td>
                    <x-ui.td>EGP {{ number_format($row->total_expenses, 2) }}</x-ui.td>
                    <x-ui.td>{{ $row->transactions_count }}</x-ui.td>
                    <x-ui.td><x-ui.status-badge :status="$row->is_active ? 'active' : 'inactive'" /></x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="7" class="text-center text-slate-500 py-8">{{ __('No treasury data yet.') }}</x-ui.td>
                </tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>
</div>
