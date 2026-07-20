<div>
    <x-ui.page-header title="{{ __('Profit Report') }}" subtitle="{{ __('Margins and net performance') }}">
        <x-ui.button variant="secondary" href="{{ route('admin.reports.index') }}">{{ __('Back') }}</x-ui.button>
    </x-ui.page-header>

    <x-ui.filter-bar class="mb-4">
        <div class="w-full sm:w-40"><x-ui.input type="date" wire:model.live="date_from" /></div>
        <div class="w-full sm:w-40"><x-ui.input type="date" wire:model.live="date_to" /></div>
        <div class="w-full sm:w-44"><x-ui.input type="number" placeholder="{{ __('Branch ID') }}" wire:model.live="branch_id" /></div>
        <div class="w-full sm:w-44"><x-ui.input type="number" placeholder="{{ __('Product ID') }}" wire:model.live="product_id" /></div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('SKU') }}</x-ui.th>
            <x-ui.th>{{ __('Product') }}</x-ui.th>
            <x-ui.th>{{ __('Revenue') }}</x-ui.th>
            <x-ui.th>{{ __('COGS') }}</x-ui.th>
            <x-ui.th>{{ __('Profit') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($data as $row)
                <tr class="hover:bg-slate-50/80">
                    <x-ui.td class="text-slate-500">{{ $row->sku }}</x-ui.td>
                    <x-ui.td class="font-medium">{{ $row->display_name }}</x-ui.td>
                    <x-ui.td>EGP {{ number_format($row->revenue ?? 0, 0) }}</x-ui.td>
                    <x-ui.td>EGP {{ number_format($row->cogs ?? 0, 0) }}</x-ui.td>
                    <x-ui.td class="font-semibold">EGP {{ number_format($row->profit ?? 0, 0) }}</x-ui.td>
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
