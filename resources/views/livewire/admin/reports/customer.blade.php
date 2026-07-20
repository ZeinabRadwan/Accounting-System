<div>
    <x-ui.page-header title="{{ __('Customer Report') }}" subtitle="{{ __('Balances and purchase history') }}">
        <x-ui.button variant="secondary" href="{{ route('admin.reports.index') }}">{{ __('Back') }}</x-ui.button>
    </x-ui.page-header>

    <x-ui.filter-bar class="mb-4">
        <div class="w-full sm:w-40"><x-ui.input type="date" wire:model.live="date_from" /></div>
        <div class="w-full sm:w-40"><x-ui.input type="date" wire:model.live="date_to" /></div>
        <div class="w-full sm:w-44"><x-ui.input type="number" placeholder="{{ __('Branch ID') }}" wire:model.live="branch_id" /></div>
        <div class="w-full sm:w-44"><x-ui.input type="number" placeholder="{{ __('Customer ID') }}" wire:model.live="customer_id" /></div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('Customer') }}</x-ui.th>
            <x-ui.th>{{ __('Phone') }}</x-ui.th>
            <x-ui.th>{{ __('Orders') }}</x-ui.th>
            <x-ui.th>{{ __('Spent') }}</x-ui.th>
            <x-ui.th>{{ __('Balance') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($data as $row)
                <tr class="hover:bg-slate-50/80">
                    <x-ui.td class="font-medium">{{ $row->customer_name }}</x-ui.td>
                    <x-ui.td>{{ $row->customer_phone }}</x-ui.td>
                    <x-ui.td>{{ $row->invoices }}</x-ui.td>
                    <x-ui.td>EGP {{ number_format($row->total ?? 0, 0) }}</x-ui.td>
                    <x-ui.td>EGP {{ number_format($row->remaining ?? 0, 0) }}</x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="5" class="text-center text-slate-500 py-8">{{ __('No data.') }}</x-ui.td>
                </tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.pagination
        :from="$data->firstItem() ?? 0"
        :to="$data->lastItem() ?? 0"
        :total="$data->total()"
        livewire
        :has-pages="$data->hasPages()"
        :on-first-page="$data->onFirstPage()"
        :has-more-pages="$data->hasMorePages()"
    />
</div>
